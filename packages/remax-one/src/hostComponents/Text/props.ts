import { TapEvent } from '../../types';

export default interface TextProps extends React.AriaAttributes {
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
