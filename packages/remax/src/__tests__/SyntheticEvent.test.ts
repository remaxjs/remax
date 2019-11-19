import { createCallbackProxy } from '../SyntheticEvent';

describe('synthetic event', () => {
  describe('stop propagation', () => {
    it('only accept onClick', () => {
      const ontap = () => {};
      const newOntap = createCallbackProxy('onClick', ontap);

      expect(ontap).not.toBe(newOntap);

      const foo = () => {};
      const newFoo = createCallbackProxy('foo', foo);

      expect(foo).toBe(newFoo);
    });

    it('works correctly', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('onClick', foo);
      const bar = jest.fn();
      const barProxy = createCallbackProxy('onClick', bar);

      fooProxy({
        target: {
          dataset: {
            rid: 1,
          },
        },
        currentTarget: {
          dataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 1,
          },
        },
        currentTarget: {
          dataset: {
            rid: 2,
          },
        },
      });

      expect(foo).toBeCalledTimes(1);
      expect(bar).not.toBeCalled();

      fooProxy({
        target: {
          dataset: {
            rid: 1,
          },
        },
        currentTarget: {
          dataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 1,
          },
        },
        currentTarget: {
          dataset: {
            rid: 2,
          },
        },
      });

      expect(foo).toBeCalledTimes(2);
      expect(bar).not.toBeCalled();

      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
        },
        currentTarget: {
          dataset: {
            rid: 2,
          },
        },
      });

      expect(bar).toBeCalledTimes(1);
    });

    it('do not support on the native component without event target', () => {
      const foo = jest.fn(e => {
        expect(e.stopPropagation).toBeUndefined();
      });
      const fooProxy = createCallbackProxy('onClick', foo);
      const bar = jest.fn(e => {
        expect(e.stopPropagation).toBeUndefined();
      });
      const barProxy = createCallbackProxy('onClick', bar);

      fooProxy({
        currentTarget: {
          dataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        currentTarget: {
          dataset: {
            rid: 2,
          },
        },
      });
      expect(foo).toBeCalledTimes(1);
      expect(bar).toBeCalledTimes(1);
    });

    it('works correctly on alipay', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('onClick', foo);
      const bar = jest.fn();
      const barProxy = createCallbackProxy('onClick', bar);

      fooProxy({
        target: {
          dataset: {
            rid: 1,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });

      expect(foo).toBeCalledTimes(1);
      expect(bar).not.toBeCalled();

      fooProxy({
        target: {
          dataset: {
            rid: 1,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 1,
          },
        },
      });

      expect(foo).toBeCalledTimes(2);
      expect(bar).not.toBeCalled();

      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 2,
          },
        },
      });

      expect(bar).toBeCalledTimes(1);
    });
  });
});
