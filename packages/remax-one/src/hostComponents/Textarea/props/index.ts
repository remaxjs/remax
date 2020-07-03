import * as React from 'react';
import { InputEvent } from '../../../types';

export { default as alias } from './alias';

interface CommonProps {
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
  maxLength?: number;
  focus?: boolean;
  /** 是否自动增高，设置auto-height时，style.height不生效 */
  autoHeight?: boolean;
}

export interface TextareaProps extends CommonProps {
  onInput?: (event: InputEvent) => any;
  onFocus?: (event: InputEvent) => void;
  onBlur?: (event: InputEvent) => void;
  onConfirm?: (event: InputEvent) => void;
}

export interface TextareaWebProps extends Omit<CommonProps, 'defaultValue'>, React.HTMLAttributes<HTMLTextAreaElement> {
  onConfirm?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
