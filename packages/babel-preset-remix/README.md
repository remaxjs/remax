# @alipay/babel-preset-remix

Babel preset for remix app.

```bash
  yarn add @alipay/babel-preset-remix --dev
```

## Options

### typescript

configure typescript preset. https://babeljs.io/docs/en/babel-preset-typescript

### decorators

configure babel proposal decorators. https://babeljs.io/docs/en/babel-plugin-proposal-decorators

### class-properties

configure babel proposal class properties. https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

### throw-if-namespace

configure react preset throwIfNamespace option. https://babeljs.io/docs/en/babel-preset-react#throwifnamespace

```js
{
  presets: [
    [
      'remix',
      {
        typescript: {
          allowNamespaces: true,
        },
        'class-properties': {
          loose: true,
        },
        decorators: {
          legacy: true,
        },
        'throw-if-namespace': false,
      },
    ],
  ];
}
```
