import * as _178 from "./auction/v1beta1/auction";
import * as _179 from "./auction/v1beta1/genesis";
import * as _180 from "./auction/v1beta1/query";
import * as _181 from "./auction/v1beta1/tx";
import * as _182 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _183 from "./exchange/v1beta1/authz";
import * as _184 from "./exchange/v1beta1/events";
import * as _185 from "./exchange/v1beta1/exchange";
import * as _186 from "./exchange/v1beta1/genesis";
import * as _187 from "./exchange/v1beta1/query";
import * as _188 from "./exchange/v1beta1/tx";
import * as _189 from "./insurance/v1beta1/genesis";
import * as _190 from "./insurance/v1beta1/insurance";
import * as _191 from "./insurance/v1beta1/query";
import * as _192 from "./insurance/v1beta1/tx";
import * as _193 from "./ocr/v1beta1/genesis";
import * as _194 from "./ocr/v1beta1/ocr";
import * as _195 from "./ocr/v1beta1/query";
import * as _196 from "./ocr/v1beta1/tx";
import * as _197 from "./oracle/v1beta1/events";
import * as _198 from "./oracle/v1beta1/genesis";
import * as _199 from "./oracle/v1beta1/oracle";
import * as _200 from "./oracle/v1beta1/proposal";
import * as _201 from "./oracle/v1beta1/query";
import * as _202 from "./oracle/v1beta1/tx";
import * as _203 from "./peggy/v1/attestation";
import * as _204 from "./peggy/v1/batch";
import * as _205 from "./peggy/v1/ethereum_signer";
import * as _206 from "./peggy/v1/events";
import * as _207 from "./peggy/v1/genesis";
import * as _208 from "./peggy/v1/msgs";
import * as _209 from "./peggy/v1/pool";
import * as _210 from "./peggy/v1/proposal";
import * as _211 from "./peggy/v1/query";
import * as _212 from "./peggy/v1/types";
import * as _213 from "./types/v1beta1/account";
import * as _214 from "./types/v1beta1/tx_ext";
import * as _215 from "./types/v1beta1/tx_response";
import * as _216 from "./wasmx/v1/genesis";
import * as _217 from "./wasmx/v1/query";
import * as _219 from "./wasmx/v1/wasmx";
import * as _484 from "./auction/v1beta1/query.rpc.Query";
import * as _485 from "./exchange/v1beta1/query.rpc.Query";
import * as _486 from "./insurance/v1beta1/query.rpc.Query";
import * as _487 from "./ocr/v1beta1/query.rpc.Query";
import * as _488 from "./oracle/v1beta1/query.rpc.Query";
import * as _489 from "./peggy/v1/query.rpc.Query";
import * as _490 from "./wasmx/v1/query.rpc.Query";
import * as _491 from "./auction/v1beta1/tx.rpc.msg";
import * as _492 from "./exchange/v1beta1/tx.rpc.msg";
import * as _493 from "./insurance/v1beta1/tx.rpc.msg";
import * as _494 from "./ocr/v1beta1/tx.rpc.msg";
import * as _495 from "./oracle/v1beta1/tx.rpc.msg";
import * as _496 from "./peggy/v1/msgs.rpc.msg";
export declare namespace injective {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _491.MsgClientImpl;
            QueryClientImpl: typeof _484.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                auctionParams(request?: _180.QueryAuctionParamsRequest): Promise<_180.QueryAuctionParamsResponse>;
                currentAuctionBasket(request?: _180.QueryCurrentAuctionBasketRequest): Promise<_180.QueryCurrentAuctionBasketResponse>;
                auctionModuleState(request?: _180.QueryModuleStateRequest): Promise<_180.QueryModuleStateResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    bid(value: _181.MsgBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    bid(value: _181.MsgBid): {
                        typeUrl: string;
                        value: _181.MsgBid;
                    };
                };
                fromPartial: {
                    bid(value: _181.MsgBid): {
                        typeUrl: string;
                        value: _181.MsgBid;
                    };
                };
            };
            AminoConverter: {
                "/injective.auction.v1beta1.MsgBid": {
                    aminoType: string;
                    toAmino: (message: _181.MsgBid) => _181.MsgBidAmino;
                    fromAmino: (object: _181.MsgBidAmino) => _181.MsgBid;
                };
            };
            MsgBid: {
                typeUrl: string;
                encode(message: _181.MsgBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _181.MsgBid;
                fromPartial(object: Partial<_181.MsgBid>): _181.MsgBid;
                fromAmino(object: _181.MsgBidAmino): _181.MsgBid;
                toAmino(message: _181.MsgBid): _181.MsgBidAmino;
                fromAminoMsg(object: _181.MsgBidAminoMsg): _181.MsgBid;
                fromProtoMsg(message: _181.MsgBidProtoMsg): _181.MsgBid;
                toProto(message: _181.MsgBid): Uint8Array;
                toProtoMsg(message: _181.MsgBid): _181.MsgBidProtoMsg;
            };
            MsgBidResponse: {
                typeUrl: string;
                encode(_: _181.MsgBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _181.MsgBidResponse;
                fromPartial(_: Partial<_181.MsgBidResponse>): _181.MsgBidResponse;
                fromAmino(_: _181.MsgBidResponseAmino): _181.MsgBidResponse;
                toAmino(_: _181.MsgBidResponse): _181.MsgBidResponseAmino;
                fromAminoMsg(object: _181.MsgBidResponseAminoMsg): _181.MsgBidResponse;
                fromProtoMsg(message: _181.MsgBidResponseProtoMsg): _181.MsgBidResponse;
                toProto(message: _181.MsgBidResponse): Uint8Array;
                toProtoMsg(message: _181.MsgBidResponse): _181.MsgBidResponseProtoMsg;
            };
            QueryAuctionParamsRequest: {
                typeUrl: string;
                encode(_: _180.QueryAuctionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _180.QueryAuctionParamsRequest;
                fromPartial(_: Partial<_180.QueryAuctionParamsRequest>): _180.QueryAuctionParamsRequest;
                fromAmino(_: _180.QueryAuctionParamsRequestAmino): _180.QueryAuctionParamsRequest;
                toAmino(_: _180.QueryAuctionParamsRequest): _180.QueryAuctionParamsRequestAmino;
                fromAminoMsg(object: _180.QueryAuctionParamsRequestAminoMsg): _180.QueryAuctionParamsRequest;
                fromProtoMsg(message: _180.QueryAuctionParamsRequestProtoMsg): _180.QueryAuctionParamsRequest;
                toProto(message: _180.QueryAuctionParamsRequest): Uint8Array;
                toProtoMsg(message: _180.QueryAuctionParamsRequest): _180.QueryAuctionParamsRequestProtoMsg;
            };
            QueryAuctionParamsResponse: {
                typeUrl: string;
                encode(message: _180.QueryAuctionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _180.QueryAuctionParamsResponse;
                fromPartial(object: Partial<_180.QueryAuctionParamsResponse>): _180.QueryAuctionParamsResponse;
                fromAmino(object: _180.QueryAuctionParamsResponseAmino): _180.QueryAuctionParamsResponse;
                toAmino(message: _180.QueryAuctionParamsResponse): _180.QueryAuctionParamsResponseAmino;
                fromAminoMsg(object: _180.QueryAuctionParamsResponseAminoMsg): _180.QueryAuctionParamsResponse;
                fromProtoMsg(message: _180.QueryAuctionParamsResponseProtoMsg): _180.QueryAuctionParamsResponse;
                toProto(message: _180.QueryAuctionParamsResponse): Uint8Array;
                toProtoMsg(message: _180.QueryAuctionParamsResponse): _180.QueryAuctionParamsResponseProtoMsg;
            };
            QueryCurrentAuctionBasketRequest: {
                typeUrl: string;
                encode(_: _180.QueryCurrentAuctionBasketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _180.QueryCurrentAuctionBasketRequest;
                fromPartial(_: Partial<_180.QueryCurrentAuctionBasketRequest>): _180.QueryCurrentAuctionBasketRequest;
                fromAmino(_: _180.QueryCurrentAuctionBasketRequestAmino): _180.QueryCurrentAuctionBasketRequest;
                toAmino(_: _180.QueryCurrentAuctionBasketRequest): _180.QueryCurrentAuctionBasketRequestAmino;
                fromAminoMsg(object: _180.QueryCurrentAuctionBasketRequestAminoMsg): _180.QueryCurrentAuctionBasketRequest;
                fromProtoMsg(message: _180.QueryCurrentAuctionBasketRequestProtoMsg): _180.QueryCurrentAuctionBasketRequest;
                toProto(message: _180.QueryCurrentAuctionBasketRequest): Uint8Array;
                toProtoMsg(message: _180.QueryCurrentAuctionBasketRequest): _180.QueryCurrentAuctionBasketRequestProtoMsg;
            };
            QueryCurrentAuctionBasketResponse: {
                typeUrl: string;
                encode(message: _180.QueryCurrentAuctionBasketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _180.QueryCurrentAuctionBasketResponse;
                fromPartial(object: Partial<_180.QueryCurrentAuctionBasketResponse>): _180.QueryCurrentAuctionBasketResponse;
                fromAmino(object: _180.QueryCurrentAuctionBasketResponseAmino): _180.QueryCurrentAuctionBasketResponse;
                toAmino(message: _180.QueryCurrentAuctionBasketResponse): _180.QueryCurrentAuctionBasketResponseAmino;
                fromAminoMsg(object: _180.QueryCurrentAuctionBasketResponseAminoMsg): _180.QueryCurrentAuctionBasketResponse;
                fromProtoMsg(message: _180.QueryCurrentAuctionBasketResponseProtoMsg): _180.QueryCurrentAuctionBasketResponse;
                toProto(message: _180.QueryCurrentAuctionBasketResponse): Uint8Array;
                toProtoMsg(message: _180.QueryCurrentAuctionBasketResponse): _180.QueryCurrentAuctionBasketResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _180.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _180.QueryModuleStateRequest;
                fromPartial(_: Partial<_180.QueryModuleStateRequest>): _180.QueryModuleStateRequest;
                fromAmino(_: _180.QueryModuleStateRequestAmino): _180.QueryModuleStateRequest;
                toAmino(_: _180.QueryModuleStateRequest): _180.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _180.QueryModuleStateRequestAminoMsg): _180.QueryModuleStateRequest;
                fromProtoMsg(message: _180.QueryModuleStateRequestProtoMsg): _180.QueryModuleStateRequest;
                toProto(message: _180.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _180.QueryModuleStateRequest): _180.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _180.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _180.QueryModuleStateResponse;
                fromPartial(object: Partial<_180.QueryModuleStateResponse>): _180.QueryModuleStateResponse;
                fromAmino(object: _180.QueryModuleStateResponseAmino): _180.QueryModuleStateResponse;
                toAmino(message: _180.QueryModuleStateResponse): _180.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _180.QueryModuleStateResponseAminoMsg): _180.QueryModuleStateResponse;
                fromProtoMsg(message: _180.QueryModuleStateResponseProtoMsg): _180.QueryModuleStateResponse;
                toProto(message: _180.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _180.QueryModuleStateResponse): _180.QueryModuleStateResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _179.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _179.GenesisState;
                fromPartial(object: Partial<_179.GenesisState>): _179.GenesisState;
                fromAmino(object: _179.GenesisStateAmino): _179.GenesisState;
                toAmino(message: _179.GenesisState): _179.GenesisStateAmino;
                fromAminoMsg(object: _179.GenesisStateAminoMsg): _179.GenesisState;
                fromProtoMsg(message: _179.GenesisStateProtoMsg): _179.GenesisState;
                toProto(message: _179.GenesisState): Uint8Array;
                toProtoMsg(message: _179.GenesisState): _179.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _178.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _178.Params;
                fromPartial(object: Partial<_178.Params>): _178.Params;
                fromAmino(object: _178.ParamsAmino): _178.Params;
                toAmino(message: _178.Params): _178.ParamsAmino;
                fromAminoMsg(object: _178.ParamsAminoMsg): _178.Params;
                fromProtoMsg(message: _178.ParamsProtoMsg): _178.Params;
                toProto(message: _178.Params): Uint8Array;
                toProtoMsg(message: _178.Params): _178.ParamsProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _178.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _178.Bid;
                fromPartial(object: Partial<_178.Bid>): _178.Bid;
                fromAmino(object: _178.BidAmino): _178.Bid;
                toAmino(message: _178.Bid): _178.BidAmino;
                fromAminoMsg(object: _178.BidAminoMsg): _178.Bid;
                fromProtoMsg(message: _178.BidProtoMsg): _178.Bid;
                toProto(message: _178.Bid): Uint8Array;
                toProtoMsg(message: _178.Bid): _178.BidProtoMsg;
            };
            EventBid: {
                typeUrl: string;
                encode(message: _178.EventBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _178.EventBid;
                fromPartial(object: Partial<_178.EventBid>): _178.EventBid;
                fromAmino(object: _178.EventBidAmino): _178.EventBid;
                toAmino(message: _178.EventBid): _178.EventBidAmino;
                fromAminoMsg(object: _178.EventBidAminoMsg): _178.EventBid;
                fromProtoMsg(message: _178.EventBidProtoMsg): _178.EventBid;
                toProto(message: _178.EventBid): Uint8Array;
                toProtoMsg(message: _178.EventBid): _178.EventBidProtoMsg;
            };
            EventAuctionResult: {
                typeUrl: string;
                encode(message: _178.EventAuctionResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _178.EventAuctionResult;
                fromPartial(object: Partial<_178.EventAuctionResult>): _178.EventAuctionResult;
                fromAmino(object: _178.EventAuctionResultAmino): _178.EventAuctionResult;
                toAmino(message: _178.EventAuctionResult): _178.EventAuctionResultAmino;
                fromAminoMsg(object: _178.EventAuctionResultAminoMsg): _178.EventAuctionResult;
                fromProtoMsg(message: _178.EventAuctionResultProtoMsg): _178.EventAuctionResult;
                toProto(message: _178.EventAuctionResult): Uint8Array;
                toProtoMsg(message: _178.EventAuctionResult): _178.EventAuctionResultProtoMsg;
            };
            EventAuctionStart: {
                typeUrl: string;
                encode(message: _178.EventAuctionStart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _178.EventAuctionStart;
                fromPartial(object: Partial<_178.EventAuctionStart>): _178.EventAuctionStart;
                fromAmino(object: _178.EventAuctionStartAmino): _178.EventAuctionStart;
                toAmino(message: _178.EventAuctionStart): _178.EventAuctionStartAmino;
                fromAminoMsg(object: _178.EventAuctionStartAminoMsg): _178.EventAuctionStart;
                fromProtoMsg(message: _178.EventAuctionStartProtoMsg): _178.EventAuctionStart;
                toProto(message: _178.EventAuctionStart): Uint8Array;
                toProtoMsg(message: _178.EventAuctionStart): _178.EventAuctionStartProtoMsg;
            };
        };
    }
    namespace crypto {
        namespace v1beta1 {
            const ethsecp256k1: {
                PubKey: {
                    typeUrl: string;
                    encode(message: _182.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _182.PubKey;
                    fromPartial(object: Partial<_182.PubKey>): _182.PubKey;
                    fromAmino(object: _182.PubKeyAmino): _182.PubKey;
                    toAmino(message: _182.PubKey): _182.PubKeyAmino;
                    fromAminoMsg(object: _182.PubKeyAminoMsg): _182.PubKey;
                    fromProtoMsg(message: _182.PubKeyProtoMsg): _182.PubKey;
                    toProto(message: _182.PubKey): Uint8Array;
                    toProtoMsg(message: _182.PubKey): _182.PubKeyProtoMsg;
                };
                PrivKey: {
                    typeUrl: string;
                    encode(message: _182.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _182.PrivKey;
                    fromPartial(object: Partial<_182.PrivKey>): _182.PrivKey;
                    fromAmino(object: _182.PrivKeyAmino): _182.PrivKey;
                    toAmino(message: _182.PrivKey): _182.PrivKeyAmino;
                    fromAminoMsg(object: _182.PrivKeyAminoMsg): _182.PrivKey;
                    fromProtoMsg(message: _182.PrivKeyProtoMsg): _182.PrivKey;
                    toProto(message: _182.PrivKey): Uint8Array;
                    toProtoMsg(message: _182.PrivKey): _182.PrivKeyProtoMsg;
                };
            };
        }
    }
    namespace exchange {
        const v1beta1: {
            MsgClientImpl: typeof _492.MsgClientImpl;
            QueryClientImpl: typeof _485.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryExchangeParams(request?: _187.QueryExchangeParamsRequest): Promise<_187.QueryExchangeParamsResponse>;
                subaccountDeposits(request: _187.QuerySubaccountDepositsRequest): Promise<_187.QuerySubaccountDepositsResponse>;
                subaccountDeposit(request: _187.QuerySubaccountDepositRequest): Promise<_187.QuerySubaccountDepositResponse>;
                exchangeBalances(request?: _187.QueryExchangeBalancesRequest): Promise<_187.QueryExchangeBalancesResponse>;
                spotMarkets(request: _187.QuerySpotMarketsRequest): Promise<_187.QuerySpotMarketsResponse>;
                spotMarket(request: _187.QuerySpotMarketRequest): Promise<_187.QuerySpotMarketResponse>;
                spotOrderbook(request: _187.QuerySpotOrderbookRequest): Promise<_187.QuerySpotOrderbookResponse>;
                traderSpotOrders(request: _187.QueryTraderSpotOrdersRequest): Promise<_187.QueryTraderSpotOrdersResponse>;
                spotOrdersByHashes(request: _187.QuerySpotOrdersByHashesRequest): Promise<_187.QuerySpotOrdersByHashesResponse>;
                subaccountOrders(request: _187.QuerySubaccountOrdersRequest): Promise<_187.QuerySubaccountOrdersResponse>;
                traderSpotTransientOrders(request: _187.QueryTraderSpotOrdersRequest): Promise<_187.QueryTraderSpotOrdersResponse>;
                spotMidPriceAndTOB(request: _187.QuerySpotMidPriceAndTOBRequest): Promise<_187.QuerySpotMidPriceAndTOBResponse>;
                derivativeMidPriceAndTOB(request: _187.QueryDerivativeMidPriceAndTOBRequest): Promise<_187.QueryDerivativeMidPriceAndTOBResponse>;
                derivativeOrderbook(request: _187.QueryDerivativeOrderbookRequest): Promise<_187.QueryDerivativeOrderbookResponse>;
                traderDerivativeOrders(request: _187.QueryTraderDerivativeOrdersRequest): Promise<_187.QueryTraderDerivativeOrdersResponse>;
                derivativeOrdersByHashes(request: _187.QueryDerivativeOrdersByHashesRequest): Promise<_187.QueryDerivativeOrdersByHashesResponse>;
                traderDerivativeTransientOrders(request: _187.QueryTraderDerivativeOrdersRequest): Promise<_187.QueryTraderDerivativeOrdersResponse>;
                derivativeMarkets(request: _187.QueryDerivativeMarketsRequest): Promise<_187.QueryDerivativeMarketsResponse>;
                derivativeMarket(request: _187.QueryDerivativeMarketRequest): Promise<_187.QueryDerivativeMarketResponse>;
                derivativeMarketAddress(request: _187.QueryDerivativeMarketAddressRequest): Promise<_187.QueryDerivativeMarketAddressResponse>;
                subaccountTradeNonce(request: _187.QuerySubaccountTradeNonceRequest): Promise<_187.QuerySubaccountTradeNonceResponse>;
                exchangeModuleState(request?: _187.QueryModuleStateRequest): Promise<_187.QueryModuleStateResponse>;
                positions(request?: _187.QueryPositionsRequest): Promise<_187.QueryPositionsResponse>;
                subaccountPositions(request: _187.QuerySubaccountPositionsRequest): Promise<_187.QuerySubaccountPositionsResponse>;
                subaccountPositionInMarket(request: _187.QuerySubaccountPositionInMarketRequest): Promise<_187.QuerySubaccountPositionInMarketResponse>;
                subaccountEffectivePositionInMarket(request: _187.QuerySubaccountEffectivePositionInMarketRequest): Promise<_187.QuerySubaccountEffectivePositionInMarketResponse>;
                perpetualMarketInfo(request: _187.QueryPerpetualMarketInfoRequest): Promise<_187.QueryPerpetualMarketInfoResponse>;
                expiryFuturesMarketInfo(request: _187.QueryExpiryFuturesMarketInfoRequest): Promise<_187.QueryExpiryFuturesMarketInfoResponse>;
                perpetualMarketFunding(request: _187.QueryPerpetualMarketFundingRequest): Promise<_187.QueryPerpetualMarketFundingResponse>;
                subaccountOrderMetadata(request: _187.QuerySubaccountOrderMetadataRequest): Promise<_187.QuerySubaccountOrderMetadataResponse>;
                tradeRewardPoints(request: _187.QueryTradeRewardPointsRequest): Promise<_187.QueryTradeRewardPointsResponse>;
                pendingTradeRewardPoints(request: _187.QueryTradeRewardPointsRequest): Promise<_187.QueryTradeRewardPointsResponse>;
                tradeRewardCampaign(request?: _187.QueryTradeRewardCampaignRequest): Promise<_187.QueryTradeRewardCampaignResponse>;
                feeDiscountAccountInfo(request: _187.QueryFeeDiscountAccountInfoRequest): Promise<_187.QueryFeeDiscountAccountInfoResponse>;
                feeDiscountSchedule(request?: _187.QueryFeeDiscountScheduleRequest): Promise<_187.QueryFeeDiscountScheduleResponse>;
                balanceMismatches(request: _187.QueryBalanceMismatchesRequest): Promise<_187.QueryBalanceMismatchesResponse>;
                balanceWithBalanceHolds(request?: _187.QueryBalanceWithBalanceHoldsRequest): Promise<_187.QueryBalanceWithBalanceHoldsResponse>;
                feeDiscountTierStatistics(request?: _187.QueryFeeDiscountTierStatisticsRequest): Promise<_187.QueryFeeDiscountTierStatisticsResponse>;
                ninjaVaultInfos(request?: _187.NinjaVaultInfosRequest): Promise<_187.NinjaVaultInfosResponse>;
                queryMarketIDFromVault(request: _187.QueryMarketIDFromVaultRequest): Promise<_187.QueryMarketIDFromVaultResponse>;
                historicalTradeRecords(request: _187.QueryHistoricalTradeRecordsRequest): Promise<_187.QueryHistoricalTradeRecordsResponse>;
                isOptedOutOfRewards(request: _187.QueryIsOptedOutOfRewardsRequest): Promise<_187.QueryIsOptedOutOfRewardsResponse>;
                optedOutOfRewardsAccounts(request?: _187.QueryOptedOutOfRewardsAccountsRequest): Promise<_187.QueryOptedOutOfRewardsAccountsResponse>;
                marketVolatility(request: _187.QueryMarketVolatilityRequest): Promise<_187.QueryMarketVolatilityResponse>;
                binaryOptionsMarkets(request: _187.QueryBinaryMarketsRequest): Promise<_187.QueryBinaryMarketsResponse>;
                traderDerivativeConditionalOrders(request: _187.QueryTraderDerivativeConditionalOrdersRequest): Promise<_187.QueryTraderDerivativeConditionalOrdersResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _188.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _188.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantSpotMarketLaunch(value: _188.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantPerpetualMarketLaunch(value: _188.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantExpiryFuturesMarketLaunch(value: _188.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotLimitOrder(value: _188.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateSpotLimitOrders(value: _188.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotMarketOrder(value: _188.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSpotOrder(value: _188.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelSpotOrders(value: _188.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchUpdateOrders(value: _188.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _188.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeLimitOrder(value: _188.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateDerivativeLimitOrders(value: _188.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeMarketOrder(value: _188.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelDerivativeOrder(value: _188.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelDerivativeOrders(value: _188.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantBinaryOptionsMarketLaunch(value: _188.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsLimitOrder(value: _188.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsMarketOrder(value: _188.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelBinaryOptionsOrder(value: _188.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelBinaryOptionsOrders(value: _188.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    subaccountTransfer(value: _188.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    externalTransfer(value: _188.MsgExternalTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidatePosition(value: _188.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    increasePositionMargin(value: _188.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rewardsOptOut(value: _188.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    adminUpdateBinaryOptionsMarket(value: _188.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _188.MsgDeposit): {
                        typeUrl: string;
                        value: _188.MsgDeposit;
                    };
                    withdraw(value: _188.MsgWithdraw): {
                        typeUrl: string;
                        value: _188.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _188.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _188.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _188.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _188.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _188.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _188.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _188.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _188.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _188.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _188.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchUpdateOrders;
                    };
                    exec(value: _188.MsgExec): {
                        typeUrl: string;
                        value: _188.MsgExec;
                    };
                    createDerivativeLimitOrder(value: _188.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _188.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _188.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _188.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _188.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _188.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _188.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _188.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _188.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _188.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _188.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _188.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _188.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _188.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _188.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _188.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _188.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _188.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _188.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _188.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _188.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _188.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _188.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _188.MsgAdminUpdateBinaryOptionsMarket;
                    };
                };
                fromPartial: {
                    deposit(value: _188.MsgDeposit): {
                        typeUrl: string;
                        value: _188.MsgDeposit;
                    };
                    withdraw(value: _188.MsgWithdraw): {
                        typeUrl: string;
                        value: _188.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _188.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _188.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _188.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _188.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _188.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _188.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _188.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _188.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _188.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _188.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchUpdateOrders;
                    };
                    exec(value: _188.MsgExec): {
                        typeUrl: string;
                        value: _188.MsgExec;
                    };
                    createDerivativeLimitOrder(value: _188.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _188.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _188.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _188.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _188.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _188.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _188.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _188.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _188.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _188.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _188.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _188.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _188.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _188.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _188.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _188.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _188.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _188.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _188.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _188.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _188.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _188.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _188.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _188.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _188.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _188.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _188.MsgAdminUpdateBinaryOptionsMarket;
                    };
                };
            };
            AminoConverter: {
                "/injective.exchange.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _188.MsgDeposit) => _188.MsgDepositAmino;
                    fromAmino: (object: _188.MsgDepositAmino) => _188.MsgDeposit;
                };
                "/injective.exchange.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _188.MsgWithdraw) => _188.MsgWithdrawAmino;
                    fromAmino: (object: _188.MsgWithdrawAmino) => _188.MsgWithdraw;
                };
                "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _188.MsgInstantSpotMarketLaunch) => _188.MsgInstantSpotMarketLaunchAmino;
                    fromAmino: (object: _188.MsgInstantSpotMarketLaunchAmino) => _188.MsgInstantSpotMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _188.MsgInstantPerpetualMarketLaunch) => _188.MsgInstantPerpetualMarketLaunchAmino;
                    fromAmino: (object: _188.MsgInstantPerpetualMarketLaunchAmino) => _188.MsgInstantPerpetualMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _188.MsgInstantExpiryFuturesMarketLaunch) => _188.MsgInstantExpiryFuturesMarketLaunchAmino;
                    fromAmino: (object: _188.MsgInstantExpiryFuturesMarketLaunchAmino) => _188.MsgInstantExpiryFuturesMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCreateSpotLimitOrder) => _188.MsgCreateSpotLimitOrderAmino;
                    fromAmino: (object: _188.MsgCreateSpotLimitOrderAmino) => _188.MsgCreateSpotLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
                    aminoType: string;
                    toAmino: (message: _188.MsgBatchCreateSpotLimitOrders) => _188.MsgBatchCreateSpotLimitOrdersAmino;
                    fromAmino: (object: _188.MsgBatchCreateSpotLimitOrdersAmino) => _188.MsgBatchCreateSpotLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCreateSpotMarketOrder) => _188.MsgCreateSpotMarketOrderAmino;
                    fromAmino: (object: _188.MsgCreateSpotMarketOrderAmino) => _188.MsgCreateSpotMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCancelSpotOrder) => _188.MsgCancelSpotOrderAmino;
                    fromAmino: (object: _188.MsgCancelSpotOrderAmino) => _188.MsgCancelSpotOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
                    aminoType: string;
                    toAmino: (message: _188.MsgBatchCancelSpotOrders) => _188.MsgBatchCancelSpotOrdersAmino;
                    fromAmino: (object: _188.MsgBatchCancelSpotOrdersAmino) => _188.MsgBatchCancelSpotOrders;
                };
                "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
                    aminoType: string;
                    toAmino: (message: _188.MsgBatchUpdateOrders) => _188.MsgBatchUpdateOrdersAmino;
                    fromAmino: (object: _188.MsgBatchUpdateOrdersAmino) => _188.MsgBatchUpdateOrders;
                };
                "/injective.exchange.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _188.MsgExec) => _188.MsgExecAmino;
                    fromAmino: (object: _188.MsgExecAmino) => _188.MsgExec;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCreateDerivativeLimitOrder) => _188.MsgCreateDerivativeLimitOrderAmino;
                    fromAmino: (object: _188.MsgCreateDerivativeLimitOrderAmino) => _188.MsgCreateDerivativeLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
                    aminoType: string;
                    toAmino: (message: _188.MsgBatchCreateDerivativeLimitOrders) => _188.MsgBatchCreateDerivativeLimitOrdersAmino;
                    fromAmino: (object: _188.MsgBatchCreateDerivativeLimitOrdersAmino) => _188.MsgBatchCreateDerivativeLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCreateDerivativeMarketOrder) => _188.MsgCreateDerivativeMarketOrderAmino;
                    fromAmino: (object: _188.MsgCreateDerivativeMarketOrderAmino) => _188.MsgCreateDerivativeMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCancelDerivativeOrder) => _188.MsgCancelDerivativeOrderAmino;
                    fromAmino: (object: _188.MsgCancelDerivativeOrderAmino) => _188.MsgCancelDerivativeOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
                    aminoType: string;
                    toAmino: (message: _188.MsgBatchCancelDerivativeOrders) => _188.MsgBatchCancelDerivativeOrdersAmino;
                    fromAmino: (object: _188.MsgBatchCancelDerivativeOrdersAmino) => _188.MsgBatchCancelDerivativeOrders;
                };
                "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _188.MsgInstantBinaryOptionsMarketLaunch) => _188.MsgInstantBinaryOptionsMarketLaunchAmino;
                    fromAmino: (object: _188.MsgInstantBinaryOptionsMarketLaunchAmino) => _188.MsgInstantBinaryOptionsMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCreateBinaryOptionsLimitOrder) => _188.MsgCreateBinaryOptionsLimitOrderAmino;
                    fromAmino: (object: _188.MsgCreateBinaryOptionsLimitOrderAmino) => _188.MsgCreateBinaryOptionsLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCreateBinaryOptionsMarketOrder) => _188.MsgCreateBinaryOptionsMarketOrderAmino;
                    fromAmino: (object: _188.MsgCreateBinaryOptionsMarketOrderAmino) => _188.MsgCreateBinaryOptionsMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
                    aminoType: string;
                    toAmino: (message: _188.MsgCancelBinaryOptionsOrder) => _188.MsgCancelBinaryOptionsOrderAmino;
                    fromAmino: (object: _188.MsgCancelBinaryOptionsOrderAmino) => _188.MsgCancelBinaryOptionsOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
                    aminoType: string;
                    toAmino: (message: _188.MsgBatchCancelBinaryOptionsOrders) => _188.MsgBatchCancelBinaryOptionsOrdersAmino;
                    fromAmino: (object: _188.MsgBatchCancelBinaryOptionsOrdersAmino) => _188.MsgBatchCancelBinaryOptionsOrders;
                };
                "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
                    aminoType: string;
                    toAmino: (message: _188.MsgSubaccountTransfer) => _188.MsgSubaccountTransferAmino;
                    fromAmino: (object: _188.MsgSubaccountTransferAmino) => _188.MsgSubaccountTransfer;
                };
                "/injective.exchange.v1beta1.MsgExternalTransfer": {
                    aminoType: string;
                    toAmino: (message: _188.MsgExternalTransfer) => _188.MsgExternalTransferAmino;
                    fromAmino: (object: _188.MsgExternalTransferAmino) => _188.MsgExternalTransfer;
                };
                "/injective.exchange.v1beta1.MsgLiquidatePosition": {
                    aminoType: string;
                    toAmino: (message: _188.MsgLiquidatePosition) => _188.MsgLiquidatePositionAmino;
                    fromAmino: (object: _188.MsgLiquidatePositionAmino) => _188.MsgLiquidatePosition;
                };
                "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
                    aminoType: string;
                    toAmino: (message: _188.MsgIncreasePositionMargin) => _188.MsgIncreasePositionMarginAmino;
                    fromAmino: (object: _188.MsgIncreasePositionMarginAmino) => _188.MsgIncreasePositionMargin;
                };
                "/injective.exchange.v1beta1.MsgRewardsOptOut": {
                    aminoType: string;
                    toAmino: (message: _188.MsgRewardsOptOut) => _188.MsgRewardsOptOutAmino;
                    fromAmino: (object: _188.MsgRewardsOptOutAmino) => _188.MsgRewardsOptOut;
                };
                "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
                    aminoType: string;
                    toAmino: (message: _188.MsgAdminUpdateBinaryOptionsMarket) => _188.MsgAdminUpdateBinaryOptionsMarketAmino;
                    fromAmino: (object: _188.MsgAdminUpdateBinaryOptionsMarketAmino) => _188.MsgAdminUpdateBinaryOptionsMarket;
                };
            };
            exchangeTypeFromJSON(object: any): _188.ExchangeType;
            exchangeTypeToJSON(object: _188.ExchangeType): string;
            ExchangeType: typeof _188.ExchangeType;
            ExchangeTypeSDKType: typeof _188.ExchangeType;
            ExchangeTypeAmino: typeof _188.ExchangeType;
            MsgDeposit: {
                typeUrl: string;
                encode(message: _188.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgDeposit;
                fromPartial(object: Partial<_188.MsgDeposit>): _188.MsgDeposit;
                fromAmino(object: _188.MsgDepositAmino): _188.MsgDeposit;
                toAmino(message: _188.MsgDeposit): _188.MsgDepositAmino;
                fromAminoMsg(object: _188.MsgDepositAminoMsg): _188.MsgDeposit;
                fromProtoMsg(message: _188.MsgDepositProtoMsg): _188.MsgDeposit;
                toProto(message: _188.MsgDeposit): Uint8Array;
                toProtoMsg(message: _188.MsgDeposit): _188.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _188.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgDepositResponse;
                fromPartial(_: Partial<_188.MsgDepositResponse>): _188.MsgDepositResponse;
                fromAmino(_: _188.MsgDepositResponseAmino): _188.MsgDepositResponse;
                toAmino(_: _188.MsgDepositResponse): _188.MsgDepositResponseAmino;
                fromAminoMsg(object: _188.MsgDepositResponseAminoMsg): _188.MsgDepositResponse;
                fromProtoMsg(message: _188.MsgDepositResponseProtoMsg): _188.MsgDepositResponse;
                toProto(message: _188.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _188.MsgDepositResponse): _188.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _188.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgWithdraw;
                fromPartial(object: Partial<_188.MsgWithdraw>): _188.MsgWithdraw;
                fromAmino(object: _188.MsgWithdrawAmino): _188.MsgWithdraw;
                toAmino(message: _188.MsgWithdraw): _188.MsgWithdrawAmino;
                fromAminoMsg(object: _188.MsgWithdrawAminoMsg): _188.MsgWithdraw;
                fromProtoMsg(message: _188.MsgWithdrawProtoMsg): _188.MsgWithdraw;
                toProto(message: _188.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _188.MsgWithdraw): _188.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _188.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgWithdrawResponse;
                fromPartial(_: Partial<_188.MsgWithdrawResponse>): _188.MsgWithdrawResponse;
                fromAmino(_: _188.MsgWithdrawResponseAmino): _188.MsgWithdrawResponse;
                toAmino(_: _188.MsgWithdrawResponse): _188.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _188.MsgWithdrawResponseAminoMsg): _188.MsgWithdrawResponse;
                fromProtoMsg(message: _188.MsgWithdrawResponseProtoMsg): _188.MsgWithdrawResponse;
                toProto(message: _188.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _188.MsgWithdrawResponse): _188.MsgWithdrawResponseProtoMsg;
            };
            MsgCreateSpotLimitOrder: {
                typeUrl: string;
                encode(message: _188.MsgCreateSpotLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateSpotLimitOrder;
                fromPartial(object: Partial<_188.MsgCreateSpotLimitOrder>): _188.MsgCreateSpotLimitOrder;
                fromAmino(object: _188.MsgCreateSpotLimitOrderAmino): _188.MsgCreateSpotLimitOrder;
                toAmino(message: _188.MsgCreateSpotLimitOrder): _188.MsgCreateSpotLimitOrderAmino;
                fromAminoMsg(object: _188.MsgCreateSpotLimitOrderAminoMsg): _188.MsgCreateSpotLimitOrder;
                fromProtoMsg(message: _188.MsgCreateSpotLimitOrderProtoMsg): _188.MsgCreateSpotLimitOrder;
                toProto(message: _188.MsgCreateSpotLimitOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCreateSpotLimitOrder): _188.MsgCreateSpotLimitOrderProtoMsg;
            };
            MsgCreateSpotLimitOrderResponse: {
                typeUrl: string;
                encode(message: _188.MsgCreateSpotLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateSpotLimitOrderResponse;
                fromPartial(object: Partial<_188.MsgCreateSpotLimitOrderResponse>): _188.MsgCreateSpotLimitOrderResponse;
                fromAmino(object: _188.MsgCreateSpotLimitOrderResponseAmino): _188.MsgCreateSpotLimitOrderResponse;
                toAmino(message: _188.MsgCreateSpotLimitOrderResponse): _188.MsgCreateSpotLimitOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCreateSpotLimitOrderResponseAminoMsg): _188.MsgCreateSpotLimitOrderResponse;
                fromProtoMsg(message: _188.MsgCreateSpotLimitOrderResponseProtoMsg): _188.MsgCreateSpotLimitOrderResponse;
                toProto(message: _188.MsgCreateSpotLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCreateSpotLimitOrderResponse): _188.MsgCreateSpotLimitOrderResponseProtoMsg;
            };
            MsgBatchCreateSpotLimitOrders: {
                typeUrl: string;
                encode(message: _188.MsgBatchCreateSpotLimitOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCreateSpotLimitOrders;
                fromPartial(object: Partial<_188.MsgBatchCreateSpotLimitOrders>): _188.MsgBatchCreateSpotLimitOrders;
                fromAmino(object: _188.MsgBatchCreateSpotLimitOrdersAmino): _188.MsgBatchCreateSpotLimitOrders;
                toAmino(message: _188.MsgBatchCreateSpotLimitOrders): _188.MsgBatchCreateSpotLimitOrdersAmino;
                fromAminoMsg(object: _188.MsgBatchCreateSpotLimitOrdersAminoMsg): _188.MsgBatchCreateSpotLimitOrders;
                fromProtoMsg(message: _188.MsgBatchCreateSpotLimitOrdersProtoMsg): _188.MsgBatchCreateSpotLimitOrders;
                toProto(message: _188.MsgBatchCreateSpotLimitOrders): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCreateSpotLimitOrders): _188.MsgBatchCreateSpotLimitOrdersProtoMsg;
            };
            MsgBatchCreateSpotLimitOrdersResponse: {
                typeUrl: string;
                encode(message: _188.MsgBatchCreateSpotLimitOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCreateSpotLimitOrdersResponse;
                fromPartial(object: Partial<_188.MsgBatchCreateSpotLimitOrdersResponse>): _188.MsgBatchCreateSpotLimitOrdersResponse;
                fromAmino(object: _188.MsgBatchCreateSpotLimitOrdersResponseAmino): _188.MsgBatchCreateSpotLimitOrdersResponse;
                toAmino(message: _188.MsgBatchCreateSpotLimitOrdersResponse): _188.MsgBatchCreateSpotLimitOrdersResponseAmino;
                fromAminoMsg(object: _188.MsgBatchCreateSpotLimitOrdersResponseAminoMsg): _188.MsgBatchCreateSpotLimitOrdersResponse;
                fromProtoMsg(message: _188.MsgBatchCreateSpotLimitOrdersResponseProtoMsg): _188.MsgBatchCreateSpotLimitOrdersResponse;
                toProto(message: _188.MsgBatchCreateSpotLimitOrdersResponse): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCreateSpotLimitOrdersResponse): _188.MsgBatchCreateSpotLimitOrdersResponseProtoMsg;
            };
            MsgInstantSpotMarketLaunch: {
                typeUrl: string;
                encode(message: _188.MsgInstantSpotMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantSpotMarketLaunch;
                fromPartial(object: Partial<_188.MsgInstantSpotMarketLaunch>): _188.MsgInstantSpotMarketLaunch;
                fromAmino(object: _188.MsgInstantSpotMarketLaunchAmino): _188.MsgInstantSpotMarketLaunch;
                toAmino(message: _188.MsgInstantSpotMarketLaunch): _188.MsgInstantSpotMarketLaunchAmino;
                fromAminoMsg(object: _188.MsgInstantSpotMarketLaunchAminoMsg): _188.MsgInstantSpotMarketLaunch;
                fromProtoMsg(message: _188.MsgInstantSpotMarketLaunchProtoMsg): _188.MsgInstantSpotMarketLaunch;
                toProto(message: _188.MsgInstantSpotMarketLaunch): Uint8Array;
                toProtoMsg(message: _188.MsgInstantSpotMarketLaunch): _188.MsgInstantSpotMarketLaunchProtoMsg;
            };
            MsgInstantSpotMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _188.MsgInstantSpotMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantSpotMarketLaunchResponse;
                fromPartial(_: Partial<_188.MsgInstantSpotMarketLaunchResponse>): _188.MsgInstantSpotMarketLaunchResponse;
                fromAmino(_: _188.MsgInstantSpotMarketLaunchResponseAmino): _188.MsgInstantSpotMarketLaunchResponse;
                toAmino(_: _188.MsgInstantSpotMarketLaunchResponse): _188.MsgInstantSpotMarketLaunchResponseAmino;
                fromAminoMsg(object: _188.MsgInstantSpotMarketLaunchResponseAminoMsg): _188.MsgInstantSpotMarketLaunchResponse;
                fromProtoMsg(message: _188.MsgInstantSpotMarketLaunchResponseProtoMsg): _188.MsgInstantSpotMarketLaunchResponse;
                toProto(message: _188.MsgInstantSpotMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _188.MsgInstantSpotMarketLaunchResponse): _188.MsgInstantSpotMarketLaunchResponseProtoMsg;
            };
            MsgInstantPerpetualMarketLaunch: {
                typeUrl: string;
                encode(message: _188.MsgInstantPerpetualMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantPerpetualMarketLaunch;
                fromPartial(object: Partial<_188.MsgInstantPerpetualMarketLaunch>): _188.MsgInstantPerpetualMarketLaunch;
                fromAmino(object: _188.MsgInstantPerpetualMarketLaunchAmino): _188.MsgInstantPerpetualMarketLaunch;
                toAmino(message: _188.MsgInstantPerpetualMarketLaunch): _188.MsgInstantPerpetualMarketLaunchAmino;
                fromAminoMsg(object: _188.MsgInstantPerpetualMarketLaunchAminoMsg): _188.MsgInstantPerpetualMarketLaunch;
                fromProtoMsg(message: _188.MsgInstantPerpetualMarketLaunchProtoMsg): _188.MsgInstantPerpetualMarketLaunch;
                toProto(message: _188.MsgInstantPerpetualMarketLaunch): Uint8Array;
                toProtoMsg(message: _188.MsgInstantPerpetualMarketLaunch): _188.MsgInstantPerpetualMarketLaunchProtoMsg;
            };
            MsgInstantPerpetualMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _188.MsgInstantPerpetualMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantPerpetualMarketLaunchResponse;
                fromPartial(_: Partial<_188.MsgInstantPerpetualMarketLaunchResponse>): _188.MsgInstantPerpetualMarketLaunchResponse;
                fromAmino(_: _188.MsgInstantPerpetualMarketLaunchResponseAmino): _188.MsgInstantPerpetualMarketLaunchResponse;
                toAmino(_: _188.MsgInstantPerpetualMarketLaunchResponse): _188.MsgInstantPerpetualMarketLaunchResponseAmino;
                fromAminoMsg(object: _188.MsgInstantPerpetualMarketLaunchResponseAminoMsg): _188.MsgInstantPerpetualMarketLaunchResponse;
                fromProtoMsg(message: _188.MsgInstantPerpetualMarketLaunchResponseProtoMsg): _188.MsgInstantPerpetualMarketLaunchResponse;
                toProto(message: _188.MsgInstantPerpetualMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _188.MsgInstantPerpetualMarketLaunchResponse): _188.MsgInstantPerpetualMarketLaunchResponseProtoMsg;
            };
            MsgInstantBinaryOptionsMarketLaunch: {
                typeUrl: string;
                encode(message: _188.MsgInstantBinaryOptionsMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantBinaryOptionsMarketLaunch;
                fromPartial(object: Partial<_188.MsgInstantBinaryOptionsMarketLaunch>): _188.MsgInstantBinaryOptionsMarketLaunch;
                fromAmino(object: _188.MsgInstantBinaryOptionsMarketLaunchAmino): _188.MsgInstantBinaryOptionsMarketLaunch;
                toAmino(message: _188.MsgInstantBinaryOptionsMarketLaunch): _188.MsgInstantBinaryOptionsMarketLaunchAmino;
                fromAminoMsg(object: _188.MsgInstantBinaryOptionsMarketLaunchAminoMsg): _188.MsgInstantBinaryOptionsMarketLaunch;
                fromProtoMsg(message: _188.MsgInstantBinaryOptionsMarketLaunchProtoMsg): _188.MsgInstantBinaryOptionsMarketLaunch;
                toProto(message: _188.MsgInstantBinaryOptionsMarketLaunch): Uint8Array;
                toProtoMsg(message: _188.MsgInstantBinaryOptionsMarketLaunch): _188.MsgInstantBinaryOptionsMarketLaunchProtoMsg;
            };
            MsgInstantBinaryOptionsMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _188.MsgInstantBinaryOptionsMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromPartial(_: Partial<_188.MsgInstantBinaryOptionsMarketLaunchResponse>): _188.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromAmino(_: _188.MsgInstantBinaryOptionsMarketLaunchResponseAmino): _188.MsgInstantBinaryOptionsMarketLaunchResponse;
                toAmino(_: _188.MsgInstantBinaryOptionsMarketLaunchResponse): _188.MsgInstantBinaryOptionsMarketLaunchResponseAmino;
                fromAminoMsg(object: _188.MsgInstantBinaryOptionsMarketLaunchResponseAminoMsg): _188.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromProtoMsg(message: _188.MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg): _188.MsgInstantBinaryOptionsMarketLaunchResponse;
                toProto(message: _188.MsgInstantBinaryOptionsMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _188.MsgInstantBinaryOptionsMarketLaunchResponse): _188.MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg;
            };
            MsgInstantExpiryFuturesMarketLaunch: {
                typeUrl: string;
                encode(message: _188.MsgInstantExpiryFuturesMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantExpiryFuturesMarketLaunch;
                fromPartial(object: Partial<_188.MsgInstantExpiryFuturesMarketLaunch>): _188.MsgInstantExpiryFuturesMarketLaunch;
                fromAmino(object: _188.MsgInstantExpiryFuturesMarketLaunchAmino): _188.MsgInstantExpiryFuturesMarketLaunch;
                toAmino(message: _188.MsgInstantExpiryFuturesMarketLaunch): _188.MsgInstantExpiryFuturesMarketLaunchAmino;
                fromAminoMsg(object: _188.MsgInstantExpiryFuturesMarketLaunchAminoMsg): _188.MsgInstantExpiryFuturesMarketLaunch;
                fromProtoMsg(message: _188.MsgInstantExpiryFuturesMarketLaunchProtoMsg): _188.MsgInstantExpiryFuturesMarketLaunch;
                toProto(message: _188.MsgInstantExpiryFuturesMarketLaunch): Uint8Array;
                toProtoMsg(message: _188.MsgInstantExpiryFuturesMarketLaunch): _188.MsgInstantExpiryFuturesMarketLaunchProtoMsg;
            };
            MsgInstantExpiryFuturesMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _188.MsgInstantExpiryFuturesMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromPartial(_: Partial<_188.MsgInstantExpiryFuturesMarketLaunchResponse>): _188.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromAmino(_: _188.MsgInstantExpiryFuturesMarketLaunchResponseAmino): _188.MsgInstantExpiryFuturesMarketLaunchResponse;
                toAmino(_: _188.MsgInstantExpiryFuturesMarketLaunchResponse): _188.MsgInstantExpiryFuturesMarketLaunchResponseAmino;
                fromAminoMsg(object: _188.MsgInstantExpiryFuturesMarketLaunchResponseAminoMsg): _188.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromProtoMsg(message: _188.MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg): _188.MsgInstantExpiryFuturesMarketLaunchResponse;
                toProto(message: _188.MsgInstantExpiryFuturesMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _188.MsgInstantExpiryFuturesMarketLaunchResponse): _188.MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg;
            };
            MsgCreateSpotMarketOrder: {
                typeUrl: string;
                encode(message: _188.MsgCreateSpotMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateSpotMarketOrder;
                fromPartial(object: Partial<_188.MsgCreateSpotMarketOrder>): _188.MsgCreateSpotMarketOrder;
                fromAmino(object: _188.MsgCreateSpotMarketOrderAmino): _188.MsgCreateSpotMarketOrder;
                toAmino(message: _188.MsgCreateSpotMarketOrder): _188.MsgCreateSpotMarketOrderAmino;
                fromAminoMsg(object: _188.MsgCreateSpotMarketOrderAminoMsg): _188.MsgCreateSpotMarketOrder;
                fromProtoMsg(message: _188.MsgCreateSpotMarketOrderProtoMsg): _188.MsgCreateSpotMarketOrder;
                toProto(message: _188.MsgCreateSpotMarketOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCreateSpotMarketOrder): _188.MsgCreateSpotMarketOrderProtoMsg;
            };
            MsgCreateSpotMarketOrderResponse: {
                typeUrl: string;
                encode(message: _188.MsgCreateSpotMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateSpotMarketOrderResponse;
                fromPartial(object: Partial<_188.MsgCreateSpotMarketOrderResponse>): _188.MsgCreateSpotMarketOrderResponse;
                fromAmino(object: _188.MsgCreateSpotMarketOrderResponseAmino): _188.MsgCreateSpotMarketOrderResponse;
                toAmino(message: _188.MsgCreateSpotMarketOrderResponse): _188.MsgCreateSpotMarketOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCreateSpotMarketOrderResponseAminoMsg): _188.MsgCreateSpotMarketOrderResponse;
                fromProtoMsg(message: _188.MsgCreateSpotMarketOrderResponseProtoMsg): _188.MsgCreateSpotMarketOrderResponse;
                toProto(message: _188.MsgCreateSpotMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCreateSpotMarketOrderResponse): _188.MsgCreateSpotMarketOrderResponseProtoMsg;
            };
            MsgCreateDerivativeLimitOrder: {
                typeUrl: string;
                encode(message: _188.MsgCreateDerivativeLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateDerivativeLimitOrder;
                fromPartial(object: Partial<_188.MsgCreateDerivativeLimitOrder>): _188.MsgCreateDerivativeLimitOrder;
                fromAmino(object: _188.MsgCreateDerivativeLimitOrderAmino): _188.MsgCreateDerivativeLimitOrder;
                toAmino(message: _188.MsgCreateDerivativeLimitOrder): _188.MsgCreateDerivativeLimitOrderAmino;
                fromAminoMsg(object: _188.MsgCreateDerivativeLimitOrderAminoMsg): _188.MsgCreateDerivativeLimitOrder;
                fromProtoMsg(message: _188.MsgCreateDerivativeLimitOrderProtoMsg): _188.MsgCreateDerivativeLimitOrder;
                toProto(message: _188.MsgCreateDerivativeLimitOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCreateDerivativeLimitOrder): _188.MsgCreateDerivativeLimitOrderProtoMsg;
            };
            MsgCreateDerivativeLimitOrderResponse: {
                typeUrl: string;
                encode(message: _188.MsgCreateDerivativeLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateDerivativeLimitOrderResponse;
                fromPartial(object: Partial<_188.MsgCreateDerivativeLimitOrderResponse>): _188.MsgCreateDerivativeLimitOrderResponse;
                fromAmino(object: _188.MsgCreateDerivativeLimitOrderResponseAmino): _188.MsgCreateDerivativeLimitOrderResponse;
                toAmino(message: _188.MsgCreateDerivativeLimitOrderResponse): _188.MsgCreateDerivativeLimitOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCreateDerivativeLimitOrderResponseAminoMsg): _188.MsgCreateDerivativeLimitOrderResponse;
                fromProtoMsg(message: _188.MsgCreateDerivativeLimitOrderResponseProtoMsg): _188.MsgCreateDerivativeLimitOrderResponse;
                toProto(message: _188.MsgCreateDerivativeLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCreateDerivativeLimitOrderResponse): _188.MsgCreateDerivativeLimitOrderResponseProtoMsg;
            };
            MsgCreateBinaryOptionsLimitOrder: {
                typeUrl: string;
                encode(message: _188.MsgCreateBinaryOptionsLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateBinaryOptionsLimitOrder;
                fromPartial(object: Partial<_188.MsgCreateBinaryOptionsLimitOrder>): _188.MsgCreateBinaryOptionsLimitOrder;
                fromAmino(object: _188.MsgCreateBinaryOptionsLimitOrderAmino): _188.MsgCreateBinaryOptionsLimitOrder;
                toAmino(message: _188.MsgCreateBinaryOptionsLimitOrder): _188.MsgCreateBinaryOptionsLimitOrderAmino;
                fromAminoMsg(object: _188.MsgCreateBinaryOptionsLimitOrderAminoMsg): _188.MsgCreateBinaryOptionsLimitOrder;
                fromProtoMsg(message: _188.MsgCreateBinaryOptionsLimitOrderProtoMsg): _188.MsgCreateBinaryOptionsLimitOrder;
                toProto(message: _188.MsgCreateBinaryOptionsLimitOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCreateBinaryOptionsLimitOrder): _188.MsgCreateBinaryOptionsLimitOrderProtoMsg;
            };
            MsgCreateBinaryOptionsLimitOrderResponse: {
                typeUrl: string;
                encode(message: _188.MsgCreateBinaryOptionsLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateBinaryOptionsLimitOrderResponse;
                fromPartial(object: Partial<_188.MsgCreateBinaryOptionsLimitOrderResponse>): _188.MsgCreateBinaryOptionsLimitOrderResponse;
                fromAmino(object: _188.MsgCreateBinaryOptionsLimitOrderResponseAmino): _188.MsgCreateBinaryOptionsLimitOrderResponse;
                toAmino(message: _188.MsgCreateBinaryOptionsLimitOrderResponse): _188.MsgCreateBinaryOptionsLimitOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCreateBinaryOptionsLimitOrderResponseAminoMsg): _188.MsgCreateBinaryOptionsLimitOrderResponse;
                fromProtoMsg(message: _188.MsgCreateBinaryOptionsLimitOrderResponseProtoMsg): _188.MsgCreateBinaryOptionsLimitOrderResponse;
                toProto(message: _188.MsgCreateBinaryOptionsLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCreateBinaryOptionsLimitOrderResponse): _188.MsgCreateBinaryOptionsLimitOrderResponseProtoMsg;
            };
            MsgBatchCreateDerivativeLimitOrders: {
                typeUrl: string;
                encode(message: _188.MsgBatchCreateDerivativeLimitOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCreateDerivativeLimitOrders;
                fromPartial(object: Partial<_188.MsgBatchCreateDerivativeLimitOrders>): _188.MsgBatchCreateDerivativeLimitOrders;
                fromAmino(object: _188.MsgBatchCreateDerivativeLimitOrdersAmino): _188.MsgBatchCreateDerivativeLimitOrders;
                toAmino(message: _188.MsgBatchCreateDerivativeLimitOrders): _188.MsgBatchCreateDerivativeLimitOrdersAmino;
                fromAminoMsg(object: _188.MsgBatchCreateDerivativeLimitOrdersAminoMsg): _188.MsgBatchCreateDerivativeLimitOrders;
                fromProtoMsg(message: _188.MsgBatchCreateDerivativeLimitOrdersProtoMsg): _188.MsgBatchCreateDerivativeLimitOrders;
                toProto(message: _188.MsgBatchCreateDerivativeLimitOrders): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCreateDerivativeLimitOrders): _188.MsgBatchCreateDerivativeLimitOrdersProtoMsg;
            };
            MsgBatchCreateDerivativeLimitOrdersResponse: {
                typeUrl: string;
                encode(message: _188.MsgBatchCreateDerivativeLimitOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromPartial(object: Partial<_188.MsgBatchCreateDerivativeLimitOrdersResponse>): _188.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromAmino(object: _188.MsgBatchCreateDerivativeLimitOrdersResponseAmino): _188.MsgBatchCreateDerivativeLimitOrdersResponse;
                toAmino(message: _188.MsgBatchCreateDerivativeLimitOrdersResponse): _188.MsgBatchCreateDerivativeLimitOrdersResponseAmino;
                fromAminoMsg(object: _188.MsgBatchCreateDerivativeLimitOrdersResponseAminoMsg): _188.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromProtoMsg(message: _188.MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg): _188.MsgBatchCreateDerivativeLimitOrdersResponse;
                toProto(message: _188.MsgBatchCreateDerivativeLimitOrdersResponse): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCreateDerivativeLimitOrdersResponse): _188.MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg;
            };
            MsgCancelSpotOrder: {
                typeUrl: string;
                encode(message: _188.MsgCancelSpotOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCancelSpotOrder;
                fromPartial(object: Partial<_188.MsgCancelSpotOrder>): _188.MsgCancelSpotOrder;
                fromAmino(object: _188.MsgCancelSpotOrderAmino): _188.MsgCancelSpotOrder;
                toAmino(message: _188.MsgCancelSpotOrder): _188.MsgCancelSpotOrderAmino;
                fromAminoMsg(object: _188.MsgCancelSpotOrderAminoMsg): _188.MsgCancelSpotOrder;
                fromProtoMsg(message: _188.MsgCancelSpotOrderProtoMsg): _188.MsgCancelSpotOrder;
                toProto(message: _188.MsgCancelSpotOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCancelSpotOrder): _188.MsgCancelSpotOrderProtoMsg;
            };
            MsgCancelSpotOrderResponse: {
                typeUrl: string;
                encode(_: _188.MsgCancelSpotOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCancelSpotOrderResponse;
                fromPartial(_: Partial<_188.MsgCancelSpotOrderResponse>): _188.MsgCancelSpotOrderResponse;
                fromAmino(_: _188.MsgCancelSpotOrderResponseAmino): _188.MsgCancelSpotOrderResponse;
                toAmino(_: _188.MsgCancelSpotOrderResponse): _188.MsgCancelSpotOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCancelSpotOrderResponseAminoMsg): _188.MsgCancelSpotOrderResponse;
                fromProtoMsg(message: _188.MsgCancelSpotOrderResponseProtoMsg): _188.MsgCancelSpotOrderResponse;
                toProto(message: _188.MsgCancelSpotOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCancelSpotOrderResponse): _188.MsgCancelSpotOrderResponseProtoMsg;
            };
            MsgBatchCancelSpotOrders: {
                typeUrl: string;
                encode(message: _188.MsgBatchCancelSpotOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCancelSpotOrders;
                fromPartial(object: Partial<_188.MsgBatchCancelSpotOrders>): _188.MsgBatchCancelSpotOrders;
                fromAmino(object: _188.MsgBatchCancelSpotOrdersAmino): _188.MsgBatchCancelSpotOrders;
                toAmino(message: _188.MsgBatchCancelSpotOrders): _188.MsgBatchCancelSpotOrdersAmino;
                fromAminoMsg(object: _188.MsgBatchCancelSpotOrdersAminoMsg): _188.MsgBatchCancelSpotOrders;
                fromProtoMsg(message: _188.MsgBatchCancelSpotOrdersProtoMsg): _188.MsgBatchCancelSpotOrders;
                toProto(message: _188.MsgBatchCancelSpotOrders): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCancelSpotOrders): _188.MsgBatchCancelSpotOrdersProtoMsg;
            };
            MsgBatchCancelSpotOrdersResponse: {
                typeUrl: string;
                encode(message: _188.MsgBatchCancelSpotOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCancelSpotOrdersResponse;
                fromPartial(object: Partial<_188.MsgBatchCancelSpotOrdersResponse>): _188.MsgBatchCancelSpotOrdersResponse;
                fromAmino(object: _188.MsgBatchCancelSpotOrdersResponseAmino): _188.MsgBatchCancelSpotOrdersResponse;
                toAmino(message: _188.MsgBatchCancelSpotOrdersResponse): _188.MsgBatchCancelSpotOrdersResponseAmino;
                fromAminoMsg(object: _188.MsgBatchCancelSpotOrdersResponseAminoMsg): _188.MsgBatchCancelSpotOrdersResponse;
                fromProtoMsg(message: _188.MsgBatchCancelSpotOrdersResponseProtoMsg): _188.MsgBatchCancelSpotOrdersResponse;
                toProto(message: _188.MsgBatchCancelSpotOrdersResponse): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCancelSpotOrdersResponse): _188.MsgBatchCancelSpotOrdersResponseProtoMsg;
            };
            MsgBatchCancelBinaryOptionsOrders: {
                typeUrl: string;
                encode(message: _188.MsgBatchCancelBinaryOptionsOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCancelBinaryOptionsOrders;
                fromPartial(object: Partial<_188.MsgBatchCancelBinaryOptionsOrders>): _188.MsgBatchCancelBinaryOptionsOrders;
                fromAmino(object: _188.MsgBatchCancelBinaryOptionsOrdersAmino): _188.MsgBatchCancelBinaryOptionsOrders;
                toAmino(message: _188.MsgBatchCancelBinaryOptionsOrders): _188.MsgBatchCancelBinaryOptionsOrdersAmino;
                fromAminoMsg(object: _188.MsgBatchCancelBinaryOptionsOrdersAminoMsg): _188.MsgBatchCancelBinaryOptionsOrders;
                fromProtoMsg(message: _188.MsgBatchCancelBinaryOptionsOrdersProtoMsg): _188.MsgBatchCancelBinaryOptionsOrders;
                toProto(message: _188.MsgBatchCancelBinaryOptionsOrders): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCancelBinaryOptionsOrders): _188.MsgBatchCancelBinaryOptionsOrdersProtoMsg;
            };
            MsgBatchCancelBinaryOptionsOrdersResponse: {
                typeUrl: string;
                encode(message: _188.MsgBatchCancelBinaryOptionsOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromPartial(object: Partial<_188.MsgBatchCancelBinaryOptionsOrdersResponse>): _188.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromAmino(object: _188.MsgBatchCancelBinaryOptionsOrdersResponseAmino): _188.MsgBatchCancelBinaryOptionsOrdersResponse;
                toAmino(message: _188.MsgBatchCancelBinaryOptionsOrdersResponse): _188.MsgBatchCancelBinaryOptionsOrdersResponseAmino;
                fromAminoMsg(object: _188.MsgBatchCancelBinaryOptionsOrdersResponseAminoMsg): _188.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromProtoMsg(message: _188.MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg): _188.MsgBatchCancelBinaryOptionsOrdersResponse;
                toProto(message: _188.MsgBatchCancelBinaryOptionsOrdersResponse): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCancelBinaryOptionsOrdersResponse): _188.MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg;
            };
            MsgBatchUpdateOrders: {
                typeUrl: string;
                encode(message: _188.MsgBatchUpdateOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchUpdateOrders;
                fromPartial(object: Partial<_188.MsgBatchUpdateOrders>): _188.MsgBatchUpdateOrders;
                fromAmino(object: _188.MsgBatchUpdateOrdersAmino): _188.MsgBatchUpdateOrders;
                toAmino(message: _188.MsgBatchUpdateOrders): _188.MsgBatchUpdateOrdersAmino;
                fromAminoMsg(object: _188.MsgBatchUpdateOrdersAminoMsg): _188.MsgBatchUpdateOrders;
                fromProtoMsg(message: _188.MsgBatchUpdateOrdersProtoMsg): _188.MsgBatchUpdateOrders;
                toProto(message: _188.MsgBatchUpdateOrders): Uint8Array;
                toProtoMsg(message: _188.MsgBatchUpdateOrders): _188.MsgBatchUpdateOrdersProtoMsg;
            };
            MsgBatchUpdateOrdersResponse: {
                typeUrl: string;
                encode(message: _188.MsgBatchUpdateOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchUpdateOrdersResponse;
                fromPartial(object: Partial<_188.MsgBatchUpdateOrdersResponse>): _188.MsgBatchUpdateOrdersResponse;
                fromAmino(object: _188.MsgBatchUpdateOrdersResponseAmino): _188.MsgBatchUpdateOrdersResponse;
                toAmino(message: _188.MsgBatchUpdateOrdersResponse): _188.MsgBatchUpdateOrdersResponseAmino;
                fromAminoMsg(object: _188.MsgBatchUpdateOrdersResponseAminoMsg): _188.MsgBatchUpdateOrdersResponse;
                fromProtoMsg(message: _188.MsgBatchUpdateOrdersResponseProtoMsg): _188.MsgBatchUpdateOrdersResponse;
                toProto(message: _188.MsgBatchUpdateOrdersResponse): Uint8Array;
                toProtoMsg(message: _188.MsgBatchUpdateOrdersResponse): _188.MsgBatchUpdateOrdersResponseProtoMsg;
            };
            MsgCreateDerivativeMarketOrder: {
                typeUrl: string;
                encode(message: _188.MsgCreateDerivativeMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateDerivativeMarketOrder;
                fromPartial(object: Partial<_188.MsgCreateDerivativeMarketOrder>): _188.MsgCreateDerivativeMarketOrder;
                fromAmino(object: _188.MsgCreateDerivativeMarketOrderAmino): _188.MsgCreateDerivativeMarketOrder;
                toAmino(message: _188.MsgCreateDerivativeMarketOrder): _188.MsgCreateDerivativeMarketOrderAmino;
                fromAminoMsg(object: _188.MsgCreateDerivativeMarketOrderAminoMsg): _188.MsgCreateDerivativeMarketOrder;
                fromProtoMsg(message: _188.MsgCreateDerivativeMarketOrderProtoMsg): _188.MsgCreateDerivativeMarketOrder;
                toProto(message: _188.MsgCreateDerivativeMarketOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCreateDerivativeMarketOrder): _188.MsgCreateDerivativeMarketOrderProtoMsg;
            };
            MsgCreateDerivativeMarketOrderResponse: {
                typeUrl: string;
                encode(message: _188.MsgCreateDerivativeMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateDerivativeMarketOrderResponse;
                fromPartial(object: Partial<_188.MsgCreateDerivativeMarketOrderResponse>): _188.MsgCreateDerivativeMarketOrderResponse;
                fromAmino(object: _188.MsgCreateDerivativeMarketOrderResponseAmino): _188.MsgCreateDerivativeMarketOrderResponse;
                toAmino(message: _188.MsgCreateDerivativeMarketOrderResponse): _188.MsgCreateDerivativeMarketOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCreateDerivativeMarketOrderResponseAminoMsg): _188.MsgCreateDerivativeMarketOrderResponse;
                fromProtoMsg(message: _188.MsgCreateDerivativeMarketOrderResponseProtoMsg): _188.MsgCreateDerivativeMarketOrderResponse;
                toProto(message: _188.MsgCreateDerivativeMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCreateDerivativeMarketOrderResponse): _188.MsgCreateDerivativeMarketOrderResponseProtoMsg;
            };
            MsgCreateBinaryOptionsMarketOrder: {
                typeUrl: string;
                encode(message: _188.MsgCreateBinaryOptionsMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateBinaryOptionsMarketOrder;
                fromPartial(object: Partial<_188.MsgCreateBinaryOptionsMarketOrder>): _188.MsgCreateBinaryOptionsMarketOrder;
                fromAmino(object: _188.MsgCreateBinaryOptionsMarketOrderAmino): _188.MsgCreateBinaryOptionsMarketOrder;
                toAmino(message: _188.MsgCreateBinaryOptionsMarketOrder): _188.MsgCreateBinaryOptionsMarketOrderAmino;
                fromAminoMsg(object: _188.MsgCreateBinaryOptionsMarketOrderAminoMsg): _188.MsgCreateBinaryOptionsMarketOrder;
                fromProtoMsg(message: _188.MsgCreateBinaryOptionsMarketOrderProtoMsg): _188.MsgCreateBinaryOptionsMarketOrder;
                toProto(message: _188.MsgCreateBinaryOptionsMarketOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCreateBinaryOptionsMarketOrder): _188.MsgCreateBinaryOptionsMarketOrderProtoMsg;
            };
            MsgCreateBinaryOptionsMarketOrderResponse: {
                typeUrl: string;
                encode(message: _188.MsgCreateBinaryOptionsMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCreateBinaryOptionsMarketOrderResponse;
                fromPartial(object: Partial<_188.MsgCreateBinaryOptionsMarketOrderResponse>): _188.MsgCreateBinaryOptionsMarketOrderResponse;
                fromAmino(object: _188.MsgCreateBinaryOptionsMarketOrderResponseAmino): _188.MsgCreateBinaryOptionsMarketOrderResponse;
                toAmino(message: _188.MsgCreateBinaryOptionsMarketOrderResponse): _188.MsgCreateBinaryOptionsMarketOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCreateBinaryOptionsMarketOrderResponseAminoMsg): _188.MsgCreateBinaryOptionsMarketOrderResponse;
                fromProtoMsg(message: _188.MsgCreateBinaryOptionsMarketOrderResponseProtoMsg): _188.MsgCreateBinaryOptionsMarketOrderResponse;
                toProto(message: _188.MsgCreateBinaryOptionsMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCreateBinaryOptionsMarketOrderResponse): _188.MsgCreateBinaryOptionsMarketOrderResponseProtoMsg;
            };
            MsgCancelDerivativeOrder: {
                typeUrl: string;
                encode(message: _188.MsgCancelDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCancelDerivativeOrder;
                fromPartial(object: Partial<_188.MsgCancelDerivativeOrder>): _188.MsgCancelDerivativeOrder;
                fromAmino(object: _188.MsgCancelDerivativeOrderAmino): _188.MsgCancelDerivativeOrder;
                toAmino(message: _188.MsgCancelDerivativeOrder): _188.MsgCancelDerivativeOrderAmino;
                fromAminoMsg(object: _188.MsgCancelDerivativeOrderAminoMsg): _188.MsgCancelDerivativeOrder;
                fromProtoMsg(message: _188.MsgCancelDerivativeOrderProtoMsg): _188.MsgCancelDerivativeOrder;
                toProto(message: _188.MsgCancelDerivativeOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCancelDerivativeOrder): _188.MsgCancelDerivativeOrderProtoMsg;
            };
            MsgCancelDerivativeOrderResponse: {
                typeUrl: string;
                encode(_: _188.MsgCancelDerivativeOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCancelDerivativeOrderResponse;
                fromPartial(_: Partial<_188.MsgCancelDerivativeOrderResponse>): _188.MsgCancelDerivativeOrderResponse;
                fromAmino(_: _188.MsgCancelDerivativeOrderResponseAmino): _188.MsgCancelDerivativeOrderResponse;
                toAmino(_: _188.MsgCancelDerivativeOrderResponse): _188.MsgCancelDerivativeOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCancelDerivativeOrderResponseAminoMsg): _188.MsgCancelDerivativeOrderResponse;
                fromProtoMsg(message: _188.MsgCancelDerivativeOrderResponseProtoMsg): _188.MsgCancelDerivativeOrderResponse;
                toProto(message: _188.MsgCancelDerivativeOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCancelDerivativeOrderResponse): _188.MsgCancelDerivativeOrderResponseProtoMsg;
            };
            MsgCancelBinaryOptionsOrder: {
                typeUrl: string;
                encode(message: _188.MsgCancelBinaryOptionsOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCancelBinaryOptionsOrder;
                fromPartial(object: Partial<_188.MsgCancelBinaryOptionsOrder>): _188.MsgCancelBinaryOptionsOrder;
                fromAmino(object: _188.MsgCancelBinaryOptionsOrderAmino): _188.MsgCancelBinaryOptionsOrder;
                toAmino(message: _188.MsgCancelBinaryOptionsOrder): _188.MsgCancelBinaryOptionsOrderAmino;
                fromAminoMsg(object: _188.MsgCancelBinaryOptionsOrderAminoMsg): _188.MsgCancelBinaryOptionsOrder;
                fromProtoMsg(message: _188.MsgCancelBinaryOptionsOrderProtoMsg): _188.MsgCancelBinaryOptionsOrder;
                toProto(message: _188.MsgCancelBinaryOptionsOrder): Uint8Array;
                toProtoMsg(message: _188.MsgCancelBinaryOptionsOrder): _188.MsgCancelBinaryOptionsOrderProtoMsg;
            };
            MsgCancelBinaryOptionsOrderResponse: {
                typeUrl: string;
                encode(_: _188.MsgCancelBinaryOptionsOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgCancelBinaryOptionsOrderResponse;
                fromPartial(_: Partial<_188.MsgCancelBinaryOptionsOrderResponse>): _188.MsgCancelBinaryOptionsOrderResponse;
                fromAmino(_: _188.MsgCancelBinaryOptionsOrderResponseAmino): _188.MsgCancelBinaryOptionsOrderResponse;
                toAmino(_: _188.MsgCancelBinaryOptionsOrderResponse): _188.MsgCancelBinaryOptionsOrderResponseAmino;
                fromAminoMsg(object: _188.MsgCancelBinaryOptionsOrderResponseAminoMsg): _188.MsgCancelBinaryOptionsOrderResponse;
                fromProtoMsg(message: _188.MsgCancelBinaryOptionsOrderResponseProtoMsg): _188.MsgCancelBinaryOptionsOrderResponse;
                toProto(message: _188.MsgCancelBinaryOptionsOrderResponse): Uint8Array;
                toProtoMsg(message: _188.MsgCancelBinaryOptionsOrderResponse): _188.MsgCancelBinaryOptionsOrderResponseProtoMsg;
            };
            OrderData: {
                typeUrl: string;
                encode(message: _188.OrderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.OrderData;
                fromPartial(object: Partial<_188.OrderData>): _188.OrderData;
                fromAmino(object: _188.OrderDataAmino): _188.OrderData;
                toAmino(message: _188.OrderData): _188.OrderDataAmino;
                fromAminoMsg(object: _188.OrderDataAminoMsg): _188.OrderData;
                fromProtoMsg(message: _188.OrderDataProtoMsg): _188.OrderData;
                toProto(message: _188.OrderData): Uint8Array;
                toProtoMsg(message: _188.OrderData): _188.OrderDataProtoMsg;
            };
            MsgBatchCancelDerivativeOrders: {
                typeUrl: string;
                encode(message: _188.MsgBatchCancelDerivativeOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCancelDerivativeOrders;
                fromPartial(object: Partial<_188.MsgBatchCancelDerivativeOrders>): _188.MsgBatchCancelDerivativeOrders;
                fromAmino(object: _188.MsgBatchCancelDerivativeOrdersAmino): _188.MsgBatchCancelDerivativeOrders;
                toAmino(message: _188.MsgBatchCancelDerivativeOrders): _188.MsgBatchCancelDerivativeOrdersAmino;
                fromAminoMsg(object: _188.MsgBatchCancelDerivativeOrdersAminoMsg): _188.MsgBatchCancelDerivativeOrders;
                fromProtoMsg(message: _188.MsgBatchCancelDerivativeOrdersProtoMsg): _188.MsgBatchCancelDerivativeOrders;
                toProto(message: _188.MsgBatchCancelDerivativeOrders): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCancelDerivativeOrders): _188.MsgBatchCancelDerivativeOrdersProtoMsg;
            };
            MsgBatchCancelDerivativeOrdersResponse: {
                typeUrl: string;
                encode(message: _188.MsgBatchCancelDerivativeOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgBatchCancelDerivativeOrdersResponse;
                fromPartial(object: Partial<_188.MsgBatchCancelDerivativeOrdersResponse>): _188.MsgBatchCancelDerivativeOrdersResponse;
                fromAmino(object: _188.MsgBatchCancelDerivativeOrdersResponseAmino): _188.MsgBatchCancelDerivativeOrdersResponse;
                toAmino(message: _188.MsgBatchCancelDerivativeOrdersResponse): _188.MsgBatchCancelDerivativeOrdersResponseAmino;
                fromAminoMsg(object: _188.MsgBatchCancelDerivativeOrdersResponseAminoMsg): _188.MsgBatchCancelDerivativeOrdersResponse;
                fromProtoMsg(message: _188.MsgBatchCancelDerivativeOrdersResponseProtoMsg): _188.MsgBatchCancelDerivativeOrdersResponse;
                toProto(message: _188.MsgBatchCancelDerivativeOrdersResponse): Uint8Array;
                toProtoMsg(message: _188.MsgBatchCancelDerivativeOrdersResponse): _188.MsgBatchCancelDerivativeOrdersResponseProtoMsg;
            };
            MsgSubaccountTransfer: {
                typeUrl: string;
                encode(message: _188.MsgSubaccountTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgSubaccountTransfer;
                fromPartial(object: Partial<_188.MsgSubaccountTransfer>): _188.MsgSubaccountTransfer;
                fromAmino(object: _188.MsgSubaccountTransferAmino): _188.MsgSubaccountTransfer;
                toAmino(message: _188.MsgSubaccountTransfer): _188.MsgSubaccountTransferAmino;
                fromAminoMsg(object: _188.MsgSubaccountTransferAminoMsg): _188.MsgSubaccountTransfer;
                fromProtoMsg(message: _188.MsgSubaccountTransferProtoMsg): _188.MsgSubaccountTransfer;
                toProto(message: _188.MsgSubaccountTransfer): Uint8Array;
                toProtoMsg(message: _188.MsgSubaccountTransfer): _188.MsgSubaccountTransferProtoMsg;
            };
            MsgSubaccountTransferResponse: {
                typeUrl: string;
                encode(_: _188.MsgSubaccountTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgSubaccountTransferResponse;
                fromPartial(_: Partial<_188.MsgSubaccountTransferResponse>): _188.MsgSubaccountTransferResponse;
                fromAmino(_: _188.MsgSubaccountTransferResponseAmino): _188.MsgSubaccountTransferResponse;
                toAmino(_: _188.MsgSubaccountTransferResponse): _188.MsgSubaccountTransferResponseAmino;
                fromAminoMsg(object: _188.MsgSubaccountTransferResponseAminoMsg): _188.MsgSubaccountTransferResponse;
                fromProtoMsg(message: _188.MsgSubaccountTransferResponseProtoMsg): _188.MsgSubaccountTransferResponse;
                toProto(message: _188.MsgSubaccountTransferResponse): Uint8Array;
                toProtoMsg(message: _188.MsgSubaccountTransferResponse): _188.MsgSubaccountTransferResponseProtoMsg;
            };
            MsgExternalTransfer: {
                typeUrl: string;
                encode(message: _188.MsgExternalTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgExternalTransfer;
                fromPartial(object: Partial<_188.MsgExternalTransfer>): _188.MsgExternalTransfer;
                fromAmino(object: _188.MsgExternalTransferAmino): _188.MsgExternalTransfer;
                toAmino(message: _188.MsgExternalTransfer): _188.MsgExternalTransferAmino;
                fromAminoMsg(object: _188.MsgExternalTransferAminoMsg): _188.MsgExternalTransfer;
                fromProtoMsg(message: _188.MsgExternalTransferProtoMsg): _188.MsgExternalTransfer;
                toProto(message: _188.MsgExternalTransfer): Uint8Array;
                toProtoMsg(message: _188.MsgExternalTransfer): _188.MsgExternalTransferProtoMsg;
            };
            MsgExternalTransferResponse: {
                typeUrl: string;
                encode(_: _188.MsgExternalTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgExternalTransferResponse;
                fromPartial(_: Partial<_188.MsgExternalTransferResponse>): _188.MsgExternalTransferResponse;
                fromAmino(_: _188.MsgExternalTransferResponseAmino): _188.MsgExternalTransferResponse;
                toAmino(_: _188.MsgExternalTransferResponse): _188.MsgExternalTransferResponseAmino;
                fromAminoMsg(object: _188.MsgExternalTransferResponseAminoMsg): _188.MsgExternalTransferResponse;
                fromProtoMsg(message: _188.MsgExternalTransferResponseProtoMsg): _188.MsgExternalTransferResponse;
                toProto(message: _188.MsgExternalTransferResponse): Uint8Array;
                toProtoMsg(message: _188.MsgExternalTransferResponse): _188.MsgExternalTransferResponseProtoMsg;
            };
            MsgLiquidatePosition: {
                typeUrl: string;
                encode(message: _188.MsgLiquidatePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgLiquidatePosition;
                fromPartial(object: Partial<_188.MsgLiquidatePosition>): _188.MsgLiquidatePosition;
                fromAmino(object: _188.MsgLiquidatePositionAmino): _188.MsgLiquidatePosition;
                toAmino(message: _188.MsgLiquidatePosition): _188.MsgLiquidatePositionAmino;
                fromAminoMsg(object: _188.MsgLiquidatePositionAminoMsg): _188.MsgLiquidatePosition;
                fromProtoMsg(message: _188.MsgLiquidatePositionProtoMsg): _188.MsgLiquidatePosition;
                toProto(message: _188.MsgLiquidatePosition): Uint8Array;
                toProtoMsg(message: _188.MsgLiquidatePosition): _188.MsgLiquidatePositionProtoMsg;
            };
            MsgLiquidatePositionResponse: {
                typeUrl: string;
                encode(_: _188.MsgLiquidatePositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgLiquidatePositionResponse;
                fromPartial(_: Partial<_188.MsgLiquidatePositionResponse>): _188.MsgLiquidatePositionResponse;
                fromAmino(_: _188.MsgLiquidatePositionResponseAmino): _188.MsgLiquidatePositionResponse;
                toAmino(_: _188.MsgLiquidatePositionResponse): _188.MsgLiquidatePositionResponseAmino;
                fromAminoMsg(object: _188.MsgLiquidatePositionResponseAminoMsg): _188.MsgLiquidatePositionResponse;
                fromProtoMsg(message: _188.MsgLiquidatePositionResponseProtoMsg): _188.MsgLiquidatePositionResponse;
                toProto(message: _188.MsgLiquidatePositionResponse): Uint8Array;
                toProtoMsg(message: _188.MsgLiquidatePositionResponse): _188.MsgLiquidatePositionResponseProtoMsg;
            };
            MsgIncreasePositionMargin: {
                typeUrl: string;
                encode(message: _188.MsgIncreasePositionMargin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgIncreasePositionMargin;
                fromPartial(object: Partial<_188.MsgIncreasePositionMargin>): _188.MsgIncreasePositionMargin;
                fromAmino(object: _188.MsgIncreasePositionMarginAmino): _188.MsgIncreasePositionMargin;
                toAmino(message: _188.MsgIncreasePositionMargin): _188.MsgIncreasePositionMarginAmino;
                fromAminoMsg(object: _188.MsgIncreasePositionMarginAminoMsg): _188.MsgIncreasePositionMargin;
                fromProtoMsg(message: _188.MsgIncreasePositionMarginProtoMsg): _188.MsgIncreasePositionMargin;
                toProto(message: _188.MsgIncreasePositionMargin): Uint8Array;
                toProtoMsg(message: _188.MsgIncreasePositionMargin): _188.MsgIncreasePositionMarginProtoMsg;
            };
            MsgIncreasePositionMarginResponse: {
                typeUrl: string;
                encode(_: _188.MsgIncreasePositionMarginResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgIncreasePositionMarginResponse;
                fromPartial(_: Partial<_188.MsgIncreasePositionMarginResponse>): _188.MsgIncreasePositionMarginResponse;
                fromAmino(_: _188.MsgIncreasePositionMarginResponseAmino): _188.MsgIncreasePositionMarginResponse;
                toAmino(_: _188.MsgIncreasePositionMarginResponse): _188.MsgIncreasePositionMarginResponseAmino;
                fromAminoMsg(object: _188.MsgIncreasePositionMarginResponseAminoMsg): _188.MsgIncreasePositionMarginResponse;
                fromProtoMsg(message: _188.MsgIncreasePositionMarginResponseProtoMsg): _188.MsgIncreasePositionMarginResponse;
                toProto(message: _188.MsgIncreasePositionMarginResponse): Uint8Array;
                toProtoMsg(message: _188.MsgIncreasePositionMarginResponse): _188.MsgIncreasePositionMarginResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _188.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgExec;
                fromPartial(object: Partial<_188.MsgExec>): _188.MsgExec;
                fromAmino(object: _188.MsgExecAmino): _188.MsgExec;
                toAmino(message: _188.MsgExec): _188.MsgExecAmino;
                fromAminoMsg(object: _188.MsgExecAminoMsg): _188.MsgExec;
                fromProtoMsg(message: _188.MsgExecProtoMsg): _188.MsgExec;
                toProto(message: _188.MsgExec): Uint8Array;
                toProtoMsg(message: _188.MsgExec): _188.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(_: _188.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgExecResponse;
                fromPartial(_: Partial<_188.MsgExecResponse>): _188.MsgExecResponse;
                fromAmino(_: _188.MsgExecResponseAmino): _188.MsgExecResponse;
                toAmino(_: _188.MsgExecResponse): _188.MsgExecResponseAmino;
                fromAminoMsg(object: _188.MsgExecResponseAminoMsg): _188.MsgExecResponse;
                fromProtoMsg(message: _188.MsgExecResponseProtoMsg): _188.MsgExecResponse;
                toProto(message: _188.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _188.MsgExecResponse): _188.MsgExecResponseProtoMsg;
            };
            SpotMarketParamUpdateProposal: {
                typeUrl: string;
                encode(message: _188.SpotMarketParamUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.SpotMarketParamUpdateProposal;
                fromPartial(object: Partial<_188.SpotMarketParamUpdateProposal>): _188.SpotMarketParamUpdateProposal;
                fromAmino(object: _188.SpotMarketParamUpdateProposalAmino): _188.SpotMarketParamUpdateProposal;
                toAmino(message: _188.SpotMarketParamUpdateProposal): _188.SpotMarketParamUpdateProposalAmino;
                fromAminoMsg(object: _188.SpotMarketParamUpdateProposalAminoMsg): _188.SpotMarketParamUpdateProposal;
                fromProtoMsg(message: _188.SpotMarketParamUpdateProposalProtoMsg): _188.SpotMarketParamUpdateProposal;
                toProto(message: _188.SpotMarketParamUpdateProposal): Uint8Array;
                toProtoMsg(message: _188.SpotMarketParamUpdateProposal): _188.SpotMarketParamUpdateProposalProtoMsg;
            };
            ExchangeEnableProposal: {
                typeUrl: string;
                encode(message: _188.ExchangeEnableProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.ExchangeEnableProposal;
                fromPartial(object: Partial<_188.ExchangeEnableProposal>): _188.ExchangeEnableProposal;
                fromAmino(object: _188.ExchangeEnableProposalAmino): _188.ExchangeEnableProposal;
                toAmino(message: _188.ExchangeEnableProposal): _188.ExchangeEnableProposalAmino;
                fromAminoMsg(object: _188.ExchangeEnableProposalAminoMsg): _188.ExchangeEnableProposal;
                fromProtoMsg(message: _188.ExchangeEnableProposalProtoMsg): _188.ExchangeEnableProposal;
                toProto(message: _188.ExchangeEnableProposal): Uint8Array;
                toProtoMsg(message: _188.ExchangeEnableProposal): _188.ExchangeEnableProposalProtoMsg;
            };
            BatchExchangeModificationProposal: {
                typeUrl: string;
                encode(message: _188.BatchExchangeModificationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.BatchExchangeModificationProposal;
                fromPartial(object: Partial<_188.BatchExchangeModificationProposal>): _188.BatchExchangeModificationProposal;
                fromAmino(object: _188.BatchExchangeModificationProposalAmino): _188.BatchExchangeModificationProposal;
                toAmino(message: _188.BatchExchangeModificationProposal): _188.BatchExchangeModificationProposalAmino;
                fromAminoMsg(object: _188.BatchExchangeModificationProposalAminoMsg): _188.BatchExchangeModificationProposal;
                fromProtoMsg(message: _188.BatchExchangeModificationProposalProtoMsg): _188.BatchExchangeModificationProposal;
                toProto(message: _188.BatchExchangeModificationProposal): Uint8Array;
                toProtoMsg(message: _188.BatchExchangeModificationProposal): _188.BatchExchangeModificationProposalProtoMsg;
            };
            SpotMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _188.SpotMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.SpotMarketLaunchProposal;
                fromPartial(object: Partial<_188.SpotMarketLaunchProposal>): _188.SpotMarketLaunchProposal;
                fromAmino(object: _188.SpotMarketLaunchProposalAmino): _188.SpotMarketLaunchProposal;
                toAmino(message: _188.SpotMarketLaunchProposal): _188.SpotMarketLaunchProposalAmino;
                fromAminoMsg(object: _188.SpotMarketLaunchProposalAminoMsg): _188.SpotMarketLaunchProposal;
                fromProtoMsg(message: _188.SpotMarketLaunchProposalProtoMsg): _188.SpotMarketLaunchProposal;
                toProto(message: _188.SpotMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _188.SpotMarketLaunchProposal): _188.SpotMarketLaunchProposalProtoMsg;
            };
            PerpetualMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _188.PerpetualMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.PerpetualMarketLaunchProposal;
                fromPartial(object: Partial<_188.PerpetualMarketLaunchProposal>): _188.PerpetualMarketLaunchProposal;
                fromAmino(object: _188.PerpetualMarketLaunchProposalAmino): _188.PerpetualMarketLaunchProposal;
                toAmino(message: _188.PerpetualMarketLaunchProposal): _188.PerpetualMarketLaunchProposalAmino;
                fromAminoMsg(object: _188.PerpetualMarketLaunchProposalAminoMsg): _188.PerpetualMarketLaunchProposal;
                fromProtoMsg(message: _188.PerpetualMarketLaunchProposalProtoMsg): _188.PerpetualMarketLaunchProposal;
                toProto(message: _188.PerpetualMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _188.PerpetualMarketLaunchProposal): _188.PerpetualMarketLaunchProposalProtoMsg;
            };
            BinaryOptionsMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _188.BinaryOptionsMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.BinaryOptionsMarketLaunchProposal;
                fromPartial(object: Partial<_188.BinaryOptionsMarketLaunchProposal>): _188.BinaryOptionsMarketLaunchProposal;
                fromAmino(object: _188.BinaryOptionsMarketLaunchProposalAmino): _188.BinaryOptionsMarketLaunchProposal;
                toAmino(message: _188.BinaryOptionsMarketLaunchProposal): _188.BinaryOptionsMarketLaunchProposalAmino;
                fromAminoMsg(object: _188.BinaryOptionsMarketLaunchProposalAminoMsg): _188.BinaryOptionsMarketLaunchProposal;
                fromProtoMsg(message: _188.BinaryOptionsMarketLaunchProposalProtoMsg): _188.BinaryOptionsMarketLaunchProposal;
                toProto(message: _188.BinaryOptionsMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _188.BinaryOptionsMarketLaunchProposal): _188.BinaryOptionsMarketLaunchProposalProtoMsg;
            };
            ExpiryFuturesMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _188.ExpiryFuturesMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.ExpiryFuturesMarketLaunchProposal;
                fromPartial(object: Partial<_188.ExpiryFuturesMarketLaunchProposal>): _188.ExpiryFuturesMarketLaunchProposal;
                fromAmino(object: _188.ExpiryFuturesMarketLaunchProposalAmino): _188.ExpiryFuturesMarketLaunchProposal;
                toAmino(message: _188.ExpiryFuturesMarketLaunchProposal): _188.ExpiryFuturesMarketLaunchProposalAmino;
                fromAminoMsg(object: _188.ExpiryFuturesMarketLaunchProposalAminoMsg): _188.ExpiryFuturesMarketLaunchProposal;
                fromProtoMsg(message: _188.ExpiryFuturesMarketLaunchProposalProtoMsg): _188.ExpiryFuturesMarketLaunchProposal;
                toProto(message: _188.ExpiryFuturesMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _188.ExpiryFuturesMarketLaunchProposal): _188.ExpiryFuturesMarketLaunchProposalProtoMsg;
            };
            DerivativeMarketParamUpdateProposal: {
                typeUrl: string;
                encode(message: _188.DerivativeMarketParamUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.DerivativeMarketParamUpdateProposal;
                fromPartial(object: Partial<_188.DerivativeMarketParamUpdateProposal>): _188.DerivativeMarketParamUpdateProposal;
                fromAmino(object: _188.DerivativeMarketParamUpdateProposalAmino): _188.DerivativeMarketParamUpdateProposal;
                toAmino(message: _188.DerivativeMarketParamUpdateProposal): _188.DerivativeMarketParamUpdateProposalAmino;
                fromAminoMsg(object: _188.DerivativeMarketParamUpdateProposalAminoMsg): _188.DerivativeMarketParamUpdateProposal;
                fromProtoMsg(message: _188.DerivativeMarketParamUpdateProposalProtoMsg): _188.DerivativeMarketParamUpdateProposal;
                toProto(message: _188.DerivativeMarketParamUpdateProposal): Uint8Array;
                toProtoMsg(message: _188.DerivativeMarketParamUpdateProposal): _188.DerivativeMarketParamUpdateProposalProtoMsg;
            };
            MarketForcedSettlementProposal: {
                typeUrl: string;
                encode(message: _188.MarketForcedSettlementProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MarketForcedSettlementProposal;
                fromPartial(object: Partial<_188.MarketForcedSettlementProposal>): _188.MarketForcedSettlementProposal;
                fromAmino(object: _188.MarketForcedSettlementProposalAmino): _188.MarketForcedSettlementProposal;
                toAmino(message: _188.MarketForcedSettlementProposal): _188.MarketForcedSettlementProposalAmino;
                fromAminoMsg(object: _188.MarketForcedSettlementProposalAminoMsg): _188.MarketForcedSettlementProposal;
                fromProtoMsg(message: _188.MarketForcedSettlementProposalProtoMsg): _188.MarketForcedSettlementProposal;
                toProto(message: _188.MarketForcedSettlementProposal): Uint8Array;
                toProtoMsg(message: _188.MarketForcedSettlementProposal): _188.MarketForcedSettlementProposalProtoMsg;
            };
            UpdateDenomDecimalsProposal: {
                typeUrl: string;
                encode(message: _188.UpdateDenomDecimalsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.UpdateDenomDecimalsProposal;
                fromPartial(object: Partial<_188.UpdateDenomDecimalsProposal>): _188.UpdateDenomDecimalsProposal;
                fromAmino(object: _188.UpdateDenomDecimalsProposalAmino): _188.UpdateDenomDecimalsProposal;
                toAmino(message: _188.UpdateDenomDecimalsProposal): _188.UpdateDenomDecimalsProposalAmino;
                fromAminoMsg(object: _188.UpdateDenomDecimalsProposalAminoMsg): _188.UpdateDenomDecimalsProposal;
                fromProtoMsg(message: _188.UpdateDenomDecimalsProposalProtoMsg): _188.UpdateDenomDecimalsProposal;
                toProto(message: _188.UpdateDenomDecimalsProposal): Uint8Array;
                toProtoMsg(message: _188.UpdateDenomDecimalsProposal): _188.UpdateDenomDecimalsProposalProtoMsg;
            };
            DenomDecimals: {
                typeUrl: string;
                encode(message: _188.DenomDecimals, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.DenomDecimals;
                fromPartial(object: Partial<_188.DenomDecimals>): _188.DenomDecimals;
                fromAmino(object: _188.DenomDecimalsAmino): _188.DenomDecimals;
                toAmino(message: _188.DenomDecimals): _188.DenomDecimalsAmino;
                fromAminoMsg(object: _188.DenomDecimalsAminoMsg): _188.DenomDecimals;
                fromProtoMsg(message: _188.DenomDecimalsProtoMsg): _188.DenomDecimals;
                toProto(message: _188.DenomDecimals): Uint8Array;
                toProtoMsg(message: _188.DenomDecimals): _188.DenomDecimalsProtoMsg;
            };
            BinaryOptionsMarketParamUpdateProposal: {
                typeUrl: string;
                encode(message: _188.BinaryOptionsMarketParamUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.BinaryOptionsMarketParamUpdateProposal;
                fromPartial(object: Partial<_188.BinaryOptionsMarketParamUpdateProposal>): _188.BinaryOptionsMarketParamUpdateProposal;
                fromAmino(object: _188.BinaryOptionsMarketParamUpdateProposalAmino): _188.BinaryOptionsMarketParamUpdateProposal;
                toAmino(message: _188.BinaryOptionsMarketParamUpdateProposal): _188.BinaryOptionsMarketParamUpdateProposalAmino;
                fromAminoMsg(object: _188.BinaryOptionsMarketParamUpdateProposalAminoMsg): _188.BinaryOptionsMarketParamUpdateProposal;
                fromProtoMsg(message: _188.BinaryOptionsMarketParamUpdateProposalProtoMsg): _188.BinaryOptionsMarketParamUpdateProposal;
                toProto(message: _188.BinaryOptionsMarketParamUpdateProposal): Uint8Array;
                toProtoMsg(message: _188.BinaryOptionsMarketParamUpdateProposal): _188.BinaryOptionsMarketParamUpdateProposalProtoMsg;
            };
            ProviderOracleParams: {
                typeUrl: string;
                encode(message: _188.ProviderOracleParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.ProviderOracleParams;
                fromPartial(object: Partial<_188.ProviderOracleParams>): _188.ProviderOracleParams;
                fromAmino(object: _188.ProviderOracleParamsAmino): _188.ProviderOracleParams;
                toAmino(message: _188.ProviderOracleParams): _188.ProviderOracleParamsAmino;
                fromAminoMsg(object: _188.ProviderOracleParamsAminoMsg): _188.ProviderOracleParams;
                fromProtoMsg(message: _188.ProviderOracleParamsProtoMsg): _188.ProviderOracleParams;
                toProto(message: _188.ProviderOracleParams): Uint8Array;
                toProtoMsg(message: _188.ProviderOracleParams): _188.ProviderOracleParamsProtoMsg;
            };
            OracleParams: {
                typeUrl: string;
                encode(message: _188.OracleParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.OracleParams;
                fromPartial(object: Partial<_188.OracleParams>): _188.OracleParams;
                fromAmino(object: _188.OracleParamsAmino): _188.OracleParams;
                toAmino(message: _188.OracleParams): _188.OracleParamsAmino;
                fromAminoMsg(object: _188.OracleParamsAminoMsg): _188.OracleParams;
                fromProtoMsg(message: _188.OracleParamsProtoMsg): _188.OracleParams;
                toProto(message: _188.OracleParams): Uint8Array;
                toProtoMsg(message: _188.OracleParams): _188.OracleParamsProtoMsg;
            };
            TradingRewardCampaignLaunchProposal: {
                typeUrl: string;
                encode(message: _188.TradingRewardCampaignLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.TradingRewardCampaignLaunchProposal;
                fromPartial(object: Partial<_188.TradingRewardCampaignLaunchProposal>): _188.TradingRewardCampaignLaunchProposal;
                fromAmino(object: _188.TradingRewardCampaignLaunchProposalAmino): _188.TradingRewardCampaignLaunchProposal;
                toAmino(message: _188.TradingRewardCampaignLaunchProposal): _188.TradingRewardCampaignLaunchProposalAmino;
                fromAminoMsg(object: _188.TradingRewardCampaignLaunchProposalAminoMsg): _188.TradingRewardCampaignLaunchProposal;
                fromProtoMsg(message: _188.TradingRewardCampaignLaunchProposalProtoMsg): _188.TradingRewardCampaignLaunchProposal;
                toProto(message: _188.TradingRewardCampaignLaunchProposal): Uint8Array;
                toProtoMsg(message: _188.TradingRewardCampaignLaunchProposal): _188.TradingRewardCampaignLaunchProposalProtoMsg;
            };
            TradingRewardCampaignUpdateProposal: {
                typeUrl: string;
                encode(message: _188.TradingRewardCampaignUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.TradingRewardCampaignUpdateProposal;
                fromPartial(object: Partial<_188.TradingRewardCampaignUpdateProposal>): _188.TradingRewardCampaignUpdateProposal;
                fromAmino(object: _188.TradingRewardCampaignUpdateProposalAmino): _188.TradingRewardCampaignUpdateProposal;
                toAmino(message: _188.TradingRewardCampaignUpdateProposal): _188.TradingRewardCampaignUpdateProposalAmino;
                fromAminoMsg(object: _188.TradingRewardCampaignUpdateProposalAminoMsg): _188.TradingRewardCampaignUpdateProposal;
                fromProtoMsg(message: _188.TradingRewardCampaignUpdateProposalProtoMsg): _188.TradingRewardCampaignUpdateProposal;
                toProto(message: _188.TradingRewardCampaignUpdateProposal): Uint8Array;
                toProtoMsg(message: _188.TradingRewardCampaignUpdateProposal): _188.TradingRewardCampaignUpdateProposalProtoMsg;
            };
            RewardPointUpdate: {
                typeUrl: string;
                encode(message: _188.RewardPointUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.RewardPointUpdate;
                fromPartial(object: Partial<_188.RewardPointUpdate>): _188.RewardPointUpdate;
                fromAmino(object: _188.RewardPointUpdateAmino): _188.RewardPointUpdate;
                toAmino(message: _188.RewardPointUpdate): _188.RewardPointUpdateAmino;
                fromAminoMsg(object: _188.RewardPointUpdateAminoMsg): _188.RewardPointUpdate;
                fromProtoMsg(message: _188.RewardPointUpdateProtoMsg): _188.RewardPointUpdate;
                toProto(message: _188.RewardPointUpdate): Uint8Array;
                toProtoMsg(message: _188.RewardPointUpdate): _188.RewardPointUpdateProtoMsg;
            };
            TradingRewardPendingPointsUpdateProposal: {
                typeUrl: string;
                encode(message: _188.TradingRewardPendingPointsUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.TradingRewardPendingPointsUpdateProposal;
                fromPartial(object: Partial<_188.TradingRewardPendingPointsUpdateProposal>): _188.TradingRewardPendingPointsUpdateProposal;
                fromAmino(object: _188.TradingRewardPendingPointsUpdateProposalAmino): _188.TradingRewardPendingPointsUpdateProposal;
                toAmino(message: _188.TradingRewardPendingPointsUpdateProposal): _188.TradingRewardPendingPointsUpdateProposalAmino;
                fromAminoMsg(object: _188.TradingRewardPendingPointsUpdateProposalAminoMsg): _188.TradingRewardPendingPointsUpdateProposal;
                fromProtoMsg(message: _188.TradingRewardPendingPointsUpdateProposalProtoMsg): _188.TradingRewardPendingPointsUpdateProposal;
                toProto(message: _188.TradingRewardPendingPointsUpdateProposal): Uint8Array;
                toProtoMsg(message: _188.TradingRewardPendingPointsUpdateProposal): _188.TradingRewardPendingPointsUpdateProposalProtoMsg;
            };
            FeeDiscountProposal: {
                typeUrl: string;
                encode(message: _188.FeeDiscountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.FeeDiscountProposal;
                fromPartial(object: Partial<_188.FeeDiscountProposal>): _188.FeeDiscountProposal;
                fromAmino(object: _188.FeeDiscountProposalAmino): _188.FeeDiscountProposal;
                toAmino(message: _188.FeeDiscountProposal): _188.FeeDiscountProposalAmino;
                fromAminoMsg(object: _188.FeeDiscountProposalAminoMsg): _188.FeeDiscountProposal;
                fromProtoMsg(message: _188.FeeDiscountProposalProtoMsg): _188.FeeDiscountProposal;
                toProto(message: _188.FeeDiscountProposal): Uint8Array;
                toProtoMsg(message: _188.FeeDiscountProposal): _188.FeeDiscountProposalProtoMsg;
            };
            BatchCommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _188.BatchCommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.BatchCommunityPoolSpendProposal;
                fromPartial(object: Partial<_188.BatchCommunityPoolSpendProposal>): _188.BatchCommunityPoolSpendProposal;
                fromAmino(object: _188.BatchCommunityPoolSpendProposalAmino): _188.BatchCommunityPoolSpendProposal;
                toAmino(message: _188.BatchCommunityPoolSpendProposal): _188.BatchCommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _188.BatchCommunityPoolSpendProposalAminoMsg): _188.BatchCommunityPoolSpendProposal;
                fromProtoMsg(message: _188.BatchCommunityPoolSpendProposalProtoMsg): _188.BatchCommunityPoolSpendProposal;
                toProto(message: _188.BatchCommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _188.BatchCommunityPoolSpendProposal): _188.BatchCommunityPoolSpendProposalProtoMsg;
            };
            MsgRewardsOptOut: {
                typeUrl: string;
                encode(message: _188.MsgRewardsOptOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgRewardsOptOut;
                fromPartial(object: Partial<_188.MsgRewardsOptOut>): _188.MsgRewardsOptOut;
                fromAmino(object: _188.MsgRewardsOptOutAmino): _188.MsgRewardsOptOut;
                toAmino(message: _188.MsgRewardsOptOut): _188.MsgRewardsOptOutAmino;
                fromAminoMsg(object: _188.MsgRewardsOptOutAminoMsg): _188.MsgRewardsOptOut;
                fromProtoMsg(message: _188.MsgRewardsOptOutProtoMsg): _188.MsgRewardsOptOut;
                toProto(message: _188.MsgRewardsOptOut): Uint8Array;
                toProtoMsg(message: _188.MsgRewardsOptOut): _188.MsgRewardsOptOutProtoMsg;
            };
            MsgRewardsOptOutResponse: {
                typeUrl: string;
                encode(_: _188.MsgRewardsOptOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgRewardsOptOutResponse;
                fromPartial(_: Partial<_188.MsgRewardsOptOutResponse>): _188.MsgRewardsOptOutResponse;
                fromAmino(_: _188.MsgRewardsOptOutResponseAmino): _188.MsgRewardsOptOutResponse;
                toAmino(_: _188.MsgRewardsOptOutResponse): _188.MsgRewardsOptOutResponseAmino;
                fromAminoMsg(object: _188.MsgRewardsOptOutResponseAminoMsg): _188.MsgRewardsOptOutResponse;
                fromProtoMsg(message: _188.MsgRewardsOptOutResponseProtoMsg): _188.MsgRewardsOptOutResponse;
                toProto(message: _188.MsgRewardsOptOutResponse): Uint8Array;
                toProtoMsg(message: _188.MsgRewardsOptOutResponse): _188.MsgRewardsOptOutResponseProtoMsg;
            };
            MsgAdminUpdateBinaryOptionsMarket: {
                typeUrl: string;
                encode(message: _188.MsgAdminUpdateBinaryOptionsMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgAdminUpdateBinaryOptionsMarket;
                fromPartial(object: Partial<_188.MsgAdminUpdateBinaryOptionsMarket>): _188.MsgAdminUpdateBinaryOptionsMarket;
                fromAmino(object: _188.MsgAdminUpdateBinaryOptionsMarketAmino): _188.MsgAdminUpdateBinaryOptionsMarket;
                toAmino(message: _188.MsgAdminUpdateBinaryOptionsMarket): _188.MsgAdminUpdateBinaryOptionsMarketAmino;
                fromAminoMsg(object: _188.MsgAdminUpdateBinaryOptionsMarketAminoMsg): _188.MsgAdminUpdateBinaryOptionsMarket;
                fromProtoMsg(message: _188.MsgAdminUpdateBinaryOptionsMarketProtoMsg): _188.MsgAdminUpdateBinaryOptionsMarket;
                toProto(message: _188.MsgAdminUpdateBinaryOptionsMarket): Uint8Array;
                toProtoMsg(message: _188.MsgAdminUpdateBinaryOptionsMarket): _188.MsgAdminUpdateBinaryOptionsMarketProtoMsg;
            };
            MsgAdminUpdateBinaryOptionsMarketResponse: {
                typeUrl: string;
                encode(_: _188.MsgAdminUpdateBinaryOptionsMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _188.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromPartial(_: Partial<_188.MsgAdminUpdateBinaryOptionsMarketResponse>): _188.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromAmino(_: _188.MsgAdminUpdateBinaryOptionsMarketResponseAmino): _188.MsgAdminUpdateBinaryOptionsMarketResponse;
                toAmino(_: _188.MsgAdminUpdateBinaryOptionsMarketResponse): _188.MsgAdminUpdateBinaryOptionsMarketResponseAmino;
                fromAminoMsg(object: _188.MsgAdminUpdateBinaryOptionsMarketResponseAminoMsg): _188.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromProtoMsg(message: _188.MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg): _188.MsgAdminUpdateBinaryOptionsMarketResponse;
                toProto(message: _188.MsgAdminUpdateBinaryOptionsMarketResponse): Uint8Array;
                toProtoMsg(message: _188.MsgAdminUpdateBinaryOptionsMarketResponse): _188.MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg;
            };
            cancellationStrategyFromJSON(object: any): _187.CancellationStrategy;
            cancellationStrategyToJSON(object: _187.CancellationStrategy): string;
            CancellationStrategy: typeof _187.CancellationStrategy;
            CancellationStrategySDKType: typeof _187.CancellationStrategy;
            CancellationStrategyAmino: typeof _187.CancellationStrategy;
            Subaccount: {
                typeUrl: string;
                encode(message: _187.Subaccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.Subaccount;
                fromPartial(object: Partial<_187.Subaccount>): _187.Subaccount;
                fromAmino(object: _187.SubaccountAmino): _187.Subaccount;
                toAmino(message: _187.Subaccount): _187.SubaccountAmino;
                fromAminoMsg(object: _187.SubaccountAminoMsg): _187.Subaccount;
                fromProtoMsg(message: _187.SubaccountProtoMsg): _187.Subaccount;
                toProto(message: _187.Subaccount): Uint8Array;
                toProtoMsg(message: _187.Subaccount): _187.SubaccountProtoMsg;
            };
            QuerySubaccountOrdersRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountOrdersRequest;
                fromPartial(object: Partial<_187.QuerySubaccountOrdersRequest>): _187.QuerySubaccountOrdersRequest;
                fromAmino(object: _187.QuerySubaccountOrdersRequestAmino): _187.QuerySubaccountOrdersRequest;
                toAmino(message: _187.QuerySubaccountOrdersRequest): _187.QuerySubaccountOrdersRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountOrdersRequestAminoMsg): _187.QuerySubaccountOrdersRequest;
                fromProtoMsg(message: _187.QuerySubaccountOrdersRequestProtoMsg): _187.QuerySubaccountOrdersRequest;
                toProto(message: _187.QuerySubaccountOrdersRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountOrdersRequest): _187.QuerySubaccountOrdersRequestProtoMsg;
            };
            QuerySubaccountOrdersResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountOrdersResponse;
                fromPartial(object: Partial<_187.QuerySubaccountOrdersResponse>): _187.QuerySubaccountOrdersResponse;
                fromAmino(object: _187.QuerySubaccountOrdersResponseAmino): _187.QuerySubaccountOrdersResponse;
                toAmino(message: _187.QuerySubaccountOrdersResponse): _187.QuerySubaccountOrdersResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountOrdersResponseAminoMsg): _187.QuerySubaccountOrdersResponse;
                fromProtoMsg(message: _187.QuerySubaccountOrdersResponseProtoMsg): _187.QuerySubaccountOrdersResponse;
                toProto(message: _187.QuerySubaccountOrdersResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountOrdersResponse): _187.QuerySubaccountOrdersResponseProtoMsg;
            };
            SubaccountOrderbookMetadataWithMarket: {
                typeUrl: string;
                encode(message: _187.SubaccountOrderbookMetadataWithMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.SubaccountOrderbookMetadataWithMarket;
                fromPartial(object: Partial<_187.SubaccountOrderbookMetadataWithMarket>): _187.SubaccountOrderbookMetadataWithMarket;
                fromAmino(object: _187.SubaccountOrderbookMetadataWithMarketAmino): _187.SubaccountOrderbookMetadataWithMarket;
                toAmino(message: _187.SubaccountOrderbookMetadataWithMarket): _187.SubaccountOrderbookMetadataWithMarketAmino;
                fromAminoMsg(object: _187.SubaccountOrderbookMetadataWithMarketAminoMsg): _187.SubaccountOrderbookMetadataWithMarket;
                fromProtoMsg(message: _187.SubaccountOrderbookMetadataWithMarketProtoMsg): _187.SubaccountOrderbookMetadataWithMarket;
                toProto(message: _187.SubaccountOrderbookMetadataWithMarket): Uint8Array;
                toProtoMsg(message: _187.SubaccountOrderbookMetadataWithMarket): _187.SubaccountOrderbookMetadataWithMarketProtoMsg;
            };
            QueryExchangeParamsRequest: {
                typeUrl: string;
                encode(_: _187.QueryExchangeParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryExchangeParamsRequest;
                fromPartial(_: Partial<_187.QueryExchangeParamsRequest>): _187.QueryExchangeParamsRequest;
                fromAmino(_: _187.QueryExchangeParamsRequestAmino): _187.QueryExchangeParamsRequest;
                toAmino(_: _187.QueryExchangeParamsRequest): _187.QueryExchangeParamsRequestAmino;
                fromAminoMsg(object: _187.QueryExchangeParamsRequestAminoMsg): _187.QueryExchangeParamsRequest;
                fromProtoMsg(message: _187.QueryExchangeParamsRequestProtoMsg): _187.QueryExchangeParamsRequest;
                toProto(message: _187.QueryExchangeParamsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryExchangeParamsRequest): _187.QueryExchangeParamsRequestProtoMsg;
            };
            QueryExchangeParamsResponse: {
                typeUrl: string;
                encode(message: _187.QueryExchangeParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryExchangeParamsResponse;
                fromPartial(object: Partial<_187.QueryExchangeParamsResponse>): _187.QueryExchangeParamsResponse;
                fromAmino(object: _187.QueryExchangeParamsResponseAmino): _187.QueryExchangeParamsResponse;
                toAmino(message: _187.QueryExchangeParamsResponse): _187.QueryExchangeParamsResponseAmino;
                fromAminoMsg(object: _187.QueryExchangeParamsResponseAminoMsg): _187.QueryExchangeParamsResponse;
                fromProtoMsg(message: _187.QueryExchangeParamsResponseProtoMsg): _187.QueryExchangeParamsResponse;
                toProto(message: _187.QueryExchangeParamsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryExchangeParamsResponse): _187.QueryExchangeParamsResponseProtoMsg;
            };
            QuerySubaccountDepositsRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountDepositsRequest;
                fromPartial(object: Partial<_187.QuerySubaccountDepositsRequest>): _187.QuerySubaccountDepositsRequest;
                fromAmino(object: _187.QuerySubaccountDepositsRequestAmino): _187.QuerySubaccountDepositsRequest;
                toAmino(message: _187.QuerySubaccountDepositsRequest): _187.QuerySubaccountDepositsRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountDepositsRequestAminoMsg): _187.QuerySubaccountDepositsRequest;
                fromProtoMsg(message: _187.QuerySubaccountDepositsRequestProtoMsg): _187.QuerySubaccountDepositsRequest;
                toProto(message: _187.QuerySubaccountDepositsRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountDepositsRequest): _187.QuerySubaccountDepositsRequestProtoMsg;
            };
            QuerySubaccountDepositsResponse_DepositsEntry: {
                encode(message: _187.QuerySubaccountDepositsResponse_DepositsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountDepositsResponse_DepositsEntry;
                fromPartial(object: Partial<_187.QuerySubaccountDepositsResponse_DepositsEntry>): _187.QuerySubaccountDepositsResponse_DepositsEntry;
                fromAmino(object: _187.QuerySubaccountDepositsResponse_DepositsEntryAmino): _187.QuerySubaccountDepositsResponse_DepositsEntry;
                toAmino(message: _187.QuerySubaccountDepositsResponse_DepositsEntry): _187.QuerySubaccountDepositsResponse_DepositsEntryAmino;
                fromAminoMsg(object: _187.QuerySubaccountDepositsResponse_DepositsEntryAminoMsg): _187.QuerySubaccountDepositsResponse_DepositsEntry;
                fromProtoMsg(message: _187.QuerySubaccountDepositsResponse_DepositsEntryProtoMsg): _187.QuerySubaccountDepositsResponse_DepositsEntry;
                toProto(message: _187.QuerySubaccountDepositsResponse_DepositsEntry): Uint8Array;
            };
            QuerySubaccountDepositsResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountDepositsResponse;
                fromPartial(object: Partial<_187.QuerySubaccountDepositsResponse>): _187.QuerySubaccountDepositsResponse;
                fromAmino(object: _187.QuerySubaccountDepositsResponseAmino): _187.QuerySubaccountDepositsResponse;
                toAmino(message: _187.QuerySubaccountDepositsResponse): _187.QuerySubaccountDepositsResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountDepositsResponseAminoMsg): _187.QuerySubaccountDepositsResponse;
                fromProtoMsg(message: _187.QuerySubaccountDepositsResponseProtoMsg): _187.QuerySubaccountDepositsResponse;
                toProto(message: _187.QuerySubaccountDepositsResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountDepositsResponse): _187.QuerySubaccountDepositsResponseProtoMsg;
            };
            QueryExchangeBalancesRequest: {
                typeUrl: string;
                encode(_: _187.QueryExchangeBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryExchangeBalancesRequest;
                fromPartial(_: Partial<_187.QueryExchangeBalancesRequest>): _187.QueryExchangeBalancesRequest;
                fromAmino(_: _187.QueryExchangeBalancesRequestAmino): _187.QueryExchangeBalancesRequest;
                toAmino(_: _187.QueryExchangeBalancesRequest): _187.QueryExchangeBalancesRequestAmino;
                fromAminoMsg(object: _187.QueryExchangeBalancesRequestAminoMsg): _187.QueryExchangeBalancesRequest;
                fromProtoMsg(message: _187.QueryExchangeBalancesRequestProtoMsg): _187.QueryExchangeBalancesRequest;
                toProto(message: _187.QueryExchangeBalancesRequest): Uint8Array;
                toProtoMsg(message: _187.QueryExchangeBalancesRequest): _187.QueryExchangeBalancesRequestProtoMsg;
            };
            QueryExchangeBalancesResponse: {
                typeUrl: string;
                encode(message: _187.QueryExchangeBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryExchangeBalancesResponse;
                fromPartial(object: Partial<_187.QueryExchangeBalancesResponse>): _187.QueryExchangeBalancesResponse;
                fromAmino(object: _187.QueryExchangeBalancesResponseAmino): _187.QueryExchangeBalancesResponse;
                toAmino(message: _187.QueryExchangeBalancesResponse): _187.QueryExchangeBalancesResponseAmino;
                fromAminoMsg(object: _187.QueryExchangeBalancesResponseAminoMsg): _187.QueryExchangeBalancesResponse;
                fromProtoMsg(message: _187.QueryExchangeBalancesResponseProtoMsg): _187.QueryExchangeBalancesResponse;
                toProto(message: _187.QueryExchangeBalancesResponse): Uint8Array;
                toProtoMsg(message: _187.QueryExchangeBalancesResponse): _187.QueryExchangeBalancesResponseProtoMsg;
            };
            QuerySubaccountDepositRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountDepositRequest;
                fromPartial(object: Partial<_187.QuerySubaccountDepositRequest>): _187.QuerySubaccountDepositRequest;
                fromAmino(object: _187.QuerySubaccountDepositRequestAmino): _187.QuerySubaccountDepositRequest;
                toAmino(message: _187.QuerySubaccountDepositRequest): _187.QuerySubaccountDepositRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountDepositRequestAminoMsg): _187.QuerySubaccountDepositRequest;
                fromProtoMsg(message: _187.QuerySubaccountDepositRequestProtoMsg): _187.QuerySubaccountDepositRequest;
                toProto(message: _187.QuerySubaccountDepositRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountDepositRequest): _187.QuerySubaccountDepositRequestProtoMsg;
            };
            QuerySubaccountDepositResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountDepositResponse;
                fromPartial(object: Partial<_187.QuerySubaccountDepositResponse>): _187.QuerySubaccountDepositResponse;
                fromAmino(object: _187.QuerySubaccountDepositResponseAmino): _187.QuerySubaccountDepositResponse;
                toAmino(message: _187.QuerySubaccountDepositResponse): _187.QuerySubaccountDepositResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountDepositResponseAminoMsg): _187.QuerySubaccountDepositResponse;
                fromProtoMsg(message: _187.QuerySubaccountDepositResponseProtoMsg): _187.QuerySubaccountDepositResponse;
                toProto(message: _187.QuerySubaccountDepositResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountDepositResponse): _187.QuerySubaccountDepositResponseProtoMsg;
            };
            QuerySpotMarketsRequest: {
                typeUrl: string;
                encode(message: _187.QuerySpotMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotMarketsRequest;
                fromPartial(object: Partial<_187.QuerySpotMarketsRequest>): _187.QuerySpotMarketsRequest;
                fromAmino(object: _187.QuerySpotMarketsRequestAmino): _187.QuerySpotMarketsRequest;
                toAmino(message: _187.QuerySpotMarketsRequest): _187.QuerySpotMarketsRequestAmino;
                fromAminoMsg(object: _187.QuerySpotMarketsRequestAminoMsg): _187.QuerySpotMarketsRequest;
                fromProtoMsg(message: _187.QuerySpotMarketsRequestProtoMsg): _187.QuerySpotMarketsRequest;
                toProto(message: _187.QuerySpotMarketsRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySpotMarketsRequest): _187.QuerySpotMarketsRequestProtoMsg;
            };
            QuerySpotMarketsResponse: {
                typeUrl: string;
                encode(message: _187.QuerySpotMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotMarketsResponse;
                fromPartial(object: Partial<_187.QuerySpotMarketsResponse>): _187.QuerySpotMarketsResponse;
                fromAmino(object: _187.QuerySpotMarketsResponseAmino): _187.QuerySpotMarketsResponse;
                toAmino(message: _187.QuerySpotMarketsResponse): _187.QuerySpotMarketsResponseAmino;
                fromAminoMsg(object: _187.QuerySpotMarketsResponseAminoMsg): _187.QuerySpotMarketsResponse;
                fromProtoMsg(message: _187.QuerySpotMarketsResponseProtoMsg): _187.QuerySpotMarketsResponse;
                toProto(message: _187.QuerySpotMarketsResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySpotMarketsResponse): _187.QuerySpotMarketsResponseProtoMsg;
            };
            QuerySpotMarketRequest: {
                typeUrl: string;
                encode(message: _187.QuerySpotMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotMarketRequest;
                fromPartial(object: Partial<_187.QuerySpotMarketRequest>): _187.QuerySpotMarketRequest;
                fromAmino(object: _187.QuerySpotMarketRequestAmino): _187.QuerySpotMarketRequest;
                toAmino(message: _187.QuerySpotMarketRequest): _187.QuerySpotMarketRequestAmino;
                fromAminoMsg(object: _187.QuerySpotMarketRequestAminoMsg): _187.QuerySpotMarketRequest;
                fromProtoMsg(message: _187.QuerySpotMarketRequestProtoMsg): _187.QuerySpotMarketRequest;
                toProto(message: _187.QuerySpotMarketRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySpotMarketRequest): _187.QuerySpotMarketRequestProtoMsg;
            };
            QuerySpotMarketResponse: {
                typeUrl: string;
                encode(message: _187.QuerySpotMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotMarketResponse;
                fromPartial(object: Partial<_187.QuerySpotMarketResponse>): _187.QuerySpotMarketResponse;
                fromAmino(object: _187.QuerySpotMarketResponseAmino): _187.QuerySpotMarketResponse;
                toAmino(message: _187.QuerySpotMarketResponse): _187.QuerySpotMarketResponseAmino;
                fromAminoMsg(object: _187.QuerySpotMarketResponseAminoMsg): _187.QuerySpotMarketResponse;
                fromProtoMsg(message: _187.QuerySpotMarketResponseProtoMsg): _187.QuerySpotMarketResponse;
                toProto(message: _187.QuerySpotMarketResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySpotMarketResponse): _187.QuerySpotMarketResponseProtoMsg;
            };
            QuerySpotOrderbookRequest: {
                typeUrl: string;
                encode(message: _187.QuerySpotOrderbookRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotOrderbookRequest;
                fromPartial(object: Partial<_187.QuerySpotOrderbookRequest>): _187.QuerySpotOrderbookRequest;
                fromAmino(object: _187.QuerySpotOrderbookRequestAmino): _187.QuerySpotOrderbookRequest;
                toAmino(message: _187.QuerySpotOrderbookRequest): _187.QuerySpotOrderbookRequestAmino;
                fromAminoMsg(object: _187.QuerySpotOrderbookRequestAminoMsg): _187.QuerySpotOrderbookRequest;
                fromProtoMsg(message: _187.QuerySpotOrderbookRequestProtoMsg): _187.QuerySpotOrderbookRequest;
                toProto(message: _187.QuerySpotOrderbookRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySpotOrderbookRequest): _187.QuerySpotOrderbookRequestProtoMsg;
            };
            QuerySpotOrderbookResponse: {
                typeUrl: string;
                encode(message: _187.QuerySpotOrderbookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotOrderbookResponse;
                fromPartial(object: Partial<_187.QuerySpotOrderbookResponse>): _187.QuerySpotOrderbookResponse;
                fromAmino(object: _187.QuerySpotOrderbookResponseAmino): _187.QuerySpotOrderbookResponse;
                toAmino(message: _187.QuerySpotOrderbookResponse): _187.QuerySpotOrderbookResponseAmino;
                fromAminoMsg(object: _187.QuerySpotOrderbookResponseAminoMsg): _187.QuerySpotOrderbookResponse;
                fromProtoMsg(message: _187.QuerySpotOrderbookResponseProtoMsg): _187.QuerySpotOrderbookResponse;
                toProto(message: _187.QuerySpotOrderbookResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySpotOrderbookResponse): _187.QuerySpotOrderbookResponseProtoMsg;
            };
            QuerySpotOrdersByHashesRequest: {
                typeUrl: string;
                encode(message: _187.QuerySpotOrdersByHashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotOrdersByHashesRequest;
                fromPartial(object: Partial<_187.QuerySpotOrdersByHashesRequest>): _187.QuerySpotOrdersByHashesRequest;
                fromAmino(object: _187.QuerySpotOrdersByHashesRequestAmino): _187.QuerySpotOrdersByHashesRequest;
                toAmino(message: _187.QuerySpotOrdersByHashesRequest): _187.QuerySpotOrdersByHashesRequestAmino;
                fromAminoMsg(object: _187.QuerySpotOrdersByHashesRequestAminoMsg): _187.QuerySpotOrdersByHashesRequest;
                fromProtoMsg(message: _187.QuerySpotOrdersByHashesRequestProtoMsg): _187.QuerySpotOrdersByHashesRequest;
                toProto(message: _187.QuerySpotOrdersByHashesRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySpotOrdersByHashesRequest): _187.QuerySpotOrdersByHashesRequestProtoMsg;
            };
            QuerySpotOrdersByHashesResponse: {
                typeUrl: string;
                encode(message: _187.QuerySpotOrdersByHashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotOrdersByHashesResponse;
                fromPartial(object: Partial<_187.QuerySpotOrdersByHashesResponse>): _187.QuerySpotOrdersByHashesResponse;
                fromAmino(object: _187.QuerySpotOrdersByHashesResponseAmino): _187.QuerySpotOrdersByHashesResponse;
                toAmino(message: _187.QuerySpotOrdersByHashesResponse): _187.QuerySpotOrdersByHashesResponseAmino;
                fromAminoMsg(object: _187.QuerySpotOrdersByHashesResponseAminoMsg): _187.QuerySpotOrdersByHashesResponse;
                fromProtoMsg(message: _187.QuerySpotOrdersByHashesResponseProtoMsg): _187.QuerySpotOrdersByHashesResponse;
                toProto(message: _187.QuerySpotOrdersByHashesResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySpotOrdersByHashesResponse): _187.QuerySpotOrdersByHashesResponseProtoMsg;
            };
            QueryTraderSpotOrdersRequest: {
                typeUrl: string;
                encode(message: _187.QueryTraderSpotOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderSpotOrdersRequest;
                fromPartial(object: Partial<_187.QueryTraderSpotOrdersRequest>): _187.QueryTraderSpotOrdersRequest;
                fromAmino(object: _187.QueryTraderSpotOrdersRequestAmino): _187.QueryTraderSpotOrdersRequest;
                toAmino(message: _187.QueryTraderSpotOrdersRequest): _187.QueryTraderSpotOrdersRequestAmino;
                fromAminoMsg(object: _187.QueryTraderSpotOrdersRequestAminoMsg): _187.QueryTraderSpotOrdersRequest;
                fromProtoMsg(message: _187.QueryTraderSpotOrdersRequestProtoMsg): _187.QueryTraderSpotOrdersRequest;
                toProto(message: _187.QueryTraderSpotOrdersRequest): Uint8Array;
                toProtoMsg(message: _187.QueryTraderSpotOrdersRequest): _187.QueryTraderSpotOrdersRequestProtoMsg;
            };
            TrimmedSpotLimitOrder: {
                typeUrl: string;
                encode(message: _187.TrimmedSpotLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.TrimmedSpotLimitOrder;
                fromPartial(object: Partial<_187.TrimmedSpotLimitOrder>): _187.TrimmedSpotLimitOrder;
                fromAmino(object: _187.TrimmedSpotLimitOrderAmino): _187.TrimmedSpotLimitOrder;
                toAmino(message: _187.TrimmedSpotLimitOrder): _187.TrimmedSpotLimitOrderAmino;
                fromAminoMsg(object: _187.TrimmedSpotLimitOrderAminoMsg): _187.TrimmedSpotLimitOrder;
                fromProtoMsg(message: _187.TrimmedSpotLimitOrderProtoMsg): _187.TrimmedSpotLimitOrder;
                toProto(message: _187.TrimmedSpotLimitOrder): Uint8Array;
                toProtoMsg(message: _187.TrimmedSpotLimitOrder): _187.TrimmedSpotLimitOrderProtoMsg;
            };
            QueryTraderSpotOrdersResponse: {
                typeUrl: string;
                encode(message: _187.QueryTraderSpotOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderSpotOrdersResponse;
                fromPartial(object: Partial<_187.QueryTraderSpotOrdersResponse>): _187.QueryTraderSpotOrdersResponse;
                fromAmino(object: _187.QueryTraderSpotOrdersResponseAmino): _187.QueryTraderSpotOrdersResponse;
                toAmino(message: _187.QueryTraderSpotOrdersResponse): _187.QueryTraderSpotOrdersResponseAmino;
                fromAminoMsg(object: _187.QueryTraderSpotOrdersResponseAminoMsg): _187.QueryTraderSpotOrdersResponse;
                fromProtoMsg(message: _187.QueryTraderSpotOrdersResponseProtoMsg): _187.QueryTraderSpotOrdersResponse;
                toProto(message: _187.QueryTraderSpotOrdersResponse): Uint8Array;
                toProtoMsg(message: _187.QueryTraderSpotOrdersResponse): _187.QueryTraderSpotOrdersResponseProtoMsg;
            };
            QuerySpotMidPriceAndTOBRequest: {
                typeUrl: string;
                encode(message: _187.QuerySpotMidPriceAndTOBRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotMidPriceAndTOBRequest;
                fromPartial(object: Partial<_187.QuerySpotMidPriceAndTOBRequest>): _187.QuerySpotMidPriceAndTOBRequest;
                fromAmino(object: _187.QuerySpotMidPriceAndTOBRequestAmino): _187.QuerySpotMidPriceAndTOBRequest;
                toAmino(message: _187.QuerySpotMidPriceAndTOBRequest): _187.QuerySpotMidPriceAndTOBRequestAmino;
                fromAminoMsg(object: _187.QuerySpotMidPriceAndTOBRequestAminoMsg): _187.QuerySpotMidPriceAndTOBRequest;
                fromProtoMsg(message: _187.QuerySpotMidPriceAndTOBRequestProtoMsg): _187.QuerySpotMidPriceAndTOBRequest;
                toProto(message: _187.QuerySpotMidPriceAndTOBRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySpotMidPriceAndTOBRequest): _187.QuerySpotMidPriceAndTOBRequestProtoMsg;
            };
            QuerySpotMidPriceAndTOBResponse: {
                typeUrl: string;
                encode(message: _187.QuerySpotMidPriceAndTOBResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySpotMidPriceAndTOBResponse;
                fromPartial(object: Partial<_187.QuerySpotMidPriceAndTOBResponse>): _187.QuerySpotMidPriceAndTOBResponse;
                fromAmino(object: _187.QuerySpotMidPriceAndTOBResponseAmino): _187.QuerySpotMidPriceAndTOBResponse;
                toAmino(message: _187.QuerySpotMidPriceAndTOBResponse): _187.QuerySpotMidPriceAndTOBResponseAmino;
                fromAminoMsg(object: _187.QuerySpotMidPriceAndTOBResponseAminoMsg): _187.QuerySpotMidPriceAndTOBResponse;
                fromProtoMsg(message: _187.QuerySpotMidPriceAndTOBResponseProtoMsg): _187.QuerySpotMidPriceAndTOBResponse;
                toProto(message: _187.QuerySpotMidPriceAndTOBResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySpotMidPriceAndTOBResponse): _187.QuerySpotMidPriceAndTOBResponseProtoMsg;
            };
            QueryDerivativeMidPriceAndTOBRequest: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMidPriceAndTOBRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMidPriceAndTOBRequest;
                fromPartial(object: Partial<_187.QueryDerivativeMidPriceAndTOBRequest>): _187.QueryDerivativeMidPriceAndTOBRequest;
                fromAmino(object: _187.QueryDerivativeMidPriceAndTOBRequestAmino): _187.QueryDerivativeMidPriceAndTOBRequest;
                toAmino(message: _187.QueryDerivativeMidPriceAndTOBRequest): _187.QueryDerivativeMidPriceAndTOBRequestAmino;
                fromAminoMsg(object: _187.QueryDerivativeMidPriceAndTOBRequestAminoMsg): _187.QueryDerivativeMidPriceAndTOBRequest;
                fromProtoMsg(message: _187.QueryDerivativeMidPriceAndTOBRequestProtoMsg): _187.QueryDerivativeMidPriceAndTOBRequest;
                toProto(message: _187.QueryDerivativeMidPriceAndTOBRequest): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMidPriceAndTOBRequest): _187.QueryDerivativeMidPriceAndTOBRequestProtoMsg;
            };
            QueryDerivativeMidPriceAndTOBResponse: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMidPriceAndTOBResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMidPriceAndTOBResponse;
                fromPartial(object: Partial<_187.QueryDerivativeMidPriceAndTOBResponse>): _187.QueryDerivativeMidPriceAndTOBResponse;
                fromAmino(object: _187.QueryDerivativeMidPriceAndTOBResponseAmino): _187.QueryDerivativeMidPriceAndTOBResponse;
                toAmino(message: _187.QueryDerivativeMidPriceAndTOBResponse): _187.QueryDerivativeMidPriceAndTOBResponseAmino;
                fromAminoMsg(object: _187.QueryDerivativeMidPriceAndTOBResponseAminoMsg): _187.QueryDerivativeMidPriceAndTOBResponse;
                fromProtoMsg(message: _187.QueryDerivativeMidPriceAndTOBResponseProtoMsg): _187.QueryDerivativeMidPriceAndTOBResponse;
                toProto(message: _187.QueryDerivativeMidPriceAndTOBResponse): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMidPriceAndTOBResponse): _187.QueryDerivativeMidPriceAndTOBResponseProtoMsg;
            };
            QueryDerivativeOrderbookRequest: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeOrderbookRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeOrderbookRequest;
                fromPartial(object: Partial<_187.QueryDerivativeOrderbookRequest>): _187.QueryDerivativeOrderbookRequest;
                fromAmino(object: _187.QueryDerivativeOrderbookRequestAmino): _187.QueryDerivativeOrderbookRequest;
                toAmino(message: _187.QueryDerivativeOrderbookRequest): _187.QueryDerivativeOrderbookRequestAmino;
                fromAminoMsg(object: _187.QueryDerivativeOrderbookRequestAminoMsg): _187.QueryDerivativeOrderbookRequest;
                fromProtoMsg(message: _187.QueryDerivativeOrderbookRequestProtoMsg): _187.QueryDerivativeOrderbookRequest;
                toProto(message: _187.QueryDerivativeOrderbookRequest): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeOrderbookRequest): _187.QueryDerivativeOrderbookRequestProtoMsg;
            };
            QueryDerivativeOrderbookResponse: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeOrderbookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeOrderbookResponse;
                fromPartial(object: Partial<_187.QueryDerivativeOrderbookResponse>): _187.QueryDerivativeOrderbookResponse;
                fromAmino(object: _187.QueryDerivativeOrderbookResponseAmino): _187.QueryDerivativeOrderbookResponse;
                toAmino(message: _187.QueryDerivativeOrderbookResponse): _187.QueryDerivativeOrderbookResponseAmino;
                fromAminoMsg(object: _187.QueryDerivativeOrderbookResponseAminoMsg): _187.QueryDerivativeOrderbookResponse;
                fromProtoMsg(message: _187.QueryDerivativeOrderbookResponseProtoMsg): _187.QueryDerivativeOrderbookResponse;
                toProto(message: _187.QueryDerivativeOrderbookResponse): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeOrderbookResponse): _187.QueryDerivativeOrderbookResponseProtoMsg;
            };
            QueryTraderSpotOrdersToCancelUpToAmountRequest: {
                typeUrl: string;
                encode(message: _187.QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromPartial(object: Partial<_187.QueryTraderSpotOrdersToCancelUpToAmountRequest>): _187.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromAmino(object: _187.QueryTraderSpotOrdersToCancelUpToAmountRequestAmino): _187.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                toAmino(message: _187.QueryTraderSpotOrdersToCancelUpToAmountRequest): _187.QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
                fromAminoMsg(object: _187.QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg): _187.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromProtoMsg(message: _187.QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg): _187.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                toProto(message: _187.QueryTraderSpotOrdersToCancelUpToAmountRequest): Uint8Array;
                toProtoMsg(message: _187.QueryTraderSpotOrdersToCancelUpToAmountRequest): _187.QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg;
            };
            QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
                typeUrl: string;
                encode(message: _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromPartial(object: Partial<_187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromAmino(object: _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino): _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                toAmino(message: _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest): _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
                fromAminoMsg(object: _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg): _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromProtoMsg(message: _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg): _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                toProto(message: _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest): Uint8Array;
                toProtoMsg(message: _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequest): _187.QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg;
            };
            QueryTraderDerivativeOrdersRequest: {
                typeUrl: string;
                encode(message: _187.QueryTraderDerivativeOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderDerivativeOrdersRequest;
                fromPartial(object: Partial<_187.QueryTraderDerivativeOrdersRequest>): _187.QueryTraderDerivativeOrdersRequest;
                fromAmino(object: _187.QueryTraderDerivativeOrdersRequestAmino): _187.QueryTraderDerivativeOrdersRequest;
                toAmino(message: _187.QueryTraderDerivativeOrdersRequest): _187.QueryTraderDerivativeOrdersRequestAmino;
                fromAminoMsg(object: _187.QueryTraderDerivativeOrdersRequestAminoMsg): _187.QueryTraderDerivativeOrdersRequest;
                fromProtoMsg(message: _187.QueryTraderDerivativeOrdersRequestProtoMsg): _187.QueryTraderDerivativeOrdersRequest;
                toProto(message: _187.QueryTraderDerivativeOrdersRequest): Uint8Array;
                toProtoMsg(message: _187.QueryTraderDerivativeOrdersRequest): _187.QueryTraderDerivativeOrdersRequestProtoMsg;
            };
            TrimmedDerivativeLimitOrder: {
                typeUrl: string;
                encode(message: _187.TrimmedDerivativeLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.TrimmedDerivativeLimitOrder;
                fromPartial(object: Partial<_187.TrimmedDerivativeLimitOrder>): _187.TrimmedDerivativeLimitOrder;
                fromAmino(object: _187.TrimmedDerivativeLimitOrderAmino): _187.TrimmedDerivativeLimitOrder;
                toAmino(message: _187.TrimmedDerivativeLimitOrder): _187.TrimmedDerivativeLimitOrderAmino;
                fromAminoMsg(object: _187.TrimmedDerivativeLimitOrderAminoMsg): _187.TrimmedDerivativeLimitOrder;
                fromProtoMsg(message: _187.TrimmedDerivativeLimitOrderProtoMsg): _187.TrimmedDerivativeLimitOrder;
                toProto(message: _187.TrimmedDerivativeLimitOrder): Uint8Array;
                toProtoMsg(message: _187.TrimmedDerivativeLimitOrder): _187.TrimmedDerivativeLimitOrderProtoMsg;
            };
            QueryTraderDerivativeOrdersResponse: {
                typeUrl: string;
                encode(message: _187.QueryTraderDerivativeOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderDerivativeOrdersResponse;
                fromPartial(object: Partial<_187.QueryTraderDerivativeOrdersResponse>): _187.QueryTraderDerivativeOrdersResponse;
                fromAmino(object: _187.QueryTraderDerivativeOrdersResponseAmino): _187.QueryTraderDerivativeOrdersResponse;
                toAmino(message: _187.QueryTraderDerivativeOrdersResponse): _187.QueryTraderDerivativeOrdersResponseAmino;
                fromAminoMsg(object: _187.QueryTraderDerivativeOrdersResponseAminoMsg): _187.QueryTraderDerivativeOrdersResponse;
                fromProtoMsg(message: _187.QueryTraderDerivativeOrdersResponseProtoMsg): _187.QueryTraderDerivativeOrdersResponse;
                toProto(message: _187.QueryTraderDerivativeOrdersResponse): Uint8Array;
                toProtoMsg(message: _187.QueryTraderDerivativeOrdersResponse): _187.QueryTraderDerivativeOrdersResponseProtoMsg;
            };
            QueryDerivativeOrdersByHashesRequest: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeOrdersByHashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeOrdersByHashesRequest;
                fromPartial(object: Partial<_187.QueryDerivativeOrdersByHashesRequest>): _187.QueryDerivativeOrdersByHashesRequest;
                fromAmino(object: _187.QueryDerivativeOrdersByHashesRequestAmino): _187.QueryDerivativeOrdersByHashesRequest;
                toAmino(message: _187.QueryDerivativeOrdersByHashesRequest): _187.QueryDerivativeOrdersByHashesRequestAmino;
                fromAminoMsg(object: _187.QueryDerivativeOrdersByHashesRequestAminoMsg): _187.QueryDerivativeOrdersByHashesRequest;
                fromProtoMsg(message: _187.QueryDerivativeOrdersByHashesRequestProtoMsg): _187.QueryDerivativeOrdersByHashesRequest;
                toProto(message: _187.QueryDerivativeOrdersByHashesRequest): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeOrdersByHashesRequest): _187.QueryDerivativeOrdersByHashesRequestProtoMsg;
            };
            QueryDerivativeOrdersByHashesResponse: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeOrdersByHashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeOrdersByHashesResponse;
                fromPartial(object: Partial<_187.QueryDerivativeOrdersByHashesResponse>): _187.QueryDerivativeOrdersByHashesResponse;
                fromAmino(object: _187.QueryDerivativeOrdersByHashesResponseAmino): _187.QueryDerivativeOrdersByHashesResponse;
                toAmino(message: _187.QueryDerivativeOrdersByHashesResponse): _187.QueryDerivativeOrdersByHashesResponseAmino;
                fromAminoMsg(object: _187.QueryDerivativeOrdersByHashesResponseAminoMsg): _187.QueryDerivativeOrdersByHashesResponse;
                fromProtoMsg(message: _187.QueryDerivativeOrdersByHashesResponseProtoMsg): _187.QueryDerivativeOrdersByHashesResponse;
                toProto(message: _187.QueryDerivativeOrdersByHashesResponse): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeOrdersByHashesResponse): _187.QueryDerivativeOrdersByHashesResponseProtoMsg;
            };
            QueryDerivativeMarketsRequest: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMarketsRequest;
                fromPartial(object: Partial<_187.QueryDerivativeMarketsRequest>): _187.QueryDerivativeMarketsRequest;
                fromAmino(object: _187.QueryDerivativeMarketsRequestAmino): _187.QueryDerivativeMarketsRequest;
                toAmino(message: _187.QueryDerivativeMarketsRequest): _187.QueryDerivativeMarketsRequestAmino;
                fromAminoMsg(object: _187.QueryDerivativeMarketsRequestAminoMsg): _187.QueryDerivativeMarketsRequest;
                fromProtoMsg(message: _187.QueryDerivativeMarketsRequestProtoMsg): _187.QueryDerivativeMarketsRequest;
                toProto(message: _187.QueryDerivativeMarketsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMarketsRequest): _187.QueryDerivativeMarketsRequestProtoMsg;
            };
            PriceLevel: {
                typeUrl: string;
                encode(message: _187.PriceLevel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.PriceLevel;
                fromPartial(object: Partial<_187.PriceLevel>): _187.PriceLevel;
                fromAmino(object: _187.PriceLevelAmino): _187.PriceLevel;
                toAmino(message: _187.PriceLevel): _187.PriceLevelAmino;
                fromAminoMsg(object: _187.PriceLevelAminoMsg): _187.PriceLevel;
                fromProtoMsg(message: _187.PriceLevelProtoMsg): _187.PriceLevel;
                toProto(message: _187.PriceLevel): Uint8Array;
                toProtoMsg(message: _187.PriceLevel): _187.PriceLevelProtoMsg;
            };
            PerpetualMarketState: {
                typeUrl: string;
                encode(message: _187.PerpetualMarketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.PerpetualMarketState;
                fromPartial(object: Partial<_187.PerpetualMarketState>): _187.PerpetualMarketState;
                fromAmino(object: _187.PerpetualMarketStateAmino): _187.PerpetualMarketState;
                toAmino(message: _187.PerpetualMarketState): _187.PerpetualMarketStateAmino;
                fromAminoMsg(object: _187.PerpetualMarketStateAminoMsg): _187.PerpetualMarketState;
                fromProtoMsg(message: _187.PerpetualMarketStateProtoMsg): _187.PerpetualMarketState;
                toProto(message: _187.PerpetualMarketState): Uint8Array;
                toProtoMsg(message: _187.PerpetualMarketState): _187.PerpetualMarketStateProtoMsg;
            };
            FullDerivativeMarket: {
                typeUrl: string;
                encode(message: _187.FullDerivativeMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.FullDerivativeMarket;
                fromPartial(object: Partial<_187.FullDerivativeMarket>): _187.FullDerivativeMarket;
                fromAmino(object: _187.FullDerivativeMarketAmino): _187.FullDerivativeMarket;
                toAmino(message: _187.FullDerivativeMarket): _187.FullDerivativeMarketAmino;
                fromAminoMsg(object: _187.FullDerivativeMarketAminoMsg): _187.FullDerivativeMarket;
                fromProtoMsg(message: _187.FullDerivativeMarketProtoMsg): _187.FullDerivativeMarket;
                toProto(message: _187.FullDerivativeMarket): Uint8Array;
                toProtoMsg(message: _187.FullDerivativeMarket): _187.FullDerivativeMarketProtoMsg;
            };
            QueryDerivativeMarketsResponse: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMarketsResponse;
                fromPartial(object: Partial<_187.QueryDerivativeMarketsResponse>): _187.QueryDerivativeMarketsResponse;
                fromAmino(object: _187.QueryDerivativeMarketsResponseAmino): _187.QueryDerivativeMarketsResponse;
                toAmino(message: _187.QueryDerivativeMarketsResponse): _187.QueryDerivativeMarketsResponseAmino;
                fromAminoMsg(object: _187.QueryDerivativeMarketsResponseAminoMsg): _187.QueryDerivativeMarketsResponse;
                fromProtoMsg(message: _187.QueryDerivativeMarketsResponseProtoMsg): _187.QueryDerivativeMarketsResponse;
                toProto(message: _187.QueryDerivativeMarketsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMarketsResponse): _187.QueryDerivativeMarketsResponseProtoMsg;
            };
            QueryDerivativeMarketRequest: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMarketRequest;
                fromPartial(object: Partial<_187.QueryDerivativeMarketRequest>): _187.QueryDerivativeMarketRequest;
                fromAmino(object: _187.QueryDerivativeMarketRequestAmino): _187.QueryDerivativeMarketRequest;
                toAmino(message: _187.QueryDerivativeMarketRequest): _187.QueryDerivativeMarketRequestAmino;
                fromAminoMsg(object: _187.QueryDerivativeMarketRequestAminoMsg): _187.QueryDerivativeMarketRequest;
                fromProtoMsg(message: _187.QueryDerivativeMarketRequestProtoMsg): _187.QueryDerivativeMarketRequest;
                toProto(message: _187.QueryDerivativeMarketRequest): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMarketRequest): _187.QueryDerivativeMarketRequestProtoMsg;
            };
            QueryDerivativeMarketResponse: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMarketResponse;
                fromPartial(object: Partial<_187.QueryDerivativeMarketResponse>): _187.QueryDerivativeMarketResponse;
                fromAmino(object: _187.QueryDerivativeMarketResponseAmino): _187.QueryDerivativeMarketResponse;
                toAmino(message: _187.QueryDerivativeMarketResponse): _187.QueryDerivativeMarketResponseAmino;
                fromAminoMsg(object: _187.QueryDerivativeMarketResponseAminoMsg): _187.QueryDerivativeMarketResponse;
                fromProtoMsg(message: _187.QueryDerivativeMarketResponseProtoMsg): _187.QueryDerivativeMarketResponse;
                toProto(message: _187.QueryDerivativeMarketResponse): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMarketResponse): _187.QueryDerivativeMarketResponseProtoMsg;
            };
            QueryDerivativeMarketAddressRequest: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMarketAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMarketAddressRequest;
                fromPartial(object: Partial<_187.QueryDerivativeMarketAddressRequest>): _187.QueryDerivativeMarketAddressRequest;
                fromAmino(object: _187.QueryDerivativeMarketAddressRequestAmino): _187.QueryDerivativeMarketAddressRequest;
                toAmino(message: _187.QueryDerivativeMarketAddressRequest): _187.QueryDerivativeMarketAddressRequestAmino;
                fromAminoMsg(object: _187.QueryDerivativeMarketAddressRequestAminoMsg): _187.QueryDerivativeMarketAddressRequest;
                fromProtoMsg(message: _187.QueryDerivativeMarketAddressRequestProtoMsg): _187.QueryDerivativeMarketAddressRequest;
                toProto(message: _187.QueryDerivativeMarketAddressRequest): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMarketAddressRequest): _187.QueryDerivativeMarketAddressRequestProtoMsg;
            };
            QueryDerivativeMarketAddressResponse: {
                typeUrl: string;
                encode(message: _187.QueryDerivativeMarketAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryDerivativeMarketAddressResponse;
                fromPartial(object: Partial<_187.QueryDerivativeMarketAddressResponse>): _187.QueryDerivativeMarketAddressResponse;
                fromAmino(object: _187.QueryDerivativeMarketAddressResponseAmino): _187.QueryDerivativeMarketAddressResponse;
                toAmino(message: _187.QueryDerivativeMarketAddressResponse): _187.QueryDerivativeMarketAddressResponseAmino;
                fromAminoMsg(object: _187.QueryDerivativeMarketAddressResponseAminoMsg): _187.QueryDerivativeMarketAddressResponse;
                fromProtoMsg(message: _187.QueryDerivativeMarketAddressResponseProtoMsg): _187.QueryDerivativeMarketAddressResponse;
                toProto(message: _187.QueryDerivativeMarketAddressResponse): Uint8Array;
                toProtoMsg(message: _187.QueryDerivativeMarketAddressResponse): _187.QueryDerivativeMarketAddressResponseProtoMsg;
            };
            QuerySubaccountTradeNonceRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountTradeNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountTradeNonceRequest;
                fromPartial(object: Partial<_187.QuerySubaccountTradeNonceRequest>): _187.QuerySubaccountTradeNonceRequest;
                fromAmino(object: _187.QuerySubaccountTradeNonceRequestAmino): _187.QuerySubaccountTradeNonceRequest;
                toAmino(message: _187.QuerySubaccountTradeNonceRequest): _187.QuerySubaccountTradeNonceRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountTradeNonceRequestAminoMsg): _187.QuerySubaccountTradeNonceRequest;
                fromProtoMsg(message: _187.QuerySubaccountTradeNonceRequestProtoMsg): _187.QuerySubaccountTradeNonceRequest;
                toProto(message: _187.QuerySubaccountTradeNonceRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountTradeNonceRequest): _187.QuerySubaccountTradeNonceRequestProtoMsg;
            };
            QuerySubaccountPositionsRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountPositionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountPositionsRequest;
                fromPartial(object: Partial<_187.QuerySubaccountPositionsRequest>): _187.QuerySubaccountPositionsRequest;
                fromAmino(object: _187.QuerySubaccountPositionsRequestAmino): _187.QuerySubaccountPositionsRequest;
                toAmino(message: _187.QuerySubaccountPositionsRequest): _187.QuerySubaccountPositionsRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountPositionsRequestAminoMsg): _187.QuerySubaccountPositionsRequest;
                fromProtoMsg(message: _187.QuerySubaccountPositionsRequestProtoMsg): _187.QuerySubaccountPositionsRequest;
                toProto(message: _187.QuerySubaccountPositionsRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountPositionsRequest): _187.QuerySubaccountPositionsRequestProtoMsg;
            };
            QuerySubaccountPositionInMarketRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountPositionInMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountPositionInMarketRequest;
                fromPartial(object: Partial<_187.QuerySubaccountPositionInMarketRequest>): _187.QuerySubaccountPositionInMarketRequest;
                fromAmino(object: _187.QuerySubaccountPositionInMarketRequestAmino): _187.QuerySubaccountPositionInMarketRequest;
                toAmino(message: _187.QuerySubaccountPositionInMarketRequest): _187.QuerySubaccountPositionInMarketRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountPositionInMarketRequestAminoMsg): _187.QuerySubaccountPositionInMarketRequest;
                fromProtoMsg(message: _187.QuerySubaccountPositionInMarketRequestProtoMsg): _187.QuerySubaccountPositionInMarketRequest;
                toProto(message: _187.QuerySubaccountPositionInMarketRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountPositionInMarketRequest): _187.QuerySubaccountPositionInMarketRequestProtoMsg;
            };
            QuerySubaccountEffectivePositionInMarketRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountEffectivePositionInMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountEffectivePositionInMarketRequest;
                fromPartial(object: Partial<_187.QuerySubaccountEffectivePositionInMarketRequest>): _187.QuerySubaccountEffectivePositionInMarketRequest;
                fromAmino(object: _187.QuerySubaccountEffectivePositionInMarketRequestAmino): _187.QuerySubaccountEffectivePositionInMarketRequest;
                toAmino(message: _187.QuerySubaccountEffectivePositionInMarketRequest): _187.QuerySubaccountEffectivePositionInMarketRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountEffectivePositionInMarketRequestAminoMsg): _187.QuerySubaccountEffectivePositionInMarketRequest;
                fromProtoMsg(message: _187.QuerySubaccountEffectivePositionInMarketRequestProtoMsg): _187.QuerySubaccountEffectivePositionInMarketRequest;
                toProto(message: _187.QuerySubaccountEffectivePositionInMarketRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountEffectivePositionInMarketRequest): _187.QuerySubaccountEffectivePositionInMarketRequestProtoMsg;
            };
            QuerySubaccountOrderMetadataRequest: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountOrderMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountOrderMetadataRequest;
                fromPartial(object: Partial<_187.QuerySubaccountOrderMetadataRequest>): _187.QuerySubaccountOrderMetadataRequest;
                fromAmino(object: _187.QuerySubaccountOrderMetadataRequestAmino): _187.QuerySubaccountOrderMetadataRequest;
                toAmino(message: _187.QuerySubaccountOrderMetadataRequest): _187.QuerySubaccountOrderMetadataRequestAmino;
                fromAminoMsg(object: _187.QuerySubaccountOrderMetadataRequestAminoMsg): _187.QuerySubaccountOrderMetadataRequest;
                fromProtoMsg(message: _187.QuerySubaccountOrderMetadataRequestProtoMsg): _187.QuerySubaccountOrderMetadataRequest;
                toProto(message: _187.QuerySubaccountOrderMetadataRequest): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountOrderMetadataRequest): _187.QuerySubaccountOrderMetadataRequestProtoMsg;
            };
            QuerySubaccountPositionsResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountPositionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountPositionsResponse;
                fromPartial(object: Partial<_187.QuerySubaccountPositionsResponse>): _187.QuerySubaccountPositionsResponse;
                fromAmino(object: _187.QuerySubaccountPositionsResponseAmino): _187.QuerySubaccountPositionsResponse;
                toAmino(message: _187.QuerySubaccountPositionsResponse): _187.QuerySubaccountPositionsResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountPositionsResponseAminoMsg): _187.QuerySubaccountPositionsResponse;
                fromProtoMsg(message: _187.QuerySubaccountPositionsResponseProtoMsg): _187.QuerySubaccountPositionsResponse;
                toProto(message: _187.QuerySubaccountPositionsResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountPositionsResponse): _187.QuerySubaccountPositionsResponseProtoMsg;
            };
            QuerySubaccountPositionInMarketResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountPositionInMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountPositionInMarketResponse;
                fromPartial(object: Partial<_187.QuerySubaccountPositionInMarketResponse>): _187.QuerySubaccountPositionInMarketResponse;
                fromAmino(object: _187.QuerySubaccountPositionInMarketResponseAmino): _187.QuerySubaccountPositionInMarketResponse;
                toAmino(message: _187.QuerySubaccountPositionInMarketResponse): _187.QuerySubaccountPositionInMarketResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountPositionInMarketResponseAminoMsg): _187.QuerySubaccountPositionInMarketResponse;
                fromProtoMsg(message: _187.QuerySubaccountPositionInMarketResponseProtoMsg): _187.QuerySubaccountPositionInMarketResponse;
                toProto(message: _187.QuerySubaccountPositionInMarketResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountPositionInMarketResponse): _187.QuerySubaccountPositionInMarketResponseProtoMsg;
            };
            EffectivePosition: {
                typeUrl: string;
                encode(message: _187.EffectivePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.EffectivePosition;
                fromPartial(object: Partial<_187.EffectivePosition>): _187.EffectivePosition;
                fromAmino(object: _187.EffectivePositionAmino): _187.EffectivePosition;
                toAmino(message: _187.EffectivePosition): _187.EffectivePositionAmino;
                fromAminoMsg(object: _187.EffectivePositionAminoMsg): _187.EffectivePosition;
                fromProtoMsg(message: _187.EffectivePositionProtoMsg): _187.EffectivePosition;
                toProto(message: _187.EffectivePosition): Uint8Array;
                toProtoMsg(message: _187.EffectivePosition): _187.EffectivePositionProtoMsg;
            };
            QuerySubaccountEffectivePositionInMarketResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountEffectivePositionInMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountEffectivePositionInMarketResponse;
                fromPartial(object: Partial<_187.QuerySubaccountEffectivePositionInMarketResponse>): _187.QuerySubaccountEffectivePositionInMarketResponse;
                fromAmino(object: _187.QuerySubaccountEffectivePositionInMarketResponseAmino): _187.QuerySubaccountEffectivePositionInMarketResponse;
                toAmino(message: _187.QuerySubaccountEffectivePositionInMarketResponse): _187.QuerySubaccountEffectivePositionInMarketResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountEffectivePositionInMarketResponseAminoMsg): _187.QuerySubaccountEffectivePositionInMarketResponse;
                fromProtoMsg(message: _187.QuerySubaccountEffectivePositionInMarketResponseProtoMsg): _187.QuerySubaccountEffectivePositionInMarketResponse;
                toProto(message: _187.QuerySubaccountEffectivePositionInMarketResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountEffectivePositionInMarketResponse): _187.QuerySubaccountEffectivePositionInMarketResponseProtoMsg;
            };
            QueryPerpetualMarketInfoRequest: {
                typeUrl: string;
                encode(message: _187.QueryPerpetualMarketInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryPerpetualMarketInfoRequest;
                fromPartial(object: Partial<_187.QueryPerpetualMarketInfoRequest>): _187.QueryPerpetualMarketInfoRequest;
                fromAmino(object: _187.QueryPerpetualMarketInfoRequestAmino): _187.QueryPerpetualMarketInfoRequest;
                toAmino(message: _187.QueryPerpetualMarketInfoRequest): _187.QueryPerpetualMarketInfoRequestAmino;
                fromAminoMsg(object: _187.QueryPerpetualMarketInfoRequestAminoMsg): _187.QueryPerpetualMarketInfoRequest;
                fromProtoMsg(message: _187.QueryPerpetualMarketInfoRequestProtoMsg): _187.QueryPerpetualMarketInfoRequest;
                toProto(message: _187.QueryPerpetualMarketInfoRequest): Uint8Array;
                toProtoMsg(message: _187.QueryPerpetualMarketInfoRequest): _187.QueryPerpetualMarketInfoRequestProtoMsg;
            };
            QueryPerpetualMarketInfoResponse: {
                typeUrl: string;
                encode(message: _187.QueryPerpetualMarketInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryPerpetualMarketInfoResponse;
                fromPartial(object: Partial<_187.QueryPerpetualMarketInfoResponse>): _187.QueryPerpetualMarketInfoResponse;
                fromAmino(object: _187.QueryPerpetualMarketInfoResponseAmino): _187.QueryPerpetualMarketInfoResponse;
                toAmino(message: _187.QueryPerpetualMarketInfoResponse): _187.QueryPerpetualMarketInfoResponseAmino;
                fromAminoMsg(object: _187.QueryPerpetualMarketInfoResponseAminoMsg): _187.QueryPerpetualMarketInfoResponse;
                fromProtoMsg(message: _187.QueryPerpetualMarketInfoResponseProtoMsg): _187.QueryPerpetualMarketInfoResponse;
                toProto(message: _187.QueryPerpetualMarketInfoResponse): Uint8Array;
                toProtoMsg(message: _187.QueryPerpetualMarketInfoResponse): _187.QueryPerpetualMarketInfoResponseProtoMsg;
            };
            QueryExpiryFuturesMarketInfoRequest: {
                typeUrl: string;
                encode(message: _187.QueryExpiryFuturesMarketInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryExpiryFuturesMarketInfoRequest;
                fromPartial(object: Partial<_187.QueryExpiryFuturesMarketInfoRequest>): _187.QueryExpiryFuturesMarketInfoRequest;
                fromAmino(object: _187.QueryExpiryFuturesMarketInfoRequestAmino): _187.QueryExpiryFuturesMarketInfoRequest;
                toAmino(message: _187.QueryExpiryFuturesMarketInfoRequest): _187.QueryExpiryFuturesMarketInfoRequestAmino;
                fromAminoMsg(object: _187.QueryExpiryFuturesMarketInfoRequestAminoMsg): _187.QueryExpiryFuturesMarketInfoRequest;
                fromProtoMsg(message: _187.QueryExpiryFuturesMarketInfoRequestProtoMsg): _187.QueryExpiryFuturesMarketInfoRequest;
                toProto(message: _187.QueryExpiryFuturesMarketInfoRequest): Uint8Array;
                toProtoMsg(message: _187.QueryExpiryFuturesMarketInfoRequest): _187.QueryExpiryFuturesMarketInfoRequestProtoMsg;
            };
            QueryExpiryFuturesMarketInfoResponse: {
                typeUrl: string;
                encode(message: _187.QueryExpiryFuturesMarketInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryExpiryFuturesMarketInfoResponse;
                fromPartial(object: Partial<_187.QueryExpiryFuturesMarketInfoResponse>): _187.QueryExpiryFuturesMarketInfoResponse;
                fromAmino(object: _187.QueryExpiryFuturesMarketInfoResponseAmino): _187.QueryExpiryFuturesMarketInfoResponse;
                toAmino(message: _187.QueryExpiryFuturesMarketInfoResponse): _187.QueryExpiryFuturesMarketInfoResponseAmino;
                fromAminoMsg(object: _187.QueryExpiryFuturesMarketInfoResponseAminoMsg): _187.QueryExpiryFuturesMarketInfoResponse;
                fromProtoMsg(message: _187.QueryExpiryFuturesMarketInfoResponseProtoMsg): _187.QueryExpiryFuturesMarketInfoResponse;
                toProto(message: _187.QueryExpiryFuturesMarketInfoResponse): Uint8Array;
                toProtoMsg(message: _187.QueryExpiryFuturesMarketInfoResponse): _187.QueryExpiryFuturesMarketInfoResponseProtoMsg;
            };
            QueryPerpetualMarketFundingRequest: {
                typeUrl: string;
                encode(message: _187.QueryPerpetualMarketFundingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryPerpetualMarketFundingRequest;
                fromPartial(object: Partial<_187.QueryPerpetualMarketFundingRequest>): _187.QueryPerpetualMarketFundingRequest;
                fromAmino(object: _187.QueryPerpetualMarketFundingRequestAmino): _187.QueryPerpetualMarketFundingRequest;
                toAmino(message: _187.QueryPerpetualMarketFundingRequest): _187.QueryPerpetualMarketFundingRequestAmino;
                fromAminoMsg(object: _187.QueryPerpetualMarketFundingRequestAminoMsg): _187.QueryPerpetualMarketFundingRequest;
                fromProtoMsg(message: _187.QueryPerpetualMarketFundingRequestProtoMsg): _187.QueryPerpetualMarketFundingRequest;
                toProto(message: _187.QueryPerpetualMarketFundingRequest): Uint8Array;
                toProtoMsg(message: _187.QueryPerpetualMarketFundingRequest): _187.QueryPerpetualMarketFundingRequestProtoMsg;
            };
            QueryPerpetualMarketFundingResponse: {
                typeUrl: string;
                encode(message: _187.QueryPerpetualMarketFundingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryPerpetualMarketFundingResponse;
                fromPartial(object: Partial<_187.QueryPerpetualMarketFundingResponse>): _187.QueryPerpetualMarketFundingResponse;
                fromAmino(object: _187.QueryPerpetualMarketFundingResponseAmino): _187.QueryPerpetualMarketFundingResponse;
                toAmino(message: _187.QueryPerpetualMarketFundingResponse): _187.QueryPerpetualMarketFundingResponseAmino;
                fromAminoMsg(object: _187.QueryPerpetualMarketFundingResponseAminoMsg): _187.QueryPerpetualMarketFundingResponse;
                fromProtoMsg(message: _187.QueryPerpetualMarketFundingResponseProtoMsg): _187.QueryPerpetualMarketFundingResponse;
                toProto(message: _187.QueryPerpetualMarketFundingResponse): Uint8Array;
                toProtoMsg(message: _187.QueryPerpetualMarketFundingResponse): _187.QueryPerpetualMarketFundingResponseProtoMsg;
            };
            QuerySubaccountOrderMetadataResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountOrderMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountOrderMetadataResponse;
                fromPartial(object: Partial<_187.QuerySubaccountOrderMetadataResponse>): _187.QuerySubaccountOrderMetadataResponse;
                fromAmino(object: _187.QuerySubaccountOrderMetadataResponseAmino): _187.QuerySubaccountOrderMetadataResponse;
                toAmino(message: _187.QuerySubaccountOrderMetadataResponse): _187.QuerySubaccountOrderMetadataResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountOrderMetadataResponseAminoMsg): _187.QuerySubaccountOrderMetadataResponse;
                fromProtoMsg(message: _187.QuerySubaccountOrderMetadataResponseProtoMsg): _187.QuerySubaccountOrderMetadataResponse;
                toProto(message: _187.QuerySubaccountOrderMetadataResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountOrderMetadataResponse): _187.QuerySubaccountOrderMetadataResponseProtoMsg;
            };
            QuerySubaccountTradeNonceResponse: {
                typeUrl: string;
                encode(message: _187.QuerySubaccountTradeNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QuerySubaccountTradeNonceResponse;
                fromPartial(object: Partial<_187.QuerySubaccountTradeNonceResponse>): _187.QuerySubaccountTradeNonceResponse;
                fromAmino(object: _187.QuerySubaccountTradeNonceResponseAmino): _187.QuerySubaccountTradeNonceResponse;
                toAmino(message: _187.QuerySubaccountTradeNonceResponse): _187.QuerySubaccountTradeNonceResponseAmino;
                fromAminoMsg(object: _187.QuerySubaccountTradeNonceResponseAminoMsg): _187.QuerySubaccountTradeNonceResponse;
                fromProtoMsg(message: _187.QuerySubaccountTradeNonceResponseProtoMsg): _187.QuerySubaccountTradeNonceResponse;
                toProto(message: _187.QuerySubaccountTradeNonceResponse): Uint8Array;
                toProtoMsg(message: _187.QuerySubaccountTradeNonceResponse): _187.QuerySubaccountTradeNonceResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _187.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryModuleStateRequest;
                fromPartial(_: Partial<_187.QueryModuleStateRequest>): _187.QueryModuleStateRequest;
                fromAmino(_: _187.QueryModuleStateRequestAmino): _187.QueryModuleStateRequest;
                toAmino(_: _187.QueryModuleStateRequest): _187.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _187.QueryModuleStateRequestAminoMsg): _187.QueryModuleStateRequest;
                fromProtoMsg(message: _187.QueryModuleStateRequestProtoMsg): _187.QueryModuleStateRequest;
                toProto(message: _187.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _187.QueryModuleStateRequest): _187.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _187.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryModuleStateResponse;
                fromPartial(object: Partial<_187.QueryModuleStateResponse>): _187.QueryModuleStateResponse;
                fromAmino(object: _187.QueryModuleStateResponseAmino): _187.QueryModuleStateResponse;
                toAmino(message: _187.QueryModuleStateResponse): _187.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _187.QueryModuleStateResponseAminoMsg): _187.QueryModuleStateResponse;
                fromProtoMsg(message: _187.QueryModuleStateResponseProtoMsg): _187.QueryModuleStateResponse;
                toProto(message: _187.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _187.QueryModuleStateResponse): _187.QueryModuleStateResponseProtoMsg;
            };
            QueryPositionsRequest: {
                typeUrl: string;
                encode(_: _187.QueryPositionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryPositionsRequest;
                fromPartial(_: Partial<_187.QueryPositionsRequest>): _187.QueryPositionsRequest;
                fromAmino(_: _187.QueryPositionsRequestAmino): _187.QueryPositionsRequest;
                toAmino(_: _187.QueryPositionsRequest): _187.QueryPositionsRequestAmino;
                fromAminoMsg(object: _187.QueryPositionsRequestAminoMsg): _187.QueryPositionsRequest;
                fromProtoMsg(message: _187.QueryPositionsRequestProtoMsg): _187.QueryPositionsRequest;
                toProto(message: _187.QueryPositionsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryPositionsRequest): _187.QueryPositionsRequestProtoMsg;
            };
            QueryPositionsResponse: {
                typeUrl: string;
                encode(message: _187.QueryPositionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryPositionsResponse;
                fromPartial(object: Partial<_187.QueryPositionsResponse>): _187.QueryPositionsResponse;
                fromAmino(object: _187.QueryPositionsResponseAmino): _187.QueryPositionsResponse;
                toAmino(message: _187.QueryPositionsResponse): _187.QueryPositionsResponseAmino;
                fromAminoMsg(object: _187.QueryPositionsResponseAminoMsg): _187.QueryPositionsResponse;
                fromProtoMsg(message: _187.QueryPositionsResponseProtoMsg): _187.QueryPositionsResponse;
                toProto(message: _187.QueryPositionsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryPositionsResponse): _187.QueryPositionsResponseProtoMsg;
            };
            QueryTradeRewardPointsRequest: {
                typeUrl: string;
                encode(message: _187.QueryTradeRewardPointsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTradeRewardPointsRequest;
                fromPartial(object: Partial<_187.QueryTradeRewardPointsRequest>): _187.QueryTradeRewardPointsRequest;
                fromAmino(object: _187.QueryTradeRewardPointsRequestAmino): _187.QueryTradeRewardPointsRequest;
                toAmino(message: _187.QueryTradeRewardPointsRequest): _187.QueryTradeRewardPointsRequestAmino;
                fromAminoMsg(object: _187.QueryTradeRewardPointsRequestAminoMsg): _187.QueryTradeRewardPointsRequest;
                fromProtoMsg(message: _187.QueryTradeRewardPointsRequestProtoMsg): _187.QueryTradeRewardPointsRequest;
                toProto(message: _187.QueryTradeRewardPointsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryTradeRewardPointsRequest): _187.QueryTradeRewardPointsRequestProtoMsg;
            };
            QueryTradeRewardPointsResponse: {
                typeUrl: string;
                encode(message: _187.QueryTradeRewardPointsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTradeRewardPointsResponse;
                fromPartial(object: Partial<_187.QueryTradeRewardPointsResponse>): _187.QueryTradeRewardPointsResponse;
                fromAmino(object: _187.QueryTradeRewardPointsResponseAmino): _187.QueryTradeRewardPointsResponse;
                toAmino(message: _187.QueryTradeRewardPointsResponse): _187.QueryTradeRewardPointsResponseAmino;
                fromAminoMsg(object: _187.QueryTradeRewardPointsResponseAminoMsg): _187.QueryTradeRewardPointsResponse;
                fromProtoMsg(message: _187.QueryTradeRewardPointsResponseProtoMsg): _187.QueryTradeRewardPointsResponse;
                toProto(message: _187.QueryTradeRewardPointsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryTradeRewardPointsResponse): _187.QueryTradeRewardPointsResponseProtoMsg;
            };
            QueryTradeRewardCampaignRequest: {
                typeUrl: string;
                encode(_: _187.QueryTradeRewardCampaignRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTradeRewardCampaignRequest;
                fromPartial(_: Partial<_187.QueryTradeRewardCampaignRequest>): _187.QueryTradeRewardCampaignRequest;
                fromAmino(_: _187.QueryTradeRewardCampaignRequestAmino): _187.QueryTradeRewardCampaignRequest;
                toAmino(_: _187.QueryTradeRewardCampaignRequest): _187.QueryTradeRewardCampaignRequestAmino;
                fromAminoMsg(object: _187.QueryTradeRewardCampaignRequestAminoMsg): _187.QueryTradeRewardCampaignRequest;
                fromProtoMsg(message: _187.QueryTradeRewardCampaignRequestProtoMsg): _187.QueryTradeRewardCampaignRequest;
                toProto(message: _187.QueryTradeRewardCampaignRequest): Uint8Array;
                toProtoMsg(message: _187.QueryTradeRewardCampaignRequest): _187.QueryTradeRewardCampaignRequestProtoMsg;
            };
            QueryTradeRewardCampaignResponse: {
                typeUrl: string;
                encode(message: _187.QueryTradeRewardCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTradeRewardCampaignResponse;
                fromPartial(object: Partial<_187.QueryTradeRewardCampaignResponse>): _187.QueryTradeRewardCampaignResponse;
                fromAmino(object: _187.QueryTradeRewardCampaignResponseAmino): _187.QueryTradeRewardCampaignResponse;
                toAmino(message: _187.QueryTradeRewardCampaignResponse): _187.QueryTradeRewardCampaignResponseAmino;
                fromAminoMsg(object: _187.QueryTradeRewardCampaignResponseAminoMsg): _187.QueryTradeRewardCampaignResponse;
                fromProtoMsg(message: _187.QueryTradeRewardCampaignResponseProtoMsg): _187.QueryTradeRewardCampaignResponse;
                toProto(message: _187.QueryTradeRewardCampaignResponse): Uint8Array;
                toProtoMsg(message: _187.QueryTradeRewardCampaignResponse): _187.QueryTradeRewardCampaignResponseProtoMsg;
            };
            QueryIsOptedOutOfRewardsRequest: {
                typeUrl: string;
                encode(message: _187.QueryIsOptedOutOfRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryIsOptedOutOfRewardsRequest;
                fromPartial(object: Partial<_187.QueryIsOptedOutOfRewardsRequest>): _187.QueryIsOptedOutOfRewardsRequest;
                fromAmino(object: _187.QueryIsOptedOutOfRewardsRequestAmino): _187.QueryIsOptedOutOfRewardsRequest;
                toAmino(message: _187.QueryIsOptedOutOfRewardsRequest): _187.QueryIsOptedOutOfRewardsRequestAmino;
                fromAminoMsg(object: _187.QueryIsOptedOutOfRewardsRequestAminoMsg): _187.QueryIsOptedOutOfRewardsRequest;
                fromProtoMsg(message: _187.QueryIsOptedOutOfRewardsRequestProtoMsg): _187.QueryIsOptedOutOfRewardsRequest;
                toProto(message: _187.QueryIsOptedOutOfRewardsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryIsOptedOutOfRewardsRequest): _187.QueryIsOptedOutOfRewardsRequestProtoMsg;
            };
            QueryIsOptedOutOfRewardsResponse: {
                typeUrl: string;
                encode(message: _187.QueryIsOptedOutOfRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryIsOptedOutOfRewardsResponse;
                fromPartial(object: Partial<_187.QueryIsOptedOutOfRewardsResponse>): _187.QueryIsOptedOutOfRewardsResponse;
                fromAmino(object: _187.QueryIsOptedOutOfRewardsResponseAmino): _187.QueryIsOptedOutOfRewardsResponse;
                toAmino(message: _187.QueryIsOptedOutOfRewardsResponse): _187.QueryIsOptedOutOfRewardsResponseAmino;
                fromAminoMsg(object: _187.QueryIsOptedOutOfRewardsResponseAminoMsg): _187.QueryIsOptedOutOfRewardsResponse;
                fromProtoMsg(message: _187.QueryIsOptedOutOfRewardsResponseProtoMsg): _187.QueryIsOptedOutOfRewardsResponse;
                toProto(message: _187.QueryIsOptedOutOfRewardsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryIsOptedOutOfRewardsResponse): _187.QueryIsOptedOutOfRewardsResponseProtoMsg;
            };
            QueryOptedOutOfRewardsAccountsRequest: {
                typeUrl: string;
                encode(_: _187.QueryOptedOutOfRewardsAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryOptedOutOfRewardsAccountsRequest;
                fromPartial(_: Partial<_187.QueryOptedOutOfRewardsAccountsRequest>): _187.QueryOptedOutOfRewardsAccountsRequest;
                fromAmino(_: _187.QueryOptedOutOfRewardsAccountsRequestAmino): _187.QueryOptedOutOfRewardsAccountsRequest;
                toAmino(_: _187.QueryOptedOutOfRewardsAccountsRequest): _187.QueryOptedOutOfRewardsAccountsRequestAmino;
                fromAminoMsg(object: _187.QueryOptedOutOfRewardsAccountsRequestAminoMsg): _187.QueryOptedOutOfRewardsAccountsRequest;
                fromProtoMsg(message: _187.QueryOptedOutOfRewardsAccountsRequestProtoMsg): _187.QueryOptedOutOfRewardsAccountsRequest;
                toProto(message: _187.QueryOptedOutOfRewardsAccountsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryOptedOutOfRewardsAccountsRequest): _187.QueryOptedOutOfRewardsAccountsRequestProtoMsg;
            };
            QueryOptedOutOfRewardsAccountsResponse: {
                typeUrl: string;
                encode(message: _187.QueryOptedOutOfRewardsAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryOptedOutOfRewardsAccountsResponse;
                fromPartial(object: Partial<_187.QueryOptedOutOfRewardsAccountsResponse>): _187.QueryOptedOutOfRewardsAccountsResponse;
                fromAmino(object: _187.QueryOptedOutOfRewardsAccountsResponseAmino): _187.QueryOptedOutOfRewardsAccountsResponse;
                toAmino(message: _187.QueryOptedOutOfRewardsAccountsResponse): _187.QueryOptedOutOfRewardsAccountsResponseAmino;
                fromAminoMsg(object: _187.QueryOptedOutOfRewardsAccountsResponseAminoMsg): _187.QueryOptedOutOfRewardsAccountsResponse;
                fromProtoMsg(message: _187.QueryOptedOutOfRewardsAccountsResponseProtoMsg): _187.QueryOptedOutOfRewardsAccountsResponse;
                toProto(message: _187.QueryOptedOutOfRewardsAccountsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryOptedOutOfRewardsAccountsResponse): _187.QueryOptedOutOfRewardsAccountsResponseProtoMsg;
            };
            QueryFeeDiscountAccountInfoRequest: {
                typeUrl: string;
                encode(message: _187.QueryFeeDiscountAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryFeeDiscountAccountInfoRequest;
                fromPartial(object: Partial<_187.QueryFeeDiscountAccountInfoRequest>): _187.QueryFeeDiscountAccountInfoRequest;
                fromAmino(object: _187.QueryFeeDiscountAccountInfoRequestAmino): _187.QueryFeeDiscountAccountInfoRequest;
                toAmino(message: _187.QueryFeeDiscountAccountInfoRequest): _187.QueryFeeDiscountAccountInfoRequestAmino;
                fromAminoMsg(object: _187.QueryFeeDiscountAccountInfoRequestAminoMsg): _187.QueryFeeDiscountAccountInfoRequest;
                fromProtoMsg(message: _187.QueryFeeDiscountAccountInfoRequestProtoMsg): _187.QueryFeeDiscountAccountInfoRequest;
                toProto(message: _187.QueryFeeDiscountAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _187.QueryFeeDiscountAccountInfoRequest): _187.QueryFeeDiscountAccountInfoRequestProtoMsg;
            };
            QueryFeeDiscountAccountInfoResponse: {
                typeUrl: string;
                encode(message: _187.QueryFeeDiscountAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryFeeDiscountAccountInfoResponse;
                fromPartial(object: Partial<_187.QueryFeeDiscountAccountInfoResponse>): _187.QueryFeeDiscountAccountInfoResponse;
                fromAmino(object: _187.QueryFeeDiscountAccountInfoResponseAmino): _187.QueryFeeDiscountAccountInfoResponse;
                toAmino(message: _187.QueryFeeDiscountAccountInfoResponse): _187.QueryFeeDiscountAccountInfoResponseAmino;
                fromAminoMsg(object: _187.QueryFeeDiscountAccountInfoResponseAminoMsg): _187.QueryFeeDiscountAccountInfoResponse;
                fromProtoMsg(message: _187.QueryFeeDiscountAccountInfoResponseProtoMsg): _187.QueryFeeDiscountAccountInfoResponse;
                toProto(message: _187.QueryFeeDiscountAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _187.QueryFeeDiscountAccountInfoResponse): _187.QueryFeeDiscountAccountInfoResponseProtoMsg;
            };
            QueryFeeDiscountScheduleRequest: {
                typeUrl: string;
                encode(_: _187.QueryFeeDiscountScheduleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryFeeDiscountScheduleRequest;
                fromPartial(_: Partial<_187.QueryFeeDiscountScheduleRequest>): _187.QueryFeeDiscountScheduleRequest;
                fromAmino(_: _187.QueryFeeDiscountScheduleRequestAmino): _187.QueryFeeDiscountScheduleRequest;
                toAmino(_: _187.QueryFeeDiscountScheduleRequest): _187.QueryFeeDiscountScheduleRequestAmino;
                fromAminoMsg(object: _187.QueryFeeDiscountScheduleRequestAminoMsg): _187.QueryFeeDiscountScheduleRequest;
                fromProtoMsg(message: _187.QueryFeeDiscountScheduleRequestProtoMsg): _187.QueryFeeDiscountScheduleRequest;
                toProto(message: _187.QueryFeeDiscountScheduleRequest): Uint8Array;
                toProtoMsg(message: _187.QueryFeeDiscountScheduleRequest): _187.QueryFeeDiscountScheduleRequestProtoMsg;
            };
            QueryFeeDiscountScheduleResponse: {
                typeUrl: string;
                encode(message: _187.QueryFeeDiscountScheduleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryFeeDiscountScheduleResponse;
                fromPartial(object: Partial<_187.QueryFeeDiscountScheduleResponse>): _187.QueryFeeDiscountScheduleResponse;
                fromAmino(object: _187.QueryFeeDiscountScheduleResponseAmino): _187.QueryFeeDiscountScheduleResponse;
                toAmino(message: _187.QueryFeeDiscountScheduleResponse): _187.QueryFeeDiscountScheduleResponseAmino;
                fromAminoMsg(object: _187.QueryFeeDiscountScheduleResponseAminoMsg): _187.QueryFeeDiscountScheduleResponse;
                fromProtoMsg(message: _187.QueryFeeDiscountScheduleResponseProtoMsg): _187.QueryFeeDiscountScheduleResponse;
                toProto(message: _187.QueryFeeDiscountScheduleResponse): Uint8Array;
                toProtoMsg(message: _187.QueryFeeDiscountScheduleResponse): _187.QueryFeeDiscountScheduleResponseProtoMsg;
            };
            QueryBalanceMismatchesRequest: {
                typeUrl: string;
                encode(message: _187.QueryBalanceMismatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryBalanceMismatchesRequest;
                fromPartial(object: Partial<_187.QueryBalanceMismatchesRequest>): _187.QueryBalanceMismatchesRequest;
                fromAmino(object: _187.QueryBalanceMismatchesRequestAmino): _187.QueryBalanceMismatchesRequest;
                toAmino(message: _187.QueryBalanceMismatchesRequest): _187.QueryBalanceMismatchesRequestAmino;
                fromAminoMsg(object: _187.QueryBalanceMismatchesRequestAminoMsg): _187.QueryBalanceMismatchesRequest;
                fromProtoMsg(message: _187.QueryBalanceMismatchesRequestProtoMsg): _187.QueryBalanceMismatchesRequest;
                toProto(message: _187.QueryBalanceMismatchesRequest): Uint8Array;
                toProtoMsg(message: _187.QueryBalanceMismatchesRequest): _187.QueryBalanceMismatchesRequestProtoMsg;
            };
            BalanceMismatch: {
                typeUrl: string;
                encode(message: _187.BalanceMismatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.BalanceMismatch;
                fromPartial(object: Partial<_187.BalanceMismatch>): _187.BalanceMismatch;
                fromAmino(object: _187.BalanceMismatchAmino): _187.BalanceMismatch;
                toAmino(message: _187.BalanceMismatch): _187.BalanceMismatchAmino;
                fromAminoMsg(object: _187.BalanceMismatchAminoMsg): _187.BalanceMismatch;
                fromProtoMsg(message: _187.BalanceMismatchProtoMsg): _187.BalanceMismatch;
                toProto(message: _187.BalanceMismatch): Uint8Array;
                toProtoMsg(message: _187.BalanceMismatch): _187.BalanceMismatchProtoMsg;
            };
            QueryBalanceMismatchesResponse: {
                typeUrl: string;
                encode(message: _187.QueryBalanceMismatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryBalanceMismatchesResponse;
                fromPartial(object: Partial<_187.QueryBalanceMismatchesResponse>): _187.QueryBalanceMismatchesResponse;
                fromAmino(object: _187.QueryBalanceMismatchesResponseAmino): _187.QueryBalanceMismatchesResponse;
                toAmino(message: _187.QueryBalanceMismatchesResponse): _187.QueryBalanceMismatchesResponseAmino;
                fromAminoMsg(object: _187.QueryBalanceMismatchesResponseAminoMsg): _187.QueryBalanceMismatchesResponse;
                fromProtoMsg(message: _187.QueryBalanceMismatchesResponseProtoMsg): _187.QueryBalanceMismatchesResponse;
                toProto(message: _187.QueryBalanceMismatchesResponse): Uint8Array;
                toProtoMsg(message: _187.QueryBalanceMismatchesResponse): _187.QueryBalanceMismatchesResponseProtoMsg;
            };
            QueryBalanceWithBalanceHoldsRequest: {
                typeUrl: string;
                encode(_: _187.QueryBalanceWithBalanceHoldsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryBalanceWithBalanceHoldsRequest;
                fromPartial(_: Partial<_187.QueryBalanceWithBalanceHoldsRequest>): _187.QueryBalanceWithBalanceHoldsRequest;
                fromAmino(_: _187.QueryBalanceWithBalanceHoldsRequestAmino): _187.QueryBalanceWithBalanceHoldsRequest;
                toAmino(_: _187.QueryBalanceWithBalanceHoldsRequest): _187.QueryBalanceWithBalanceHoldsRequestAmino;
                fromAminoMsg(object: _187.QueryBalanceWithBalanceHoldsRequestAminoMsg): _187.QueryBalanceWithBalanceHoldsRequest;
                fromProtoMsg(message: _187.QueryBalanceWithBalanceHoldsRequestProtoMsg): _187.QueryBalanceWithBalanceHoldsRequest;
                toProto(message: _187.QueryBalanceWithBalanceHoldsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryBalanceWithBalanceHoldsRequest): _187.QueryBalanceWithBalanceHoldsRequestProtoMsg;
            };
            BalanceWithMarginHold: {
                typeUrl: string;
                encode(message: _187.BalanceWithMarginHold, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.BalanceWithMarginHold;
                fromPartial(object: Partial<_187.BalanceWithMarginHold>): _187.BalanceWithMarginHold;
                fromAmino(object: _187.BalanceWithMarginHoldAmino): _187.BalanceWithMarginHold;
                toAmino(message: _187.BalanceWithMarginHold): _187.BalanceWithMarginHoldAmino;
                fromAminoMsg(object: _187.BalanceWithMarginHoldAminoMsg): _187.BalanceWithMarginHold;
                fromProtoMsg(message: _187.BalanceWithMarginHoldProtoMsg): _187.BalanceWithMarginHold;
                toProto(message: _187.BalanceWithMarginHold): Uint8Array;
                toProtoMsg(message: _187.BalanceWithMarginHold): _187.BalanceWithMarginHoldProtoMsg;
            };
            QueryBalanceWithBalanceHoldsResponse: {
                typeUrl: string;
                encode(message: _187.QueryBalanceWithBalanceHoldsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryBalanceWithBalanceHoldsResponse;
                fromPartial(object: Partial<_187.QueryBalanceWithBalanceHoldsResponse>): _187.QueryBalanceWithBalanceHoldsResponse;
                fromAmino(object: _187.QueryBalanceWithBalanceHoldsResponseAmino): _187.QueryBalanceWithBalanceHoldsResponse;
                toAmino(message: _187.QueryBalanceWithBalanceHoldsResponse): _187.QueryBalanceWithBalanceHoldsResponseAmino;
                fromAminoMsg(object: _187.QueryBalanceWithBalanceHoldsResponseAminoMsg): _187.QueryBalanceWithBalanceHoldsResponse;
                fromProtoMsg(message: _187.QueryBalanceWithBalanceHoldsResponseProtoMsg): _187.QueryBalanceWithBalanceHoldsResponse;
                toProto(message: _187.QueryBalanceWithBalanceHoldsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryBalanceWithBalanceHoldsResponse): _187.QueryBalanceWithBalanceHoldsResponseProtoMsg;
            };
            QueryFeeDiscountTierStatisticsRequest: {
                typeUrl: string;
                encode(_: _187.QueryFeeDiscountTierStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryFeeDiscountTierStatisticsRequest;
                fromPartial(_: Partial<_187.QueryFeeDiscountTierStatisticsRequest>): _187.QueryFeeDiscountTierStatisticsRequest;
                fromAmino(_: _187.QueryFeeDiscountTierStatisticsRequestAmino): _187.QueryFeeDiscountTierStatisticsRequest;
                toAmino(_: _187.QueryFeeDiscountTierStatisticsRequest): _187.QueryFeeDiscountTierStatisticsRequestAmino;
                fromAminoMsg(object: _187.QueryFeeDiscountTierStatisticsRequestAminoMsg): _187.QueryFeeDiscountTierStatisticsRequest;
                fromProtoMsg(message: _187.QueryFeeDiscountTierStatisticsRequestProtoMsg): _187.QueryFeeDiscountTierStatisticsRequest;
                toProto(message: _187.QueryFeeDiscountTierStatisticsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryFeeDiscountTierStatisticsRequest): _187.QueryFeeDiscountTierStatisticsRequestProtoMsg;
            };
            TierStatistic: {
                typeUrl: string;
                encode(message: _187.TierStatistic, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.TierStatistic;
                fromPartial(object: Partial<_187.TierStatistic>): _187.TierStatistic;
                fromAmino(object: _187.TierStatisticAmino): _187.TierStatistic;
                toAmino(message: _187.TierStatistic): _187.TierStatisticAmino;
                fromAminoMsg(object: _187.TierStatisticAminoMsg): _187.TierStatistic;
                fromProtoMsg(message: _187.TierStatisticProtoMsg): _187.TierStatistic;
                toProto(message: _187.TierStatistic): Uint8Array;
                toProtoMsg(message: _187.TierStatistic): _187.TierStatisticProtoMsg;
            };
            QueryFeeDiscountTierStatisticsResponse: {
                typeUrl: string;
                encode(message: _187.QueryFeeDiscountTierStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryFeeDiscountTierStatisticsResponse;
                fromPartial(object: Partial<_187.QueryFeeDiscountTierStatisticsResponse>): _187.QueryFeeDiscountTierStatisticsResponse;
                fromAmino(object: _187.QueryFeeDiscountTierStatisticsResponseAmino): _187.QueryFeeDiscountTierStatisticsResponse;
                toAmino(message: _187.QueryFeeDiscountTierStatisticsResponse): _187.QueryFeeDiscountTierStatisticsResponseAmino;
                fromAminoMsg(object: _187.QueryFeeDiscountTierStatisticsResponseAminoMsg): _187.QueryFeeDiscountTierStatisticsResponse;
                fromProtoMsg(message: _187.QueryFeeDiscountTierStatisticsResponseProtoMsg): _187.QueryFeeDiscountTierStatisticsResponse;
                toProto(message: _187.QueryFeeDiscountTierStatisticsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryFeeDiscountTierStatisticsResponse): _187.QueryFeeDiscountTierStatisticsResponseProtoMsg;
            };
            NinjaVaultInfosRequest: {
                typeUrl: string;
                encode(_: _187.NinjaVaultInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.NinjaVaultInfosRequest;
                fromPartial(_: Partial<_187.NinjaVaultInfosRequest>): _187.NinjaVaultInfosRequest;
                fromAmino(_: _187.NinjaVaultInfosRequestAmino): _187.NinjaVaultInfosRequest;
                toAmino(_: _187.NinjaVaultInfosRequest): _187.NinjaVaultInfosRequestAmino;
                fromAminoMsg(object: _187.NinjaVaultInfosRequestAminoMsg): _187.NinjaVaultInfosRequest;
                fromProtoMsg(message: _187.NinjaVaultInfosRequestProtoMsg): _187.NinjaVaultInfosRequest;
                toProto(message: _187.NinjaVaultInfosRequest): Uint8Array;
                toProtoMsg(message: _187.NinjaVaultInfosRequest): _187.NinjaVaultInfosRequestProtoMsg;
            };
            NinjaVaultInfosResponse: {
                typeUrl: string;
                encode(message: _187.NinjaVaultInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.NinjaVaultInfosResponse;
                fromPartial(object: Partial<_187.NinjaVaultInfosResponse>): _187.NinjaVaultInfosResponse;
                fromAmino(object: _187.NinjaVaultInfosResponseAmino): _187.NinjaVaultInfosResponse;
                toAmino(message: _187.NinjaVaultInfosResponse): _187.NinjaVaultInfosResponseAmino;
                fromAminoMsg(object: _187.NinjaVaultInfosResponseAminoMsg): _187.NinjaVaultInfosResponse;
                fromProtoMsg(message: _187.NinjaVaultInfosResponseProtoMsg): _187.NinjaVaultInfosResponse;
                toProto(message: _187.NinjaVaultInfosResponse): Uint8Array;
                toProtoMsg(message: _187.NinjaVaultInfosResponse): _187.NinjaVaultInfosResponseProtoMsg;
            };
            QueryMarketIDFromVaultRequest: {
                typeUrl: string;
                encode(message: _187.QueryMarketIDFromVaultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryMarketIDFromVaultRequest;
                fromPartial(object: Partial<_187.QueryMarketIDFromVaultRequest>): _187.QueryMarketIDFromVaultRequest;
                fromAmino(object: _187.QueryMarketIDFromVaultRequestAmino): _187.QueryMarketIDFromVaultRequest;
                toAmino(message: _187.QueryMarketIDFromVaultRequest): _187.QueryMarketIDFromVaultRequestAmino;
                fromAminoMsg(object: _187.QueryMarketIDFromVaultRequestAminoMsg): _187.QueryMarketIDFromVaultRequest;
                fromProtoMsg(message: _187.QueryMarketIDFromVaultRequestProtoMsg): _187.QueryMarketIDFromVaultRequest;
                toProto(message: _187.QueryMarketIDFromVaultRequest): Uint8Array;
                toProtoMsg(message: _187.QueryMarketIDFromVaultRequest): _187.QueryMarketIDFromVaultRequestProtoMsg;
            };
            QueryMarketIDFromVaultResponse: {
                typeUrl: string;
                encode(message: _187.QueryMarketIDFromVaultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryMarketIDFromVaultResponse;
                fromPartial(object: Partial<_187.QueryMarketIDFromVaultResponse>): _187.QueryMarketIDFromVaultResponse;
                fromAmino(object: _187.QueryMarketIDFromVaultResponseAmino): _187.QueryMarketIDFromVaultResponse;
                toAmino(message: _187.QueryMarketIDFromVaultResponse): _187.QueryMarketIDFromVaultResponseAmino;
                fromAminoMsg(object: _187.QueryMarketIDFromVaultResponseAminoMsg): _187.QueryMarketIDFromVaultResponse;
                fromProtoMsg(message: _187.QueryMarketIDFromVaultResponseProtoMsg): _187.QueryMarketIDFromVaultResponse;
                toProto(message: _187.QueryMarketIDFromVaultResponse): Uint8Array;
                toProtoMsg(message: _187.QueryMarketIDFromVaultResponse): _187.QueryMarketIDFromVaultResponseProtoMsg;
            };
            QueryHistoricalTradeRecordsRequest: {
                typeUrl: string;
                encode(message: _187.QueryHistoricalTradeRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryHistoricalTradeRecordsRequest;
                fromPartial(object: Partial<_187.QueryHistoricalTradeRecordsRequest>): _187.QueryHistoricalTradeRecordsRequest;
                fromAmino(object: _187.QueryHistoricalTradeRecordsRequestAmino): _187.QueryHistoricalTradeRecordsRequest;
                toAmino(message: _187.QueryHistoricalTradeRecordsRequest): _187.QueryHistoricalTradeRecordsRequestAmino;
                fromAminoMsg(object: _187.QueryHistoricalTradeRecordsRequestAminoMsg): _187.QueryHistoricalTradeRecordsRequest;
                fromProtoMsg(message: _187.QueryHistoricalTradeRecordsRequestProtoMsg): _187.QueryHistoricalTradeRecordsRequest;
                toProto(message: _187.QueryHistoricalTradeRecordsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryHistoricalTradeRecordsRequest): _187.QueryHistoricalTradeRecordsRequestProtoMsg;
            };
            QueryHistoricalTradeRecordsResponse: {
                typeUrl: string;
                encode(message: _187.QueryHistoricalTradeRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryHistoricalTradeRecordsResponse;
                fromPartial(object: Partial<_187.QueryHistoricalTradeRecordsResponse>): _187.QueryHistoricalTradeRecordsResponse;
                fromAmino(object: _187.QueryHistoricalTradeRecordsResponseAmino): _187.QueryHistoricalTradeRecordsResponse;
                toAmino(message: _187.QueryHistoricalTradeRecordsResponse): _187.QueryHistoricalTradeRecordsResponseAmino;
                fromAminoMsg(object: _187.QueryHistoricalTradeRecordsResponseAminoMsg): _187.QueryHistoricalTradeRecordsResponse;
                fromProtoMsg(message: _187.QueryHistoricalTradeRecordsResponseProtoMsg): _187.QueryHistoricalTradeRecordsResponse;
                toProto(message: _187.QueryHistoricalTradeRecordsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryHistoricalTradeRecordsResponse): _187.QueryHistoricalTradeRecordsResponseProtoMsg;
            };
            TradeHistoryOptions: {
                typeUrl: string;
                encode(message: _187.TradeHistoryOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.TradeHistoryOptions;
                fromPartial(object: Partial<_187.TradeHistoryOptions>): _187.TradeHistoryOptions;
                fromAmino(object: _187.TradeHistoryOptionsAmino): _187.TradeHistoryOptions;
                toAmino(message: _187.TradeHistoryOptions): _187.TradeHistoryOptionsAmino;
                fromAminoMsg(object: _187.TradeHistoryOptionsAminoMsg): _187.TradeHistoryOptions;
                fromProtoMsg(message: _187.TradeHistoryOptionsProtoMsg): _187.TradeHistoryOptions;
                toProto(message: _187.TradeHistoryOptions): Uint8Array;
                toProtoMsg(message: _187.TradeHistoryOptions): _187.TradeHistoryOptionsProtoMsg;
            };
            QueryMarketVolatilityRequest: {
                typeUrl: string;
                encode(message: _187.QueryMarketVolatilityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryMarketVolatilityRequest;
                fromPartial(object: Partial<_187.QueryMarketVolatilityRequest>): _187.QueryMarketVolatilityRequest;
                fromAmino(object: _187.QueryMarketVolatilityRequestAmino): _187.QueryMarketVolatilityRequest;
                toAmino(message: _187.QueryMarketVolatilityRequest): _187.QueryMarketVolatilityRequestAmino;
                fromAminoMsg(object: _187.QueryMarketVolatilityRequestAminoMsg): _187.QueryMarketVolatilityRequest;
                fromProtoMsg(message: _187.QueryMarketVolatilityRequestProtoMsg): _187.QueryMarketVolatilityRequest;
                toProto(message: _187.QueryMarketVolatilityRequest): Uint8Array;
                toProtoMsg(message: _187.QueryMarketVolatilityRequest): _187.QueryMarketVolatilityRequestProtoMsg;
            };
            QueryMarketVolatilityResponse: {
                typeUrl: string;
                encode(message: _187.QueryMarketVolatilityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryMarketVolatilityResponse;
                fromPartial(object: Partial<_187.QueryMarketVolatilityResponse>): _187.QueryMarketVolatilityResponse;
                fromAmino(object: _187.QueryMarketVolatilityResponseAmino): _187.QueryMarketVolatilityResponse;
                toAmino(message: _187.QueryMarketVolatilityResponse): _187.QueryMarketVolatilityResponseAmino;
                fromAminoMsg(object: _187.QueryMarketVolatilityResponseAminoMsg): _187.QueryMarketVolatilityResponse;
                fromProtoMsg(message: _187.QueryMarketVolatilityResponseProtoMsg): _187.QueryMarketVolatilityResponse;
                toProto(message: _187.QueryMarketVolatilityResponse): Uint8Array;
                toProtoMsg(message: _187.QueryMarketVolatilityResponse): _187.QueryMarketVolatilityResponseProtoMsg;
            };
            QueryBinaryMarketsRequest: {
                typeUrl: string;
                encode(message: _187.QueryBinaryMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryBinaryMarketsRequest;
                fromPartial(object: Partial<_187.QueryBinaryMarketsRequest>): _187.QueryBinaryMarketsRequest;
                fromAmino(object: _187.QueryBinaryMarketsRequestAmino): _187.QueryBinaryMarketsRequest;
                toAmino(message: _187.QueryBinaryMarketsRequest): _187.QueryBinaryMarketsRequestAmino;
                fromAminoMsg(object: _187.QueryBinaryMarketsRequestAminoMsg): _187.QueryBinaryMarketsRequest;
                fromProtoMsg(message: _187.QueryBinaryMarketsRequestProtoMsg): _187.QueryBinaryMarketsRequest;
                toProto(message: _187.QueryBinaryMarketsRequest): Uint8Array;
                toProtoMsg(message: _187.QueryBinaryMarketsRequest): _187.QueryBinaryMarketsRequestProtoMsg;
            };
            QueryBinaryMarketsResponse: {
                typeUrl: string;
                encode(message: _187.QueryBinaryMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryBinaryMarketsResponse;
                fromPartial(object: Partial<_187.QueryBinaryMarketsResponse>): _187.QueryBinaryMarketsResponse;
                fromAmino(object: _187.QueryBinaryMarketsResponseAmino): _187.QueryBinaryMarketsResponse;
                toAmino(message: _187.QueryBinaryMarketsResponse): _187.QueryBinaryMarketsResponseAmino;
                fromAminoMsg(object: _187.QueryBinaryMarketsResponseAminoMsg): _187.QueryBinaryMarketsResponse;
                fromProtoMsg(message: _187.QueryBinaryMarketsResponseProtoMsg): _187.QueryBinaryMarketsResponse;
                toProto(message: _187.QueryBinaryMarketsResponse): Uint8Array;
                toProtoMsg(message: _187.QueryBinaryMarketsResponse): _187.QueryBinaryMarketsResponseProtoMsg;
            };
            QueryTraderDerivativeConditionalOrdersRequest: {
                typeUrl: string;
                encode(message: _187.QueryTraderDerivativeConditionalOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderDerivativeConditionalOrdersRequest;
                fromPartial(object: Partial<_187.QueryTraderDerivativeConditionalOrdersRequest>): _187.QueryTraderDerivativeConditionalOrdersRequest;
                fromAmino(object: _187.QueryTraderDerivativeConditionalOrdersRequestAmino): _187.QueryTraderDerivativeConditionalOrdersRequest;
                toAmino(message: _187.QueryTraderDerivativeConditionalOrdersRequest): _187.QueryTraderDerivativeConditionalOrdersRequestAmino;
                fromAminoMsg(object: _187.QueryTraderDerivativeConditionalOrdersRequestAminoMsg): _187.QueryTraderDerivativeConditionalOrdersRequest;
                fromProtoMsg(message: _187.QueryTraderDerivativeConditionalOrdersRequestProtoMsg): _187.QueryTraderDerivativeConditionalOrdersRequest;
                toProto(message: _187.QueryTraderDerivativeConditionalOrdersRequest): Uint8Array;
                toProtoMsg(message: _187.QueryTraderDerivativeConditionalOrdersRequest): _187.QueryTraderDerivativeConditionalOrdersRequestProtoMsg;
            };
            TrimmedDerivativeConditionalOrder: {
                typeUrl: string;
                encode(message: _187.TrimmedDerivativeConditionalOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.TrimmedDerivativeConditionalOrder;
                fromPartial(object: Partial<_187.TrimmedDerivativeConditionalOrder>): _187.TrimmedDerivativeConditionalOrder;
                fromAmino(object: _187.TrimmedDerivativeConditionalOrderAmino): _187.TrimmedDerivativeConditionalOrder;
                toAmino(message: _187.TrimmedDerivativeConditionalOrder): _187.TrimmedDerivativeConditionalOrderAmino;
                fromAminoMsg(object: _187.TrimmedDerivativeConditionalOrderAminoMsg): _187.TrimmedDerivativeConditionalOrder;
                fromProtoMsg(message: _187.TrimmedDerivativeConditionalOrderProtoMsg): _187.TrimmedDerivativeConditionalOrder;
                toProto(message: _187.TrimmedDerivativeConditionalOrder): Uint8Array;
                toProtoMsg(message: _187.TrimmedDerivativeConditionalOrder): _187.TrimmedDerivativeConditionalOrderProtoMsg;
            };
            QueryTraderDerivativeConditionalOrdersResponse: {
                typeUrl: string;
                encode(message: _187.QueryTraderDerivativeConditionalOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _187.QueryTraderDerivativeConditionalOrdersResponse;
                fromPartial(object: Partial<_187.QueryTraderDerivativeConditionalOrdersResponse>): _187.QueryTraderDerivativeConditionalOrdersResponse;
                fromAmino(object: _187.QueryTraderDerivativeConditionalOrdersResponseAmino): _187.QueryTraderDerivativeConditionalOrdersResponse;
                toAmino(message: _187.QueryTraderDerivativeConditionalOrdersResponse): _187.QueryTraderDerivativeConditionalOrdersResponseAmino;
                fromAminoMsg(object: _187.QueryTraderDerivativeConditionalOrdersResponseAminoMsg): _187.QueryTraderDerivativeConditionalOrdersResponse;
                fromProtoMsg(message: _187.QueryTraderDerivativeConditionalOrdersResponseProtoMsg): _187.QueryTraderDerivativeConditionalOrdersResponse;
                toProto(message: _187.QueryTraderDerivativeConditionalOrdersResponse): Uint8Array;
                toProtoMsg(message: _187.QueryTraderDerivativeConditionalOrdersResponse): _187.QueryTraderDerivativeConditionalOrdersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _186.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.GenesisState;
                fromPartial(object: Partial<_186.GenesisState>): _186.GenesisState;
                fromAmino(object: _186.GenesisStateAmino): _186.GenesisState;
                toAmino(message: _186.GenesisState): _186.GenesisStateAmino;
                fromAminoMsg(object: _186.GenesisStateAminoMsg): _186.GenesisState;
                fromProtoMsg(message: _186.GenesisStateProtoMsg): _186.GenesisState;
                toProto(message: _186.GenesisState): Uint8Array;
                toProtoMsg(message: _186.GenesisState): _186.GenesisStateProtoMsg;
            };
            FeeDiscountAccountTierTTL: {
                typeUrl: string;
                encode(message: _186.FeeDiscountAccountTierTTL, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.FeeDiscountAccountTierTTL;
                fromPartial(object: Partial<_186.FeeDiscountAccountTierTTL>): _186.FeeDiscountAccountTierTTL;
                fromAmino(object: _186.FeeDiscountAccountTierTTLAmino): _186.FeeDiscountAccountTierTTL;
                toAmino(message: _186.FeeDiscountAccountTierTTL): _186.FeeDiscountAccountTierTTLAmino;
                fromAminoMsg(object: _186.FeeDiscountAccountTierTTLAminoMsg): _186.FeeDiscountAccountTierTTL;
                fromProtoMsg(message: _186.FeeDiscountAccountTierTTLProtoMsg): _186.FeeDiscountAccountTierTTL;
                toProto(message: _186.FeeDiscountAccountTierTTL): Uint8Array;
                toProtoMsg(message: _186.FeeDiscountAccountTierTTL): _186.FeeDiscountAccountTierTTLProtoMsg;
            };
            FeeDiscountBucketVolumeAccounts: {
                typeUrl: string;
                encode(message: _186.FeeDiscountBucketVolumeAccounts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.FeeDiscountBucketVolumeAccounts;
                fromPartial(object: Partial<_186.FeeDiscountBucketVolumeAccounts>): _186.FeeDiscountBucketVolumeAccounts;
                fromAmino(object: _186.FeeDiscountBucketVolumeAccountsAmino): _186.FeeDiscountBucketVolumeAccounts;
                toAmino(message: _186.FeeDiscountBucketVolumeAccounts): _186.FeeDiscountBucketVolumeAccountsAmino;
                fromAminoMsg(object: _186.FeeDiscountBucketVolumeAccountsAminoMsg): _186.FeeDiscountBucketVolumeAccounts;
                fromProtoMsg(message: _186.FeeDiscountBucketVolumeAccountsProtoMsg): _186.FeeDiscountBucketVolumeAccounts;
                toProto(message: _186.FeeDiscountBucketVolumeAccounts): Uint8Array;
                toProtoMsg(message: _186.FeeDiscountBucketVolumeAccounts): _186.FeeDiscountBucketVolumeAccountsProtoMsg;
            };
            AccountVolume: {
                typeUrl: string;
                encode(message: _186.AccountVolume, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.AccountVolume;
                fromPartial(object: Partial<_186.AccountVolume>): _186.AccountVolume;
                fromAmino(object: _186.AccountVolumeAmino): _186.AccountVolume;
                toAmino(message: _186.AccountVolume): _186.AccountVolumeAmino;
                fromAminoMsg(object: _186.AccountVolumeAminoMsg): _186.AccountVolume;
                fromProtoMsg(message: _186.AccountVolumeProtoMsg): _186.AccountVolume;
                toProto(message: _186.AccountVolume): Uint8Array;
                toProtoMsg(message: _186.AccountVolume): _186.AccountVolumeProtoMsg;
            };
            TradingRewardCampaignAccountPoints: {
                typeUrl: string;
                encode(message: _186.TradingRewardCampaignAccountPoints, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.TradingRewardCampaignAccountPoints;
                fromPartial(object: Partial<_186.TradingRewardCampaignAccountPoints>): _186.TradingRewardCampaignAccountPoints;
                fromAmino(object: _186.TradingRewardCampaignAccountPointsAmino): _186.TradingRewardCampaignAccountPoints;
                toAmino(message: _186.TradingRewardCampaignAccountPoints): _186.TradingRewardCampaignAccountPointsAmino;
                fromAminoMsg(object: _186.TradingRewardCampaignAccountPointsAminoMsg): _186.TradingRewardCampaignAccountPoints;
                fromProtoMsg(message: _186.TradingRewardCampaignAccountPointsProtoMsg): _186.TradingRewardCampaignAccountPoints;
                toProto(message: _186.TradingRewardCampaignAccountPoints): Uint8Array;
                toProtoMsg(message: _186.TradingRewardCampaignAccountPoints): _186.TradingRewardCampaignAccountPointsProtoMsg;
            };
            TradingRewardCampaignAccountPendingPoints: {
                typeUrl: string;
                encode(message: _186.TradingRewardCampaignAccountPendingPoints, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.TradingRewardCampaignAccountPendingPoints;
                fromPartial(object: Partial<_186.TradingRewardCampaignAccountPendingPoints>): _186.TradingRewardCampaignAccountPendingPoints;
                fromAmino(object: _186.TradingRewardCampaignAccountPendingPointsAmino): _186.TradingRewardCampaignAccountPendingPoints;
                toAmino(message: _186.TradingRewardCampaignAccountPendingPoints): _186.TradingRewardCampaignAccountPendingPointsAmino;
                fromAminoMsg(object: _186.TradingRewardCampaignAccountPendingPointsAminoMsg): _186.TradingRewardCampaignAccountPendingPoints;
                fromProtoMsg(message: _186.TradingRewardCampaignAccountPendingPointsProtoMsg): _186.TradingRewardCampaignAccountPendingPoints;
                toProto(message: _186.TradingRewardCampaignAccountPendingPoints): Uint8Array;
                toProtoMsg(message: _186.TradingRewardCampaignAccountPendingPoints): _186.TradingRewardCampaignAccountPendingPointsProtoMsg;
            };
            SpotOrderBook: {
                typeUrl: string;
                encode(message: _186.SpotOrderBook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.SpotOrderBook;
                fromPartial(object: Partial<_186.SpotOrderBook>): _186.SpotOrderBook;
                fromAmino(object: _186.SpotOrderBookAmino): _186.SpotOrderBook;
                toAmino(message: _186.SpotOrderBook): _186.SpotOrderBookAmino;
                fromAminoMsg(object: _186.SpotOrderBookAminoMsg): _186.SpotOrderBook;
                fromProtoMsg(message: _186.SpotOrderBookProtoMsg): _186.SpotOrderBook;
                toProto(message: _186.SpotOrderBook): Uint8Array;
                toProtoMsg(message: _186.SpotOrderBook): _186.SpotOrderBookProtoMsg;
            };
            DerivativeOrderBook: {
                typeUrl: string;
                encode(message: _186.DerivativeOrderBook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.DerivativeOrderBook;
                fromPartial(object: Partial<_186.DerivativeOrderBook>): _186.DerivativeOrderBook;
                fromAmino(object: _186.DerivativeOrderBookAmino): _186.DerivativeOrderBook;
                toAmino(message: _186.DerivativeOrderBook): _186.DerivativeOrderBookAmino;
                fromAminoMsg(object: _186.DerivativeOrderBookAminoMsg): _186.DerivativeOrderBook;
                fromProtoMsg(message: _186.DerivativeOrderBookProtoMsg): _186.DerivativeOrderBook;
                toProto(message: _186.DerivativeOrderBook): Uint8Array;
                toProtoMsg(message: _186.DerivativeOrderBook): _186.DerivativeOrderBookProtoMsg;
            };
            ConditionalDerivativeOrderBook: {
                typeUrl: string;
                encode(message: _186.ConditionalDerivativeOrderBook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.ConditionalDerivativeOrderBook;
                fromPartial(object: Partial<_186.ConditionalDerivativeOrderBook>): _186.ConditionalDerivativeOrderBook;
                fromAmino(object: _186.ConditionalDerivativeOrderBookAmino): _186.ConditionalDerivativeOrderBook;
                toAmino(message: _186.ConditionalDerivativeOrderBook): _186.ConditionalDerivativeOrderBookAmino;
                fromAminoMsg(object: _186.ConditionalDerivativeOrderBookAminoMsg): _186.ConditionalDerivativeOrderBook;
                fromProtoMsg(message: _186.ConditionalDerivativeOrderBookProtoMsg): _186.ConditionalDerivativeOrderBook;
                toProto(message: _186.ConditionalDerivativeOrderBook): Uint8Array;
                toProtoMsg(message: _186.ConditionalDerivativeOrderBook): _186.ConditionalDerivativeOrderBookProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _186.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.Balance;
                fromPartial(object: Partial<_186.Balance>): _186.Balance;
                fromAmino(object: _186.BalanceAmino): _186.Balance;
                toAmino(message: _186.Balance): _186.BalanceAmino;
                fromAminoMsg(object: _186.BalanceAminoMsg): _186.Balance;
                fromProtoMsg(message: _186.BalanceProtoMsg): _186.Balance;
                toProto(message: _186.Balance): Uint8Array;
                toProtoMsg(message: _186.Balance): _186.BalanceProtoMsg;
            };
            DerivativePosition: {
                typeUrl: string;
                encode(message: _186.DerivativePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.DerivativePosition;
                fromPartial(object: Partial<_186.DerivativePosition>): _186.DerivativePosition;
                fromAmino(object: _186.DerivativePositionAmino): _186.DerivativePosition;
                toAmino(message: _186.DerivativePosition): _186.DerivativePositionAmino;
                fromAminoMsg(object: _186.DerivativePositionAminoMsg): _186.DerivativePosition;
                fromProtoMsg(message: _186.DerivativePositionProtoMsg): _186.DerivativePosition;
                toProto(message: _186.DerivativePosition): Uint8Array;
                toProtoMsg(message: _186.DerivativePosition): _186.DerivativePositionProtoMsg;
            };
            SubaccountNonce: {
                typeUrl: string;
                encode(message: _186.SubaccountNonce, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.SubaccountNonce;
                fromPartial(object: Partial<_186.SubaccountNonce>): _186.SubaccountNonce;
                fromAmino(object: _186.SubaccountNonceAmino): _186.SubaccountNonce;
                toAmino(message: _186.SubaccountNonce): _186.SubaccountNonceAmino;
                fromAminoMsg(object: _186.SubaccountNonceAminoMsg): _186.SubaccountNonce;
                fromProtoMsg(message: _186.SubaccountNonceProtoMsg): _186.SubaccountNonce;
                toProto(message: _186.SubaccountNonce): Uint8Array;
                toProtoMsg(message: _186.SubaccountNonce): _186.SubaccountNonceProtoMsg;
            };
            ExpiryFuturesMarketInfoState: {
                typeUrl: string;
                encode(message: _186.ExpiryFuturesMarketInfoState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.ExpiryFuturesMarketInfoState;
                fromPartial(object: Partial<_186.ExpiryFuturesMarketInfoState>): _186.ExpiryFuturesMarketInfoState;
                fromAmino(object: _186.ExpiryFuturesMarketInfoStateAmino): _186.ExpiryFuturesMarketInfoState;
                toAmino(message: _186.ExpiryFuturesMarketInfoState): _186.ExpiryFuturesMarketInfoStateAmino;
                fromAminoMsg(object: _186.ExpiryFuturesMarketInfoStateAminoMsg): _186.ExpiryFuturesMarketInfoState;
                fromProtoMsg(message: _186.ExpiryFuturesMarketInfoStateProtoMsg): _186.ExpiryFuturesMarketInfoState;
                toProto(message: _186.ExpiryFuturesMarketInfoState): Uint8Array;
                toProtoMsg(message: _186.ExpiryFuturesMarketInfoState): _186.ExpiryFuturesMarketInfoStateProtoMsg;
            };
            PerpetualMarketFundingState: {
                typeUrl: string;
                encode(message: _186.PerpetualMarketFundingState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _186.PerpetualMarketFundingState;
                fromPartial(object: Partial<_186.PerpetualMarketFundingState>): _186.PerpetualMarketFundingState;
                fromAmino(object: _186.PerpetualMarketFundingStateAmino): _186.PerpetualMarketFundingState;
                toAmino(message: _186.PerpetualMarketFundingState): _186.PerpetualMarketFundingStateAmino;
                fromAminoMsg(object: _186.PerpetualMarketFundingStateAminoMsg): _186.PerpetualMarketFundingState;
                fromProtoMsg(message: _186.PerpetualMarketFundingStateProtoMsg): _186.PerpetualMarketFundingState;
                toProto(message: _186.PerpetualMarketFundingState): Uint8Array;
                toProtoMsg(message: _186.PerpetualMarketFundingState): _186.PerpetualMarketFundingStateProtoMsg;
            };
            marketStatusFromJSON(object: any): _185.MarketStatus;
            marketStatusToJSON(object: _185.MarketStatus): string;
            orderTypeFromJSON(object: any): _185.OrderType;
            orderTypeToJSON(object: _185.OrderType): string;
            executionTypeFromJSON(object: any): _185.ExecutionType;
            executionTypeToJSON(object: _185.ExecutionType): string;
            orderMaskFromJSON(object: any): _185.OrderMask;
            orderMaskToJSON(object: _185.OrderMask): string;
            MarketStatus: typeof _185.MarketStatus;
            MarketStatusSDKType: typeof _185.MarketStatus;
            MarketStatusAmino: typeof _185.MarketStatus;
            OrderType: typeof _185.OrderType;
            OrderTypeSDKType: typeof _185.OrderType;
            OrderTypeAmino: typeof _185.OrderType;
            ExecutionType: typeof _185.ExecutionType;
            ExecutionTypeSDKType: typeof _185.ExecutionType;
            ExecutionTypeAmino: typeof _185.ExecutionType;
            OrderMask: typeof _185.OrderMask;
            OrderMaskSDKType: typeof _185.OrderMask;
            OrderMaskAmino: typeof _185.OrderMask;
            Params: {
                typeUrl: string;
                encode(message: _185.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.Params;
                fromPartial(object: Partial<_185.Params>): _185.Params;
                fromAmino(object: _185.ParamsAmino): _185.Params;
                toAmino(message: _185.Params): _185.ParamsAmino;
                fromAminoMsg(object: _185.ParamsAminoMsg): _185.Params;
                fromProtoMsg(message: _185.ParamsProtoMsg): _185.Params;
                toProto(message: _185.Params): Uint8Array;
                toProtoMsg(message: _185.Params): _185.ParamsProtoMsg;
            };
            DerivativeMarket: {
                typeUrl: string;
                encode(message: _185.DerivativeMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.DerivativeMarket;
                fromPartial(object: Partial<_185.DerivativeMarket>): _185.DerivativeMarket;
                fromAmino(object: _185.DerivativeMarketAmino): _185.DerivativeMarket;
                toAmino(message: _185.DerivativeMarket): _185.DerivativeMarketAmino;
                fromAminoMsg(object: _185.DerivativeMarketAminoMsg): _185.DerivativeMarket;
                fromProtoMsg(message: _185.DerivativeMarketProtoMsg): _185.DerivativeMarket;
                toProto(message: _185.DerivativeMarket): Uint8Array;
                toProtoMsg(message: _185.DerivativeMarket): _185.DerivativeMarketProtoMsg;
            };
            BinaryOptionsMarket: {
                typeUrl: string;
                encode(message: _185.BinaryOptionsMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.BinaryOptionsMarket;
                fromPartial(object: Partial<_185.BinaryOptionsMarket>): _185.BinaryOptionsMarket;
                fromAmino(object: _185.BinaryOptionsMarketAmino): _185.BinaryOptionsMarket;
                toAmino(message: _185.BinaryOptionsMarket): _185.BinaryOptionsMarketAmino;
                fromAminoMsg(object: _185.BinaryOptionsMarketAminoMsg): _185.BinaryOptionsMarket;
                fromProtoMsg(message: _185.BinaryOptionsMarketProtoMsg): _185.BinaryOptionsMarket;
                toProto(message: _185.BinaryOptionsMarket): Uint8Array;
                toProtoMsg(message: _185.BinaryOptionsMarket): _185.BinaryOptionsMarketProtoMsg;
            };
            ExpiryFuturesMarketInfo: {
                typeUrl: string;
                encode(message: _185.ExpiryFuturesMarketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.ExpiryFuturesMarketInfo;
                fromPartial(object: Partial<_185.ExpiryFuturesMarketInfo>): _185.ExpiryFuturesMarketInfo;
                fromAmino(object: _185.ExpiryFuturesMarketInfoAmino): _185.ExpiryFuturesMarketInfo;
                toAmino(message: _185.ExpiryFuturesMarketInfo): _185.ExpiryFuturesMarketInfoAmino;
                fromAminoMsg(object: _185.ExpiryFuturesMarketInfoAminoMsg): _185.ExpiryFuturesMarketInfo;
                fromProtoMsg(message: _185.ExpiryFuturesMarketInfoProtoMsg): _185.ExpiryFuturesMarketInfo;
                toProto(message: _185.ExpiryFuturesMarketInfo): Uint8Array;
                toProtoMsg(message: _185.ExpiryFuturesMarketInfo): _185.ExpiryFuturesMarketInfoProtoMsg;
            };
            PerpetualMarketInfo: {
                typeUrl: string;
                encode(message: _185.PerpetualMarketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.PerpetualMarketInfo;
                fromPartial(object: Partial<_185.PerpetualMarketInfo>): _185.PerpetualMarketInfo;
                fromAmino(object: _185.PerpetualMarketInfoAmino): _185.PerpetualMarketInfo;
                toAmino(message: _185.PerpetualMarketInfo): _185.PerpetualMarketInfoAmino;
                fromAminoMsg(object: _185.PerpetualMarketInfoAminoMsg): _185.PerpetualMarketInfo;
                fromProtoMsg(message: _185.PerpetualMarketInfoProtoMsg): _185.PerpetualMarketInfo;
                toProto(message: _185.PerpetualMarketInfo): Uint8Array;
                toProtoMsg(message: _185.PerpetualMarketInfo): _185.PerpetualMarketInfoProtoMsg;
            };
            PerpetualMarketFunding: {
                typeUrl: string;
                encode(message: _185.PerpetualMarketFunding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.PerpetualMarketFunding;
                fromPartial(object: Partial<_185.PerpetualMarketFunding>): _185.PerpetualMarketFunding;
                fromAmino(object: _185.PerpetualMarketFundingAmino): _185.PerpetualMarketFunding;
                toAmino(message: _185.PerpetualMarketFunding): _185.PerpetualMarketFundingAmino;
                fromAminoMsg(object: _185.PerpetualMarketFundingAminoMsg): _185.PerpetualMarketFunding;
                fromProtoMsg(message: _185.PerpetualMarketFundingProtoMsg): _185.PerpetualMarketFunding;
                toProto(message: _185.PerpetualMarketFunding): Uint8Array;
                toProtoMsg(message: _185.PerpetualMarketFunding): _185.PerpetualMarketFundingProtoMsg;
            };
            DerivativeMarketSettlementInfo: {
                typeUrl: string;
                encode(message: _185.DerivativeMarketSettlementInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.DerivativeMarketSettlementInfo;
                fromPartial(object: Partial<_185.DerivativeMarketSettlementInfo>): _185.DerivativeMarketSettlementInfo;
                fromAmino(object: _185.DerivativeMarketSettlementInfoAmino): _185.DerivativeMarketSettlementInfo;
                toAmino(message: _185.DerivativeMarketSettlementInfo): _185.DerivativeMarketSettlementInfoAmino;
                fromAminoMsg(object: _185.DerivativeMarketSettlementInfoAminoMsg): _185.DerivativeMarketSettlementInfo;
                fromProtoMsg(message: _185.DerivativeMarketSettlementInfoProtoMsg): _185.DerivativeMarketSettlementInfo;
                toProto(message: _185.DerivativeMarketSettlementInfo): Uint8Array;
                toProtoMsg(message: _185.DerivativeMarketSettlementInfo): _185.DerivativeMarketSettlementInfoProtoMsg;
            };
            NextFundingTimestamp: {
                typeUrl: string;
                encode(message: _185.NextFundingTimestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.NextFundingTimestamp;
                fromPartial(object: Partial<_185.NextFundingTimestamp>): _185.NextFundingTimestamp;
                fromAmino(object: _185.NextFundingTimestampAmino): _185.NextFundingTimestamp;
                toAmino(message: _185.NextFundingTimestamp): _185.NextFundingTimestampAmino;
                fromAminoMsg(object: _185.NextFundingTimestampAminoMsg): _185.NextFundingTimestamp;
                fromProtoMsg(message: _185.NextFundingTimestampProtoMsg): _185.NextFundingTimestamp;
                toProto(message: _185.NextFundingTimestamp): Uint8Array;
                toProtoMsg(message: _185.NextFundingTimestamp): _185.NextFundingTimestampProtoMsg;
            };
            SpotMarket: {
                typeUrl: string;
                encode(message: _185.SpotMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SpotMarket;
                fromPartial(object: Partial<_185.SpotMarket>): _185.SpotMarket;
                fromAmino(object: _185.SpotMarketAmino): _185.SpotMarket;
                toAmino(message: _185.SpotMarket): _185.SpotMarketAmino;
                fromAminoMsg(object: _185.SpotMarketAminoMsg): _185.SpotMarket;
                fromProtoMsg(message: _185.SpotMarketProtoMsg): _185.SpotMarket;
                toProto(message: _185.SpotMarket): Uint8Array;
                toProtoMsg(message: _185.SpotMarket): _185.SpotMarketProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _185.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.Deposit;
                fromPartial(object: Partial<_185.Deposit>): _185.Deposit;
                fromAmino(object: _185.DepositAmino): _185.Deposit;
                toAmino(message: _185.Deposit): _185.DepositAmino;
                fromAminoMsg(object: _185.DepositAminoMsg): _185.Deposit;
                fromProtoMsg(message: _185.DepositProtoMsg): _185.Deposit;
                toProto(message: _185.Deposit): Uint8Array;
                toProtoMsg(message: _185.Deposit): _185.DepositProtoMsg;
            };
            SubaccountTradeNonce: {
                typeUrl: string;
                encode(message: _185.SubaccountTradeNonce, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SubaccountTradeNonce;
                fromPartial(object: Partial<_185.SubaccountTradeNonce>): _185.SubaccountTradeNonce;
                fromAmino(object: _185.SubaccountTradeNonceAmino): _185.SubaccountTradeNonce;
                toAmino(message: _185.SubaccountTradeNonce): _185.SubaccountTradeNonceAmino;
                fromAminoMsg(object: _185.SubaccountTradeNonceAminoMsg): _185.SubaccountTradeNonce;
                fromProtoMsg(message: _185.SubaccountTradeNonceProtoMsg): _185.SubaccountTradeNonce;
                toProto(message: _185.SubaccountTradeNonce): Uint8Array;
                toProtoMsg(message: _185.SubaccountTradeNonce): _185.SubaccountTradeNonceProtoMsg;
            };
            OrderInfo: {
                typeUrl: string;
                encode(message: _185.OrderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.OrderInfo;
                fromPartial(object: Partial<_185.OrderInfo>): _185.OrderInfo;
                fromAmino(object: _185.OrderInfoAmino): _185.OrderInfo;
                toAmino(message: _185.OrderInfo): _185.OrderInfoAmino;
                fromAminoMsg(object: _185.OrderInfoAminoMsg): _185.OrderInfo;
                fromProtoMsg(message: _185.OrderInfoProtoMsg): _185.OrderInfo;
                toProto(message: _185.OrderInfo): Uint8Array;
                toProtoMsg(message: _185.OrderInfo): _185.OrderInfoProtoMsg;
            };
            SpotOrder: {
                typeUrl: string;
                encode(message: _185.SpotOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SpotOrder;
                fromPartial(object: Partial<_185.SpotOrder>): _185.SpotOrder;
                fromAmino(object: _185.SpotOrderAmino): _185.SpotOrder;
                toAmino(message: _185.SpotOrder): _185.SpotOrderAmino;
                fromAminoMsg(object: _185.SpotOrderAminoMsg): _185.SpotOrder;
                fromProtoMsg(message: _185.SpotOrderProtoMsg): _185.SpotOrder;
                toProto(message: _185.SpotOrder): Uint8Array;
                toProtoMsg(message: _185.SpotOrder): _185.SpotOrderProtoMsg;
            };
            SpotLimitOrder: {
                typeUrl: string;
                encode(message: _185.SpotLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SpotLimitOrder;
                fromPartial(object: Partial<_185.SpotLimitOrder>): _185.SpotLimitOrder;
                fromAmino(object: _185.SpotLimitOrderAmino): _185.SpotLimitOrder;
                toAmino(message: _185.SpotLimitOrder): _185.SpotLimitOrderAmino;
                fromAminoMsg(object: _185.SpotLimitOrderAminoMsg): _185.SpotLimitOrder;
                fromProtoMsg(message: _185.SpotLimitOrderProtoMsg): _185.SpotLimitOrder;
                toProto(message: _185.SpotLimitOrder): Uint8Array;
                toProtoMsg(message: _185.SpotLimitOrder): _185.SpotLimitOrderProtoMsg;
            };
            SpotMarketOrder: {
                typeUrl: string;
                encode(message: _185.SpotMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SpotMarketOrder;
                fromPartial(object: Partial<_185.SpotMarketOrder>): _185.SpotMarketOrder;
                fromAmino(object: _185.SpotMarketOrderAmino): _185.SpotMarketOrder;
                toAmino(message: _185.SpotMarketOrder): _185.SpotMarketOrderAmino;
                fromAminoMsg(object: _185.SpotMarketOrderAminoMsg): _185.SpotMarketOrder;
                fromProtoMsg(message: _185.SpotMarketOrderProtoMsg): _185.SpotMarketOrder;
                toProto(message: _185.SpotMarketOrder): Uint8Array;
                toProtoMsg(message: _185.SpotMarketOrder): _185.SpotMarketOrderProtoMsg;
            };
            DerivativeOrder: {
                typeUrl: string;
                encode(message: _185.DerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.DerivativeOrder;
                fromPartial(object: Partial<_185.DerivativeOrder>): _185.DerivativeOrder;
                fromAmino(object: _185.DerivativeOrderAmino): _185.DerivativeOrder;
                toAmino(message: _185.DerivativeOrder): _185.DerivativeOrderAmino;
                fromAminoMsg(object: _185.DerivativeOrderAminoMsg): _185.DerivativeOrder;
                fromProtoMsg(message: _185.DerivativeOrderProtoMsg): _185.DerivativeOrder;
                toProto(message: _185.DerivativeOrder): Uint8Array;
                toProtoMsg(message: _185.DerivativeOrder): _185.DerivativeOrderProtoMsg;
            };
            SubaccountOrderbookMetadata: {
                typeUrl: string;
                encode(message: _185.SubaccountOrderbookMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SubaccountOrderbookMetadata;
                fromPartial(object: Partial<_185.SubaccountOrderbookMetadata>): _185.SubaccountOrderbookMetadata;
                fromAmino(object: _185.SubaccountOrderbookMetadataAmino): _185.SubaccountOrderbookMetadata;
                toAmino(message: _185.SubaccountOrderbookMetadata): _185.SubaccountOrderbookMetadataAmino;
                fromAminoMsg(object: _185.SubaccountOrderbookMetadataAminoMsg): _185.SubaccountOrderbookMetadata;
                fromProtoMsg(message: _185.SubaccountOrderbookMetadataProtoMsg): _185.SubaccountOrderbookMetadata;
                toProto(message: _185.SubaccountOrderbookMetadata): Uint8Array;
                toProtoMsg(message: _185.SubaccountOrderbookMetadata): _185.SubaccountOrderbookMetadataProtoMsg;
            };
            SubaccountOrder: {
                typeUrl: string;
                encode(message: _185.SubaccountOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SubaccountOrder;
                fromPartial(object: Partial<_185.SubaccountOrder>): _185.SubaccountOrder;
                fromAmino(object: _185.SubaccountOrderAmino): _185.SubaccountOrder;
                toAmino(message: _185.SubaccountOrder): _185.SubaccountOrderAmino;
                fromAminoMsg(object: _185.SubaccountOrderAminoMsg): _185.SubaccountOrder;
                fromProtoMsg(message: _185.SubaccountOrderProtoMsg): _185.SubaccountOrder;
                toProto(message: _185.SubaccountOrder): Uint8Array;
                toProtoMsg(message: _185.SubaccountOrder): _185.SubaccountOrderProtoMsg;
            };
            SubaccountOrderData: {
                typeUrl: string;
                encode(message: _185.SubaccountOrderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SubaccountOrderData;
                fromPartial(object: Partial<_185.SubaccountOrderData>): _185.SubaccountOrderData;
                fromAmino(object: _185.SubaccountOrderDataAmino): _185.SubaccountOrderData;
                toAmino(message: _185.SubaccountOrderData): _185.SubaccountOrderDataAmino;
                fromAminoMsg(object: _185.SubaccountOrderDataAminoMsg): _185.SubaccountOrderData;
                fromProtoMsg(message: _185.SubaccountOrderDataProtoMsg): _185.SubaccountOrderData;
                toProto(message: _185.SubaccountOrderData): Uint8Array;
                toProtoMsg(message: _185.SubaccountOrderData): _185.SubaccountOrderDataProtoMsg;
            };
            DerivativeLimitOrder: {
                typeUrl: string;
                encode(message: _185.DerivativeLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.DerivativeLimitOrder;
                fromPartial(object: Partial<_185.DerivativeLimitOrder>): _185.DerivativeLimitOrder;
                fromAmino(object: _185.DerivativeLimitOrderAmino): _185.DerivativeLimitOrder;
                toAmino(message: _185.DerivativeLimitOrder): _185.DerivativeLimitOrderAmino;
                fromAminoMsg(object: _185.DerivativeLimitOrderAminoMsg): _185.DerivativeLimitOrder;
                fromProtoMsg(message: _185.DerivativeLimitOrderProtoMsg): _185.DerivativeLimitOrder;
                toProto(message: _185.DerivativeLimitOrder): Uint8Array;
                toProtoMsg(message: _185.DerivativeLimitOrder): _185.DerivativeLimitOrderProtoMsg;
            };
            DerivativeMarketOrder: {
                typeUrl: string;
                encode(message: _185.DerivativeMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.DerivativeMarketOrder;
                fromPartial(object: Partial<_185.DerivativeMarketOrder>): _185.DerivativeMarketOrder;
                fromAmino(object: _185.DerivativeMarketOrderAmino): _185.DerivativeMarketOrder;
                toAmino(message: _185.DerivativeMarketOrder): _185.DerivativeMarketOrderAmino;
                fromAminoMsg(object: _185.DerivativeMarketOrderAminoMsg): _185.DerivativeMarketOrder;
                fromProtoMsg(message: _185.DerivativeMarketOrderProtoMsg): _185.DerivativeMarketOrder;
                toProto(message: _185.DerivativeMarketOrder): Uint8Array;
                toProtoMsg(message: _185.DerivativeMarketOrder): _185.DerivativeMarketOrderProtoMsg;
            };
            Position: {
                typeUrl: string;
                encode(message: _185.Position, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.Position;
                fromPartial(object: Partial<_185.Position>): _185.Position;
                fromAmino(object: _185.PositionAmino): _185.Position;
                toAmino(message: _185.Position): _185.PositionAmino;
                fromAminoMsg(object: _185.PositionAminoMsg): _185.Position;
                fromProtoMsg(message: _185.PositionProtoMsg): _185.Position;
                toProto(message: _185.Position): Uint8Array;
                toProtoMsg(message: _185.Position): _185.PositionProtoMsg;
            };
            MarketOrderIndicator: {
                typeUrl: string;
                encode(message: _185.MarketOrderIndicator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.MarketOrderIndicator;
                fromPartial(object: Partial<_185.MarketOrderIndicator>): _185.MarketOrderIndicator;
                fromAmino(object: _185.MarketOrderIndicatorAmino): _185.MarketOrderIndicator;
                toAmino(message: _185.MarketOrderIndicator): _185.MarketOrderIndicatorAmino;
                fromAminoMsg(object: _185.MarketOrderIndicatorAminoMsg): _185.MarketOrderIndicator;
                fromProtoMsg(message: _185.MarketOrderIndicatorProtoMsg): _185.MarketOrderIndicator;
                toProto(message: _185.MarketOrderIndicator): Uint8Array;
                toProtoMsg(message: _185.MarketOrderIndicator): _185.MarketOrderIndicatorProtoMsg;
            };
            TradeLog: {
                typeUrl: string;
                encode(message: _185.TradeLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.TradeLog;
                fromPartial(object: Partial<_185.TradeLog>): _185.TradeLog;
                fromAmino(object: _185.TradeLogAmino): _185.TradeLog;
                toAmino(message: _185.TradeLog): _185.TradeLogAmino;
                fromAminoMsg(object: _185.TradeLogAminoMsg): _185.TradeLog;
                fromProtoMsg(message: _185.TradeLogProtoMsg): _185.TradeLog;
                toProto(message: _185.TradeLog): Uint8Array;
                toProtoMsg(message: _185.TradeLog): _185.TradeLogProtoMsg;
            };
            PositionDelta: {
                typeUrl: string;
                encode(message: _185.PositionDelta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.PositionDelta;
                fromPartial(object: Partial<_185.PositionDelta>): _185.PositionDelta;
                fromAmino(object: _185.PositionDeltaAmino): _185.PositionDelta;
                toAmino(message: _185.PositionDelta): _185.PositionDeltaAmino;
                fromAminoMsg(object: _185.PositionDeltaAminoMsg): _185.PositionDelta;
                fromProtoMsg(message: _185.PositionDeltaProtoMsg): _185.PositionDelta;
                toProto(message: _185.PositionDelta): Uint8Array;
                toProtoMsg(message: _185.PositionDelta): _185.PositionDeltaProtoMsg;
            };
            DerivativeTradeLog: {
                typeUrl: string;
                encode(message: _185.DerivativeTradeLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.DerivativeTradeLog;
                fromPartial(object: Partial<_185.DerivativeTradeLog>): _185.DerivativeTradeLog;
                fromAmino(object: _185.DerivativeTradeLogAmino): _185.DerivativeTradeLog;
                toAmino(message: _185.DerivativeTradeLog): _185.DerivativeTradeLogAmino;
                fromAminoMsg(object: _185.DerivativeTradeLogAminoMsg): _185.DerivativeTradeLog;
                fromProtoMsg(message: _185.DerivativeTradeLogProtoMsg): _185.DerivativeTradeLog;
                toProto(message: _185.DerivativeTradeLog): Uint8Array;
                toProtoMsg(message: _185.DerivativeTradeLog): _185.DerivativeTradeLogProtoMsg;
            };
            SubaccountPosition: {
                typeUrl: string;
                encode(message: _185.SubaccountPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SubaccountPosition;
                fromPartial(object: Partial<_185.SubaccountPosition>): _185.SubaccountPosition;
                fromAmino(object: _185.SubaccountPositionAmino): _185.SubaccountPosition;
                toAmino(message: _185.SubaccountPosition): _185.SubaccountPositionAmino;
                fromAminoMsg(object: _185.SubaccountPositionAminoMsg): _185.SubaccountPosition;
                fromProtoMsg(message: _185.SubaccountPositionProtoMsg): _185.SubaccountPosition;
                toProto(message: _185.SubaccountPosition): Uint8Array;
                toProtoMsg(message: _185.SubaccountPosition): _185.SubaccountPositionProtoMsg;
            };
            SubaccountDeposit: {
                typeUrl: string;
                encode(message: _185.SubaccountDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SubaccountDeposit;
                fromPartial(object: Partial<_185.SubaccountDeposit>): _185.SubaccountDeposit;
                fromAmino(object: _185.SubaccountDepositAmino): _185.SubaccountDeposit;
                toAmino(message: _185.SubaccountDeposit): _185.SubaccountDepositAmino;
                fromAminoMsg(object: _185.SubaccountDepositAminoMsg): _185.SubaccountDeposit;
                fromProtoMsg(message: _185.SubaccountDepositProtoMsg): _185.SubaccountDeposit;
                toProto(message: _185.SubaccountDeposit): Uint8Array;
                toProtoMsg(message: _185.SubaccountDeposit): _185.SubaccountDepositProtoMsg;
            };
            DepositUpdate: {
                typeUrl: string;
                encode(message: _185.DepositUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.DepositUpdate;
                fromPartial(object: Partial<_185.DepositUpdate>): _185.DepositUpdate;
                fromAmino(object: _185.DepositUpdateAmino): _185.DepositUpdate;
                toAmino(message: _185.DepositUpdate): _185.DepositUpdateAmino;
                fromAminoMsg(object: _185.DepositUpdateAminoMsg): _185.DepositUpdate;
                fromProtoMsg(message: _185.DepositUpdateProtoMsg): _185.DepositUpdate;
                toProto(message: _185.DepositUpdate): Uint8Array;
                toProtoMsg(message: _185.DepositUpdate): _185.DepositUpdateProtoMsg;
            };
            PointsMultiplier: {
                typeUrl: string;
                encode(message: _185.PointsMultiplier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.PointsMultiplier;
                fromPartial(object: Partial<_185.PointsMultiplier>): _185.PointsMultiplier;
                fromAmino(object: _185.PointsMultiplierAmino): _185.PointsMultiplier;
                toAmino(message: _185.PointsMultiplier): _185.PointsMultiplierAmino;
                fromAminoMsg(object: _185.PointsMultiplierAminoMsg): _185.PointsMultiplier;
                fromProtoMsg(message: _185.PointsMultiplierProtoMsg): _185.PointsMultiplier;
                toProto(message: _185.PointsMultiplier): Uint8Array;
                toProtoMsg(message: _185.PointsMultiplier): _185.PointsMultiplierProtoMsg;
            };
            TradingRewardCampaignBoostInfo: {
                typeUrl: string;
                encode(message: _185.TradingRewardCampaignBoostInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.TradingRewardCampaignBoostInfo;
                fromPartial(object: Partial<_185.TradingRewardCampaignBoostInfo>): _185.TradingRewardCampaignBoostInfo;
                fromAmino(object: _185.TradingRewardCampaignBoostInfoAmino): _185.TradingRewardCampaignBoostInfo;
                toAmino(message: _185.TradingRewardCampaignBoostInfo): _185.TradingRewardCampaignBoostInfoAmino;
                fromAminoMsg(object: _185.TradingRewardCampaignBoostInfoAminoMsg): _185.TradingRewardCampaignBoostInfo;
                fromProtoMsg(message: _185.TradingRewardCampaignBoostInfoProtoMsg): _185.TradingRewardCampaignBoostInfo;
                toProto(message: _185.TradingRewardCampaignBoostInfo): Uint8Array;
                toProtoMsg(message: _185.TradingRewardCampaignBoostInfo): _185.TradingRewardCampaignBoostInfoProtoMsg;
            };
            CampaignRewardPool: {
                typeUrl: string;
                encode(message: _185.CampaignRewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.CampaignRewardPool;
                fromPartial(object: Partial<_185.CampaignRewardPool>): _185.CampaignRewardPool;
                fromAmino(object: _185.CampaignRewardPoolAmino): _185.CampaignRewardPool;
                toAmino(message: _185.CampaignRewardPool): _185.CampaignRewardPoolAmino;
                fromAminoMsg(object: _185.CampaignRewardPoolAminoMsg): _185.CampaignRewardPool;
                fromProtoMsg(message: _185.CampaignRewardPoolProtoMsg): _185.CampaignRewardPool;
                toProto(message: _185.CampaignRewardPool): Uint8Array;
                toProtoMsg(message: _185.CampaignRewardPool): _185.CampaignRewardPoolProtoMsg;
            };
            TradingRewardCampaignInfo: {
                typeUrl: string;
                encode(message: _185.TradingRewardCampaignInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.TradingRewardCampaignInfo;
                fromPartial(object: Partial<_185.TradingRewardCampaignInfo>): _185.TradingRewardCampaignInfo;
                fromAmino(object: _185.TradingRewardCampaignInfoAmino): _185.TradingRewardCampaignInfo;
                toAmino(message: _185.TradingRewardCampaignInfo): _185.TradingRewardCampaignInfoAmino;
                fromAminoMsg(object: _185.TradingRewardCampaignInfoAminoMsg): _185.TradingRewardCampaignInfo;
                fromProtoMsg(message: _185.TradingRewardCampaignInfoProtoMsg): _185.TradingRewardCampaignInfo;
                toProto(message: _185.TradingRewardCampaignInfo): Uint8Array;
                toProtoMsg(message: _185.TradingRewardCampaignInfo): _185.TradingRewardCampaignInfoProtoMsg;
            };
            FeeDiscountTierInfo: {
                typeUrl: string;
                encode(message: _185.FeeDiscountTierInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.FeeDiscountTierInfo;
                fromPartial(object: Partial<_185.FeeDiscountTierInfo>): _185.FeeDiscountTierInfo;
                fromAmino(object: _185.FeeDiscountTierInfoAmino): _185.FeeDiscountTierInfo;
                toAmino(message: _185.FeeDiscountTierInfo): _185.FeeDiscountTierInfoAmino;
                fromAminoMsg(object: _185.FeeDiscountTierInfoAminoMsg): _185.FeeDiscountTierInfo;
                fromProtoMsg(message: _185.FeeDiscountTierInfoProtoMsg): _185.FeeDiscountTierInfo;
                toProto(message: _185.FeeDiscountTierInfo): Uint8Array;
                toProtoMsg(message: _185.FeeDiscountTierInfo): _185.FeeDiscountTierInfoProtoMsg;
            };
            FeeDiscountSchedule: {
                typeUrl: string;
                encode(message: _185.FeeDiscountSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.FeeDiscountSchedule;
                fromPartial(object: Partial<_185.FeeDiscountSchedule>): _185.FeeDiscountSchedule;
                fromAmino(object: _185.FeeDiscountScheduleAmino): _185.FeeDiscountSchedule;
                toAmino(message: _185.FeeDiscountSchedule): _185.FeeDiscountScheduleAmino;
                fromAminoMsg(object: _185.FeeDiscountScheduleAminoMsg): _185.FeeDiscountSchedule;
                fromProtoMsg(message: _185.FeeDiscountScheduleProtoMsg): _185.FeeDiscountSchedule;
                toProto(message: _185.FeeDiscountSchedule): Uint8Array;
                toProtoMsg(message: _185.FeeDiscountSchedule): _185.FeeDiscountScheduleProtoMsg;
            };
            FeeDiscountTierTTL: {
                typeUrl: string;
                encode(message: _185.FeeDiscountTierTTL, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.FeeDiscountTierTTL;
                fromPartial(object: Partial<_185.FeeDiscountTierTTL>): _185.FeeDiscountTierTTL;
                fromAmino(object: _185.FeeDiscountTierTTLAmino): _185.FeeDiscountTierTTL;
                toAmino(message: _185.FeeDiscountTierTTL): _185.FeeDiscountTierTTLAmino;
                fromAminoMsg(object: _185.FeeDiscountTierTTLAminoMsg): _185.FeeDiscountTierTTL;
                fromProtoMsg(message: _185.FeeDiscountTierTTLProtoMsg): _185.FeeDiscountTierTTL;
                toProto(message: _185.FeeDiscountTierTTL): Uint8Array;
                toProtoMsg(message: _185.FeeDiscountTierTTL): _185.FeeDiscountTierTTLProtoMsg;
            };
            AccountRewards: {
                typeUrl: string;
                encode(message: _185.AccountRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.AccountRewards;
                fromPartial(object: Partial<_185.AccountRewards>): _185.AccountRewards;
                fromAmino(object: _185.AccountRewardsAmino): _185.AccountRewards;
                toAmino(message: _185.AccountRewards): _185.AccountRewardsAmino;
                fromAminoMsg(object: _185.AccountRewardsAminoMsg): _185.AccountRewards;
                fromProtoMsg(message: _185.AccountRewardsProtoMsg): _185.AccountRewards;
                toProto(message: _185.AccountRewards): Uint8Array;
                toProtoMsg(message: _185.AccountRewards): _185.AccountRewardsProtoMsg;
            };
            TradeRecords: {
                typeUrl: string;
                encode(message: _185.TradeRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.TradeRecords;
                fromPartial(object: Partial<_185.TradeRecords>): _185.TradeRecords;
                fromAmino(object: _185.TradeRecordsAmino): _185.TradeRecords;
                toAmino(message: _185.TradeRecords): _185.TradeRecordsAmino;
                fromAminoMsg(object: _185.TradeRecordsAminoMsg): _185.TradeRecords;
                fromProtoMsg(message: _185.TradeRecordsProtoMsg): _185.TradeRecords;
                toProto(message: _185.TradeRecords): Uint8Array;
                toProtoMsg(message: _185.TradeRecords): _185.TradeRecordsProtoMsg;
            };
            SubaccountIDs: {
                typeUrl: string;
                encode(message: _185.SubaccountIDs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.SubaccountIDs;
                fromPartial(object: Partial<_185.SubaccountIDs>): _185.SubaccountIDs;
                fromAmino(object: _185.SubaccountIDsAmino): _185.SubaccountIDs;
                toAmino(message: _185.SubaccountIDs): _185.SubaccountIDsAmino;
                fromAminoMsg(object: _185.SubaccountIDsAminoMsg): _185.SubaccountIDs;
                fromProtoMsg(message: _185.SubaccountIDsProtoMsg): _185.SubaccountIDs;
                toProto(message: _185.SubaccountIDs): Uint8Array;
                toProtoMsg(message: _185.SubaccountIDs): _185.SubaccountIDsProtoMsg;
            };
            TradeRecord: {
                typeUrl: string;
                encode(message: _185.TradeRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _185.TradeRecord;
                fromPartial(object: Partial<_185.TradeRecord>): _185.TradeRecord;
                fromAmino(object: _185.TradeRecordAmino): _185.TradeRecord;
                toAmino(message: _185.TradeRecord): _185.TradeRecordAmino;
                fromAminoMsg(object: _185.TradeRecordAminoMsg): _185.TradeRecord;
                fromProtoMsg(message: _185.TradeRecordProtoMsg): _185.TradeRecord;
                toProto(message: _185.TradeRecord): Uint8Array;
                toProtoMsg(message: _185.TradeRecord): _185.TradeRecordProtoMsg;
            };
            EventBatchSpotExecution: {
                typeUrl: string;
                encode(message: _184.EventBatchSpotExecution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventBatchSpotExecution;
                fromPartial(object: Partial<_184.EventBatchSpotExecution>): _184.EventBatchSpotExecution;
                fromAmino(object: _184.EventBatchSpotExecutionAmino): _184.EventBatchSpotExecution;
                toAmino(message: _184.EventBatchSpotExecution): _184.EventBatchSpotExecutionAmino;
                fromAminoMsg(object: _184.EventBatchSpotExecutionAminoMsg): _184.EventBatchSpotExecution;
                fromProtoMsg(message: _184.EventBatchSpotExecutionProtoMsg): _184.EventBatchSpotExecution;
                toProto(message: _184.EventBatchSpotExecution): Uint8Array;
                toProtoMsg(message: _184.EventBatchSpotExecution): _184.EventBatchSpotExecutionProtoMsg;
            };
            EventBatchDerivativeExecution: {
                typeUrl: string;
                encode(message: _184.EventBatchDerivativeExecution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventBatchDerivativeExecution;
                fromPartial(object: Partial<_184.EventBatchDerivativeExecution>): _184.EventBatchDerivativeExecution;
                fromAmino(object: _184.EventBatchDerivativeExecutionAmino): _184.EventBatchDerivativeExecution;
                toAmino(message: _184.EventBatchDerivativeExecution): _184.EventBatchDerivativeExecutionAmino;
                fromAminoMsg(object: _184.EventBatchDerivativeExecutionAminoMsg): _184.EventBatchDerivativeExecution;
                fromProtoMsg(message: _184.EventBatchDerivativeExecutionProtoMsg): _184.EventBatchDerivativeExecution;
                toProto(message: _184.EventBatchDerivativeExecution): Uint8Array;
                toProtoMsg(message: _184.EventBatchDerivativeExecution): _184.EventBatchDerivativeExecutionProtoMsg;
            };
            EventLostFundsFromLiquidation: {
                typeUrl: string;
                encode(message: _184.EventLostFundsFromLiquidation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventLostFundsFromLiquidation;
                fromPartial(object: Partial<_184.EventLostFundsFromLiquidation>): _184.EventLostFundsFromLiquidation;
                fromAmino(object: _184.EventLostFundsFromLiquidationAmino): _184.EventLostFundsFromLiquidation;
                toAmino(message: _184.EventLostFundsFromLiquidation): _184.EventLostFundsFromLiquidationAmino;
                fromAminoMsg(object: _184.EventLostFundsFromLiquidationAminoMsg): _184.EventLostFundsFromLiquidation;
                fromProtoMsg(message: _184.EventLostFundsFromLiquidationProtoMsg): _184.EventLostFundsFromLiquidation;
                toProto(message: _184.EventLostFundsFromLiquidation): Uint8Array;
                toProtoMsg(message: _184.EventLostFundsFromLiquidation): _184.EventLostFundsFromLiquidationProtoMsg;
            };
            EventBatchDerivativePosition: {
                typeUrl: string;
                encode(message: _184.EventBatchDerivativePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventBatchDerivativePosition;
                fromPartial(object: Partial<_184.EventBatchDerivativePosition>): _184.EventBatchDerivativePosition;
                fromAmino(object: _184.EventBatchDerivativePositionAmino): _184.EventBatchDerivativePosition;
                toAmino(message: _184.EventBatchDerivativePosition): _184.EventBatchDerivativePositionAmino;
                fromAminoMsg(object: _184.EventBatchDerivativePositionAminoMsg): _184.EventBatchDerivativePosition;
                fromProtoMsg(message: _184.EventBatchDerivativePositionProtoMsg): _184.EventBatchDerivativePosition;
                toProto(message: _184.EventBatchDerivativePosition): Uint8Array;
                toProtoMsg(message: _184.EventBatchDerivativePosition): _184.EventBatchDerivativePositionProtoMsg;
            };
            EventDerivativeMarketPaused: {
                typeUrl: string;
                encode(message: _184.EventDerivativeMarketPaused, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventDerivativeMarketPaused;
                fromPartial(object: Partial<_184.EventDerivativeMarketPaused>): _184.EventDerivativeMarketPaused;
                fromAmino(object: _184.EventDerivativeMarketPausedAmino): _184.EventDerivativeMarketPaused;
                toAmino(message: _184.EventDerivativeMarketPaused): _184.EventDerivativeMarketPausedAmino;
                fromAminoMsg(object: _184.EventDerivativeMarketPausedAminoMsg): _184.EventDerivativeMarketPaused;
                fromProtoMsg(message: _184.EventDerivativeMarketPausedProtoMsg): _184.EventDerivativeMarketPaused;
                toProto(message: _184.EventDerivativeMarketPaused): Uint8Array;
                toProtoMsg(message: _184.EventDerivativeMarketPaused): _184.EventDerivativeMarketPausedProtoMsg;
            };
            EventBinaryOptionsMarketUpdate: {
                typeUrl: string;
                encode(message: _184.EventBinaryOptionsMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventBinaryOptionsMarketUpdate;
                fromPartial(object: Partial<_184.EventBinaryOptionsMarketUpdate>): _184.EventBinaryOptionsMarketUpdate;
                fromAmino(object: _184.EventBinaryOptionsMarketUpdateAmino): _184.EventBinaryOptionsMarketUpdate;
                toAmino(message: _184.EventBinaryOptionsMarketUpdate): _184.EventBinaryOptionsMarketUpdateAmino;
                fromAminoMsg(object: _184.EventBinaryOptionsMarketUpdateAminoMsg): _184.EventBinaryOptionsMarketUpdate;
                fromProtoMsg(message: _184.EventBinaryOptionsMarketUpdateProtoMsg): _184.EventBinaryOptionsMarketUpdate;
                toProto(message: _184.EventBinaryOptionsMarketUpdate): Uint8Array;
                toProtoMsg(message: _184.EventBinaryOptionsMarketUpdate): _184.EventBinaryOptionsMarketUpdateProtoMsg;
            };
            EventNewSpotOrders: {
                typeUrl: string;
                encode(message: _184.EventNewSpotOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventNewSpotOrders;
                fromPartial(object: Partial<_184.EventNewSpotOrders>): _184.EventNewSpotOrders;
                fromAmino(object: _184.EventNewSpotOrdersAmino): _184.EventNewSpotOrders;
                toAmino(message: _184.EventNewSpotOrders): _184.EventNewSpotOrdersAmino;
                fromAminoMsg(object: _184.EventNewSpotOrdersAminoMsg): _184.EventNewSpotOrders;
                fromProtoMsg(message: _184.EventNewSpotOrdersProtoMsg): _184.EventNewSpotOrders;
                toProto(message: _184.EventNewSpotOrders): Uint8Array;
                toProtoMsg(message: _184.EventNewSpotOrders): _184.EventNewSpotOrdersProtoMsg;
            };
            EventNewDerivativeOrders: {
                typeUrl: string;
                encode(message: _184.EventNewDerivativeOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventNewDerivativeOrders;
                fromPartial(object: Partial<_184.EventNewDerivativeOrders>): _184.EventNewDerivativeOrders;
                fromAmino(object: _184.EventNewDerivativeOrdersAmino): _184.EventNewDerivativeOrders;
                toAmino(message: _184.EventNewDerivativeOrders): _184.EventNewDerivativeOrdersAmino;
                fromAminoMsg(object: _184.EventNewDerivativeOrdersAminoMsg): _184.EventNewDerivativeOrders;
                fromProtoMsg(message: _184.EventNewDerivativeOrdersProtoMsg): _184.EventNewDerivativeOrders;
                toProto(message: _184.EventNewDerivativeOrders): Uint8Array;
                toProtoMsg(message: _184.EventNewDerivativeOrders): _184.EventNewDerivativeOrdersProtoMsg;
            };
            EventCancelSpotOrder: {
                typeUrl: string;
                encode(message: _184.EventCancelSpotOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventCancelSpotOrder;
                fromPartial(object: Partial<_184.EventCancelSpotOrder>): _184.EventCancelSpotOrder;
                fromAmino(object: _184.EventCancelSpotOrderAmino): _184.EventCancelSpotOrder;
                toAmino(message: _184.EventCancelSpotOrder): _184.EventCancelSpotOrderAmino;
                fromAminoMsg(object: _184.EventCancelSpotOrderAminoMsg): _184.EventCancelSpotOrder;
                fromProtoMsg(message: _184.EventCancelSpotOrderProtoMsg): _184.EventCancelSpotOrder;
                toProto(message: _184.EventCancelSpotOrder): Uint8Array;
                toProtoMsg(message: _184.EventCancelSpotOrder): _184.EventCancelSpotOrderProtoMsg;
            };
            EventSpotMarketUpdate: {
                typeUrl: string;
                encode(message: _184.EventSpotMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventSpotMarketUpdate;
                fromPartial(object: Partial<_184.EventSpotMarketUpdate>): _184.EventSpotMarketUpdate;
                fromAmino(object: _184.EventSpotMarketUpdateAmino): _184.EventSpotMarketUpdate;
                toAmino(message: _184.EventSpotMarketUpdate): _184.EventSpotMarketUpdateAmino;
                fromAminoMsg(object: _184.EventSpotMarketUpdateAminoMsg): _184.EventSpotMarketUpdate;
                fromProtoMsg(message: _184.EventSpotMarketUpdateProtoMsg): _184.EventSpotMarketUpdate;
                toProto(message: _184.EventSpotMarketUpdate): Uint8Array;
                toProtoMsg(message: _184.EventSpotMarketUpdate): _184.EventSpotMarketUpdateProtoMsg;
            };
            EventPerpetualMarketUpdate: {
                typeUrl: string;
                encode(message: _184.EventPerpetualMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventPerpetualMarketUpdate;
                fromPartial(object: Partial<_184.EventPerpetualMarketUpdate>): _184.EventPerpetualMarketUpdate;
                fromAmino(object: _184.EventPerpetualMarketUpdateAmino): _184.EventPerpetualMarketUpdate;
                toAmino(message: _184.EventPerpetualMarketUpdate): _184.EventPerpetualMarketUpdateAmino;
                fromAminoMsg(object: _184.EventPerpetualMarketUpdateAminoMsg): _184.EventPerpetualMarketUpdate;
                fromProtoMsg(message: _184.EventPerpetualMarketUpdateProtoMsg): _184.EventPerpetualMarketUpdate;
                toProto(message: _184.EventPerpetualMarketUpdate): Uint8Array;
                toProtoMsg(message: _184.EventPerpetualMarketUpdate): _184.EventPerpetualMarketUpdateProtoMsg;
            };
            EventExpiryFuturesMarketUpdate: {
                typeUrl: string;
                encode(message: _184.EventExpiryFuturesMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventExpiryFuturesMarketUpdate;
                fromPartial(object: Partial<_184.EventExpiryFuturesMarketUpdate>): _184.EventExpiryFuturesMarketUpdate;
                fromAmino(object: _184.EventExpiryFuturesMarketUpdateAmino): _184.EventExpiryFuturesMarketUpdate;
                toAmino(message: _184.EventExpiryFuturesMarketUpdate): _184.EventExpiryFuturesMarketUpdateAmino;
                fromAminoMsg(object: _184.EventExpiryFuturesMarketUpdateAminoMsg): _184.EventExpiryFuturesMarketUpdate;
                fromProtoMsg(message: _184.EventExpiryFuturesMarketUpdateProtoMsg): _184.EventExpiryFuturesMarketUpdate;
                toProto(message: _184.EventExpiryFuturesMarketUpdate): Uint8Array;
                toProtoMsg(message: _184.EventExpiryFuturesMarketUpdate): _184.EventExpiryFuturesMarketUpdateProtoMsg;
            };
            EventPerpetualMarketFundingUpdate: {
                typeUrl: string;
                encode(message: _184.EventPerpetualMarketFundingUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventPerpetualMarketFundingUpdate;
                fromPartial(object: Partial<_184.EventPerpetualMarketFundingUpdate>): _184.EventPerpetualMarketFundingUpdate;
                fromAmino(object: _184.EventPerpetualMarketFundingUpdateAmino): _184.EventPerpetualMarketFundingUpdate;
                toAmino(message: _184.EventPerpetualMarketFundingUpdate): _184.EventPerpetualMarketFundingUpdateAmino;
                fromAminoMsg(object: _184.EventPerpetualMarketFundingUpdateAminoMsg): _184.EventPerpetualMarketFundingUpdate;
                fromProtoMsg(message: _184.EventPerpetualMarketFundingUpdateProtoMsg): _184.EventPerpetualMarketFundingUpdate;
                toProto(message: _184.EventPerpetualMarketFundingUpdate): Uint8Array;
                toProtoMsg(message: _184.EventPerpetualMarketFundingUpdate): _184.EventPerpetualMarketFundingUpdateProtoMsg;
            };
            EventSubaccountDeposit: {
                typeUrl: string;
                encode(message: _184.EventSubaccountDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventSubaccountDeposit;
                fromPartial(object: Partial<_184.EventSubaccountDeposit>): _184.EventSubaccountDeposit;
                fromAmino(object: _184.EventSubaccountDepositAmino): _184.EventSubaccountDeposit;
                toAmino(message: _184.EventSubaccountDeposit): _184.EventSubaccountDepositAmino;
                fromAminoMsg(object: _184.EventSubaccountDepositAminoMsg): _184.EventSubaccountDeposit;
                fromProtoMsg(message: _184.EventSubaccountDepositProtoMsg): _184.EventSubaccountDeposit;
                toProto(message: _184.EventSubaccountDeposit): Uint8Array;
                toProtoMsg(message: _184.EventSubaccountDeposit): _184.EventSubaccountDepositProtoMsg;
            };
            EventSubaccountWithdraw: {
                typeUrl: string;
                encode(message: _184.EventSubaccountWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventSubaccountWithdraw;
                fromPartial(object: Partial<_184.EventSubaccountWithdraw>): _184.EventSubaccountWithdraw;
                fromAmino(object: _184.EventSubaccountWithdrawAmino): _184.EventSubaccountWithdraw;
                toAmino(message: _184.EventSubaccountWithdraw): _184.EventSubaccountWithdrawAmino;
                fromAminoMsg(object: _184.EventSubaccountWithdrawAminoMsg): _184.EventSubaccountWithdraw;
                fromProtoMsg(message: _184.EventSubaccountWithdrawProtoMsg): _184.EventSubaccountWithdraw;
                toProto(message: _184.EventSubaccountWithdraw): Uint8Array;
                toProtoMsg(message: _184.EventSubaccountWithdraw): _184.EventSubaccountWithdrawProtoMsg;
            };
            EventSubaccountBalanceTransfer: {
                typeUrl: string;
                encode(message: _184.EventSubaccountBalanceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventSubaccountBalanceTransfer;
                fromPartial(object: Partial<_184.EventSubaccountBalanceTransfer>): _184.EventSubaccountBalanceTransfer;
                fromAmino(object: _184.EventSubaccountBalanceTransferAmino): _184.EventSubaccountBalanceTransfer;
                toAmino(message: _184.EventSubaccountBalanceTransfer): _184.EventSubaccountBalanceTransferAmino;
                fromAminoMsg(object: _184.EventSubaccountBalanceTransferAminoMsg): _184.EventSubaccountBalanceTransfer;
                fromProtoMsg(message: _184.EventSubaccountBalanceTransferProtoMsg): _184.EventSubaccountBalanceTransfer;
                toProto(message: _184.EventSubaccountBalanceTransfer): Uint8Array;
                toProtoMsg(message: _184.EventSubaccountBalanceTransfer): _184.EventSubaccountBalanceTransferProtoMsg;
            };
            EventBatchDepositUpdate: {
                typeUrl: string;
                encode(message: _184.EventBatchDepositUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventBatchDepositUpdate;
                fromPartial(object: Partial<_184.EventBatchDepositUpdate>): _184.EventBatchDepositUpdate;
                fromAmino(object: _184.EventBatchDepositUpdateAmino): _184.EventBatchDepositUpdate;
                toAmino(message: _184.EventBatchDepositUpdate): _184.EventBatchDepositUpdateAmino;
                fromAminoMsg(object: _184.EventBatchDepositUpdateAminoMsg): _184.EventBatchDepositUpdate;
                fromProtoMsg(message: _184.EventBatchDepositUpdateProtoMsg): _184.EventBatchDepositUpdate;
                toProto(message: _184.EventBatchDepositUpdate): Uint8Array;
                toProtoMsg(message: _184.EventBatchDepositUpdate): _184.EventBatchDepositUpdateProtoMsg;
            };
            DerivativeMarketOrderCancel: {
                typeUrl: string;
                encode(message: _184.DerivativeMarketOrderCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.DerivativeMarketOrderCancel;
                fromPartial(object: Partial<_184.DerivativeMarketOrderCancel>): _184.DerivativeMarketOrderCancel;
                fromAmino(object: _184.DerivativeMarketOrderCancelAmino): _184.DerivativeMarketOrderCancel;
                toAmino(message: _184.DerivativeMarketOrderCancel): _184.DerivativeMarketOrderCancelAmino;
                fromAminoMsg(object: _184.DerivativeMarketOrderCancelAminoMsg): _184.DerivativeMarketOrderCancel;
                fromProtoMsg(message: _184.DerivativeMarketOrderCancelProtoMsg): _184.DerivativeMarketOrderCancel;
                toProto(message: _184.DerivativeMarketOrderCancel): Uint8Array;
                toProtoMsg(message: _184.DerivativeMarketOrderCancel): _184.DerivativeMarketOrderCancelProtoMsg;
            };
            EventCancelDerivativeOrder: {
                typeUrl: string;
                encode(message: _184.EventCancelDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventCancelDerivativeOrder;
                fromPartial(object: Partial<_184.EventCancelDerivativeOrder>): _184.EventCancelDerivativeOrder;
                fromAmino(object: _184.EventCancelDerivativeOrderAmino): _184.EventCancelDerivativeOrder;
                toAmino(message: _184.EventCancelDerivativeOrder): _184.EventCancelDerivativeOrderAmino;
                fromAminoMsg(object: _184.EventCancelDerivativeOrderAminoMsg): _184.EventCancelDerivativeOrder;
                fromProtoMsg(message: _184.EventCancelDerivativeOrderProtoMsg): _184.EventCancelDerivativeOrder;
                toProto(message: _184.EventCancelDerivativeOrder): Uint8Array;
                toProtoMsg(message: _184.EventCancelDerivativeOrder): _184.EventCancelDerivativeOrderProtoMsg;
            };
            EventFeeDiscountSchedule: {
                typeUrl: string;
                encode(message: _184.EventFeeDiscountSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventFeeDiscountSchedule;
                fromPartial(object: Partial<_184.EventFeeDiscountSchedule>): _184.EventFeeDiscountSchedule;
                fromAmino(object: _184.EventFeeDiscountScheduleAmino): _184.EventFeeDiscountSchedule;
                toAmino(message: _184.EventFeeDiscountSchedule): _184.EventFeeDiscountScheduleAmino;
                fromAminoMsg(object: _184.EventFeeDiscountScheduleAminoMsg): _184.EventFeeDiscountSchedule;
                fromProtoMsg(message: _184.EventFeeDiscountScheduleProtoMsg): _184.EventFeeDiscountSchedule;
                toProto(message: _184.EventFeeDiscountSchedule): Uint8Array;
                toProtoMsg(message: _184.EventFeeDiscountSchedule): _184.EventFeeDiscountScheduleProtoMsg;
            };
            EventTradingRewardCampaignUpdate: {
                typeUrl: string;
                encode(message: _184.EventTradingRewardCampaignUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventTradingRewardCampaignUpdate;
                fromPartial(object: Partial<_184.EventTradingRewardCampaignUpdate>): _184.EventTradingRewardCampaignUpdate;
                fromAmino(object: _184.EventTradingRewardCampaignUpdateAmino): _184.EventTradingRewardCampaignUpdate;
                toAmino(message: _184.EventTradingRewardCampaignUpdate): _184.EventTradingRewardCampaignUpdateAmino;
                fromAminoMsg(object: _184.EventTradingRewardCampaignUpdateAminoMsg): _184.EventTradingRewardCampaignUpdate;
                fromProtoMsg(message: _184.EventTradingRewardCampaignUpdateProtoMsg): _184.EventTradingRewardCampaignUpdate;
                toProto(message: _184.EventTradingRewardCampaignUpdate): Uint8Array;
                toProtoMsg(message: _184.EventTradingRewardCampaignUpdate): _184.EventTradingRewardCampaignUpdateProtoMsg;
            };
            EventTradingRewardDistribution: {
                typeUrl: string;
                encode(message: _184.EventTradingRewardDistribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventTradingRewardDistribution;
                fromPartial(object: Partial<_184.EventTradingRewardDistribution>): _184.EventTradingRewardDistribution;
                fromAmino(object: _184.EventTradingRewardDistributionAmino): _184.EventTradingRewardDistribution;
                toAmino(message: _184.EventTradingRewardDistribution): _184.EventTradingRewardDistributionAmino;
                fromAminoMsg(object: _184.EventTradingRewardDistributionAminoMsg): _184.EventTradingRewardDistribution;
                fromProtoMsg(message: _184.EventTradingRewardDistributionProtoMsg): _184.EventTradingRewardDistribution;
                toProto(message: _184.EventTradingRewardDistribution): Uint8Array;
                toProtoMsg(message: _184.EventTradingRewardDistribution): _184.EventTradingRewardDistributionProtoMsg;
            };
            EventNewConditionalDerivativeOrder: {
                typeUrl: string;
                encode(message: _184.EventNewConditionalDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventNewConditionalDerivativeOrder;
                fromPartial(object: Partial<_184.EventNewConditionalDerivativeOrder>): _184.EventNewConditionalDerivativeOrder;
                fromAmino(object: _184.EventNewConditionalDerivativeOrderAmino): _184.EventNewConditionalDerivativeOrder;
                toAmino(message: _184.EventNewConditionalDerivativeOrder): _184.EventNewConditionalDerivativeOrderAmino;
                fromAminoMsg(object: _184.EventNewConditionalDerivativeOrderAminoMsg): _184.EventNewConditionalDerivativeOrder;
                fromProtoMsg(message: _184.EventNewConditionalDerivativeOrderProtoMsg): _184.EventNewConditionalDerivativeOrder;
                toProto(message: _184.EventNewConditionalDerivativeOrder): Uint8Array;
                toProtoMsg(message: _184.EventNewConditionalDerivativeOrder): _184.EventNewConditionalDerivativeOrderProtoMsg;
            };
            EventCancelConditionalDerivativeOrder: {
                typeUrl: string;
                encode(message: _184.EventCancelConditionalDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventCancelConditionalDerivativeOrder;
                fromPartial(object: Partial<_184.EventCancelConditionalDerivativeOrder>): _184.EventCancelConditionalDerivativeOrder;
                fromAmino(object: _184.EventCancelConditionalDerivativeOrderAmino): _184.EventCancelConditionalDerivativeOrder;
                toAmino(message: _184.EventCancelConditionalDerivativeOrder): _184.EventCancelConditionalDerivativeOrderAmino;
                fromAminoMsg(object: _184.EventCancelConditionalDerivativeOrderAminoMsg): _184.EventCancelConditionalDerivativeOrder;
                fromProtoMsg(message: _184.EventCancelConditionalDerivativeOrderProtoMsg): _184.EventCancelConditionalDerivativeOrder;
                toProto(message: _184.EventCancelConditionalDerivativeOrder): Uint8Array;
                toProtoMsg(message: _184.EventCancelConditionalDerivativeOrder): _184.EventCancelConditionalDerivativeOrderProtoMsg;
            };
            EventConditionalDerivativeOrderTrigger: {
                typeUrl: string;
                encode(message: _184.EventConditionalDerivativeOrderTrigger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventConditionalDerivativeOrderTrigger;
                fromPartial(object: Partial<_184.EventConditionalDerivativeOrderTrigger>): _184.EventConditionalDerivativeOrderTrigger;
                fromAmino(object: _184.EventConditionalDerivativeOrderTriggerAmino): _184.EventConditionalDerivativeOrderTrigger;
                toAmino(message: _184.EventConditionalDerivativeOrderTrigger): _184.EventConditionalDerivativeOrderTriggerAmino;
                fromAminoMsg(object: _184.EventConditionalDerivativeOrderTriggerAminoMsg): _184.EventConditionalDerivativeOrderTrigger;
                fromProtoMsg(message: _184.EventConditionalDerivativeOrderTriggerProtoMsg): _184.EventConditionalDerivativeOrderTrigger;
                toProto(message: _184.EventConditionalDerivativeOrderTrigger): Uint8Array;
                toProtoMsg(message: _184.EventConditionalDerivativeOrderTrigger): _184.EventConditionalDerivativeOrderTriggerProtoMsg;
            };
            EventOrderFail: {
                typeUrl: string;
                encode(message: _184.EventOrderFail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _184.EventOrderFail;
                fromPartial(object: Partial<_184.EventOrderFail>): _184.EventOrderFail;
                fromAmino(object: _184.EventOrderFailAmino): _184.EventOrderFail;
                toAmino(message: _184.EventOrderFail): _184.EventOrderFailAmino;
                fromAminoMsg(object: _184.EventOrderFailAminoMsg): _184.EventOrderFail;
                fromProtoMsg(message: _184.EventOrderFailProtoMsg): _184.EventOrderFail;
                toProto(message: _184.EventOrderFail): Uint8Array;
                toProtoMsg(message: _184.EventOrderFail): _184.EventOrderFailProtoMsg;
            };
            CreateSpotLimitOrderAuthz: {
                typeUrl: string;
                encode(message: _183.CreateSpotLimitOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.CreateSpotLimitOrderAuthz;
                fromPartial(object: Partial<_183.CreateSpotLimitOrderAuthz>): _183.CreateSpotLimitOrderAuthz;
                fromAmino(object: _183.CreateSpotLimitOrderAuthzAmino): _183.CreateSpotLimitOrderAuthz;
                toAmino(message: _183.CreateSpotLimitOrderAuthz): _183.CreateSpotLimitOrderAuthzAmino;
                fromAminoMsg(object: _183.CreateSpotLimitOrderAuthzAminoMsg): _183.CreateSpotLimitOrderAuthz;
                fromProtoMsg(message: _183.CreateSpotLimitOrderAuthzProtoMsg): _183.CreateSpotLimitOrderAuthz;
                toProto(message: _183.CreateSpotLimitOrderAuthz): Uint8Array;
                toProtoMsg(message: _183.CreateSpotLimitOrderAuthz): _183.CreateSpotLimitOrderAuthzProtoMsg;
            };
            CreateSpotMarketOrderAuthz: {
                typeUrl: string;
                encode(message: _183.CreateSpotMarketOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.CreateSpotMarketOrderAuthz;
                fromPartial(object: Partial<_183.CreateSpotMarketOrderAuthz>): _183.CreateSpotMarketOrderAuthz;
                fromAmino(object: _183.CreateSpotMarketOrderAuthzAmino): _183.CreateSpotMarketOrderAuthz;
                toAmino(message: _183.CreateSpotMarketOrderAuthz): _183.CreateSpotMarketOrderAuthzAmino;
                fromAminoMsg(object: _183.CreateSpotMarketOrderAuthzAminoMsg): _183.CreateSpotMarketOrderAuthz;
                fromProtoMsg(message: _183.CreateSpotMarketOrderAuthzProtoMsg): _183.CreateSpotMarketOrderAuthz;
                toProto(message: _183.CreateSpotMarketOrderAuthz): Uint8Array;
                toProtoMsg(message: _183.CreateSpotMarketOrderAuthz): _183.CreateSpotMarketOrderAuthzProtoMsg;
            };
            BatchCreateSpotLimitOrdersAuthz: {
                typeUrl: string;
                encode(message: _183.BatchCreateSpotLimitOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.BatchCreateSpotLimitOrdersAuthz;
                fromPartial(object: Partial<_183.BatchCreateSpotLimitOrdersAuthz>): _183.BatchCreateSpotLimitOrdersAuthz;
                fromAmino(object: _183.BatchCreateSpotLimitOrdersAuthzAmino): _183.BatchCreateSpotLimitOrdersAuthz;
                toAmino(message: _183.BatchCreateSpotLimitOrdersAuthz): _183.BatchCreateSpotLimitOrdersAuthzAmino;
                fromAminoMsg(object: _183.BatchCreateSpotLimitOrdersAuthzAminoMsg): _183.BatchCreateSpotLimitOrdersAuthz;
                fromProtoMsg(message: _183.BatchCreateSpotLimitOrdersAuthzProtoMsg): _183.BatchCreateSpotLimitOrdersAuthz;
                toProto(message: _183.BatchCreateSpotLimitOrdersAuthz): Uint8Array;
                toProtoMsg(message: _183.BatchCreateSpotLimitOrdersAuthz): _183.BatchCreateSpotLimitOrdersAuthzProtoMsg;
            };
            CancelSpotOrderAuthz: {
                typeUrl: string;
                encode(message: _183.CancelSpotOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.CancelSpotOrderAuthz;
                fromPartial(object: Partial<_183.CancelSpotOrderAuthz>): _183.CancelSpotOrderAuthz;
                fromAmino(object: _183.CancelSpotOrderAuthzAmino): _183.CancelSpotOrderAuthz;
                toAmino(message: _183.CancelSpotOrderAuthz): _183.CancelSpotOrderAuthzAmino;
                fromAminoMsg(object: _183.CancelSpotOrderAuthzAminoMsg): _183.CancelSpotOrderAuthz;
                fromProtoMsg(message: _183.CancelSpotOrderAuthzProtoMsg): _183.CancelSpotOrderAuthz;
                toProto(message: _183.CancelSpotOrderAuthz): Uint8Array;
                toProtoMsg(message: _183.CancelSpotOrderAuthz): _183.CancelSpotOrderAuthzProtoMsg;
            };
            BatchCancelSpotOrdersAuthz: {
                typeUrl: string;
                encode(message: _183.BatchCancelSpotOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.BatchCancelSpotOrdersAuthz;
                fromPartial(object: Partial<_183.BatchCancelSpotOrdersAuthz>): _183.BatchCancelSpotOrdersAuthz;
                fromAmino(object: _183.BatchCancelSpotOrdersAuthzAmino): _183.BatchCancelSpotOrdersAuthz;
                toAmino(message: _183.BatchCancelSpotOrdersAuthz): _183.BatchCancelSpotOrdersAuthzAmino;
                fromAminoMsg(object: _183.BatchCancelSpotOrdersAuthzAminoMsg): _183.BatchCancelSpotOrdersAuthz;
                fromProtoMsg(message: _183.BatchCancelSpotOrdersAuthzProtoMsg): _183.BatchCancelSpotOrdersAuthz;
                toProto(message: _183.BatchCancelSpotOrdersAuthz): Uint8Array;
                toProtoMsg(message: _183.BatchCancelSpotOrdersAuthz): _183.BatchCancelSpotOrdersAuthzProtoMsg;
            };
            CreateDerivativeLimitOrderAuthz: {
                typeUrl: string;
                encode(message: _183.CreateDerivativeLimitOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.CreateDerivativeLimitOrderAuthz;
                fromPartial(object: Partial<_183.CreateDerivativeLimitOrderAuthz>): _183.CreateDerivativeLimitOrderAuthz;
                fromAmino(object: _183.CreateDerivativeLimitOrderAuthzAmino): _183.CreateDerivativeLimitOrderAuthz;
                toAmino(message: _183.CreateDerivativeLimitOrderAuthz): _183.CreateDerivativeLimitOrderAuthzAmino;
                fromAminoMsg(object: _183.CreateDerivativeLimitOrderAuthzAminoMsg): _183.CreateDerivativeLimitOrderAuthz;
                fromProtoMsg(message: _183.CreateDerivativeLimitOrderAuthzProtoMsg): _183.CreateDerivativeLimitOrderAuthz;
                toProto(message: _183.CreateDerivativeLimitOrderAuthz): Uint8Array;
                toProtoMsg(message: _183.CreateDerivativeLimitOrderAuthz): _183.CreateDerivativeLimitOrderAuthzProtoMsg;
            };
            CreateDerivativeMarketOrderAuthz: {
                typeUrl: string;
                encode(message: _183.CreateDerivativeMarketOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.CreateDerivativeMarketOrderAuthz;
                fromPartial(object: Partial<_183.CreateDerivativeMarketOrderAuthz>): _183.CreateDerivativeMarketOrderAuthz;
                fromAmino(object: _183.CreateDerivativeMarketOrderAuthzAmino): _183.CreateDerivativeMarketOrderAuthz;
                toAmino(message: _183.CreateDerivativeMarketOrderAuthz): _183.CreateDerivativeMarketOrderAuthzAmino;
                fromAminoMsg(object: _183.CreateDerivativeMarketOrderAuthzAminoMsg): _183.CreateDerivativeMarketOrderAuthz;
                fromProtoMsg(message: _183.CreateDerivativeMarketOrderAuthzProtoMsg): _183.CreateDerivativeMarketOrderAuthz;
                toProto(message: _183.CreateDerivativeMarketOrderAuthz): Uint8Array;
                toProtoMsg(message: _183.CreateDerivativeMarketOrderAuthz): _183.CreateDerivativeMarketOrderAuthzProtoMsg;
            };
            BatchCreateDerivativeLimitOrdersAuthz: {
                typeUrl: string;
                encode(message: _183.BatchCreateDerivativeLimitOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.BatchCreateDerivativeLimitOrdersAuthz;
                fromPartial(object: Partial<_183.BatchCreateDerivativeLimitOrdersAuthz>): _183.BatchCreateDerivativeLimitOrdersAuthz;
                fromAmino(object: _183.BatchCreateDerivativeLimitOrdersAuthzAmino): _183.BatchCreateDerivativeLimitOrdersAuthz;
                toAmino(message: _183.BatchCreateDerivativeLimitOrdersAuthz): _183.BatchCreateDerivativeLimitOrdersAuthzAmino;
                fromAminoMsg(object: _183.BatchCreateDerivativeLimitOrdersAuthzAminoMsg): _183.BatchCreateDerivativeLimitOrdersAuthz;
                fromProtoMsg(message: _183.BatchCreateDerivativeLimitOrdersAuthzProtoMsg): _183.BatchCreateDerivativeLimitOrdersAuthz;
                toProto(message: _183.BatchCreateDerivativeLimitOrdersAuthz): Uint8Array;
                toProtoMsg(message: _183.BatchCreateDerivativeLimitOrdersAuthz): _183.BatchCreateDerivativeLimitOrdersAuthzProtoMsg;
            };
            CancelDerivativeOrderAuthz: {
                typeUrl: string;
                encode(message: _183.CancelDerivativeOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.CancelDerivativeOrderAuthz;
                fromPartial(object: Partial<_183.CancelDerivativeOrderAuthz>): _183.CancelDerivativeOrderAuthz;
                fromAmino(object: _183.CancelDerivativeOrderAuthzAmino): _183.CancelDerivativeOrderAuthz;
                toAmino(message: _183.CancelDerivativeOrderAuthz): _183.CancelDerivativeOrderAuthzAmino;
                fromAminoMsg(object: _183.CancelDerivativeOrderAuthzAminoMsg): _183.CancelDerivativeOrderAuthz;
                fromProtoMsg(message: _183.CancelDerivativeOrderAuthzProtoMsg): _183.CancelDerivativeOrderAuthz;
                toProto(message: _183.CancelDerivativeOrderAuthz): Uint8Array;
                toProtoMsg(message: _183.CancelDerivativeOrderAuthz): _183.CancelDerivativeOrderAuthzProtoMsg;
            };
            BatchCancelDerivativeOrdersAuthz: {
                typeUrl: string;
                encode(message: _183.BatchCancelDerivativeOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.BatchCancelDerivativeOrdersAuthz;
                fromPartial(object: Partial<_183.BatchCancelDerivativeOrdersAuthz>): _183.BatchCancelDerivativeOrdersAuthz;
                fromAmino(object: _183.BatchCancelDerivativeOrdersAuthzAmino): _183.BatchCancelDerivativeOrdersAuthz;
                toAmino(message: _183.BatchCancelDerivativeOrdersAuthz): _183.BatchCancelDerivativeOrdersAuthzAmino;
                fromAminoMsg(object: _183.BatchCancelDerivativeOrdersAuthzAminoMsg): _183.BatchCancelDerivativeOrdersAuthz;
                fromProtoMsg(message: _183.BatchCancelDerivativeOrdersAuthzProtoMsg): _183.BatchCancelDerivativeOrdersAuthz;
                toProto(message: _183.BatchCancelDerivativeOrdersAuthz): Uint8Array;
                toProtoMsg(message: _183.BatchCancelDerivativeOrdersAuthz): _183.BatchCancelDerivativeOrdersAuthzProtoMsg;
            };
            BatchUpdateOrdersAuthz: {
                typeUrl: string;
                encode(message: _183.BatchUpdateOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _183.BatchUpdateOrdersAuthz;
                fromPartial(object: Partial<_183.BatchUpdateOrdersAuthz>): _183.BatchUpdateOrdersAuthz;
                fromAmino(object: _183.BatchUpdateOrdersAuthzAmino): _183.BatchUpdateOrdersAuthz;
                toAmino(message: _183.BatchUpdateOrdersAuthz): _183.BatchUpdateOrdersAuthzAmino;
                fromAminoMsg(object: _183.BatchUpdateOrdersAuthzAminoMsg): _183.BatchUpdateOrdersAuthz;
                fromProtoMsg(message: _183.BatchUpdateOrdersAuthzProtoMsg): _183.BatchUpdateOrdersAuthz;
                toProto(message: _183.BatchUpdateOrdersAuthz): Uint8Array;
                toProtoMsg(message: _183.BatchUpdateOrdersAuthz): _183.BatchUpdateOrdersAuthzProtoMsg;
            };
        };
    }
    namespace insurance {
        const v1beta1: {
            MsgClientImpl: typeof _493.MsgClientImpl;
            QueryClientImpl: typeof _486.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                insuranceParams(request?: _191.QueryInsuranceParamsRequest): Promise<_191.QueryInsuranceParamsResponse>;
                insuranceFund(request: _191.QueryInsuranceFundRequest): Promise<_191.QueryInsuranceFundResponse>;
                insuranceFunds(request?: _191.QueryInsuranceFundsRequest): Promise<_191.QueryInsuranceFundsResponse>;
                estimatedRedemptions(request: _191.QueryEstimatedRedemptionsRequest): Promise<_191.QueryEstimatedRedemptionsResponse>;
                pendingRedemptions(request: _191.QueryPendingRedemptionsRequest): Promise<_191.QueryPendingRedemptionsResponse>;
                insuranceModuleState(request?: _191.QueryModuleStateRequest): Promise<_191.QueryModuleStateResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createInsuranceFund(value: _192.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    underwrite(value: _192.MsgUnderwrite): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestRedemption(value: _192.MsgRequestRedemption): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createInsuranceFund(value: _192.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _192.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _192.MsgUnderwrite): {
                        typeUrl: string;
                        value: _192.MsgUnderwrite;
                    };
                    requestRedemption(value: _192.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _192.MsgRequestRedemption;
                    };
                };
                fromPartial: {
                    createInsuranceFund(value: _192.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _192.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _192.MsgUnderwrite): {
                        typeUrl: string;
                        value: _192.MsgUnderwrite;
                    };
                    requestRedemption(value: _192.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _192.MsgRequestRedemption;
                    };
                };
            };
            AminoConverter: {
                "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
                    aminoType: string;
                    toAmino: (message: _192.MsgCreateInsuranceFund) => _192.MsgCreateInsuranceFundAmino;
                    fromAmino: (object: _192.MsgCreateInsuranceFundAmino) => _192.MsgCreateInsuranceFund;
                };
                "/injective.insurance.v1beta1.MsgUnderwrite": {
                    aminoType: string;
                    toAmino: (message: _192.MsgUnderwrite) => _192.MsgUnderwriteAmino;
                    fromAmino: (object: _192.MsgUnderwriteAmino) => _192.MsgUnderwrite;
                };
                "/injective.insurance.v1beta1.MsgRequestRedemption": {
                    aminoType: string;
                    toAmino: (message: _192.MsgRequestRedemption) => _192.MsgRequestRedemptionAmino;
                    fromAmino: (object: _192.MsgRequestRedemptionAmino) => _192.MsgRequestRedemption;
                };
            };
            MsgCreateInsuranceFund: {
                typeUrl: string;
                encode(message: _192.MsgCreateInsuranceFund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _192.MsgCreateInsuranceFund;
                fromPartial(object: Partial<_192.MsgCreateInsuranceFund>): _192.MsgCreateInsuranceFund;
                fromAmino(object: _192.MsgCreateInsuranceFundAmino): _192.MsgCreateInsuranceFund;
                toAmino(message: _192.MsgCreateInsuranceFund): _192.MsgCreateInsuranceFundAmino;
                fromAminoMsg(object: _192.MsgCreateInsuranceFundAminoMsg): _192.MsgCreateInsuranceFund;
                fromProtoMsg(message: _192.MsgCreateInsuranceFundProtoMsg): _192.MsgCreateInsuranceFund;
                toProto(message: _192.MsgCreateInsuranceFund): Uint8Array;
                toProtoMsg(message: _192.MsgCreateInsuranceFund): _192.MsgCreateInsuranceFundProtoMsg;
            };
            MsgCreateInsuranceFundResponse: {
                typeUrl: string;
                encode(_: _192.MsgCreateInsuranceFundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _192.MsgCreateInsuranceFundResponse;
                fromPartial(_: Partial<_192.MsgCreateInsuranceFundResponse>): _192.MsgCreateInsuranceFundResponse;
                fromAmino(_: _192.MsgCreateInsuranceFundResponseAmino): _192.MsgCreateInsuranceFundResponse;
                toAmino(_: _192.MsgCreateInsuranceFundResponse): _192.MsgCreateInsuranceFundResponseAmino;
                fromAminoMsg(object: _192.MsgCreateInsuranceFundResponseAminoMsg): _192.MsgCreateInsuranceFundResponse;
                fromProtoMsg(message: _192.MsgCreateInsuranceFundResponseProtoMsg): _192.MsgCreateInsuranceFundResponse;
                toProto(message: _192.MsgCreateInsuranceFundResponse): Uint8Array;
                toProtoMsg(message: _192.MsgCreateInsuranceFundResponse): _192.MsgCreateInsuranceFundResponseProtoMsg;
            };
            MsgUnderwrite: {
                typeUrl: string;
                encode(message: _192.MsgUnderwrite, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _192.MsgUnderwrite;
                fromPartial(object: Partial<_192.MsgUnderwrite>): _192.MsgUnderwrite;
                fromAmino(object: _192.MsgUnderwriteAmino): _192.MsgUnderwrite;
                toAmino(message: _192.MsgUnderwrite): _192.MsgUnderwriteAmino;
                fromAminoMsg(object: _192.MsgUnderwriteAminoMsg): _192.MsgUnderwrite;
                fromProtoMsg(message: _192.MsgUnderwriteProtoMsg): _192.MsgUnderwrite;
                toProto(message: _192.MsgUnderwrite): Uint8Array;
                toProtoMsg(message: _192.MsgUnderwrite): _192.MsgUnderwriteProtoMsg;
            };
            MsgUnderwriteResponse: {
                typeUrl: string;
                encode(_: _192.MsgUnderwriteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _192.MsgUnderwriteResponse;
                fromPartial(_: Partial<_192.MsgUnderwriteResponse>): _192.MsgUnderwriteResponse;
                fromAmino(_: _192.MsgUnderwriteResponseAmino): _192.MsgUnderwriteResponse;
                toAmino(_: _192.MsgUnderwriteResponse): _192.MsgUnderwriteResponseAmino;
                fromAminoMsg(object: _192.MsgUnderwriteResponseAminoMsg): _192.MsgUnderwriteResponse;
                fromProtoMsg(message: _192.MsgUnderwriteResponseProtoMsg): _192.MsgUnderwriteResponse;
                toProto(message: _192.MsgUnderwriteResponse): Uint8Array;
                toProtoMsg(message: _192.MsgUnderwriteResponse): _192.MsgUnderwriteResponseProtoMsg;
            };
            MsgRequestRedemption: {
                typeUrl: string;
                encode(message: _192.MsgRequestRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _192.MsgRequestRedemption;
                fromPartial(object: Partial<_192.MsgRequestRedemption>): _192.MsgRequestRedemption;
                fromAmino(object: _192.MsgRequestRedemptionAmino): _192.MsgRequestRedemption;
                toAmino(message: _192.MsgRequestRedemption): _192.MsgRequestRedemptionAmino;
                fromAminoMsg(object: _192.MsgRequestRedemptionAminoMsg): _192.MsgRequestRedemption;
                fromProtoMsg(message: _192.MsgRequestRedemptionProtoMsg): _192.MsgRequestRedemption;
                toProto(message: _192.MsgRequestRedemption): Uint8Array;
                toProtoMsg(message: _192.MsgRequestRedemption): _192.MsgRequestRedemptionProtoMsg;
            };
            MsgRequestRedemptionResponse: {
                typeUrl: string;
                encode(_: _192.MsgRequestRedemptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _192.MsgRequestRedemptionResponse;
                fromPartial(_: Partial<_192.MsgRequestRedemptionResponse>): _192.MsgRequestRedemptionResponse;
                fromAmino(_: _192.MsgRequestRedemptionResponseAmino): _192.MsgRequestRedemptionResponse;
                toAmino(_: _192.MsgRequestRedemptionResponse): _192.MsgRequestRedemptionResponseAmino;
                fromAminoMsg(object: _192.MsgRequestRedemptionResponseAminoMsg): _192.MsgRequestRedemptionResponse;
                fromProtoMsg(message: _192.MsgRequestRedemptionResponseProtoMsg): _192.MsgRequestRedemptionResponse;
                toProto(message: _192.MsgRequestRedemptionResponse): Uint8Array;
                toProtoMsg(message: _192.MsgRequestRedemptionResponse): _192.MsgRequestRedemptionResponseProtoMsg;
            };
            QueryInsuranceParamsRequest: {
                typeUrl: string;
                encode(_: _191.QueryInsuranceParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryInsuranceParamsRequest;
                fromPartial(_: Partial<_191.QueryInsuranceParamsRequest>): _191.QueryInsuranceParamsRequest;
                fromAmino(_: _191.QueryInsuranceParamsRequestAmino): _191.QueryInsuranceParamsRequest;
                toAmino(_: _191.QueryInsuranceParamsRequest): _191.QueryInsuranceParamsRequestAmino;
                fromAminoMsg(object: _191.QueryInsuranceParamsRequestAminoMsg): _191.QueryInsuranceParamsRequest;
                fromProtoMsg(message: _191.QueryInsuranceParamsRequestProtoMsg): _191.QueryInsuranceParamsRequest;
                toProto(message: _191.QueryInsuranceParamsRequest): Uint8Array;
                toProtoMsg(message: _191.QueryInsuranceParamsRequest): _191.QueryInsuranceParamsRequestProtoMsg;
            };
            QueryInsuranceParamsResponse: {
                typeUrl: string;
                encode(message: _191.QueryInsuranceParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryInsuranceParamsResponse;
                fromPartial(object: Partial<_191.QueryInsuranceParamsResponse>): _191.QueryInsuranceParamsResponse;
                fromAmino(object: _191.QueryInsuranceParamsResponseAmino): _191.QueryInsuranceParamsResponse;
                toAmino(message: _191.QueryInsuranceParamsResponse): _191.QueryInsuranceParamsResponseAmino;
                fromAminoMsg(object: _191.QueryInsuranceParamsResponseAminoMsg): _191.QueryInsuranceParamsResponse;
                fromProtoMsg(message: _191.QueryInsuranceParamsResponseProtoMsg): _191.QueryInsuranceParamsResponse;
                toProto(message: _191.QueryInsuranceParamsResponse): Uint8Array;
                toProtoMsg(message: _191.QueryInsuranceParamsResponse): _191.QueryInsuranceParamsResponseProtoMsg;
            };
            QueryInsuranceFundRequest: {
                typeUrl: string;
                encode(message: _191.QueryInsuranceFundRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryInsuranceFundRequest;
                fromPartial(object: Partial<_191.QueryInsuranceFundRequest>): _191.QueryInsuranceFundRequest;
                fromAmino(object: _191.QueryInsuranceFundRequestAmino): _191.QueryInsuranceFundRequest;
                toAmino(message: _191.QueryInsuranceFundRequest): _191.QueryInsuranceFundRequestAmino;
                fromAminoMsg(object: _191.QueryInsuranceFundRequestAminoMsg): _191.QueryInsuranceFundRequest;
                fromProtoMsg(message: _191.QueryInsuranceFundRequestProtoMsg): _191.QueryInsuranceFundRequest;
                toProto(message: _191.QueryInsuranceFundRequest): Uint8Array;
                toProtoMsg(message: _191.QueryInsuranceFundRequest): _191.QueryInsuranceFundRequestProtoMsg;
            };
            QueryInsuranceFundResponse: {
                typeUrl: string;
                encode(message: _191.QueryInsuranceFundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryInsuranceFundResponse;
                fromPartial(object: Partial<_191.QueryInsuranceFundResponse>): _191.QueryInsuranceFundResponse;
                fromAmino(object: _191.QueryInsuranceFundResponseAmino): _191.QueryInsuranceFundResponse;
                toAmino(message: _191.QueryInsuranceFundResponse): _191.QueryInsuranceFundResponseAmino;
                fromAminoMsg(object: _191.QueryInsuranceFundResponseAminoMsg): _191.QueryInsuranceFundResponse;
                fromProtoMsg(message: _191.QueryInsuranceFundResponseProtoMsg): _191.QueryInsuranceFundResponse;
                toProto(message: _191.QueryInsuranceFundResponse): Uint8Array;
                toProtoMsg(message: _191.QueryInsuranceFundResponse): _191.QueryInsuranceFundResponseProtoMsg;
            };
            QueryInsuranceFundsRequest: {
                typeUrl: string;
                encode(_: _191.QueryInsuranceFundsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryInsuranceFundsRequest;
                fromPartial(_: Partial<_191.QueryInsuranceFundsRequest>): _191.QueryInsuranceFundsRequest;
                fromAmino(_: _191.QueryInsuranceFundsRequestAmino): _191.QueryInsuranceFundsRequest;
                toAmino(_: _191.QueryInsuranceFundsRequest): _191.QueryInsuranceFundsRequestAmino;
                fromAminoMsg(object: _191.QueryInsuranceFundsRequestAminoMsg): _191.QueryInsuranceFundsRequest;
                fromProtoMsg(message: _191.QueryInsuranceFundsRequestProtoMsg): _191.QueryInsuranceFundsRequest;
                toProto(message: _191.QueryInsuranceFundsRequest): Uint8Array;
                toProtoMsg(message: _191.QueryInsuranceFundsRequest): _191.QueryInsuranceFundsRequestProtoMsg;
            };
            QueryInsuranceFundsResponse: {
                typeUrl: string;
                encode(message: _191.QueryInsuranceFundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryInsuranceFundsResponse;
                fromPartial(object: Partial<_191.QueryInsuranceFundsResponse>): _191.QueryInsuranceFundsResponse;
                fromAmino(object: _191.QueryInsuranceFundsResponseAmino): _191.QueryInsuranceFundsResponse;
                toAmino(message: _191.QueryInsuranceFundsResponse): _191.QueryInsuranceFundsResponseAmino;
                fromAminoMsg(object: _191.QueryInsuranceFundsResponseAminoMsg): _191.QueryInsuranceFundsResponse;
                fromProtoMsg(message: _191.QueryInsuranceFundsResponseProtoMsg): _191.QueryInsuranceFundsResponse;
                toProto(message: _191.QueryInsuranceFundsResponse): Uint8Array;
                toProtoMsg(message: _191.QueryInsuranceFundsResponse): _191.QueryInsuranceFundsResponseProtoMsg;
            };
            QueryEstimatedRedemptionsRequest: {
                typeUrl: string;
                encode(message: _191.QueryEstimatedRedemptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryEstimatedRedemptionsRequest;
                fromPartial(object: Partial<_191.QueryEstimatedRedemptionsRequest>): _191.QueryEstimatedRedemptionsRequest;
                fromAmino(object: _191.QueryEstimatedRedemptionsRequestAmino): _191.QueryEstimatedRedemptionsRequest;
                toAmino(message: _191.QueryEstimatedRedemptionsRequest): _191.QueryEstimatedRedemptionsRequestAmino;
                fromAminoMsg(object: _191.QueryEstimatedRedemptionsRequestAminoMsg): _191.QueryEstimatedRedemptionsRequest;
                fromProtoMsg(message: _191.QueryEstimatedRedemptionsRequestProtoMsg): _191.QueryEstimatedRedemptionsRequest;
                toProto(message: _191.QueryEstimatedRedemptionsRequest): Uint8Array;
                toProtoMsg(message: _191.QueryEstimatedRedemptionsRequest): _191.QueryEstimatedRedemptionsRequestProtoMsg;
            };
            QueryEstimatedRedemptionsResponse: {
                typeUrl: string;
                encode(message: _191.QueryEstimatedRedemptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryEstimatedRedemptionsResponse;
                fromPartial(object: Partial<_191.QueryEstimatedRedemptionsResponse>): _191.QueryEstimatedRedemptionsResponse;
                fromAmino(object: _191.QueryEstimatedRedemptionsResponseAmino): _191.QueryEstimatedRedemptionsResponse;
                toAmino(message: _191.QueryEstimatedRedemptionsResponse): _191.QueryEstimatedRedemptionsResponseAmino;
                fromAminoMsg(object: _191.QueryEstimatedRedemptionsResponseAminoMsg): _191.QueryEstimatedRedemptionsResponse;
                fromProtoMsg(message: _191.QueryEstimatedRedemptionsResponseProtoMsg): _191.QueryEstimatedRedemptionsResponse;
                toProto(message: _191.QueryEstimatedRedemptionsResponse): Uint8Array;
                toProtoMsg(message: _191.QueryEstimatedRedemptionsResponse): _191.QueryEstimatedRedemptionsResponseProtoMsg;
            };
            QueryPendingRedemptionsRequest: {
                typeUrl: string;
                encode(message: _191.QueryPendingRedemptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryPendingRedemptionsRequest;
                fromPartial(object: Partial<_191.QueryPendingRedemptionsRequest>): _191.QueryPendingRedemptionsRequest;
                fromAmino(object: _191.QueryPendingRedemptionsRequestAmino): _191.QueryPendingRedemptionsRequest;
                toAmino(message: _191.QueryPendingRedemptionsRequest): _191.QueryPendingRedemptionsRequestAmino;
                fromAminoMsg(object: _191.QueryPendingRedemptionsRequestAminoMsg): _191.QueryPendingRedemptionsRequest;
                fromProtoMsg(message: _191.QueryPendingRedemptionsRequestProtoMsg): _191.QueryPendingRedemptionsRequest;
                toProto(message: _191.QueryPendingRedemptionsRequest): Uint8Array;
                toProtoMsg(message: _191.QueryPendingRedemptionsRequest): _191.QueryPendingRedemptionsRequestProtoMsg;
            };
            QueryPendingRedemptionsResponse: {
                typeUrl: string;
                encode(message: _191.QueryPendingRedemptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryPendingRedemptionsResponse;
                fromPartial(object: Partial<_191.QueryPendingRedemptionsResponse>): _191.QueryPendingRedemptionsResponse;
                fromAmino(object: _191.QueryPendingRedemptionsResponseAmino): _191.QueryPendingRedemptionsResponse;
                toAmino(message: _191.QueryPendingRedemptionsResponse): _191.QueryPendingRedemptionsResponseAmino;
                fromAminoMsg(object: _191.QueryPendingRedemptionsResponseAminoMsg): _191.QueryPendingRedemptionsResponse;
                fromProtoMsg(message: _191.QueryPendingRedemptionsResponseProtoMsg): _191.QueryPendingRedemptionsResponse;
                toProto(message: _191.QueryPendingRedemptionsResponse): Uint8Array;
                toProtoMsg(message: _191.QueryPendingRedemptionsResponse): _191.QueryPendingRedemptionsResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _191.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryModuleStateRequest;
                fromPartial(_: Partial<_191.QueryModuleStateRequest>): _191.QueryModuleStateRequest;
                fromAmino(_: _191.QueryModuleStateRequestAmino): _191.QueryModuleStateRequest;
                toAmino(_: _191.QueryModuleStateRequest): _191.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _191.QueryModuleStateRequestAminoMsg): _191.QueryModuleStateRequest;
                fromProtoMsg(message: _191.QueryModuleStateRequestProtoMsg): _191.QueryModuleStateRequest;
                toProto(message: _191.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _191.QueryModuleStateRequest): _191.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _191.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _191.QueryModuleStateResponse;
                fromPartial(object: Partial<_191.QueryModuleStateResponse>): _191.QueryModuleStateResponse;
                fromAmino(object: _191.QueryModuleStateResponseAmino): _191.QueryModuleStateResponse;
                toAmino(message: _191.QueryModuleStateResponse): _191.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _191.QueryModuleStateResponseAminoMsg): _191.QueryModuleStateResponse;
                fromProtoMsg(message: _191.QueryModuleStateResponseProtoMsg): _191.QueryModuleStateResponse;
                toProto(message: _191.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _191.QueryModuleStateResponse): _191.QueryModuleStateResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _190.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _190.Params;
                fromPartial(object: Partial<_190.Params>): _190.Params;
                fromAmino(object: _190.ParamsAmino): _190.Params;
                toAmino(message: _190.Params): _190.ParamsAmino;
                fromAminoMsg(object: _190.ParamsAminoMsg): _190.Params;
                fromProtoMsg(message: _190.ParamsProtoMsg): _190.Params;
                toProto(message: _190.Params): Uint8Array;
                toProtoMsg(message: _190.Params): _190.ParamsProtoMsg;
            };
            InsuranceFund: {
                typeUrl: string;
                encode(message: _190.InsuranceFund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _190.InsuranceFund;
                fromPartial(object: Partial<_190.InsuranceFund>): _190.InsuranceFund;
                fromAmino(object: _190.InsuranceFundAmino): _190.InsuranceFund;
                toAmino(message: _190.InsuranceFund): _190.InsuranceFundAmino;
                fromAminoMsg(object: _190.InsuranceFundAminoMsg): _190.InsuranceFund;
                fromProtoMsg(message: _190.InsuranceFundProtoMsg): _190.InsuranceFund;
                toProto(message: _190.InsuranceFund): Uint8Array;
                toProtoMsg(message: _190.InsuranceFund): _190.InsuranceFundProtoMsg;
            };
            RedemptionSchedule: {
                typeUrl: string;
                encode(message: _190.RedemptionSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _190.RedemptionSchedule;
                fromPartial(object: Partial<_190.RedemptionSchedule>): _190.RedemptionSchedule;
                fromAmino(object: _190.RedemptionScheduleAmino): _190.RedemptionSchedule;
                toAmino(message: _190.RedemptionSchedule): _190.RedemptionScheduleAmino;
                fromAminoMsg(object: _190.RedemptionScheduleAminoMsg): _190.RedemptionSchedule;
                fromProtoMsg(message: _190.RedemptionScheduleProtoMsg): _190.RedemptionSchedule;
                toProto(message: _190.RedemptionSchedule): Uint8Array;
                toProtoMsg(message: _190.RedemptionSchedule): _190.RedemptionScheduleProtoMsg;
            };
            EventInsuranceFundUpdate: {
                typeUrl: string;
                encode(message: _190.EventInsuranceFundUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _190.EventInsuranceFundUpdate;
                fromPartial(object: Partial<_190.EventInsuranceFundUpdate>): _190.EventInsuranceFundUpdate;
                fromAmino(object: _190.EventInsuranceFundUpdateAmino): _190.EventInsuranceFundUpdate;
                toAmino(message: _190.EventInsuranceFundUpdate): _190.EventInsuranceFundUpdateAmino;
                fromAminoMsg(object: _190.EventInsuranceFundUpdateAminoMsg): _190.EventInsuranceFundUpdate;
                fromProtoMsg(message: _190.EventInsuranceFundUpdateProtoMsg): _190.EventInsuranceFundUpdate;
                toProto(message: _190.EventInsuranceFundUpdate): Uint8Array;
                toProtoMsg(message: _190.EventInsuranceFundUpdate): _190.EventInsuranceFundUpdateProtoMsg;
            };
            EventRequestRedemption: {
                typeUrl: string;
                encode(message: _190.EventRequestRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _190.EventRequestRedemption;
                fromPartial(object: Partial<_190.EventRequestRedemption>): _190.EventRequestRedemption;
                fromAmino(object: _190.EventRequestRedemptionAmino): _190.EventRequestRedemption;
                toAmino(message: _190.EventRequestRedemption): _190.EventRequestRedemptionAmino;
                fromAminoMsg(object: _190.EventRequestRedemptionAminoMsg): _190.EventRequestRedemption;
                fromProtoMsg(message: _190.EventRequestRedemptionProtoMsg): _190.EventRequestRedemption;
                toProto(message: _190.EventRequestRedemption): Uint8Array;
                toProtoMsg(message: _190.EventRequestRedemption): _190.EventRequestRedemptionProtoMsg;
            };
            EventWithdrawRedemption: {
                typeUrl: string;
                encode(message: _190.EventWithdrawRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _190.EventWithdrawRedemption;
                fromPartial(object: Partial<_190.EventWithdrawRedemption>): _190.EventWithdrawRedemption;
                fromAmino(object: _190.EventWithdrawRedemptionAmino): _190.EventWithdrawRedemption;
                toAmino(message: _190.EventWithdrawRedemption): _190.EventWithdrawRedemptionAmino;
                fromAminoMsg(object: _190.EventWithdrawRedemptionAminoMsg): _190.EventWithdrawRedemption;
                fromProtoMsg(message: _190.EventWithdrawRedemptionProtoMsg): _190.EventWithdrawRedemption;
                toProto(message: _190.EventWithdrawRedemption): Uint8Array;
                toProtoMsg(message: _190.EventWithdrawRedemption): _190.EventWithdrawRedemptionProtoMsg;
            };
            EventUnderwrite: {
                typeUrl: string;
                encode(message: _190.EventUnderwrite, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _190.EventUnderwrite;
                fromPartial(object: Partial<_190.EventUnderwrite>): _190.EventUnderwrite;
                fromAmino(object: _190.EventUnderwriteAmino): _190.EventUnderwrite;
                toAmino(message: _190.EventUnderwrite): _190.EventUnderwriteAmino;
                fromAminoMsg(object: _190.EventUnderwriteAminoMsg): _190.EventUnderwrite;
                fromProtoMsg(message: _190.EventUnderwriteProtoMsg): _190.EventUnderwrite;
                toProto(message: _190.EventUnderwrite): Uint8Array;
                toProtoMsg(message: _190.EventUnderwrite): _190.EventUnderwriteProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _189.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _189.GenesisState;
                fromPartial(object: Partial<_189.GenesisState>): _189.GenesisState;
                fromAmino(object: _189.GenesisStateAmino): _189.GenesisState;
                toAmino(message: _189.GenesisState): _189.GenesisStateAmino;
                fromAminoMsg(object: _189.GenesisStateAminoMsg): _189.GenesisState;
                fromProtoMsg(message: _189.GenesisStateProtoMsg): _189.GenesisState;
                toProto(message: _189.GenesisState): Uint8Array;
                toProtoMsg(message: _189.GenesisState): _189.GenesisStateProtoMsg;
            };
        };
    }
    namespace ocr {
        const v1beta1: {
            MsgClientImpl: typeof _494.MsgClientImpl;
            QueryClientImpl: typeof _487.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _195.QueryParamsRequest): Promise<_195.QueryParamsResponse>;
                feedConfig(request: _195.QueryFeedConfigRequest): Promise<_195.QueryFeedConfigResponse>;
                feedConfigInfo(request: _195.QueryFeedConfigInfoRequest): Promise<_195.QueryFeedConfigInfoResponse>;
                latestRound(request: _195.QueryLatestRoundRequest): Promise<_195.QueryLatestRoundResponse>;
                latestTransmissionDetails(request: _195.QueryLatestTransmissionDetailsRequest): Promise<_195.QueryLatestTransmissionDetailsResponse>;
                owedAmount(request: _195.QueryOwedAmountRequest): Promise<_195.QueryOwedAmountResponse>;
                ocrModuleState(request?: _195.QueryModuleStateRequest): Promise<_195.QueryModuleStateResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFeed(value: _196.MsgCreateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeed(value: _196.MsgUpdateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transmit(value: _196.MsgTransmit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundFeedRewardPool(value: _196.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawFeedRewardPool(value: _196.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPayees(value: _196.MsgSetPayees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferPayeeship(value: _196.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    acceptPayeeship(value: _196.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFeed(value: _196.MsgCreateFeed): {
                        typeUrl: string;
                        value: _196.MsgCreateFeed;
                    };
                    updateFeed(value: _196.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _196.MsgUpdateFeed;
                    };
                    transmit(value: _196.MsgTransmit): {
                        typeUrl: string;
                        value: _196.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _196.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _196.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _196.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _196.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _196.MsgSetPayees): {
                        typeUrl: string;
                        value: _196.MsgSetPayees;
                    };
                    transferPayeeship(value: _196.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _196.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _196.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _196.MsgAcceptPayeeship;
                    };
                };
                fromPartial: {
                    createFeed(value: _196.MsgCreateFeed): {
                        typeUrl: string;
                        value: _196.MsgCreateFeed;
                    };
                    updateFeed(value: _196.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _196.MsgUpdateFeed;
                    };
                    transmit(value: _196.MsgTransmit): {
                        typeUrl: string;
                        value: _196.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _196.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _196.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _196.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _196.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _196.MsgSetPayees): {
                        typeUrl: string;
                        value: _196.MsgSetPayees;
                    };
                    transferPayeeship(value: _196.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _196.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _196.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _196.MsgAcceptPayeeship;
                    };
                };
            };
            AminoConverter: {
                "/injective.ocr.v1beta1.MsgCreateFeed": {
                    aminoType: string;
                    toAmino: (message: _196.MsgCreateFeed) => _196.MsgCreateFeedAmino;
                    fromAmino: (object: _196.MsgCreateFeedAmino) => _196.MsgCreateFeed;
                };
                "/injective.ocr.v1beta1.MsgUpdateFeed": {
                    aminoType: string;
                    toAmino: (message: _196.MsgUpdateFeed) => _196.MsgUpdateFeedAmino;
                    fromAmino: (object: _196.MsgUpdateFeedAmino) => _196.MsgUpdateFeed;
                };
                "/injective.ocr.v1beta1.MsgTransmit": {
                    aminoType: string;
                    toAmino: (message: _196.MsgTransmit) => _196.MsgTransmitAmino;
                    fromAmino: (object: _196.MsgTransmitAmino) => _196.MsgTransmit;
                };
                "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
                    aminoType: string;
                    toAmino: (message: _196.MsgFundFeedRewardPool) => _196.MsgFundFeedRewardPoolAmino;
                    fromAmino: (object: _196.MsgFundFeedRewardPoolAmino) => _196.MsgFundFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
                    aminoType: string;
                    toAmino: (message: _196.MsgWithdrawFeedRewardPool) => _196.MsgWithdrawFeedRewardPoolAmino;
                    fromAmino: (object: _196.MsgWithdrawFeedRewardPoolAmino) => _196.MsgWithdrawFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgSetPayees": {
                    aminoType: string;
                    toAmino: (message: _196.MsgSetPayees) => _196.MsgSetPayeesAmino;
                    fromAmino: (object: _196.MsgSetPayeesAmino) => _196.MsgSetPayees;
                };
                "/injective.ocr.v1beta1.MsgTransferPayeeship": {
                    aminoType: string;
                    toAmino: (message: _196.MsgTransferPayeeship) => _196.MsgTransferPayeeshipAmino;
                    fromAmino: (object: _196.MsgTransferPayeeshipAmino) => _196.MsgTransferPayeeship;
                };
                "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
                    aminoType: string;
                    toAmino: (message: _196.MsgAcceptPayeeship) => _196.MsgAcceptPayeeshipAmino;
                    fromAmino: (object: _196.MsgAcceptPayeeshipAmino) => _196.MsgAcceptPayeeship;
                };
            };
            MsgCreateFeed: {
                typeUrl: string;
                encode(message: _196.MsgCreateFeed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgCreateFeed;
                fromPartial(object: Partial<_196.MsgCreateFeed>): _196.MsgCreateFeed;
                fromAmino(object: _196.MsgCreateFeedAmino): _196.MsgCreateFeed;
                toAmino(message: _196.MsgCreateFeed): _196.MsgCreateFeedAmino;
                fromAminoMsg(object: _196.MsgCreateFeedAminoMsg): _196.MsgCreateFeed;
                fromProtoMsg(message: _196.MsgCreateFeedProtoMsg): _196.MsgCreateFeed;
                toProto(message: _196.MsgCreateFeed): Uint8Array;
                toProtoMsg(message: _196.MsgCreateFeed): _196.MsgCreateFeedProtoMsg;
            };
            MsgCreateFeedResponse: {
                typeUrl: string;
                encode(_: _196.MsgCreateFeedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgCreateFeedResponse;
                fromPartial(_: Partial<_196.MsgCreateFeedResponse>): _196.MsgCreateFeedResponse;
                fromAmino(_: _196.MsgCreateFeedResponseAmino): _196.MsgCreateFeedResponse;
                toAmino(_: _196.MsgCreateFeedResponse): _196.MsgCreateFeedResponseAmino;
                fromAminoMsg(object: _196.MsgCreateFeedResponseAminoMsg): _196.MsgCreateFeedResponse;
                fromProtoMsg(message: _196.MsgCreateFeedResponseProtoMsg): _196.MsgCreateFeedResponse;
                toProto(message: _196.MsgCreateFeedResponse): Uint8Array;
                toProtoMsg(message: _196.MsgCreateFeedResponse): _196.MsgCreateFeedResponseProtoMsg;
            };
            MsgUpdateFeed: {
                typeUrl: string;
                encode(message: _196.MsgUpdateFeed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgUpdateFeed;
                fromPartial(object: Partial<_196.MsgUpdateFeed>): _196.MsgUpdateFeed;
                fromAmino(object: _196.MsgUpdateFeedAmino): _196.MsgUpdateFeed;
                toAmino(message: _196.MsgUpdateFeed): _196.MsgUpdateFeedAmino;
                fromAminoMsg(object: _196.MsgUpdateFeedAminoMsg): _196.MsgUpdateFeed;
                fromProtoMsg(message: _196.MsgUpdateFeedProtoMsg): _196.MsgUpdateFeed;
                toProto(message: _196.MsgUpdateFeed): Uint8Array;
                toProtoMsg(message: _196.MsgUpdateFeed): _196.MsgUpdateFeedProtoMsg;
            };
            MsgUpdateFeedResponse: {
                typeUrl: string;
                encode(_: _196.MsgUpdateFeedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgUpdateFeedResponse;
                fromPartial(_: Partial<_196.MsgUpdateFeedResponse>): _196.MsgUpdateFeedResponse;
                fromAmino(_: _196.MsgUpdateFeedResponseAmino): _196.MsgUpdateFeedResponse;
                toAmino(_: _196.MsgUpdateFeedResponse): _196.MsgUpdateFeedResponseAmino;
                fromAminoMsg(object: _196.MsgUpdateFeedResponseAminoMsg): _196.MsgUpdateFeedResponse;
                fromProtoMsg(message: _196.MsgUpdateFeedResponseProtoMsg): _196.MsgUpdateFeedResponse;
                toProto(message: _196.MsgUpdateFeedResponse): Uint8Array;
                toProtoMsg(message: _196.MsgUpdateFeedResponse): _196.MsgUpdateFeedResponseProtoMsg;
            };
            MsgTransmit: {
                typeUrl: string;
                encode(message: _196.MsgTransmit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgTransmit;
                fromPartial(object: Partial<_196.MsgTransmit>): _196.MsgTransmit;
                fromAmino(object: _196.MsgTransmitAmino): _196.MsgTransmit;
                toAmino(message: _196.MsgTransmit): _196.MsgTransmitAmino;
                fromAminoMsg(object: _196.MsgTransmitAminoMsg): _196.MsgTransmit;
                fromProtoMsg(message: _196.MsgTransmitProtoMsg): _196.MsgTransmit;
                toProto(message: _196.MsgTransmit): Uint8Array;
                toProtoMsg(message: _196.MsgTransmit): _196.MsgTransmitProtoMsg;
            };
            MsgTransmitResponse: {
                typeUrl: string;
                encode(_: _196.MsgTransmitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgTransmitResponse;
                fromPartial(_: Partial<_196.MsgTransmitResponse>): _196.MsgTransmitResponse;
                fromAmino(_: _196.MsgTransmitResponseAmino): _196.MsgTransmitResponse;
                toAmino(_: _196.MsgTransmitResponse): _196.MsgTransmitResponseAmino;
                fromAminoMsg(object: _196.MsgTransmitResponseAminoMsg): _196.MsgTransmitResponse;
                fromProtoMsg(message: _196.MsgTransmitResponseProtoMsg): _196.MsgTransmitResponse;
                toProto(message: _196.MsgTransmitResponse): Uint8Array;
                toProtoMsg(message: _196.MsgTransmitResponse): _196.MsgTransmitResponseProtoMsg;
            };
            MsgFundFeedRewardPool: {
                typeUrl: string;
                encode(message: _196.MsgFundFeedRewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgFundFeedRewardPool;
                fromPartial(object: Partial<_196.MsgFundFeedRewardPool>): _196.MsgFundFeedRewardPool;
                fromAmino(object: _196.MsgFundFeedRewardPoolAmino): _196.MsgFundFeedRewardPool;
                toAmino(message: _196.MsgFundFeedRewardPool): _196.MsgFundFeedRewardPoolAmino;
                fromAminoMsg(object: _196.MsgFundFeedRewardPoolAminoMsg): _196.MsgFundFeedRewardPool;
                fromProtoMsg(message: _196.MsgFundFeedRewardPoolProtoMsg): _196.MsgFundFeedRewardPool;
                toProto(message: _196.MsgFundFeedRewardPool): Uint8Array;
                toProtoMsg(message: _196.MsgFundFeedRewardPool): _196.MsgFundFeedRewardPoolProtoMsg;
            };
            MsgFundFeedRewardPoolResponse: {
                typeUrl: string;
                encode(_: _196.MsgFundFeedRewardPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgFundFeedRewardPoolResponse;
                fromPartial(_: Partial<_196.MsgFundFeedRewardPoolResponse>): _196.MsgFundFeedRewardPoolResponse;
                fromAmino(_: _196.MsgFundFeedRewardPoolResponseAmino): _196.MsgFundFeedRewardPoolResponse;
                toAmino(_: _196.MsgFundFeedRewardPoolResponse): _196.MsgFundFeedRewardPoolResponseAmino;
                fromAminoMsg(object: _196.MsgFundFeedRewardPoolResponseAminoMsg): _196.MsgFundFeedRewardPoolResponse;
                fromProtoMsg(message: _196.MsgFundFeedRewardPoolResponseProtoMsg): _196.MsgFundFeedRewardPoolResponse;
                toProto(message: _196.MsgFundFeedRewardPoolResponse): Uint8Array;
                toProtoMsg(message: _196.MsgFundFeedRewardPoolResponse): _196.MsgFundFeedRewardPoolResponseProtoMsg;
            };
            MsgWithdrawFeedRewardPool: {
                typeUrl: string;
                encode(message: _196.MsgWithdrawFeedRewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgWithdrawFeedRewardPool;
                fromPartial(object: Partial<_196.MsgWithdrawFeedRewardPool>): _196.MsgWithdrawFeedRewardPool;
                fromAmino(object: _196.MsgWithdrawFeedRewardPoolAmino): _196.MsgWithdrawFeedRewardPool;
                toAmino(message: _196.MsgWithdrawFeedRewardPool): _196.MsgWithdrawFeedRewardPoolAmino;
                fromAminoMsg(object: _196.MsgWithdrawFeedRewardPoolAminoMsg): _196.MsgWithdrawFeedRewardPool;
                fromProtoMsg(message: _196.MsgWithdrawFeedRewardPoolProtoMsg): _196.MsgWithdrawFeedRewardPool;
                toProto(message: _196.MsgWithdrawFeedRewardPool): Uint8Array;
                toProtoMsg(message: _196.MsgWithdrawFeedRewardPool): _196.MsgWithdrawFeedRewardPoolProtoMsg;
            };
            MsgWithdrawFeedRewardPoolResponse: {
                typeUrl: string;
                encode(_: _196.MsgWithdrawFeedRewardPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgWithdrawFeedRewardPoolResponse;
                fromPartial(_: Partial<_196.MsgWithdrawFeedRewardPoolResponse>): _196.MsgWithdrawFeedRewardPoolResponse;
                fromAmino(_: _196.MsgWithdrawFeedRewardPoolResponseAmino): _196.MsgWithdrawFeedRewardPoolResponse;
                toAmino(_: _196.MsgWithdrawFeedRewardPoolResponse): _196.MsgWithdrawFeedRewardPoolResponseAmino;
                fromAminoMsg(object: _196.MsgWithdrawFeedRewardPoolResponseAminoMsg): _196.MsgWithdrawFeedRewardPoolResponse;
                fromProtoMsg(message: _196.MsgWithdrawFeedRewardPoolResponseProtoMsg): _196.MsgWithdrawFeedRewardPoolResponse;
                toProto(message: _196.MsgWithdrawFeedRewardPoolResponse): Uint8Array;
                toProtoMsg(message: _196.MsgWithdrawFeedRewardPoolResponse): _196.MsgWithdrawFeedRewardPoolResponseProtoMsg;
            };
            MsgSetPayees: {
                typeUrl: string;
                encode(message: _196.MsgSetPayees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgSetPayees;
                fromPartial(object: Partial<_196.MsgSetPayees>): _196.MsgSetPayees;
                fromAmino(object: _196.MsgSetPayeesAmino): _196.MsgSetPayees;
                toAmino(message: _196.MsgSetPayees): _196.MsgSetPayeesAmino;
                fromAminoMsg(object: _196.MsgSetPayeesAminoMsg): _196.MsgSetPayees;
                fromProtoMsg(message: _196.MsgSetPayeesProtoMsg): _196.MsgSetPayees;
                toProto(message: _196.MsgSetPayees): Uint8Array;
                toProtoMsg(message: _196.MsgSetPayees): _196.MsgSetPayeesProtoMsg;
            };
            MsgSetPayeesResponse: {
                typeUrl: string;
                encode(_: _196.MsgSetPayeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgSetPayeesResponse;
                fromPartial(_: Partial<_196.MsgSetPayeesResponse>): _196.MsgSetPayeesResponse;
                fromAmino(_: _196.MsgSetPayeesResponseAmino): _196.MsgSetPayeesResponse;
                toAmino(_: _196.MsgSetPayeesResponse): _196.MsgSetPayeesResponseAmino;
                fromAminoMsg(object: _196.MsgSetPayeesResponseAminoMsg): _196.MsgSetPayeesResponse;
                fromProtoMsg(message: _196.MsgSetPayeesResponseProtoMsg): _196.MsgSetPayeesResponse;
                toProto(message: _196.MsgSetPayeesResponse): Uint8Array;
                toProtoMsg(message: _196.MsgSetPayeesResponse): _196.MsgSetPayeesResponseProtoMsg;
            };
            MsgTransferPayeeship: {
                typeUrl: string;
                encode(message: _196.MsgTransferPayeeship, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgTransferPayeeship;
                fromPartial(object: Partial<_196.MsgTransferPayeeship>): _196.MsgTransferPayeeship;
                fromAmino(object: _196.MsgTransferPayeeshipAmino): _196.MsgTransferPayeeship;
                toAmino(message: _196.MsgTransferPayeeship): _196.MsgTransferPayeeshipAmino;
                fromAminoMsg(object: _196.MsgTransferPayeeshipAminoMsg): _196.MsgTransferPayeeship;
                fromProtoMsg(message: _196.MsgTransferPayeeshipProtoMsg): _196.MsgTransferPayeeship;
                toProto(message: _196.MsgTransferPayeeship): Uint8Array;
                toProtoMsg(message: _196.MsgTransferPayeeship): _196.MsgTransferPayeeshipProtoMsg;
            };
            MsgTransferPayeeshipResponse: {
                typeUrl: string;
                encode(_: _196.MsgTransferPayeeshipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgTransferPayeeshipResponse;
                fromPartial(_: Partial<_196.MsgTransferPayeeshipResponse>): _196.MsgTransferPayeeshipResponse;
                fromAmino(_: _196.MsgTransferPayeeshipResponseAmino): _196.MsgTransferPayeeshipResponse;
                toAmino(_: _196.MsgTransferPayeeshipResponse): _196.MsgTransferPayeeshipResponseAmino;
                fromAminoMsg(object: _196.MsgTransferPayeeshipResponseAminoMsg): _196.MsgTransferPayeeshipResponse;
                fromProtoMsg(message: _196.MsgTransferPayeeshipResponseProtoMsg): _196.MsgTransferPayeeshipResponse;
                toProto(message: _196.MsgTransferPayeeshipResponse): Uint8Array;
                toProtoMsg(message: _196.MsgTransferPayeeshipResponse): _196.MsgTransferPayeeshipResponseProtoMsg;
            };
            MsgAcceptPayeeship: {
                typeUrl: string;
                encode(message: _196.MsgAcceptPayeeship, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgAcceptPayeeship;
                fromPartial(object: Partial<_196.MsgAcceptPayeeship>): _196.MsgAcceptPayeeship;
                fromAmino(object: _196.MsgAcceptPayeeshipAmino): _196.MsgAcceptPayeeship;
                toAmino(message: _196.MsgAcceptPayeeship): _196.MsgAcceptPayeeshipAmino;
                fromAminoMsg(object: _196.MsgAcceptPayeeshipAminoMsg): _196.MsgAcceptPayeeship;
                fromProtoMsg(message: _196.MsgAcceptPayeeshipProtoMsg): _196.MsgAcceptPayeeship;
                toProto(message: _196.MsgAcceptPayeeship): Uint8Array;
                toProtoMsg(message: _196.MsgAcceptPayeeship): _196.MsgAcceptPayeeshipProtoMsg;
            };
            MsgAcceptPayeeshipResponse: {
                typeUrl: string;
                encode(_: _196.MsgAcceptPayeeshipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _196.MsgAcceptPayeeshipResponse;
                fromPartial(_: Partial<_196.MsgAcceptPayeeshipResponse>): _196.MsgAcceptPayeeshipResponse;
                fromAmino(_: _196.MsgAcceptPayeeshipResponseAmino): _196.MsgAcceptPayeeshipResponse;
                toAmino(_: _196.MsgAcceptPayeeshipResponse): _196.MsgAcceptPayeeshipResponseAmino;
                fromAminoMsg(object: _196.MsgAcceptPayeeshipResponseAminoMsg): _196.MsgAcceptPayeeshipResponse;
                fromProtoMsg(message: _196.MsgAcceptPayeeshipResponseProtoMsg): _196.MsgAcceptPayeeshipResponse;
                toProto(message: _196.MsgAcceptPayeeshipResponse): Uint8Array;
                toProtoMsg(message: _196.MsgAcceptPayeeshipResponse): _196.MsgAcceptPayeeshipResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _195.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryParamsRequest;
                fromPartial(_: Partial<_195.QueryParamsRequest>): _195.QueryParamsRequest;
                fromAmino(_: _195.QueryParamsRequestAmino): _195.QueryParamsRequest;
                toAmino(_: _195.QueryParamsRequest): _195.QueryParamsRequestAmino;
                fromAminoMsg(object: _195.QueryParamsRequestAminoMsg): _195.QueryParamsRequest;
                fromProtoMsg(message: _195.QueryParamsRequestProtoMsg): _195.QueryParamsRequest;
                toProto(message: _195.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _195.QueryParamsRequest): _195.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _195.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryParamsResponse;
                fromPartial(object: Partial<_195.QueryParamsResponse>): _195.QueryParamsResponse;
                fromAmino(object: _195.QueryParamsResponseAmino): _195.QueryParamsResponse;
                toAmino(message: _195.QueryParamsResponse): _195.QueryParamsResponseAmino;
                fromAminoMsg(object: _195.QueryParamsResponseAminoMsg): _195.QueryParamsResponse;
                fromProtoMsg(message: _195.QueryParamsResponseProtoMsg): _195.QueryParamsResponse;
                toProto(message: _195.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _195.QueryParamsResponse): _195.QueryParamsResponseProtoMsg;
            };
            QueryFeedConfigRequest: {
                typeUrl: string;
                encode(message: _195.QueryFeedConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryFeedConfigRequest;
                fromPartial(object: Partial<_195.QueryFeedConfigRequest>): _195.QueryFeedConfigRequest;
                fromAmino(object: _195.QueryFeedConfigRequestAmino): _195.QueryFeedConfigRequest;
                toAmino(message: _195.QueryFeedConfigRequest): _195.QueryFeedConfigRequestAmino;
                fromAminoMsg(object: _195.QueryFeedConfigRequestAminoMsg): _195.QueryFeedConfigRequest;
                fromProtoMsg(message: _195.QueryFeedConfigRequestProtoMsg): _195.QueryFeedConfigRequest;
                toProto(message: _195.QueryFeedConfigRequest): Uint8Array;
                toProtoMsg(message: _195.QueryFeedConfigRequest): _195.QueryFeedConfigRequestProtoMsg;
            };
            QueryFeedConfigResponse: {
                typeUrl: string;
                encode(message: _195.QueryFeedConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryFeedConfigResponse;
                fromPartial(object: Partial<_195.QueryFeedConfigResponse>): _195.QueryFeedConfigResponse;
                fromAmino(object: _195.QueryFeedConfigResponseAmino): _195.QueryFeedConfigResponse;
                toAmino(message: _195.QueryFeedConfigResponse): _195.QueryFeedConfigResponseAmino;
                fromAminoMsg(object: _195.QueryFeedConfigResponseAminoMsg): _195.QueryFeedConfigResponse;
                fromProtoMsg(message: _195.QueryFeedConfigResponseProtoMsg): _195.QueryFeedConfigResponse;
                toProto(message: _195.QueryFeedConfigResponse): Uint8Array;
                toProtoMsg(message: _195.QueryFeedConfigResponse): _195.QueryFeedConfigResponseProtoMsg;
            };
            QueryFeedConfigInfoRequest: {
                typeUrl: string;
                encode(message: _195.QueryFeedConfigInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryFeedConfigInfoRequest;
                fromPartial(object: Partial<_195.QueryFeedConfigInfoRequest>): _195.QueryFeedConfigInfoRequest;
                fromAmino(object: _195.QueryFeedConfigInfoRequestAmino): _195.QueryFeedConfigInfoRequest;
                toAmino(message: _195.QueryFeedConfigInfoRequest): _195.QueryFeedConfigInfoRequestAmino;
                fromAminoMsg(object: _195.QueryFeedConfigInfoRequestAminoMsg): _195.QueryFeedConfigInfoRequest;
                fromProtoMsg(message: _195.QueryFeedConfigInfoRequestProtoMsg): _195.QueryFeedConfigInfoRequest;
                toProto(message: _195.QueryFeedConfigInfoRequest): Uint8Array;
                toProtoMsg(message: _195.QueryFeedConfigInfoRequest): _195.QueryFeedConfigInfoRequestProtoMsg;
            };
            QueryFeedConfigInfoResponse: {
                typeUrl: string;
                encode(message: _195.QueryFeedConfigInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryFeedConfigInfoResponse;
                fromPartial(object: Partial<_195.QueryFeedConfigInfoResponse>): _195.QueryFeedConfigInfoResponse;
                fromAmino(object: _195.QueryFeedConfigInfoResponseAmino): _195.QueryFeedConfigInfoResponse;
                toAmino(message: _195.QueryFeedConfigInfoResponse): _195.QueryFeedConfigInfoResponseAmino;
                fromAminoMsg(object: _195.QueryFeedConfigInfoResponseAminoMsg): _195.QueryFeedConfigInfoResponse;
                fromProtoMsg(message: _195.QueryFeedConfigInfoResponseProtoMsg): _195.QueryFeedConfigInfoResponse;
                toProto(message: _195.QueryFeedConfigInfoResponse): Uint8Array;
                toProtoMsg(message: _195.QueryFeedConfigInfoResponse): _195.QueryFeedConfigInfoResponseProtoMsg;
            };
            QueryLatestRoundRequest: {
                typeUrl: string;
                encode(message: _195.QueryLatestRoundRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryLatestRoundRequest;
                fromPartial(object: Partial<_195.QueryLatestRoundRequest>): _195.QueryLatestRoundRequest;
                fromAmino(object: _195.QueryLatestRoundRequestAmino): _195.QueryLatestRoundRequest;
                toAmino(message: _195.QueryLatestRoundRequest): _195.QueryLatestRoundRequestAmino;
                fromAminoMsg(object: _195.QueryLatestRoundRequestAminoMsg): _195.QueryLatestRoundRequest;
                fromProtoMsg(message: _195.QueryLatestRoundRequestProtoMsg): _195.QueryLatestRoundRequest;
                toProto(message: _195.QueryLatestRoundRequest): Uint8Array;
                toProtoMsg(message: _195.QueryLatestRoundRequest): _195.QueryLatestRoundRequestProtoMsg;
            };
            QueryLatestRoundResponse: {
                typeUrl: string;
                encode(message: _195.QueryLatestRoundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryLatestRoundResponse;
                fromPartial(object: Partial<_195.QueryLatestRoundResponse>): _195.QueryLatestRoundResponse;
                fromAmino(object: _195.QueryLatestRoundResponseAmino): _195.QueryLatestRoundResponse;
                toAmino(message: _195.QueryLatestRoundResponse): _195.QueryLatestRoundResponseAmino;
                fromAminoMsg(object: _195.QueryLatestRoundResponseAminoMsg): _195.QueryLatestRoundResponse;
                fromProtoMsg(message: _195.QueryLatestRoundResponseProtoMsg): _195.QueryLatestRoundResponse;
                toProto(message: _195.QueryLatestRoundResponse): Uint8Array;
                toProtoMsg(message: _195.QueryLatestRoundResponse): _195.QueryLatestRoundResponseProtoMsg;
            };
            QueryLatestTransmissionDetailsRequest: {
                typeUrl: string;
                encode(message: _195.QueryLatestTransmissionDetailsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryLatestTransmissionDetailsRequest;
                fromPartial(object: Partial<_195.QueryLatestTransmissionDetailsRequest>): _195.QueryLatestTransmissionDetailsRequest;
                fromAmino(object: _195.QueryLatestTransmissionDetailsRequestAmino): _195.QueryLatestTransmissionDetailsRequest;
                toAmino(message: _195.QueryLatestTransmissionDetailsRequest): _195.QueryLatestTransmissionDetailsRequestAmino;
                fromAminoMsg(object: _195.QueryLatestTransmissionDetailsRequestAminoMsg): _195.QueryLatestTransmissionDetailsRequest;
                fromProtoMsg(message: _195.QueryLatestTransmissionDetailsRequestProtoMsg): _195.QueryLatestTransmissionDetailsRequest;
                toProto(message: _195.QueryLatestTransmissionDetailsRequest): Uint8Array;
                toProtoMsg(message: _195.QueryLatestTransmissionDetailsRequest): _195.QueryLatestTransmissionDetailsRequestProtoMsg;
            };
            QueryLatestTransmissionDetailsResponse: {
                typeUrl: string;
                encode(message: _195.QueryLatestTransmissionDetailsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryLatestTransmissionDetailsResponse;
                fromPartial(object: Partial<_195.QueryLatestTransmissionDetailsResponse>): _195.QueryLatestTransmissionDetailsResponse;
                fromAmino(object: _195.QueryLatestTransmissionDetailsResponseAmino): _195.QueryLatestTransmissionDetailsResponse;
                toAmino(message: _195.QueryLatestTransmissionDetailsResponse): _195.QueryLatestTransmissionDetailsResponseAmino;
                fromAminoMsg(object: _195.QueryLatestTransmissionDetailsResponseAminoMsg): _195.QueryLatestTransmissionDetailsResponse;
                fromProtoMsg(message: _195.QueryLatestTransmissionDetailsResponseProtoMsg): _195.QueryLatestTransmissionDetailsResponse;
                toProto(message: _195.QueryLatestTransmissionDetailsResponse): Uint8Array;
                toProtoMsg(message: _195.QueryLatestTransmissionDetailsResponse): _195.QueryLatestTransmissionDetailsResponseProtoMsg;
            };
            QueryOwedAmountRequest: {
                typeUrl: string;
                encode(message: _195.QueryOwedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryOwedAmountRequest;
                fromPartial(object: Partial<_195.QueryOwedAmountRequest>): _195.QueryOwedAmountRequest;
                fromAmino(object: _195.QueryOwedAmountRequestAmino): _195.QueryOwedAmountRequest;
                toAmino(message: _195.QueryOwedAmountRequest): _195.QueryOwedAmountRequestAmino;
                fromAminoMsg(object: _195.QueryOwedAmountRequestAminoMsg): _195.QueryOwedAmountRequest;
                fromProtoMsg(message: _195.QueryOwedAmountRequestProtoMsg): _195.QueryOwedAmountRequest;
                toProto(message: _195.QueryOwedAmountRequest): Uint8Array;
                toProtoMsg(message: _195.QueryOwedAmountRequest): _195.QueryOwedAmountRequestProtoMsg;
            };
            QueryOwedAmountResponse: {
                typeUrl: string;
                encode(message: _195.QueryOwedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryOwedAmountResponse;
                fromPartial(object: Partial<_195.QueryOwedAmountResponse>): _195.QueryOwedAmountResponse;
                fromAmino(object: _195.QueryOwedAmountResponseAmino): _195.QueryOwedAmountResponse;
                toAmino(message: _195.QueryOwedAmountResponse): _195.QueryOwedAmountResponseAmino;
                fromAminoMsg(object: _195.QueryOwedAmountResponseAminoMsg): _195.QueryOwedAmountResponse;
                fromProtoMsg(message: _195.QueryOwedAmountResponseProtoMsg): _195.QueryOwedAmountResponse;
                toProto(message: _195.QueryOwedAmountResponse): Uint8Array;
                toProtoMsg(message: _195.QueryOwedAmountResponse): _195.QueryOwedAmountResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _195.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryModuleStateRequest;
                fromPartial(_: Partial<_195.QueryModuleStateRequest>): _195.QueryModuleStateRequest;
                fromAmino(_: _195.QueryModuleStateRequestAmino): _195.QueryModuleStateRequest;
                toAmino(_: _195.QueryModuleStateRequest): _195.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _195.QueryModuleStateRequestAminoMsg): _195.QueryModuleStateRequest;
                fromProtoMsg(message: _195.QueryModuleStateRequestProtoMsg): _195.QueryModuleStateRequest;
                toProto(message: _195.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _195.QueryModuleStateRequest): _195.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _195.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _195.QueryModuleStateResponse;
                fromPartial(object: Partial<_195.QueryModuleStateResponse>): _195.QueryModuleStateResponse;
                fromAmino(object: _195.QueryModuleStateResponseAmino): _195.QueryModuleStateResponse;
                toAmino(message: _195.QueryModuleStateResponse): _195.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _195.QueryModuleStateResponseAminoMsg): _195.QueryModuleStateResponse;
                fromProtoMsg(message: _195.QueryModuleStateResponseProtoMsg): _195.QueryModuleStateResponse;
                toProto(message: _195.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _195.QueryModuleStateResponse): _195.QueryModuleStateResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _194.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.Params;
                fromPartial(object: Partial<_194.Params>): _194.Params;
                fromAmino(object: _194.ParamsAmino): _194.Params;
                toAmino(message: _194.Params): _194.ParamsAmino;
                fromAminoMsg(object: _194.ParamsAminoMsg): _194.Params;
                fromProtoMsg(message: _194.ParamsProtoMsg): _194.Params;
                toProto(message: _194.Params): Uint8Array;
                toProtoMsg(message: _194.Params): _194.ParamsProtoMsg;
            };
            FeedConfig: {
                typeUrl: string;
                encode(message: _194.FeedConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.FeedConfig;
                fromPartial(object: Partial<_194.FeedConfig>): _194.FeedConfig;
                fromAmino(object: _194.FeedConfigAmino): _194.FeedConfig;
                toAmino(message: _194.FeedConfig): _194.FeedConfigAmino;
                fromAminoMsg(object: _194.FeedConfigAminoMsg): _194.FeedConfig;
                fromProtoMsg(message: _194.FeedConfigProtoMsg): _194.FeedConfig;
                toProto(message: _194.FeedConfig): Uint8Array;
                toProtoMsg(message: _194.FeedConfig): _194.FeedConfigProtoMsg;
            };
            FeedConfigInfo: {
                typeUrl: string;
                encode(message: _194.FeedConfigInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.FeedConfigInfo;
                fromPartial(object: Partial<_194.FeedConfigInfo>): _194.FeedConfigInfo;
                fromAmino(object: _194.FeedConfigInfoAmino): _194.FeedConfigInfo;
                toAmino(message: _194.FeedConfigInfo): _194.FeedConfigInfoAmino;
                fromAminoMsg(object: _194.FeedConfigInfoAminoMsg): _194.FeedConfigInfo;
                fromProtoMsg(message: _194.FeedConfigInfoProtoMsg): _194.FeedConfigInfo;
                toProto(message: _194.FeedConfigInfo): Uint8Array;
                toProtoMsg(message: _194.FeedConfigInfo): _194.FeedConfigInfoProtoMsg;
            };
            ModuleParams: {
                typeUrl: string;
                encode(message: _194.ModuleParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.ModuleParams;
                fromPartial(object: Partial<_194.ModuleParams>): _194.ModuleParams;
                fromAmino(object: _194.ModuleParamsAmino): _194.ModuleParams;
                toAmino(message: _194.ModuleParams): _194.ModuleParamsAmino;
                fromAminoMsg(object: _194.ModuleParamsAminoMsg): _194.ModuleParams;
                fromProtoMsg(message: _194.ModuleParamsProtoMsg): _194.ModuleParams;
                toProto(message: _194.ModuleParams): Uint8Array;
                toProtoMsg(message: _194.ModuleParams): _194.ModuleParamsProtoMsg;
            };
            ContractConfig: {
                typeUrl: string;
                encode(message: _194.ContractConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.ContractConfig;
                fromPartial(object: Partial<_194.ContractConfig>): _194.ContractConfig;
                fromAmino(object: _194.ContractConfigAmino): _194.ContractConfig;
                toAmino(message: _194.ContractConfig): _194.ContractConfigAmino;
                fromAminoMsg(object: _194.ContractConfigAminoMsg): _194.ContractConfig;
                fromProtoMsg(message: _194.ContractConfigProtoMsg): _194.ContractConfig;
                toProto(message: _194.ContractConfig): Uint8Array;
                toProtoMsg(message: _194.ContractConfig): _194.ContractConfigProtoMsg;
            };
            SetConfigProposal: {
                typeUrl: string;
                encode(message: _194.SetConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.SetConfigProposal;
                fromPartial(object: Partial<_194.SetConfigProposal>): _194.SetConfigProposal;
                fromAmino(object: _194.SetConfigProposalAmino): _194.SetConfigProposal;
                toAmino(message: _194.SetConfigProposal): _194.SetConfigProposalAmino;
                fromAminoMsg(object: _194.SetConfigProposalAminoMsg): _194.SetConfigProposal;
                fromProtoMsg(message: _194.SetConfigProposalProtoMsg): _194.SetConfigProposal;
                toProto(message: _194.SetConfigProposal): Uint8Array;
                toProtoMsg(message: _194.SetConfigProposal): _194.SetConfigProposalProtoMsg;
            };
            FeedProperties: {
                typeUrl: string;
                encode(message: _194.FeedProperties, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.FeedProperties;
                fromPartial(object: Partial<_194.FeedProperties>): _194.FeedProperties;
                fromAmino(object: _194.FeedPropertiesAmino): _194.FeedProperties;
                toAmino(message: _194.FeedProperties): _194.FeedPropertiesAmino;
                fromAminoMsg(object: _194.FeedPropertiesAminoMsg): _194.FeedProperties;
                fromProtoMsg(message: _194.FeedPropertiesProtoMsg): _194.FeedProperties;
                toProto(message: _194.FeedProperties): Uint8Array;
                toProtoMsg(message: _194.FeedProperties): _194.FeedPropertiesProtoMsg;
            };
            SetBatchConfigProposal: {
                typeUrl: string;
                encode(message: _194.SetBatchConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.SetBatchConfigProposal;
                fromPartial(object: Partial<_194.SetBatchConfigProposal>): _194.SetBatchConfigProposal;
                fromAmino(object: _194.SetBatchConfigProposalAmino): _194.SetBatchConfigProposal;
                toAmino(message: _194.SetBatchConfigProposal): _194.SetBatchConfigProposalAmino;
                fromAminoMsg(object: _194.SetBatchConfigProposalAminoMsg): _194.SetBatchConfigProposal;
                fromProtoMsg(message: _194.SetBatchConfigProposalProtoMsg): _194.SetBatchConfigProposal;
                toProto(message: _194.SetBatchConfigProposal): Uint8Array;
                toProtoMsg(message: _194.SetBatchConfigProposal): _194.SetBatchConfigProposalProtoMsg;
            };
            OracleObservationsCounts: {
                typeUrl: string;
                encode(message: _194.OracleObservationsCounts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.OracleObservationsCounts;
                fromPartial(object: Partial<_194.OracleObservationsCounts>): _194.OracleObservationsCounts;
                fromAmino(object: _194.OracleObservationsCountsAmino): _194.OracleObservationsCounts;
                toAmino(message: _194.OracleObservationsCounts): _194.OracleObservationsCountsAmino;
                fromAminoMsg(object: _194.OracleObservationsCountsAminoMsg): _194.OracleObservationsCounts;
                fromProtoMsg(message: _194.OracleObservationsCountsProtoMsg): _194.OracleObservationsCounts;
                toProto(message: _194.OracleObservationsCounts): Uint8Array;
                toProtoMsg(message: _194.OracleObservationsCounts): _194.OracleObservationsCountsProtoMsg;
            };
            GasReimbursements: {
                typeUrl: string;
                encode(message: _194.GasReimbursements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.GasReimbursements;
                fromPartial(object: Partial<_194.GasReimbursements>): _194.GasReimbursements;
                fromAmino(object: _194.GasReimbursementsAmino): _194.GasReimbursements;
                toAmino(message: _194.GasReimbursements): _194.GasReimbursementsAmino;
                fromAminoMsg(object: _194.GasReimbursementsAminoMsg): _194.GasReimbursements;
                fromProtoMsg(message: _194.GasReimbursementsProtoMsg): _194.GasReimbursements;
                toProto(message: _194.GasReimbursements): Uint8Array;
                toProtoMsg(message: _194.GasReimbursements): _194.GasReimbursementsProtoMsg;
            };
            Payee: {
                typeUrl: string;
                encode(message: _194.Payee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.Payee;
                fromPartial(object: Partial<_194.Payee>): _194.Payee;
                fromAmino(object: _194.PayeeAmino): _194.Payee;
                toAmino(message: _194.Payee): _194.PayeeAmino;
                fromAminoMsg(object: _194.PayeeAminoMsg): _194.Payee;
                fromProtoMsg(message: _194.PayeeProtoMsg): _194.Payee;
                toProto(message: _194.Payee): Uint8Array;
                toProtoMsg(message: _194.Payee): _194.PayeeProtoMsg;
            };
            Transmission: {
                typeUrl: string;
                encode(message: _194.Transmission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.Transmission;
                fromPartial(object: Partial<_194.Transmission>): _194.Transmission;
                fromAmino(object: _194.TransmissionAmino): _194.Transmission;
                toAmino(message: _194.Transmission): _194.TransmissionAmino;
                fromAminoMsg(object: _194.TransmissionAminoMsg): _194.Transmission;
                fromProtoMsg(message: _194.TransmissionProtoMsg): _194.Transmission;
                toProto(message: _194.Transmission): Uint8Array;
                toProtoMsg(message: _194.Transmission): _194.TransmissionProtoMsg;
            };
            EpochAndRound: {
                typeUrl: string;
                encode(message: _194.EpochAndRound, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.EpochAndRound;
                fromPartial(object: Partial<_194.EpochAndRound>): _194.EpochAndRound;
                fromAmino(object: _194.EpochAndRoundAmino): _194.EpochAndRound;
                toAmino(message: _194.EpochAndRound): _194.EpochAndRoundAmino;
                fromAminoMsg(object: _194.EpochAndRoundAminoMsg): _194.EpochAndRound;
                fromProtoMsg(message: _194.EpochAndRoundProtoMsg): _194.EpochAndRound;
                toProto(message: _194.EpochAndRound): Uint8Array;
                toProtoMsg(message: _194.EpochAndRound): _194.EpochAndRoundProtoMsg;
            };
            Report: {
                typeUrl: string;
                encode(message: _194.Report, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.Report;
                fromPartial(object: Partial<_194.Report>): _194.Report;
                fromAmino(object: _194.ReportAmino): _194.Report;
                toAmino(message: _194.Report): _194.ReportAmino;
                fromAminoMsg(object: _194.ReportAminoMsg): _194.Report;
                fromProtoMsg(message: _194.ReportProtoMsg): _194.Report;
                toProto(message: _194.Report): Uint8Array;
                toProtoMsg(message: _194.Report): _194.ReportProtoMsg;
            };
            ReportToSign: {
                typeUrl: string;
                encode(message: _194.ReportToSign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.ReportToSign;
                fromPartial(object: Partial<_194.ReportToSign>): _194.ReportToSign;
                fromAmino(object: _194.ReportToSignAmino): _194.ReportToSign;
                toAmino(message: _194.ReportToSign): _194.ReportToSignAmino;
                fromAminoMsg(object: _194.ReportToSignAminoMsg): _194.ReportToSign;
                fromProtoMsg(message: _194.ReportToSignProtoMsg): _194.ReportToSign;
                toProto(message: _194.ReportToSign): Uint8Array;
                toProtoMsg(message: _194.ReportToSign): _194.ReportToSignProtoMsg;
            };
            EventOraclePaid: {
                typeUrl: string;
                encode(message: _194.EventOraclePaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.EventOraclePaid;
                fromPartial(object: Partial<_194.EventOraclePaid>): _194.EventOraclePaid;
                fromAmino(object: _194.EventOraclePaidAmino): _194.EventOraclePaid;
                toAmino(message: _194.EventOraclePaid): _194.EventOraclePaidAmino;
                fromAminoMsg(object: _194.EventOraclePaidAminoMsg): _194.EventOraclePaid;
                fromProtoMsg(message: _194.EventOraclePaidProtoMsg): _194.EventOraclePaid;
                toProto(message: _194.EventOraclePaid): Uint8Array;
                toProtoMsg(message: _194.EventOraclePaid): _194.EventOraclePaidProtoMsg;
            };
            EventAnswerUpdated: {
                typeUrl: string;
                encode(message: _194.EventAnswerUpdated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.EventAnswerUpdated;
                fromPartial(object: Partial<_194.EventAnswerUpdated>): _194.EventAnswerUpdated;
                fromAmino(object: _194.EventAnswerUpdatedAmino): _194.EventAnswerUpdated;
                toAmino(message: _194.EventAnswerUpdated): _194.EventAnswerUpdatedAmino;
                fromAminoMsg(object: _194.EventAnswerUpdatedAminoMsg): _194.EventAnswerUpdated;
                fromProtoMsg(message: _194.EventAnswerUpdatedProtoMsg): _194.EventAnswerUpdated;
                toProto(message: _194.EventAnswerUpdated): Uint8Array;
                toProtoMsg(message: _194.EventAnswerUpdated): _194.EventAnswerUpdatedProtoMsg;
            };
            EventNewRound: {
                typeUrl: string;
                encode(message: _194.EventNewRound, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.EventNewRound;
                fromPartial(object: Partial<_194.EventNewRound>): _194.EventNewRound;
                fromAmino(object: _194.EventNewRoundAmino): _194.EventNewRound;
                toAmino(message: _194.EventNewRound): _194.EventNewRoundAmino;
                fromAminoMsg(object: _194.EventNewRoundAminoMsg): _194.EventNewRound;
                fromProtoMsg(message: _194.EventNewRoundProtoMsg): _194.EventNewRound;
                toProto(message: _194.EventNewRound): Uint8Array;
                toProtoMsg(message: _194.EventNewRound): _194.EventNewRoundProtoMsg;
            };
            EventTransmitted: {
                typeUrl: string;
                encode(message: _194.EventTransmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.EventTransmitted;
                fromPartial(object: Partial<_194.EventTransmitted>): _194.EventTransmitted;
                fromAmino(object: _194.EventTransmittedAmino): _194.EventTransmitted;
                toAmino(message: _194.EventTransmitted): _194.EventTransmittedAmino;
                fromAminoMsg(object: _194.EventTransmittedAminoMsg): _194.EventTransmitted;
                fromProtoMsg(message: _194.EventTransmittedProtoMsg): _194.EventTransmitted;
                toProto(message: _194.EventTransmitted): Uint8Array;
                toProtoMsg(message: _194.EventTransmitted): _194.EventTransmittedProtoMsg;
            };
            EventNewTransmission: {
                typeUrl: string;
                encode(message: _194.EventNewTransmission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.EventNewTransmission;
                fromPartial(object: Partial<_194.EventNewTransmission>): _194.EventNewTransmission;
                fromAmino(object: _194.EventNewTransmissionAmino): _194.EventNewTransmission;
                toAmino(message: _194.EventNewTransmission): _194.EventNewTransmissionAmino;
                fromAminoMsg(object: _194.EventNewTransmissionAminoMsg): _194.EventNewTransmission;
                fromProtoMsg(message: _194.EventNewTransmissionProtoMsg): _194.EventNewTransmission;
                toProto(message: _194.EventNewTransmission): Uint8Array;
                toProtoMsg(message: _194.EventNewTransmission): _194.EventNewTransmissionProtoMsg;
            };
            EventConfigSet: {
                typeUrl: string;
                encode(message: _194.EventConfigSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _194.EventConfigSet;
                fromPartial(object: Partial<_194.EventConfigSet>): _194.EventConfigSet;
                fromAmino(object: _194.EventConfigSetAmino): _194.EventConfigSet;
                toAmino(message: _194.EventConfigSet): _194.EventConfigSetAmino;
                fromAminoMsg(object: _194.EventConfigSetAminoMsg): _194.EventConfigSet;
                fromProtoMsg(message: _194.EventConfigSetProtoMsg): _194.EventConfigSet;
                toProto(message: _194.EventConfigSet): Uint8Array;
                toProtoMsg(message: _194.EventConfigSet): _194.EventConfigSetProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _193.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.GenesisState;
                fromPartial(object: Partial<_193.GenesisState>): _193.GenesisState;
                fromAmino(object: _193.GenesisStateAmino): _193.GenesisState;
                toAmino(message: _193.GenesisState): _193.GenesisStateAmino;
                fromAminoMsg(object: _193.GenesisStateAminoMsg): _193.GenesisState;
                fromProtoMsg(message: _193.GenesisStateProtoMsg): _193.GenesisState;
                toProto(message: _193.GenesisState): Uint8Array;
                toProtoMsg(message: _193.GenesisState): _193.GenesisStateProtoMsg;
            };
            FeedTransmission: {
                typeUrl: string;
                encode(message: _193.FeedTransmission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.FeedTransmission;
                fromPartial(object: Partial<_193.FeedTransmission>): _193.FeedTransmission;
                fromAmino(object: _193.FeedTransmissionAmino): _193.FeedTransmission;
                toAmino(message: _193.FeedTransmission): _193.FeedTransmissionAmino;
                fromAminoMsg(object: _193.FeedTransmissionAminoMsg): _193.FeedTransmission;
                fromProtoMsg(message: _193.FeedTransmissionProtoMsg): _193.FeedTransmission;
                toProto(message: _193.FeedTransmission): Uint8Array;
                toProtoMsg(message: _193.FeedTransmission): _193.FeedTransmissionProtoMsg;
            };
            FeedEpochAndRound: {
                typeUrl: string;
                encode(message: _193.FeedEpochAndRound, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.FeedEpochAndRound;
                fromPartial(object: Partial<_193.FeedEpochAndRound>): _193.FeedEpochAndRound;
                fromAmino(object: _193.FeedEpochAndRoundAmino): _193.FeedEpochAndRound;
                toAmino(message: _193.FeedEpochAndRound): _193.FeedEpochAndRoundAmino;
                fromAminoMsg(object: _193.FeedEpochAndRoundAminoMsg): _193.FeedEpochAndRound;
                fromProtoMsg(message: _193.FeedEpochAndRoundProtoMsg): _193.FeedEpochAndRound;
                toProto(message: _193.FeedEpochAndRound): Uint8Array;
                toProtoMsg(message: _193.FeedEpochAndRound): _193.FeedEpochAndRoundProtoMsg;
            };
            FeedLatestAggregatorRoundIDs: {
                typeUrl: string;
                encode(message: _193.FeedLatestAggregatorRoundIDs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.FeedLatestAggregatorRoundIDs;
                fromPartial(object: Partial<_193.FeedLatestAggregatorRoundIDs>): _193.FeedLatestAggregatorRoundIDs;
                fromAmino(object: _193.FeedLatestAggregatorRoundIDsAmino): _193.FeedLatestAggregatorRoundIDs;
                toAmino(message: _193.FeedLatestAggregatorRoundIDs): _193.FeedLatestAggregatorRoundIDsAmino;
                fromAminoMsg(object: _193.FeedLatestAggregatorRoundIDsAminoMsg): _193.FeedLatestAggregatorRoundIDs;
                fromProtoMsg(message: _193.FeedLatestAggregatorRoundIDsProtoMsg): _193.FeedLatestAggregatorRoundIDs;
                toProto(message: _193.FeedLatestAggregatorRoundIDs): Uint8Array;
                toProtoMsg(message: _193.FeedLatestAggregatorRoundIDs): _193.FeedLatestAggregatorRoundIDsProtoMsg;
            };
            RewardPool: {
                typeUrl: string;
                encode(message: _193.RewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.RewardPool;
                fromPartial(object: Partial<_193.RewardPool>): _193.RewardPool;
                fromAmino(object: _193.RewardPoolAmino): _193.RewardPool;
                toAmino(message: _193.RewardPool): _193.RewardPoolAmino;
                fromAminoMsg(object: _193.RewardPoolAminoMsg): _193.RewardPool;
                fromProtoMsg(message: _193.RewardPoolProtoMsg): _193.RewardPool;
                toProto(message: _193.RewardPool): Uint8Array;
                toProtoMsg(message: _193.RewardPool): _193.RewardPoolProtoMsg;
            };
            FeedCounts: {
                typeUrl: string;
                encode(message: _193.FeedCounts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.FeedCounts;
                fromPartial(object: Partial<_193.FeedCounts>): _193.FeedCounts;
                fromAmino(object: _193.FeedCountsAmino): _193.FeedCounts;
                toAmino(message: _193.FeedCounts): _193.FeedCountsAmino;
                fromAminoMsg(object: _193.FeedCountsAminoMsg): _193.FeedCounts;
                fromProtoMsg(message: _193.FeedCountsProtoMsg): _193.FeedCounts;
                toProto(message: _193.FeedCounts): Uint8Array;
                toProtoMsg(message: _193.FeedCounts): _193.FeedCountsProtoMsg;
            };
            Count: {
                typeUrl: string;
                encode(message: _193.Count, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.Count;
                fromPartial(object: Partial<_193.Count>): _193.Count;
                fromAmino(object: _193.CountAmino): _193.Count;
                toAmino(message: _193.Count): _193.CountAmino;
                fromAminoMsg(object: _193.CountAminoMsg): _193.Count;
                fromProtoMsg(message: _193.CountProtoMsg): _193.Count;
                toProto(message: _193.Count): Uint8Array;
                toProtoMsg(message: _193.Count): _193.CountProtoMsg;
            };
            PendingPayeeship: {
                typeUrl: string;
                encode(message: _193.PendingPayeeship, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _193.PendingPayeeship;
                fromPartial(object: Partial<_193.PendingPayeeship>): _193.PendingPayeeship;
                fromAmino(object: _193.PendingPayeeshipAmino): _193.PendingPayeeship;
                toAmino(message: _193.PendingPayeeship): _193.PendingPayeeshipAmino;
                fromAminoMsg(object: _193.PendingPayeeshipAminoMsg): _193.PendingPayeeship;
                fromProtoMsg(message: _193.PendingPayeeshipProtoMsg): _193.PendingPayeeship;
                toProto(message: _193.PendingPayeeship): Uint8Array;
                toProtoMsg(message: _193.PendingPayeeship): _193.PendingPayeeshipProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            MsgClientImpl: typeof _495.MsgClientImpl;
            QueryClientImpl: typeof _488.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _201.QueryParamsRequest): Promise<_201.QueryParamsResponse>;
                bandRelayers(request?: _201.QueryBandRelayersRequest): Promise<_201.QueryBandRelayersResponse>;
                bandPriceStates(request?: _201.QueryBandPriceStatesRequest): Promise<_201.QueryBandPriceStatesResponse>;
                bandIBCPriceStates(request?: _201.QueryBandIBCPriceStatesRequest): Promise<_201.QueryBandIBCPriceStatesResponse>;
                priceFeedPriceStates(request?: _201.QueryPriceFeedPriceStatesRequest): Promise<_201.QueryPriceFeedPriceStatesResponse>;
                coinbasePriceStates(request?: _201.QueryCoinbasePriceStatesRequest): Promise<_201.QueryCoinbasePriceStatesResponse>;
                providerPriceState(request: _201.QueryProviderPriceStateRequest): Promise<_201.QueryProviderPriceStateResponse>;
                oracleModuleState(request?: _201.QueryModuleStateRequest): Promise<_201.QueryModuleStateResponse>;
                historicalPriceRecords(request: _201.QueryHistoricalPriceRecordsRequest): Promise<_201.QueryHistoricalPriceRecordsResponse>;
                oracleVolatility(request: _201.QueryOracleVolatilityRequest): Promise<_201.QueryOracleVolatilityResponse>;
                oracleProvidersInfo(request?: _201.QueryOracleProvidersInfoRequest): Promise<_201.QueryOracleProvidersInfoResponse>;
                oracleProviderPrices(request: _201.QueryOracleProviderPricesRequest): Promise<_201.QueryOracleProviderPricesResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    relayProviderPrices(value: _202.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayPriceFeedPrice(value: _202.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayBandRates(value: _202.MsgRelayBandRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBandIBCRates(value: _202.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayCoinbaseMessages(value: _202.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    relayProviderPrices(value: _202.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _202.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _202.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _202.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _202.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _202.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _202.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _202.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _202.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _202.MsgRelayCoinbaseMessages;
                    };
                };
                fromPartial: {
                    relayProviderPrices(value: _202.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _202.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _202.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _202.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _202.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _202.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _202.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _202.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _202.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _202.MsgRelayCoinbaseMessages;
                    };
                };
            };
            AminoConverter: {
                "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
                    aminoType: string;
                    toAmino: (message: _202.MsgRelayProviderPrices) => _202.MsgRelayProviderPricesAmino;
                    fromAmino: (object: _202.MsgRelayProviderPricesAmino) => _202.MsgRelayProviderPrices;
                };
                "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
                    aminoType: string;
                    toAmino: (message: _202.MsgRelayPriceFeedPrice) => _202.MsgRelayPriceFeedPriceAmino;
                    fromAmino: (object: _202.MsgRelayPriceFeedPriceAmino) => _202.MsgRelayPriceFeedPrice;
                };
                "/injective.oracle.v1beta1.MsgRelayBandRates": {
                    aminoType: string;
                    toAmino: (message: _202.MsgRelayBandRates) => _202.MsgRelayBandRatesAmino;
                    fromAmino: (object: _202.MsgRelayBandRatesAmino) => _202.MsgRelayBandRates;
                };
                "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
                    aminoType: string;
                    toAmino: (message: _202.MsgRequestBandIBCRates) => _202.MsgRequestBandIBCRatesAmino;
                    fromAmino: (object: _202.MsgRequestBandIBCRatesAmino) => _202.MsgRequestBandIBCRates;
                };
                "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
                    aminoType: string;
                    toAmino: (message: _202.MsgRelayCoinbaseMessages) => _202.MsgRelayCoinbaseMessagesAmino;
                    fromAmino: (object: _202.MsgRelayCoinbaseMessagesAmino) => _202.MsgRelayCoinbaseMessages;
                };
            };
            MsgRelayProviderPrices: {
                typeUrl: string;
                encode(message: _202.MsgRelayProviderPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayProviderPrices;
                fromPartial(object: Partial<_202.MsgRelayProviderPrices>): _202.MsgRelayProviderPrices;
                fromAmino(object: _202.MsgRelayProviderPricesAmino): _202.MsgRelayProviderPrices;
                toAmino(message: _202.MsgRelayProviderPrices): _202.MsgRelayProviderPricesAmino;
                fromAminoMsg(object: _202.MsgRelayProviderPricesAminoMsg): _202.MsgRelayProviderPrices;
                fromProtoMsg(message: _202.MsgRelayProviderPricesProtoMsg): _202.MsgRelayProviderPrices;
                toProto(message: _202.MsgRelayProviderPrices): Uint8Array;
                toProtoMsg(message: _202.MsgRelayProviderPrices): _202.MsgRelayProviderPricesProtoMsg;
            };
            MsgRelayProviderPricesResponse: {
                typeUrl: string;
                encode(_: _202.MsgRelayProviderPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayProviderPricesResponse;
                fromPartial(_: Partial<_202.MsgRelayProviderPricesResponse>): _202.MsgRelayProviderPricesResponse;
                fromAmino(_: _202.MsgRelayProviderPricesResponseAmino): _202.MsgRelayProviderPricesResponse;
                toAmino(_: _202.MsgRelayProviderPricesResponse): _202.MsgRelayProviderPricesResponseAmino;
                fromAminoMsg(object: _202.MsgRelayProviderPricesResponseAminoMsg): _202.MsgRelayProviderPricesResponse;
                fromProtoMsg(message: _202.MsgRelayProviderPricesResponseProtoMsg): _202.MsgRelayProviderPricesResponse;
                toProto(message: _202.MsgRelayProviderPricesResponse): Uint8Array;
                toProtoMsg(message: _202.MsgRelayProviderPricesResponse): _202.MsgRelayProviderPricesResponseProtoMsg;
            };
            MsgRelayPriceFeedPrice: {
                typeUrl: string;
                encode(message: _202.MsgRelayPriceFeedPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayPriceFeedPrice;
                fromPartial(object: Partial<_202.MsgRelayPriceFeedPrice>): _202.MsgRelayPriceFeedPrice;
                fromAmino(object: _202.MsgRelayPriceFeedPriceAmino): _202.MsgRelayPriceFeedPrice;
                toAmino(message: _202.MsgRelayPriceFeedPrice): _202.MsgRelayPriceFeedPriceAmino;
                fromAminoMsg(object: _202.MsgRelayPriceFeedPriceAminoMsg): _202.MsgRelayPriceFeedPrice;
                fromProtoMsg(message: _202.MsgRelayPriceFeedPriceProtoMsg): _202.MsgRelayPriceFeedPrice;
                toProto(message: _202.MsgRelayPriceFeedPrice): Uint8Array;
                toProtoMsg(message: _202.MsgRelayPriceFeedPrice): _202.MsgRelayPriceFeedPriceProtoMsg;
            };
            MsgRelayPriceFeedPriceResponse: {
                typeUrl: string;
                encode(_: _202.MsgRelayPriceFeedPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayPriceFeedPriceResponse;
                fromPartial(_: Partial<_202.MsgRelayPriceFeedPriceResponse>): _202.MsgRelayPriceFeedPriceResponse;
                fromAmino(_: _202.MsgRelayPriceFeedPriceResponseAmino): _202.MsgRelayPriceFeedPriceResponse;
                toAmino(_: _202.MsgRelayPriceFeedPriceResponse): _202.MsgRelayPriceFeedPriceResponseAmino;
                fromAminoMsg(object: _202.MsgRelayPriceFeedPriceResponseAminoMsg): _202.MsgRelayPriceFeedPriceResponse;
                fromProtoMsg(message: _202.MsgRelayPriceFeedPriceResponseProtoMsg): _202.MsgRelayPriceFeedPriceResponse;
                toProto(message: _202.MsgRelayPriceFeedPriceResponse): Uint8Array;
                toProtoMsg(message: _202.MsgRelayPriceFeedPriceResponse): _202.MsgRelayPriceFeedPriceResponseProtoMsg;
            };
            MsgRelayBandRates: {
                typeUrl: string;
                encode(message: _202.MsgRelayBandRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayBandRates;
                fromPartial(object: Partial<_202.MsgRelayBandRates>): _202.MsgRelayBandRates;
                fromAmino(object: _202.MsgRelayBandRatesAmino): _202.MsgRelayBandRates;
                toAmino(message: _202.MsgRelayBandRates): _202.MsgRelayBandRatesAmino;
                fromAminoMsg(object: _202.MsgRelayBandRatesAminoMsg): _202.MsgRelayBandRates;
                fromProtoMsg(message: _202.MsgRelayBandRatesProtoMsg): _202.MsgRelayBandRates;
                toProto(message: _202.MsgRelayBandRates): Uint8Array;
                toProtoMsg(message: _202.MsgRelayBandRates): _202.MsgRelayBandRatesProtoMsg;
            };
            MsgRelayBandRatesResponse: {
                typeUrl: string;
                encode(_: _202.MsgRelayBandRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayBandRatesResponse;
                fromPartial(_: Partial<_202.MsgRelayBandRatesResponse>): _202.MsgRelayBandRatesResponse;
                fromAmino(_: _202.MsgRelayBandRatesResponseAmino): _202.MsgRelayBandRatesResponse;
                toAmino(_: _202.MsgRelayBandRatesResponse): _202.MsgRelayBandRatesResponseAmino;
                fromAminoMsg(object: _202.MsgRelayBandRatesResponseAminoMsg): _202.MsgRelayBandRatesResponse;
                fromProtoMsg(message: _202.MsgRelayBandRatesResponseProtoMsg): _202.MsgRelayBandRatesResponse;
                toProto(message: _202.MsgRelayBandRatesResponse): Uint8Array;
                toProtoMsg(message: _202.MsgRelayBandRatesResponse): _202.MsgRelayBandRatesResponseProtoMsg;
            };
            MsgRelayCoinbaseMessages: {
                typeUrl: string;
                encode(message: _202.MsgRelayCoinbaseMessages, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayCoinbaseMessages;
                fromPartial(object: Partial<_202.MsgRelayCoinbaseMessages>): _202.MsgRelayCoinbaseMessages;
                fromAmino(object: _202.MsgRelayCoinbaseMessagesAmino): _202.MsgRelayCoinbaseMessages;
                toAmino(message: _202.MsgRelayCoinbaseMessages): _202.MsgRelayCoinbaseMessagesAmino;
                fromAminoMsg(object: _202.MsgRelayCoinbaseMessagesAminoMsg): _202.MsgRelayCoinbaseMessages;
                fromProtoMsg(message: _202.MsgRelayCoinbaseMessagesProtoMsg): _202.MsgRelayCoinbaseMessages;
                toProto(message: _202.MsgRelayCoinbaseMessages): Uint8Array;
                toProtoMsg(message: _202.MsgRelayCoinbaseMessages): _202.MsgRelayCoinbaseMessagesProtoMsg;
            };
            MsgRelayCoinbaseMessagesResponse: {
                typeUrl: string;
                encode(_: _202.MsgRelayCoinbaseMessagesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRelayCoinbaseMessagesResponse;
                fromPartial(_: Partial<_202.MsgRelayCoinbaseMessagesResponse>): _202.MsgRelayCoinbaseMessagesResponse;
                fromAmino(_: _202.MsgRelayCoinbaseMessagesResponseAmino): _202.MsgRelayCoinbaseMessagesResponse;
                toAmino(_: _202.MsgRelayCoinbaseMessagesResponse): _202.MsgRelayCoinbaseMessagesResponseAmino;
                fromAminoMsg(object: _202.MsgRelayCoinbaseMessagesResponseAminoMsg): _202.MsgRelayCoinbaseMessagesResponse;
                fromProtoMsg(message: _202.MsgRelayCoinbaseMessagesResponseProtoMsg): _202.MsgRelayCoinbaseMessagesResponse;
                toProto(message: _202.MsgRelayCoinbaseMessagesResponse): Uint8Array;
                toProtoMsg(message: _202.MsgRelayCoinbaseMessagesResponse): _202.MsgRelayCoinbaseMessagesResponseProtoMsg;
            };
            MsgRequestBandIBCRates: {
                typeUrl: string;
                encode(message: _202.MsgRequestBandIBCRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRequestBandIBCRates;
                fromPartial(object: Partial<_202.MsgRequestBandIBCRates>): _202.MsgRequestBandIBCRates;
                fromAmino(object: _202.MsgRequestBandIBCRatesAmino): _202.MsgRequestBandIBCRates;
                toAmino(message: _202.MsgRequestBandIBCRates): _202.MsgRequestBandIBCRatesAmino;
                fromAminoMsg(object: _202.MsgRequestBandIBCRatesAminoMsg): _202.MsgRequestBandIBCRates;
                fromProtoMsg(message: _202.MsgRequestBandIBCRatesProtoMsg): _202.MsgRequestBandIBCRates;
                toProto(message: _202.MsgRequestBandIBCRates): Uint8Array;
                toProtoMsg(message: _202.MsgRequestBandIBCRates): _202.MsgRequestBandIBCRatesProtoMsg;
            };
            MsgRequestBandIBCRatesResponse: {
                typeUrl: string;
                encode(_: _202.MsgRequestBandIBCRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _202.MsgRequestBandIBCRatesResponse;
                fromPartial(_: Partial<_202.MsgRequestBandIBCRatesResponse>): _202.MsgRequestBandIBCRatesResponse;
                fromAmino(_: _202.MsgRequestBandIBCRatesResponseAmino): _202.MsgRequestBandIBCRatesResponse;
                toAmino(_: _202.MsgRequestBandIBCRatesResponse): _202.MsgRequestBandIBCRatesResponseAmino;
                fromAminoMsg(object: _202.MsgRequestBandIBCRatesResponseAminoMsg): _202.MsgRequestBandIBCRatesResponse;
                fromProtoMsg(message: _202.MsgRequestBandIBCRatesResponseProtoMsg): _202.MsgRequestBandIBCRatesResponse;
                toProto(message: _202.MsgRequestBandIBCRatesResponse): Uint8Array;
                toProtoMsg(message: _202.MsgRequestBandIBCRatesResponse): _202.MsgRequestBandIBCRatesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _201.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryParamsRequest;
                fromPartial(_: Partial<_201.QueryParamsRequest>): _201.QueryParamsRequest;
                fromAmino(_: _201.QueryParamsRequestAmino): _201.QueryParamsRequest;
                toAmino(_: _201.QueryParamsRequest): _201.QueryParamsRequestAmino;
                fromAminoMsg(object: _201.QueryParamsRequestAminoMsg): _201.QueryParamsRequest;
                fromProtoMsg(message: _201.QueryParamsRequestProtoMsg): _201.QueryParamsRequest;
                toProto(message: _201.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _201.QueryParamsRequest): _201.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _201.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryParamsResponse;
                fromPartial(object: Partial<_201.QueryParamsResponse>): _201.QueryParamsResponse;
                fromAmino(object: _201.QueryParamsResponseAmino): _201.QueryParamsResponse;
                toAmino(message: _201.QueryParamsResponse): _201.QueryParamsResponseAmino;
                fromAminoMsg(object: _201.QueryParamsResponseAminoMsg): _201.QueryParamsResponse;
                fromProtoMsg(message: _201.QueryParamsResponseProtoMsg): _201.QueryParamsResponse;
                toProto(message: _201.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _201.QueryParamsResponse): _201.QueryParamsResponseProtoMsg;
            };
            QueryBandRelayersRequest: {
                typeUrl: string;
                encode(_: _201.QueryBandRelayersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryBandRelayersRequest;
                fromPartial(_: Partial<_201.QueryBandRelayersRequest>): _201.QueryBandRelayersRequest;
                fromAmino(_: _201.QueryBandRelayersRequestAmino): _201.QueryBandRelayersRequest;
                toAmino(_: _201.QueryBandRelayersRequest): _201.QueryBandRelayersRequestAmino;
                fromAminoMsg(object: _201.QueryBandRelayersRequestAminoMsg): _201.QueryBandRelayersRequest;
                fromProtoMsg(message: _201.QueryBandRelayersRequestProtoMsg): _201.QueryBandRelayersRequest;
                toProto(message: _201.QueryBandRelayersRequest): Uint8Array;
                toProtoMsg(message: _201.QueryBandRelayersRequest): _201.QueryBandRelayersRequestProtoMsg;
            };
            QueryBandRelayersResponse: {
                typeUrl: string;
                encode(message: _201.QueryBandRelayersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryBandRelayersResponse;
                fromPartial(object: Partial<_201.QueryBandRelayersResponse>): _201.QueryBandRelayersResponse;
                fromAmino(object: _201.QueryBandRelayersResponseAmino): _201.QueryBandRelayersResponse;
                toAmino(message: _201.QueryBandRelayersResponse): _201.QueryBandRelayersResponseAmino;
                fromAminoMsg(object: _201.QueryBandRelayersResponseAminoMsg): _201.QueryBandRelayersResponse;
                fromProtoMsg(message: _201.QueryBandRelayersResponseProtoMsg): _201.QueryBandRelayersResponse;
                toProto(message: _201.QueryBandRelayersResponse): Uint8Array;
                toProtoMsg(message: _201.QueryBandRelayersResponse): _201.QueryBandRelayersResponseProtoMsg;
            };
            QueryBandPriceStatesRequest: {
                typeUrl: string;
                encode(_: _201.QueryBandPriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryBandPriceStatesRequest;
                fromPartial(_: Partial<_201.QueryBandPriceStatesRequest>): _201.QueryBandPriceStatesRequest;
                fromAmino(_: _201.QueryBandPriceStatesRequestAmino): _201.QueryBandPriceStatesRequest;
                toAmino(_: _201.QueryBandPriceStatesRequest): _201.QueryBandPriceStatesRequestAmino;
                fromAminoMsg(object: _201.QueryBandPriceStatesRequestAminoMsg): _201.QueryBandPriceStatesRequest;
                fromProtoMsg(message: _201.QueryBandPriceStatesRequestProtoMsg): _201.QueryBandPriceStatesRequest;
                toProto(message: _201.QueryBandPriceStatesRequest): Uint8Array;
                toProtoMsg(message: _201.QueryBandPriceStatesRequest): _201.QueryBandPriceStatesRequestProtoMsg;
            };
            QueryBandPriceStatesResponse: {
                typeUrl: string;
                encode(message: _201.QueryBandPriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryBandPriceStatesResponse;
                fromPartial(object: Partial<_201.QueryBandPriceStatesResponse>): _201.QueryBandPriceStatesResponse;
                fromAmino(object: _201.QueryBandPriceStatesResponseAmino): _201.QueryBandPriceStatesResponse;
                toAmino(message: _201.QueryBandPriceStatesResponse): _201.QueryBandPriceStatesResponseAmino;
                fromAminoMsg(object: _201.QueryBandPriceStatesResponseAminoMsg): _201.QueryBandPriceStatesResponse;
                fromProtoMsg(message: _201.QueryBandPriceStatesResponseProtoMsg): _201.QueryBandPriceStatesResponse;
                toProto(message: _201.QueryBandPriceStatesResponse): Uint8Array;
                toProtoMsg(message: _201.QueryBandPriceStatesResponse): _201.QueryBandPriceStatesResponseProtoMsg;
            };
            QueryBandIBCPriceStatesRequest: {
                typeUrl: string;
                encode(_: _201.QueryBandIBCPriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryBandIBCPriceStatesRequest;
                fromPartial(_: Partial<_201.QueryBandIBCPriceStatesRequest>): _201.QueryBandIBCPriceStatesRequest;
                fromAmino(_: _201.QueryBandIBCPriceStatesRequestAmino): _201.QueryBandIBCPriceStatesRequest;
                toAmino(_: _201.QueryBandIBCPriceStatesRequest): _201.QueryBandIBCPriceStatesRequestAmino;
                fromAminoMsg(object: _201.QueryBandIBCPriceStatesRequestAminoMsg): _201.QueryBandIBCPriceStatesRequest;
                fromProtoMsg(message: _201.QueryBandIBCPriceStatesRequestProtoMsg): _201.QueryBandIBCPriceStatesRequest;
                toProto(message: _201.QueryBandIBCPriceStatesRequest): Uint8Array;
                toProtoMsg(message: _201.QueryBandIBCPriceStatesRequest): _201.QueryBandIBCPriceStatesRequestProtoMsg;
            };
            QueryBandIBCPriceStatesResponse: {
                typeUrl: string;
                encode(message: _201.QueryBandIBCPriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryBandIBCPriceStatesResponse;
                fromPartial(object: Partial<_201.QueryBandIBCPriceStatesResponse>): _201.QueryBandIBCPriceStatesResponse;
                fromAmino(object: _201.QueryBandIBCPriceStatesResponseAmino): _201.QueryBandIBCPriceStatesResponse;
                toAmino(message: _201.QueryBandIBCPriceStatesResponse): _201.QueryBandIBCPriceStatesResponseAmino;
                fromAminoMsg(object: _201.QueryBandIBCPriceStatesResponseAminoMsg): _201.QueryBandIBCPriceStatesResponse;
                fromProtoMsg(message: _201.QueryBandIBCPriceStatesResponseProtoMsg): _201.QueryBandIBCPriceStatesResponse;
                toProto(message: _201.QueryBandIBCPriceStatesResponse): Uint8Array;
                toProtoMsg(message: _201.QueryBandIBCPriceStatesResponse): _201.QueryBandIBCPriceStatesResponseProtoMsg;
            };
            QueryPriceFeedPriceStatesRequest: {
                typeUrl: string;
                encode(_: _201.QueryPriceFeedPriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryPriceFeedPriceStatesRequest;
                fromPartial(_: Partial<_201.QueryPriceFeedPriceStatesRequest>): _201.QueryPriceFeedPriceStatesRequest;
                fromAmino(_: _201.QueryPriceFeedPriceStatesRequestAmino): _201.QueryPriceFeedPriceStatesRequest;
                toAmino(_: _201.QueryPriceFeedPriceStatesRequest): _201.QueryPriceFeedPriceStatesRequestAmino;
                fromAminoMsg(object: _201.QueryPriceFeedPriceStatesRequestAminoMsg): _201.QueryPriceFeedPriceStatesRequest;
                fromProtoMsg(message: _201.QueryPriceFeedPriceStatesRequestProtoMsg): _201.QueryPriceFeedPriceStatesRequest;
                toProto(message: _201.QueryPriceFeedPriceStatesRequest): Uint8Array;
                toProtoMsg(message: _201.QueryPriceFeedPriceStatesRequest): _201.QueryPriceFeedPriceStatesRequestProtoMsg;
            };
            QueryPriceFeedPriceStatesResponse: {
                typeUrl: string;
                encode(message: _201.QueryPriceFeedPriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryPriceFeedPriceStatesResponse;
                fromPartial(object: Partial<_201.QueryPriceFeedPriceStatesResponse>): _201.QueryPriceFeedPriceStatesResponse;
                fromAmino(object: _201.QueryPriceFeedPriceStatesResponseAmino): _201.QueryPriceFeedPriceStatesResponse;
                toAmino(message: _201.QueryPriceFeedPriceStatesResponse): _201.QueryPriceFeedPriceStatesResponseAmino;
                fromAminoMsg(object: _201.QueryPriceFeedPriceStatesResponseAminoMsg): _201.QueryPriceFeedPriceStatesResponse;
                fromProtoMsg(message: _201.QueryPriceFeedPriceStatesResponseProtoMsg): _201.QueryPriceFeedPriceStatesResponse;
                toProto(message: _201.QueryPriceFeedPriceStatesResponse): Uint8Array;
                toProtoMsg(message: _201.QueryPriceFeedPriceStatesResponse): _201.QueryPriceFeedPriceStatesResponseProtoMsg;
            };
            QueryCoinbasePriceStatesRequest: {
                typeUrl: string;
                encode(_: _201.QueryCoinbasePriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryCoinbasePriceStatesRequest;
                fromPartial(_: Partial<_201.QueryCoinbasePriceStatesRequest>): _201.QueryCoinbasePriceStatesRequest;
                fromAmino(_: _201.QueryCoinbasePriceStatesRequestAmino): _201.QueryCoinbasePriceStatesRequest;
                toAmino(_: _201.QueryCoinbasePriceStatesRequest): _201.QueryCoinbasePriceStatesRequestAmino;
                fromAminoMsg(object: _201.QueryCoinbasePriceStatesRequestAminoMsg): _201.QueryCoinbasePriceStatesRequest;
                fromProtoMsg(message: _201.QueryCoinbasePriceStatesRequestProtoMsg): _201.QueryCoinbasePriceStatesRequest;
                toProto(message: _201.QueryCoinbasePriceStatesRequest): Uint8Array;
                toProtoMsg(message: _201.QueryCoinbasePriceStatesRequest): _201.QueryCoinbasePriceStatesRequestProtoMsg;
            };
            QueryCoinbasePriceStatesResponse: {
                typeUrl: string;
                encode(message: _201.QueryCoinbasePriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryCoinbasePriceStatesResponse;
                fromPartial(object: Partial<_201.QueryCoinbasePriceStatesResponse>): _201.QueryCoinbasePriceStatesResponse;
                fromAmino(object: _201.QueryCoinbasePriceStatesResponseAmino): _201.QueryCoinbasePriceStatesResponse;
                toAmino(message: _201.QueryCoinbasePriceStatesResponse): _201.QueryCoinbasePriceStatesResponseAmino;
                fromAminoMsg(object: _201.QueryCoinbasePriceStatesResponseAminoMsg): _201.QueryCoinbasePriceStatesResponse;
                fromProtoMsg(message: _201.QueryCoinbasePriceStatesResponseProtoMsg): _201.QueryCoinbasePriceStatesResponse;
                toProto(message: _201.QueryCoinbasePriceStatesResponse): Uint8Array;
                toProtoMsg(message: _201.QueryCoinbasePriceStatesResponse): _201.QueryCoinbasePriceStatesResponseProtoMsg;
            };
            QueryProviderPriceStateRequest: {
                typeUrl: string;
                encode(message: _201.QueryProviderPriceStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryProviderPriceStateRequest;
                fromPartial(object: Partial<_201.QueryProviderPriceStateRequest>): _201.QueryProviderPriceStateRequest;
                fromAmino(object: _201.QueryProviderPriceStateRequestAmino): _201.QueryProviderPriceStateRequest;
                toAmino(message: _201.QueryProviderPriceStateRequest): _201.QueryProviderPriceStateRequestAmino;
                fromAminoMsg(object: _201.QueryProviderPriceStateRequestAminoMsg): _201.QueryProviderPriceStateRequest;
                fromProtoMsg(message: _201.QueryProviderPriceStateRequestProtoMsg): _201.QueryProviderPriceStateRequest;
                toProto(message: _201.QueryProviderPriceStateRequest): Uint8Array;
                toProtoMsg(message: _201.QueryProviderPriceStateRequest): _201.QueryProviderPriceStateRequestProtoMsg;
            };
            QueryProviderPriceStateResponse: {
                typeUrl: string;
                encode(message: _201.QueryProviderPriceStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryProviderPriceStateResponse;
                fromPartial(object: Partial<_201.QueryProviderPriceStateResponse>): _201.QueryProviderPriceStateResponse;
                fromAmino(object: _201.QueryProviderPriceStateResponseAmino): _201.QueryProviderPriceStateResponse;
                toAmino(message: _201.QueryProviderPriceStateResponse): _201.QueryProviderPriceStateResponseAmino;
                fromAminoMsg(object: _201.QueryProviderPriceStateResponseAminoMsg): _201.QueryProviderPriceStateResponse;
                fromProtoMsg(message: _201.QueryProviderPriceStateResponseProtoMsg): _201.QueryProviderPriceStateResponse;
                toProto(message: _201.QueryProviderPriceStateResponse): Uint8Array;
                toProtoMsg(message: _201.QueryProviderPriceStateResponse): _201.QueryProviderPriceStateResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _201.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryModuleStateRequest;
                fromPartial(_: Partial<_201.QueryModuleStateRequest>): _201.QueryModuleStateRequest;
                fromAmino(_: _201.QueryModuleStateRequestAmino): _201.QueryModuleStateRequest;
                toAmino(_: _201.QueryModuleStateRequest): _201.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _201.QueryModuleStateRequestAminoMsg): _201.QueryModuleStateRequest;
                fromProtoMsg(message: _201.QueryModuleStateRequestProtoMsg): _201.QueryModuleStateRequest;
                toProto(message: _201.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _201.QueryModuleStateRequest): _201.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _201.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryModuleStateResponse;
                fromPartial(object: Partial<_201.QueryModuleStateResponse>): _201.QueryModuleStateResponse;
                fromAmino(object: _201.QueryModuleStateResponseAmino): _201.QueryModuleStateResponse;
                toAmino(message: _201.QueryModuleStateResponse): _201.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _201.QueryModuleStateResponseAminoMsg): _201.QueryModuleStateResponse;
                fromProtoMsg(message: _201.QueryModuleStateResponseProtoMsg): _201.QueryModuleStateResponse;
                toProto(message: _201.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _201.QueryModuleStateResponse): _201.QueryModuleStateResponseProtoMsg;
            };
            QueryHistoricalPriceRecordsRequest: {
                typeUrl: string;
                encode(message: _201.QueryHistoricalPriceRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryHistoricalPriceRecordsRequest;
                fromPartial(object: Partial<_201.QueryHistoricalPriceRecordsRequest>): _201.QueryHistoricalPriceRecordsRequest;
                fromAmino(object: _201.QueryHistoricalPriceRecordsRequestAmino): _201.QueryHistoricalPriceRecordsRequest;
                toAmino(message: _201.QueryHistoricalPriceRecordsRequest): _201.QueryHistoricalPriceRecordsRequestAmino;
                fromAminoMsg(object: _201.QueryHistoricalPriceRecordsRequestAminoMsg): _201.QueryHistoricalPriceRecordsRequest;
                fromProtoMsg(message: _201.QueryHistoricalPriceRecordsRequestProtoMsg): _201.QueryHistoricalPriceRecordsRequest;
                toProto(message: _201.QueryHistoricalPriceRecordsRequest): Uint8Array;
                toProtoMsg(message: _201.QueryHistoricalPriceRecordsRequest): _201.QueryHistoricalPriceRecordsRequestProtoMsg;
            };
            QueryHistoricalPriceRecordsResponse: {
                typeUrl: string;
                encode(message: _201.QueryHistoricalPriceRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryHistoricalPriceRecordsResponse;
                fromPartial(object: Partial<_201.QueryHistoricalPriceRecordsResponse>): _201.QueryHistoricalPriceRecordsResponse;
                fromAmino(object: _201.QueryHistoricalPriceRecordsResponseAmino): _201.QueryHistoricalPriceRecordsResponse;
                toAmino(message: _201.QueryHistoricalPriceRecordsResponse): _201.QueryHistoricalPriceRecordsResponseAmino;
                fromAminoMsg(object: _201.QueryHistoricalPriceRecordsResponseAminoMsg): _201.QueryHistoricalPriceRecordsResponse;
                fromProtoMsg(message: _201.QueryHistoricalPriceRecordsResponseProtoMsg): _201.QueryHistoricalPriceRecordsResponse;
                toProto(message: _201.QueryHistoricalPriceRecordsResponse): Uint8Array;
                toProtoMsg(message: _201.QueryHistoricalPriceRecordsResponse): _201.QueryHistoricalPriceRecordsResponseProtoMsg;
            };
            OracleHistoryOptions: {
                typeUrl: string;
                encode(message: _201.OracleHistoryOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.OracleHistoryOptions;
                fromPartial(object: Partial<_201.OracleHistoryOptions>): _201.OracleHistoryOptions;
                fromAmino(object: _201.OracleHistoryOptionsAmino): _201.OracleHistoryOptions;
                toAmino(message: _201.OracleHistoryOptions): _201.OracleHistoryOptionsAmino;
                fromAminoMsg(object: _201.OracleHistoryOptionsAminoMsg): _201.OracleHistoryOptions;
                fromProtoMsg(message: _201.OracleHistoryOptionsProtoMsg): _201.OracleHistoryOptions;
                toProto(message: _201.OracleHistoryOptions): Uint8Array;
                toProtoMsg(message: _201.OracleHistoryOptions): _201.OracleHistoryOptionsProtoMsg;
            };
            QueryOracleVolatilityRequest: {
                typeUrl: string;
                encode(message: _201.QueryOracleVolatilityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryOracleVolatilityRequest;
                fromPartial(object: Partial<_201.QueryOracleVolatilityRequest>): _201.QueryOracleVolatilityRequest;
                fromAmino(object: _201.QueryOracleVolatilityRequestAmino): _201.QueryOracleVolatilityRequest;
                toAmino(message: _201.QueryOracleVolatilityRequest): _201.QueryOracleVolatilityRequestAmino;
                fromAminoMsg(object: _201.QueryOracleVolatilityRequestAminoMsg): _201.QueryOracleVolatilityRequest;
                fromProtoMsg(message: _201.QueryOracleVolatilityRequestProtoMsg): _201.QueryOracleVolatilityRequest;
                toProto(message: _201.QueryOracleVolatilityRequest): Uint8Array;
                toProtoMsg(message: _201.QueryOracleVolatilityRequest): _201.QueryOracleVolatilityRequestProtoMsg;
            };
            QueryOracleVolatilityResponse: {
                typeUrl: string;
                encode(message: _201.QueryOracleVolatilityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryOracleVolatilityResponse;
                fromPartial(object: Partial<_201.QueryOracleVolatilityResponse>): _201.QueryOracleVolatilityResponse;
                fromAmino(object: _201.QueryOracleVolatilityResponseAmino): _201.QueryOracleVolatilityResponse;
                toAmino(message: _201.QueryOracleVolatilityResponse): _201.QueryOracleVolatilityResponseAmino;
                fromAminoMsg(object: _201.QueryOracleVolatilityResponseAminoMsg): _201.QueryOracleVolatilityResponse;
                fromProtoMsg(message: _201.QueryOracleVolatilityResponseProtoMsg): _201.QueryOracleVolatilityResponse;
                toProto(message: _201.QueryOracleVolatilityResponse): Uint8Array;
                toProtoMsg(message: _201.QueryOracleVolatilityResponse): _201.QueryOracleVolatilityResponseProtoMsg;
            };
            QueryOracleProvidersInfoRequest: {
                typeUrl: string;
                encode(_: _201.QueryOracleProvidersInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryOracleProvidersInfoRequest;
                fromPartial(_: Partial<_201.QueryOracleProvidersInfoRequest>): _201.QueryOracleProvidersInfoRequest;
                fromAmino(_: _201.QueryOracleProvidersInfoRequestAmino): _201.QueryOracleProvidersInfoRequest;
                toAmino(_: _201.QueryOracleProvidersInfoRequest): _201.QueryOracleProvidersInfoRequestAmino;
                fromAminoMsg(object: _201.QueryOracleProvidersInfoRequestAminoMsg): _201.QueryOracleProvidersInfoRequest;
                fromProtoMsg(message: _201.QueryOracleProvidersInfoRequestProtoMsg): _201.QueryOracleProvidersInfoRequest;
                toProto(message: _201.QueryOracleProvidersInfoRequest): Uint8Array;
                toProtoMsg(message: _201.QueryOracleProvidersInfoRequest): _201.QueryOracleProvidersInfoRequestProtoMsg;
            };
            QueryOracleProvidersInfoResponse: {
                typeUrl: string;
                encode(message: _201.QueryOracleProvidersInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryOracleProvidersInfoResponse;
                fromPartial(object: Partial<_201.QueryOracleProvidersInfoResponse>): _201.QueryOracleProvidersInfoResponse;
                fromAmino(object: _201.QueryOracleProvidersInfoResponseAmino): _201.QueryOracleProvidersInfoResponse;
                toAmino(message: _201.QueryOracleProvidersInfoResponse): _201.QueryOracleProvidersInfoResponseAmino;
                fromAminoMsg(object: _201.QueryOracleProvidersInfoResponseAminoMsg): _201.QueryOracleProvidersInfoResponse;
                fromProtoMsg(message: _201.QueryOracleProvidersInfoResponseProtoMsg): _201.QueryOracleProvidersInfoResponse;
                toProto(message: _201.QueryOracleProvidersInfoResponse): Uint8Array;
                toProtoMsg(message: _201.QueryOracleProvidersInfoResponse): _201.QueryOracleProvidersInfoResponseProtoMsg;
            };
            QueryOracleProviderPricesRequest: {
                typeUrl: string;
                encode(message: _201.QueryOracleProviderPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryOracleProviderPricesRequest;
                fromPartial(object: Partial<_201.QueryOracleProviderPricesRequest>): _201.QueryOracleProviderPricesRequest;
                fromAmino(object: _201.QueryOracleProviderPricesRequestAmino): _201.QueryOracleProviderPricesRequest;
                toAmino(message: _201.QueryOracleProviderPricesRequest): _201.QueryOracleProviderPricesRequestAmino;
                fromAminoMsg(object: _201.QueryOracleProviderPricesRequestAminoMsg): _201.QueryOracleProviderPricesRequest;
                fromProtoMsg(message: _201.QueryOracleProviderPricesRequestProtoMsg): _201.QueryOracleProviderPricesRequest;
                toProto(message: _201.QueryOracleProviderPricesRequest): Uint8Array;
                toProtoMsg(message: _201.QueryOracleProviderPricesRequest): _201.QueryOracleProviderPricesRequestProtoMsg;
            };
            QueryOracleProviderPricesResponse: {
                typeUrl: string;
                encode(message: _201.QueryOracleProviderPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _201.QueryOracleProviderPricesResponse;
                fromPartial(object: Partial<_201.QueryOracleProviderPricesResponse>): _201.QueryOracleProviderPricesResponse;
                fromAmino(object: _201.QueryOracleProviderPricesResponseAmino): _201.QueryOracleProviderPricesResponse;
                toAmino(message: _201.QueryOracleProviderPricesResponse): _201.QueryOracleProviderPricesResponseAmino;
                fromAminoMsg(object: _201.QueryOracleProviderPricesResponseAminoMsg): _201.QueryOracleProviderPricesResponse;
                fromProtoMsg(message: _201.QueryOracleProviderPricesResponseProtoMsg): _201.QueryOracleProviderPricesResponse;
                toProto(message: _201.QueryOracleProviderPricesResponse): Uint8Array;
                toProtoMsg(message: _201.QueryOracleProviderPricesResponse): _201.QueryOracleProviderPricesResponseProtoMsg;
            };
            GrantBandOraclePrivilegeProposal: {
                typeUrl: string;
                encode(message: _200.GrantBandOraclePrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.GrantBandOraclePrivilegeProposal;
                fromPartial(object: Partial<_200.GrantBandOraclePrivilegeProposal>): _200.GrantBandOraclePrivilegeProposal;
                fromAmino(object: _200.GrantBandOraclePrivilegeProposalAmino): _200.GrantBandOraclePrivilegeProposal;
                toAmino(message: _200.GrantBandOraclePrivilegeProposal): _200.GrantBandOraclePrivilegeProposalAmino;
                fromAminoMsg(object: _200.GrantBandOraclePrivilegeProposalAminoMsg): _200.GrantBandOraclePrivilegeProposal;
                fromProtoMsg(message: _200.GrantBandOraclePrivilegeProposalProtoMsg): _200.GrantBandOraclePrivilegeProposal;
                toProto(message: _200.GrantBandOraclePrivilegeProposal): Uint8Array;
                toProtoMsg(message: _200.GrantBandOraclePrivilegeProposal): _200.GrantBandOraclePrivilegeProposalProtoMsg;
            };
            RevokeBandOraclePrivilegeProposal: {
                typeUrl: string;
                encode(message: _200.RevokeBandOraclePrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.RevokeBandOraclePrivilegeProposal;
                fromPartial(object: Partial<_200.RevokeBandOraclePrivilegeProposal>): _200.RevokeBandOraclePrivilegeProposal;
                fromAmino(object: _200.RevokeBandOraclePrivilegeProposalAmino): _200.RevokeBandOraclePrivilegeProposal;
                toAmino(message: _200.RevokeBandOraclePrivilegeProposal): _200.RevokeBandOraclePrivilegeProposalAmino;
                fromAminoMsg(object: _200.RevokeBandOraclePrivilegeProposalAminoMsg): _200.RevokeBandOraclePrivilegeProposal;
                fromProtoMsg(message: _200.RevokeBandOraclePrivilegeProposalProtoMsg): _200.RevokeBandOraclePrivilegeProposal;
                toProto(message: _200.RevokeBandOraclePrivilegeProposal): Uint8Array;
                toProtoMsg(message: _200.RevokeBandOraclePrivilegeProposal): _200.RevokeBandOraclePrivilegeProposalProtoMsg;
            };
            GrantPriceFeederPrivilegeProposal: {
                typeUrl: string;
                encode(message: _200.GrantPriceFeederPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.GrantPriceFeederPrivilegeProposal;
                fromPartial(object: Partial<_200.GrantPriceFeederPrivilegeProposal>): _200.GrantPriceFeederPrivilegeProposal;
                fromAmino(object: _200.GrantPriceFeederPrivilegeProposalAmino): _200.GrantPriceFeederPrivilegeProposal;
                toAmino(message: _200.GrantPriceFeederPrivilegeProposal): _200.GrantPriceFeederPrivilegeProposalAmino;
                fromAminoMsg(object: _200.GrantPriceFeederPrivilegeProposalAminoMsg): _200.GrantPriceFeederPrivilegeProposal;
                fromProtoMsg(message: _200.GrantPriceFeederPrivilegeProposalProtoMsg): _200.GrantPriceFeederPrivilegeProposal;
                toProto(message: _200.GrantPriceFeederPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _200.GrantPriceFeederPrivilegeProposal): _200.GrantPriceFeederPrivilegeProposalProtoMsg;
            };
            GrantProviderPrivilegeProposal: {
                typeUrl: string;
                encode(message: _200.GrantProviderPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.GrantProviderPrivilegeProposal;
                fromPartial(object: Partial<_200.GrantProviderPrivilegeProposal>): _200.GrantProviderPrivilegeProposal;
                fromAmino(object: _200.GrantProviderPrivilegeProposalAmino): _200.GrantProviderPrivilegeProposal;
                toAmino(message: _200.GrantProviderPrivilegeProposal): _200.GrantProviderPrivilegeProposalAmino;
                fromAminoMsg(object: _200.GrantProviderPrivilegeProposalAminoMsg): _200.GrantProviderPrivilegeProposal;
                fromProtoMsg(message: _200.GrantProviderPrivilegeProposalProtoMsg): _200.GrantProviderPrivilegeProposal;
                toProto(message: _200.GrantProviderPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _200.GrantProviderPrivilegeProposal): _200.GrantProviderPrivilegeProposalProtoMsg;
            };
            RevokeProviderPrivilegeProposal: {
                typeUrl: string;
                encode(message: _200.RevokeProviderPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.RevokeProviderPrivilegeProposal;
                fromPartial(object: Partial<_200.RevokeProviderPrivilegeProposal>): _200.RevokeProviderPrivilegeProposal;
                fromAmino(object: _200.RevokeProviderPrivilegeProposalAmino): _200.RevokeProviderPrivilegeProposal;
                toAmino(message: _200.RevokeProviderPrivilegeProposal): _200.RevokeProviderPrivilegeProposalAmino;
                fromAminoMsg(object: _200.RevokeProviderPrivilegeProposalAminoMsg): _200.RevokeProviderPrivilegeProposal;
                fromProtoMsg(message: _200.RevokeProviderPrivilegeProposalProtoMsg): _200.RevokeProviderPrivilegeProposal;
                toProto(message: _200.RevokeProviderPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _200.RevokeProviderPrivilegeProposal): _200.RevokeProviderPrivilegeProposalProtoMsg;
            };
            RevokePriceFeederPrivilegeProposal: {
                typeUrl: string;
                encode(message: _200.RevokePriceFeederPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.RevokePriceFeederPrivilegeProposal;
                fromPartial(object: Partial<_200.RevokePriceFeederPrivilegeProposal>): _200.RevokePriceFeederPrivilegeProposal;
                fromAmino(object: _200.RevokePriceFeederPrivilegeProposalAmino): _200.RevokePriceFeederPrivilegeProposal;
                toAmino(message: _200.RevokePriceFeederPrivilegeProposal): _200.RevokePriceFeederPrivilegeProposalAmino;
                fromAminoMsg(object: _200.RevokePriceFeederPrivilegeProposalAminoMsg): _200.RevokePriceFeederPrivilegeProposal;
                fromProtoMsg(message: _200.RevokePriceFeederPrivilegeProposalProtoMsg): _200.RevokePriceFeederPrivilegeProposal;
                toProto(message: _200.RevokePriceFeederPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _200.RevokePriceFeederPrivilegeProposal): _200.RevokePriceFeederPrivilegeProposalProtoMsg;
            };
            AuthorizeBandOracleRequestProposal: {
                typeUrl: string;
                encode(message: _200.AuthorizeBandOracleRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.AuthorizeBandOracleRequestProposal;
                fromPartial(object: Partial<_200.AuthorizeBandOracleRequestProposal>): _200.AuthorizeBandOracleRequestProposal;
                fromAmino(object: _200.AuthorizeBandOracleRequestProposalAmino): _200.AuthorizeBandOracleRequestProposal;
                toAmino(message: _200.AuthorizeBandOracleRequestProposal): _200.AuthorizeBandOracleRequestProposalAmino;
                fromAminoMsg(object: _200.AuthorizeBandOracleRequestProposalAminoMsg): _200.AuthorizeBandOracleRequestProposal;
                fromProtoMsg(message: _200.AuthorizeBandOracleRequestProposalProtoMsg): _200.AuthorizeBandOracleRequestProposal;
                toProto(message: _200.AuthorizeBandOracleRequestProposal): Uint8Array;
                toProtoMsg(message: _200.AuthorizeBandOracleRequestProposal): _200.AuthorizeBandOracleRequestProposalProtoMsg;
            };
            UpdateBandOracleRequestProposal: {
                typeUrl: string;
                encode(message: _200.UpdateBandOracleRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.UpdateBandOracleRequestProposal;
                fromPartial(object: Partial<_200.UpdateBandOracleRequestProposal>): _200.UpdateBandOracleRequestProposal;
                fromAmino(object: _200.UpdateBandOracleRequestProposalAmino): _200.UpdateBandOracleRequestProposal;
                toAmino(message: _200.UpdateBandOracleRequestProposal): _200.UpdateBandOracleRequestProposalAmino;
                fromAminoMsg(object: _200.UpdateBandOracleRequestProposalAminoMsg): _200.UpdateBandOracleRequestProposal;
                fromProtoMsg(message: _200.UpdateBandOracleRequestProposalProtoMsg): _200.UpdateBandOracleRequestProposal;
                toProto(message: _200.UpdateBandOracleRequestProposal): Uint8Array;
                toProtoMsg(message: _200.UpdateBandOracleRequestProposal): _200.UpdateBandOracleRequestProposalProtoMsg;
            };
            EnableBandIBCProposal: {
                typeUrl: string;
                encode(message: _200.EnableBandIBCProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _200.EnableBandIBCProposal;
                fromPartial(object: Partial<_200.EnableBandIBCProposal>): _200.EnableBandIBCProposal;
                fromAmino(object: _200.EnableBandIBCProposalAmino): _200.EnableBandIBCProposal;
                toAmino(message: _200.EnableBandIBCProposal): _200.EnableBandIBCProposalAmino;
                fromAminoMsg(object: _200.EnableBandIBCProposalAminoMsg): _200.EnableBandIBCProposal;
                fromProtoMsg(message: _200.EnableBandIBCProposalProtoMsg): _200.EnableBandIBCProposal;
                toProto(message: _200.EnableBandIBCProposal): Uint8Array;
                toProtoMsg(message: _200.EnableBandIBCProposal): _200.EnableBandIBCProposalProtoMsg;
            };
            oracleTypeFromJSON(object: any): _199.OracleType;
            oracleTypeToJSON(object: _199.OracleType): string;
            OracleType: typeof _199.OracleType;
            OracleTypeSDKType: typeof _199.OracleType;
            OracleTypeAmino: typeof _199.OracleType;
            Params: {
                typeUrl: string;
                encode(_: _199.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.Params;
                fromPartial(_: Partial<_199.Params>): _199.Params;
                fromAmino(_: _199.ParamsAmino): _199.Params;
                toAmino(_: _199.Params): _199.ParamsAmino;
                fromAminoMsg(object: _199.ParamsAminoMsg): _199.Params;
                fromProtoMsg(message: _199.ParamsProtoMsg): _199.Params;
                toProto(message: _199.Params): Uint8Array;
                toProtoMsg(message: _199.Params): _199.ParamsProtoMsg;
            };
            OracleInfo: {
                typeUrl: string;
                encode(message: _199.OracleInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.OracleInfo;
                fromPartial(object: Partial<_199.OracleInfo>): _199.OracleInfo;
                fromAmino(object: _199.OracleInfoAmino): _199.OracleInfo;
                toAmino(message: _199.OracleInfo): _199.OracleInfoAmino;
                fromAminoMsg(object: _199.OracleInfoAminoMsg): _199.OracleInfo;
                fromProtoMsg(message: _199.OracleInfoProtoMsg): _199.OracleInfo;
                toProto(message: _199.OracleInfo): Uint8Array;
                toProtoMsg(message: _199.OracleInfo): _199.OracleInfoProtoMsg;
            };
            ChainlinkPriceState: {
                typeUrl: string;
                encode(message: _199.ChainlinkPriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.ChainlinkPriceState;
                fromPartial(object: Partial<_199.ChainlinkPriceState>): _199.ChainlinkPriceState;
                fromAmino(object: _199.ChainlinkPriceStateAmino): _199.ChainlinkPriceState;
                toAmino(message: _199.ChainlinkPriceState): _199.ChainlinkPriceStateAmino;
                fromAminoMsg(object: _199.ChainlinkPriceStateAminoMsg): _199.ChainlinkPriceState;
                fromProtoMsg(message: _199.ChainlinkPriceStateProtoMsg): _199.ChainlinkPriceState;
                toProto(message: _199.ChainlinkPriceState): Uint8Array;
                toProtoMsg(message: _199.ChainlinkPriceState): _199.ChainlinkPriceStateProtoMsg;
            };
            BandPriceState: {
                typeUrl: string;
                encode(message: _199.BandPriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.BandPriceState;
                fromPartial(object: Partial<_199.BandPriceState>): _199.BandPriceState;
                fromAmino(object: _199.BandPriceStateAmino): _199.BandPriceState;
                toAmino(message: _199.BandPriceState): _199.BandPriceStateAmino;
                fromAminoMsg(object: _199.BandPriceStateAminoMsg): _199.BandPriceState;
                fromProtoMsg(message: _199.BandPriceStateProtoMsg): _199.BandPriceState;
                toProto(message: _199.BandPriceState): Uint8Array;
                toProtoMsg(message: _199.BandPriceState): _199.BandPriceStateProtoMsg;
            };
            PriceFeedState: {
                typeUrl: string;
                encode(message: _199.PriceFeedState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.PriceFeedState;
                fromPartial(object: Partial<_199.PriceFeedState>): _199.PriceFeedState;
                fromAmino(object: _199.PriceFeedStateAmino): _199.PriceFeedState;
                toAmino(message: _199.PriceFeedState): _199.PriceFeedStateAmino;
                fromAminoMsg(object: _199.PriceFeedStateAminoMsg): _199.PriceFeedState;
                fromProtoMsg(message: _199.PriceFeedStateProtoMsg): _199.PriceFeedState;
                toProto(message: _199.PriceFeedState): Uint8Array;
                toProtoMsg(message: _199.PriceFeedState): _199.PriceFeedStateProtoMsg;
            };
            ProviderInfo: {
                typeUrl: string;
                encode(message: _199.ProviderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.ProviderInfo;
                fromPartial(object: Partial<_199.ProviderInfo>): _199.ProviderInfo;
                fromAmino(object: _199.ProviderInfoAmino): _199.ProviderInfo;
                toAmino(message: _199.ProviderInfo): _199.ProviderInfoAmino;
                fromAminoMsg(object: _199.ProviderInfoAminoMsg): _199.ProviderInfo;
                fromProtoMsg(message: _199.ProviderInfoProtoMsg): _199.ProviderInfo;
                toProto(message: _199.ProviderInfo): Uint8Array;
                toProtoMsg(message: _199.ProviderInfo): _199.ProviderInfoProtoMsg;
            };
            ProviderState: {
                typeUrl: string;
                encode(message: _199.ProviderState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.ProviderState;
                fromPartial(object: Partial<_199.ProviderState>): _199.ProviderState;
                fromAmino(object: _199.ProviderStateAmino): _199.ProviderState;
                toAmino(message: _199.ProviderState): _199.ProviderStateAmino;
                fromAminoMsg(object: _199.ProviderStateAminoMsg): _199.ProviderState;
                fromProtoMsg(message: _199.ProviderStateProtoMsg): _199.ProviderState;
                toProto(message: _199.ProviderState): Uint8Array;
                toProtoMsg(message: _199.ProviderState): _199.ProviderStateProtoMsg;
            };
            ProviderPriceState: {
                typeUrl: string;
                encode(message: _199.ProviderPriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.ProviderPriceState;
                fromPartial(object: Partial<_199.ProviderPriceState>): _199.ProviderPriceState;
                fromAmino(object: _199.ProviderPriceStateAmino): _199.ProviderPriceState;
                toAmino(message: _199.ProviderPriceState): _199.ProviderPriceStateAmino;
                fromAminoMsg(object: _199.ProviderPriceStateAminoMsg): _199.ProviderPriceState;
                fromProtoMsg(message: _199.ProviderPriceStateProtoMsg): _199.ProviderPriceState;
                toProto(message: _199.ProviderPriceState): Uint8Array;
                toProtoMsg(message: _199.ProviderPriceState): _199.ProviderPriceStateProtoMsg;
            };
            PriceFeedInfo: {
                typeUrl: string;
                encode(message: _199.PriceFeedInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.PriceFeedInfo;
                fromPartial(object: Partial<_199.PriceFeedInfo>): _199.PriceFeedInfo;
                fromAmino(object: _199.PriceFeedInfoAmino): _199.PriceFeedInfo;
                toAmino(message: _199.PriceFeedInfo): _199.PriceFeedInfoAmino;
                fromAminoMsg(object: _199.PriceFeedInfoAminoMsg): _199.PriceFeedInfo;
                fromProtoMsg(message: _199.PriceFeedInfoProtoMsg): _199.PriceFeedInfo;
                toProto(message: _199.PriceFeedInfo): Uint8Array;
                toProtoMsg(message: _199.PriceFeedInfo): _199.PriceFeedInfoProtoMsg;
            };
            PriceFeedPrice: {
                typeUrl: string;
                encode(message: _199.PriceFeedPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.PriceFeedPrice;
                fromPartial(object: Partial<_199.PriceFeedPrice>): _199.PriceFeedPrice;
                fromAmino(object: _199.PriceFeedPriceAmino): _199.PriceFeedPrice;
                toAmino(message: _199.PriceFeedPrice): _199.PriceFeedPriceAmino;
                fromAminoMsg(object: _199.PriceFeedPriceAminoMsg): _199.PriceFeedPrice;
                fromProtoMsg(message: _199.PriceFeedPriceProtoMsg): _199.PriceFeedPrice;
                toProto(message: _199.PriceFeedPrice): Uint8Array;
                toProtoMsg(message: _199.PriceFeedPrice): _199.PriceFeedPriceProtoMsg;
            };
            CoinbasePriceState: {
                typeUrl: string;
                encode(message: _199.CoinbasePriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.CoinbasePriceState;
                fromPartial(object: Partial<_199.CoinbasePriceState>): _199.CoinbasePriceState;
                fromAmino(object: _199.CoinbasePriceStateAmino): _199.CoinbasePriceState;
                toAmino(message: _199.CoinbasePriceState): _199.CoinbasePriceStateAmino;
                fromAminoMsg(object: _199.CoinbasePriceStateAminoMsg): _199.CoinbasePriceState;
                fromProtoMsg(message: _199.CoinbasePriceStateProtoMsg): _199.CoinbasePriceState;
                toProto(message: _199.CoinbasePriceState): Uint8Array;
                toProtoMsg(message: _199.CoinbasePriceState): _199.CoinbasePriceStateProtoMsg;
            };
            PriceState: {
                typeUrl: string;
                encode(message: _199.PriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.PriceState;
                fromPartial(object: Partial<_199.PriceState>): _199.PriceState;
                fromAmino(object: _199.PriceStateAmino): _199.PriceState;
                toAmino(message: _199.PriceState): _199.PriceStateAmino;
                fromAminoMsg(object: _199.PriceStateAminoMsg): _199.PriceState;
                fromProtoMsg(message: _199.PriceStateProtoMsg): _199.PriceState;
                toProto(message: _199.PriceState): Uint8Array;
                toProtoMsg(message: _199.PriceState): _199.PriceStateProtoMsg;
            };
            BandOracleRequest: {
                typeUrl: string;
                encode(message: _199.BandOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.BandOracleRequest;
                fromPartial(object: Partial<_199.BandOracleRequest>): _199.BandOracleRequest;
                fromAmino(object: _199.BandOracleRequestAmino): _199.BandOracleRequest;
                toAmino(message: _199.BandOracleRequest): _199.BandOracleRequestAmino;
                fromAminoMsg(object: _199.BandOracleRequestAminoMsg): _199.BandOracleRequest;
                fromProtoMsg(message: _199.BandOracleRequestProtoMsg): _199.BandOracleRequest;
                toProto(message: _199.BandOracleRequest): Uint8Array;
                toProtoMsg(message: _199.BandOracleRequest): _199.BandOracleRequestProtoMsg;
            };
            BandIBCParams: {
                typeUrl: string;
                encode(message: _199.BandIBCParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.BandIBCParams;
                fromPartial(object: Partial<_199.BandIBCParams>): _199.BandIBCParams;
                fromAmino(object: _199.BandIBCParamsAmino): _199.BandIBCParams;
                toAmino(message: _199.BandIBCParams): _199.BandIBCParamsAmino;
                fromAminoMsg(object: _199.BandIBCParamsAminoMsg): _199.BandIBCParams;
                fromProtoMsg(message: _199.BandIBCParamsProtoMsg): _199.BandIBCParams;
                toProto(message: _199.BandIBCParams): Uint8Array;
                toProtoMsg(message: _199.BandIBCParams): _199.BandIBCParamsProtoMsg;
            };
            SymbolPriceTimestamp: {
                typeUrl: string;
                encode(message: _199.SymbolPriceTimestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.SymbolPriceTimestamp;
                fromPartial(object: Partial<_199.SymbolPriceTimestamp>): _199.SymbolPriceTimestamp;
                fromAmino(object: _199.SymbolPriceTimestampAmino): _199.SymbolPriceTimestamp;
                toAmino(message: _199.SymbolPriceTimestamp): _199.SymbolPriceTimestampAmino;
                fromAminoMsg(object: _199.SymbolPriceTimestampAminoMsg): _199.SymbolPriceTimestamp;
                fromProtoMsg(message: _199.SymbolPriceTimestampProtoMsg): _199.SymbolPriceTimestamp;
                toProto(message: _199.SymbolPriceTimestamp): Uint8Array;
                toProtoMsg(message: _199.SymbolPriceTimestamp): _199.SymbolPriceTimestampProtoMsg;
            };
            LastPriceTimestamps: {
                typeUrl: string;
                encode(message: _199.LastPriceTimestamps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.LastPriceTimestamps;
                fromPartial(object: Partial<_199.LastPriceTimestamps>): _199.LastPriceTimestamps;
                fromAmino(object: _199.LastPriceTimestampsAmino): _199.LastPriceTimestamps;
                toAmino(message: _199.LastPriceTimestamps): _199.LastPriceTimestampsAmino;
                fromAminoMsg(object: _199.LastPriceTimestampsAminoMsg): _199.LastPriceTimestamps;
                fromProtoMsg(message: _199.LastPriceTimestampsProtoMsg): _199.LastPriceTimestamps;
                toProto(message: _199.LastPriceTimestamps): Uint8Array;
                toProtoMsg(message: _199.LastPriceTimestamps): _199.LastPriceTimestampsProtoMsg;
            };
            PriceRecords: {
                typeUrl: string;
                encode(message: _199.PriceRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.PriceRecords;
                fromPartial(object: Partial<_199.PriceRecords>): _199.PriceRecords;
                fromAmino(object: _199.PriceRecordsAmino): _199.PriceRecords;
                toAmino(message: _199.PriceRecords): _199.PriceRecordsAmino;
                fromAminoMsg(object: _199.PriceRecordsAminoMsg): _199.PriceRecords;
                fromProtoMsg(message: _199.PriceRecordsProtoMsg): _199.PriceRecords;
                toProto(message: _199.PriceRecords): Uint8Array;
                toProtoMsg(message: _199.PriceRecords): _199.PriceRecordsProtoMsg;
            };
            PriceRecord: {
                typeUrl: string;
                encode(message: _199.PriceRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.PriceRecord;
                fromPartial(object: Partial<_199.PriceRecord>): _199.PriceRecord;
                fromAmino(object: _199.PriceRecordAmino): _199.PriceRecord;
                toAmino(message: _199.PriceRecord): _199.PriceRecordAmino;
                fromAminoMsg(object: _199.PriceRecordAminoMsg): _199.PriceRecord;
                fromProtoMsg(message: _199.PriceRecordProtoMsg): _199.PriceRecord;
                toProto(message: _199.PriceRecord): Uint8Array;
                toProtoMsg(message: _199.PriceRecord): _199.PriceRecordProtoMsg;
            };
            MetadataStatistics: {
                typeUrl: string;
                encode(message: _199.MetadataStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _199.MetadataStatistics;
                fromPartial(object: Partial<_199.MetadataStatistics>): _199.MetadataStatistics;
                fromAmino(object: _199.MetadataStatisticsAmino): _199.MetadataStatistics;
                toAmino(message: _199.MetadataStatistics): _199.MetadataStatisticsAmino;
                fromAminoMsg(object: _199.MetadataStatisticsAminoMsg): _199.MetadataStatistics;
                fromProtoMsg(message: _199.MetadataStatisticsProtoMsg): _199.MetadataStatistics;
                toProto(message: _199.MetadataStatistics): Uint8Array;
                toProtoMsg(message: _199.MetadataStatistics): _199.MetadataStatisticsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _198.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _198.GenesisState;
                fromPartial(object: Partial<_198.GenesisState>): _198.GenesisState;
                fromAmino(object: _198.GenesisStateAmino): _198.GenesisState;
                toAmino(message: _198.GenesisState): _198.GenesisStateAmino;
                fromAminoMsg(object: _198.GenesisStateAminoMsg): _198.GenesisState;
                fromProtoMsg(message: _198.GenesisStateProtoMsg): _198.GenesisState;
                toProto(message: _198.GenesisState): Uint8Array;
                toProtoMsg(message: _198.GenesisState): _198.GenesisStateProtoMsg;
            };
            CalldataRecord: {
                typeUrl: string;
                encode(message: _198.CalldataRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _198.CalldataRecord;
                fromPartial(object: Partial<_198.CalldataRecord>): _198.CalldataRecord;
                fromAmino(object: _198.CalldataRecordAmino): _198.CalldataRecord;
                toAmino(message: _198.CalldataRecord): _198.CalldataRecordAmino;
                fromAminoMsg(object: _198.CalldataRecordAminoMsg): _198.CalldataRecord;
                fromProtoMsg(message: _198.CalldataRecordProtoMsg): _198.CalldataRecord;
                toProto(message: _198.CalldataRecord): Uint8Array;
                toProtoMsg(message: _198.CalldataRecord): _198.CalldataRecordProtoMsg;
            };
            SetChainlinkPriceEvent: {
                typeUrl: string;
                encode(message: _197.SetChainlinkPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.SetChainlinkPriceEvent;
                fromPartial(object: Partial<_197.SetChainlinkPriceEvent>): _197.SetChainlinkPriceEvent;
                fromAmino(object: _197.SetChainlinkPriceEventAmino): _197.SetChainlinkPriceEvent;
                toAmino(message: _197.SetChainlinkPriceEvent): _197.SetChainlinkPriceEventAmino;
                fromAminoMsg(object: _197.SetChainlinkPriceEventAminoMsg): _197.SetChainlinkPriceEvent;
                fromProtoMsg(message: _197.SetChainlinkPriceEventProtoMsg): _197.SetChainlinkPriceEvent;
                toProto(message: _197.SetChainlinkPriceEvent): Uint8Array;
                toProtoMsg(message: _197.SetChainlinkPriceEvent): _197.SetChainlinkPriceEventProtoMsg;
            };
            SetBandPriceEvent: {
                typeUrl: string;
                encode(message: _197.SetBandPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.SetBandPriceEvent;
                fromPartial(object: Partial<_197.SetBandPriceEvent>): _197.SetBandPriceEvent;
                fromAmino(object: _197.SetBandPriceEventAmino): _197.SetBandPriceEvent;
                toAmino(message: _197.SetBandPriceEvent): _197.SetBandPriceEventAmino;
                fromAminoMsg(object: _197.SetBandPriceEventAminoMsg): _197.SetBandPriceEvent;
                fromProtoMsg(message: _197.SetBandPriceEventProtoMsg): _197.SetBandPriceEvent;
                toProto(message: _197.SetBandPriceEvent): Uint8Array;
                toProtoMsg(message: _197.SetBandPriceEvent): _197.SetBandPriceEventProtoMsg;
            };
            SetBandIBCPriceEvent: {
                typeUrl: string;
                encode(message: _197.SetBandIBCPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.SetBandIBCPriceEvent;
                fromPartial(object: Partial<_197.SetBandIBCPriceEvent>): _197.SetBandIBCPriceEvent;
                fromAmino(object: _197.SetBandIBCPriceEventAmino): _197.SetBandIBCPriceEvent;
                toAmino(message: _197.SetBandIBCPriceEvent): _197.SetBandIBCPriceEventAmino;
                fromAminoMsg(object: _197.SetBandIBCPriceEventAminoMsg): _197.SetBandIBCPriceEvent;
                fromProtoMsg(message: _197.SetBandIBCPriceEventProtoMsg): _197.SetBandIBCPriceEvent;
                toProto(message: _197.SetBandIBCPriceEvent): Uint8Array;
                toProtoMsg(message: _197.SetBandIBCPriceEvent): _197.SetBandIBCPriceEventProtoMsg;
            };
            EventBandIBCAckSuccess: {
                typeUrl: string;
                encode(message: _197.EventBandIBCAckSuccess, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.EventBandIBCAckSuccess;
                fromPartial(object: Partial<_197.EventBandIBCAckSuccess>): _197.EventBandIBCAckSuccess;
                fromAmino(object: _197.EventBandIBCAckSuccessAmino): _197.EventBandIBCAckSuccess;
                toAmino(message: _197.EventBandIBCAckSuccess): _197.EventBandIBCAckSuccessAmino;
                fromAminoMsg(object: _197.EventBandIBCAckSuccessAminoMsg): _197.EventBandIBCAckSuccess;
                fromProtoMsg(message: _197.EventBandIBCAckSuccessProtoMsg): _197.EventBandIBCAckSuccess;
                toProto(message: _197.EventBandIBCAckSuccess): Uint8Array;
                toProtoMsg(message: _197.EventBandIBCAckSuccess): _197.EventBandIBCAckSuccessProtoMsg;
            };
            EventBandIBCAckError: {
                typeUrl: string;
                encode(message: _197.EventBandIBCAckError, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.EventBandIBCAckError;
                fromPartial(object: Partial<_197.EventBandIBCAckError>): _197.EventBandIBCAckError;
                fromAmino(object: _197.EventBandIBCAckErrorAmino): _197.EventBandIBCAckError;
                toAmino(message: _197.EventBandIBCAckError): _197.EventBandIBCAckErrorAmino;
                fromAminoMsg(object: _197.EventBandIBCAckErrorAminoMsg): _197.EventBandIBCAckError;
                fromProtoMsg(message: _197.EventBandIBCAckErrorProtoMsg): _197.EventBandIBCAckError;
                toProto(message: _197.EventBandIBCAckError): Uint8Array;
                toProtoMsg(message: _197.EventBandIBCAckError): _197.EventBandIBCAckErrorProtoMsg;
            };
            EventBandIBCResponseTimeout: {
                typeUrl: string;
                encode(message: _197.EventBandIBCResponseTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.EventBandIBCResponseTimeout;
                fromPartial(object: Partial<_197.EventBandIBCResponseTimeout>): _197.EventBandIBCResponseTimeout;
                fromAmino(object: _197.EventBandIBCResponseTimeoutAmino): _197.EventBandIBCResponseTimeout;
                toAmino(message: _197.EventBandIBCResponseTimeout): _197.EventBandIBCResponseTimeoutAmino;
                fromAminoMsg(object: _197.EventBandIBCResponseTimeoutAminoMsg): _197.EventBandIBCResponseTimeout;
                fromProtoMsg(message: _197.EventBandIBCResponseTimeoutProtoMsg): _197.EventBandIBCResponseTimeout;
                toProto(message: _197.EventBandIBCResponseTimeout): Uint8Array;
                toProtoMsg(message: _197.EventBandIBCResponseTimeout): _197.EventBandIBCResponseTimeoutProtoMsg;
            };
            SetPriceFeedPriceEvent: {
                typeUrl: string;
                encode(message: _197.SetPriceFeedPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.SetPriceFeedPriceEvent;
                fromPartial(object: Partial<_197.SetPriceFeedPriceEvent>): _197.SetPriceFeedPriceEvent;
                fromAmino(object: _197.SetPriceFeedPriceEventAmino): _197.SetPriceFeedPriceEvent;
                toAmino(message: _197.SetPriceFeedPriceEvent): _197.SetPriceFeedPriceEventAmino;
                fromAminoMsg(object: _197.SetPriceFeedPriceEventAminoMsg): _197.SetPriceFeedPriceEvent;
                fromProtoMsg(message: _197.SetPriceFeedPriceEventProtoMsg): _197.SetPriceFeedPriceEvent;
                toProto(message: _197.SetPriceFeedPriceEvent): Uint8Array;
                toProtoMsg(message: _197.SetPriceFeedPriceEvent): _197.SetPriceFeedPriceEventProtoMsg;
            };
            SetProviderPriceEvent: {
                typeUrl: string;
                encode(message: _197.SetProviderPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.SetProviderPriceEvent;
                fromPartial(object: Partial<_197.SetProviderPriceEvent>): _197.SetProviderPriceEvent;
                fromAmino(object: _197.SetProviderPriceEventAmino): _197.SetProviderPriceEvent;
                toAmino(message: _197.SetProviderPriceEvent): _197.SetProviderPriceEventAmino;
                fromAminoMsg(object: _197.SetProviderPriceEventAminoMsg): _197.SetProviderPriceEvent;
                fromProtoMsg(message: _197.SetProviderPriceEventProtoMsg): _197.SetProviderPriceEvent;
                toProto(message: _197.SetProviderPriceEvent): Uint8Array;
                toProtoMsg(message: _197.SetProviderPriceEvent): _197.SetProviderPriceEventProtoMsg;
            };
            SetCoinbasePriceEvent: {
                typeUrl: string;
                encode(message: _197.SetCoinbasePriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _197.SetCoinbasePriceEvent;
                fromPartial(object: Partial<_197.SetCoinbasePriceEvent>): _197.SetCoinbasePriceEvent;
                fromAmino(object: _197.SetCoinbasePriceEventAmino): _197.SetCoinbasePriceEvent;
                toAmino(message: _197.SetCoinbasePriceEvent): _197.SetCoinbasePriceEventAmino;
                fromAminoMsg(object: _197.SetCoinbasePriceEventAminoMsg): _197.SetCoinbasePriceEvent;
                fromProtoMsg(message: _197.SetCoinbasePriceEventProtoMsg): _197.SetCoinbasePriceEvent;
                toProto(message: _197.SetCoinbasePriceEvent): Uint8Array;
                toProtoMsg(message: _197.SetCoinbasePriceEvent): _197.SetCoinbasePriceEventProtoMsg;
            };
        };
    }
    namespace peggy {
        const v1: {
            MsgClientImpl: typeof _496.MsgClientImpl;
            QueryClientImpl: typeof _489.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
                currentValset(request?: _211.QueryCurrentValsetRequest): Promise<_211.QueryCurrentValsetResponse>;
                valsetRequest(request: _211.QueryValsetRequestRequest): Promise<_211.QueryValsetRequestResponse>;
                valsetConfirm(request: _211.QueryValsetConfirmRequest): Promise<_211.QueryValsetConfirmResponse>;
                valsetConfirmsByNonce(request: _211.QueryValsetConfirmsByNonceRequest): Promise<_211.QueryValsetConfirmsByNonceResponse>;
                lastValsetRequests(request?: _211.QueryLastValsetRequestsRequest): Promise<_211.QueryLastValsetRequestsResponse>;
                lastPendingValsetRequestByAddr(request: _211.QueryLastPendingValsetRequestByAddrRequest): Promise<_211.QueryLastPendingValsetRequestByAddrResponse>;
                lastEventByAddr(request: _211.QueryLastEventByAddrRequest): Promise<_211.QueryLastEventByAddrResponse>;
                getPendingSendToEth(request: _211.QueryPendingSendToEth): Promise<_211.QueryPendingSendToEthResponse>;
                batchFees(request?: _211.QueryBatchFeeRequest): Promise<_211.QueryBatchFeeResponse>;
                outgoingTxBatches(request?: _211.QueryOutgoingTxBatchesRequest): Promise<_211.QueryOutgoingTxBatchesResponse>;
                lastPendingBatchRequestByAddr(request: _211.QueryLastPendingBatchRequestByAddrRequest): Promise<_211.QueryLastPendingBatchRequestByAddrResponse>;
                batchRequestByNonce(request: _211.QueryBatchRequestByNonceRequest): Promise<_211.QueryBatchRequestByNonceResponse>;
                batchConfirms(request: _211.QueryBatchConfirmsRequest): Promise<_211.QueryBatchConfirmsResponse>;
                eRC20ToDenom(request: _211.QueryERC20ToDenomRequest): Promise<_211.QueryERC20ToDenomResponse>;
                denomToERC20(request: _211.QueryDenomToERC20Request): Promise<_211.QueryDenomToERC20Response>;
                getDelegateKeyByValidator(request: _211.QueryDelegateKeysByValidatorAddress): Promise<_211.QueryDelegateKeysByValidatorAddressResponse>;
                getDelegateKeyByEth(request: _211.QueryDelegateKeysByEthAddress): Promise<_211.QueryDelegateKeysByEthAddressResponse>;
                getDelegateKeyByOrchestrator(request: _211.QueryDelegateKeysByOrchestratorAddress): Promise<_211.QueryDelegateKeysByOrchestratorAddressResponse>;
                peggyModuleState(request?: _211.QueryModuleStateRequest): Promise<_211.QueryModuleStateResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    valsetConfirm(value: _208.MsgValsetConfirm): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sendToEth(value: _208.MsgSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBatch(value: _208.MsgRequestBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    confirmBatch(value: _208.MsgConfirmBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositClaim(value: _208.MsgDepositClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawClaim(value: _208.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    valsetUpdateClaim(value: _208.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    eRC20DeployedClaim(value: _208.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setOrchestratorAddresses(value: _208.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSendToEth(value: _208.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitBadSignatureEvidence(value: _208.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    valsetConfirm(value: _208.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _208.MsgValsetConfirm;
                    };
                    sendToEth(value: _208.MsgSendToEth): {
                        typeUrl: string;
                        value: _208.MsgSendToEth;
                    };
                    requestBatch(value: _208.MsgRequestBatch): {
                        typeUrl: string;
                        value: _208.MsgRequestBatch;
                    };
                    confirmBatch(value: _208.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _208.MsgConfirmBatch;
                    };
                    depositClaim(value: _208.MsgDepositClaim): {
                        typeUrl: string;
                        value: _208.MsgDepositClaim;
                    };
                    withdrawClaim(value: _208.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _208.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _208.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _208.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _208.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _208.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _208.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _208.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _208.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _208.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _208.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _208.MsgSubmitBadSignatureEvidence;
                    };
                };
                fromPartial: {
                    valsetConfirm(value: _208.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _208.MsgValsetConfirm;
                    };
                    sendToEth(value: _208.MsgSendToEth): {
                        typeUrl: string;
                        value: _208.MsgSendToEth;
                    };
                    requestBatch(value: _208.MsgRequestBatch): {
                        typeUrl: string;
                        value: _208.MsgRequestBatch;
                    };
                    confirmBatch(value: _208.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _208.MsgConfirmBatch;
                    };
                    depositClaim(value: _208.MsgDepositClaim): {
                        typeUrl: string;
                        value: _208.MsgDepositClaim;
                    };
                    withdrawClaim(value: _208.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _208.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _208.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _208.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _208.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _208.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _208.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _208.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _208.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _208.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _208.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _208.MsgSubmitBadSignatureEvidence;
                    };
                };
            };
            AminoConverter: {
                "/injective.peggy.v1.MsgValsetConfirm": {
                    aminoType: string;
                    toAmino: (message: _208.MsgValsetConfirm) => _208.MsgValsetConfirmAmino;
                    fromAmino: (object: _208.MsgValsetConfirmAmino) => _208.MsgValsetConfirm;
                };
                "/injective.peggy.v1.MsgSendToEth": {
                    aminoType: string;
                    toAmino: (message: _208.MsgSendToEth) => _208.MsgSendToEthAmino;
                    fromAmino: (object: _208.MsgSendToEthAmino) => _208.MsgSendToEth;
                };
                "/injective.peggy.v1.MsgRequestBatch": {
                    aminoType: string;
                    toAmino: (message: _208.MsgRequestBatch) => _208.MsgRequestBatchAmino;
                    fromAmino: (object: _208.MsgRequestBatchAmino) => _208.MsgRequestBatch;
                };
                "/injective.peggy.v1.MsgConfirmBatch": {
                    aminoType: string;
                    toAmino: (message: _208.MsgConfirmBatch) => _208.MsgConfirmBatchAmino;
                    fromAmino: (object: _208.MsgConfirmBatchAmino) => _208.MsgConfirmBatch;
                };
                "/injective.peggy.v1.MsgDepositClaim": {
                    aminoType: string;
                    toAmino: (message: _208.MsgDepositClaim) => _208.MsgDepositClaimAmino;
                    fromAmino: (object: _208.MsgDepositClaimAmino) => _208.MsgDepositClaim;
                };
                "/injective.peggy.v1.MsgWithdrawClaim": {
                    aminoType: string;
                    toAmino: (message: _208.MsgWithdrawClaim) => _208.MsgWithdrawClaimAmino;
                    fromAmino: (object: _208.MsgWithdrawClaimAmino) => _208.MsgWithdrawClaim;
                };
                "/injective.peggy.v1.MsgValsetUpdatedClaim": {
                    aminoType: string;
                    toAmino: (message: _208.MsgValsetUpdatedClaim) => _208.MsgValsetUpdatedClaimAmino;
                    fromAmino: (object: _208.MsgValsetUpdatedClaimAmino) => _208.MsgValsetUpdatedClaim;
                };
                "/injective.peggy.v1.MsgERC20DeployedClaim": {
                    aminoType: string;
                    toAmino: (message: _208.MsgERC20DeployedClaim) => _208.MsgERC20DeployedClaimAmino;
                    fromAmino: (object: _208.MsgERC20DeployedClaimAmino) => _208.MsgERC20DeployedClaim;
                };
                "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
                    aminoType: string;
                    toAmino: (message: _208.MsgSetOrchestratorAddresses) => _208.MsgSetOrchestratorAddressesAmino;
                    fromAmino: (object: _208.MsgSetOrchestratorAddressesAmino) => _208.MsgSetOrchestratorAddresses;
                };
                "/injective.peggy.v1.MsgCancelSendToEth": {
                    aminoType: string;
                    toAmino: (message: _208.MsgCancelSendToEth) => _208.MsgCancelSendToEthAmino;
                    fromAmino: (object: _208.MsgCancelSendToEthAmino) => _208.MsgCancelSendToEth;
                };
                "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
                    aminoType: string;
                    toAmino: (message: _208.MsgSubmitBadSignatureEvidence) => _208.MsgSubmitBadSignatureEvidenceAmino;
                    fromAmino: (object: _208.MsgSubmitBadSignatureEvidenceAmino) => _208.MsgSubmitBadSignatureEvidence;
                };
            };
            BridgeValidator: {
                typeUrl: string;
                encode(message: _212.BridgeValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _212.BridgeValidator;
                fromPartial(object: Partial<_212.BridgeValidator>): _212.BridgeValidator;
                fromAmino(object: _212.BridgeValidatorAmino): _212.BridgeValidator;
                toAmino(message: _212.BridgeValidator): _212.BridgeValidatorAmino;
                fromAminoMsg(object: _212.BridgeValidatorAminoMsg): _212.BridgeValidator;
                fromProtoMsg(message: _212.BridgeValidatorProtoMsg): _212.BridgeValidator;
                toProto(message: _212.BridgeValidator): Uint8Array;
                toProtoMsg(message: _212.BridgeValidator): _212.BridgeValidatorProtoMsg;
            };
            Valset: {
                typeUrl: string;
                encode(message: _212.Valset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _212.Valset;
                fromPartial(object: Partial<_212.Valset>): _212.Valset;
                fromAmino(object: _212.ValsetAmino): _212.Valset;
                toAmino(message: _212.Valset): _212.ValsetAmino;
                fromAminoMsg(object: _212.ValsetAminoMsg): _212.Valset;
                fromProtoMsg(message: _212.ValsetProtoMsg): _212.Valset;
                toProto(message: _212.Valset): Uint8Array;
                toProtoMsg(message: _212.Valset): _212.ValsetProtoMsg;
            };
            LastObservedEthereumBlockHeight: {
                typeUrl: string;
                encode(message: _212.LastObservedEthereumBlockHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _212.LastObservedEthereumBlockHeight;
                fromPartial(object: Partial<_212.LastObservedEthereumBlockHeight>): _212.LastObservedEthereumBlockHeight;
                fromAmino(object: _212.LastObservedEthereumBlockHeightAmino): _212.LastObservedEthereumBlockHeight;
                toAmino(message: _212.LastObservedEthereumBlockHeight): _212.LastObservedEthereumBlockHeightAmino;
                fromAminoMsg(object: _212.LastObservedEthereumBlockHeightAminoMsg): _212.LastObservedEthereumBlockHeight;
                fromProtoMsg(message: _212.LastObservedEthereumBlockHeightProtoMsg): _212.LastObservedEthereumBlockHeight;
                toProto(message: _212.LastObservedEthereumBlockHeight): Uint8Array;
                toProtoMsg(message: _212.LastObservedEthereumBlockHeight): _212.LastObservedEthereumBlockHeightProtoMsg;
            };
            LastClaimEvent: {
                typeUrl: string;
                encode(message: _212.LastClaimEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _212.LastClaimEvent;
                fromPartial(object: Partial<_212.LastClaimEvent>): _212.LastClaimEvent;
                fromAmino(object: _212.LastClaimEventAmino): _212.LastClaimEvent;
                toAmino(message: _212.LastClaimEvent): _212.LastClaimEventAmino;
                fromAminoMsg(object: _212.LastClaimEventAminoMsg): _212.LastClaimEvent;
                fromProtoMsg(message: _212.LastClaimEventProtoMsg): _212.LastClaimEvent;
                toProto(message: _212.LastClaimEvent): Uint8Array;
                toProtoMsg(message: _212.LastClaimEvent): _212.LastClaimEventProtoMsg;
            };
            ERC20ToDenom: {
                typeUrl: string;
                encode(message: _212.ERC20ToDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _212.ERC20ToDenom;
                fromPartial(object: Partial<_212.ERC20ToDenom>): _212.ERC20ToDenom;
                fromAmino(object: _212.ERC20ToDenomAmino): _212.ERC20ToDenom;
                toAmino(message: _212.ERC20ToDenom): _212.ERC20ToDenomAmino;
                fromAminoMsg(object: _212.ERC20ToDenomAminoMsg): _212.ERC20ToDenom;
                fromProtoMsg(message: _212.ERC20ToDenomProtoMsg): _212.ERC20ToDenom;
                toProto(message: _212.ERC20ToDenom): Uint8Array;
                toProtoMsg(message: _212.ERC20ToDenom): _212.ERC20ToDenomProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _211.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryParamsRequest;
                fromPartial(_: Partial<_211.QueryParamsRequest>): _211.QueryParamsRequest;
                fromAmino(_: _211.QueryParamsRequestAmino): _211.QueryParamsRequest;
                toAmino(_: _211.QueryParamsRequest): _211.QueryParamsRequestAmino;
                fromAminoMsg(object: _211.QueryParamsRequestAminoMsg): _211.QueryParamsRequest;
                fromProtoMsg(message: _211.QueryParamsRequestProtoMsg): _211.QueryParamsRequest;
                toProto(message: _211.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryParamsRequest): _211.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _211.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryParamsResponse;
                fromPartial(object: Partial<_211.QueryParamsResponse>): _211.QueryParamsResponse;
                fromAmino(object: _211.QueryParamsResponseAmino): _211.QueryParamsResponse;
                toAmino(message: _211.QueryParamsResponse): _211.QueryParamsResponseAmino;
                fromAminoMsg(object: _211.QueryParamsResponseAminoMsg): _211.QueryParamsResponse;
                fromProtoMsg(message: _211.QueryParamsResponseProtoMsg): _211.QueryParamsResponse;
                toProto(message: _211.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryParamsResponse): _211.QueryParamsResponseProtoMsg;
            };
            QueryCurrentValsetRequest: {
                typeUrl: string;
                encode(_: _211.QueryCurrentValsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryCurrentValsetRequest;
                fromPartial(_: Partial<_211.QueryCurrentValsetRequest>): _211.QueryCurrentValsetRequest;
                fromAmino(_: _211.QueryCurrentValsetRequestAmino): _211.QueryCurrentValsetRequest;
                toAmino(_: _211.QueryCurrentValsetRequest): _211.QueryCurrentValsetRequestAmino;
                fromAminoMsg(object: _211.QueryCurrentValsetRequestAminoMsg): _211.QueryCurrentValsetRequest;
                fromProtoMsg(message: _211.QueryCurrentValsetRequestProtoMsg): _211.QueryCurrentValsetRequest;
                toProto(message: _211.QueryCurrentValsetRequest): Uint8Array;
                toProtoMsg(message: _211.QueryCurrentValsetRequest): _211.QueryCurrentValsetRequestProtoMsg;
            };
            QueryCurrentValsetResponse: {
                typeUrl: string;
                encode(message: _211.QueryCurrentValsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryCurrentValsetResponse;
                fromPartial(object: Partial<_211.QueryCurrentValsetResponse>): _211.QueryCurrentValsetResponse;
                fromAmino(object: _211.QueryCurrentValsetResponseAmino): _211.QueryCurrentValsetResponse;
                toAmino(message: _211.QueryCurrentValsetResponse): _211.QueryCurrentValsetResponseAmino;
                fromAminoMsg(object: _211.QueryCurrentValsetResponseAminoMsg): _211.QueryCurrentValsetResponse;
                fromProtoMsg(message: _211.QueryCurrentValsetResponseProtoMsg): _211.QueryCurrentValsetResponse;
                toProto(message: _211.QueryCurrentValsetResponse): Uint8Array;
                toProtoMsg(message: _211.QueryCurrentValsetResponse): _211.QueryCurrentValsetResponseProtoMsg;
            };
            QueryValsetRequestRequest: {
                typeUrl: string;
                encode(message: _211.QueryValsetRequestRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryValsetRequestRequest;
                fromPartial(object: Partial<_211.QueryValsetRequestRequest>): _211.QueryValsetRequestRequest;
                fromAmino(object: _211.QueryValsetRequestRequestAmino): _211.QueryValsetRequestRequest;
                toAmino(message: _211.QueryValsetRequestRequest): _211.QueryValsetRequestRequestAmino;
                fromAminoMsg(object: _211.QueryValsetRequestRequestAminoMsg): _211.QueryValsetRequestRequest;
                fromProtoMsg(message: _211.QueryValsetRequestRequestProtoMsg): _211.QueryValsetRequestRequest;
                toProto(message: _211.QueryValsetRequestRequest): Uint8Array;
                toProtoMsg(message: _211.QueryValsetRequestRequest): _211.QueryValsetRequestRequestProtoMsg;
            };
            QueryValsetRequestResponse: {
                typeUrl: string;
                encode(message: _211.QueryValsetRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryValsetRequestResponse;
                fromPartial(object: Partial<_211.QueryValsetRequestResponse>): _211.QueryValsetRequestResponse;
                fromAmino(object: _211.QueryValsetRequestResponseAmino): _211.QueryValsetRequestResponse;
                toAmino(message: _211.QueryValsetRequestResponse): _211.QueryValsetRequestResponseAmino;
                fromAminoMsg(object: _211.QueryValsetRequestResponseAminoMsg): _211.QueryValsetRequestResponse;
                fromProtoMsg(message: _211.QueryValsetRequestResponseProtoMsg): _211.QueryValsetRequestResponse;
                toProto(message: _211.QueryValsetRequestResponse): Uint8Array;
                toProtoMsg(message: _211.QueryValsetRequestResponse): _211.QueryValsetRequestResponseProtoMsg;
            };
            QueryValsetConfirmRequest: {
                typeUrl: string;
                encode(message: _211.QueryValsetConfirmRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryValsetConfirmRequest;
                fromPartial(object: Partial<_211.QueryValsetConfirmRequest>): _211.QueryValsetConfirmRequest;
                fromAmino(object: _211.QueryValsetConfirmRequestAmino): _211.QueryValsetConfirmRequest;
                toAmino(message: _211.QueryValsetConfirmRequest): _211.QueryValsetConfirmRequestAmino;
                fromAminoMsg(object: _211.QueryValsetConfirmRequestAminoMsg): _211.QueryValsetConfirmRequest;
                fromProtoMsg(message: _211.QueryValsetConfirmRequestProtoMsg): _211.QueryValsetConfirmRequest;
                toProto(message: _211.QueryValsetConfirmRequest): Uint8Array;
                toProtoMsg(message: _211.QueryValsetConfirmRequest): _211.QueryValsetConfirmRequestProtoMsg;
            };
            QueryValsetConfirmResponse: {
                typeUrl: string;
                encode(message: _211.QueryValsetConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryValsetConfirmResponse;
                fromPartial(object: Partial<_211.QueryValsetConfirmResponse>): _211.QueryValsetConfirmResponse;
                fromAmino(object: _211.QueryValsetConfirmResponseAmino): _211.QueryValsetConfirmResponse;
                toAmino(message: _211.QueryValsetConfirmResponse): _211.QueryValsetConfirmResponseAmino;
                fromAminoMsg(object: _211.QueryValsetConfirmResponseAminoMsg): _211.QueryValsetConfirmResponse;
                fromProtoMsg(message: _211.QueryValsetConfirmResponseProtoMsg): _211.QueryValsetConfirmResponse;
                toProto(message: _211.QueryValsetConfirmResponse): Uint8Array;
                toProtoMsg(message: _211.QueryValsetConfirmResponse): _211.QueryValsetConfirmResponseProtoMsg;
            };
            QueryValsetConfirmsByNonceRequest: {
                typeUrl: string;
                encode(message: _211.QueryValsetConfirmsByNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryValsetConfirmsByNonceRequest;
                fromPartial(object: Partial<_211.QueryValsetConfirmsByNonceRequest>): _211.QueryValsetConfirmsByNonceRequest;
                fromAmino(object: _211.QueryValsetConfirmsByNonceRequestAmino): _211.QueryValsetConfirmsByNonceRequest;
                toAmino(message: _211.QueryValsetConfirmsByNonceRequest): _211.QueryValsetConfirmsByNonceRequestAmino;
                fromAminoMsg(object: _211.QueryValsetConfirmsByNonceRequestAminoMsg): _211.QueryValsetConfirmsByNonceRequest;
                fromProtoMsg(message: _211.QueryValsetConfirmsByNonceRequestProtoMsg): _211.QueryValsetConfirmsByNonceRequest;
                toProto(message: _211.QueryValsetConfirmsByNonceRequest): Uint8Array;
                toProtoMsg(message: _211.QueryValsetConfirmsByNonceRequest): _211.QueryValsetConfirmsByNonceRequestProtoMsg;
            };
            QueryValsetConfirmsByNonceResponse: {
                typeUrl: string;
                encode(message: _211.QueryValsetConfirmsByNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryValsetConfirmsByNonceResponse;
                fromPartial(object: Partial<_211.QueryValsetConfirmsByNonceResponse>): _211.QueryValsetConfirmsByNonceResponse;
                fromAmino(object: _211.QueryValsetConfirmsByNonceResponseAmino): _211.QueryValsetConfirmsByNonceResponse;
                toAmino(message: _211.QueryValsetConfirmsByNonceResponse): _211.QueryValsetConfirmsByNonceResponseAmino;
                fromAminoMsg(object: _211.QueryValsetConfirmsByNonceResponseAminoMsg): _211.QueryValsetConfirmsByNonceResponse;
                fromProtoMsg(message: _211.QueryValsetConfirmsByNonceResponseProtoMsg): _211.QueryValsetConfirmsByNonceResponse;
                toProto(message: _211.QueryValsetConfirmsByNonceResponse): Uint8Array;
                toProtoMsg(message: _211.QueryValsetConfirmsByNonceResponse): _211.QueryValsetConfirmsByNonceResponseProtoMsg;
            };
            QueryLastValsetRequestsRequest: {
                typeUrl: string;
                encode(_: _211.QueryLastValsetRequestsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastValsetRequestsRequest;
                fromPartial(_: Partial<_211.QueryLastValsetRequestsRequest>): _211.QueryLastValsetRequestsRequest;
                fromAmino(_: _211.QueryLastValsetRequestsRequestAmino): _211.QueryLastValsetRequestsRequest;
                toAmino(_: _211.QueryLastValsetRequestsRequest): _211.QueryLastValsetRequestsRequestAmino;
                fromAminoMsg(object: _211.QueryLastValsetRequestsRequestAminoMsg): _211.QueryLastValsetRequestsRequest;
                fromProtoMsg(message: _211.QueryLastValsetRequestsRequestProtoMsg): _211.QueryLastValsetRequestsRequest;
                toProto(message: _211.QueryLastValsetRequestsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryLastValsetRequestsRequest): _211.QueryLastValsetRequestsRequestProtoMsg;
            };
            QueryLastValsetRequestsResponse: {
                typeUrl: string;
                encode(message: _211.QueryLastValsetRequestsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastValsetRequestsResponse;
                fromPartial(object: Partial<_211.QueryLastValsetRequestsResponse>): _211.QueryLastValsetRequestsResponse;
                fromAmino(object: _211.QueryLastValsetRequestsResponseAmino): _211.QueryLastValsetRequestsResponse;
                toAmino(message: _211.QueryLastValsetRequestsResponse): _211.QueryLastValsetRequestsResponseAmino;
                fromAminoMsg(object: _211.QueryLastValsetRequestsResponseAminoMsg): _211.QueryLastValsetRequestsResponse;
                fromProtoMsg(message: _211.QueryLastValsetRequestsResponseProtoMsg): _211.QueryLastValsetRequestsResponse;
                toProto(message: _211.QueryLastValsetRequestsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryLastValsetRequestsResponse): _211.QueryLastValsetRequestsResponseProtoMsg;
            };
            QueryLastPendingValsetRequestByAddrRequest: {
                typeUrl: string;
                encode(message: _211.QueryLastPendingValsetRequestByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastPendingValsetRequestByAddrRequest;
                fromPartial(object: Partial<_211.QueryLastPendingValsetRequestByAddrRequest>): _211.QueryLastPendingValsetRequestByAddrRequest;
                fromAmino(object: _211.QueryLastPendingValsetRequestByAddrRequestAmino): _211.QueryLastPendingValsetRequestByAddrRequest;
                toAmino(message: _211.QueryLastPendingValsetRequestByAddrRequest): _211.QueryLastPendingValsetRequestByAddrRequestAmino;
                fromAminoMsg(object: _211.QueryLastPendingValsetRequestByAddrRequestAminoMsg): _211.QueryLastPendingValsetRequestByAddrRequest;
                fromProtoMsg(message: _211.QueryLastPendingValsetRequestByAddrRequestProtoMsg): _211.QueryLastPendingValsetRequestByAddrRequest;
                toProto(message: _211.QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
                toProtoMsg(message: _211.QueryLastPendingValsetRequestByAddrRequest): _211.QueryLastPendingValsetRequestByAddrRequestProtoMsg;
            };
            QueryLastPendingValsetRequestByAddrResponse: {
                typeUrl: string;
                encode(message: _211.QueryLastPendingValsetRequestByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastPendingValsetRequestByAddrResponse;
                fromPartial(object: Partial<_211.QueryLastPendingValsetRequestByAddrResponse>): _211.QueryLastPendingValsetRequestByAddrResponse;
                fromAmino(object: _211.QueryLastPendingValsetRequestByAddrResponseAmino): _211.QueryLastPendingValsetRequestByAddrResponse;
                toAmino(message: _211.QueryLastPendingValsetRequestByAddrResponse): _211.QueryLastPendingValsetRequestByAddrResponseAmino;
                fromAminoMsg(object: _211.QueryLastPendingValsetRequestByAddrResponseAminoMsg): _211.QueryLastPendingValsetRequestByAddrResponse;
                fromProtoMsg(message: _211.QueryLastPendingValsetRequestByAddrResponseProtoMsg): _211.QueryLastPendingValsetRequestByAddrResponse;
                toProto(message: _211.QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
                toProtoMsg(message: _211.QueryLastPendingValsetRequestByAddrResponse): _211.QueryLastPendingValsetRequestByAddrResponseProtoMsg;
            };
            QueryBatchFeeRequest: {
                typeUrl: string;
                encode(_: _211.QueryBatchFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryBatchFeeRequest;
                fromPartial(_: Partial<_211.QueryBatchFeeRequest>): _211.QueryBatchFeeRequest;
                fromAmino(_: _211.QueryBatchFeeRequestAmino): _211.QueryBatchFeeRequest;
                toAmino(_: _211.QueryBatchFeeRequest): _211.QueryBatchFeeRequestAmino;
                fromAminoMsg(object: _211.QueryBatchFeeRequestAminoMsg): _211.QueryBatchFeeRequest;
                fromProtoMsg(message: _211.QueryBatchFeeRequestProtoMsg): _211.QueryBatchFeeRequest;
                toProto(message: _211.QueryBatchFeeRequest): Uint8Array;
                toProtoMsg(message: _211.QueryBatchFeeRequest): _211.QueryBatchFeeRequestProtoMsg;
            };
            QueryBatchFeeResponse: {
                typeUrl: string;
                encode(message: _211.QueryBatchFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryBatchFeeResponse;
                fromPartial(object: Partial<_211.QueryBatchFeeResponse>): _211.QueryBatchFeeResponse;
                fromAmino(object: _211.QueryBatchFeeResponseAmino): _211.QueryBatchFeeResponse;
                toAmino(message: _211.QueryBatchFeeResponse): _211.QueryBatchFeeResponseAmino;
                fromAminoMsg(object: _211.QueryBatchFeeResponseAminoMsg): _211.QueryBatchFeeResponse;
                fromProtoMsg(message: _211.QueryBatchFeeResponseProtoMsg): _211.QueryBatchFeeResponse;
                toProto(message: _211.QueryBatchFeeResponse): Uint8Array;
                toProtoMsg(message: _211.QueryBatchFeeResponse): _211.QueryBatchFeeResponseProtoMsg;
            };
            QueryLastPendingBatchRequestByAddrRequest: {
                typeUrl: string;
                encode(message: _211.QueryLastPendingBatchRequestByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastPendingBatchRequestByAddrRequest;
                fromPartial(object: Partial<_211.QueryLastPendingBatchRequestByAddrRequest>): _211.QueryLastPendingBatchRequestByAddrRequest;
                fromAmino(object: _211.QueryLastPendingBatchRequestByAddrRequestAmino): _211.QueryLastPendingBatchRequestByAddrRequest;
                toAmino(message: _211.QueryLastPendingBatchRequestByAddrRequest): _211.QueryLastPendingBatchRequestByAddrRequestAmino;
                fromAminoMsg(object: _211.QueryLastPendingBatchRequestByAddrRequestAminoMsg): _211.QueryLastPendingBatchRequestByAddrRequest;
                fromProtoMsg(message: _211.QueryLastPendingBatchRequestByAddrRequestProtoMsg): _211.QueryLastPendingBatchRequestByAddrRequest;
                toProto(message: _211.QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
                toProtoMsg(message: _211.QueryLastPendingBatchRequestByAddrRequest): _211.QueryLastPendingBatchRequestByAddrRequestProtoMsg;
            };
            QueryLastPendingBatchRequestByAddrResponse: {
                typeUrl: string;
                encode(message: _211.QueryLastPendingBatchRequestByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastPendingBatchRequestByAddrResponse;
                fromPartial(object: Partial<_211.QueryLastPendingBatchRequestByAddrResponse>): _211.QueryLastPendingBatchRequestByAddrResponse;
                fromAmino(object: _211.QueryLastPendingBatchRequestByAddrResponseAmino): _211.QueryLastPendingBatchRequestByAddrResponse;
                toAmino(message: _211.QueryLastPendingBatchRequestByAddrResponse): _211.QueryLastPendingBatchRequestByAddrResponseAmino;
                fromAminoMsg(object: _211.QueryLastPendingBatchRequestByAddrResponseAminoMsg): _211.QueryLastPendingBatchRequestByAddrResponse;
                fromProtoMsg(message: _211.QueryLastPendingBatchRequestByAddrResponseProtoMsg): _211.QueryLastPendingBatchRequestByAddrResponse;
                toProto(message: _211.QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
                toProtoMsg(message: _211.QueryLastPendingBatchRequestByAddrResponse): _211.QueryLastPendingBatchRequestByAddrResponseProtoMsg;
            };
            QueryOutgoingTxBatchesRequest: {
                typeUrl: string;
                encode(_: _211.QueryOutgoingTxBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryOutgoingTxBatchesRequest;
                fromPartial(_: Partial<_211.QueryOutgoingTxBatchesRequest>): _211.QueryOutgoingTxBatchesRequest;
                fromAmino(_: _211.QueryOutgoingTxBatchesRequestAmino): _211.QueryOutgoingTxBatchesRequest;
                toAmino(_: _211.QueryOutgoingTxBatchesRequest): _211.QueryOutgoingTxBatchesRequestAmino;
                fromAminoMsg(object: _211.QueryOutgoingTxBatchesRequestAminoMsg): _211.QueryOutgoingTxBatchesRequest;
                fromProtoMsg(message: _211.QueryOutgoingTxBatchesRequestProtoMsg): _211.QueryOutgoingTxBatchesRequest;
                toProto(message: _211.QueryOutgoingTxBatchesRequest): Uint8Array;
                toProtoMsg(message: _211.QueryOutgoingTxBatchesRequest): _211.QueryOutgoingTxBatchesRequestProtoMsg;
            };
            QueryOutgoingTxBatchesResponse: {
                typeUrl: string;
                encode(message: _211.QueryOutgoingTxBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryOutgoingTxBatchesResponse;
                fromPartial(object: Partial<_211.QueryOutgoingTxBatchesResponse>): _211.QueryOutgoingTxBatchesResponse;
                fromAmino(object: _211.QueryOutgoingTxBatchesResponseAmino): _211.QueryOutgoingTxBatchesResponse;
                toAmino(message: _211.QueryOutgoingTxBatchesResponse): _211.QueryOutgoingTxBatchesResponseAmino;
                fromAminoMsg(object: _211.QueryOutgoingTxBatchesResponseAminoMsg): _211.QueryOutgoingTxBatchesResponse;
                fromProtoMsg(message: _211.QueryOutgoingTxBatchesResponseProtoMsg): _211.QueryOutgoingTxBatchesResponse;
                toProto(message: _211.QueryOutgoingTxBatchesResponse): Uint8Array;
                toProtoMsg(message: _211.QueryOutgoingTxBatchesResponse): _211.QueryOutgoingTxBatchesResponseProtoMsg;
            };
            QueryBatchRequestByNonceRequest: {
                typeUrl: string;
                encode(message: _211.QueryBatchRequestByNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryBatchRequestByNonceRequest;
                fromPartial(object: Partial<_211.QueryBatchRequestByNonceRequest>): _211.QueryBatchRequestByNonceRequest;
                fromAmino(object: _211.QueryBatchRequestByNonceRequestAmino): _211.QueryBatchRequestByNonceRequest;
                toAmino(message: _211.QueryBatchRequestByNonceRequest): _211.QueryBatchRequestByNonceRequestAmino;
                fromAminoMsg(object: _211.QueryBatchRequestByNonceRequestAminoMsg): _211.QueryBatchRequestByNonceRequest;
                fromProtoMsg(message: _211.QueryBatchRequestByNonceRequestProtoMsg): _211.QueryBatchRequestByNonceRequest;
                toProto(message: _211.QueryBatchRequestByNonceRequest): Uint8Array;
                toProtoMsg(message: _211.QueryBatchRequestByNonceRequest): _211.QueryBatchRequestByNonceRequestProtoMsg;
            };
            QueryBatchRequestByNonceResponse: {
                typeUrl: string;
                encode(message: _211.QueryBatchRequestByNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryBatchRequestByNonceResponse;
                fromPartial(object: Partial<_211.QueryBatchRequestByNonceResponse>): _211.QueryBatchRequestByNonceResponse;
                fromAmino(object: _211.QueryBatchRequestByNonceResponseAmino): _211.QueryBatchRequestByNonceResponse;
                toAmino(message: _211.QueryBatchRequestByNonceResponse): _211.QueryBatchRequestByNonceResponseAmino;
                fromAminoMsg(object: _211.QueryBatchRequestByNonceResponseAminoMsg): _211.QueryBatchRequestByNonceResponse;
                fromProtoMsg(message: _211.QueryBatchRequestByNonceResponseProtoMsg): _211.QueryBatchRequestByNonceResponse;
                toProto(message: _211.QueryBatchRequestByNonceResponse): Uint8Array;
                toProtoMsg(message: _211.QueryBatchRequestByNonceResponse): _211.QueryBatchRequestByNonceResponseProtoMsg;
            };
            QueryBatchConfirmsRequest: {
                typeUrl: string;
                encode(message: _211.QueryBatchConfirmsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryBatchConfirmsRequest;
                fromPartial(object: Partial<_211.QueryBatchConfirmsRequest>): _211.QueryBatchConfirmsRequest;
                fromAmino(object: _211.QueryBatchConfirmsRequestAmino): _211.QueryBatchConfirmsRequest;
                toAmino(message: _211.QueryBatchConfirmsRequest): _211.QueryBatchConfirmsRequestAmino;
                fromAminoMsg(object: _211.QueryBatchConfirmsRequestAminoMsg): _211.QueryBatchConfirmsRequest;
                fromProtoMsg(message: _211.QueryBatchConfirmsRequestProtoMsg): _211.QueryBatchConfirmsRequest;
                toProto(message: _211.QueryBatchConfirmsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryBatchConfirmsRequest): _211.QueryBatchConfirmsRequestProtoMsg;
            };
            QueryBatchConfirmsResponse: {
                typeUrl: string;
                encode(message: _211.QueryBatchConfirmsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryBatchConfirmsResponse;
                fromPartial(object: Partial<_211.QueryBatchConfirmsResponse>): _211.QueryBatchConfirmsResponse;
                fromAmino(object: _211.QueryBatchConfirmsResponseAmino): _211.QueryBatchConfirmsResponse;
                toAmino(message: _211.QueryBatchConfirmsResponse): _211.QueryBatchConfirmsResponseAmino;
                fromAminoMsg(object: _211.QueryBatchConfirmsResponseAminoMsg): _211.QueryBatchConfirmsResponse;
                fromProtoMsg(message: _211.QueryBatchConfirmsResponseProtoMsg): _211.QueryBatchConfirmsResponse;
                toProto(message: _211.QueryBatchConfirmsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryBatchConfirmsResponse): _211.QueryBatchConfirmsResponseProtoMsg;
            };
            QueryLastEventByAddrRequest: {
                typeUrl: string;
                encode(message: _211.QueryLastEventByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastEventByAddrRequest;
                fromPartial(object: Partial<_211.QueryLastEventByAddrRequest>): _211.QueryLastEventByAddrRequest;
                fromAmino(object: _211.QueryLastEventByAddrRequestAmino): _211.QueryLastEventByAddrRequest;
                toAmino(message: _211.QueryLastEventByAddrRequest): _211.QueryLastEventByAddrRequestAmino;
                fromAminoMsg(object: _211.QueryLastEventByAddrRequestAminoMsg): _211.QueryLastEventByAddrRequest;
                fromProtoMsg(message: _211.QueryLastEventByAddrRequestProtoMsg): _211.QueryLastEventByAddrRequest;
                toProto(message: _211.QueryLastEventByAddrRequest): Uint8Array;
                toProtoMsg(message: _211.QueryLastEventByAddrRequest): _211.QueryLastEventByAddrRequestProtoMsg;
            };
            QueryLastEventByAddrResponse: {
                typeUrl: string;
                encode(message: _211.QueryLastEventByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryLastEventByAddrResponse;
                fromPartial(object: Partial<_211.QueryLastEventByAddrResponse>): _211.QueryLastEventByAddrResponse;
                fromAmino(object: _211.QueryLastEventByAddrResponseAmino): _211.QueryLastEventByAddrResponse;
                toAmino(message: _211.QueryLastEventByAddrResponse): _211.QueryLastEventByAddrResponseAmino;
                fromAminoMsg(object: _211.QueryLastEventByAddrResponseAminoMsg): _211.QueryLastEventByAddrResponse;
                fromProtoMsg(message: _211.QueryLastEventByAddrResponseProtoMsg): _211.QueryLastEventByAddrResponse;
                toProto(message: _211.QueryLastEventByAddrResponse): Uint8Array;
                toProtoMsg(message: _211.QueryLastEventByAddrResponse): _211.QueryLastEventByAddrResponseProtoMsg;
            };
            QueryERC20ToDenomRequest: {
                typeUrl: string;
                encode(message: _211.QueryERC20ToDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryERC20ToDenomRequest;
                fromPartial(object: Partial<_211.QueryERC20ToDenomRequest>): _211.QueryERC20ToDenomRequest;
                fromAmino(object: _211.QueryERC20ToDenomRequestAmino): _211.QueryERC20ToDenomRequest;
                toAmino(message: _211.QueryERC20ToDenomRequest): _211.QueryERC20ToDenomRequestAmino;
                fromAminoMsg(object: _211.QueryERC20ToDenomRequestAminoMsg): _211.QueryERC20ToDenomRequest;
                fromProtoMsg(message: _211.QueryERC20ToDenomRequestProtoMsg): _211.QueryERC20ToDenomRequest;
                toProto(message: _211.QueryERC20ToDenomRequest): Uint8Array;
                toProtoMsg(message: _211.QueryERC20ToDenomRequest): _211.QueryERC20ToDenomRequestProtoMsg;
            };
            QueryERC20ToDenomResponse: {
                typeUrl: string;
                encode(message: _211.QueryERC20ToDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryERC20ToDenomResponse;
                fromPartial(object: Partial<_211.QueryERC20ToDenomResponse>): _211.QueryERC20ToDenomResponse;
                fromAmino(object: _211.QueryERC20ToDenomResponseAmino): _211.QueryERC20ToDenomResponse;
                toAmino(message: _211.QueryERC20ToDenomResponse): _211.QueryERC20ToDenomResponseAmino;
                fromAminoMsg(object: _211.QueryERC20ToDenomResponseAminoMsg): _211.QueryERC20ToDenomResponse;
                fromProtoMsg(message: _211.QueryERC20ToDenomResponseProtoMsg): _211.QueryERC20ToDenomResponse;
                toProto(message: _211.QueryERC20ToDenomResponse): Uint8Array;
                toProtoMsg(message: _211.QueryERC20ToDenomResponse): _211.QueryERC20ToDenomResponseProtoMsg;
            };
            QueryDenomToERC20Request: {
                typeUrl: string;
                encode(message: _211.QueryDenomToERC20Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDenomToERC20Request;
                fromPartial(object: Partial<_211.QueryDenomToERC20Request>): _211.QueryDenomToERC20Request;
                fromAmino(object: _211.QueryDenomToERC20RequestAmino): _211.QueryDenomToERC20Request;
                toAmino(message: _211.QueryDenomToERC20Request): _211.QueryDenomToERC20RequestAmino;
                fromAminoMsg(object: _211.QueryDenomToERC20RequestAminoMsg): _211.QueryDenomToERC20Request;
                fromProtoMsg(message: _211.QueryDenomToERC20RequestProtoMsg): _211.QueryDenomToERC20Request;
                toProto(message: _211.QueryDenomToERC20Request): Uint8Array;
                toProtoMsg(message: _211.QueryDenomToERC20Request): _211.QueryDenomToERC20RequestProtoMsg;
            };
            QueryDenomToERC20Response: {
                typeUrl: string;
                encode(message: _211.QueryDenomToERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDenomToERC20Response;
                fromPartial(object: Partial<_211.QueryDenomToERC20Response>): _211.QueryDenomToERC20Response;
                fromAmino(object: _211.QueryDenomToERC20ResponseAmino): _211.QueryDenomToERC20Response;
                toAmino(message: _211.QueryDenomToERC20Response): _211.QueryDenomToERC20ResponseAmino;
                fromAminoMsg(object: _211.QueryDenomToERC20ResponseAminoMsg): _211.QueryDenomToERC20Response;
                fromProtoMsg(message: _211.QueryDenomToERC20ResponseProtoMsg): _211.QueryDenomToERC20Response;
                toProto(message: _211.QueryDenomToERC20Response): Uint8Array;
                toProtoMsg(message: _211.QueryDenomToERC20Response): _211.QueryDenomToERC20ResponseProtoMsg;
            };
            QueryDelegateKeysByValidatorAddress: {
                typeUrl: string;
                encode(message: _211.QueryDelegateKeysByValidatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDelegateKeysByValidatorAddress;
                fromPartial(object: Partial<_211.QueryDelegateKeysByValidatorAddress>): _211.QueryDelegateKeysByValidatorAddress;
                fromAmino(object: _211.QueryDelegateKeysByValidatorAddressAmino): _211.QueryDelegateKeysByValidatorAddress;
                toAmino(message: _211.QueryDelegateKeysByValidatorAddress): _211.QueryDelegateKeysByValidatorAddressAmino;
                fromAminoMsg(object: _211.QueryDelegateKeysByValidatorAddressAminoMsg): _211.QueryDelegateKeysByValidatorAddress;
                fromProtoMsg(message: _211.QueryDelegateKeysByValidatorAddressProtoMsg): _211.QueryDelegateKeysByValidatorAddress;
                toProto(message: _211.QueryDelegateKeysByValidatorAddress): Uint8Array;
                toProtoMsg(message: _211.QueryDelegateKeysByValidatorAddress): _211.QueryDelegateKeysByValidatorAddressProtoMsg;
            };
            QueryDelegateKeysByValidatorAddressResponse: {
                typeUrl: string;
                encode(message: _211.QueryDelegateKeysByValidatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDelegateKeysByValidatorAddressResponse;
                fromPartial(object: Partial<_211.QueryDelegateKeysByValidatorAddressResponse>): _211.QueryDelegateKeysByValidatorAddressResponse;
                fromAmino(object: _211.QueryDelegateKeysByValidatorAddressResponseAmino): _211.QueryDelegateKeysByValidatorAddressResponse;
                toAmino(message: _211.QueryDelegateKeysByValidatorAddressResponse): _211.QueryDelegateKeysByValidatorAddressResponseAmino;
                fromAminoMsg(object: _211.QueryDelegateKeysByValidatorAddressResponseAminoMsg): _211.QueryDelegateKeysByValidatorAddressResponse;
                fromProtoMsg(message: _211.QueryDelegateKeysByValidatorAddressResponseProtoMsg): _211.QueryDelegateKeysByValidatorAddressResponse;
                toProto(message: _211.QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
                toProtoMsg(message: _211.QueryDelegateKeysByValidatorAddressResponse): _211.QueryDelegateKeysByValidatorAddressResponseProtoMsg;
            };
            QueryDelegateKeysByEthAddress: {
                typeUrl: string;
                encode(message: _211.QueryDelegateKeysByEthAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDelegateKeysByEthAddress;
                fromPartial(object: Partial<_211.QueryDelegateKeysByEthAddress>): _211.QueryDelegateKeysByEthAddress;
                fromAmino(object: _211.QueryDelegateKeysByEthAddressAmino): _211.QueryDelegateKeysByEthAddress;
                toAmino(message: _211.QueryDelegateKeysByEthAddress): _211.QueryDelegateKeysByEthAddressAmino;
                fromAminoMsg(object: _211.QueryDelegateKeysByEthAddressAminoMsg): _211.QueryDelegateKeysByEthAddress;
                fromProtoMsg(message: _211.QueryDelegateKeysByEthAddressProtoMsg): _211.QueryDelegateKeysByEthAddress;
                toProto(message: _211.QueryDelegateKeysByEthAddress): Uint8Array;
                toProtoMsg(message: _211.QueryDelegateKeysByEthAddress): _211.QueryDelegateKeysByEthAddressProtoMsg;
            };
            QueryDelegateKeysByEthAddressResponse: {
                typeUrl: string;
                encode(message: _211.QueryDelegateKeysByEthAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDelegateKeysByEthAddressResponse;
                fromPartial(object: Partial<_211.QueryDelegateKeysByEthAddressResponse>): _211.QueryDelegateKeysByEthAddressResponse;
                fromAmino(object: _211.QueryDelegateKeysByEthAddressResponseAmino): _211.QueryDelegateKeysByEthAddressResponse;
                toAmino(message: _211.QueryDelegateKeysByEthAddressResponse): _211.QueryDelegateKeysByEthAddressResponseAmino;
                fromAminoMsg(object: _211.QueryDelegateKeysByEthAddressResponseAminoMsg): _211.QueryDelegateKeysByEthAddressResponse;
                fromProtoMsg(message: _211.QueryDelegateKeysByEthAddressResponseProtoMsg): _211.QueryDelegateKeysByEthAddressResponse;
                toProto(message: _211.QueryDelegateKeysByEthAddressResponse): Uint8Array;
                toProtoMsg(message: _211.QueryDelegateKeysByEthAddressResponse): _211.QueryDelegateKeysByEthAddressResponseProtoMsg;
            };
            QueryDelegateKeysByOrchestratorAddress: {
                typeUrl: string;
                encode(message: _211.QueryDelegateKeysByOrchestratorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDelegateKeysByOrchestratorAddress;
                fromPartial(object: Partial<_211.QueryDelegateKeysByOrchestratorAddress>): _211.QueryDelegateKeysByOrchestratorAddress;
                fromAmino(object: _211.QueryDelegateKeysByOrchestratorAddressAmino): _211.QueryDelegateKeysByOrchestratorAddress;
                toAmino(message: _211.QueryDelegateKeysByOrchestratorAddress): _211.QueryDelegateKeysByOrchestratorAddressAmino;
                fromAminoMsg(object: _211.QueryDelegateKeysByOrchestratorAddressAminoMsg): _211.QueryDelegateKeysByOrchestratorAddress;
                fromProtoMsg(message: _211.QueryDelegateKeysByOrchestratorAddressProtoMsg): _211.QueryDelegateKeysByOrchestratorAddress;
                toProto(message: _211.QueryDelegateKeysByOrchestratorAddress): Uint8Array;
                toProtoMsg(message: _211.QueryDelegateKeysByOrchestratorAddress): _211.QueryDelegateKeysByOrchestratorAddressProtoMsg;
            };
            QueryDelegateKeysByOrchestratorAddressResponse: {
                typeUrl: string;
                encode(message: _211.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryDelegateKeysByOrchestratorAddressResponse;
                fromPartial(object: Partial<_211.QueryDelegateKeysByOrchestratorAddressResponse>): _211.QueryDelegateKeysByOrchestratorAddressResponse;
                fromAmino(object: _211.QueryDelegateKeysByOrchestratorAddressResponseAmino): _211.QueryDelegateKeysByOrchestratorAddressResponse;
                toAmino(message: _211.QueryDelegateKeysByOrchestratorAddressResponse): _211.QueryDelegateKeysByOrchestratorAddressResponseAmino;
                fromAminoMsg(object: _211.QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): _211.QueryDelegateKeysByOrchestratorAddressResponse;
                fromProtoMsg(message: _211.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): _211.QueryDelegateKeysByOrchestratorAddressResponse;
                toProto(message: _211.QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
                toProtoMsg(message: _211.QueryDelegateKeysByOrchestratorAddressResponse): _211.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
            };
            QueryPendingSendToEth: {
                typeUrl: string;
                encode(message: _211.QueryPendingSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryPendingSendToEth;
                fromPartial(object: Partial<_211.QueryPendingSendToEth>): _211.QueryPendingSendToEth;
                fromAmino(object: _211.QueryPendingSendToEthAmino): _211.QueryPendingSendToEth;
                toAmino(message: _211.QueryPendingSendToEth): _211.QueryPendingSendToEthAmino;
                fromAminoMsg(object: _211.QueryPendingSendToEthAminoMsg): _211.QueryPendingSendToEth;
                fromProtoMsg(message: _211.QueryPendingSendToEthProtoMsg): _211.QueryPendingSendToEth;
                toProto(message: _211.QueryPendingSendToEth): Uint8Array;
                toProtoMsg(message: _211.QueryPendingSendToEth): _211.QueryPendingSendToEthProtoMsg;
            };
            QueryPendingSendToEthResponse: {
                typeUrl: string;
                encode(message: _211.QueryPendingSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryPendingSendToEthResponse;
                fromPartial(object: Partial<_211.QueryPendingSendToEthResponse>): _211.QueryPendingSendToEthResponse;
                fromAmino(object: _211.QueryPendingSendToEthResponseAmino): _211.QueryPendingSendToEthResponse;
                toAmino(message: _211.QueryPendingSendToEthResponse): _211.QueryPendingSendToEthResponseAmino;
                fromAminoMsg(object: _211.QueryPendingSendToEthResponseAminoMsg): _211.QueryPendingSendToEthResponse;
                fromProtoMsg(message: _211.QueryPendingSendToEthResponseProtoMsg): _211.QueryPendingSendToEthResponse;
                toProto(message: _211.QueryPendingSendToEthResponse): Uint8Array;
                toProtoMsg(message: _211.QueryPendingSendToEthResponse): _211.QueryPendingSendToEthResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _211.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryModuleStateRequest;
                fromPartial(_: Partial<_211.QueryModuleStateRequest>): _211.QueryModuleStateRequest;
                fromAmino(_: _211.QueryModuleStateRequestAmino): _211.QueryModuleStateRequest;
                toAmino(_: _211.QueryModuleStateRequest): _211.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _211.QueryModuleStateRequestAminoMsg): _211.QueryModuleStateRequest;
                fromProtoMsg(message: _211.QueryModuleStateRequestProtoMsg): _211.QueryModuleStateRequest;
                toProto(message: _211.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _211.QueryModuleStateRequest): _211.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _211.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _211.QueryModuleStateResponse;
                fromPartial(object: Partial<_211.QueryModuleStateResponse>): _211.QueryModuleStateResponse;
                fromAmino(object: _211.QueryModuleStateResponseAmino): _211.QueryModuleStateResponse;
                toAmino(message: _211.QueryModuleStateResponse): _211.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _211.QueryModuleStateResponseAminoMsg): _211.QueryModuleStateResponse;
                fromProtoMsg(message: _211.QueryModuleStateResponseProtoMsg): _211.QueryModuleStateResponse;
                toProto(message: _211.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _211.QueryModuleStateResponse): _211.QueryModuleStateResponseProtoMsg;
            };
            BlacklistEthereumAddressesProposal: {
                typeUrl: string;
                encode(message: _210.BlacklistEthereumAddressesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _210.BlacklistEthereumAddressesProposal;
                fromPartial(object: Partial<_210.BlacklistEthereumAddressesProposal>): _210.BlacklistEthereumAddressesProposal;
                fromAmino(object: _210.BlacklistEthereumAddressesProposalAmino): _210.BlacklistEthereumAddressesProposal;
                toAmino(message: _210.BlacklistEthereumAddressesProposal): _210.BlacklistEthereumAddressesProposalAmino;
                fromAminoMsg(object: _210.BlacklistEthereumAddressesProposalAminoMsg): _210.BlacklistEthereumAddressesProposal;
                fromProtoMsg(message: _210.BlacklistEthereumAddressesProposalProtoMsg): _210.BlacklistEthereumAddressesProposal;
                toProto(message: _210.BlacklistEthereumAddressesProposal): Uint8Array;
                toProtoMsg(message: _210.BlacklistEthereumAddressesProposal): _210.BlacklistEthereumAddressesProposalProtoMsg;
            };
            RevokeEthereumBlacklistProposal: {
                typeUrl: string;
                encode(message: _210.RevokeEthereumBlacklistProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _210.RevokeEthereumBlacklistProposal;
                fromPartial(object: Partial<_210.RevokeEthereumBlacklistProposal>): _210.RevokeEthereumBlacklistProposal;
                fromAmino(object: _210.RevokeEthereumBlacklistProposalAmino): _210.RevokeEthereumBlacklistProposal;
                toAmino(message: _210.RevokeEthereumBlacklistProposal): _210.RevokeEthereumBlacklistProposalAmino;
                fromAminoMsg(object: _210.RevokeEthereumBlacklistProposalAminoMsg): _210.RevokeEthereumBlacklistProposal;
                fromProtoMsg(message: _210.RevokeEthereumBlacklistProposalProtoMsg): _210.RevokeEthereumBlacklistProposal;
                toProto(message: _210.RevokeEthereumBlacklistProposal): Uint8Array;
                toProtoMsg(message: _210.RevokeEthereumBlacklistProposal): _210.RevokeEthereumBlacklistProposalProtoMsg;
            };
            IDSet: {
                typeUrl: string;
                encode(message: _209.IDSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _209.IDSet;
                fromPartial(object: Partial<_209.IDSet>): _209.IDSet;
                fromAmino(object: _209.IDSetAmino): _209.IDSet;
                toAmino(message: _209.IDSet): _209.IDSetAmino;
                fromAminoMsg(object: _209.IDSetAminoMsg): _209.IDSet;
                fromProtoMsg(message: _209.IDSetProtoMsg): _209.IDSet;
                toProto(message: _209.IDSet): Uint8Array;
                toProtoMsg(message: _209.IDSet): _209.IDSetProtoMsg;
            };
            BatchFees: {
                typeUrl: string;
                encode(message: _209.BatchFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _209.BatchFees;
                fromPartial(object: Partial<_209.BatchFees>): _209.BatchFees;
                fromAmino(object: _209.BatchFeesAmino): _209.BatchFees;
                toAmino(message: _209.BatchFees): _209.BatchFeesAmino;
                fromAminoMsg(object: _209.BatchFeesAminoMsg): _209.BatchFees;
                fromProtoMsg(message: _209.BatchFeesProtoMsg): _209.BatchFees;
                toProto(message: _209.BatchFees): Uint8Array;
                toProtoMsg(message: _209.BatchFees): _209.BatchFeesProtoMsg;
            };
            MsgSetOrchestratorAddresses: {
                typeUrl: string;
                encode(message: _208.MsgSetOrchestratorAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgSetOrchestratorAddresses;
                fromPartial(object: Partial<_208.MsgSetOrchestratorAddresses>): _208.MsgSetOrchestratorAddresses;
                fromAmino(object: _208.MsgSetOrchestratorAddressesAmino): _208.MsgSetOrchestratorAddresses;
                toAmino(message: _208.MsgSetOrchestratorAddresses): _208.MsgSetOrchestratorAddressesAmino;
                fromAminoMsg(object: _208.MsgSetOrchestratorAddressesAminoMsg): _208.MsgSetOrchestratorAddresses;
                fromProtoMsg(message: _208.MsgSetOrchestratorAddressesProtoMsg): _208.MsgSetOrchestratorAddresses;
                toProto(message: _208.MsgSetOrchestratorAddresses): Uint8Array;
                toProtoMsg(message: _208.MsgSetOrchestratorAddresses): _208.MsgSetOrchestratorAddressesProtoMsg;
            };
            MsgSetOrchestratorAddressesResponse: {
                typeUrl: string;
                encode(_: _208.MsgSetOrchestratorAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgSetOrchestratorAddressesResponse;
                fromPartial(_: Partial<_208.MsgSetOrchestratorAddressesResponse>): _208.MsgSetOrchestratorAddressesResponse;
                fromAmino(_: _208.MsgSetOrchestratorAddressesResponseAmino): _208.MsgSetOrchestratorAddressesResponse;
                toAmino(_: _208.MsgSetOrchestratorAddressesResponse): _208.MsgSetOrchestratorAddressesResponseAmino;
                fromAminoMsg(object: _208.MsgSetOrchestratorAddressesResponseAminoMsg): _208.MsgSetOrchestratorAddressesResponse;
                fromProtoMsg(message: _208.MsgSetOrchestratorAddressesResponseProtoMsg): _208.MsgSetOrchestratorAddressesResponse;
                toProto(message: _208.MsgSetOrchestratorAddressesResponse): Uint8Array;
                toProtoMsg(message: _208.MsgSetOrchestratorAddressesResponse): _208.MsgSetOrchestratorAddressesResponseProtoMsg;
            };
            MsgValsetConfirm: {
                typeUrl: string;
                encode(message: _208.MsgValsetConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgValsetConfirm;
                fromPartial(object: Partial<_208.MsgValsetConfirm>): _208.MsgValsetConfirm;
                fromAmino(object: _208.MsgValsetConfirmAmino): _208.MsgValsetConfirm;
                toAmino(message: _208.MsgValsetConfirm): _208.MsgValsetConfirmAmino;
                fromAminoMsg(object: _208.MsgValsetConfirmAminoMsg): _208.MsgValsetConfirm;
                fromProtoMsg(message: _208.MsgValsetConfirmProtoMsg): _208.MsgValsetConfirm;
                toProto(message: _208.MsgValsetConfirm): Uint8Array;
                toProtoMsg(message: _208.MsgValsetConfirm): _208.MsgValsetConfirmProtoMsg;
            };
            MsgValsetConfirmResponse: {
                typeUrl: string;
                encode(_: _208.MsgValsetConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgValsetConfirmResponse;
                fromPartial(_: Partial<_208.MsgValsetConfirmResponse>): _208.MsgValsetConfirmResponse;
                fromAmino(_: _208.MsgValsetConfirmResponseAmino): _208.MsgValsetConfirmResponse;
                toAmino(_: _208.MsgValsetConfirmResponse): _208.MsgValsetConfirmResponseAmino;
                fromAminoMsg(object: _208.MsgValsetConfirmResponseAminoMsg): _208.MsgValsetConfirmResponse;
                fromProtoMsg(message: _208.MsgValsetConfirmResponseProtoMsg): _208.MsgValsetConfirmResponse;
                toProto(message: _208.MsgValsetConfirmResponse): Uint8Array;
                toProtoMsg(message: _208.MsgValsetConfirmResponse): _208.MsgValsetConfirmResponseProtoMsg;
            };
            MsgSendToEth: {
                typeUrl: string;
                encode(message: _208.MsgSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgSendToEth;
                fromPartial(object: Partial<_208.MsgSendToEth>): _208.MsgSendToEth;
                fromAmino(object: _208.MsgSendToEthAmino): _208.MsgSendToEth;
                toAmino(message: _208.MsgSendToEth): _208.MsgSendToEthAmino;
                fromAminoMsg(object: _208.MsgSendToEthAminoMsg): _208.MsgSendToEth;
                fromProtoMsg(message: _208.MsgSendToEthProtoMsg): _208.MsgSendToEth;
                toProto(message: _208.MsgSendToEth): Uint8Array;
                toProtoMsg(message: _208.MsgSendToEth): _208.MsgSendToEthProtoMsg;
            };
            MsgSendToEthResponse: {
                typeUrl: string;
                encode(_: _208.MsgSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgSendToEthResponse;
                fromPartial(_: Partial<_208.MsgSendToEthResponse>): _208.MsgSendToEthResponse;
                fromAmino(_: _208.MsgSendToEthResponseAmino): _208.MsgSendToEthResponse;
                toAmino(_: _208.MsgSendToEthResponse): _208.MsgSendToEthResponseAmino;
                fromAminoMsg(object: _208.MsgSendToEthResponseAminoMsg): _208.MsgSendToEthResponse;
                fromProtoMsg(message: _208.MsgSendToEthResponseProtoMsg): _208.MsgSendToEthResponse;
                toProto(message: _208.MsgSendToEthResponse): Uint8Array;
                toProtoMsg(message: _208.MsgSendToEthResponse): _208.MsgSendToEthResponseProtoMsg;
            };
            MsgRequestBatch: {
                typeUrl: string;
                encode(message: _208.MsgRequestBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgRequestBatch;
                fromPartial(object: Partial<_208.MsgRequestBatch>): _208.MsgRequestBatch;
                fromAmino(object: _208.MsgRequestBatchAmino): _208.MsgRequestBatch;
                toAmino(message: _208.MsgRequestBatch): _208.MsgRequestBatchAmino;
                fromAminoMsg(object: _208.MsgRequestBatchAminoMsg): _208.MsgRequestBatch;
                fromProtoMsg(message: _208.MsgRequestBatchProtoMsg): _208.MsgRequestBatch;
                toProto(message: _208.MsgRequestBatch): Uint8Array;
                toProtoMsg(message: _208.MsgRequestBatch): _208.MsgRequestBatchProtoMsg;
            };
            MsgRequestBatchResponse: {
                typeUrl: string;
                encode(_: _208.MsgRequestBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgRequestBatchResponse;
                fromPartial(_: Partial<_208.MsgRequestBatchResponse>): _208.MsgRequestBatchResponse;
                fromAmino(_: _208.MsgRequestBatchResponseAmino): _208.MsgRequestBatchResponse;
                toAmino(_: _208.MsgRequestBatchResponse): _208.MsgRequestBatchResponseAmino;
                fromAminoMsg(object: _208.MsgRequestBatchResponseAminoMsg): _208.MsgRequestBatchResponse;
                fromProtoMsg(message: _208.MsgRequestBatchResponseProtoMsg): _208.MsgRequestBatchResponse;
                toProto(message: _208.MsgRequestBatchResponse): Uint8Array;
                toProtoMsg(message: _208.MsgRequestBatchResponse): _208.MsgRequestBatchResponseProtoMsg;
            };
            MsgConfirmBatch: {
                typeUrl: string;
                encode(message: _208.MsgConfirmBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgConfirmBatch;
                fromPartial(object: Partial<_208.MsgConfirmBatch>): _208.MsgConfirmBatch;
                fromAmino(object: _208.MsgConfirmBatchAmino): _208.MsgConfirmBatch;
                toAmino(message: _208.MsgConfirmBatch): _208.MsgConfirmBatchAmino;
                fromAminoMsg(object: _208.MsgConfirmBatchAminoMsg): _208.MsgConfirmBatch;
                fromProtoMsg(message: _208.MsgConfirmBatchProtoMsg): _208.MsgConfirmBatch;
                toProto(message: _208.MsgConfirmBatch): Uint8Array;
                toProtoMsg(message: _208.MsgConfirmBatch): _208.MsgConfirmBatchProtoMsg;
            };
            MsgConfirmBatchResponse: {
                typeUrl: string;
                encode(_: _208.MsgConfirmBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgConfirmBatchResponse;
                fromPartial(_: Partial<_208.MsgConfirmBatchResponse>): _208.MsgConfirmBatchResponse;
                fromAmino(_: _208.MsgConfirmBatchResponseAmino): _208.MsgConfirmBatchResponse;
                toAmino(_: _208.MsgConfirmBatchResponse): _208.MsgConfirmBatchResponseAmino;
                fromAminoMsg(object: _208.MsgConfirmBatchResponseAminoMsg): _208.MsgConfirmBatchResponse;
                fromProtoMsg(message: _208.MsgConfirmBatchResponseProtoMsg): _208.MsgConfirmBatchResponse;
                toProto(message: _208.MsgConfirmBatchResponse): Uint8Array;
                toProtoMsg(message: _208.MsgConfirmBatchResponse): _208.MsgConfirmBatchResponseProtoMsg;
            };
            MsgDepositClaim: {
                typeUrl: string;
                encode(message: _208.MsgDepositClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgDepositClaim;
                fromPartial(object: Partial<_208.MsgDepositClaim>): _208.MsgDepositClaim;
                fromAmino(object: _208.MsgDepositClaimAmino): _208.MsgDepositClaim;
                toAmino(message: _208.MsgDepositClaim): _208.MsgDepositClaimAmino;
                fromAminoMsg(object: _208.MsgDepositClaimAminoMsg): _208.MsgDepositClaim;
                fromProtoMsg(message: _208.MsgDepositClaimProtoMsg): _208.MsgDepositClaim;
                toProto(message: _208.MsgDepositClaim): Uint8Array;
                toProtoMsg(message: _208.MsgDepositClaim): _208.MsgDepositClaimProtoMsg;
            };
            MsgDepositClaimResponse: {
                typeUrl: string;
                encode(_: _208.MsgDepositClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgDepositClaimResponse;
                fromPartial(_: Partial<_208.MsgDepositClaimResponse>): _208.MsgDepositClaimResponse;
                fromAmino(_: _208.MsgDepositClaimResponseAmino): _208.MsgDepositClaimResponse;
                toAmino(_: _208.MsgDepositClaimResponse): _208.MsgDepositClaimResponseAmino;
                fromAminoMsg(object: _208.MsgDepositClaimResponseAminoMsg): _208.MsgDepositClaimResponse;
                fromProtoMsg(message: _208.MsgDepositClaimResponseProtoMsg): _208.MsgDepositClaimResponse;
                toProto(message: _208.MsgDepositClaimResponse): Uint8Array;
                toProtoMsg(message: _208.MsgDepositClaimResponse): _208.MsgDepositClaimResponseProtoMsg;
            };
            MsgWithdrawClaim: {
                typeUrl: string;
                encode(message: _208.MsgWithdrawClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgWithdrawClaim;
                fromPartial(object: Partial<_208.MsgWithdrawClaim>): _208.MsgWithdrawClaim;
                fromAmino(object: _208.MsgWithdrawClaimAmino): _208.MsgWithdrawClaim;
                toAmino(message: _208.MsgWithdrawClaim): _208.MsgWithdrawClaimAmino;
                fromAminoMsg(object: _208.MsgWithdrawClaimAminoMsg): _208.MsgWithdrawClaim;
                fromProtoMsg(message: _208.MsgWithdrawClaimProtoMsg): _208.MsgWithdrawClaim;
                toProto(message: _208.MsgWithdrawClaim): Uint8Array;
                toProtoMsg(message: _208.MsgWithdrawClaim): _208.MsgWithdrawClaimProtoMsg;
            };
            MsgWithdrawClaimResponse: {
                typeUrl: string;
                encode(_: _208.MsgWithdrawClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgWithdrawClaimResponse;
                fromPartial(_: Partial<_208.MsgWithdrawClaimResponse>): _208.MsgWithdrawClaimResponse;
                fromAmino(_: _208.MsgWithdrawClaimResponseAmino): _208.MsgWithdrawClaimResponse;
                toAmino(_: _208.MsgWithdrawClaimResponse): _208.MsgWithdrawClaimResponseAmino;
                fromAminoMsg(object: _208.MsgWithdrawClaimResponseAminoMsg): _208.MsgWithdrawClaimResponse;
                fromProtoMsg(message: _208.MsgWithdrawClaimResponseProtoMsg): _208.MsgWithdrawClaimResponse;
                toProto(message: _208.MsgWithdrawClaimResponse): Uint8Array;
                toProtoMsg(message: _208.MsgWithdrawClaimResponse): _208.MsgWithdrawClaimResponseProtoMsg;
            };
            MsgERC20DeployedClaim: {
                typeUrl: string;
                encode(message: _208.MsgERC20DeployedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgERC20DeployedClaim;
                fromPartial(object: Partial<_208.MsgERC20DeployedClaim>): _208.MsgERC20DeployedClaim;
                fromAmino(object: _208.MsgERC20DeployedClaimAmino): _208.MsgERC20DeployedClaim;
                toAmino(message: _208.MsgERC20DeployedClaim): _208.MsgERC20DeployedClaimAmino;
                fromAminoMsg(object: _208.MsgERC20DeployedClaimAminoMsg): _208.MsgERC20DeployedClaim;
                fromProtoMsg(message: _208.MsgERC20DeployedClaimProtoMsg): _208.MsgERC20DeployedClaim;
                toProto(message: _208.MsgERC20DeployedClaim): Uint8Array;
                toProtoMsg(message: _208.MsgERC20DeployedClaim): _208.MsgERC20DeployedClaimProtoMsg;
            };
            MsgERC20DeployedClaimResponse: {
                typeUrl: string;
                encode(_: _208.MsgERC20DeployedClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgERC20DeployedClaimResponse;
                fromPartial(_: Partial<_208.MsgERC20DeployedClaimResponse>): _208.MsgERC20DeployedClaimResponse;
                fromAmino(_: _208.MsgERC20DeployedClaimResponseAmino): _208.MsgERC20DeployedClaimResponse;
                toAmino(_: _208.MsgERC20DeployedClaimResponse): _208.MsgERC20DeployedClaimResponseAmino;
                fromAminoMsg(object: _208.MsgERC20DeployedClaimResponseAminoMsg): _208.MsgERC20DeployedClaimResponse;
                fromProtoMsg(message: _208.MsgERC20DeployedClaimResponseProtoMsg): _208.MsgERC20DeployedClaimResponse;
                toProto(message: _208.MsgERC20DeployedClaimResponse): Uint8Array;
                toProtoMsg(message: _208.MsgERC20DeployedClaimResponse): _208.MsgERC20DeployedClaimResponseProtoMsg;
            };
            MsgCancelSendToEth: {
                typeUrl: string;
                encode(message: _208.MsgCancelSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgCancelSendToEth;
                fromPartial(object: Partial<_208.MsgCancelSendToEth>): _208.MsgCancelSendToEth;
                fromAmino(object: _208.MsgCancelSendToEthAmino): _208.MsgCancelSendToEth;
                toAmino(message: _208.MsgCancelSendToEth): _208.MsgCancelSendToEthAmino;
                fromAminoMsg(object: _208.MsgCancelSendToEthAminoMsg): _208.MsgCancelSendToEth;
                fromProtoMsg(message: _208.MsgCancelSendToEthProtoMsg): _208.MsgCancelSendToEth;
                toProto(message: _208.MsgCancelSendToEth): Uint8Array;
                toProtoMsg(message: _208.MsgCancelSendToEth): _208.MsgCancelSendToEthProtoMsg;
            };
            MsgCancelSendToEthResponse: {
                typeUrl: string;
                encode(_: _208.MsgCancelSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgCancelSendToEthResponse;
                fromPartial(_: Partial<_208.MsgCancelSendToEthResponse>): _208.MsgCancelSendToEthResponse;
                fromAmino(_: _208.MsgCancelSendToEthResponseAmino): _208.MsgCancelSendToEthResponse;
                toAmino(_: _208.MsgCancelSendToEthResponse): _208.MsgCancelSendToEthResponseAmino;
                fromAminoMsg(object: _208.MsgCancelSendToEthResponseAminoMsg): _208.MsgCancelSendToEthResponse;
                fromProtoMsg(message: _208.MsgCancelSendToEthResponseProtoMsg): _208.MsgCancelSendToEthResponse;
                toProto(message: _208.MsgCancelSendToEthResponse): Uint8Array;
                toProtoMsg(message: _208.MsgCancelSendToEthResponse): _208.MsgCancelSendToEthResponseProtoMsg;
            };
            MsgSubmitBadSignatureEvidence: {
                typeUrl: string;
                encode(message: _208.MsgSubmitBadSignatureEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgSubmitBadSignatureEvidence;
                fromPartial(object: Partial<_208.MsgSubmitBadSignatureEvidence>): _208.MsgSubmitBadSignatureEvidence;
                fromAmino(object: _208.MsgSubmitBadSignatureEvidenceAmino): _208.MsgSubmitBadSignatureEvidence;
                toAmino(message: _208.MsgSubmitBadSignatureEvidence): _208.MsgSubmitBadSignatureEvidenceAmino;
                fromAminoMsg(object: _208.MsgSubmitBadSignatureEvidenceAminoMsg): _208.MsgSubmitBadSignatureEvidence;
                fromProtoMsg(message: _208.MsgSubmitBadSignatureEvidenceProtoMsg): _208.MsgSubmitBadSignatureEvidence;
                toProto(message: _208.MsgSubmitBadSignatureEvidence): Uint8Array;
                toProtoMsg(message: _208.MsgSubmitBadSignatureEvidence): _208.MsgSubmitBadSignatureEvidenceProtoMsg;
            };
            MsgSubmitBadSignatureEvidenceResponse: {
                typeUrl: string;
                encode(_: _208.MsgSubmitBadSignatureEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgSubmitBadSignatureEvidenceResponse;
                fromPartial(_: Partial<_208.MsgSubmitBadSignatureEvidenceResponse>): _208.MsgSubmitBadSignatureEvidenceResponse;
                fromAmino(_: _208.MsgSubmitBadSignatureEvidenceResponseAmino): _208.MsgSubmitBadSignatureEvidenceResponse;
                toAmino(_: _208.MsgSubmitBadSignatureEvidenceResponse): _208.MsgSubmitBadSignatureEvidenceResponseAmino;
                fromAminoMsg(object: _208.MsgSubmitBadSignatureEvidenceResponseAminoMsg): _208.MsgSubmitBadSignatureEvidenceResponse;
                fromProtoMsg(message: _208.MsgSubmitBadSignatureEvidenceResponseProtoMsg): _208.MsgSubmitBadSignatureEvidenceResponse;
                toProto(message: _208.MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
                toProtoMsg(message: _208.MsgSubmitBadSignatureEvidenceResponse): _208.MsgSubmitBadSignatureEvidenceResponseProtoMsg;
            };
            MsgValsetUpdatedClaim: {
                typeUrl: string;
                encode(message: _208.MsgValsetUpdatedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgValsetUpdatedClaim;
                fromPartial(object: Partial<_208.MsgValsetUpdatedClaim>): _208.MsgValsetUpdatedClaim;
                fromAmino(object: _208.MsgValsetUpdatedClaimAmino): _208.MsgValsetUpdatedClaim;
                toAmino(message: _208.MsgValsetUpdatedClaim): _208.MsgValsetUpdatedClaimAmino;
                fromAminoMsg(object: _208.MsgValsetUpdatedClaimAminoMsg): _208.MsgValsetUpdatedClaim;
                fromProtoMsg(message: _208.MsgValsetUpdatedClaimProtoMsg): _208.MsgValsetUpdatedClaim;
                toProto(message: _208.MsgValsetUpdatedClaim): Uint8Array;
                toProtoMsg(message: _208.MsgValsetUpdatedClaim): _208.MsgValsetUpdatedClaimProtoMsg;
            };
            MsgValsetUpdatedClaimResponse: {
                typeUrl: string;
                encode(_: _208.MsgValsetUpdatedClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _208.MsgValsetUpdatedClaimResponse;
                fromPartial(_: Partial<_208.MsgValsetUpdatedClaimResponse>): _208.MsgValsetUpdatedClaimResponse;
                fromAmino(_: _208.MsgValsetUpdatedClaimResponseAmino): _208.MsgValsetUpdatedClaimResponse;
                toAmino(_: _208.MsgValsetUpdatedClaimResponse): _208.MsgValsetUpdatedClaimResponseAmino;
                fromAminoMsg(object: _208.MsgValsetUpdatedClaimResponseAminoMsg): _208.MsgValsetUpdatedClaimResponse;
                fromProtoMsg(message: _208.MsgValsetUpdatedClaimResponseProtoMsg): _208.MsgValsetUpdatedClaimResponse;
                toProto(message: _208.MsgValsetUpdatedClaimResponse): Uint8Array;
                toProtoMsg(message: _208.MsgValsetUpdatedClaimResponse): _208.MsgValsetUpdatedClaimResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _207.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _207.Params;
                fromPartial(object: Partial<_207.Params>): _207.Params;
                fromAmino(object: _207.ParamsAmino): _207.Params;
                toAmino(message: _207.Params): _207.ParamsAmino;
                fromAminoMsg(object: _207.ParamsAminoMsg): _207.Params;
                fromProtoMsg(message: _207.ParamsProtoMsg): _207.Params;
                toProto(message: _207.Params): Uint8Array;
                toProtoMsg(message: _207.Params): _207.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _207.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _207.GenesisState;
                fromPartial(object: Partial<_207.GenesisState>): _207.GenesisState;
                fromAmino(object: _207.GenesisStateAmino): _207.GenesisState;
                toAmino(message: _207.GenesisState): _207.GenesisStateAmino;
                fromAminoMsg(object: _207.GenesisStateAminoMsg): _207.GenesisState;
                fromProtoMsg(message: _207.GenesisStateProtoMsg): _207.GenesisState;
                toProto(message: _207.GenesisState): Uint8Array;
                toProtoMsg(message: _207.GenesisState): _207.GenesisStateProtoMsg;
            };
            EventAttestationObserved: {
                typeUrl: string;
                encode(message: _206.EventAttestationObserved, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventAttestationObserved;
                fromPartial(object: Partial<_206.EventAttestationObserved>): _206.EventAttestationObserved;
                fromAmino(object: _206.EventAttestationObservedAmino): _206.EventAttestationObserved;
                toAmino(message: _206.EventAttestationObserved): _206.EventAttestationObservedAmino;
                fromAminoMsg(object: _206.EventAttestationObservedAminoMsg): _206.EventAttestationObserved;
                fromProtoMsg(message: _206.EventAttestationObservedProtoMsg): _206.EventAttestationObserved;
                toProto(message: _206.EventAttestationObserved): Uint8Array;
                toProtoMsg(message: _206.EventAttestationObserved): _206.EventAttestationObservedProtoMsg;
            };
            EventBridgeWithdrawCanceled: {
                typeUrl: string;
                encode(message: _206.EventBridgeWithdrawCanceled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventBridgeWithdrawCanceled;
                fromPartial(object: Partial<_206.EventBridgeWithdrawCanceled>): _206.EventBridgeWithdrawCanceled;
                fromAmino(object: _206.EventBridgeWithdrawCanceledAmino): _206.EventBridgeWithdrawCanceled;
                toAmino(message: _206.EventBridgeWithdrawCanceled): _206.EventBridgeWithdrawCanceledAmino;
                fromAminoMsg(object: _206.EventBridgeWithdrawCanceledAminoMsg): _206.EventBridgeWithdrawCanceled;
                fromProtoMsg(message: _206.EventBridgeWithdrawCanceledProtoMsg): _206.EventBridgeWithdrawCanceled;
                toProto(message: _206.EventBridgeWithdrawCanceled): Uint8Array;
                toProtoMsg(message: _206.EventBridgeWithdrawCanceled): _206.EventBridgeWithdrawCanceledProtoMsg;
            };
            EventOutgoingBatch: {
                typeUrl: string;
                encode(message: _206.EventOutgoingBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventOutgoingBatch;
                fromPartial(object: Partial<_206.EventOutgoingBatch>): _206.EventOutgoingBatch;
                fromAmino(object: _206.EventOutgoingBatchAmino): _206.EventOutgoingBatch;
                toAmino(message: _206.EventOutgoingBatch): _206.EventOutgoingBatchAmino;
                fromAminoMsg(object: _206.EventOutgoingBatchAminoMsg): _206.EventOutgoingBatch;
                fromProtoMsg(message: _206.EventOutgoingBatchProtoMsg): _206.EventOutgoingBatch;
                toProto(message: _206.EventOutgoingBatch): Uint8Array;
                toProtoMsg(message: _206.EventOutgoingBatch): _206.EventOutgoingBatchProtoMsg;
            };
            EventOutgoingBatchCanceled: {
                typeUrl: string;
                encode(message: _206.EventOutgoingBatchCanceled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventOutgoingBatchCanceled;
                fromPartial(object: Partial<_206.EventOutgoingBatchCanceled>): _206.EventOutgoingBatchCanceled;
                fromAmino(object: _206.EventOutgoingBatchCanceledAmino): _206.EventOutgoingBatchCanceled;
                toAmino(message: _206.EventOutgoingBatchCanceled): _206.EventOutgoingBatchCanceledAmino;
                fromAminoMsg(object: _206.EventOutgoingBatchCanceledAminoMsg): _206.EventOutgoingBatchCanceled;
                fromProtoMsg(message: _206.EventOutgoingBatchCanceledProtoMsg): _206.EventOutgoingBatchCanceled;
                toProto(message: _206.EventOutgoingBatchCanceled): Uint8Array;
                toProtoMsg(message: _206.EventOutgoingBatchCanceled): _206.EventOutgoingBatchCanceledProtoMsg;
            };
            EventValsetUpdateRequest: {
                typeUrl: string;
                encode(message: _206.EventValsetUpdateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventValsetUpdateRequest;
                fromPartial(object: Partial<_206.EventValsetUpdateRequest>): _206.EventValsetUpdateRequest;
                fromAmino(object: _206.EventValsetUpdateRequestAmino): _206.EventValsetUpdateRequest;
                toAmino(message: _206.EventValsetUpdateRequest): _206.EventValsetUpdateRequestAmino;
                fromAminoMsg(object: _206.EventValsetUpdateRequestAminoMsg): _206.EventValsetUpdateRequest;
                fromProtoMsg(message: _206.EventValsetUpdateRequestProtoMsg): _206.EventValsetUpdateRequest;
                toProto(message: _206.EventValsetUpdateRequest): Uint8Array;
                toProtoMsg(message: _206.EventValsetUpdateRequest): _206.EventValsetUpdateRequestProtoMsg;
            };
            EventSetOrchestratorAddresses: {
                typeUrl: string;
                encode(message: _206.EventSetOrchestratorAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventSetOrchestratorAddresses;
                fromPartial(object: Partial<_206.EventSetOrchestratorAddresses>): _206.EventSetOrchestratorAddresses;
                fromAmino(object: _206.EventSetOrchestratorAddressesAmino): _206.EventSetOrchestratorAddresses;
                toAmino(message: _206.EventSetOrchestratorAddresses): _206.EventSetOrchestratorAddressesAmino;
                fromAminoMsg(object: _206.EventSetOrchestratorAddressesAminoMsg): _206.EventSetOrchestratorAddresses;
                fromProtoMsg(message: _206.EventSetOrchestratorAddressesProtoMsg): _206.EventSetOrchestratorAddresses;
                toProto(message: _206.EventSetOrchestratorAddresses): Uint8Array;
                toProtoMsg(message: _206.EventSetOrchestratorAddresses): _206.EventSetOrchestratorAddressesProtoMsg;
            };
            EventValsetConfirm: {
                typeUrl: string;
                encode(message: _206.EventValsetConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventValsetConfirm;
                fromPartial(object: Partial<_206.EventValsetConfirm>): _206.EventValsetConfirm;
                fromAmino(object: _206.EventValsetConfirmAmino): _206.EventValsetConfirm;
                toAmino(message: _206.EventValsetConfirm): _206.EventValsetConfirmAmino;
                fromAminoMsg(object: _206.EventValsetConfirmAminoMsg): _206.EventValsetConfirm;
                fromProtoMsg(message: _206.EventValsetConfirmProtoMsg): _206.EventValsetConfirm;
                toProto(message: _206.EventValsetConfirm): Uint8Array;
                toProtoMsg(message: _206.EventValsetConfirm): _206.EventValsetConfirmProtoMsg;
            };
            EventSendToEth: {
                typeUrl: string;
                encode(message: _206.EventSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventSendToEth;
                fromPartial(object: Partial<_206.EventSendToEth>): _206.EventSendToEth;
                fromAmino(object: _206.EventSendToEthAmino): _206.EventSendToEth;
                toAmino(message: _206.EventSendToEth): _206.EventSendToEthAmino;
                fromAminoMsg(object: _206.EventSendToEthAminoMsg): _206.EventSendToEth;
                fromProtoMsg(message: _206.EventSendToEthProtoMsg): _206.EventSendToEth;
                toProto(message: _206.EventSendToEth): Uint8Array;
                toProtoMsg(message: _206.EventSendToEth): _206.EventSendToEthProtoMsg;
            };
            EventConfirmBatch: {
                typeUrl: string;
                encode(message: _206.EventConfirmBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventConfirmBatch;
                fromPartial(object: Partial<_206.EventConfirmBatch>): _206.EventConfirmBatch;
                fromAmino(object: _206.EventConfirmBatchAmino): _206.EventConfirmBatch;
                toAmino(message: _206.EventConfirmBatch): _206.EventConfirmBatchAmino;
                fromAminoMsg(object: _206.EventConfirmBatchAminoMsg): _206.EventConfirmBatch;
                fromProtoMsg(message: _206.EventConfirmBatchProtoMsg): _206.EventConfirmBatch;
                toProto(message: _206.EventConfirmBatch): Uint8Array;
                toProtoMsg(message: _206.EventConfirmBatch): _206.EventConfirmBatchProtoMsg;
            };
            EventAttestationVote: {
                typeUrl: string;
                encode(message: _206.EventAttestationVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventAttestationVote;
                fromPartial(object: Partial<_206.EventAttestationVote>): _206.EventAttestationVote;
                fromAmino(object: _206.EventAttestationVoteAmino): _206.EventAttestationVote;
                toAmino(message: _206.EventAttestationVote): _206.EventAttestationVoteAmino;
                fromAminoMsg(object: _206.EventAttestationVoteAminoMsg): _206.EventAttestationVote;
                fromProtoMsg(message: _206.EventAttestationVoteProtoMsg): _206.EventAttestationVote;
                toProto(message: _206.EventAttestationVote): Uint8Array;
                toProtoMsg(message: _206.EventAttestationVote): _206.EventAttestationVoteProtoMsg;
            };
            EventDepositClaim: {
                typeUrl: string;
                encode(message: _206.EventDepositClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventDepositClaim;
                fromPartial(object: Partial<_206.EventDepositClaim>): _206.EventDepositClaim;
                fromAmino(object: _206.EventDepositClaimAmino): _206.EventDepositClaim;
                toAmino(message: _206.EventDepositClaim): _206.EventDepositClaimAmino;
                fromAminoMsg(object: _206.EventDepositClaimAminoMsg): _206.EventDepositClaim;
                fromProtoMsg(message: _206.EventDepositClaimProtoMsg): _206.EventDepositClaim;
                toProto(message: _206.EventDepositClaim): Uint8Array;
                toProtoMsg(message: _206.EventDepositClaim): _206.EventDepositClaimProtoMsg;
            };
            EventWithdrawClaim: {
                typeUrl: string;
                encode(message: _206.EventWithdrawClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventWithdrawClaim;
                fromPartial(object: Partial<_206.EventWithdrawClaim>): _206.EventWithdrawClaim;
                fromAmino(object: _206.EventWithdrawClaimAmino): _206.EventWithdrawClaim;
                toAmino(message: _206.EventWithdrawClaim): _206.EventWithdrawClaimAmino;
                fromAminoMsg(object: _206.EventWithdrawClaimAminoMsg): _206.EventWithdrawClaim;
                fromProtoMsg(message: _206.EventWithdrawClaimProtoMsg): _206.EventWithdrawClaim;
                toProto(message: _206.EventWithdrawClaim): Uint8Array;
                toProtoMsg(message: _206.EventWithdrawClaim): _206.EventWithdrawClaimProtoMsg;
            };
            EventERC20DeployedClaim: {
                typeUrl: string;
                encode(message: _206.EventERC20DeployedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventERC20DeployedClaim;
                fromPartial(object: Partial<_206.EventERC20DeployedClaim>): _206.EventERC20DeployedClaim;
                fromAmino(object: _206.EventERC20DeployedClaimAmino): _206.EventERC20DeployedClaim;
                toAmino(message: _206.EventERC20DeployedClaim): _206.EventERC20DeployedClaimAmino;
                fromAminoMsg(object: _206.EventERC20DeployedClaimAminoMsg): _206.EventERC20DeployedClaim;
                fromProtoMsg(message: _206.EventERC20DeployedClaimProtoMsg): _206.EventERC20DeployedClaim;
                toProto(message: _206.EventERC20DeployedClaim): Uint8Array;
                toProtoMsg(message: _206.EventERC20DeployedClaim): _206.EventERC20DeployedClaimProtoMsg;
            };
            EventValsetUpdateClaim: {
                typeUrl: string;
                encode(message: _206.EventValsetUpdateClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventValsetUpdateClaim;
                fromPartial(object: Partial<_206.EventValsetUpdateClaim>): _206.EventValsetUpdateClaim;
                fromAmino(object: _206.EventValsetUpdateClaimAmino): _206.EventValsetUpdateClaim;
                toAmino(message: _206.EventValsetUpdateClaim): _206.EventValsetUpdateClaimAmino;
                fromAminoMsg(object: _206.EventValsetUpdateClaimAminoMsg): _206.EventValsetUpdateClaim;
                fromProtoMsg(message: _206.EventValsetUpdateClaimProtoMsg): _206.EventValsetUpdateClaim;
                toProto(message: _206.EventValsetUpdateClaim): Uint8Array;
                toProtoMsg(message: _206.EventValsetUpdateClaim): _206.EventValsetUpdateClaimProtoMsg;
            };
            EventCancelSendToEth: {
                typeUrl: string;
                encode(message: _206.EventCancelSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventCancelSendToEth;
                fromPartial(object: Partial<_206.EventCancelSendToEth>): _206.EventCancelSendToEth;
                fromAmino(object: _206.EventCancelSendToEthAmino): _206.EventCancelSendToEth;
                toAmino(message: _206.EventCancelSendToEth): _206.EventCancelSendToEthAmino;
                fromAminoMsg(object: _206.EventCancelSendToEthAminoMsg): _206.EventCancelSendToEth;
                fromProtoMsg(message: _206.EventCancelSendToEthProtoMsg): _206.EventCancelSendToEth;
                toProto(message: _206.EventCancelSendToEth): Uint8Array;
                toProtoMsg(message: _206.EventCancelSendToEth): _206.EventCancelSendToEthProtoMsg;
            };
            EventSubmitBadSignatureEvidence: {
                typeUrl: string;
                encode(message: _206.EventSubmitBadSignatureEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _206.EventSubmitBadSignatureEvidence;
                fromPartial(object: Partial<_206.EventSubmitBadSignatureEvidence>): _206.EventSubmitBadSignatureEvidence;
                fromAmino(object: _206.EventSubmitBadSignatureEvidenceAmino): _206.EventSubmitBadSignatureEvidence;
                toAmino(message: _206.EventSubmitBadSignatureEvidence): _206.EventSubmitBadSignatureEvidenceAmino;
                fromAminoMsg(object: _206.EventSubmitBadSignatureEvidenceAminoMsg): _206.EventSubmitBadSignatureEvidence;
                fromProtoMsg(message: _206.EventSubmitBadSignatureEvidenceProtoMsg): _206.EventSubmitBadSignatureEvidence;
                toProto(message: _206.EventSubmitBadSignatureEvidence): Uint8Array;
                toProtoMsg(message: _206.EventSubmitBadSignatureEvidence): _206.EventSubmitBadSignatureEvidenceProtoMsg;
            };
            signTypeFromJSON(object: any): _205.SignType;
            signTypeToJSON(object: _205.SignType): string;
            SignType: typeof _205.SignType;
            SignTypeSDKType: typeof _205.SignType;
            SignTypeAmino: typeof _205.SignType;
            OutgoingTxBatch: {
                typeUrl: string;
                encode(message: _204.OutgoingTxBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _204.OutgoingTxBatch;
                fromPartial(object: Partial<_204.OutgoingTxBatch>): _204.OutgoingTxBatch;
                fromAmino(object: _204.OutgoingTxBatchAmino): _204.OutgoingTxBatch;
                toAmino(message: _204.OutgoingTxBatch): _204.OutgoingTxBatchAmino;
                fromAminoMsg(object: _204.OutgoingTxBatchAminoMsg): _204.OutgoingTxBatch;
                fromProtoMsg(message: _204.OutgoingTxBatchProtoMsg): _204.OutgoingTxBatch;
                toProto(message: _204.OutgoingTxBatch): Uint8Array;
                toProtoMsg(message: _204.OutgoingTxBatch): _204.OutgoingTxBatchProtoMsg;
            };
            OutgoingTransferTx: {
                typeUrl: string;
                encode(message: _204.OutgoingTransferTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _204.OutgoingTransferTx;
                fromPartial(object: Partial<_204.OutgoingTransferTx>): _204.OutgoingTransferTx;
                fromAmino(object: _204.OutgoingTransferTxAmino): _204.OutgoingTransferTx;
                toAmino(message: _204.OutgoingTransferTx): _204.OutgoingTransferTxAmino;
                fromAminoMsg(object: _204.OutgoingTransferTxAminoMsg): _204.OutgoingTransferTx;
                fromProtoMsg(message: _204.OutgoingTransferTxProtoMsg): _204.OutgoingTransferTx;
                toProto(message: _204.OutgoingTransferTx): Uint8Array;
                toProtoMsg(message: _204.OutgoingTransferTx): _204.OutgoingTransferTxProtoMsg;
            };
            claimTypeFromJSON(object: any): _203.ClaimType;
            claimTypeToJSON(object: _203.ClaimType): string;
            ClaimType: typeof _203.ClaimType;
            ClaimTypeSDKType: typeof _203.ClaimType;
            ClaimTypeAmino: typeof _203.ClaimType;
            Attestation: {
                typeUrl: string;
                encode(message: _203.Attestation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _203.Attestation;
                fromPartial(object: Partial<_203.Attestation>): _203.Attestation;
                fromAmino(object: _203.AttestationAmino): _203.Attestation;
                toAmino(message: _203.Attestation): _203.AttestationAmino;
                fromAminoMsg(object: _203.AttestationAminoMsg): _203.Attestation;
                fromProtoMsg(message: _203.AttestationProtoMsg): _203.Attestation;
                toProto(message: _203.Attestation): Uint8Array;
                toProtoMsg(message: _203.Attestation): _203.AttestationProtoMsg;
            };
            ERC20Token: {
                typeUrl: string;
                encode(message: _203.ERC20Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _203.ERC20Token;
                fromPartial(object: Partial<_203.ERC20Token>): _203.ERC20Token;
                fromAmino(object: _203.ERC20TokenAmino): _203.ERC20Token;
                toAmino(message: _203.ERC20Token): _203.ERC20TokenAmino;
                fromAminoMsg(object: _203.ERC20TokenAminoMsg): _203.ERC20Token;
                fromProtoMsg(message: _203.ERC20TokenProtoMsg): _203.ERC20Token;
                toProto(message: _203.ERC20Token): Uint8Array;
                toProtoMsg(message: _203.ERC20Token): _203.ERC20TokenProtoMsg;
            };
        };
    }
    namespace types {
        const v1beta1: {
            TxResponseGenericMessage: {
                typeUrl: string;
                encode(message: _215.TxResponseGenericMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _215.TxResponseGenericMessage;
                fromPartial(object: Partial<_215.TxResponseGenericMessage>): _215.TxResponseGenericMessage;
                fromAmino(object: _215.TxResponseGenericMessageAmino): _215.TxResponseGenericMessage;
                toAmino(message: _215.TxResponseGenericMessage): _215.TxResponseGenericMessageAmino;
                fromAminoMsg(object: _215.TxResponseGenericMessageAminoMsg): _215.TxResponseGenericMessage;
                fromProtoMsg(message: _215.TxResponseGenericMessageProtoMsg): _215.TxResponseGenericMessage;
                toProto(message: _215.TxResponseGenericMessage): Uint8Array;
                toProtoMsg(message: _215.TxResponseGenericMessage): _215.TxResponseGenericMessageProtoMsg;
            };
            TxResponseData: {
                typeUrl: string;
                encode(message: _215.TxResponseData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _215.TxResponseData;
                fromPartial(object: Partial<_215.TxResponseData>): _215.TxResponseData;
                fromAmino(object: _215.TxResponseDataAmino): _215.TxResponseData;
                toAmino(message: _215.TxResponseData): _215.TxResponseDataAmino;
                fromAminoMsg(object: _215.TxResponseDataAminoMsg): _215.TxResponseData;
                fromProtoMsg(message: _215.TxResponseDataProtoMsg): _215.TxResponseData;
                toProto(message: _215.TxResponseData): Uint8Array;
                toProtoMsg(message: _215.TxResponseData): _215.TxResponseDataProtoMsg;
            };
            ExtensionOptionsWeb3Tx: {
                typeUrl: string;
                encode(message: _214.ExtensionOptionsWeb3Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _214.ExtensionOptionsWeb3Tx;
                fromPartial(object: Partial<_214.ExtensionOptionsWeb3Tx>): _214.ExtensionOptionsWeb3Tx;
                fromAmino(object: _214.ExtensionOptionsWeb3TxAmino): _214.ExtensionOptionsWeb3Tx;
                toAmino(message: _214.ExtensionOptionsWeb3Tx): _214.ExtensionOptionsWeb3TxAmino;
                fromAminoMsg(object: _214.ExtensionOptionsWeb3TxAminoMsg): _214.ExtensionOptionsWeb3Tx;
                fromProtoMsg(message: _214.ExtensionOptionsWeb3TxProtoMsg): _214.ExtensionOptionsWeb3Tx;
                toProto(message: _214.ExtensionOptionsWeb3Tx): Uint8Array;
                toProtoMsg(message: _214.ExtensionOptionsWeb3Tx): _214.ExtensionOptionsWeb3TxProtoMsg;
            };
            EthAccount: {
                typeUrl: string;
                encode(message: _213.EthAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _213.EthAccount;
                fromPartial(object: Partial<_213.EthAccount>): _213.EthAccount;
                fromAmino(object: _213.EthAccountAmino): _213.EthAccount;
                toAmino(message: _213.EthAccount): _213.EthAccountAmino;
                fromAminoMsg(object: _213.EthAccountAminoMsg): _213.EthAccount;
                fromProtoMsg(message: _213.EthAccountProtoMsg): _213.EthAccount;
                toProto(message: _213.EthAccount): Uint8Array;
                toProtoMsg(message: _213.EthAccount): _213.EthAccountProtoMsg;
            };
        };
    }
    namespace wasmx {
        const v1: {
            QueryClientImpl: typeof _490.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                wasmxParams(request?: _217.QueryWasmxParamsRequest): Promise<_217.QueryWasmxParamsResponse>;
                wasmxModuleState(request?: _217.QueryModuleStateRequest): Promise<_217.QueryModuleStateResponse>;
            };
            Params: {
                typeUrl: string;
                encode(message: _219.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _219.Params;
                fromPartial(object: Partial<_219.Params>): _219.Params;
                fromAmino(object: _219.ParamsAmino): _219.Params;
                toAmino(message: _219.Params): _219.ParamsAmino;
                fromAminoMsg(object: _219.ParamsAminoMsg): _219.Params;
                fromProtoMsg(message: _219.ParamsProtoMsg): _219.Params;
                toProto(message: _219.Params): Uint8Array;
                toProtoMsg(message: _219.Params): _219.ParamsProtoMsg;
            };
            ContractRegistrationRequestProposal: {
                typeUrl: string;
                encode(message: _219.ContractRegistrationRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _219.ContractRegistrationRequestProposal;
                fromPartial(object: Partial<_219.ContractRegistrationRequestProposal>): _219.ContractRegistrationRequestProposal;
                fromAmino(object: _219.ContractRegistrationRequestProposalAmino): _219.ContractRegistrationRequestProposal;
                toAmino(message: _219.ContractRegistrationRequestProposal): _219.ContractRegistrationRequestProposalAmino;
                fromAminoMsg(object: _219.ContractRegistrationRequestProposalAminoMsg): _219.ContractRegistrationRequestProposal;
                fromProtoMsg(message: _219.ContractRegistrationRequestProposalProtoMsg): _219.ContractRegistrationRequestProposal;
                toProto(message: _219.ContractRegistrationRequestProposal): Uint8Array;
                toProtoMsg(message: _219.ContractRegistrationRequestProposal): _219.ContractRegistrationRequestProposalProtoMsg;
            };
            BatchContractRegistrationRequestProposal: {
                typeUrl: string;
                encode(message: _219.BatchContractRegistrationRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _219.BatchContractRegistrationRequestProposal;
                fromPartial(object: Partial<_219.BatchContractRegistrationRequestProposal>): _219.BatchContractRegistrationRequestProposal;
                fromAmino(object: _219.BatchContractRegistrationRequestProposalAmino): _219.BatchContractRegistrationRequestProposal;
                toAmino(message: _219.BatchContractRegistrationRequestProposal): _219.BatchContractRegistrationRequestProposalAmino;
                fromAminoMsg(object: _219.BatchContractRegistrationRequestProposalAminoMsg): _219.BatchContractRegistrationRequestProposal;
                fromProtoMsg(message: _219.BatchContractRegistrationRequestProposalProtoMsg): _219.BatchContractRegistrationRequestProposal;
                toProto(message: _219.BatchContractRegistrationRequestProposal): Uint8Array;
                toProtoMsg(message: _219.BatchContractRegistrationRequestProposal): _219.BatchContractRegistrationRequestProposalProtoMsg;
            };
            ContractRegistrationRequest: {
                typeUrl: string;
                encode(message: _219.ContractRegistrationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _219.ContractRegistrationRequest;
                fromPartial(object: Partial<_219.ContractRegistrationRequest>): _219.ContractRegistrationRequest;
                fromAmino(object: _219.ContractRegistrationRequestAmino): _219.ContractRegistrationRequest;
                toAmino(message: _219.ContractRegistrationRequest): _219.ContractRegistrationRequestAmino;
                fromAminoMsg(object: _219.ContractRegistrationRequestAminoMsg): _219.ContractRegistrationRequest;
                fromProtoMsg(message: _219.ContractRegistrationRequestProtoMsg): _219.ContractRegistrationRequest;
                toProto(message: _219.ContractRegistrationRequest): Uint8Array;
                toProtoMsg(message: _219.ContractRegistrationRequest): _219.ContractRegistrationRequestProtoMsg;
            };
            QueryWasmxParamsRequest: {
                typeUrl: string;
                encode(_: _217.QueryWasmxParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _217.QueryWasmxParamsRequest;
                fromPartial(_: Partial<_217.QueryWasmxParamsRequest>): _217.QueryWasmxParamsRequest;
                fromAmino(_: _217.QueryWasmxParamsRequestAmino): _217.QueryWasmxParamsRequest;
                toAmino(_: _217.QueryWasmxParamsRequest): _217.QueryWasmxParamsRequestAmino;
                fromAminoMsg(object: _217.QueryWasmxParamsRequestAminoMsg): _217.QueryWasmxParamsRequest;
                fromProtoMsg(message: _217.QueryWasmxParamsRequestProtoMsg): _217.QueryWasmxParamsRequest;
                toProto(message: _217.QueryWasmxParamsRequest): Uint8Array;
                toProtoMsg(message: _217.QueryWasmxParamsRequest): _217.QueryWasmxParamsRequestProtoMsg;
            };
            QueryWasmxParamsResponse: {
                typeUrl: string;
                encode(message: _217.QueryWasmxParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _217.QueryWasmxParamsResponse;
                fromPartial(object: Partial<_217.QueryWasmxParamsResponse>): _217.QueryWasmxParamsResponse;
                fromAmino(object: _217.QueryWasmxParamsResponseAmino): _217.QueryWasmxParamsResponse;
                toAmino(message: _217.QueryWasmxParamsResponse): _217.QueryWasmxParamsResponseAmino;
                fromAminoMsg(object: _217.QueryWasmxParamsResponseAminoMsg): _217.QueryWasmxParamsResponse;
                fromProtoMsg(message: _217.QueryWasmxParamsResponseProtoMsg): _217.QueryWasmxParamsResponse;
                toProto(message: _217.QueryWasmxParamsResponse): Uint8Array;
                toProtoMsg(message: _217.QueryWasmxParamsResponse): _217.QueryWasmxParamsResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _217.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _217.QueryModuleStateRequest;
                fromPartial(_: Partial<_217.QueryModuleStateRequest>): _217.QueryModuleStateRequest;
                fromAmino(_: _217.QueryModuleStateRequestAmino): _217.QueryModuleStateRequest;
                toAmino(_: _217.QueryModuleStateRequest): _217.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _217.QueryModuleStateRequestAminoMsg): _217.QueryModuleStateRequest;
                fromProtoMsg(message: _217.QueryModuleStateRequestProtoMsg): _217.QueryModuleStateRequest;
                toProto(message: _217.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _217.QueryModuleStateRequest): _217.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _217.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _217.QueryModuleStateResponse;
                fromPartial(object: Partial<_217.QueryModuleStateResponse>): _217.QueryModuleStateResponse;
                fromAmino(object: _217.QueryModuleStateResponseAmino): _217.QueryModuleStateResponse;
                toAmino(message: _217.QueryModuleStateResponse): _217.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _217.QueryModuleStateResponseAminoMsg): _217.QueryModuleStateResponse;
                fromProtoMsg(message: _217.QueryModuleStateResponseProtoMsg): _217.QueryModuleStateResponse;
                toProto(message: _217.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _217.QueryModuleStateResponse): _217.QueryModuleStateResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _216.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _216.GenesisState;
                fromPartial(object: Partial<_216.GenesisState>): _216.GenesisState;
                fromAmino(object: _216.GenesisStateAmino): _216.GenesisState;
                toAmino(message: _216.GenesisState): _216.GenesisStateAmino;
                fromAminoMsg(object: _216.GenesisStateAminoMsg): _216.GenesisState;
                fromProtoMsg(message: _216.GenesisStateProtoMsg): _216.GenesisState;
                toProto(message: _216.GenesisState): Uint8Array;
                toProtoMsg(message: _216.GenesisState): _216.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            injective: {
                auction: {
                    v1beta1: _491.MsgClientImpl;
                };
                exchange: {
                    v1beta1: _492.MsgClientImpl;
                };
                insurance: {
                    v1beta1: _493.MsgClientImpl;
                };
                ocr: {
                    v1beta1: _494.MsgClientImpl;
                };
                oracle: {
                    v1beta1: _495.MsgClientImpl;
                };
                peggy: {
                    v1: _496.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            injective: {
                auction: {
                    v1beta1: {
                        auctionParams(request?: _180.QueryAuctionParamsRequest): Promise<_180.QueryAuctionParamsResponse>;
                        currentAuctionBasket(request?: _180.QueryCurrentAuctionBasketRequest): Promise<_180.QueryCurrentAuctionBasketResponse>;
                        auctionModuleState(request?: _180.QueryModuleStateRequest): Promise<_180.QueryModuleStateResponse>;
                    };
                };
                exchange: {
                    v1beta1: {
                        queryExchangeParams(request?: _187.QueryExchangeParamsRequest): Promise<_187.QueryExchangeParamsResponse>;
                        subaccountDeposits(request: _187.QuerySubaccountDepositsRequest): Promise<_187.QuerySubaccountDepositsResponse>;
                        subaccountDeposit(request: _187.QuerySubaccountDepositRequest): Promise<_187.QuerySubaccountDepositResponse>;
                        exchangeBalances(request?: _187.QueryExchangeBalancesRequest): Promise<_187.QueryExchangeBalancesResponse>;
                        spotMarkets(request: _187.QuerySpotMarketsRequest): Promise<_187.QuerySpotMarketsResponse>;
                        spotMarket(request: _187.QuerySpotMarketRequest): Promise<_187.QuerySpotMarketResponse>;
                        spotOrderbook(request: _187.QuerySpotOrderbookRequest): Promise<_187.QuerySpotOrderbookResponse>;
                        traderSpotOrders(request: _187.QueryTraderSpotOrdersRequest): Promise<_187.QueryTraderSpotOrdersResponse>;
                        spotOrdersByHashes(request: _187.QuerySpotOrdersByHashesRequest): Promise<_187.QuerySpotOrdersByHashesResponse>;
                        subaccountOrders(request: _187.QuerySubaccountOrdersRequest): Promise<_187.QuerySubaccountOrdersResponse>;
                        traderSpotTransientOrders(request: _187.QueryTraderSpotOrdersRequest): Promise<_187.QueryTraderSpotOrdersResponse>;
                        spotMidPriceAndTOB(request: _187.QuerySpotMidPriceAndTOBRequest): Promise<_187.QuerySpotMidPriceAndTOBResponse>;
                        derivativeMidPriceAndTOB(request: _187.QueryDerivativeMidPriceAndTOBRequest): Promise<_187.QueryDerivativeMidPriceAndTOBResponse>;
                        derivativeOrderbook(request: _187.QueryDerivativeOrderbookRequest): Promise<_187.QueryDerivativeOrderbookResponse>;
                        traderDerivativeOrders(request: _187.QueryTraderDerivativeOrdersRequest): Promise<_187.QueryTraderDerivativeOrdersResponse>;
                        derivativeOrdersByHashes(request: _187.QueryDerivativeOrdersByHashesRequest): Promise<_187.QueryDerivativeOrdersByHashesResponse>;
                        traderDerivativeTransientOrders(request: _187.QueryTraderDerivativeOrdersRequest): Promise<_187.QueryTraderDerivativeOrdersResponse>;
                        derivativeMarkets(request: _187.QueryDerivativeMarketsRequest): Promise<_187.QueryDerivativeMarketsResponse>;
                        derivativeMarket(request: _187.QueryDerivativeMarketRequest): Promise<_187.QueryDerivativeMarketResponse>;
                        derivativeMarketAddress(request: _187.QueryDerivativeMarketAddressRequest): Promise<_187.QueryDerivativeMarketAddressResponse>;
                        subaccountTradeNonce(request: _187.QuerySubaccountTradeNonceRequest): Promise<_187.QuerySubaccountTradeNonceResponse>;
                        exchangeModuleState(request?: _187.QueryModuleStateRequest): Promise<_187.QueryModuleStateResponse>;
                        positions(request?: _187.QueryPositionsRequest): Promise<_187.QueryPositionsResponse>;
                        subaccountPositions(request: _187.QuerySubaccountPositionsRequest): Promise<_187.QuerySubaccountPositionsResponse>;
                        subaccountPositionInMarket(request: _187.QuerySubaccountPositionInMarketRequest): Promise<_187.QuerySubaccountPositionInMarketResponse>;
                        subaccountEffectivePositionInMarket(request: _187.QuerySubaccountEffectivePositionInMarketRequest): Promise<_187.QuerySubaccountEffectivePositionInMarketResponse>;
                        perpetualMarketInfo(request: _187.QueryPerpetualMarketInfoRequest): Promise<_187.QueryPerpetualMarketInfoResponse>;
                        expiryFuturesMarketInfo(request: _187.QueryExpiryFuturesMarketInfoRequest): Promise<_187.QueryExpiryFuturesMarketInfoResponse>;
                        perpetualMarketFunding(request: _187.QueryPerpetualMarketFundingRequest): Promise<_187.QueryPerpetualMarketFundingResponse>;
                        subaccountOrderMetadata(request: _187.QuerySubaccountOrderMetadataRequest): Promise<_187.QuerySubaccountOrderMetadataResponse>;
                        tradeRewardPoints(request: _187.QueryTradeRewardPointsRequest): Promise<_187.QueryTradeRewardPointsResponse>;
                        pendingTradeRewardPoints(request: _187.QueryTradeRewardPointsRequest): Promise<_187.QueryTradeRewardPointsResponse>;
                        tradeRewardCampaign(request?: _187.QueryTradeRewardCampaignRequest): Promise<_187.QueryTradeRewardCampaignResponse>;
                        feeDiscountAccountInfo(request: _187.QueryFeeDiscountAccountInfoRequest): Promise<_187.QueryFeeDiscountAccountInfoResponse>;
                        feeDiscountSchedule(request?: _187.QueryFeeDiscountScheduleRequest): Promise<_187.QueryFeeDiscountScheduleResponse>;
                        balanceMismatches(request: _187.QueryBalanceMismatchesRequest): Promise<_187.QueryBalanceMismatchesResponse>;
                        balanceWithBalanceHolds(request?: _187.QueryBalanceWithBalanceHoldsRequest): Promise<_187.QueryBalanceWithBalanceHoldsResponse>;
                        feeDiscountTierStatistics(request?: _187.QueryFeeDiscountTierStatisticsRequest): Promise<_187.QueryFeeDiscountTierStatisticsResponse>;
                        ninjaVaultInfos(request?: _187.NinjaVaultInfosRequest): Promise<_187.NinjaVaultInfosResponse>;
                        queryMarketIDFromVault(request: _187.QueryMarketIDFromVaultRequest): Promise<_187.QueryMarketIDFromVaultResponse>;
                        historicalTradeRecords(request: _187.QueryHistoricalTradeRecordsRequest): Promise<_187.QueryHistoricalTradeRecordsResponse>;
                        isOptedOutOfRewards(request: _187.QueryIsOptedOutOfRewardsRequest): Promise<_187.QueryIsOptedOutOfRewardsResponse>;
                        optedOutOfRewardsAccounts(request?: _187.QueryOptedOutOfRewardsAccountsRequest): Promise<_187.QueryOptedOutOfRewardsAccountsResponse>;
                        marketVolatility(request: _187.QueryMarketVolatilityRequest): Promise<_187.QueryMarketVolatilityResponse>;
                        binaryOptionsMarkets(request: _187.QueryBinaryMarketsRequest): Promise<_187.QueryBinaryMarketsResponse>;
                        traderDerivativeConditionalOrders(request: _187.QueryTraderDerivativeConditionalOrdersRequest): Promise<_187.QueryTraderDerivativeConditionalOrdersResponse>;
                    };
                };
                insurance: {
                    v1beta1: {
                        insuranceParams(request?: _191.QueryInsuranceParamsRequest): Promise<_191.QueryInsuranceParamsResponse>;
                        insuranceFund(request: _191.QueryInsuranceFundRequest): Promise<_191.QueryInsuranceFundResponse>;
                        insuranceFunds(request?: _191.QueryInsuranceFundsRequest): Promise<_191.QueryInsuranceFundsResponse>;
                        estimatedRedemptions(request: _191.QueryEstimatedRedemptionsRequest): Promise<_191.QueryEstimatedRedemptionsResponse>;
                        pendingRedemptions(request: _191.QueryPendingRedemptionsRequest): Promise<_191.QueryPendingRedemptionsResponse>;
                        insuranceModuleState(request?: _191.QueryModuleStateRequest): Promise<_191.QueryModuleStateResponse>;
                    };
                };
                ocr: {
                    v1beta1: {
                        params(request?: _195.QueryParamsRequest): Promise<_195.QueryParamsResponse>;
                        feedConfig(request: _195.QueryFeedConfigRequest): Promise<_195.QueryFeedConfigResponse>;
                        feedConfigInfo(request: _195.QueryFeedConfigInfoRequest): Promise<_195.QueryFeedConfigInfoResponse>;
                        latestRound(request: _195.QueryLatestRoundRequest): Promise<_195.QueryLatestRoundResponse>;
                        latestTransmissionDetails(request: _195.QueryLatestTransmissionDetailsRequest): Promise<_195.QueryLatestTransmissionDetailsResponse>;
                        owedAmount(request: _195.QueryOwedAmountRequest): Promise<_195.QueryOwedAmountResponse>;
                        ocrModuleState(request?: _195.QueryModuleStateRequest): Promise<_195.QueryModuleStateResponse>;
                    };
                };
                oracle: {
                    v1beta1: {
                        params(request?: _201.QueryParamsRequest): Promise<_201.QueryParamsResponse>;
                        bandRelayers(request?: _201.QueryBandRelayersRequest): Promise<_201.QueryBandRelayersResponse>;
                        bandPriceStates(request?: _201.QueryBandPriceStatesRequest): Promise<_201.QueryBandPriceStatesResponse>;
                        bandIBCPriceStates(request?: _201.QueryBandIBCPriceStatesRequest): Promise<_201.QueryBandIBCPriceStatesResponse>;
                        priceFeedPriceStates(request?: _201.QueryPriceFeedPriceStatesRequest): Promise<_201.QueryPriceFeedPriceStatesResponse>;
                        coinbasePriceStates(request?: _201.QueryCoinbasePriceStatesRequest): Promise<_201.QueryCoinbasePriceStatesResponse>;
                        providerPriceState(request: _201.QueryProviderPriceStateRequest): Promise<_201.QueryProviderPriceStateResponse>;
                        oracleModuleState(request?: _201.QueryModuleStateRequest): Promise<_201.QueryModuleStateResponse>;
                        historicalPriceRecords(request: _201.QueryHistoricalPriceRecordsRequest): Promise<_201.QueryHistoricalPriceRecordsResponse>;
                        oracleVolatility(request: _201.QueryOracleVolatilityRequest): Promise<_201.QueryOracleVolatilityResponse>;
                        oracleProvidersInfo(request?: _201.QueryOracleProvidersInfoRequest): Promise<_201.QueryOracleProvidersInfoResponse>;
                        oracleProviderPrices(request: _201.QueryOracleProviderPricesRequest): Promise<_201.QueryOracleProviderPricesResponse>;
                    };
                };
                peggy: {
                    v1: {
                        params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
                        currentValset(request?: _211.QueryCurrentValsetRequest): Promise<_211.QueryCurrentValsetResponse>;
                        valsetRequest(request: _211.QueryValsetRequestRequest): Promise<_211.QueryValsetRequestResponse>;
                        valsetConfirm(request: _211.QueryValsetConfirmRequest): Promise<_211.QueryValsetConfirmResponse>;
                        valsetConfirmsByNonce(request: _211.QueryValsetConfirmsByNonceRequest): Promise<_211.QueryValsetConfirmsByNonceResponse>;
                        lastValsetRequests(request?: _211.QueryLastValsetRequestsRequest): Promise<_211.QueryLastValsetRequestsResponse>;
                        lastPendingValsetRequestByAddr(request: _211.QueryLastPendingValsetRequestByAddrRequest): Promise<_211.QueryLastPendingValsetRequestByAddrResponse>;
                        lastEventByAddr(request: _211.QueryLastEventByAddrRequest): Promise<_211.QueryLastEventByAddrResponse>;
                        getPendingSendToEth(request: _211.QueryPendingSendToEth): Promise<_211.QueryPendingSendToEthResponse>;
                        batchFees(request?: _211.QueryBatchFeeRequest): Promise<_211.QueryBatchFeeResponse>;
                        outgoingTxBatches(request?: _211.QueryOutgoingTxBatchesRequest): Promise<_211.QueryOutgoingTxBatchesResponse>;
                        lastPendingBatchRequestByAddr(request: _211.QueryLastPendingBatchRequestByAddrRequest): Promise<_211.QueryLastPendingBatchRequestByAddrResponse>;
                        batchRequestByNonce(request: _211.QueryBatchRequestByNonceRequest): Promise<_211.QueryBatchRequestByNonceResponse>;
                        batchConfirms(request: _211.QueryBatchConfirmsRequest): Promise<_211.QueryBatchConfirmsResponse>;
                        eRC20ToDenom(request: _211.QueryERC20ToDenomRequest): Promise<_211.QueryERC20ToDenomResponse>;
                        denomToERC20(request: _211.QueryDenomToERC20Request): Promise<_211.QueryDenomToERC20Response>;
                        getDelegateKeyByValidator(request: _211.QueryDelegateKeysByValidatorAddress): Promise<_211.QueryDelegateKeysByValidatorAddressResponse>;
                        getDelegateKeyByEth(request: _211.QueryDelegateKeysByEthAddress): Promise<_211.QueryDelegateKeysByEthAddressResponse>;
                        getDelegateKeyByOrchestrator(request: _211.QueryDelegateKeysByOrchestratorAddress): Promise<_211.QueryDelegateKeysByOrchestratorAddressResponse>;
                        peggyModuleState(request?: _211.QueryModuleStateRequest): Promise<_211.QueryModuleStateResponse>;
                    };
                };
                wasmx: {
                    v1: {
                        wasmxParams(request?: _217.QueryWasmxParamsRequest): Promise<_217.QueryWasmxParamsResponse>;
                        wasmxModuleState(request?: _217.QueryModuleStateRequest): Promise<_217.QueryModuleStateResponse>;
                    };
                };
            };
        }>;
    };
}
