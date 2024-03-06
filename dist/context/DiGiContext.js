"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const image_1 = tslib_1.__importDefault(require("next/image"));
const link_1 = tslib_1.__importDefault(require("next/link"));
const DefaultComponents_1 = tslib_1.__importDefault(require("../components/DefaultComponents"));
const DefaultHooks_1 = tslib_1.__importDefault(require("../hooks/DefaultHooks"));
exports.default = (0, react_1.createContext)({
    components: { ...DefaultComponents_1.default, ConnectButton: undefined, Image: image_1.default, Link: link_1.default },
    hooks: { ...DefaultHooks_1.default },
    context: {},
});
