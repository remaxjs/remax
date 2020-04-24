---
title: PostCSS 配置
order: 2
---

# PostCSS 配置

在项目根目录新建 postcss.config.js，就可以修改 PostCSS 配置:

```js
// postcss.config.js
module.exports = ({ options }) => ({
  plugins: {
    // 继承 remax 默认的插件配置
    ...options.plugins,
    // 添加其他插件
    'postcss-url': { url: 'inline', maxSize: 15 },
  },
});
```
