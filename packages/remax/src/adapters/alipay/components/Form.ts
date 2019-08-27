import factory from './factory';

export interface FormProps {
  reportSubmit: boolean;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
}
const Form = factory<FormProps>('form');

export default Form;
