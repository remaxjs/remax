---
title: remax
order: 0
nav:
  title: API
  order: 1
---

_带有 `?` 的选项表示非必填项_

## useQuery()

获取页面参数 hook

```jsx
import { useQuery } from 'remax';

export default () => {
  const query = useQuery();

  ...
}
```

#### 参数

无

#### 返回值

返回一个页面参数键值对象。

## usePageInstance()

获取当前页面组件实例

```js
import { usePageInstance } from 'remax';

export default () => {
  const instance= usePageInstance();

  ...
}
```

#### 参数

无

#### 返回值

返回当前页面实例

## useNativeEffect(callback, deps?)

原生 setData 回调执行 hook。用于在 React rerender 后，小程序真正更新的时机的 hook。
在 Remax 的机制中，`React.useEffect` 只能反映 React 的 render 完成了，不代表小程序渲染完成。因此通过 `useNativeEffect` 来处理小程序 setData 的 callback 回调。

```jsx
import * as React from 'react';
import { useNativeEffect } from 'remax';

export default () => {
  const [width, setWidth] = React.useState();

  React.useEffect(() => {
    console.log('width 更新在 React 中生效了');
  }, [width])

  useNativeEffect(() => {
    console.log('width 更新在小程序中真正生效了');
}, [width])

  ...
}
```

#### 参数

1. `callback` 回调函数，与 `useEffect` 类似，可以返回一个函数处理 unsubscribe 时的逻辑。
2. `deps` 依赖参数，与 `useEffect` 类似，只有依赖项发生了变化，才会触发回调执行。

#### 返回值

无
