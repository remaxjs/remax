import * as path from 'path';
import hostComponents from '../hostComponents/node';
import { RemaxNodePluginConstructor } from 'remax-types';

const EJS_TPL_ROOT = path.join(__dirname, '../../templates');

const plugin: RemaxNodePluginConstructor = () => {
  return {
    name: 'remax-toutiao',
    meta: {
      global: 'tt',
      template: {
        extension: '.ttml',
        tag: 'import',
        src: 'src',
      },
      style: '.ttss',
      include: {
        tag: 'include',
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
