import runtime from '../runtime';

describe('runtime', () => {
  it('getEventTargetId', () => {
    const rid = 1;
    const nativeEvent = {
      target: {
        targetDataset: {
          rid,
        },
      },
    };

    expect(runtime().getEventTargetId!({ nativeEvent })).toEqual(rid);
  });

  it('getEventCurrentTargetId', () => {
    const rid = 1;
    const nativeEvent = {
      target: {
        dataset: {
          rid,
        },
      },
    };

    expect(runtime().getEventCurrentTargetId!({ nativeEvent })).toEqual(rid);
  });

  it('onUpdateAction', () => {
    const container = { rendered: false };
    const action = runtime().onUpdateAction!({
      container,
      action: {
        type: 'splice',
      },
    });

    expect(container.rendered).toBeTruthy();
    expect(action.type).toEqual('init');

    expect(
      runtime().onUpdateAction!({
        container: {
          rendered: true,
        },
        action: {
          type: 'splice',
        },
      })
    ).toEqual({
      type: 'splice',
    });
  });
});
