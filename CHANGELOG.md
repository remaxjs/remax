# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.5.3](https://github.com/remaxjs/remax/compare/v2.5.2...v2.5.3) (2020-06-17)

### Bug Fixes

- **web:** 修复 React DevTools 引起的运行错误 ([15cf022](https://github.com/remaxjs/remax/commit/15cf02269024fa6f3480c295de2ad99618168443))

## [2.5.2](https://github.com/remaxjs/remax/compare/v2.5.1...v2.5.2) (2020-06-16)

### Bug Fixes

- **ali:** 修复条件渲染 JSX 可能导致报错的问题 ([#1092](https://github.com/remaxjs/remax/issues/1092)) ([309bc5b](https://github.com/remaxjs/remax/commit/309bc5b22c08679f1a159cd2fb53644f8a42da15))

## [2.5.1](https://github.com/remaxjs/remax/compare/v2.5.0...v2.5.1) (2020-06-16)

### Bug Fixes

- 修复 windows 下编译报错 ([#1091](https://github.com/remaxjs/remax/issues/1091)) ([0b2caa8](https://github.com/remaxjs/remax/commit/0b2caa844d7245c1cd46816450d7b84896b449e7))
- **ali:** 修复 MovableView 缺失的属性 ([#1089](https://github.com/remaxjs/remax/issues/1089)) ([d54847d](https://github.com/remaxjs/remax/commit/d54847d6af4deb1d5e6a271ae5a5d171cca51f58))

# [2.5.0](https://github.com/remaxjs/remax/compare/v2.4.1...v2.5.0) (2020-06-15)

### Bug Fixes

- **ali:** 修复 Textarea[enableNative] 不生效的问题 ([7724528](https://github.com/remaxjs/remax/commit/77245283adb1662330647250b1eb27bcc724d3db))
- **cli:** 修复 notify 命令不生效的问题 ([#1071](https://github.com/remaxjs/remax/issues/1071)) ([e229c48](https://github.com/remaxjs/remax/commit/e229c48b624deb95c54ced5fad9ce4f61b381663))
- **toutiao:** 修复 View Input 的 props 类型 ([#1041](https://github.com/remaxjs/remax/issues/1041)) ([f52d7f6](https://github.com/remaxjs/remax/commit/f52d7f616aef90baa52abea42f14e86d66cb233a))
- **wechat:** 修复更新已删除的节点导致报错的问题 ([#1078](https://github.com/remaxjs/remax/issues/1078)) ([84f45fa](https://github.com/remaxjs/remax/commit/84f45fab73a1fd86326bd52806a465e6c96a00ef)), closes [#1065](https://github.com/remaxjs/remax/issues/1065)
- **wechat:** 添加 API offKeyboardHeightChange ([#1073](https://github.com/remaxjs/remax/issues/1073)) ([154ecd3](https://github.com/remaxjs/remax/commit/154ecd3946ad864cd96e9da014b6efa4a5850e6f))

### Features

- 支持 React DevTools ([#994](https://github.com/remaxjs/remax/issues/994)) ([396b326](https://github.com/remaxjs/remax/commit/396b3269d05f4d3218c3c3637d2aaaca03a5673c))
- **remax:** onTouchStart onTouchMove onTouchEnd 支持阻止冒泡 ([#1072](https://github.com/remaxjs/remax/issues/1072)) ([5a532c1](https://github.com/remaxjs/remax/commit/5a532c1935e900e8a86e288077d92338a46832f5)), closes [#1068](https://github.com/remaxjs/remax/issues/1068)

## [2.4.1](https://github.com/remaxjs/remax/compare/v2.4.0...v2.4.1) (2020-06-10)

### Bug Fixes

- 修复 style 属性为 null 时报错的问题 ([#1066](https://github.com/remaxjs/remax/issues/1066)) ([ff83df3](https://github.com/remaxjs/remax/commit/ff83df3b1761eeb779f50eaea5d3df6f931bae53)), closes [#1065](https://github.com/remaxjs/remax/issues/1065)
- **wechat:** 修复 ScrollView 滚动过快抖动问题 ([9f98a79](https://github.com/remaxjs/remax/commit/9f98a799af83edac49758859799ef2278ef7bee4))
- 修复 remax/one 组件导出缺少 Navigator ([b8dd1f5](https://github.com/remaxjs/remax/commit/b8dd1f57b3a0e6b5385ca2c5b2df80d426800126))

# [2.4.0](https://github.com/remaxjs/remax/compare/v2.3.0...v2.4.0) (2020-06-05)

### Bug Fixes

- 修正生成的模板中会带有页面没用到的小程序自定义组件的问题 ([#1043](https://github.com/remaxjs/remax/issues/1043)) ([c300c33](https://github.com/remaxjs/remax/commit/c300c3307ea41c0cff662922fec12391eac2cb79))
- **one:** 修复 view 不支持 hoverClassName 的问题 ([7fade58](https://github.com/remaxjs/remax/commit/7fade58c38f435f6455ffd2d0ec66b915b8a27f0))
- **wechat:** 修复 Map 组件 polygons 属性不生效的问题 ([#1038](https://github.com/remaxjs/remax/issues/1038)) ([48487b2](https://github.com/remaxjs/remax/commit/48487b21f94be6d73c02a91847d9a4e46d476bb8)), closes [#1035](https://github.com/remaxjs/remax/issues/1035)

### Features

- 新增 Node.js 的构建 API remax/build ([#1040](https://github.com/remaxjs/remax/issues/1040)) ([04f79fb](https://github.com/remaxjs/remax/commit/04f79fb69f2ea131ccf2dca44816f58d03bb64a2))
- **cli:** 新增 -a 参数用于分析构建后的包依赖 ([#1014](https://github.com/remaxjs/remax/issues/1014)) ([97759d1](https://github.com/remaxjs/remax/commit/97759d1b107e7e7be392b5a703fe329f97cf4081)), closes [#958](https://github.com/remaxjs/remax/issues/958)

# [2.3.0](https://github.com/remaxjs/remax/compare/v2.2.0...v2.3.0) (2020-06-04)

### Bug Fixes

- **toutiao:** 修复 swiper 的 onAnimationFinish 类型 ([#1024](https://github.com/remaxjs/remax/issues/1024)) ([e35ce48](https://github.com/remaxjs/remax/commit/e35ce4833c1c43cc520ffb99a293b7e343871557))
- 修复 ES Module 的运行时插件无法注册的问题 ([8e73f1d](https://github.com/remaxjs/remax/commit/8e73f1d5fcc2dc2f1ee2bc9ad9caa5a992c99c5a))

### Features

- 插件支持编译时的 onAppConfig 和 onPageConfig hook ([#1015](https://github.com/remaxjs/remax/issues/1015)) ([9ee59be](https://github.com/remaxjs/remax/commit/9ee59beb37422049e87bdbaf8e3431c3a6a7f762))
- 支持 onLoad 和 unload 生命周期 ([4bfc325](https://github.com/remaxjs/remax/commit/4bfc325ec627cc75bcbe8e6524368d8a93ac8674))
- 支持 public 目录 ([#1016](https://github.com/remaxjs/remax/issues/1016)) ([0ed6caf](https://github.com/remaxjs/remax/commit/0ed6caf64a58b15d2e3330d8a8de7cf3eddb63d5))

### Performance Improvements

- **remax:** 避免更新没有变化的属性 ([#989](https://github.com/remaxjs/remax/issues/989)) ([4709bda](https://github.com/remaxjs/remax/commit/4709bda754bd4d042d6259aff9ab074ed34f8ad8))

# [2.2.0](https://github.com/remaxjs/remax/compare/v2.1.1...v2.2.0) (2020-05-29)

### Bug Fixes

- **ali:** 修正没有导出 httpRequest 的问题 ([b8bdb2e](https://github.com/remaxjs/remax/commit/b8bdb2ef390ea77ba2727ae2e3527a5a96960b16))
- **cli:** 修复 watch 模式自定义 cwd 导致编译两次的问题 ([#1008](https://github.com/remaxjs/remax/issues/1008)) ([c14e111](https://github.com/remaxjs/remax/commit/c14e111b1b18299f36a9e95fa43386944e05b7dd))
- **one:** 修复图片重复显示的问题 ([#1004](https://github.com/remaxjs/remax/issues/1004)) ([378a6ab](https://github.com/remaxjs/remax/commit/378a6ab12c132de6dccc9f7b818c82a237b1caa0))

### Features

- 小程序端支持 suspense ([#995](https://github.com/remaxjs/remax/issues/995)) ([aa23f14](https://github.com/remaxjs/remax/commit/aa23f14fa2836b76d43b50c73f0655011a41a403))
- 支持运行时插件 ([#988](https://github.com/remaxjs/remax/issues/988)) ([3a59fff](https://github.com/remaxjs/remax/commit/3a59fff8efc6de0a163715762cfb2f3e179fe443)), closes [#983](https://github.com/remaxjs/remax/issues/983)

## [2.1.1](https://github.com/remaxjs/remax/compare/v2.1.0...v2.1.1) (2020-05-21)

### Bug Fixes

- **ali:** 修正 Button[onGetAuthorize] 不生效的问题 ([2c3d27e](https://github.com/remaxjs/remax/commit/2c3d27e5a744fb6f80362b6a891c58c1dcfde7e6))
- 修复表单类组件 name 属性不生效的问题 ([#981](https://github.com/remaxjs/remax/issues/981)) ([07d0a22](https://github.com/remaxjs/remax/commit/07d0a22ef3b27a5297ddef87e7372f75fb922bf0))
- **wechat:** 修复 hideKeyboard 没导出的问题 ([#980](https://github.com/remaxjs/remax/issues/980)) ([c9afd73](https://github.com/remaxjs/remax/commit/c9afd73b8eee5ec3150606ca5b8c3d63f64d9362))

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
