import * as React from 'react';
import { ImageWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import modeStyle from './modeStyle';
import clsx from 'clsx';
import './index.css';

const Image: React.FC<ImageWebProps> = props => {
  const { className, src, style, mode, onTap, onLoad, onError, ...restProps } = props;
  const isWidthFixMode = mode === 'widthFix';

  return (
    <div
      {...filterProps(restProps)}
      onClick={onTap}
      className={clsx('remax-image', className)}
      style={{
        ...modeStyle[mode || 'scaleToFill'],
        backgroundImage: `url(${src})`,
        ...style,
      }}
    >
      <img
        src={src}
        style={{
          visibility: 'hidden',
          width: isWidthFixMode ? '100%' : undefined,
          height: isWidthFixMode ? 'auto' : '1px',
        }}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};
export default Image;

Image.defaultProps = {
  mode: 'scaleToFill',
};
