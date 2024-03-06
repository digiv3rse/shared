import { TagData } from "src/types";
declare const useTagData: ({ platform, tag }: {
    platform: string;
    tag: string;
}) => import("swr").SWRResponse<TagData | undefined, any>;
export default useTagData;
