import { createCallbackProxy } from '../../SyntheticEvent';

describe('synthetic event for targetDataset event', () => {
  describe('stop propagation', () => {
    it('only accept onClick', () => {
      const ontap = () => void 0;
      const newOntap = createCallbackProxy('onClick', ontap);

      expect(ontap).not.toBe(newOntap);

      const catchTap = () => void 0;
      const newCatchTap = createCallbackProxy('catchClick', catchTap);

      expect(catchTap).toBe(newCatchTap);
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
        target: {
          dataset: {
            rid: 1,
          },
          targetDataset: {},
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {},
        },
      });
      expect(foo).toBeCalledTimes(1);
      expect(bar).toBeCalledTimes(1);
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

      expect(foo).toBeCalledTimes(3);
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

      fooProxy({
        target: {
          dataset: {
            rid: 5,
          },
          targetDataset: {
            rid: 6,
          },
        },
      });

      barProxy({
        target: {
          dataset: {
            rid: 8,
          },
          targetDataset: {
            rid: 7,
          },
        },
      });

      expect(bar).toBeCalledTimes(2);
    });

    it('invoke parent onClick callback every time with stopPropagation called', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('onClick', foo);

      const event = {
        target: {
          dataset: {
            rid: 2,
          },
          targetDataset: {
            rid: 1,
          },
        },
      };

      fooProxy(event);
      fooProxy(event);

      expect(foo).toBeCalledTimes(2);
    });
  });
});
