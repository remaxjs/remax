import factory from './factory';
import { CSSProperties } from 'react';

const Text = factory<TextProps>('text');

export interface TextProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** (default: false) 文本是否可选 1.1.0 */
  selectable?: boolean;
  /**
   * 1.4.0
   * 显示连续空格
   *
   * @ ensp: 中文字符空格一半大小;
   * @ emsp: 中文字符空格大小;
   * @ nbsp: 根据字体设置的空格大小;
   */
  space?: 'ensp' | 'emsp' | 'nbsp';
  /** (default: false) 是否解码 1.4.0 */
  decode?: boolean;
  onClick?: (event: any) => any;
  animation?: Array<Record<string, any>>;
}

export default Text;
