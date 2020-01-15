import createHostComponent from '../../createHostComponent';

export interface CheckboxProps extends React.AriaAttributes {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** checkbox标识，选中时触发checkbox-group的 change 事件，并携带 checkbox 的 value */
  value?: string;
  /** 当前是否选中，可用来设置默认选中 */
  checked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** checkbox的颜色，同css的color */
  color?: string;
}

export default createHostComponent<CheckboxProps>('checkbox');
