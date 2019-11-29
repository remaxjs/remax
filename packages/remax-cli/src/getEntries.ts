import fs from 'fs';
import path from 'path';
import { RemaxOptions } from './getConfig';
import readManifest from './readManifest';
import { Adapter } from './build/adapters';
import { Context } from './types';

interface AppConfig {
  pages: string[];
  subpackages?: Array<{
    root: string;
    pages: string[];
  }>;
  subPackages?: Array<{
    root: string;
    pages: string[];
  }>;
  tabBar?: {
    items: Array<{ icon: string; activeIcon: string }>;
    list: Array<{ iconPath: string; selectedIconPath: string }>;
  };
  plugins?: {
    [key: string]: {
      version: string;
      provider: string;
    };
  };
}

interface Entries {
  pageConfigPath: string[];
  app: string;
  pages: Array<{ path: string; file: string }>;
  images: string[];
}

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
      throw new Error(
        'app.config.js `pages` field should not be undefined or empty object'
      );
    }
  } else {
    pages = context.pages.map(p => p.path);
    subpackages = context.app.subpackages || context.app.subPackages || [];
  }

  const entries: Entries = {
    pageConfigPath: [],
    app: searchFile(path.join(options.cwd, options.rootDir, 'app')),
    pages: [],
    images: [],
  };

  entries.pages = pages.reduce(
    (ret: Array<{ path: string; file: string }>, page: string) => {
      return [
        ...ret,
        {
          path: page,
          file: searchFile(path.join(options.cwd, options.rootDir, page)),
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
              path.join(options.cwd, options.rootDir, pack.root, page)
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
