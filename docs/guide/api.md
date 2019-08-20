---
title: 小程序 API
order: 26
---

Remax 提供原生小程序 API 支持，如；

```js
import { navigateTo, requestPayment, ... } from 'remax/wechat'
```

拥有事件回调（success，fail）的 API，Remax 还提供 `Promise` 支持，如：

```js
import { requestPayment } from 'remax/wechat';

requestPayment(params).then(res => {
  console.log(res);
});
```
