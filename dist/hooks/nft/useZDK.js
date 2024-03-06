"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const zdk_1 = require("@zoralabs/zdk");
const useZDK = () => {
    return (0, react_1.useMemo)(() => {
        return new zdk_1.ZDK({ apiKey: process.env.NEXT_PUBLIC_ZORA_API_KEY });
    }, []);
};
exports.default = useZDK;
