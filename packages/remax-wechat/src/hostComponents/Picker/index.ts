import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface PickerProps extends BaseProps {
  /**
   * 1.0.0
   * 选择器类型
   *
   * selector	普通选择器
   * multiSelector	多列选择器
   * time	时间选择器
   * date	日期选择器
   * region	省市区选择器
   */
  mode?: 'selector' | 'multiSelector' | 'time' | 'date' | 'region';
  /**
   * 1.0.0
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 1.9.90
   * 取消选择时触发
   */
  onCancel?: (event: any) => any;
  onChange?: (event: any) => void;
  /**
   * 列改变时触发
   */
  onColumnChange?: (event: any) => void;
  /**
   * mode 为 selector 或 multiSelector 时，range 有效
   */
  range?: any[];
  /**
   * 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  rangeKey?: string;
  value?: any;
  /**
   * mode = time
   * 表示有效时间范围的开始，字符串格式为"hh:mm"
   *
   * mode = date
   * 表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"
   */
  start?: string;
  /**
   * mode = time
   * 表示有效时间范围的结束，字符串格式为"hh:mm"
   *
   * mode = date
   * 表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"
   */
  end?: string;
  /**
   * 	有效值 year,month,day，表示选择器的粒度
   */
  fields?: 'year' | 'month' | 'day';
  /**
   * 1.5.0
   * mode = region
   * 可为每一列的顶部添加一个自定义的项
   */
  customItem?: string;
}

export default createHostComponent<PickerProps>('picker');
