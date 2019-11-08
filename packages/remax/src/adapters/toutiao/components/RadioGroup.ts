import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface RadioGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

const RadioGroup = createHostComponent<RadioGroupProps>('radio-group');

export default RadioGroup;
