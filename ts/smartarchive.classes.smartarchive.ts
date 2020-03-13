import * as plugins from './smartarchive.plugins';

export class SmartArchive {
  public archiveDirectory: string;
  constructor() {}

  public extractArchiveFromFilePath(filePathArg: string, targetDir: string) {
    const parsedPath = plugins.path.parse(filePathArg);
    switch (parsedPath.ext) {
      
    }
  };
}