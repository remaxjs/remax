---
title: 常见问题
sidemenu: false
nav:
  title: FAQ
  order: 3
---

# 常见问题

## 我可以使用 React Hooks / Redux / Dva / 其他 React 特性 吗？

可以。

## 我可以使用 Ant Design / Ant Design Mobile / 其他 React DOM 依赖类库吗？

不可以。

小程序中没有 DOM，无法使用基于 React DOM 的 UI 库。

## 既然 web 的现成方案不能直接使用，我应该怎么快速开发 UI 组件？

Remax 支持直接使用原生组件库。具体请参考 [小程序自定义组件](/guide/basic/custom-component)。

## Remax 支持跨平台开发吗？

支持。

具体可参考 [跨平台开发](/guide/one)。

## 使用高阶组件导致页面的生命周期未调用

如果使用了 Redux 的 connect ，请将 connect 的 option.forwardRef 设置为 true[文档](https://react-redux.js.org/api/connect#forwardref-boolean)。其它第三方库的高阶组件的处理方式也类似。原因如下。

对于使用 class 组件的页面，Remax 会通过 ref 获取页面生命周期。当页面组件被高阶组件（有时被称为 HOC）包裹时，通过 ref 取得的是 HOC 最外层的容器组件，而不是被包裹的组件 。我们需要 `React.forwardRef` 将 ref 转发到内部组件。

```jsx
import React, { forwardRef } from 'react';
import { View } from 'remax/ali';

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

## 小程序开发模式下 `remax build --watch` 无法真机预览?

开发模式下默认不压缩文件以保证快速的响应文件变更，如需在开发模式进行真机调试（压缩文件），可以使用　`--minimize` 或 `-m` 参数开启，会增加整体构建时间，请酌情使用。

> 注意
>
> minimize 压缩不等同于生产模式！
> 在 wechat 平台上使用 `--minimize` 参数预览时，需要在开发工具 IDE 本地设置中关闭"上传代码压缩混淆（如下图)"选项，否则 Webpack 和 IDE 的双重压缩会导致编译器无法解析语法而报错。

<img width="400" src="https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*mx6OQKvo_FEAAAAAAAAAAABkARQnAQ" />

## 与 Taro 的区别？

Taro 3.0 版本的实现原理与 Remax 大同小异，没有太大的区别。主要区别在于以下两个方面：

- **跨平台设计**，我们深知要打造一个面面俱到的多平台框架会有非常多的坑，与其挖一个大坑填不上，我们选择把有限的精力放在框架的核心功能上，并提供跨平台同构机制以及一个精简的跨平台实现（Remax One），让开发者可以根据自己的业务需求去做跨平台实现。
- **专注 React**，因为 React 是我们自己大量使用和熟悉的前端框架，Remax 会持续专注在 React 技术栈。
