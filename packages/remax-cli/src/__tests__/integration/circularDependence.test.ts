import { testBuildApp } from './helpers/runTest';

describe('build circular dependence app', () => {
  testBuildApp('circularDependence');
});
