"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ethers_1 = require("ethers");
const hooks_1 = require("../hooks");
const wagmi_1 = require("wagmi");
const PrimarySalePurchaseButton = ({ address, quantity, className, primarySale, children, }) => {
    const saleAdapter = (0, hooks_1.usePrimarySale)(primarySale.source);
    const { data: signer } = (0, wagmi_1.useSigner)();
    const onClick = () => {
        if (!signer)
            return;
        saleAdapter === null || saleAdapter === void 0 ? void 0 : saleAdapter.connect(signer, address);
        saleAdapter === null || saleAdapter === void 0 ? void 0 : saleAdapter.purchase(quantity, ethers_1.ethers.utils.parseEther(primarySale.price.toString()).mul(quantity));
    };
    return ((0, jsx_runtime_1.jsx)("button", { className: className, onClick: onClick, children: children }));
};
exports.default = PrimarySalePurchaseButton;
