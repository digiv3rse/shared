"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const useZDK_1 = tslib_1.__importDefault(require("./useZDK"));
const infinite_1 = tslib_1.__importDefault(require("swr/infinite"));
const queries_sdk_1 = require("@zoralabs/zdk/dist/queries/queries-sdk");
const useNFTTokens = (props) => {
    var _a;
    const zdk = (0, useZDK_1.default)();
    const defaultParams = [
        "zdk-tokens",
        props.collectionAddresses,
        props.ownerAddresses,
        props.limit,
    ];
    const getKey = (idx, prev) => {
        if ((prev && !prev.tokens) ||
            (!props.collectionAddresses && !props.ownerAddresses))
            return null;
        if (idx === 0)
            return [...defaultParams, null];
        return (prev === null || prev === void 0 ? void 0 : prev.page.endCursor)
            ? [...defaultParams, prev.page.endCursor]
            : [...defaultParams, null];
    };
    const fetcher = (_, collectionAddresses, ownerAddresses, limit, after) => zdk
        .tokens({
        where: {
            collectionAddresses: collectionAddresses,
            ownerAddresses: ownerAddresses,
        },
        pagination: {
            limit: limit,
            after: after,
        },
        sort: {
            sortKey: queries_sdk_1.TokenSortKey.Minted,
            sortDirection: queries_sdk_1.SortDirection.Desc,
        },
        includeFullDetails: false,
        includeSalesHistory: false,
    })
        .then((x) => ({ tokens: x.tokens.nodes, page: x.tokens.pageInfo }));
    const swr = (0, infinite_1.default)(getKey, fetcher, { onSuccess: props.onSuccess });
    const { size, data } = swr;
    const loading = size > ((data === null || data === void 0 ? void 0 : data.length) || 0);
    const more = data ? ((_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.page.hasNextPage) || false : true;
    return { ...swr, loading, more };
};
exports.default = useNFTTokens;
