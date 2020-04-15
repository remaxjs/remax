---
title: API
order: 1
---

`remax/[平台]` 导出了各个平台下提供的所有 API，并做了 promise 支持。 如：

```jsx
import { navigateTo, chooseImage } from 'remax/wechat';
import { navigateTo, chooseImage } from 'remax/alipay';
import { navigateTo, chooseImage } from 'remax/toutiao';

...

chooseImage(...).then(...)
```

[微信官方 API 文档](https://developers.weixin.qq.com/miniprogram/dev/api/)

[支付宝官方 API 文档](https://opendocs.alipay.com/mini/api)

[字节跳动官方 API 文档](https://microapp.bytedance.com/dev/cn/mini-app/develop/api/foundation/tt.caniuse)
