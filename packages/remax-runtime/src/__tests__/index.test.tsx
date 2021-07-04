import * as React from 'react';
import './helpers/setupGlobals';
import View from './helpers/View';
import Input from './helpers/Input';
import render from '../render';
import { reset as resetInstanceId } from '../instanceId';
import Container from '../Container';
import { useNativeEffect } from '../hooks';
import { RuntimeOptions } from '@remax/framework-shared';

function delay(ms: number): Promise<void> {
  if (typeof ms !== 'number') {
    throw new Error('Must specify ms');
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const p = {
  setData(state: any, callback: () => void) {
    setTimeout(() => {
      if (typeof callback === 'function') {
        callback();
      }
    });
  },
  $batchedUpdates(callback: () => void) {
    callback();
  },
  $spliceData(state: any, callback: () => void) {
    setTimeout(() => {
      if (typeof callback === 'function') {
        callback();
      }
    });
  },
};

describe('ali remax render', () => {
  beforeEach(() => {
    RuntimeOptions.apply({ platform: 'ali' });
    resetInstanceId();
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

      insert() {
        this.setState({
          list: [1, 2, 3],
        });
      }

      insertBefore() {
        this.setState({
          list: [0, 1, 2, 3],
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
    page.current.insert();
    expect(container.root).toMatchSnapshot();
    page.current.insertBefore();
    expect(container.root).toMatchSnapshot();
  });

  it('insert and remove element', () => {
    class Page extends React.Component {
      state = {
        show: false,
      };

      show() {
        this.setState({
          show: true,
        });
      }

      hide() {
        this.setState({
          show: false,
        });
      }

      render() {
        const { show } = this.state;
        return (
          <View>
            <View>1</View>
            {show && <View>2</View>}
            <View>3</View>
          </View>
        );
      }
    }

    const container = new Container(p);
    const page = React.createRef<any>();
    render(<Page ref={page} />, container);
    expect(container.root).toMatchSnapshot();
    page.current.show();
    expect(container.root).toMatchSnapshot();
    page.current.hide();
    expect(container.root).toMatchSnapshot();
  });

  it('conditional render', () => {
    class Page extends React.Component {
      state = {
        show: true,
      };

      show() {
        this.setState({
          show: true,
        });
      }

      hide() {
        this.setState({
          show: false,
        });
      }

      render() {
        const { show } = this.state;
        return (
          <View>
            {show && <View>1</View>}
            <View>2</View>
          </View>
        );
      }
    }

    const container = new Container(p);
    const page = React.createRef<any>();
    render(<Page ref={page} />, container);
    expect(container.root).toMatchSnapshot();
    page.current.hide();
    expect(container.root).toMatchSnapshot();
    page.current.show();
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

  it('update element props', () => {
    class Page extends React.Component {
      state = {
        input: {
          className: 'className',
          style: {
            display: 'flex',
            flex: 1,
          },
          disable: false,
        },
      };

      update() {
        this.setState({
          input: {
            ...this.state.input,
            style: {
              ...this.state.input.style,
              flex: 2,
            },
            disable: true,
            className: 'updateClassName',
          },
        });
      }

      render() {
        const { input } = this.state;
        return (
          <View>
            <Input className={input.className} style={input.style} disabled={input.disable} />
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

  it('renders unitless style', () => {
    const Page = () => <View style={{ height: 100, flex: 1 }}>hello</View>;
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

  it('render native component correctly', done => {
    expect.assertions(1);

    const NativeComponent = ({ fooBar, onClick, className }: any) =>
      React.createElement('native-component', {
        fooBar,
        className,
        onClick,
      });
    const actions: any = [];
    const p = {
      $spliceData: (payload: any) => actions.push(payload),
    };

    const container = new Container(p);
    render(<NativeComponent fooBar="fooBar" onClick={() => void 0} className="class" />, container);

    setTimeout(() => {
      expect(actions).toMatchSnapshot();
      done();
    }, 100);
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

describe('flatten update', () => {
  beforeAll(() => {
    RuntimeOptions.apply({ platform: 'web' });
  });

  afterAll(() => {
    RuntimeOptions.reset();
  });

  it('pure rerender when props changed', done => {
    const payload: any[] = [];
    const context = {
      setData: (data: any) => {
        payload.push(data);
      },
    };

    class Page extends React.Component {
      state = {
        value: 'foo',
      };

      setValue(value: string) {
        this.setState({ value });
      }

      render() {
        return (
          <View style={{ width: '32px' }}>
            <Input value={this.state.value} />
          </View>
        );
      }
    }
    const container = new Container(context);
    const page = React.createRef<any>();
    render(<Page ref={page} />, container);

    expect.assertions(2);

    page.current.setValue('bar');

    setTimeout(() => {
      expect(payload).toHaveLength(2);
      expect(payload[1]).toMatchInlineSnapshot(`
        Object {
          "root.nodes.7.nodes.6.props.value": "bar",
        }
      `);
      done();
    }, 5);
  });

  it('pure rerender when props delete', done => {
    const payload: any[] = [];
    const context = {
      setData: (data: any) => {
        payload.push(data);
      },
    };

    class Page extends React.Component {
      state = {
        value: 'foo',
      };

      setValue(value: string) {
        this.setState({ value });
      }

      render() {
        return (
          <View style={{ width: '32px' }}>{!this.state.value ? <Input /> : <Input value={this.state.value} />}</View>
        );
      }
    }
    const container = new Container(context);
    const page = React.createRef<any>();
    render(<Page ref={page} />, container);

    expect.assertions(2);

    page.current.setValue(undefined);

    setTimeout(() => {
      expect(payload).toHaveLength(2);
      expect(payload[1]).toMatchInlineSnapshot(`
        Object {
          "root.nodes.10.nodes.9.props.value": null,
        }
      `);
      done();
    }, 5);
  });
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

describe('Remax Suspense placeholder', () => {
  function createTextResource(ms: number, text: string) {
    let status = 'pending';
    let result: any;

    const suspender = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, ms);
    }).then(
      r => {
        status = 'success';
        result = r;
      },
      e => {
        status = 'error';
        result = e;
      }
    );

    return {
      read() {
        if (status === 'pending') {
          throw suspender;
        }

        if (status === 'error') {
          throw result;
        }
        return result as string;
      },
    };
  }

  const Text: React.FC<{ text: string }> = props => {
    return (props.text as unknown) as React.ReactElement<any, any>;
  };

  type Resource = ReturnType<typeof createTextResource>;

  const AsyncText: React.FC<{ text: string; resource: Resource }> = props => {
    props.resource.read();
    return (props.text as unknown) as React.ReactElement<any, any>;
  };

  const Suspense = React.Suspense;

  it('hides and unhides timed out DOM elements', async () => {
    const refs = [React.createRef<any>(), React.createRef<any>(), React.createRef<any>()];

    function App() {
      return (
        <View>
          <Suspense fallback={<Text text="loading" />}>
            <View ref={refs[0]}>
              <Text text="A" />
            </View>
            <View ref={refs[1]}>
              <AsyncText resource={createTextResource(1, 'B')} text="B" />
            </View>
            <View ref={refs[2]} style={{ display: 'inline' }}>
              <Text text="C" />
            </View>
          </Suspense>
        </View>
      );
    }

    const container = new Container(p);
    render(<App />, container);
    expect(refs[0].current.props.style.display).toEqual('none');
    expect(refs[1].current.props.style.display).toEqual('none');
    expect(refs[2].current.props.style.display).toEqual('none');

    await delay(100);
    expect(refs[0].current.props.style).toEqual(undefined);
    expect(refs[1].current.props.style).toEqual(undefined);
    expect(refs[2].current.props.style.display).toEqual('inline');
  });

  it('hides and unhides timed out text nodes', async () => {
    function App() {
      return (
        <View>
          <Suspense fallback={<Text text="Loading..." />}>
            <Text text="A" />
            <AsyncText resource={createTextResource(1, 'B')} text="B" />
            <Text text="C" />
          </Suspense>
        </View>
      );
    }

    const container = new Container(p);
    render(<App />, container);
    expect(container.root.children[0].children.map(node => node.text).join('')).toBe('Loading...');
    await delay(100);
    expect(container.root.children[0].children.map(node => node.text).join('')).toBe('ABC');
  });
});
