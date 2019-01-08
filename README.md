# remax

## 开发中

## Remax

让你在小程序开发中使用**真正的 React**，完整的 JSX 甚至是最新的 `Hooks API`。而不是使用受到各种限制的 JSX（其实是模板）翻译成小程序模板。

当前还在开发中，暂时无法用于生产环境。

## 快速开始

```shell
git clone https://github.com/CodeFalling/remax
cd remax/packages/remax

# 先构建一次
npm install
npm run build

# demo 目录可以启动
cd demo
npm install
npm run watch
```

登录微信开发者工具，新建项目，选择 `remax/pacakges/remax/demo` 目录，就能看到 DEMO 小程序

![miniapp](https://user-images.githubusercontent.com/5436704/50804644-ed758680-1329-11e9-90e6-6871f5f1540e.gif)


DEMO 代码见：`packages/remax/demo/src/pages/index.js` 

```js
import Remax from '../../..';
import './index.less';

const {
  React,
  useState,
} = Remax;

const ClickComponent = () => {
  const [count, setCount] = Remax.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <view onClick={handleClick}>
      <image className="test-image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />

    CLICK the image
      {count}
    times
    </view>
  );
};

const Component = () => (
  <view>
    <view className="title">
      {'<ClickComponent />'}
with useState
    </view>
    <ClickComponent />
  </view>
);
```

`index.less` ：

```less
.test-image {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}

.title {
    font-size: 24px;
    text-align: center;
}
```


如 DEMO 所见，我们可以自由的使用 React 带来的新特性