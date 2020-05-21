import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface TextareaProps extends BaseProps {
  name?: string;
  value?: string;
  placeholder?: string;
  placeholderStyle?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  autoHeight?: boolean;
  fixed?: boolean;
  cursorSpacing?: number;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  onInput?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: (e: any) => void;
}

export const Textarea = createHostComponent<TextareaProps>('textarea');
