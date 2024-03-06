"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMainnet = void 0;
const wagmi_1 = require("wagmi");
function useMainnet() {
    const chainId = wagmi_1.chain.mainnet.id;
    // Because the generic for 'useProvider' is defaulting to 'unknown'
    // and the return type is being resolved as 'any', we're having to
    // manually define the Provider type, so this code is more defensive
    // than necessary in case the manual typing is ever incorrect.
    // If we're unable to resolve a list of chains, or the chains are
    // an invalid type, we'll silently bail out.
    const provider = (0, wagmi_1.useProvider)();
    const chains = Array.isArray(provider.chains) ? provider.chains : [];
    const enabled = chains === null || chains === void 0 ? void 0 : chains.some((chain) => (chain === null || chain === void 0 ? void 0 : chain.id) === chainId);
    return { chainId, enabled };
}
exports.useMainnet = useMainnet;
