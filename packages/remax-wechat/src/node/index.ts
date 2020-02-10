import * as path from 'path';
import hostComponents from '../hostComponents/node';
import { RemaxNodePluginConstructor, Entries } from 'remax-types';

const EJS_TPL_ROOT = path.join(__dirname, '../../templates');

const plugin: RemaxNodePluginConstructor = () => {
  return {
    meta: {
      template: {
        extension: '.wxml',
        tag: 'import',
        src: 'src',
      },
      style: '.wxss',
      jsHelper: {
        extension: '.wxs',
        tag: 'wxs',
        src: 'src',
      },
      include: {
        tag: 'include',
        src: 'src',
      },
      ejs: {
        base: path.join(EJS_TPL_ROOT, 'base.ejs'),
        page: path.join(EJS_TPL_ROOT, 'page.ejs'),
        jsHelper: path.join(EJS_TPL_ROOT, 'helper.js'),
      },
    },
    hostComponents,
    getEntries({ remaxOptions, appManifest, getEntryPath }) {
      const ROOT_DIR = path.join(remaxOptions.cwd, remaxOptions.rootDir);
      const { pages, subpackages = [], tabBar = { list: [] } } = appManifest;

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
      subpackages.forEach((pack: { pages: string[]; root: string }) => {
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
      entries.images = (tabBar?.list || [])
        .reduce(
          (images: string[], tab: any) => [
            ...images,
            tab.iconPath,
            tab.selectedIconPath,
          ],
          []
        )
        .filter((image: any) => !!image)
        .reduce<string[]>(
          (paths, image) => [...paths, path.join(ROOT_DIR, image)],
          []
        );

      return entries;
    },
    shouldHostComponentRegister: ({ componentName, additional, phase }) =>
      componentName !== 'swiper-item' && (additional || phase !== 'extra'),
    processProps: ({ node, props, additional }) => {
      const isSpread =
        node &&
        node.openingElement.attributes.find(
          (a: any) => a.type === 'JSXSpreadAttribute'
        );

      const nextProps = isSpread || additional ? props : [];

      return nextProps;
    },
  };
};

export default plugin;
