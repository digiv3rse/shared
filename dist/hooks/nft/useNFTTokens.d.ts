export type UseNFTTokensProps = {
    collectionAddresses?: string[];
    ownerAddresses?: string[];
    limit?: number;
    after?: any;
    onSuccess?: (data: any[]) => void;
};
declare const useNFTTokens: (props: UseNFTTokensProps) => {
    loading: boolean;
    more: boolean;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        tokens: {
            __typename: "TokenWithMarketsSummary";
            marketsSummary: {
                __typename?: "Market" | undefined;
                collectionAddress?: string | null | undefined;
                marketAddress: string;
                marketType: import("@zoralabs/zdk/dist/queries/queries-sdk").MarketType;
                status: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                price?: {
                    __typename?: "PriceAtTime" | undefined;
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                    nativePrice: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: "Currency" | undefined;
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                } | null | undefined;
                networkInfo: {
                    __typename?: "NetworkInfo" | undefined;
                    chain: import("@zoralabs/zdk/dist/queries/queries-sdk").Chain;
                    network: import("@zoralabs/zdk/dist/queries/queries-sdk").Network;
                };
                properties?: {
                    __typename: "LilNounsAuction";
                } | {
                    __typename: "NounsAuction";
                } | {
                    __typename: "NounsBuilderAuction";
                } | {
                    __typename: "V1Ask";
                    v1AskStatus: string;
                    currency: string;
                    amount: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V1BidShare";
                } | {
                    __typename: "V1Offer";
                    v1OfferStatus: string;
                    sellOnShare: string;
                    bidder: string;
                    currency: string;
                    amount: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V2Auction";
                    firstBidTime?: any;
                    highestBidder?: string | null | undefined;
                    curator: string;
                    collectionAddress: string;
                    curatorFeePercentage: number;
                    tokenId: string;
                    auctionCurrency: string;
                    duration: string;
                    estimatedExpirationTime?: any;
                    v2AuctionStatus: string;
                    tokenOwner: string;
                    address: string;
                    auctionId: string;
                    approved: boolean;
                    reservePrice: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                    highestBidPrice?: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "V3Ask";
                    buyer?: string | null | undefined;
                    finder?: string | null | undefined;
                    findersFeeBps?: number | null | undefined;
                    sellerFundsRecipient?: string | null | undefined;
                    v3AskStatus: string;
                    seller: string;
                    address: string;
                    askCurrency: string;
                    collectionAddress: string;
                    askPrice: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V3ReserveAuction";
                } | null | undefined;
            }[];
            token: {
                __typename: "Token";
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any;
                owner?: string | null | undefined;
                name?: string | null | undefined;
                description?: string | null | undefined;
                metadata?: any;
                tokenUrl?: string | null | undefined;
                tokenUrlMimeType?: string | null | undefined;
                tokenContract?: {
                    __typename?: "TokenContract" | undefined;
                    name?: string | null | undefined;
                    network: string;
                    description?: string | null | undefined;
                    collectionAddress: string;
                    symbol?: string | null | undefined;
                    chain: number;
                } | null | undefined;
                mintInfo?: {
                    __typename?: "MintInfo" | undefined;
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: "PriceAtTime";
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                    mintContext: {
                        __typename: "TransactionInfo";
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null | undefined;
                        logIndex?: number | null | undefined;
                    };
                } | null | undefined;
                image?: {
                    __typename?: "TokenContentMedia" | undefined;
                    size?: string | null | undefined;
                    url?: string | null | undefined;
                    mimeType?: string | null | undefined;
                    mediaEncoding?: {
                        __typename: "AudioEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                    } | {
                        __typename: "ImageEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | {
                        __typename: "UnsupportedEncodingTypes";
                        original: string;
                    } | {
                        __typename: "VideoEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        preview?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                content?: {
                    __typename?: "TokenContentMedia" | undefined;
                    size?: string | null | undefined;
                    url?: string | null | undefined;
                    mimeType?: string | null | undefined;
                    mediaEncoding?: {
                        __typename: "AudioEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                    } | {
                        __typename: "ImageEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | {
                        __typename: "UnsupportedEncodingTypes";
                        original: string;
                    } | {
                        __typename: "VideoEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        preview?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                attributes?: {
                    __typename?: "TokenAttribute" | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                    displayType?: string | null | undefined;
                }[] | null | undefined;
            };
            sales: {
                __typename?: "Sale" | undefined;
                saleContractAddress?: string | null | undefined;
                buyerAddress: string;
                collectionAddress: string;
                sellerAddress: string;
                tokenId: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                price?: {
                    __typename?: "PriceAtTime" | undefined;
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                    nativePrice: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: "Currency" | undefined;
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                } | null | undefined;
            }[];
            events: {
                __typename?: "Event" | undefined;
                eventType: import("@zoralabs/zdk/dist/queries/queries-sdk").EventType;
                collectionAddress?: string | null | undefined;
                tokenId?: string | null | undefined;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                properties: {
                    __typename: "ApprovalEvent";
                } | {
                    __typename: "LilNounsAuctionEvent";
                } | {
                    __typename: "MintEvent";
                    tokenId: string;
                    collectionAddress: string;
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "NounsAuctionEvent";
                } | {
                    __typename: "Sale";
                } | {
                    __typename: "SeaportEvent";
                } | {
                    __typename: "TransferEvent";
                    fromAddress: string;
                    toAddress: string;
                    collectionAddress: string;
                    tokenId: string;
                } | {
                    __typename: "V1MarketEvent";
                    v1MarketEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V1MarketEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V1MarketAskCreatedEventProperties";
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketAskRemovedEventProperties";
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketBidShareUpdatedEventProperties";
                    } | {
                        __typename: "V1MarketOfferCreatedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketOfferFinalizedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketOfferRemovedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    };
                } | {
                    __typename: "V1MediaEvent";
                } | {
                    __typename: "V2AuctionEvent";
                    v2AuctionEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V2AuctionEventType;
                    address: string;
                    auctionId: number;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V2AuctionApprovalUpdatedEventProperties";
                        approved: boolean;
                    } | {
                        __typename: "V2AuctionBidEventProperties";
                        sender: string;
                        firstBid: boolean;
                        extended: boolean;
                        value: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V2AuctionCanceledEventProperties";
                        tokenOwner: string;
                    } | {
                        __typename: "V2AuctionCreatedEventProperties";
                        auctionCurrency: string;
                        tokenOwner: string;
                        curator: string;
                        curatorFeePercentage: number;
                        duration: string;
                        reservePrice: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V2AuctionDurationExtendedEventProperties";
                        duration: string;
                    } | {
                        __typename: "V2AuctionEndedEventProperties";
                        tokenOwner: string;
                        curator: string;
                        winner: string;
                        auctionCurrency: string;
                        amount: string;
                        curatorFee: string;
                    } | {
                        __typename: "V2AuctionReservePriceUpdatedEventProperties";
                        reservePrice: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    };
                } | {
                    __typename: "V3AskEvent";
                    v3AskEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V3AskEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V3AskCanceledEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskCreatedEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskFilledEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        finder: string;
                        buyer: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskPriceUpdatedEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AsksCoreEthAskEventProperties";
                    } | {
                        __typename: "V3AsksCoreEthAskFilledEventProperties";
                    } | {
                        __typename: "V3AsksCoreEthRoyaltyPayoutEventProperties";
                    } | {
                        __typename: "V3PrivateAskEventProperties";
                    };
                } | {
                    __typename: "V3ModuleManagerEvent";
                } | {
                    __typename: "V3ReserveAuctionEvent";
                };
            }[];
        }[];
        page: {
            __typename?: "PageInfo" | undefined;
            endCursor?: string | null | undefined;
            hasNextPage: boolean;
            limit: number;
        };
    }[] | undefined>;
    data?: {
        tokens: {
            __typename: "TokenWithMarketsSummary";
            marketsSummary: {
                __typename?: "Market" | undefined;
                collectionAddress?: string | null | undefined;
                marketAddress: string;
                marketType: import("@zoralabs/zdk/dist/queries/queries-sdk").MarketType;
                status: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                price?: {
                    __typename?: "PriceAtTime" | undefined;
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                    nativePrice: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: "Currency" | undefined;
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                } | null | undefined;
                networkInfo: {
                    __typename?: "NetworkInfo" | undefined;
                    chain: import("@zoralabs/zdk/dist/queries/queries-sdk").Chain;
                    network: import("@zoralabs/zdk/dist/queries/queries-sdk").Network;
                };
                properties?: {
                    __typename: "LilNounsAuction";
                } | {
                    __typename: "NounsAuction";
                } | {
                    __typename: "NounsBuilderAuction";
                } | {
                    __typename: "V1Ask";
                    v1AskStatus: string;
                    currency: string;
                    amount: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V1BidShare";
                } | {
                    __typename: "V1Offer";
                    v1OfferStatus: string;
                    sellOnShare: string;
                    bidder: string;
                    currency: string;
                    amount: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V2Auction";
                    firstBidTime?: any;
                    highestBidder?: string | null | undefined;
                    curator: string;
                    collectionAddress: string;
                    curatorFeePercentage: number;
                    tokenId: string;
                    auctionCurrency: string;
                    duration: string;
                    estimatedExpirationTime?: any;
                    v2AuctionStatus: string;
                    tokenOwner: string;
                    address: string;
                    auctionId: string;
                    approved: boolean;
                    reservePrice: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                    highestBidPrice?: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "V3Ask";
                    buyer?: string | null | undefined;
                    finder?: string | null | undefined;
                    findersFeeBps?: number | null | undefined;
                    sellerFundsRecipient?: string | null | undefined;
                    v3AskStatus: string;
                    seller: string;
                    address: string;
                    askCurrency: string;
                    collectionAddress: string;
                    askPrice: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V3ReserveAuction";
                } | null | undefined;
            }[];
            token: {
                __typename: "Token";
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any;
                owner?: string | null | undefined;
                name?: string | null | undefined;
                description?: string | null | undefined;
                metadata?: any;
                tokenUrl?: string | null | undefined;
                tokenUrlMimeType?: string | null | undefined;
                tokenContract?: {
                    __typename?: "TokenContract" | undefined;
                    name?: string | null | undefined;
                    network: string;
                    description?: string | null | undefined;
                    collectionAddress: string;
                    symbol?: string | null | undefined;
                    chain: number;
                } | null | undefined;
                mintInfo?: {
                    __typename?: "MintInfo" | undefined;
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: "PriceAtTime";
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                    mintContext: {
                        __typename: "TransactionInfo";
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null | undefined;
                        logIndex?: number | null | undefined;
                    };
                } | null | undefined;
                image?: {
                    __typename?: "TokenContentMedia" | undefined;
                    size?: string | null | undefined;
                    url?: string | null | undefined;
                    mimeType?: string | null | undefined;
                    mediaEncoding?: {
                        __typename: "AudioEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                    } | {
                        __typename: "ImageEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | {
                        __typename: "UnsupportedEncodingTypes";
                        original: string;
                    } | {
                        __typename: "VideoEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        preview?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                content?: {
                    __typename?: "TokenContentMedia" | undefined;
                    size?: string | null | undefined;
                    url?: string | null | undefined;
                    mimeType?: string | null | undefined;
                    mediaEncoding?: {
                        __typename: "AudioEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                    } | {
                        __typename: "ImageEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | {
                        __typename: "UnsupportedEncodingTypes";
                        original: string;
                    } | {
                        __typename: "VideoEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        preview?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                attributes?: {
                    __typename?: "TokenAttribute" | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                    displayType?: string | null | undefined;
                }[] | null | undefined;
            };
            sales: {
                __typename?: "Sale" | undefined;
                saleContractAddress?: string | null | undefined;
                buyerAddress: string;
                collectionAddress: string;
                sellerAddress: string;
                tokenId: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                price?: {
                    __typename?: "PriceAtTime" | undefined;
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                    nativePrice: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: "Currency" | undefined;
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                } | null | undefined;
            }[];
            events: {
                __typename?: "Event" | undefined;
                eventType: import("@zoralabs/zdk/dist/queries/queries-sdk").EventType;
                collectionAddress?: string | null | undefined;
                tokenId?: string | null | undefined;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                properties: {
                    __typename: "ApprovalEvent";
                } | {
                    __typename: "LilNounsAuctionEvent";
                } | {
                    __typename: "MintEvent";
                    tokenId: string;
                    collectionAddress: string;
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "NounsAuctionEvent";
                } | {
                    __typename: "Sale";
                } | {
                    __typename: "SeaportEvent";
                } | {
                    __typename: "TransferEvent";
                    fromAddress: string;
                    toAddress: string;
                    collectionAddress: string;
                    tokenId: string;
                } | {
                    __typename: "V1MarketEvent";
                    v1MarketEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V1MarketEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V1MarketAskCreatedEventProperties";
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketAskRemovedEventProperties";
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketBidShareUpdatedEventProperties";
                    } | {
                        __typename: "V1MarketOfferCreatedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketOfferFinalizedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketOfferRemovedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    };
                } | {
                    __typename: "V1MediaEvent";
                } | {
                    __typename: "V2AuctionEvent";
                    v2AuctionEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V2AuctionEventType;
                    address: string;
                    auctionId: number;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V2AuctionApprovalUpdatedEventProperties";
                        approved: boolean;
                    } | {
                        __typename: "V2AuctionBidEventProperties";
                        sender: string;
                        firstBid: boolean;
                        extended: boolean;
                        value: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V2AuctionCanceledEventProperties";
                        tokenOwner: string;
                    } | {
                        __typename: "V2AuctionCreatedEventProperties";
                        auctionCurrency: string;
                        tokenOwner: string;
                        curator: string;
                        curatorFeePercentage: number;
                        duration: string;
                        reservePrice: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V2AuctionDurationExtendedEventProperties";
                        duration: string;
                    } | {
                        __typename: "V2AuctionEndedEventProperties";
                        tokenOwner: string;
                        curator: string;
                        winner: string;
                        auctionCurrency: string;
                        amount: string;
                        curatorFee: string;
                    } | {
                        __typename: "V2AuctionReservePriceUpdatedEventProperties";
                        reservePrice: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    };
                } | {
                    __typename: "V3AskEvent";
                    v3AskEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V3AskEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V3AskCanceledEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskCreatedEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskFilledEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        finder: string;
                        buyer: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskPriceUpdatedEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AsksCoreEthAskEventProperties";
                    } | {
                        __typename: "V3AsksCoreEthAskFilledEventProperties";
                    } | {
                        __typename: "V3AsksCoreEthRoyaltyPayoutEventProperties";
                    } | {
                        __typename: "V3PrivateAskEventProperties";
                    };
                } | {
                    __typename: "V3ModuleManagerEvent";
                } | {
                    __typename: "V3ReserveAuctionEvent";
                };
            }[];
        }[];
        page: {
            __typename?: "PageInfo" | undefined;
            endCursor?: string | null | undefined;
            hasNextPage: boolean;
            limit: number;
        };
    }[] | undefined;
    error?: any;
    mutate: import("swr").KeyedMutator<{
        tokens: {
            __typename: "TokenWithMarketsSummary";
            marketsSummary: {
                __typename?: "Market" | undefined;
                collectionAddress?: string | null | undefined;
                marketAddress: string;
                marketType: import("@zoralabs/zdk/dist/queries/queries-sdk").MarketType;
                status: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                price?: {
                    __typename?: "PriceAtTime" | undefined;
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                    nativePrice: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: "Currency" | undefined;
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                } | null | undefined;
                networkInfo: {
                    __typename?: "NetworkInfo" | undefined;
                    chain: import("@zoralabs/zdk/dist/queries/queries-sdk").Chain;
                    network: import("@zoralabs/zdk/dist/queries/queries-sdk").Network;
                };
                properties?: {
                    __typename: "LilNounsAuction";
                } | {
                    __typename: "NounsAuction";
                } | {
                    __typename: "NounsBuilderAuction";
                } | {
                    __typename: "V1Ask";
                    v1AskStatus: string;
                    currency: string;
                    amount: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V1BidShare";
                } | {
                    __typename: "V1Offer";
                    v1OfferStatus: string;
                    sellOnShare: string;
                    bidder: string;
                    currency: string;
                    amount: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V2Auction";
                    firstBidTime?: any;
                    highestBidder?: string | null | undefined;
                    curator: string;
                    collectionAddress: string;
                    curatorFeePercentage: number;
                    tokenId: string;
                    auctionCurrency: string;
                    duration: string;
                    estimatedExpirationTime?: any;
                    v2AuctionStatus: string;
                    tokenOwner: string;
                    address: string;
                    auctionId: string;
                    approved: boolean;
                    reservePrice: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                    highestBidPrice?: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "V3Ask";
                    buyer?: string | null | undefined;
                    finder?: string | null | undefined;
                    findersFeeBps?: number | null | undefined;
                    sellerFundsRecipient?: string | null | undefined;
                    v3AskStatus: string;
                    seller: string;
                    address: string;
                    askCurrency: string;
                    collectionAddress: string;
                    askPrice: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    };
                } | {
                    __typename: "V3ReserveAuction";
                } | null | undefined;
            }[];
            token: {
                __typename: "Token";
                tokenId: string;
                collectionAddress: string;
                lastRefreshTime?: any;
                owner?: string | null | undefined;
                name?: string | null | undefined;
                description?: string | null | undefined;
                metadata?: any;
                tokenUrl?: string | null | undefined;
                tokenUrlMimeType?: string | null | undefined;
                tokenContract?: {
                    __typename?: "TokenContract" | undefined;
                    name?: string | null | undefined;
                    network: string;
                    description?: string | null | undefined;
                    collectionAddress: string;
                    symbol?: string | null | undefined;
                    chain: number;
                } | null | undefined;
                mintInfo?: {
                    __typename?: "MintInfo" | undefined;
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename: "PriceAtTime";
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                    mintContext: {
                        __typename: "TransactionInfo";
                        blockNumber: number;
                        blockTimestamp: any;
                        transactionHash?: string | null | undefined;
                        logIndex?: number | null | undefined;
                    };
                } | null | undefined;
                image?: {
                    __typename?: "TokenContentMedia" | undefined;
                    size?: string | null | undefined;
                    url?: string | null | undefined;
                    mimeType?: string | null | undefined;
                    mediaEncoding?: {
                        __typename: "AudioEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                    } | {
                        __typename: "ImageEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | {
                        __typename: "UnsupportedEncodingTypes";
                        original: string;
                    } | {
                        __typename: "VideoEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        preview?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                content?: {
                    __typename?: "TokenContentMedia" | undefined;
                    size?: string | null | undefined;
                    url?: string | null | undefined;
                    mimeType?: string | null | undefined;
                    mediaEncoding?: {
                        __typename: "AudioEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                    } | {
                        __typename: "ImageEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | {
                        __typename: "UnsupportedEncodingTypes";
                        original: string;
                    } | {
                        __typename: "VideoEncodingTypes";
                        original: string;
                        large?: string | null | undefined;
                        poster?: string | null | undefined;
                        preview?: string | null | undefined;
                        thumbnail?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                attributes?: {
                    __typename?: "TokenAttribute" | undefined;
                    traitType?: string | null | undefined;
                    value?: string | null | undefined;
                    displayType?: string | null | undefined;
                }[] | null | undefined;
            };
            sales: {
                __typename?: "Sale" | undefined;
                saleContractAddress?: string | null | undefined;
                buyerAddress: string;
                collectionAddress: string;
                sellerAddress: string;
                tokenId: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                price?: {
                    __typename?: "PriceAtTime" | undefined;
                    blockNumber: number;
                    chainTokenPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                    nativePrice: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                        currency: {
                            __typename?: "Currency" | undefined;
                            address: string;
                            decimals: number;
                            name: string;
                        };
                    };
                    usdcPrice?: {
                        __typename?: "CurrencyAmount" | undefined;
                        decimal: number;
                        raw: string;
                    } | null | undefined;
                } | null | undefined;
            }[];
            events: {
                __typename?: "Event" | undefined;
                eventType: import("@zoralabs/zdk/dist/queries/queries-sdk").EventType;
                collectionAddress?: string | null | undefined;
                tokenId?: string | null | undefined;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
                properties: {
                    __typename: "ApprovalEvent";
                } | {
                    __typename: "LilNounsAuctionEvent";
                } | {
                    __typename: "MintEvent";
                    tokenId: string;
                    collectionAddress: string;
                    originatorAddress: string;
                    toAddress: string;
                    price?: {
                        __typename?: "PriceAtTime" | undefined;
                        blockNumber: number;
                        chainTokenPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                        nativePrice: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                            currency: {
                                __typename?: "Currency" | undefined;
                                address: string;
                                decimals: number;
                                name: string;
                            };
                        };
                        usdcPrice?: {
                            __typename?: "CurrencyAmount" | undefined;
                            decimal: number;
                            raw: string;
                        } | null | undefined;
                    } | null | undefined;
                } | {
                    __typename: "NounsAuctionEvent";
                } | {
                    __typename: "Sale";
                } | {
                    __typename: "SeaportEvent";
                } | {
                    __typename: "TransferEvent";
                    fromAddress: string;
                    toAddress: string;
                    collectionAddress: string;
                    tokenId: string;
                } | {
                    __typename: "V1MarketEvent";
                    v1MarketEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V1MarketEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V1MarketAskCreatedEventProperties";
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketAskRemovedEventProperties";
                        amount: string;
                        currency: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketBidShareUpdatedEventProperties";
                    } | {
                        __typename: "V1MarketOfferCreatedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketOfferFinalizedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V1MarketOfferRemovedEventProperties";
                        amount: string;
                        currency: string;
                        bidder: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    };
                } | {
                    __typename: "V1MediaEvent";
                } | {
                    __typename: "V2AuctionEvent";
                    v2AuctionEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V2AuctionEventType;
                    address: string;
                    auctionId: number;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V2AuctionApprovalUpdatedEventProperties";
                        approved: boolean;
                    } | {
                        __typename: "V2AuctionBidEventProperties";
                        sender: string;
                        firstBid: boolean;
                        extended: boolean;
                        value: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V2AuctionCanceledEventProperties";
                        tokenOwner: string;
                    } | {
                        __typename: "V2AuctionCreatedEventProperties";
                        auctionCurrency: string;
                        tokenOwner: string;
                        curator: string;
                        curatorFeePercentage: number;
                        duration: string;
                        reservePrice: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V2AuctionDurationExtendedEventProperties";
                        duration: string;
                    } | {
                        __typename: "V2AuctionEndedEventProperties";
                        tokenOwner: string;
                        curator: string;
                        winner: string;
                        auctionCurrency: string;
                        amount: string;
                        curatorFee: string;
                    } | {
                        __typename: "V2AuctionReservePriceUpdatedEventProperties";
                        reservePrice: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    };
                } | {
                    __typename: "V3AskEvent";
                    v3AskEventType: import("@zoralabs/zdk/dist/queries/queries-sdk").V3AskEventType;
                    address: string;
                    collectionAddress: string;
                    tokenId: string;
                    properties: {
                        __typename: "V3AskCanceledEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskCreatedEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskFilledEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        finder: string;
                        buyer: string;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AskPriceUpdatedEventProperties";
                        seller: string;
                        sellerFundsRecipient: string;
                        askCurrency: string;
                        askPrice: string;
                        findersFeeBps: number;
                        price: {
                            __typename?: "PriceAtTime" | undefined;
                            blockNumber: number;
                            chainTokenPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                            nativePrice: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                                currency: {
                                    __typename?: "Currency" | undefined;
                                    address: string;
                                    decimals: number;
                                    name: string;
                                };
                            };
                            usdcPrice?: {
                                __typename?: "CurrencyAmount" | undefined;
                                decimal: number;
                                raw: string;
                            } | null | undefined;
                        };
                    } | {
                        __typename: "V3AsksCoreEthAskEventProperties";
                    } | {
                        __typename: "V3AsksCoreEthAskFilledEventProperties";
                    } | {
                        __typename: "V3AsksCoreEthRoyaltyPayoutEventProperties";
                    } | {
                        __typename: "V3PrivateAskEventProperties";
                    };
                } | {
                    __typename: "V3ModuleManagerEvent";
                } | {
                    __typename: "V3ReserveAuctionEvent";
                };
            }[];
        }[];
        page: {
            __typename?: "PageInfo" | undefined;
            endCursor?: string | null | undefined;
            hasNextPage: boolean;
            limit: number;
        };
    }[]>;
    isValidating: boolean;
};
export default useNFTTokens;
