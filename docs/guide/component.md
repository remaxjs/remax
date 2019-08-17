---
title: 组件
order: 8
---

Remax 用驼峰的方式来命令小程序组件，如：

```js
import { View, Text, Image, ... } from 'remax/wechat'
```

## Props

Remax 遵循 React 规范来命名小程序属性，如：

Remax

```jsx
<View className="view" style={{ display: 'flex' }} onClick={handleClick} />
```

对应微信小程序

```html
<view class="view" style="display: flex;" bindtap="handleClick"></view>
```

对应支付宝小程序

```html
<view class="view" style="display: flex;" onTap="handleClick"></view>
```
