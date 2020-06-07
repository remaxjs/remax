import * as React from 'react';
import { InputEvent } from '../../types';
import { createCallback, createInputEvent } from '../../createHostComponent';
import { TextareaProps } from './props';

export type { TextareaProps };

export interface TextareaState {
  value?: string;
  controlled: boolean;
}

export default class Textarea extends React.Component<TextareaProps, TextareaState> {
  state: TextareaState = {
    value: '',
    // 阿里
    controlled: false,
  };

  constructor(props: TextareaProps) {
    super(props);

    const controlled = props.value !== undefined;
    const value = controlled ? props.value : props.defaultValue;

    this.state = {
      value,
      controlled,
    };
  }

  componentDidUpdate() {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({ value: this.props.value });
    }
  }

  handleInput = (e: InputEvent) => {
    const { controlled } = this.state;

    if (!controlled) {
      this.setState({ value: e.target.value });
    }

    if (typeof this.props.onInput === 'function') {
      return this.props.onInput(e);
    }
  };

  render() {
    const inputProps = {
      ...this.props,
      onInput: createCallback(this.handleInput, createInputEvent),
    };

    if (inputProps.onConfirm) {
      inputProps.onConfirm = createCallback(this.props.onConfirm, createInputEvent);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = createCallback(this.props.onFocus, createInputEvent);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = createCallback(this.props.onBlur, createInputEvent);
    }

    return React.createElement('textarea', {
      ...inputProps,
      ...this.state,
    });
  }
}
