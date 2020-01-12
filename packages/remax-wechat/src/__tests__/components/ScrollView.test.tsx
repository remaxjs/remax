import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ScrollView from '../../hostComponents/ScrollView';

describe('ScrollView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<ScrollView />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('handle scroll', () => {
    const event = { detail: { scrollTop: 10 } };
    const handleScroll = jest.fn(event => event);
    const component = TestRenderer.create(
      <ScrollView onScroll={handleScroll} />
    );

    const instance = component.root.findByType('scroll-view' as any);
    instance.props.onScroll(event);

    expect(handleScroll).toBeCalledWith(event);
  });
});
