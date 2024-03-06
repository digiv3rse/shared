"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const SharedConfigContext_1 = tslib_1.__importDefault(require("../../context/SharedConfigContext"));
const useContractStrategy = (chain) => {
    const { getNFTContractStrategy } = (0, react_1.useContext)(SharedConfigContext_1.default);
    const [strategy, setStrategy] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const handler = async () => {
            if (!chain || !getNFTContractStrategy)
                return;
            setStrategy(await getNFTContractStrategy(chain));
        };
        handler();
    }, [chain]);
    return strategy;
};
exports.default = useContractStrategy;
