---
title: remax/macro
---

`remax/macro` 下包含的是基于 [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) 的宏。

_带有 `?` 的选项表示非必填项_

## useAppEvent(eventName, callback)

App 生命周期 hook

```jsx
import { useAppEvent } from 'remax/macro';

...

useAppEvent('onShow', () => {
  console.log('on show');
})
```

## usePageEvent(eventName, callback)

Page 生命周期 hook

```jsx
import { usePageEvent } from 'remax/macro';

...

usePageEvent('onShow', () => {
  console.log('on show');
})
```

#### 参数

1. `eventName` 生命周期名称
2. `callback` 回调函数，各个生命周期回调函数的具体签名，参考各个平台对应的文档。

#### 返回值

无

#### 参数

1. `eventName` 生命周期名称
2. `callback` 回调函数，各个生命周期回调函数的具体签名，参考各个平台对应的文档。

#### 返回值

无

## createHostComponent(name, props)

注册基础组件

```jsx
import { createHostComponent } from 'remax/macro';

// 假设微信提供了一个 Remax 还没有支持的新组件 custom-view，则可以通过 createHostComponent 创建：
const CustomView = createHostComponent('custom-view', [
  'prop',
  // 支持传入一个数组来做属性别名
  ['class', 'className'],
]);

...

<CustomView prop="" className=" />
```

#### 参数

1. `name` 基础组件名称
2. `props` 基础组件拥有的属性名称列表

- 数组对象可以是一个 string，直接表明属性名称
- 数组对象可以是一个数组，用来给原生属性做别名，形如：`['class', 'className']`，表示在 remax 中用 `className` 代替 `class`

#### 返回值

返回一个封装后的 React 组件。

## requirePlugin(name)

引入插件方法，与原生 `requirePlugin` 相同

```js
import { requirePlugin } from 'remax/macro';

const Plugin = requirePlugin('plugin://xxxx');
```

#### 参数

1. `name` 插件名称

#### 返回值

返回一个原生插件对象

## requirePluginComponent(name)

引入插件组件，与原生 `requirePlugin` 相同

```jsx
import { requirePluginComponent } from 'remax/macro';

const PluginComponent = requirePluginComponent('plugin://xxxx');

...

<PluginComponent />
```

#### 参数

1. `name` 插件组件名称

#### 返回值

返回一个封装好的 React 组件
