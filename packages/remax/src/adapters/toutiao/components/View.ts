import factory from './factory';

export interface ViewProps {
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  hoverStopPropagation?: boolean;
}

const View = factory<ViewProps>('view');

export default View;
