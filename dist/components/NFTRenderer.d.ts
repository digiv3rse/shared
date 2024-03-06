/// <reference types="react" />
import { NFTObject } from "@zoralabs/nft-hooks";
export type NFTRenderer = {
    nft: NFTObject;
    className?: string;
    renderingContext?: "FULL" | "PREVIEW" | "THUMBNAIL";
    onComponentLoaded?: () => void;
};
declare const NFTRenderer: React.FC<NFTRenderer>;
export default NFTRenderer;
