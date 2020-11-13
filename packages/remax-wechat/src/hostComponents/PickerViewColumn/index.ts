import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export type PickerViewColumnProps = BaseProps;

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html
 */
export const PickerViewColumn: React.ComponentType<PickerViewColumnProps> = createHostComponent<PickerViewColumnProps>(
  'picker-view-column'
);
