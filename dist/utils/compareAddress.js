"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareAddress = void 0;
const compareAddress = (a, b) => {
    if (!a || !b)
        return false;
    return a.toLowerCase().localeCompare(b.toLowerCase()) === 0;
};
exports.compareAddress = compareAddress;
