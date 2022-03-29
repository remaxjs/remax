# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.15.13](https://github.com/remaxjs/remax/compare/v2.15.12...v2.15.13) (2022-03-29)

**Note:** Version bump only for package @remax/cli

## [2.15.12](https://github.com/remaxjs/remax/compare/v2.15.11...v2.15.12) (2022-01-11)

**Note:** Version bump only for package @remax/cli

## [2.15.11](https://github.com/remaxjs/remax/compare/v2.15.10...v2.15.11) (2022-01-05)

### Bug Fixes

- 去掉 Babel 缓存 ([#1812](https://github.com/remaxjs/remax/issues/1812)) ([159ae6d](https://github.com/remaxjs/remax/commit/159ae6dc28436f768d0120d39585d59558fe3d5f))

## [2.15.10](https://github.com/remaxjs/remax/compare/v2.15.9...v2.15.10) (2021-12-18)

### Bug Fixes

- **toutiao:** 新增 MovableArea/MovableView 组件 ([18fffef](https://github.com/remaxjs/remax/commit/18fffef670cc4dbe6d3d0ea532fb944cc4f4adf7))
- **wechat:** 新增 MovableView 和 Slider 的 onTouchStart 和 onTouchEnd 事件([#1790](https://github.com/remaxjs/remax/issues/1790)) ([0748bff](https://github.com/remaxjs/remax/commit/0748bff988840d83ed44c192255f6ad6e49790eb)), closes [#1468](https://github.com/remaxjs/remax/issues/1468)

### Performance Improvements

- **cli:** 开启 babel-loader 缓存，优化编译速度 ([#1789](https://github.com/remaxjs/remax/issues/1789)) ([2f41917](https://github.com/remaxjs/remax/commit/2f41917004b9f5e0875e077edd8e4a387f0e4ef9))

## [2.15.9](https://github.com/remaxjs/remax/compare/v2.15.7...v2.15.9) (2021-12-06)

### Features

- 增加 hook unstable_onEntries, 允许修改 entry 的路径 ([6dc51d7](https://github.com/remaxjs/remax/commit/6dc51d7076d3ac5c97d66770f1e142ddcd7de09a))
- 增加 hook unstable_onEntries, 允许修改 entry 的路径 ([14d4b95](https://github.com/remaxjs/remax/commit/14d4b95d916a55e4ecbe5fbda933bbc57018d7df))

## [2.15.8](https://github.com/remaxjs/remax/compare/v2.15.7...v2.15.8) (2021-11-23)

**Note:** Version bump only for package @remax/cli

## [2.15.7](https://github.com/remaxjs/remax/compare/v2.15.6...v2.15.7) (2021-11-17)

### Bug Fixes

- **toutiao:** 修复无法被头条小程序开发工具识别问题 ([fdc25e3](https://github.com/remaxjs/remax/commit/fdc25e3c456286764be90611a238d66067c1eddb)), closes [#1739](https://github.com/remaxjs/remax/issues/1739)

## [2.15.6](https://github.com/remaxjs/remax/compare/v2.15.5...v2.15.6) (2021-09-10)

### Reverts

- Revert "fix: 无障碍访问 api" (#1705) ([556fedb](https://github.com/remaxjs/remax/commit/556fedbd237db956a026a42590cd55aa3d6568d1)), closes [#1705](https://github.com/remaxjs/remax/issues/1705)

## [2.15.5](https://github.com/remaxjs/remax/compare/v2.15.4...v2.15.5) (2021-09-06)

### Bug Fixes

- 无障碍访问 api ([35a1af6](https://github.com/remaxjs/remax/commit/35a1af6fd57cd2ee14a96993ee8f85b44d9c7d61))

## [2.15.4](https://github.com/remaxjs/remax/compare/v2.15.3...v2.15.4) (2021-08-09)

**Note:** Version bump only for package @remax/cli

## [2.15.3](https://github.com/remaxjs/remax/compare/v2.15.2...v2.15.3) (2021-08-05)

### Features

- 支持在配置文件中写 port 来更改 web 环境启动的端口 ([15d6ddd](https://github.com/remaxjs/remax/commit/15d6ddd56faa167039656a3d78ae07bab5211575))

## [2.15.2](https://github.com/remaxjs/remax/compare/v2.15.1...v2.15.2) (2021-07-30)

### Features

- 组件构建的命令行工具 — 调整组件构建 input 的行为和 less sass 构建配置 ([9f17540](https://github.com/remaxjs/remax/commit/9f17540192386891e31e4ea27bb982581dec9b2d))

## [2.15.1](https://github.com/remaxjs/remax/compare/v2.15.0...v2.15.1) (2021-07-30)

**Note:** Version bump only for package @remax/cli

# [2.15.0](https://github.com/remaxjs/remax/compare/v2.14.1...v2.15.0) (2021-07-30)

### Bug Fixes

- 修复用例 ([d31160c](https://github.com/remaxjs/remax/commit/d31160c2494a5b3bd5572a3019166db3ea877d7e))
- 修复用例 ([6c4dd01](https://github.com/remaxjs/remax/commit/6c4dd010c63b18cc509918ed8ea98b4ab1f64ce4))

### Features

- 支持 buildMiniComponent，以 webpack 方式构建小程序自定义组件 ([e5ed805](https://github.com/remaxjs/remax/commit/e5ed805191ad08ef269e2f4fa2d7ffa8a580862a))

## [2.14.1](https://github.com/remaxjs/remax/compare/v2.14.0...v2.14.1) (2021-07-20)

### Bug Fixes

- canvas 新增 onReady 属性 ([#1650](https://github.com/remaxjs/remax/issues/1650)) ([199bbc3](https://github.com/remaxjs/remax/commit/199bbc360a4e5c7f485ac20a04001cae4557f096))
- 微信小程序 textarea 组件 disableDefaultPadding 参数不生效的问题 ([c4f721c](https://github.com/remaxjs/remax/commit/c4f721c7f81474f177353bc9f12f77eda5f69e63))

# [2.14.0](https://github.com/remaxjs/remax/compare/v2.13.6...v2.14.0) (2021-07-06)

**Note:** Version bump only for package @remax/cli

## [2.13.6](https://github.com/remaxjs/remax/compare/v2.13.5...v2.13.6) (2021-06-26)

### Bug Fixes

- 微信组件未声明模板深度导致 base.wxml 过大的问题 ([#1628](https://github.com/remaxjs/remax/issues/1628)) ([db9484e](https://github.com/remaxjs/remax/commit/db9484e02e429eab3cf53ed6a8c15a34e986fdb9))

## [2.13.5](https://github.com/remaxjs/remax/compare/v2.13.4...v2.13.5) (2021-06-22)

**Note:** Version bump only for package @remax/cli

## [2.13.4](https://github.com/remaxjs/remax/compare/v2.13.3...v2.13.4) (2021-05-31)

### Bug Fixes

- 修复 watch 模式下 app.config 配置不更新的问题 ([#1546](https://github.com/remaxjs/remax/issues/1546)) ([b0bcdc4](https://github.com/remaxjs/remax/commit/b0bcdc4c4b0fffa4e733c5ff06711435a711960d))

## [2.13.3](https://github.com/remaxjs/remax/compare/v2.13.2...v2.13.3) (2021-05-25)

**Note:** Version bump only for package @remax/cli

## [2.13.2](https://github.com/remaxjs/remax/compare/v2.13.1...v2.13.2) (2021-05-19)

### Bug Fixes

- **web:** 修复内部 css 优先级比项目 css 高的问题 ([806bed9](https://github.com/remaxjs/remax/commit/806bed9ed70fe8ec2d839c59da6003b648edb83a))
- **wechat:** 同步微信小程序组件到最新版本 ([#1576](https://github.com/remaxjs/remax/issues/1576)) ([fd47e56](https://github.com/remaxjs/remax/commit/fd47e56c7c3a995bd7aa2f336f7d30f299bc92ac))

## [2.13.1](https://github.com/remaxjs/remax/compare/v2.13.0...v2.13.1) (2021-04-22)

**Note:** Version bump only for package @remax/cli

# [2.13.0](https://github.com/remaxjs/remax/compare/v2.12.1...v2.13.0) (2021-04-19)

### Bug Fixes

- **wechat:** 修复 onShareTimeline 不工作的问题([#1521](https://github.com/remaxjs/remax/issues/1521)) ([2a45117](https://github.com/remaxjs/remax/commit/2a4511746481e386369d488ac7dc349b7769686a))
- **wechat:** 引用三方 plugin 时误报错 ([#1529](https://github.com/remaxjs/remax/issues/1529)) ([1e6af3e](https://github.com/remaxjs/remax/commit/1e6af3e43e649c6ec2e22573aab159a63393509c))
- **wechat:** 添加 Textarea 组件 confirmType、confirmHold 类型 (remaxjs[#1532](https://github.com/remaxjs/remax/issues/1532)) ([#1533](https://github.com/remaxjs/remax/issues/1533)) ([b1f8b85](https://github.com/remaxjs/remax/commit/b1f8b85b671ffcd34f65a963412a35cc3260f914))

## [2.12.1](https://github.com/remaxjs/remax/compare/v2.12.0...v2.12.1) (2021-04-09)

**Note:** Version bump only for package @remax/cli

# [2.12.0](https://github.com/remaxjs/remax/compare/v2.11.8...v2.12.0) (2021-04-07)

### Features

- support build native component in .ts and other css formats ([#1512](https://github.com/remaxjs/remax/issues/1512)) ([1778e48](https://github.com/remaxjs/remax/commit/1778e48a341b78768805ff853432d5264a04e295))

## [2.11.8](https://github.com/remaxjs/remax/compare/v2.11.7...v2.11.8) (2021-03-17)

**Note:** Version bump only for package @remax/cli

## [2.11.7](https://github.com/remaxjs/remax/compare/v2.11.6...v2.11.7) (2021-03-16)

### Bug Fixes

- **ali:** 组件 ScrollView 增加 disableLowerScroll 和 disableLowerScroll 属性 ([c5d5ee3](https://github.com/remaxjs/remax/commit/c5d5ee3046af00589067971b2011fda6c84918ee))

## [2.11.6](https://github.com/remaxjs/remax/compare/v2.11.5...v2.11.6) (2021-03-05)

### Bug Fixes

- 修复原生组件递归引用导致的死循环 ([9baf852](https://github.com/remaxjs/remax/commit/9baf85284556b3b902ef7efbb84b67a49b621056)), closes [#1490](https://github.com/remaxjs/remax/issues/1490)
- **wechat:** 修复 wxml 模板依赖查找错误的问题 ([ef5c982](https://github.com/remaxjs/remax/commit/ef5c982065e18b8f139f339ccd71d26bee537363)), closes [#1492](https://github.com/remaxjs/remax/issues/1492)

## [2.11.5](https://github.com/remaxjs/remax/compare/v2.11.4...v2.11.5) (2021-03-04)

**Note:** Version bump only for package @remax/cli

## [2.11.4](https://github.com/remaxjs/remax/compare/v2.11.3...v2.11.4) (2021-01-21)

### Bug Fixes

- 修复使用 UNSAFE_wechatTemplateDepth 配置报错的问题 ([#1474](https://github.com/remaxjs/remax/issues/1474)) ([7b1f084](https://github.com/remaxjs/remax/commit/7b1f08490eb3926db88ae1000454ca46fd69f55f))

## [2.11.3](https://github.com/remaxjs/remax/compare/v2.11.2...v2.11.3) (2020-12-31)

**Note:** Version bump only for package @remax/cli

## [2.11.2](https://github.com/remaxjs/remax/compare/v2.11.1...v2.11.2) (2020-12-17)

### Bug Fixes

- 修复 createHostComponent 无法正确注册组件的问题 ([7ca4938](https://github.com/remaxjs/remax/commit/7ca4938998450ba1a1d5d61955ff37628fd2cd28))

## [2.11.1](https://github.com/remaxjs/remax/compare/v2.11.0...v2.11.1) (2020-12-17)

**Note:** Version bump only for package @remax/cli

# [2.11.0](https://github.com/remaxjs/remax/compare/v2.10.1...v2.11.0) (2020-12-14)

### Features

- build cli 增加 --loglevel 参数 ([#1435](https://github.com/remaxjs/remax/issues/1435)) ([a207091](https://github.com/remaxjs/remax/commit/a20709168f4a30dec5e4b759421503baddc6b18f))

## [2.10.1](https://github.com/remaxjs/remax/compare/v2.10.0...v2.10.1) (2020-12-06)

### Bug Fixes

- **wechat:** 修复具名 slot 不生效的问题 ([6da0267](https://github.com/remaxjs/remax/commit/6da02673cf71d23d286037ab84ac4f898059f4ce)), closes [#1406](https://github.com/remaxjs/remax/issues/1406)
- 修复 onShareAppMessage 和 onPageScroll 无效的问题 ([6376d04](https://github.com/remaxjs/remax/commit/6376d04014e4872dfdc8e7c56ae024d450b6b645)), closes [#1413](https://github.com/remaxjs/remax/issues/1413)

# [2.10.0](https://github.com/remaxjs/remax/compare/v2.9.5...v2.10.0) (2020-12-04)

### Bug Fixes

- **ali:** 修复 Button[style] 不生效的问题 ([2460961](https://github.com/remaxjs/remax/commit/24609614520c55077fa03ce7989e7135f1d9403d))
- 修复生产环境下未禁用 react-devtools 的问题 ([#1411](https://github.com/remaxjs/remax/issues/1411)) ([a01ccde](https://github.com/remaxjs/remax/commit/a01ccdebfc3d2ecb104f3ecc532e4b60ff2eb0c0)), closes [#1408](https://github.com/remaxjs/remax/issues/1408)

## [2.9.5](https://github.com/remaxjs/remax/compare/v2.9.4...v2.9.5) (2020-12-01)

**Note:** Version bump only for package @remax/cli

## [2.9.4](https://github.com/remaxjs/remax/compare/v2.9.3...v2.9.4) (2020-11-30)

**Note:** Version bump only for package @remax/cli

## [2.9.3](https://github.com/remaxjs/remax/compare/v2.9.2...v2.9.3) (2020-11-30)

**Note:** Version bump only for package @remax/cli

## [2.9.2](https://github.com/remaxjs/remax/compare/v2.9.1...v2.9.2) (2020-11-28)

### Bug Fixes

- 修复 React Devtools 失效的问题 ([86360e2](https://github.com/remaxjs/remax/commit/86360e2299172431ea88b51c7b25d2cb811d0b6a)), closes [#1392](https://github.com/remaxjs/remax/issues/1392)

## [2.9.1](https://github.com/remaxjs/remax/compare/v2.9.0...v2.9.1) (2020-11-27)

### Bug Fixes

- **web:** 修复生成环境找不到 React 的问题 ([da2a136](https://github.com/remaxjs/remax/commit/da2a13634d04e591b014a0ac14aaf935e24cc1de)), closes [#1383](https://github.com/remaxjs/remax/issues/1383)
- 修复单页应用进首页会加载全部资源文件 ([bb4a0f5](https://github.com/remaxjs/remax/commit/bb4a0f5e4b44b9dd1068dddc5887213174e35de9))
- 修复构建配置路径不一致的问题 ([#1379](https://github.com/remaxjs/remax/issues/1379)) ([6c92ff7](https://github.com/remaxjs/remax/commit/6c92ff7163cd166ee46cb179ebf2b8909da068bb))
- 兼容遗留的 one 配置 ([#1381](https://github.com/remaxjs/remax/issues/1381)) ([b260253](https://github.com/remaxjs/remax/commit/b26025352572f21e75091f22b15f085f007becab)), closes [#1380](https://github.com/remaxjs/remax/issues/1380)
- 去掉关闭 pxToRpx 时出现的 postcss 警告 ([7f271ff](https://github.com/remaxjs/remax/commit/7f271ff14c66b71d1e82fd02ba7a262a2cece53d)), closes [#1377](https://github.com/remaxjs/remax/issues/1377)

# [2.9.0](https://github.com/remaxjs/remax/compare/v2.8.10...v2.9.0) (2020-11-24)

### Features

- 一大波更新 ([#1366](https://github.com/remaxjs/remax/issues/1366)) ([45dab88](https://github.com/remaxjs/remax/commit/45dab88561bdbd1296ec4204aec572d00e46b1b4)), closes [#1153](https://github.com/remaxjs/remax/issues/1153) [#705](https://github.com/remaxjs/remax/issues/705) [#1077](https://github.com/remaxjs/remax/issues/1077)

## [2.8.10](https://github.com/remaxjs/remax/compare/v2.8.9...v2.8.10) (2020-11-20)

**Note:** Version bump only for package @remax/cli

## [2.8.9](https://github.com/remaxjs/remax/compare/v2.8.8...v2.8.9) (2020-11-19)

### Bug Fixes

- **wechat:** 修复 SwiperItem[className]不生效的问题 ([#1371](https://github.com/remaxjs/remax/issues/1371)) ([977704c](https://github.com/remaxjs/remax/commit/977704cd183d084931568b81b156e320e72cc2b0))

## [2.8.8](https://github.com/remaxjs/remax/compare/v2.8.7...v2.8.8) (2020-11-13)

**Note:** Version bump only for package @remax/cli

## [2.8.7](https://github.com/remaxjs/remax/compare/v2.8.6...v2.8.7) (2020-11-12)

**Note:** Version bump only for package @remax/cli

## [2.8.6](https://github.com/remaxjs/remax/compare/v2.8.5...v2.8.6) (2020-11-04)

### Bug Fixes

- 修复 configWebpack 无法修改 plugins 里配置的问题 ([#1356](https://github.com/remaxjs/remax/issues/1356)) ([6308a8e](https://github.com/remaxjs/remax/commit/6308a8eed0122c6046fe0865b14a8c5121874380))

## [2.8.5](https://github.com/remaxjs/remax/compare/v2.8.4...v2.8.5) (2020-10-23)

**Note:** Version bump only for package @remax/cli

## [2.8.4](https://github.com/remaxjs/remax/compare/v2.8.3...v2.8.4) (2020-10-14)

**Note:** Version bump only for package @remax/cli

## [2.8.3](https://github.com/remaxjs/remax/compare/v2.8.2...v2.8.3) (2020-09-28)

**Note:** Version bump only for package @remax/cli

## [2.8.2](https://github.com/remaxjs/remax/compare/v2.8.1...v2.8.2) (2020-09-18)

### Bug Fixes

- **wechat:** 微信 Button 组件支持 QQ 小程序新增参数 ([#1297](https://github.com/remaxjs/remax/issues/1297)) ([1d9a839](https://github.com/remaxjs/remax/commit/1d9a8396b4c967e7474d9e3d6735e195e570f088))

## [2.8.1](https://github.com/remaxjs/remax/compare/v2.8.0...v2.8.1) (2020-09-16)

**Note:** Version bump only for package @remax/cli

# [2.8.0](https://github.com/remaxjs/remax/compare/v2.7.10...v2.8.0) (2020-09-15)

**Note:** Version bump only for package @remax/cli

## [2.7.10](https://github.com/remaxjs/remax/compare/v2.7.9...v2.7.10) (2020-09-11)

### Bug Fixes

- **web:** 修复开发模式下 browser history 不能直接打开路由的问题 ([1d6a910](https://github.com/remaxjs/remax/commit/1d6a910f7859f966824433ba6100773edccc7841))

## [2.7.9](https://github.com/remaxjs/remax/compare/v2.7.8...v2.7.9) (2020-09-10)

### Bug Fixes

- 允许使用 Page 命名页面组件 ([#1273](https://github.com/remaxjs/remax/issues/1273)) ([bfa8032](https://github.com/remaxjs/remax/commit/bfa8032a5f62ad7bc6f82fce7096009a917be727)), closes [#1262](https://github.com/remaxjs/remax/issues/1262)

## [2.7.8](https://github.com/remaxjs/remax/compare/v2.7.7...v2.7.8) (2020-08-11)

### Bug Fixes

- **wechat:** 微信增加 onShareTimeline 生命周期 ([3e5f3cb](https://github.com/remaxjs/remax/commit/3e5f3cb0be474cee2d577f024ae7be100c8456c4))
- 修复样式会被重复打包的问题 ([#1214](https://github.com/remaxjs/remax/issues/1214)) ([7c7e065](https://github.com/remaxjs/remax/commit/7c7e065b315d82e765a8e015a13f2ae54b2ff49a))

## [2.7.7](https://github.com/remaxjs/remax/compare/v2.7.6...v2.7.7) (2020-07-29)

### Bug Fixes

- 修复入口文件使用平台扩展名时生成的模板名错误的问题 ([#1198](https://github.com/remaxjs/remax/issues/1198)) ([bdf4a67](https://github.com/remaxjs/remax/commit/bdf4a67e61469e95181e3b21f9ff3e396fb92a4f))

## [2.7.6](https://github.com/remaxjs/remax/compare/v2.7.5...v2.7.6) (2020-07-28)

### Bug Fixes

- 修复入口文件无法按平台扩展名加载的问题 ([#1197](https://github.com/remaxjs/remax/issues/1197)) ([623b8f4](https://github.com/remaxjs/remax/commit/623b8f42082781ef33f5a764bdc8917d07c8a983))

## [2.7.5](https://github.com/remaxjs/remax/compare/v2.7.4...v2.7.5) (2020-07-28)

**Note:** Version bump only for package @remax/cli

## [2.7.4](https://github.com/remaxjs/remax/compare/v2.7.3...v2.7.4) (2020-07-25)

### Bug Fixes

- **toutiao:** 修复 Picker 组件 mode 属性不生效的问题 ([#1180](https://github.com/remaxjs/remax/issues/1180)) ([009bd6d](https://github.com/remaxjs/remax/commit/009bd6da55fb6c251b63bde8713cf065683fef5b))
- 修复 Picker 组件缺失 onClick 和 onTap 事件 ([#1170](https://github.com/remaxjs/remax/issues/1170)) ([d6c4d4a](https://github.com/remaxjs/remax/commit/d6c4d4af02da276dbbbf9a8a74c91cb1128cf70b))

## [2.7.3](https://github.com/remaxjs/remax/compare/v2.7.2...v2.7.3) (2020-07-17)

### Bug Fixes

- **ali:** 修复 Text 组件的 decode 属性不生效的问题 ([#1167](https://github.com/remaxjs/remax/issues/1167)) ([a9e9bff](https://github.com/remaxjs/remax/commit/a9e9bffdce51f15054a05e0f1400307f7db5d428))

## [2.7.2](https://github.com/remaxjs/remax/compare/v2.7.1...v2.7.2) (2020-07-16)

### Bug Fixes

- 修复 babel.config.js 中配置的插件会执行两次的问题 ([#1164](https://github.com/remaxjs/remax/issues/1164)) ([a308524](https://github.com/remaxjs/remax/commit/a30852432603cd99138ef41c48bea372659b0014))
- 修复 turboPages 模式使用 Fragment 可能死循环的问题 ([#1161](https://github.com/remaxjs/remax/issues/1161)) ([ee897e8](https://github.com/remaxjs/remax/commit/ee897e856fc83b61cd5c24aee5f65b14d84e14bb))

## [2.7.1](https://github.com/remaxjs/remax/compare/v2.7.0...v2.7.1) (2020-07-14)

### Bug Fixes

- **ali:** 修复 Button onError 属性不生效的问题 ([2464c90](https://github.com/remaxjs/remax/commit/2464c905df1d79fde795709d0abe04359c9a180c))

# [2.7.0](https://github.com/remaxjs/remax/compare/v2.6.0...v2.7.0) (2020-07-09)

### Bug Fixes

- 修复 devServer 配置无法定制的问题 ([f856852](https://github.com/remaxjs/remax/commit/f8568522267a224a6a0cf04bede1a79bd629b86b)), closes [#1116](https://github.com/remaxjs/remax/issues/1116)
- 修复 externals 配置可能被覆盖的问题 ([2dbc4a8](https://github.com/remaxjs/remax/commit/2dbc4a8854d2b4b366b02b5b8e46af7281a836e1))
- **ali:** 修复 Video 组件 style, posterSize 属性不生效的问题 ([4120ea8](https://github.com/remaxjs/remax/commit/4120ea8e612988e20efc108c7869e1c2ffe256c4))
- **wechat:** view 支持 catchTouchMove 事件 ([#1105](https://github.com/remaxjs/remax/issues/1105)) ([901cc2d](https://github.com/remaxjs/remax/commit/901cc2d63396d373d35c2bdd17fecccb81f94703))
- 修复开启 REMAX_DEBUG 后显示 ejs debug 信息的问题 ([#1141](https://github.com/remaxjs/remax/issues/1141)) ([9ce6352](https://github.com/remaxjs/remax/commit/9ce635207a2866d46b74a308397300da1d1f0579))

### Features

- web 端支持自定义模板 ([#1115](https://github.com/remaxjs/remax/issues/1115)) ([c602637](https://github.com/remaxjs/remax/commit/c6026378093bc2bf31aaa69e421ff4e136009d05))
- 新增 Modal 组件 ([#1133](https://github.com/remaxjs/remax/issues/1133)) ([4c801d4](https://github.com/remaxjs/remax/commit/4c801d4ad239c1eee8c7b073cf506c44cb3e0bb5))

# [2.6.0](https://github.com/remaxjs/remax/compare/v2.5.5...v2.6.0) (2020-07-03)

### Bug Fixes

- **ali:** Video 组件支持 enableNative 属性 ([0398f49](https://github.com/remaxjs/remax/commit/0398f495cf0d6deb072df91a00d5d7ac531ecc34))
- **toutiao:** 修复部分组件缺少默认值的问题 ([#1128](https://github.com/remaxjs/remax/issues/1128)) ([cc00bb3](https://github.com/remaxjs/remax/commit/cc00bb32f43f3fbb614681869bd1b2a7ddd85dee))
- **web:** 修复 web 下 useQuery 无法获取到参数的问题 ([c6e6b75](https://github.com/remaxjs/remax/commit/c6e6b7516a14c88ddc326f167a932befd18c720e)), closes [#1112](https://github.com/remaxjs/remax/issues/1112)
- **web:** 修复样式加载顺序问题 ([#1129](https://github.com/remaxjs/remax/issues/1129)) ([af8db50](https://github.com/remaxjs/remax/commit/af8db5035567ed41a5e5eca4996aac9cfe0d5d27))

### Features

- **cli:** 开发模式下支持压缩文件 ([#1102](https://github.com/remaxjs/remax/issues/1102)) ([167bba6](https://github.com/remaxjs/remax/commit/167bba6e0b98d2500e582b919f92aaca19420bca))

## [2.5.5](https://github.com/remaxjs/remax/compare/v2.5.4...v2.5.5) (2020-06-18)

### Bug Fixes

- **wechat:** 修复条件渲染错误 ([#1100](https://github.com/remaxjs/remax/issues/1100)) ([a204ec7](https://github.com/remaxjs/remax/commit/a204ec7dd3ade1b6b97cd834f018fafa67ec960a)), closes [#1096](https://github.com/remaxjs/remax/issues/1096) [#1099](https://github.com/remaxjs/remax/issues/1099)

## [2.5.4](https://github.com/remaxjs/remax/compare/v2.5.3...v2.5.4) (2020-06-18)

### Bug Fixes

- 修复部分自定义 babel 插件不生效的问题 ([#1097](https://github.com/remaxjs/remax/issues/1097)) ([b72d1ad](https://github.com/remaxjs/remax/commit/b72d1ad5e3da497fa3c4884f0b005d1b4c5333ce)), closes [#1094](https://github.com/remaxjs/remax/issues/1094)

## [2.5.3](https://github.com/remaxjs/remax/compare/v2.5.2...v2.5.3) (2020-06-17)

### Bug Fixes

- **web:** 修复 React DevTools 引起的运行错误 ([15cf022](https://github.com/remaxjs/remax/commit/15cf02269024fa6f3480c295de2ad99618168443))

## [2.5.2](https://github.com/remaxjs/remax/compare/v2.5.1...v2.5.2) (2020-06-16)

### Bug Fixes

- **ali:** 修复条件渲染 JSX 可能导致报错的问题 ([#1092](https://github.com/remaxjs/remax/issues/1092)) ([309bc5b](https://github.com/remaxjs/remax/commit/309bc5b22c08679f1a159cd2fb53644f8a42da15))

## [2.5.1](https://github.com/remaxjs/remax/compare/v2.5.0...v2.5.1) (2020-06-16)

### Bug Fixes

- **ali:** 修复 MovableView 缺失的属性 ([#1089](https://github.com/remaxjs/remax/issues/1089)) ([d54847d](https://github.com/remaxjs/remax/commit/d54847d6af4deb1d5e6a271ae5a5d171cca51f58))

# [2.5.0](https://github.com/remaxjs/remax/compare/v2.4.1...v2.5.0) (2020-06-15)

### Bug Fixes

- **ali:** 修复 Textarea[enableNative] 不生效的问题 ([7724528](https://github.com/remaxjs/remax/commit/77245283adb1662330647250b1eb27bcc724d3db))
- **cli:** 修复 notify 命令不生效的问题 ([#1071](https://github.com/remaxjs/remax/issues/1071)) ([e229c48](https://github.com/remaxjs/remax/commit/e229c48b624deb95c54ced5fad9ce4f61b381663))
- **wechat:** 修复更新已删除的节点导致报错的问题 ([#1078](https://github.com/remaxjs/remax/issues/1078)) ([84f45fa](https://github.com/remaxjs/remax/commit/84f45fab73a1fd86326bd52806a465e6c96a00ef)), closes [#1065](https://github.com/remaxjs/remax/issues/1065)

### Features

- 支持 React DevTools ([#994](https://github.com/remaxjs/remax/issues/994)) ([396b326](https://github.com/remaxjs/remax/commit/396b3269d05f4d3218c3c3637d2aaaca03a5673c))
- **remax:** onTouchStart onTouchMove onTouchEnd 支持阻止冒泡 ([#1072](https://github.com/remaxjs/remax/issues/1072)) ([5a532c1](https://github.com/remaxjs/remax/commit/5a532c1935e900e8a86e288077d92338a46832f5)), closes [#1068](https://github.com/remaxjs/remax/issues/1068)

## [2.4.1](https://github.com/remaxjs/remax/compare/v2.4.0...v2.4.1) (2020-06-10)

### Bug Fixes

- 修复 style 属性为 null 时报错的问题 ([#1066](https://github.com/remaxjs/remax/issues/1066)) ([ff83df3](https://github.com/remaxjs/remax/commit/ff83df3b1761eeb779f50eaea5d3df6f931bae53)), closes [#1065](https://github.com/remaxjs/remax/issues/1065)

# [2.4.0](https://github.com/remaxjs/remax/compare/v2.3.0...v2.4.0) (2020-06-05)

### Bug Fixes

- 修正生成的模板中会带有页面没用到的小程序自定义组件的问题 ([#1043](https://github.com/remaxjs/remax/issues/1043)) ([c300c33](https://github.com/remaxjs/remax/commit/c300c3307ea41c0cff662922fec12391eac2cb79))
- **wechat:** 修复 Map 组件 polygons 属性不生效的问题 ([#1038](https://github.com/remaxjs/remax/issues/1038)) ([48487b2](https://github.com/remaxjs/remax/commit/48487b21f94be6d73c02a91847d9a4e46d476bb8)), closes [#1035](https://github.com/remaxjs/remax/issues/1035)

### Features

- **cli:** 新增 -a 参数用于分析构建后的包依赖 ([#1014](https://github.com/remaxjs/remax/issues/1014)) ([97759d1](https://github.com/remaxjs/remax/commit/97759d1b107e7e7be392b5a703fe329f97cf4081)), closes [#958](https://github.com/remaxjs/remax/issues/958)

# [2.3.0](https://github.com/remaxjs/remax/compare/v2.2.0...v2.3.0) (2020-06-04)

### Bug Fixes

- 修复 ES Module 的运行时插件无法注册的问题 ([8e73f1d](https://github.com/remaxjs/remax/commit/8e73f1d5fcc2dc2f1ee2bc9ad9caa5a992c99c5a))

### Features

- 插件支持编译时的 onAppConfig 和 onPageConfig hook ([#1015](https://github.com/remaxjs/remax/issues/1015)) ([9ee59be](https://github.com/remaxjs/remax/commit/9ee59beb37422049e87bdbaf8e3431c3a6a7f762))
- 支持 onLoad 和 unload 生命周期 ([4bfc325](https://github.com/remaxjs/remax/commit/4bfc325ec627cc75bcbe8e6524368d8a93ac8674))
- 支持 public 目录 ([#1016](https://github.com/remaxjs/remax/issues/1016)) ([0ed6caf](https://github.com/remaxjs/remax/commit/0ed6caf64a58b15d2e3330d8a8de7cf3eddb63d5))

### Performance Improvements

- **remax:** 避免更新没有变化的属性 ([#989](https://github.com/remaxjs/remax/issues/989)) ([4709bda](https://github.com/remaxjs/remax/commit/4709bda754bd4d042d6259aff9ab074ed34f8ad8))

# [2.2.0](https://github.com/remaxjs/remax/compare/v2.1.1...v2.2.0) (2020-05-29)

### Bug Fixes

- **cli:** 修复 watch 模式自定义 cwd 导致编译两次的问题 ([#1008](https://github.com/remaxjs/remax/issues/1008)) ([c14e111](https://github.com/remaxjs/remax/commit/c14e111b1b18299f36a9e95fa43386944e05b7dd))

### Features

- 小程序端支持 suspense ([#995](https://github.com/remaxjs/remax/issues/995)) ([aa23f14](https://github.com/remaxjs/remax/commit/aa23f14fa2836b76d43b50c73f0655011a41a403))
- 支持运行时插件 ([#988](https://github.com/remaxjs/remax/issues/988)) ([3a59fff](https://github.com/remaxjs/remax/commit/3a59fff8efc6de0a163715762cfb2f3e179fe443)), closes [#983](https://github.com/remaxjs/remax/issues/983)

## [2.1.1](https://github.com/remaxjs/remax/compare/v2.1.0...v2.1.1) (2020-05-21)

### Bug Fixes

- **ali:** 修正 Button[onGetAuthorize] 不生效的问题 ([2c3d27e](https://github.com/remaxjs/remax/commit/2c3d27e5a744fb6f80362b6a891c58c1dcfde7e6))
- 修复表单类组件 name 属性不生效的问题 ([#981](https://github.com/remaxjs/remax/issues/981)) ([07d0a22](https://github.com/remaxjs/remax/commit/07d0a22ef3b27a5297ddef87e7372f75fb922bf0))

# [2.1.0](https://github.com/remaxjs/remax/compare/v2.0.7...v2.1.0) (2020-05-21)

### Bug Fixes

- 修正错误的 webpack mode ([f46dd92](https://github.com/remaxjs/remax/commit/f46dd926f08eb2f3f43326f35768efa8cf1be794))
- 添加 port 至 options 并增加默认值：3000 ([ec7b67e](https://github.com/remaxjs/remax/commit/ec7b67ee4f0dd31434795d9d7526b6435298c576))
- 移除 options 中的 default，在运行时动态判断以避免 CI 错误 ([6bec914](https://github.com/remaxjs/remax/commit/6bec914249dbcaba71c7fde5f0c984163a412fd9))

### Features

- configWebpack 新增 addCSSRule 帮助方法 ([aaf6a88](https://github.com/remaxjs/remax/commit/aaf6a885bc0dcd20f1cd3c5a182fb14a5d497aa1))
- 支持通过 --port 指定端口号 ([fb2a78f](https://github.com/remaxjs/remax/commit/fb2a78fc43c758876e7e69fb5c4d441c195a007b))

## [2.0.7](https://github.com/remaxjs/remax/compare/v2.0.6...v2.0.7) (2020-05-14)

### Bug Fixes

- 修正配置文件的 watch ([#951](https://github.com/remaxjs/remax/issues/951)) ([2540706](https://github.com/remaxjs/remax/commit/254070694453fd31c9c42f7c43269a68f7589039))

## [2.0.6](https://github.com/remaxjs/remax/compare/v2.0.5...v2.0.6) (2020-05-13)

### Bug Fixes

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
- 修复无法解析字体文件的问题 ([9a325d6](https://github.com/remaxjs/remax/commit/9a325d62ecbbdf6354e5d5dfc0120953e0846f89))
- 修复部分 App 生命周期不生效的问题 ([#898](https://github.com/remaxjs/remax/issues/898)) ([e6c6bf1](https://github.com/remaxjs/remax/commit/e6c6bf1d5feed53562fb1edb547c073c4d8a8362)), closes [#895](https://github.com/remaxjs/remax/issues/895)
- 修正 common chunk 切分错误导致包过大的问题 ([#900](https://github.com/remaxjs/remax/issues/900)) ([cf444aa](https://github.com/remaxjs/remax/commit/cf444aa16a731c823615ef5dc59ed4f773ad16b4))

# [2.0.0](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.18...v2.0.0) (2020-05-05)

### Bug Fixes

- **ali:** 修复 Input 组件的 enableNative 属性不生效的问题 ([f428027](https://github.com/remaxjs/remax/commit/f42802796fd1be93cbdfde47dd8c6060cac19f04))

# [2.0.0-alpha.18](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.17...v2.0.0-alpha.18) (2020-05-05)

### Features

- 完善插件机制 ([#850](https://github.com/remaxjs/remax/issues/850)) ([0897cbf](https://github.com/remaxjs/remax/commit/0897cbf0d427362981d3d9523ff38259ff4abebb))

# [2.0.0-alpha.17](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.16...v2.0.0-alpha.17) (2020-04-30)

### Bug Fixes

- **wechat:** 修复 OfficialAccount 属性问题 ([4b80e6d](https://github.com/remaxjs/remax/commit/4b80e6d393f150fe1c5e2f41b1dc8cccabe66410))
- 修复 beforeTabItemTap hook 不生效的问题 ([3dd4ba7](https://github.com/remaxjs/remax/commit/3dd4ba7668f7f916dbbf5a77b71dda4655a1a079))

# [2.0.0-alpha.16](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.15...v2.0.0-alpha.16) (2020-04-29)

### Bug Fixes

- 修复 usePageEvent 不生效的问题 ([a470d15](https://github.com/remaxjs/remax/commit/a470d1523c917d35d8ff5b109dae4699916b723c))
- 修复遗失的 useNativeEffect 导出 ([ab19468](https://github.com/remaxjs/remax/commit/ab19468824b225cc8de4624ca2a8ef0517b6f63e))

# [2.0.0-alpha.15](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.14...v2.0.0-alpha.15) (2020-04-29)

### Bug Fixes

- 修复生产环境 build 结束命令不退出的问题 ([7102a90](https://github.com/remaxjs/remax/commit/7102a90d8b5120f3c8c5ae81797e5bc19f7aa137))
- 修复生产环境打包会丢失自定义组件的问题 ([92df12d](https://github.com/remaxjs/remax/commit/92df12ddfc905428d3d59a04a0311d841ea660f0))
- **cli:** 修复 @remax/cli 缺少 @remax/macro 依赖的问题 ([#867](https://github.com/remaxjs/remax/issues/867)) ([1d5e322](https://github.com/remaxjs/remax/commit/1d5e32218bf43dac1bab28802455a4852a8cfaa5))
- **wechat:** 修复 onResize 和 onTabItemTap 不生效的问题 ([#857](https://github.com/remaxjs/remax/issues/857)) ([0a1a94a](https://github.com/remaxjs/remax/commit/0a1a94a667071fc777d4985416a4fbbb725a5a91))
- 两份 extensions 配置 ([c6ac704](https://github.com/remaxjs/remax/commit/c6ac704148b4328276cb2a30a6022567d46cc1b0))

### Features

- 自定义组件也支持 stopPropagation ([#870](https://github.com/remaxjs/remax/issues/870)) ([3fb7d46](https://github.com/remaxjs/remax/commit/3fb7d46d907128372b6dabe7548afac074c7c579))

# [2.0.0-alpha.14](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.13...v2.0.0-alpha.14) (2020-04-27)

### Bug Fixes

- 修复自定义组件中 usingComponent 没有被处理的问题 ([a068a33](https://github.com/remaxjs/remax/commit/a068a335595d7f969902d6a2f97cfd86f537c480)), closes [#845](https://github.com/remaxjs/remax/issues/845)
- 修复自定义组件引用 npm 模块失效的问题 ([00762db](https://github.com/remaxjs/remax/commit/00762db978bb4583088953eb6ccf1547adfd68b5)), closes [#762](https://github.com/remaxjs/remax/issues/762)

# [2.0.0-alpha.13](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.12...v2.0.0-alpha.13) (2020-04-26)

**Note:** Version bump only for package @remax/cli

# [2.0.0-alpha.12](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2020-04-26)

**Note:** Version bump only for package @remax/cli

# [2.0.0-alpha.11](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2020-04-26)

**Note:** Version bump only for package @remax/cli

# [2.0.0-alpha.10](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2020-04-26)

### Bug Fixes

- 修复 postcss.config.js 的加载 ([aae5461](https://github.com/remaxjs/remax/commit/aae5461296c9640719835743818a7aa33dc73020))

# [2.0.0-alpha.9](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2020-04-26)

**Note:** Version bump only for package @remax/cli

# [2.0.0-alpha.8](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2020-04-26)

**Note:** Version bump only for package @remax/cli

# [2.0.0-alpha.7](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2020-04-23)

### Bug Fixes

- 修复 remax 命令可能执行出错的问题 ([83ba129](https://github.com/remaxjs/remax/commit/83ba129c68c7457db078e22fd3921d5b4c775b25))
- 修复 web 下 App 不是第一个 entry 的问题 ([31cccdc](https://github.com/remaxjs/remax/commit/31cccdc4c9c5dbc93c506feefbc039b66c1dfbff))

### Features

- 返回编译事件，方便跟其他工具集成 ([901bc6e](https://github.com/remaxjs/remax/commit/901bc6ef046194c80b102a1165b0349362c7b59b))

# [2.0.0-alpha.6](https://github.com/remaxjs/remax/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2020-04-21)

### Bug Fixes

- **cli:** 修复 app.config.ts 和 [page].config.ts 没有触发重新编译的问题 ([232ff43](https://github.com/remaxjs/remax/commit/232ff43eb8c5ead784e186297134f16682f66f6e)), closes [#831](https://github.com/remaxjs/remax/issues/831)
- **web:** web 端 button 字体大小与小程序统一 ([3b88837](https://github.com/remaxjs/remax/commit/3b888370dda752e886baead8e123a936b0a4b59f))
- 修复使用 scss 出错的问题 ([6f205f0](https://github.com/remaxjs/remax/commit/6f205f082a64995c96f8b412c9537ac063ffa3a9)), closes [#827](https://github.com/remaxjs/remax/issues/827)

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

**Note:** Version bump only for package @remax/cli

# [2.0.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.19.7...v2.0.0-alpha.0) (2020-04-16)

### Bug Fixes

- 修正 css-loader 找不到的问题 ([f541399](https://github.com/remaxjs/remax/commit/f5413996985ae419554fd3e9fb7eed459c0d7177))

### Features

- add basic web support ([#757](https://github.com/remaxjs/remax/issues/757)) ([b3b48b1](https://github.com/remaxjs/remax/commit/b3b48b111cd5889f17d3ec15f1c39437a9dc7fc4))
- add CoverageIgnorePlugin ([f49997f](https://github.com/remaxjs/remax/commit/f49997f4abe6cb1cbb6894dad391e5870b521f01))

### Reverts

- Revert "fix winpath" ([00951cb](https://github.com/remaxjs/remax/commit/00951cb9dfcdd584afb05536e91e4d2352e0f49f))
- Revert "make lint happy" ([f9f6194](https://github.com/remaxjs/remax/commit/f9f6194ba09bfc4c962391e4e8bd74522187c1d3))
  > > > > > > > next

## [1.19.7](https://github.com/remaxjs/remax/compare/v1.19.6...v1.19.7) (2020-04-08)

### Bug Fixes

- 修复微信 ScrollView scrollLeft 不生效的问题 ([8e02c94](https://github.com/remaxjs/remax/commit/8e02c94d260b9f0ab115761bbef33938abbb215c))

## [1.19.6](https://github.com/remaxjs/remax/compare/v1.19.5...v1.19.6) (2020-04-07)

**Note:** Version bump only for package remax-cli

## [1.19.5](https://github.com/remaxjs/remax/compare/v1.19.4...v1.19.5) (2020-04-03)

**Note:** Version bump only for package remax-cli

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

## [1.18.4](https://github.com/remaxjs/remax/compare/v1.18.3...v1.18.4) (2020-03-25)

### Bug Fixes

- **wechat:** 微信 ScrollView 添加自定义刷新相关属性 ([#742](https://github.com/remaxjs/remax/issues/742)) ([9ef2afd](https://github.com/remaxjs/remax/commit/9ef2afddbadb7e21f4c342e2633049eb016ee0a5))

## [1.18.3](https://github.com/remaxjs/remax/compare/v1.18.2...v1.18.3) (2020-03-25)

### Bug Fixes

- **alipay:** 修复支付宝 IDE 里预览会卡住的问题 ([bc8a50b](https://github.com/remaxjs/remax/commit/bc8a50b2557b711672a1c551caddf5381ec7bb22))

## [1.18.2](https://github.com/remaxjs/remax/compare/v1.18.1...v1.18.2) (2020-03-25)

**Note:** Version bump only for package remax-cli

## [1.18.1](https://github.com/remaxjs/remax/compare/v1.18.0...v1.18.1) (2020-03-24)

### Bug Fixes

- **alipay:** 修复支付宝自定义组件中 node_modules 模块 resolve 不完整的问题 ([7ef374d](https://github.com/remaxjs/remax/commit/7ef374d))
- 修复 useAppShareAppMessage 不生效的问题 ([#739](https://github.com/remaxjs/remax/issues/739)) ([6e3c562](https://github.com/remaxjs/remax/commit/6e3c562))

# [1.18.0](https://github.com/remaxjs/remax/compare/v1.17.2...v1.18.0) (2020-03-23)

**Note:** Version bump only for package remax-cli

## [1.17.2](https://github.com/remaxjs/remax/compare/v1.17.1...v1.17.2) (2020-03-19)

### Bug Fixes

- 修复自定义组件中引用 node_modules 模块的问题 ([#726](https://github.com/remaxjs/remax/issues/726)) ([22f6064](https://github.com/remaxjs/remax/commit/22f6064))

## [1.17.1](https://github.com/remaxjs/remax/compare/v1.17.0...v1.17.1) (2020-03-19)

**Note:** Version bump only for package remax-cli

# [1.17.0](https://github.com/remaxjs/remax/compare/v1.16.1...v1.17.0) (2020-03-19)

### Features

- 新增 usePageEvent，useAppEvent 统一生命周期 hook ([#722](https://github.com/remaxjs/remax/issues/722)) ([0e8d7cd](https://github.com/remaxjs/remax/commit/0e8d7cd)), closes [#179](https://github.com/remaxjs/remax/issues/179)
- **remax:** 字节跳动小程序新增 api canIUse、navigateToVideoView ([#721](https://github.com/remaxjs/remax/issues/721)) ([9d0650f](https://github.com/remaxjs/remax/commit/9d0650f))

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

**Note:** Version bump only for package remax-cli

## [1.15.1](https://github.com/remaxjs/remax/compare/v1.15.0...v1.15.1) (2020-03-13)

### Bug Fixes

- 修复 tabBar icon 使用网络图片编译报错的问题 ([baaf172](https://github.com/remaxjs/remax/commit/baaf172)), closes [#697](https://github.com/remaxjs/remax/issues/697)
- 修复使用 typescript 创建 app.tsx 文件可能导致报错的问题 ([#703](https://github.com/remaxjs/remax/issues/703)) ([16f7f6c](https://github.com/remaxjs/remax/commit/16f7f6c)), closes [#702](https://github.com/remaxjs/remax/issues/702)
- 字节跳动 View 组件增加 onClick ([#696](https://github.com/remaxjs/remax/issues/696)) ([e216454](https://github.com/remaxjs/remax/commit/e216454))

# [1.15.0](https://github.com/remaxjs/remax/compare/v1.14.2...v1.15.0) (2020-03-11)

### Features

- **cli:** 支持 css modules 更多配置 ([f9838dc](https://github.com/remaxjs/remax/commit/f9838dc))

## [1.14.2](https://github.com/remaxjs/remax/compare/v1.14.1...v1.14.2) (2020-03-05)

### Performance Improvements

- **cli:** 优化生产模式编译速度 ([ffaca9a](https://github.com/remaxjs/remax/commit/ffaca9a))

## [1.14.1](https://github.com/remaxjs/remax/compare/v1.14.0...v1.14.1) (2020-02-28)

**Note:** Version bump only for package remax-cli

# [1.14.0](https://github.com/remaxjs/remax/compare/v1.13.3...v1.14.0) (2020-02-28)

**Note:** Version bump only for package remax-cli

## [1.13.2](https://github.com/remaxjs/remax/compare/v1.13.1...v1.13.2) (2020-02-26)

### Bug Fixes

- 修复点击自定义组件无法触发父组件 stopPropagation 的问题 ([#652](https://github.com/remaxjs/remax/issues/652)) ([1bff049](https://github.com/remaxjs/remax/commit/1bff049)), closes [#536](https://github.com/remaxjs/remax/issues/536) [#283](https://github.com/remaxjs/remax/issues/283)

### Performance Improvements

- **remax:** 优化运行时性能 ([#659](https://github.com/remaxjs/remax/issues/659)) ([0cf3649](https://github.com/remaxjs/remax/commit/0cf3649))

## [1.13.1](https://github.com/remaxjs/remax/compare/v1.13.0...v1.13.1) (2020-02-21)

### Bug Fixes

- 原生组件支持命名空间属性 ([#651](https://github.com/remaxjs/remax/issues/651)) ([224e238](https://github.com/remaxjs/remax/commit/224e238))

# [1.13.0](https://github.com/remaxjs/remax/compare/v1.12.5...v1.13.0) (2020-02-19)

### Features

- 支持使用命名空间属性 ([#650](https://github.com/remaxjs/remax/issues/650)) ([4e9686c](https://github.com/remaxjs/remax/commit/4e9686c)), closes [#642](https://github.com/remaxjs/remax/issues/642)

## [1.12.5](https://github.com/remaxjs/remax/compare/v1.12.4...v1.12.5) (2020-01-31)

### Bug Fixes

- **wechat:** 修复遗漏的 Camera 组件导出 ([d5b81ad](https://github.com/remaxjs/remax/commit/d5b81ad))

## [1.12.4](https://github.com/remaxjs/remax/compare/v1.12.3...v1.12.4) (2020-01-30)

**Note:** Version bump only for package remax-cli

## [1.12.3](https://github.com/remaxjs/remax/compare/v1.12.2...v1.12.3) (2020-01-21)

### Bug Fixes

- 修复环境变量注入导致的语法错误 ([e572c5a](https://github.com/remaxjs/remax/commit/e572c5a))

## [1.12.2](https://github.com/remaxjs/remax/compare/v1.12.1...v1.12.2) (2020-01-19)

### Bug Fixes

- 修复配置 pxToRpx 不生效的问题 ([2c93e21](https://github.com/remaxjs/remax/commit/2c93e21))

## [1.12.1](https://github.com/remaxjs/remax/compare/v1.12.0...v1.12.1) (2020-01-19)

### Bug Fixes

- 修正环境变量注入导致的语法解析错误 ([1fc8350](https://github.com/remaxjs/remax/commit/1fc8350))

# [1.12.0](https://github.com/remaxjs/remax/compare/v1.11.5...v1.12.0) (2020-01-19)

### Bug Fixes

- 修正非 js 后缀名的 cjs 模块构建错误的问题 ([f402c12](https://github.com/remaxjs/remax/commit/f402c12))

### Features

- 支持通过 .env 文件设置环境变量 ([3b3497f](https://github.com/remaxjs/remax/commit/3b3497f))

## [1.11.5](https://github.com/remaxjs/remax/compare/v1.11.4...v1.11.5) (2020-01-18)

### Bug Fixes

- 修正无法引用 events 包的问题 ([#596](https://github.com/remaxjs/remax/issues/596)) ([b7ec83f](https://github.com/remaxjs/remax/commit/b7ec83f))

## [1.11.4](https://github.com/remaxjs/remax/compare/v1.11.3...v1.11.4) (2020-01-17)

### Bug Fixes

- **wechat:** 修复 ScrollView 水平受控问题 ([063d627](https://github.com/remaxjs/remax/commit/063d627))

## [1.11.3](https://github.com/remaxjs/remax/compare/v1.11.2...v1.11.3) (2020-01-16)

### Bug Fixes

- **alipay:** 修复 Text 点击事件不触发的问题 ([4db5d25](https://github.com/remaxjs/remax/commit/4db5d25))

## [1.11.2](https://github.com/remaxjs/remax/compare/v1.11.1...v1.11.2) (2020-01-15)

### Bug Fixes

- 修复跨平台开发时引入了不相关平台代码的问题 ([4b0cba4](https://github.com/remaxjs/remax/commit/4b0cba4))

## [1.11.1](https://github.com/remaxjs/remax/compare/v1.11.0...v1.11.1) (2020-01-14)

### Performance Improvements

- **alipay:** 优化支付宝渲染层性能 ([5d3e936](https://github.com/remaxjs/remax/commit/5d3e936))

# [1.11.0](https://github.com/remaxjs/remax/compare/v1.10.9...v1.11.0) (2020-01-09)

### Bug Fixes

- **wechat:** 修复 ScrollView 非受控使用依然有受控表现的问题 ([e2001bb](https://github.com/remaxjs/remax/commit/e2001bb))
- **wechat:** 修复 Swiper 非受控时依然有受控表现的问题 ([c4e3c88](https://github.com/remaxjs/remax/commit/c4e3c88))

### Performance Improvements

- 避免当组件上有 style 属性时可能产生的非必要渲染 ([7ec0be2](https://github.com/remaxjs/remax/commit/7ec0be2)), closes [#531](https://github.com/remaxjs/remax/issues/531)

## [1.10.9](https://github.com/remaxjs/remax/compare/v1.10.8...v1.10.9) (2020-01-01)

### Bug Fixes

- 去除无用的文件生成警告 ([31236be](https://github.com/remaxjs/remax/commit/31236be))

### Performance Improvements

- **wechat:** 缩小微信打包 size ([e0e9798](https://github.com/remaxjs/remax/commit/e0e9798))

## [1.10.8](https://github.com/remaxjs/remax/compare/v1.10.7...v1.10.8) (2019-12-29)

### Bug Fixes

- **wechat:** 修复微信平台 Swiper 受控 current 后表现异常的情况 ([80f1c12](https://github.com/remaxjs/remax/commit/80f1c12)), closes [#535](https://github.com/remaxjs/remax/issues/535)
- 修复 subpackages 下引入 plugin 编译报错 ([7eee12c](https://github.com/remaxjs/remax/commit/7eee12c))
- 修复支付宝自定义组件使用 component2 模式报错的问题 ([109f904](https://github.com/remaxjs/remax/commit/109f904))

## [1.10.7](https://github.com/remaxjs/remax/compare/v1.10.6...v1.10.7) (2019-12-22)

### Bug Fixes

- **wechat:** 修复微信平台 ScrollView 设置 scrollTop 表现异常的问题 ([55c440e](https://github.com/remaxjs/remax/commit/55c440e)), closes [#459](https://github.com/remaxjs/remax/issues/459)

## [1.10.6](https://github.com/remaxjs/remax/compare/v1.10.5...v1.10.6) (2019-12-19)

**Note:** Version bump only for package remax-cli

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

**Note:** Version bump only for package remax-cli

## [1.10.1](https://github.com/remaxjs/remax/compare/v1.10.0...v1.10.1) (2019-12-15)

**Note:** Version bump only for package remax-cli

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

**Note:** Version bump only for package remax-cli

# [1.7.0](https://github.com/remaxjs/remax/compare/v1.6.0...v1.7.0) (2019-12-02)

### Bug Fixes

- **cli:** 修复多个 CSS 文件引用同一图片时报错的问题 ([#408](https://github.com/remaxjs/remax/issues/408)) ([b4dbbef](https://github.com/remaxjs/remax/commit/b4dbbef)), closes [#407](https://github.com/remaxjs/remax/issues/407)

### Features

- 支持直接使用 react-redux/mobx-react ([#425](https://github.com/remaxjs/remax/issues/425)) ([8b3245a](https://github.com/remaxjs/remax/commit/8b3245a)), closes [#405](https://github.com/remaxjs/remax/issues/405)
- **babel-preset-remax:** 支持配置 TypeScript preset 参数 ([#420](https://github.com/remaxjs/remax/issues/420)) ([23939e1](https://github.com/remaxjs/remax/commit/23939e1)), closes [#417](https://github.com/remaxjs/remax/issues/417)
- 支持使用 TypeScript 写应用和页面配置文件 ([#400](https://github.com/remaxjs/remax/issues/400)) ([56a96e5](https://github.com/remaxjs/remax/commit/56a96e5)), closes [#280](https://github.com/remaxjs/remax/issues/280)

# [1.6.0](https://github.com/remaxjs/remax/compare/v1.6.0-beta.3...v1.6.0) (2019-11-29)

### Bug Fixes

- 修复不能正确引用带有 esModule 标识的 cjs 模块的问题 ([cf4a348](https://github.com/remaxjs/remax/commit/cf4a348))

# [1.6.0-beta.3](https://github.com/remaxjs/remax/compare/v1.6.0-beta.2...v1.6.0-beta.3) (2019-11-28)

**Note:** Version bump only for package remax-cli

# [1.6.0-beta.2](https://github.com/remaxjs/remax/compare/v1.6.0-beta.1...v1.6.0-beta.2) (2019-11-27)

### Bug Fixes

- 修复由于编译优化导致引入同一个原生组件的渲染错误 ([9952853](https://github.com/remaxjs/remax/commit/9952853))

# [1.6.0-beta.1](https://github.com/remaxjs/remax/compare/v1.6.0-beta.0...v1.6.0-beta.1) (2019-11-25)

**Note:** Version bump only for package remax-cli

# [1.6.0-beta.0](https://github.com/remaxjs/remax/compare/v1.5.2...v1.6.0-beta.0) (2019-11-22)

### Bug Fixes

- 修复 npm 包中 createHostComponent 不生效的问题 ([#393](https://github.com/remaxjs/remax/issues/393)) ([b6292a1](https://github.com/remaxjs/remax/commit/b6292a1))
- 修复 ts 引入的子组件中包含原生组件的渲染错误 ([dca8741](https://github.com/remaxjs/remax/commit/dca8741))
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

**Note:** Version bump only for package remax-cli

## [1.4.6](https://github.com/remaxjs/remax/compare/v1.4.5...v1.4.6) (2019-11-18)

**Note:** Version bump only for package remax-cli

## [1.4.5](https://github.com/remaxjs/remax/compare/v1.4.4...v1.4.5) (2019-11-15)

### Bug Fixes

- build 时无法正确清理自定义 output 目录的问题 ([6545a47](https://github.com/remaxjs/remax/commit/6545a47))
- 带有 src 目录的 npm 包小程序组件构建错误的问题 ([#356](https://github.com/remaxjs/remax/issues/356)) ([4f3f53e](https://github.com/remaxjs/remax/commit/4f3f53e)), closes [#346](https://github.com/remaxjs/remax/issues/346)

## [1.4.4](https://github.com/remaxjs/remax/compare/v1.4.3...v1.4.4) (2019-11-14)

### Bug Fixes

- 找不到 regenerator-runtime 的问题 ([#351](https://github.com/remaxjs/remax/issues/351)) ([03dbf3d](https://github.com/remaxjs/remax/commit/03dbf3d))

## [1.4.3](https://github.com/remaxjs/remax/compare/v1.4.2...v1.4.3) (2019-11-14)

### Bug Fixes

- 修复小程序组件引入错误 ([7c07e2d](https://github.com/remaxjs/remax/commit/7c07e2d))

## [1.4.2](https://github.com/remaxjs/remax/compare/v1.4.1...v1.4.2) (2019-11-13)

### Bug Fixes

- **wechat:** 修正 wx:key 的警告 ([4806635](https://github.com/remaxjs/remax/commit/4806635)), closes [#332](https://github.com/remaxjs/remax/issues/332)
- 修复 node 10.10 打包出现 mkdir 的错误 ([7f4c3e2](https://github.com/remaxjs/remax/commit/7f4c3e2)), closes [#331](https://github.com/remaxjs/remax/issues/331)
- 修复钉钉小程序使用原生组件渲染错乱的问题 ([e38f578](https://github.com/remaxjs/remax/commit/e38f578)), closes [#316](https://github.com/remaxjs/remax/issues/316)
- 自定义组件会重复引用的问题 ([9c05961](https://github.com/remaxjs/remax/commit/9c05961)), closes [#342](https://github.com/remaxjs/remax/issues/342)
- 自定义组件路径带有 @ 时构建错误的问题 ([63c0ddb](https://github.com/remaxjs/remax/commit/63c0ddb))

## [1.4.1](https://github.com/remaxjs/remax/compare/v1.4.0...v1.4.1) (2019-11-11)

### Bug Fixes

- 修复支付宝 view 缺少 slot 属性导致原生组件 slot 不生效的问题 ([b89c721](https://github.com/remaxjs/remax/commit/b89c721))

# [1.4.0](https://github.com/remaxjs/remax/compare/v1.3.1...v1.4.0) (2019-11-11)

### Bug Fixes

- 修复 dataset 属性失效的问题 ([68af03b](https://github.com/remaxjs/remax/commit/68af03b))
- 修复多次切换页面导致加载速度变慢的问题 ([1f93d18](https://github.com/remaxjs/remax/commit/1f93d18)), closes [#304](https://github.com/remaxjs/remax/issues/304)

### Features

- add remax version check in project ([#325](https://github.com/remaxjs/remax/issues/325)) ([6ab19ce](https://github.com/remaxjs/remax/commit/6ab19ce))

## [1.3.1](https://github.com/remaxjs/remax/compare/v1.3.0...v1.3.1) (2019-11-04)

### Bug Fixes

- 修正 virtual modules 导致的构建错误 ([08ac82b](https://github.com/remaxjs/remax/commit/08ac82b))

# [1.3.0](https://github.com/remaxjs/remax/compare/v1.2.2...v1.3.0) (2019-11-04)

### Bug Fixes

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

### Features

- 支持引用小程序自定义组件 ([#270](https://github.com/remaxjs/remax/issues/270)) ([61d2aac](https://github.com/remaxjs/remax/commit/61d2aac))

# [1.2.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.2...v1.2.0-alpha.3) (2019-10-11)

**Note:** Version bump only for package remax-cli

# [1.2.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package remax-cli

# [1.2.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- 修复 rebuild 时不存在的属性依然残留的问题 ([3bc0f71](https://github.com/remaxjs/remax/commit/3bc0f71)), closes [#266](https://github.com/remaxjs/remax/issues/266)
- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([6b97092](https://github.com/remaxjs/remax/commit/6b97092)), closes [#263](https://github.com/remaxjs/remax/issues/263)
- 修复 windows 下跨平台开发会引入错误平台代码的问题 ([5f49e57](https://github.com/remaxjs/remax/commit/5f49e57)), closes [#206](https://github.com/remaxjs/remax/issues/206)
- 修复跨平台开发 esm build 结果报错的问题 ([cc5cd34](https://github.com/remaxjs/remax/commit/cc5cd34))
- 修正 windows 上 css 图片路径 ([12a3669](https://github.com/remaxjs/remax/commit/12a3669)), closes [#235](https://github.com/remaxjs/remax/issues/235)

### Features

- 支持自定义 babel 配置 ([8afee36](https://github.com/remaxjs/remax/commit/8afee36))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://github.com/remaxjs/remax/issues/262)) ([59a47f2](https://github.com/remaxjs/remax/commit/59a47f2))

## [1.1.3](https://github.com/remaxjs/remax/compare/v1.1.2...v1.1.3) (2019-09-30)

### Bug Fixes

- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([5c28c5c](https://github.com/remaxjs/remax/commit/5c28c5c)), closes [#263](https://github.com/remaxjs/remax/issues/263)

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

### Performance Improvements

- optimize using promise/key ([#258](https://github.com/remaxjs/remax/issues/258)) ([25c60ad](https://github.com/remaxjs/remax/commit/25c60ad))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修正环境变量替换导致的语法错误 ([5a5c020](https://github.com/remaxjs/remax/commit/5a5c020))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修正环境变量替换导致的语法错误 ([5a5c020](https://github.com/remaxjs/remax/commit/5a5c020))

# [1.1.0](https://github.com/remaxjs/remax/compare/v1.0.18...v1.1.0) (2019-09-22)

### Bug Fixes

- 修复 scope 包的引用错误 ([#211](https://github.com/remaxjs/remax/issues/211)) ([f2e8cb7](https://github.com/remaxjs/remax/commit/f2e8cb7))

### Features

- 新增 postcss 配置项 ([#233](https://github.com/remaxjs/remax/issues/233)) ([646a03d](https://github.com/remaxjs/remax/commit/646a03d))

# [1.1.0-alpha.5](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://github.com/remaxjs/remax/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://github.com/remaxjs/remax/commit/f586ea7))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://github.com/remaxjs/remax/commit/71bcb3b))

### Performance Improvements

- 精简头条的 template ([25872a1](https://github.com/remaxjs/remax/commit/25872a1))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))

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

**Note:** Version bump only for package remax-cli

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

**Note:** Version bump only for package remax-cli

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://github.com/remaxjs/remax/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://github.com/remaxjs/remax/commit/f586ea7))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://github.com/remaxjs/remax/commit/71bcb3b))
- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://github.com/remaxjs/remax/commit/f98b0ca))

### Performance Improvements

- 精简头条的 template ([25872a1](https://github.com/remaxjs/remax/commit/25872a1))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))
- 修复 jsx 后缀报错的问题 ([88d0668](https://github.com/remaxjs/remax/commit/88d0668))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

## [1.0.16](https://github.com/remaxjs/remax/compare/v1.0.15...v1.0.16) (2019-09-16)

### Bug Fixes

- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://github.com/remaxjs/remax/commit/f98b0ca))
- 修复编译后图片路径不对的问题 ([#225](https://github.com/remaxjs/remax/issues/225)) ([b05acc6](https://github.com/remaxjs/remax/commit/b05acc6)), closes [#224](https://github.com/remaxjs/remax/issues/224)
- 修复较为动态地使用 Remax 组件时可能不会渲染的问题 ([bfc3201](https://github.com/remaxjs/remax/commit/bfc3201))

## [1.0.15](https://github.com/remaxjs/remax/compare/v1.0.14...v1.0.15) (2019-09-04)

### Bug Fixes

- 修复 npm 中带有非 js 后缀文件时支付宝小程序无法上传的问题 ([e53e0b9](https://github.com/remaxjs/remax/commit/e53e0b9))
- 支付宝 css 背景图片支持相对路径写法 ([#198](https://github.com/remaxjs/remax/issues/198)) ([8f01e64](https://github.com/remaxjs/remax/commit/8f01e64))

## [1.0.14](https://github.com/remaxjs/remax/compare/v1.0.13...v1.0.14) (2019-09-03)

### Bug Fixes

- 修复支付宝组件无法接受动态传递 props 的问题 ([9d26dd2](https://github.com/remaxjs/remax/commit/9d26dd2))

## [1.0.13](https://github.com/remaxjs/remax/compare/v1.0.12...v1.0.13) (2019-09-02)

**Note:** Version bump only for package remax-cli

## [1.0.12](https://github.com/remaxjs/remax/compare/v1.0.11...v1.0.12) (2019-09-02)

### Bug Fixes

- 修复 jsx 后缀报错的问题 ([88d0668](https://github.com/remaxjs/remax/commit/88d0668))
- 修正带有 @ 的文件夹无法在支付宝里上传的问题 ([b998304](https://github.com/remaxjs/remax/commit/b998304))

## [1.0.11](https://github.com/remaxjs/remax/compare/v1.0.10...v1.0.11) (2019-08-31)

### Bug Fixes

- rollup watch [#148](https://github.com/remaxjs/remax/issues/148) ([f2f15ba](https://github.com/remaxjs/remax/commit/f2f15ba))
- 修复 app.config.js 没有被 watch 的问题 ([b88cfc8](https://github.com/remaxjs/remax/commit/b88cfc8))
- 修复 watch 状态下删除 dist 目录导致小程序本身构建进程奔溃的问题 ([921846d](https://github.com/remaxjs/remax/commit/921846d))
- 修复支付宝 css 无法引用本地图片的问题 ([#191](https://github.com/remaxjs/remax/issues/191)) ([9b6b501](https://github.com/remaxjs/remax/commit/9b6b501)), closes [#186](https://github.com/remaxjs/remax/issues/186)
- 完善微信组件类型定义 ([#161](https://github.com/remaxjs/remax/issues/161)) ([356fcbf](https://github.com/remaxjs/remax/commit/356fcbf))

## [1.0.10](https://github.com/remaxjs/remax/compare/v1.0.9...v1.0.10) (2019-08-30)

### Bug Fixes

- 修复 Windows 下的路径转换错误 ([1045a5b](https://github.com/remaxjs/remax/commit/1045a5b)), closes [#183](https://github.com/remaxjs/remax/issues/183)

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

## [1.0.6](https://github.com/remaxjs/remax/compare/v1.0.5...v1.0.6) (2019-08-28)

**Note:** Version bump only for package remax-cli

## [1.0.5](https://github.com/remaxjs/remax/compare/v1.0.4...v1.0.5) (2019-08-27)

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

- stylus typo ([60c4ec9](https://github.com/remaxjs/remax/commit/60c4ec9))
- 修复 PX 也会被转换成 rpx 的问题 ([e34c366](https://github.com/remaxjs/remax/commit/e34c366))
