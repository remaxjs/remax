---
title: App
order: 1
group:
  title: 框架
  order: 1
---

# App

Remax 应用的默认入口文件为 `src/app.js`。不同于原生小程序中的 `app.js`，Remax 中的 `app.js` 是一个 React 组件。

```js
// src/app.js
export default class App extends React.Component {
  render() {
    return this.props.children;
  }
}
```

所有页面组件都会以 `App` 子组件的方式渲染，所以你可以很方便地通过 `Context` 来进行数据共享。

> 注意
>
> 在 Remax 中使用 `getApp` 是获取不到 `src/app.js` 中定义的 `App` 组件的。 我们建议你忘记 `getApp`， 改用 `Context` 来共享状态。
>
> App 组件中必须渲染 `props.children`，且不支持写原生组件。

## 应用配置

应用配置通过 `app.config.js` 实现，对应原生小程序中的 `app.json`。

例如：

```js
// app.config.js

module.exports = {
  window: {
    navigationBarTitleText: '这是一个标题',
  },
};
```

Remax 优先读取默认导出的配置，如果你开发的是一个跨平台的的项目，则可以改为：

```js
// app.config.js

const title = '这是一个标题';

// 微信
exports.wechat = {
  window: {
    navigationBarTitleText: title,
  },
};

// 阿里
exports.ali = {
  window: {
    defaultTitle: title,
  },
};
```

Remax 会根据构建的目标平台自动选择配置。

## 生命周期

应用的生命周期可以直接写在 `App` 组件上。

```js
export default class App extends React.Component {
  // did mount 的触发时机是在 onLaunch 的时候
  componentDidMount() {
    console.log('App launch');
  }

  onShow(options) {
    console.log('onShow', options);
  }

  render() {
    return this.props.children;
  }
}
```

对于函数组件的 App, 可以通过 `useAppEvent` hook 来监听生命周期

```jsx
import { useAppEvent } from 'remax/macro';

export default function App(props) {
  useAppEvent('onShow', () => {
    console.log('这个 hook 等同于 onShow');
  });

  useAppEvent('onShareAppMessage', () => {
    console.log('这个 hook 等同于 onShareAppMessage');
  });

  return props.children;
}
```
