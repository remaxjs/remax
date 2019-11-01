---
title: 跨平台开发
order: 42
---

在开始多端开发之前，我们建议开发者循序渐进：

- 先实现一端的业务
- 在另一端新建一个 Remax 项目，而不是立即开启多端解决方案
- 观察业务中的相似处和不同处，加深对产品的理解，构思可复用的逻辑，组件及架构。
- 时机合适时融合 Remax 项目，整合出属于自己的跨多端解决方案。

你可以使用脚手架快速开始:

```bash
  npx degit remaxjs/template-universe my-app
  # typescript
  npx degit remaxjs/template-universe-typescript my-app
```

现在让我们来看看如何利用 Remax 打造多端解决方案。（以微信和支付宝为例）

## 1. 修改配置

改造 `app.config.js` 以及页面的 `config.js` 配置文件：

```js
// app.config.js
const title = '小程序标题';
const bgColor = '#fff';
const pages = ['pages/index/index'];

// 微信
exports.wechat = {
  pages: ['pages/wechat/index', ...pages],
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: baColor,
  },
};

// 支付宝
exports.alipay = {
  pages: ['pages/alipay/index', ...pages],
  window: {
    defaultTitle: 'Alipay Todo App',
    titleBarColor: backgroundColor,
  },
};

// 头条
exports.toutiao = {
  pages: ['pages/toutiao/index', ...pages],
  window: {
    defaultTitle: 'Toutiao Todo App',
    titleBarColor: backgroundColor,
  },
};
```

_如果没有默认导出，Remax 会去读取对应平台的配置信息，通过 config.js，开发者还可以复用多端共用的配置逻辑。_

## 2. 封装组件

建立你自己的组件库

```js
// src/components.js
// 为了方便示例，这里将逻辑都写在一起，实际中开发者可以根据自己的需要合理规划代码
import * as React from 'react';
import { View as WechatView, Text as WechatText } from 'remax/wechat';
import { View as AlipayView, Text as AlipayText } from 'remax/alipay';
import { View as ToutiaoView, Text as ToutiaoText } from 'remax/toutiao';
import { Platform } from 'remax';

export function View(props) {
  switch (Platform.current) {
    case 'wechat': {
      // 封装微信端的 View 组件逻辑，处理微信端的样式
      ...

      return <WechatView {...props} />;
    }

    case 'alipay': {
      // 封装支付宝端的 View 组件逻辑，处理支付宝端的样式
      ...

      return <AlipayView {...props} />;
    }

    case 'toutiao': {
      // 封装头条端的 View 组件逻辑，处理头条端的样式
      ...

      return <ToutiaoView {...props} />;
    }
  }
}

export function Text(props) {
  switch (Platform.current) {
    case 'wechat': {
      // 封装微信端的 Text 组件逻辑，处理微信端的样式
      ...

      return <WechatText {...props} />;
    }

    case 'alipay': {
      // 封装支付宝端的 Text 组件逻辑， 处理支付宝端的样式
      ...

      return <AlipayText {...props} />;
    }

    case 'toutiao': {
      // 封装头条端的 Text 组件逻辑， 处理支付宝端的样式
      ...

      return <ToutiaoText {...props} />;
    }
  }
}
```

_Remax 已经为开发者准备了每个平台的 React 支持，开发者拥有了“手”和“脚”，就可以根据自己的业务特点，打造属于自己的跨多端组件，保持最佳的灵活性和可维护性，一切对开发者都是透明的。_
_你可以以一端为标准，抹平多端差异，或者建立自己的组件接口，这一切都将有开发者灵活掌控_

## 3. 封装小程序原生 API

和组件一样，开发者可以封装属于自己的 API 逻辑

```js
// src/api.js
// 为了方便示例，这里将逻辑都写在一起，实际中开发者可以根据自己的需要合理规划代码
import * as React from 'react';
import { navigateTo as wechatNavigateTo } from 'remax/wechat';
import { navigateTo as alipayNavigateTo } from 'remax/alipay';
import { navigateTo as toutiaoNavigateTo } from 'remax/alipay';
import { Platform } from 'remax';

export function navigateTo(...params) {
  switch (Platform.current) {
    case 'wechat': {
      // 封装微信端的 navigateTo 逻辑
      ...

      return wechatNavigateTo(...params);
    }

    case 'alipay': {
      // 封装支付宝端的 navigateTo 逻辑
      ...

      return alipayNavigateTo(...params);
    }

    case 'alipay': {
      // 封装头条端的 navigateTo 逻辑
      ...

      return toutiaoNavigateTo(...params);
    }
  }
}

export function getUserinfo(...params) {
  switch (Platform.current) {
    case 'wechat': {
      ...
      // 封装微信端的 getUserinfo 逻辑
    }

    case 'alipay': {
      ...
      // 封装支付宝端的 getUserinfo 逻辑
    }

    case 'toutiao': {
      ...
      // 封装头条端的 getUserinfo 逻辑
    }
  }
}
```

_和组件一样，API 也做同样的封装，这里以微信小程序为标准，统一封装了 getUserinfo API 行为_

## 5 封装 React Hooks

同样是多态封装的思想，这里不再赘述。

## 4. 让页面逻辑更像是在写 React DSL

有了组件， API，Hooks 的多态支持，我们可以写跨多端的页面了。由于我们对基础支持做了很好的封装，页面可以专注于业务逻辑，就好比在写 React DSL 一般，这不仅有助于做跨多端开发，对整体项目的一致性，可维护性都有极大的帮助，甚至你都很简单地将 Remax 切换成其他框架！

```js
// page.js
import * as React from 'react';
// Remax 默认支持 '@/' 别名
import { View, Text } from '@/components';
import { getUserinfo } from '@/api';
import { useMyHook } from '@/hooks';

export default () => {
  useMyHook();
  React.useEffect(() => {
    getUserinfo(...params);

    // do sth...
  });

  return (
    <View>
      <Text>我是跨多端统一页面</Text>
    </View>
  );
};
```

跨多端页面搭建成功！你可以看到这是一个非常专注于业务的页面，除了 React 和业务逻辑没有多余的概念，非常便于维护和升级

## 5. 修改 script

修改 `package.json` 中的命令

```json
{
  "scripts": {
    "dev": "remax build -w -t",
    "build": "NODE_ENV=production remax build -t"
  }
}
```

现在可以编译到不同平台了

```bash
  npm run build wechat
  npm run build alipay
  npm run build toutiao
  ...
```

完成！

_通过这篇指南，我们想告诉开发者，跨平台开发更考验的是对业务的理解和整合，这本质上是从编程思想去思考的事情，因此 Remax 专注于提供 React 支持，给开发者保留最大的灵活性_
