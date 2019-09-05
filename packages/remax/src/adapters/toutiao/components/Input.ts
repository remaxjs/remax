import { CSSProperties } from 'react';
import factory from './factory';

export interface InputProps {
  focus?: boolean;
  maxlength?: number;
  value: string;
  password?: boolean;
  type: 'text' | 'number' | 'digit';
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  placeholder?: string;
  placeholderStyle?: CSSProperties;
  placeholderClass?: string;
  disabled?: boolean;
  cursorSpacing?: number;
  onInput?: (e: any) => void | string;
  onClick?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: () => void;
}

export default factory<InputProps>('input');
