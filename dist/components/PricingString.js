"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingString = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PricingString = ({ pricing, showUSD = true, className, }) => {
    var _a, _b;
    const { format: formateETH } = new Intl.NumberFormat(typeof window === "undefined" ? "en-US" : navigator.language, {
        style: "decimal",
        maximumFractionDigits: 6,
    });
    const { format: formatUSD } = new Intl.NumberFormat(typeof window === "undefined" ? "en-US" : navigator.language, {
        style: "decimal",
        maximumFractionDigits: 2,
    });
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [pricing.amount.value && ((0, jsx_runtime_1.jsxs)("span", { className: className === null || className === void 0 ? void 0 : className.amount, children: [formateETH(pricing.amount.value), " ", pricing.symbol] })), showUSD && ((_a = pricing.usd) === null || _a === void 0 ? void 0 : _a.value) && ((0, jsx_runtime_1.jsxs)("span", { className: className === null || className === void 0 ? void 0 : className.usd, children: ["$", formatUSD((_b = pricing.usd) === null || _b === void 0 ? void 0 : _b.value)] }))] }));
};
exports.PricingString = PricingString;
