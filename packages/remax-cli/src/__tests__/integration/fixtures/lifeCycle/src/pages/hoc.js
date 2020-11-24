export default function HOC(Target) {
  return class H extends Target {
    constructor(props) {
      super(props);
      super['onPullDownRefresh'] = function () {
        console.log('on pull down refresh');
      };
    }
  };
}
