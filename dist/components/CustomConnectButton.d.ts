/// <reference types="react" />
export declare type AuthenticationStatus = "loading" | "unauthenticated" | "authenticated";
export type CustomConnectButtonProps = {
    className: string;
    forceChain?: boolean;
    account?: {
        address: string;
        balanceDecimals?: number;
        balanceFormatted?: string;
        balanceSymbol?: string;
        displayBalance?: string;
        displayName: string;
        ensAvatar?: string;
        ensName?: string;
        hasPendingTransactions: boolean;
    };
    chain?: {
        hasIcon: boolean;
        iconUrl?: string;
        iconBackground?: string;
        id: number;
        name?: string;
        unsupported?: boolean;
    };
    mounted: boolean;
    authenticationStatus?: AuthenticationStatus;
    openAccountModal: () => void;
    openChainModal: () => void;
    openConnectModal: () => void;
    accountModalOpen: boolean;
    chainModalOpen: boolean;
    connectModalOpen: boolean;
};
declare const CustomConnectButton: React.FC<CustomConnectButtonProps>;
export default CustomConnectButton;
