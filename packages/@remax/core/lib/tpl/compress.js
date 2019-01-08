"use strict";

/**
 * 压缩一下 wxml, html-minifier 之类的不好使只能自己写了
 */
var fs = require('fs');

var path = require('path');

var PATH = path.join(__dirname, '../../lib/base.wxml');
var content = fs.readFileSync(PATH, 'utf-8');
var result = content.split('\n').map(function (item) {
  return item.trim();
}).filter(function (item) {
  return item;
}).join(' ');
fs.writeFileSync(PATH, result, 'utf-8');