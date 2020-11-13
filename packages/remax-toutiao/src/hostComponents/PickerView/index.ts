import * as React from 'react';

import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface PickerViewProps extends BaseProps {
  name?: string;
  value?: number[];
  indicatorStyle?: React.CSSProperties;
  maskStyle?: string;
  onChange?: (e: any) => void;
}

export const PickerView: React.ComponentType<PickerViewProps> = createHostComponent<PickerViewProps>('picker-view');
