"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@zoralabs/nft-hooks/dist/types");
const react_1 = require("react");
const useFindAsk = (nft) => {
    return (0, react_1.useMemo)(() => {
        var _a;
        return (_a = nft === null || nft === void 0 ? void 0 : nft.markets) === null || _a === void 0 ? void 0 : _a.find((x) => x.type === types_1.MARKET_TYPES.FIXED_PRICE &&
            x.status === types_1.MARKET_INFO_STATUSES.ACTIVE);
    }, [nft === null || nft === void 0 ? void 0 : nft.markets]);
};
exports.default = useFindAsk;
