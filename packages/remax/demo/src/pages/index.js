import Remax from '../../..';

const {
  React,
  useState,
} = Remax;

const ClickComponent = () => {
  const [count, setCount] = Remax.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div onClick={handleClick}>
    CLICK
      {count}
    times
    </div>
  );
};

const Component = () => (
  <div>
    {'<ClickComponent />'}
with useState below
    <ClickComponent />
  </div>
);

Page({
  data: {
    $$REACT_MINI_APP_ROOT: [
    ],
  },

  onReady() {
    Remax.render(<Component />, this);
  },

});
