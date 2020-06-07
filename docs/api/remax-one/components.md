---
title: 组件
order: 1
---

`remix/one` 导出的组件，意味着在所有 Remix 支持的平台都可以使用，并且 Remix 尽量保证了行为一致。

## Button

按钮组件

```jsx
import { Button } from 'remix/one';
```

属性

| 名称           | 类型                                                         | 描述                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| id             | string                                                       | 节点 id                                                      |
| className      | string                                                       | 节点样式类                                                   |
| style          | React.CssProperties                                          | 节点 inline style                                            |
| disabled       | boolean                                                      | 是否禁用                                                     |
| hoverClassName | string                                                       | 按住按钮后对应的样式类                                       |
| hoverStartTime | number                                                       | 按住后多久出现点击态，单位毫秒                               |
| hoverStayTime  | boolean                                                      | 手指松开后点击态保留时间                                     |
| formType       | 'submit' \| 'reset'                                          | 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 |
| onTap          | ((event: [TapEvent](/api/remix-one/event#tapevent))) => void | 点击事件                                                     |

> 注意
>
> 微信中，由于受控行为不一致，在 Form 中执行 reset 后，即使表单组件受控后，value 也会被清空

## Form

表单组件

```jsx
import { Form } from 'remix/one';
```

属性

| 名称      | 类型                                                           | 描述              |
| --------- | -------------------------------------------------------------- | ----------------- |
| id        | string                                                         | 节点 id           |
| className | string                                                         | 节点样式类        |
| style     | React.CssProperties                                            | 节点 inline style |
| onSubmit  | ((event: [FormEvent](/api/remix-one/event#formevent))) => void | 提交事件          |
| onReset   | ((event: [FormEvent](/api/remix-one/event#formevent))) => void | 重置表单事件      |

## Image

图片组件

```jsx
import { Image } from 'remix/one';
```

属性

| 名称          | 类型                                                                                                                                                                             | 描述                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| id            | string                                                                                                                                                                           | 节点 id              |
| className     | string                                                                                                                                                                           | 节点样式类           |
| style         | React.CssProperties                                                                                                                                                              | 节点 inline style    |
| src           | string                                                                                                                                                                           | 图片资源地址         |
| mode          | 'scaleToFill' \| 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'top' \| 'bottom' \| 'center' \| 'left' \| 'right' \| 'top left' \| 'top right' \| 'bottom left' \| 'bottom right' | 图片裁剪，缩放模式   |
| onLoad        | ((event: [ImageLoadEvent](/api/remix-one/event#imageloadevent))) => void                                                                                                         | 当图片加入完毕时触发 |
| onError       | ((event: [ImageErrorEvent](/api/remix-one/event#imageerrorevent))) => void                                                                                                       | 当错误发生时触发     |
| onTap         | ((event: [TapEvent](/api/remix-one/event#tapevent))) => void                                                                                                                     | 点击事件             |
| onTouchStart  | ((event: [TouchStartEvent](/api/remix-one/event#touchstartevent))) => void                                                                                                       | 触碰开始事件         |
| onTouchMove   | ((event: [TouchMoveEvent](/api/remix-one/event#touchmoveevent))) => void                                                                                                         | 触碰移动事件         |
| onTouchEnd    | ((event: [TouchMoveEvent](/api/remix-one/event#touchmoveevent))) => void                                                                                                         | 触碰结束事件         |
| onTouchCancel | ((event: [TouchCancelEvent](/api/remix-one/event#touchcancelevent))) => void                                                                                                     | 触碰取消事件         |

## Input

Input 组件

```jsx
import { Input } from 'remix/one';
```

属性

| 名称             | 类型                                                             | 描述                |
| ---------------- | ---------------------------------------------------------------- | ------------------- |
| id               | string                                                           | 节点 id             |
| className        | string                                                           | 节点样式类          |
| style            | React.CssProperties                                              | 节点 inline style   |
| defaultValue     | string                                                           | 默认值              |
| value            | string                                                           | 输入框的值          |
| name             | string                                                           | 输入框的名称        |
| type             | 'text' \| 'number' \| 'idcard' \| 'digit'                        | 输入框类型          |
| password         | boolean                                                          | 是否密码类型        |
| placeholder      | string                                                           | 输入框占位符        |
| placeholderStyle | React.CSSProperties                                              | 占位符 inline style |
| disabled         | boolean                                                          | 是否禁用            |
| maxlength        | number                                                           | 最大输入长度        |
| focus            | boolean                                                          | 是否获取焦点        |
| onInput          | ((event: [InputEvent](/api/remix-one/event#inputevent))) => any  | 输入回调事件        |
| onConfirm        | ((event: [InputEvent](/api/remix-one/event#inputevent))) => void | 键盘确认回调事件    |
| onFocus          | ((event: [InputEvent](/api/remix-one/event#inputevent))) => void | focus 事件          |
| onBlur           | ((event: [InputEvent](/api/remix-one/event#inputevent))) => void | blur 事件           |

> 注意
>
> 受微信平台限制，在微信里 Input 必须通过 `onInput` 事件的返回值做受控，详见[微信文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)。
>
> Input 的 type 类型在 web 中没有 'idcard' 和 'digit' 这两个选项

## Label

Label 组件

```jsx
import { Label } from 'remix/one';
```

属性

| 名称      | 类型                | 描述              |
| --------- | ------------------- | ----------------- |
| id        | string              | 节点 id           |
| className | string              | 节点样式类        |
| style     | React.CssProperties | 节点 inline style |
| for       | string              | 绑定控件的 id     |

## Text

Text 组件

```jsx
import { Text } from 'remix/one';
```

| 名称       | 类型                                                         | 描述              |
| ---------- | ------------------------------------------------------------ | ----------------- |
| id         | string                                                       | 节点 id           |
| className  | string                                                       | 节点样式类        |
| style      | React.CssProperties                                          | 节点 inline style |
| selectable | boolean                                                      | 文本是否可选      |
| onTap      | ((event: [TapEvent](/api/remix-one/event#tapevent))) => void | 点击事件          |

## Textarea

Textarea 组件

```jsx
import { Textarea } from 'remix/one';
```

属性

| 名称             | 类型                                                             | 描述                   |
| ---------------- | ---------------------------------------------------------------- | ---------------------- |
| id               | string                                                           | 节点 id                |
| className        | string                                                           | 节点样式类             |
| style            | React.CssProperties                                              | 节点 inline style      |
| defaultValue     | string                                                           | 默认值                 |
| value            | string                                                           | 输入框的值             |
| name             | string                                                           | 输入框的名称           |
| placeholder      | string                                                           | 输入框占位符           |
| placeholderStyle | React.CSSProperties                                              | 占位符 inline style    |
| disabled         | boolean                                                          | 是否禁用               |
| maxlength        | number                                                           | 最大输入长度           |
| focus            | boolean                                                          | 是否获取焦点           |
| autoHeight       | boolean                                                          | 是否随文本内容增加增高 |
| onInput          | ((event: [InputEvent](/api/remix-one/event#inputevent))) => any  | 输入回调事件           |
| onConfirm        | ((event: [InputEvent](/api/remix-one/event#inputevent))) => void | 键盘确认回调事件       |
| onFocus          | ((event: [InputEvent](/api/remix-one/event#inputevent))) => void | focus 事件             |
| onBlur           | ((event: [InputEvent](/api/remix-one/event#inputevent))) => void | blur 事件              |

> 注意
>
> 受微信平台限制，Textarea 在微信里无法受控。

## View

View 组件

```jsx
import { View } from 'remix/one';
```

属性

| 名称           | 类型                                                                         | 描述                           |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------ |
| id             | string                                                                       | 节点 id                        |
| className      | string                                                                       | 节点样式类                     |
| style          | React.CssProperties                                                          | 节点 inline style              |
| slot           | string                                                                       | slot 标识                      |
| hoverClassName | string                                                                       | 按住按钮后对应的样式类         |
| hoverStartTime | number                                                                       | 按住后多久出现点击态，单位毫秒 |
| hoverStayTime  | boolean                                                                      | 手指松开后点击态保留时间       |
| role           | string                                                                       | aria role                      |
| onTap          | ((event: [TapEvent](/api/remix-one/event#tapevent))) => void                 | 点击事件                       |
| onLongTap      | ((event: [TapEvent](/api/remix-one/event#tapevent))) => void                 | 长按点击事件                   |
| onTouchStart   | ((event: [TouchStartEvent](/api/remix-one/event#touchstartevent))) => void   | 触碰开始事件                   |
| onTouchMove    | ((event: [TouchMoveEvent](/api/remix-one/event#touchmoveevent))) => void     | 触碰移动事件                   |
| onTouchEnd     | ((event: [TouchMoveEvent](/api/remix-one/event#touchmoveevent))) => void     | 触碰结束事件                   |
| onTouchCancel  | ((event: [TouchCancelEvent](/api/remix-one/event#touchcancelevent))) => void | 触碰取消事件                   |
| onLongTap      | ((event: [TapEvent](/api/remix-one/event#tapevent))) => void                 | 长按点击事件                   |

## WebView

WebView 组件

```jsx
import { WebView } from 'remix/one';
```

| 名称      | 类型                                                 | 描述              |
| --------- | ---------------------------------------------------- | ----------------- |
| id        | string                                               | 节点 id           |
| className | string                                               | 节点样式类        |
| style     | React.CssProperties                                  | 节点 inline style |
| src       | string                                               | 地址              |
| onMessage | (event: [Event](/api/remix-one/event#event)) => void | 通信回调          |
