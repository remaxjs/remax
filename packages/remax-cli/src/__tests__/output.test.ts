describe('output', () => {
  it('notify', () => {
    const notify = jest.fn();
    jest.mock(
      'node-notifier',
      () => ({
        notify,
      }),
      {
        virtual: true,
      }
    );

    const { output } = require('../build/utils/output');

    output('test', 'red');
    expect(notify).not.toBeCalled();

    output('test', 'red', true);
    expect(notify).toBeCalledTimes(1);
  });
});
