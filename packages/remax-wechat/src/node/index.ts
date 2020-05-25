import * as path from 'path';
import hostComponents from '../hostComponents/node';
import { PluginConstructor } from '@remax/types';

const EJS_TPL_ROOT = path.join(__dirname, '../../templates');

const plugin: PluginConstructor = () => {
  return {
    name: 'remax-wechat',
    meta: {
      global: 'wx',
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
      ejs: {
        base: path.join(EJS_TPL_ROOT, 'base.ejs'),
        page: path.join(EJS_TPL_ROOT, 'page.ejs'),
      },
    },
    hostComponents,
    shouldHostComponentRegister: ({ componentName, additional, phase }) =>
      componentName !== 'swiper-item' && (additional || phase !== 'extra'),
    processProps: ({ node, props, additional }) => {
      const isSpread = node && node.openingElement.attributes.find((a: any) => a.type === 'JSXSpreadAttribute');

      const nextProps = isSpread || additional ? props : [];

      return nextProps;
    },
  };
};

export default plugin;
