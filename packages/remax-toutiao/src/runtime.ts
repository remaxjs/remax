const plugin: RemaxRuntimePlugin = () => ({
  getEventTargetId: ({ nativeEvent }) => nativeEvent?.target?.dataset?.rid,
  getEventCurrentTargetId: ({ nativeEvent }) =>
    nativeEvent?.currentTarget?.dataset?.rid,
  onUpdateAction: ({ container }) => ({
    type: 'replace',
    payload: {
      root: container.normalizeRawNode(container.root.toJSON()),
    },
  }),
});

export default plugin;
