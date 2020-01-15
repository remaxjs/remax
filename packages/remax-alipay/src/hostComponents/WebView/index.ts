import createHostComponent from '../../createHostComponent';

export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  src: string;
  onMessage?: (e: any) => void;
}

export default createHostComponent<WebViewProps>('web-view');
