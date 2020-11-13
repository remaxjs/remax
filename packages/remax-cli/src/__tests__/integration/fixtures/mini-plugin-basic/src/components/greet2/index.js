import * as React from 'react';
import { View } from '@alipay/remix';

console.log('greeting');
export default ({ name }) => <View id="greeting">Hello {name}</View>;
