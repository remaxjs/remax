import * as path from 'path';
import pluginTester from 'babel-plugin-tester';
import fixRegeneratorRuntime from '../src';

pluginTester({
  plugin: fixRegeneratorRuntime(),
  pluginName: 'fix-regenerator-runtime',
  snapshot: true,
  fixtures: path.join(__dirname, 'fixtures'),
});
