---
title: 2.0 迁移指南
---

如果你有 1.0 的 Remax 项目需要升级，请按照这篇文档的指引进行。

## 升级依赖

Remax 2.0 只需要你安装一个依赖 `remax`。

```diff
{
  ...,
  "dependencies": {
-    "remax": "^1.0.0",
-    "remax-cli": "^1.0.0",
+    "remax": "^2.0.0",
  }
}
```

## alipay -> ali

2.0 将 `alipay` 重名为 `ali`，表示支持所有阿里小程序。

因此原本和 `alipay` 相关的内容都需要改成 `ali`

package.json 中 build target 从 `alipay` 改成 `ali`

```diff
"scripts": {
-  "dev“: "remax build -t alipay -w",
-  "build“: "cross-env NODE_ENV=production remax build -t alipay",
+  "dev“: "remax build -t ali -w",
+  "build“: "cross-env NODE_ENV=production remax build -t ali",
}
```

`remax/alipay` -> `remax/ali`

```diff
import {
  View, naviageTo
- } from 'remax/alipay'
+ } from 'remax/ali'
```

App 和页面配置 `alipay` 平台变成 `ali`

```diff
- exports.alipay = {
+ exports.ali = {
  defaultTitle: '',
  ...
}
```

文件同构后缀名 `alipay.js` 变成 `ali.js`

```diff
- index.alipay.js
+ index.ali.js
```

`remax/one` 组件的平台前缀 `alipay-` 变成 `ali-`

```diff
<View
-  alipay-onFirstAppear={() => {}}
+  ali-onFirstAppear={() => {}}
>
```

## remax.config.js

[详细配置文档](/guide/config)

### 用 `configWebpack` 代替 `rollupOptions`

2.0 将构建工具从 `Rollup` 切换到 `Webpack`，因此废弃 `rollupOptions`，通过 `configWebpack` 可以修改 webpack 配置。`configWebpack` 方法将传入一个 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 的 `Config` 对象。

```js
// remax.config.js
module.exports = {
  configWebpack({ config }) {
    // config 是 webpack-chain 的 Config 对象
    config.plugins.delete('webpackbar'); // 删除 webpackbar 插件
  },
};
```

### 废弃 `alias` 配置

通过 `configWebpack` 修改 `webpack alias`

```js
// remax.config.js
module.exports = {
  configWebpack({ config }) {
    config.resolve.alias
      .merge({
        '@components': path.resolve(cwd, 'src/components'),
      })
      .end();
  },
};
```

### 废弃 `postcss` 配置

通过 `postcss.config.js` 来修改 `postcss` 配置

以添加 `postcss-url` 插件为例:

```js
// 在项目根目录下新建 postcss.config.js
module.exports = ({ options }) => ({
  plugins: {
    // 应用 remax 默认的插件配置
    ...options.plugins,
    'postcss-url': { url: 'inline', maxSize: 15 },
  },
});
```

### 废弃 `cssModules` 配置

2.0 将会自动识别 CSS Modules

```js
// 识别成 css modules
import styles from './index.css';
// 不启用 css modules
import './index.css';
```

## app.js

2.0 废弃了非 React 组件定义 App 的方式。如果你是用 React 组件定义 App，则无需改动。

详情请查看 [框架 - 应用](/guide/framework#应用)

## 生命周期

2.0 废弃了所有特有的生命周期 hook，例如: `onShow`， `onHide`， `onShareAppMessage` 等等。

1.0 提供的生命周期通用 hook `usePageEvent`， `useAppEvent` 改为从 `remax/macro` 导出。

```diff
- import { useShow, useHide, usePageEvent, useAppEvent ... } from 'remax';
+ import { usePageEvent, useAppEvent } from 'remax/macro';

...

- useShow(() => { console.log('onShow'); });
+ usePageEvent('onShow', () => { console.log('onShow'); })
```

## 样式

### 通过插件支持 CSS 预处理器

2.0 不再默认支持 Less、Sass 和 Stylus，需要通过对应的插件来支持。

[使用插件](https://remaxjs.org/guide/advanced/plugin)
[插件列表](https://github.com/remaxjs/plugins#%E6%8F%92%E4%BB%B6%E5%88%97%E8%A1%A8)

### CSS 中的图片

1.0 中，CSS 不支持相对路径引入图片，绝对路径 remax 则会自动复制图片到输出目录的对应位置。

与 1.0 不同，2.0 中我们将遵循 [css-loader](https://github.com/webpack-contrib/css-loader#url) 的规则：

1. `/path/to/image.png`， 绝对路径表示对应输出目录中的 `/path/to` 路径位置，归类为 global assets，可以放置在 public 目录下。

2. `~@/assets/image.png`， `~` 开头表示引入的是 module，可以是 src 下的图片， webpack 可以 resolve。

3. `../../assets/image.png`， 相对路径也会被识别为 module，webpack 会处理。

对于情况 1， 中的图片，可以放在项目根目录中的 public 目录中。public 目录中的文件会被复制到 dist 目录中。

例如：`public/path/to/image.png` 会被复制到 `dist/path/to/image.png`

### tabBar 中配置的本地图片

tabBar 中配置的本地图片都是以绝对路径开头，因此代表的也是 global assets，需要你自行配置 copy 行为，与上述一致。

## Remax

### useNativeEffect

useNativeEffect hook 去除 `unstable` 前缀

```diff
import {
-  unstable_useNativeEffect,
+  useNativeEffect,
} from 'remax'
```

废弃 Platform

出于对代码 uglify 的考虑，2.0 去除了 `Platform` 模块。如果你需要判断平台，请使用 `process.env.REMAX_PLATFORM`

```diff
- import { Platform } from 'remax';

- if (Platform.isWechat ) {
+ if (process.env.REMAX_PLATFORM === 'wechat') {
  ...
}
```

> 如果需要做到代码 uglify，就必须直接写明 `process.env.REMAX_PLATFORM`，不可以封装一个方法去调用

## Remax One

### Event

为了与 React DOM 对齐，2.0 中 `remax/one` 事件的 `originalEvent` 改为 `nativeEvent`

详情参考：[API - remax/one](/api/remax-one/event)

```diff
function handleTap(event) {
-  console.log(event.originalEvent);
+  console.log(event.nativeEvent);
}
```

### Input 和 Textarea 组件

`remax/one` 中的 `Input` 和 `Textarea` 组件的 `maxlength` 属性和 React 对齐，改为 `maxLength`

```diff
<Input
-  maxlength={140}
+  maxLength={140}
>

<Textarea
-  maxlength={140}
+  maxLength={140}
>
```

### Image 组件

2.0 中 Image 组件的 `lazyLoad` 属性不再是平台通用属性

```diff
<Image
-  lazyLoad={true}
+  wechat-lazy-load={true}
+  ali-lazy-load={true}
+  toutiao-lazy-load={true}
>
```

## 使用原生插件

原本直接引入插件的用法废弃，改为使用 `remax/macro` 提供的 `requirePlugin` 和 `requirePluginComponent` 方法使用

```diff
- import PluginComponent from 'plugin://xxx';
+ import { requirePlugin, requirePluginComponent } from 'remax/macro';

+ const PluginComponent = requirePluginComponent('plugin://xxx');
+ const PluginMethod = requirePlugin('plugin://xxx');
```
