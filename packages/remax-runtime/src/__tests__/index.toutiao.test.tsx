import * as React from 'react';
import './helpers/setupGlobals';
import View from './helpers/View';
import render from '../render';
import { reset as resetInstanceId } from '../instanceId';
import Container from '../Container';
import { useNativeEffect } from '../hooks';
import { RuntimeOptions } from '@remax/framework-shared';

const p = {
  setData(state: any, callback: () => void) {
    setTimeout(() => {
      if (typeof callback === 'function') {
        callback();
      }
    });
  },
};

describe('remax render', () => {
  beforeAll(() => {
    RuntimeOptions.apply({ platform: 'toutiao' });
  });

  afterEach(() => {
    RuntimeOptions.reset();
    resetInstanceId();
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

  it("change elements' order", () => {
    class Page extends React.Component {
      state = {
        list: [1, 2, 3],
      };

      updateA() {
        this.setState({
          list: [2, 1, 3],
        });
      }

      updateB() {
        this.setState({
          list: [2, 3, 1],
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
    page.current.updateA();
    expect(container.root).toMatchSnapshot();
    page.current.updateB();
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
    const Page = () => <View style={{ width: '100px', height: '100px' }}>hello</View>;
    const container = new Container(p);
    render(<Page />, container);
    expect(container.root).toMatchSnapshot();
  });

  it('renders vendor prefix style', () => {
    const Page = () => <View style={{ WebkitLineClamp: 2, height: '100px' }}>hello</View>;
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

  it('render native component correctly', () => {
    const NativeComponent = ({ fooBar, onClick, className }: any) =>
      React.createElement('native-component', {
        fooBar,
        className,
        onClick,
      });
    const actions: any = [];
    const p = {
      setData: (data: any) => actions.push(data),
    };

    const container = new Container(p);
    render(<NativeComponent fooBar="fooBar" onClick={() => void 0} className="class" />, container);

    expect(actions).toMatchSnapshot();
  });
});

it('create proxy for onClick callback', () => {
  const view = React.createRef<any>();
  const handleClick = (event: any) => {
    expect(event.stopPropagation).not.toBeUndefined();
  };
  const handleAnimationStart = (event: any) => {
    expect(event.stopPropagation).toBeUndefined();
  };
  class Page extends React.Component {
    render() {
      return <View ref={view} onClick={handleClick} onAnimationStart={handleAnimationStart} />;
    }
  }
  const container = new Container(p);
  render(<Page />, container);

  function findFn(name: string) {
    const fnKeys = Object.keys(view.current.container.context);
    const fnKey = fnKeys.find(key => key.indexOf(name) !== -1) || '';
    return view.current.container.context[fnKey];
  }

  const newHandleClick = findFn('onClick');
  const newHandleAnimationStart = findFn('onAnimationStart');

  newHandleClick({});
  newHandleAnimationStart({});
});

it('useEffect works', done => {
  const Page = () => {
    React.useEffect(() => {
      done();
    });

    return <View>app</View>;
  };
  const container = new Container(p);
  render(<Page />, container);
});

it('useNativeEffect once works', done => {
  let count = 0;
  const Page = () => {
    const [width, setWidth] = React.useState(0);
    useNativeEffect(() => {
      count += 1;

      setTimeout(() => {
        if (count === 1) {
          done();
        }
      }, 500);
    }, []);
    React.useEffect(() => {
      setTimeout(() => {
        setWidth(100);
      }, 100);
    }, []);

    return <View>{width}</View>;
  };
  const container = new Container(p);
  render(<Page />, container);
});

it('useNativeEffect deps works', done => {
  let count = 0;
  const Page = () => {
    const [width, setWidth] = React.useState(0);
    const [height, setheight] = React.useState(0);
    useNativeEffect(() => {
      count += 1;

      if (count === 2) {
        done();
      }
    }, [width]);
    React.useEffect(() => {
      setheight(100);
      setTimeout(() => {
        setWidth(100);
      }, 1000);
    }, []);

    return (
      <View>
        {width}
        {height}
      </View>
    );
  };
  const container = new Container(p);
  render(<Page />, container);
});
