"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var rmc_pull_to_refresh_1 = __importDefault(require("rmc-pull-to-refresh"));
var LoadingIcon_1 = __importDefault(require("./LoadingIcon"));
var RemaxPullToRefresh = function (props) {
    return (React.createElement(rmc_pull_to_refresh_1.default, __assign({}, props, { indicator: {
            activate: React.createElement(LoadingIcon_1.default, null),
            deactivate: React.createElement(LoadingIcon_1.default, null),
            release: React.createElement(LoadingIcon_1.default, { animate: true }),
            finish: React.createElement(LoadingIcon_1.default, null),
        } })));
};
exports.default = RemaxPullToRefresh;
