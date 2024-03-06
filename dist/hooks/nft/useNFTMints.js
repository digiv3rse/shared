"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const useZDK_1 = tslib_1.__importDefault(require("./useZDK"));
const infinite_1 = tslib_1.__importDefault(require("swr/infinite"));
const useNFTMints = (props) => {
    var _a;
    const zdk = (0, useZDK_1.default)();
    const defaultParams = ["zdk-tokens", props.minterAddresses, props.limit];
    const getKey = (idx, prev) => {
        if ((prev && !prev.mints) ||
            !props.minterAddresses ||
            props.minterAddresses.length < 1)
            return null;
        if (idx === 0)
            return [...defaultParams, null];
        return (prev === null || prev === void 0 ? void 0 : prev.page.endCursor)
            ? [...defaultParams, prev.page.endCursor]
            : [...defaultParams, null];
    };
    const fetcher = (_, minterAddresses, limit, after) => zdk
        .mints({
        where: { minterAddresses: minterAddresses },
        pagination: { after: after, limit: limit },
    })
        .then((x) => ({ mints: x.mints.nodes, page: x.mints.pageInfo }));
    const swr = (0, infinite_1.default)(getKey, fetcher, { onSuccess: props.onSuccess });
    const { size, data } = swr;
    const loading = size > ((data === null || data === void 0 ? void 0 : data.length) || 0);
    const more = data ? ((_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.page.hasNextPage) || 0 : true;
    return { ...swr, loading, more };
};
exports.default = useNFTMints;
