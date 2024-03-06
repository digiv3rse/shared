"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swr_1 = tslib_1.__importDefault(require("swr"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const usePostContent = (post) => {
    const fetch = (url, data) => axios_1.default.post(url, { post: data }).then((x) => x.data);
    return (0, swr_1.default)(["/api/post/data", post], fetch);
};
exports.default = usePostContent;
