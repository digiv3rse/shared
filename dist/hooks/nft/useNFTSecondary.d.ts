import { NFTObject } from "@zoralabs/nft-hooks";
import { NFTIdentifier } from "src/types";
declare const useNFTSecondary: (nft: NFTIdentifier) => import("swr").SWRResponse<NFTObject, any>;
export default useNFTSecondary;
