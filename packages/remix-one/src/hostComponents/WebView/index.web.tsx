import * as React from 'react';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

export interface WebViewProps extends React.AriaAttributes {
  id?: string;
  src: string;
  onMessage?: (event: Event) => void;
}

const WebView: React.FC<WebViewProps> = props => {
  const { onMessage, ...restProps } = filterProps(props);
  React.useEffect(() => {
    const listener = (event: Event) => {
      if (typeof onMessage === 'function') {
        onMessage(event);
      }
    };

    window.addEventListener('message', listener, false);

    return () => window.removeEventListener('message', listener);
  }, []);

  return <iframe {...restProps} className="remix-web-view" />;
};

export default WebView;
