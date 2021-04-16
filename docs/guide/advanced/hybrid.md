---
title: 混合开发
order: 46
---

# 混合开发

> 2.9.0 以后支持

你可以在已有的原生小程序项目中引入 Remax 页面，也可以在 Remax 项目中使用小程序原生语法编写某个页面。

混合开发模式可以让你渐进式地把小程序原生项目迁移到 Remax，也可以在 Remax 项目使用小程序原生语法编写对性能要求较高的页面。

## 在 Remax 项目中使用小程序原生页面

无需任何配置，可以直接在 `src/app.config.js` 中添加使用小程序原生语法编写的页面：

```js
// src/app.config.js
module.exports = {
  pages: [
    'pages/mini/index', // 小程序原生页面
  ]
}
```

```js
// src/pages/mini/index.js
Page({});
```

由于小程序原生页面也会经过 Remax 的编译，所以你同样可以在小程序原生页面中使用 TypeScript 甚至 Less 😎。

## 在原生小程序项目中引入 Remax

### 创建 src 目录

创建 `src` 目录并把原生小程序的代码放入其中。

### 安装 Remax

```bash
npm init // 创建 package.json
npm install remax --save
```

### 添加构建脚本

在 `package.json` 加入以下脚本：

```json
{
  "dev": "remax build -w -t ali" // 根据项目实际情况配置小程序平台
}
```

### 添加 Remax 页面

在 `app.json` 中添加 Remax 页面：

```json
{
  "pages": [
    "pages/awesome-remax/index", // 使用 Remax 写的页面
    "pages/index/index" // 原生小程序页面
  ]
}
```

```js
// src/pages/awesome-remax/index.js
import * as React from 'react';
import { View } from 'remax';

export default () => <View>Awesome Remax!</View>;
```

### 开发预览

`npm run dev` 启动构建后使用小程序 IDE 运行 `dist` 目录即可。

## 注意事项

1. 混合模式下 app.js 文件既可以按照小程序原生的方式定义，也可以使用 Remax 的方式定义，如果使用前者，页面之间将无法通过 Context 共享状态。
2. Remax 在编译小程序时会自动处理原生小程序中引用的图片资源，但是部分动态设置的图片路径无法自动识别，可以通过把图片资源放到 [public 目录](/guide/basic/public)下解决。
