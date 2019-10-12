---
title: 小程序自定义组件
order: 26
---

Remax 允许你在 React 组件中引用小程序的自定义组件。

以支付宝小程序的 [Badge](https://docs.alipay.com/mini/component-ext/badge) 组件为例：

```js
import React from 'react';
import Badge from 'mini-antui/es/badge'; // 直接当成 React 组件引用，无需申明 useComponents
import { View } from 'remax/alipay';

export default () => (
  <View>
    <Badge>
      <View slot="inner">Remax</View>
    </Badge>
  </View>
);
```

## 注意事项

对于带有 `slot` 的组件，`slot` 部分的最外层只能用 `View` 组件

**错误：**

```js
export default () => (
  <View>
    <Badge>
      <Text slot="inner">Remax</Text>
    </Badge>
  </View>
);
```

**正确：**

```js
export default () => (
  <View>
    <Badge>
      <View slot="inner">Remax</View>
    </Badge>
  </View>
);
```
