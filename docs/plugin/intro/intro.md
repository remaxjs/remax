---
title: 使用插件
order: 0
nav:
  title: 插件
  order: 2
group:
  title: 介绍
  order: 0
---

# 使用插件

以 `@remax/plugin-less` 为例：

```bash
$ npm install @remax/plugin-less --save
```

在 `remax.config.js` 中配置：

```js
module.exports = {
  plugins: ['@remax/plugin-less'],
};
```

插件配置：

```js
module.exports = {
  plugins: [
    [
      '@remax/plugin-less',
      {
        lessOptions: {
          globalVars: {
            'primary-color': '"#4569d4"',
          },
        },
      },
    ],
  ],
};
```
