import * as path from 'path';
import hostComponents from '../hostComponents/node';
var TPL_DEFAULT_ROOT = path.join(__dirname, '../../templates', 'default');
var TPL_STATIC_ROOT = path.join(__dirname, '../../templates', 'static');
var plugin = function() {
  return {
    name: 'remax-alipay',
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
      },
    },
    hostComponents: hostComponents,
    shouldHostComponentRegister: function(_a) {
      var componentName = _a.componentName;
      return componentName !== 'swiper-item' && componentName !== 'picker-view-column';
    },
  };
};
export default plugin;
