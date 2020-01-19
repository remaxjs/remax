---
title: 环境变量
order: 31
---

`remax-cli` 会在编译时注入 `NODE_ENV` 以及所有 `REMAX_APP_` 开头的环境变量，你可以通过 `process.env` 来读取这些环境变量。

> 注意，只有 `REMAX_APP_` 开头的环境变量才会被注入。

使用环境变量启动构建：

```
$ REMAX_APP_BASE_URL=https://example.com/api remax build -t alipay
```

**Windows** 用户建议使用 [cross-env](https://www.npmjs.com/package/cross-env) 来设置环境变量：

```
$ cross-env REMAX_APP_BASE_URL=https://example.com/api remax build -t alipay
```

读取环境变量：

```javascript
function request(options) {
  my.request({
    url: process.env.REMAX_APP_BASE_URL + options.path,
    success(res) {},
    fail(e) {},
  });
}
```

另外，我们会默认注入 `process.env.NODE_ENV` 用来区分开发与生产环境，其默认值为 `development`。

```javascript
if (process.env.NODE_ENV !== 'production') {
  enableMock();
}
```

## 使用 .env 文件管理环境变量

为了方便管理环境变量，`remax-cli` 内置了 [dotenv](https://github.com/motdotla/dotenv)，你可以通过在项目根目录下创建 `.env` 文件方便地定义环境变量:

```
REMAX_APP_BASE_URL=https://example.com/api
```

> 修改环境变量需要重新构建才能生效

除此之外，你还可以为不同环境指定 `.env` 文件：

- `.env`: 默认读取
- `.env.local`：除了 `NODE_ENV=test` 时读取
- `.env.development`，`.env.test`，`.env.production`：会根据 `NODE_ENV` 来读取
- `.env.development.local`，`.env.test.local`， `.env.production.local` 在本地覆盖特点环境的变量

> 我们建议把除了 `.local` 以外的 env 文件都加入 git 仓库。

以上文件的优先级，从左到右的优先级从高到低:

- `NODE_ENV=development`：`.env.development.local`，`.env.development`，`.env.local`，`.env`
- `NODE_ENV=production`：`.env.production.local`，`.env.production`，`.env.local`，`.env`
- `NODE_ENV=test`：`.env.test.local`，`.env.test`，`.env`

## 在 .env 里引用环境变量

`.env` 里定义的环境变量支持引用：

```
DOMAIN=www.example.com
REMAX_APP_API=$DOMAIN/api
```
