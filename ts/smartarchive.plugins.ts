// node native scope
import path from 'path';

export { path };

// @pushrocks scope
import * as smartfile from '@pushrocks/smartfile';
import * as smartpath from '@pushrocks/smartpath';
import * as smartrequest from '@pushrocks/smartrequest';
import * as smartunique from '@pushrocks/smartunique';
import * as streamfunction from '@pushrocks/streamfunction';
import * as smartrx from '@pushrocks/smartrx';

export { smartfile, smartpath, smartrequest, smartunique, streamfunction, smartrx };

// third party scope
import gunzipMaybe from 'gunzip-maybe';
import tar from 'tar';
import tarStream from 'tar-stream';

export { gunzipMaybe, tar, tarStream };
