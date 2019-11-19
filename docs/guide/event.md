---
title: 事件
order: 27
---

## 阻止冒泡

由于小程序本身没有阻止事件冒泡的方式，而是采用不同的方法属性来声明阻止冒泡（如 微信小程序的 catchtap），所以 Remax 自己实现了 stopPropagation 方法。

> 我们建议在 remax 中不要使用 catchtap 的方式，以免出现未知的问题\_
> 如果你使用了小程序原生组件，原生组件中的点击事件没有 stopPropagation 方法，不支持阻止冒泡。

用法如下：

```jsx
function Page() {
  function handleFooClick(event) {
    event.stopPropagation();
  }

  function handleBarClick() {
    ...
  }

  return (
    <View onClick={handleBarClick}>
        bar
      <View onClick={handleFooClick}>
        foo
      </View>
    </View>
  )
}
```

当你点击 foo 标签时，将会触发 `handleFooClick` 回调，但不会执行 `handleBarClick`。
