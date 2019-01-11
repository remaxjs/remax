import {
  Navigator,
  View,
} from '@remax/components';

import React from 'react';
import classnames from 'classnames';

import weuiStyles from '../../weui.module.less';

export default (props) => {
  const {
    url = '',
    title = '',
    text = '',
    description = '',
  } = props;

  const combineWeuiStyle = (...keys) => classnames(...keys.map(item => weuiStyles[item]));
  return <>
    <View className={weuiStyles['weui-cells__title']}>{title}</View>
    <View className={combineWeuiStyle('weui-cells', 'weui-cells_after-title')}>
      <Navigator url={url} 
        className={combineWeuiStyle('weui-cell', 'weui-cell_access')}
        hoverClass={weuiStyles['weui-cell_active']}>
        <View className={weuiStyles['weui-cell__bd']}>{text}</View>
        <View className={combineWeuiStyle('weui-cell__ft', 'weui-cell__ft_in-access')}>{description}</View>
      </Navigator>
    </View>
  </>;
};