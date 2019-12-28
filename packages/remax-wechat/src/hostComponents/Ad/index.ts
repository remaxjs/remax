import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface AdProps extends BaseProps {
  /** 广告单元id，可在小程序管理后台的流量主模块新建 1.9.94; */
  unitId: string;
  /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新） 2.3.1 */
  adIntervals?: number;
  /** 广告加载成功的回调 2.2.1 */
  onLoad?: (event: any) => any;
  /** 广告加载失败的回调，event.detail = {errCode: 1002} 2.2.1 */
  onError?: (event: any) => any;
  /** 广告关闭的回调 2.6.5 */
  onClose?: (event: any) => any;
}

export default createHostComponent<AdProps>('ad');
