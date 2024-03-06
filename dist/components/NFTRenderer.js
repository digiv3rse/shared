"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const nft_hooks_1 = require("@zoralabs/nft-hooks");
const SharedConfigContext_1 = tslib_1.__importDefault(require("../context/SharedConfigContext"));
const NFTRenderer = ({ nft, className, renderingContext = "PREVIEW", onComponentLoaded, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const mediaType = (0, nft_hooks_1.useNFTContent)((_a = nft.metadata) === null || _a === void 0 ? void 0 : _a.contentUri);
    const { renderers } = (0, react_1.useContext)(SharedConfigContext_1.default);
    const request = {
        media: {
            content: ((_b = nft.metadata) === null || _b === void 0 ? void 0 : _b.contentUri)
                ? {
                    uri: (_c = nft.metadata) === null || _c === void 0 ? void 0 : _c.contentUri,
                    type: (_d = mediaType.content) === null || _d === void 0 ? void 0 : _d.mimeType,
                }
                : undefined,
            image: ((_e = nft.metadata) === null || _e === void 0 ? void 0 : _e.imageUri)
                ? {
                    uri: (_f = nft.metadata) === null || _f === void 0 ? void 0 : _f.imageUri,
                    type: "image",
                }
                : undefined,
            thumbnail: ((_h = (_g = nft.media) === null || _g === void 0 ? void 0 : _g.thumbnail) === null || _h === void 0 ? void 0 : _h.uri)
                ? {
                    uri: (_k = (_j = nft.media) === null || _j === void 0 ? void 0 : _j.thumbnail) === null || _k === void 0 ? void 0 : _k.uri,
                    type: "image",
                }
                : undefined,
        },
        metadata: nft.metadata,
        contract: (_l = nft.nft) === null || _l === void 0 ? void 0 : _l.contract.address,
        tokenId: (_m = nft.nft) === null || _m === void 0 ? void 0 : _m.tokenId,
        networkId: "1",
        renderingContext,
    };
    const [renderingInfo, setRenderingInfo] = (0, react_1.useState)();
    (0, react_1.useMemo)(() => {
        const handler = async () => {
            if (!renderers)
                return;
            const sortedRenderers = (await renderers).sort((a, b) => a.getRenderingPreference(request) > b.getRenderingPreference(request)
                ? -1
                : 1);
            setRenderingInfo(sortedRenderers[0]);
        };
        handler();
    }, [renderers, nft.metadata, (_o = nft.nft) === null || _o === void 0 ? void 0 : _o.contentURI, mediaType.content]);
    if (renderingInfo) {
        const RenderingComponent = renderingInfo.render;
        return ((0, jsx_runtime_1.jsx)(RenderingComponent, { className: className, request: request, onComponentLoaded: onComponentLoaded }));
    }
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, {});
};
exports.default = NFTRenderer;
