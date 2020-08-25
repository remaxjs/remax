import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface ButtonProps extends BaseProps {
  size?: 'default' | 'mini';
  type?: 'primary' | 'default' | 'warn';
  plain?: boolean;
  formType?: 'submit' | 'reset' | 'buttonclick';
  openType?:
    | 'share'
    | 'getUserInfo'
    | 'getPhoneNumber'
    | 'openSetting'
    | 'chooseAddress'
    | 'chooseInvoiceTitle'
    | 'contact';
  hoverClassName?: string;
  hoverStopPropagation?: boolean;
  hoverStartTime?: number;
  hoverStayTime?: number;
  disabled?: boolean;
  loading?: boolean;
  onGetPhoneNumber?: (event: any) => void;
  onGetUserInfo?: (event: any) => void;
  onOpenSetting?: (event: any) => void;
  onContact?: (event: any) => void;
  onChooseAddress?: (event: any) => void;
  onChooseInvoiceTitle?: (event: any) => void;
  contact?: (event: any) => void;
}

export const Button: React.ComponentType<ButtonProps> = createHostComponent<ButtonProps>('button');

Button.defaultProps = {
  hoverClassName: 'button-hover',
  hoverStartTime: 20,
  hoverStayTime: 70,
  hoverStopPropagation: false,
  disabled: false,
  loading: false,
  size: 'default',
  type: 'default',
  plain: false,
  formType: 'buttonclick',
};
