# umi-plugin-remax

umi plugin for [remax](https://remaxjs.org/).

## Usage

```js
// config in your umi project (.umirc.js or config/config.js)
export default {
  routes: [{
    path: 'pages/a',
  }, {
    path: 'pages/b',
  }],
  plugins: ['umi-plugin-remax', {
    // same with remax.config.js in remax
    cssModules: true,
    app: {
      // same with app.config.js in remax
      defaultTitle: 'alipay mini app',
    },
  }]
};
```
