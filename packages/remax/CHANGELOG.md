# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
