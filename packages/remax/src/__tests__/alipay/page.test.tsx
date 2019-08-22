import * as React from 'react';
import './helpers/setupGlobals';
import createPageConfig from '../../createPageConfig';
import {
  useShow,
  useHide,
  usePullDownRefresh,
  useReachBottom,
  usePageScroll,
  useShareAppMessage,
  useTitleClick,
  useOptionMenuClick,
  usePopMenuClick,
  usePullIntercept,
} from '../../../src';
import { View, PageProps } from '../../../src/adapters/alipay';
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

        useShareAppMessage(() => {
          log.push('useShareAppMessage');
        });

        useTitleClick(() => {
          log.push('useTitleClick');
        });

        useOptionMenuClick(() => {
          log.push('useOptionMenuClick');
        });

        usePopMenuClick(() => {
          log.push('usePopMenuClick');
        });

        usePullIntercept(() => {
          log.push('usePullIntercept');
        });

        return <View>foo</View>;
      };
      const page = Page(createPageConfig(Foo));
      page.load();
      page.pullDownRefresh();
      page.pullIntercept();
      page.reachBottom();
      page.pageScroll();
      page.shareAppMessage();
      page.titleClick();
      page.optionMenuClick();
      page.popMenuClick();
      page.hide();

      expect(log).toEqual([
        'useShow',
        'usePullDownRefresh',
        'usePullIntercept',
        'useReachBottom',
        'usePageScroll',
        'useShareAppMessage',
        'useTitleClick',
        'useOptionMenuClick',
        'usePopMenuClick',
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
        const [_, forceUpdate] = React.useState(0);

        useShow(() => {
          log.push('onShow');
        });

        React.useImperativeHandle(ref, () => ({
          forceUpdate,
        }));

        return <View>foo</View>;
      });
      const page = Page(createPageConfig(() => <Foo ref={foo} />));
      page.load();
      foo.current.forceUpdate();
      expect(log).toEqual(['onShow']);
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

      onShareAppMessage() {
        log.push('onShareAppMessage');
      }

      onTitleClick() {
        log.push('onTitleClick');
      }

      onOptionMenuClick() {
        log.push('onOptionMenuClick');
      }

      onPopMenuClick() {
        log.push('onPopMenuClick');
      }

      onPullIntercept() {
        log.push('onPullIntercept');
      }

      render() {
        return <View>foo</View>;
      }
    }

    const page = Page(createPageConfig(Foo));
    page.load();
    page.pullDownRefresh();
    page.pullIntercept();
    page.reachBottom();
    page.pageScroll();
    page.shareAppMessage();
    page.titleClick();
    page.optionMenuClick();
    page.popMenuClick();
    page.hide();
    page.unload();

    expect(log).toEqual([
      'componentWillMount',
      'componentDidMount',
      'onShow',
      'onPullDownRefresh',
      'onPullIntercept',
      'onReachBottom',
      'onPageScroll',
      'onShareAppMessage',
      'onTitleClick',
      'onOptionMenuClick',
      'onPopMenuClick',
      'onHide',
      'componentWillUnmount',
    ]);
  });
});
