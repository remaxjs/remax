import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import createNativeComponent from '../createNativeComponent';

describe('createNativeComponent', () => {
  it('create native component', () => {
    const Card = createNativeComponent('card');
    const testRenderer = TestRenderer.create(<Card />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('rename ref', () => {
    const Card = createNativeComponent('card');
    const card = React.createRef();
    const testRenderer = TestRenderer.create(<Card ref={card} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
