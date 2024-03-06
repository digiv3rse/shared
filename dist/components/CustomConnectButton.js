"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CustomConnectButton = ({ className, forceChain = true, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, account, mounted, }) => {
    // Note: If your app doesn't use authentication, you
    // can remove all 'authenticationStatus' checks
    const ready = mounted && authenticationStatus !== "loading";
    const connected = ready &&
        account &&
        chain &&
        (!authenticationStatus || authenticationStatus === "authenticated");
    return ((0, jsx_runtime_1.jsx)("div", { ...(!ready && {
            style: {
                pointerEvents: "none",
                userSelect: "none",
            },
        }), children: (() => {
            if (!connected) {
                return ((0, jsx_runtime_1.jsx)("button", { className: className, onClick: openConnectModal, type: "button", children: "Connect Wallet" }));
            }
            if (forceChain && chain.unsupported) {
                return ((0, jsx_runtime_1.jsx)("button", { className: className, onClick: openChainModal, type: "button", children: "Wrong network" }));
            }
            return ((0, jsx_runtime_1.jsx)("button", { className: className, onClick: openAccountModal, type: "button", children: account.displayName }));
        })() }));
};
exports.default = CustomConnectButton;
