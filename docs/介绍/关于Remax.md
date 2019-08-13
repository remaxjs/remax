---
metaTitle: '关于 Remax'
metaDescription: '关于 Remax'
order: 2
---

**Remax** 是可以用 **React** 开发小程序的框架。不同于静态编译的方案，Remax 不仅是让开发者用 JSX 语法开发，而是拥有 **完整的 React 特性**，例如 React Hooks。

**Learn once, write anywhere** 是 Remax 的重要理念，我们专注于将 React 生态圈带入小程序生态圈。

你也可以用 Remax 打造跨多端小程序开发解决方案，具体请查看 [指南：跨平台开发](/指南/跨平台开发.md)。

## Remax 原理

React 本身的设计拥有 renderer 的概念，目的是让 React 支持不同平台的开发。正如我们所见：

- react-dom -> web renderer
- react-native -> app renderer
- **remax -> 小程序 renderer**

Remax 利用 [react-reconciler](https://github.com/facebook/react/tree/master/packages/react-reconciler) 建立虚拟 dom，收集页面结构，映射到小程序模板，完成渲染。
