---
title: 小程序自定义组件
order: 28
group:
  title: 基础指南
  order: 4
---

# 小程序自定义组件

你可以在 React 组件中直接使用小程序的自定义组件。包括支持原生 UI 组件库，如：[weui](https://github.com/wechat-miniprogram/weui-miniprogram), [min-ali-ui](https://github.com/Alibaba-mp/mini-ali-ui)
等等

以阿里小程序的 [Badge](https://docs.alipay.com/mini/component-ext/badge) 组件为例：

```js
import React from 'react';
import { View } from 'remax/ali';
import Badge from 'mini-ali-ui/es/badge'; // 直接当成 React 组件引用，无需申明 useComponents

export default () => (
  <View>
    <Badge>
      <View slot="inner">Remax</View>
    </Badge>
  </View>
);
```

使用项目中的自定义组件：

```js
import React from 'react';
import { View } from 'remax/ali';
import NativeCard from './native-card'; // native-card 是一个原生自定义组件

export default () => (
  <View>
    <NativeCard />
  </View>
);
```

以微信小程序的扩展组件库 weui 的 [Cells\Cell](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/cell.html) 组件为例：

```js
import * as React from 'react';
import { View } from 'remax/wechat';
import Cells from "weui-miniprogram/miniprogram_dist/cells/cells";
import Cell from 'weui-miniprogram/miniprogram_dist/cell/cell';
import 'weui-miniprogram/miniprogram_dist/weui-wxss/dist/style/weui.wxss';

export default () => (
  <View>
    <Cells title="带说明的列表项">
      <Cell value="标题文字" footer="说明文字"></Cell>
      <Cell>
        <View>标题文字（使用slot）</View>
        <View slot="footer">说明文字</View>
      </Cell>
     </Cells>
  </View>
);
```

## 组件类型

如果你使用的是 TypeScript，使用第三方小程序自定义组件时需要自己写组件类型，还是以 `mini-ali-ui/es/badge` 为例。

### 完整做法

1. 在 `tsconfig.json` 新增配置：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": [ "./typings/*" ]
    },
    ...
  }
}
```

2. 新建 `typings/min-ali-ui/es/badge.d.ts` 文件
3. 写入以下内容：

```typescript
import { ComponentType } from 'react';

declare const Badge: ComponentType<{
  className?: string;
  text?: string;
  dot?: boolean;
  overflowCount?: number;
  withArrow?: boolean;
  direction?: 'middle' | 'left' | 'right';
  stroke?: boolean;
}>;

export default Badge;
```

### 偷懒做法

在 `typings/index.d.ts` 写入以下内容：

```typescript
declare module 'mini-ali-ui/es/badge';
```

## 注意事项

### 请按照自定义组件的定义方式声明属性（并非所有组件都采用驼峰的方式命名属性）。

**错误：**

```js
import React from 'react';
import { View } from 'remax/ali';
import VantIcon from '@vant/weapp/lib/icon';

export default () => {
  const handleClick = () => {};

  return (
    <View>
      {/** vant-weapp 中 icon 的属性定义为  class-prefix, bindclick，所以应遵循其命名规则 */}
      <VantIcon name="close" classPrefix="custom-class-prefix" onClick={handleClick} />
    </View>
  );
};
```

**正确：**

```js
import React from 'react';
import { View } from 'remax/ali';
import VantIcon from '@vant/weapp/lib/icon';

export default () => {
  const handleClick = () => {};

  return (
    <View>
      <VantIcon name="close" class-prefix="custom-class-prefix" bindclick={handleClick} />
    </View>
  );
};
```

### 对于带有具名 `slot` 的组件，具名 `slot` 部分的最外层只能用 `View` 组件。

**错误：**

```js
import React from 'react';
import { View } from 'remax/ali';
import Badge from 'mini-ali-ui/es/badge';

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
import { View } from 'remax/ali';
import Badge from 'mini-ali-ui/es/badge';

export default () => (
  <View>
    <Badge>
      <View slot="inner">Remax</View>
    </Badge>
  </View>
);
```

### 不能在小程序自定义组件上使用 “Spread Attributes”。

**错误：**

```js
import React from 'react';
import { View } from 'remax/ali';
import Badge from 'mini-ali-ui/es/badge';

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
import { View } from 'remax/ali';
import Badge from 'mini-ali-ui/es/badge';

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
