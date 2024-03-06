import { NFTIdentifier } from "../../types/nft/NFTIdentifier";
import { SWRConfiguration } from "swr";
import { NFTObject } from "@zoralabs/nft-hooks";
declare const useNFT: (identifier?: NFTIdentifier, options?: SWRConfiguration, marketOptions?: SWRConfiguration) => {
    data: NFTObject | undefined;
    currencyLoaded: boolean;
    error: any;
    marketError: any;
};
export default useNFT;
