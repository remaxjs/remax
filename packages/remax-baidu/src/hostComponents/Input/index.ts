import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface InputProps extends BaseProps {
  value?: string;
  name?: string;
  type?: 'text' | 'number' | 'idcard' | 'digit';
  password?: boolean;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  maxLength?: number;
  cursorSpacing?: number;
  focus?: boolean;
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  onInput?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  onConfirm?: (event: any) => void;
}

export const Input: React.ComponentType<InputProps> = createHostComponent<InputProps>('input');

Input.defaultProps = {
  type: 'text',
  password: false,
  placeholderClassName: 'input-placeholder',
  disabled: false,
  maxLength: 140,
  cursorSpacing: 0,
  focus: false,
  confirmHold: false,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
};
