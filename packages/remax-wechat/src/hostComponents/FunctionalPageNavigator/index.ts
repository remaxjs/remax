import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface FunctionalPageNavigatorProps extends BaseProps {
  /** (default: release) 跳转到的小程序版本，线上版本必须设置为 release 2.1.0  */
  version?: 'develop' | 'trial' | 'release';
  /** 要跳转到的功能页 2.1.0  */
  name?: 'loginAndGetUserInfo' | 'requestPayment';
  /** 功能页参数，参数格式与具体功能页相关 2.1.0  */
  args?: any;
  /** 功能页返回，且操作成功时触发， detail 格式与具体功能页相关 2.1.0  */
  onSuccess?: (event: GenericEvent) => any;
  /** 功能页返回，且操作失败时触发， detail 格式与具体功能页相关 2.1.0  */
  onFail?: (event: GenericEvent) => any;
  /** 因用户操作从功能页返回时触发 2.4.1  */
  onCancel?: (event: GenericEvent) => any;
}
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html
 */
export const FunctionalPageNavigator: React.ComponentType<FunctionalPageNavigatorProps> = createHostComponent<FunctionalPageNavigatorProps>(
  'functional-page-navigator'
);

FunctionalPageNavigator.defaultProps = {
  version: 'release',
};
