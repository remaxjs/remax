import factory from './factory';

export interface CheckboxGroupProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const CheckboxGroup = factory<CheckboxGroupProps>('checkbox-group');

export default CheckboxGroup;
