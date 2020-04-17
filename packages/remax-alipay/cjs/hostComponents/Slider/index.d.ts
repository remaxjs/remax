export interface SliderProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  value?: number;
  showValue?: boolean;
  activeColor?: string;
  backgroundColor?: string;
  trackSize?: number;
  handleSize?: number;
  handleColor?: string;
  onChange?: (e: any) => void;
  onChanging?: (e: any) => void;
}
declare const _default: import('react').ForwardRefExoticComponent<SliderProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
