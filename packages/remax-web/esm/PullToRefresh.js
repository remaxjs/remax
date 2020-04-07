var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import PullToRefresh from 'rmc-pull-to-refresh';
import LoadingIcon from './LoadingIcon';
var RemaxPullToRefresh = function (props) {
    return (React.createElement(PullToRefresh, __assign({}, props, { indicator: {
            activate: React.createElement(LoadingIcon, null),
            deactivate: React.createElement(LoadingIcon, null),
            release: React.createElement(LoadingIcon, { animate: true }),
            finish: React.createElement(LoadingIcon, null),
        } })));
};
export default RemaxPullToRefresh;
