import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface TextareaProps extends BaseProps {
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  autoHeight?: boolean;
  cursor?: number;
  autoFocus?: boolean;
  confirmType?: 'default' | 'done' | 'send' | 'search' | 'next' | 'go';
  confirmHold?: boolean;
  focus?: boolean;
  fixed?: boolean;
  cursorSpacing?: number;
  showConfirmBar?: boolean;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  onFocus?: (e: GenericEvent) => void;
  onBlur?: (e: GenericEvent) => void;
  onLinechange?: (e: GenericEvent) => void;
  onInput?: (e: GenericEvent) => void;
  onConfirm?: (e: GenericEvent) => void;
}

export const Textarea: React.ComponentType<TextareaProps> = createHostComponent<TextareaProps>('textarea');

Textarea.defaultProps = {
  disabled: false,
  maxLength: 140,
  autoHeight: false,
  cursor: -1,
  autoFocus: false,
  confirmType: 'default',
  confirmHold: false,
  focus: false,
  fixed: false,
  cursorSpacing: 0,
  showConfirmBar: true,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
};
