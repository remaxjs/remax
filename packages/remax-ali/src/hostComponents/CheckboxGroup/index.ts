import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export const CheckboxGroup: React.ComponentType<CheckboxGroupProps> = createHostComponent<CheckboxGroupProps>(
  'checkbox-group'
);
