import { tap, expect } from '@pushrocks/tapbundle';

import * as path from 'path';
import * as smartfile from '@pushrocks/smartfile';
import * as smartrequest from '@pushrocks/smartrequest';

const testPlugins = {
  path,
  smartfile,
  smartrequest,
};

const testPaths = {
  nogitDir: testPlugins.path.join(__dirname, '../.nogit/'),
  remoteDir: testPlugins.path.join(__dirname, '../.nogit/remote'),
};

import * as smartarchive from '../ts/index';

tap.preTask('should prepare .nogit dir', async () => {
  await testPlugins.smartfile.fs.ensureDir(testPaths.remoteDir);
});

tap.preTask('should prepare downloads', async (tools) => {
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

tap.test('should extract existing files on disk', async () => {
  const testSmartarchive = new smartarchive.SmartArchive();
  await testSmartarchive.extractArchiveFromFilePathToFs(
    testPlugins.path.join(testPaths.nogitDir, 'test.tgz'),
    testPlugins.path.join(testPaths.nogitDir)
  );
});

tap.test('should download a package from the registry', async () => {
  const testSmartarchive = new smartarchive.SmartArchive();
  await testSmartarchive.extractArchiveFromUrlToFs(
    'https://verdaccio.lossless.one/@pushrocks%2fsmartfile/-/smartfile-7.0.11.tgz',
    testPaths.remoteDir
  );
});

tap.test('should extract a package using tarStream', async (tools) => {
  const done = tools.defer();
  const testSmartarchive = new smartarchive.SmartArchive();
  const testTgzBuffer = (
    await testPlugins.smartfile.Smartfile.fromFilePath(
      testPlugins.path.join(testPaths.nogitDir, 'test.tgz')
    )
  ).contentBuffer;
  const extractionFileObservable = await testSmartarchive.extractArchiveFromBufferToObservable(
    testTgzBuffer
  );
  const subscription = extractionFileObservable.subscribe(file => {
    console.log(file.path);
  });
  await tools.delayFor(2000);
  done.resolve();
  await done.promise;
});

tap.test('should extract a file from url to replaySubject', async (tools) => {
  const done = tools.defer();
  const testSmartarchive = new smartarchive.SmartArchive();
  const extractionFileObservable = await testSmartarchive.extractArchiveFromUrlToObservable('https://verdaccio.lossless.one/@pushrocks%2fwebsetup/-/websetup-2.0.14.tgz');
  const subscription = extractionFileObservable.subscribe(file => {
    console.log(file.path);
  });
  await tools.delayFor(2000);
  done.resolve();
  await done.promise;
});

tap.start();
