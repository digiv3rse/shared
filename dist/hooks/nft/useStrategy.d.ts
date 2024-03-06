import { ChainIdentifier } from "../../types/nft/ChainIdentifier";
import { Strategies } from "@zoralabs/nft-hooks";
declare const useStrategy: (chain?: ChainIdentifier) => Strategies.NFTStrategy | undefined;
export default useStrategy;
