import notifier from 'node-notifier';
import { output } from '../build/utils/output';

describe('output', () => {
  it('notify', () => {
    output('test', 'red');
    expect(notifier.notify).not.toBeCalled();
  });
});
