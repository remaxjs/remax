import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Swiper from '../../../adapters/wechat/components/Swiper';

describe('Swiper', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Swiper />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('change correctly', () => {
    const handleChange = jest.fn();

    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Swiper onChange={handleChange} />
    );

    const instance = component.root.findByType('swiper' as any);
    expect(instance.props.current).toBe(0);

    TestRenderer.act(() => {
      instance.props.onChange({
        detail: {
          current: 1,
        },
      });
    });

    expect(instance.props.current).toBe(1);
    expect(handleChange).toBeCalledTimes(1);
  });
});
