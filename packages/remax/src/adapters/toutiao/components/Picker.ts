import factory from './factory';

type Mode = 'selector' | 'multiSelector' | 'time' | 'date' | 'region';

type PickerPropsMap = {
  selector: SelectorProps;
  multiSelector: MutiSelectorProps;
  time: TimeProps;
  date: DateProps;
  region: RegionProps;
};

interface SelectorProps {
  range?: string[] | any[];
  rangeKey?: string;
  value?: number;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

type MutiSelectorProps = { onColumnchange?: (e: any) => void } & SelectorProps;

interface TimeProps {
  value?: string;
  start?: string;
  end?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

type DateProps = TimeProps & { fields?: string };

interface RegionProps {
  value?: any[];
  customItem?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  onCancel?: (e: any) => void;
}

export type PickerProps<T> = T extends Mode
  ? {
      mode: T;
    } & PickerPropsMap[T]
  : never;

const Picker = factory<PickerProps<Mode>>('picker');

export default Picker;
