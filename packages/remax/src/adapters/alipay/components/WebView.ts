import createHostComponent from '../../../createHostComponent';

export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  src?: string;
  onMessage?: (e: any) => void;
}

const WebView = createHostComponent<WebViewProps>('web-view');

export default WebView;
