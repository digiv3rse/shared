export type useNFTMintsProps = {
    minterAddresses?: string[];
    after?: string;
    limit?: number;
    onSuccess?: (data: any[]) => void;
};
declare const useNFTMints: (props: useNFTMintsProps) => {
    loading: boolean;
    more: number | true;
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<{
        mints: {
            __typename: "MintWithTokenAndMarkets";
            mint: {
                __typename?: "Mint" | undefined;
                collectionAddress: string;
                tokenId: string;
                originatorAddress: string;
                toAddress: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
            };
            token?: {
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
            } | null | undefined;
            markets: {
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
        }[];
        page: {
            __typename?: "PageInfo" | undefined;
            endCursor?: string | null | undefined;
            hasNextPage: boolean;
            limit: number;
        };
    }[] | undefined>;
    data?: {
        mints: {
            __typename: "MintWithTokenAndMarkets";
            mint: {
                __typename?: "Mint" | undefined;
                collectionAddress: string;
                tokenId: string;
                originatorAddress: string;
                toAddress: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
            };
            token?: {
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
            } | null | undefined;
            markets: {
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
        mints: {
            __typename: "MintWithTokenAndMarkets";
            mint: {
                __typename?: "Mint" | undefined;
                collectionAddress: string;
                tokenId: string;
                originatorAddress: string;
                toAddress: string;
                transactionInfo: {
                    __typename?: "TransactionInfo" | undefined;
                    blockNumber: number;
                    blockTimestamp: any;
                    transactionHash?: string | null | undefined;
                    logIndex?: number | null | undefined;
                };
            };
            token?: {
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
            } | null | undefined;
            markets: {
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
export default useNFTMints;
