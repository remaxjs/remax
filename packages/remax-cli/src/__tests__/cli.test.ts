import { run } from '../index';

describe('CLI', () => {
  it('run cli help', done => {
    expect.assertions(1);

    run(' help', undefined, (err, argv, output) => {
      expect(output).toMatch('Usage: remax-cli');
      done();
    });
  });
});
