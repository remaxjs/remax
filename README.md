# remax

## 开发中

## DEMO

![131547196808_ pic](https://user-images.githubusercontent.com/5436704/51023317-9d185600-15c1-11e9-80fa-c07731822462.jpg)

## Remax

让你在小程序开发中使用**真正的 React**，完整的 JSX 甚至是最新的 `Hooks API`。而不是使用受到各种限制的 JSX（其实是模板）翻译成小程序模板。

当前还在开发中，暂时无法用于生产环境。

## Why Remax
![remax-miniapp](https://user-images.githubusercontent.com/5436704/50967966-ad262c00-1514-11e9-8991-3a702804afcb.jpg)

remax 允许你使用 React 的和前端工程化的全部能力进行微信小程序的开发，包括最新的 React Hooks 和 CSS Modules 等特性，上图是对于 WeUI 的 navbar 组件的两种实现对比，具体代码可见：

## 快速开始

```shell
git clone https://github.com/CodeFalling/remax
cd remax/packages/remax

# 安装 yarn
yarn install -g yarn


yarn run bootstrap
# 启动监听
yarn run watch

# 启动 demo
yarn run dev:demo
```

登录微信开发者工具，新建项目，选择 `remax/pacakges/@remax/demo` 目录，就能看到 DEMO 小程序
