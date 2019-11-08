import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface PickerViewProps extends BaseProps {
  value?: number[];
  indicatorStyle: string;
  maskStyle?: string;
  onChange?: (e: any) => void;
}

const PickerView = createHostComponent<PickerViewProps>('picker-view');

export default PickerView;
