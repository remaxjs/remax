import * as React from 'react';
import PullToRefresh from 'rmc-pull-to-refresh';
import LoadingIcon from './LoadingIcon';

const RemaxPullToRefresh: React.FC<any> = props => {
  return (
    <PullToRefresh
      {...props}
      indicator={{
        activate: <LoadingIcon />,
        deactivate: <LoadingIcon />,
        release: <LoadingIcon animate={true} />,
        finish: <LoadingIcon />,
      }}
    />
  );
};

export default RemaxPullToRefresh;
