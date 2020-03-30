import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { TapEvent } from '../../types';

export interface TextProps extends React.AriaAttributes {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 文本是否可选 */
  selectable?: boolean;
  /** 是否解码 */
  decode?: boolean;
  onTap?: (event: TapEvent) => void;
}
const Text = createHostComponent<TextProps>('text');

export default Text;
