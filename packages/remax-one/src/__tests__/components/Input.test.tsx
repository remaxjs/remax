import * as React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { Input } from '../../hostComponents';
import { InputEvent } from '../../types';

describe('Input', () => {
  it('render correctly', () => {
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

  it('default value', () => {
    const testRenderer = TestRenderer.create(<Input className="class" defaultValue="1" />);

    const instance = testRenderer.root.findByType('input');

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

    const originalEvent = {
      target: {},
      currentTarget: {},
      detail: {
        value: '2',
      },
      type: 'input',
    };

    act(() => {
      instance.props.onInput(originalEvent);
    });

    expect(instance.props.value).toEqual('2');
  });
});
