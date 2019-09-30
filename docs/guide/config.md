---
title: 配置
order: 22
---

## Remax 配置

`remax.config.js` 是 Remax 的配置文件

```js
// remax.config.js 默认配置
module.exports = {
  // boolean | RegExp 开启或关闭 css modules，支持传入正则表达式配置开启的文件命名格式
  cssModules: /\.module\.(less|scss|css)$/,
  // 配置项目路径，默认当前路径
  cwd: process.cwd(),
  // 是否显示 build 进度，默认显示
  progress: true,
  // 指定代码的根目录，默认 src
  rootDir: 'src,
  // build 目录，默认 dist
  output: 'dist',
  // 配置路径别名
  alias: {},
  postcss: {
    options: {
      use: [
        [
          'less',
          {
            paths: [
              // 可方便解析 node_modules 中样式文件
              path.resolve(__dirname, 'node_modules'),
              // 可作为全局样式目录
              path.resolve(__dirname, 'src/assets/styles'),
            ],
          },
        ],
        // 其他样式文件配置，比如sass, stylus, 如果有多种样式文件，则也需要添加对应配置
        ['stylus', {}],
      ],
    },
    // 其他postcss 插件, 会和默认的插件进行拼接
    plugins: [],
  },
};
```

如果你想针对平台做一些配置，你可以通过设置环境变量来控制，如：

```js
// PLATFORM=wechat
// remax.config.js 默认配置
module.exports = {
  output: 'dist/' + process.env.PLATFORM,
};
```

通过上面的方式，可以针对不同的平台定义不一样的打包输出路径

_关于 css modules 和样式更多信息，请参考 [指南 - 样式](/guide/style)_

### babel 配置

Remax 支持直接在项目根目录创建 .babelrc 文件来自定义 babel 配置，例如：

```js
// .babelrc
{
  "plugins": ["loop-optimizer"],
}
```

### 路径别名

Remax 支持路径别名配置， 默认配置 `@/` 对应 `src/`，例如：

```js
import Button from '@/components/Button';

// 相当于
import Button from 'project_cwd/src/components/Button';
```

你也可以通过 alias 自定义配置，如：

```js
// remax.config.js
module.exports = {
  ...
  // 配置路径别名
  alias: {
    // 自动将 @components 指向 src/components
    '@components': './src/components',
  },
};
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

// 支付宝
exports.alipay = {
  defaultTitle: title,
};
```

这样就可以根据 build 目标平台自动选择配置

`app.config.js` 对应小程序 `app.json`，页面配置为对应页面的 `config.js`，如，`pages/index/index.js` 的页面配置为 `pages/index/index.config.js`

> 注意
>
> 由于微信不支持模板递归，因此在 Remax 中对层级深度有一定限制。如果开发者的小程序页面层级较深，可以通过 **UNSAFE_wechatTemplateDepth** 来控制层级，Remax 默认层级为 20。需要注意的是，层级越深，Remax 打包结果的大小增长越快
