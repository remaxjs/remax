---
title: 组件
order: 1
---

## Button

属性

| 名称                 | 类型                                               | 描述                                                         | wechat                 | alipay                 | toutiao                |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------------ | ---------------------- | ---------------------- | ---------------------- |
| id                   | string                                             | 节点 id                                                      | id                     | id                     | id                     |
| className            | string                                             | 节点样式类                                                   | class                  | class                  | class                  |
| style                | React.CssProperties                                | 节点 inline style                                            | style                  | style                  | style                  |
| disabled             | boolean                                            | 是否禁用                                                     | disabled               | disabled               | disabled               |
| hoverClassName       | string                                             | 按住按钮后对应的样式类                                       | hover-class            | hover-class            | hover-class            |
| hoverStartTime       | number                                             | 按住后多久出现点击态，单位毫秒                               | hover-start-time       | hover-start-time       | hover-start-time       |
| hoverStopPropagation | boolean                                            | 是否阻止本节点的祖先节点出现点击态                           | hover-stop-propagation | hover-stop-propagation | hover-stop-propagation |
| hoverStayTime        | boolean                                            | 手指松开后点击态保留时间                                     | hover-stay-time        | hover-stay-time        | hover-stay-time        |
| formType             | 'submit' \| 'reset'                                | 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件 | form-type              | form-type              | form-type              |
| onTap                | ((event: [TapEvent](/one/event#tapevent))) => void | 点击事件                                                     | bindtap                | onTap                  | bindtap                |

## Form

属性

| 名称      | 类型                                                 | 描述              | wechat     | alipay   | toutiao    |
| --------- | ---------------------------------------------------- | ----------------- | ---------- | -------- | ---------- |
| id        | string                                               | 节点 id           | id         | id       | id         |
| className | string                                               | 节点样式类        | class      | class    | class      |
| style     | React.CssProperties                                  | 节点 inline style | style      | style    | style      |
| onSubmit  | ((event: [FormEvent](/one/event#formevent))) => void | 提交事件          | bindsubmit | onSubmit | bindsubmit |
| onReset   | ((event: [FormEvent](/one/event#formevent))) => void | 重置表单事件      | bindreset  | onReset  | bindreset  |

## Image

属性

| 名称          | 类型                                                                                                                                                                             | 描述                                                   | wechat          | alipay        | toutiao         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------- | ------------- | --------------- |
| id            | string                                                                                                                                                                           | 节点 id                                                | id              | id            | id              |
| className     | string                                                                                                                                                                           | 节点样式类                                             | class           | class         | class           |
| style         | React.CssProperties                                                                                                                                                              | 节点 inline style                                      | style           | style         | style           |
| src           | string                                                                                                                                                                           | 图片资源地址                                           | src             | src           | src             |
| mode          | 'scaleToFill' \| 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'top' \| 'bottom' \| 'center' \| 'left' \| 'right' \| 'top left' \| 'top right' \| 'bottom left' \| 'bottom right' | 图片裁剪，缩放模式                                     | mode            | mode          | mode            |
| lazyload      | boolean                                                                                                                                                                          | 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载 | lazy-load       | lazy-load     | lazy-load       |
| onLoad        | ((event: [ImageLoadEvent](/one/event#imageloadevent))) => void                                                                                                                   | 当图片加入完毕时触发                                   | bindload        | onLoad        | bindload        |
| onError       | ((event: [ImageErrorEvent](/one/event#imageerrorevent))) => void                                                                                                                 | 当错误发生时触发                                       | binderror       | onError       | binderror       |
| onTap         | ((event: [TapEvent](/one/event#tapevent))) => void                                                                                                                               | 点击事件                                               | bindtap         | onTap         | bindtap         |
| onTouchStart  | ((event: [TouchStartEvent](/one/event#touchstartevent))) => void                                                                                                                 | 触碰开始事件                                           | bindtouchstart  | onTouchStart  | bindtouchstart  |
| onTouchMove   | ((event: [TouchMoveEvent](/one/event#touchmoveevent))) => void                                                                                                                   | 触碰移动事件                                           | bindtouchmove   | onTouchMove   | bindtouchmove   |
| onTouchEnd    | ((event: [TouchMoveEvent](/one/event#touchmoveevent))) => void                                                                                                                   | 触碰结束事件                                           | bindtouchend    | bindtouchend  | bindtouchend    |
| onTouchCancel | ((event: [TouchCancelEvent](/one/event#touchcancelevent))) => void                                                                                                               | 触碰取消事件                                           | bindtouchcancel | onTouchCancel | bindtouchcancel |

## Input

属性

| 名称             | 类型                                                   | 描述                | wechat            | alipay            | toutiao           |
| ---------------- | ------------------------------------------------------ | ------------------- | ----------------- | ----------------- | ----------------- |
| id               | string                                                 | 节点 id             | id                | id                | id                |
| className        | string                                                 | 节点样式类          | class             | class             | class             |
| style            | React.CssProperties                                    | 节点 inline style   | style             | style             | style             |
| defaultValue     | string                                                 | 默认值              | -                 | -                 | -                 |
| value            | string                                                 | 输入框的值          | value             | value             | value             |
| name             | string                                                 | 输入框的名称        | name              | name              | name              |
| type             | 'text' \| 'number' \| 'idcard' \| 'digit'              | 输入框类型          | type              | type              | type              |
| password         | boolean                                                | 是否密码类型        | password          | password          | password          |
| placeholder      | string                                                 | 输入框占位符        | placeholder       | placeholder       | placeholder       |
| placeholderStyle | React.CSSProperties                                    | 占位符 inline style | placeholder-style | placeholder-style | placeholder-style |
| disabled         | boolean                                                | 是否禁用            | disabled          | disabled          | disabled          |
| maxlength        | number                                                 | 最大输入长度        | maxlength         | maxlength         | maxlength         |
| focus            | boolean                                                | 是否获取焦点        | focus             | focus             | focus             |
| onInput          | ((event: [InputEvent](/one/event#inputevent))) => any  | 输入回调事件        | bindinput         | onInput           | bindinput         |
| onConfirm        | ((event: [InputEvent](/one/event#inputevent))) => void | 键盘确认回调事件    | bindconfirm       | onConfirm         | bindconfirm       |
| onFocus          | ((event: [InputEvent](/one/event#inputevent))) => void | focus 事件          | bindfocus         | onFocus           | bindfocus         |
| onBlur           | ((event: [InputEvent](/one/event#inputevent))) => void | blur 事件           | bindblur          | onBlur            | bindblur          |

> 注意：受微信平台限制，在微信里 Input 必须通过 `onInput` 事件的返回值做受控，详见[微信文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)。

## Label

属性

| 名称      | 类型                | 描述              | wechat | alipay | toutiao |
| --------- | ------------------- | ----------------- | ------ | ------ | ------- |
| id        | string              | 节点 id           | id     | id     | id      |
| className | string              | 节点样式类        | class  | class  | class   |
| style     | React.CssProperties | 节点 inline style | style  | style  | style   |
| for       | string              | 绑定控件的 id     | for    | for    | for     |

## Text

| 名称       | 类型                                               | 描述              | wechat     | alipay     | toutiao    |
| ---------- | -------------------------------------------------- | ----------------- | ---------- | ---------- | ---------- |
| id         | string                                             | 节点 id           | id         | id         | id         |
| className  | string                                             | 节点样式类        | class      | class      | class      |
| style      | React.CssProperties                                | 节点 inline style | style      | style      | style      |
| selectable | boolean                                            | 文本是否可选      | selectable | selectable | selectable |
| decode     | boolean                                            | 是否解码          | decode     | decode     | decode     |
| onTap      | ((event: [TapEvent](/one/event#tapevent))) => void | 点击事件          | bindtap    | onTap      | bindtap    |

## Textarea

属性

| 名称             | 类型                                                   | 描述                   | wechat            | alipay            | toutiao           |
| ---------------- | ------------------------------------------------------ | ---------------------- | ----------------- | ----------------- | ----------------- |
| id               | string                                                 | 节点 id                | id                | id                | id                |
| className        | string                                                 | 节点样式类             | class             | class             | class             |
| style            | React.CssProperties                                    | 节点 inline style      | style             | style             | style             |
| defaultValue     | string                                                 | 默认值                 | -                 | -                 | -                 |
| value            | string                                                 | 输入框的值             | value             | value             | value             |
| name             | string                                                 | 输入框的名称           | name              | name              | name              |
| placeholder      | string                                                 | 输入框占位符           | placeholder       | placeholder       | placeholder       |
| placeholderStyle | React.CSSProperties                                    | 占位符 inline style    | placeholder-style | placeholder-style | placeholder-style |
| disabled         | boolean                                                | 是否禁用               | disabled          | disabled          | disabled          |
| maxlength        | number                                                 | 最大输入长度           | maxlength         | maxlength         | maxlength         |
| focus            | boolean                                                | 是否获取焦点           | focus             | focus             | focus             |
| autoHeight       | boolean                                                | 是否随文本内容增加增高 | auto-height       | auto-height       | auto-height       |
| onInput          | ((event: [InputEvent](/one/event#inputevent))) => any  | 输入回调事件           | bindinput         | onInput           | bindinput         |
| onConfirm        | ((event: [InputEvent](/one/event#inputevent))) => void | 键盘确认回调事件       | bindconfirm       | onConfirm         | bindconfirm       |
| onFocus          | ((event: [InputEvent](/one/event#inputevent))) => void | focus 事件             | bindfocus         | onFocus           | bindfocus         |
| onBlur           | ((event: [InputEvent](/one/event#inputevent))) => void | blur 事件              | bindblur          | onBlur            | bindblur          |

> 注意：受微信平台限制，Textarea 在微信里无法受控。

## View

属性

| 名称                 | 类型                                                               | 描述                               | wechat                 | alipay                 | toutiao                |
| -------------------- | ------------------------------------------------------------------ | ---------------------------------- | ---------------------- | ---------------------- | ---------------------- |
| id                   | string                                                             | 节点 id                            | id                     | id                     | id                     |
| className            | string                                                             | 节点样式类                         | class                  | class                  | class                  |
| style                | React.CssProperties                                                | 节点 inline style                  | style                  | style                  | style                  |
| slot                 | string                                                             | slot 标识                          | slot                   | slot                   | slot                   |
| hoverClassName       | string                                                             | 按住按钮后对应的样式类             | hover-class            | hover-class            | hover-class            |
| hoverStartTime       | number                                                             | 按住后多久出现点击态，单位毫秒     | hover-start-time       | hover-start-time       | hover-start-time       |
| hoverStopPropagation | boolean                                                            | 是否阻止本节点的祖先节点出现点击态 | hover-stop-propagation | hover-stop-propagation | hover-stop-propagation |
| hoverStayTime        | boolean                                                            | 手指松开后点击态保留时间           | hover-stay-time        | hover-stay-time        | hover-stay-time        |
| role                 | string                                                             | aria role                          | aria-role              | role                   | role                   |
| onTap                | ((event: [TapEvent](/one/event#tapevent))) => void                 | 点击事件                           | bindtap                | onTap                  | bindtap                |
| onLongTap            | ((event: [TapEvent](/one/event#tapevent))) => void                 | 长按点击事件                       | bindlongtap            | onLongTap              | bindlongtap            |
| onTouchStart         | ((event: [TouchStartEvent](/one/event#touchstartevent))) => void   | 触碰开始事件                       | bindtouchstart         | onTouchStart           | bindtouchstart         |
| onTouchMove          | ((event: [TouchMoveEvent](/one/event#touchmoveevent))) => void     | 触碰移动事件                       | bindtouchmove          | onTouchMove            | bindtouchmove          |
| onTouchEnd           | ((event: [TouchMoveEvent](/one/event#touchmoveevent))) => void     | 触碰结束事件                       | bindtouchend           | bindtouchend           | bindtouchend           |
| onTouchCancel        | ((event: [TouchCancelEvent](/one/event#touchcancelevent))) => void | 触碰取消事件                       | bindtouchcancel        | onTouchCancel          | bindtouchcancel        |
| onLongTap            | ((event: [TapEvent](/one/event#tapevent))) => void                 | 长按点击事件                       | bindlongtap            | onLongTap              | bindlongtap            |

## WebView

| 名称      | 类型                                       | 描述              | wechat      | alipay    | toutiao     |
| --------- | ------------------------------------------ | ----------------- | ----------- | --------- | ----------- |
| id        | string                                     | 节点 id           | id          | id        | id          |
| className | string                                     | 节点样式类        | class       | class     | class       |
| style     | React.CssProperties                        | 节点 inline style | style       | style     | style       |
| src       | string                                     | 地址              | src         | src       | src         |
| onMessage | (event: [Event](/one/event#event)) => void | 通信回调          | bindmessage | onMessage | bindmessage |
