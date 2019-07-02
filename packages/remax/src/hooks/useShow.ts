import * as React from 'react';

export default function useShow(ref: React.Ref<any>, callback: () => void) {
  React.useImperativeHandle(ref, () => ({
    componentDidShow: callback,
  }));
}
