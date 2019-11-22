import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

const RichText = createHostComponent<RichTextProps>('rich-text');

export interface RichTextProps extends BaseProps {
  /** 节点列表/HTML String 1.4.0 */
  nodes?: any[] | string;
  /** 显示连续空格 2.4.1 */
  space?: 'ensp' | 'emsp' | 'nbsp';
}

export default RichText;
