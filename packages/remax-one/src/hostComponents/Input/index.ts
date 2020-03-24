import * as React from 'react';
import { InputEvent } from '../../types';
import { createCallback, createInputEvent } from '../../createHostComponent';

export interface InputProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 输入框的初始内容 */
  defaultValue?: string;
  value?: string;
  name?: string;
  /** input 的类型 */
  type?: string;
  /** 是否是密码类型 */
  password?: boolean;
  /** 输入框为空时占位符 */
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  /** 是否禁用 */
  disabled?: boolean;
  /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
  maxlength?: number;
  /** 获取焦点 */
  focus?: boolean;
  onInput?: (e: InputEvent) => any;
  onConfirm?: (e: InputEvent) => void;
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;
}

export interface InputState {
  value?: string;
  controlled: boolean;
}

export default class Input extends React.Component<InputProps, InputState> {
  static defaultProps = {
    'toutiao-maxlength': 140,
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-maxlength': 140,
    'wechat-selection-end': 999,
    'wechat-selection-start': 999,
  };

  state: InputState = {
    value: '',
    // 支付宝
    controlled: false,
  };

  constructor(props: InputProps) {
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
      onConfirm: createCallback(this.props.onConfirm, createInputEvent),
      onFocus: createCallback(this.props.onFocus, createInputEvent),
      onBlur: createCallback(this.props.onBlur, createInputEvent),
    };

    return React.createElement('input', {
      ...inputProps,
      ...this.state,
    });
  }
}
