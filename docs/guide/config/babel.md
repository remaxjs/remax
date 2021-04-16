---
title: Babel 配置
order: 2
---

# Babel 配置

在[项目路径](/guide/config/remax#cwd)下新建 `babel.config.js` 修改 Babel 配置。

```js
// babel.config.js
module.exports = {
  plugins: ['babel-plugin-import'], // 新增 `babel-plugin-import` 插件
};
```

> 注意
>
> 请使用 `babel.config.js` 文件而不是 `.babelrc`

## babel-preset-remax

`babel-preset-remax` 是 Remax 提供的 babel preset，提供以下配置。

> 如更改记得安装 `babel-preset-remax`，并将它加入到 presets 配置中

```js
{
  presets: [
    [
      'remax',
      {
        react: {
          runtime: 'automatic',
        },
        typescript: {
          allowNamespaces: true,
        },
        'class-properties': {
          loose: true,
        },
        decorators: {
          legacy: true,
        },
        'throw-if-namespace': true,
        targets: ['chrome >= 49', 'firefox >= 64', 'ios >= 8', 'Android > 4.4'],
      },
    ],
  ];
}
```

### 配置

### typescript

[babel-preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) 配置

### decorators

[babel-plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators) 配置

### class-properties

[babel-plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) 配置

### targets

[babel-preset-env](https://www.babeljs.cn/docs/babel-preset-env#targets) 中关于 targets 的配置
