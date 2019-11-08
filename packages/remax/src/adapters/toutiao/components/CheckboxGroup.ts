import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface CheckboxGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

const CheckboxGroup = createHostComponent<CheckboxGroupProps>('checkbox-group');

export default CheckboxGroup;
