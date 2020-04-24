---
title: 原生混合开发
order: 46
---

# 原生混合开发

参考 https://v1.remaxjs.org/advanced-guide/native

由于 Remax 2.0 去掉了 native 目录支持，你可以通过 `remaxjs.config.js` 中的 `configWebpack` 去设置 `copy-webpack-plugin` 支持 native 目录 copy 行为。

```js
// remax.config.js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configWebpack(config) {
    config.plugin('copy').use(CopyPlugin, [
      [
        // 表示将 native 目录整个输出到 output 目录下
        { from: 'src/native', to: './' },
      ],
    ]);
  },
};
```
