'use strict';

var API = require('../../npm/remax/esm/API.js');
require('../../npm/remax/esm/index.js');
var runtime = require('../../npm/remax-alipay/esm/runtime.js');

var __REMAX_RUNTIME_PLUGIN_CONFIGS = [runtime.default()];

API.default.installPlugins(__REMAX_RUNTIME_PLUGIN_CONFIGS);

App({});
