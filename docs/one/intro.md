---
title: 介绍
order: 0
---

## 跨平台开发的挑战

各家小程序平台之间虽然大体上相似，但依然有非常多的细微差异。跨平台开发最大的挑战就是如何抹平这些差异。不同于其他小程序框架的选择，我们选择了  不抹平平台差异，我们希望开发者在做跨平台开发时能清楚地意识到你写下的这行代码只会在特定的平台上生效。而平台之间相同的部分我们按照我们口味做了适当的抹平。

## Remax One

Remax One 是我们提供的跨平台解决方案。通过 `remax/one` 我们提供了跨平台的组件。

```jsx
import * as React from 'react';
import { View, Text } from 'remax/one';

export default () => {
  return (
    <>
      <View>view</View>
      <Text>text</Text>
    </>
  );
};
```

[完整的示例项目](https://github.com/remaxjs/examples/tree/master/one)

## 使用

在 `remax.config.js` 中设置 `one: true` 来开启 Remax One。

```javascript
// remax.config.js
module.export = {
  one: true,
  // 通过环境变量区分不同平台的输出目录
  output: 'dist/' + process.env.REMAX_PLATFORM,
};
```

## 小程序配置

`app.config.js` 以及页面的 `config.js` 配置文件支持多端配置方式：

```js
// app.config.js
const title = '小程序标题';
const bgColor = '#fff';
const pages = ['pages/index/index'];

// 支付宝
exports.alipay = {
  pages: ['pages/alipay/index', ...pages],
  window: {
    defaultTitle: 'Alipay Todo App',
    titleBarColor: backgroundColor,
  },
};

// 微信
exports.wechat = {
  pages: ['pages/wechat/index', ...pages],
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: backgroundColor,
  },
};
```

> 如果没有默认导出，`remax-cli` 就会去读取对应平台的配置信息。

## 使用文件名后缀区分不同平台代码

你可以通过创建不同平台的同名文件做同构来封装跨平台组件和 API。例如：

```js
// src/api/chooseImage.js
import { chooseImage } from 'remax/alipay';

export default chooseImage;
```

```js
// src/api/chooseImage.wechat.js
import { chooseImage } from 'remax/wechat';

export default chooseImage;
```

```js
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

`remax-cli` 会优先读取 `[target].js` 文件，这个规则针对 CSS 等其他文件同样有效。

> 注意：上面的例子中 ·src/api/chooseImage.js· 是必须的，也就是说不能只提供带有平台后缀的文件。

## 组件

如上面所说，我们非常克制谨慎地对 `remax/one` 中提供的组件做了筛选和重新设计，只保留了我们能保证在各个平台之间行为一致的组件和属性。

如果需要使用某个平台特有的组件，可以直接从对应平台导入。如：

```jsx
import * as React from 'react';
import { View, Text } from 'remax/one';
import { ScrollView } from 'remax/wechat';

export default () => {
  return (
    <ScrollView>
      <View>view</View>
      <Text>text</Text>
    </ScrollView>
  );
};
```

如果需要使用某个平台特有的属性，可以通过 `{平台前缀}-{平台原生属性名称}` 来设置，例如：

```jsx
import * as React from 'react';
import { View, TapEvent } from 'remax-one';

export default () => {
  return (
    <View
      id="id"
      className="class"
      alipay-onAppear={() => {}}
      wechat-bindanimationend={() => {}}
      wechat-disable-scroll={true}
      onTap={(event: TapEvent) => {
        console.log(event);
      }}
    >
      view
    </View>
  );
};
```
