---
title: 页面参数
order: 12
---

Remax 将页面参数通过 `props` 传递给页面组件，如：

```js

export default (props) => {
  // 页面参数
  console.log(props.location.query);

  ...
}
```

你也可以通过小程序原生的方式获取参数（通常在 `onLoad` 方法里获取），包括场景值也是。
