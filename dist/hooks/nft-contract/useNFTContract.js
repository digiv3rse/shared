"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swr_1 = tslib_1.__importDefault(require("swr"));
const deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
const useContractStrategy_1 = tslib_1.__importDefault(require("./useContractStrategy"));
const useNFTContract = (identifier, options = {}, marketOptions = {}) => {
    const contractAddress = identifier === null || identifier === void 0 ? void 0 : identifier.contractAddress;
    // Fetch strategy
    const strategy = (0, useContractStrategy_1.default)(identifier === null || identifier === void 0 ? void 0 : identifier.chain);
    // Fetch media data
    const { data: nftContractData, error: nftError } = (0, swr_1.default)(strategy && contractAddress
        ? ["fetchNFTContractData", strategy, contractAddress]
        : null, (_, strategy, address) => strategy.fetchNFTContract(address), options);
    // Fetch market data (if needed)
    const { data: nftContractMarketData, error: nftMarketError } = (0, swr_1.default)(strategy &&
        contractAddress &&
        strategy.hasSecondaryData({ address: contractAddress })
        ? ["fetchContractSecondaryData", strategy, contractAddress]
        : null, (_, strategy, address) => strategy.fetchSecondaryData(address, nftContractData), marketOptions);
    return {
        data: nftContractData || nftContractMarketData
            ? (0, deepmerge_1.default)(nftContractData || {}, nftContractMarketData || {})
            : undefined,
        error: nftError,
        marketError: nftMarketError,
    };
};
exports.default = useNFTContract;
