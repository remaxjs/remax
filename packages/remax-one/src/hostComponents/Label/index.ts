import createHostComponent from '../../createHostComponent';

export interface LabelProps extends React.AriaAttributes {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 绑定控件的 id */
  for?: string;
}

export default createHostComponent<LabelProps>('label');
