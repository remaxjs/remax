import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface PickerViewProps extends BaseProps {
  name?: string;
  value?: number[];
  indicatorStyle?: React.CSSProperties;
  indicatorClassName?: string;
  maskStyle?: React.CSSProperties;
  maskClassName?: string;
  onChange?: (event: any) => any;
}

export const PickerView: React.ComponentType<PickerViewProps> = createHostComponent<PickerViewProps>('picker-view');
