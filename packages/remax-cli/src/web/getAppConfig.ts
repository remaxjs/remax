import fs from 'fs';
import path from 'path';
import { RemaxOptions, AppConfig } from 'remax-types';
import readManifest from '../readManifest';

export function searchFile(file: string) {
  const exts = ['ts', 'tsx', 'js', 'jsx'];

  for (const e of exts) {
    const extFile = file + '.' + e;
    if (fs.existsSync(extFile)) {
      return extFile;
    }
  }

  return '';
}

export const getAppConfig = (options: RemaxOptions) => {
  const appConfigPath: string = path.join(options.cwd, options.rootDir, 'app.config');

  return readManifest(appConfigPath, 'web', true) as AppConfig;
};

export default getAppConfig;
