/// <reference types="react" />
import { NFTStrategy } from "@zoralabs/nft-hooks/dist/strategies";
import { IMarketAdapter } from "../types";
import { RendererConfig } from "../types/adapters/RendererConfig";
import { ChainIdentifier } from "../types/nft/ChainIdentifier";
import { NFTContractStrategy } from "../types/nft/NFTContractStrategy";
import { IPrimarySaleAdapter } from "../types/adapters";
export type SharedConfigType = {
    serverURL?: string;
    preferredIPFSGateway?: string;
    zoraAPIKey?: string;
    platformAddress?: string;
    getNFTStrategy?: (chainId: ChainIdentifier) => Promise<NFTStrategy>;
    getNFTContractStrategy?: (chainId: ChainIdentifier) => Promise<NFTContractStrategy>;
    marketAdapters?: Promise<IMarketAdapter[]>;
    primarySaleAdapters?: Promise<IPrimarySaleAdapter[]>;
    renderers?: Promise<RendererConfig[]>;
};
declare const _default: import("react").Context<SharedConfigType>;
export default _default;
