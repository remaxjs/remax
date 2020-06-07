import * as React from 'react';
import { View as AliView } from '@alipay/remix/ali';

export default function View(props: any = {}) {
  return <AliView {...props} />;
}
