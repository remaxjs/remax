import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

type Mode = 'selector' | 'multiSelector' | 'time' | 'date' | 'region';

interface PickerPropsMap extends BaseProps {
  selector: SelectorProps;
  multiSelector: MultipleSelectorProps;
  time: TimeProps;
  date: DateProps;
  region: RegionProps;
}

interface SelectorProps {
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

type MultipleSelectorProps = {
  onColumnChange?: (e: any) => void;
} & SelectorProps;

interface TimeProps {
  value?: string;
  start?: string;
  end?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

type DateProps = TimeProps & { fields?: string };

interface RegionProps {
  name?: string;
  value?: any[];
  customItem?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

export type PickerProps<T> = T extends Mode ? { mode: T } & PickerPropsMap[T] : never;

export const Picker: React.ComponentType<PickerProps<Mode>> = createHostComponent<PickerProps<Mode>>('picker');

Picker.defaultProps = {
  mode: 'selector',
  disabled: false,
};
