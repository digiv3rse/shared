"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const SharedConfigContext_1 = tslib_1.__importDefault(require("../../context/SharedConfigContext"));
const useMarket = (nft) => {
    const { marketAdapters } = (0, react_1.useContext)(SharedConfigContext_1.default);
    const [market, setMarket] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const handler = async () => {
            if (!nft || !marketAdapters)
                return;
            setMarket((await marketAdapters).find((Market) => {
                if (Market.enabled(nft))
                    return Market;
                else
                    return;
            }));
        };
        handler();
    }, [nft, marketAdapters]);
    return market;
};
exports.default = useMarket;
