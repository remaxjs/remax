import { declare } from '@babel/helper-plugin-utils';

interface PresetOption {
  react?: boolean | { [key: string]: any };
  typescript?: any;
  decorators?: any;
  'class-properties'?: any;
  'throw-if-namespace'?: boolean;
  target?: any;
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
  const targets =
    typeof presetOption.target === 'undefined'
      ? ['chrome >= 49', 'firefox >= 64', 'ios >= 8', 'Android > 4.4']
      : presetOption.target;

  const presets: any[] = [[require.resolve('@babel/preset-env'), { targets }]];

  if (typescript) {
    presets.push([require.resolve('@babel/preset-typescript'), typeof typescript === 'object' ? typescript : {}]);
  }

  if (react) {
    const defaultReactOpt = { throwIfNamespace };
    const reactOpts = typeof react === 'boolean' ? defaultReactOpt : Object.assign(defaultReactOpt, react);

    presets.push([require.resolve('@babel/preset-react'), reactOpts]);
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
          declarations: [{ default: 'regeneratorRuntime', path: 'regenerator-runtime' }],
        },
      ],
      require.resolve('@umijs/babel-plugin-auto-css-modules'),
    ],
  };
}

export default declare(preset);
