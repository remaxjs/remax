---
title: 常见问题
order: 60
---

### 我可以使用 React Hooks / Redux / Dva / 其他 React 特性 吗？

如果开发者使用 Remax 官方模板开始开发，应该会注意到以下代码：

![直接依赖官方 React](https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*OOYyTobuq84AAAAAAAAAAABkARQnAQ)

![直接引入 官方 React](https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*tm8iTqC6pxkAAAAAAAAAAABkARQnAQ)

**Remax 本身没有提供类 React DSL 或者自己去实现 React**。 开发者应该意识到你使用的就是 React 官方库，你可以自己选择 React 版本，选择 React 相关的 store 方案，表单管理方案等等。而像 React Hooks 等特性自然都可以正常使用。

### 我可以使用 Ant Design / Ant Design Mobile / 其他 React DOM 依赖类库吗？

**小程序平台不是 Web 环境**，Remax 对标的就是 React DOM / React Native。正如 web 平台的类库不能在 react native 中使用一样，小程序中也应该使用小程序的类库。目前 React 在 小程序的生态圈还不够完善，这也给了开发者们很大的空间去发挥。

### 既然 web 的现成方案不能直接使用，我应该怎么快速开发 UI 组件？

**Remax 支持直接使用原生组件库**。具体请参考 [指南 - 小程序自定义组件](/guide/custom-component)。目前得知社区中已有开发者在开发 React 小程序组件库，值得期待。

### Remax 支持跨平台开发吗？

**支持，具体可参考 [高级指南 - 跨平台开发](/advanced-guide/cross-platform)**。 Remax 在推出之初，就提出了一个观点，跨平台实践更适合在业务开发中交给开发者去同构，会更合理和灵活。但是在现实中，开发者自己去做同构自然也会增长很多工作量。因此后续 Remax 会为开发者推出跨平台开发的最佳实践 - `remax-universe`。目前 Remax 专注在打磨 Remax 核心功能，我们认为支持平台是可以快速展开的，因此我们先做好 Remax 本身，再横向展开支持。

### Remax 的性能有问题吗？

**性能问题在出现之前，都不是问题**。这是我们想先告诉开发者的一个概念，提前考虑性能问题是缺少实际场景的考虑。

由于 Remax 的实现在运行时中做了很多事情，对于开发者来说有一种黑盒的既视感，开发者会 **预设** Remax 在处理很复杂的逻辑，性能 "一定" 也会受影响。关于这点我们会从三个方面来看：

1. 小程序框架本身的限制

小程序本身的文档会有明确的关于性能的说明，其中最重要的两项是

- 不要频繁的 setData。
- 页面节点不要大于 xxx 个。

2. React 本身虚拟 DOM 渲染机制在小程序中的限制

React 的虚拟 DOM 机制在 Remax 中存在于逻辑层，小程序框架本身是不会理会 React 的虚拟 DOM 的。因此如果开发者本身没有处理好 React Pure Render 这个事情，性能问题会在小程序中被放大。

3. Remax 本身的优化

把 React 跑在小程序的逻辑层之上，是无可避免会增长开销的，而渲染层的动态模板逻辑相对静态模板也会有一定损耗。但是 Remax 会对 setData 的传输量做压缩和精简，保证每次更新只会修改变化的部分。

综合上述来看，我们总结了一下目前开发者遇到的性能问题的几个 case：

- 没有做好 **pure render** （一般与使用了 Redux 等全局 Store 类似的逻辑有关）。
- 频繁 setState（这与原生小程序中频繁 setData 的行为类似）。
- 长列表页面（与原生小程序中的页面节点限制相关，在 Remax 中会被放大）。
- 其中长列表页面，个人的经验是，以一屏显示 6 个 item 为例，一般在翻页到 15 页以后会出现可感知的卡顿。如果有优化的需要，可以做虚拟滚动优化，如 https://github.com/remaxjs/remax-window。

### 使用高阶组件导致页面的生命周期未调用

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

### 编译后小程序提示找不到 xxx 文件路径

1. 尝试删除打包目录，重新 build
2. 真机中出现此问题，查看编译选项是否开启了代码保护，目前开发模式开启代码保护有出错可能。

### 微信嵌套层级

Remax 默认为微信的每个 host 组件定义了嵌套层数。其中 `View` 20 层，其他组件都在 1 ~ 5 层。如果出现形如下图的情况，可以通过配置修改嵌套层数。

![未找到模板提醒](https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*pExGT4kna-AAAAAAAAAAAABkARQnAQ)

```js
// remax.config.js

{
  UNSAFE_wechatTemplateDepth: {
    button: 2, // 把 button 的嵌套层数修改为 2 层
  }
}
```
