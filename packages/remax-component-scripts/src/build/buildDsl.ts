import path from 'path';
import { buildMiniComponent } from '@remax/cli';
import UNSAFE_wechatTemplateDepth from '@remax/cli/lib/defaultOptions/UNSAFE_wechatTemplateDepth';

export function buildDsl({ cwd, sourceDir, miniOptions, output, watch, onTargetDir, babelrc, type }: any) {
  let originTarget = path.join(output, './' + type);
  if (onTargetDir) {
    originTarget = onTargetDir(originTarget, type);
  }

  const { input, configWebpack } = miniOptions;

  return buildMiniComponent({
    cwd,
    pxToRpx: true,
    watch,
    progress: true,
    input,
    output: originTarget,
    rootDir: sourceDir,
    target: type,
    plugins: [],
    configWebpack({ config, addCSSRule }: any) {
      const { plugins = [], presets = [] } = babelrc || {};

      config.module
        .rule('js')
        .use('babel')
        .tap((options: any) => {
          options.api.configBabel = ({ config }: any) => {
            config.plugins = [...config.plugins, ...plugins];

            config.presets = [...config.presets, ...presets];
          };
          return options;
        });

      addCSSRule({
        name: 'less',
        test: /\.less(\?.*)?$/,
        loader: require.resolve('less-loader'),
        options: {},
      });

      addCSSRule({
        name: 'scss',
        test: /\.scss(\?.*)?$/,
        loader: require.resolve('sass-loader'),
        options: {},
      });

      configWebpack && configWebpack({ config, addCSSRule });
    },
    UNSAFE_wechatTemplateDepth,
    errorScreen: false,
    spm: false,
  });
}
