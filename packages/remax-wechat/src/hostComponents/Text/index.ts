import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface TextProps extends BaseProps {
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
}

export default createHostComponent<TextProps>('text');
