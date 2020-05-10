import path from 'path';
import { Options, EntryInfo, AppConfig, Entries } from '@remax/types';
import readManifest from './readManifest';
import { appConfigFile, searchJSFile } from './build/utils/paths';
import winPath from './winPath';

export const getAppConfig = (options: Options) => {
  return readManifest(appConfigFile(options), options.target!, true) as AppConfig;
};

export function getPages(options: Options): EntryInfo[] {
  const appConfig = getAppConfig(options);
  const ROOT_DIR = path.join(options.cwd, options.rootDir);
  const subPackages = appConfig.subPackages || appConfig.subpackages || [];

  if (!appConfig.pages || appConfig.pages.length === 0) {
    throw new Error('app.config.js|ts 并未配置页面参数');
  }

  // 页面
  const pages = appConfig.pages.reduce(
    (ret: EntryInfo[], page: string) => [
      ...ret,
      {
        name: page,
        filename: winPath(searchJSFile(path.join(ROOT_DIR, page))),
      },
    ],
    []
  );

  // 分包页面
  subPackages.forEach((pack: { pages: string[]; root: string }) => {
    pages.push(
      ...pack.pages.reduce(
        (ret: EntryInfo[], page) => [
          ...ret,
          {
            name: winPath(path.join(pack.root, page)),
            filename: winPath(searchJSFile(path.join(ROOT_DIR, pack.root, page))),
          },
        ],
        []
      )
    );
  });

  return pages.filter(page => !!page.filename);
}

export default function getEntries(options: Options): Entries {
  const entries: Entries = {
    app: {
      name: 'app',
      filename: winPath(searchJSFile(path.join(options.cwd, options.rootDir, 'app'))),
    },
    pages: getPages(options),
  };

  return entries;
}
