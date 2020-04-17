'use strict';
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var path = __importStar(require('path'));
var node_1 = __importDefault(require('../hostComponents/node'));
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
    hostComponents: node_1.default,
    shouldHostComponentRegister: function(_a) {
      var componentName = _a.componentName;
      return componentName !== 'swiper-item' && componentName !== 'picker-view-column';
    },
  };
};
exports.default = plugin;
