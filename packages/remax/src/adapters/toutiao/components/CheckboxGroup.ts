import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

export interface CheckboxGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

const CheckboxGroup = createHostComponent<CheckboxGroupProps>('checkbox-group');

export default CheckboxGroup;
