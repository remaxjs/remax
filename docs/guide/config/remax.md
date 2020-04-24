---
title: Remax 配置
order: 0
group:
  title: 配置
  order: 3
---

# Remax 配置

通过 `remax.config.js`  修改 Remax 配置。

```js
// remax.config.js
module.exports = {
  output: 'build',
};
```

## `cwd`

配置项目路径，默认当前路径。

_默认值：_`process.cwd()`。

## `rootDir`

指定代码的根目录。

_默认值：_`'src'`。

## `ouput`

指定输出目录。

_默认值：_`'dist'`,

## `pxToRpx`

是否将 `px` 转换为 `rpx`。

_默认值：_ `true`

## `configWebpack`

修改 webpack 的配置。

```javascript
// remax.config.js

module.exports = {
  configWebpack(config) {
    // config 是的 [webpack-chain](https://github.com/neutrinojs/webpack-chain) Config 对象。
    config.plugins.delete('webpack-bar'); // 去掉进度条
  },
};
```

*默认值：*无

## `turboPages`

开启优化编译的页面，具体可以参考[《性能优化》](/guide/performance)。

_默认值：_`[]`

## `compressTemplate`

是否对生成的模板文件进行压缩，如果在预览小程序是碰到体积超限，可以超时开启这个选项。

_默认值：_`process.env.NODE_ENV === 'production'`

## Babel 配置

通过 `babel.config.js` 修改 Babel 配置。

```js
// babel.config.js
module.exports = {
  plugins: ['loop-optimizer'], // 新增 `loop-optimizer` 插件
  presets: [['remax']],
};
```

> 注意
>
> 请使用 `babel.config.js` 文件而不是 `.babelrc`
>
> 记得安装 `babel-preset-remax`，并将它加入到 presets 配置中
