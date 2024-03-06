import { PlatformThemeType } from ".";
import { DiGiContextType } from "../../context/DiGiContext";

export type TagProps = {
  ctx: DiGiContextType;
  platform: PlatformThemeType;
  tag: string;
};
