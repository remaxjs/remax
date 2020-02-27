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

import { output } from '../build/utils/output';

describe('output', () => {
  it('notify', () => {
    output('test', 'red');
    expect(notify).not.toBeCalled();

    output('test', 'red', true);
    expect(notify).toBeCalledTimes(1);
  });
});
