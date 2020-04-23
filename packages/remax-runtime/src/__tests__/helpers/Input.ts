import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface InputProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  name?: string;
  type?: string;
  password?: boolean;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  confirmType?: 'done' | 'go' | 'next' | 'search' | 'send';
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  randomNumber?: boolean;
  controlled?: boolean;
  onInput?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}
const Input = createHostComponent<InputProps>('input');

export default Input;
