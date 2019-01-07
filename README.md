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

![miniapp](https://user-images.githubusercontent.com/5436704/50785376-61446e80-12eb-11e9-9f2d-abfc0f4ae45f.gif)

DEMO 代码见：`packages/remax/demo/src/pages/index.js` 

```js
import Remax from '../../..';

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
    <div onClick={handleClick}>
    CLICK
      {count}
    times
    </div>
  );
};

const Component = () => (
  <div>
    {'<ClickComponent />'}
with useState below
    <ClickComponent />
  </div>
);
```

我们可以自由的使用 React 带来的新特性
