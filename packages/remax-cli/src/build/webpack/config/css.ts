import * as path from 'path';
import * as fs from 'fs';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Options } from '@remax/types';
import { slash } from '@remax/shared';

export interface RuleConfig {
  name: string;
  test: RegExp;
  loader?: string;
  options?: any;
}

function resolvePostcssConfig(options: Options) {
  if (fs.existsSync(path.join(options.cwd, 'postcss.config.js'))) {
    return options.cwd;
  }

  return slash(path.resolve(__dirname, '../../../..'));
}

export function addCSSRule(webpackConfig: Config, options: Options, web: boolean, ruleConfig: RuleConfig) {
  const rule = webpackConfig.module.rule(ruleConfig.name).test(ruleConfig.test);

  function applyLoaders(rule: Config.Rule<Config.Rule<Config.Module>>, cssModules: boolean) {
    rule.use('mini-css-extract-loader').loader(MiniCssExtractPlugin.loader);

    rule
      .use('css-loader')
      .loader(require.resolve('css-loader'))
      .options({
        importLoaders: ruleConfig.loader ? 2 : 1,
        modules: cssModules
          ? {
              localIdentName: '[local]___[hash:base64:5]',
            }
          : false,
      });

    rule
      .use('postcss-loader')
      .loader(require.resolve('postcss-loader'))
      .options({
        config: {
          path: resolvePostcssConfig(options),
          ctx: {
            plugins: {
              [require.resolve('postcss-preset-env')]: web && {
                browsers: ['chrome >= 49', 'edge >= 13', 'ios >= 8', 'Android >= 4.4'],
              },
              [require.resolve('@remax/postcss-px2units')]:
                options.pxToRpx &&
                (web
                  ? {
                      targetUnits: 'rem',
                      divisor: 100,
                    }
                  : {}),
              [require.resolve('@remax/postcss-tag')]: web && {},
            },
          },
        },
      });

    if (ruleConfig.loader) {
      rule.use(ruleConfig.loader).loader(require.resolve(ruleConfig.loader)).options(ruleConfig.options);
    }
  }

  applyLoaders(rule.oneOf('modules').resourceQuery(/modules/), true);
  applyLoaders(rule.oneOf('normal'), false);
}

export function cssConfig(webpackConfig: Config, options: Options, web: boolean) {
  addCSSRule(webpackConfig, options, web, {
    name: 'css',
    test: /\.css(\?.*)?$/,
  });
}
