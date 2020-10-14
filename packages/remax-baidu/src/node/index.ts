import * as path from 'path';
import hostComponents from '../hostComponents/node';
import { PluginConstructor } from '@remax/types';

const EJS_TPL_ROOT = path.join(__dirname, '../../templates');
const COMPONENTS_ROOT = path.join(__dirname, '../../components');

const plugin: PluginConstructor = () => {
  return {
    meta: {
      components: COMPONENTS_ROOT, // 存在公共组件
      global: 'swan',
      template: {
        extension: '.swan',
        tag: 'import',
        src: 'src',
      },
      style: '.css',
      jsHelper: {
        extension: '.sjs',
        tag: 'import-sjs',
        src: 'src',
      },
      ejs: {
        base: path.join(EJS_TPL_ROOT, 'base.ejs'),
        page: path.join(EJS_TPL_ROOT, 'page.ejs'),
      },
    },
    hostComponents,
    shouldHostComponentRegister: ({ componentName }) => componentName !== 'swiper-item',
  };
};

export default plugin;
