import { declare } from '@babel/helper-plugin-utils';

interface PresetOption {
  react?: boolean;
  typescript?: any;
  decorators?: any;
  'class-properties'?: any;
}

function preset(api: any, presetOption: PresetOption) {
  api.assertVersion(7);

  const react =
    typeof presetOption.react === 'undefined' ? true : presetOption.react;
  const typescript =
    typeof presetOption.typescript === 'undefined'
      ? true
      : presetOption.typescript;
  const classProperties = presetOption['class-properties'] || {};
  const decorators = presetOption.decorators || {
    decoratorsBeforeExport: true,
  };

  const presets = [require('@babel/preset-env')];

  if (typescript) {
    presets.push([
      require('@babel/preset-typescript'),
      typeof typescript === 'object' ? typescript : {},
    ]);
  }

  if (react) {
    presets.push(require('@babel/preset-react'));
  }

  return {
    presets,
    plugins: [
      require('babel-plugin-macros'),
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-proposal-optional-chaining'),
      require('@babel/plugin-proposal-nullish-coalescing-operator'),
      require('@babel/plugin-syntax-jsx'),
      [require('@babel/plugin-proposal-decorators'), decorators],
      [require('@babel/plugin-proposal-class-properties'), classProperties],
      [
        require('babel-plugin-auto-import'),
        {
          declarations: [
            { default: 'regeneratorRuntime', path: 'regenerator-runtime' },
          ],
        },
      ],
    ],
  };
}

export default declare(preset);
