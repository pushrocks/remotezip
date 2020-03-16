import { tap, expect } from '@pushrocks/tapbundle';

import * as path from 'path';
import * as smartfile from '@pushrocks/smartfile';
import * as smartrequest from '@pushrocks/smartrequest';

const testPlugins = {
  path,
  smartfile,
  smartrequest
};

const testPaths = {
  nogitDir: testPlugins.path.join(process.cwd(), '.nogit/'),
  remoteDir: testPlugins.path.join(process.cwd(), '.nogit/remote')
};

import * as smartarchive from '../ts/index';

tap.preTask('should prepare .nogit dir', async () => {
  await testPlugins.smartfile.fs.ensureDir(testPaths.nogitDir);
  await testPlugins.smartfile.fs.ensureDir(testPaths.remoteDir);
});

tap.preTask('should prepare downloads', async tools => {
  const downloadedFile: Buffer = (
    await testPlugins.smartrequest.getBinary(
      'https://verdaccio.lossless.one/@pushrocks%2fwebsetup/-/websetup-2.0.14.tgz'
    )
  ).body;
  await testPlugins.smartfile.memory.toFs(
    downloadedFile,
    testPlugins.path.join(testPaths.nogitDir, 'test.tgz')
  );
});

tap.test('should extract files on disk', async () => {
  const testSmartarchive = new smartarchive.SmartArchive();
  await testSmartarchive.extractArchiveFromFilePath(
    testPlugins.path.join(testPaths.nogitDir, 'test.tgz'),
    testPlugins.path.join(testPaths.nogitDir)
  );
});

tap.test('should download a package from the registry', async () => {
  const testSmartarchive = new smartarchive.SmartArchive();
  await testSmartarchive.extractArchiveFromUrl('https://verdaccio.lossless.one/@pushrocks%2fsmartfile/-/smartfile-7.0.11.tgz', testPaths.remoteDir);
  
});

tap.start();
