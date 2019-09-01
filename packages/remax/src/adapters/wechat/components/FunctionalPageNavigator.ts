import factory from './factory';

const FunctionalPageNavigator = factory<FunctionalPageNavigatorProps>(
  'functional-page-navigator'
);

export interface FunctionalPageNavigatorProps {
  version?: string; // release 否 跳转到的小程序版本，线上版本必须设置为 release 2.1.0
  name?: string; //  否 要跳转到的功能页 2.1.0
  args?: object; //  否 功能页参数，参数格式与具体功能页相关 2.1.0
  onSuccess?: (event: any) => void; //  否 功能页返回，且操作成功时触发， detail 格式与具体功能页相关 2.1.0
  onFail?: (event: any) => void; //  否 功能页返回，且操作失败时触发， detail 格式与具体功能页相关 2.1.0
  onCancel?: (event: any) => void; //  否 因用户操作从功能页返回时触发 2.4.1
}

export default FunctionalPageNavigator;
