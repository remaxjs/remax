import * as React from 'react';

import capitalize from '../../utils/capitalize';

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

function hookName(name: string) {
  return ('use' + capitalize(name)) as keyof LifecycleHooks;
}

export default function createPageConfig(Page: React.ComponentType<any>) {
  return class PageWrapper extends React.Component {
    callbacks = new Map<
      string,
      {
        callback: Callback;
        inputs?: any[];
      }
    >();

    lifecycle = LIFECYCLE_PHASES.reduce((acc: Partial<LifecycleHooks>, phase) => {
      acc[hookName(phase)] = () => {};
      return acc;
    }, {});

    render() {
      return React.createElement(
        'div',
        { id: 'remax-page' },
        React.createElement(Page, {
          ...this.props,
          lifecycle: this.lifecycle,
        }),
      );
    }
  };
}
