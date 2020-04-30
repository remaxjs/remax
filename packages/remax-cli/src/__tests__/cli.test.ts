import { run } from '../index';
import runTest from './helpers/runTest';

describe('CLI', () => {
  it('run cli help', done => {
    expect.assertions(1);

    run(' help', (err, argv, output) => {
      expect(output).toMatch('Usage: remax');
      done();
    });
  });

  runTest('env');
});
