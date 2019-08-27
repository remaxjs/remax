import factory from './factory';

export interface CheckboxGroupProps {
  id?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const CheckboxGroup = factory<CheckboxGroupProps>('checkbox-group');

export default CheckboxGroup;
