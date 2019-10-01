import * as path from 'path';
import build, { JEST_BUILD_TIMEOUT } from './build';
import { clear as clearComponents } from '../../build/plugins/components';

export default function runTest(app: string, target = 'alipay') {
  it(
    `build ${app}`,
    async () => {
      process.env['REMAX_APP_TEST_VAL'] = `${app} test`;

      clearComponents();
      const result = await build(app, target);
      expect(result).toMatchOutput(
        path.resolve(__dirname, `../fixtures/${app}/expected`)
      );
    },
    JEST_BUILD_TIMEOUT
  );
}
