import { NFTObject } from "@zoralabs/nft-hooks";
import { IMarketAdapter } from "../../types";
declare const useMarket: (nft: NFTObject | undefined) => IMarketAdapter | undefined;
export default useMarket;
