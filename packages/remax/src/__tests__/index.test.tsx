import * as React from 'react';
import { render, View } from '../../src';
import { REMAX_ROOT_BACKUP, REMAX_ROOT } from '../constants';
import pure from '../utils/pure';
import { reset } from '../instanceId';

class Context {
  data: any;

  requestUpdate(this: any) {
    this.data = {
      [REMAX_ROOT]: pure(this[REMAX_ROOT_BACKUP]),
    };
  }
}

describe('remax render', () => {
  afterEach(() => {
    reset();
  });

  it('render correctly', () => {
    const Page = () => <View className="foo">hello</View>;
    const context = new Context();
    render(<Page />, context);
    expect(context.data).toMatchSnapshot();
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

    const context = new Context();
    const page = React.createRef<any>();
    render(<Page ref={page} />, context);
    expect(context.data).toMatchSnapshot();
    page.current.update();
    expect(context.data).toMatchSnapshot();
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
    const context = new Context();
    const page = React.createRef<any>();
    render(<Page ref={page} />, context);
    expect(context.data).toMatchSnapshot();
    page.current.hide();
    expect(context.data).toMatchSnapshot();
  });

  it('renders style', () => {
    const Page = () => <View style={{ width: '100px', height: '100px' }}>hello</View>;
    const context = new Context();
    render(<Page />, context);
    expect(context.data).toMatchSnapshot();
  });
});
