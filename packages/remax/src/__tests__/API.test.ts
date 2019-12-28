import API from '../API';
import Container from '../Container';

describe('API', () => {
  beforeAll(() => {
    API.installPlugins([
      {
        extendsAppConfig: ({ appConfig }) => ({
          ...appConfig,
          propA: 'a',
          propB: 'b',
        }),
        extendsPageConfig: ({ pageConfig }) => ({
          ...pageConfig,
          propA: 'a',
          propB: 'b',
        }),
        getEventTargetId: ({ nativeEvent }) => nativeEvent.target.dataset.rid,
        onUpdateAction: ({ container }) => ({
          type: 'UPDATE',
        }),
      },
      {
        extendsAppConfig: ({ appConfig }) => ({
          ...appConfig,
          propB: 'bb',
        }),
        extendsPageConfig: ({ pageConfig }) => ({
          ...pageConfig,
          propB: 'bb',
        }),
        getEventCurrentTargetId: ({ nativeEvent }) =>
          nativeEvent.currentTarget.dataset.rid,
        onUpdateAction: ({ container, action }) => ({
          ...action,
          payload: 'PAYLOAD',
        }),
      },
      {},
    ]);
  });

  it('install plugins', () => {
    expect(API.configs).toHaveLength(3);
  });

  it('extends app config', () => {
    const appConfig = {
      app: true,
    };

    const newAppConfig = API.extendsAppConfig({ appConfig });

    expect(newAppConfig).toEqual({
      ...appConfig,
      propA: 'a',
      propB: 'bb',
    });
  });

  it('extends page config', () => {
    const pageConfig = {
      page: true,
    };

    const newPageConfig = API.extendsPageConfig({ pageConfig });

    expect(newPageConfig).toEqual({
      ...pageConfig,
      propA: 'a',
      propB: 'bb',
    });
  });

  it('get event target id', () => {
    const event = {
      target: {
        dataset: {
          rid: 1,
        },
      },
    };

    const id = API.getEventTargetId({ nativeEvent: event });

    expect(id).toEqual(event.target.dataset.rid);
  });

  it('get event currentTarget id', () => {
    const event = {
      currentTarget: {
        dataset: {
          rid: 1,
        },
      },
    };

    const id = API.getEventCurrentTargetId({ nativeEvent: event });

    expect(id).toEqual(event.currentTarget.dataset.rid);
  });

  it('on update action', () => {
    const container = new Container({});

    const action = API.onUpdateAction({ container, action: {} });

    expect(action).toMatchInlineSnapshot(`
      Object {
        "payload": "PAYLOAD",
        "type": "UPDATE",
      }
    `);
  });

  it('on unload', () => {
    const onUnload = jest.fn();
    API.installPlugins([
      {
        onUnload,
      },
    ]);

    const container = new Container({});
    API.onUnload({ container });

    expect(onUnload).toBeCalled();
  });
});
