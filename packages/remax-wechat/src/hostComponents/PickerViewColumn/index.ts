import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export type PickerViewColumnProps = BaseProps;

export const PickerViewColumn = createHostComponent<PickerViewColumnProps>('picker-view-column');
