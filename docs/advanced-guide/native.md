---
title: 原生混合开发
order: 44
---

Remax 支持项目中有原生代码，目的是方便项目迁移。

在 `src/native` 目录下的代码将被认为是原生代码，因此只需将原生代码复制进来即可。

_Remax 会自动搜寻 native 目录下的页面，因此你无须修改 app.config.js 里的页面路径_

如：

```js
// app.config.js
module.exports = {
  ...
  pages: ['pages/native/index']
}
```

上面的配置会自动搜索到 `src/native/pages/native/index` 路径
