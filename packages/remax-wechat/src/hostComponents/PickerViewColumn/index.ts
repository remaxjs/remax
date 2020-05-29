import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export type PickerViewColumnProps = BaseProps;

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html
 */
export const PickerViewColumn = createHostComponent<PickerViewColumnProps>('picker-view-column');
