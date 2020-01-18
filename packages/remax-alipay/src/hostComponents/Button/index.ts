import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface ButtonProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'default' | 'mini';
  type?: 'primary' | 'default' | 'warn';
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  formType?: 'submit' | 'reset';
  openType?: 'share' | 'getAuthorize' | 'contactShare' | 'lifestyle';
  scope?: 'phoneNumber' | 'userInfo';
  appParameter?: string;
  publicId?: string;
  onTap?: (e: any) => void;
  onClick?: (e: any) => void;
  onGetAuthorize?: (e: any) => void;
  onError?: (e: any) => void;
}

const Button = createHostComponent<ButtonProps>('button');

export default Button;
