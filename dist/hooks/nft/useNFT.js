"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swr_1 = tslib_1.__importDefault(require("swr"));
const useStrategy_1 = tslib_1.__importDefault(require("./useStrategy"));
const deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
const useNFT = (identifier, options = {}, marketOptions = {}) => {
    const contractAddress = identifier === null || identifier === void 0 ? void 0 : identifier.contractAddress;
    const tokenId = identifier === null || identifier === void 0 ? void 0 : identifier.tokenId;
    // Fetch strategy
    const strategy = (0, useStrategy_1.default)(identifier === null || identifier === void 0 ? void 0 : identifier.chain);
    // Fetch media data
    const { data: nftData, error: nftError } = (0, swr_1.default)(strategy && contractAddress && tokenId
        ? ["fetchNFTData", strategy, contractAddress, tokenId]
        : null, (_, strategy, address, tokenId) => strategy.fetchNFT(address, tokenId), options);
    // Fetch market data (if needed)
    const { data: nftMarketData, error: nftMarketError } = (0, swr_1.default)(strategy &&
        contractAddress &&
        tokenId &&
        strategy.hasSecondaryData({ contract: contractAddress, id: tokenId })
        ? ["fetchSecondaryData", strategy, contractAddress, tokenId]
        : null, (_, strategy, address, tokenId) => strategy.fetchSecondaryData(address, tokenId, nftData), marketOptions);
    return {
        data: nftData || nftMarketData
            ? (0, deepmerge_1.default)(nftData || {}, nftMarketData || {})
            : undefined,
        currencyLoaded: false,
        error: nftError,
        marketError: nftMarketError,
    };
};
exports.default = useNFT;
