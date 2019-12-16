# umi-plugin-remax

umi plugin for [remax](https://remaxjs.org/).

## Usage

```js
// config in your umi project (.umirc.js or config/config.js)
export default {
  routes: [
    {
      path: 'pages/a',
    },
    {
      path: 'pages/b',
    },
  ],
  plugins: [
    [
      'umi-plugin-remax',
      {
        // same with remax.config.js in remax
        cssModules: true,
        // same with app.config.js in remax
        app: {
          window: {
            defaultTitle: 'alipay mini app',
          },
        },
      },
    ],
  ],
};
```
