import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import createPageWrapper from '../createPageWrapper';

describe('createPageWrapper', () => {
  class Page extends React.Component {
    render() {
      return <view>hi</view>;
    }
  }

  it('get Page ref', () => {
    const WrappedPage = createPageWrapper(Page, {});
    const testRenderer = TestRenderer.create(<WrappedPage page={null} />);
    const instance = testRenderer.getInstance() as any;
    expect(instance.pageComponentInstance).toBeInstanceOf(Page);
  });

  it('get Page ref with HOC', () => {
    const hoc = (PageComponent: React.ComponentType<any>) => {
      return React.forwardRef((_, ref) => {
        return <PageComponent ref={ref} />;
      });
    };
    const WrappedPage = createPageWrapper(hoc(Page), {});
    const testRenderer = TestRenderer.create(<WrappedPage page={null} />);
    const instance = testRenderer.getInstance() as any;
    expect(instance.pageComponentInstance).toBeInstanceOf(Page);
  });

  it('does not pass ref to FC', () => {
    const FCPage: React.FC = props => <view>hi</view>;
    const WrappedPage = createPageWrapper(FCPage, {});
    const testRenderer = TestRenderer.create(<WrappedPage page={null} />);
    const instance = testRenderer.getInstance() as any;
    expect(instance.pageComponentInstance).toBeNull();
  });
});
