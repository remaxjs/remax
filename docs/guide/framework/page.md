---
title: 页面
order: 1
---

# 页面

Remax 中的页面也是一个 React 组件。

```js
// src/pages/index.js
const IndexPage = () => {
  return <View>Hello world!</View>;
};

export default IndexPage;
```

## 页面配置

假设你的页面文件是 `src/pages/index.js`，那么这个页面对应的配置文件就是 `src/pages/index.config.js`。

同 `app.config.js` 一样，你可以默认导出一个配置，也可以为不同的平台导出不同的配置。

```js
module.exports = {
  navigationBarTitleText: '这是一个页面标题',
};
```

## 生命周期

对于 class 组件的页面你可以直接在 class 上监听页面的生命周期。

[小程序生命周期未调用？](/faq#使用高阶组件导致页面的生命周期未调用)

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

对于函数组件的页面, 我们提供了 hooks 来监听生命周期。

```jsx
import { usePageEvent } from 'remax/macro';

export default () => {
  // onShow 生命周期
  usePageEvent('onShow', () => {
    console.log('onShow');
  });

  // 支付宝 onBack 回调
  usePageEvent('onBack', () => {
    console.log('onBack');
  });
};
```

> 注意
>
> class 组件的生命周期回调只能用在页面组件上，但是 hooks 可以用在任意的函数组件上。

## 页面参数

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

你也可以通过小程序原生的方式获取参数（通常在 `onLoad` 生命周期里获取），包括场景值也是。

## 获取页面实例

通过 `usePageInstance` 可以获取 Page 实例。

这个 hook 是为了方便调用页面实例上的方法，如微信的 `selectComponent`。

```jsx
import { usePageInstance } from 'remax'

export default () => {
  const page = usePageInstance();

  ...
}
```

> 注意
>
> Remax 在页面实例上设置了一些内部逻辑相关的属性（包括 data 上面的值），不要修改实例上的属性。

## 小程序渲染 Effect

一般在 React 里，我们通过在 `useEffect` 来进行页面渲染成后需要处理的逻辑。但是在 Remax 中，`useEffect` 只是代表了 Remax 虚拟 DOM 处理完成，并不代表小程序渲染完成。
为了支持开发者可以触及小程序渲染完成的时机，我们添加了一个新的 hook：`useNativeEffect`。

```jsx
import * as React from 'react';
import { useNativeEffect } from 'remax';
import { usePageEvent } from 'remax/macro';

export default () => {
  const [width, setWidth] = React.useState(width, 0);
  const [height, setHeight] = React.useState(height, 0);

  usePageEvent('onShow', () => {
    setTimeout(() => {
      setWidth(100)
    }, 3000)

    setTimeout(() => {
      setHeight(100)
    }, 3000)
  })

  useNativeEffect(() => {
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
