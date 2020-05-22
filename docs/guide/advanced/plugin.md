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

Remax 插件分为编译时插件和运行时插件，插件是一个 Object，Object 的 key 对应 Remax 提供的 hook 名。

还是以 `@remax/plugin-less` 为例，我们可以通过 `configWebpack` 这个 hook 新增一条处理 less 文件的规则。

```js
// 因为需要接受参数，所以这里用一个方法来返回插件。
export default options => {
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
```

## Hooks

### configWebpack

修改 Webpack 配置。

#### 参数

- `params`
  - `config` - `webpack-chain` 的 `Config 对象`。
  - `webpack` - Webpack 实例，用于获取 Webpack 内置插件。
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

### registerRuntimePlugin

注册运行时插件。

```js
{
  registerRuntimePlugin() {
    return path.resolve(__dirname, './runtime.js'),
  }
}
```

## 运行时 Hooks

### onAppConfig

修改 App 的配置。

```js
{
  onAppConfig(config) {
    const onLaunch = config.onLaunch;
    config.onLaunch = () => {
      console.log('onLaunch');
      if (onLaunch) {
        onLaunch();
      }
    }
    return config;
  }
}
```

### onPageConfig

修改 Page 的配置。

```js
{
  onPageConfig(config) {
    const onLoad = config.onLoad;
    config.onLoad = () => {
      console.log('onLoad');
      if (onLoad) {
        onLoad();
      }
    }
    return config;
  }
}
```

## 官方插件库

[https://github.com/remaxjs/plugins](https://github.com/remaxjs/plugins)
