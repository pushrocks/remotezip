import * as plugins from './smartarchive.plugins';
import * as paths from './smartarchive.paths';

export class SmartArchive {
  public archiveDirectory: string;
  constructor() {}

  /**
   * extracts an archive from a given url
   */
  public async extractArchiveFromUrl(urlArg: string, targetDir: string) {
    const parsedPath = plugins.path.parse(urlArg);
    const uniqueFileName = plugins.smartunique.uni() + parsedPath.ext;
    const downloadPath = plugins.path.join(paths.nogitDir, uniqueFileName);
    const downloadedArchive = (await plugins.smartrequest.getBinary(urlArg)).body;
    await plugins.smartfile.memory.toFs(downloadedArchive, downloadPath);
    await this.extractArchiveFromFilePath(downloadPath, targetDir);
    await plugins.smartfile.fs.remove(downloadPath);
  }

  /**
   * extracts an archive from a given filePath on disk
   * @param filePathArg
   * @param targetDir
   */
  public async extractArchiveFromFilePath(filePathArg: string, targetDir: string) {
    const parsedPath = plugins.path.parse(filePathArg);
    switch (parsedPath.ext) {
      case '.tgz':
        console.log(`detected a .tgz archive`);
        await plugins.tar.extract({
          file: filePathArg,
          cwd: targetDir
        });
        break;
    }
  }
}
