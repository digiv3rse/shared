/// <reference types="react" />
export type CountdownDisplayProps = {
    from?: number | string;
    to: number | string;
};
export declare const TimeDisplayMap: {
    d: string;
    h: string;
    m: string;
    s: string;
};
export declare const splitDurationSegments: (difference: number) => {
    d: number;
    h: number;
    m: number;
    s: number;
};
export declare const DurationDisplay: ({ duration }: {
    duration: number;
}) => import("react/jsx-runtime").JSX.Element;
export declare const CountdownDisplay: React.FC<CountdownDisplayProps>;
