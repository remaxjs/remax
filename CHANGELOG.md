# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package root

# [1.2.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- **wechat:** 修复 Slider 组件默认值错误的问题 ([f14ce42](https://github.com/remaxjs/remax/commit/f14ce42)), closes [#273](https://github.com/remaxjs/remax/issues/273)
- 修复 rebuild 时不存在的属性依然残留的问题 ([3bc0f71](https://github.com/remaxjs/remax/commit/3bc0f71)), closes [#266](https://github.com/remaxjs/remax/issues/266)
- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([6b97092](https://github.com/remaxjs/remax/commit/6b97092)), closes [#263](https://github.com/remaxjs/remax/issues/263)
- 修复 windows 下跨平台开发会引入错误平台代码的问题 ([5f49e57](https://github.com/remaxjs/remax/commit/5f49e57)), closes [#206](https://github.com/remaxjs/remax/issues/206)
- 修复跨平台开发 esm build 结果报错的问题 ([cc5cd34](https://github.com/remaxjs/remax/commit/cc5cd34))
- **wechat:** 修复 Textarea focus 状态错乱的问题 ([f2c1dbf](https://github.com/remaxjs/remax/commit/f2c1dbf)), closes [#241](https://github.com/remaxjs/remax/issues/241)
- 修复内联样式 vendor prefix 解析错误的问题 ([988722b](https://github.com/remaxjs/remax/commit/988722b)), closes [#259](https://github.com/remaxjs/remax/issues/259)
- 修正 windows 上 css 图片路径 ([12a3669](https://github.com/remaxjs/remax/commit/12a3669)), closes [#235](https://github.com/remaxjs/remax/issues/235)

### Features

- 支持自定义 babel 配置 ([8afee36](https://github.com/remaxjs/remax/commit/8afee36))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://github.com/remaxjs/remax/issues/262)) ([59a47f2](https://github.com/remaxjs/remax/commit/59a47f2))

**Note:** Version bump only for package root

**Note:** Version bump only for package root

# [1.2.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- **wechat:** 修复 Slider 组件默认值错误的问题 ([f14ce42](https://github.com/remaxjs/remax/commit/f14ce42)), closes [#273](https://github.com/remaxjs/remax/issues/273)
- 修复 rebuild 时不存在的属性依然残留的问题 ([3bc0f71](https://github.com/remaxjs/remax/commit/3bc0f71)), closes [#266](https://github.com/remaxjs/remax/issues/266)
- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([6b97092](https://github.com/remaxjs/remax/commit/6b97092)), closes [#263](https://github.com/remaxjs/remax/issues/263)
- 修复 windows 下跨平台开发会引入错误平台代码的问题 ([5f49e57](https://github.com/remaxjs/remax/commit/5f49e57)), closes [#206](https://github.com/remaxjs/remax/issues/206)
- 修复跨平台开发 esm build 结果报错的问题 ([cc5cd34](https://github.com/remaxjs/remax/commit/cc5cd34))
- **wechat:** 修复 Textarea focus 状态错乱的问题 ([f2c1dbf](https://github.com/remaxjs/remax/commit/f2c1dbf)), closes [#241](https://github.com/remaxjs/remax/issues/241)
- 修复内联样式 vendor prefix 解析错误的问题 ([988722b](https://github.com/remaxjs/remax/commit/988722b)), closes [#259](https://github.com/remaxjs/remax/issues/259)
- 修正 windows 上 css 图片路径 ([12a3669](https://github.com/remaxjs/remax/commit/12a3669)), closes [#235](https://github.com/remaxjs/remax/issues/235)

### Features

- 支持自定义 babel 配置 ([8afee36](https://github.com/remaxjs/remax/commit/8afee36))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://github.com/remaxjs/remax/issues/262)) ([59a47f2](https://github.com/remaxjs/remax/commit/59a47f2))

## [1.1.3](https://github.com/remaxjs/remax/compare/v1.1.2...v1.1.3) (2019-09-30)

### Bug Fixes

- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([5c28c5c](https://github.com/remaxjs/remax/commit/5c28c5c)), closes [#263](https://github.com/remaxjs/remax/issues/263)
- 修复内联样式 vendor prefix 解析错误的问题 ([1e7997d](https://github.com/remaxjs/remax/commit/1e7997d)), closes [#259](https://github.com/remaxjs/remax/issues/259)

## [1.1.2](https://github.com/remaxjs/remax/compare/v1.1.1...v1.1.2) (2019-09-27)

### Bug Fixes

- 修复在 App 上使用 Context 导致页面回调出错的问题 ([56fcc2f](https://github.com/remaxjs/remax/commit/56fcc2f)), closes [#256](https://github.com/remaxjs/remax/issues/256)

### Performance Improvements

- optimize using promise/key ([#258](https://github.com/remaxjs/remax/issues/258)) ([25c60ad](https://github.com/remaxjs/remax/commit/25c60ad))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修复跨平台开发时，type 定义冲突的问题 ([#245](https://github.com/remaxjs/remax/issues/245)) ([0594a90](https://github.com/remaxjs/remax/commit/0594a90)), closes [#227](https://github.com/remaxjs/remax/issues/227)
- **wechat:** 完善 Input, Pick 组件类型 ([c1e5614](https://github.com/remaxjs/remax/commit/c1e5614))
- 修正环境变量替换导致的语法错误 ([5a5c020](https://github.com/remaxjs/remax/commit/5a5c020))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修复跨平台开发时，type 定义冲突的问题 ([#245](https://github.com/remaxjs/remax/issues/245)) ([0594a90](https://github.com/remaxjs/remax/commit/0594a90)), closes [#227](https://github.com/remaxjs/remax/issues/227)
- **wechat:** 完善 Input, Pick 组件类型 ([c1e5614](https://github.com/remaxjs/remax/commit/c1e5614))
- 修正环境变量替换导致的语法错误 ([5a5c020](https://github.com/remaxjs/remax/commit/5a5c020))

# [1.1.0](https://github.com/remaxjs/remax/compare/v1.0.18...v1.1.0) (2019-09-22)

### Bug Fixes

- 修复 scope 包的引用错误 ([#211](https://github.com/remaxjs/remax/issues/211)) ([f2e8cb7](https://github.com/remaxjs/remax/commit/f2e8cb7))
- 修正微信 Image mode 属性 type 定义 ([#240](https://github.com/remaxjs/remax/issues/240)) ([c1b5687](https://github.com/remaxjs/remax/commit/c1b5687))
- **wechat:** 添加微信遗漏的云开发 API ([#247](https://github.com/remaxjs/remax/issues/247)) ([4298813](https://github.com/remaxjs/remax/commit/4298813)), closes [#246](https://github.com/remaxjs/remax/issues/246)

### Features

- 新增 postcss 配置项 ([#233](https://github.com/remaxjs/remax/issues/233)) ([646a03d](https://github.com/remaxjs/remax/commit/646a03d))

# [1.1.0-alpha.5](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://github.com/remaxjs/remax/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://github.com/remaxjs/remax/commit/f586ea7))
- 删除头条里没必要的 api ([f5af7aa](https://github.com/remaxjs/remax/commit/f5af7aa))
- 完善头条组件定义 ([aaf3a27](https://github.com/remaxjs/remax/commit/aaf3a27))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://github.com/remaxjs/remax/commit/71bcb3b))

### Features

- 新增 unstable_batchedUpdates ([5b485b4](https://github.com/remaxjs/remax/commit/5b485b4))

### Performance Improvements

- 精简头条的 template ([25872a1](https://github.com/remaxjs/remax/commit/25872a1))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

## [1.0.18](https://github.com/remaxjs/remax/compare/v1.0.17...v1.0.18) (2019-09-18)

### Bug Fixes

- 修复模版生成错误 ([89e7024](https://github.com/remaxjs/remax/commit/89e7024)), closes [#238](https://github.com/remaxjs/remax/issues/238)

## [1.0.17](https://github.com/remaxjs/remax/compare/v1.0.16...v1.0.17) (2019-09-18)

### Bug Fixes

- remove regenerator-runtime ([cd33ad9](https://github.com/remaxjs/remax/commit/cd33ad9))
- 修复 scope 包的引用错误 ([#211](https://github.com/remaxjs/remax/issues/211)) ([fd7d542](https://github.com/remaxjs/remax/commit/fd7d542))
- 修复 css 中使用网络图片报错的问题 ([#237](https://github.com/remaxjs/remax/issues/237)) ([d02c1db](https://github.com/remaxjs/remax/commit/d02c1db))
- 修复无法使用 catch 事件和 dataset 的问题 ([44485b4](https://github.com/remaxjs/remax/commit/44485b4)), closes [#219](https://github.com/remaxjs/remax/issues/219) [#231](https://github.com/remaxjs/remax/issues/231)

### Features

- 使用新的 this.emitFile api 生成文件 ([941f522](https://github.com/remaxjs/remax/commit/941f522))

# [1.1.0-alpha.5](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

**Note:** Version bump only for package root

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

**Note:** Version bump only for package root

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://github.com/remaxjs/remax/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://github.com/remaxjs/remax/commit/f586ea7))
- 删除头条里没必要的 api ([f5af7aa](https://github.com/remaxjs/remax/commit/f5af7aa))
- 完善头条组件定义 ([aaf3a27](https://github.com/remaxjs/remax/commit/aaf3a27))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://github.com/remaxjs/remax/commit/71bcb3b))
- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://github.com/remaxjs/remax/commit/f98b0ca))
- 修正支付宝 api 类型定义 ([844624a](https://github.com/remaxjs/remax/commit/844624a))

### Features

- 新增 unstable_batchedUpdates ([5b485b4](https://github.com/remaxjs/remax/commit/5b485b4))

### Performance Improvements

- 精简头条的 template ([25872a1](https://github.com/remaxjs/remax/commit/25872a1))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))
- 修复 jsx 后缀报错的问题 ([88d0668](https://github.com/remaxjs/remax/commit/88d0668))

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

## [1.0.16](https://github.com/remaxjs/remax/compare/v1.0.15...v1.0.16) (2019-09-16)

### Bug Fixes

- 修复 onReady 回调 ([f6e276d](https://github.com/remaxjs/remax/commit/f6e276d)), closes [#203](https://github.com/remaxjs/remax/issues/203)
- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://github.com/remaxjs/remax/commit/f98b0ca))
- **wechat:** 更正 Image 和 Button 的 type 定义 ([7ba51d3](https://github.com/remaxjs/remax/commit/7ba51d3))
- 修复编译后图片路径不对的问题 ([#225](https://github.com/remaxjs/remax/issues/225)) ([b05acc6](https://github.com/remaxjs/remax/commit/b05acc6)), closes [#224](https://github.com/remaxjs/remax/issues/224)
- 修复较为动态地使用 Remax 组件时可能不会渲染的问题 ([bfc3201](https://github.com/remaxjs/remax/commit/bfc3201))
- 修正支付宝 api 类型定义 ([844624a](https://github.com/remaxjs/remax/commit/844624a))

## [1.0.15](https://github.com/remaxjs/remax/compare/v1.0.14...v1.0.15) (2019-09-04)

### Bug Fixes

- 修复 npm 中带有非 js 后缀文件时支付宝小程序无法上传的问题 ([e53e0b9](https://github.com/remaxjs/remax/commit/e53e0b9))
- 支付宝 css 背景图片支持相对路径写法 ([#198](https://github.com/remaxjs/remax/issues/198)) ([8f01e64](https://github.com/remaxjs/remax/commit/8f01e64))

## [1.0.14](https://github.com/remaxjs/remax/compare/v1.0.13...v1.0.14) (2019-09-03)

### Bug Fixes

- 修复支付宝 Button 组件缺少的 style 属性 ([9e52a2d](https://github.com/remaxjs/remax/commit/9e52a2d))
- 修复支付宝组件无法接受动态传递 props 的问题 ([9d26dd2](https://github.com/remaxjs/remax/commit/9d26dd2))
- 修正微信组件及 API 类型定义 ([4630ff4](https://github.com/remaxjs/remax/commit/4630ff4))

## [1.0.13](https://github.com/remaxjs/remax/compare/v1.0.12...v1.0.13) (2019-09-02)

### Bug Fixes

- 修复生命周期 hooks 里的闭包变量不更新的问题 ([3b5e039](https://github.com/remaxjs/remax/commit/3b5e039))

## [1.0.12](https://github.com/remaxjs/remax/compare/v1.0.11...v1.0.12) (2019-09-02)

### Bug Fixes

- 修复 jsx 后缀报错的问题 ([88d0668](https://github.com/remaxjs/remax/commit/88d0668))
- 修正带有 @ 的文件夹无法在支付宝里上传的问题 ([b998304](https://github.com/remaxjs/remax/commit/b998304))

## [1.0.11](https://github.com/remaxjs/remax/compare/v1.0.10...v1.0.11) (2019-08-31)

### Bug Fixes

- rollup watch [#148](https://github.com/remaxjs/remax/issues/148) ([f2f15ba](https://github.com/remaxjs/remax/commit/f2f15ba))
- 修复 app.config.js 没有被 watch 的问题 ([b88cfc8](https://github.com/remaxjs/remax/commit/b88cfc8))
- 修复 watch 状态下删除 dist 目录导致小程序本身构建进程奔溃的问题 ([921846d](https://github.com/remaxjs/remax/commit/921846d))
- 修复微信 api 的类型定义 ([49e8d34](https://github.com/remaxjs/remax/commit/49e8d34))
- 修复支付宝 css 无法引用本地图片的问题 ([#191](https://github.com/remaxjs/remax/issues/191)) ([9b6b501](https://github.com/remaxjs/remax/commit/9b6b501)), closes [#186](https://github.com/remaxjs/remax/issues/186)
- 完善微信组件类型定义 ([#161](https://github.com/remaxjs/remax/issues/161)) ([356fcbf](https://github.com/remaxjs/remax/commit/356fcbf))

## [1.0.10](https://github.com/remaxjs/remax/compare/v1.0.9...v1.0.10) (2019-08-30)

### Bug Fixes

- 修复 Windows 下的路径转换错误 ([1045a5b](https://github.com/remaxjs/remax/commit/1045a5b)), closes [#183](https://github.com/remaxjs/remax/issues/183)
- 修复支付宝基础组件类型 ([1b30b49](https://github.com/remaxjs/remax/commit/1b30b49))

## [1.0.9](https://github.com/remaxjs/remax/compare/v1.0.8...v1.0.9) (2019-08-29)

### Bug Fixes

- 修复 async/await 报错 ([e1912a2](https://github.com/remaxjs/remax/commit/e1912a2))

## [1.0.8](https://github.com/remaxjs/remax/compare/v1.0.7...v1.0.8) (2019-08-28)

### Bug Fixes

- 修复 tabBar 配置 iconPath 无效的问题 ([b1efe2f](https://github.com/remaxjs/remax/commit/b1efe2f)), closes [#150](https://github.com/remaxjs/remax/issues/150)
- 修复页面组件不能命名为 Page 的问题 ([9237dac](https://github.com/remaxjs/remax/commit/9237dac)), closes [#158](https://github.com/remaxjs/remax/issues/158)

## [1.0.7](https://github.com/remaxjs/remax/compare/v1.0.6...v1.0.7) (2019-08-28)

### Bug Fixes

- 修正 async/await 报错问题 ([423f30d](https://github.com/remaxjs/remax/commit/423f30d))
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

### Bug Fixes

- 增加 remax-cli 缺失的 acorn-walk 依赖 ([0eec56b](https://github.com/remaxjs/remax/commit/0eec56b))

## [1.0.3](https://github.com/remaxjs/remax/compare/v1.0.2...v1.0.3) (2019-08-24)

### Bug Fixes

- 修复支付宝的 PickerView 组件 ([731b28e](https://github.com/remaxjs/remax/commit/731b28e))
- 支付宝 picker 无法渲染的问题 ([41ddddc](https://github.com/remaxjs/remax/commit/41ddddc))

## [1.0.2](https://github.com/remaxjs/remax/compare/v1.0.1...v1.0.2) (2019-08-23)

### Bug Fixes

- style 为 null/undefined 时报错的问题 ([28f4367](https://github.com/remaxjs/remax/commit/28f4367))
- stylus typo ([60c4ec9](https://github.com/remaxjs/remax/commit/60c4ec9))
- 修复 PX 也会被转换成 rpx 的问题 ([e34c366](https://github.com/remaxjs/remax/commit/e34c366))
- 生命周期 hooks 不能在组件中使用的问题 ([4fa5695](https://github.com/remaxjs/remax/commit/4fa5695))

## 1.0.1

第一个正式版本。

## 1.0.0

不存在。
