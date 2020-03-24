---
title: 平台
order: 28
---

Remax 目前支持的平台

- 微信小程序: wechat
- 支付宝小程序: alipay
- 字节小程序: toutiao

## 获取平台信息

```js
import { Platform } from 'remax';

console.log(Platform.current) // 当前环境，如 wechat，alipay，toutiao 或其他
console.log(Platform.isWechat) // 是否是微信
console.log(Platform.isAlipay) // 是否是支付宝
console.log(Platform.isToutiao) // 是否是字节跳动

...
```

## 针对平台开发

Remax 为每个小程序平台提供单独的模块，如：

```js
// 微信小程序开发
import { View, navigateTo, useShow } from 'remax/wechat';
```

```js
// 支付宝小程序开发
import { View, navigateTo, useShow } from 'remax/alipay';
```

```js
// 字节小程序开发
import { View, navigateTo, useShow } from 'remax/toutiao';
```

## 跨平台开发

如果你有跨平台开发的需求，请查阅 [跨平台开发](/one/intro)
