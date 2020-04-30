---
title: 原生混合开发
order: 46
---

# 原生混合开发

Remax 支持使用原生 page。你可以指定某个 page 为原生代码开发的页面。

```js
// app.config.js
module.exports = {
  pages: ['pages/remaxPage/index', 'pages/nativePage/index'],
};
```

配置完页面后，将原生的代码复制到对应的 `output` 目录，保持和 app.config.js 中配置的目录一致。

```js
// remax.config.js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configWebpack({ config }) {
    config.plugin('copy').use(CopyPlugin, [
      [
        // 表示将 native 目录整个输出到 output 目录下
        { from: '/path/to/native', to: './' },
      ],
    ]);
  },
};
```
