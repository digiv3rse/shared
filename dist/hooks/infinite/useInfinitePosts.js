"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const useObserver_1 = tslib_1.__importDefault(require("../utils/useObserver"));
const usePosts_1 = tslib_1.__importDefault(require("../platform/usePosts"));
const react_1 = require("react");
const useInfinitePosts = (config) => {
    const { loaderElementRef, setEnabled, enabled, intersecting } = (0, useObserver_1.default)();
    const { data, loading, more, setSize } = (0, usePosts_1.default)({
        ...config,
    });
    (0, react_1.useEffect)(() => {
        const hasData = (data === null || data === void 0 ? void 0 : data.length) || 0 > 1;
        //Disable the observer when theres no more elements to load
        if (hasData && !more && enabled) {
            setEnabled(false);
        }
        //Enable the observer one second after the inital data load
        else if (!hasData && more && !enabled) {
            setTimeout(() => {
                setEnabled(true);
            }, 1000);
        }
    }, [data]);
    (0, react_1.useEffect)(() => {
        if (intersecting)
            setSize((x) => x + 1);
    }, [intersecting]);
    return { data: data, more, loading, loaderElementRef };
};
exports.default = useInfinitePosts;
