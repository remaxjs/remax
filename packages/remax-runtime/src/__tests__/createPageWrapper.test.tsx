import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import createPageWrapper from '../createPageWrapper';
import Container from '../Container';

describe('createPageWrapper', () => {
  class Page extends React.Component {
    render() {
      return <view>hi</view>;
    }
  }

  it('get Page ref', () => {
    const modalContainer = new Container({});
    const WrappedPage = createPageWrapper(Page, '');
    const testRenderer = TestRenderer.create(<WrappedPage page={null} query={{}} modalContainer={modalContainer} />);
    const instance = testRenderer.getInstance() as any;
    expect(instance.pageComponentInstance).toBeInstanceOf(Page);
  });

  it('get Page ref with HOC', () => {
    const modalContainer = new Container({});
    const hoc = (PageComponent: React.ComponentType<any>) => {
      return React.forwardRef((_, ref) => {
        return <PageComponent ref={ref} />;
      });
    };
    const WrappedPage = createPageWrapper(hoc(Page), '');
    const testRenderer = TestRenderer.create(<WrappedPage page={null} query={{}} modalContainer={modalContainer} />);
    const instance = testRenderer.getInstance() as any;
    expect(instance.pageComponentInstance).toBeInstanceOf(Page);
  });

  it('does not pass ref to FC', () => {
    const modalContainer = new Container({});
    const FCPage: React.FC = props => <view>hi</view>;
    const WrappedPage = createPageWrapper(FCPage, '');
    const testRenderer = TestRenderer.create(<WrappedPage page={null} query={{}} modalContainer={modalContainer} />);
    const instance = testRenderer.getInstance() as any;
    expect(instance.pageComponentInstance).toBeNull();
  });
});
