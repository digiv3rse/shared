"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const SharedConfigContext_1 = tslib_1.__importDefault(require("../../context/SharedConfigContext"));
const usePrimarySale = (source) => {
    const { primarySaleAdapters } = (0, react_1.useContext)(SharedConfigContext_1.default);
    const [primarySale, setPrimarySale] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const handler = async () => {
            if (!source || !primarySaleAdapters)
                return;
            setPrimarySale((await primarySaleAdapters).find((adapter) => {
                if (adapter.source === source)
                    return adapter;
                else
                    return;
            }));
        };
        handler();
    }, [source, primarySaleAdapters]);
    return primarySale;
};
exports.default = usePrimarySale;
