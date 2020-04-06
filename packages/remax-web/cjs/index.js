'use strict';
function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, '__esModule', { value: true });
var react_dom_1 = require('react-dom');
exports.render = react_dom_1.render;
__export(require('react-router-dom'));
var umi_hd_1 = require('umi-hd');
exports.hd = umi_hd_1.default;
