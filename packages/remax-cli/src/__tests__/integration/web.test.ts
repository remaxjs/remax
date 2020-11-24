import { testBuildApp } from './helpers/runTest';
import { Platform } from '@remax/types';
import * as path from 'path';

describe('build remax web app', () => {
  testBuildApp('web', Platform.web);
});

describe('build remax web app - multi page', () => {
  testBuildApp(
    'web',
    Platform.web,
    path.resolve(__dirname, `./fixtures/web/expected-multi`),
    {},
    { web: { mpa: true } }
  );
});
