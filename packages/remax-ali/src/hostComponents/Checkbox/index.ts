import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface CheckboxProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  name?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  onChange?: (e: any) => void;
}

export const Checkbox: React.ComponentType<CheckboxProps> = createHostComponent<CheckboxProps>('checkbox');
