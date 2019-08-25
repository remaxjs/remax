import * as React from 'react';
import ReactReconciler from 'react-reconciler';
import hostConfig from './hostConfig';

const ReactReconcilerInst = ReactReconciler(hostConfig as any);

function getPublicRootInstance(container: any) {
  const containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  return containerFiber.child.stateNode;
}

export default function render(
  rootElement: React.ReactElement | null,
  container: any,
) {
  // Create a root Container if it doesnt exist
  // eslint-disable-next-line no-underscore-dangle
  if (!container._rootContainer) {
    // eslint-disable-next-line no-underscore-dangle
    container._rootContainer = ReactReconcilerInst.createContainer(
      container,
      false,
      false,
    );
  }

  ReactReconcilerInst.updateContainer(
    rootElement,
    // eslint-disable-next-line no-underscore-dangle
    container._rootContainer,
    null,
    () => {},
  );
  // eslint-disable-next-line no-underscore-dangle
  return getPublicRootInstance(container._rootContainer);
}
