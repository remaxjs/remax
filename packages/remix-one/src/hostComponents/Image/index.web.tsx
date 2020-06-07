import * as React from 'react';
import { ImageWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import modeStyle from './modeStyle';
import clsx from 'clsx';

export type ImageProps = ImageWebProps;

const Image: React.FC<ImageWebProps> = props => {
  const { className, src, style, mode, onTap, onLoad, onError, ...restProps } = filterProps<ImageWebProps>(props);
  const isWidthFixMode = mode === 'widthFix';

  return (
    <div
      {...restProps}
      onClick={onTap}
      className={clsx('remix-image', className)}
      style={{
        ...modeStyle[mode || 'scaleToFill'],
        backgroundImage: `url(${src})`,
        backgroundRepeat: `no-repeat`,
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
