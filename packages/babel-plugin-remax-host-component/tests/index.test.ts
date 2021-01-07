import * as babel from '@babel/core';
import hostComponents from '@remax/ali/cjs/hostComponents/node';
import Store from '@remax/build-store';
import { slash } from '@remax/shared';
import component from '../src';

const currentFilename = slash(__filename);

function transform(code: string, filename?: string) {
  return new Promise((resolve, reject) => {
    babel.transform(
      code,
      {
        plugins: [
          '@babel/plugin-syntax-jsx',
          component({
            target: 'ali',
            hostComponents,
            skipHostComponents: ['picker-view'],
            skipProps: ['entry'],
            includeProps: ['tid'],
          }),
        ],
        filename: filename || currentFilename,
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

function unique(array: any[]) {
  return Array.from(new Set(array)).sort();
}

describe('babel-plugin-remax-component', () => {
  afterEach(() => {
    Store.reset();
  });

  describe('host components', () => {
    it('collects host component', async () => {
      await transform(`
      import { View } from 'remax';

      <View id="foo" />
    `);

      expect(Store.collectedComponents.get('view')).toEqual({
        id: 'view',
        props: unique(hostComponents.get('view').props),
      });
    });

    it('collects host component with esm', async () => {
      await transform(
        `
      import { View } from 'remax';
      import React from 'react';
      import ModalMini from 'mini-ali-ui/es/modal';
      import Foo from 'mini-ali-ui/es/foo';

      React.createElement(ModalMini, { buttons: 1, onButtonClick: 2 })
      React.createElement(Foo)
      React.createElement(View)
    `
      );
      const modules = Store.compositionComponents.get(currentFilename);
      expect(modules?.get('mini-ali-ui/es/modal')).toEqual({
        import: 'mini-ali-ui/es/modal',
        props: new Set(['buttons', 'onButtonClick']),
      });
      expect(modules?.get('mini-ali-ui/es/foo')).toEqual({
        import: 'mini-ali-ui/es/foo',
        props: new Set([]),
      });
    });

    it('collects host component with esm - ref', async () => {
      await transform(
        `
      import { View } from 'remax';
      import React from '@alipay/react';
      import ModalMini from 'mini-ali-ui/es/modal';

      React.createElement(ModalMini, { ref: 1 })
    `
      );
      const modules = Store.compositionComponents.get(currentFilename);
      expect(modules?.get('mini-ali-ui/es/modal')).toEqual({
        import: 'mini-ali-ui/es/modal',
        props: new Set([]),
      });
    });

    it('collects host component with esm - stringLiteral', async () => {
      await transform(
        `
      import React from 'react';
      import Bar from 'mini-ali-ui/es/bar';

      React.createElement(Bar, { "ns:attr": 3 })
    `
      );
      const modules = Store.compositionComponents.get(currentFilename);
      expect(modules?.get('mini-ali-ui/es/bar')).toEqual({
        import: 'mini-ali-ui/es/bar',
        props: new Set(['ns:attr']),
      });
    });

    it('collects host component multiple times', async () => {
      await transform(`
      import { View } from 'remax';

      <>
        <View data-foo="foo" />
        <View data-bar="bar" />
      </>
    `);

      expect(Store.collectedComponents.get('view')).toEqual({
        id: 'view',
        props: unique(hostComponents.get('view').props.concat(['data-foo', 'data-bar'])),
      });
    });

    it('supports spread attributes', async () => {
      await transform(`
      import { View } from 'remax';

      <View id="foo" {...props} />
    `);

      expect(Store.collectedComponents.get('view')).toEqual({
        id: 'view',
        props: unique(hostComponents.get('view').props),
      });
    });

    it('skips none-host component', async () => {
      await transform(`
      <My.View />
    `);

      expect(Store.collectedComponents.size).toBe(0);
    });

    it('skips composition component', async () => {
      await transform(`
      <Hello />
    `);

      expect(Store.collectedComponents.size).toBe(0);
      expect(Store.compositionComponents.size).toBe(0);
    });

    it('skips same name composition component', async () => {
      await transform(`
      const View = () => {};
      <View />
    `);

      expect(Store.collectedComponents.size).toBe(0);
      expect(Store.compositionComponents.size).toBe(0);
    });

    it('transform prop key', async () => {
      const code = await transform(`
      import { View } from 'remax';

      <View key="foo" />
    `);

      expect(code).toMatchInlineSnapshot(`
      "import { View } from 'remax';
      <View key=\\"foo\\" __key=\\"foo\\" />;"
    `);
    });

    it('collects dataset props', async () => {
      await transform(`
      import { View } from 'remax';

      <View data-index="1" />
    `);

      expect(Store.collectedComponents.get('view')).toEqual({
        id: 'view',
        props: unique(hostComponents.get('view').props.concat('data-index')),
      });
    });

    it('collects platform specific props', async () => {
      await transform(`
      import { View } from 'remax';

      <View ali-index="1" />
    `);

      expect(Store.collectedComponents.get('view')).toEqual({
        id: 'view',
        props: unique(hostComponents.get('view').props.concat('index')),
      });
    });

    it('skips specific component', async () => {
      await transform(`
      import { PickerView } from 'remax';

      <PickerView />
    `);

      expect(Store.collectedComponents.size).toBe(0);
    });

    it('skips specific props', async () => {
      await transform(`
      import { View } from 'remax';

      <View entry />
    `);

      expect(Store.collectedComponents.get('view')).toEqual({
        id: 'view',
        props: unique(hostComponents.get('view').props),
      });
    });

    it('includes specific props', async () => {
      await transform(`
      import { View } from 'remax';

      <View tid="1" />
    `);

      expect(Store.collectedComponents.get('view')).toEqual({
        id: 'view',
        props: unique(hostComponents.get('view').props.concat('tid')),
      });
    });
  });

  describe('slot view', () => {
    it('collects props on slot view', async () => {
      await transform(`
      import { View } from 'remax';

      <Badge>
        <View slot="inner" id="foo">foo</View>
      </Badge>
    `);

      expect(Store.slotView).toEqual({
        id: 'slot-view',
        props: ['id'],
      });
    });

    it('supports spread attributes', async () => {
      await transform(`
      import { View } from 'remax';

      <Badge>
        <View slot="inner" id="foo" {...props}>foo</View>
      </Badge>
    `);

      expect(Store.slotView).toEqual({
        id: 'slot-view',
        props: unique(hostComponents.get('view').props.concat('id')),
      });
    });

    it('skips namespaced attributes', async () => {
      await transform(`
      import { View } from 'remax';

      <Badge>
        <View slot="inner" ns:id="foo">foo</View>
      </Badge>
    `);

      expect(Store.slotView).toEqual({
        id: 'slot-view',
        props: [],
      });
    });
  });

  describe('composition components', () => {
    it('collects composition components', async () => {
      await transform(`
        import Badge from 'mini-ali-ui/es/badge/index';

        <Badge dot />
      `);

      expect(Store.compositionComponents.size).toBe(1);
      expect(Store.compositionComponents.get(currentFilename)?.get('mini-ali-ui/es/badge/index')).toEqual({
        import: 'mini-ali-ui/es/badge/index',
        props: new Set(['dot']),
      });
    });

    it('skips non-default import', async () => {
      await transform(`
        import { Badge } from 'mini-ali-ui/es/badge/index';

        <Badge dot />
      `);

      expect(Store.compositionComponents.size).toBe(0);
    });

    it('supports namespaced attrs', async () => {
      await transform(`
        import Badge from 'mini-ali-ui/es/badge/index';

        <Badge dot ns:id="1" />
    `);

      expect(Store.compositionComponents.size).toBe(1);
      expect(Store.compositionComponents.get(currentFilename)?.get('mini-ali-ui/es/badge/index')).toEqual({
        import: 'mini-ali-ui/es/badge/index',
        props: new Set(['dot', 'ns:id']),
      });
    });

    it('collects plugin component', async () => {
      Store.registerPluginComponent('plugin://my/badge', '');
      await transform(`
        const Badge = createNativeComponent('my-badge-837b7dd');

        <Badge dot />
    `);
      expect(Store.pluginComponents.get('plugin://my/badge')).toEqual({
        id: 'my-badge-837b7dd',
        componentPath: 'plugin://my/badge',
        importers: new Set(['']),
        props: new Set(['dot']),
      });
    });
  });
});
