import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

const PickerViewColumn = createHostComponent<PickerViewColumnProps>(
  'picker-view-column'
);

export type PickerViewColumnProps = BaseProps;

export default PickerViewColumn;
