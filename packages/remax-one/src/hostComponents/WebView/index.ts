import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface WebViewProps extends React.AriaAttributes {
  src: string;
  onMessage?: (event: any) => void;
}

const WebView = createHostComponent<WebViewProps>('web-view');

export default WebView;
