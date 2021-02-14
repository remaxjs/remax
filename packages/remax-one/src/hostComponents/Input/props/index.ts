import * as React from 'react';
import { InputEvent } from '../../../types';

interface CommonProps {
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
  type?: 'text' | 'number' | 'digit' | 'idcard';
  /** 是否是密码类型 */
  password?: boolean;
  /** 输入框为空时占位符 */
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  /** 是否禁用 */
  disabled?: boolean;
  /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
  maxLength?: number;
  /** 获取焦点 */
  focus?: boolean;
}

export interface InputProps extends CommonProps {
  onInput?: (e: InputEvent) => any;
  onConfirm?: (e: InputEvent) => void;
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;
}

export interface InputWebProps extends Omit<CommonProps, 'defaultValue'>, React.HTMLAttributes<HTMLInputElement> {
  onConfirm?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
