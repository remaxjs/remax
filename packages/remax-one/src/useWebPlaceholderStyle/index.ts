import * as React from 'react';
import plainStyle from './plainStyle';

let clsxId = 0;

const generateClassName = () => `remax-placeholder-style-${clsxId++}`;

export default function useWebPlaceholderStyle(css?: React.CSSProperties) {
  const className = React.useRef(generateClassName());

  React.useEffect(() => {
    const styleContent = `.${className.current}::placeholder {
    ${plainStyle(css)}
  }`;
    const style = window.document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(styleContent));

    const head = window.document.head || window.document.getElementsByTagName('head')[0];
    head.appendChild(style);

    return () => {
      head.removeChild(style);
    };
  }, [css]);

  return [className.current];
}
