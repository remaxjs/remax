import * as React from 'react';
import './index.css';

export interface WebViewProps extends React.AriaAttributes {
  id?: string;
  src: string;
  onMessage?: (event: Event) => void;
}

const WebView: React.FC<WebViewProps> = props => {
  const { onMessage, ...restProps } = props;
  React.useEffect(() => {
    const listener = (event: Event) => {
      if (typeof onMessage === 'function') {
        onMessage(event);
      }
    };

    window.addEventListener('message', listener, false);

    return () => window.removeEventListener('message', listener);
  }, []);

  return <iframe className="remax-web-view" {...restProps} />;
};

export default WebView;
