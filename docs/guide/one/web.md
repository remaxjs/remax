---
title: Web 应用
group:
  order: 45
  title: 跨平台开发
---

# Web 同构

从 Remax 2.0 开发，`remax-one` 支持 web target，进行 web 同构。

```bash
$ remax build -t web
```

## 应用配置

为了与小程序对齐，Remax 为 Web 平台也提供了一份与小程序类似的应用配置。

```js
// app.config.js
exports.web = {
  // 页面默认标题
  title: '页面默认标题',
  // 配置的页面
  pages: ['pages/index/index'],
  // 是否全局开启下拉刷新
  pullToRefresh: false,
  // 触底滚动的默认距离，单位 px
  reachBottomOffset: 50,
  // tab bar 配置
  tabBar: {
    // 背景色
    backgroundColor: '#fff',
    // 选中状态的 tab 标题颜色
    activeTitleColor: 'red',
    // tab 标题颜色
    titleColor: 'blue',
    // tab 对象列表
    items: [
      {
        // tab 标题
        title: '标题',
        // tab 对应页面路由
        url: 'pages/index/index',
        // tab 显示的图片地址
        image: '图片地址',
        // tab 选中后的显示的图片地址
        activeImage: '选择图片地址',
      },
    ],
  },
};
```

## 页面配置

同样，Remax 为 Web 平台也提供了一份与小程序类似的页面配置。

```js
// app.config.js
exports.web = {
  // 页面标题
  title: '页面标题',
  // 是否开启下拉刷新
  pullToRefresh: false,
  // 触底滚动的距离，单位 px
  reachBottomOffset: 50,
};
```

## 文件同构

可以通过建立 `[module].web.js` 文件来做 web 平台同构。

```js
// 在 web 平台中，以下的引用会优先使用 ./module.web.js 文件
import module from './module';

...
```

## web 平台特有属性

web 平台也可以通过 `web-` 前缀来指明只在 web 平台中使用的属性

```jsx
// 表明 onClick 只在 web 平台使用
<View web-onClick={() => {}} />
```

> web 平台只能通过 remax-one 来开发，因此 remax 给 web 平台提供的组件和 api 就是来自 remax-one 提供的组件和 api
