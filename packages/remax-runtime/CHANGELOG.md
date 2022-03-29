# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.15.13](https://github.com/remaxjs/remax/compare/v2.15.12...v2.15.13) (2022-03-29)

### Bug Fixes

- 修复 CSS 变量的数字会被加上单位的问题 ([#1870](https://github.com/remaxjs/remax/issues/1870)) ([0df4c76](https://github.com/remaxjs/remax/commit/0df4c7664bdb947c71a82e3288a2f343c76240fc)), closes [#1869](https://github.com/remaxjs/remax/issues/1869)

## [2.15.12](https://github.com/remaxjs/remax/compare/v2.15.11...v2.15.12) (2022-01-11)

### Bug Fixes

- 修复节点卸载后回调没从 Page 上删除的问题 ([#1822](https://github.com/remaxjs/remax/issues/1822)) ([0a10885](https://github.com/remaxjs/remax/commit/0a1088571d1fc7ad4f5006ee79d81f8814671857)), closes [#1780](https://github.com/remaxjs/remax/issues/1780)

## [2.15.11](https://github.com/remaxjs/remax/compare/v2.15.10...v2.15.11) (2022-01-05)

**Note:** Version bump only for package @remax/runtime

## [2.15.10](https://github.com/remaxjs/remax/compare/v2.15.9...v2.15.10) (2021-12-18)

### Performance Improvements

- optimize update performance ([#1777](https://github.com/remaxjs/remax/issues/1777)) ([0e0a6b5](https://github.com/remaxjs/remax/commit/0e0a6b503a7db785c65e37c06e1a909b339b68ed))

## [2.15.9](https://github.com/remaxjs/remax/compare/v2.15.7...v2.15.9) (2021-12-06)

### Features

- 增加 hook unstable_onEntries, 允许修改 entry 的路径 ([6dc51d7](https://github.com/remaxjs/remax/commit/6dc51d7076d3ac5c97d66770f1e142ddcd7de09a))

## [2.15.8](https://github.com/remaxjs/remax/compare/v2.15.7...v2.15.8) (2021-11-23)

**Note:** Version bump only for package @remax/runtime

## [2.15.7](https://github.com/remaxjs/remax/compare/v2.15.6...v2.15.7) (2021-11-17)

**Note:** Version bump only for package @remax/runtime

## [2.15.6](https://github.com/remaxjs/remax/compare/v2.15.5...v2.15.6) (2021-09-10)

**Note:** Version bump only for package @remax/runtime

## [2.15.5](https://github.com/remaxjs/remax/compare/v2.15.4...v2.15.5) (2021-09-06)

**Note:** Version bump only for package @remax/runtime

## [2.15.4](https://github.com/remaxjs/remax/compare/v2.15.3...v2.15.4) (2021-08-09)

**Note:** Version bump only for package @remax/runtime

## [2.15.3](https://github.com/remaxjs/remax/compare/v2.15.2...v2.15.3) (2021-08-05)

### Features

- 可以通过外部修改组件样式 ([d74a667](https://github.com/remaxjs/remax/commit/d74a667008476820861b1ada226f2267a4ff7a3e))

## [2.15.2](https://github.com/remaxjs/remax/compare/v2.15.1...v2.15.2) (2021-07-30)

**Note:** Version bump only for package @remax/runtime

## [2.15.1](https://github.com/remaxjs/remax/compare/v2.15.0...v2.15.1) (2021-07-30)

**Note:** Version bump only for package @remax/runtime

# [2.15.0](https://github.com/remaxjs/remax/compare/v2.14.1...v2.15.0) (2021-07-30)

### Features

- 支持 buildMiniComponent，以 webpack 方式构建小程序自定义组件 ([e5ed805](https://github.com/remaxjs/remax/commit/e5ed805191ad08ef269e2f4fa2d7ffa8a580862a))

## [2.14.1](https://github.com/remaxjs/remax/compare/v2.14.0...v2.14.1) (2021-07-20)

**Note:** Version bump only for package @remax/runtime

# [2.14.0](https://github.com/remaxjs/remax/compare/v2.13.6...v2.14.0) (2021-07-06)

### Features

- 生命周期 & 交互事件支持 batchedUpdates ([#1635](https://github.com/remaxjs/remax/issues/1635)) ([fec2741](https://github.com/remaxjs/remax/commit/fec2741dcb2baf5e3e98c5b1950d0446642303c9)), closes [#1633](https://github.com/remaxjs/remax/issues/1633)

## [2.13.6](https://github.com/remaxjs/remax/compare/v2.13.5...v2.13.6) (2021-06-26)

**Note:** Version bump only for package @remax/runtime

## [2.13.5](https://github.com/remaxjs/remax/compare/v2.13.4...v2.13.5) (2021-06-22)

**Note:** Version bump only for package @remax/runtime

## [2.13.4](https://github.com/remaxjs/remax/compare/v2.13.3...v2.13.4) (2021-05-31)

### Bug Fixes

- 修复使用 react-devtools 无法显示小程序组件名称 ([#1585](https://github.com/remaxjs/remax/issues/1585)) ([ee42cc1](https://github.com/remaxjs/remax/commit/ee42cc181742d0c022f457963e7ddb8564bc038d)), closes [#1563](https://github.com/remaxjs/remax/issues/1563)
- 修复子组件的 onShow 中改变状态导致父组件 onShow 不执行的问题 ([e93789f](https://github.com/remaxjs/remax/commit/e93789fad32b14f501b294ef23ab0af3f021a4cb)), closes [#1564](https://github.com/remaxjs/remax/issues/1564)

## [2.13.3](https://github.com/remaxjs/remax/compare/v2.13.2...v2.13.3) (2021-05-25)

**Note:** Version bump only for package @remax/runtime

## [2.13.2](https://github.com/remaxjs/remax/compare/v2.13.1...v2.13.2) (2021-05-19)

**Note:** Version bump only for package @remax/runtime

## [2.13.1](https://github.com/remaxjs/remax/compare/v2.13.0...v2.13.1) (2021-04-22)

### Bug Fixes

- 修复插件环境没有 getApp 导致的报错 ([7a4daf2](https://github.com/remaxjs/remax/commit/7a4daf2c864d318d5f5924295447e8b9d1c35df9))

# [2.13.0](https://github.com/remaxjs/remax/compare/v2.12.1...v2.13.0) (2021-04-19)

**Note:** Version bump only for package @remax/runtime

## [2.12.1](https://github.com/remaxjs/remax/compare/v2.12.0...v2.12.1) (2021-04-09)

### Bug Fixes

- 修复不兼容 Android 6.0 的问题 ([b77e4b8](https://github.com/remaxjs/remax/commit/b77e4b8b49db5e7ca6e98397499e52f7c03ea1a3)), closes [#1522](https://github.com/remaxjs/remax/issues/1522)

# [2.12.0](https://github.com/remaxjs/remax/compare/v2.11.8...v2.12.0) (2021-04-07)

**Note:** Version bump only for package @remax/runtime

## [2.11.8](https://github.com/remaxjs/remax/compare/v2.11.7...v2.11.8) (2021-03-17)

**Note:** Version bump only for package @remax/runtime

## [2.11.7](https://github.com/remaxjs/remax/compare/v2.11.6...v2.11.7) (2021-03-16)

**Note:** Version bump only for package @remax/runtime

## [2.11.6](https://github.com/remaxjs/remax/compare/v2.11.5...v2.11.6) (2021-03-05)

**Note:** Version bump only for package @remax/runtime

## [2.11.5](https://github.com/remaxjs/remax/compare/v2.11.4...v2.11.5) (2021-03-04)

**Note:** Version bump only for package @remax/runtime

## [2.11.4](https://github.com/remaxjs/remax/compare/v2.11.3...v2.11.4) (2021-01-21)

**Note:** Version bump only for package @remax/runtime

## [2.11.3](https://github.com/remaxjs/remax/compare/v2.11.2...v2.11.3) (2020-12-31)

**Note:** Version bump only for package @remax/runtime

## [2.11.2](https://github.com/remaxjs/remax/compare/v2.11.1...v2.11.2) (2020-12-17)

**Note:** Version bump only for package @remax/runtime

## [2.11.1](https://github.com/remaxjs/remax/compare/v2.11.0...v2.11.1) (2020-12-17)

### Bug Fixes

- 修复 style props 变更的错误异常 ([#1446](https://github.com/remaxjs/remax/issues/1446)) ([44d43a7](https://github.com/remaxjs/remax/commit/44d43a75cba47fcae7b64085c52ea858fe017a83))

# [2.11.0](https://github.com/remaxjs/remax/compare/v2.10.1...v2.11.0) (2020-12-14)

### Bug Fixes

- 修复 placeholderStyle 属性 diff 错误的问题 ([#1429](https://github.com/remaxjs/remax/issues/1429)) ([b7622a4](https://github.com/remaxjs/remax/commit/b7622a4ff381f0a3eab113fab99f983dc0247122))

## [2.10.1](https://github.com/remaxjs/remax/compare/v2.10.0...v2.10.1) (2020-12-06)

**Note:** Version bump only for package @remax/runtime

# [2.10.0](https://github.com/remaxjs/remax/compare/v2.9.5...v2.10.0) (2020-12-04)

### Features

- 支持在  所有  平台基础组件上使用平台前缀属性 ([#1412](https://github.com/remaxjs/remax/issues/1412)) ([d6e9072](https://github.com/remaxjs/remax/commit/d6e9072ef9714d62a21905c8a40061845a465b28))

## [2.9.5](https://github.com/remaxjs/remax/compare/v2.9.4...v2.9.5) (2020-12-01)

**Note:** Version bump only for package @remax/runtime

## [2.9.4](https://github.com/remaxjs/remax/compare/v2.9.3...v2.9.4) (2020-11-30)

**Note:** Version bump only for package @remax/runtime

## [2.9.3](https://github.com/remaxjs/remax/compare/v2.9.2...v2.9.3) (2020-11-30)

**Note:** Version bump only for package @remax/runtime

## [2.9.2](https://github.com/remaxjs/remax/compare/v2.9.1...v2.9.2) (2020-11-28)

**Note:** Version bump only for package @remax/runtime

## [2.9.1](https://github.com/remaxjs/remax/compare/v2.9.0...v2.9.1) (2020-11-27)

**Note:** Version bump only for package @remax/runtime

# [2.9.0](https://github.com/remaxjs/remax/compare/v2.8.10...v2.9.0) (2020-11-24)

### Bug Fixes

- 修复小程序自定义组件无法设置 className 的问题 ([d253627](https://github.com/remaxjs/remax/commit/d253627765f688ee8c0e224fa244ef916129b94d))

### Features

- 一大波更新 ([#1366](https://github.com/remaxjs/remax/issues/1366)) ([45dab88](https://github.com/remaxjs/remax/commit/45dab88561bdbd1296ec4204aec572d00e46b1b4)), closes [#1153](https://github.com/remaxjs/remax/issues/1153) [#705](https://github.com/remaxjs/remax/issues/705) [#1077](https://github.com/remaxjs/remax/issues/1077)

## [2.8.10](https://github.com/remaxjs/remax/compare/v2.8.9...v2.8.10) (2020-11-20)

**Note:** Version bump only for package @remax/runtime

## [2.8.9](https://github.com/remaxjs/remax/compare/v2.8.8...v2.8.9) (2020-11-19)

**Note:** Version bump only for package @remax/runtime

## [2.8.8](https://github.com/remaxjs/remax/compare/v2.8.7...v2.8.8) (2020-11-13)

### Bug Fixes

- 修复节点交换时渲染错误的问题 ([9be6614](https://github.com/remaxjs/remax/commit/9be66149610acefe23192c3815ef49828de92b7a))

## [2.8.7](https://github.com/remaxjs/remax/compare/v2.8.6...v2.8.7) (2020-11-12)

### Bug Fixes

- **wechat:** 修复微信端节点交换时渲染错误的问题 ([#1364](https://github.com/remaxjs/remax/issues/1364)) ([62281ff](https://github.com/remaxjs/remax/commit/62281ff69c0da59c7bdf1a477188fbd41abee579)), closes [#1363](https://github.com/remaxjs/remax/issues/1363)

## [2.8.6](https://github.com/remaxjs/remax/compare/v2.8.5...v2.8.6) (2020-11-04)

### Bug Fixes

- 完善 useQuery 类型定义 ([#1350](https://github.com/remaxjs/remax/issues/1350)) ([1bfcd22](https://github.com/remaxjs/remax/commit/1bfcd222aa844ba0bac7247a9235bf6eebe5449a))

## [2.8.5](https://github.com/remaxjs/remax/compare/v2.8.4...v2.8.5) (2020-10-23)

### Bug Fixes

- 修复使用 react-query@2.21.0 构建报错的问题 ([d915ef7](https://github.com/remaxjs/remax/commit/d915ef792bbfd16527dcf63829a16145654f55dd)), closes [#1339](https://github.com/remaxjs/remax/issues/1339)

## [2.8.4](https://github.com/remaxjs/remax/compare/v2.8.3...v2.8.4) (2020-10-14)

### Bug Fixes

- 修复 onUnload 事件不触发的问题 ([#1324](https://github.com/remaxjs/remax/issues/1324)) ([5c53ed8](https://github.com/remaxjs/remax/commit/5c53ed81455d7e2699e4b37409fad97e6f06aa2d))

## [2.8.3](https://github.com/remaxjs/remax/compare/v2.8.2...v2.8.3) (2020-09-28)

**Note:** Version bump only for package @remax/runtime

## [2.8.2](https://github.com/remaxjs/remax/compare/v2.8.1...v2.8.2) (2020-09-18)

**Note:** Version bump only for package @remax/runtime

## [2.8.1](https://github.com/remaxjs/remax/compare/v2.8.0...v2.8.1) (2020-09-16)

### Bug Fixes

- 修复同一页面的生命周期会重复触发的问题 ([#1289](https://github.com/remaxjs/remax/issues/1289)) ([4e8fef1](https://github.com/remaxjs/remax/commit/4e8fef1dfe5f26824aecc0d530da23cf48aef758)), closes [#1288](https://github.com/remaxjs/remax/issues/1288)

# [2.8.0](https://github.com/remaxjs/remax/compare/v2.7.10...v2.8.0) (2020-09-15)

**Note:** Version bump only for package @remax/runtime

## [2.7.10](https://github.com/remaxjs/remax/compare/v2.7.9...v2.7.10) (2020-09-11)

**Note:** Version bump only for package @remax/runtime

## [2.7.9](https://github.com/remaxjs/remax/compare/v2.7.8...v2.7.9) (2020-09-10)

### Bug Fixes

- **ali:** 修复同一个页面的生命周期会重复触发的问题 ([2af7537](https://github.com/remaxjs/remax/commit/2af753700e3048d231c0fb7d137e327e2089b9a7)), closes [#1225](https://github.com/remaxjs/remax/issues/1225)
- **toutiao:** 修复飞书开发者工具运行报错的问题 ([00db2bf](https://github.com/remaxjs/remax/commit/00db2bf5d228c7ab6d1e695ce3d01b4e7e6e2aab))
- **web:** 修复 web 下即使离开页面 onPageScroll 事件也会触发的问题 ([#1232](https://github.com/remaxjs/remax/issues/1232)) ([7ae649e](https://github.com/remaxjs/remax/commit/7ae649ec03598dc5afed1552dbe12f9c74297c2e))

## [2.7.8](https://github.com/remaxjs/remax/compare/v2.7.7...v2.7.8) (2020-08-11)

### Bug Fixes

- **wechat:** 微信增加 onShareTimeline 生命周期 ([3e5f3cb](https://github.com/remaxjs/remax/commit/3e5f3cb0be474cee2d577f024ae7be100c8456c4))

## [2.7.7](https://github.com/remaxjs/remax/compare/v2.7.6...v2.7.7) (2020-07-29)

**Note:** Version bump only for package @remax/runtime

## [2.7.6](https://github.com/remaxjs/remax/compare/v2.7.5...v2.7.6) (2020-07-28)

**Note:** Version bump only for package @remax/runtime

## [2.7.5](https://github.com/remaxjs/remax/compare/v2.7.4...v2.7.5) (2020-07-28)

### Bug Fixes

- 修复 stopPropagation 有可能导致方法不再触发的问题 ([1d6f961](https://github.com/remaxjs/remax/commit/1d6f9618d5cd5a31559d832f2cbd4d51a16ec0a1))

## [2.7.4](https://github.com/remaxjs/remax/compare/v2.7.3...v2.7.4) (2020-07-25)

**Note:** Version bump only for package @remax/runtime

## [2.7.3](https://github.com/remaxjs/remax/compare/v2.7.2...v2.7.3) (2020-07-17)

**Note:** Version bump only for package @remax/runtime

## [2.7.2](https://github.com/remaxjs/remax/compare/v2.7.1...v2.7.2) (2020-07-16)

### Bug Fixes

- **web:** 修复 onLoad 和 onShow 事件不触发的问题 ([f871ae1](https://github.com/remaxjs/remax/commit/f871ae190c2244c1596211536adae46eb070da5d))

## [2.7.1](https://github.com/remaxjs/remax/compare/v2.7.0...v2.7.1) (2020-07-14)

**Note:** Version bump only for package @remax/runtime

# [2.7.0](https://github.com/remaxjs/remax/compare/v2.6.0...v2.7.0) (2020-07-09)

### Bug Fixes

- 修复 onClick 和 onTouchStart 阻止冒泡会互相影响的问题 ([be9af42](https://github.com/remaxjs/remax/commit/be9af42d9a19866afcf613af11dbdf8502089744))
- 修复页面 onLoad 事件缺少 query 参数的问题 ([#1134](https://github.com/remaxjs/remax/issues/1134)) ([a7547c1](https://github.com/remaxjs/remax/commit/a7547c182f0cf31719c27d539a115616b19d075f))

### Features

- 新增 Modal 组件 ([#1133](https://github.com/remaxjs/remax/issues/1133)) ([4c801d4](https://github.com/remaxjs/remax/commit/4c801d4ad239c1eee8c7b073cf506c44cb3e0bb5))

# [2.6.0](https://github.com/remaxjs/remax/compare/v2.5.5...v2.6.0) (2020-07-03)

### Bug Fixes

- **web:** 修复 web 下 useQuery 无法获取到参数的问题 ([c6e6b75](https://github.com/remaxjs/remax/commit/c6e6b7516a14c88ddc326f167a932befd18c720e)), closes [#1112](https://github.com/remaxjs/remax/issues/1112)
- **web:** 修复页面组件无法获取 props.location.query 的问题 ([#1132](https://github.com/remaxjs/remax/issues/1132)) ([7422aff](https://github.com/remaxjs/remax/commit/7422affac4e3b5f334c768e29645ba25efd008e7))

## [2.5.5](https://github.com/remaxjs/remax/compare/v2.5.4...v2.5.5) (2020-06-18)

### Bug Fixes

- **wechat:** 修复条件渲染错误 ([#1100](https://github.com/remaxjs/remax/issues/1100)) ([a204ec7](https://github.com/remaxjs/remax/commit/a204ec7dd3ade1b6b97cd834f018fafa67ec960a)), closes [#1096](https://github.com/remaxjs/remax/issues/1096) [#1099](https://github.com/remaxjs/remax/issues/1099)

## [2.5.4](https://github.com/remaxjs/remax/compare/v2.5.3...v2.5.4) (2020-06-18)

**Note:** Version bump only for package @remax/runtime

## [2.5.3](https://github.com/remaxjs/remax/compare/v2.5.2...v2.5.3) (2020-06-17)

**Note:** Version bump only for package @remax/runtime

## [2.5.2](https://github.com/remaxjs/remax/compare/v2.5.1...v2.5.2) (2020-06-16)

### Bug Fixes

- **ali:** 修复条件渲染 JSX 可能导致报错的问题 ([#1092](https://github.com/remaxjs/remax/issues/1092)) ([309bc5b](https://github.com/remaxjs/remax/commit/309bc5b22c08679f1a159cd2fb53644f8a42da15))

## [2.5.1](https://github.com/remaxjs/remax/compare/v2.5.0...v2.5.1) (2020-06-16)

**Note:** Version bump only for package @remax/runtime

# [2.5.0](https://github.com/remaxjs/remax/compare/v2.4.1...v2.5.0) (2020-06-15)

### Bug Fixes

- **wechat:** 修复更新已删除的节点导致报错的问题 ([#1078](https://github.com/remaxjs/remax/issues/1078)) ([84f45fa](https://github.com/remaxjs/remax/commit/84f45fab73a1fd86326bd52806a465e6c96a00ef)), closes [#1065](https://github.com/remaxjs/remax/issues/1065)

### Features

- 支持 React DevTools ([#994](https://github.com/remaxjs/remax/issues/994)) ([396b326](https://github.com/remaxjs/remax/commit/396b3269d05f4d3218c3c3637d2aaaca03a5673c))
- **remax:** onTouchStart onTouchMove onTouchEnd 支持阻止冒泡 ([#1072](https://github.com/remaxjs/remax/issues/1072)) ([5a532c1](https://github.com/remaxjs/remax/commit/5a532c1935e900e8a86e288077d92338a46832f5)), closes [#1068](https://github.com/remaxjs/remax/issues/1068)

## [2.4.1](https://github.com/remaxjs/remax/compare/v2.4.0...v2.4.1) (2020-06-10)

### Bug Fixes

- 修复 style 属性为 null 时报错的问题 ([#1066](https://github.com/remaxjs/remax/issues/1066)) ([ff83df3](https://github.com/remaxjs/remax/commit/ff83df3b1761eeb779f50eaea5d3df6f931bae53)), closes [#1065](https://github.com/remaxjs/remax/issues/1065)

# [2.4.0](https://github.com/remaxjs/remax/compare/v2.3.0...v2.4.0) (2020-06-05)

**Note:** Version bump only for package @remax/runtime

# [2.3.0](https://github.com/remaxjs/remax/compare/v2.2.0...v2.3.0) (2020-06-04)

### Bug Fixes

- 修复 ES Module 的运行时插件无法注册的问题 ([8e73f1d](https://github.com/remaxjs/remax/commit/8e73f1d5fcc2dc2f1ee2bc9ad9caa5a992c99c5a))

### Features

- 支持 onLoad 和 unload 生命周期 ([4bfc325](https://github.com/remaxjs/remax/commit/4bfc325ec627cc75bcbe8e6524368d8a93ac8674))

### Performance Improvements

- **remax:** 避免更新没有变化的属性 ([#989](https://github.com/remaxjs/remax/issues/989)) ([4709bda](https://github.com/remaxjs/remax/commit/4709bda754bd4d042d6259aff9ab074ed34f8ad8))

# [2.2.0](https://github.com/remaxjs/remax/compare/v2.1.1...v2.2.0) (2020-05-29)

### Features

- 小程序端支持 suspense ([#995](https://github.com/remaxjs/remax/issues/995)) ([aa23f14](https://github.com/remaxjs/remax/commit/aa23f14fa2836b76d43b50c73f0655011a41a403))
- 支持运行时插件 ([#988](https://github.com/remaxjs/remax/issues/988)) ([3a59fff](https://github.com/remaxjs/remax/commit/3a59fff8efc6de0a163715762cfb2f3e179fe443)), closes [#983](https://github.com/remaxjs/remax/issues/983)

## [2.1.1](https://github.com/remaxjs/remax/compare/v2.1.0...v2.1.1) (2020-05-21)

**Note:** Version bump only for package @remax/runtime

# [2.1.0](https://github.com/remaxjs/remax/compare/v2.0.7...v2.1.0) (2020-05-21)

**Note:** Version bump only for package @remax/runtime

## [2.0.7](https://github.com/remaxjs/remax/compare/v2.0.6...v2.0.7) (2020-05-14)

**Note:** Version bump only for package @remax/runtime

## [2.0.6](https://github.com/remaxjs/remax/compare/v2.0.5...v2.0.6) (2020-05-13)

**Note:** Version bump only for package @remax/runtime

## [2.0.5](https://github.com/remaxjs/remax/compare/v2.0.4...v2.0.5) (2020-05-12)

**Note:** Version bump only for package @remax/runtime

## [2.0.4](https://github.com/remaxjs/remax/compare/v2.0.3...v2.0.4) (2020-05-10)

### Bug Fixes

- 修复 watch 时新增生命周期回调不生效的问题 ([8cdc87c](https://github.com/remaxjs/remax/commit/8cdc87c1d71f45851d8e1bc4b2cb93a21d007d1a)), closes [#913](https://github.com/remaxjs/remax/issues/913)
- **wechat:** 修复 onUnhandledRejection onThemeChange 生命周期不生效的问题 ([e7a7556](https://github.com/remaxjs/remax/commit/e7a75568a78433769b3ba76e9d0dceabd5a5765d))

### Reverts

- Revert "修复一大波 watch 问题 (#909)" (#915) ([74e6bca](https://github.com/remaxjs/remax/commit/74e6bca78ad26a9ddce2f40b3bda387b71bdff60)), closes [#909](https://github.com/remaxjs/remax/issues/909) [#915](https://github.com/remaxjs/remax/issues/915)

## [2.0.3](https://github.com/remaxjs/remax/compare/v2.0.2...v2.0.3) (2020-05-08)

**Note:** Version bump only for package @remax/runtime

## [2.0.2](https://github.com/remaxjs/remax/compare/v2.0.1...v2.0.2) (2020-05-07)

**Note:** Version bump only for package @remax/runtime

## [2.0.1](https://github.com/remaxjs/remax/compare/v2.0.0...v2.0.1) (2020-05-06)

### Bug Fixes

- 修复部分 App 生命周期不生效的问题 ([#898](https://github.com/remaxjs/remax/issues/898)) ([e6c6bf1](https://github.com/remaxjs/remax/commit/e6c6bf1d5feed53562fb1edb547c073c4d8a8362)), closes [#895](https://github.com/remaxjs/remax/issues/895)

# [2.0.0](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.18...v2.0.0) (2020-05-05)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.18](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2020-05-05)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.17](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2020-04-30)

### Bug Fixes

- 修复 beforeTabItemTap hook 不生效的问题 ([3dd4ba7](https://github.com/remaxjs/remax/commit/3dd4ba7668f7f916dbbf5a77b71dda4655a1a079))

# [2.0.0-alpha.16](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2020-04-29)

### Bug Fixes

- 修复 usePageEvent 不生效的问题 ([a470d15](https://github.com/remaxjs/remax/commit/a470d1523c917d35d8ff5b109dae4699916b723c))

# [2.0.0-alpha.15](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2020-04-29)

### Bug Fixes

- **wechat:** 修复 onResize 和 onTabItemTap 不生效的问题 ([#857](https://github.com/remaxjs/remax/issues/857)) ([0a1a94a](https://github.com/remaxjs/remax/commit/0a1a94a667071fc777d4985416a4fbbb725a5a91))

### Features

- 自定义组件也支持 stopPropagation ([#870](https://github.com/remaxjs/remax/issues/870)) ([3fb7d46](https://github.com/remaxjs/remax/commit/3fb7d46d907128372b6dabe7548afac074c7c579))

# [2.0.0-alpha.14](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2020-04-27)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.13](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2020-04-26)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.12](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2020-04-26)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.11](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2020-04-26)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.10](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2020-04-26)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.9](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2020-04-26)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.8](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2020-04-26)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.7](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2020-04-23)

**Note:** Version bump only for package @remax/runtime

# [2.0.0-alpha.6](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2020-04-21)

### Bug Fixes

- **web:** 修复 web 端 title 配置不生效的问题 ([ce21382](https://github.com/remaxjs/remax/commit/ce213826efbcfa85583c05565192f74fd19458b0))
- **web:** web 端 button 字体大小与小程序统一 ([3b88837](https://github.com/remaxjs/remax/commit/3b888370dda752e886baead8e123a936b0a4b59f))
- **wechat:** 使用微信官方的 api 类型 ([4f13453](https://github.com/remaxjs/remax/commit/4f13453765172023212125bff624090539090f07))

# [2.0.0-alpha.5](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2020-04-20)

**Note:** Version bump only for package remax

# [2.0.0-alpha.4](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.2...v2.0.0-alpha.4) (2020-04-18)

# [1.21.0](https://github.com/remaxjs/remax/compare/v1.20.0...v1.21.0) (2020-04-14)

### Bug Fixes

- **alipay:** 修复钉钉小程序下没有 Function.prototype.apply 导致的白屏 ([#795](https://github.com/remaxjs/remax/issues/795)) ([17bde7d](https://github.com/remaxjs/remax/commit/17bde7d880d21dd27532909353cdd70c041efe48))

# [1.20.0](https://github.com/remaxjs/remax/compare/v1.19.8...v1.20.0) (2020-04-13)

### Bug Fixes

- 修复同一页面不能重复渲染的问题 ([#791](https://github.com/remaxjs/remax/issues/791)) ([14dbc28](https://github.com/remaxjs/remax/commit/14dbc2801e2a605d28c25a340ad0951cd403767c))

## [1.19.8](https://github.com/remaxjs/remax/compare/v1.19.7...v1.19.8) (2020-04-09)

# [2.0.0-alpha.3](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2020-04-16)

**Note:** Version bump only for package remax

# [2.0.0-alpha.2](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2020-04-16)

**Note:** Version bump only for package remax

# [2.0.0-alpha.1](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2020-04-16)

**Note:** Version bump only for package remax

# [2.0.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.19.7...v2.0.0-alpha.0) (2020-04-16)

### Features

- add basic web support ([#757](https://github.com/remaxjs/remax/issues/757)) ([b3b48b1](https://github.com/remaxjs/remax/commit/b3b48b111cd5889f17d3ec15f1c39437a9dc7fc4))

# [1.21.0](https://github.com/remaxjs/remax/compare/v1.20.0...v1.21.0) (2020-04-14)

### Bug Fixes

- **alipay:** 修复钉钉小程序下没有 Function.prototype.apply 导致的白屏 ([#795](https://github.com/remaxjs/remax/issues/795)) ([17bde7d](https://github.com/remaxjs/remax/commit/17bde7d880d21dd27532909353cdd70c041efe48))

# [1.20.0](https://github.com/remaxjs/remax/compare/v1.19.8...v1.20.0) (2020-04-13)

### Bug Fixes

- 修复同一页面不能重复渲染的问题 ([#791](https://github.com/remaxjs/remax/issues/791)) ([14dbc28](https://github.com/remaxjs/remax/commit/14dbc2801e2a605d28c25a340ad0951cd403767c))

## [1.19.8](https://github.com/remaxjs/remax/compare/v1.19.7...v1.19.8) (2020-04-09)

**Note:** Version bump only for package remax

## [1.19.7](https://github.com/remaxjs/remax/compare/v1.19.6...v1.19.7) (2020-04-08)

**Note:** Version bump only for package remax

## [1.19.6](https://github.com/remaxjs/remax/compare/v1.19.5...v1.19.6) (2020-04-07)

**Note:** Version bump only for package remax

## [1.19.5](https://github.com/remaxjs/remax/compare/v1.19.4...v1.19.5) (2020-04-03)

**Note:** Version bump only for package remax

## [1.19.4](https://github.com/remaxjs/remax/compare/v1.19.3...v1.19.4) (2020-04-03)

**Note:** Version bump only for package remax

## [1.19.3](https://github.com/remaxjs/remax/compare/v1.19.2...v1.19.3) (2020-04-02)

**Note:** Version bump only for package remax

## [1.19.2](https://github.com/remaxjs/remax/compare/v1.19.1...v1.19.2) (2020-04-01)

**Note:** Version bump only for package remax

## [1.19.1](https://github.com/remaxjs/remax/compare/v1.19.0...v1.19.1) (2020-03-31)

### Bug Fixes

- **alipay:** 修复不设置 onShareAppMessage 分享无效的问题 ([#754](https://github.com/remaxjs/remax/issues/754)) ([5c7febc](https://github.com/remaxjs/remax/commit/5c7febcabae19d98019eaa64d46db1b3ff6103f8))

# [1.19.0](https://github.com/remaxjs/remax/compare/v1.18.5...v1.19.0) (2020-03-30)

### Features

- 新增跨平台组件 remax/one ([ff904ac](https://github.com/remaxjs/remax/commit/ff904ac7defc34bd7bd4f71d616d5b21b6eb1aa6)), closes [#373](https://github.com/remaxjs/remax/issues/373)

## [1.18.5](https://github.com/remaxjs/remax/compare/v1.18.4...v1.18.5) (2020-03-27)

**Note:** Version bump only for package remax

## [1.18.4](https://github.com/remaxjs/remax/compare/v1.18.3...v1.18.4) (2020-03-25)

### Bug Fixes

- **wechat:** 微信 ScrollView 添加自定义刷新相关属性 ([#742](https://github.com/remaxjs/remax/issues/742)) ([9ef2afd](https://github.com/remaxjs/remax/commit/9ef2afddbadb7e21f4c342e2633049eb016ee0a5))

## [1.18.3](https://github.com/remaxjs/remax/compare/v1.18.2...v1.18.3) (2020-03-25)

**Note:** Version bump only for package remax

## [1.18.2](https://github.com/remaxjs/remax/compare/v1.18.1...v1.18.2) (2020-03-25)

**Note:** Version bump only for package remax

## [1.18.1](https://github.com/remaxjs/remax/compare/v1.18.0...v1.18.1) (2020-03-24)

### Bug Fixes

- 修复 useAppShareAppMessage 不生效的问题 ([#739](https://github.com/remaxjs/remax/issues/739)) ([6e3c562](https://github.com/remaxjs/remax/commit/6e3c562))

# [1.18.0](https://github.com/remaxjs/remax/compare/v1.17.2...v1.18.0) (2020-03-23)

**Note:** Version bump only for package remax

## [1.17.2](https://github.com/remaxjs/remax/compare/v1.17.1...v1.17.2) (2020-03-19)

**Note:** Version bump only for package remax

## [1.17.1](https://github.com/remaxjs/remax/compare/v1.17.0...v1.17.1) (2020-03-19)

### Bug Fixes

- **alipay:** 补充支付宝 onBack 事件 hook 参数传递 ([c0600b7](https://github.com/remaxjs/remax/commit/c0600b7))

# [1.17.0](https://github.com/remaxjs/remax/compare/v1.16.1...v1.17.0) (2020-03-19)

### Features

- 新增 usePageEvent，useAppEvent 统一生命周期 hook ([#722](https://github.com/remaxjs/remax/issues/722)) ([0e8d7cd](https://github.com/remaxjs/remax/commit/0e8d7cd)), closes [#179](https://github.com/remaxjs/remax/issues/179)

## [1.16.1](https://github.com/remaxjs/remax/compare/v1.16.0...v1.16.1) (2020-03-18)

**Note:** Version bump only for package remax

# [1.16.0](https://github.com/remaxjs/remax/compare/v1.15.3...v1.16.0) (2020-03-17)

### Features

- 引入 turboPages ([#595](https://github.com/remaxjs/remax/issues/595)) ([88d464e](https://github.com/remaxjs/remax/commit/88d464e))

## [1.15.3](https://github.com/remaxjs/remax/compare/v1.15.2...v1.15.3) (2020-03-17)

**Note:** Version bump only for package remax

## [1.15.2](https://github.com/remaxjs/remax/compare/v1.15.1...v1.15.2) (2020-03-15)

### Bug Fixes

- **alipay:** 修复 useOptionMenuClick 回调没有参数的问题 ([58e7ecb](https://github.com/remaxjs/remax/commit/58e7ecb))

## [1.15.1](https://github.com/remaxjs/remax/compare/v1.15.0...v1.15.1) (2020-03-13)

**Note:** Version bump only for package remax

# [1.15.0](https://github.com/remaxjs/remax/compare/v1.14.2...v1.15.0) (2020-03-11)

**Note:** Version bump only for package remax

## [1.14.2](https://github.com/remaxjs/remax/compare/v1.14.1...v1.14.2) (2020-03-05)

**Note:** Version bump only for package remax

## [1.14.1](https://github.com/remaxjs/remax/compare/v1.14.0...v1.14.1) (2020-02-28)

### Bug Fixes

- 修复条件渲染可能导致的布局错乱 ([3a8478a](https://github.com/remaxjs/remax/commit/3a8478a))

# [1.14.0](https://github.com/remaxjs/remax/compare/v1.13.3...v1.14.0) (2020-02-28)

**Note:** Version bump only for package remax

## [1.13.2](https://github.com/remaxjs/remax/compare/v1.13.1...v1.13.2) (2020-02-26)

### Bug Fixes

- 修复点击自定义组件无法触发父组件 stopPropagation 的问题 ([#652](https://github.com/remaxjs/remax/issues/652)) ([1bff049](https://github.com/remaxjs/remax/commit/1bff049)), closes [#536](https://github.com/remaxjs/remax/issues/536) [#283](https://github.com/remaxjs/remax/issues/283)

### Performance Improvements

- **remax:** 优化运行时性能 ([#659](https://github.com/remaxjs/remax/issues/659)) ([0cf3649](https://github.com/remaxjs/remax/commit/0cf3649))

## [1.13.1](https://github.com/remaxjs/remax/compare/v1.13.0...v1.13.1) (2020-02-21)

### Bug Fixes

- 原生组件支持命名空间属性 ([#651](https://github.com/remaxjs/remax/issues/651)) ([224e238](https://github.com/remaxjs/remax/commit/224e238))

# [1.13.0](https://github.com/remaxjs/remax/compare/v1.12.5...v1.13.0) (2020-02-19)

**Note:** Version bump only for package remax

## [1.12.5](https://github.com/remaxjs/remax/compare/v1.12.4...v1.12.5) (2020-01-31)

**Note:** Version bump only for package remax

## [1.12.4](https://github.com/remaxjs/remax/compare/v1.12.3...v1.12.4) (2020-01-30)

**Note:** Version bump only for package remax

## [1.12.3](https://github.com/remaxjs/remax/compare/v1.12.2...v1.12.3) (2020-01-21)

**Note:** Version bump only for package remax

## [1.12.2](https://github.com/remaxjs/remax/compare/v1.12.1...v1.12.2) (2020-01-19)

### Bug Fixes

- 修复 api 类型丢失的问题 ([ed7a77b](https://github.com/remaxjs/remax/commit/ed7a77b)), closes [#598](https://github.com/remaxjs/remax/issues/598)
- 修复配置 pxToRpx 不生效的问题 ([2c93e21](https://github.com/remaxjs/remax/commit/2c93e21))

## [1.12.1](https://github.com/remaxjs/remax/compare/v1.12.0...v1.12.1) (2020-01-19)

**Note:** Version bump only for package remax

# [1.12.0](https://github.com/remaxjs/remax/compare/v1.11.5...v1.12.0) (2020-01-19)

### Features

- 支持通过 .env 文件设置环境变量 ([3b3497f](https://github.com/remaxjs/remax/commit/3b3497f))

## [1.11.5](https://github.com/remaxjs/remax/compare/v1.11.4...v1.11.5) (2020-01-18)

**Note:** Version bump only for package remax

## [1.11.4](https://github.com/remaxjs/remax/compare/v1.11.3...v1.11.4) (2020-01-17)

**Note:** Version bump only for package remax

## [1.11.3](https://github.com/remaxjs/remax/compare/v1.11.2...v1.11.3) (2020-01-16)

**Note:** Version bump only for package remax

## [1.11.2](https://github.com/remaxjs/remax/compare/v1.11.1...v1.11.2) (2020-01-15)

### Bug Fixes

- 修复钉钉白屏问题 ([38e1199](https://github.com/remaxjs/remax/commit/38e1199))

## [1.11.1](https://github.com/remaxjs/remax/compare/v1.11.0...v1.11.1) (2020-01-14)

### Performance Improvements

- **alipay:** 优化支付宝渲染层性能 ([5d3e936](https://github.com/remaxjs/remax/commit/5d3e936))

# [1.11.0](https://github.com/remaxjs/remax/compare/v1.10.9...v1.11.0) (2020-01-09)

### Bug Fixes

- **wechat:** 修复 ScrollView 非受控使用依然有受控表现的问题 ([e2001bb](https://github.com/remaxjs/remax/commit/e2001bb))
- **wechat:** 修复 Swiper 非受控时依然有受控表现的问题 ([c4e3c88](https://github.com/remaxjs/remax/commit/c4e3c88))

### Features

- 新增 useQuery，用于在组件中获取页面 query ([3603139](https://github.com/remaxjs/remax/commit/3603139))
- 引入 useNativeEffect ([#557](https://github.com/remaxjs/remax/issues/557)) ([be40751](https://github.com/remaxjs/remax/commit/be40751)), closes [#310](https://github.com/remaxjs/remax/issues/310) [#255](https://github.com/remaxjs/remax/issues/255)

### Performance Improvements

- 避免当组件上有 style 属性时可能产生的非必要渲染 ([7ec0be2](https://github.com/remaxjs/remax/commit/7ec0be2)), closes [#531](https://github.com/remaxjs/remax/issues/531)

## [1.10.9](https://github.com/remaxjs/remax/compare/v1.10.8...v1.10.9) (2020-01-01)

### Bug Fixes

- **remax:** 修复在父元素阻止冒泡时，点击子事件有可能不执行的问题 ([#553](https://github.com/remaxjs/remax/issues/553)) ([4d60af3](https://github.com/remaxjs/remax/commit/4d60af3)), closes [#552](https://github.com/remaxjs/remax/issues/552)

## [1.10.8](https://github.com/remaxjs/remax/compare/v1.10.7...v1.10.8) (2019-12-29)

### Bug Fixes

- **alipay:** 支付宝添加 getOpenUserInfo API ([d481176](https://github.com/remaxjs/remax/commit/d481176)), closes [#534](https://github.com/remaxjs/remax/issues/534)
- **wechat:** 微信添加 requestSubscribeMessage API ([e0c93bf](https://github.com/remaxjs/remax/commit/e0c93bf))
- **wechat:** 修复微信平台 Swiper 受控 current 后表现异常的情况 ([80f1c12](https://github.com/remaxjs/remax/commit/80f1c12)), closes [#535](https://github.com/remaxjs/remax/issues/535)
- 修复 inline style 带有浮点数报错的问题 ([#530](https://github.com/remaxjs/remax/issues/530)) ([27e07c2](https://github.com/remaxjs/remax/commit/27e07c2))
- 修复支付宝自定义组件使用 component2 模式报错的问题 ([109f904](https://github.com/remaxjs/remax/commit/109f904))

## [1.10.7](https://github.com/remaxjs/remax/compare/v1.10.6...v1.10.7) (2019-12-22)

### Bug Fixes

- **wechat:** 修复微信平台 ScrollView 设置 scrollTop 表现异常的问题 ([55c440e](https://github.com/remaxjs/remax/commit/55c440e)), closes [#459](https://github.com/remaxjs/remax/issues/459)

## [1.10.6](https://github.com/remaxjs/remax/compare/v1.10.5...v1.10.6) (2019-12-19)

### Bug Fixes

- 修复当点击区域为阻止冒泡元素的子元素时，阻止冒泡失败的问题 ([d032d8d](https://github.com/remaxjs/remax/commit/d032d8d))
- 修复无法在 inline style 中使用 css3 var 特性的问题 ([e2d0dde](https://github.com/remaxjs/remax/commit/e2d0dde)), closes [#507](https://github.com/remaxjs/remax/issues/507)

## [1.10.5](https://github.com/remaxjs/remax/compare/v1.10.4...v1.10.5) (2019-12-19)

**Note:** Version bump only for package remax

## [1.10.4](https://github.com/remaxjs/remax/compare/v1.10.3...v1.10.4) (2019-12-18)

**Note:** Version bump only for package remax

## [1.10.3](https://github.com/remaxjs/remax/compare/v1.10.2...v1.10.3) (2019-12-17)

**Note:** Version bump only for package remax

## [1.10.2](https://github.com/remaxjs/remax/compare/v1.10.1...v1.10.2) (2019-12-15)

**Note:** Version bump only for package remax

## [1.10.1](https://github.com/remaxjs/remax/compare/v1.10.0...v1.10.1) (2019-12-15)

### Bug Fixes

- 去除没有使用 ref 时原生自定义组件抛出无用的警告 ([89ccaa1](https://github.com/remaxjs/remax/commit/89ccaa1)), closes [#478](https://github.com/remaxjs/remax/issues/478)

# [1.10.0](https://github.com/remaxjs/remax/compare/v1.9.0...v1.10.0) (2019-12-13)

**Note:** Version bump only for package remax

# [1.9.0](https://github.com/remaxjs/remax/compare/v1.8.0...v1.9.0) (2019-12-09)

### Bug Fixes

- 修复使用 redux 时 Class Component 的生命周期函数不触发的问题 ([#454](https://github.com/remaxjs/remax/issues/454)) ([8457c50](https://github.com/remaxjs/remax/commit/8457c50))

### Features

- 支持 typescript 3.7 ([#458](https://github.com/remaxjs/remax/issues/458)) ([2723504](https://github.com/remaxjs/remax/commit/2723504)), closes [#442](https://github.com/remaxjs/remax/issues/442)

# [1.8.0](https://github.com/remaxjs/remax/compare/v1.7.2...v1.8.0) (2019-12-05)

**Note:** Version bump only for package remax

## [1.7.2](https://github.com/remaxjs/remax/compare/v1.7.1...v1.7.2) (2019-12-03)

**Note:** Version bump only for package remax

## [1.7.1](https://github.com/remaxjs/remax/compare/v1.7.0...v1.7.1) (2019-12-03)

### Bug Fixes

- 修复改变元素顺序后，渲染结果出错的问题 ([57632c9](https://github.com/remaxjs/remax/commit/57632c9))

# [1.7.0](https://github.com/remaxjs/remax/compare/v1.6.0...v1.7.0) (2019-12-02)

### Bug Fixes

- 修复改变元素顺序后，出现元素错乱的问题 ([#439](https://github.com/remaxjs/remax/issues/439)) ([0563194](https://github.com/remaxjs/remax/commit/0563194)), closes [#438](https://github.com/remaxjs/remax/issues/438)

### Features

- 支持使用 TypeScript 写应用和页面配置文件 ([#400](https://github.com/remaxjs/remax/issues/400)) ([56a96e5](https://github.com/remaxjs/remax/commit/56a96e5)), closes [#280](https://github.com/remaxjs/remax/issues/280)

# [1.6.0](https://github.com/remaxjs/remax/compare/v1.6.0-beta.3...v1.6.0) (2019-11-29)

**Note:** Version bump only for package remax

# [1.6.0-beta.3](https://github.com/remaxjs/remax/compare/v1.6.0-beta.2...v1.6.0-beta.3) (2019-11-28)

**Note:** Version bump only for package remax

# [1.6.0-beta.2](https://github.com/remaxjs/remax/compare/v1.6.0-beta.1...v1.6.0-beta.2) (2019-11-27)

**Note:** Version bump only for package remax

# [1.6.0-beta.1](https://github.com/remaxjs/remax/compare/v1.6.0-beta.0...v1.6.0-beta.1) (2019-11-25)

**Note:** Version bump only for package remax

# [1.6.0-beta.0](https://github.com/remaxjs/remax/compare/v1.5.2...v1.6.0-beta.0) (2019-11-22)

### Bug Fixes

- 修复 App 是函数组件时生命周期调用错误的问题 ([3a0a42d](https://github.com/remaxjs/remax/commit/3a0a42d))
- 修正 App 组件被 HOC 包裹后无法触发生命周期回调的问题 ([#398](https://github.com/remaxjs/remax/issues/398)) ([98be559](https://github.com/remaxjs/remax/commit/98be559))
- 让开发者可以从 remax 导入组件的类型 ([#394](https://github.com/remaxjs/remax/issues/394)) ([2e12c04](https://github.com/remaxjs/remax/commit/2e12c04)), closes [#369](https://github.com/remaxjs/remax/issues/369)

### Features

- **alipay:** 支持获取小程序组件 ref ([a7fba88](https://github.com/remaxjs/remax/commit/a7fba88)), closes [#384](https://github.com/remaxjs/remax/issues/384)
- createHostComponent 支持定义 prop 别名 ([#392](https://github.com/remaxjs/remax/issues/392)) ([cccf477](https://github.com/remaxjs/remax/commit/cccf477))
- 支持开发者注册 host 组件 ([4ba9c45](https://github.com/remaxjs/remax/commit/4ba9c45)), closes [#293](https://github.com/remaxjs/remax/issues/293)
- **alipay:** 新增 Video 组件及相关 API ([#401](https://github.com/remaxjs/remax/issues/401)) ([35e039d](https://github.com/remaxjs/remax/commit/35e039d))

## [1.5.2](https://github.com/remaxjs/remax/compare/v1.5.1...v1.5.2) (2019-11-20)

**Note:** Version bump only for package remax

## [1.5.1](https://github.com/remaxjs/remax/compare/v1.5.0...v1.5.1) (2019-11-20)

**Note:** Version bump only for package remax

# [1.5.0](https://github.com/remaxjs/remax/compare/v1.4.7...v1.5.0) (2019-11-19)

### Features

- 支持在 onClick 回调中使用 stopPropagation 阻止冒泡 ([#292](https://github.com/remaxjs/remax/issues/292)) ([09e006f](https://github.com/remaxjs/remax/commit/09e006f)), closes [#283](https://github.com/remaxjs/remax/issues/283)
- 新增配置 pxToRpx 用于设置是否转换 px 到 rpx ([dd73e13](https://github.com/remaxjs/remax/commit/dd73e13)), closes [#380](https://github.com/remaxjs/remax/issues/380) [#380](https://github.com/remaxjs/remax/issues/380) [#381](https://github.com/remaxjs/remax/issues/381) [#381](https://github.com/remaxjs/remax/issues/381) [#381](https://github.com/remaxjs/remax/issues/381)

## [1.4.7](https://github.com/remaxjs/remax/compare/v1.4.6...v1.4.7) (2019-11-19)

**Note:** Version bump only for package remax

## [1.4.6](https://github.com/remaxjs/remax/compare/v1.4.5...v1.4.6) (2019-11-18)

### Bug Fixes

- 修复原生组件驼峰风格，React 风格函数属性转换错误的问题 ([#358](https://github.com/remaxjs/remax/issues/358)) ([5a789fc](https://github.com/remaxjs/remax/commit/5a789fc)), closes [#357](https://github.com/remaxjs/remax/issues/357)

## [1.4.5](https://github.com/remaxjs/remax/compare/v1.4.4...v1.4.5) (2019-11-15)

**Note:** Version bump only for package remax

## [1.4.4](https://github.com/remaxjs/remax/compare/v1.4.3...v1.4.4) (2019-11-14)

**Note:** Version bump only for package remax

## [1.4.3](https://github.com/remaxjs/remax/compare/v1.4.2...v1.4.3) (2019-11-14)

### Bug Fixes

- **wechat:** 修正 ScrollView 组件类型 ([84e3c91](https://github.com/remaxjs/remax/commit/84e3c91))

## [1.4.2](https://github.com/remaxjs/remax/compare/v1.4.1...v1.4.2) (2019-11-13)

### Bug Fixes

- 修复钉钉小程序使用原生组件渲染错乱的问题 ([e38f578](https://github.com/remaxjs/remax/commit/e38f578)), closes [#316](https://github.com/remaxjs/remax/issues/316)
- 完善支付宝 Button 组件 type 定义 ([#340](https://github.com/remaxjs/remax/issues/340)) ([77900ce](https://github.com/remaxjs/remax/commit/77900ce))

## [1.4.1](https://github.com/remaxjs/remax/compare/v1.4.0...v1.4.1) (2019-11-11)

**Note:** Version bump only for package remax

# [1.4.0](https://github.com/remaxjs/remax/compare/v1.3.1...v1.4.0) (2019-11-11)

### Bug Fixes

- 修复 dataset 属性失效的问题 ([68af03b](https://github.com/remaxjs/remax/commit/68af03b))
- 修复 inline style 单位 px 没有转换成 rpx 的问题 ([b5a366a](https://github.com/remaxjs/remax/commit/b5a366a)), closes [#320](https://github.com/remaxjs/remax/issues/320)
- 修复多次切换页面导致加载速度变慢的问题 ([1f93d18](https://github.com/remaxjs/remax/commit/1f93d18)), closes [#304](https://github.com/remaxjs/remax/issues/304)

## [1.3.1](https://github.com/remaxjs/remax/compare/v1.3.0...v1.3.1) (2019-11-04)

**Note:** Version bump only for package remax

# [1.3.0](https://github.com/remaxjs/remax/compare/v1.2.2...v1.3.0) (2019-11-04)

### Bug Fixes

- **wechat:** 设置 Navigator 组件 openType 默认值为 navigate ([e2fe7cc](https://github.com/remaxjs/remax/commit/e2fe7cc))
- page lifecye pageScroll callback‘s params is undefined issue ([a36d79d](https://github.com/remaxjs/remax/commit/a36d79d))

### Features

- 增加从插件引用组件的功能 ([639391b](https://github.com/remaxjs/remax/commit/639391b))

## [1.2.2](https://github.com/remaxjs/remax/compare/v1.2.1...v1.2.2) (2019-10-22)

### Bug Fixes

- **alipay:** 修复 catchClick ([5897266](https://github.com/remaxjs/remax/commit/5897266))

## [1.2.1](https://github.com/remaxjs/remax/compare/v1.2.0...v1.2.1) (2019-10-16)

### Bug Fixes

- 修复 style 性质的属性没有转换成内联样式的问题 ([e2bc745](https://github.com/remaxjs/remax/commit/e2bc745)), closes [#281](https://github.com/remaxjs/remax/issues/281)

# [1.2.0](https://github.com/remaxjs/remax/compare/v1.2.0-beta.0...v1.2.0) (2019-10-14)

**Note:** Version bump only for package remax

# [1.2.0-beta.0](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.3...v1.2.0-beta.0) (2019-10-14)

### Bug Fixes

- **alipay:** 完善接口的 promise 类型 ([e6862f2](https://github.com/remaxjs/remax/commit/e6862f2))
- **wechat:** 修复 Slider 组件 max 属性的默认值为 100 ([5f0ba37](https://github.com/remaxjs/remax/commit/5f0ba37))

### Features

- 支持引用小程序自定义组件 ([#270](https://github.com/remaxjs/remax/issues/270)) ([61d2aac](https://github.com/remaxjs/remax/commit/61d2aac))

# [1.2.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.2...v1.2.0-alpha.3) (2019-10-11)

**Note:** Version bump only for package remax

# [1.2.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package remax

**Note:** Version bump only for package remax

**Note:** Version bump only for package remax

# [1.2.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package remax

# [1.2.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- **wechat:** 修复 Slider 组件默认值错误的问题 ([f14ce42](https://github.com/remaxjs/remax/commit/f14ce42)), closes [#273](https://github.com/remaxjs/remax/issues/273)
- **wechat:** 修复 Textarea focus 状态错乱的问题 ([f2c1dbf](https://github.com/remaxjs/remax/commit/f2c1dbf)), closes [#241](https://github.com/remaxjs/remax/issues/241)

**Note:** Version bump only for package remax

**Note:** Version bump only for package remax

# [1.2.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- **wechat:** 修复 Slider 组件默认值错误的问题 ([f14ce42](https://github.com/remaxjs/remax/commit/f14ce42)), closes [#273](https://github.com/remaxjs/remax/issues/273)
- **wechat:** 修复 Textarea focus 状态错乱的问题 ([f2c1dbf](https://github.com/remaxjs/remax/commit/f2c1dbf)), closes [#241](https://github.com/remaxjs/remax/issues/241)

## [1.1.3](https://github.com/remaxjs/remax/compare/v1.1.2...v1.1.3) (2019-09-30)

### Bug Fixes

- 修复内联样式 vendor prefix 解析错误的问题 ([1e7997d](https://github.com/remaxjs/remax/commit/1e7997d)), closes [#259](https://github.com/remaxjs/remax/issues/259)

# [1.2.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.1.2...v1.2.0-alpha.0) (2019-09-30)

**Note:** Version bump only for package remax

## [1.1.2](https://github.com/remaxjs/remax/compare/v1.1.1...v1.1.2) (2019-09-27)

### Bug Fixes

- 修复在 App 上使用 Context 导致页面回调出错的问题 ([56fcc2f](https://github.com/remaxjs/remax/commit/56fcc2f)), closes [#256](https://github.com/remaxjs/remax/issues/256)

### Performance Improvements

- optimize using promise/key ([#258](https://github.com/remaxjs/remax/issues/258)) ([25c60ad](https://github.com/remaxjs/remax/commit/25c60ad))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修复跨平台开发时，type 定义冲突的问题 ([#245](https://github.com/remaxjs/remax/issues/245)) ([0594a90](https://github.com/remaxjs/remax/commit/0594a90)), closes [#227](https://github.com/remaxjs/remax/issues/227)
- **wechat:** 完善 Input, Pick 组件类型 ([c1e5614](https://github.com/remaxjs/remax/commit/c1e5614))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修复跨平台开发时，type 定义冲突的问题 ([#245](https://github.com/remaxjs/remax/issues/245)) ([0594a90](https://github.com/remaxjs/remax/commit/0594a90)), closes [#227](https://github.com/remaxjs/remax/issues/227)
- **wechat:** 完善 Input, Pick 组件类型 ([c1e5614](https://github.com/remaxjs/remax/commit/c1e5614))

# [1.1.0](https://github.com/remaxjs/remax/compare/v1.0.18...v1.1.0) (2019-09-22)

### Bug Fixes

- 修正微信 Image mode 属性 type 定义 ([#240](https://github.com/remaxjs/remax/issues/240)) ([c1b5687](https://github.com/remaxjs/remax/commit/c1b5687))
- **wechat:** 添加微信遗漏的云开发 API ([#247](https://github.com/remaxjs/remax/issues/247)) ([4298813](https://github.com/remaxjs/remax/commit/4298813)), closes [#246](https://github.com/remaxjs/remax/issues/246)

# [1.1.0-alpha.5](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- 删除头条里没必要的 api ([f5af7aa](https://github.com/remaxjs/remax/commit/f5af7aa))
- 完善头条组件定义 ([aaf3a27](https://github.com/remaxjs/remax/commit/aaf3a27))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Features

- 新增 unstable_batchedUpdates ([5b485b4](https://github.com/remaxjs/remax/commit/5b485b4))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

## [1.0.18](https://github.com/remaxjs/remax/compare/v1.0.17...v1.0.18) (2019-09-18)

**Note:** Version bump only for package remax

## [1.0.17](https://github.com/remaxjs/remax/compare/v1.0.16...v1.0.17) (2019-09-18)

### Bug Fixes

- 修复无法使用 catch 事件和 dataset 的问题 ([44485b4](https://github.com/remaxjs/remax/commit/44485b4)), closes [#219](https://github.com/remaxjs/remax/issues/219) [#231](https://github.com/remaxjs/remax/issues/231)

# [1.1.0-alpha.5](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

**Note:** Version bump only for package remax

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

**Note:** Version bump only for package remax

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- 删除头条里没必要的 api ([f5af7aa](https://github.com/remaxjs/remax/commit/f5af7aa))
- 完善头条组件定义 ([aaf3a27](https://github.com/remaxjs/remax/commit/aaf3a27))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- 修正支付宝 api 类型定义 ([844624a](https://github.com/remaxjs/remax/commit/844624a))

### Features

- 新增 unstable_batchedUpdates ([5b485b4](https://github.com/remaxjs/remax/commit/5b485b4))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Bug Fixes

- 修正支付宝组件的类型定义 ([#154](https://github.com/remaxjs/remax/issues/154)) ([9050ca1](https://github.com/remaxjs/remax/commit/9050ca1))

### Features

- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

## [1.0.16](https://github.com/remaxjs/remax/compare/v1.0.15...v1.0.16) (2019-09-16)

### Bug Fixes

- 修复 onReady 回调 ([f6e276d](https://github.com/remaxjs/remax/commit/f6e276d)), closes [#203](https://github.com/remaxjs/remax/issues/203)
- 修正支付宝 api 类型定义 ([844624a](https://github.com/remaxjs/remax/commit/844624a))
- **wechat:** 更正 Image 和 Button 的 type 定义 ([7ba51d3](https://github.com/remaxjs/remax/commit/7ba51d3))

## [1.0.15](https://github.com/remaxjs/remax/compare/v1.0.14...v1.0.15) (2019-09-04)

**Note:** Version bump only for package remax

## [1.0.14](https://github.com/remaxjs/remax/compare/v1.0.13...v1.0.14) (2019-09-03)

### Bug Fixes

- 修复支付宝 Button 组件缺少的 style 属性 ([9e52a2d](https://github.com/remaxjs/remax/commit/9e52a2d))
- 修正微信组件及 API 类型定义 ([4630ff4](https://github.com/remaxjs/remax/commit/4630ff4))

## [1.0.13](https://github.com/remaxjs/remax/compare/v1.0.12...v1.0.13) (2019-09-02)

### Bug Fixes

- 修复生命周期 hooks 里的闭包变量不更新的问题 ([3b5e039](https://github.com/remaxjs/remax/commit/3b5e039))

## [1.0.12](https://github.com/remaxjs/remax/compare/v1.0.11...v1.0.12) (2019-09-02)

**Note:** Version bump only for package remax

## [1.0.11](https://github.com/remaxjs/remax/compare/v1.0.10...v1.0.11) (2019-08-31)

### Bug Fixes

- 修复微信 api 的类型定义 ([49e8d34](https://github.com/remaxjs/remax/commit/49e8d34))
- 完善微信组件类型定义 ([#161](https://github.com/remaxjs/remax/issues/161)) ([356fcbf](https://github.com/remaxjs/remax/commit/356fcbf))

## [1.0.10](https://github.com/remaxjs/remax/compare/v1.0.9...v1.0.10) (2019-08-30)

### Bug Fixes

- 修复支付宝基础组件类型 ([1b30b49](https://github.com/remaxjs/remax/commit/1b30b49))

## [1.0.9](https://github.com/remaxjs/remax/compare/v1.0.8...v1.0.9) (2019-08-29)

**Note:** Version bump only for package remax

## [1.0.8](https://github.com/remaxjs/remax/compare/v1.0.7...v1.0.8) (2019-08-28)

**Note:** Version bump only for package remax

## [1.0.7](https://github.com/remaxjs/remax/compare/v1.0.6...v1.0.7) (2019-08-28)

### Bug Fixes

- 修正支付宝 events 事件不触发的问题 ([dbf6e09](https://github.com/remaxjs/remax/commit/dbf6e09))
- 修正支付宝组件的类型定义 ([#154](https://github.com/remaxjs/remax/issues/154)) ([9050ca1](https://github.com/remaxjs/remax/commit/9050ca1))

## [1.0.6](https://github.com/remaxjs/remax/compare/v1.0.5...v1.0.6) (2019-08-28)

### Bug Fixes

- 修复 useShareAppMessage 的回调会被多次调用的问题 ([20adb1f](https://github.com/remaxjs/remax/commit/20adb1f)), closes [#172](https://github.com/remaxjs/remax/issues/172)

## [1.0.5](https://github.com/remaxjs/remax/compare/v1.0.4...v1.0.5) (2019-08-27)

### Bug Fixes

- 修复 onShareAppMessage 拿不到参数的问题 ([9189f01](https://github.com/remaxjs/remax/commit/9189f01)), closes [#169](https://github.com/remaxjs/remax/issues/169)
- 微信 Swiper 自动播放不会受 state 变化影响 ([bdc9c67](https://github.com/remaxjs/remax/commit/bdc9c67))

### Performance Improvements

- 提升模板渲染性能 ([9af03f9](https://github.com/remaxjs/remax/commit/9af03f9))

## [1.0.4](https://github.com/remaxjs/remax/compare/v1.0.3...v1.0.4) (2019-08-24)

**Note:** Version bump only for package remax

## [1.0.3](https://github.com/remaxjs/remax/compare/v1.0.2...v1.0.3) (2019-08-24)

### Bug Fixes

- 修复支付宝的 PickerView 组件 ([731b28e](https://github.com/remaxjs/remax/commit/731b28e))

## [1.0.2](https://github.com/remaxjs/remax/compare/v1.0.1...v1.0.2) (2019-08-23)

### Bug Fixes

- style 为 null/undefined 时报错的问题 ([28f4367](https://github.com/remaxjs/remax/commit/28f4367))
- 生命周期 hooks 不能在组件中使用的问题 ([4fa5695](https://github.com/remaxjs/remax/commit/4fa5695))
