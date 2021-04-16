import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface RadioGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export const RadioGroup = createHostComponent<RadioGroupProps>('radio-group') as React.ComponentType<RadioGroupProps>;
