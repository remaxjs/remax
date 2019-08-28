import factory from './factory';

export interface ButtonProps {
  id?: string;
  className?: string;
  size?: 'default' | 'mini';
  type?: 'primary' | 'default' | 'warn';
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  formType?: 'submit' | 'reset';
  openType?: 'share' | 'getAuthorize' | 'contactShare' | 'lifestyle';
  scope?: 'phoneNumber';
  appParameter?: string;
  publicId?: string;
  onTap?: (e: any) => void;
}
export const Button = factory<ButtonProps>('button');

export default Button;
