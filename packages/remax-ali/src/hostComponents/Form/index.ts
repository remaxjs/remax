import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface FormProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  reportSubmit?: boolean;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
}

export const Form = createHostComponent<FormProps>('form');
