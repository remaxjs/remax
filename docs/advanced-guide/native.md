---
title: 原生混合开发
order: 44
---

开发者可以按照以下的教程，在原生项目中直接使用 Remax。

## 安装 remax 依赖

```bash
npm install remax remax-cli -S
```

## 添加 remax.config.js 配置文件

在项目根目录创建 remax.config.js 文件，并添加如下内容

```js
module.exports = {
  mode: 'hybrid',
  rootDir: 'remaxSrc',
};
```

- `mode: hybrid`： 将 remax 配置成原生混合开发模式
- `rootDir: remaxSrc`： 指定原生项目中存放 remax 源码的目录，remaxSrc 只是示例，名称可以自定义。

> 开启 hybrid 模式后，remax 会自动将 output 指向当前目录 `./`，目的是为了将编译后的文件输出到原生同级的目录中，如果你的原生代码并不在项目根目录中，你可以指定 `output` 指向你的代码。简单的理解，就是将 `output` 指向 `app.json` 文件同级目录。

### 创建 page

和正常的 remax 应用一样创建页面。

## 添加 remax app

开启 hybrid 模式后，remax 允许原生 app 文件和 remax app 共存，但是要对原生 app 做一点小改造。

### 创建 remaxApp 文件

在配置中指定的 `rootDir` 路径下创建 remaxApp.js 文件。remaxApp.js 和正常创建 remax 应用的 app.js 文件一致，具体参考 [指南 - 框架](/guide/framework)。

### 修改 app.json

开启 hybrid 模式后，你无需再创建 app.config.js 文件， remax 会直接使用原生的 app.json 文件。因此添加完页面后，可以直接在 `app.json` 里将 remax 页面加入 `pages`。

> 填写页面路径时无需添加 `rootDir`（在这个教程中是 remaxSrc），因为页面会被输出到 `output` 目录下。如 `remaxSrc/pages/index/index.js` 文件对应的路径是 `/pages/index/index`

### 修改 app.js

在修改 app.js 之前，先编译 remax 文件。执行 `remax build -t [目标平台]`，你可以将这个命令加入到 `package.json` 中。
编译完成后，你会看到 pages 输出到了对应的目录下，而原生根目录下也多出了 remaxApp.js 文件。此时，修改 app.js

```js
var remaxify = require('./remaxApp');

...

App(remaxify(appConfig));
```

从 remaxApp 文件引入 remaxify 方法，包裹原本传递给 `App` 的 config 对象，这样就完成了 remax app 和原生 app 的挂载。

> 需要注意的是，hybrid 模式下，remax 会输出 remaxApp.js 和 remaxVendor.js 文件到原生目录下。

## 完成

通过以上步骤，一个混合项目就算 setup 成功，可以打开小程序开发者工具预览效果了。
