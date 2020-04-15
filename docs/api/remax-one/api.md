---
title: API
---

`remax/one` 导出的 API，意味着在所有 Remax 支持的平台都可以使用，并且 Remax 尽量保证了行为一致。

_带有 `?` 的选项表示非必填项_

## navigateTo(options)

保留当前页面，跳转到应用内的某个页面

```js
import { navigateTo } from 'remax/one';

navigateTo({
  url: 'pages/index/index',
});
```

#### 参数

1. `options` 跳转选项
   - `options.url` 跳转地址

#### 返回值

返回一个 `Promise<void>` 对象。

## navigateBack(options?)

关闭当前页面，返回上一页面或多级页面

```js
import { navigateBack } from 'remax/one';

navigateBack();
```

#### 参数

1. `options?` 后退选项
   - `options.delta?` 后退的页面数

#### 返回值

返回一个 `Promise<void>` 对象。

## redirectTo(options)

关闭当前页面，重定向到应用内的某个页面

```js
import { redirectTo } from 'remax/one';

redirectTo({
  url: 'pages/index/index',
});
```

#### 参数

1. `options` 重定向选项
   - `options.url` 重定向地址

#### 返回值

返回一个 `Promise<void>` 对象。

## reLaunch(options)

关闭所有页面，重新打开应用的某个页面

```js
import { reLaunch } from 'remax/one';

reLaunch({
  url: 'pages/index/index',
});
```

#### 参数

1. `options` 跳转选项
   - `options.url` 跳转地址

#### 返回值

返回一个 `Promise<void>` 对象。

## switchTab(options)

跳转到某个 Tab 页

```js
import { switchTab } from 'remax/one';

switchTab({
  url: 'pages/index/index',
});
```

#### 参数

1. `options` 跳转选项
   - `options.url` 跳转的 Tab 地址

#### 返回值

返回一个 `Promise<void>` 对象。
