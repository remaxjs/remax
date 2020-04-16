import { useLayoutEffect, DependencyList } from 'react';
import nativeEffect, { Listener } from '../nativeEffect';

export default function useNativeEffect(listener: Listener, deps?: DependencyList) {
  useLayoutEffect(() => {
    return nativeEffect.connect(listener, !!deps);
  }, deps);
}
