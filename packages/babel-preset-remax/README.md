# babel-preset-remax

Babel preset for remax app.

```bash
  yarn add babel-preset-remax --dev
```

## Options

### typescript

configure typescript preset. https://babeljs.io/docs/en/babel-preset-typescript

### decorators

configure babel proposal decorators. https://babeljs.io/docs/en/babel-plugin-proposal-decorators

### class-properties

configure babel proposal class properties. https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

```js
{
  presets: [
    [
      'remax',
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
      },
    ],
  ];
}
```
