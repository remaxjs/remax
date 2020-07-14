import { createElement } from 'react';
import renderer from '../core/reconciler';
import ReactReconciler from 'react-reconciler';
import { noop } from '../core/utils';
import { Container } from '../core/Container';
import { RevasCanvas } from '../core/Canvas';
import { Root } from '../components/Context';

function getPublicRootInstance(container: ReactReconciler.FiberRoot) {
  const containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  return containerFiber.child.stateNode;
}

function createRoot(
  app: React.ReactNode,
  canvas: RevasCanvas,
  dimension: { width: number; height: number; scale: number }
) {
  return createElement(
    Root,
    {
      clientWidth: dimension.width,
      clientHeight: dimension.height,
      deviceRatio: dimension.scale,
      canvas,
    },
    app
  );
}

export function render(
  app: React.ReactNode,
  container: Container,
  dimension: { width: number; height: number; scale: number }
) {
  if (!container._rootContainer) {
    container._rootContainer = renderer.createContainer(container, false, false);
  }

  renderer.updateContainer(createRoot(app, container.canvas, dimension), container._rootContainer, null, noop);

  return getPublicRootInstance(container._rootContainer);
}
