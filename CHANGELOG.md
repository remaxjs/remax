# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-alpha.18](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2020-05-05)

### Features

- 完善插件机制 ([#850](https://github.com/remaxjs/remax/issues/850)) ([0897cbf](https://github.com/remaxjs/remax/commit/0897cbf0d427362981d3d9523ff38259ff4abebb))

## [2.0.0](https://github.com/remaxjs/remax/milestone/4?closed=1) (2020-04-30)

[迁移指南](https://remaxjs.org/guide/v2-migration)

### Features

- 使用 Webpack 作为构建工具
- 支持 Web 应用
- 支持通过 `postcss.config.js` 文件来配置 postcss
- 支持自动识别 CSS Modules
- `remax/one` 支持的全平台生命周期（在每个平台都可用，并且尽量保证了行为一致）:
  - onShow
  - onHide
  - onPullDownRefresh，在 `remax/one` 中，onPullDownRefresh 回调支持返回 Promise 以控制关闭下拉刷新行为。
  - onReachBottom
  - onPageScroll
- 支持开发 Remax 插件

### Bug Fixes

- 修复重复引用 css 文件的问题
- 修复自定义组件中 usingComponent 无法 resolve node_modules 的问题

### Breaking Changes

- 构建工具切换 Rollup -> Webpack
- 现在只需要安装 `remax` 一个依赖即可
- alipay 平台重命名为 ali
- remax.config.js
  - 去掉 rollupOptions (改为 configWebpack，用于修改 webpack 配置)
  - 去掉 postcss，cssModules，alias 项
- App 去掉以纯 class 定义 App 的方式
- 废弃 `useShow` `useHide` 等冗余的生命周期 hook。 `useAppEvent` `usePageEvent` 改为从 `remax/macro` 引入
- 不默认支持 Sass/Less/Stylus 等 CSS 预处理器，可以通过 Rmax 插件引入
- 修改 css 中图片引用方式，参照 [css-loader](https://github.com/webpack-contrib/css-loader#url) 的规则。
- `remax/one` 组件 `Image` 去除 `lazyLoad` 属性
- `remax/one` 组件 `Input` 和 `Textarea` 把 `maxlength` 属性重命名为 `maxLength`
- `remax/one` 中的事件将 `originalEvent` 字段改为 `nativeEvent` ，与 React 事件对齐
  通过 `remax/macro` 引入的 `requirePlugin`, `requirePluginComponent` 使用小程序插件，废弃原有方式。
- 去除 native 目录支持，[可以配置 webpack copy 插件达到同样的效果](https://remaxjs.org/guide/advanced/hybrid#%E5%8E%9F%E7%94%9F%E6%B7%B7%E5%90%88%E5%BC%80%E5%8F%91)
- `remax` 中 `unstable_useNativeEffect` 重命名为 -> `useNativeEffect`
- `remax` 中 `useShow`, `useHide`, `useReady` 等等生命周期 hook 全部废弃。
- `remax` 中 `useAppEvent`, `usePageEvent` 改为从 `remax/macro` 导出。
- `remax` 中 `Platform` 废除，平台判断用 `process.env.REMAX_PLATFORM`

## [1.x](https://github.com/remaxjs/remax/blob/v1/CHANGELOG.md)
