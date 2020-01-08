---
title: 框架
order: 0
---

## 应用

应用的默认入口文件为 `src/app.js`。不同于原生小程序中的 `app.js`，Remax 中的 `app.js` 是一个 React 组件。

```js
export default class App extends React.Component {
  render() {
    return this.props.children;
  }
}
```

所有页面组件都会以 `App` 子组件的方式渲染，所以你可以很方便的通过 `Context` 来进行数据共享。

> 注意
>
> 在 Remax 中使用 `getApp` 是获取不到 `src/app.js` 中定义的 `App` 组件的。 我们建议你忘记 `getApp`， 改用 `Context` 来共享状态。
>
> App 组件中必须渲染 `props.children`，且不支持写原生组件。

### 应用配置

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

Remax 优先读取默认导出的配置，如果你开发的是多端共用的项目，则可以改为：

```js
// app.config.js

const title = '这是一个标题';

// 微信
exports.wechat = {
  window: {
    navigationBarTitleText: title,
  },
};

// 支付宝
exports.alipay = {
  window: {
    defaultTitle: title,
  },
};
```

Remax 会根据构建的目标平台自动选择配置。

### 生命周期

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

## 页面

Remax 中的页面当然也是一个 React 组件。

```js
const IndexPage = () => {
  return <View>Hello world!</View>;
};

export default IndexPage;
```

### 页面配置

假设你的页面文件是 `src/pages/index.js`，那么这个页面的配置文件就是 `src/pages/index.config.js`。

同 `app.config.js` 一样，你可以默认导出一个配置，也可以为不同的平台导出不同的配置。

```js
module.exports = {
  navigationBarTitleText: '这是一个页面标题',
};
```

### 生命周期

对于 class 组件的页面你可以直接在 class 上监听页面的生命周期。

[小程序生命周期未调用？](/faq)

```jsx
export default class IndexPage extends React.Component {
  // 页面组件的 didMount 触发时机是在 onLoad 的时候
  componentDidMount() {
    console.log('IndexPage load');
  }

  onShow() {
    console.log('IndexPage show');
  }

  render() {
    return <View>Hello world!</View>;
  }
}
```

对于函数组件的页面  我们提供了 hooks 来监听生命周期。

```jsx
import { useShow } from 'remax';

export default () => {
  useShow(() => {
    console.log('onShow');
  });

  return <View>view</View>;
};
```

> 注意
>
> class 组件的生命周期回调只能用在页面组件上，但是 hooks 可以用在任意的组件上。

### 页面参数

Remax 将页面参数通过 `props` 传递给页面组件，如：

```js
export default props => {
  // 页面参数
  console.log(props.location.query);

  return <View>view</View>;
};
```

对于函数组件，也可以使用 `useQuery` hook，如：

```js
import { useQuery } from 'remax';

export default () => {
  // 页面参数
  const query = useQuery();
  console.log(query);

  return <View>view</View>;
};
```

你也可以通过小程序原生的方式获取参数（通常在 `onLoad` 方法里获取），包括场景值也是。

### 小程序渲染 Effect

一般在 React 里，我们通过在 `useEffect` 来进行页面渲染成后需要处理的逻辑。但是在 Remax 中，`useEffect` 只是代表了 Remax 虚拟 DOM 处理完成，并不代表小程序渲染完成。
为了支持开发者可以触及小程序渲染完成的时机，我们添加了一个新的 hook：`unstable_useNativeEffect`。

```jsx
import * as React from 'react';
import { unstable_useNativeEffect, useShow } from 'remax';

export default () => {
  const [width, setWidth] = React.useState(width, 0);
  const [height, setHeight] = React.useState(height, 0);

  useShow(() => {
    setTimeout(() => {
      setWidth(100)
    }, 3000)

    setTimeout(() => {
      setHeight(100)
    }, 3000)
  });
  unstable_useNativeEffect(() => {
    console.log('width', width, 'height', height);
    // 只有在 width 变化时，才执行这个逻辑。
    // 建议一定要写 hooks 依赖，否则所有 setData 回调后，都会在这里执行
  }, [width])

  ...
}
```

在上面的例子中:

- 页面首次渲染成功后，会看到 console 输出 `width 0 height 0`。
- 3000 ms 后，更新了 width 的值，console 输出 `width 100 height 0`。
- 3000 ms 后， 更新了 height 的值，console 没有新的输出。
