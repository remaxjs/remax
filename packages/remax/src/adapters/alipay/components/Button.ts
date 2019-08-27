import factory from './factory';

export interface ButtonProps {
  id?: string;
  type?: 'primary' | 'default' | 'warn' | undefined;
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
  formType?: string;
  openType?: string;
  scope?: string;
  appParameter?: string;
  publicId?: string;
  onTap?: (e: any) => void;
}
export const Button = factory<ButtonProps>('button');

export default Button;
