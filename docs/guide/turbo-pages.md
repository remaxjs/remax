---
title: 性能优化选项
order: 47
---

# 性能优化选项

如果存在对性能要求很高的页面，可以通过配置 `turboPages` 选项对某些页面启动性能优化。如：

```js
// remax.config.js
module.exports = {
  turboPages: ['pages/index/index', 'pages/index2/*'],
};
```

上述配置将会对 `pages/index/index` 以及 `pages/index2/` 下的所有页面做性能优化。

> 启动性能优化存在如下限制，建议没有很迫切的性能需求不要轻易开启这个选项。
>
> 1. 目前只支持阿里平台使用。
> 2. 开启性能优化的页面，不能利用 react 动态特性 对 dom 结构做出修改

关于第二点限制的一些 case：

1. 修改 dom 结构：

```jsx
function Component({ children }) {
  return <View>{React.Children.map(children, child => (
    <View>{child}</View>
  ))}</View>
}

...

<Component>
  <View>view 1</View>
  <View>view 2</View>
</Component>
```

2. 修改 dom 的属性:

```jsx
function Component({ children }) {
  return <View>{React.Children.map(children, child => (
    React.cloneElement(child, { onInput: () => {} })
  ))}</View>
}

...

<Component>
  <Input />
</Component>
```

如果你想让这种修改属性的行为可以运作，需要修改为：

```jsx
function Component({ children }) {
  return <View>{React.Children.map(children, child => (
    React.cloneElement(child, { onInput: () => {} })
  ))}</View>
}

...

<Component>
  {({ onInput }) =>
  <Input onInput={onInput} />}
</Component>
```

> 可以看到优化性能的同时会牺牲 React 的动态性，因此开发者需要做出取舍。
