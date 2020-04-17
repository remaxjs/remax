export interface ProgressProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  percent?: number;
  showInfo?: boolean;
  strokeWidth?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
}
declare const _default: import('react').ForwardRefExoticComponent<ProgressProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
