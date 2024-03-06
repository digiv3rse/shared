/// <reference types="react" />
import type { CurrencyValue } from "@zoralabs/nft-hooks";
export type PricingStringProps = {
    pricing: CurrencyValue;
    showUSD?: boolean;
    className?: {
        amount?: string;
        usd?: string;
    };
};
export declare const PricingString: React.FC<PricingStringProps>;
