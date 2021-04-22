---
title: 小程序插件开发
order: 9
---

> 注意
>
> 目前仅支持阿里小程序

# 小程序插件开发

## 创建项目

```bash
git clone git@github.com:remaxjs/mini-plugin-template.git my-plugin
```

## 运行项目

```bash
npm run dev
```

启动成功后，使用小程序开发者工具打开 `my-plugin` 目录。

## 项目目录

- `src`：小程序插件的源码。
- `dist`：小程序插件的构建产物。
- `miniprogram`：插件在小程序项目中的引入 demo。
- `src/plugin.config.js`: 等同原生小程序插件开发中的 `plugin.json`。
