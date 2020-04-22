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

  it('resolve by success param', async () => {
    function api({ success }: any) {
      success('success');
    }

    const promisifyAPI = promisify(api);
    const success = jest.fn();

    await promisifyAPI({
      success,
    });

    expect(success).toBeCalledTimes(1);
  });

  it('promisify api and reject when failed', () => {
    function api({ fail }: any) {
      fail('error');
    }

    const promisifyAPI = promisify(api);

    expect.assertions(1);
    expect(promisifyAPI()).rejects.toEqual('error');
  });

  it('reject by fail param', async () => {
    function api({ fail }: any) {
      fail('fail');
    }

    const promisifyAPI = promisify(api);
    const fail = jest.fn();

    await promisifyAPI({
      fail,
    }).catch(error => {
      expect(error).toBe('fail');
    });

    expect(fail).toBeCalledTimes(1);
  });
});
