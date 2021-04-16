import * as babel from '@babel/core';
import Store from '@remax/build-store';
import { slash } from '@remax/shared';
import page from '../src/page';

function transform(code: string) {
  return new Promise((resolve, reject) => {
    babel.transform(
      code,
      {
        plugins: [
          page({
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

describe('page', () => {
  beforeEach(() => {
    Store.reset();
  });

  it('collects lifecycle in class component', async () => {
    await transform(`
      import * as React from 'react';

      export default class Page extends React.Component {
        onShareAppMessage() {
          return {};
        }

        onPageScroll() {

        }

        render() {
          return this.props.children;
        }
      }
    `);

    expect(Store.pageEvents.get(slash(__filename))).toEqual(new Set(['onPageScroll', 'onShareAppMessage']));
  });

  it('collects lifecycle in functional component', async () => {
    await transform(`
      export default () => {
        useAppEvent('onShareAppMessage', () => {
          return {};
        });

        useAppEvent('onPageScroll', () => {
          return {};
        });

        return this.props.children;
      }
    `);

    expect(Store.pageEvents.get(slash(__filename))).toEqual(new Set(['onPageScroll', 'onShareAppMessage']));
  });
});
