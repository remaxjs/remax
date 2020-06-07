import { createHostComponent } from '@alipay/remix-shared';

export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  src: string;
  onMessage?: (e: any) => void;
}

export const WebView = createHostComponent<WebViewProps>('web-view');
