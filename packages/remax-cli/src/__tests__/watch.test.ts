import * as path from 'path';
import runWatcher from '../build/watcher';
import { checkChokidar } from '../build/utils/checkChokidar';
import { RemaxOptions, RollupOptions } from 'remax-types';
import * as sander from 'sander';

function wait(ms: number) {
  return new Promise(fulfil => {
    setTimeout(fulfil, ms);
  });
}

function sequence(watcher: any, type: string, events: any[]) {
  return new Promise((fulfil, reject) => {
    function go(event?: string) {
      const next: any = events.shift();

      if (!next) {
        fulfil();
      } else if (typeof next === 'string') {
        watcher.once('event', (event: any) => {
          if (event.code !== next) {
            watcher.close();
          }
          expect(event.code).toBe(next);

          go(event);
        });
      } else {
        Promise.resolve()
          .then(() => wait(100)) // gah, this appears to be necessary to fix random errors
          .then(() => next(event))
          .then(go)
          .catch(error => {
            watcher.close();
            reject(error);
          });
      }
    }

    go();
  });
}

const app = 'watch';

const cwd = path.resolve(__dirname, `./fixtures/${app}`);
process.chdir(cwd);

const options = {
  rootDir: 'watchSource',
  cwd,
  output: 'dist',
} as RemaxOptions;
const rollupOptions: RollupOptions = {
  input: [`./${options.rootDir}/index.js`],
  output: {
    dir: options.output,
    format: 'cjs',
    exports: 'named',
    sourcemap: false,
    extend: true,
  },
};
const argv = { target: 'alipay' };

describe('watcher', () => {
  it('works', async () => {
    const { watcher, extraFilesWatcher } = runWatcher(
      options,
      rollupOptions,
      argv
    )!;

    extraFilesWatcher.close();

    const srcIndex = path.join(cwd, `./${options.rootDir}/index.js`);
    const destIndex = path.join(cwd, `./${options.output}/index.js`);

    // add file
    sander.writeFileSync(srcIndex, 'export default 1;');

    await sequence(watcher, 'default', [
      'START',
      'BUNDLE_START',
      'BUNDLE_END',
      'END',
      () => {
        expect(sander.readFileSync(destIndex).toString())
          .toMatchInlineSnapshot(`
          "'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });

          var index = 1;

          exports.default = index;
          "
        `);
        // update file
        sander.writeFileSync(srcIndex, 'export default 2;');
      },
      'START',
      'BUNDLE_START',
      'BUNDLE_END',
      'END',
      () => {
        expect(sander.readFileSync(destIndex).toString())
          .toMatchInlineSnapshot(`
          "'use strict';

          Object.defineProperty(exports, '__esModule', { value: true });

          var index = 2;

          exports.default = index;
          "
        `);
      },
    ]);

    watcher.close();
  });

  it('avoid rerun when watching', () => {
    const { watcher, extraFilesWatcher } = runWatcher(
      options,
      rollupOptions,
      argv
    )!;

    expect(watcher).toBeDefined();
    expect(extraFilesWatcher).toBeDefined();

    expect(runWatcher(options, rollupOptions, argv)).toBeUndefined();

    watcher.close();
    extraFilesWatcher.close();
  });

  describe('check chokidar', () => {
    it('do not exist', () => {
      expect(checkChokidar()).toBeFalsy();
    });

    it('exist', () => {
      jest.mock(path.resolve(cwd, './node_modules/chokidar'), () => ({}), {
        virtual: true,
      });

      expect(checkChokidar()).toBeTruthy();
    });
  });
});
