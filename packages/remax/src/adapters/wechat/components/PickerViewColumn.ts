import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

const PickerViewColumn = createHostComponent<PickerViewColumnProps>(
  'picker-view-column'
);

export type PickerViewColumnProps = BaseProps;

export default PickerViewColumn;
