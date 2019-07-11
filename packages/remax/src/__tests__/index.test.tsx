import * as React from 'react';
import { render, View } from '../../src';
import { REMAX_ROOT_BACKUP, REMAX_ROOT } from '../constants';
import pure from '../utils/pure';

class Context {
  data: any;

  requestUpdate(this: any) {
    this.data = {
      [REMAX_ROOT]: pure(this[REMAX_ROOT_BACKUP]),
    };
  }
}

describe('remax render', () => {
  it('render correctly', () => {
    const Page = () => <View className="foo">hello</View>;
    const context = new Context();
    render(<Page />, context);
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
});
