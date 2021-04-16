import * as path from 'path';
import hostComponents from '../hostComponents/node';
import type { PluginConstructor } from '@remax/types';

const EJS_TPL_ROOT = path.join(__dirname, '../../templates');

const plugin: PluginConstructor = () => {
  return {
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
    skipHostComponents: ['swiper-item'],
  };
};

export default plugin;
