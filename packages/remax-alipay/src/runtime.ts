const plugin: RemaxRuntimePlugin = () => ({
  getEventTargetId: ({ nativeEvent }) =>
    nativeEvent?.target?.targetDataset?.rid,
  getEventCurrentTargetId: ({ nativeEvent }) =>
    nativeEvent?.target?.dataset?.rid,
  onUpdateAction: ({ container, action }) => {
    if (!container.rendered) {
      action.type = 'init';
      container.rendered = true;
    }

    return action;
  },
});

export default plugin;
