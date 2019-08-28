import factory from './factory';

export interface WebViewProps {
  src?: string;
  onMessage?: (e: any) => void;
}

const WebView = factory<WebViewProps>('web-view');

export default WebView;
