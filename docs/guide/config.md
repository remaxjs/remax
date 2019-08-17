---
title: 配置
order: 7
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
  // build 目录，默认 dist
  output: 'dist',
};
```

_关于 css modules 和样式更多信息，请参考 [开发 - 样式](/开发/样式)_

### 路径别名

Remax 支持路径别名，'@/' 相当于 'src/'，例如：

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

> 由于微信不支持模板递归，因此在 Remax 中对层级深度有一定限制。如果开发者的小程序页面层级较深，可以通过 **UNSAFE_wechatTemplateDepth**来控制层级，Remax 默认层级为 20。需要注意的是，层级越深，Remax 打包结果的大小增长越快
