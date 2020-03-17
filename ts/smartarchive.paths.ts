import * as plugins from './smartarchive.plugins';

export const packageDir = plugins.path.join(__dirname, '../');
export const nogitDir = plugins.path.join(__dirname, './.nogit');
plugins.smartfile.fs.ensureDir(nogitDir);
