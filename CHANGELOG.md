# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.3](https://github.com/remaxjs/remax/compare/v2.0.2...v2.0.3) (2020-05-08)

### Bug Fixes

- **cli:** 修复生产环境生命周期和自定义组件可能无效的问题 ([489cf75](https://github.com/remaxjs/remax/commit/489cf75a32e727be401939fae9fad97ee2af3a37)), closes [#905](https://github.com/remaxjs/remax/issues/905) [#904](https://github.com/remaxjs/remax/issues/904)

## [2.0.2](https://github.com/remaxjs/remax/compare/v2.0.1...v2.0.2) (2020-05-07)

### Bug Fixes

- **cli:** 修复存在循环依赖时，cli build 不会结束的问题 ([ea5308b](https://github.com/remaxjs/remax/commit/ea5308bacac1b3e6707a101834701223ec711d17))
- **one:** 导出 remax/one 组件 props type 定义 ([482ec49](https://github.com/remaxjs/remax/commit/482ec49ae2bfa54f63814175350a92661dd42c88))

## [2.0.1](https://github.com/remaxjs/remax/compare/v2.0.0...v2.0.1) (2020-05-06)

### Bug Fixes

- 修复 configWebpack 缺少的 webpack 实例参数 ([52cb52a](https://github.com/remaxjs/remax/commit/52cb52a92b8577c55e807191d9a5dc510eb4927e))
- 修复找不到 unstable_batchedUpdates 的问题 ([f96038c](https://github.com/remaxjs/remax/commit/f96038c7fb4a310a7a3de786fc1e48697021dcf1))
- 修复无法解析字体文件的问题 ([9a325d6](https://github.com/remaxjs/remax/commit/9a325d62ecbbdf6354e5d5dfc0120953e0846f89))
- 修复部分 App 生命周期不生效的问题 ([#898](https://github.com/remaxjs/remax/issues/898)) ([e6c6bf1](https://github.com/remaxjs/remax/commit/e6c6bf1d5feed53562fb1edb547c073c4d8a8362)), closes [#895](https://github.com/remaxjs/remax/issues/895)
- 修正 common chunk 切分错误导致包过大的问题 ([#900](https://github.com/remaxjs/remax/issues/900)) ([cf444aa](https://github.com/remaxjs/remax/commit/cf444aa16a731c823615ef5dc59ed4f773ad16b4))

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
