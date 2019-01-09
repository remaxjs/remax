/**
 * 压缩一下 wxml, html-minifier 之类的不好使只能自己写了
 */
const fs = require('fs');

const path = require('path');

const PATH = path.join(__dirname, '../../lib/base.wxml');
const content = fs.readFileSync(PATH, 'utf-8');
const result = content.split('\n').map(item => item.trim()).filter(item => item).join(' ');
fs.writeFileSync(PATH, result, 'utf-8');