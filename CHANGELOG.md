# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.15.14](https://github.com/remaxjs/remax/compare/v2.15.13...v2.15.14) (2022-05-20)

### Bug Fixes

- [#1739](https://github.com/remaxjs/remax/issues/1739) ([31ed8a0](https://github.com/remaxjs/remax/commit/31ed8a00f5a6e0d368f10381237b35d4a5f00868))
- 修复 字节 project.config.json 配置问题 配合新版本 create-remax-app 使用 ([1650c70](https://github.com/remaxjs/remax/commit/1650c70f2b232628b07344f24b37bba0798a8d1e))
- 修改头条测试的 project.config 文件 ([55f6345](https://github.com/remaxjs/remax/commit/55f6345ec79e3a11e37d54826b6c1126ea682017))
- 关闭 react-devtool 默认集成 ([8e741d8](https://github.com/remaxjs/remax/commit/8e741d8bc201d9c05a3190efa3f4fcb707ba245c))

## [2.15.13](https://github.com/remaxjs/remax/compare/v2.15.12...v2.15.13) (2022-03-29)

### Bug Fixes

- 修复 CSS 变量的数字会被加上单位的问题 ([#1870](https://github.com/remaxjs/remax/issues/1870)) ([0df4c76](https://github.com/remaxjs/remax/commit/0df4c7664bdb947c71a82e3288a2f343c76240fc)), closes [#1869](https://github.com/remaxjs/remax/issues/1869)

## [2.15.12](https://github.com/remaxjs/remax/compare/v2.15.11...v2.15.12) (2022-01-11)

### Bug Fixes

- 修复节点卸载后回调没从 Page 上删除的问题 ([#1822](https://github.com/remaxjs/remax/issues/1822)) ([0a10885](https://github.com/remaxjs/remax/commit/0a1088571d1fc7ad4f5006ee79d81f8814671857)), closes [#1780](https://github.com/remaxjs/remax/issues/1780)

## [2.15.11](https://github.com/remaxjs/remax/compare/v2.15.10...v2.15.11) (2022-01-05)

### Bug Fixes

- 去掉 Babel 缓存 ([#1812](https://github.com/remaxjs/remax/issues/1812)) ([159ae6d](https://github.com/remaxjs/remax/commit/159ae6dc28436f768d0120d39585d59558fe3d5f))
- **wechat:** Video[enable-auto-rotation] 类型错误 ([#1798](https://github.com/remaxjs/remax/issues/1798)) ([e6291d8](https://github.com/remaxjs/remax/commit/e6291d876b5fcd91da82de16d532607c40272a26))
- **wechat:** 修正 AdCustom 组件找不到模板 ([#1807](https://github.com/remaxjs/remax/issues/1807)) ([eb581e3](https://github.com/remaxjs/remax/commit/eb581e3a113aa738ba58abeb2032daaab342bb4e))

## [2.15.10](https://github.com/remaxjs/remax/compare/v2.15.9...v2.15.10) (2021-12-18)

### Bug Fixes

- **toutiao:** 新增 MovableArea/MovableView 组件 ([18fffef](https://github.com/remaxjs/remax/commit/18fffef670cc4dbe6d3d0ea532fb944cc4f4adf7))
- **toutiao:** 新增 ai/ar 能力接口 ([#1792](https://github.com/remaxjs/remax/issues/1792)) ([209963b](https://github.com/remaxjs/remax/commit/209963b0db994591d440a2436dffd157f5ac0dc9))
- **wechat:** 新增 MovableView 和 Slider 的 onTouchStart 和 onTouchEnd 事件([#1790](https://github.com/remaxjs/remax/issues/1790)) ([0748bff](https://github.com/remaxjs/remax/commit/0748bff988840d83ed44c192255f6ad6e49790eb)), closes [#1468](https://github.com/remaxjs/remax/issues/1468)

### Performance Improvements

- **cli:** 开启 babel-loader 缓存，优化编译速度 ([#1789](https://github.com/remaxjs/remax/issues/1789)) ([2f41917](https://github.com/remaxjs/remax/commit/2f41917004b9f5e0875e077edd8e4a387f0e4ef9))
- optimize update performance ([#1777](https://github.com/remaxjs/remax/issues/1777)) ([0e0a6b5](https://github.com/remaxjs/remax/commit/0e0a6b503a7db785c65e37c06e1a909b339b68ed))

## [2.15.9](https://github.com/remaxjs/remax/compare/v2.15.7...v2.15.9) (2021-12-06)

### Features

- 增加 hook unstable_onEntries, 允许修改 entry 的路径 ([6dc51d7](https://github.com/remaxjs/remax/commit/6dc51d7076d3ac5c97d66770f1e142ddcd7de09a))
- 增加 hook unstable_onEntries, 允许修改 entry 的路径 ([14d4b95](https://github.com/remaxjs/remax/commit/14d4b95d916a55e4ecbe5fbda933bbc57018d7df))

## [2.15.8](https://github.com/remaxjs/remax/compare/v2.15.7...v2.15.8) (2021-11-23)

**Note:** Version bump only for package root

## [2.15.7](https://github.com/remaxjs/remax/compare/v2.15.6...v2.15.7) (2021-11-17)

### Bug Fixes

- **toutiao:** 修复无法被头条小程序开发工具识别问题 ([fdc25e3](https://github.com/remaxjs/remax/commit/fdc25e3c456286764be90611a238d66067c1eddb)), closes [#1739](https://github.com/remaxjs/remax/issues/1739)
- **web:** selectedColor 文档错误 ([eb691a7](https://github.com/remaxjs/remax/commit/eb691a79ba67fe7bb25cfa68bbe510f54078c70d))
- [#1717](https://github.com/remaxjs/remax/issues/1717) ([#1727](https://github.com/remaxjs/remax/issues/1727)) ([a64dab6](https://github.com/remaxjs/remax/commit/a64dab6c7da643f763adb1fa374829f328ec1b95))

## [2.15.6](https://github.com/remaxjs/remax/compare/v2.15.5...v2.15.6) (2021-09-10)

### Bug Fixes

- **web:** App/Page 生命周期中无法触发小程序生命周期问题 ([36feb4a](https://github.com/remaxjs/remax/commit/36feb4aea548a721761eca17d7e79d9abf63dc94)), closes [#1689](https://github.com/remaxjs/remax/issues/1689)
- 微信小程序新增接口 ([23e8307](https://github.com/remaxjs/remax/commit/23e83073ce52f3e0cce53dcb5fbf19f8257e5605)), closes [#1687](https://github.com/remaxjs/remax/issues/1687) [#1693](https://github.com/remaxjs/remax/issues/1693)

### Reverts

- Revert "fix: 无障碍访问 api" (#1705) ([556fedb](https://github.com/remaxjs/remax/commit/556fedbd237db956a026a42590cd55aa3d6568d1)), closes [#1705](https://github.com/remaxjs/remax/issues/1705)

## [2.15.5](https://github.com/remaxjs/remax/compare/v2.15.4...v2.15.5) (2021-09-06)

### Bug Fixes

- 无障碍访问 api ([35a1af6](https://github.com/remaxjs/remax/commit/35a1af6fd57cd2ee14a96993ee8f85b44d9c7d61))
- 调整 Button 组件的 dom 标签 ([63ac7cf](https://github.com/remaxjs/remax/commit/63ac7cf090fb8f52cd0ba863d86ab5a88d8a2fa6))

## [2.15.4](https://github.com/remaxjs/remax/compare/v2.15.3...v2.15.4) (2021-08-09)

### Bug Fixes

- 调整 Button 组件的 dom 标签 ([f810163](https://github.com/remaxjs/remax/commit/f810163b2c79baa81528177b6b32327df61a0fb4))

## [2.15.3](https://github.com/remaxjs/remax/compare/v2.15.2...v2.15.3) (2021-08-05)

### Features

- 可以通过外部修改组件样式 ([d74a667](https://github.com/remaxjs/remax/commit/d74a667008476820861b1ada226f2267a4ff7a3e))
- 支持在配置文件中写 port 来更改 web 环境启动的端口 ([15d6ddd](https://github.com/remaxjs/remax/commit/15d6ddd56faa167039656a3d78ae07bab5211575))
- 调整 remax/one 的 button 组件 dom 结构 ([3d06f6c](https://github.com/remaxjs/remax/commit/3d06f6c639ec7380fe2c28f8c8c24c8dcf16702d))

## [2.15.2](https://github.com/remaxjs/remax/compare/v2.15.1...v2.15.2) (2021-07-30)

### Features

- 组件构建的命令行工具 — 调整组件构建 input 的行为和 less sass 构建配置 ([9f17540](https://github.com/remaxjs/remax/commit/9f17540192386891e31e4ea27bb982581dec9b2d))

## [2.15.1](https://github.com/remaxjs/remax/compare/v2.15.0...v2.15.1) (2021-07-30)

### Features

- 组件构建的命令行工具 — 调整 bin 文件名称 ([e660c1d](https://github.com/remaxjs/remax/commit/e660c1db02788b0ee3b71eea46fc9254102f7a8e))

# [2.15.0](https://github.com/remaxjs/remax/compare/v2.14.1...v2.15.0) (2021-07-30)

### Bug Fixes

- 修复用例 ([d31160c](https://github.com/remaxjs/remax/commit/d31160c2494a5b3bd5572a3019166db3ea877d7e))
- 修复用例 ([6c4dd01](https://github.com/remaxjs/remax/commit/6c4dd010c63b18cc509918ed8ea98b4ab1f64ce4))

### Features

- 支持 buildMiniComponent，以 webpack 方式构建小程序自定义组件 ([e5ed805](https://github.com/remaxjs/remax/commit/e5ed805191ad08ef269e2f4fa2d7ffa8a580862a))
- 组件构建的命令行工具 — build 命令 ([dba8ab3](https://github.com/remaxjs/remax/commit/dba8ab38481146cb01f4d108e86afeb044e42d6e))
- 组件构建的命令行工具 — 命令行参数支持 ([5698b77](https://github.com/remaxjs/remax/commit/5698b77202a2e5390b5f82050e79937e563ee7dc))
- 组件构建的命令行工具 — 命令行参数支持 ([c4698eb](https://github.com/remaxjs/remax/commit/c4698eb4dd75d59529c60c26fa01dc08493033a2))
- 组件构建的命令行工具 — 调整测试用例 ([4ae3f2b](https://github.com/remaxjs/remax/commit/4ae3f2b5df2c2866526e58441f1c581ec46584da))

## [2.14.1](https://github.com/remaxjs/remax/compare/v2.14.0...v2.14.1) (2021-07-20)

### Bug Fixes

- canvas 新增 onReady 属性 ([#1650](https://github.com/remaxjs/remax/issues/1650)) ([199bbc3](https://github.com/remaxjs/remax/commit/199bbc360a4e5c7f485ac20a04001cae4557f096))
- 微信小程序 textarea 组件 disableDefaultPadding 参数不生效的问题 ([c4f721c](https://github.com/remaxjs/remax/commit/c4f721c7f81474f177353bc9f12f77eda5f69e63))

# [2.14.0](https://github.com/remaxjs/remax/compare/v2.13.6...v2.14.0) (2021-07-06)

### Features

- 生命周期 & 交互事件支持 batchedUpdates ([#1635](https://github.com/remaxjs/remax/issues/1635)) ([fec2741](https://github.com/remaxjs/remax/commit/fec2741dcb2baf5e3e98c5b1950d0446642303c9)), closes [#1633](https://github.com/remaxjs/remax/issues/1633)

## [2.13.6](https://github.com/remaxjs/remax/compare/v2.13.5...v2.13.6) (2021-06-26)

### Bug Fixes

- 微信组件未声明模板深度导致 base.wxml 过大的问题 ([#1628](https://github.com/remaxjs/remax/issues/1628)) ([db9484e](https://github.com/remaxjs/remax/commit/db9484e02e429eab3cf53ed6a8c15a34e986fdb9))

## [2.13.5](https://github.com/remaxjs/remax/compare/v2.13.4...v2.13.5) (2021-06-22)

### Bug Fixes

- **wechat:** fix preview media ([#1617](https://github.com/remaxjs/remax/issues/1617)) ([3995718](https://github.com/remaxjs/remax/commit/399571850d59d94eed5ef968280e5469cdff30e6))

## [2.13.4](https://github.com/remaxjs/remax/compare/v2.13.3...v2.13.4) (2021-05-31)

### Bug Fixes

- 修复 watch 模式下 app.config 配置不更新的问题 ([#1546](https://github.com/remaxjs/remax/issues/1546)) ([b0bcdc4](https://github.com/remaxjs/remax/commit/b0bcdc4c4b0fffa4e733c5ff06711435a711960d))
- 修复使用 react-devtools 无法显示小程序组件名称 ([#1585](https://github.com/remaxjs/remax/issues/1585)) ([ee42cc1](https://github.com/remaxjs/remax/commit/ee42cc181742d0c022f457963e7ddb8564bc038d)), closes [#1563](https://github.com/remaxjs/remax/issues/1563)
- 修复子组件的 onShow 中改变状态导致父组件 onShow 不执行的问题 ([e93789f](https://github.com/remaxjs/remax/commit/e93789fad32b14f501b294ef23ab0af3f021a4cb)), closes [#1564](https://github.com/remaxjs/remax/issues/1564)

## [2.13.3](https://github.com/remaxjs/remax/compare/v2.13.2...v2.13.3) (2021-05-25)

### Bug Fixes

- **wechat:** 修复 page-meta、navigation-bar 组件渲染错误 ([#1583](https://github.com/remaxjs/remax/issues/1583)) ([a8d21f5](https://github.com/remaxjs/remax/commit/a8d21f543598477cbda9a01c3178f6d294e7d977))

## [2.13.2](https://github.com/remaxjs/remax/compare/v2.13.1...v2.13.2) (2021-05-19)

### Bug Fixes

- **web:** 修复内部 css 优先级比项目 css 高的问题 ([806bed9](https://github.com/remaxjs/remax/commit/806bed9ed70fe8ec2d839c59da6003b648edb83a))
- **wechat:** 同步微信小程序组件到最新版本 ([#1576](https://github.com/remaxjs/remax/issues/1576)) ([fd47e56](https://github.com/remaxjs/remax/commit/fd47e56c7c3a995bd7aa2f336f7d30f299bc92ac))
- 修复 web 端找不到 react-router-dom 的问题 ([748f6c6](https://github.com/remaxjs/remax/commit/748f6c6587a7a4b4bb091b10ec3c64e08174db19))

## [2.13.1](https://github.com/remaxjs/remax/compare/v2.13.0...v2.13.1) (2021-04-22)

### Bug Fixes

- 修复插件环境没有 getApp 导致的报错 ([7a4daf2](https://github.com/remaxjs/remax/commit/7a4daf2c864d318d5f5924295447e8b9d1c35df9))

# [2.13.0](https://github.com/remaxjs/remax/compare/v2.12.1...v2.13.0) (2021-04-19)

### Bug Fixes

- **wechat:** 修复 onShareTimeline 不工作的问题([#1521](https://github.com/remaxjs/remax/issues/1521)) ([2a45117](https://github.com/remaxjs/remax/commit/2a4511746481e386369d488ac7dc349b7769686a))
- **wechat:** 引用三方 plugin 时误报错 ([#1529](https://github.com/remaxjs/remax/issues/1529)) ([1e6af3e](https://github.com/remaxjs/remax/commit/1e6af3e43e649c6ec2e22573aab159a63393509c))
- **wechat:** 添加 Textarea 组件 confirmType、confirmHold 类型 (remaxjs[#1532](https://github.com/remaxjs/remax/issues/1532)) ([#1533](https://github.com/remaxjs/remax/issues/1533)) ([b1f8b85](https://github.com/remaxjs/remax/commit/b1f8b85b671ffcd34f65a963412a35cc3260f914))

### Features

- 支持 React 17 ([#1527](https://github.com/remaxjs/remax/issues/1527)) ([7844089](https://github.com/remaxjs/remax/commit/7844089673d5188c10366833d03b8da58ff85f9d))

## [2.12.1](https://github.com/remaxjs/remax/compare/v2.12.0...v2.12.1) (2021-04-09)

### Bug Fixes

- 修复不兼容 Android 6.0 的问题 ([b77e4b8](https://github.com/remaxjs/remax/commit/b77e4b8b49db5e7ca6e98397499e52f7c03ea1a3)), closes [#1522](https://github.com/remaxjs/remax/issues/1522)

# [2.12.0](https://github.com/remaxjs/remax/compare/v2.11.8...v2.12.0) (2021-04-07)

### Bug Fixes

- **wechat:** 修复 textarea 的 type 错误 ([#1517](https://github.com/remaxjs/remax/issues/1517)) ([32948d5](https://github.com/remaxjs/remax/commit/32948d59529ea3b33e609a30b2e0719b07176a9f))

### Features

- support build native component in .ts and other css formats ([#1512](https://github.com/remaxjs/remax/issues/1512)) ([1778e48](https://github.com/remaxjs/remax/commit/1778e48a341b78768805ff853432d5264a04e295))

## [2.11.8](https://github.com/remaxjs/remax/compare/v2.11.7...v2.11.8) (2021-03-17)

**Note:** Version bump only for package root

## [2.11.7](https://github.com/remaxjs/remax/compare/v2.11.6...v2.11.7) (2021-03-16)

### Bug Fixes

- **ali:** 组件 ScrollView 增加 disableLowerScroll 和 disableLowerScroll 属性 ([c5d5ee3](https://github.com/remaxjs/remax/commit/c5d5ee3046af00589067971b2011fda6c84918ee))

## [2.11.6](https://github.com/remaxjs/remax/compare/v2.11.5...v2.11.6) (2021-03-05)

### Bug Fixes

- **wechat:** 修复 CoverView markerId 属性 ([a1191f3](https://github.com/remaxjs/remax/commit/a1191f3e84ea53609980df165a8ab5b710c99aca)), closes [#1490](https://github.com/remaxjs/remax/issues/1490)
- 修复原生组件递归引用导致的死循环 ([9baf852](https://github.com/remaxjs/remax/commit/9baf85284556b3b902ef7efbb84b67a49b621056)), closes [#1490](https://github.com/remaxjs/remax/issues/1490)
- **wechat:** 修复 wxml 模板依赖查找错误的问题 ([ef5c982](https://github.com/remaxjs/remax/commit/ef5c982065e18b8f139f339ccd71d26bee537363)), closes [#1492](https://github.com/remaxjs/remax/issues/1492)

## [2.11.5](https://github.com/remaxjs/remax/compare/v2.11.4...v2.11.5) (2021-03-04)

### Bug Fixes

- **ali:** 修复 AppConfig 中 subPackages 的 type ([#1482](https://github.com/remaxjs/remax/issues/1482)) ([bd4eef0](https://github.com/remaxjs/remax/commit/bd4eef0a8c1dd8b341aea197e99fff79dbf6e9d1))
- **wechat:** 修复 Map 组件缺失的属性 ([#1489](https://github.com/remaxjs/remax/issues/1489)) ([b319d9b](https://github.com/remaxjs/remax/commit/b319d9b2a568ba3d090a6fe8e52f761adcdb4506))

## [2.11.4](https://github.com/remaxjs/remax/compare/v2.11.3...v2.11.4) (2021-01-21)

### Bug Fixes

- 修复使用 UNSAFE_wechatTemplateDepth 配置报错的问题 ([#1474](https://github.com/remaxjs/remax/issues/1474)) ([7b1f084](https://github.com/remaxjs/remax/commit/7b1f08490eb3926db88ae1000454ca46fd69f55f))

## [2.11.3](https://github.com/remaxjs/remax/compare/v2.11.2...v2.11.3) (2020-12-31)

### Bug Fixes

- **wechat:** 修复 ScrollView 组件缺失的属性 ([#1460](https://github.com/remaxjs/remax/issues/1460)) ([be3c45d](https://github.com/remaxjs/remax/commit/be3c45dbcf7980c7ff7bc69f3922500abb085e67))

## [2.11.2](https://github.com/remaxjs/remax/compare/v2.11.1...v2.11.2) (2020-12-17)

### Bug Fixes

- 修复 createHostComponent 无法正确注册组件的问题 ([7ca4938](https://github.com/remaxjs/remax/commit/7ca4938998450ba1a1d5d61955ff37628fd2cd28))

## [2.11.1](https://github.com/remaxjs/remax/compare/v2.11.0...v2.11.1) (2020-12-17)

### Bug Fixes

- 修复 style props 变更的错误异常 ([#1446](https://github.com/remaxjs/remax/issues/1446)) ([44d43a7](https://github.com/remaxjs/remax/commit/44d43a75cba47fcae7b64085c52ea858fe017a83))

# [2.11.0](https://github.com/remaxjs/remax/compare/v2.10.1...v2.11.0) (2020-12-14)

### Bug Fixes

- pageEvent 新增 onShareTimeline 类型 ([#1425](https://github.com/remaxjs/remax/issues/1425)) ([02558e2](https://github.com/remaxjs/remax/commit/02558e2c1a2b4f8c8b555f4063ce471ea0623222))
- 修复 placeholderStyle 属性 diff 错误的问题 ([#1429](https://github.com/remaxjs/remax/issues/1429)) ([b7622a4](https://github.com/remaxjs/remax/commit/b7622a4ff381f0a3eab113fab99f983dc0247122))

### Features

- build cli 增加 --loglevel 参数 ([#1435](https://github.com/remaxjs/remax/issues/1435)) ([a207091](https://github.com/remaxjs/remax/commit/a20709168f4a30dec5e4b759421503baddc6b18f))

## [2.10.1](https://github.com/remaxjs/remax/compare/v2.10.0...v2.10.1) (2020-12-06)

### Bug Fixes

- **wechat:** 修复具名 slot 不生效的问题 ([6da0267](https://github.com/remaxjs/remax/commit/6da02673cf71d23d286037ab84ac4f898059f4ce)), closes [#1406](https://github.com/remaxjs/remax/issues/1406)
- 修复 onShareAppMessage 和 onPageScroll 无效的问题 ([6376d04](https://github.com/remaxjs/remax/commit/6376d04014e4872dfdc8e7c56ae024d450b6b645)), closes [#1413](https://github.com/remaxjs/remax/issues/1413)
- **wechat:** 修复 onLongPress 不生效的问题 ([987dd6b](https://github.com/remaxjs/remax/commit/987dd6bc24ae0102ee35fd95c53085d3f1880a64)), closes [#1369](https://github.com/remaxjs/remax/issues/1369)
- 修复 cache router 无效问题 ([#1416](https://github.com/remaxjs/remax/issues/1416)) ([7d92597](https://github.com/remaxjs/remax/commit/7d925972c5ca096af1190ea0742e663a1fdebb46)), closes [#1415](https://github.com/remaxjs/remax/issues/1415)
- **wechat:** Image 组件 mode 属性添加 heightFix ([#1402](https://github.com/remaxjs/remax/issues/1402)) ([a6d9d3a](https://github.com/remaxjs/remax/commit/a6d9d3a1afaa02483921697f62c0eb4be1e3ff09))

# [2.10.0](https://github.com/remaxjs/remax/compare/v2.9.5...v2.10.0) (2020-12-04)

### Bug Fixes

- **ali:** 修复 Button[style] 不生效的问题 ([2460961](https://github.com/remaxjs/remax/commit/24609614520c55077fa03ce7989e7135f1d9403d))
- 修复生产环境下未禁用 react-devtools 的问题 ([#1411](https://github.com/remaxjs/remax/issues/1411)) ([a01ccde](https://github.com/remaxjs/remax/commit/a01ccdebfc3d2ecb104f3ecc532e4b60ff2eb0c0)), closes [#1408](https://github.com/remaxjs/remax/issues/1408)
- **wechat:** 修复未导出 API ([#1403](https://github.com/remaxjs/remax/issues/1403)) ([4b5247f](https://github.com/remaxjs/remax/commit/4b5247f5153527b54c57e8b07f6b5524f3009ab2))

### Features

- 支持在  所有  平台基础组件上使用平台前缀属性 ([#1412](https://github.com/remaxjs/remax/issues/1412)) ([d6e9072](https://github.com/remaxjs/remax/commit/d6e9072ef9714d62a21905c8a40061845a465b28))

## [2.9.5](https://github.com/remaxjs/remax/compare/v2.9.4...v2.9.5) (2020-12-01)

### Bug Fixes

- 修复 usePageInstance 的返回类型 ([cf5afa3](https://github.com/remaxjs/remax/commit/cf5afa30d541f5f5a8a5647566924e652057d211))

## [2.9.4](https://github.com/remaxjs/remax/compare/v2.9.3...v2.9.4) (2020-11-30)

### Bug Fixes

- 修复 usePageInstance 类型丢失的问题 ([473da00](https://github.com/remaxjs/remax/commit/473da00506b58f03abc0f33c6f3ea6b9b4e7d06b))

## [2.9.3](https://github.com/remaxjs/remax/compare/v2.9.2...v2.9.3) (2020-11-30)

### Bug Fixes

- **wechat:** 修复微信端会包含支付宝 API 的问题 ([9d1f333](https://github.com/remaxjs/remax/commit/9d1f33342b43df734ebed83cb12e30607372a1df)), closes [#1394](https://github.com/remaxjs/remax/issues/1394)

## [2.9.2](https://github.com/remaxjs/remax/compare/v2.9.1...v2.9.2) (2020-11-28)

### Bug Fixes

- **wechat:** 修复 API 类型 ([087a581](https://github.com/remaxjs/remax/commit/087a5818a34558d8aeccc6b67eef7d486bfc7d96)), closes [#1389](https://github.com/remaxjs/remax/issues/1389)
- 修复 React Devtools 失效的问题 ([86360e2](https://github.com/remaxjs/remax/commit/86360e2299172431ea88b51c7b25d2cb811d0b6a)), closes [#1392](https://github.com/remaxjs/remax/issues/1392)
- 修复 windows 下 @remax/plugin-error-screen 加载失败的问题 ([80d5e41](https://github.com/remaxjs/remax/commit/80d5e418a92cb23049aa7aefd5cc5aaf2aeb8af1)), closes [#1388](https://github.com/remaxjs/remax/issues/1388) [#1390](https://github.com/remaxjs/remax/issues/1390)

## [2.9.1](https://github.com/remaxjs/remax/compare/v2.9.0...v2.9.1) (2020-11-27)

### Bug Fixes

- **web:** 修复生成环境找不到 React 的问题 ([da2a136](https://github.com/remaxjs/remax/commit/da2a13634d04e591b014a0ac14aaf935e24cc1de)), closes [#1383](https://github.com/remaxjs/remax/issues/1383)
- **web:** 修正 tabbar 样式 ([ba49098](https://github.com/remaxjs/remax/commit/ba4909820ffcfa09ce5dd0ed220839d43abdf40d))
- 修复单页应用进首页会加载全部资源文件 ([bb4a0f5](https://github.com/remaxjs/remax/commit/bb4a0f5e4b44b9dd1068dddc5887213174e35de9))
- 修复构建配置路径不一致的问题 ([#1379](https://github.com/remaxjs/remax/issues/1379)) ([6c92ff7](https://github.com/remaxjs/remax/commit/6c92ff7163cd166ee46cb179ebf2b8909da068bb))
- 兼容遗留的 one 配置 ([#1381](https://github.com/remaxjs/remax/issues/1381)) ([b260253](https://github.com/remaxjs/remax/commit/b26025352572f21e75091f22b15f085f007becab)), closes [#1380](https://github.com/remaxjs/remax/issues/1380)
- 去掉关闭 pxToRpx 时出现的 postcss 警告 ([7f271ff](https://github.com/remaxjs/remax/commit/7f271ff14c66b71d1e82fd02ba7a262a2cece53d)), closes [#1377](https://github.com/remaxjs/remax/issues/1377)

# [2.9.0](https://github.com/remaxjs/remax/compare/v2.8.10...v2.9.0) (2020-11-24)

### Bug Fixes

- 修复小程序自定义组件无法设置 className 的问题 ([d253627](https://github.com/remaxjs/remax/commit/d253627765f688ee8c0e224fa244ef916129b94d))

### Features

- 一大波更新 ([#1366](https://github.com/remaxjs/remax/issues/1366)) ([45dab88](https://github.com/remaxjs/remax/commit/45dab88561bdbd1296ec4204aec572d00e46b1b4)), closes [#1153](https://github.com/remaxjs/remax/issues/1153) [#705](https://github.com/remaxjs/remax/issues/705) [#1077](https://github.com/remaxjs/remax/issues/1077)

## [2.8.10](https://github.com/remaxjs/remax/compare/v2.8.9...v2.8.10) (2020-11-20)

### Bug Fixes

- **one:** 修复 Textarea 使用 autoHeight 后发获取 ref 的问题 ([f64fe77](https://github.com/remaxjs/remax/commit/f64fe7725f68ae2458f3860aa249b580ec1712ce))

## [2.8.9](https://github.com/remaxjs/remax/compare/v2.8.8...v2.8.9) (2020-11-19)

### Bug Fixes

- **wechat:** 修复 SwiperItem[className]不生效的问题 ([#1371](https://github.com/remaxjs/remax/issues/1371)) ([977704c](https://github.com/remaxjs/remax/commit/977704cd183d084931568b81b156e320e72cc2b0))

### Reverts

- Revert "docs: 暂时去掉 web 示例" ([6d71827](https://github.com/remaxjs/remax/commit/6d718275f33acbe7e9bfa39dbeaed6ce1e5a9603))

## [2.8.8](https://github.com/remaxjs/remax/compare/v2.8.7...v2.8.8) (2020-11-13)

### Bug Fixes

- 修复节点交换时渲染错误的问题 ([9be6614](https://github.com/remaxjs/remax/commit/9be66149610acefe23192c3815ef49828de92b7a))

## [2.8.7](https://github.com/remaxjs/remax/compare/v2.8.6...v2.8.7) (2020-11-12)

### Bug Fixes

- **wechat:** 修复微信端节点交换时渲染错误的问题 ([#1364](https://github.com/remaxjs/remax/issues/1364)) ([62281ff](https://github.com/remaxjs/remax/commit/62281ff69c0da59c7bdf1a477188fbd41abee579)), closes [#1363](https://github.com/remaxjs/remax/issues/1363)

## [2.8.6](https://github.com/remaxjs/remax/compare/v2.8.5...v2.8.6) (2020-11-04)

### Bug Fixes

- 修复 configWebpack 无法修改 plugins 里配置的问题 ([#1356](https://github.com/remaxjs/remax/issues/1356)) ([6308a8e](https://github.com/remaxjs/remax/commit/6308a8eed0122c6046fe0865b14a8c5121874380))
- 修复 DevTools 引起的 onLaunch 参数丢失问题 ([#1357](https://github.com/remaxjs/remax/issues/1357)) ([9f65ba9](https://github.com/remaxjs/remax/commit/9f65ba9a7f5808a98ecaf767d11138c18554899f))
- 完善 useQuery 类型定义 ([#1350](https://github.com/remaxjs/remax/issues/1350)) ([1bfcd22](https://github.com/remaxjs/remax/commit/1bfcd222aa844ba0bac7247a9235bf6eebe5449a))

## [2.8.5](https://github.com/remaxjs/remax/compare/v2.8.4...v2.8.5) (2020-10-23)

### Bug Fixes

- 修复使用 react-query@2.21.0 构建报错的问题 ([d915ef7](https://github.com/remaxjs/remax/commit/d915ef792bbfd16527dcf63829a16145654f55dd)), closes [#1339](https://github.com/remaxjs/remax/issues/1339)

## [2.8.4](https://github.com/remaxjs/remax/compare/v2.8.3...v2.8.4) (2020-10-14)

### Bug Fixes

- 修复 onUnload 事件不触发的问题 ([#1324](https://github.com/remaxjs/remax/issues/1324)) ([5c53ed8](https://github.com/remaxjs/remax/commit/5c53ed81455d7e2699e4b37409fad97e6f06aa2d))

## [2.8.3](https://github.com/remaxjs/remax/compare/v2.8.2...v2.8.3) (2020-09-28)

### Bug Fixes

- **ali:** 修复 AppConfig 类型 ([8b1fa47](https://github.com/remaxjs/remax/commit/8b1fa47329a99e47035ecbfa6fec097cc52be7b8))

## [2.8.2](https://github.com/remaxjs/remax/compare/v2.8.1...v2.8.2) (2020-09-18)

### Bug Fixes

- **wechat:** 微信 Button 组件支持 QQ 小程序新增参数 ([#1297](https://github.com/remaxjs/remax/issues/1297)) ([1d9a839](https://github.com/remaxjs/remax/commit/1d9a8396b4c967e7474d9e3d6735e195e570f088))

## [2.8.1](https://github.com/remaxjs/remax/compare/v2.8.0...v2.8.1) (2020-09-16)

### Bug Fixes

- 修复同一页面的生命周期会重复触发的问题 ([#1289](https://github.com/remaxjs/remax/issues/1289)) ([4e8fef1](https://github.com/remaxjs/remax/commit/4e8fef1dfe5f26824aecc0d530da23cf48aef758)), closes [#1288](https://github.com/remaxjs/remax/issues/1288)

# [2.8.0](https://github.com/remaxjs/remax/compare/v2.7.10...v2.8.0) (2020-09-15)

### Features

- **wechat:** 导出 TouchEvent GenericEvent 事件定义 ([#1286](https://github.com/remaxjs/remax/issues/1286)) ([27a90cd](https://github.com/remaxjs/remax/commit/27a90cd5aef63ff84e43c25f57101b080387f638)), closes [#1062](https://github.com/remaxjs/remax/issues/1062)

### Performance Improvements

- 优化 remax/one 组件渲染性能 ([#1264](https://github.com/remaxjs/remax/issues/1264)) ([7721da2](https://github.com/remaxjs/remax/commit/7721da2460d118b73a0c694a51359588d5689215))

## [2.7.10](https://github.com/remaxjs/remax/compare/v2.7.9...v2.7.10) (2020-09-11)

### Bug Fixes

- **web:** 修复开发模式下 browser history 不能直接打开路由的问题 ([1d6a910](https://github.com/remaxjs/remax/commit/1d6a910f7859f966824433ba6100773edccc7841))

## [2.7.9](https://github.com/remaxjs/remax/compare/v2.7.8...v2.7.9) (2020-09-10)

### Bug Fixes

- 允许使用 Page 命名页面组件 ([#1273](https://github.com/remaxjs/remax/issues/1273)) ([bfa8032](https://github.com/remaxjs/remax/commit/bfa8032a5f62ad7bc6f82fce7096009a917be727)), closes [#1262](https://github.com/remaxjs/remax/issues/1262)
- **ali:** 修复同一个页面的生命周期会重复触发的问题 ([2af7537](https://github.com/remaxjs/remax/commit/2af753700e3048d231c0fb7d137e327e2089b9a7)), closes [#1225](https://github.com/remaxjs/remax/issues/1225)
- **toutiao:** 修复飞书开发者工具运行报错的问题 ([00db2bf](https://github.com/remaxjs/remax/commit/00db2bf5d228c7ab6d1e695ce3d01b4e7e6e2aab))
- **web:** 修复 app config 中 router 配置的类型错误 ([b4f2c84](https://github.com/remaxjs/remax/commit/b4f2c84e7c00fd3e69dc8e7edd221e556bbdc346))
- **web:** 修复 web 下即使离开页面 onPageScroll 事件也会触发的问题 ([#1232](https://github.com/remaxjs/remax/issues/1232)) ([7ae649e](https://github.com/remaxjs/remax/commit/7ae649ec03598dc5afed1552dbe12f9c74297c2e))
- **wechat:** 修复微信小程序 app.config.ts 声明错误问题 ([#1257](https://github.com/remaxjs/remax/issues/1257)) ([b2077ae](https://github.com/remaxjs/remax/commit/b2077aeaf1f559ff78532ea8d9136660691f02b4))
- **wechat:** 微信添加 catchTouchMove 的类型定义 ([6efda1d](https://github.com/remaxjs/remax/commit/6efda1d0004f0e6588138068516f516d0016e4e2))

## [2.7.8](https://github.com/remaxjs/remax/compare/v2.7.7...v2.7.8) (2020-08-11)

### Bug Fixes

- **wechat:** 微信增加 onShareTimeline 生命周期 ([3e5f3cb](https://github.com/remaxjs/remax/commit/3e5f3cb0be474cee2d577f024ae7be100c8456c4))
- 修复 WebStrom 中组件不自动提示属性的问题 ([#1203](https://github.com/remaxjs/remax/issues/1203)) ([b3b7a8b](https://github.com/remaxjs/remax/commit/b3b7a8b8202c880e9b6efa307a678991d0cccc74))
- 修复样式会被重复打包的问题 ([#1214](https://github.com/remaxjs/remax/issues/1214)) ([7c7e065](https://github.com/remaxjs/remax/commit/7c7e065b315d82e765a8e015a13f2ae54b2ff49a))

## [2.7.7](https://github.com/remaxjs/remax/compare/v2.7.6...v2.7.7) (2020-07-29)

### Bug Fixes

- **one:** 修复事件对象没有 nativeEvent 的问题 ([#1199](https://github.com/remaxjs/remax/issues/1199)) ([a7308c3](https://github.com/remaxjs/remax/commit/a7308c37ffdbc523dc2d710f9b0463c6ea390142))
- 修复入口文件使用平台扩展名时生成的模板名错误的问题 ([#1198](https://github.com/remaxjs/remax/issues/1198)) ([bdf4a67](https://github.com/remaxjs/remax/commit/bdf4a67e61469e95181e3b21f9ff3e396fb92a4f))

## [2.7.6](https://github.com/remaxjs/remax/compare/v2.7.5...v2.7.6) (2020-07-28)

### Bug Fixes

- 修复入口文件无法按平台扩展名加载的问题 ([#1197](https://github.com/remaxjs/remax/issues/1197)) ([623b8f4](https://github.com/remaxjs/remax/commit/623b8f42082781ef33f5a764bdc8917d07c8a983))

## [2.7.5](https://github.com/remaxjs/remax/compare/v2.7.4...v2.7.5) (2020-07-28)

### Bug Fixes

- 修复 stopPropagation 有可能导致方法不再触发的问题 ([1d6f961](https://github.com/remaxjs/remax/commit/1d6f9618d5cd5a31559d832f2cbd4d51a16ec0a1))
- 修复阿里小程序无法链接 React Devtools 的问题 ([#1188](https://github.com/remaxjs/remax/issues/1188)) ([21c5fd0](https://github.com/remaxjs/remax/commit/21c5fd0b5253a17f3ea99efa96f6380dbf395710))

## [2.7.4](https://github.com/remaxjs/remax/compare/v2.7.3...v2.7.4) (2020-07-25)

### Bug Fixes

- **toutiao:** 修复 Picker 组件 mode 属性不生效的问题 ([#1180](https://github.com/remaxjs/remax/issues/1180)) ([009bd6d](https://github.com/remaxjs/remax/commit/009bd6da55fb6c251b63bde8713cf065683fef5b))
- 修复 config 中分包配置类型缺失的问题 ([06af55c](https://github.com/remaxjs/remax/commit/06af55cd684f7dd2c9be78d0de1d9669d5d86b1a))
- 修复 Picker 组件缺失 onClick 和 onTap 事件 ([#1170](https://github.com/remaxjs/remax/issues/1170)) ([d6c4d4a](https://github.com/remaxjs/remax/commit/d6c4d4af02da276dbbbf9a8a74c91cb1128cf70b))
- **ali:** 修复 MovableArea 的类型错误 ([65c2b92](https://github.com/remaxjs/remax/commit/65c2b922fb47f7d0f4b73fbbdfd550189cdb01a0))

## [2.7.3](https://github.com/remaxjs/remax/compare/v2.7.2...v2.7.3) (2020-07-17)

### Bug Fixes

- **ali:** 修复 Text 组件的 decode 属性不生效的问题 ([#1167](https://github.com/remaxjs/remax/issues/1167)) ([a9e9bff](https://github.com/remaxjs/remax/commit/a9e9bffdce51f15054a05e0f1400307f7db5d428))

## [2.7.2](https://github.com/remaxjs/remax/compare/v2.7.1...v2.7.2) (2020-07-16)

### Bug Fixes

- 修复 babel.config.js 中配置的插件会执行两次的问题 ([#1164](https://github.com/remaxjs/remax/issues/1164)) ([a308524](https://github.com/remaxjs/remax/commit/a30852432603cd99138ef41c48bea372659b0014))
- 修复 turboPages 模式使用 Fragment 可能死循环的问题 ([#1161](https://github.com/remaxjs/remax/issues/1161)) ([ee897e8](https://github.com/remaxjs/remax/commit/ee897e856fc83b61cd5c24aee5f65b14d84e14bb))
- **web:** 修复 onLoad 和 onShow 事件不触发的问题 ([f871ae1](https://github.com/remaxjs/remax/commit/f871ae190c2244c1596211536adae46eb070da5d))

## [2.7.1](https://github.com/remaxjs/remax/compare/v2.7.0...v2.7.1) (2020-07-14)

### Bug Fixes

- **ali:** 修复 Button onError 属性不生效的问题 ([2464c90](https://github.com/remaxjs/remax/commit/2464c905df1d79fde795709d0abe04359c9a180c))

# [2.7.0](https://github.com/remaxjs/remax/compare/v2.6.0...v2.7.0) (2020-07-09)

### Bug Fixes

- 修复 devServer 配置无法定制的问题 ([f856852](https://github.com/remaxjs/remax/commit/f8568522267a224a6a0cf04bede1a79bd629b86b)), closes [#1116](https://github.com/remaxjs/remax/issues/1116)
- 修复 externals 配置可能被覆盖的问题 ([2dbc4a8](https://github.com/remaxjs/remax/commit/2dbc4a8854d2b4b366b02b5b8e46af7281a836e1))
- **ali:** 修复 Video 组件 style, posterSize 属性不生效的问题 ([4120ea8](https://github.com/remaxjs/remax/commit/4120ea8e612988e20efc108c7869e1c2ffe256c4))
- **wechat:** view 支持 catchTouchMove 事件 ([#1105](https://github.com/remaxjs/remax/issues/1105)) ([901cc2d](https://github.com/remaxjs/remax/commit/901cc2d63396d373d35c2bdd17fecccb81f94703))
- 修复 onClick 和 onTouchStart 阻止冒泡会互相影响的问题 ([be9af42](https://github.com/remaxjs/remax/commit/be9af42d9a19866afcf613af11dbdf8502089744))
- 修复开启 REMAX_DEBUG 后显示 ejs debug 信息的问题 ([#1141](https://github.com/remaxjs/remax/issues/1141)) ([9ce6352](https://github.com/remaxjs/remax/commit/9ce635207a2866d46b74a308397300da1d1f0579))
- 修复页面 onLoad 事件缺少 query 参数的问题 ([#1134](https://github.com/remaxjs/remax/issues/1134)) ([a7547c1](https://github.com/remaxjs/remax/commit/a7547c182f0cf31719c27d539a115616b19d075f))

### Features

- web 端支持自定义模板 ([#1115](https://github.com/remaxjs/remax/issues/1115)) ([c602637](https://github.com/remaxjs/remax/commit/c6026378093bc2bf31aaa69e421ff4e136009d05))
- 新增 Modal 组件 ([#1133](https://github.com/remaxjs/remax/issues/1133)) ([4c801d4](https://github.com/remaxjs/remax/commit/4c801d4ad239c1eee8c7b073cf506c44cb3e0bb5))

# [2.6.0](https://github.com/remaxjs/remax/compare/v2.5.5...v2.6.0) (2020-07-03)

### Bug Fixes

- **ali:** Video 组件支持 enableNative 属性 ([0398f49](https://github.com/remaxjs/remax/commit/0398f495cf0d6deb072df91a00d5d7ac531ecc34))
- **ali:** 补充 Video objectFill 属性 type 定义 ([d965f42](https://github.com/remaxjs/remax/commit/d965f428c65c40356cd80cfc0d74173385bc108f))
- **one:** 修复 TouchEvent stopPropagation 属性 ([2fb2c0f](https://github.com/remaxjs/remax/commit/2fb2c0fca0f8102948ab315c23fa1d54994434fa)), closes [#1101](https://github.com/remaxjs/remax/issues/1101)
- **toutiao:** 修复部分组件缺少默认值的问题 ([#1128](https://github.com/remaxjs/remax/issues/1128)) ([cc00bb3](https://github.com/remaxjs/remax/commit/cc00bb32f43f3fbb614681869bd1b2a7ddd85dee))
- **web:** web 端函数组件缺少 ref forward ([#1124](https://github.com/remaxjs/remax/issues/1124)) ([990cde6](https://github.com/remaxjs/remax/commit/990cde64ce936300eebc004196d85c3046865d49))
- **web:** 修复 web 下 useQuery 无法获取到参数的问题 ([c6e6b75](https://github.com/remaxjs/remax/commit/c6e6b7516a14c88ddc326f167a932befd18c720e)), closes [#1112](https://github.com/remaxjs/remax/issues/1112)
- **web:** 修复样式加载顺序问题 ([#1129](https://github.com/remaxjs/remax/issues/1129)) ([af8db50](https://github.com/remaxjs/remax/commit/af8db5035567ed41a5e5eca4996aac9cfe0d5d27))
- **web:** 修复页面组件无法获取 props.location.query 的问题 ([#1132](https://github.com/remaxjs/remax/issues/1132)) ([7422aff](https://github.com/remaxjs/remax/commit/7422affac4e3b5f334c768e29645ba25efd008e7))
- 修复 React Devtools 会监听所有 WebSocket 链接的问题 ([#1119](https://github.com/remaxjs/remax/issues/1119)) ([875182d](https://github.com/remaxjs/remax/commit/875182d98ee35d988ccc4899d47e9f2ca83a554a))
- 补全 useAppEvent usePageEvent 类型 ([#1120](https://github.com/remaxjs/remax/issues/1120)) ([91096a4](https://github.com/remaxjs/remax/commit/91096a45dba6fe5e9cfc406404a474f3c2967017))

### Features

- **cli:** 开发模式下支持压缩文件 ([#1102](https://github.com/remaxjs/remax/issues/1102)) ([167bba6](https://github.com/remaxjs/remax/commit/167bba6e0b98d2500e582b919f92aaca19420bca))

## [2.5.5](https://github.com/remaxjs/remax/compare/v2.5.4...v2.5.5) (2020-06-18)

### Bug Fixes

- **wechat:** 修复条件渲染错误 ([#1100](https://github.com/remaxjs/remax/issues/1100)) ([a204ec7](https://github.com/remaxjs/remax/commit/a204ec7dd3ade1b6b97cd834f018fafa67ec960a)), closes [#1096](https://github.com/remaxjs/remax/issues/1096) [#1099](https://github.com/remaxjs/remax/issues/1099)

## [2.5.4](https://github.com/remaxjs/remax/compare/v2.5.3...v2.5.4) (2020-06-18)

### Bug Fixes

- 修复部分自定义 babel 插件不生效的问题 ([#1097](https://github.com/remaxjs/remax/issues/1097)) ([b72d1ad](https://github.com/remaxjs/remax/commit/b72d1ad5e3da497fa3c4884f0b005d1b4c5333ce)), closes [#1094](https://github.com/remaxjs/remax/issues/1094)
- **ali:** 修复 Swiper[style] 类型 ([4397e4e](https://github.com/remaxjs/remax/commit/4397e4e700141c97284a04d3142eb10696b31f82))
- **ali:** 修复 Video 组件缺少 className 属性的类型定义 ([9c927d1](https://github.com/remaxjs/remax/commit/9c927d1a805012e75fce810e8615207e1112e08d))

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
