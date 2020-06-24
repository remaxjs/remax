export default function HOC(Target) {
  return class H extends Target {
    constructor(props) {
      super(props);
      super['onShareAppMessage'] = function () {
        console.log('on share app message');
      };
    }
  };
}
