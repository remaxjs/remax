import babelLoader from 'babel-loader';
import { PartialConfig, ConfigItem } from '@babel/core';
import { merge } from 'lodash';
import path from 'path';
interface CustomOptions {
  reactPreset: boolean;
  usePlugins: any[];
}

function processPresets(presets: ConfigItem[], babel: any, react: boolean) {
  const remaxPresetIndex = presets.findIndex(
    preset => preset.file && preset.file.resolved.includes(`${path.sep}babel-preset-remax${path.sep}`)
  );

  const defaultOptions = {
    react,
    targets: {},
  };

  const existOptions = remaxPresetIndex !== -1 ? presets[remaxPresetIndex].options : {};

  const remaxPreset = babel.createConfigItem(
    [require.resolve('babel-preset-remax'), merge({}, defaultOptions, existOptions)],
    {
      type: `preset`,
    }
  );

  if (remaxPresetIndex === -1) {
    presets.unshift(remaxPreset);
  } else {
    presets[remaxPresetIndex] = remaxPreset;
  }

  return presets;
}

export default babelLoader.custom((babelCore: any) => ({
  customOptions({ reactPreset, usePlugins, ...loaderOptions }: CustomOptions) {
    return {
      custom: {
        reactPreset,
        usePlugins,
      },
      loader: loaderOptions,
    };
  },

  config(cfg: PartialConfig, { customOptions }: { customOptions: CustomOptions }) {
    const presets = processPresets(cfg.options.presets as ConfigItem[], babelCore, customOptions.reactPreset);
    return {
      ...cfg.options,
      presets,
      plugins: [...(cfg.options.plugins || []), ...(customOptions.usePlugins || [])],
    };
  },
}));
