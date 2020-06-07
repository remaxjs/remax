import * as React from 'react';

export interface LabelProps extends React.AriaAttributes {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 绑定控件的 id */
  htmlFor?: string;
}
