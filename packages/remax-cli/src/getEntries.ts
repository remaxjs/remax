import fs from 'fs';
import path from 'path';
import { RemaxOptions } from './getConfig';
import readManifest from './readManifest';
import { Adapter } from './build/adapters';
import { Context } from './types';
import { output } from './build/utils/output';

interface Plugins {
  [key: string]: {
    version: string;
    provider: string;
  };
}

interface AppConfig {
  pages: string[];
  subpackages?: Array<{
    root: string;
    pages: string[];
    plugins?: Plugins;
  }>;
  subPackages?: Array<{
    root: string;
    pages: string[];
    plugins?: Plugins;
  }>;
  tabBar?: {
    items: Array<{ icon: string; activeIcon: string }>;
    list: Array<{ iconPath: string; selectedIconPath: string }>;
  };
  plugins?: Plugins;
}

interface Entries {
  pageConfigPath: string[];
  app: string;
  pages: Array<{ path: string; file: string }>;
  images: string[];
}

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

export const getAppConfig = (options: RemaxOptions, adapter: Adapter) => {
  const appConfigPath: string = path.join(
    options.cwd,
    options.rootDir,
    'app.config'
  );

  return readManifest(appConfigPath, adapter.name, true) as AppConfig;
};

export default function getEntries(
  options: RemaxOptions,
  adapter: Adapter,
  context?: Context
): Entries {
  let pages: any = [];
  let subpackages: any = [];
  let images: string[] = [];

  if (!context) {
    const appConfig = getAppConfig(options, adapter);
    pages = appConfig.pages;
    subpackages = appConfig.subpackages || appConfig.subPackages || [];
    images = adapter.getIcons(appConfig);

    if (!pages || pages.length === 0) {
      throw new Error('app.config.js 并未配置页面参数');
    }
  } else {
    pages = context.pages.map(p => p.path);
    subpackages = context.app.subpackages || context.app.subPackages || [];
  }

  const entries: Entries = {
    pageConfigPath: [],
    app: searchFile(path.join(options.cwd, options.rootDir, 'app'), true),
    pages: [],
    images: [],
  };

  entries.pages = pages.reduce(
    (ret: Array<{ path: string; file: string }>, page: string) => {
      return [
        ...ret,
        {
          path: page,
          file: searchFile(path.join(options.cwd, options.rootDir, page), true),
        },
      ].filter(page => page && page.file);
    },
    []
  );

  subpackages.forEach((pack: { pages: string[]; root: string }) => {
    entries.pages = entries.pages.concat(
      pack.pages.reduce((ret: Array<{ path: string; file: string }>, page) => {
        return [
          ...ret,
          {
            path: page,
            file: searchFile(
              path.join(options.cwd, options.rootDir, pack.root, page),
              true
            ),
          },
        ].filter(page => page && page.file);
      }, [])
    );
  });

  entries.images = images
    .filter(i => i)
    .reduce<string[]>((paths, image) => {
      return [...paths, path.join(options.cwd, options.rootDir, image)];
    }, []);

  return entries;
}
