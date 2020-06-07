import createHostComponent from '../../createHostComponent';
import { FormProps } from './props';

export type { FormProps };

const Form = createHostComponent<FormProps>('form');

export default Form;
