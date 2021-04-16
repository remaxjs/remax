---
title: 生命周期
group:
  title: remax/one
  order: 2
---

在这里列出的生命周期，表示在 `remax/one` 支持的平台中都可以使用，并尽量保证了行为一致。

## App 生命周期

## onLaunch

应用初始化时触发。

```js
import { useAppEvent } from 'remax/macro';

...

useAppEvent('onLaunch', () => {});
```

## onShow

应用可见时触发。

```js
import { useAppEvent } from 'remax/macro';

...

useAppEvent('onShow', () => {});
```

## onHide

应用不可见时触发。

```js
import { useAppEvent } from 'remax/macro';

...

useAppEvent('onHide', () => {});
```

## onError

应用报错时触发。

```js
import { useAppEvent } from 'remax/macro';

...

useAppEvent('onError', () => {});
```

## Page 生命周期

## onLoad

页面加载时触发

```js
import { usePageEvent } from 'remax/macro';

...

usePageEvent('onLoad', () => {});
```

## onShow

页面可见时触发。

```js
import { usePageEvent } from 'remax/macro';

...

usePageEvent('onShow', () => {});
```

## onHide

页面不可见时触发。

```js
import { usePageEvent } from 'remax/macro';

...

usePageEvent('onHide', () => {});
```

## onPullDownRefresh

下拉刷新时触发。Remax One 扩展了 onPullDownRefresh，在回调中返回 Promise，Remax One 会等待 Promise resolve 后自动停止下拉刷新行为。

```js
import { usePageEvent } from 'remax/macro';

...

usePageEvent('onPullDownRefresh', () => {
   // 可以返回一个 promise，控制何时停止下来刷新行为
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve();
      }, 1000);
   })
});
```

## onReachBottom

滚动触底时触发。

```js
import { usePageEvent } from 'remax/macro';

...

usePageEvent('onReachBottom', () => {});
```

## onPageScroll

页面滚动时触发。

```js
import { usePageEvent } from 'remax/macro';

...

usePageEvent('onPageScroll', () => {});
```
