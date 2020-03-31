import fs from 'fs';
import path from 'path';
import { RemaxOptions, AppConfig, Entries } from 'remax-types';
import readManifest from './readManifest';
import { Platform } from './build/platform';

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

export const getAppConfig = (options: RemaxOptions, target: Platform) => {
  const appConfigPath: string = path.join(options.cwd, options.rootDir, 'app.config');

  return readManifest(appConfigPath, target, true) as AppConfig;
};

export default function getEntries(options: RemaxOptions, target: Platform): Entries {
  const appConfig = getAppConfig(options, target);
  const ROOT_DIR = path.join(options.cwd, options.rootDir);
  const pages = appConfig.pages;
  const subPackages = appConfig.subPackages || appConfig.subpackages || [];

  if (!pages || pages.length === 0) {
    throw new Error('app.config.js|ts 并未配置页面参数');
  }

  const entries: Entries = {
    app: searchFile(path.join(options.cwd, options.rootDir, 'app')),
    pages: [],
  };

  // 页面
  entries.pages = pages.reduce(
    (ret: string[], page: string) => [...ret, searchFile(path.join(ROOT_DIR, page))].filter(page => !!page),
    []
  );

  // 分包页面
  subPackages.forEach((pack: { pages: string[]; root: string }) => {
    entries.pages = entries.pages.concat(
      pack.pages.reduce(
        (ret: string[], page) => [...ret, searchFile(path.join(ROOT_DIR, pack.root, page))].filter(page => !!page),
        []
      )
    );
  });

  return entries;
}
