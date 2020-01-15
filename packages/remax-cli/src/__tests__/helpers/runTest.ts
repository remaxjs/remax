import * as path from 'path';
import build, { JEST_BUILD_TIMEOUT } from './build';

export default function runTest(app: string, target = 'alipay', outputPath?: string, options?: any) {
  it(
    `build ${app} on target ${target}`,
    async () => {
      const result = await build(app, target, options);
      expect(result).toMatchOutput(outputPath || path.resolve(__dirname, `../fixtures/${app}/expected`));
    },

    JEST_BUILD_TIMEOUT
  );
}
