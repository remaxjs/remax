import Config from 'webpack-chain';
import pxToUnits from '@remax/postcss-px2units';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RemaxOptions } from '@remax/types';
import * as styleConfig from '../../styleConfig';
import pageClass from '../../../web/pageClass';

function applyLoaders(
  rule: Config.Rule<Config.Rule<Config.Module>>,
  preprocessors: Array<{ name: string; loader: string; options?: any }>,
  cssModules: boolean
) {
  rule.use('mini-css-extract-loader').loader(MiniCssExtractPlugin.loader);

  rule
    .use('css-loader')
    .loader(require.resolve('css-loader'))
    .options({
      importLoaders: preprocessors.length,
      modules: cssModules
        ? {
            localIdentName: '[local]___[hash:base64:5]',
          }
        : false,
    });

  preprocessors.forEach(preprocessor => {
    rule
      .use(preprocessor.name)
      .loader(preprocessor.loader)
      .options(preprocessor.options ?? {});
  });
}

export default function cssConfig(webpackConfig: Config, options: RemaxOptions, web: boolean) {
  const rule = webpackConfig.module.rule('css').test(styleConfig.styleMatcher);
  const preprocessors = [
    {
      name: 'postcss-loader',
      loader: require.resolve('postcss-loader'),
      options: {
        config: {
          path: styleConfig.resolvePostcssConfig(options),
        },
        plugins: web
          ? [pxToUnits({ targetUnits: 'rem', divisor: 100 }), pageClass()]
          : [options.pxToRpx && (web ? pxToUnits() : pxToUnits())].filter(Boolean),
      },
    },
    styleConfig.enabled('less') && {
      name: 'less-loader',
      loader: require.resolve('less-loader'),
    },
    styleConfig.enabled('node-sass') && {
      name: 'sass-loader',
      loader: require.resolve('sass-loader'),
    },
    styleConfig.enabled('stylus') && {
      name: 'stylus-loader',
      loader: require.resolve('stylus-loader'),
    },
  ].filter(Boolean) as any[];

  applyLoaders(rule.oneOf('modules').resourceQuery(/modules/), preprocessors, true);
  applyLoaders(rule.oneOf('normal'), preprocessors, false);
}
