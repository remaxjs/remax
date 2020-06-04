import createHostComponent from '../../createHostComponent';
import { FormProps } from './props';

export type { FormProps };

const Form = createHostComponent<FormProps>('form', {
  wechat: {
    'wechat-report-submit': false,
    'wechat-report-submit-timeout': 0,
  },
});

export default Form;
