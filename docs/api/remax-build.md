---
title: remax/build
---

`remax/build` 下包含构建 Remax 应用的 Node.js API，方便把 Remax 集成到你自己的构建流程中。

_带有 `?` 的选项表示非必填项_

## buildApp(options)

构建 Remax 应用。

```javascript
const { buildApp } = require('remax/build');

buildApp({ target: 'ali', output: 'build' });
```

#### 参数

- `options` - `remax.config.js` 里支持的配置和命令行的参数

#### 返回值

webpack 的 compiler 对象。
