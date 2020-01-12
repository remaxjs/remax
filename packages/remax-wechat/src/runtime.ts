const plugin: RemaxRuntimePlugin = () => ({
  getEventTargetId: ({ nativeEvent }) => nativeEvent?.target?.dataset?.rid,
  getEventCurrentTargetId: ({ nativeEvent }) =>
    nativeEvent?.currentTarget?.dataset?.rid,
  onUnload: ({ container }) => {
    container.dispatchAction({
      type: 'clear',
    });
  },
});

export default plugin;
