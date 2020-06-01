import * as path from 'path';
import { buildApp, JEST_BUILD_TIMEOUT, buildComponent } from './build';
import { Platform } from '@remax/types';

export function testBuildApp(app: string, target: Platform = Platform.ali, outputPath?: string, options?: any) {
  it(
    `build ${app} on target ${target}`,
    async () => {
      const result = await buildApp(app, target, options);
      expect(result).toMatchOutput(outputPath || path.resolve(__dirname, `../fixtures/${app}/expected`));
    },

    JEST_BUILD_TIMEOUT
  );
}

export function testBuildComponent(app: string, target: Platform = Platform.ali, outputPath?: string, options?: any) {
  it(
    `build ${app} on target ${target}`,
    async () => {
      const result = await buildComponent(app, target, options);
      expect(result).toMatchOutput(outputPath || path.resolve(__dirname, `../fixtures/${app}/expected`));
    },

    JEST_BUILD_TIMEOUT
  );
}
