import * as React from 'react';
var values = '2; 2; 2; 2';
var animateValues = '0; 4; 0; 0';
export default function LoadingIcon(props) {
    var animate = props.animate;
    return (React.createElement("svg", { className: "remax-pull-to-refresh-loading", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        React.createElement("circle", { transform: "translate(8 0)", cx: "0", cy: "16", r: "0" },
            React.createElement("animate", { attributeName: "r", values: !animate ? values : animateValues, dur: "1.2s", repeatCount: "indefinite", begin: "0", keyTimes: "0;0.2;0.7;1", keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8", calcMode: "spline" })),
        React.createElement("circle", { transform: "translate(16 0)", cx: "0", cy: "16", r: "0" },
            React.createElement("animate", { attributeName: "r", values: !animate ? values : animateValues, dur: "1.2s", repeatCount: "indefinite", begin: "0.3", keyTimes: "0;0.2;0.7;1", keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8", calcMode: "spline" })),
        React.createElement("circle", { transform: "translate(24 0)", cx: "0", cy: "16", r: "0" },
            React.createElement("animate", { attributeName: "r", values: !animate ? values : animateValues, dur: "1.2s", repeatCount: "indefinite", begin: "0.6", keyTimes: "0;0.2;0.7;1", keySplines: "0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8", calcMode: "spline" }))));
}
