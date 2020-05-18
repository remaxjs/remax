import { run } from '../../index';
import { build } from '../../build';

jest.mock('../../build', () => {
  return { build: jest.fn() };
});

describe('CLI', () => {
  it('run cli help', done => {
    expect.assertions(1);

    run(' help', (err, argv, output) => {
      expect(output).toMatch('Usage: remax');
      done();
    });
  });

  it('run cli build', done => {
    run('build -t web', () => {
      expect(build).toBeCalledTimes(1);
      done();
    });
  });
});
