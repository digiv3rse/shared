"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const wagmi_1 = require("wagmi");
const ethereum_blockies_base64_1 = tslib_1.__importDefault(require("ethereum-blockies-base64"));
const AvatarView = ({ address, className, }) => {
    const { data } = (0, wagmi_1.useEnsAvatar)({ addressOrName: address, chainId: 1 });
    return (0, jsx_runtime_1.jsx)("img", { className: className, src: data || (0, ethereum_blockies_base64_1.default)(address) });
};
exports.default = AvatarView;
