import * as React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { Textarea } from '../../hostComponents';
import { InputEvent } from '../../types';

describe('Textarea', () => {
  it('render correctly in ali', () => {
    process.env.REMAX_PLATFORM = 'ali';
    const testRenderer = TestRenderer.create(
      <Textarea
        className="class"
        maxLength={140}
        onConfirm={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onBlur={() => {
          // ignore
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('default value', () => {
    const testRenderer = TestRenderer.create(<Textarea className="class" defaultValue="1" />);

    const instance = testRenderer.root.findByType('textarea');

    expect(instance.props.value).toEqual('1');

    instance.props.onInput({
      target: {},
      currentTarget: {},
      detail: {
        value: '2',
      },
    });

    expect(instance.props.value).toEqual('2');
  });

  it('value', () => {
    function TextareaTest() {
      const [value, setValue] = React.useState('1');
      const handleInput = (e: InputEvent) => {
        setValue(e.target.value);
      };

      return <Textarea className="class" value={value} onInput={handleInput} />;
    }

    const testRenderer = TestRenderer.create(<TextareaTest />);

    const instance = testRenderer.root.findByType('textarea');

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

  it('render correctly in wechat', () => {
    process.env.REMAX_PLATFORM = 'wechat';
    const testRenderer = TestRenderer.create(
      <Textarea
        className="class"
        onConfirm={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onBlur={() => {
          // ignore
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in toutiao', () => {
    process.env.REMAX_PLATFORM = 'wechat';
    const testRenderer = TestRenderer.create(
      <Textarea
        className="class"
        onConfirm={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onBlur={() => {
          // ignore
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('render correctly in web', () => {
    process.env.REMAX_PLATFORM = 'wechat';
    const testRenderer = TestRenderer.create(
      <Textarea
        className="class"
        onConfirm={() => {
          // ignore
        }}
        onFocus={() => {
          // ignore
        }}
        onBlur={() => {
          // ignore
        }}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
