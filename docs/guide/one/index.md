---
title: 小程序应用
---

# 跨平台开发

## 跨平台开发的挑战

小程序作为一项非标准的技术，各个小程序平台之间虽然大体上相似，但依然有非常多的差异。“一次开发多端运行”当然是非常美好的愿望，但我们在设计 Remax 之初就意识到各个小程序平台之间的差异是无法被抹平的，因为没有一个标准来指导我们该如何抹平这些差异。

所以我们在最开始，为每个小程序平台提供了独立的基础组件。开发者如果要做跨平台开发，需要自己去封装基础组件。但很快，我们也意识到这对开发者来说是一件很麻烦的事情，特别是后面我们要支持更多平台的话。

受 CSS 属性名前缀的启发，我们重新设计了 Remax 的跨平台方案。我们非常克制地选取了 9 个基础组件，抹平了他们之间非平台私有的属性，并且以属性名前缀的方式来支持各个平台私有的特性。我们希望开发者在做跨平台开发时能清楚地意识到你写下的这行代码只会在特定的平台上生效。

## Remax One

Remax One 就是我们提供的跨平台解决方案。通过 `remax/one` 我们提供了跨平台的组件。

```jsx
import * as React from 'react';
import { View, Button } from 'remax/one';

export default () => {
  const [count, setCount] = React.useState(0);

  return (
    <View ali-onAppear={() => console.log('Aha!')}>
      <View>{count}</View>
      <Button onTap={() => setCount(count + 1)}>+1</Button>
    </View>
  );
};
```

可以看到，对于 `onTap` 这样通用的属性我们进行了统一，而阿里小程序独有的 `onAppear` 属性，则需要加上 `ali-` 的前缀。

[完整的示例项目](https://github.com/remaxjs/examples/tree/master/one)

> `remax/one` 是 **1.19.0** 以后引入的特性。

## 使用

使用 `create-remax-app` 创建：

```bash
$ npx create-remax-app my-app
$ cd my-app && npm install

or

$ yarn create remax-app my-app
$ cd my-app && yarn
```

或者在已有的项目中配置：

```javascript
// remax.config.js
module.exports = {
  // 通过环境变量区分不同平台的输出目录
  output: 'dist/' + process.env.REMAX_PLATFORM,
};
```

> 旧版本兼容
>
> 2.6.0 之前的版本需要在 remax.config.js 中配置 one: true 来开启 remax/one 特性

## 小程序配置

`app.config.js` 以及页面的 `config.js` 配置文件支持多端配置方式：

```js
// app.config.js
const title = '小程序标题';
const bgColor = '#fff';
const pages = ['pages/index/index'];

// 阿里
exports.ali = {
  pages: ['pages/ali/index', ...pages],
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

> 如果没有默认导出，`@remax/cli` 就会去读取对应平台的配置信息。

## 使用文件名后缀区分不同平台代码

你可以通过创建不同平台的同名文件来封装跨平台组件和 API。例如：

```js
// src/api/showToast/index.js
import { showToast } from 'remax/ali';

export default showToast;
```

```js
// src/api/showToast/index.wechat.js
import { showToast } from 'remax/wechat';

export default options => {
  showToast({
    ...options,
    title: options.content,
  });
};
```

```js
// src/pages/index.js
import * as React from 'react';
import { View } from 'remax/one';
import showToast from '@/api/showToast';

export default () => {
  return (
    <View
      onClick={() => {
        showToast({ content: 'Hello World!' });
      }}
    >
      CLICK ME!
    </View>
  );
};
```

`@remax/cli` 会优先读取 `[target].js` 文件，这个规则针对 CSS 等其他文件同样有效。

> 注意：上面的例子中的 `src/api/showToast/index.js` 是必须的，也就是说不能只提供带有平台后缀的文件。

## 使用环境变量区分不同平台的代码

你还可以在代码中直接通过 `process.env.REMAX_PLATFORM` 区分平台。例如：

```js
if (process.env.REMAX_PLATFORM === 'wechat') {
  console.log('wechat');
}
```

> 注意
>
> 这里需要直接使用 `process.env.REMAX_PLATFORM`，这样在代码压缩时就可以把没用到的平台代码删除。

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

如果需要使用某个平台特有的属性，可以通过 `[平台前缀]-[平台原生属性名称]` 来设置，例如：

```jsx
import * as React from 'react';
import { View, TapEvent } from 'remax/one';

export default () => {
  return (
    <View
      id="id"
      className="class"
      ali-onAppear={() => {}}
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
