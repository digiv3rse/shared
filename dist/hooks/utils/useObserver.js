"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useObserver = () => {
    const loaderElementRef = (0, react_1.useRef)(null);
    const observer = (0, react_1.useRef)(null);
    const [enabled, setEnabledValue] = (0, react_1.useState)(false);
    const [intersecting, setIntersecting] = (0, react_1.useState)(false);
    console.log("loaderElementRef shared", loaderElementRef);
    (0, react_1.useEffect)(() => {
        observer.current = new IntersectionObserver((entry) => {
            entry.map((x) => {
                setIntersecting((x === null || x === void 0 ? void 0 : x.isIntersecting) && Math.floor(x.intersectionRatio) === 1);
            });
        });
    }, []);
    const setEnabled = (value) => {
        setEnabledValue(value);
    };
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (!loaderElementRef)
            return;
        if (enabled && loaderElementRef.current) {
            (_a = observer.current) === null || _a === void 0 ? void 0 : _a.observe(loaderElementRef.current);
        }
        else {
            (_b = observer.current) === null || _b === void 0 ? void 0 : _b.unobserve(loaderElementRef.current);
            setIntersecting(false);
        }
    }, [enabled, loaderElementRef]);
    return {
        setEnabled,
        enabled,
        intersecting,
        loaderElementRef,
    };
};
exports.default = useObserver;
