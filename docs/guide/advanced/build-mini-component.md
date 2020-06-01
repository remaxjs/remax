---
title: 构建小程序自定义组件
order: 48
---

# 构建小程序自定义组件

除了使用 Remax 构建小程序应用外，你还可以是用 Remax 构建小程序的自定义组件。

> 注意
>
> 目前该功能仅支持阿里小程序

## 开发小程序自定义组件

```bash
$ degit https://github.com/remaxjs/template-component
$ cd template-component
$ npm install
$ npm run dev # 开发构建
$ npm run build # 发布构建
```

## 使用 Remax 开发的自定义组件

直接在小程序的页面 JSON 配置中添加：

```json
{
  "usingComponents": {
    "remax-component": "/path/to/remax-component/index"
  }
```

在小程序项目中添加依赖：

```bash
$ npm install @remax/ali-component-runtime --save
```
