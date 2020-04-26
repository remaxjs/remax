---
title: 编写插件
order: 1
---

# 编写插件

Remax 的插件是一个简单的方法，这个方法返回一个对象，对象中的 key 是 Remax 提供的 hook 名。通过这些 hook，可以改变 Remax 构建小程序时的行为。

还是以 `@remax/plugin-less` 为例，我们可以通过 `configWebpack` 这个

```js
// 第一个参数是插件的配置
const lessPlugin = options => {
  return {
    configWebpack(config, { addCSSRule }) {
      createCSSRule({
        name: 'less',
        test: /\.less(\?.*)?$/,
        loader: require.resolve('less-loader'),
        options,
      });
    },
  };
};

export default lessPlugin;
```

## Hooks

### extendsCLI

扩展 `remax` 命令行。

比如新增一个 `hello` 子命令：

```js
const helloPlugin = () => {
  return {
    extendsCLI({ cli }) {
      return cli.command(
        'hello',
        'Say hello',
        () => {},
        argv => {
          console.log('hell world');
        }
      );
    },
  };
};
```

### configWebpack

修改 webpack 配置。

#### 参数

#### 参数

- `config` - `webpack-chain` 的 `Config 对象`。
- `helpers` - 帮助方法
  - `createCSSRule` - 创建一个 CSS 处理规则。
