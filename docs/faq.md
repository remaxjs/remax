---
title: 常见问题
sidemenu: false
nav:
  title: FAQ
  order: 2
---

# 常见问题

## 我可以使用 React Hooks / Redux / Dva / 其他 React 特性 吗？

如果你使用 Remax 官方模板开始开发，应该会注意到以下代码：

![直接依赖官方 React](https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*OOYyTobuq84AAAAAAAAAAABkARQnAQ)

![直接引入 官方 React](https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*tm8iTqC6pxkAAAAAAAAAAABkARQnAQ)

**Remax 本身没有提供类 React DSL 或者自己去实现 React**。 你使用的就是 React 官方库，可以自己选择 React 版本，选择 React 相关的 store 方案，表单管理方案等等。而像 React Hooks 等特性自然都可以正常使用。

## 我可以使用 Ant Design / Ant Design Mobile / 其他 React DOM 依赖类库吗？

**小程序平台不是 Web 环境**，Remax 相当于 React DOM / React Native。正如 web 平台的类库不能在 react native 中使用一样，小程序中也应该使用小程序的类库。目前 React 在 小程序的生态圈还不够完善，这也给了开发者们很大的空间去发挥。

## 既然 web 的现成方案不能直接使用，我应该怎么快速开发 UI 组件？

**Remax 支持直接使用原生组件库**。具体请参考 [指南 - 小程序自定义组件](/guide/custom-component)。目前得知社区中已有开发者在开发 React 小程序组件库，值得期待。

## Remax 支持跨平台开发吗？

**支持，具体可参考 [跨平台开发](/guide/one)**。

## 使用高阶组件导致页面的生命周期未调用

如果使用了 Redux 的 connect ，请将 connect 的 option.forwardRef 设置为 true[文档](https://react-redux.js.org/api/connect#forwardref-boolean)。其它第三方库的高阶组件的处理方式也类似。原因如下。

对于使用 class 组件的页面，Remax 会通过 ref 获取页面生命周期。当页面组件被高阶组件（有时被称为 HOC）包裹时，通过 ref 取得的是 HOC 最外层的容器组件，而不是被包裹的组件 。我们需要 `React.forwardRef` 将 ref 转发到内部组件。

```jsx
import React, { forwardRef } from 'react';
import { View } from 'remax/alipay';
class IndexPage extends React.Component {
  onReady() {
    console.log('onReady被调用');
  }

  render() {
    return <View>这是一个例子</View>;
  }
}

// HOC 的容器是一个函数式组件
const HOC = Component => {
  const Wrapped = (props, ref) => {
    // 一些高阶组件的逻辑
    return <Component {...props} ref={ref} />;
  };

  return forwardRef(Wrapped);
};

// 另一种情况，HOC 容器是一个 class component
const ClazzHOC = Component => {
  class Wrapped extends React.Component {
    // 另一些高阶组件的逻辑
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component {...rest} ref={forwardRef} />;
    }
  }
  // 比起第一种情况，这里的处理要稍微麻烦一些
  return forwardRef((props, ref) => <Wrapped {...props} forwardRef={ref} />);
};
// 下面这三种方式导出的页面都是可以按照预期调用 `onReady`
export default ClazzHOC(IndexPage);
// export default HOC(IndexPage);
// export default IndexPage;
```

## 编译后小程序提示找不到 xxx 文件路径

1. 尝试删除打包目录，重新 build
2. 真机中出现此问题，查看编译选项是否开启了代码保护，目前开发模式开启代码保护有出错可能。

## 微信嵌套层级

Remax 默认为微信的每个 host 组件定义了嵌套层数。其中 `View` 20 层，其他组件都在 1 ~ 5 层。如果出现形如下图的情况，可以通过配置修改嵌套层数。

<img width="800" src="https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*pExGT4kna-AAAAAAAAAAAABkARQnAQ" />

```js
// remax.config.js

{
  UNSAFE_wechatTemplateDepth: {
    button: 2, // 把 button 的嵌套层数修改为 2 层
  }
}
```
