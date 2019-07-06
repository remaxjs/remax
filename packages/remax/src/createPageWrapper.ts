import * as React from 'react';
import is from './utils/objectIs';
import isClassComponent from './utils/isClassComponent';
import capitalize from './utils/capitalize';

type Callback = () => void;

export interface PageProps<Q = {}> {
  lifecycle: LifecycleHooks;
  location: {
    query: Q;
  };
}

export interface LifecycleHooks {
  useShow: (callback: Callback, inputs?: any[]) => void;
  useHide: (callback: Callback, inputs?: any[]) => void;
  usePullDownRefresh: (callback: Callback, inputs?: any[]) => void;
  useReachBottom: (callback: Callback, inputs?: any[]) => void;
  usePageScroll: (callback: Callback, inputs?: any[]) => void;
  useShareAppMessage: (callback: Callback, inputs?: any[]) => void;
  useTitleClick: (callback: Callback, inputs?: any[]) => void;
  useOptionMenuClick: (callback: Callback, inputs?: any[]) => void;
  usePopMenuClick: (callback: Callback, inputs?: any[]) => void;
  usePullIntercept: (callback: Callback, inputs?: any[]) => void;
}

const LIFECYCLE_PHASES = [
  'show',
  'hide',
  'pullDownRefresh',
  'reachBottom',
  'pageScroll',
  'shareAppMessage',
  'titleClick',
  'optionMenuClick',
  'popMenuClick',
  'pullIntercept',
];

function areInputsEqual(nextDeps?: any[], prevDeps?: any[]) {
  if (!nextDeps || !prevDeps) {
    return false;
  }
  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    return false;
  }
  return true;
}

function hookName(name: string) {
  return ('use' + capitalize(name)) as keyof LifecycleHooks;
}

function callbackName(name: string) {
  return 'on' + capitalize(name);
}

export default function createPageWrapper(Page: React.ComponentType, query: object) {
  return class PageWrapper extends React.Component {
    instance: any = null;

    callbacks = new Map<
      string,
      {
        callback: Callback;
        inputs?: any[];
      }
    >();

    lifecycle = LIFECYCLE_PHASES.reduce((acc: Partial<LifecycleHooks>, phase) => {
      acc[hookName(phase)] = (callback: Callback, inputs?: any[]) => {
        const prev = this.callbacks.get(phase);
        if (!prev || !areInputsEqual(inputs, prev.inputs)) {
          this.callbacks.set(phase, {
            callback,
            inputs,
          });
        }
      };
      return acc;
    }, {});

    constructor(props: any) {
      super(props);

      LIFECYCLE_PHASES.forEach(phase => {
        const callback = callbackName(phase);
        (this as any)[callback] = () => {
          this.callLifecycle(phase);
        };
      });
    }

    callLifecycle(phase: string) {
      const callback = callbackName(phase);
      if (this.instance && typeof this.instance[callback] === 'function') {
        this.instance[callback]();
      } else if (this.callbacks.has(phase)) {
        this.callbacks.get(phase)!.callback.call(null);
      }
    }

    render() {
      const props: any = {
        location: {
          query: query || {},
        },
      };

      if (isClassComponent(Page)) {
        props.ref = (node: any) => (this.instance = node);
      } else {
        props.lifecycle = this.lifecycle;
      }

      return React.createElement(Page, props);
    }
  };
}
