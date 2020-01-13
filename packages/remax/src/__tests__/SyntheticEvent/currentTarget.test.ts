import { createCallbackProxy } from '../../SyntheticEvent';

describe('synthetic event for currentTarget event', () => {
  describe('stop propagation', () => {
    it('only accept onClick', () => {
      const ontap = () => void 0;
      const newOntap = createCallbackProxy('onClick', ontap);

      expect(ontap).not.toBe(newOntap);

      const catchTap = () => void 0;
      const newCatchTap = createCallbackProxy('catchClick', catchTap);

      expect(catchTap).toBe(newCatchTap);
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
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 10,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 11,
          },
        },
      });

      fooProxy({
        target: {
          dataset: {
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 10,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 10,
          },
        },
        currentTarget: {
          dataset: {
            rid: 11,
          },
        },
      });

      expect(foo).toBeCalledTimes(2);
      expect(bar).not.toBeCalled();

      fooProxy({
        target: {
          dataset: {
            rid: 8,
          },
        },
        currentTarget: {
          dataset: {
            rid: 8,
          },
        },
      });
      barProxy({
        target: {
          dataset: {
            rid: 8,
          },
        },
        currentTarget: {
          dataset: {
            rid: 9,
          },
        },
      });

      expect(foo).toBeCalledTimes(3);
      expect(bar).not.toBeCalled();

      barProxy({
        target: {
          dataset: {
            rid: 6,
          },
        },
        currentTarget: {
          dataset: {
            rid: 6,
          },
        },
      });

      expect(bar).toBeCalledTimes(1);

      fooProxy({
        target: {
          dataset: {
            rid: 13,
          },
        },
        currentTarget: {
          dataset: {
            rid: 11,
          },
        },
      });

      barProxy({
        target: {
          dataset: {
            rid: 14,
          },
        },
        currentTarget: {
          dataset: {
            rid: 15,
          },
        },
      });

      expect(bar).toBeCalledTimes(2);
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

    it('invoke parent onClick callback every time with stopPropagation called', () => {
      const foo = jest.fn(e => {
        e.stopPropagation();
      });
      const fooProxy = createCallbackProxy('onClick', foo);

      const event = {
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
      };

      fooProxy(event);
      fooProxy(event);

      expect(foo).toBeCalledTimes(2);
    });
  });
});
