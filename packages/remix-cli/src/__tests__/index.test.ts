import RemaxCLI from '../index';
import { build } from '../build';

jest.mock('../build', () => {
  return { build: jest.fn() };
});

describe('CLI', () => {
  let cli: RemaxCLI;

  beforeEach(() => {
    cli = new RemaxCLI();
  });

  it('run cli help', done => {
    expect.assertions(1);

    cli.run('help', (err, argv, output) => {
      expect(output).toMatch('Usage: remix');
      done();
    });
  });

  it('run cli build', done => {
    cli.run('build -t web', () => {
      expect(build).toBeCalledTimes(1);
      done();
    });
  });
});
