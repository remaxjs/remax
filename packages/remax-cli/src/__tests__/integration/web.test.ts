import { testBuildApp } from './helpers/runTest';
import * as path from 'path';

describe('build remax web app', () => {
  testBuildApp('web', 'web');
});

describe('build remax web app - multi page', () => {
  testBuildApp('web', 'web', path.resolve(__dirname, `./fixtures/web/expected-multi`), {}, { web: { mpa: true } });
});
