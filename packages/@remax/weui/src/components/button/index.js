import {
    Button,
} from '@remax/components';

import React from 'react';
import classnames from 'classnames';

export default (props) => {
  const {
    type = '',
    size = '',
    className = '',
    style = '',
    children = '',
    loading = '',
    onClick = '',
  } = props;

  const nextClassName = classnames({
    [className]: true,
    'weui-btn': true,
    'mini-btn': size === 'mini',
  });

  return <Button
    type={type}
    size={size}
    className={nextClassName}
    style={style}
    loading={loading}
    onClick={onClick}
  >
    {children}
  </Button>;
};