---
title: PostCSS 配置
order: 3
---

# PostCSS 配置

在[项目路径](/guide/config/remax#cwd)下新建 `postcss.config.js`，就可以修改 PostCSS 配置:

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
