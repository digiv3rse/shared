import { PlatformThemeType } from ".";
import { DiGiContextType } from "../../context/DiGiContext";
import { NFTContractObject } from "../nft";

export type NFTContractProps = {
  ctx: DiGiContextType;
  platform: PlatformThemeType;
  nftContract?: NFTContractObject;
};
