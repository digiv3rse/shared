import { Post } from "../../types/posts/Post";
import { SWRInfiniteResponse } from "swr/infinite";
export type UsePostsType = {
    data?: Post[];
};
export type UsePostsProps = {
    platform: string;
    tag?: string;
    owner?: string;
    limit?: number;
    onSuccess?: (data: Post[][]) => void;
};
declare const usePosts: ({ platform, tag, owner, limit, onSuccess, }: UsePostsProps) => SWRInfiniteResponse<Post[], any> & {
    loading: boolean;
    more: boolean;
};
export default usePosts;
