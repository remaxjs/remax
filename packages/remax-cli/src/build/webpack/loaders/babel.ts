import babelLoader from 'babel-loader';
import { PartialConfig, ConfigItem } from '@babel/core';
import { merge } from 'lodash';
import path from 'path';
import API from '../../../API';

interface CustomOptions {
  reactPreset: boolean;
  usePlugins: any[];
  api: API;
}

function processPresets(presets: ConfigItem[], babel: any, react: boolean) {
  const remixPresetIndex = presets.findIndex(
    preset => preset.file && preset.file.resolved.includes(`${path.sep}babel-preset-remax${path.sep}`)
  );

  const defaultOptions = {
    react,
    targets: {},
  };

  const existOptions = remixPresetIndex !== -1 ? presets[remixPresetIndex].options : {};

  const remixPreset = babel.createConfigItem(
    [require.resolve('babel-preset-remax'), merge({}, defaultOptions, existOptions)],
    {
      type: `preset`,
    }
  );

  if (remixPresetIndex === -1) {
    presets.unshift(remixPreset);
  } else {
    presets[remixPresetIndex] = remixPreset;
  }

  return presets;
}

export default babelLoader.custom((babelCore: any) => ({
  customOptions({ reactPreset, usePlugins, api, ...loaderOptions }: CustomOptions) {
    return {
      custom: {
        reactPreset,
        usePlugins,
        api,
      },
      loader: loaderOptions,
    };
  },

  config(cfg: PartialConfig, { customOptions }: { customOptions: CustomOptions }) {
    const { reactPreset, api, usePlugins } = customOptions;
    const presets = processPresets(cfg.options.presets as ConfigItem[], babelCore, reactPreset);
    const config = {
      ...cfg.options,
      presets,
      plugins: [...(cfg.options.plugins || []), ...(usePlugins || [])],
    };

    if (api) {
      api.configBabel({ config });
    }

    return config;
  },
}));
