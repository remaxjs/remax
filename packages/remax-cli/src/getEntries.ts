import fs from 'fs';
import path from 'path';
import API from './API';
import { RemaxOptions, AppConfig, Entries } from 'remax-types';
import readManifest from './readManifest';
import { Context } from './types';
import { output } from './build/utils/output';

export function searchFile(file: string, strict?: boolean) {
  const exts = ['ts', 'tsx', 'js', 'jsx'];

  for (const e of exts) {
    const extFile = file + '.' + e;
    if (fs.existsSync(extFile)) {
      return extFile;
    }
  }

  if (strict) {
    output(`\n🚨 [配置]: ${file} 不存在，请检查你的配置文件`, 'red');
  }

  return '';
}

export const getAppConfig = (options: RemaxOptions) => {
  const appConfigPath: string = path.join(
    options.cwd,
    options.rootDir,
    'app.config'
  );

  return readManifest(appConfigPath, API.adapter.name, true) as AppConfig;
};

// TODO: getEntries 处理 context 的逻辑要去掉
export default function getEntries(
  options: RemaxOptions,
  context?: Context
): Entries {
  let pages: any = [];
  let subpackages: any = [];

  const appConfig = getAppConfig(options);

  if (context) {
    pages = context?.pages?.map(p => p.path) || [];
    subpackages = context?.app?.subpackages || context?.app?.subPackages || [];
  }

  const entries: Entries = {
    app: searchFile(path.join(options.cwd, options.rootDir, 'app'), true),
    pages: [],
    images: [],
  };

  entries.pages = pages.reduce(
    (ret: Array<{ path: string; file: string }>, page: string) => {
      return [
        ...ret,
        searchFile(path.join(options.cwd, options.rootDir, page), true),
      ].filter(page => !!page);
    },
    []
  );

  subpackages.forEach((pack: { pages: string[]; root: string }) => {
    entries.pages = entries.pages.concat(
      pack.pages.reduce((ret: string[], page) => {
        return [
          ...ret,
          searchFile(
            path.join(options.cwd, options.rootDir, pack.root, page),
            true
          ),
        ].filter(page => !!page);
      }, [])
    );
  });

  return API.getEntries(entries, appConfig, options);
}
