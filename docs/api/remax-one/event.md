---
title: 事件
order: 2
---

除了提供行为一致的组件外，我们对组件事件回调中的参数也做了统一的处理。以 `Input` 组件的 `onInput` 回调为例：

```javascript
import { Input } from 'remax/one';

export default () => {
  const handleInput = event => {
    console.log(event.target.value);
  };

  return <Input onInput={handleInput} />;
};
```

不同于小程序中通过 `e.detail.value` 来取值，我们把 `event` 对象往标准的 DOM 事件做了抹平，以此方便和 H5 同构。

> 注意
>
> 只有 `remax/one` 中的事件回调做了处理，平台特定的组件以及平台特定的属性依然沿用小程序原来的事件对象。

## Event

| 名称          | 类型                                                | 描述                            |
| ------------- | --------------------------------------------------- | ------------------------------- |
| target        | [Target](/api/remax-one/event#target)               | 事件 target                     |
| currentTarget | [CurrentTarget](/api/remax-one/event#currenttarget) | 事件 currentTarget              |
| type          | string                                              | 事件类型， 如 'tap'，'focus' 等 |
| nativeEvent   | any                                                 | 小程序原始事件对象              |

## TouchEvent

继承 Event 事件

| 名称           | 类型                                  | 描述                                                                                                         |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| touches        | [Touch](/api/remax-one/event#touch)[] | 包含了所有当前接触触摸平面的触点的 Touch 对象，无论它们的起始于哪个 element 上，也无论它们状态是否发生了变化 |
| changedTouches | [Touch](/api/remax-one/event#touch)[] | 包含了代表所有从上一次触摸事件到此次事件过程中，状态发生了改变的触点的 Touch 对象。                          |

## TouchStartEvent

继承 TouchEvent

## TouchMoveEvent

继承 TouchEvent

## TouchEndEvent

继承 TouchEvent

## TouchCancelEvent

继承 TouchEvent

## ImageLoadEvent

继承 Event

## ImageErrorEvent

继承 Event

## TapEvent

继承 Event

| 名称            | 类型       | 描述         |
| --------------- | ---------- | ------------ |
| stopPropagation | () => void | 阻止事件冒泡 |

## InputEvent

继承 Event

## FormEvent

继承 Event

## Target

| 名称       | 类型                   | 描述       |
| ---------- | ---------------------- | ---------- |
| id         | string                 | 节点 id    |
| offsetLeft | number                 | 左偏移量   |
| offsetTop  | number                 | 顶部偏移量 |
| dataset    | { [key: string]: any } | data 对象  |
| value      | any                    | 目标值     |

## CurrentTarget

| 名称       | 类型                   | 描述       |
| ---------- | ---------------------- | ---------- |
| id         | string                 | 节点 id    |
| offsetLeft | number                 | 左偏移量   |
| offsetTop  | number                 | 顶部偏移量 |
| dataset    | { [key: string]: any } | data 对象  |

## Touch

| 名称       | 类型   | 描述                                                                                     |
| ---------- | ------ | ---------------------------------------------------------------------------------------- |
| clientX    | number | 触点相对于可见视区左边沿的的 X 坐标. 不包括任何滚动偏移                                  |
| clientY    | number | 触点相对于可见视区上边沿的的 Y 坐标. 不包括任何滚动偏移                                  |
| pageX      | number | 触点相对于页面左边沿的的 X 坐标. 当存在水平滚动的偏移时, 这个值包含了水平滚动的偏移      |
| pageY      | number | 触点相对于页面左边沿的的 Y 坐标. 当存在垂直滚动的偏移时, 这个值包含了垂直滚动的偏移      |
| identifier | number | 一次触摸动作在移动的整个过程中, 该标识符不变. 可以根据它来判断跟踪的是否是同一次触摸过程 |
