import path from 'path';
import fs from 'fs';
import winPath from './winPath';

export default function remaxVersion() {
  const remaxPackagePath: string = winPath(path.join(process.cwd(), 'node_modules', 'remax', 'package.json'));
  if (fs.existsSync(remaxPackagePath)) {
    const remaxPkgConfig = require(remaxPackagePath);
    return remaxPkgConfig.version;
  }

  return '';
}
