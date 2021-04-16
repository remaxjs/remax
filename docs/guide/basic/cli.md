---
title: CLI 命令行
order: 32
---

## $ remax build

编译项目，生成构建产物，存放在 `dist/${target}` 目录下。

```bash
remax build

编译项目

选项：
      --version    显示版本号                                             [布尔]
      --help       显示帮助信息                                           [布尔]
  -w, --watch      监听文件变化                           [布尔] [默认值: false]
  -t, --target     目标平台                             [字符串] [默认值: "ali"]
  -n, --notify     编译错误提醒                           [布尔] [默认值: false]
  -p, --port       指定端口号                                             [数字]
  -m, --minimize   最小化文件                             [布尔] [默认值: false]
  -a, --analyze    编译分析                               [布尔] [默认值: false]
  -d, --devtools   启动 react-devtools 调试                [布尔] [默认值: true]
      --loglevel   展示日志级别                      [字符串] [默认值: "verbose"]
```

### --target

目标平台，支持选项：

- `ali` 支付宝小程序
- `toutiao` 头条小程序
- `wechat` 微信小程序
- `web` web 浏览器

### --watch

监听文件变化实时构建，调试模式开启。

### --notify

编译错误提醒，启用后则在构建错误时推送系统消息。

### --port

指定端口号, `--target=web` 模式下有效。

## --minimize

最小化构建产物，`--watch` 模式下默认不压缩文件以保证快速的响应文件变更，如需在开发模式进行真机调试（压缩文件），可以使用　`--minimize` 或 `-m` 参数开启，会增加整体构建时间，请酌情使用。

> minimize 压缩不等同于生产模式！ 在 wechat 平台上使用 --minimize 参数预览时，需要在开发工具 IDE 本地设置中关闭"上传代码压缩混淆"选项，否则 Webpack 和 IDE 的双重压缩会导致编译器无法解析语法而报错。

## --analyze

[编译分析](https://www.npmjs.com/package/webpack-bundle-analyzer)，开启后可分析构建产物的具体内容组成。

## --devtools

启动 react-devtools 调试模式，详见[调试工具](/guide/basic/devtools)介绍，开发环境下默认开启，如需关闭，可使用参数 `--no-devtools` 强制关闭。

## --loglevel

设置展示日志级别，可选值 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'silent'

- `debug` 包含详细的 remax 运行时信息
- `verbose` `info` 详细信息
- `warn` 编译警告提示信息
- `error` 编译错误提示信息
- `silent` 不展示任何信息（webpack 构建日志除外）
