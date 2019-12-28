import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface EditorProps extends BaseProps {
  /** 设置编辑器为只读 2.7.0  */
  readOnly?: boolean;
  /** 提示信息 2.7.0  */
  placeholder?: string;
  /** 点击图片时显示图片大小控件 2.7.0  */
  showImgSize?: boolean;
  /** 点击图片时显示工具栏控件 2.7.0  */
  showImgToolbar?: boolean;
  /** 点击图片时显示修改尺寸控件 2.7.0  */
  showImgResize?: boolean;
  /** 编辑器初始化完成时触发 2.7.0  */
  onReady?: (event: any) => any;
  /** 编辑器聚焦时触发，event.detail = {html, text, delta} 2.7.0  */
  onFocus?: (event: any) => any;
  /** 编辑器失去焦点时触发，detail = {html, text, delta} 2.7.0  */
  onBlur?: (event: any) => any;
  /** 编辑器内容改变时触发，detail = {html, text, delta} 2.7.0  */
  onInput?: (event: any) => any;
  /** 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 2.7.0  */
  onStatusChange?: (event: any) => any;
}
export default createHostComponent<EditorProps>('editor');
