import { createCallbackProxy } from '../SyntheticEvent/createCallbackProxy';
import VNode from '../VNode';
import Container from '../Container';

class SyntheticEventTester {
  callbacks: Array<((...params: any) => void) | null> = [];

  constructor(callbacks: Array<((...params: any) => void) | null>) {
    const container = new Container({});
    const root = new VNode({
      id: 1,
      type: 'view',
      container,
    });

    callbacks.reverse().reduce((parent, cb, index) => {
      const node = new VNode({
        id: index + 2,
        type: 'view',
        container,
        props: {},
      });

      const callback = createCallbackProxy(
        'onClick',
        node,
        cb || (() => void 0)
      );
      if (cb) {
        node.props.onClick = callback;
      }

      this.callbacks.unshift(cb ? callback : null);
      node.parent = parent;

      return node;
    }, root);
  }

  trigger() {
    this.callbacks.forEach(cb => cb && cb({}));
  }
}

describe('synthetic event', () => {
  describe('stop propagation', () => {
    it('only accept onClick', () => {
      const onTap = () => void 0;

      const node = new VNode({
        id: 1,
        type: 'view',
        container: new Container({}),
        props: {},
      });
      const newOnTap = createCallbackProxy('onClick', node, onTap);

      expect(onTap).not.toBe(newOnTap);

      const catchTap = () => void 0;
      const newCatchTap = createCallbackProxy('catchClick', node, catchTap);

      expect(catchTap).toBe(newCatchTap);
    });
    it('normal', () => {
      const first = jest.fn();
      const second = jest.fn();
      const third = jest.fn();
      const callbacks = [first, second, third];
      const tester = new SyntheticEventTester(callbacks);

      tester.trigger();

      expect(first).toBeCalled();
      expect(second).toBeCalled();
      expect(third).toBeCalled();
    });

    it('stop at first', () => {
      const first = jest.fn();
      const second = jest.fn();
      const third = jest.fn();
      const callbacks = [
        (e: any) => {
          e.stopPropagation();
          first();
        },
        second,
        third,
      ];

      const tester = new SyntheticEventTester(callbacks);

      tester.trigger();

      expect(first).toBeCalled();
      expect(second).not.toBeCalled();
      expect(third).not.toBeCalled();

      tester.trigger();

      expect(first).toBeCalled();
      expect(second).not.toBeCalled();
      expect(third).not.toBeCalled();
    });

    it('stop at middle', () => {
      const first = jest.fn();
      const second = jest.fn();
      const third = jest.fn();
      const callbacks = [
        first,
        null,
        (e: any) => {
          e.stopPropagation();
          second();
        },
        null,
        third,
        null,
      ];

      const tester = new SyntheticEventTester(callbacks);

      tester.trigger();

      expect(first).toBeCalled();
      expect(second).toBeCalled();
      expect(third).not.toBeCalled();

      tester.trigger();

      expect(first).toBeCalled();
      expect(second).toBeCalled();
      expect(third).not.toBeCalled();
    });

    it('stop at last', () => {
      const first = jest.fn();
      const second = jest.fn();
      const third = jest.fn();
      const callbacks = [
        first,
        null,
        second,
        null,
        (e: any) => {
          e.stopPropagation();
          third();
        },
        null,
      ];

      const tester = new SyntheticEventTester(callbacks);

      tester.trigger();

      expect(first).toBeCalled();
      expect(second).toBeCalled();
      expect(third).toBeCalled();

      tester.trigger();

      expect(first).toBeCalled();
      expect(second).toBeCalled();
      expect(third).toBeCalled();
    });
  });
});
