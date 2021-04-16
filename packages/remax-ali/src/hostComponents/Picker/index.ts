import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface PickerProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  name?: string;
  className?: string;
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
export const Picker = createHostComponent<PickerProps>('picker') as React.ComponentType<PickerProps>;
