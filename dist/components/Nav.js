"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = tslib_1.__importDefault(require("next/link"));
const react_1 = require("react");
const Nav = ({ navigation, className }) => {
    const elements = navigation.map((x) => ((0, jsx_runtime_1.jsx)(link_1.default, { href: x.url, className: className, children: x.label })));
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: elements });
};
exports.default = Nav;
