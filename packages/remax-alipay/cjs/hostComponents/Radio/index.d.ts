export interface RadioProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}
declare const _default: import('react').ForwardRefExoticComponent<RadioProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
