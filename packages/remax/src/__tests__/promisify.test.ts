import promisify from '../utils/promisify';

describe('promisify', () => {
  it('promisify api and resolve when succeed', () => {
    function api({ success }: any) {
      success('success');
    }

    const promisifyAPI = promisify(api);

    expect.assertions(1);
    expect(promisifyAPI()).resolves.toEqual('success');
  });

  it('promisify api and reject when failed', () => {
    function api({ fail }: any) {
      fail('error');
    }

    const promisifyAPI = promisify(api);

    expect.assertions(1);
    expect(promisifyAPI()).rejects.toEqual('error');
  });
});
