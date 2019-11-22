---
title: 组件
order: 23
---

Remax 用驼峰的方式来命令小程序组件，如：

```js
import { View, Text, Image, ... } from 'remax/wechat'
```

## Props

Remax 遵循 React 规范来命名小程序属性，如：

Remax

```jsx
<View className="view" style={{ display: 'flex' }} onClick={handleClick} />
```

对应微信小程序

```html
<view class="view" style="display: flex;" bindtap="handleClick"></view>
```

对应支付宝小程序

```html
<view class="view" style="display: flex;" onTap="handleClick"></view>
```

## 注册基础组件

如果小程序添加了新的组件，而你所用的 Remax 版本还没提供该组件的支持，Remax 允许你自己创建一个新的基础组件。

假设小程序新增了一个 `<foo-bar>` 组件，你可以这么做以让 Remax 提前支持：

```jsx
import { createHostComponent } from 'remax/macro';

const FooBar = createHostComponent('foo-bar', ['foo']);

function Page() {
  return <FooBar foo="bar" />;
}
```

你也可以给基础组件的属性起别名，使其更符合 React 的命名风格：

```jsx
import { createHostComponent } from 'remax/macro';

const FooBar = createHostComponent('foo-bar', [
  // 支持传入 [prop, alias] 形式的数组来起别名
  ['class', 'className'],
]);

function Page() {
  return <FooBar className="class" />;
}
```

如果你使用的是 TypeScript，还可以定义 `props` 类型：

```jsx
import { createHostComponent } from 'remax/macro';

const FooBar = createHostComponent<{ foo: string; }>('foo-bar', ['foo]);

function Page() {
  return <FooBar foo="bar" />;
}
```

> 组件名称和组件属性不能是动态变量，以下写法是错误的。

```jsx
import { createHostComponent } from 'remax/macro';

const componentName = 'foo-bar';
const props = ['foo'];
// 必须直接写明组件名称和组件属性，不可用动态写法或变量传递的形式。
const FooBar = createHostComponent(componentName, props);

function Page() {
  return <FooBar foo="bar" />;
}
```
