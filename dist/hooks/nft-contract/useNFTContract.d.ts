import { SWRConfiguration } from "swr";
import { ChainIdentifier } from "../../types/nft/ChainIdentifier";
import { NFTContractObject } from "../../types/nft/NFTContractObject";
export type NFTContractIdentifier = {
    contractAddress: string | undefined;
    chain: ChainIdentifier;
};
export type UseNFTContractType = {
    data: NFTContractObject | undefined;
    error: Error | undefined;
    marketError: Error | undefined;
};
declare const useNFTContract: (identifier?: NFTContractIdentifier, options?: SWRConfiguration, marketOptions?: SWRConfiguration) => UseNFTContractType;
export default useNFTContract;
