import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface FormProps extends BaseProps {
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
  reportSubmit?: boolean;
  catchsubmit?: (e: any) => void;
  catchreset?: (e: any) => void;
}

const Form = createHostComponent<FormProps>('form');

export default Form;
