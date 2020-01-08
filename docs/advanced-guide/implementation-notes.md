---
title: Remax 实现原理
order: 45
---

本文将向大家介绍 Remax 的实现原理，Remax 本身分为两个部分，`remax` 和 `remax-cli`，`remax` 提供运行时，`remax-cli` 提供构建功能，这里主要介绍运行时的部分。

Remax 的运行时本质是一个通过 `react-reconciler` 实现的一个小程序端的渲染器。关于 `react-reconciler` 和 React 渲染器相关的内容推荐观看[这个视频](https://www.youtube.com/watch?v=CGpMlWVcHok)，这里不再赘述。

大家知道，小程序对我们的代码屏蔽了 DOM，我们的代码运行在一个 worker 线程中，无法直接去操作视图层的 DOM。Remax 通过引入一层 `VNode`，让 React 在 reconciliation 过程中不是直接去改变 DOM，而先更新 `VNode`。

`VNode` 的基本结构如下：

```typescript
interface VNode {
  id: number;
  container: Container;
  children: VNode[];
  mounted: boolean;
  type: string | symbol;
  props?: any;
  parent: VNode | null;
  text?: string;
  appendChild(node: VNode): void;
  removeChild(node: VNode): void;
  insertBefore(newNode: VNode, referenceNode: VNode): void;
  toJSON(): RawNode;
}
```

- `id` - 节点 id，这是一个自增的唯一 id，用于标识节点。
- `container` - 类似 `ReactDOM.render(<App />, document.getElementById('root')` 中的第二个参数，Remax 中会把组件渲染到一个容器中，容器的作用是保存 `VNode` 的引用。
- `children` - 子节点。
- `mounted`- 标识节点是否已经显示到视图层上。
- `type` - 节点的类型，也就是小程序中的基础组件，如：`view`、`text`等等。
- `props` - 节点的属性。
- `parent` - 父节点。
- `text` - 文本节点上的文字。

可以看到，`VNode` 也是一个树结构，我们在 `VNode` 上实现了类似 `DOM` 中的节点操作方法。在 React 的更新完成后，我们会调用节点上的 `toJSON` 方法，把这个 `VNode` 变成一个 JSON 对象。

举个例子，假设我们有这样一个页面组件：

```javascript
import React from 'react';
import { View, Text } from 'remax/alipay';

const IndexPage = () => {
  return (
    <View className="greeting">
      <Text>Hello Remax</Text>
    </View>
  );
};

export default IndexPage;
```

Remax 在渲染这个组件时，会把它渲染成如下的 `VNode` 结构：

```json
{
  "id": 0,
  "type": "root",
  "children": [
    {
      "id": 1,
      "type": "view",
      "props": {
        "className": "greeting"
      },
      "children": [
        {
          "id": 2,
          "type": "text",
          "props": {},
          "children": [
            {
              "type": "plain-text",
              "text": "Hello Remax"
            }
          ]
        }
      ]
    }
  ]
}
```

其中 `root` 节点是由 Remax 内部创建的，这个渲染出来的 `VNode` 数据就会成为小程序 `Page` 的 `data`。

具体这部分的源码实现可以参考下面三个文件：

- [hostConfig.ts](https://github.com/remaxjs/remax/blob/cdc068ecd97d31f611713f3b69df03044de1d6d9/packages/remax/src/hostConfig.ts)
- [Container.ts](https://github.com/remaxjs/remax/blob/cdc068ecd97d31f611713f3b69df03044de1d6d9/packages/remax/src/Container.ts#)
- [VNode.ts](https://github.com/remaxjs/remax/blob/cdc068ecd97d31f611713f3b69df03044de1d6d9/packages/remax/src/VNode.ts)

## 在视图层显示界面

上面讲到我们的 React 组件最终会被渲染成一个我们称之为 `VNode` 的 JSON 对象，并且这个对象会作为小程序 `Page` 的 `data`。现在我们要做的就是在小程序的模板里怎么把这个 `data` 给显示出来了。

我们在 `remax-cli` 构建我们的 Remax 代码时  生成一个页面模板显示这个 `VNode`，这个模板大概是下面这个样子：

```xml
<block a:for="{{root.children}}" a:key="{{item.id}}">
  <template is="{{'REMAX_TPL_' + item.type}}" data="{{item: item}}" />
</block>

<template name="REMAX_TPL_view">
  <view class="{{item.props['className']}}">
    <block a:for="{{item.children}}" key="{{item.id}}">
      <template is="{{'REMAX_TPL_' + item.type}}" data="{{item: item}}" />
    </block>
  </view>
</template>

<template name="REMAX_TPL_text">
  <text>
    <block a:for="{{item.children}}" key="{{item.id}}">
      <template is="{{'REMAX_TPL_' + item.type}}" data="{{item: item}}" />
    </block>
  </text>
</template>

<template name="REMAX_TPL_plain-text">
  <block>{{item.text}}</block>
</template>
```

可以看到，我们会先去遍历根节点的子元素，再根据每个子元素的类型选择对应的模板来渲染子元素，然后在每个模板中我们又会去遍历当前元素的子元素，以此把整个节点树递归遍历出来。

以上就是 Remax 实现的基本原理，在具体实现上我们还会去做一些优化，想深入了解的同学可以直接看代码。
