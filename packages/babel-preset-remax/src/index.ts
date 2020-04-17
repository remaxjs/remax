import { declare } from '@babel/helper-plugin-utils';

interface PresetOption {
  react?: boolean;
  typescript?: any;
  decorators?: any;
  'class-properties'?: any;
  'throw-if-namespace'?: boolean;
}

function preset(api: any, presetOption: PresetOption) {
  api.assertVersion(7);

  const react = typeof presetOption.react === 'undefined' ? true : presetOption.react;
  const typescript = typeof presetOption.typescript === 'undefined' ? true : presetOption.typescript;
  const classProperties = presetOption['class-properties'] || {};
  const decorators = presetOption.decorators || {
    decoratorsBeforeExport: true,
  };
  const throwIfNamespace =
    typeof presetOption['throw-if-namespace'] === 'undefined' ? false : presetOption['throw-if-namespace'];

  const presets: any[] = [require.resolve('@babel/preset-env')];

  if (typescript) {
    presets.push([require.resolve('@babel/preset-typescript'), typeof typescript === 'object' ? typescript : {}]);
  }

  if (react) {
    presets.push([require.resolve('@babel/preset-react'), { throwIfNamespace }]);
  }

  return {
    presets,
    plugins: [
      require.resolve('babel-plugin-macros'),
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      require.resolve('@babel/plugin-proposal-optional-chaining'),
      require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
      [require.resolve('@babel/plugin-syntax-jsx'), { throwIfNamespace }],
      [require.resolve('@babel/plugin-proposal-decorators'), decorators],
      [require.resolve('@babel/plugin-proposal-class-properties'), classProperties],
      [
        require.resolve('babel-plugin-auto-import'),
        {
          declarations: [{ default: 'regeneratorRuntime', path: require.resolve('regenerator-runtime') }],
        },
      ],
    ],
  };
}

export default declare(preset);
