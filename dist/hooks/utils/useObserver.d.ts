/// <reference types="react" />
declare const useObserver: () => {
    setEnabled: (value: boolean) => void;
    enabled: boolean;
    intersecting: boolean;
    loaderElementRef: import("react").MutableRefObject<any>;
};
export default useObserver;
