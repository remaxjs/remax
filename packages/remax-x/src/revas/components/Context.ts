import { createContext, createElement } from 'react';
import { RevasCanvas } from '../core/Canvas';

export interface AppContextType {
  clientWidth: number;
  clientHeight: number;
  deviceRatio: number;
  canvas?: RevasCanvas;
  RTL?: boolean;
}

export const AppContext = createContext<AppContextType>({
  clientWidth: 0,
  clientHeight: 0,
  deviceRatio: 1,
});

export function withContext<T>(comp: T): T {
  (comp as any).contextType = AppContext;
  return comp;
}

export function Root(props: AppContextType) {
  return createElement(AppContext.Provider, { value: props }, createElement('Root', props));
}
