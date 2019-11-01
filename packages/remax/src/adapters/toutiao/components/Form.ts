import factory from './factory';

export interface FormProps {
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
  reportSubmit?: boolean;
  catchsubmit?: (e: any) => void;
  catchreset?: (e: any) => void;
}

const Form = factory<FormProps>('form');

export default Form;
