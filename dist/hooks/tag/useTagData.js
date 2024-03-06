"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const swr_1 = tslib_1.__importDefault(require("swr"));
const useTagData = ({ platform, tag }) => {
    const fetcher = (url) => axios_1.default.get(url).then((res) => res.data);
    return (0, swr_1.default)(`/api/platform/${platform}/tag/${encodeURIComponent(tag)}`, fetcher);
};
exports.default = useTagData;
