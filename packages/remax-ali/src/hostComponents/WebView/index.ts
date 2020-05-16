import { createHostComponent } from '@remax/shared';

export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  src: string;
  onMessage?: (e: any) => void;
}

export const WebView = createHostComponent<WebViewProps>('web-view');
