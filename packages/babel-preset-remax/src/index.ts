import { declare } from '@babel/helper-plugin-utils';

interface PresetOption {
  react?: boolean;
}

function preset(api: any, presetOption: PresetOption) {
  api.assertVersion(7);

  const react =
    typeof presetOption.react === 'undefined' ? true : presetOption.react;

  const presets = [
    require('@babel/preset-typescript'),
    require('@babel/preset-env'),
  ];

  if (react) {
    presets.push(require('@babel/preset-react'));
  }

  return {
    presets,
    plugins: [
      require('@remax/babel-plugin-macros'),
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-syntax-jsx'),
      [
        require('@babel/plugin-proposal-decorators'),
        {
          decoratorsBeforeExport: true,
        },
      ],
    ],
  };
}

export default declare(preset);
