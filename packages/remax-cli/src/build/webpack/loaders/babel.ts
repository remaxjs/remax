import babelLoader from 'babel-loader';
import { PartialConfig, ConfigItem } from '@babel/core';
import { merge } from 'lodash';
import { RemaxOptions } from '@remax/types';
import path from 'path';
import fs from 'fs';

interface CustomOptions {
  reactPreset: boolean;
  usePlugins: any[];
  remaxOptions: RemaxOptions;
}

function resolveBabelConfig(options: RemaxOptions) {
  if (fs.existsSync(path.join(options.cwd, 'babel.config.js'))) {
    return path.join(options.cwd, 'babel.config.js');
  }
  return false;
}

function processPresets(presets: ConfigItem[], babel: any, react: boolean) {
  const remaxPresetIndex = presets.findIndex(
    preset =>
      preset.file &&
      (preset.file.resolved === require.resolve('babel-preset-remax') ||
        preset.file.request === 'remax' ||
        preset.file.request === 'babel-preset-remax')
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
  customOptions({ reactPreset, usePlugins, remaxOptions, ...loaderOptions }: CustomOptions) {
    return {
      custom: {
        reactPreset,
        usePlugins,
        remaxOptions,
      },
      loader: loaderOptions,
    };
  },

  config(cfg: PartialConfig, { customOptions }: { customOptions: CustomOptions }) {
    const presets = processPresets(cfg.options.presets as ConfigItem[], babelCore, customOptions.reactPreset);
    return {
      ...cfg.options,
      babelrc: false,
      configFile: resolveBabelConfig(customOptions.remaxOptions),
      presets,
      plugins: [...(cfg.options.plugins || []), ...(customOptions.usePlugins || [])],
    };
  },
}));
