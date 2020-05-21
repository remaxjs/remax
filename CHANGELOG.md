# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.1.0](https://github.com/remaxjs/remax/compare/v2.0.7...v2.1.0) (2020-05-21)

### Bug Fixes

- 修正错误的 webpack mode ([f46dd92](https://github.com/remaxjs/remax/commit/f46dd926f08eb2f3f43326f35768efa8cf1be794))
- 添加 port 至 options 并增加默认值：3000 ([ec7b67e](https://github.com/remaxjs/remax/commit/ec7b67ee4f0dd31434795d9d7526b6435298c576))
- 移除 options 中的 default，在运行时动态判断以避免 CI 错误 ([6bec914](https://github.com/remaxjs/remax/commit/6bec914249dbcaba71c7fde5f0c984163a412fd9))
- **ali:** 修复 Form[reportSubmit] 类型 ([901b267](https://github.com/remaxjs/remax/commit/901b26754ba1d31b77a838b320855521ed67e996))
- **one:** 修复 remax/one Button hoverClassName 不生效的问题 ([7c76332](https://github.com/remaxjs/remax/commit/7c763326f90867a6cb2c5c900a6c6f5170f3a4c5))
- **toutiao:** 修复 Canvas[canvasId] 无效的问题 ([#960](https://github.com/remaxjs/remax/issues/960)) ([ef5c162](https://github.com/remaxjs/remax/commit/ef5c162a42ced8a89e16e8e0c0681fb15718b95c))
- **toutiao:** 修正 Input 属性默认值 ([#961](https://github.com/remaxjs/remax/issues/961)) ([b0bd005](https://github.com/remaxjs/remax/commit/b0bd005d0042735d4413924adddeff92441454c9))
- **toutiao:** 修正一部分新的 api 没有导出的问题 ([#962](https://github.com/remaxjs/remax/issues/962)) ([42d5d4d](https://github.com/remaxjs/remax/commit/42d5d4d4516ba746e9610bcb577bfcbe4dcada5a))

### Features

- configWebpack 新增 addCSSRule 帮助方法 ([aaf6a88](https://github.com/remaxjs/remax/commit/aaf6a885bc0dcd20f1cd3c5a182fb14a5d497aa1))
- 支持通过 --port 指定端口号 ([fb2a78f](https://github.com/remaxjs/remax/commit/fb2a78fc43c758876e7e69fb5c4d441c195a007b))

## [2.0.7](https://github.com/remaxjs/remax/compare/v2.0.6...v2.0.7) (2020-05-14)

### Bug Fixes

- 修正配置文件的 watch ([#951](https://github.com/remaxjs/remax/issues/951)) ([2540706](https://github.com/remaxjs/remax/commit/254070694453fd31c9c42f7c43269a68f7589039))

## [2.0.6](https://github.com/remaxjs/remax/compare/v2.0.5...v2.0.6) (2020-05-13)

### Bug Fixes

- **one:** 修复 remax/one Button 组件 style 属性不生效的问题 ([e887587](https://github.com/remaxjs/remax/commit/e8875873dbe9d105f81eb49eca7f88dd60fa5842))
- **toutiao:** 修正没有导出 getMenuButtonBoundingClientRect 的问题 ([a10f289](https://github.com/remaxjs/remax/commit/a10f289243c2c82dd356dfc4146bf93cbf232f03))
- **web:** 修复同构 px 转 rem 失效 ([#924](https://github.com/remaxjs/remax/issues/924)) ([b5da034](https://github.com/remaxjs/remax/commit/b5da0343ee739bb257673b752c340623212aaa63))
- **web:** 修复构建错误 ([b99177f](https://github.com/remaxjs/remax/commit/b99177fb4d77854efbc1def780fdbb52f42eb04d)), closes [#934](https://github.com/remaxjs/remax/issues/934)

## [2.0.5](https://github.com/remaxjs/remax/compare/v2.0.4...v2.0.5) (2020-05-12)

### Bug Fixes

- **one:** 修复 remax/one 头条 View 组件 onTap 不生效的问题 ([#936](https://github.com/remaxjs/remax/issues/936)) ([1af831d](https://github.com/remaxjs/remax/commit/1af831d5ff141541966e4358a569984bedac250b))
- 修复 windows watch 模式生命周期不生效的问题 ([#930](https://github.com/remaxjs/remax/issues/930)) ([29ca6e6](https://github.com/remaxjs/remax/commit/29ca6e6c6efab24d62a4ed06c23f0baaaf652250))

## [2.0.4](https://github.com/remaxjs/remax/compare/v2.0.3...v2.0.4) (2020-05-10)

### Bug Fixes

- 修复 watch 时新增生命周期回调不生效的问题 ([8cdc87c](https://github.com/remaxjs/remax/commit/8cdc87c1d71f45851d8e1bc4b2cb93a21d007d1a)), closes [#913](https://github.com/remaxjs/remax/issues/913)
- **web:** 修正配置 rootDir 不生效的问题 ([a53512e](https://github.com/remaxjs/remax/commit/a53512e2d7c5ce554630c3dc72b9dfaa74451bdc))
- 修正 watch 时修改配置不生效的问题 ([c0c3862](https://github.com/remaxjs/remax/commit/c0c3862db8f0f4ca69a9ba84b6fb3aa7cd8f05f2))
- **wechat:** 修复 onUnhandledRejection onThemeChange 生命周期不生效的问题 ([e7a7556](https://github.com/remaxjs/remax/commit/e7a75568a78433769b3ba76e9d0dceabd5a5765d))
- **wechat:** 增加 getRealtimeLogManager api ([67db014](https://github.com/remaxjs/remax/commit/67db014fd48a9b62425b28188b66f67b5f75dac3)), closes [#884](https://github.com/remaxjs/remax/issues/884)

### Reverts

- Revert "修复一大波 watch 问题 (#909)" (#915) ([74e6bca](https://github.com/remaxjs/remax/commit/74e6bca78ad26a9ddce2f40b3bda387b71bdff60)), closes [#909](https://github.com/remaxjs/remax/issues/909) [#915](https://github.com/remaxjs/remax/issues/915)

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
