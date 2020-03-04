import babel from 'rollup-plugin-babel';
import { PartialConfig, ConfigItem } from '@babel/core';
import { merge } from 'lodash';

interface CustomOptions {
  reactPreset: boolean;
  usePlugins: any[];
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
  };

  const existOptions =
    remaxPresetIndex !== -1 ? presets[remaxPresetIndex].options : {};

  const remaxPreset = babel.createConfigItem(
    [
      require.resolve('babel-preset-remax'),
      merge({}, defaultOptions, existOptions),
    ],
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

export default babel.custom((babelCore: any) => {
  return {
    options({ reactPreset, usePlugins, ...pluginOptions }: CustomOptions) {
      const cfg = babelCore.loadPartialConfig();

      const runtimePluginName = '@babel/plugin-transform-runtime';
      // 如果引入了 runtime 插件，则 runtimeHelpers 置为 true
      const hasRuntimePlugin = (cfg?.options?.plugins ?? []).find(
        (plugin: any) => {
          return plugin?.file?.request === runtimePluginName;
        }
      );

      return {
        customOptions: {
          reactPreset,
          usePlugins,
        },
        pluginOptions: {
          ...pluginOptions,
          runtimeHelpers: hasRuntimePlugin,
        },
      };
    },

    config(
      cfg: PartialConfig,
      { customOptions }: { customOptions: CustomOptions }
    ) {
      const presets = processPresets(
        cfg.options.presets as ConfigItem[],
        babelCore,
        customOptions.reactPreset
      );

      return {
        ...cfg.options,
        presets,
        plugins: [
          ...(cfg.options.plugins || []),
          ...(customOptions.usePlugins || []),
        ],
      };
    },
  };
});
