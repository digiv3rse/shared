"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useMainnet_1 = require("../hooks/utils/useMainnet");
const wagmi_1 = require("wagmi");
const PREFIX_ADDRESS = "0x";
const AddressView = ({ address, chars = 4, className, }) => {
    const { chainId, enabled } = (0, useMainnet_1.useMainnet)();
    const { data: ensName } = (0, wagmi_1.useEnsName)({ address, chainId, enabled });
    console.log("ensName", ensName, address);
    if (!address)
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {});
    if (ensName)
        return (0, jsx_runtime_1.jsx)("div", { className: className, children: ensName });
    return ((0, jsx_runtime_1.jsx)("div", { className: className, children: address.slice(0, chars + PREFIX_ADDRESS.length) +
            "..." +
            address.slice(address.length - chars) }));
};
exports.default = AddressView;
