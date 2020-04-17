export interface CheckboxProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  onChange?: (e: any) => void;
}
declare const _default: import('react').ForwardRefExoticComponent<CheckboxProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
