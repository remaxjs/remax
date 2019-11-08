import * as path from 'path';
import build, { JEST_BUILD_TIMEOUT } from './build';

export default function runTest(
  app: string,
  target = 'alipay',
  outputPath?: string
) {
  it(
    `build ${app} target ${target}`,
    async () => {
      const hostComponents = require(`../../build/adapters/${target}/hostComponents`);
      hostComponents.default.clear();
      hostComponents.register();
      process.env['REMAX_APP_TEST_VAL'] = `${app} test`;

      const result = await build(app, target);
      expect(result).toMatchOutput(
        outputPath || path.resolve(__dirname, `../fixtures/${app}/expected`)
      );
    },
    JEST_BUILD_TIMEOUT
  );
}
