# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/remaxjs/remax/compare/v1...v2.0.0) (2020-05-05)

[2.0 迁移指南](https://remaxjs.org/guide/v2-migration)

### Features

- 支持 Web 应用，[文档](https://remaxjs.org/guide/one/web)。
- 支持通过 `postcss.config.js` 文件来配置 PostCSS，[文档](https://remaxjs.org/guide/config/postcss)。
- 支持自动识别 CSS Modules，[文档](https://remaxjs.org/guide/framework/style#css-modules)。
- 支持插件，[文档](https://remaxjs.org/guide/advanced/plugin)。
- `remax/one` 支持的全平台生命周期，[文档](https://remaxjs.org/api/remax-one/lifecycle)
  - onShow
  - onHide
  - onPullDownRefresh
  - onReachBottom
  - onPageScroll

### Bug Fixes

- 修复自定义组件中 usingComponent 无法 resolve node_modules 的问题。[#762](https://github.com/remaxjs/remax/issues/762)

### Breaking Changes

- 构建工具从 Rollup 切换到 Webpack。
- 废弃 `remax-cli`，现在只要 `remax` 一个依赖即可。
- `alipay` 平台重命名为 `ali`。
- remax.config.js
  - 去掉 rollupOptions (改为 configWebpack，用于修改 webpack 配置)。
  - 去掉 postcss，cssModules，alias 项。
- App 去掉以纯 class 定义 App 的方式
- 废弃 `useShow` `useHide` 等生命周期 hook，请该用 `useAppEvent` 和 `usePageEvent`，[文档](https://remaxjs.org/api/remax-macro#useappeventeventname-callback)。
- 去掉 Sass/Less/Stylus 等 CSS 预处理器的默认支持，请通过通过插件引入，[文档](https://remaxjs.org/guide/advanced/plugin)
- 修改 CSS 中图片引用方式，参照 [css-loader](https://github.com/webpack-contrib/css-loader#url) 的规则。
- `remax/one`
  - 组件 `Image` 去除 `lazyLoad` 属性。
  - 组件 `Input` 和 `Textarea` 把 `maxlength` 属性重命名为 `maxLength`。
  - 事件回调中的 `originalEvent` 字段改为 `nativeEvent` ，与 ReactDOM 事件对齐。
- 通过 `remax/macro` 引入的 `requirePlugin`, `requirePluginComponent` 使用小程序插件，废弃原有方式，[文档](https://remaxjs.org/guide/basic/plugin)。
- 去除 native 目录支持，[可以配置 webpack copy 插件达到同样的效果](https://remaxjs.org/guide/advanced/hybrid#%E5%8E%9F%E7%94%9F%E6%B7%B7%E5%90%88%E5%BC%80%E5%8F%91)
- `unstable_useNativeEffect` 重命名为 `useNativeEffect`。
- 废弃 `Platform`，平台判断请改用 `process.env.REMAX_PLATFORM`。
- 去掉了 `app.config.js` 和页面配置文件的 ES Modules 支持。

<hr />

## [1.0 更新日志](https://github.com/remaxjs/remax/blob/v1/CHANGELOG.md)
