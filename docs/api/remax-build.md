---
title: remix/build
---

`remix/build` 下包含构建 Remix 应用的 Node.js API，方便把 Remix 集成到你自己的构建流程中。

_带有 `?` 的选项表示非必填项_

## buildApp(options)

构建 Remix 应用。

```javascript
const { buildApp } = require('remix/build');

buildApp({ target: 'ali', output: 'build' });
```

#### 参数

- `options` - `remix.config.js` 里支持的配置和命令行的参数

#### 返回值

webpack 的 compiler 对象。
