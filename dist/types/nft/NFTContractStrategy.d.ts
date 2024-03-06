import { NetworkIDs } from "@zoralabs/nft-hooks";
import { NFTContractObject } from "./NFTContractObject";
type FetchInfo = {
    address: string;
};
export declare abstract class NFTContractStrategy {
    networkId: string;
    constructor(networkId: NetworkIDs);
    abstract fetchNFTContract(contract: string): Promise<NFTContractObject>;
    hasSecondaryData: (_: FetchInfo) => boolean;
    fetchSecondaryData(address: string, _?: NFTContractObject): Promise<NFTContractObject>;
}
export {};
