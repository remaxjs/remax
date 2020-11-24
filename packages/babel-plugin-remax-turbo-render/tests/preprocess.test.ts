import * as path from 'path';
import pluginTester from 'babel-plugin-tester';
import preprocess from '../src/preprocess';

pluginTester({
  plugin: preprocess({
    isHostComponentPackage: (pkg: string) => pkg === 'components',
  }),
  pluginName: 'preprocess',
  snapshot: true,
  babelOptions: {
    plugins: ['@babel/plugin-syntax-jsx'],
  },
  fixtures: path.join(__dirname, 'fixtures'),
});

pluginTester({
  plugin: preprocess({
    isHostComponentPackage: (pkg: string) => pkg === 'components',
  }),
  pluginName: 'preprocess',
  babelOptions: {
    plugins: ['@babel/plugin-syntax-jsx'],
  },
  tests: [
    {
      code: `
        import { View } from 'components';

        <View
          catchTap={() => {
            console.log('hello');
          }}
        >
          click me
        </View>;
      `,
      error:
        'Remax 支持在 onClick/onTap 等支持冒泡的事件中使用 event.stopPropagation 阻止事件冒泡，请不要使用 catchTap',
    },
  ],
});
