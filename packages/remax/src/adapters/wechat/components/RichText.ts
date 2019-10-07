import factory from './factory';
import { BaseProps } from './baseTyping';

const RichText = factory<RichTextProps>('rich-text');

export interface RichTextProps extends BaseProps {
  /** 节点列表/HTML String 1.4.0 */
  nodes?: any[] | string;
  /** 显示连续空格 2.4.1 */
  space?: 'ensp' | 'emsp' | 'nbsp';
}

export default RichText;
