import * as React from 'react';
import { View } from 'remax/alipay';
import str1 from '../utils/defineProperty';
import str2 from '../utils/exportsAssignment';
import './index.css';

export default () => <View className="foo">{str1 + str2}</View>;
