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

将原生页面放置到根目录下的 public 目录中。public 目录中的文件会被复制到 dist 目录中。

例如：`public/pages/index/index.js` 会被复制到 `dist/pages/index/index.js`
