import * as React from 'react';
import './helpers/setupGlobals';
import { View, PageProps } from '../../../src/adapters/alipay';
import createPageConfig from '../../createPageConfig';
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

  it('lifecycle hooks', () => {
    const log: string[] = [];
    const Foo: React.FC<PageProps> = ({ lifecycle }) => {
      lifecycle.useShow(() => {
        log.push('useShow');
      });

      lifecycle.useHide(() => {
        log.push('useHide');
      });

      lifecycle.usePullDownRefresh(() => {
        log.push('usePullDownRefresh');
      });

      lifecycle.useReachBottom(() => {
        log.push('useReachBottom');
      });

      lifecycle.usePageScroll(() => {
        log.push('usePageScroll');
      });

      lifecycle.useShareAppMessage(() => {
        log.push('useShareAppMessage');
      });

      lifecycle.useTitleClick(() => {
        log.push('useTitleClick');
      });

      lifecycle.useOptionMenuClick(() => {
        log.push('useOptionMenuClick');
      });

      lifecycle.usePopMenuClick(() => {
        log.push('usePopMenuClick');
      });

      lifecycle.usePullIntercept(() => {
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
