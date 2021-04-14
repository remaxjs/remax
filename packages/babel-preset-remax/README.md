# babel-preset-remax

Babel preset for remax app.

```bash
  yarn add babel-preset-remax --dev
```

## Options

### react

configure react preset. https://babeljs.io/docs/en/babel-preset-react

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
      'remax',
      {
        react: {
          runtime: 'classic',
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
        'throw-if-namespace': false,
      },
    ],
  ];
}
```
