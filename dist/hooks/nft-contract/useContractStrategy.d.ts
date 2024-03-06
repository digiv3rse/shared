import { ChainIdentifier } from "../../types/nft/ChainIdentifier";
import { NFTContractStrategy } from "../../types/nft/NFTContractStrategy";
declare const useContractStrategy: (chain?: ChainIdentifier) => NFTContractStrategy | undefined;
export default useContractStrategy;
