'use strict';

var API = require('../../npm/remax/esm/API.js');
require('../../npm/remax/esm/index.js');

var __REMAX_RUNTIME_PLUGIN_CONFIGS = [require('remax-alipay/runtime')()];

API.default.installPlugins(__REMAX_RUNTIME_PLUGIN_CONFIGS);

App({});
