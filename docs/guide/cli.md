---
title: 'CLI'
order: 30
---

```
> remax --help

Usage: remax-cli <command> [options]

命令：
  remax-cli build  build your project

选项：
  --help        显示帮助信息                                               [布尔]
  --version     显示版本号                                                 [布尔]
  --watch, -w   监听文件变化                                [布尔] [默认值: false]
  --target, -t  目标平台, 如 wechat, alipay                        [字符串] [必需]
```

## 配置

## 使用环境变量

`remax-cli` 支持在编译时读取在当前环境中的环境变量并提供给当前项目使用。在项目中，可以通过 `process.env` 访问所有名称以 `REMAX_APP_` 开头的环境变量。

使用环境变量启动编译过程：

```
  > REMAX_APP_REQUEST_ENTRYPOINT=https://path/to/entrypoint/ remax-cli build
```

如下代码：

```
  const { REMAX_APP_REQUEST_ENTRYPOINT } = process.env
  wx.request({
    url: REMAX_APP_REQUEST_ENTRYPOINT,
    success (res) {},
    fail (e) {}
  })
```

将被替换为：

```
  const { REMAX_APP_REQUEST_ENTRYPOINT } = {
    // 其他环境变量
    REMAX_APP_REQUEST_ENTRYPOINT: "https://path/to/entrypoint/"
  }
  wx.request({
    url: REMAX_APP_REQUEST_ENTRYPOINT,
    success (res) {},
    fail (e) {}
  })
```

以下环境变量将参与并编译过程，亦可通过 `process.env` 访问：

- `NODE_ENV`: 用来区分开发与生产环境，默认为 `development`；
- `REMAX_PLATFORM`: 作用同 cli 的 `--target` 选项；
- `REMAX_DEBUG`: 为真值时开启 cli 的调试输出。

此功能可配合 [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) 使用。
