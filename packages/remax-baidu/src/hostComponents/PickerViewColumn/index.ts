import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export type PickerViewColumnProps = BaseProps;

export const PickerViewColumn: React.ComponentType<PickerViewColumnProps> = createHostComponent<PickerViewColumnProps>(
  'picker-view-column'
);
