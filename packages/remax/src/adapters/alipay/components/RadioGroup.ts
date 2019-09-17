import factory from './factory';

export interface RadioGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const RadioGroup = factory<RadioGroupProps>('radio-group');

export default RadioGroup;
