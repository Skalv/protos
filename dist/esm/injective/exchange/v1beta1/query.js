//@ts-nocheck
import { SubaccountOrderData, SubaccountOrderbookMetadata, Params, Deposit, SpotMarket, PerpetualMarketInfo, PerpetualMarketFunding, DerivativeMarket, ExpiryFuturesMarketInfo, Position, TradingRewardCampaignInfo, CampaignRewardPool, FeeDiscountTierInfo, FeeDiscountTierTTL, FeeDiscountSchedule, TradeRecords, TradeRecord, BinaryOptionsMarket } from "./exchange";
import { Balance, DerivativePosition, GenesisState } from "./genesis";
import { MetadataStatistics } from "../../oracle/v1beta1/oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** CancellationStrategy is the list of cancellation strategies. */
export var CancellationStrategy;
(function (CancellationStrategy) {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    CancellationStrategy[CancellationStrategy["UnspecifiedOrder"] = 0] = "UnspecifiedOrder";
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    CancellationStrategy[CancellationStrategy["FromWorstToBest"] = 1] = "FromWorstToBest";
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    CancellationStrategy[CancellationStrategy["FromBestToWorst"] = 2] = "FromBestToWorst";
    CancellationStrategy[CancellationStrategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CancellationStrategy || (CancellationStrategy = {}));
export const CancellationStrategySDKType = CancellationStrategy;
export const CancellationStrategyAmino = CancellationStrategy;
export function cancellationStrategyFromJSON(object) {
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
export function cancellationStrategyToJSON(object) {
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
export const Subaccount = {
    typeUrl: "/injective.exchange.v1beta1.Subaccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.trader !== "") {
            writer.uint32(10).string(message.trader);
        }
        if (message.subaccountNonce !== 0) {
            writer.uint32(16).uint32(message.subaccountNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Subaccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Subaccount.decode(message.value);
    },
    toProto(message) {
        return Subaccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.Subaccount",
            value: Subaccount.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrdersRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
export const QuerySubaccountOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
            value: QuerySubaccountOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrdersResponse() {
    return {
        buyOrders: [],
        sellOrders: []
    };
}
export const QuerySubaccountOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.buyOrders) {
            SubaccountOrderData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            SubaccountOrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sellOrders.push(SubaccountOrderData.decode(reader, reader.uint32()));
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
        message.buyOrders = object.buyOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
        message.sellOrders = object.sellOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountOrdersResponse();
        message.buyOrders = object.buy_orders?.map(e => SubaccountOrderData.fromAmino(e)) || [];
        message.sellOrders = object.sell_orders?.map(e => SubaccountOrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.buyOrders) {
            obj.buy_orders = message.buyOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
        }
        else {
            obj.buy_orders = message.buyOrders;
        }
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
            value: QuerySubaccountOrdersResponse.encode(message).finish()
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
export const SubaccountOrderbookMetadataWithMarket = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.metadata !== undefined) {
            SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = SubaccountOrderbookMetadata.decode(reader, reader.uint32());
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
        message.metadata = object.metadata !== undefined && object.metadata !== null ? SubaccountOrderbookMetadata.fromPartial(object.metadata) : undefined;
        message.marketId = object.marketId ?? "";
        message.isBuy = object.isBuy ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountOrderbookMetadataWithMarket();
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = SubaccountOrderbookMetadata.fromAmino(object.metadata);
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
        obj.metadata = message.metadata ? SubaccountOrderbookMetadata.toAmino(message.metadata) : undefined;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountOrderbookMetadataWithMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountOrderbookMetadataWithMarket.decode(message.value);
    },
    toProto(message) {
        return SubaccountOrderbookMetadataWithMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
            value: SubaccountOrderbookMetadataWithMarket.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeParamsRequest() {
    return {};
}
export const QueryExchangeParamsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryExchangeParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
            value: QueryExchangeParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryExchangeParamsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
            value: QueryExchangeParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositsRequest() {
    return {
        subaccountId: "",
        subaccount: undefined
    };
}
export const QuerySubaccountDepositsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.subaccount !== undefined) {
            Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.subaccount = Subaccount.decode(reader, reader.uint32());
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
        message.subaccount = object.subaccount !== undefined && object.subaccount !== null ? Subaccount.fromPartial(object.subaccount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositsRequest();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.subaccount !== undefined && object.subaccount !== null) {
            message.subaccount = Subaccount.fromAmino(object.subaccount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.subaccount = message.subaccount ? Subaccount.toAmino(message.subaccount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountDepositsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
            value: QuerySubaccountDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry() {
    return {
        key: "",
        value: undefined
    };
}
export const QuerySubaccountDepositsResponse_DepositsEntry = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Deposit.decode(reader, reader.uint32());
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
        message.value = object.value !== undefined && object.value !== null ? Deposit.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Deposit.fromAmino(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value ? Deposit.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountDepositsResponse_DepositsEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountDepositsResponse_DepositsEntry.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountDepositsResponse_DepositsEntry.encode(message).finish();
    }
};
function createBaseQuerySubaccountDepositsResponse() {
    return {
        deposits: {}
    };
}
export const QuerySubaccountDepositsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
    encode(message, writer = BinaryWriter.create()) {
        Object.entries(message.deposits).forEach(([key, value]) => {
            QuerySubaccountDepositsResponse_DepositsEntry.encode({
                key: key,
                value
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = QuerySubaccountDepositsResponse_DepositsEntry.decode(reader, reader.uint32());
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
                acc[key] = Deposit.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositsResponse();
        message.deposits = Object.entries(object.deposits ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Deposit.fromAmino(value);
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
                obj.deposits[k] = Deposit.toAmino(v);
            });
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountDepositsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
            value: QuerySubaccountDepositsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeBalancesRequest() {
    return {};
}
export const QueryExchangeBalancesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryExchangeBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
            value: QueryExchangeBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeBalancesResponse() {
    return {
        balances: []
    };
}
export const QueryExchangeBalancesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(Balance.decode(reader, reader.uint32()));
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
        message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeBalancesResponse();
        message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = message.balances;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
            value: QueryExchangeBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositRequest() {
    return {
        subaccountId: "",
        denom: ""
    };
}
export const QuerySubaccountDepositRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountDepositRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountDepositRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
            value: QuerySubaccountDepositRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountDepositResponse() {
    return {
        deposits: undefined
    };
}
export const QuerySubaccountDepositResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.deposits !== undefined) {
            Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits = Deposit.decode(reader, reader.uint32());
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
        message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountDepositResponse();
        if (object.deposits !== undefined && object.deposits !== null) {
            message.deposits = Deposit.fromAmino(object.deposits);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposits = message.deposits ? Deposit.toAmino(message.deposits) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountDepositResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
            value: QuerySubaccountDepositResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketsRequest() {
    return {
        status: ""
    };
}
export const QuerySpotMarketsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySpotMarketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotMarketsRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotMarketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
            value: QuerySpotMarketsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketsResponse() {
    return {
        markets: []
    };
}
export const QuerySpotMarketsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.markets) {
            SpotMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(SpotMarket.decode(reader, reader.uint32()));
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
        message.markets = object.markets?.map(e => SpotMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMarketsResponse();
        message.markets = object.markets?.map(e => SpotMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? SpotMarket.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySpotMarketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotMarketsResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotMarketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
            value: QuerySpotMarketsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketRequest() {
    return {
        marketId: ""
    };
}
export const QuerySpotMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySpotMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotMarketRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
            value: QuerySpotMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMarketResponse() {
    return {
        market: undefined
    };
}
export const QuerySpotMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.market !== undefined) {
            SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = SpotMarket.decode(reader, reader.uint32());
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
        message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotMarketResponse();
        if (object.market !== undefined && object.market !== null) {
            message.market = SpotMarket.fromAmino(object.market);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySpotMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotMarketResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
            value: QuerySpotMarketResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotOrderbookRequest() {
    return {
        marketId: "",
        limit: BigInt(0)
    };
}
export const QuerySpotOrderbookRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(16).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySpotOrderbookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotOrderbookRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotOrderbookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
            value: QuerySpotOrderbookRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotOrderbookResponse() {
    return {
        buysPriceLevel: [],
        sellsPriceLevel: []
    };
}
export const QuerySpotOrderbookResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.buysPriceLevel) {
            PriceLevel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buysPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sellsPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
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
        message.buysPriceLevel = object.buysPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
        message.sellsPriceLevel = object.sellsPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotOrderbookResponse();
        message.buysPriceLevel = object.buys_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
        message.sellsPriceLevel = object.sells_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buys_price_level = message.buysPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.buys_price_level = message.buysPriceLevel;
        }
        if (message.sellsPriceLevel) {
            obj.sells_price_level = message.sellsPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.sells_price_level = message.sellsPriceLevel;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySpotOrderbookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotOrderbookResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotOrderbookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
            value: QuerySpotOrderbookResponse.encode(message).finish()
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
export const QuerySpotOrdersByHashesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySpotOrdersByHashesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotOrdersByHashesRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotOrdersByHashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
            value: QuerySpotOrdersByHashesRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotOrdersByHashesResponse() {
    return {
        orders: []
    };
}
export const QuerySpotOrdersByHashesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orders) {
            TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotOrdersByHashesResponse();
        message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySpotOrdersByHashesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotOrdersByHashesResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotOrdersByHashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
            value: QuerySpotOrdersByHashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTraderSpotOrdersRequest() {
    return {
        marketId: "",
        subaccountId: ""
    };
}
export const QueryTraderSpotOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTraderSpotOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderSpotOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTraderSpotOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
            value: QueryTraderSpotOrdersRequest.encode(message).finish()
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
export const TrimmedSpotLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.fillable !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.fillable, 18).atomics);
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return TrimmedSpotLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TrimmedSpotLimitOrder.decode(message.value);
    },
    toProto(message) {
        return TrimmedSpotLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
            value: TrimmedSpotLimitOrder.encode(message).finish()
        };
    }
};
function createBaseQueryTraderSpotOrdersResponse() {
    return {
        orders: []
    };
}
export const QueryTraderSpotOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orders) {
            TrimmedSpotLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(TrimmedSpotLimitOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderSpotOrdersResponse();
        message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTraderSpotOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderSpotOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTraderSpotOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
            value: QueryTraderSpotOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotMidPriceAndTOBRequest() {
    return {
        marketId: ""
    };
}
export const QuerySpotMidPriceAndTOBRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySpotMidPriceAndTOBRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotMidPriceAndTOBRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotMidPriceAndTOBRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
            value: QuerySpotMidPriceAndTOBRequest.encode(message).finish()
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
export const QuerySpotMidPriceAndTOBResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.midPrice !== undefined) {
            writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
        }
        if (message.bestBuyPrice !== undefined) {
            writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
        }
        if (message.bestSellPrice !== undefined) {
            writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotMidPriceAndTOBResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.midPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.bestBuyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.bestSellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return QuerySpotMidPriceAndTOBResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySpotMidPriceAndTOBResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotMidPriceAndTOBResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
            value: QuerySpotMidPriceAndTOBResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMidPriceAndTOBRequest() {
    return {
        marketId: ""
    };
}
export const QueryDerivativeMidPriceAndTOBRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDerivativeMidPriceAndTOBRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMidPriceAndTOBRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMidPriceAndTOBRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
            value: QueryDerivativeMidPriceAndTOBRequest.encode(message).finish()
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
export const QueryDerivativeMidPriceAndTOBResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.midPrice !== undefined) {
            writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
        }
        if (message.bestBuyPrice !== undefined) {
            writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
        }
        if (message.bestSellPrice !== undefined) {
            writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.midPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.bestBuyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.bestSellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return QueryDerivativeMidPriceAndTOBResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMidPriceAndTOBResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMidPriceAndTOBResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
            value: QueryDerivativeMidPriceAndTOBResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeOrderbookRequest() {
    return {
        marketId: "",
        limit: BigInt(0)
    };
}
export const QueryDerivativeOrderbookRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(16).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDerivativeOrderbookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeOrderbookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeOrderbookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
            value: QueryDerivativeOrderbookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeOrderbookResponse() {
    return {
        buysPriceLevel: [],
        sellsPriceLevel: []
    };
}
export const QueryDerivativeOrderbookResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.buysPriceLevel) {
            PriceLevel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sellsPriceLevel) {
            PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrderbookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buysPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sellsPriceLevel.push(PriceLevel.decode(reader, reader.uint32()));
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
        message.buysPriceLevel = object.buysPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
        message.sellsPriceLevel = object.sellsPriceLevel?.map(e => PriceLevel.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeOrderbookResponse();
        message.buysPriceLevel = object.buys_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
        message.sellsPriceLevel = object.sells_price_level?.map(e => PriceLevel.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.buysPriceLevel) {
            obj.buys_price_level = message.buysPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.buys_price_level = message.buysPriceLevel;
        }
        if (message.sellsPriceLevel) {
            obj.sells_price_level = message.sellsPriceLevel.map(e => e ? PriceLevel.toAmino(e) : undefined);
        }
        else {
            obj.sells_price_level = message.sellsPriceLevel;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDerivativeOrderbookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeOrderbookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeOrderbookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
            value: QueryDerivativeOrderbookResponse.encode(message).finish()
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
export const QueryTraderSpotOrdersToCancelUpToAmountRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.baseAmount !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.baseAmount, 18).atomics);
        }
        if (message.quoteAmount !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.quoteAmount, 18).atomics);
        }
        if (message.strategy !== 0) {
            writer.uint32(40).int32(message.strategy);
        }
        if (message.referencePrice !== undefined) {
            writer.uint32(50).string(Decimal.fromUserInput(message.referencePrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.baseAmount = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.quoteAmount = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.strategy = reader.int32();
                    break;
                case 6:
                    message.referencePrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return QueryTraderSpotOrdersToCancelUpToAmountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderSpotOrdersToCancelUpToAmountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
            value: QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish()
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
export const QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.quoteAmount !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.quoteAmount, 18).atomics);
        }
        if (message.strategy !== 0) {
            writer.uint32(32).int32(message.strategy);
        }
        if (message.referencePrice !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.referencePrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.quoteAmount = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.strategy = reader.int32();
                    break;
                case 5:
                    message.referencePrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
            value: QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeOrdersRequest() {
    return {
        marketId: "",
        subaccountId: ""
    };
}
export const QueryTraderDerivativeOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTraderDerivativeOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderDerivativeOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTraderDerivativeOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
            value: QueryTraderDerivativeOrdersRequest.encode(message).finish()
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
export const TrimmedDerivativeLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.fillable !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.fillable, 18).atomics);
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return TrimmedDerivativeLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TrimmedDerivativeLimitOrder.decode(message.value);
    },
    toProto(message) {
        return TrimmedDerivativeLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
            value: TrimmedDerivativeLimitOrder.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeOrdersResponse() {
    return {
        orders: []
    };
}
export const QueryTraderDerivativeOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orders) {
            TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderDerivativeOrdersResponse();
        message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTraderDerivativeOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderDerivativeOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTraderDerivativeOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
            value: QueryTraderDerivativeOrdersResponse.encode(message).finish()
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
export const QueryDerivativeOrdersByHashesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDerivativeOrdersByHashesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeOrdersByHashesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeOrdersByHashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
            value: QueryDerivativeOrdersByHashesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeOrdersByHashesResponse() {
    return {
        orders: []
    };
}
export const QueryDerivativeOrdersByHashesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orders) {
            TrimmedDerivativeLimitOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(TrimmedDerivativeLimitOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeOrdersByHashesResponse();
        message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDerivativeOrdersByHashesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeOrdersByHashesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeOrdersByHashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
            value: QueryDerivativeOrdersByHashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketsRequest() {
    return {
        status: ""
    };
}
export const QueryDerivativeMarketsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDerivativeMarketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMarketsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMarketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
            value: QueryDerivativeMarketsRequest.encode(message).finish()
        };
    }
};
function createBasePriceLevel() {
    return {
        price: "",
        quantity: ""
    };
}
export const PriceLevel = {
    typeUrl: "/injective.exchange.v1beta1.PriceLevel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceLevel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return PriceLevel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceLevel.decode(message.value);
    },
    toProto(message) {
        return PriceLevel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PriceLevel",
            value: PriceLevel.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketState() {
    return {
        marketInfo: undefined,
        fundingInfo: undefined
    };
}
export const PerpetualMarketState = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketInfo !== undefined) {
            PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.fundingInfo !== undefined) {
            PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fundingInfo = PerpetualMarketFunding.decode(reader, reader.uint32());
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
        message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? PerpetualMarketInfo.fromPartial(object.marketInfo) : undefined;
        message.fundingInfo = object.fundingInfo !== undefined && object.fundingInfo !== null ? PerpetualMarketFunding.fromPartial(object.fundingInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePerpetualMarketState();
        if (object.market_info !== undefined && object.market_info !== null) {
            message.marketInfo = PerpetualMarketInfo.fromAmino(object.market_info);
        }
        if (object.funding_info !== undefined && object.funding_info !== null) {
            message.fundingInfo = PerpetualMarketFunding.fromAmino(object.funding_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_info = message.marketInfo ? PerpetualMarketInfo.toAmino(message.marketInfo) : undefined;
        obj.funding_info = message.fundingInfo ? PerpetualMarketFunding.toAmino(message.fundingInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PerpetualMarketState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PerpetualMarketState.decode(message.value);
    },
    toProto(message) {
        return PerpetualMarketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
            value: PerpetualMarketState.encode(message).finish()
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
export const FullDerivativeMarket = {
    typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.market !== undefined) {
            DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualInfo !== undefined) {
            PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.futuresInfo !== undefined) {
            ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.markPrice !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.markPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFullDerivativeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = DerivativeMarket.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.perpetualInfo = PerpetualMarketState.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.futuresInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.markPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
        message.perpetualInfo = object.perpetualInfo !== undefined && object.perpetualInfo !== null ? PerpetualMarketState.fromPartial(object.perpetualInfo) : undefined;
        message.futuresInfo = object.futuresInfo !== undefined && object.futuresInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo) : undefined;
        message.markPrice = object.markPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFullDerivativeMarket();
        if (object.market !== undefined && object.market !== null) {
            message.market = DerivativeMarket.fromAmino(object.market);
        }
        if (object.perpetual_info !== undefined && object.perpetual_info !== null) {
            message.perpetualInfo = PerpetualMarketState.fromAmino(object.perpetual_info);
        }
        if (object.futures_info !== undefined && object.futures_info !== null) {
            message.futuresInfo = ExpiryFuturesMarketInfo.fromAmino(object.futures_info);
        }
        if (object.mark_price !== undefined && object.mark_price !== null) {
            message.markPrice = object.mark_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
        obj.perpetual_info = message.perpetualInfo ? PerpetualMarketState.toAmino(message.perpetualInfo) : undefined;
        obj.futures_info = message.futuresInfo ? ExpiryFuturesMarketInfo.toAmino(message.futuresInfo) : undefined;
        obj.mark_price = message.markPrice === "" ? undefined : message.markPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return FullDerivativeMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FullDerivativeMarket.decode(message.value);
    },
    toProto(message) {
        return FullDerivativeMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
            value: FullDerivativeMarket.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketsResponse() {
    return {
        markets: []
    };
}
export const QueryDerivativeMarketsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.markets) {
            FullDerivativeMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(FullDerivativeMarket.decode(reader, reader.uint32()));
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
        message.markets = object.markets?.map(e => FullDerivativeMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketsResponse();
        message.markets = object.markets?.map(e => FullDerivativeMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? FullDerivativeMarket.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDerivativeMarketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMarketsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMarketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
            value: QueryDerivativeMarketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketRequest() {
    return {
        marketId: ""
    };
}
export const QueryDerivativeMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDerivativeMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMarketRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
            value: QueryDerivativeMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketResponse() {
    return {
        market: undefined
    };
}
export const QueryDerivativeMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.market !== undefined) {
            FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDerivativeMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = FullDerivativeMarket.decode(reader, reader.uint32());
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
        message.market = object.market !== undefined && object.market !== null ? FullDerivativeMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDerivativeMarketResponse();
        if (object.market !== undefined && object.market !== null) {
            message.market = FullDerivativeMarket.fromAmino(object.market);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? FullDerivativeMarket.toAmino(message.market) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDerivativeMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMarketResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
            value: QueryDerivativeMarketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketAddressRequest() {
    return {
        marketId: ""
    };
}
export const QueryDerivativeMarketAddressRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDerivativeMarketAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMarketAddressRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMarketAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
            value: QueryDerivativeMarketAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDerivativeMarketAddressResponse() {
    return {
        address: "",
        subaccountId: ""
    };
}
export const QueryDerivativeMarketAddressResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDerivativeMarketAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDerivativeMarketAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDerivativeMarketAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
            value: QueryDerivativeMarketAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountTradeNonceRequest() {
    return {
        subaccountId: ""
    };
}
export const QuerySubaccountTradeNonceRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountTradeNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountTradeNonceRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountTradeNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
            value: QuerySubaccountTradeNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionsRequest() {
    return {
        subaccountId: ""
    };
}
export const QuerySubaccountPositionsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountPositionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
            value: QuerySubaccountPositionsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionInMarketRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
export const QuerySubaccountPositionInMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountPositionInMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountPositionInMarketRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountPositionInMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
            value: QuerySubaccountPositionInMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountEffectivePositionInMarketRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
export const QuerySubaccountEffectivePositionInMarketRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountEffectivePositionInMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountEffectivePositionInMarketRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
            value: QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrderMetadataRequest() {
    return {
        subaccountId: ""
    };
}
export const QuerySubaccountOrderMetadataRequest = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountOrderMetadataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountOrderMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountOrderMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
            value: QuerySubaccountOrderMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionsResponse() {
    return {
        state: []
    };
}
export const QuerySubaccountPositionsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.state) {
            DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state.push(DerivativePosition.decode(reader, reader.uint32()));
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
        message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountPositionsResponse();
        message.state = object.state?.map(e => DerivativePosition.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
        }
        else {
            obj.state = message.state;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountPositionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
            value: QuerySubaccountPositionsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountPositionInMarketResponse() {
    return {
        state: undefined
    };
}
export const QuerySubaccountPositionInMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            Position.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = Position.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? Position.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountPositionInMarketResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = Position.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? Position.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountPositionInMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountPositionInMarketResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountPositionInMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
            value: QuerySubaccountPositionInMarketResponse.encode(message).finish()
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
export const EffectivePosition = {
    typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
    encode(message, writer = BinaryWriter.create()) {
        if (message.isLong === true) {
            writer.uint32(8).bool(message.isLong);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.entryPrice !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.entryPrice, 18).atomics);
        }
        if (message.effectiveMargin !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.effectiveMargin, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEffectivePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isLong = reader.bool();
                    break;
                case 2:
                    message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.entryPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.effectiveMargin = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return EffectivePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EffectivePosition.decode(message.value);
    },
    toProto(message) {
        return EffectivePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
            value: EffectivePosition.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountEffectivePositionInMarketResponse() {
    return {
        state: undefined
    };
}
export const QuerySubaccountEffectivePositionInMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = EffectivePosition.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? EffectivePosition.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = EffectivePosition.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? EffectivePosition.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountEffectivePositionInMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountEffectivePositionInMarketResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
            value: QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketInfoRequest() {
    return {
        marketId: ""
    };
}
export const QueryPerpetualMarketInfoRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPerpetualMarketInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPerpetualMarketInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPerpetualMarketInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
            value: QueryPerpetualMarketInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketInfoResponse() {
    return {
        info: PerpetualMarketInfo.fromPartial({})
    };
}
export const QueryPerpetualMarketInfoResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = PerpetualMarketInfo.decode(reader, reader.uint32());
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
        message.info = object.info !== undefined && object.info !== null ? PerpetualMarketInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPerpetualMarketInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = PerpetualMarketInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? PerpetualMarketInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPerpetualMarketInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPerpetualMarketInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPerpetualMarketInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
            value: QueryPerpetualMarketInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExpiryFuturesMarketInfoRequest() {
    return {
        marketId: ""
    };
}
export const QueryExpiryFuturesMarketInfoRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryExpiryFuturesMarketInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExpiryFuturesMarketInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExpiryFuturesMarketInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
            value: QueryExpiryFuturesMarketInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExpiryFuturesMarketInfoResponse() {
    return {
        info: ExpiryFuturesMarketInfo.fromPartial({})
    };
}
export const QueryExpiryFuturesMarketInfoResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
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
        message.info = object.info !== undefined && object.info !== null ? ExpiryFuturesMarketInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExpiryFuturesMarketInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = ExpiryFuturesMarketInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? ExpiryFuturesMarketInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExpiryFuturesMarketInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExpiryFuturesMarketInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExpiryFuturesMarketInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
            value: QueryExpiryFuturesMarketInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketFundingRequest() {
    return {
        marketId: ""
    };
}
export const QueryPerpetualMarketFundingRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPerpetualMarketFundingRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPerpetualMarketFundingRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPerpetualMarketFundingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
            value: QueryPerpetualMarketFundingRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPerpetualMarketFundingResponse() {
    return {
        state: PerpetualMarketFunding.fromPartial({})
    };
}
export const QueryPerpetualMarketFundingResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPerpetualMarketFundingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = PerpetualMarketFunding.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? PerpetualMarketFunding.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPerpetualMarketFundingResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = PerpetualMarketFunding.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? PerpetualMarketFunding.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPerpetualMarketFundingResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPerpetualMarketFundingResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPerpetualMarketFundingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
            value: QueryPerpetualMarketFundingResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountOrderMetadataResponse() {
    return {
        metadata: []
    };
}
export const QuerySubaccountOrderMetadataResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.metadata) {
            SubaccountOrderbookMetadataWithMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata.push(SubaccountOrderbookMetadataWithMarket.decode(reader, reader.uint32()));
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
        message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubaccountOrderMetadataResponse();
        message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map(e => e ? SubaccountOrderbookMetadataWithMarket.toAmino(e) : undefined);
        }
        else {
            obj.metadata = message.metadata;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubaccountOrderMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountOrderMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountOrderMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
            value: QuerySubaccountOrderMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySubaccountTradeNonceResponse() {
    return {
        nonce: 0
    };
}
export const QuerySubaccountTradeNonceResponse = {
    typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint32(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySubaccountTradeNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySubaccountTradeNonceResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubaccountTradeNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
            value: QuerySubaccountTradeNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
            value: QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
export const QueryModuleStateResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
            value: QueryModuleStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPositionsRequest() {
    return {};
}
export const QueryPositionsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPositionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPositionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPositionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
            value: QueryPositionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPositionsResponse() {
    return {
        state: []
    };
}
export const QueryPositionsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.state) {
            DerivativePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state.push(DerivativePosition.decode(reader, reader.uint32()));
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
        message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPositionsResponse();
        message.state = object.state?.map(e => DerivativePosition.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.state) {
            obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
        }
        else {
            obj.state = message.state;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPositionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPositionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPositionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
            value: QueryPositionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTradeRewardPointsRequest() {
    return {
        accounts: [],
        pendingPoolTimestamp: BigInt(0)
    };
}
export const QueryTradeRewardPointsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        if (message.pendingPoolTimestamp !== BigInt(0)) {
            writer.uint32(16).int64(message.pendingPoolTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTradeRewardPointsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTradeRewardPointsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTradeRewardPointsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
            value: QueryTradeRewardPointsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTradeRewardPointsResponse() {
    return {
        accountTradeRewardPoints: []
    };
}
export const QueryTradeRewardPointsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accountTradeRewardPoints) {
            writer.uint32(10).string(Decimal.fromUserInput(v, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardPointsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountTradeRewardPoints.push(Decimal.fromAtomics(reader.string(), 18).toString());
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
        return QueryTradeRewardPointsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTradeRewardPointsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTradeRewardPointsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
            value: QueryTradeRewardPointsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTradeRewardCampaignRequest() {
    return {};
}
export const QueryTradeRewardCampaignRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTradeRewardCampaignRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTradeRewardCampaignRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTradeRewardCampaignRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
            value: QueryTradeRewardCampaignRequest.encode(message).finish()
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
export const QueryTradeRewardCampaignResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tradingRewardCampaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalTradeRewardPoints !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.totalTradeRewardPoints, 18).atomics);
        }
        for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.pendingTotalTradeRewardPoints) {
            writer.uint32(42).string(Decimal.fromUserInput(v, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTradeRewardCampaignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.totalTradeRewardPoints = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.pendingTotalTradeRewardPoints.push(Decimal.fromAtomics(reader.string(), 18).toString());
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
        message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
        message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        message.totalTradeRewardPoints = object.totalTradeRewardPoints ?? "";
        message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        message.pendingTotalTradeRewardPoints = object.pendingTotalTradeRewardPoints?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTradeRewardCampaignResponse();
        if (object.trading_reward_campaign_info !== undefined && object.trading_reward_campaign_info !== null) {
            message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info);
        }
        message.tradingRewardPoolCampaignSchedule = object.trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        if (object.total_trade_reward_points !== undefined && object.total_trade_reward_points !== null) {
            message.totalTradeRewardPoints = object.total_trade_reward_points;
        }
        message.pendingTradingRewardPoolCampaignSchedule = object.pending_trading_reward_pool_campaign_schedule?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        message.pendingTotalTradeRewardPoints = object.pending_total_trade_reward_points?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
        if (message.tradingRewardPoolCampaignSchedule) {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule;
        }
        obj.total_trade_reward_points = message.totalTradeRewardPoints === "" ? undefined : message.totalTradeRewardPoints;
        if (message.pendingTradingRewardPoolCampaignSchedule) {
            obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
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
        return QueryTradeRewardCampaignResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTradeRewardCampaignResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTradeRewardCampaignResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
            value: QueryTradeRewardCampaignResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIsOptedOutOfRewardsRequest() {
    return {
        account: ""
    };
}
export const QueryIsOptedOutOfRewardsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIsOptedOutOfRewardsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIsOptedOutOfRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIsOptedOutOfRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
            value: QueryIsOptedOutOfRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIsOptedOutOfRewardsResponse() {
    return {
        isOptedOut: false
    };
}
export const QueryIsOptedOutOfRewardsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.isOptedOut === true) {
            writer.uint32(8).bool(message.isOptedOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIsOptedOutOfRewardsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIsOptedOutOfRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIsOptedOutOfRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
            value: QueryIsOptedOutOfRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOptedOutOfRewardsAccountsRequest() {
    return {};
}
export const QueryOptedOutOfRewardsAccountsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryOptedOutOfRewardsAccountsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOptedOutOfRewardsAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOptedOutOfRewardsAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
            value: QueryOptedOutOfRewardsAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOptedOutOfRewardsAccountsResponse() {
    return {
        accounts: []
    };
}
export const QueryOptedOutOfRewardsAccountsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryOptedOutOfRewardsAccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOptedOutOfRewardsAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOptedOutOfRewardsAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
            value: QueryOptedOutOfRewardsAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountAccountInfoRequest() {
    return {
        account: ""
    };
}
export const QueryFeeDiscountAccountInfoRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryFeeDiscountAccountInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeeDiscountAccountInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeeDiscountAccountInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
            value: QueryFeeDiscountAccountInfoRequest.encode(message).finish()
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
export const QueryFeeDiscountAccountInfoResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tierLevel !== BigInt(0)) {
            writer.uint32(8).uint64(message.tierLevel);
        }
        if (message.accountInfo !== undefined) {
            FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountTtl !== undefined) {
            FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tierLevel = reader.uint64();
                    break;
                case 2:
                    message.accountInfo = FeeDiscountTierInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
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
        message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? FeeDiscountTierInfo.fromPartial(object.accountInfo) : undefined;
        message.accountTtl = object.accountTtl !== undefined && object.accountTtl !== null ? FeeDiscountTierTTL.fromPartial(object.accountTtl) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeDiscountAccountInfoResponse();
        if (object.tier_level !== undefined && object.tier_level !== null) {
            message.tierLevel = BigInt(object.tier_level);
        }
        if (object.account_info !== undefined && object.account_info !== null) {
            message.accountInfo = FeeDiscountTierInfo.fromAmino(object.account_info);
        }
        if (object.account_ttl !== undefined && object.account_ttl !== null) {
            message.accountTtl = FeeDiscountTierTTL.fromAmino(object.account_ttl);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tier_level = message.tierLevel !== BigInt(0) ? (message.tierLevel?.toString)() : undefined;
        obj.account_info = message.accountInfo ? FeeDiscountTierInfo.toAmino(message.accountInfo) : undefined;
        obj.account_ttl = message.accountTtl ? FeeDiscountTierTTL.toAmino(message.accountTtl) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeDiscountAccountInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeeDiscountAccountInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeeDiscountAccountInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
            value: QueryFeeDiscountAccountInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountScheduleRequest() {
    return {};
}
export const QueryFeeDiscountScheduleRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryFeeDiscountScheduleRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeeDiscountScheduleRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeeDiscountScheduleRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
            value: QueryFeeDiscountScheduleRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountScheduleResponse() {
    return {
        feeDiscountSchedule: undefined
    };
}
export const QueryFeeDiscountScheduleResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feeDiscountSchedule !== undefined) {
            FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountScheduleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
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
        message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeDiscountScheduleResponse();
        if (object.fee_discount_schedule !== undefined && object.fee_discount_schedule !== null) {
            message.feeDiscountSchedule = FeeDiscountSchedule.fromAmino(object.fee_discount_schedule);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeDiscountScheduleResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeeDiscountScheduleResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeeDiscountScheduleResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
            value: QueryFeeDiscountScheduleResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceMismatchesRequest() {
    return {
        dustFactor: BigInt(0)
    };
}
export const QueryBalanceMismatchesRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.dustFactor !== BigInt(0)) {
            writer.uint32(8).int64(message.dustFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBalanceMismatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceMismatchesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceMismatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
            value: QueryBalanceMismatchesRequest.encode(message).finish()
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
export const BalanceMismatch = {
    typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.available !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.available, 18).atomics);
        }
        if (message.total !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
        }
        if (message.balanceHold !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
        }
        if (message.expectedTotal !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.expectedTotal, 18).atomics);
        }
        if (message.difference !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.difference, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.available = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.total = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.balanceHold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.expectedTotal = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.difference = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return BalanceMismatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BalanceMismatch.decode(message.value);
    },
    toProto(message) {
        return BalanceMismatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
            value: BalanceMismatch.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceMismatchesResponse() {
    return {
        balanceMismatches: []
    };
}
export const QueryBalanceMismatchesResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balanceMismatches) {
            BalanceMismatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceMismatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balanceMismatches.push(BalanceMismatch.decode(reader, reader.uint32()));
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
        message.balanceMismatches = object.balanceMismatches?.map(e => BalanceMismatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceMismatchesResponse();
        message.balanceMismatches = object.balance_mismatches?.map(e => BalanceMismatch.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balanceMismatches) {
            obj.balance_mismatches = message.balanceMismatches.map(e => e ? BalanceMismatch.toAmino(e) : undefined);
        }
        else {
            obj.balance_mismatches = message.balanceMismatches;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceMismatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceMismatchesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceMismatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
            value: QueryBalanceMismatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceWithBalanceHoldsRequest() {
    return {};
}
export const QueryBalanceWithBalanceHoldsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBalanceWithBalanceHoldsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceWithBalanceHoldsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceWithBalanceHoldsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
            value: QueryBalanceWithBalanceHoldsRequest.encode(message).finish()
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
export const BalanceWithMarginHold = {
    typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.available !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.available, 18).atomics);
        }
        if (message.total !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
        }
        if (message.balanceHold !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.available = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.total = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.balanceHold = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return BalanceWithMarginHold.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BalanceWithMarginHold.decode(message.value);
    },
    toProto(message) {
        return BalanceWithMarginHold.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
            value: BalanceWithMarginHold.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceWithBalanceHoldsResponse() {
    return {
        balanceWithBalanceHolds: []
    };
}
export const QueryBalanceWithBalanceHoldsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.balanceWithBalanceHolds) {
            BalanceWithMarginHold.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balanceWithBalanceHolds.push(BalanceWithMarginHold.decode(reader, reader.uint32()));
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
        message.balanceWithBalanceHolds = object.balanceWithBalanceHolds?.map(e => BalanceWithMarginHold.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceWithBalanceHoldsResponse();
        message.balanceWithBalanceHolds = object.balance_with_balance_holds?.map(e => BalanceWithMarginHold.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.balanceWithBalanceHolds) {
            obj.balance_with_balance_holds = message.balanceWithBalanceHolds.map(e => e ? BalanceWithMarginHold.toAmino(e) : undefined);
        }
        else {
            obj.balance_with_balance_holds = message.balanceWithBalanceHolds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceWithBalanceHoldsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalanceWithBalanceHoldsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceWithBalanceHoldsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
            value: QueryBalanceWithBalanceHoldsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountTierStatisticsRequest() {
    return {};
}
export const QueryFeeDiscountTierStatisticsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryFeeDiscountTierStatisticsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeeDiscountTierStatisticsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeeDiscountTierStatisticsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
            value: QueryFeeDiscountTierStatisticsRequest.encode(message).finish()
        };
    }
};
function createBaseTierStatistic() {
    return {
        tier: BigInt(0),
        count: BigInt(0)
    };
}
export const TierStatistic = {
    typeUrl: "/injective.exchange.v1beta1.TierStatistic",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tier !== BigInt(0)) {
            writer.uint32(8).uint64(message.tier);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return TierStatistic.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TierStatistic.decode(message.value);
    },
    toProto(message) {
        return TierStatistic.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TierStatistic",
            value: TierStatistic.encode(message).finish()
        };
    }
};
function createBaseQueryFeeDiscountTierStatisticsResponse() {
    return {
        statistics: []
    };
}
export const QueryFeeDiscountTierStatisticsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.statistics) {
            TierStatistic.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics.push(TierStatistic.decode(reader, reader.uint32()));
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
        message.statistics = object.statistics?.map(e => TierStatistic.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeDiscountTierStatisticsResponse();
        message.statistics = object.statistics?.map(e => TierStatistic.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map(e => e ? TierStatistic.toAmino(e) : undefined);
        }
        else {
            obj.statistics = message.statistics;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeDiscountTierStatisticsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeeDiscountTierStatisticsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeeDiscountTierStatisticsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
            value: QueryFeeDiscountTierStatisticsResponse.encode(message).finish()
        };
    }
};
function createBaseNinjaVaultInfosRequest() {
    return {};
}
export const NinjaVaultInfosRequest = {
    typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return NinjaVaultInfosRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NinjaVaultInfosRequest.decode(message.value);
    },
    toProto(message) {
        return NinjaVaultInfosRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosRequest",
            value: NinjaVaultInfosRequest.encode(message).finish()
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
export const NinjaVaultInfosResponse = {
    typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return NinjaVaultInfosResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NinjaVaultInfosResponse.decode(message.value);
    },
    toProto(message) {
        return NinjaVaultInfosResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.NinjaVaultInfosResponse",
            value: NinjaVaultInfosResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMarketIDFromVaultRequest() {
    return {
        vaultSubaccountId: ""
    };
}
export const QueryMarketIDFromVaultRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.vaultSubaccountId !== "") {
            writer.uint32(10).string(message.vaultSubaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryMarketIDFromVaultRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMarketIDFromVaultRequest.decode(message.value);
    },
    toProto(message) {
        return QueryMarketIDFromVaultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
            value: QueryMarketIDFromVaultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMarketIDFromVaultResponse() {
    return {
        marketId: ""
    };
}
export const QueryMarketIDFromVaultResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryMarketIDFromVaultResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMarketIDFromVaultResponse.decode(message.value);
    },
    toProto(message) {
        return QueryMarketIDFromVaultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
            value: QueryMarketIDFromVaultResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalTradeRecordsRequest() {
    return {
        marketId: ""
    };
}
export const QueryHistoricalTradeRecordsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryHistoricalTradeRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHistoricalTradeRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryHistoricalTradeRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
            value: QueryHistoricalTradeRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalTradeRecordsResponse() {
    return {
        tradeRecords: []
    };
}
export const QueryHistoricalTradeRecordsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tradeRecords) {
            TradeRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
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
        message.tradeRecords = object.tradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHistoricalTradeRecordsResponse();
        message.tradeRecords = object.trade_records?.map(e => TradeRecords.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tradeRecords) {
            obj.trade_records = message.tradeRecords.map(e => e ? TradeRecords.toAmino(e) : undefined);
        }
        else {
            obj.trade_records = message.tradeRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryHistoricalTradeRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHistoricalTradeRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryHistoricalTradeRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
            value: QueryHistoricalTradeRecordsResponse.encode(message).finish()
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
export const TradeHistoryOptions = {
    typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return TradeHistoryOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradeHistoryOptions.decode(message.value);
    },
    toProto(message) {
        return TradeHistoryOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
            value: TradeHistoryOptions.encode(message).finish()
        };
    }
};
function createBaseQueryMarketVolatilityRequest() {
    return {
        marketId: "",
        tradeHistoryOptions: undefined
    };
}
export const QueryMarketVolatilityRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.tradeHistoryOptions !== undefined) {
            TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketVolatilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.tradeHistoryOptions = TradeHistoryOptions.decode(reader, reader.uint32());
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
        message.tradeHistoryOptions = object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null ? TradeHistoryOptions.fromPartial(object.tradeHistoryOptions) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketVolatilityRequest();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.trade_history_options !== undefined && object.trade_history_options !== null) {
            message.tradeHistoryOptions = TradeHistoryOptions.fromAmino(object.trade_history_options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.trade_history_options = message.tradeHistoryOptions ? TradeHistoryOptions.toAmino(message.tradeHistoryOptions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMarketVolatilityRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMarketVolatilityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryMarketVolatilityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
            value: QueryMarketVolatilityRequest.encode(message).finish()
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
export const QueryMarketVolatilityResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.volatility, 18).atomics);
        }
        if (message.historyMetadata !== undefined) {
            MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            TradeRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketVolatilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volatility = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rawHistory.push(TradeRecord.decode(reader, reader.uint32()));
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
        message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
        message.rawHistory = object.rawHistory?.map(e => TradeRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketVolatilityResponse();
        if (object.volatility !== undefined && object.volatility !== null) {
            message.volatility = object.volatility;
        }
        if (object.history_metadata !== undefined && object.history_metadata !== null) {
            message.historyMetadata = MetadataStatistics.fromAmino(object.history_metadata);
        }
        message.rawHistory = object.raw_history?.map(e => TradeRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.volatility = message.volatility === "" ? undefined : message.volatility;
        obj.history_metadata = message.historyMetadata ? MetadataStatistics.toAmino(message.historyMetadata) : undefined;
        if (message.rawHistory) {
            obj.raw_history = message.rawHistory.map(e => e ? TradeRecord.toAmino(e) : undefined);
        }
        else {
            obj.raw_history = message.rawHistory;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMarketVolatilityResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMarketVolatilityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryMarketVolatilityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
            value: QueryMarketVolatilityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBinaryMarketsRequest() {
    return {
        status: ""
    };
}
export const QueryBinaryMarketsRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBinaryMarketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBinaryMarketsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBinaryMarketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
            value: QueryBinaryMarketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBinaryMarketsResponse() {
    return {
        markets: []
    };
}
export const QueryBinaryMarketsResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.markets) {
            BinaryOptionsMarket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBinaryMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
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
        message.markets = object.markets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBinaryMarketsResponse();
        message.markets = object.markets?.map(e => BinaryOptionsMarket.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? BinaryOptionsMarket.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBinaryMarketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBinaryMarketsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBinaryMarketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
            value: QueryBinaryMarketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest() {
    return {
        subaccountId: "",
        marketId: ""
    };
}
export const QueryTraderDerivativeConditionalOrdersRequest = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTraderDerivativeConditionalOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderDerivativeConditionalOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
            value: QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish()
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
export const TrimmedDerivativeConditionalOrder = {
    typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrimmedDerivativeConditionalOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return TrimmedDerivativeConditionalOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TrimmedDerivativeConditionalOrder.decode(message.value);
    },
    toProto(message) {
        return TrimmedDerivativeConditionalOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
            value: TrimmedDerivativeConditionalOrder.encode(message).finish()
        };
    }
};
function createBaseQueryTraderDerivativeConditionalOrdersResponse() {
    return {
        orders: []
    };
}
export const QueryTraderDerivativeConditionalOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orders) {
            TrimmedDerivativeConditionalOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(TrimmedDerivativeConditionalOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
        message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? TrimmedDerivativeConditionalOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTraderDerivativeConditionalOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTraderDerivativeConditionalOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
            value: QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish()
        };
    }
};
