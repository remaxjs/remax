import * as React from 'react';
import './helpers/setupGlobals';
import createPageConfig from '../../createPageConfig';
import {
  useReady,
  useShow,
  useHide,
  usePullDownRefresh,
  useReachBottom,
  usePageScroll,
  useShareAppMessage,
} from '../../../src';
import { View, PageProps } from '../../../src/adapters/wechat';
import Page from './helpers/Page';

describe('page', () => {
  it('create page config', () => {
    const Foo = () => {
      return <View>foo</View>;
    };
    const page = Page(createPageConfig(Foo));
    page.load();
    expect(page.config.wrapper).not.toBeNull();
  });

  describe('hooks', () => {
    it('works', () => {
      const log: string[] = [];
      const Foo: React.FC<PageProps> = () => {
        useReady(() => {
          log.push('useReady');
        });
        useShow(() => {
          log.push('useShow');
        });

        useHide(() => {
          log.push('useHide');
        });

        usePullDownRefresh(() => {
          log.push('usePullDownRefresh');
        });

        useReachBottom(() => {
          log.push('useReachBottom');
        });

        usePageScroll(() => {
          log.push('usePageScroll');
        });

        useShareAppMessage(object => {
          log.push(object.from);
          log.push('useShareAppMessage');
        });

        return <View>foo</View>;
      };
      const page = Page(createPageConfig(Foo));
      page.load();
      page.ready();
      page.pullDownRefresh();
      page.reachBottom();
      page.pageScroll();
      page.shareAppMessage();
      page.hide();

      expect(log).toEqual([
        'useShow',
        'useReady',
        'usePullDownRefresh',
        'useReachBottom',
        'usePageScroll',
        'menu',
        'useShareAppMessage',
        'useHide',
      ]);
    });

    it('works in component', () => {
      const log: string[] = [];
      const Foo = () => {
        useShow(() => {
          log.push('onShow');
        });
        return <View>foo</View>;
      };
      const Bar = () => <Foo />;
      const page = Page(createPageConfig(Bar));
      page.load();
      expect(log).toEqual(['onShow']);
    });

    it('register once', () => {
      const log: string[] = [];
      const foo = React.createRef<any>();
      const Foo = React.forwardRef((props, ref) => {
        const forceUpdate = React.useState(0)[1];

        useShow(() => {
          log.push('onShow');
        });

        useShareAppMessage(() => {
          log.push('onShareAppMessage');
        });

        React.useImperativeHandle(ref, () => ({
          forceUpdate,
        }));

        return <View>foo</View>;
      });
      const page = Page(createPageConfig(() => <Foo ref={foo} />));
      page.load();
      foo.current.forceUpdate();
      page.shareAppMessage();
      expect(log).toEqual(['onShow', 'onShareAppMessage']);
    });
  });

  it('lifecycle methods', () => {
    const log: string[] = [];
    class Foo extends React.Component {
      componentWillMount() {
        log.push('componentWillMount');
      }

      componentDidMount() {
        log.push('componentDidMount');
      }

      componentWillUnmount() {
        log.push('componentWillUnmount');
      }

      onShow() {
        log.push('onShow');
      }

      onHide() {
        log.push('onHide');
      }

      onPullDownRefresh() {
        log.push('onPullDownRefresh');
      }

      onReachBottom() {
        log.push('onReachBottom');
      }

      onPageScroll() {
        log.push('onPageScroll');
      }

      onShareAppMessage(object: any) {
        log.push(object.from);
        log.push('onShareAppMessage');
      }

      render() {
        return <View>foo</View>;
      }
    }

    const page = Page(createPageConfig(Foo));
    page.load();
    page.pullDownRefresh();
    page.reachBottom();
    page.pageScroll();
    page.shareAppMessage();
    page.hide();
    page.unload();

    expect(log).toEqual([
      'componentWillMount',
      'componentDidMount',
      'onShow',
      'onPullDownRefresh',
      'onReachBottom',
      'onPageScroll',
      'menu',
      'onShareAppMessage',
      'onHide',
      'componentWillUnmount',
    ]);
  });
});
