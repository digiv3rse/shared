import { Post } from "../../types";
declare const usePostContent: (post: Post) => import("swr").SWRResponse<import("../../types").NFTContractObject | import("@zoralabs/nft-hooks").NFTObject | undefined, any>;
export default usePostContent;
