import fs from 'fs';
import path from 'path';
import { RemaxOptions } from './getConfig';
import readManifest from './readManifest';
import { Adapter } from './build/adapters';
import { Context } from './types';

interface AppConfig {
  pages: string[];
  subpackages: Array<{
    root: string;
    pages: string[];
  }>;
  tabBar?: {
    items: Array<{ icon: string; activeIcon: string }>;
    list: Array<{ iconPath: string; selectedIconPath: string }>;
  };
}

interface Entries {
  pageConfigPath: string[];
  app: string;
  pages: Array<{ path: string; file: string }>;
  images: string[];
}

function searchFile(file: string, ext?: string) {
  const exts = [ext, 'ts', 'tsx', 'js', 'jsx'].filter(e => e);

  for (const e of exts) {
    const extFile = file + '.' + e;
    if (fs.existsSync(extFile)) {
      return extFile;
    }

    if (e === ext) {
      return '';
    }
  }

  return '';
}

export default function getEntries(
  options: RemaxOptions,
  adapter: Adapter,
  context?: Context
): Entries {
  let pages: any = [];
  let subpackages: any = [];
  let images: string[] = [];

  if (!context) {
    const appConfigPath: string = path.join(
      options.cwd,
      'src',
      'app.config.js'
    );
    if (!fs.existsSync(appConfigPath)) {
      throw new Error(`${appConfigPath} is not found`);
    }
    const appConfig: AppConfig = readManifest(appConfigPath, adapter.name);
    pages = appConfig.pages;
    subpackages = appConfig.subpackages || [];
    images = adapter.getIcons(appConfig);

    if (!pages || pages.length === 0) {
      throw new Error(
        'app.config.js `pages` field should not be undefined or empty object'
      );
    }
  } else {
    pages = context.pages.map(p => p.path);
    subpackages = context.app.subpackages || [];
  }

  const entries: Entries = {
    pageConfigPath: [],
    app: searchFile(path.join(options.cwd, 'src', 'app')),
    pages: [],
    images: [],
  };

  entries.pages = pages.reduce(
    (ret: Array<{ path: string; file: string }>, page: string) => {
      return [
        ...ret,
        {
          path: page,
          file: searchFile(path.join(options.cwd, 'src', page)),
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
            file: searchFile(path.join(options.cwd, 'src', pack.root, page)),
          },
        ].filter(page => page && page.file);
      }, [])
    );
  });

  entries.images = images
    .filter(i => i)
    .reduce<string[]>((paths, image) => {
      return [...paths, path.join(options.cwd, 'src', image)];
    }, []);

  return entries;
}
