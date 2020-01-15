---
title: 跨平台开发
order: 42
---

## Remax One

Remax 提供了 `remax-one` 作为跨平台开发的基础组件库。

[示例项目](https://github.com/remaxjs/examples/tree/master/one)

```jsx
import * as React from 'react';
import { View, Text } from 'remax-one';

export default () => {
  return (
    <>
      <View>view</View>
      <Text>text</Text>
    </>
  );
};
```

## 配置

`app.config.js` 以及页面的 `config.js` 配置文件支持跨多端配置方式：

```js
// app.config.js
const title = '小程序标题';
const bgColor = '#fff';
const pages = ['pages/index/index'];

// 微信
exports.wechat = {
  pages: ['pages/wechat/index', ...pages],
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: baColor,
  },
};

// 支付宝
exports.alipay = {
  pages: ['pages/alipay/index', ...pages],
  window: {
    defaultTitle: 'Alipay Todo App',
    titleBarColor: backgroundColor,
  },
};

// 头条
exports.toutiao = {
  pages: ['pages/toutiao/index', ...pages],
  window: {
    defaultTitle: 'Toutiao Todo App',
    titleBarColor: backgroundColor,
  },
};
```

_如果没有默认导出，Remax 会去读取对应平台的配置信息，通过 config.js，开发者还可以复用多端共用的配置逻辑。_

## 组件

`remax-one` 的组件经过筛选，只保留在各个平台都能运作的组件，我们称之为基础组件。至于有哪些基础组件可用，可以参考下方的文档。

如果需要直接使用某个平台特有的组件，可以直接从对应平台导入。如：

```jsx
import * as React from 'react';
import { View, Text } from 'remax-one';
import { ScrollView } from 'remax-wechat';

export default () => {
  return (
    <ScrollView>
      <View>view</View>
      <Text>text</Text>
    </ScrollView>
  );
};
```

## 属性

`remax-one` 只保留在各个平台都能运作的属性。关于组件的属性定义，可以参考下方的文档。

如果需要直接使用某个平台特有的属性，可以通过 `{平台前缀}-{平台原生属性名称}` 来命名，例如：

```jsx
import * as React from 'react';
import { View } from 'remax-one';

export default () => {
  return (
    <View
      id="id"
      className="class"
      alipay-onAppear={() => {}}
      wechat-bindanimationend={() => {}}
      wechat-disable-scroll={true}
    >
      view
    </View>
  );
};
```

> remax-one 废弃了 `onClick` 属性，统一使用 `onTap`

## 同构

你可以通过创建不同平台的同名文件做同构来封装跨平台组件和 API。例如：

```js
// src/api/navigateTo.alipay.js
import { chooseImage } from 'remax/alipay';

export default chooseImage;

// src/api/chooseImage.wechat.js
import { chooseImage } from 'remax/wechat';

export default chooseImage;

// src/api/chooseImage.toutiao.js
import { chooseImage } from 'remax/toutiao';

export default chooseImage;

// src/pages/index.js
import { View } from 'remax-one';
import chooseImage from '@/api/chooseImage';

export default () => {
  return (
    <View
      onClick={() => {
        chooseImage();
      }}
    >
      choose image
    </View>
  );
};
```

同理可以对组件做封装。
