import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface RadioGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export const RadioGroup: React.ComponentType<RadioGroupProps> = createHostComponent<RadioGroupProps>('radio-group');
