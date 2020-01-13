import * as path from 'path';
import hostComponents from '../hostComponents/node';
import { RemaxNodePluginConstructor, Entries } from 'remax-types';

const EJS_TPL_ROOT = path.join(__dirname, '../../templates');

const plugin: RemaxNodePluginConstructor = () => {
  return {
    meta: {
      template: {
        extension: '.axml',
        tag: 'import',
        src: 'src',
      },
      style: '.acss',
      jsHelper: {
        extension: '.sjs',
        tag: 'import-sjs',
        src: 'from',
      },
      include: {
        tag: 'include',
        src: 'src',
      },
      ejs: {
        page: path.join(EJS_TPL_ROOT, 'page.ejs'),
      },
    },
    hostComponents,
    getEntries({ remaxOptions, appManifest, getEntryPath }) {
      const ROOT_DIR = path.join(remaxOptions.cwd, remaxOptions.rootDir);
      const { pages, subPackages = [], tabBar = { items: [] } } = appManifest;

      if (!pages || pages.length === 0) {
        throw new Error('app.config.js|ts 并未配置页面参数');
      }

      const entries: Entries = {
        app: '',
        pages: [],
        images: [],
      };

      // 页面
      entries.pages = pages.reduce(
        (ret: string[], page: string) =>
          [...ret, getEntryPath(path.join(ROOT_DIR, page))].filter(
            page => !!page
          ),
        []
      );

      // 分包页面
      subPackages.forEach((pack: { pages: string[]; root: string }) => {
        entries.pages = entries.pages.concat(
          pack.pages.reduce(
            (ret: string[], page) =>
              [
                ...ret,
                getEntryPath(path.join(ROOT_DIR, pack.root, page)),
              ].filter(page => !!page),
            []
          )
        );
      });

      // tabbar 中的图片
      entries.images = (tabBar?.items || [])
        .reduce(
          (images: string[], tab: any) => [...images, tab.icon, tab.activeIcon],
          []
        )
        .filter((image: string) => !!image)
        .reduce<string[]>(
          (paths, image) => [...paths, path.join(ROOT_DIR, image)],
          []
        );

      return entries;
    },
    shouldHostComponentRegister: ({ componentName }) =>
      componentName !== 'swiper-item' && componentName !== 'picker-view-column',
  };
};

export default plugin;
