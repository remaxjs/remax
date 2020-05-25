---
title: 组件
order: 2
---

# 组件

## 组件名

 所有组件名称都是首字母大写的驼峰形式，如：

```js
import { View, Text, Image, ... } from 'remax/wechat'
```

## 组件属性

Remax 按照 React 的风格来命名小程序属性，如：

Remax：

```jsx
<View className="view" style={{ display: 'flex' }} onTap={handleClick} />
```

对应微信小程序：

```html
<view class="view" style="display: flex;" bindtap="handleClick"></view>
```

对应阿里小程序：

```html
<view class="view" style="display: flex;" onTap="handleClick"></view>
```

## 注册基础组件

如果小程序添加了新的组件，而你所用的 Remax 版本还没提供该组件的支持，Remax 允许你自己创建一个新的基础组件。

假设小程序新增了一个 `<foo-bar>` 组件，你可以通过 `createHostComponent` 这个方法把这个组件注册到 Remax 中：

```jsx
import * as React from 'react';
import { createHostComponent } from 'remax/macro';

const FooBar = createHostComponent('foo-bar', ['foo']);

function Page() {
  return <FooBar foo="bar" />;
}
```

你也可以给基础组件的属性起别名，使其更符合 React 的命名风格：

```jsx
import * as React from 'react';
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
import * as React from 'react';
import { createHostComponent } from 'remax/macro';

const FooBar = createHostComponent<{ foo: string; }>('foo-bar', ['foo']);

function Page() {
  return <FooBar foo="bar" />;
}
```

> 注意
>
> 组件名称和组件属性不能是动态变量，以下写法是错误的。

```jsx
import * as React from 'react';
import { createHostComponent } from 'remax/macro';

const componentName = 'foo-bar';
const props = ['foo'];
// 必须直接写明组件名称和组件属性，不可用动态写法或变量传递的形式。
const FooBar = createHostComponent(componentName, props);

function Page() {
  return <FooBar foo="bar" />;
}
```
