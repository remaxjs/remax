## compiler/miniprogram

```js
miniprogram({
  watch: true, // watch 内容变更
  target: 'wechat', // 指定构建产物的平台
  entry: {
    app: './app.tsx', // 指定则生成对应的 app.js app.json
    'pages/home/index': './home.tsx', // 声明使用到的页面
  },
  homepage: 'pages/home/index', // 指定首页
});
```

构建产物

```bash
- app.js
- app.json # 需要合并 src/app.config.js 下的内容
- app.wxss ?
- base.wxml
    - pages/*/index.js
    - pages/*/index.wxml
    - pages/*/index.json
    - pages/*/index.wxss?
    - pages/*/index.wxs
- project.config.json # 需要合 src/project.config.js 下的内容
```
