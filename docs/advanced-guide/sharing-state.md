---
order: 18
---

## 简单灵活的方式

小程序是多页应用设计，开发者很多时候只是需要页面间共享数据，而不是全局的状态管理，所以可以采用很轻量级的做法。如：

```js
// app.js

export default class App {
  data: {
    name: 'remax'
  }
}

// pages/A/index.js

import { navigateTo, View } from 'remax/wechat';

const app = getApp();

export default () => {
  const gotoB = () => {
    app.data.name = 'B';

    navigateTo({
      url: 'pages/B/index'
    })
  }

  return <View onClick={gotoB}>goto B</View>;
}

// pages/A/index.js

import { navigateTo, View } from 'remax/wechat';

const app = getApp();

export default () => {
  const gotoB = () => {
    app.data.name = 'B';

    navigateTo({
      url: 'pages/B/index'
    })
  }

  return <View onClick={gotoB}>goto B</View>;
}

// pages/B/index.js
import { View } from 'remax/wechat';

const app = getApp();

export default () => {
  return <View>name: {app.data.name}</View>;
}
```

通过上面的例子可以看到，A 页面在前往 B 页面前，在 App 中更新了 `data.name`，这样 B 页面就可以拿到最新的 `data.name`了，这就实现了页面数据共享。如果你希望可以监听到 App 的数据变化，可以将 App 数据和 state 结合起来使用。
