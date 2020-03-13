import { tap, expect } from '@pushrocks/tapbundle';
import * as smartrequest from '@pushrocks/smartrequest';

tap.test('should prepare downloads', async (tools) => {
  const downLoadedFile: Buffer = (await smartrequest.getBinary('https://verdaccio.lossless.one/level/-/level-6.0.1.tgz')).body;
  console.log(downLoadedFile);
});

tap.test('should extract files on disk', async () => {});

tap.start();
