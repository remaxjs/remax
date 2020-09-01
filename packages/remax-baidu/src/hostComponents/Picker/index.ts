import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface PickerProps extends BaseProps {
  name?: string;
  mode?: 'selector' | 'time' | 'date' | 'multiSelector' | 'region';
  disabled?: boolean;
  range?: string[] | Array<Record<string, unknown>> | string[][] | Array<Array<Record<string, unknown>>>;
  rangeKey?: string;
  value?: number;
  title?: string;
  start?: string;
  end?: string;
  fields?: string;
  year?: string;
  month?: string;
  day?: string;
  customItem?: string;
  onClick?: (event: any) => any;
  onTap?: (event: any) => any;
  onCancel?: (event: any) => any;
  onChange?: (event: any) => any;
  onColumnChange?: (event: any) => void;
}
export const Picker: React.ComponentType<PickerProps> = createHostComponent<PickerProps>('picker');

Picker.defaultProps = {
  mode: 'selector',
  disabled: false,
  range: [],
  fields: 'day',
};
