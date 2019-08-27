import factory from './factory';

export interface MovableViewProps {
  onTap?: (e: any) => void;
}
const MovableView = factory<MovableViewProps>('movable-view');

export default MovableView;
