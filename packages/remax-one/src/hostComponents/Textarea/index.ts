import * as React from 'react';
import { InputEvent } from '../../types';
import { createCallback, createInputEvent } from '../../createHostComponent';

export interface TextareaProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  value?: any;
  defaultValue?: any;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  disabled?: boolean;
  /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
  maxlength?: number;
  focus?: boolean;
  /** 是否自动增高，设置auto-height时，style.height不生效 */
  autoHeight?: boolean;
  onInput?: (event: InputEvent) => any;
  onFocus?: (event: InputEvent) => void;
  onBlur?: (event: InputEvent) => void;
  onConfirm?: (event: InputEvent) => void;
}

export interface TextareaState {
  value?: string;
  controlled: boolean;
}

export default class Textarea extends React.Component<TextareaProps, TextareaState> {
  static defaultProps = {
    'toutiao-maxlength': -1,
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-maxlength': -1,
    'wechat-selection-end': 999,
    'wechat-selection-start': 999,
    'wechat-fixed': false,
  };

  state: TextareaState = {
    value: '',
    // 支付宝
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

    return React.createElement('textarea', {
      ...inputProps,
      ...this.state,
    });
  }
}
