import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import createNativeComponent from '../createNativeComponent';

describe('createNativeComponent', () => {
  it('create native component', () => {
    const Card = createNativeComponent('card');
    const testRenderer = TestRenderer.create(<Card />);
    expect(testRenderer.toJSON()).toMatchSnapshot();

    expect(() => {
      testRenderer.root.findByType('card' as any).props.__ref('foo');
    }).not.toThrow();
  });

  it('rename ref', () => {
    const Card = createNativeComponent('card');
    const card = React.createRef();
    const testRenderer = TestRenderer.create(<Card ref={card} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();

    testRenderer.root.findByType('card' as any).props.__ref('foo');
    expect(card.current).toBe('foo');
  });

  it('functional ref', () => {
    const Card = createNativeComponent('card');
    let current = '';
    const card = (e: any) => {
      current = e;
    };
    const testRenderer = TestRenderer.create(<Card ref={card} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();

    testRenderer.root.findByType('card' as any).props.__ref('foo');
    expect(current).toBe('foo');
  });
});
