import { Platform } from "../../types";
import { SWRResponse } from "swr";
export type UseMetadataType = SWRResponse<Platform | undefined>;
declare const useMetadata: ({ platform }: {
    platform?: string | undefined;
}) => UseMetadataType;
export default useMetadata;
