import createHostComponent from '../../createHostComponent';
import defaults from './props/default';
import { FormProps } from './props';

export type { FormProps };

const Form = createHostComponent<FormProps>('form', null, defaults);

export default Form;
