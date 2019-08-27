import factory from './factory';
export interface RadioGroupProps {
  id?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const RadioGroup = factory<RadioGroupProps>('radio-group');

export default RadioGroup;
