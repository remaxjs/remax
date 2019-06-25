import {
  Button,
} from '@remax/components';

import React from 'react';
import classnames from 'classnames';

import weuiStyles from '../../weui.module.less';
import styles from './index.module.less';

export default (props) => {
  const {
    type = '',
    size = '',
    className = '',
    style = '',
    children = '',
    loading = '',
    onClick = '',
    openType = '',
  } = props;

  const nextClassName = classnames({
    [className]: true,
    [weuiStyles['weui-btn']]: true,
    [styles['mini-btn']]: size === 'mini',
  });

  return <Button
    type={type}
    size={size}
    className={nextClassName}
    style={style}
    loading={loading}
    onClick={onClick}
    openType={openType}
  >
    {children}
  </Button>;
};
