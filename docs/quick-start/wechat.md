---
title: 微信小程序
order: 3
---

让我们在一分钟内开启一个微信小程序项目吧！

## 创建项目

```bash
$ npx degit remaxjs/template-wechat my-app
$ cd my-app && npm install
```

## 运行项目

```bash
$ npm run dev
```

打开微信调试器，选中项目 dist 目录，你将看到

<img src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*uyGOSLod26MAAAAAAAAAAABkARQnAQ" width="240" />

成功！

## 项目结构

现在我们来看一下 Remax 应用的结构：

```
my-app/
┳ package.json
┣ dist/
┣ node_modules/
┣ src/
┗━┓ app.js
  ┣ app.css
  ┣ app.config.js
  ┣ pages/
  ┗━┓ index/
    ┗━┓
      ┣ index.js
      ┣ index.module.css
      ┣ index.config.js
```

`dist` 为打包编译后的文件目录。

_在开发阶段我们无需关心打包结果的兼容性及体积，所以 remax 打包结果为未压缩版本，在需要上传代码时应勾选小程序的 **代码压缩**，**样式补全**选项_

`src` 为源文件目录

`app.js` 入口文件，具体可参考 [指南 - 框架](/guide/framework)

`app.css` 全局样式文件

`app.config.js` 为小程序全局配置文件，对应 `app.json`，具体可参考 [指南 - 配置](/guide/config)

```js
module.exports = {
  pages: ['pages/index/index'],
  window: {
    navigationBarTitleText: 'My App',
  },
};
```

`pages` 存放项目页面

`pages/index/index.js` 页面文件，对应小程序 Page 方法

```jsx
import * as React from 'react';
import { View, Text } from 'remax/wechat';
import './index.module.css';

export default () => {
  return (
    <View>
      <Text>pages/index/index</Text>
    </View>
  );
};
```

_默认导出的的 React 组件就是当前的页面，关于生命周期的使用方式参考 [指南 - 生命周期](/guide/lifecycle)_

_Remax 针对不同平台有对应的实现，如 `remax/alipay`，`remax/wechat`，`remax/toutiao` 等等，开发者可根据需要选择对应的平台。关于跨平台开发解决方案请查看：[高级指南 - 跨平台开发](/advanced-guide/cross-platform)。_

`index.module.css` 页面样式文件，关于样式请参考 [指南 - 样式](/guide/style)

`index.config.js` 页面配置文件，会自动转换成小程序页面配置文件 `index.json`，关于配置请参考 [指南 - 配置](./guide/config)
