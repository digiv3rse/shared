"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownDisplay = exports.DurationDisplay = exports.splitDurationSegments = exports.TimeDisplayMap = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function getNumber(time) {
    if (typeof time === "string") {
        return new Date(time).getTime() / 1000;
    }
    return time;
}
exports.TimeDisplayMap = {
    d: "day",
    h: "hour",
    m: "minute",
    s: "second",
};
const splitDurationSegments = (difference) => ({
    d: Math.floor(difference / (3600 * 24)),
    h: Math.floor(difference / 3600) % 24,
    m: Math.floor((difference / 60) % 60),
    s: Math.floor(difference % 60),
});
exports.splitDurationSegments = splitDurationSegments;
const getTimeLeft = (to, from) => {
    if (from === undefined) {
        return null;
    }
    let difference = to - from;
    if (difference < 0) {
        difference = 0;
    }
    return (0, exports.splitDurationSegments)(difference);
};
const DurationDisplay = ({ duration }) => {
    const renderSegmentText = (segmentName, segmentValue) => {
        if (segmentValue === 0) {
            return "";
        }
        if (segmentValue === 1) {
            return `${segmentValue} ${exports.TimeDisplayMap[segmentName]}`;
        }
        return `${segmentValue} ${exports.TimeDisplayMap[segmentName]}s`;
    };
    const durationSegments = (0, exports.splitDurationSegments)(duration);
    const singleSegment = Object.values(durationSegments)
        .map((segment) => segment === 0)
        .reduce((last, now) => last + (now ? 0 : 1), 0);
    if (singleSegment <= 1) {
        return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: Object.keys(durationSegments)
                .map((segment) => 
            // @ts-ignore: ignoring due to key type erasure with string
            renderSegmentText(segment, durationSegments[segment]))
                .join("") }));
    }
    return (0, jsx_runtime_1.jsx)(exports.CountdownDisplay, { from: 0, to: duration });
};
exports.DurationDisplay = DurationDisplay;
const CountdownDisplay = (props) => {
    const [timeLeft, setTimeLeft] = (0, react_1.useState)(getTimeLeft(getNumber(props.to), getNumber(props.from === undefined ? new Date().getTime() / 1000 : props.from)));
    const updateTimeLeft = (0, react_1.useCallback)(() => {
        setTimeLeft(getTimeLeft(getNumber(props.to), getNumber(props.from === undefined ? new Date().getTime() / 1000 : props.from)));
    }, [props.to, props.from]);
    (0, react_1.useEffect)(() => {
        const checkTimeout = setInterval(updateTimeLeft, 1000);
        return () => {
            clearInterval(checkTimeout);
        };
    }, []);
    if (!timeLeft) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {});
    }
    const timeString = [
        [timeLeft.d, "d"],
        [timeLeft.h, "h"],
        [timeLeft.m, "m"],
        [timeLeft.s, "s"],
    ]
        .filter((n) => n !== null)
        .reduce((lastString, [number, postfix]) => {
        if (!lastString.length && number === 0) {
            return "";
        }
        return `${lastString} ${number}${postfix}`;
    }, "");
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: timeString || "0s" });
};
exports.CountdownDisplay = CountdownDisplay;
