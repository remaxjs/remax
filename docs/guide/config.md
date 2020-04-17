---
title: 配置
order: 22
---

# 配置

## Remax 配置

`remax.config.js` 是 Remax 的配置文件

```js
// remax.config.js 默认配置
module.exports = {
  // 配置项目路径，默认当前路径
  cwd: process.cwd(),
  // 是否显示 build 进度，默认显示
  progress: true,
  // 指定代码的根目录，默认 src
  rootDir: 'src',
  // build 目录，默认 dist
  output: 'dist',
  // 是否开启 wxml/axml, js 文件压缩
  minimize: process.env.NODE_ENV === 'production',
  // 是否将 px 转换为 rpx, 默认是 true
  pxToRpx: true,
  // 是否开启命令行通知
  notify: false,
  // 修改 webpack 的配置
  configWebpack: config => {
    // config 对象为 webpack chain 生成 的 Config，可以直接通过 webpack chain 的方式修改配置 https://github.com/neutrinojs/webpack-chain
    console.log(config);
  },
  // 对某些页面开启性能优化，具体可以参考《性能优化选项》章节
  turboPages: [],
};
```

### 路径别名

Remax 支持路径别名配置， 默认配置 `@/` 对应 `src/`，例如：

```js
import Button from '@/components/Button';

// 相当于
import Button from 'project_cwd/src/components/Button';
```

### 文件引用

Remax 支持引用 `JSON` 和 `图片` 文件。用法如下：

```js
import JSON from './index.json';

console.log(JSON); // json的内容
```

```jsx
import image from './index.png';

<Image src={image} />;
```

### 扩展更多功能

Remax 用 webpack 作为构建工具，因此你可以通过使用 webpack 插件，loader， 配置等来定制功能。

```js
// remax.config.js
module.exports = {
  configWebpack: config => {
    // config 对象为 webpack chain 生成 的 Config，可以直接通过 webpack chain 的方式修改配置 https://github.com/neutrinojs/webpack-chain
    // 通过修改 webpack 配置修改 alias。还可以添加/修改 插件，loader 等等。
    config.resolve.alias.merge({
      '@components': path.resolve(cwd, 'src/components'),
      '@c': path.resolve(cwd, 'src/components'),
    });
  },
};
```

## babel 配置

Remax 支持直接在项目根目录创建 babel.config.js 文件来自定义 babel 配置，例如：

> 默认不需要这么做，只有对 babel 配置有定制需求时才需要

```js
// babel.config.js
module.exports = {
  plugins: ['loop-optimizer'],
  presets: [
    [
      'remax',
      {
        // 是否使用 @babel/preset-typescript 转换TS代码
        typescript: true,

        // 例子：下面的 `decorators` 和 `classProperties` 可以使Mobx的装饰器能正常工作
        // @babel/plugin-proposal-decorators 的选项，详见 https://babeljs.io/docs/en/babel-plugin-proposal-decorators
        decorators: {
          legacy: true,
        },

        // @babel/plugin-proposal-class-properties 的选项，详见 https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
        classProperties: {
          loose: true,
        },
      },
    ],
  ],
};
```

> 由于 babel7 的推荐以及项目目录配置等问题，请使用 [babel.config.js](https://babeljs.io/docs/en/configuration#babelconfigjs) 文件而不是 .babelrc
>
> 记得安装 `babel-preset-remax`，并将它加入到 presets 配置中

## 小程序配置

Remax 用 `config.js` 定义小程序配置文件，以提高灵活性。

例如：

```js
// app.config.js

module.exports = {
 navigationBarTitleText: '标题',
 ...
}
```

Remax 优先读取默认导出的配置，如果你开发的是多端共用的项目，则可以改为：

```js
// app.config.js

const title = '标题';

// 微信
exports.wechat = {
  navigationBarTitleText: title,
};

// 阿里
exports.ali = {
  defaultTitle: title,
};
```

这样就可以根据 build 目标平台自动选择配置

`app.config.js` 对应小程序 `app.json`，页面配置为对应页面的 `config.js`，如，`pages/index/index.js` 的页面配置为 `pages/index/index.config.js`

config 同样支持 TypeScript：

```js
// app.config.ts
import { AppConfig } from 'remax/wechat';
const config: AppConfig = {
 navigationBarTitleText: '标题',
 ...
}

export default config;
```
