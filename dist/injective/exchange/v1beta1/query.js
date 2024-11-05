"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySubaccountTradeNonceRequest = exports.QueryDerivativeMarketAddressResponse = exports.QueryDerivativeMarketAddressRequest = exports.QueryDerivativeMarketResponse = exports.QueryDerivativeMarketRequest = exports.QueryDerivativeMarketsResponse = exports.FullDerivativeMarket = exports.PerpetualMarketState = exports.PriceLevel = exports.QueryDerivativeMarketsRequest = exports.QueryDerivativeOrdersByHashesResponse = exports.QueryDerivativeOrdersByHashesRequest = exports.QueryTraderDerivativeOrdersResponse = exports.TrimmedDerivativeLimitOrder = exports.QueryTraderDerivativeOrdersRequest = exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest = exports.QueryTraderSpotOrdersToCancelUpToAmountRequest = exports.QueryDerivativeOrderbookResponse = exports.QueryDerivativeOrderbookRequest = exports.QueryDerivativeMidPriceAndTOBResponse = exports.QueryDerivativeMidPriceAndTOBRequest = exports.QuerySpotMidPriceAndTOBResponse = exports.QuerySpotMidPriceAndTOBRequest = exports.QueryTraderSpotOrdersResponse = exports.TrimmedSpotLimitOrder = exports.QueryTraderSpotOrdersRequest = exports.QuerySpotOrdersByHashesResponse = exports.QuerySpotOrdersByHashesRequest = exports.QuerySpotOrderbookResponse = exports.QuerySpotOrderbookRequest = exports.QuerySpotMarketResponse = exports.QuerySpotMarketRequest = exports.QuerySpotMarketsResponse = exports.QuerySpotMarketsRequest = exports.QuerySubaccountDepositResponse = exports.QuerySubaccountDepositRequest = exports.QueryExchangeBalancesResponse = exports.QueryExchangeBalancesRequest = exports.QuerySubaccountDepositsResponse = exports.QuerySubaccountDepositsResponse_DepositsEntry = exports.QuerySubaccountDepositsRequest = exports.QueryExchangeParamsResponse = exports.QueryExchangeParamsRequest = exports.SubaccountOrderbookMetadataWithMarket = exports.QuerySubaccountOrdersResponse = exports.QuerySubaccountOrdersRequest = exports.Subaccount = exports.CancellationStrategyAmino = exports.CancellationStrategySDKType = exports.CancellationStrategy = void 0;
exports.QueryMarketVolatilityResponse = exports.QueryMarketVolatilityRequest = exports.TradeHistoryOptions = exports.QueryHistoricalTradeRecordsResponse = exports.QueryHistoricalTradeRecordsRequest = exports.QueryMarketIDFromVaultResponse = exports.QueryMarketIDFromVaultRequest = exports.NinjaVaultInfosResponse = exports.NinjaVaultInfosRequest = exports.QueryFeeDiscountTierStatisticsResponse = exports.TierStatistic = exports.QueryFeeDiscountTierStatisticsRequest = exports.QueryBalanceWithBalanceHoldsResponse = exports.BalanceWithMarginHold = exports.QueryBalanceWithBalanceHoldsRequest = exports.QueryBalanceMismatchesResponse = exports.BalanceMismatch = exports.QueryBalanceMismatchesRequest = exports.QueryFeeDiscountScheduleResponse = exports.QueryFeeDiscountScheduleRequest = exports.QueryFeeDiscountAccountInfoResponse = exports.QueryFeeDiscountAccountInfoRequest = exports.QueryOptedOutOfRewardsAccountsResponse = exports.QueryOptedOutOfRewardsAccountsRequest = exports.QueryIsOptedOutOfRewardsResponse = exports.QueryIsOptedOutOfRewardsRequest = exports.QueryTradeRewardCampaignResponse = exports.QueryTradeRewardCampaignRequest = exports.QueryTradeRewardPointsResponse = exports.QueryTradeRewardPointsRequest = exports.QueryPositionsResponse = exports.QueryPositionsRequest = exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QuerySubaccountTradeNonceResponse = exports.QuerySubaccountOrderMetadataResponse = exports.QueryPerpetualMarketFundingResponse = exports.QueryPerpetualMarketFundingRequest = exports.QueryExpiryFuturesMarketInfoResponse = exports.QueryExpiryFuturesMarketInfoRequest = exports.QueryPerpetualMarketInfoResponse = exports.QueryPerpetualMarketInfoRequest = exports.QuerySubaccountEffectivePositionInMarketResponse = exports.EffectivePosition = exports.QuerySubaccountPositionInMarketResponse = exports.QuerySubaccountPositionsResponse = exports.QuerySubaccountOrderMetadataRequest = exports.QuerySubaccountEffectivePositionInMarketRequest = exports.QuerySubaccountPositionInMarketRequest = exports.QuerySubaccountPositionsRequest = void 0;
exports.QueryTraderDerivativeConditionalOrdersResponse = exports.TrimmedDerivativeConditionalOrder = exports.QueryTraderDerivativeConditionalOrdersRequest = exports.QueryBinaryMarketsResponse = exports.QueryBinaryMarketsRequest = void 0;
exports.cancellationStrategyFromJSON = cancellationStrategyFromJSON;
exports.cancellationStrategyToJSON = cancellationStrategyToJSON;
//@ts-nocheck
const exchange_1 = require("./exchange");
const genesis_1 = require("./genesis");
const oracle_1 = require("../../oracle/v1beta1/oracle");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
/** CancellationStrategy is the list of cancellation strategies. */
var CancellationStrategy;
(function (CancellationStrategy) {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    CancellationStrategy[CancellationStrategy["UnspecifiedOrder"] = 0] = "UnspecifiedOrder";
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    CancellationStrategy[CancellationStrategy["FromWorstToBest"] = 1] = "FromWorstToBest";
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    CancellationStrategy[CancellationStrategy["FromBestToWorst"] = 2] = "FromBestToWorst";
    CancellationStrategy[CancellationStrategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CancellationStrategy || (exports.CancellationStrategy = CancellationStrategy = {}));
exports.CancellationStrategySDKType = CancellationStrategy;
exports.CancellationStrategyAmino = CancellationStrategy;
function cancellationStrategyFromJSON(object) {
    switch (object) {
        case 0:
        case "UnspecifiedOrder":
            return CancellationStrategy.UnspecifiedOrder;
        case 1:
        case "FromWorstToBest":
            return CancellationStrategy.FromWorstToBest;
        case 2:
        case "FromBestToWorst":
            return CancellationStrategy.FromBestToWorst;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CancellationStrategy.UNRECOGNIZED;
    }
}
function cancellationStrategyToJSON(object) {
    switch (object) {
        case CancellationStrategy.UnspecifiedOrder:
            return "UnspecifiedOrder";
        case CancellationStrategy.FromWorstToBest:
            return "FromWorstToBest";
        case CancellationStrategy.FromBestToWorst:
            return "FromBestToWorst";
        case CancellationStrategy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseSubaccount() {
    return {
        trader: "",
        subaccountNonce: 0
    };
}
exports.Subaccount = {
    typeUrl: "/injective.exchange.v1beta1.Subaccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.trader !== "") {
            writer.uint32(10).string(message.trader);
        }
        if (message.subaccountNonce !== 0) {
            writer.uint32(16).uint32(message.subaccountNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trader = reader.string();
                    break;
                case 2:
                    message.subaccountNonce = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccount();
        message.trader = object.trader ?? "";
        message.subaccountNonce = object.subaccountNonce ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccount();
        if (object.trader !== undefined && object.trader !== null) {
            message.trader = object.trader;
        }
        if (object.subaccount_nonce !== undefined && object.subaccount_nonce !== null) {
            message.subaccountNonce = object.subaccount_nonce;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.trader = message.trader === "" ? undefined : message.trader;
        obj.subaccount_nonce = message.subaccountNonce === 0 ? undefined : message.subaccountNonce;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Subaccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Subaccount.decode(message.value);
    },
    toProto(message) {
        return exports.Subaccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.Subaccount",
            value: exports.Subaccount.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrdersRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
exports.QuerySubaccountOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountOrdersRequest();
        message.subaccountId = object.subaccountId ?? "";
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountOrdersRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
            value: exports.QuerySubaccountOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrdersResponse() {
    return {
        buyOrders: [],
        sellOrders: []
    };
}
exports.QuerySubaccountOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.buyOrders) {
            exchange_1.SubaccountOrderData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            exchange_1.SubaccountOrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyOrders.push(exchange_1.SubaccountOrderData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sellOrders.push(exchange_1.SubaccountOrderData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountOrdersResponse();
        message.buyOrders = object.buyOrders?.map(e => exchange_1.SubaccountOrderData.fromPartial(e)) || [];
        message.sellOrders = object.sellOrders?.map(e => exchange_1.SubaccountOrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountOrdersResponse();
        message.buyOrders = object.buy_orders?.map(e => exchange_1.SubaccountOrderData.fromAmino(e)) || [];
        message.sellOrders = object.sell_orders?.map(e => exchange_1.SubaccountOrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.buyOrders) {
            obj.buy_orders = message.buyOrders.map(e => e ? exchange_1.SubaccountOrderData.toAmino(e) : undefined);
        }
        else {
            obj.buy_orders = message.buyOrders;
        }
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? exchange_1.SubaccountOrderData.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
            value: exports.QuerySubaccountOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseSubaccountOrderbookMetadataWithMarket() {
    return {
        metadata: undefined,
        marketId: "",
        isBuy: false
    };
}
exports.SubaccountOrderbookMetadataWithMarket = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.metadata !== undefined) {
            exchange_1.SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.isBuy === true) {
            writer.uint32(24).bool(message.isBuy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = exchange_1.SubaccountOrderbookMetadata.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.isBuy = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? exchange_1.SubaccountOrderbookMetadata.fromPartial(object.metadata) : undefined;
        message.marketId = object.marketId ?? "";
        message.isBuy = object.isBuy ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = exchange_1.SubaccountOrderbookMetadata.fromAmino(object.metadata);
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.isBuy !== undefined && object.isBuy !== null) {
            message.isBuy = object.isBuy;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.metadata = message.metadata ? exchange_1.SubaccountOrderbookMetadata.toAmino(message.metadata) : undefined;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SubaccountOrderbookMetadataWithMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SubaccountOrderbookMetadataWithMarket.decode(message.value);
    },
    toProto(message) {
        return exports.SubaccountOrderbookMetadataWithMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
            value: exports.SubaccountOrderbookMetadataWithMarket.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeParamsRequest() {
    return {};
}
exports.QueryExchangeParamsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryExchangeParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryExchangeParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExchangeParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
            value: exports.QueryExchangeParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeParamsResponse() {
    return {
        params: exchange_1.Params.fromPartial({})
    };
}
exports.QueryExchangeParamsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            exchange_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exchange_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? exchange_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = exchange_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? exchange_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExchangeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
            value: exports.QueryExchangeParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositsRequest() {
    return {
        subaccountId: "",
        subaccount: undefined
    };
}
exports.QuerySubaccountDepositsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.subaccount !== undefined) {
            exports.Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.subaccount = exports.Subaccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountDepositsRequest();
        message.subaccountId = object.subaccountId ?? "";
        message.subaccount = object.subaccount !== undefined && object.subaccount !== null ? exports.Subaccount.fromPartial(object.subaccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositsRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.subaccount !== undefined && object.subaccount !== null) {
            message.subaccount = exports.Subaccount.fromAmino(object.subaccount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.subaccount = message.subaccount ? exports.Subaccount.toAmino(message.subaccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
            value: exports.QuerySubaccountDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry() {
    return {
        key: "",
        value: undefined
    };
}
exports.QuerySubaccountDepositsResponse_DepositsEntry = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exchange_1.Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exchange_1.Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        message.key = object.key ?? "";
        message.value = object.value !== undefined && object.value !== null ? exchange_1.Deposit.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exchange_1.Deposit.fromAmino(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value ? exchange_1.Deposit.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountDepositsResponse_DepositsEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountDepositsResponse_DepositsEntry.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountDepositsResponse_DepositsEntry.encode(message).finish();
    }
};
function createBaseQuerySubaccountDepositsResponse() {
    return {
        deposits: {}
    };
}
exports.QuerySubaccountDepositsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        Object.entries(message.deposits).forEach(([key, value]) => {
            exports.QuerySubaccountDepositsResponse_DepositsEntry.encode({
                key: key,
                value
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.QuerySubaccountDepositsResponse_DepositsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.deposits[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountDepositsResponse();
        message.deposits = Object.entries(object.deposits ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exchange_1.Deposit.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositsResponse();
        message.deposits = Object.entries(object.deposits ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exchange_1.Deposit.fromAmino(value);
            }
            return acc;
        }, {});
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposits = {};
        if (message.deposits) {
            Object.entries(message.deposits).forEach(([k, v]) => {
                obj.deposits[k] = exchange_1.Deposit.toAmino(v);
            });
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountDepositsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
            value: exports.QuerySubaccountDepositsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeBalancesRequest() {
    return {};
}
exports.QueryExchangeBalancesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryExchangeBalancesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryExchangeBalancesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExchangeBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
            value: exports.QueryExchangeBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeBalancesResponse() {
    return {
        balances: []
    };
}
exports.QueryExchangeBalancesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balances) {
            genesis_1.Balance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(genesis_1.Balance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeBalancesResponse();
        message.balances = object.balances?.map(e => genesis_1.Balance.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeBalancesResponse();
        message.balances = object.balances?.map(e => genesis_1.Balance.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? genesis_1.Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExchangeBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
            value: exports.QueryExchangeBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositRequest() {
    return {
        subaccountId: "",
        denom: ""
    };
}
exports.QuerySubaccountDepositRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountDepositRequest();
        message.subaccountId = object.subaccountId ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountDepositRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountDepositRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
            value: exports.QuerySubaccountDepositRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositResponse() {
    return {
        deposits: undefined
    };
}
exports.QuerySubaccountDepositResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deposits !== undefined) {
            exchange_1.Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits = exchange_1.Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountDepositResponse();
        message.deposits = object.deposits !== undefined && object.deposits !== null ? exchange_1.Deposit.fromPartial(object.deposits) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositResponse();
        if (object.deposits !== undefined && object.deposits !== null) {
            message.deposits = exchange_1.Deposit.fromAmino(object.deposits);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposits = message.deposits ? exchange_1.Deposit.toAmino(message.deposits) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
            value: exports.QuerySubaccountDepositResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketsRequest() {
    return {
        status: ""
    };
}
exports.QuerySpotMarketsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMarketsRequest();
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMarketsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status === "" ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotMarketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotMarketsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotMarketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
            value: exports.QuerySpotMarketsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketsResponse() {
    return {
        markets: []
    };
}
exports.QuerySpotMarketsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.markets) {
            exchange_1.SpotMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(exchange_1.SpotMarket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMarketsResponse();
        message.markets = object.markets?.map(e => exchange_1.SpotMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMarketsResponse();
        message.markets = object.markets?.map(e => exchange_1.SpotMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? exchange_1.SpotMarket.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotMarketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotMarketsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotMarketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
            value: exports.QuerySpotMarketsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketRequest() {
    return {
        marketId: ""
    };
}
exports.QuerySpotMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMarketRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMarketRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotMarketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
            value: exports.QuerySpotMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketResponse() {
    return {
        market: undefined
    };
}
exports.QuerySpotMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            exchange_1.SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exchange_1.SpotMarket.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMarketResponse();
        message.market = object.market !== undefined && object.market !== null ? exchange_1.SpotMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMarketResponse();
        if (object.market !== undefined && object.market !== null) {
            message.market = exchange_1.SpotMarket.fromAmino(object.market);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? exchange_1.SpotMarket.toAmino(message.market) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
            value: exports.QuerySpotMarketResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotOrderbookRequest() {
    return {
        marketId: "",
        limit: BigInt(0)
    };
}
exports.QuerySpotOrderbookRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(16).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrderbookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.limit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotOrderbookRequest();
        message.marketId = object.marketId ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotOrderbookRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.limit = message.limit !== BigInt(0) ? (message.limit?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotOrderbookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotOrderbookRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotOrderbookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
            value: exports.QuerySpotOrderbookRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotOrderbookResponse() {
    return {
        buysPriceLevel: [],
        sellsPriceLevel: []
    };
}
exports.QuerySpotOrderbookResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.buysPriceLevel) {
            exports.PriceLevel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            exports.PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buysPriceLevel.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sellsPriceLevel.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotOrderbookResponse();
        message.buysPriceLevel = object.buysPriceLevel?.map(e => exports.PriceLevel.fromPartial(e)) || [];
        message.sellsPriceLevel = object.sellsPriceLevel?.map(e => exports.PriceLevel.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotOrderbookResponse();
        message.buysPriceLevel = object.buys_price_level?.map(e => exports.PriceLevel.fromAmino(e)) || [];
        message.sellsPriceLevel = object.sells_price_level?.map(e => exports.PriceLevel.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buys_price_level = message.buysPriceLevel.map(e => e ? exports.PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.buys_price_level = message.buysPriceLevel;
        }
        if (message.sellsPriceLevel) {
            obj.sells_price_level = message.sellsPriceLevel.map(e => e ? exports.PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.sells_price_level = message.sellsPriceLevel;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotOrderbookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotOrderbookResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotOrderbookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
            value: exports.QuerySpotOrderbookResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotOrdersByHashesRequest() {
    return {
        marketId: "",
        subaccountId: "",
        orderHashes: []
    };
}
exports.QuerySpotOrdersByHashesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        for (const v of message.orderHashes) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrdersByHashesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.orderHashes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotOrdersByHashesRequest();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.orderHashes = object.orderHashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotOrdersByHashesRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.orderHashes = object.order_hashes?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.orderHashes) {
            obj.order_hashes = message.orderHashes.map(e => e);
        }
        else {
            obj.order_hashes = message.orderHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotOrdersByHashesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotOrdersByHashesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotOrdersByHashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
            value: exports.QuerySpotOrdersByHashesRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotOrdersByHashesResponse() {
    return {
        orders: []
    };
}
exports.QuerySpotOrdersByHashesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orders) {
            exports.TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotOrdersByHashesResponse();
        message.orders = object.orders?.map(e => exports.TrimmedSpotLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotOrdersByHashesResponse();
        message.orders = object.orders?.map(e => exports.TrimmedSpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exports.TrimmedSpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotOrdersByHashesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotOrdersByHashesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotOrdersByHashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
            value: exports.QuerySpotOrdersByHashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTraderSpotOrdersRequest() {
    return {
        marketId: "",
        subaccountId: ""
    };
}
exports.QueryTraderSpotOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderSpotOrdersRequest();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderSpotOrdersRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderSpotOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderSpotOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderSpotOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
            value: exports.QueryTraderSpotOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseTrimmedSpotLimitOrder() {
    return {
        price: "",
        quantity: "",
        fillable: "",
        isBuy: false,
        orderHash: ""
    };
}
exports.TrimmedSpotLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.fillable !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.fillable, 18).atomics);
        }
        if (message.isBuy === true) {
            writer.uint32(32).bool(message.isBuy);
        }
        if (message.orderHash !== "") {
            writer.uint32(42).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.fillable = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.isBuy = reader.bool();
                    break;
                case 5:
                    message.orderHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTrimmedSpotLimitOrder();
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        message.fillable = object.fillable ?? "";
        message.isBuy = object.isBuy ?? false;
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrimmedSpotLimitOrder();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.fillable !== undefined && object.fillable !== null) {
            message.fillable = object.fillable;
        }
        if (object.isBuy !== undefined && object.isBuy !== null) {
            message.isBuy = object.isBuy;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price === "" ? undefined : message.price;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.fillable = message.fillable === "" ? undefined : message.fillable;
        obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TrimmedSpotLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TrimmedSpotLimitOrder.decode(message.value);
    },
    toProto(message) {
        return exports.TrimmedSpotLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
            value: exports.TrimmedSpotLimitOrder.encode(message).finish()
        };
    }
};
function createBaseQueryTraderSpotOrdersResponse() {
    return {
        orders: []
    };
}
exports.QueryTraderSpotOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orders) {
            exports.TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderSpotOrdersResponse();
        message.orders = object.orders?.map(e => exports.TrimmedSpotLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderSpotOrdersResponse();
        message.orders = object.orders?.map(e => exports.TrimmedSpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exports.TrimmedSpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderSpotOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderSpotOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderSpotOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
            value: exports.QueryTraderSpotOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMidPriceAndTOBRequest() {
    return {
        marketId: ""
    };
}
exports.QuerySpotMidPriceAndTOBRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMidPriceAndTOBRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMidPriceAndTOBRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMidPriceAndTOBRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotMidPriceAndTOBRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotMidPriceAndTOBRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotMidPriceAndTOBRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
            value: exports.QuerySpotMidPriceAndTOBRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMidPriceAndTOBResponse() {
    return {
        midPrice: undefined,
        bestBuyPrice: undefined,
        bestSellPrice: undefined
    };
}
exports.QuerySpotMidPriceAndTOBResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.midPrice !== undefined) {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.midPrice, 18).atomics);
        }
        if (message.bestBuyPrice !== undefined) {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
        }
        if (message.bestSellPrice !== undefined) {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMidPriceAndTOBResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.midPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.bestBuyPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.bestSellPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotMidPriceAndTOBResponse();
        message.midPrice = object.midPrice ?? undefined;
        message.bestBuyPrice = object.bestBuyPrice ?? undefined;
        message.bestSellPrice = object.bestSellPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMidPriceAndTOBResponse();
        if (object.mid_price !== undefined && object.mid_price !== null) {
            message.midPrice = object.mid_price;
        }
        if (object.best_buy_price !== undefined && object.best_buy_price !== null) {
            message.bestBuyPrice = object.best_buy_price;
        }
        if (object.best_sell_price !== undefined && object.best_sell_price !== null) {
            message.bestSellPrice = object.best_sell_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mid_price = message.midPrice === null ? undefined : message.midPrice;
        obj.best_buy_price = message.bestBuyPrice === null ? undefined : message.bestBuyPrice;
        obj.best_sell_price = message.bestSellPrice === null ? undefined : message.bestSellPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotMidPriceAndTOBResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySpotMidPriceAndTOBResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotMidPriceAndTOBResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
            value: exports.QuerySpotMidPriceAndTOBResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMidPriceAndTOBRequest() {
    return {
        marketId: ""
    };
}
exports.QueryDerivativeMidPriceAndTOBRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMidPriceAndTOBRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMidPriceAndTOBRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMidPriceAndTOBRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
            value: exports.QueryDerivativeMidPriceAndTOBRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMidPriceAndTOBResponse() {
    return {
        midPrice: undefined,
        bestBuyPrice: undefined,
        bestSellPrice: undefined
    };
}
exports.QueryDerivativeMidPriceAndTOBResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.midPrice !== undefined) {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.midPrice, 18).atomics);
        }
        if (message.bestBuyPrice !== undefined) {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
        }
        if (message.bestSellPrice !== undefined) {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.midPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.bestBuyPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.bestSellPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
        message.midPrice = object.midPrice ?? undefined;
        message.bestBuyPrice = object.bestBuyPrice ?? undefined;
        message.bestSellPrice = object.bestSellPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
        if (object.mid_price !== undefined && object.mid_price !== null) {
            message.midPrice = object.mid_price;
        }
        if (object.best_buy_price !== undefined && object.best_buy_price !== null) {
            message.bestBuyPrice = object.best_buy_price;
        }
        if (object.best_sell_price !== undefined && object.best_sell_price !== null) {
            message.bestSellPrice = object.best_sell_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mid_price = message.midPrice === null ? undefined : message.midPrice;
        obj.best_buy_price = message.bestBuyPrice === null ? undefined : message.bestBuyPrice;
        obj.best_sell_price = message.bestSellPrice === null ? undefined : message.bestSellPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMidPriceAndTOBResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMidPriceAndTOBResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMidPriceAndTOBResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
            value: exports.QueryDerivativeMidPriceAndTOBResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeOrderbookRequest() {
    return {
        marketId: "",
        limit: BigInt(0)
    };
}
exports.QueryDerivativeOrderbookRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(16).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrderbookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.limit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeOrderbookRequest();
        message.marketId = object.marketId ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeOrderbookRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.limit = message.limit !== BigInt(0) ? (message.limit?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeOrderbookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeOrderbookRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeOrderbookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
            value: exports.QueryDerivativeOrderbookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeOrderbookResponse() {
    return {
        buysPriceLevel: [],
        sellsPriceLevel: []
    };
}
exports.QueryDerivativeOrderbookResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.buysPriceLevel) {
            exports.PriceLevel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            exports.PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buysPriceLevel.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sellsPriceLevel.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeOrderbookResponse();
        message.buysPriceLevel = object.buysPriceLevel?.map(e => exports.PriceLevel.fromPartial(e)) || [];
        message.sellsPriceLevel = object.sellsPriceLevel?.map(e => exports.PriceLevel.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeOrderbookResponse();
        message.buysPriceLevel = object.buys_price_level?.map(e => exports.PriceLevel.fromAmino(e)) || [];
        message.sellsPriceLevel = object.sells_price_level?.map(e => exports.PriceLevel.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buys_price_level = message.buysPriceLevel.map(e => e ? exports.PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.buys_price_level = message.buysPriceLevel;
        }
        if (message.sellsPriceLevel) {
            obj.sells_price_level = message.sellsPriceLevel.map(e => e ? exports.PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.sells_price_level = message.sellsPriceLevel;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeOrderbookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeOrderbookResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeOrderbookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
            value: exports.QueryDerivativeOrderbookResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest() {
    return {
        marketId: "",
        subaccountId: "",
        baseAmount: "",
        quoteAmount: "",
        strategy: 0,
        referencePrice: undefined
    };
}
exports.QueryTraderSpotOrdersToCancelUpToAmountRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.baseAmount !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.baseAmount, 18).atomics);
        }
        if (message.quoteAmount !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.quoteAmount, 18).atomics);
        }
        if (message.strategy !== 0) {
            writer.uint32(40).int32(message.strategy);
        }
        if (message.referencePrice !== undefined) {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.referencePrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.baseAmount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.quoteAmount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.strategy = reader.int32();
                    break;
                case 6:
                    message.referencePrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.baseAmount = object.baseAmount ?? "";
        message.quoteAmount = object.quoteAmount ?? "";
        message.strategy = object.strategy ?? 0;
        message.referencePrice = object.referencePrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.base_amount !== undefined && object.base_amount !== null) {
            message.baseAmount = object.base_amount;
        }
        if (object.quote_amount !== undefined && object.quote_amount !== null) {
            message.quoteAmount = object.quote_amount;
        }
        if (object.strategy !== undefined && object.strategy !== null) {
            message.strategy = object.strategy;
        }
        if (object.reference_price !== undefined && object.reference_price !== null) {
            message.referencePrice = object.reference_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.base_amount = message.baseAmount === "" ? undefined : message.baseAmount;
        obj.quote_amount = message.quoteAmount === "" ? undefined : message.quoteAmount;
        obj.strategy = message.strategy === 0 ? undefined : message.strategy;
        obj.reference_price = message.referencePrice === null ? undefined : message.referencePrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderSpotOrdersToCancelUpToAmountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderSpotOrdersToCancelUpToAmountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
            value: exports.QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest() {
    return {
        marketId: "",
        subaccountId: "",
        quoteAmount: "",
        strategy: 0,
        referencePrice: undefined
    };
}
exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.quoteAmount !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.quoteAmount, 18).atomics);
        }
        if (message.strategy !== 0) {
            writer.uint32(32).int32(message.strategy);
        }
        if (message.referencePrice !== undefined) {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.referencePrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.quoteAmount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.strategy = reader.int32();
                    break;
                case 5:
                    message.referencePrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.quoteAmount = object.quoteAmount ?? "";
        message.strategy = object.strategy ?? 0;
        message.referencePrice = object.referencePrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.quote_amount !== undefined && object.quote_amount !== null) {
            message.quoteAmount = object.quote_amount;
        }
        if (object.strategy !== undefined && object.strategy !== null) {
            message.strategy = object.strategy;
        }
        if (object.reference_price !== undefined && object.reference_price !== null) {
            message.referencePrice = object.reference_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.quote_amount = message.quoteAmount === "" ? undefined : message.quoteAmount;
        obj.strategy = message.strategy === 0 ? undefined : message.strategy;
        obj.reference_price = message.referencePrice === null ? undefined : message.referencePrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
            value: exports.QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeOrdersRequest() {
    return {
        marketId: "",
        subaccountId: ""
    };
}
exports.QueryTraderDerivativeOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderDerivativeOrdersRequest();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderDerivativeOrdersRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderDerivativeOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderDerivativeOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderDerivativeOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
            value: exports.QueryTraderDerivativeOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseTrimmedDerivativeLimitOrder() {
    return {
        price: "",
        quantity: "",
        margin: "",
        fillable: "",
        isBuy: false,
        orderHash: ""
    };
}
exports.TrimmedDerivativeLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.fillable !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.fillable, 18).atomics);
        }
        if (message.isBuy === true) {
            writer.uint32(40).bool(message.isBuy);
        }
        if (message.orderHash !== "") {
            writer.uint32(50).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.margin = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.fillable = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.isBuy = reader.bool();
                    break;
                case 6:
                    message.orderHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTrimmedDerivativeLimitOrder();
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        message.margin = object.margin ?? "";
        message.fillable = object.fillable ?? "";
        message.isBuy = object.isBuy ?? false;
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrimmedDerivativeLimitOrder();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.margin !== undefined && object.margin !== null) {
            message.margin = object.margin;
        }
        if (object.fillable !== undefined && object.fillable !== null) {
            message.fillable = object.fillable;
        }
        if (object.isBuy !== undefined && object.isBuy !== null) {
            message.isBuy = object.isBuy;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price === "" ? undefined : message.price;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.margin = message.margin === "" ? undefined : message.margin;
        obj.fillable = message.fillable === "" ? undefined : message.fillable;
        obj.isBuy = message.isBuy ?? false;
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TrimmedDerivativeLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TrimmedDerivativeLimitOrder.decode(message.value);
    },
    toProto(message) {
        return exports.TrimmedDerivativeLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
            value: exports.TrimmedDerivativeLimitOrder.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeOrdersResponse() {
    return {
        orders: []
    };
}
exports.QueryTraderDerivativeOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orders) {
            exports.TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        message.orders = object.orders?.map(e => exports.TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        message.orders = object.orders?.map(e => exports.TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exports.TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderDerivativeOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderDerivativeOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderDerivativeOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
            value: exports.QueryTraderDerivativeOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeOrdersByHashesRequest() {
    return {
        marketId: "",
        subaccountId: "",
        orderHashes: []
    };
}
exports.QueryDerivativeOrdersByHashesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        for (const v of message.orderHashes) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrdersByHashesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.orderHashes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeOrdersByHashesRequest();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.orderHashes = object.orderHashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeOrdersByHashesRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.orderHashes = object.order_hashes?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.orderHashes) {
            obj.order_hashes = message.orderHashes.map(e => e);
        }
        else {
            obj.order_hashes = message.orderHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeOrdersByHashesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeOrdersByHashesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeOrdersByHashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
            value: exports.QueryDerivativeOrdersByHashesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeOrdersByHashesResponse() {
    return {
        orders: []
    };
}
exports.QueryDerivativeOrdersByHashesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orders) {
            exports.TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        message.orders = object.orders?.map(e => exports.TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        message.orders = object.orders?.map(e => exports.TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exports.TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeOrdersByHashesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeOrdersByHashesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeOrdersByHashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
            value: exports.QueryDerivativeOrdersByHashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketsRequest() {
    return {
        status: ""
    };
}
exports.QueryDerivativeMarketsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketsRequest();
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status === "" ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMarketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMarketsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMarketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
            value: exports.QueryDerivativeMarketsRequest.encode(message).finish()
        };
    }
};
function createBasePriceLevel() {
    return {
        price: "",
        quantity: ""
    };
}
exports.PriceLevel = {
    typeUrl: "/injective.exchange.v1beta1.PriceLevel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceLevel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePriceLevel();
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceLevel();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price === "" ? undefined : message.price;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PriceLevel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PriceLevel.decode(message.value);
    },
    toProto(message) {
        return exports.PriceLevel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PriceLevel",
            value: exports.PriceLevel.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketState() {
    return {
        marketInfo: undefined,
        fundingInfo: undefined
    };
}
exports.PerpetualMarketState = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketInfo !== undefined) {
            exchange_1.PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.fundingInfo !== undefined) {
            exchange_1.PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketInfo = exchange_1.PerpetualMarketInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fundingInfo = exchange_1.PerpetualMarketFunding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketState();
        message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? exchange_1.PerpetualMarketInfo.fromPartial(object.marketInfo) : undefined;
        message.fundingInfo = object.fundingInfo !== undefined && object.fundingInfo !== null ? exchange_1.PerpetualMarketFunding.fromPartial(object.fundingInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePerpetualMarketState();
        if (object.market_info !== undefined && object.market_info !== null) {
            message.marketInfo = exchange_1.PerpetualMarketInfo.fromAmino(object.market_info);
        }
        if (object.funding_info !== undefined && object.funding_info !== null) {
            message.fundingInfo = exchange_1.PerpetualMarketFunding.fromAmino(object.funding_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_info = message.marketInfo ? exchange_1.PerpetualMarketInfo.toAmino(message.marketInfo) : undefined;
        obj.funding_info = message.fundingInfo ? exchange_1.PerpetualMarketFunding.toAmino(message.fundingInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PerpetualMarketState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PerpetualMarketState.decode(message.value);
    },
    toProto(message) {
        return exports.PerpetualMarketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
            value: exports.PerpetualMarketState.encode(message).finish()
        };
    }
};
function createBaseFullDerivativeMarket() {
    return {
        market: undefined,
        perpetualInfo: undefined,
        futuresInfo: undefined,
        markPrice: ""
    };
}
exports.FullDerivativeMarket = {
    typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            exchange_1.DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualInfo !== undefined) {
            exports.PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.futuresInfo !== undefined) {
            exchange_1.ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.markPrice !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.markPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullDerivativeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exchange_1.DerivativeMarket.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.perpetualInfo = exports.PerpetualMarketState.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.futuresInfo = exchange_1.ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.markPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFullDerivativeMarket();
        message.market = object.market !== undefined && object.market !== null ? exchange_1.DerivativeMarket.fromPartial(object.market) : undefined;
        message.perpetualInfo = object.perpetualInfo !== undefined && object.perpetualInfo !== null ? exports.PerpetualMarketState.fromPartial(object.perpetualInfo) : undefined;
        message.futuresInfo = object.futuresInfo !== undefined && object.futuresInfo !== null ? exchange_1.ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo) : undefined;
        message.markPrice = object.markPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFullDerivativeMarket();
        if (object.market !== undefined && object.market !== null) {
            message.market = exchange_1.DerivativeMarket.fromAmino(object.market);
        }
        if (object.perpetual_info !== undefined && object.perpetual_info !== null) {
            message.perpetualInfo = exports.PerpetualMarketState.fromAmino(object.perpetual_info);
        }
        if (object.futures_info !== undefined && object.futures_info !== null) {
            message.futuresInfo = exchange_1.ExpiryFuturesMarketInfo.fromAmino(object.futures_info);
        }
        if (object.mark_price !== undefined && object.mark_price !== null) {
            message.markPrice = object.mark_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? exchange_1.DerivativeMarket.toAmino(message.market) : undefined;
        obj.perpetual_info = message.perpetualInfo ? exports.PerpetualMarketState.toAmino(message.perpetualInfo) : undefined;
        obj.futures_info = message.futuresInfo ? exchange_1.ExpiryFuturesMarketInfo.toAmino(message.futuresInfo) : undefined;
        obj.mark_price = message.markPrice === "" ? undefined : message.markPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FullDerivativeMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FullDerivativeMarket.decode(message.value);
    },
    toProto(message) {
        return exports.FullDerivativeMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
            value: exports.FullDerivativeMarket.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketsResponse() {
    return {
        markets: []
    };
}
exports.QueryDerivativeMarketsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.markets) {
            exports.FullDerivativeMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(exports.FullDerivativeMarket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketsResponse();
        message.markets = object.markets?.map(e => exports.FullDerivativeMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketsResponse();
        message.markets = object.markets?.map(e => exports.FullDerivativeMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? exports.FullDerivativeMarket.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMarketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMarketsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMarketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
            value: exports.QueryDerivativeMarketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketRequest() {
    return {
        marketId: ""
    };
}
exports.QueryDerivativeMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMarketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
            value: exports.QueryDerivativeMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketResponse() {
    return {
        market: undefined
    };
}
exports.QueryDerivativeMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            exports.FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exports.FullDerivativeMarket.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketResponse();
        message.market = object.market !== undefined && object.market !== null ? exports.FullDerivativeMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketResponse();
        if (object.market !== undefined && object.market !== null) {
            message.market = exports.FullDerivativeMarket.fromAmino(object.market);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? exports.FullDerivativeMarket.toAmino(message.market) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
            value: exports.QueryDerivativeMarketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketAddressRequest() {
    return {
        marketId: ""
    };
}
exports.QueryDerivativeMarketAddressRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketAddressRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketAddressRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMarketAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMarketAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMarketAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
            value: exports.QueryDerivativeMarketAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketAddressResponse() {
    return {
        address: "",
        subaccountId: ""
    };
}
exports.QueryDerivativeMarketAddressResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDerivativeMarketAddressResponse();
        message.address = object.address ?? "";
        message.subaccountId = object.subaccountId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketAddressResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDerivativeMarketAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDerivativeMarketAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDerivativeMarketAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
            value: exports.QueryDerivativeMarketAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountTradeNonceRequest() {
    return {
        subaccountId: ""
    };
}
exports.QuerySubaccountTradeNonceRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountTradeNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountTradeNonceRequest();
        message.subaccountId = object.subaccountId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountTradeNonceRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountTradeNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountTradeNonceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountTradeNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
            value: exports.QuerySubaccountTradeNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionsRequest() {
    return {
        subaccountId: ""
    };
}
exports.QuerySubaccountPositionsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountPositionsRequest();
        message.subaccountId = object.subaccountId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountPositionsRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountPositionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
            value: exports.QuerySubaccountPositionsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionInMarketRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
exports.QuerySubaccountPositionInMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionInMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountPositionInMarketRequest();
        message.subaccountId = object.subaccountId ?? "";
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountPositionInMarketRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountPositionInMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountPositionInMarketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountPositionInMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
            value: exports.QuerySubaccountPositionInMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountEffectivePositionInMarketRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
exports.QuerySubaccountEffectivePositionInMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
        message.subaccountId = object.subaccountId ?? "";
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountEffectivePositionInMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountEffectivePositionInMarketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
            value: exports.QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrderMetadataRequest() {
    return {
        subaccountId: ""
    };
}
exports.QuerySubaccountOrderMetadataRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrderMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountOrderMetadataRequest();
        message.subaccountId = object.subaccountId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountOrderMetadataRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountOrderMetadataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountOrderMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountOrderMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
            value: exports.QuerySubaccountOrderMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionsResponse() {
    return {
        state: []
    };
}
exports.QuerySubaccountPositionsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.state) {
            genesis_1.DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state.push(genesis_1.DerivativePosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountPositionsResponse();
        message.state = object.state?.map(e => genesis_1.DerivativePosition.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountPositionsResponse();
        message.state = object.state?.map(e => genesis_1.DerivativePosition.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map(e => e ? genesis_1.DerivativePosition.toAmino(e) : undefined);
        }
        else {
            obj.state = message.state;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountPositionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
            value: exports.QuerySubaccountPositionsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionInMarketResponse() {
    return {
        state: undefined
    };
}
exports.QuerySubaccountPositionInMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            exchange_1.Position.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = exchange_1.Position.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        message.state = object.state !== undefined && object.state !== null ? exchange_1.Position.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = exchange_1.Position.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? exchange_1.Position.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountPositionInMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountPositionInMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountPositionInMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
            value: exports.QuerySubaccountPositionInMarketResponse.encode(message).finish()
        };
    }
};
function createBaseEffectivePosition() {
    return {
        isLong: false,
        quantity: "",
        entryPrice: "",
        effectiveMargin: ""
    };
}
exports.EffectivePosition = {
    typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.isLong === true) {
            writer.uint32(8).bool(message.isLong);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.entryPrice !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.entryPrice, 18).atomics);
        }
        if (message.effectiveMargin !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.effectiveMargin, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEffectivePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isLong = reader.bool();
                    break;
                case 2:
                    message.quantity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.entryPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.effectiveMargin = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEffectivePosition();
        message.isLong = object.isLong ?? false;
        message.quantity = object.quantity ?? "";
        message.entryPrice = object.entryPrice ?? "";
        message.effectiveMargin = object.effectiveMargin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEffectivePosition();
        if (object.is_long !== undefined && object.is_long !== null) {
            message.isLong = object.is_long;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.entry_price !== undefined && object.entry_price !== null) {
            message.entryPrice = object.entry_price;
        }
        if (object.effective_margin !== undefined && object.effective_margin !== null) {
            message.effectiveMargin = object.effective_margin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.is_long = message.isLong === false ? undefined : message.isLong;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.entry_price = message.entryPrice === "" ? undefined : message.entryPrice;
        obj.effective_margin = message.effectiveMargin === "" ? undefined : message.effectiveMargin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EffectivePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EffectivePosition.decode(message.value);
    },
    toProto(message) {
        return exports.EffectivePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
            value: exports.EffectivePosition.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountEffectivePositionInMarketResponse() {
    return {
        state: undefined
    };
}
exports.QuerySubaccountEffectivePositionInMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            exports.EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = exports.EffectivePosition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        message.state = object.state !== undefined && object.state !== null ? exports.EffectivePosition.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = exports.EffectivePosition.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? exports.EffectivePosition.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountEffectivePositionInMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountEffectivePositionInMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
            value: exports.QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketInfoRequest() {
    return {
        marketId: ""
    };
}
exports.QueryPerpetualMarketInfoRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketInfoRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPerpetualMarketInfoRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPerpetualMarketInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPerpetualMarketInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPerpetualMarketInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
            value: exports.QueryPerpetualMarketInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketInfoResponse() {
    return {
        info: exchange_1.PerpetualMarketInfo.fromPartial({})
    };
}
exports.QueryPerpetualMarketInfoResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            exchange_1.PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = exchange_1.PerpetualMarketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? exchange_1.PerpetualMarketInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPerpetualMarketInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = exchange_1.PerpetualMarketInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? exchange_1.PerpetualMarketInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPerpetualMarketInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPerpetualMarketInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPerpetualMarketInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
            value: exports.QueryPerpetualMarketInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExpiryFuturesMarketInfoRequest() {
    return {
        marketId: ""
    };
}
exports.QueryExpiryFuturesMarketInfoRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExpiryFuturesMarketInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryExpiryFuturesMarketInfoRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExpiryFuturesMarketInfoRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExpiryFuturesMarketInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExpiryFuturesMarketInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExpiryFuturesMarketInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
            value: exports.QueryExpiryFuturesMarketInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExpiryFuturesMarketInfoResponse() {
    return {
        info: exchange_1.ExpiryFuturesMarketInfo.fromPartial({})
    };
}
exports.QueryExpiryFuturesMarketInfoResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            exchange_1.ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = exchange_1.ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? exchange_1.ExpiryFuturesMarketInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = exchange_1.ExpiryFuturesMarketInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? exchange_1.ExpiryFuturesMarketInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExpiryFuturesMarketInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExpiryFuturesMarketInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExpiryFuturesMarketInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
            value: exports.QueryExpiryFuturesMarketInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketFundingRequest() {
    return {
        marketId: ""
    };
}
exports.QueryPerpetualMarketFundingRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketFundingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketFundingRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPerpetualMarketFundingRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPerpetualMarketFundingRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPerpetualMarketFundingRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPerpetualMarketFundingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
            value: exports.QueryPerpetualMarketFundingRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketFundingResponse() {
    return {
        state: exchange_1.PerpetualMarketFunding.fromPartial({})
    };
}
exports.QueryPerpetualMarketFundingResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            exchange_1.PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketFundingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = exchange_1.PerpetualMarketFunding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPerpetualMarketFundingResponse();
        message.state = object.state !== undefined && object.state !== null ? exchange_1.PerpetualMarketFunding.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPerpetualMarketFundingResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = exchange_1.PerpetualMarketFunding.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? exchange_1.PerpetualMarketFunding.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPerpetualMarketFundingResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPerpetualMarketFundingResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPerpetualMarketFundingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
            value: exports.QueryPerpetualMarketFundingResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrderMetadataResponse() {
    return {
        metadata: []
    };
}
exports.QuerySubaccountOrderMetadataResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.metadata) {
            exports.SubaccountOrderbookMetadataWithMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata.push(exports.SubaccountOrderbookMetadataWithMarket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        message.metadata = object.metadata?.map(e => exports.SubaccountOrderbookMetadataWithMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        message.metadata = object.metadata?.map(e => exports.SubaccountOrderbookMetadataWithMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map(e => e ? exports.SubaccountOrderbookMetadataWithMarket.toAmino(e) : undefined);
        }
        else {
            obj.metadata = message.metadata;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountOrderMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountOrderMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountOrderMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
            value: exports.QuerySubaccountOrderMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountTradeNonceResponse() {
    return {
        nonce: 0
    };
}
exports.QuerySubaccountTradeNonceResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint32(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountTradeNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySubaccountTradeNonceResponse();
        message.nonce = object.nonce ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountTradeNonceResponse();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce === 0 ? undefined : message.nonce;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySubaccountTradeNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySubaccountTradeNonceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySubaccountTradeNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
            value: exports.QuerySubaccountTradeNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
            value: exports.QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
exports.QueryModuleStateResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = object.state !== undefined && object.state !== null ? genesis_1.GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? genesis_1.GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
            value: exports.QueryModuleStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPositionsRequest() {
    return {};
}
exports.QueryPositionsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPositionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryPositionsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryPositionsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPositionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
            value: exports.QueryPositionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPositionsResponse() {
    return {
        state: []
    };
}
exports.QueryPositionsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.state) {
            genesis_1.DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state.push(genesis_1.DerivativePosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPositionsResponse();
        message.state = object.state?.map(e => genesis_1.DerivativePosition.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPositionsResponse();
        message.state = object.state?.map(e => genesis_1.DerivativePosition.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map(e => e ? genesis_1.DerivativePosition.toAmino(e) : undefined);
        }
        else {
            obj.state = message.state;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPositionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
            value: exports.QueryPositionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTradeRewardPointsRequest() {
    return {
        accounts: [],
        pendingPoolTimestamp: BigInt(0)
    };
}
exports.QueryTradeRewardPointsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        if (message.pendingPoolTimestamp !== BigInt(0)) {
            writer.uint32(16).int64(message.pendingPoolTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardPointsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(reader.string());
                    break;
                case 2:
                    message.pendingPoolTimestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTradeRewardPointsRequest();
        message.accounts = object.accounts?.map(e => e) || [];
        message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTradeRewardPointsRequest();
        message.accounts = object.accounts?.map(e => e) || [];
        if (object.pending_pool_timestamp !== undefined && object.pending_pool_timestamp !== null) {
            message.pendingPoolTimestamp = BigInt(object.pending_pool_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e);
        }
        else {
            obj.accounts = message.accounts;
        }
        obj.pending_pool_timestamp = message.pendingPoolTimestamp !== BigInt(0) ? (message.pendingPoolTimestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTradeRewardPointsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTradeRewardPointsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTradeRewardPointsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
            value: exports.QueryTradeRewardPointsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTradeRewardPointsResponse() {
    return {
        accountTradeRewardPoints: []
    };
}
exports.QueryTradeRewardPointsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accountTradeRewardPoints) {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(v, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardPointsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountTradeRewardPoints.push(math_1.Decimal.fromAtomics(reader.string(), 18).toString());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTradeRewardPointsResponse();
        message.accountTradeRewardPoints = object.accountTradeRewardPoints?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTradeRewardPointsResponse();
        message.accountTradeRewardPoints = object.account_trade_reward_points?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accountTradeRewardPoints) {
            obj.account_trade_reward_points = message.accountTradeRewardPoints.map(e => e);
        }
        else {
            obj.account_trade_reward_points = message.accountTradeRewardPoints;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTradeRewardPointsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTradeRewardPointsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTradeRewardPointsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
            value: exports.QueryTradeRewardPointsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTradeRewardCampaignRequest() {
    return {};
}
exports.QueryTradeRewardCampaignRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardCampaignRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryTradeRewardCampaignRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryTradeRewardCampaignRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTradeRewardCampaignRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTradeRewardCampaignRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTradeRewardCampaignRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
            value: exports.QueryTradeRewardCampaignRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTradeRewardCampaignResponse() {
    return {
        tradingRewardCampaignInfo: undefined,
        tradingRewardPoolCampaignSchedule: [],
        totalTradeRewardPoints: "",
        pendingTradingRewardPoolCampaignSchedule: [],
        pendingTotalTradeRewardPoints: []
    };
}
exports.QueryTradeRewardCampaignResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tradingRewardCampaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tradingRewardPoolCampaignSchedule) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalTradeRewardPoints !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.totalTradeRewardPoints, 18).atomics);
        }
        for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.pendingTotalTradeRewardPoints) {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(v, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardCampaignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradingRewardCampaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tradingRewardPoolCampaignSchedule.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalTradeRewardPoints = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.pendingTradingRewardPoolCampaignSchedule.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.pendingTotalTradeRewardPoints.push(math_1.Decimal.fromAtomics(reader.string(), 18).toString());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTradeRewardCampaignResponse();
        message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
        message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
        message.totalTradeRewardPoints = object.totalTradeRewardPoints ?? "";
        message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
        message.pendingTotalTradeRewardPoints = object.pendingTotalTradeRewardPoints?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTradeRewardCampaignResponse();
        if (object.trading_reward_campaign_info !== undefined && object.trading_reward_campaign_info !== null) {
            message.tradingRewardCampaignInfo = exchange_1.TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info);
        }
        message.tradingRewardPoolCampaignSchedule = object.trading_reward_pool_campaign_schedule?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        if (object.total_trade_reward_points !== undefined && object.total_trade_reward_points !== null) {
            message.totalTradeRewardPoints = object.total_trade_reward_points;
        }
        message.pendingTradingRewardPoolCampaignSchedule = object.pending_trading_reward_pool_campaign_schedule?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        message.pendingTotalTradeRewardPoints = object.pending_total_trade_reward_points?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? exchange_1.TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
        if (message.tradingRewardPoolCampaignSchedule) {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? exchange_1.CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule;
        }
        obj.total_trade_reward_points = message.totalTradeRewardPoints === "" ? undefined : message.totalTradeRewardPoints;
        if (message.pendingTradingRewardPoolCampaignSchedule) {
            obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? exchange_1.CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule;
        }
        if (message.pendingTotalTradeRewardPoints) {
            obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints.map(e => e);
        }
        else {
            obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTradeRewardCampaignResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTradeRewardCampaignResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTradeRewardCampaignResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
            value: exports.QueryTradeRewardCampaignResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIsOptedOutOfRewardsRequest() {
    return {
        account: ""
    };
}
exports.QueryIsOptedOutOfRewardsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIsOptedOutOfRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIsOptedOutOfRewardsRequest();
        message.account = object.account ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIsOptedOutOfRewardsRequest();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIsOptedOutOfRewardsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIsOptedOutOfRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIsOptedOutOfRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
            value: exports.QueryIsOptedOutOfRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIsOptedOutOfRewardsResponse() {
    return {
        isOptedOut: false
    };
}
exports.QueryIsOptedOutOfRewardsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.isOptedOut === true) {
            writer.uint32(8).bool(message.isOptedOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIsOptedOutOfRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isOptedOut = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIsOptedOutOfRewardsResponse();
        message.isOptedOut = object.isOptedOut ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIsOptedOutOfRewardsResponse();
        if (object.is_opted_out !== undefined && object.is_opted_out !== null) {
            message.isOptedOut = object.is_opted_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.is_opted_out = message.isOptedOut === false ? undefined : message.isOptedOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIsOptedOutOfRewardsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIsOptedOutOfRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIsOptedOutOfRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
            value: exports.QueryIsOptedOutOfRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOptedOutOfRewardsAccountsRequest() {
    return {};
}
exports.QueryOptedOutOfRewardsAccountsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOptedOutOfRewardsAccountsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOptedOutOfRewardsAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOptedOutOfRewardsAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
            value: exports.QueryOptedOutOfRewardsAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOptedOutOfRewardsAccountsResponse() {
    return {
        accounts: []
    };
}
exports.QueryOptedOutOfRewardsAccountsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
        message.accounts = object.accounts?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
        message.accounts = object.accounts?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e);
        }
        else {
            obj.accounts = message.accounts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOptedOutOfRewardsAccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOptedOutOfRewardsAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOptedOutOfRewardsAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
            value: exports.QueryOptedOutOfRewardsAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountAccountInfoRequest() {
    return {
        account: ""
    };
}
exports.QueryFeeDiscountAccountInfoRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountAccountInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeDiscountAccountInfoRequest();
        message.account = object.account ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeDiscountAccountInfoRequest();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeDiscountAccountInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeeDiscountAccountInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeDiscountAccountInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
            value: exports.QueryFeeDiscountAccountInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountAccountInfoResponse() {
    return {
        tierLevel: BigInt(0),
        accountInfo: undefined,
        accountTtl: undefined
    };
}
exports.QueryFeeDiscountAccountInfoResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tierLevel !== BigInt(0)) {
            writer.uint32(8).uint64(message.tierLevel);
        }
        if (message.accountInfo !== undefined) {
            exchange_1.FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountTtl !== undefined) {
            exchange_1.FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tierLevel = reader.uint64();
                    break;
                case 2:
                    message.accountInfo = exchange_1.FeeDiscountTierInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountTtl = exchange_1.FeeDiscountTierTTL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        message.tierLevel = object.tierLevel !== undefined && object.tierLevel !== null ? BigInt(object.tierLevel.toString()) : BigInt(0);
        message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? exchange_1.FeeDiscountTierInfo.fromPartial(object.accountInfo) : undefined;
        message.accountTtl = object.accountTtl !== undefined && object.accountTtl !== null ? exchange_1.FeeDiscountTierTTL.fromPartial(object.accountTtl) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        if (object.tier_level !== undefined && object.tier_level !== null) {
            message.tierLevel = BigInt(object.tier_level);
        }
        if (object.account_info !== undefined && object.account_info !== null) {
            message.accountInfo = exchange_1.FeeDiscountTierInfo.fromAmino(object.account_info);
        }
        if (object.account_ttl !== undefined && object.account_ttl !== null) {
            message.accountTtl = exchange_1.FeeDiscountTierTTL.fromAmino(object.account_ttl);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tier_level = message.tierLevel !== BigInt(0) ? (message.tierLevel?.toString)() : undefined;
        obj.account_info = message.accountInfo ? exchange_1.FeeDiscountTierInfo.toAmino(message.accountInfo) : undefined;
        obj.account_ttl = message.accountTtl ? exchange_1.FeeDiscountTierTTL.toAmino(message.accountTtl) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeDiscountAccountInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeeDiscountAccountInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeDiscountAccountInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
            value: exports.QueryFeeDiscountAccountInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountScheduleRequest() {
    return {};
}
exports.QueryFeeDiscountScheduleRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountScheduleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryFeeDiscountScheduleRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryFeeDiscountScheduleRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeDiscountScheduleRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeeDiscountScheduleRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeDiscountScheduleRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
            value: exports.QueryFeeDiscountScheduleRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountScheduleResponse() {
    return {
        feeDiscountSchedule: undefined
    };
}
exports.QueryFeeDiscountScheduleResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feeDiscountSchedule !== undefined) {
            exchange_1.FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountScheduleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeDiscountSchedule = exchange_1.FeeDiscountSchedule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeDiscountScheduleResponse();
        message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? exchange_1.FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeDiscountScheduleResponse();
        if (object.fee_discount_schedule !== undefined && object.fee_discount_schedule !== null) {
            message.feeDiscountSchedule = exchange_1.FeeDiscountSchedule.fromAmino(object.fee_discount_schedule);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee_discount_schedule = message.feeDiscountSchedule ? exchange_1.FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeDiscountScheduleResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeeDiscountScheduleResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeDiscountScheduleResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
            value: exports.QueryFeeDiscountScheduleResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceMismatchesRequest() {
    return {
        dustFactor: BigInt(0)
    };
}
exports.QueryBalanceMismatchesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.dustFactor !== BigInt(0)) {
            writer.uint32(8).int64(message.dustFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceMismatchesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dustFactor = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceMismatchesRequest();
        message.dustFactor = object.dustFactor !== undefined && object.dustFactor !== null ? BigInt(object.dustFactor.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceMismatchesRequest();
        if (object.dust_factor !== undefined && object.dust_factor !== null) {
            message.dustFactor = BigInt(object.dust_factor);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.dust_factor = message.dustFactor !== BigInt(0) ? (message.dustFactor?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceMismatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceMismatchesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceMismatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
            value: exports.QueryBalanceMismatchesRequest.encode(message).finish()
        };
    }
};
function createBaseBalanceMismatch() {
    return {
        subaccountId: "",
        denom: "",
        available: "",
        total: "",
        balanceHold: "",
        expectedTotal: "",
        difference: ""
    };
}
exports.BalanceMismatch = {
    typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.available !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.available, 18).atomics);
        }
        if (message.total !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.total, 18).atomics);
        }
        if (message.balanceHold !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.balanceHold, 18).atomics);
        }
        if (message.expectedTotal !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.expectedTotal, 18).atomics);
        }
        if (message.difference !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.difference, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalanceMismatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.available = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.total = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.balanceHold = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.expectedTotal = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.difference = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalanceMismatch();
        message.subaccountId = object.subaccountId ?? "";
        message.denom = object.denom ?? "";
        message.available = object.available ?? "";
        message.total = object.total ?? "";
        message.balanceHold = object.balanceHold ?? "";
        message.expectedTotal = object.expectedTotal ?? "";
        message.difference = object.difference ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalanceMismatch();
        if (object.subaccountId !== undefined && object.subaccountId !== null) {
            message.subaccountId = object.subaccountId;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        if (object.balance_hold !== undefined && object.balance_hold !== null) {
            message.balanceHold = object.balance_hold;
        }
        if (object.expected_total !== undefined && object.expected_total !== null) {
            message.expectedTotal = object.expected_total;
        }
        if (object.difference !== undefined && object.difference !== null) {
            message.difference = object.difference;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccountId = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.available = message.available === "" ? undefined : message.available;
        obj.total = message.total === "" ? undefined : message.total;
        obj.balance_hold = message.balanceHold === "" ? undefined : message.balanceHold;
        obj.expected_total = message.expectedTotal === "" ? undefined : message.expectedTotal;
        obj.difference = message.difference === "" ? undefined : message.difference;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BalanceMismatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BalanceMismatch.decode(message.value);
    },
    toProto(message) {
        return exports.BalanceMismatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
            value: exports.BalanceMismatch.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceMismatchesResponse() {
    return {
        balanceMismatches: []
    };
}
exports.QueryBalanceMismatchesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balanceMismatches) {
            exports.BalanceMismatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceMismatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balanceMismatches.push(exports.BalanceMismatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceMismatchesResponse();
        message.balanceMismatches = object.balanceMismatches?.map(e => exports.BalanceMismatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceMismatchesResponse();
        message.balanceMismatches = object.balance_mismatches?.map(e => exports.BalanceMismatch.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balanceMismatches) {
            obj.balance_mismatches = message.balanceMismatches.map(e => e ? exports.BalanceMismatch.toAmino(e) : undefined);
        }
        else {
            obj.balance_mismatches = message.balanceMismatches;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceMismatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceMismatchesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceMismatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
            value: exports.QueryBalanceMismatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceWithBalanceHoldsRequest() {
    return {};
}
exports.QueryBalanceWithBalanceHoldsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceWithBalanceHoldsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryBalanceWithBalanceHoldsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBalanceWithBalanceHoldsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceWithBalanceHoldsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceWithBalanceHoldsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceWithBalanceHoldsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
            value: exports.QueryBalanceWithBalanceHoldsRequest.encode(message).finish()
        };
    }
};
function createBaseBalanceWithMarginHold() {
    return {
        subaccountId: "",
        denom: "",
        available: "",
        total: "",
        balanceHold: ""
    };
}
exports.BalanceWithMarginHold = {
    typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.available !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.available, 18).atomics);
        }
        if (message.total !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.total, 18).atomics);
        }
        if (message.balanceHold !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.balanceHold, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalanceWithMarginHold();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.available = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.total = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.balanceHold = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBalanceWithMarginHold();
        message.subaccountId = object.subaccountId ?? "";
        message.denom = object.denom ?? "";
        message.available = object.available ?? "";
        message.total = object.total ?? "";
        message.balanceHold = object.balanceHold ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalanceWithMarginHold();
        if (object.subaccountId !== undefined && object.subaccountId !== null) {
            message.subaccountId = object.subaccountId;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        if (object.balance_hold !== undefined && object.balance_hold !== null) {
            message.balanceHold = object.balance_hold;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccountId = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.available = message.available === "" ? undefined : message.available;
        obj.total = message.total === "" ? undefined : message.total;
        obj.balance_hold = message.balanceHold === "" ? undefined : message.balanceHold;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BalanceWithMarginHold.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BalanceWithMarginHold.decode(message.value);
    },
    toProto(message) {
        return exports.BalanceWithMarginHold.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
            value: exports.BalanceWithMarginHold.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceWithBalanceHoldsResponse() {
    return {
        balanceWithBalanceHolds: []
    };
}
exports.QueryBalanceWithBalanceHoldsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.balanceWithBalanceHolds) {
            exports.BalanceWithMarginHold.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balanceWithBalanceHolds.push(exports.BalanceWithMarginHold.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        message.balanceWithBalanceHolds = object.balanceWithBalanceHolds?.map(e => exports.BalanceWithMarginHold.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        message.balanceWithBalanceHolds = object.balance_with_balance_holds?.map(e => exports.BalanceWithMarginHold.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balanceWithBalanceHolds) {
            obj.balance_with_balance_holds = message.balanceWithBalanceHolds.map(e => e ? exports.BalanceWithMarginHold.toAmino(e) : undefined);
        }
        else {
            obj.balance_with_balance_holds = message.balanceWithBalanceHolds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceWithBalanceHoldsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceWithBalanceHoldsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceWithBalanceHoldsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
            value: exports.QueryBalanceWithBalanceHoldsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountTierStatisticsRequest() {
    return {};
}
exports.QueryFeeDiscountTierStatisticsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountTierStatisticsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryFeeDiscountTierStatisticsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryFeeDiscountTierStatisticsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeDiscountTierStatisticsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeeDiscountTierStatisticsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeDiscountTierStatisticsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
            value: exports.QueryFeeDiscountTierStatisticsRequest.encode(message).finish()
        };
    }
};
function createBaseTierStatistic() {
    return {
        tier: BigInt(0),
        count: BigInt(0)
    };
}
exports.TierStatistic = {
    typeUrl: "/injective.exchange.v1beta1.TierStatistic",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tier !== BigInt(0)) {
            writer.uint32(8).uint64(message.tier);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTierStatistic();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tier = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTierStatistic();
        message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTierStatistic();
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = BigInt(object.tier);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tier = message.tier !== BigInt(0) ? (message.tier?.toString)() : undefined;
        obj.count = message.count !== BigInt(0) ? (message.count?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TierStatistic.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TierStatistic.decode(message.value);
    },
    toProto(message) {
        return exports.TierStatistic.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TierStatistic",
            value: exports.TierStatistic.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountTierStatisticsResponse() {
    return {
        statistics: []
    };
}
exports.QueryFeeDiscountTierStatisticsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.statistics) {
            exports.TierStatistic.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics.push(exports.TierStatistic.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        message.statistics = object.statistics?.map(e => exports.TierStatistic.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        message.statistics = object.statistics?.map(e => exports.TierStatistic.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map(e => e ? exports.TierStatistic.toAmino(e) : undefined);
        }
        else {
            obj.statistics = message.statistics;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeDiscountTierStatisticsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeeDiscountTierStatisticsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeDiscountTierStatisticsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
            value: exports.QueryFeeDiscountTierStatisticsResponse.encode(message).finish()
        };
    }
};
function createBaseNinjaVaultInfosRequest() {
    return {};
}
exports.NinjaVaultInfosRequest = {
    typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNinjaVaultInfosRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseNinjaVaultInfosRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseNinjaVaultInfosRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NinjaVaultInfosRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NinjaVaultInfosRequest.decode(message.value);
    },
    toProto(message) {
        return exports.NinjaVaultInfosRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest",
            value: exports.NinjaVaultInfosRequest.encode(message).finish()
        };
    }
};
function createBaseNinjaVaultInfosResponse() {
    return {
        masterAddresses: [],
        derivativeAddresses: [],
        spotAddresses: [],
        cw20Addresses: []
    };
}
exports.NinjaVaultInfosResponse = {
    typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.masterAddresses) {
            writer.uint32(10).string(v);
        }
        for (const v of message.derivativeAddresses) {
            writer.uint32(18).string(v);
        }
        for (const v of message.spotAddresses) {
            writer.uint32(26).string(v);
        }
        for (const v of message.cw20Addresses) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNinjaVaultInfosResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.masterAddresses.push(reader.string());
                    break;
                case 2:
                    message.derivativeAddresses.push(reader.string());
                    break;
                case 3:
                    message.spotAddresses.push(reader.string());
                    break;
                case 4:
                    message.cw20Addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNinjaVaultInfosResponse();
        message.masterAddresses = object.masterAddresses?.map(e => e) || [];
        message.derivativeAddresses = object.derivativeAddresses?.map(e => e) || [];
        message.spotAddresses = object.spotAddresses?.map(e => e) || [];
        message.cw20Addresses = object.cw20Addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseNinjaVaultInfosResponse();
        message.masterAddresses = object.master_addresses?.map(e => e) || [];
        message.derivativeAddresses = object.derivative_addresses?.map(e => e) || [];
        message.spotAddresses = object.spot_addresses?.map(e => e) || [];
        message.cw20Addresses = object.cw20_addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.masterAddresses) {
            obj.master_addresses = message.masterAddresses.map(e => e);
        }
        else {
            obj.master_addresses = message.masterAddresses;
        }
        if (message.derivativeAddresses) {
            obj.derivative_addresses = message.derivativeAddresses.map(e => e);
        }
        else {
            obj.derivative_addresses = message.derivativeAddresses;
        }
        if (message.spotAddresses) {
            obj.spot_addresses = message.spotAddresses.map(e => e);
        }
        else {
            obj.spot_addresses = message.spotAddresses;
        }
        if (message.cw20Addresses) {
            obj.cw20_addresses = message.cw20Addresses.map(e => e);
        }
        else {
            obj.cw20_addresses = message.cw20Addresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NinjaVaultInfosResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NinjaVaultInfosResponse.decode(message.value);
    },
    toProto(message) {
        return exports.NinjaVaultInfosResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse",
            value: exports.NinjaVaultInfosResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMarketIDFromVaultRequest() {
    return {
        vaultSubaccountId: ""
    };
}
exports.QueryMarketIDFromVaultRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vaultSubaccountId !== "") {
            writer.uint32(10).string(message.vaultSubaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketIDFromVaultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultSubaccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketIDFromVaultRequest();
        message.vaultSubaccountId = object.vaultSubaccountId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketIDFromVaultRequest();
        if (object.vault_subaccount_id !== undefined && object.vault_subaccount_id !== null) {
            message.vaultSubaccountId = object.vault_subaccount_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vault_subaccount_id = message.vaultSubaccountId === "" ? undefined : message.vaultSubaccountId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketIDFromVaultRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketIDFromVaultRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketIDFromVaultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
            value: exports.QueryMarketIDFromVaultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMarketIDFromVaultResponse() {
    return {
        marketId: ""
    };
}
exports.QueryMarketIDFromVaultResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketIDFromVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketIDFromVaultResponse();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketIDFromVaultResponse();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketIDFromVaultResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketIDFromVaultResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketIDFromVaultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
            value: exports.QueryMarketIDFromVaultResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalTradeRecordsRequest() {
    return {
        marketId: ""
    };
}
exports.QueryHistoricalTradeRecordsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalTradeRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalTradeRecordsRequest();
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHistoricalTradeRecordsRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoricalTradeRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHistoricalTradeRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoricalTradeRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
            value: exports.QueryHistoricalTradeRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalTradeRecordsResponse() {
    return {
        tradeRecords: []
    };
}
exports.QueryHistoricalTradeRecordsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tradeRecords) {
            exchange_1.TradeRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeRecords.push(exchange_1.TradeRecords.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        message.tradeRecords = object.tradeRecords?.map(e => exchange_1.TradeRecords.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        message.tradeRecords = object.trade_records?.map(e => exchange_1.TradeRecords.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tradeRecords) {
            obj.trade_records = message.tradeRecords.map(e => e ? exchange_1.TradeRecords.toAmino(e) : undefined);
        }
        else {
            obj.trade_records = message.tradeRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoricalTradeRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHistoricalTradeRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoricalTradeRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
            value: exports.QueryHistoricalTradeRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseTradeHistoryOptions() {
    return {
        tradeGroupingSec: BigInt(0),
        maxAge: BigInt(0),
        includeRawHistory: false,
        includeMetadata: false
    };
}
exports.TradeHistoryOptions = {
    typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tradeGroupingSec !== BigInt(0)) {
            writer.uint32(8).uint64(message.tradeGroupingSec);
        }
        if (message.maxAge !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxAge);
        }
        if (message.includeRawHistory === true) {
            writer.uint32(32).bool(message.includeRawHistory);
        }
        if (message.includeMetadata === true) {
            writer.uint32(40).bool(message.includeMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeHistoryOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeGroupingSec = reader.uint64();
                    break;
                case 2:
                    message.maxAge = reader.uint64();
                    break;
                case 4:
                    message.includeRawHistory = reader.bool();
                    break;
                case 5:
                    message.includeMetadata = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradeHistoryOptions();
        message.tradeGroupingSec = object.tradeGroupingSec !== undefined && object.tradeGroupingSec !== null ? BigInt(object.tradeGroupingSec.toString()) : BigInt(0);
        message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? BigInt(object.maxAge.toString()) : BigInt(0);
        message.includeRawHistory = object.includeRawHistory ?? false;
        message.includeMetadata = object.includeMetadata ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradeHistoryOptions();
        if (object.trade_grouping_sec !== undefined && object.trade_grouping_sec !== null) {
            message.tradeGroupingSec = BigInt(object.trade_grouping_sec);
        }
        if (object.max_age !== undefined && object.max_age !== null) {
            message.maxAge = BigInt(object.max_age);
        }
        if (object.include_raw_history !== undefined && object.include_raw_history !== null) {
            message.includeRawHistory = object.include_raw_history;
        }
        if (object.include_metadata !== undefined && object.include_metadata !== null) {
            message.includeMetadata = object.include_metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.trade_grouping_sec = message.tradeGroupingSec !== BigInt(0) ? (message.tradeGroupingSec?.toString)() : undefined;
        obj.max_age = message.maxAge !== BigInt(0) ? (message.maxAge?.toString)() : undefined;
        obj.include_raw_history = message.includeRawHistory === false ? undefined : message.includeRawHistory;
        obj.include_metadata = message.includeMetadata === false ? undefined : message.includeMetadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TradeHistoryOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TradeHistoryOptions.decode(message.value);
    },
    toProto(message) {
        return exports.TradeHistoryOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
            value: exports.TradeHistoryOptions.encode(message).finish()
        };
    }
};
function createBaseQueryMarketVolatilityRequest() {
    return {
        marketId: "",
        tradeHistoryOptions: undefined
    };
}
exports.QueryMarketVolatilityRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.tradeHistoryOptions !== undefined) {
            exports.TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketVolatilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.tradeHistoryOptions = exports.TradeHistoryOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketVolatilityRequest();
        message.marketId = object.marketId ?? "";
        message.tradeHistoryOptions = object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null ? exports.TradeHistoryOptions.fromPartial(object.tradeHistoryOptions) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketVolatilityRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.trade_history_options !== undefined && object.trade_history_options !== null) {
            message.tradeHistoryOptions = exports.TradeHistoryOptions.fromAmino(object.trade_history_options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.trade_history_options = message.tradeHistoryOptions ? exports.TradeHistoryOptions.toAmino(message.tradeHistoryOptions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketVolatilityRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketVolatilityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketVolatilityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
            value: exports.QueryMarketVolatilityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMarketVolatilityResponse() {
    return {
        volatility: "",
        historyMetadata: undefined,
        rawHistory: []
    };
}
exports.QueryMarketVolatilityResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.volatility, 18).atomics);
        }
        if (message.historyMetadata !== undefined) {
            oracle_1.MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            exchange_1.TradeRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketVolatilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volatility = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.historyMetadata = oracle_1.MetadataStatistics.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rawHistory.push(exchange_1.TradeRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketVolatilityResponse();
        message.volatility = object.volatility ?? "";
        message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? oracle_1.MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
        message.rawHistory = object.rawHistory?.map(e => exchange_1.TradeRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketVolatilityResponse();
        if (object.volatility !== undefined && object.volatility !== null) {
            message.volatility = object.volatility;
        }
        if (object.history_metadata !== undefined && object.history_metadata !== null) {
            message.historyMetadata = oracle_1.MetadataStatistics.fromAmino(object.history_metadata);
        }
        message.rawHistory = object.raw_history?.map(e => exchange_1.TradeRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.volatility = message.volatility === "" ? undefined : message.volatility;
        obj.history_metadata = message.historyMetadata ? oracle_1.MetadataStatistics.toAmino(message.historyMetadata) : undefined;
        if (message.rawHistory) {
            obj.raw_history = message.rawHistory.map(e => e ? exchange_1.TradeRecord.toAmino(e) : undefined);
        }
        else {
            obj.raw_history = message.rawHistory;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketVolatilityResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketVolatilityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketVolatilityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
            value: exports.QueryMarketVolatilityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBinaryMarketsRequest() {
    return {
        status: ""
    };
}
exports.QueryBinaryMarketsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBinaryMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBinaryMarketsRequest();
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBinaryMarketsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status === "" ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBinaryMarketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBinaryMarketsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBinaryMarketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
            value: exports.QueryBinaryMarketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBinaryMarketsResponse() {
    return {
        markets: []
    };
}
exports.QueryBinaryMarketsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.markets) {
            exchange_1.BinaryOptionsMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBinaryMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(exchange_1.BinaryOptionsMarket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBinaryMarketsResponse();
        message.markets = object.markets?.map(e => exchange_1.BinaryOptionsMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBinaryMarketsResponse();
        message.markets = object.markets?.map(e => exchange_1.BinaryOptionsMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? exchange_1.BinaryOptionsMarket.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBinaryMarketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBinaryMarketsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBinaryMarketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
            value: exports.QueryBinaryMarketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
exports.QueryTraderDerivativeConditionalOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
        message.subaccountId = object.subaccountId ?? "";
        message.marketId = object.marketId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderDerivativeConditionalOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderDerivativeConditionalOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
            value: exports.QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseTrimmedDerivativeConditionalOrder() {
    return {
        price: "",
        quantity: "",
        margin: "",
        triggerPrice: "",
        isBuy: false,
        isLimit: false,
        orderHash: ""
    };
}
exports.TrimmedDerivativeConditionalOrder = {
    typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.triggerPrice, 18).atomics);
        }
        if (message.isBuy === true) {
            writer.uint32(40).bool(message.isBuy);
        }
        if (message.isLimit === true) {
            writer.uint32(48).bool(message.isLimit);
        }
        if (message.orderHash !== "") {
            writer.uint32(58).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedDerivativeConditionalOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.margin = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.triggerPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.isBuy = reader.bool();
                    break;
                case 6:
                    message.isLimit = reader.bool();
                    break;
                case 7:
                    message.orderHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTrimmedDerivativeConditionalOrder();
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        message.margin = object.margin ?? "";
        message.triggerPrice = object.triggerPrice ?? "";
        message.isBuy = object.isBuy ?? false;
        message.isLimit = object.isLimit ?? false;
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTrimmedDerivativeConditionalOrder();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.margin !== undefined && object.margin !== null) {
            message.margin = object.margin;
        }
        if (object.triggerPrice !== undefined && object.triggerPrice !== null) {
            message.triggerPrice = object.triggerPrice;
        }
        if (object.isBuy !== undefined && object.isBuy !== null) {
            message.isBuy = object.isBuy;
        }
        if (object.isLimit !== undefined && object.isLimit !== null) {
            message.isLimit = object.isLimit;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price === "" ? undefined : message.price;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.margin = message.margin === "" ? undefined : message.margin;
        obj.triggerPrice = message.triggerPrice === "" ? undefined : message.triggerPrice;
        obj.isBuy = message.isBuy ?? false;
        obj.isLimit = message.isLimit ?? false;
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TrimmedDerivativeConditionalOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TrimmedDerivativeConditionalOrder.decode(message.value);
    },
    toProto(message) {
        return exports.TrimmedDerivativeConditionalOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
            value: exports.TrimmedDerivativeConditionalOrder.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeConditionalOrdersResponse() {
    return {
        orders: []
    };
}
exports.QueryTraderDerivativeConditionalOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orders) {
            exports.TrimmedDerivativeConditionalOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.TrimmedDerivativeConditionalOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        message.orders = object.orders?.map(e => exports.TrimmedDerivativeConditionalOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        message.orders = object.orders?.map(e => exports.TrimmedDerivativeConditionalOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exports.TrimmedDerivativeConditionalOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraderDerivativeConditionalOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraderDerivativeConditionalOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
            value: exports.QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish()
        };
    }
};
