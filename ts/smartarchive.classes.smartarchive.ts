import * as plugins from './smartarchive.plugins';
import * as paths from './smartarchive.paths';
import { extract } from 'tar';

export class SmartArchive {
  public archiveDirectory: string;
  constructor() {}

  /**
   * extracts an archive from a given url
   */
  public async extractArchiveFromUrlToFs(urlArg: string, targetDir: string) {
    const parsedPath = plugins.path.parse(urlArg);
    const uniqueFileName = plugins.smartunique.uni() + parsedPath.ext;
    plugins.smartfile.fs.ensureDir(paths.nogitDir); // TODO: totally remove caching needs
    const downloadPath = plugins.path.join(paths.nogitDir, uniqueFileName);
    const downloadedArchive = (await plugins.smartrequest.getBinary(urlArg)).body;
    await plugins.smartfile.memory.toFs(downloadedArchive, downloadPath);
    await this.extractArchiveFromFilePathToFs(downloadPath, targetDir);
    await plugins.smartfile.fs.remove(downloadPath);
  }

  /**
   * extracts an archive from a given filePath on disk
   * @param filePathArg
   * @param targetDir
   */
  public async extractArchiveFromFilePathToFs(filePathArg: string, targetDir: string) {
    const parsedPath = plugins.path.parse(filePathArg);
    switch (parsedPath.ext) {
      case '.tgz':
        console.log(`detected a .tgz archive`);
        await plugins.tar.extract({
          file: filePathArg,
          cwd: targetDir,
        });
        break;
    }
  }

  /**
   * extracts to Observable
   */
  public async extractArchiveFromBufferToObservable(
    bufferArg: Buffer
  ): Promise<plugins.smartrx.rxjs.ReplaySubject<plugins.smartfile.Smartfile>> {
    const intake = new plugins.streamfunction.Intake();
    const replaySubject = new plugins.smartrx.rxjs.ReplaySubject<plugins.smartfile.Smartfile>();
    const readableStream = intake.getReadableStream();
    const extractPipeStop = plugins.tarStream.extract();
    extractPipeStop.on('entry', (header, stream, next) => {
      let fileBuffer: Buffer;
      stream.on('data', (chunkArg) => {
        if (!fileBuffer) {
          fileBuffer = chunkArg;
        } else {
          fileBuffer = Buffer.concat([fileBuffer, chunkArg]);
        }
      });
      stream.on('end', () => {
        replaySubject.next(
          new plugins.smartfile.Smartfile({
            contentBuffer: fileBuffer,
            path: header.name,
          })
        );
        next();
      });
      stream.resume();
    });
    extractPipeStop.on('finish', () => {
      replaySubject.complete();
    });
    // lets run the stream
    readableStream
      .pipe(plugins.gunzipMaybe())
      .pipe(extractPipeStop);
    intake.pushData(bufferArg);
    intake.signalEnd();
    return replaySubject;
  }

  /**
   * extracts to Observable
   */
   public async extractArchiveFromUrlToObservable(
    urlArg: string
  ): Promise<plugins.smartrx.rxjs.ReplaySubject<plugins.smartfile.Smartfile>> {
    const response = await plugins.smartrequest.getBinary(urlArg);
    const replaySubject = this.extractArchiveFromBufferToObservable(response.body);
    return replaySubject;
  }
}
