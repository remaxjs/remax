# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-alpha.13](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2020-04-26)

**Note:** Version bump only for package root

# [2.0.0-alpha.12](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2020-04-26)

**Note:** Version bump only for package root

# [2.0.0-alpha.11](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2020-04-26)

**Note:** Version bump only for package root

# [2.0.0-alpha.10](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2020-04-26)

### Bug Fixes

- 修复 postcss.config.js 的加载 ([aae5461](https://github.com/remaxjs/remax/commit/aae5461296c9640719835743818a7aa33dc73020))

# [2.0.0-alpha.9](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2020-04-26)

**Note:** Version bump only for package root

# [2.0.0-alpha.8](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2020-04-26)

### Bug Fixes

- **wechat:** 修复 connectSocket 没有返回 SocketTask 的问题 ([b4e6cfd](https://github.com/remaxjs/remax/commit/b4e6cfd5e388c2ece009d005c945b18a6aaacee9))

# [2.0.0-alpha.7](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2020-04-23)

### Bug Fixes

- 修复 remax 命令可能执行出错的问题 ([83ba129](https://github.com/remaxjs/remax/commit/83ba129c68c7457db078e22fd3921d5b4c775b25))
- 修复 web 下 App 不是第一个 entry 的问题 ([31cccdc](https://github.com/remaxjs/remax/commit/31cccdc4c9c5dbc93c506feefbc039b66c1dfbff))
- **wechat:** 更新 LivePlayer、LivePusher 属性 ([#839](https://github.com/remaxjs/remax/issues/839)) ([14c4c85](https://github.com/remaxjs/remax/commit/14c4c85ef989e87ba08c34b06c68eead5af675ad))

### Features

- 返回编译事件，方便跟其他工具集成 ([901bc6e](https://github.com/remaxjs/remax/commit/901bc6ef046194c80b102a1165b0349362c7b59b))

# [2.0.0-alpha.6](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2020-04-21)

### Bug Fixes

- **cli:** 修复 app.config.ts 和 [page].config.ts 没有触发重新编译的问题 ([232ff43](https://github.com/remaxjs/remax/commit/232ff43eb8c5ead784e186297134f16682f66f6e)), closes [#831](https://github.com/remaxjs/remax/issues/831)
- **web:** 修复 web 端 title 配置不生效的问题 ([ce21382](https://github.com/remaxjs/remax/commit/ce213826efbcfa85583c05565192f74fd19458b0))
- **web:** web 端 button 字体大小与小程序统一 ([3b88837](https://github.com/remaxjs/remax/commit/3b888370dda752e886baead8e123a936b0a4b59f))
- 修复使用 scss 出错的问题 ([6f205f0](https://github.com/remaxjs/remax/commit/6f205f082a64995c96f8b412c9537ac063ffa3a9)), closes [#827](https://github.com/remaxjs/remax/issues/827)
- **wechat:** 使用微信官方的 api 类型 ([4f13453](https://github.com/remaxjs/remax/commit/4f13453765172023212125bff624090539090f07))

### Performance Improvements

- 简化 web watch 模式输出的信息 ([#835](https://github.com/remaxjs/remax/issues/835)) ([c9c24d7](https://github.com/remaxjs/remax/commit/c9c24d725bc37ee9fcbde77ea9d9acdc8611a288))

# [2.0.0-alpha.5](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2020-04-20)

### Bug Fixes

- 修复 web 平台下没有配置 tabbar 出错的问题 ([de442c0](https://github.com/remaxjs/remax/commit/de442c08fe6ac3d266cc7ca087f6b0c9ce5a99f7))
- 修复 windows 下无法启动 web 应用的问题 ([#816](https://github.com/remaxjs/remax/issues/816)) ([f6a9a05](https://github.com/remaxjs/remax/commit/f6a9a05e08433601f57259c0b775b702e59a7a37)), closes [#806](https://github.com/remaxjs/remax/issues/806)
- 修复引入 JSON 文件报错的问题 ([ec4c29f](https://github.com/remaxjs/remax/commit/ec4c29fc39568047ddbd0d98aba3d6c4e0a2272c))

### Features

- **web:** web 添加浏览器兼容支持 ([1baf5f2](https://github.com/remaxjs/remax/commit/1baf5f28af07978445b5bc47ced8e830e49eb67f)), closes [#808](https://github.com/remaxjs/remax/issues/808)
- 自动识别 CSS Modules ([#807](https://github.com/remaxjs/remax/issues/807)) ([b81303c](https://github.com/remaxjs/remax/commit/b81303c6ad8b6890ccf0c09ba9aaff6da2e14123)), closes [#800](https://github.com/remaxjs/remax/issues/800)
- web 平台 watch 模式支持 hot reload ([#811](https://github.com/remaxjs/remax/issues/811)) ([34507d3](https://github.com/remaxjs/remax/commit/34507d3768a1e3ef2110ced9e604c93c8446d853))

# [2.0.0-alpha.4](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.2...v2.0.0-alpha.4) (2020-04-18)

### Bug Fixes

- **web:** 修复文件不存在的问题 ([fcee347](https://github.com/remaxjs/remax/commit/fcee3476cb09b7e6a750bbb04e5bb264a8bb1090))
- **wechat:** 修复 remax/one 的 Input[maxlength] 设置不生效的问题 ([da107b4](https://github.com/remaxjs/remax/commit/da107b467b879368ba1aa509f2dea492c40cdd89))

# [1.21.0](https://github.com/remaxjs/remax/compare/v1.20.0...v1.21.0) (2020-04-14)

### Bug Fixes

- **alipay:** 修复钉钉小程序下没有 Function.prototype.apply 导致的白屏 ([#795](https://github.com/remaxjs/remax/issues/795)) ([17bde7d](https://github.com/remaxjs/remax/commit/17bde7d880d21dd27532909353cdd70c041efe48))

### Features

- **wechat:** 增加 API chooseMedia ([9a9037d](https://github.com/remaxjs/remax/commit/9a9037d29ad2b6228ba48df9aa46ef9c09777b1b))

# [1.20.0](https://github.com/remaxjs/remax/compare/v1.19.8...v1.20.0) (2020-04-13)

### Bug Fixes

- 修复同一页面不能重复渲染的问题 ([#791](https://github.com/remaxjs/remax/issues/791)) ([14dbc28](https://github.com/remaxjs/remax/commit/14dbc2801e2a605d28c25a340ad0951cd403767c))

### Features

- 返回编译事件，方便跟其他工具集成 ([#784](https://github.com/remaxjs/remax/issues/784)) ([f8bed58](https://github.com/remaxjs/remax/commit/f8bed580a01493c89dd5ab4051f7184cf5fa6e70))

## [1.19.8](https://github.com/remaxjs/remax/compare/v1.19.7...v1.19.8) (2020-04-09)

### Bug Fixes

- **alipay:** 修复不同的 key 渲染了相同元素的问题 ([#783](https://github.com/remaxjs/remax/issues/783)) ([3cae6c2](https://github.com/remaxjs/remax/commit/3cae6c266038aacbe778a411be04938c57de2eb1))

# [1.21.0](https://github.com/remaxjs/remax/compare/v1.20.0...v1.21.0) (2020-04-14)

### Bug Fixes

- **alipay:** 修复钉钉小程序下没有 Function.prototype.apply 导致的白屏 ([#795](https://github.com/remaxjs/remax/issues/795)) ([17bde7d](https://github.com/remaxjs/remax/commit/17bde7d880d21dd27532909353cdd70c041efe48))

### Features

- **wechat:** 增加 API chooseMedia ([9a9037d](https://github.com/remaxjs/remax/commit/9a9037d29ad2b6228ba48df9aa46ef9c09777b1b))

# [1.20.0](https://github.com/remaxjs/remax/compare/v1.19.8...v1.20.0) (2020-04-13)

### Bug Fixes

- 修复同一页面不能重复渲染的问题 ([#791](https://github.com/remaxjs/remax/issues/791)) ([14dbc28](https://github.com/remaxjs/remax/commit/14dbc2801e2a605d28c25a340ad0951cd403767c))

### Features

- 返回编译事件，方便跟其他工具集成 ([#784](https://github.com/remaxjs/remax/issues/784)) ([f8bed58](https://github.com/remaxjs/remax/commit/f8bed580a01493c89dd5ab4051f7184cf5fa6e70))

## [1.19.8](https://github.com/remaxjs/remax/compare/v1.19.7...v1.19.8) (2020-04-09)

### Bug Fixes

- # **alipay:** 修复不同的 key 渲染了相同元素的问题 ([#783](https://github.com/remaxjs/remax/issues/783)) ([3cae6c2](https://github.com/remaxjs/remax/commit/3cae6c266038aacbe778a411be04938c57de2eb1))

# [2.0.0-alpha.2](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2020-04-16)

### Bug Fixes

- **cli:** 修复 adapter 引入错误的问题 ([906c93d](https://github.com/remaxjs/remax/commit/906c93da8ac02541d9a56973b1f375a4926b78e3))

# [2.0.0-alpha.1](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2020-04-16)

## 重大特性

### 使用 Webpack 作为切换工具

为了支持 H5 同构，Remax Cli 从 rollup 切换到 webpack。

### 支持 H5 应用

Remax One 现在支持 web 平台，可以开发 H5 应用了。

```bash
$ remax build -t web
```

### 一个依赖

现在只需要安装 `remax` 一个依赖即可

```bash
$ yarn add remax@next
```

## 其他改动

- 去除 native 目录支持（可以配置 webpack copy 插件达到同样的效果）
- 去掉以纯 class 定义 App 的方式
- remax.config.js 配置改动
  - 去掉 rollupOptions (改为 configWebpack，用于修改 webpack 配置)
  - 去掉 postcss，cssModules，alias 项（皆可通过 configWebpack 配置）
  - 新增 minimize 选项用于文件压缩，去掉 compressTemplate
- css 中图片引用方式，参照 [css-loader](https://github.com/webpack-contrib/css-loader#url) 的规则
- `remax/macro` 引入 `requirePlugin` `requirePluginComponent` 用于使用小程序插件
- `remax/macro` 引入 `useAppEvent` `usePageEvent` 用于生命周期 hook。废弃 `useShow` `useHide` 等冗余的生命周期 hook。
- `remax/one` 组件 `Image` 去除 `lazyLoad` 属性
- `remax/one` 支持的全平台生命周期（在每个平台都可用，并且尽量保证了行为一致）:
  - onShow
  - onHide
  - onPullDownRefresh，在 `remax/one` 中，onPullDownRefresh 回调支持返回 Promise 以控制关闭下拉刷新行为。
  - onReachBottom
  - onPageScroll
- `remax/one` 中的事件将 `originalEvent` 字段改为 `nativeEvent` ，与 React 事件对齐
- `remax` 中 `unstable_useNativeEffect` 重命名为 -> `useNativeEffect`
- `remax` 中 `Platform` 废除，平台判断用 `process.env.REMAX_PLATFORM`

## 全新的网站

更多完整的文档和指南请访问 https://remax-git-next.remaxjs.now.sh/

目前 Remax 2.0 还处于预发布状态，欢迎安装 `remax@next` 尝鲜，但请勿用于生产环境

> > > > > > > next

## [1.19.7](https://github.com/remaxjs/remax/compare/v1.19.6...v1.19.7) (2020-04-08)

### Bug Fixes

- 修复微信 ScrollView scrollLeft 不生效的问题 ([8e02c94](https://github.com/remaxjs/remax/commit/8e02c94d260b9f0ab115761bbef33938abbb215c))

## [1.19.6](https://github.com/remaxjs/remax/compare/v1.19.5...v1.19.6) (2020-04-07)

### Bug Fixes

- **alipay:** 修复 Label 缺少 className 属性类型的问题 ([#774](https://github.com/remaxjs/remax/issues/774)) ([dc46969](https://github.com/remaxjs/remax/commit/dc469691b0bcc32f3f1253d1ed805959534c7d99))

## [1.19.5](https://github.com/remaxjs/remax/compare/v1.19.4...v1.19.5) (2020-04-03)

### Bug Fixes

- 修复属性 namespace 构建错误的问题 ([838043b](https://github.com/remaxjs/remax/commit/838043bdd5f5ac16d9a0e6d38b435f72fb7ea65d))

## [1.19.4](https://github.com/remaxjs/remax/compare/v1.19.3...v1.19.4) (2020-04-03)

### Bug Fixes

- **alipay:** 修复支付宝 IDE 的编译监听 ([b439ee0](https://github.com/remaxjs/remax/commit/b439ee0d6ee0553019f393e871276265b89cc5fb))

## [1.19.3](https://github.com/remaxjs/remax/compare/v1.19.2...v1.19.3) (2020-04-02)

### Bug Fixes

- 修复小程序自定义组件引用多个模板时编译错误的问题 ([#761](https://github.com/remaxjs/remax/issues/761)) ([7757678](https://github.com/remaxjs/remax/commit/7757678a33e827895f3df6d2766bdef9856fb7df))

## [1.19.2](https://github.com/remaxjs/remax/compare/v1.19.1...v1.19.2) (2020-04-01)

### Bug Fixes

- 修复小程序自定义组件的模板引用 ([#759](https://github.com/remaxjs/remax/issues/759)) ([2e82fc1](https://github.com/remaxjs/remax/commit/2e82fc10ded34c3f70d07b8ce647135d4a6ac359))

## [1.19.1](https://github.com/remaxjs/remax/compare/v1.19.0...v1.19.1) (2020-03-31)

### Bug Fixes

- **alipay:** 修复不设置 onShareAppMessage 分享无效的问题 ([#754](https://github.com/remaxjs/remax/issues/754)) ([5c7febc](https://github.com/remaxjs/remax/commit/5c7febcabae19d98019eaa64d46db1b3ff6103f8))

# [1.19.0](https://github.com/remaxjs/remax/compare/v1.18.5...v1.19.0) (2020-03-30)

### Features

- 新增跨平台组件 remax/one ([ff904ac](https://github.com/remaxjs/remax/commit/ff904ac7defc34bd7bd4f71d616d5b21b6eb1aa6)), closes [#373](https://github.com/remaxjs/remax/issues/373)

## [1.18.5](https://github.com/remaxjs/remax/compare/v1.18.4...v1.18.5) (2020-03-27)

### Bug Fixes

- 组件 Image 添加 touch 事件别名 ([9474e14](https://github.com/remaxjs/remax/commit/9474e14bd914edbfa911815005be4d45727b471d)), closes [#743](https://github.com/remaxjs/remax/issues/743)
- **alipay:** 修复 Input 和 MovableView 缺失的属性 ([158541f](https://github.com/remaxjs/remax/commit/158541f81058a59df682975a5547de8f8b95b466))

## [1.18.4](https://github.com/remaxjs/remax/compare/v1.18.3...v1.18.4) (2020-03-25)

### Bug Fixes

- **wechat:** 微信 ScrollView 添加自定义刷新相关属性 ([#742](https://github.com/remaxjs/remax/issues/742)) ([9ef2afd](https://github.com/remaxjs/remax/commit/9ef2afddbadb7e21f4c342e2633049eb016ee0a5))

## [1.18.3](https://github.com/remaxjs/remax/compare/v1.18.2...v1.18.3) (2020-03-25)

### Bug Fixes

- **alipay:** 修复支付宝 IDE 里预览会卡住的问题 ([bc8a50b](https://github.com/remaxjs/remax/commit/bc8a50b2557b711672a1c551caddf5381ec7bb22))

## [1.18.2](https://github.com/remaxjs/remax/compare/v1.18.1...v1.18.2) (2020-03-25)

### Bug Fixes

- **alipay:** 修复 WebView 缺少的 id 定义 ([fed4d13](https://github.com/remaxjs/remax/commit/fed4d13faa8d8608e4725618417cc72a34eaae41))
- **alipay:** 修复指定 WebView id 不生效的问题 ([549aba2](https://github.com/remaxjs/remax/commit/549aba2cc1a11888e7ee9e2d3447704be496a6e6))

## [1.18.1](https://github.com/remaxjs/remax/compare/v1.18.0...v1.18.1) (2020-03-24)

### Bug Fixes

- **alipay:** 修复支付宝自定义组件中 node_modules 模块 resolve 不完整的问题 ([7ef374d](https://github.com/remaxjs/remax/commit/7ef374d))
- 修复 useAppShareAppMessage 不生效的问题 ([#739](https://github.com/remaxjs/remax/issues/739)) ([6e3c562](https://github.com/remaxjs/remax/commit/6e3c562))

# [1.18.0](https://github.com/remaxjs/remax/compare/v1.17.2...v1.18.0) (2020-03-23)

### Bug Fixes

- **wechat:** 微信 ScrollView 增加 touch 事件别名 ([b1f386f](https://github.com/remaxjs/remax/commit/b1f386f))

### Features

- 引入 usePageInstance，用于获取页面实例 ([7a5b7a5](https://github.com/remaxjs/remax/commit/7a5b7a5))

## [1.17.2](https://github.com/remaxjs/remax/compare/v1.17.1...v1.17.2) (2020-03-19)

### Bug Fixes

- 修复自定义组件中引用 node_modules 模块的问题 ([#726](https://github.com/remaxjs/remax/issues/726)) ([22f6064](https://github.com/remaxjs/remax/commit/22f6064))

## [1.17.1](https://github.com/remaxjs/remax/compare/v1.17.0...v1.17.1) (2020-03-19)

### Bug Fixes

- **alipay:** 补充支付宝 onBack 事件 hook 参数传递 ([c0600b7](https://github.com/remaxjs/remax/commit/c0600b7))

# [1.17.0](https://github.com/remaxjs/remax/compare/v1.16.1...v1.17.0) (2020-03-19)

### Features

- 新增 usePageEvent，useAppEvent 统一生命周期 hook ([#722](https://github.com/remaxjs/remax/issues/722)) ([0e8d7cd](https://github.com/remaxjs/remax/commit/0e8d7cd)), closes [#179](https://github.com/remaxjs/remax/issues/179)
- **remax:** 字节跳动小程序新增 api canIUse、navigateToVideoView ([#721](https://github.com/remaxjs/remax/issues/721)) ([9d0650f](https://github.com/remaxjs/remax/commit/9d0650f))
- **wechat:** 微信增加 hideHomeButton API ([d39d35e](https://github.com/remaxjs/remax/commit/d39d35e))

## [1.16.1](https://github.com/remaxjs/remax/compare/v1.16.0...v1.16.1) (2020-03-18)

### Bug Fixes

- 修复样式文件引入顺序错误的问题 ([b43e6bd](https://github.com/remaxjs/remax/commit/b43e6bd))
- 修复自定义组件引用在 lerna 项目结构下错误的问题 ([37b6ba4](https://github.com/remaxjs/remax/commit/37b6ba4))
- 修复自定义组件中 js 文件 resolve 问题 ([ef2dc43](https://github.com/remaxjs/remax/commit/ef2dc43))

# [1.16.0](https://github.com/remaxjs/remax/compare/v1.15.3...v1.16.0) (2020-03-17)

### Features

- 引入 turboPages ([#595](https://github.com/remaxjs/remax/issues/595)) ([88d464e](https://github.com/remaxjs/remax/commit/88d464e))

## [1.15.3](https://github.com/remaxjs/remax/compare/v1.15.2...v1.15.3) (2020-03-17)

### Bug Fixes

- 修复使用 typescript 时 common chunk 可能存在错误引用的问题 ([d2874aa](https://github.com/remaxjs/remax/commit/d2874aa)), closes [#708](https://github.com/remaxjs/remax/issues/708)

## [1.15.2](https://github.com/remaxjs/remax/compare/v1.15.1...v1.15.2) (2020-03-15)

### Bug Fixes

- **alipay:** 修复 useOptionMenuClick 回调没有参数的问题 ([58e7ecb](https://github.com/remaxjs/remax/commit/58e7ecb))

## [1.15.1](https://github.com/remaxjs/remax/compare/v1.15.0...v1.15.1) (2020-03-13)

### Bug Fixes

- **wechat:** 修正微信 CheckboxGroup type 定义 ([ab92f2c](https://github.com/remaxjs/remax/commit/ab92f2c))
- 修复 tabBar icon 使用网络图片编译报错的问题 ([baaf172](https://github.com/remaxjs/remax/commit/baaf172)), closes [#697](https://github.com/remaxjs/remax/issues/697)
- 修复使用 typescript 创建 app.tsx 文件可能导致报错的问题 ([#703](https://github.com/remaxjs/remax/issues/703)) ([16f7f6c](https://github.com/remaxjs/remax/commit/16f7f6c)), closes [#702](https://github.com/remaxjs/remax/issues/702)
- 字节跳动 View 组件增加 onClick ([#696](https://github.com/remaxjs/remax/issues/696)) ([e216454](https://github.com/remaxjs/remax/commit/e216454))

# [1.15.0](https://github.com/remaxjs/remax/compare/v1.14.2...v1.15.0) (2020-03-11)

### Bug Fixes

- **wechat:** 修复 Editor 组件无法使用 className 的问题 ([224bc4a](https://github.com/remaxjs/remax/commit/224bc4a))

### Features

- **cli:** 支持 css modules 更多配置 ([f9838dc](https://github.com/remaxjs/remax/commit/f9838dc))

## [1.14.2](https://github.com/remaxjs/remax/compare/v1.14.1...v1.14.2) (2020-03-05)

### Performance Improvements

- **cli:** 优化生产模式编译速度 ([ffaca9a](https://github.com/remaxjs/remax/commit/ffaca9a))

## [1.14.1](https://github.com/remaxjs/remax/compare/v1.14.0...v1.14.1) (2020-02-28)

### Bug Fixes

- 修复条件渲染可能导致的布局错乱 ([3a8478a](https://github.com/remaxjs/remax/commit/3a8478a))

# [1.14.0](https://github.com/remaxjs/remax/compare/v1.13.3...v1.14.0) (2020-02-28)

### Features

- **cli:** remax.config.js 添加 watch 模式桌面提醒配置项 notify ([#665](https://github.com/remaxjs/remax/issues/665)) ([24bf5cb](https://github.com/remaxjs/remax/commit/24bf5cb))

- **remax:** 为 App 添加 hooks ([e2be286](https://github.com/remaxjs/remax/commit/e2be286))

- **remax:** 支持 inline style 属性值不写单位，默认为 rpx ([82ea0af](https://github.com/remaxjs/remax/commit/82ea0af))

### Bug Fixes

- 修复当 app 文件引入图片，导致样式文件丢失的问题 ([37482e3](https://github.com/remaxjs/remax/commit/37482e3))

## [1.13.2](https://github.com/remaxjs/remax/compare/v1.13.1...v1.13.2) (2020-02-26)

### Bug Fixes

- 修复点击自定义组件无法触发父组件 stopPropagation 的问题 ([#652](https://github.com/remaxjs/remax/issues/652)) ([1bff049](https://github.com/remaxjs/remax/commit/1bff049)), closes [#536](https://github.com/remaxjs/remax/issues/536) [#283](https://github.com/remaxjs/remax/issues/283)

### Performance Improvements

- **remax:** 优化运行时性能 ([#659](https://github.com/remaxjs/remax/issues/659)) ([0cf3649](https://github.com/remaxjs/remax/commit/0cf3649))

## [1.13.1](https://github.com/remaxjs/remax/compare/v1.13.0...v1.13.1) (2020-02-21)

### Bug Fixes

- 原生组件支持命名空间属性 ([#651](https://github.com/remaxjs/remax/issues/651)) ([224e238](https://github.com/remaxjs/remax/commit/224e238))

# [1.13.0](https://github.com/remaxjs/remax/compare/v1.12.5...v1.13.0) (2020-02-19)

### Bug Fixes

- 字节跳动修正 PickerView 的 indicatorStyle 属性类型定义 ([#633](https://github.com/remaxjs/remax/issues/633)) ([3e8151e](https://github.com/remaxjs/remax/commit/3e8151e))

### Features

- 支持使用命名空间属性 ([#650](https://github.com/remaxjs/remax/issues/650)) ([4e9686c](https://github.com/remaxjs/remax/commit/4e9686c)), closes [#642](https://github.com/remaxjs/remax/issues/642)

## [1.12.5](https://github.com/remaxjs/remax/compare/v1.12.4...v1.12.5) (2020-01-31)

### Bug Fixes

- **wechat:** 修复遗漏的 Camera 组件导出 ([d5b81ad](https://github.com/remaxjs/remax/commit/d5b81ad))

## [1.12.4](https://github.com/remaxjs/remax/compare/v1.12.3...v1.12.4) (2020-01-30)

### Bug Fixes

- **toutiao:** 修复 pay 接口缺失和部分接口未 promise 化的问题 ([e91a176](https://github.com/remaxjs/remax/commit/e91a176))
- **wechat:** 微信 Video 增加 posterForCrawler 属性 ([c53bdaf](https://github.com/remaxjs/remax/commit/c53bdaf)), closes [#615](https://github.com/remaxjs/remax/issues/615) [#614](https://github.com/remaxjs/remax/issues/614)

## [1.12.3](https://github.com/remaxjs/remax/compare/v1.12.2...v1.12.3) (2020-01-21)

### Bug Fixes

- 修复环境变量注入导致的语法错误 ([e572c5a](https://github.com/remaxjs/remax/commit/e572c5a))
- 修正头条小程序 button 组件 onGetPhoneNumber 事件大小写拼写问题 ([a802511](https://github.com/remaxjs/remax/commit/a802511))
- **wechat:** 修复 Label 组件的点击事件不触发的问题 ([95ae188](https://github.com/remaxjs/remax/commit/95ae188))

## [1.12.2](https://github.com/remaxjs/remax/compare/v1.12.1...v1.12.2) (2020-01-19)

### Bug Fixes

- 修复 api 类型丢失的问题 ([ed7a77b](https://github.com/remaxjs/remax/commit/ed7a77b)), closes [#598](https://github.com/remaxjs/remax/issues/598)
- 修复配置 pxToRpx 不生效的问题 ([2c93e21](https://github.com/remaxjs/remax/commit/2c93e21))

## [1.12.1](https://github.com/remaxjs/remax/compare/v1.12.0...v1.12.1) (2020-01-19)

### Bug Fixes

- 修正环境变量注入导致的语法解析错误 ([1fc8350](https://github.com/remaxjs/remax/commit/1fc8350))

# [1.12.0](https://github.com/remaxjs/remax/compare/v1.11.5...v1.12.0) (2020-01-19)

### Bug Fixes

- **wechat:** 修复 Input password 属性的类型 ([a2dc8bf](https://github.com/remaxjs/remax/commit/a2dc8bf))
- 修正非 js 后缀名的 cjs 模块构建错误的问题 ([f402c12](https://github.com/remaxjs/remax/commit/f402c12))

### Features

- 支持通过 .env 文件设置环境变量 ([3b3497f](https://github.com/remaxjs/remax/commit/3b3497f))

## [1.11.5](https://github.com/remaxjs/remax/compare/v1.11.4...v1.11.5) (2020-01-18)

### Bug Fixes

- 修正无法引用 events 包的问题 ([#596](https://github.com/remaxjs/remax/issues/596)) ([b7ec83f](https://github.com/remaxjs/remax/commit/b7ec83f))
- **wechat:** 修复 Button onGetPhoneNumber 属性不生效的问题 ([ed9a481](https://github.com/remaxjs/remax/commit/ed9a481))

## [1.11.4](https://github.com/remaxjs/remax/compare/v1.11.3...v1.11.4) (2020-01-17)

### Bug Fixes

- **alipay:** 修复 Button 组件 scope 属性拼写错误 ([1b9c3b9](https://github.com/remaxjs/remax/commit/1b9c3b9))
- **wechat:** 修复 ScrollView 水平受控问题 ([063d627](https://github.com/remaxjs/remax/commit/063d627))

## [1.11.3](https://github.com/remaxjs/remax/compare/v1.11.2...v1.11.3) (2020-01-16)

### Bug Fixes

- **alipay:** 修复 Text 点击事件不触发的问题 ([4db5d25](https://github.com/remaxjs/remax/commit/4db5d25))

## [1.11.2](https://github.com/remaxjs/remax/compare/v1.11.1...v1.11.2) (2020-01-15)

### Bug Fixes

- 修复跨平台开发时引入了不相关平台代码的问题 ([4b0cba4](https://github.com/remaxjs/remax/commit/4b0cba4))
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

- 去除无用的文件生成警告 ([31236be](https://github.com/remaxjs/remax/commit/31236be))
- **remax:** 修复在父元素阻止冒泡时，点击子事件有可能不执行的问题 ([#553](https://github.com/remaxjs/remax/issues/553)) ([4d60af3](https://github.com/remaxjs/remax/commit/4d60af3)), closes [#552](https://github.com/remaxjs/remax/issues/552)

### Performance Improvements

- **wechat:** 缩小微信打包 size ([e0e9798](https://github.com/remaxjs/remax/commit/e0e9798))

## [1.10.8](https://github.com/remaxjs/remax/compare/v1.10.7...v1.10.8) (2019-12-29)

### Bug Fixes

- **alipay:** 支付宝添加 getOpenUserInfo API ([d481176](https://github.com/remaxjs/remax/commit/d481176)), closes [#534](https://github.com/remaxjs/remax/issues/534)
- **wechat:** 微信添加 requestSubscribeMessage API ([e0c93bf](https://github.com/remaxjs/remax/commit/e0c93bf))
- **wechat:** 修复微信平台 Swiper 受控 current 后表现异常的情况 ([80f1c12](https://github.com/remaxjs/remax/commit/80f1c12)), closes [#535](https://github.com/remaxjs/remax/issues/535)
- 修复 inline style 带有浮点数报错的问题 ([#530](https://github.com/remaxjs/remax/issues/530)) ([27e07c2](https://github.com/remaxjs/remax/commit/27e07c2))
- 修复 subpackages 下引入 plugin 编译报错 ([7eee12c](https://github.com/remaxjs/remax/commit/7eee12c))
- 修复支付宝自定义组件使用 component2 模式报错的问题 ([109f904](https://github.com/remaxjs/remax/commit/109f904))

## [1.10.7](https://github.com/remaxjs/remax/compare/v1.10.6...v1.10.7) (2019-12-22)

### Bug Fixes

- **wechat:** 修复微信平台 ScrollView 设置 scrollTop 表现异常的问题 ([55c440e](https://github.com/remaxjs/remax/commit/55c440e)), closes [#459](https://github.com/remaxjs/remax/issues/459)

## [1.10.6](https://github.com/remaxjs/remax/compare/v1.10.5...v1.10.6) (2019-12-19)

### Bug Fixes

- 修复当点击区域为阻止冒泡元素的子元素时，阻止冒泡失败的问题 ([d032d8d](https://github.com/remaxjs/remax/commit/d032d8d))
- 修复无法在 inline style 中使用 css3 var 特性的问题 ([e2d0dde](https://github.com/remaxjs/remax/commit/e2d0dde)), closes [#507](https://github.com/remaxjs/remax/issues/507)

## [1.10.5](https://github.com/remaxjs/remax/compare/v1.10.4...v1.10.5) (2019-12-19)

### Bug Fixes

- 修复原生组件编译文件丢失的问题 ([268ec7e](https://github.com/remaxjs/remax/commit/268ec7e))

## [1.10.4](https://github.com/remaxjs/remax/compare/v1.10.3...v1.10.4) (2019-12-18)

### Bug Fixes

- 修复当原生组件带有导出内容时编译报错的问题 ([c0f88c2](https://github.com/remaxjs/remax/commit/c0f88c2))

## [1.10.3](https://github.com/remaxjs/remax/compare/v1.10.2...v1.10.3) (2019-12-17)

### Bug Fixes

- 修复 watch 编译时原生自定义组件出错的问题 ([d171c1d](https://github.com/remaxjs/remax/commit/d171c1d))

## [1.10.2](https://github.com/remaxjs/remax/compare/v1.10.1...v1.10.2) (2019-12-15)

**Note:** Version bump only for package root

## [1.10.1](https://github.com/remaxjs/remax/compare/v1.10.0...v1.10.1) (2019-12-15)

### Bug Fixes

- 去除没有使用 ref 时原生自定义组件抛出无用的警告 ([89ccaa1](https://github.com/remaxjs/remax/commit/89ccaa1)), closes [#478](https://github.com/remaxjs/remax/issues/478)

# [1.10.0](https://github.com/remaxjs/remax/compare/v1.9.0...v1.10.0) (2019-12-13)

### Bug Fixes

- 修复 options.rootDir 读取错误的问题 ([b43a2cf](https://github.com/remaxjs/remax/commit/b43a2cf))
- 修复有嵌套的 node_modules 时，自定义组件构建错误的问题 ([04b00ae](https://github.com/remaxjs/remax/commit/04b00ae))
- 修复未使用 JSX 方式调用自定义组件报错的问题 ([#477](https://github.com/remaxjs/remax/issues/477)) ([1d31284](https://github.com/remaxjs/remax/commit/1d31284)), closes [#326](https://github.com/remaxjs/remax/issues/326)
- 当配置的页面不存在时有提醒信息 ([#483](https://github.com/remaxjs/remax/issues/483)) ([012a01d](https://github.com/remaxjs/remax/commit/012a01d)), closes [#482](https://github.com/remaxjs/remax/issues/482)

### Features

- 支持对 css 中的图片做 base64 处理 ([#460](https://github.com/remaxjs/remax/issues/460)) ([127fb88](https://github.com/remaxjs/remax/commit/127fb88)), closes [#448](https://github.com/remaxjs/remax/issues/448)

# [1.9.0](https://github.com/remaxjs/remax/compare/v1.8.0...v1.9.0) (2019-12-09)

### Bug Fixes

- 修复 async 语法解析错误的问题 ([#461](https://github.com/remaxjs/remax/issues/461)) ([c45ba2b](https://github.com/remaxjs/remax/commit/c45ba2b))
- 修复使用 redux 时 Class Component 的生命周期函数不触发的问题 ([#454](https://github.com/remaxjs/remax/issues/454)) ([8457c50](https://github.com/remaxjs/remax/commit/8457c50))
- 修复使用依赖 regeneratorRuntime lib 报错的问题 ([#457](https://github.com/remaxjs/remax/issues/457)) ([2a652c2](https://github.com/remaxjs/remax/commit/2a652c2)), closes [#451](https://github.com/remaxjs/remax/issues/451)

### Features

- 支持 typescript 3.7 ([#458](https://github.com/remaxjs/remax/issues/458)) ([2723504](https://github.com/remaxjs/remax/commit/2723504)), closes [#442](https://github.com/remaxjs/remax/issues/442)

# [1.8.0](https://github.com/remaxjs/remax/compare/v1.7.2...v1.8.0) (2019-12-05)

### Bug Fixes

- 修复 ts 的配置文件 watch 时无法更新的问题 ([6d1a040](https://github.com/remaxjs/remax/commit/6d1a040))
- 修复 ts 的配置文件没有被 watch 的问题 ([a5b009c](https://github.com/remaxjs/remax/commit/a5b009c))
- 修复 ts 配置文件不支持使用 export default 导出的问题 ([#447](https://github.com/remaxjs/remax/issues/447)) ([2157962](https://github.com/remaxjs/remax/commit/2157962))
- 修复使用 babel.config.js 配置 preset-remax 时项目出错的问题 ([9f41119](https://github.com/remaxjs/remax/commit/9f41119))

### Features

- babel-preset-remax 增加 decorators 和 class-properties 配置项 ([fe4d243](https://github.com/remaxjs/remax/commit/fe4d243))
- remax.config.js 支持 compressTemplate 配置 ([fbaa2b4](https://github.com/remaxjs/remax/commit/fbaa2b4)), closes [#416](https://github.com/remaxjs/remax/issues/416)

## [1.7.2](https://github.com/remaxjs/remax/compare/v1.7.1...v1.7.2) (2019-12-03)

### Bug Fixes

- 修复带 esmodule 标志的模块无法被正确引入的问题 ([ce9cec2](https://github.com/remaxjs/remax/commit/ce9cec2))

## [1.7.1](https://github.com/remaxjs/remax/compare/v1.7.0...v1.7.1) (2019-12-03)

### Bug Fixes

- 修复改变元素顺序后，渲染结果出错的问题 ([57632c9](https://github.com/remaxjs/remax/commit/57632c9))

# [1.7.0](https://github.com/remaxjs/remax/compare/v1.6.0...v1.7.0) (2019-12-02)

### Bug Fixes

- 修复改变元素顺序后，出现元素错乱的问题 ([#439](https://github.com/remaxjs/remax/issues/439)) ([0563194](https://github.com/remaxjs/remax/commit/0563194)), closes [#438](https://github.com/remaxjs/remax/issues/438)
- **cli:** 修复多个 CSS 文件引用同一图片时报错的问题 ([#408](https://github.com/remaxjs/remax/issues/408)) ([b4dbbef](https://github.com/remaxjs/remax/commit/b4dbbef)), closes [#407](https://github.com/remaxjs/remax/issues/407)

### Features

- 支持直接使用 react-redux/mobx-react ([#425](https://github.com/remaxjs/remax/issues/425)) ([8b3245a](https://github.com/remaxjs/remax/commit/8b3245a)), closes [#405](https://github.com/remaxjs/remax/issues/405)
- **babel-preset-remax:** 支持配置 TypeScript preset 参数 ([#420](https://github.com/remaxjs/remax/issues/420)) ([23939e1](https://github.com/remaxjs/remax/commit/23939e1)), closes [#417](https://github.com/remaxjs/remax/issues/417)
- 支持使用 TypeScript 写应用和页面配置文件 ([#400](https://github.com/remaxjs/remax/issues/400)) ([56a96e5](https://github.com/remaxjs/remax/commit/56a96e5)), closes [#280](https://github.com/remaxjs/remax/issues/280)

# [1.6.0](https://github.com/remaxjs/remax/compare/v1.6.0-beta.3...v1.6.0) (2019-11-29)

### Bug Fixes

- 修复不能正确引用带有 esModule 标识的 cjs 模块的问题 ([cf4a348](https://github.com/remaxjs/remax/commit/cf4a348))

# [1.6.0-beta.3](https://github.com/remaxjs/remax/compare/v1.6.0-beta.2...v1.6.0-beta.3) (2019-11-28)

**Note:** Version bump only for package root

# [1.6.0-beta.2](https://github.com/remaxjs/remax/compare/v1.6.0-beta.1...v1.6.0-beta.2) (2019-11-27)

### Bug Fixes

- 修复由于编译优化导致引入同一个原生组件的渲染错误 ([9952853](https://github.com/remaxjs/remax/commit/9952853))

# [1.6.0-beta.1](https://github.com/remaxjs/remax/compare/v1.6.0-beta.0...v1.6.0-beta.1) (2019-11-25)

### Bug Fixes

- 修复 v1.6.0-beta.0 wechat 平台不支持的错误 ([e16d4df](https://github.com/remaxjs/remax/commit/e16d4df))

# [1.6.0-beta.0](https://github.com/remaxjs/remax/compare/v1.5.2...v1.6.0-beta.0) (2019-11-22)

### Bug Fixes

- 修复 App 是函数组件时生命周期调用错误的问题 ([3a0a42d](https://github.com/remaxjs/remax/commit/3a0a42d))
- 修复 createHostComponent 参数类型 ([1d47523](https://github.com/remaxjs/remax/commit/1d47523))
- 修复 npm 包中 createHostComponent 不生效的问题 ([#393](https://github.com/remaxjs/remax/issues/393)) ([b6292a1](https://github.com/remaxjs/remax/commit/b6292a1))
- 修复 ts 引入的子组件中包含原生组件的渲染错误 ([dca8741](https://github.com/remaxjs/remax/commit/dca8741))
- 修正 App 组件被 HOC 包裹后无法触发生命周期回调的问题 ([#398](https://github.com/remaxjs/remax/issues/398)) ([98be559](https://github.com/remaxjs/remax/commit/98be559))
- 让开发者可以从 remax 导入组件的类型 ([#394](https://github.com/remaxjs/remax/issues/394)) ([2e12c04](https://github.com/remaxjs/remax/commit/2e12c04)), closes [#369](https://github.com/remaxjs/remax/issues/369)

### Features

- **alipay:** 支持获取小程序组件 ref ([a7fba88](https://github.com/remaxjs/remax/commit/a7fba88)), closes [#384](https://github.com/remaxjs/remax/issues/384)
- createHostComponent 支持定义 prop 别名 ([#392](https://github.com/remaxjs/remax/issues/392)) ([cccf477](https://github.com/remaxjs/remax/commit/cccf477))
- 支持开发者注册 host 组件 ([4ba9c45](https://github.com/remaxjs/remax/commit/4ba9c45)), closes [#293](https://github.com/remaxjs/remax/issues/293)
- **alipay:** 新增 Video 组件及相关 API ([#401](https://github.com/remaxjs/remax/issues/401)) ([35e039d](https://github.com/remaxjs/remax/commit/35e039d))

### Performance Improvements

- 优化编译速度 ([#388](https://github.com/remaxjs/remax/issues/388)) ([131519d](https://github.com/remaxjs/remax/commit/131519d))

## [1.5.2](https://github.com/remaxjs/remax/compare/v1.5.1...v1.5.2) (2019-11-20)

### Bug Fixes

- 修改引用多个相同小程序组件时构建错误的问题 ([#386](https://github.com/remaxjs/remax/issues/386)) ([da01293](https://github.com/remaxjs/remax/commit/da01293))

## [1.5.1](https://github.com/remaxjs/remax/compare/v1.5.0...v1.5.1) (2019-11-20)

### Bug Fixes

- 修复使用 TypeScript 时无法引用小程序组件的问题 ([#383](https://github.com/remaxjs/remax/issues/383)) ([db7a2d8](https://github.com/remaxjs/remax/commit/db7a2d8))

# [1.5.0](https://github.com/remaxjs/remax/compare/v1.4.7...v1.5.0) (2019-11-19)

### Bug Fixes

- **wechat:** 修复 spread 方式传递 Button 组件参数时 size 无效的问题 ([883d962](https://github.com/remaxjs/remax/commit/883d962)), closes [#375](https://github.com/remaxjs/remax/issues/375)
- 修复自定义组件重复引用的问题 ([#342](https://github.com/remaxjs/remax/issues/342)) ([#360](https://github.com/remaxjs/remax/issues/360)) ([1d0ec2d](https://github.com/remaxjs/remax/commit/1d0ec2d))

### Features

- rollupOptions 支持函数方式修改配置 ([#359](https://github.com/remaxjs/remax/issues/359)) ([53fbf8b](https://github.com/remaxjs/remax/commit/53fbf8b))
- 支持在 onClick 回调中使用 stopPropagation 阻止冒泡 ([#292](https://github.com/remaxjs/remax/issues/292)) ([09e006f](https://github.com/remaxjs/remax/commit/09e006f)), closes [#283](https://github.com/remaxjs/remax/issues/283)
- 新增配置 pxToRpx 用于设置是否转换 px 到 rpx ([dd73e13](https://github.com/remaxjs/remax/commit/dd73e13)), closes [#380](https://github.com/remaxjs/remax/issues/380) [#380](https://github.com/remaxjs/remax/issues/380) [#381](https://github.com/remaxjs/remax/issues/381) [#381](https://github.com/remaxjs/remax/issues/381) [#381](https://github.com/remaxjs/remax/issues/381)

## [1.4.7](https://github.com/remaxjs/remax/compare/v1.4.6...v1.4.7) (2019-11-19)

**Note:** Version bump only for package root

## [1.4.6](https://github.com/remaxjs/remax/compare/v1.4.5...v1.4.6) (2019-11-18)

### Bug Fixes

- 修复原生组件驼峰风格，React 风格函数属性转换错误的问题 ([#358](https://github.com/remaxjs/remax/issues/358)) ([5a789fc](https://github.com/remaxjs/remax/commit/5a789fc)), closes [#357](https://github.com/remaxjs/remax/issues/357)

## [1.4.5](https://github.com/remaxjs/remax/compare/v1.4.4...v1.4.5) (2019-11-15)

### Bug Fixes

- build 时无法正确清理自定义 output 目录的问题 ([6545a47](https://github.com/remaxjs/remax/commit/6545a47))
- 带有 src 目录的 npm 包小程序组件构建错误的问题 ([#356](https://github.com/remaxjs/remax/issues/356)) ([4f3f53e](https://github.com/remaxjs/remax/commit/4f3f53e)), closes [#346](https://github.com/remaxjs/remax/issues/346)

## [1.4.4](https://github.com/remaxjs/remax/compare/v1.4.3...v1.4.4) (2019-11-14)

### Bug Fixes

- 找不到 regenerator-runtime 的问题 ([#351](https://github.com/remaxjs/remax/issues/351)) ([03dbf3d](https://github.com/remaxjs/remax/commit/03dbf3d))

## [1.4.3](https://github.com/remaxjs/remax/compare/v1.4.2...v1.4.3) (2019-11-14)

### Bug Fixes

- **wechat:** 修正 ScrollView 组件类型 ([84e3c91](https://github.com/remaxjs/remax/commit/84e3c91))
- 修复小程序组件引入错误 ([7c07e2d](https://github.com/remaxjs/remax/commit/7c07e2d))

## [1.4.2](https://github.com/remaxjs/remax/compare/v1.4.1...v1.4.2) (2019-11-13)

### Bug Fixes

- **wechat:** 修正 wx:key 的警告 ([4806635](https://github.com/remaxjs/remax/commit/4806635)), closes [#332](https://github.com/remaxjs/remax/issues/332)
- 修复 node 10.10 打包出现 mkdir 的错误 ([7f4c3e2](https://github.com/remaxjs/remax/commit/7f4c3e2)), closes [#331](https://github.com/remaxjs/remax/issues/331)
- 修复钉钉小程序使用原生组件渲染错乱的问题 ([e38f578](https://github.com/remaxjs/remax/commit/e38f578)), closes [#316](https://github.com/remaxjs/remax/issues/316)
- 完善支付宝 Button 组件 type 定义 ([#340](https://github.com/remaxjs/remax/issues/340)) ([77900ce](https://github.com/remaxjs/remax/commit/77900ce))
- 自定义组件会重复引用的问题 ([9c05961](https://github.com/remaxjs/remax/commit/9c05961)), closes [#342](https://github.com/remaxjs/remax/issues/342)
- 自定义组件路径带有 @ 时构建错误的问题 ([63c0ddb](https://github.com/remaxjs/remax/commit/63c0ddb))

## [1.4.1](https://github.com/remaxjs/remax/compare/v1.4.0...v1.4.1) (2019-11-11)

### Bug Fixes

- 修复支付宝 view 缺少 slot 属性导致原生组件 slot 不生效的问题 ([b89c721](https://github.com/remaxjs/remax/commit/b89c721))

# [1.4.0](https://github.com/remaxjs/remax/compare/v1.3.1...v1.4.0) (2019-11-11)

### Bug Fixes

- 修复 dataset 属性失效的问题 ([68af03b](https://github.com/remaxjs/remax/commit/68af03b))
- 修复 inline style 单位 px 没有转换成 rpx 的问题 ([b5a366a](https://github.com/remaxjs/remax/commit/b5a366a)), closes [#320](https://github.com/remaxjs/remax/issues/320)
- 修复多次切换页面导致加载速度变慢的问题 ([1f93d18](https://github.com/remaxjs/remax/commit/1f93d18)), closes [#304](https://github.com/remaxjs/remax/issues/304)

### Features

- add remax version check in project ([#325](https://github.com/remaxjs/remax/issues/325)) ([6ab19ce](https://github.com/remaxjs/remax/commit/6ab19ce))

## [1.3.1](https://github.com/remaxjs/remax/compare/v1.3.0...v1.3.1) (2019-11-04)

### Bug Fixes

- 修正 virtual modules 导致的构建错误 ([08ac82b](https://github.com/remaxjs/remax/commit/08ac82b))

# [1.3.0](https://github.com/remaxjs/remax/compare/v1.2.2...v1.3.0) (2019-11-04)

### Bug Fixes

- **wechat:** 设置 Navigator 组件 openType 默认值为 navigate ([e2fe7cc](https://github.com/remaxjs/remax/commit/e2fe7cc))
- page lifecye pageScroll callback‘s params is undefined issue ([a36d79d](https://github.com/remaxjs/remax/commit/a36d79d))
- 修复 css 中 base64 的路径会被修改的问题 ([b6ca1f0](https://github.com/remaxjs/remax/commit/b6ca1f0))
- 修复 watch 时 rebuild 没有清理掉多余的属性 ([8e52818](https://github.com/remaxjs/remax/commit/8e52818))
- 修复 windows 下图片引入路径错误的问题 ([#312](https://github.com/remaxjs/remax/issues/312)) ([0b75693](https://github.com/remaxjs/remax/commit/0b75693)), closes [#311](https://github.com/remaxjs/remax/issues/311)
- 修复每个测试收集到的 props 会串起来的问题 ([31b6201](https://github.com/remaxjs/remax/commit/31b6201))

### Features

- 增加从插件引用组件的功能 ([639391b](https://github.com/remaxjs/remax/commit/639391b))

### Performance Improvements

- **cli:** 关闭 tree shaking 提升开发环境编译速度 ([698dbe2](https://github.com/remaxjs/remax/commit/698dbe2)), closes [#298](https://github.com/remaxjs/remax/issues/298)

## [1.2.2](https://github.com/remaxjs/remax/compare/v1.2.1...v1.2.2) (2019-10-22)

### Bug Fixes

- native 文件 copy 时没有遵从 options.ouput 的配置 ([99fd382](https://github.com/remaxjs/remax/commit/99fd382))
- **alipay:** 修复 catchClick ([5897266](https://github.com/remaxjs/remax/commit/5897266))

## [1.2.1](https://github.com/remaxjs/remax/compare/v1.2.0...v1.2.1) (2019-10-16)

### Bug Fixes

- 修复 style 性质的属性没有转换成内联样式的问题 ([e2bc745](https://github.com/remaxjs/remax/commit/e2bc745)), closes [#281](https://github.com/remaxjs/remax/issues/281)

# [1.2.0](https://github.com/remaxjs/remax/compare/v1.2.0-beta.0...v1.2.0) (2019-10-14)

### Bug Fixes

- 修正 jsx 解析错误 ([4b71e7c](https://github.com/remaxjs/remax/commit/4b71e7c))
- 修正 module import 错误 ([e27547e](https://github.com/remaxjs/remax/commit/e27547e))

# [1.2.0-beta.0](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.3...v1.2.0-beta.0) (2019-10-14)

### Bug Fixes

- **alipay:** 完善接口的 promise 类型 ([e6862f2](https://github.com/remaxjs/remax/commit/e6862f2))
- **wechat:** 修复 Slider 组件 max 属性的默认值为 100 ([5f0ba37](https://github.com/remaxjs/remax/commit/5f0ba37))

### Features

- 支持引用小程序自定义组件 ([#270](https://github.com/remaxjs/remax/issues/270)) ([61d2aac](https://github.com/remaxjs/remax/commit/61d2aac))

# [1.2.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.2...v1.2.0-alpha.3) (2019-10-11)

**Note:** Version bump only for package root

# [1.2.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package root

**Note:** Version bump only for package root

**Note:** Version bump only for package root

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

# [1.2.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.1.2...v1.2.0-alpha.0) (2019-09-30)

### Bug Fixes

- getAlias ([924736d](https://github.com/remaxjs/remax/commit/924736d))
- 修复 ci 报错 ([3f46009](https://github.com/remaxjs/remax/commit/3f46009))
- 修复找不到 dot-props 依赖 ([4ce1af0](https://github.com/remaxjs/remax/commit/4ce1af0))

### Features

- 修改头条小程序的模板适配原生组件 ([3436245](https://github.com/remaxjs/remax/commit/3436245))
- 修改支付宝和微信适配原生组件 ([0b4ce79](https://github.com/remaxjs/remax/commit/0b4ce79))
- 完成引入原生小程序的功能 ([99a2cdb](https://github.com/remaxjs/remax/commit/99a2cdb))
- 支持 config.js 写 esm ([361cb4e](https://github.com/remaxjs/remax/commit/361cb4e))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://github.com/remaxjs/remax/issues/262)) ([59a47f2](https://github.com/remaxjs/remax/commit/59a47f2))

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
