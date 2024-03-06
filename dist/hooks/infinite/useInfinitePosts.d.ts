/// <reference types="react" />
import { UsePostsProps } from "../platform/usePosts";
declare const useInfinitePosts: (config: UsePostsProps) => {
    data: import("../..").Post[][] | undefined;
    more: boolean;
    loading: boolean;
    loaderElementRef: import("react").MutableRefObject<any>;
};
export default useInfinitePosts;
