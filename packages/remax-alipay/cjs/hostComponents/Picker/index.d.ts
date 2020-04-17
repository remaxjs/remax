export interface PickerProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
declare const _default: import('react').ForwardRefExoticComponent<PickerProps & {
  children?: import('react').ReactNode;
} & import('react').RefAttributes<any>>;
export default _default;
