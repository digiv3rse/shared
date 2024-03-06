import { NFTContractIdentifier } from "./useNFTContract";
import { NFTContractObject } from "src/types";
declare const useNFTContractSecondary: (contract: NFTContractIdentifier) => import("swr").SWRResponse<NFTContractObject, any>;
export default useNFTContractSecondary;
