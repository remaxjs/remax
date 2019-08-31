import factory from './factory';
import { CSSProperties } from 'react';

const Editor = factory<EditorProps>('editor');

export interface EditorProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  readOnly?: boolean; // false 否 设置编辑器为只读 2.7.0
  placeholder?: string; //  否 提示信息 2.7.0
  showImgSize?: boolean; // false 否 点击图片时显示图片大小控件 2.7.0
  showImgToolbar?: boolean; // false 否 点击图片时显示工具栏控件 2.7.0
  showImgResize?: boolean; // false 否 点击图片时显示修改尺寸控件 2.7.0
  onClick?: (event: any) => void;
  onReady: (event: any) => void; //否 编辑器初始化完成时触发 2.7.0
  onFocus: (event: any) => void; //否 编辑器聚焦时触发，event.detail = {html, text, delta} 2.7.0
  onBlur: (event: any) => void; //否 编辑器失去焦点时触发，detail = {html, text, delta} 2.7.0
  onInput: (event: any) => void; //否 编辑器内容改变时触发，detail = {html, text, delta} 2.7.0
  onStatusChange: (event: any) => void; //否 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 2.7.0
}
export default Editor;
