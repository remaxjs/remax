import path from 'path';
import { Options, EntryInfo, Entries } from '@remax/types';
import { slash } from '@remax/shared';
import { searchJSFile } from './build/utils/paths';
import API from './API';
import getAppConfig from './build/utils/getAppConfig';

const NATIVE_COMPONENT_OUTPUT_SUFFIX = '_remax_com';

export function getPages(options: Options, api: API): EntryInfo[] {
  const appConfig = getAppConfig(options, api);
  const ROOT_DIR = path.join(options.cwd, options.rootDir);
  const subPackages = appConfig.subPackages || appConfig.subpackages || [];
  const nativeComponents = appConfig.nativeComponents || {};

  if (!appConfig.pages || appConfig.pages.length === 0) {
    throw new Error('app.config.js|ts 并未配置页面参数');
  }

  // 页面
  const pages: EntryInfo[] = appConfig.pages.reduce(
    (ret: EntryInfo[], page: string) => [
      ...ret,
      {
        name: page,
        filename: slash(searchJSFile(path.join(ROOT_DIR, page), options.target!)),
      },
    ],
    []
  );

  // 自定义组件作为page进行打包
  // isComponent进行标识 做差异化处理
  nativeComponents.forEach((pageDir: string) => {
    const newPageDir = `${pageDir}${NATIVE_COMPONENT_OUTPUT_SUFFIX}`;
    const originFilename = slash(searchJSFile(path.join(ROOT_DIR, pageDir), options.target!));
    const ext = originFilename.substring(originFilename.lastIndexOf('.') + 1);

    pages.push({
      name: newPageDir,
      filename: `${slash(path.join(ROOT_DIR, newPageDir))}${ext ? `.${ext}` : ''}`,
      originFilename: slash(searchJSFile(path.join(ROOT_DIR, pageDir), options.target!)),
      isComponent: true,
    });
  });

  // 分包页面
  subPackages.forEach((pack: { pages: string[]; root: string }) => {
    pages.push(
      ...pack.pages.reduce(
        (ret: EntryInfo[], page) => [
          ...ret,
          {
            name: slash(path.join(pack.root, page)),
            filename: slash(searchJSFile(path.join(ROOT_DIR, pack.root, page), options.target!)),
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
      filename: slash(searchJSFile(path.join(options.cwd, options.rootDir, 'app'), options.target!)),
    },
    pages: getPages(options, api),
  };

  return entries;
}
