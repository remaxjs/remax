import * as React from 'react';
import { InputEvent } from '../../types';
import { createCallback, createInputEvent, aliasProps } from '../../createHostComponent';
import { TextareaProps } from './props';
import alias from './props/alias';

export type { TextareaProps };

export interface TextareaState {
  value?: string;
  controlled: boolean;
}

export default class Textarea extends React.Component<TextareaProps, TextareaState> {
  static defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,

    'wechat-selection-end': -1,
    'wechat-selection-start': -1,
    'wechat-fixed': false,
    'wechat-placeholder-class': 'textarea-placeholder',
    'wechat-cursor-spacing': 0,
    'wechat-cursor': -1,
    'wechat-show-confirm-bar': true,
    'wechat-adjust-position': true,
    'wechat-hold-keyboard': false,
    'wechat-disable-default-padding': false,
  };

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

    // 微信
    // 注意，微信要对 input 受控，必须要在 onInput 方法返回值
    return controlled ? this.props.value : e.target.value;
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

    if (process.env.REMAX_PLATFORM === 'toutiao') {
      inputProps.maxLength = inputProps.maxLength ?? 140;
    }

    if (process.env.REMAX_PLATFORM === 'wechat') {
      inputProps.maxLength = inputProps.maxLength ?? 140;
      inputProps.disabled = inputProps.disabled ?? false;
      inputProps.focus = inputProps.focus ?? false;
      inputProps.autoHeight = inputProps.autoHeight ?? false;
    }

    const nextProps = aliasProps(
      {
        ...inputProps,
        ...this.state,
      },
      alias
    );

    return React.createElement('textarea', nextProps);
  }
}
