---
title: API
order: 3
---

# API

Remax 对小程序 API 做了简单的 Promise 封装，所有 API 通过平台对应的文件导出。

```js
import { navigateTo, requestPayment, ... } from 'remax/wechat'

requestPayment(params).then(res => {
  console.log(res);
});
```
