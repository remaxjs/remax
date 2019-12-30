import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ScrollView from '../../../adapters/wechat/components/ScrollView';

describe('ScrollView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<ScrollView />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('handle scroll', async done => {
    expect.assertions(2);

    const event = { detail: { scrollTop: 10 } };
    const handleScroll = jest.fn(event => event);
    let component: any;

    TestRenderer.act(() => {
      component = TestRenderer.create(
        <ScrollView onScroll={handleScroll} scrollTop={0} />
      );
    });

    const instance = component.root.findByType('scroll-view' as any);

    TestRenderer.act(() => {
      instance.props.onScroll(event);
    });

    expect(handleScroll).toBeCalledWith(event);

    setTimeout(() => {
      expect(instance.props.scrollTop).toBe(10);
      done();
    }, 450);
  });
});
