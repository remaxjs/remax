import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface PickerViewProps extends BaseProps {
  value?: number[];
  indicatorStyle: string;
  maskStyle?: string;
  onChange?: (e: any) => void;
}

export default createHostComponent<PickerViewProps>('picker-view');
