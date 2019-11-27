# babel-preset-remax

Babel preset for remax app.

```bash
  yarn add babel-preset-remax --dev
```

## Options

### Typescript

configure typescript preset. https://babeljs.io/docs/en/babel-preset-typescript

```js
{
  presets: [
    [
      'remax',
      {
        typescript: {
          allowNamespaces: true,
        },
      },
    ],
  ];
}
```
