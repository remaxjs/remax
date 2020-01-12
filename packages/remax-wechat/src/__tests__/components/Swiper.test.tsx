import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Swiper from '../../hostComponents/Swiper';

describe('Swiper', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Swiper />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('change correctly', () => {
    const handleChange = jest.fn();

    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Swiper onChange={handleChange} current={0} />
    );

    const instance = component.root.findByType('swiper' as any);
    expect(instance.props.current).toBe(0);

    const event = {
      detail: {
        current: 1,
      },
    };

    instance.props.onChange(event);

    expect(handleChange).toBeCalledWith(event);
  });
});
