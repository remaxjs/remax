import * as React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { Input } from '../../hostComponents';
import { InputEvent } from '../../types';

describe('Input', () => {
  it('default value', () => {
    const testRenderer = TestRenderer.create(<Input className="class" defaultValue="1" />);

    const instance = testRenderer.root.findByType('input');

    expect(instance.props.value).toEqual('1');
  });

  it('value', () => {
    function InputTest() {
      const [value, setValue] = React.useState('1');
      const handleInput = (e: InputEvent) => {
        setValue(e.target.value);
      };

      return <Input className="class" value={value} onInput={handleInput} />;
    }

    const testRenderer = TestRenderer.create(<InputTest />);

    const instance = testRenderer.root.findByType('input');

    expect(instance.props.value).toEqual('1');

    const nativeEvent = {
      target: {},
      currentTarget: {},
      detail: {
        value: '2',
      },
      type: 'input',
    };

    act(() => {
      instance.props.onInput(nativeEvent);
    });

    expect(instance.props.value).toEqual('2');
  });

  it('render correctly in ali', () => {
    process.env.REMAX_PLATFORM = 'ali';
    const testRenderer = TestRenderer.create(
      <Input
        className="class"
        maxLength={140}
        onBlur={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onConfirm={() => {
          // ignore
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in wechat', () => {
    process.env.REMAX_PLATFORM = 'wechat';

    const testRenderer = TestRenderer.create(
      <Input
        className="class"
        onBlur={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onConfirm={() => {
          // ignore
        }}
      />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in toutiao', () => {
    process.env.REMAX_PLATFORM = 'toutiao';

    const testRenderer = TestRenderer.create(
      <Input
        className="class"
        onBlur={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onConfirm={() => {
          // ignore
        }}
      />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in web', () => {
    process.env.REMAX_PLATFORM = 'web';

    const testRenderer = TestRenderer.create(
      <Input
        className="class"
        onBlur={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onConfirm={() => {
          // ignore
        }}
      />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
