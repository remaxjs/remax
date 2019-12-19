---
title: 常见问题
order: 60
---

### 在小程序里使用 React 会有什么限制吗？

不会。Remax 不同于静态编译方案，拥有完整的 React 环境，因此不会有特殊的限制。你可以把 Remax 理解为针对小程序的 React Native。

### 如何跨平台开发？

关于这个问题，请查看 [高级指南 - 跨平台开发](/advanced-guide/cross-platform)

### 使用高阶组件导致页面的生命周期会无效

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

## 注意

### 微信的限制

由于微信模板无法递归嵌套自身的限制，所以在 Remax 中最好不要实现太过复杂的递归嵌套组件，以免出现不可预期的问题。
