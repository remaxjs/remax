import * as path from 'path';
import { buildApp, JEST_BUILD_TIMEOUT, buildMiniPlugin } from './build';
import type { Platform } from '@remax/types';
import Store from '@remax/build-store';

export function testBuildApp(
  app: string,
  target: Platform = 'ali',
  outputPath?: string,
  options?: any,
  extraRemaxOptions?: any
) {
  it(
    `build ${app} on target ${target}`,
    async () => {
      Store.reset();
      const result = await buildApp(app, target, options, extraRemaxOptions);
      expect(result).toMatchOutput(outputPath || path.resolve(__dirname, `../fixtures/${app}/expected`));
    },

    JEST_BUILD_TIMEOUT
  );
}

export function testBuildMiniPlugin(app: string, target: Platform = 'ali', outputPath?: string, options?: any) {
  it(
    `build ${app} on target ${target}`,
    async () => {
      Store.reset();
      const result = await buildMiniPlugin(app, target, options);
      expect(result).toMatchOutput(outputPath || path.resolve(__dirname, `../fixtures/${app}/expected`));
    },

    JEST_BUILD_TIMEOUT
  );
}
