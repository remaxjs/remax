import path from 'path';
import { Options, EntryInfo, Entries } from '@remax/types';
import { slash } from '@remax/shared';
import { searchJSFile } from './build/utils/paths';
import API from './API';
import getAppConfig from './build/utils/getAppConfig';

export function getPages(options: Options, api: API): EntryInfo[] {
  const appConfig = getAppConfig(options, api);
  const ROOT_DIR = path.join(options.cwd, options.rootDir);
  const subPackages = appConfig.subPackages || appConfig.subpackages || [];

  if (!appConfig.pages || appConfig.pages.length === 0) {
    throw new Error('app.config.js|ts 并未配置页面参数');
  }

  // 页面
  const pages: Array<{ name: string; filename: string }> = appConfig.pages.reduce(
    (ret: EntryInfo[], page: string) => [
      ...ret,
      {
        name: page,
        filename: slash(searchJSFile(path.join(ROOT_DIR, page))),
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
            name: slash(path.join(pack.root, page)),
            filename: slash(searchJSFile(path.join(ROOT_DIR, pack.root, page))),
          },
        ],
        []
      )
    );
  });

  return pages.filter(page => !!page.filename);
}

export default function getEntries(options: Options, api: API): Entries {
  const entries: Entries = {
    app: {
      name: 'app',
      filename: slash(searchJSFile(path.join(options.cwd, options.rootDir, 'app'))),
    },
    pages: getPages(options, api),
  };

  return entries;
}
