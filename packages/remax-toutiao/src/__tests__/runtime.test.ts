import runtime from '../runtime';

describe('runtime', () => {
  it('getEventTargetId', () => {
    const rid = 1;
    const nativeEvent = {
      target: {
        dataset: {
          rid,
        },
      },
    };

    expect(runtime().getEventTargetId!({ nativeEvent })).toEqual(rid);
  });

  it('getEventCurrentTargetId', () => {
    const rid = 1;
    const nativeEvent = {
      currentTarget: {
        dataset: {
          rid,
        },
      },
    };

    expect(runtime().getEventCurrentTargetId!({ nativeEvent })).toEqual(rid);
  });

  it('onUpdateAction', () => {
    expect(
      runtime().onUpdateAction!({
        container: {
          normalizeRawNode: (tree: any) => tree,
          root: {
            toJSON: () => ({
              root: {},
            }),
          },
        } as any,
        action: {},
      })
    ).toMatchInlineSnapshot;
  });
});
