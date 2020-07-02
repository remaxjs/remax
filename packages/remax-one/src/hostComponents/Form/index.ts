import createHostComponent from '../../createHostComponent';
import * as props from './props';
import { FormProps } from './props';

export type { FormProps };

const Form = createHostComponent<FormProps>('form', null, props.defaults);

export default Form;
