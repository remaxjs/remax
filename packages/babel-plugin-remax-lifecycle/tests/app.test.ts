import * as babel from '@babel/core';
import Store from '@remax/build-store';
import { slash } from '@remax/shared';
import app from '../src/app';

function transform(code: string) {
  return new Promise((resolve, reject) => {
    babel.transform(
      code,
      {
        plugins: [
          '@babel/plugin-syntax-jsx',
          app({
            test: () => true,
          }),
        ],
        filename: __filename,
      },
      function (err, result) {
        if (result) {
          return resolve(result.code);
        }
        reject(err);
      }
    );
  });
}

describe('app', () => {
  beforeEach(() => {
    Store.reset();
  });

  it('collects lifecycle in class component', async () => {
    await transform(`
      import * as React from 'react';

      export default class App extends React.Component {
        onShareAppMessage() {
          return {};
        }

        render() {
          return this.props.children;
        }
      }
    `);

    expect(Store.appEvents.get(slash(__filename))).toEqual(new Set(['onShareAppMessage']));
  });

  it('collects lifecycle in functional component', async () => {
    await transform(`
      export default () => {
        useAppEvent('onShareAppMessage', () => {
          return {};
        });
        return this.props.children;
      }
    `);

    expect(Store.appEvents.get(slash(__filename))).toEqual(new Set(['onShareAppMessage']));
  });
});
