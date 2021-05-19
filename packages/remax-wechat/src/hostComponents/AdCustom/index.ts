import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

export interface AdCustomProps extends BaseProps {
  /** 广告单元id，可在小程序管理后台的流量主模块新建 2.10.4; */
  unitId: string;
  /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新） 2.10.4 */
  AdIntervals?: number;
  /** 广告加载成功的回调 2.10.4 */
  onLoad?: (event: GenericEvent) => any;
  /** 广告加载失败的回调，event.detail = {errCode: 1002} 2.10.4 */
  onError?: (event: GenericEvent) => any;
}
/**
 * 原生模版广告
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html
 */
export const AdCustom: React.ComponentType<AdCustomProps> = createHostComponent<AdCustomProps>('AdCustom');
