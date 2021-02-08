---
title: 错误处理
order: 35
---

# 错误处理

> 2.9.0 以后支持

## 默认错误页面

在开发环境下（`NODE_ENV=development`）Remax 会在应用渲染出错时显示错误信息。

<img src="https://gw.alipayobjects.com/zos/antfincdn/3vaomQSIN6/Simulator%252520Screen%252520Shot%252520-%252520hpmsim-iPhone%25252011-iOS%25252013.2%252520-%2525202020-10-10%252520at%25252012.34.04.png" width="350" style="box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);" />

在生产环境下（`NODE_ENV=production`）Remax 会显示一个默认的错误页面。

<img src="https://gw.alipayobjects.com/zos/antfincdn/bHsRiTv24i/Simulator%252520Screen%252520Shot%252520-%252520hpmsim-iPhone%25252011-iOS%25252013.2%252520-%2525202020-10-10%252520at%25252012.14.19.png" width="350" style="box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);" />

## 自定义错误页面

通过新增 `src/_error.js` 文件就可以自定义默认的错误页面（仅在生产环境下显示）。

```javascript
import * as React from 'react';
import { View } from 'remax/ali';

export default props => {
  React.useEffect(() => {
    // 可以从 props.error 拿到错误信息用来做上报
    console.log(props.error);
  }, []);

  return <View>出错啦</View>;
};
```

<img src="https://gw.alipayobjects.com/zos/antfincdn/AfdYwUxpZQ/Simulator%252520Screen%252520Shot%252520-%252520hpmsim-iPhone%25252011-iOS%25252013.2%252520-%2525202020-10-10%252520at%25252012.43.50.png" width="350" style="box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);" />

> 注意
>
> 在 `src/_error.js` 中不支持引用小程序自定义组件和小程序插件
