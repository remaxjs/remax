import { buildComponent } from '../build';
import * as path from 'path';
import { Stats } from 'webpack';
import { join } from 'path';
import rimraf = require('rimraf');
import { readFileContent } from './helper/utils';
import * as fs from 'fs';

describe('test basic', () => {
  const dir = path.join(__dirname, './fixture/basic');

  beforeAll(() => {
    rimraf.sync(join(dir, 'dist'));
  });

  it('build esm', async () => {
    await buildComponent(dir, {
      type: 'esm',
      sourceDir: 'src',
      output: 'dist',
      babelrc: {
        plugins: [
          [
            'add-header-comment',
            {
              header: ['This string will be inserted in a comment header'],
            },
          ],
        ],
      },
    });

    ['dist/es/Foo/index.js', 'dist/es/Greet/index.js'].forEach(file => {
      const content = readFileContent(file, dir);
      expect(content).toMatchSnapshot();
    });
  });

  describe('build mini', function () {
    ['ali', 'wechat'].forEach((target: any) => {
      it('build ali', done => {
        const webpackCompiler = buildComponent(dir, {
          type: target,
          sourceDir: 'src',
          output: 'dist',
          mini: {
            input: {
              foo: 'Foo/index',
              greet: 'Greet/index',
            },
            configWebpack({ config }) {
              const rootNodeModules = path.join(__dirname, '../../../../node_modules');
              config.resolve.modules.add(path.join(__dirname, '../../../../node_modules'));
              config.resolve.modules.add(path.join(dir, './node_modules'));
              config.resolve.alias.clear();
              config.resolve.alias.set('react', path.join(rootNodeModules, 'react'));
            },
          },
          babelrc: {
            plugins: [
              [
                'add-header-comment',
                {
                  header: ['This string will be inserted in a comment header'],
                },
              ],
            ],
          },
        });

        webpackCompiler.hooks.done.tap('BuildStatsPlugin', (stats: Stats) => {
          const info = stats.toJson();

          if (stats.hasErrors()) {
            info.errors.forEach(error => {
              console.error(error);
            });
            done(info.errors);
            return;
          }

          try {
            ['foo.js', 'foo.json', '__remax_runtime_options__.js', 'greet.js', 'greet.json'].forEach(file => {
              const f = path.join(dir, 'dist', target, file);
              fs.accessSync(f);
            });

            done();
          } catch (e) {
            done(e);
          }
        });
      });
    });
  });
});
