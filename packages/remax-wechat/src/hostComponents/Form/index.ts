import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface FormProps extends BaseProps {
  /** 是否返回 formId 用于发送模板消息 1.0.0  */
  reportSubmit?: boolean;
  /** (default: 0) 等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId 2.6.2  */
  reportSubmitTimeout?: number;
  /** 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''} 1.0.0  */
  onSubmit?: (event: any) => any;
  /** 表单重置时会触发 reset 事件 1.0.0  */
  onReset?: (event: any) => any;
}

export default createHostComponent<FormProps>('form');
