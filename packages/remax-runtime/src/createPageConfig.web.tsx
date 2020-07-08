import * as React from 'react';
import { PullToRefresh } from '@remax/web';
import qs from 'qs';
import createPageWrapper from './createPageWrapper';
import { Lifecycle, callbackName } from './lifecycle';

interface LifeCycleCallback {
  [key: string]: Function[];
}

interface PageConfigProps {
  appConfig: any;
  pageConfig: any;
  location: any;
}

const DEFAULT_REACH_BOTTOM_DISTANCE = 50;

export default function createPageConfig(Page: React.ComponentType<any>) {
  const page = {
    lifeCycleCallback: {} as LifeCycleCallback,
    wrapperRef: React.createRef<any>(),
    registerLifecycle(lifeCycle: Lifecycle, callback: () => any) {
      this.lifeCycleCallback[lifeCycle] = this.lifeCycleCallback[lifeCycle] || [];

      this.lifeCycleCallback[lifeCycle].push(callback);

      return () => {
        this.lifeCycleCallback[lifeCycle].splice(this.lifeCycleCallback[lifeCycle].indexOf(callback), 1);
      };
    },
    callLifecycle(lifeCycle: Lifecycle, ...args: any[]) {
      const callbacks = this.lifeCycleCallback[lifeCycle] || [];
      let result;
      callbacks.forEach((callback: any) => {
        result = callback(...args);
      });
      if (result) {
        return result;
      }

      const callback = callbackName(lifeCycle);
      if (this.wrapperRef.current && this.wrapperRef.current[callback]) {
        return this.wrapperRef.current[callback](...args);
      }
    },
  };

  const PageWrapper = createPageWrapper(Page);

  return class PageConfig extends React.Component<PageConfigProps> {
    constructor(props: any) {
      super(props);

      props.cacheLifecycles.didCache(this.componentDidCache);
      props.cacheLifecycles.didRecover(this.componentDidRecover);
    }

    state = {
      refreshing: true,
    };

    title = this.props.pageConfig.title || this.props.appConfig.title || document.title;

    componentDidMount() {
      this.setTitle();
      page.callLifecycle(Lifecycle.ready);

      this.handlePageScroll();
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollEvent);
    }

    componentDidCache = () => {
      this.title = document.title;
      page.callLifecycle(Lifecycle.hide);
    };

    componentDidRecover = () => {
      this.setTitle();
      page.callLifecycle(Lifecycle.show);
    };

    setTitle = () => {
      document.title = this.title;
    };

    isPullDownRefreshEnabled = () => {
      const { appConfig, pageConfig } = this.props;

      return pageConfig.pullToRefresh ?? appConfig.window?.pullToRefresh;
    };

    getReachBottomDistance = () => {
      const { appConfig, pageConfig } = this.props;

      return pageConfig.reachBottomOffset ?? appConfig.reachBottomOffset ?? DEFAULT_REACH_BOTTOM_DISTANCE;
    };

    isReachBottom = false;

    scrollEvent = () => {
      this.checkReachBottom();

      const event = { scrollTop: window.scrollY };
      page.callLifecycle(Lifecycle.pageScroll, event);
    };

    handlePageScroll = () => {
      window.addEventListener('scroll', this.scrollEvent);
    };

    handleRefresh = async () => {
      this.setState({
        refreshing: true,
      });

      try {
        await page.callLifecycle(Lifecycle.pullDownRefresh);
      } catch (error) {
        this.setState({
          refreshing: false,
        });

        throw error;
      }

      this.setState({
        refreshing: false,
      });
    };

    checkReachBottom = () => {
      const isCurrentReachBottom =
        document.body.scrollHeight - (window.innerHeight + window.scrollY) <= this.getReachBottomDistance();

      if (!this.isReachBottom && isCurrentReachBottom) {
        this.isReachBottom = true;
        page.callLifecycle(Lifecycle.reachBottom);
        return;
      }

      this.isReachBottom = isCurrentReachBottom;
    };

    render() {
      const { appConfig, location } = this.props;
      const { refreshing } = this.state;
      const hasTabBar = !!appConfig.tabBar;
      const className = `remax-page ${hasTabBar ? 'with-tab-bar' : ''}`;
      const query = qs.parse(location.search, { ignoreQueryPrefix: true });

      if (this.isPullDownRefreshEnabled()) {
        return (
          <PullToRefresh onRefresh={this.handleRefresh} refreshing={refreshing} distanceToRefresh={50}>
            <div className={className}>
              {React.createElement(PageWrapper, {
                page,
                query,
                ref: page.wrapperRef,
              })}
            </div>
          </PullToRefresh>
        );
      }

      return (
        <div className={className}>
          {React.createElement(PageWrapper, {
            page,
            query,
            ref: page.wrapperRef,
          })}
        </div>
      );
    }
  };
}
