import { transformSync } from '@babel/core';
import preset from './index';

test('react default', () => {
  const code = transformSync(
    `
    import React from 'react'
    import { View } from '@remax/one'

    function Demo() {
      return <View>demo</View>
    }
  `.trim(),
    {
      filename: 'file.tsx',
      babelrc: false,
      presets: [preset],
    }
  )!.code;

  expect(code).toMatch(`/*#__PURE__*/_react.default.createElement(_one.View, null, "demo")`);
});

test('react options', () => {
  const code = transformSync(
    `
    import React from 'react'
    import { View } from '@remax/one'

    function Demo() {
      return <View>demo</View>
    }
  `.trim(),
    {
      filename: 'file.tsx',
      babelrc: false,
      presets: [[preset, { react: { development: true } }]],
    }
  )!.code;

  expect(code).toMatch(`return /*#__PURE__*/_react.default.createElement(_one.View, {`);
  expect(code).toMatch(`__self: this,`);
});
