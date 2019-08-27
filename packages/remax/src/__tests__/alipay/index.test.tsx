import * as React from 'react';
import './helpers/setupGlobals';
import { render, View } from '../../../src/adapters/alipay';
import { reset } from '../../instanceId';
import Container from '../../Container';

const p = {
  // eslint-disable-next-line
  setData() {},
  // eslint-disable-next-line
  $spliceData() {},
};

describe('remax render', () => {
  afterEach(() => {
    reset();
  });

  it('render correctly', () => {
    const Page = () => <View className="foo">hello</View>;
    const container = new Container(p);
    render(<Page />, container);
    expect(container.root).toMatchSnapshot();
  });

  it('insert new element', () => {
    class Page extends React.Component {
      state = {
        list: [1, 3],
      };

      update() {
        this.setState({
          list: [1, 2, 3],
        });
      }

      render() {
        const { list } = this.state;
        return (
          <View>
            {list.map(i => (
              <View key={i}>{i}</View>
            ))}
          </View>
        );
      }
    }

    const container = new Container(p);
    const page = React.createRef<any>();
    render(<Page ref={page} />, container);
    expect(container.root).toMatchSnapshot();
    page.current.update();
    expect(container.root).toMatchSnapshot();
  });

  it('umount component', () => {
    class Page extends React.Component {
      state = {
        show: true,
      };

      hide() {
        this.setState({ show: false });
      }

      render() {
        return <View>{this.state.show && <View>foo</View>}</View>;
      }
    }
    const container = new Container(p);
    const page = React.createRef<any>();
    render(<Page ref={page} />, container);
    expect(container.root).toMatchSnapshot();
    page.current.hide();
    expect(container.root).toMatchSnapshot();
  });

  it('renders style', () => {
    const Page = () => (
      <View style={{ width: '100px', height: '100px' }}>hello</View>
    );
    const container = new Container(p);
    render(<Page />, container);
    expect(container.root).toMatchSnapshot();
  });

  it('renders empty style', () => {
    const Page = () => <View style={undefined}>hello</View>;
    const container = new Container(p);
    render(<Page />, container);
    expect(container.root).toMatchSnapshot();
  });

  it('renders conditional fragment correctly', () => {
    class Page extends React.Component {
      state = {
        show: false,
      };

      show() {
        this.setState({ show: true });
      }

      render() {
        if (this.state.show) {
          return <View>foo</View>;
        }

        return (
          <>
            <View>one</View>
            <View>two</View>
          </>
        );
      }
    }
    const container = new Container(p);
    const page = React.createRef<any>();
    render(<Page ref={page} />, container);
    expect(container.root).toMatchSnapshot();
    page.current.show();
    expect(container.root).toMatchSnapshot();
  });
});
