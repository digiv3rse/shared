"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const SharedConfigContext_1 = tslib_1.__importDefault(require("../../context/SharedConfigContext"));
const react_1 = require("react");
const infinite_1 = tslib_1.__importDefault(require("swr/infinite"));
const usePosts = ({ platform, tag, owner, limit = 20, onSuccess, }) => {
    var _a;
    const { serverURL } = (0, react_1.useContext)(SharedConfigContext_1.default);
    const baseURL = `${serverURL}/platform/${platform}/posts`;
    const baseParams = {
        tag: tag,
        owner: owner,
        limit: limit,
    };
    const fetcher = (url, params) => axios_1.default.get(url, { params }).then((res) => { var _a; return (_a = res.data) === null || _a === void 0 ? void 0 : _a.posts; });
    const getKey = (idx, prev) => {
        if (prev && !prev.length)
            return null;
        if (idx === 0)
            return [baseURL, baseParams];
        return [baseURL, { ...baseParams, page: idx }];
    };
    const swr = (0, infinite_1.default)(getKey, fetcher, {
        onSuccess,
    });
    const { size, data } = swr;
    const loading = size > ((data === null || data === void 0 ? void 0 : data.length) || 0);
    const more = data ? (((_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.length) || 0) == limit : true;
    return { ...swr, loading, more };
};
exports.default = usePosts;
