/// <reference types="react" />
import { PrimarySaleModule } from "../types/nft/NFTContractObject";
export type PrimarySalePurchaseButtonProps = {
    address: string;
    quantity: number;
    className: string;
    primarySale: PrimarySaleModule;
    children: React.ReactNode;
};
declare const PrimarySalePurchaseButton: ({ address, quantity, className, primarySale, children, }: PrimarySalePurchaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export default PrimarySalePurchaseButton;
