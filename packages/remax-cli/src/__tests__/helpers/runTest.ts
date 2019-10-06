import * as path from 'path';
import build, { JEST_BUILD_TIMEOUT } from './build';

export default function runTest(app: string, target = 'alipay') {
  it(
    `build ${app}`,
    async () => {
      const result = await build(app, target);
      expect(result).toMatchOutput(
        path.resolve(__dirname, `../fixtures/${app}/expected`)
      );
    },
    JEST_BUILD_TIMEOUT
  );
}
