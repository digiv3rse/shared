"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTContractStrategy = void 0;
class NFTContractStrategy {
    constructor(networkId) {
        // By default don't query secondary data endpoint.
        this.hasSecondaryData = (_) => false;
        this.networkId = networkId;
    }
    async fetchSecondaryData(address, _) {
        return {
            rawData: {},
            collection: {
                address,
            },
        };
    }
}
exports.NFTContractStrategy = NFTContractStrategy;
