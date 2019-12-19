---
title: 小程序自定义组件
order: 28
---

Remax 允许你在 React 组件中引用小程序的自定义组件。包括支持原生 UI 组件库，如：[weui](https://github.com/wechat-miniprogram/weui-miniprogram), [min-antui](https://github.com/ant-mini-program/mini-antui)
等等

以支付宝小程序的 [Badge](https://docs.alipay.com/mini/component-ext/badge) 组件为例：

```js
import React from 'react';
import { View } from 'remax/alipay';
import Badge from 'mini-antui/es/badge'; // 直接当成 React 组件引用，无需申明 useComponents

export default () => (
  <View>
    <Badge>
      <View slot="inner">Remax</View>
    </Badge>
  </View>
);
```

## 注意事项

请按照自定义组件的定义方式声明属性（并非所有组件都采用驼峰的方式命名属性）。

**错误：**

```js
import React from 'react';
import { View } from 'remax/alipay';
import VantIcon from 'vant-weapp/dist/icon';

export default () => {
  const handleClick = () => {};

  return (
    <View>
      {/** vant-weapp 中 icon 的属性定义为  class-prefix, bindclick，所以应遵循其命名规则 */}
      <VantIcon
        name="close"
        classPrefix="custom-class-prefix"
        onClick={handleClick}
      />
    </View>
  );
};
```

**正确：**

```js
import React from 'react';
import { View } from 'remax/alipay';
import VantIcon from 'vant-weapp/dist/icon';

export default () => {
  const handleClick = () => {};

  return (
    <View>
      <VantIcon
        name="close"
        class-prefix="custom-class-prefix"
        bindclick={handleClick}
      />
    </View>
  );
};
```

对于带有具名 `slot` 的组件，具名 `slot` 部分的最外层只能用 `View` 组件。

**错误：**

```js
import React from 'react';
import { View } from 'remax/alipay';
import Badge from 'mini-antui/es/badge';

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
import React from 'react';
import { View } from 'remax/alipay';
import Badge from 'mini-antui/es/badge';

export default () => (
  <View>
    <Badge>
      <View slot="inner">Remax</View>
    </Badge>
  </View>
);
```

不能在小程序自定义组件上使用 “Spread Attributes”。

**错误：**

```js
import React from 'react';
import { View } from 'remax/alipay';
import Badge from 'mini-antui/es/badge';

export default () => {
  const badgeProps = {
    text: 1,
  };

  return (
    <View>
      <Badge {...badgeProps}>
        <View slot="inner">Remax</View>
      </Badge>
    </View>
  );
};
```

**正确：**

```js
import React from 'react';
import { View } from 'remax/alipay';
import Badge from 'mini-antui/es/badge';

export default () => {
  return (
    <View>
      <Badge text={1}>
        <View slot="inner">Remax</View>
      </Badge>
    </View>
  );
};
```
