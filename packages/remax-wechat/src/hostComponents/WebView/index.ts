import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface WebViewProps extends BaseProps {
  /** webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。 1.6.4  */
  src?: string;
  /** 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data是多次 postMessage 的参数组成的数组 1.6.4  */
  onMessage?: (event: any) => any;
  /** 页加载成功时候触发此事件。e.detail = { src } 1.6.4  */
  onLoad?: (event: any) => any;
  /** 页加载失败的时候触发此事件。e.detail = { src } 1.6.4  */
  onError?: (event: any) => any;
}

export default createHostComponent<WebViewProps>('web-view');
