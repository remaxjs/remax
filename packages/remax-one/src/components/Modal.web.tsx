import * as React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children }: React.PropsWithChildren<Record<string, any>>) {
  const domNode = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    document.body.appendChild(domNode.current);

    return () => {
      document.body.removeChild(domNode.current);
    };
  }, []);

  return ReactDOM.createPortal(children, domNode.current);
}
