import { NFTObject } from "@zoralabs/nft-hooks";
import { PlatformThemeType } from ".";
import { DiGiContextType } from "../../context/DiGiContext";
export type NFTProps = {
    ctx: DiGiContextType;
    platform: PlatformThemeType;
    nft?: NFTObject;
};
