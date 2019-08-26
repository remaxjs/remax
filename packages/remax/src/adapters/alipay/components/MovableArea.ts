import factory from './factory';

export interface MovableAreaProps {
  width: number;
  height: number;
}

const MovableArea = factory<MovableAreaProps>('movable-area');

export default MovableArea;
