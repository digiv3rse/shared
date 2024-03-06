"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swr_1 = tslib_1.__importDefault(require("swr"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const useMetadata = ({ platform }) => {
    const fetcher = (url) => axios_1.default.get(url).then((res) => { var _a; return (_a = res.data) === null || _a === void 0 ? void 0 : _a.platform; });
    const swr = (0, swr_1.default)(platform ? `/api/platform/${platform}/meta` : undefined, fetcher);
    return swr;
};
exports.default = useMetadata;
