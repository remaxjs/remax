import factory from './factory';
import { BaseProps } from './baseTyping';

const PickerViewColumn = factory<PickerViewColumnProps>('picker-view-column');

export type PickerViewColumnProps = BaseProps;

export default PickerViewColumn;
