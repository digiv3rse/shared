"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARWEAVE_GATEWAY = exports.RARIBLE_API_BY_NETWORK = void 0;
const nft_hooks_1 = require("@zoralabs/nft-hooks");
exports.RARIBLE_API_BY_NETWORK = {
    [nft_hooks_1.Networks.MAINNET]: "https://api.rarible.org/v0.1",
    [nft_hooks_1.Networks.POLYGON]: "https://api.rarible.org/v0.1",
    [nft_hooks_1.Networks.RINKEBY]: "https://api-staging.rarible.org/v0.1",
    [nft_hooks_1.Networks.MUMBAI]: "https://api-staging.rarible.org/v0.1",
};
exports.ARWEAVE_GATEWAY = "https://arweave.net";
