import * as React from 'react';

import { BaseProps } from '../../types/component';
import { createHostComponent } from '@remax/runtime';

export interface InputProps extends BaseProps {
  name?: string;
  focus?: boolean;
  maxlength?: number;
  value?: string;
  password?: boolean;
  type?: 'text' | 'number' | 'digit';
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  cursorSpacing?: number;
  onInput?: (e: any) => void | string;
  onClick?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: (e: any) => void;
}

export const Input: React.ComponentType<InputProps> = createHostComponent<InputProps>('input');

Input.defaultProps = {
  type: 'text',
  password: false,
  value: '',
  disabled: false,
  maxlength: 140,
  focus: false,
  selectionEnd: -1,
  selectionStart: -1,
  cursorSpacing: 0,
  cursor: -1,
};
