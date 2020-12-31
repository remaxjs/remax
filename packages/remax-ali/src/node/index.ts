import * as path from 'path';
import hostComponents from '../hostComponents/node';
import type { PluginConstructor } from '@remax/types';

const TPL_DEFAULT_ROOT = path.join(__dirname, '../../templates', 'default');
const TPL_STATIC_ROOT = path.join(__dirname, '../../templates', 'static');

const plugin: PluginConstructor = () => {
  return {
    meta: {
      global: 'my',
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
      ejs: {
        base: '',
        page: path.join(TPL_DEFAULT_ROOT, 'page.ejs'),
      },
      staticEjs: {
        base: '',
        page: path.join(TPL_STATIC_ROOT, 'page.ejs'),
        isolatedTemplates: path.join(TPL_STATIC_ROOT, 'isolated-templates.ejs'),
      },
    },
    hostComponents,
    skipHostComponents: ['swiper-item', 'picker-view-column'],
  };
};

export default plugin;
