---
title: 使用插件
order: 1
---

## 使用插件

以 `@remax/plugin-less` 为例：

```bash
$ npm install @remax/plugin-less --save
```

在 `remax.config.js` 中配置：

```js
const less = require('@remax/plugin-less');

module.exports = {
  plugins: [
    less({
      lessOptions: {
        globalVars: {
          'primary-color': '"#4569d4"',
        },
      },
    }),
  ],
};
```

## 编写插件

Remax 的插件是一个简单的方法，这个方法返回一个对象，对象中的 key 是 Remax 提供的 hook 名。通过这些 hook，可以改变 Remax 构建小程序时的行为。

还是以 `@remax/plugin-less` 为例，我们可以通过 `configWebpack` 这个 hook 新增一条处理 less 文件的规则。

```js
// 第一个参数是插件的配置
const lessPlugin = options => {
  return {
    configWebpack({ config, addCSSRule }) {
      addCSSRule({
        name: 'less',
        test: /\.less(\?.*)?$/,
        loader: require.resolve('less-loader'),
        options,
      });
    },
  };
};

export default lessPlugin;
```

## Hooks

### configWebpack

修改 Webpack 配置。

#### 参数

- `params`
  - `config` - `webpack-chain` 的 `Config 对象`。
  - `addCSSRule` - 新增一条 CSS 处理规则。

### configBabel

修改 Babel 配置。

- `params`
  - `config` - Babel 配置

```js
{
  configBabel({ config }) {
    config.plugins.push('awesome-babel-plugin');
  }
}
```

## 官方插件库

[https://github.com/remaxjs/plugins](https://github.com/remaxjs/plugins)
