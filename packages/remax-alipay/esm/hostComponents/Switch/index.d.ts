export interface SwitchProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  controlled?: boolean;
  onChange?: (e: any) => void;
}
declare const _default: import('react').ForwardRefExoticComponent<SwitchProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
