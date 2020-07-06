---
title: public 目录
order: 30
---

> 2.3.0 开始支持

在项目根目录下创建 public 目录，public 目录下的所有文件会被自动复制到 dist 目录下。

你可以将 `原生页面`, `tabBar 中配置的图片` 等等全局资源放在这个目录下。

例如，当你配置了 tabBar，并指定了 icon 路径：

```js
// app.config.js
module.exports = {
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: '/images/icon.png',
        text: '首页',
      },
      {
        pagePath: 'pages/logs/logs',
        text: '日志',
      },
    ],
  },
};
```

则你需要将 icon.png 放入 `public/images` 目录下即可。

同样的你也可以在代码中直接指定全局静态资源：

```js
import { Image } from 'remax/wechat';

export default () => {
  return <Image src="/images/icon.png" />;
};
```

> 2.7.0 开始支持

在项目根目录下创建 `public/index.html` 文件

你可以将 web 端 `默认html模板文件` 替换成你自定义的 `html模板文件`，remax 将在 `id=remax-app` 的元素中渲染
