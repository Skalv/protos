//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { SpotOrder, DerivativeOrder, TradingRewardCampaignInfo, CampaignRewardPool, FeeDiscountSchedule } from "./exchange";
import { CommunityPoolSpendProposal } from "../../../cosmos/distribution/v1beta1/distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export var ExchangeType;
(function (ExchangeType) {
    ExchangeType[ExchangeType["EXCHANGE_UNSPECIFIED"] = 0] = "EXCHANGE_UNSPECIFIED";
    ExchangeType[ExchangeType["SPOT"] = 1] = "SPOT";
    ExchangeType[ExchangeType["DERIVATIVES"] = 2] = "DERIVATIVES";
    ExchangeType[ExchangeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExchangeType || (ExchangeType = {}));
export const ExchangeTypeSDKType = ExchangeType;
export const ExchangeTypeAmino = ExchangeType;
export function exchangeTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "EXCHANGE_UNSPECIFIED":
            return ExchangeType.EXCHANGE_UNSPECIFIED;
        case 1:
        case "SPOT":
            return ExchangeType.SPOT;
        case 2:
        case "DERIVATIVES":
            return ExchangeType.DERIVATIVES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExchangeType.UNRECOGNIZED;
    }
}
export function exchangeTypeToJSON(object) {
    switch (object) {
        case ExchangeType.EXCHANGE_UNSPECIFIED:
            return "EXCHANGE_UNSPECIFIED";
        case ExchangeType.SPOT:
            return "SPOT";
        case ExchangeType.DERIVATIVES:
            return "DERIVATIVES";
        case ExchangeType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgDeposit() {
    return {
        sender: "",
        subaccountId: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgDeposit = {
    typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.sender = object.sender ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeposit();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
            value: MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
export const MsgDepositResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
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
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse",
            value: MsgDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdraw() {
    return {
        sender: "",
        subaccountId: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgWithdraw = {
    typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdraw();
        message.sender = object.sender ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdraw();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdraw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdraw.decode(message.value);
    },
    toProto(message) {
        return MsgWithdraw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
            value: MsgWithdraw.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawResponse() {
    return {};
}
export const MsgWithdrawResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawResponse();
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
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse",
            value: MsgWithdrawResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotLimitOrder() {
    return {
        sender: "",
        order: SpotOrder.fromPartial({})
    };
}
export const MsgCreateSpotLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = SpotOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateSpotLimitOrder();
        message.sender = object.sender ?? "";
        message.order = object.order !== undefined && object.order !== null ? SpotOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSpotLimitOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = SpotOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? SpotOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateSpotLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateSpotLimitOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCreateSpotLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
            value: MsgCreateSpotLimitOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotLimitOrderResponse() {
    return {
        orderHash: ""
    };
}
export const MsgCreateSpotLimitOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateSpotLimitOrderResponse();
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSpotLimitOrderResponse();
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateSpotLimitOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateSpotLimitOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateSpotLimitOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse",
            value: MsgCreateSpotLimitOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateSpotLimitOrders() {
    return {
        sender: "",
        orders: []
    };
}
export const MsgBatchCreateSpotLimitOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            SpotOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.orders.push(SpotOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        message.sender = object.sender ?? "";
        message.orders = object.orders?.map(e => SpotOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.orders = object.orders?.map(e => SpotOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? SpotOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCreateSpotLimitOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCreateSpotLimitOrders.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCreateSpotLimitOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
            value: MsgBatchCreateSpotLimitOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateSpotLimitOrdersResponse() {
    return {
        orderHashes: []
    };
}
export const MsgBatchCreateSpotLimitOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();
        message.orderHashes = object.orderHashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCreateSpotLimitOrdersResponse();
        message.orderHashes = object.order_hashes?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orderHashes) {
            obj.order_hashes = message.orderHashes.map(e => e);
        }
        else {
            obj.order_hashes = message.orderHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCreateSpotLimitOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCreateSpotLimitOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCreateSpotLimitOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse",
            value: MsgBatchCreateSpotLimitOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgInstantSpotMarketLaunch() {
    return {
        sender: "",
        ticker: "",
        baseDenom: "",
        quoteDenom: "",
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const MsgInstantSpotMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.baseDenom !== "") {
            writer.uint32(26).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(34).string(message.quoteDenom);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantSpotMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.baseDenom = reader.string();
                    break;
                case 4:
                    message.quoteDenom = reader.string();
                    break;
                case 5:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantSpotMarketLaunch();
        message.sender = object.sender ?? "";
        message.ticker = object.ticker ?? "";
        message.baseDenom = object.baseDenom ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantSpotMarketLaunch();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantSpotMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantSpotMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return MsgInstantSpotMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
            value: MsgInstantSpotMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantSpotMarketLaunchResponse() {
    return {};
}
export const MsgInstantSpotMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantSpotMarketLaunchResponse();
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
        const message = createBaseMsgInstantSpotMarketLaunchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgInstantSpotMarketLaunchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantSpotMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantSpotMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInstantSpotMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse",
            value: MsgInstantSpotMarketLaunchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgInstantPerpetualMarketLaunch() {
    return {
        sender: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleScaleFactor: 0,
        oracleType: 0,
        makerFeeRate: "",
        takerFeeRate: "",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const MsgInstantPerpetualMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(34).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(42).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(48).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(56).int32(message.oracleType);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(82).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(90).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantPerpetualMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.quoteDenom = reader.string();
                    break;
                case 4:
                    message.oracleBase = reader.string();
                    break;
                case 5:
                    message.oracleQuote = reader.string();
                    break;
                case 6:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 7:
                    message.oracleType = reader.int32();
                    break;
                case 8:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.initialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.maintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantPerpetualMarketLaunch();
        message.sender = object.sender ?? "";
        message.ticker = object.ticker ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.oracleType = object.oracleType ?? 0;
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.initialMarginRatio = object.initialMarginRatio ?? "";
        message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantPerpetualMarketLaunch();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.oracle_base !== undefined && object.oracle_base !== null) {
            message.oracleBase = object.oracle_base;
        }
        if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
            message.oracleQuote = object.oracle_quote;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
            message.initialMarginRatio = object.initial_margin_ratio;
        }
        if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
            message.maintenanceMarginRatio = object.maintenance_margin_ratio;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : message.initialMarginRatio;
        obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : message.maintenanceMarginRatio;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantPerpetualMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantPerpetualMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return MsgInstantPerpetualMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
            value: MsgInstantPerpetualMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantPerpetualMarketLaunchResponse() {
    return {};
}
export const MsgInstantPerpetualMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
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
        const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgInstantPerpetualMarketLaunchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantPerpetualMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantPerpetualMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInstantPerpetualMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse",
            value: MsgInstantPerpetualMarketLaunchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgInstantBinaryOptionsMarketLaunch() {
    return {
        sender: "",
        ticker: "",
        oracleSymbol: "",
        oracleProvider: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        makerFeeRate: "",
        takerFeeRate: "",
        expirationTimestamp: BigInt(0),
        settlementTimestamp: BigInt(0),
        admin: "",
        quoteDenom: "",
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const MsgInstantBinaryOptionsMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.oracleSymbol !== "") {
            writer.uint32(26).string(message.oracleSymbol);
        }
        if (message.oracleProvider !== "") {
            writer.uint32(34).string(message.oracleProvider);
        }
        if (message.oracleType !== 0) {
            writer.uint32(40).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(48).uint32(message.oracleScaleFactor);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.expirationTimestamp !== BigInt(0)) {
            writer.uint32(72).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== BigInt(0)) {
            writer.uint32(80).int64(message.settlementTimestamp);
        }
        if (message.admin !== "") {
            writer.uint32(90).string(message.admin);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(98).string(message.quoteDenom);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantBinaryOptionsMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.oracleSymbol = reader.string();
                    break;
                case 4:
                    message.oracleProvider = reader.string();
                    break;
                case 5:
                    message.oracleType = reader.int32();
                    break;
                case 6:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 7:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.expirationTimestamp = reader.int64();
                    break;
                case 10:
                    message.settlementTimestamp = reader.int64();
                    break;
                case 11:
                    message.admin = reader.string();
                    break;
                case 12:
                    message.quoteDenom = reader.string();
                    break;
                case 13:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantBinaryOptionsMarketLaunch();
        message.sender = object.sender ?? "";
        message.ticker = object.ticker ?? "";
        message.oracleSymbol = object.oracleSymbol ?? "";
        message.oracleProvider = object.oracleProvider ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
        message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantBinaryOptionsMarketLaunch();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.oracle_symbol !== undefined && object.oracle_symbol !== null) {
            message.oracleSymbol = object.oracle_symbol;
        }
        if (object.oracle_provider !== undefined && object.oracle_provider !== null) {
            message.oracleProvider = object.oracle_provider;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
            message.expirationTimestamp = BigInt(object.expiration_timestamp);
        }
        if (object.settlement_timestamp !== undefined && object.settlement_timestamp !== null) {
            message.settlementTimestamp = BigInt(object.settlement_timestamp);
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.oracle_symbol = message.oracleSymbol === "" ? undefined : message.oracleSymbol;
        obj.oracle_provider = message.oracleProvider === "" ? undefined : message.oracleProvider;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? (message.expirationTimestamp?.toString)() : undefined;
        obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? (message.settlementTimestamp?.toString)() : undefined;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantBinaryOptionsMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantBinaryOptionsMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return MsgInstantBinaryOptionsMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
            value: MsgInstantBinaryOptionsMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantBinaryOptionsMarketLaunchResponse() {
    return {};
}
export const MsgInstantBinaryOptionsMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
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
        const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgInstantBinaryOptionsMarketLaunchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantBinaryOptionsMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantBinaryOptionsMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInstantBinaryOptionsMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse",
            value: MsgInstantBinaryOptionsMarketLaunchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgInstantExpiryFuturesMarketLaunch() {
    return {
        sender: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        expiry: BigInt(0),
        makerFeeRate: "",
        takerFeeRate: "",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const MsgInstantExpiryFuturesMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(34).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(42).string(message.oracleQuote);
        }
        if (message.oracleType !== 0) {
            writer.uint32(48).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.expiry !== BigInt(0)) {
            writer.uint32(64).int64(message.expiry);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(82).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(90).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantExpiryFuturesMarketLaunch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.quoteDenom = reader.string();
                    break;
                case 4:
                    message.oracleBase = reader.string();
                    break;
                case 5:
                    message.oracleQuote = reader.string();
                    break;
                case 6:
                    message.oracleType = reader.int32();
                    break;
                case 7:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 8:
                    message.expiry = reader.int64();
                    break;
                case 9:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.initialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.maintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInstantExpiryFuturesMarketLaunch();
        message.sender = object.sender ?? "";
        message.ticker = object.ticker ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.initialMarginRatio = object.initialMarginRatio ?? "";
        message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInstantExpiryFuturesMarketLaunch();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.oracle_base !== undefined && object.oracle_base !== null) {
            message.oracleBase = object.oracle_base;
        }
        if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
            message.oracleQuote = object.oracle_quote;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = BigInt(object.expiry);
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
            message.initialMarginRatio = object.initial_margin_ratio;
        }
        if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
            message.maintenanceMarginRatio = object.maintenance_margin_ratio;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.expiry = message.expiry !== BigInt(0) ? (message.expiry?.toString)() : undefined;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : message.initialMarginRatio;
        obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : message.maintenanceMarginRatio;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantExpiryFuturesMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantExpiryFuturesMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return MsgInstantExpiryFuturesMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
            value: MsgInstantExpiryFuturesMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantExpiryFuturesMarketLaunchResponse() {
    return {};
}
export const MsgInstantExpiryFuturesMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
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
        const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgInstantExpiryFuturesMarketLaunchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInstantExpiryFuturesMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInstantExpiryFuturesMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInstantExpiryFuturesMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse",
            value: MsgInstantExpiryFuturesMarketLaunchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotMarketOrder() {
    return {
        sender: "",
        order: SpotOrder.fromPartial({})
    };
}
export const MsgCreateSpotMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = SpotOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateSpotMarketOrder();
        message.sender = object.sender ?? "";
        message.order = object.order !== undefined && object.order !== null ? SpotOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSpotMarketOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = SpotOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? SpotOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateSpotMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateSpotMarketOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCreateSpotMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
            value: MsgCreateSpotMarketOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotMarketOrderResponse() {
    return {
        orderHash: ""
    };
}
export const MsgCreateSpotMarketOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotMarketOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateSpotMarketOrderResponse();
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSpotMarketOrderResponse();
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateSpotMarketOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateSpotMarketOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateSpotMarketOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse",
            value: MsgCreateSpotMarketOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeLimitOrder() {
    return {
        sender: "",
        order: DerivativeOrder.fromPartial({})
    };
}
export const MsgCreateDerivativeLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDerivativeLimitOrder();
        message.sender = object.sender ?? "";
        message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDerivativeLimitOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDerivativeLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDerivativeLimitOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDerivativeLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
            value: MsgCreateDerivativeLimitOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeLimitOrderResponse() {
    return {
        orderHash: ""
    };
}
export const MsgCreateDerivativeLimitOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateDerivativeLimitOrderResponse();
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDerivativeLimitOrderResponse();
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDerivativeLimitOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDerivativeLimitOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDerivativeLimitOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse",
            value: MsgCreateDerivativeLimitOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsLimitOrder() {
    return {
        sender: "",
        order: DerivativeOrder.fromPartial({})
    };
}
export const MsgCreateBinaryOptionsLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        message.sender = object.sender ?? "";
        message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBinaryOptionsLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBinaryOptionsLimitOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBinaryOptionsLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
            value: MsgCreateBinaryOptionsLimitOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsLimitOrderResponse() {
    return {
        orderHash: ""
    };
}
export const MsgCreateBinaryOptionsLimitOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBinaryOptionsLimitOrderResponse();
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBinaryOptionsLimitOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBinaryOptionsLimitOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBinaryOptionsLimitOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse",
            value: MsgCreateBinaryOptionsLimitOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateDerivativeLimitOrders() {
    return {
        sender: "",
        orders: []
    };
}
export const MsgBatchCreateDerivativeLimitOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            DerivativeOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.orders.push(DerivativeOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        message.sender = object.sender ?? "";
        message.orders = object.orders?.map(e => DerivativeOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.orders = object.orders?.map(e => DerivativeOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? DerivativeOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCreateDerivativeLimitOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCreateDerivativeLimitOrders.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCreateDerivativeLimitOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
            value: MsgBatchCreateDerivativeLimitOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateDerivativeLimitOrdersResponse() {
    return {
        orderHashes: []
    };
}
export const MsgBatchCreateDerivativeLimitOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();
        message.orderHashes = object.orderHashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCreateDerivativeLimitOrdersResponse();
        message.orderHashes = object.order_hashes?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.orderHashes) {
            obj.order_hashes = message.orderHashes.map(e => e);
        }
        else {
            obj.order_hashes = message.orderHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCreateDerivativeLimitOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCreateDerivativeLimitOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCreateDerivativeLimitOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse",
            value: MsgBatchCreateDerivativeLimitOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSpotOrder() {
    return {
        sender: "",
        marketId: "",
        subaccountId: "",
        orderHash: ""
    };
}
export const MsgCancelSpotOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(34).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSpotOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
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
        const message = createBaseMsgCancelSpotOrder();
        message.sender = object.sender ?? "";
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelSpotOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelSpotOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelSpotOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCancelSpotOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
            value: MsgCancelSpotOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSpotOrderResponse() {
    return {};
}
export const MsgCancelSpotOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSpotOrderResponse();
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
        const message = createBaseMsgCancelSpotOrderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelSpotOrderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelSpotOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelSpotOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelSpotOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse",
            value: MsgCancelSpotOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelSpotOrders() {
    return {
        sender: "",
        data: []
    };
}
export const MsgBatchCancelSpotOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelSpotOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.data.push(OrderData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchCancelSpotOrders();
        message.sender = object.sender ?? "";
        message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelSpotOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.data = object.data?.map(e => OrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.data) {
            obj.data = message.data.map(e => e ? OrderData.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCancelSpotOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCancelSpotOrders.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCancelSpotOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
            value: MsgBatchCancelSpotOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelSpotOrdersResponse() {
    return {
        success: []
    };
}
export const MsgBatchCancelSpotOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelSpotOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.success.push(reader.bool());
                        }
                    }
                    else {
                        message.success.push(reader.bool());
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
        const message = createBaseMsgBatchCancelSpotOrdersResponse();
        message.success = object.success?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelSpotOrdersResponse();
        message.success = object.success?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.success) {
            obj.success = message.success.map(e => e);
        }
        else {
            obj.success = message.success;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCancelSpotOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCancelSpotOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCancelSpotOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse",
            value: MsgBatchCancelSpotOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelBinaryOptionsOrders() {
    return {
        sender: "",
        data: []
    };
}
export const MsgBatchCancelBinaryOptionsOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.data.push(OrderData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        message.sender = object.sender ?? "";
        message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.data = object.data?.map(e => OrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.data) {
            obj.data = message.data.map(e => e ? OrderData.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCancelBinaryOptionsOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCancelBinaryOptionsOrders.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCancelBinaryOptionsOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
            value: MsgBatchCancelBinaryOptionsOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelBinaryOptionsOrdersResponse() {
    return {
        success: []
    };
}
export const MsgBatchCancelBinaryOptionsOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.success.push(reader.bool());
                        }
                    }
                    else {
                        message.success.push(reader.bool());
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
        const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();
        message.success = object.success?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelBinaryOptionsOrdersResponse();
        message.success = object.success?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.success) {
            obj.success = message.success.map(e => e);
        }
        else {
            obj.success = message.success;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCancelBinaryOptionsOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCancelBinaryOptionsOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCancelBinaryOptionsOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse",
            value: MsgBatchCancelBinaryOptionsOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchUpdateOrders() {
    return {
        sender: "",
        subaccountId: "",
        spotMarketIdsToCancelAll: [],
        derivativeMarketIdsToCancelAll: [],
        spotOrdersToCancel: [],
        derivativeOrdersToCancel: [],
        spotOrdersToCreate: [],
        derivativeOrdersToCreate: [],
        binaryOptionsOrdersToCancel: [],
        binaryOptionsMarketIdsToCancelAll: [],
        binaryOptionsOrdersToCreate: []
    };
}
export const MsgBatchUpdateOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        for (const v of message.spotMarketIdsToCancelAll) {
            writer.uint32(26).string(v);
        }
        for (const v of message.derivativeMarketIdsToCancelAll) {
            writer.uint32(34).string(v);
        }
        for (const v of message.spotOrdersToCancel) {
            OrderData.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCancel) {
            OrderData.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.spotOrdersToCreate) {
            SpotOrder.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCreate) {
            DerivativeOrder.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.binaryOptionsOrdersToCancel) {
            OrderData.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketIdsToCancelAll) {
            writer.uint32(82).string(v);
        }
        for (const v of message.binaryOptionsOrdersToCreate) {
            DerivativeOrder.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchUpdateOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.spotMarketIdsToCancelAll.push(reader.string());
                    break;
                case 4:
                    message.derivativeMarketIdsToCancelAll.push(reader.string());
                    break;
                case 5:
                    message.spotOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.derivativeOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.spotOrdersToCreate.push(SpotOrder.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.derivativeOrdersToCreate.push(DerivativeOrder.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.binaryOptionsOrdersToCancel.push(OrderData.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.binaryOptionsMarketIdsToCancelAll.push(reader.string());
                    break;
                case 11:
                    message.binaryOptionsOrdersToCreate.push(DerivativeOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchUpdateOrders();
        message.sender = object.sender ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.spotMarketIdsToCancelAll = object.spotMarketIdsToCancelAll?.map(e => e) || [];
        message.derivativeMarketIdsToCancelAll = object.derivativeMarketIdsToCancelAll?.map(e => e) || [];
        message.spotOrdersToCancel = object.spotOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
        message.derivativeOrdersToCancel = object.derivativeOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
        message.spotOrdersToCreate = object.spotOrdersToCreate?.map(e => SpotOrder.fromPartial(e)) || [];
        message.derivativeOrdersToCreate = object.derivativeOrdersToCreate?.map(e => DerivativeOrder.fromPartial(e)) || [];
        message.binaryOptionsOrdersToCancel = object.binaryOptionsOrdersToCancel?.map(e => OrderData.fromPartial(e)) || [];
        message.binaryOptionsMarketIdsToCancelAll = object.binaryOptionsMarketIdsToCancelAll?.map(e => e) || [];
        message.binaryOptionsOrdersToCreate = object.binaryOptionsOrdersToCreate?.map(e => DerivativeOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchUpdateOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.spotMarketIdsToCancelAll = object.spot_market_ids_to_cancel_all?.map(e => e) || [];
        message.derivativeMarketIdsToCancelAll = object.derivative_market_ids_to_cancel_all?.map(e => e) || [];
        message.spotOrdersToCancel = object.spot_orders_to_cancel?.map(e => OrderData.fromAmino(e)) || [];
        message.derivativeOrdersToCancel = object.derivative_orders_to_cancel?.map(e => OrderData.fromAmino(e)) || [];
        message.spotOrdersToCreate = object.spot_orders_to_create?.map(e => SpotOrder.fromAmino(e)) || [];
        message.derivativeOrdersToCreate = object.derivative_orders_to_create?.map(e => DerivativeOrder.fromAmino(e)) || [];
        message.binaryOptionsOrdersToCancel = object.binary_options_orders_to_cancel?.map(e => OrderData.fromAmino(e)) || [];
        message.binaryOptionsMarketIdsToCancelAll = object.binary_options_market_ids_to_cancel_all?.map(e => e) || [];
        message.binaryOptionsOrdersToCreate = object.binary_options_orders_to_create?.map(e => DerivativeOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.spotMarketIdsToCancelAll) {
            obj.spot_market_ids_to_cancel_all = message.spotMarketIdsToCancelAll.map(e => e);
        }
        else {
            obj.spot_market_ids_to_cancel_all = message.spotMarketIdsToCancelAll;
        }
        if (message.derivativeMarketIdsToCancelAll) {
            obj.derivative_market_ids_to_cancel_all = message.derivativeMarketIdsToCancelAll.map(e => e);
        }
        else {
            obj.derivative_market_ids_to_cancel_all = message.derivativeMarketIdsToCancelAll;
        }
        if (message.spotOrdersToCancel) {
            obj.spot_orders_to_cancel = message.spotOrdersToCancel.map(e => e ? OrderData.toAmino(e) : undefined);
        }
        else {
            obj.spot_orders_to_cancel = message.spotOrdersToCancel;
        }
        if (message.derivativeOrdersToCancel) {
            obj.derivative_orders_to_cancel = message.derivativeOrdersToCancel.map(e => e ? OrderData.toAmino(e) : undefined);
        }
        else {
            obj.derivative_orders_to_cancel = message.derivativeOrdersToCancel;
        }
        if (message.spotOrdersToCreate) {
            obj.spot_orders_to_create = message.spotOrdersToCreate.map(e => e ? SpotOrder.toAmino(e) : undefined);
        }
        else {
            obj.spot_orders_to_create = message.spotOrdersToCreate;
        }
        if (message.derivativeOrdersToCreate) {
            obj.derivative_orders_to_create = message.derivativeOrdersToCreate.map(e => e ? DerivativeOrder.toAmino(e) : undefined);
        }
        else {
            obj.derivative_orders_to_create = message.derivativeOrdersToCreate;
        }
        if (message.binaryOptionsOrdersToCancel) {
            obj.binary_options_orders_to_cancel = message.binaryOptionsOrdersToCancel.map(e => e ? OrderData.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_orders_to_cancel = message.binaryOptionsOrdersToCancel;
        }
        if (message.binaryOptionsMarketIdsToCancelAll) {
            obj.binary_options_market_ids_to_cancel_all = message.binaryOptionsMarketIdsToCancelAll.map(e => e);
        }
        else {
            obj.binary_options_market_ids_to_cancel_all = message.binaryOptionsMarketIdsToCancelAll;
        }
        if (message.binaryOptionsOrdersToCreate) {
            obj.binary_options_orders_to_create = message.binaryOptionsOrdersToCreate.map(e => e ? DerivativeOrder.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_orders_to_create = message.binaryOptionsOrdersToCreate;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchUpdateOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchUpdateOrders.decode(message.value);
    },
    toProto(message) {
        return MsgBatchUpdateOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
            value: MsgBatchUpdateOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchUpdateOrdersResponse() {
    return {
        spotCancelSuccess: [],
        derivativeCancelSuccess: [],
        spotOrderHashes: [],
        derivativeOrderHashes: [],
        binaryOptionsCancelSuccess: [],
        binaryOptionsOrderHashes: []
    };
}
export const MsgBatchUpdateOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.spotCancelSuccess) {
            writer.bool(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.derivativeCancelSuccess) {
            writer.bool(v);
        }
        writer.ldelim();
        for (const v of message.spotOrderHashes) {
            writer.uint32(26).string(v);
        }
        for (const v of message.derivativeOrderHashes) {
            writer.uint32(34).string(v);
        }
        writer.uint32(42).fork();
        for (const v of message.binaryOptionsCancelSuccess) {
            writer.bool(v);
        }
        writer.ldelim();
        for (const v of message.binaryOptionsOrderHashes) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchUpdateOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.spotCancelSuccess.push(reader.bool());
                        }
                    }
                    else {
                        message.spotCancelSuccess.push(reader.bool());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.derivativeCancelSuccess.push(reader.bool());
                        }
                    }
                    else {
                        message.derivativeCancelSuccess.push(reader.bool());
                    }
                    break;
                case 3:
                    message.spotOrderHashes.push(reader.string());
                    break;
                case 4:
                    message.derivativeOrderHashes.push(reader.string());
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.binaryOptionsCancelSuccess.push(reader.bool());
                        }
                    }
                    else {
                        message.binaryOptionsCancelSuccess.push(reader.bool());
                    }
                    break;
                case 6:
                    message.binaryOptionsOrderHashes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchUpdateOrdersResponse();
        message.spotCancelSuccess = object.spotCancelSuccess?.map(e => e) || [];
        message.derivativeCancelSuccess = object.derivativeCancelSuccess?.map(e => e) || [];
        message.spotOrderHashes = object.spotOrderHashes?.map(e => e) || [];
        message.derivativeOrderHashes = object.derivativeOrderHashes?.map(e => e) || [];
        message.binaryOptionsCancelSuccess = object.binaryOptionsCancelSuccess?.map(e => e) || [];
        message.binaryOptionsOrderHashes = object.binaryOptionsOrderHashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchUpdateOrdersResponse();
        message.spotCancelSuccess = object.spot_cancel_success?.map(e => e) || [];
        message.derivativeCancelSuccess = object.derivative_cancel_success?.map(e => e) || [];
        message.spotOrderHashes = object.spot_order_hashes?.map(e => e) || [];
        message.derivativeOrderHashes = object.derivative_order_hashes?.map(e => e) || [];
        message.binaryOptionsCancelSuccess = object.binary_options_cancel_success?.map(e => e) || [];
        message.binaryOptionsOrderHashes = object.binary_options_order_hashes?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spotCancelSuccess) {
            obj.spot_cancel_success = message.spotCancelSuccess.map(e => e);
        }
        else {
            obj.spot_cancel_success = message.spotCancelSuccess;
        }
        if (message.derivativeCancelSuccess) {
            obj.derivative_cancel_success = message.derivativeCancelSuccess.map(e => e);
        }
        else {
            obj.derivative_cancel_success = message.derivativeCancelSuccess;
        }
        if (message.spotOrderHashes) {
            obj.spot_order_hashes = message.spotOrderHashes.map(e => e);
        }
        else {
            obj.spot_order_hashes = message.spotOrderHashes;
        }
        if (message.derivativeOrderHashes) {
            obj.derivative_order_hashes = message.derivativeOrderHashes.map(e => e);
        }
        else {
            obj.derivative_order_hashes = message.derivativeOrderHashes;
        }
        if (message.binaryOptionsCancelSuccess) {
            obj.binary_options_cancel_success = message.binaryOptionsCancelSuccess.map(e => e);
        }
        else {
            obj.binary_options_cancel_success = message.binaryOptionsCancelSuccess;
        }
        if (message.binaryOptionsOrderHashes) {
            obj.binary_options_order_hashes = message.binaryOptionsOrderHashes.map(e => e);
        }
        else {
            obj.binary_options_order_hashes = message.binaryOptionsOrderHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchUpdateOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchUpdateOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchUpdateOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse",
            value: MsgBatchUpdateOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeMarketOrder() {
    return {
        sender: "",
        order: DerivativeOrder.fromPartial({})
    };
}
export const MsgCreateDerivativeMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDerivativeMarketOrder();
        message.sender = object.sender ?? "";
        message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDerivativeMarketOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDerivativeMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDerivativeMarketOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDerivativeMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
            value: MsgCreateDerivativeMarketOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeMarketOrderResponse() {
    return {
        orderHash: ""
    };
}
export const MsgCreateDerivativeMarketOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeMarketOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateDerivativeMarketOrderResponse();
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDerivativeMarketOrderResponse();
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateDerivativeMarketOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDerivativeMarketOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDerivativeMarketOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse",
            value: MsgCreateDerivativeMarketOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsMarketOrder() {
    return {
        sender: "",
        order: DerivativeOrder.fromPartial({})
    };
}
export const MsgCreateBinaryOptionsMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        message.sender = object.sender ?? "";
        message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBinaryOptionsMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBinaryOptionsMarketOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBinaryOptionsMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
            value: MsgCreateBinaryOptionsMarketOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsMarketOrderResponse() {
    return {
        orderHash: ""
    };
}
export const MsgCreateBinaryOptionsMarketOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
        message.orderHash = object.orderHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBinaryOptionsMarketOrderResponse();
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBinaryOptionsMarketOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBinaryOptionsMarketOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBinaryOptionsMarketOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse",
            value: MsgCreateBinaryOptionsMarketOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelDerivativeOrder() {
    return {
        sender: "",
        marketId: "",
        subaccountId: "",
        orderHash: "",
        orderMask: 0
    };
}
export const MsgCancelDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(34).string(message.orderHash);
        }
        if (message.orderMask !== 0) {
            writer.uint32(40).int32(message.orderMask);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelDerivativeOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
                    message.orderHash = reader.string();
                    break;
                case 5:
                    message.orderMask = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelDerivativeOrder();
        message.sender = object.sender ?? "";
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.orderHash = object.orderHash ?? "";
        message.orderMask = object.orderMask ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelDerivativeOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        if (object.order_mask !== undefined && object.order_mask !== null) {
            message.orderMask = object.order_mask;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        obj.order_mask = message.orderMask === 0 ? undefined : message.orderMask;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCancelDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
            value: MsgCancelDerivativeOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelDerivativeOrderResponse() {
    return {};
}
export const MsgCancelDerivativeOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelDerivativeOrderResponse();
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
        const message = createBaseMsgCancelDerivativeOrderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelDerivativeOrderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelDerivativeOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelDerivativeOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelDerivativeOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse",
            value: MsgCancelDerivativeOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelBinaryOptionsOrder() {
    return {
        sender: "",
        marketId: "",
        subaccountId: "",
        orderHash: "",
        orderMask: 0
    };
}
export const MsgCancelBinaryOptionsOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(26).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(34).string(message.orderHash);
        }
        if (message.orderMask !== 0) {
            writer.uint32(40).int32(message.orderMask);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelBinaryOptionsOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.subaccountId = reader.string();
                    break;
                case 4:
                    message.orderHash = reader.string();
                    break;
                case 5:
                    message.orderMask = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelBinaryOptionsOrder();
        message.sender = object.sender ?? "";
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.orderHash = object.orderHash ?? "";
        message.orderMask = object.orderMask ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelBinaryOptionsOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        if (object.order_mask !== undefined && object.order_mask !== null) {
            message.orderMask = object.order_mask;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        obj.order_mask = message.orderMask === 0 ? undefined : message.orderMask;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelBinaryOptionsOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelBinaryOptionsOrder.decode(message.value);
    },
    toProto(message) {
        return MsgCancelBinaryOptionsOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
            value: MsgCancelBinaryOptionsOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelBinaryOptionsOrderResponse() {
    return {};
}
export const MsgCancelBinaryOptionsOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelBinaryOptionsOrderResponse();
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
        const message = createBaseMsgCancelBinaryOptionsOrderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelBinaryOptionsOrderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelBinaryOptionsOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelBinaryOptionsOrderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelBinaryOptionsOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse",
            value: MsgCancelBinaryOptionsOrderResponse.encode(message).finish()
        };
    }
};
function createBaseOrderData() {
    return {
        marketId: "",
        subaccountId: "",
        orderHash: "",
        orderMask: 0
    };
}
export const OrderData = {
    typeUrl: "/injective.exchange.v1beta1.OrderData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.orderHash !== "") {
            writer.uint32(26).string(message.orderHash);
        }
        if (message.orderMask !== 0) {
            writer.uint32(32).int32(message.orderMask);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderData();
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
                    message.orderHash = reader.string();
                    break;
                case 4:
                    message.orderMask = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderData();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.orderHash = object.orderHash ?? "";
        message.orderMask = object.orderMask ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOrderData();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = object.order_hash;
        }
        if (object.order_mask !== undefined && object.order_mask !== null) {
            message.orderMask = object.order_mask;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.order_hash = message.orderHash === "" ? undefined : message.orderHash;
        obj.order_mask = message.orderMask === 0 ? undefined : message.orderMask;
        return obj;
    },
    fromAminoMsg(object) {
        return OrderData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OrderData.decode(message.value);
    },
    toProto(message) {
        return OrderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.OrderData",
            value: OrderData.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelDerivativeOrders() {
    return {
        sender: "",
        data: []
    };
}
export const MsgBatchCancelDerivativeOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelDerivativeOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.data.push(OrderData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchCancelDerivativeOrders();
        message.sender = object.sender ?? "";
        message.data = object.data?.map(e => OrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelDerivativeOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.data = object.data?.map(e => OrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.data) {
            obj.data = message.data.map(e => e ? OrderData.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCancelDerivativeOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCancelDerivativeOrders.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCancelDerivativeOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
            value: MsgBatchCancelDerivativeOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelDerivativeOrdersResponse() {
    return {
        success: []
    };
}
export const MsgBatchCancelDerivativeOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelDerivativeOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.success.push(reader.bool());
                        }
                    }
                    else {
                        message.success.push(reader.bool());
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
        const message = createBaseMsgBatchCancelDerivativeOrdersResponse();
        message.success = object.success?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelDerivativeOrdersResponse();
        message.success = object.success?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.success) {
            obj.success = message.success.map(e => e);
        }
        else {
            obj.success = message.success;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchCancelDerivativeOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchCancelDerivativeOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchCancelDerivativeOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse",
            value: MsgBatchCancelDerivativeOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubaccountTransfer() {
    return {
        sender: "",
        sourceSubaccountId: "",
        destinationSubaccountId: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgSubaccountTransfer = {
    typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sourceSubaccountId !== "") {
            writer.uint32(18).string(message.sourceSubaccountId);
        }
        if (message.destinationSubaccountId !== "") {
            writer.uint32(26).string(message.destinationSubaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubaccountTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.sourceSubaccountId = reader.string();
                    break;
                case 3:
                    message.destinationSubaccountId = reader.string();
                    break;
                case 4:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubaccountTransfer();
        message.sender = object.sender ?? "";
        message.sourceSubaccountId = object.sourceSubaccountId ?? "";
        message.destinationSubaccountId = object.destinationSubaccountId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubaccountTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.source_subaccount_id !== undefined && object.source_subaccount_id !== null) {
            message.sourceSubaccountId = object.source_subaccount_id;
        }
        if (object.destination_subaccount_id !== undefined && object.destination_subaccount_id !== null) {
            message.destinationSubaccountId = object.destination_subaccount_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.source_subaccount_id = message.sourceSubaccountId === "" ? undefined : message.sourceSubaccountId;
        obj.destination_subaccount_id = message.destinationSubaccountId === "" ? undefined : message.destinationSubaccountId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubaccountTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSubaccountTransfer.decode(message.value);
    },
    toProto(message) {
        return MsgSubaccountTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
            value: MsgSubaccountTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgSubaccountTransferResponse() {
    return {};
}
export const MsgSubaccountTransferResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubaccountTransferResponse();
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
        const message = createBaseMsgSubaccountTransferResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSubaccountTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubaccountTransferResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSubaccountTransferResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubaccountTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse",
            value: MsgSubaccountTransferResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExternalTransfer() {
    return {
        sender: "",
        sourceSubaccountId: "",
        destinationSubaccountId: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgExternalTransfer = {
    typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sourceSubaccountId !== "") {
            writer.uint32(18).string(message.sourceSubaccountId);
        }
        if (message.destinationSubaccountId !== "") {
            writer.uint32(26).string(message.destinationSubaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExternalTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.sourceSubaccountId = reader.string();
                    break;
                case 3:
                    message.destinationSubaccountId = reader.string();
                    break;
                case 4:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExternalTransfer();
        message.sender = object.sender ?? "";
        message.sourceSubaccountId = object.sourceSubaccountId ?? "";
        message.destinationSubaccountId = object.destinationSubaccountId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExternalTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.source_subaccount_id !== undefined && object.source_subaccount_id !== null) {
            message.sourceSubaccountId = object.source_subaccount_id;
        }
        if (object.destination_subaccount_id !== undefined && object.destination_subaccount_id !== null) {
            message.destinationSubaccountId = object.destination_subaccount_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.source_subaccount_id = message.sourceSubaccountId === "" ? undefined : message.sourceSubaccountId;
        obj.destination_subaccount_id = message.destinationSubaccountId === "" ? undefined : message.destinationSubaccountId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExternalTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgExternalTransfer.decode(message.value);
    },
    toProto(message) {
        return MsgExternalTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
            value: MsgExternalTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgExternalTransferResponse() {
    return {};
}
export const MsgExternalTransferResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExternalTransferResponse();
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
        const message = createBaseMsgExternalTransferResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgExternalTransferResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExternalTransferResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgExternalTransferResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExternalTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse",
            value: MsgExternalTransferResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLiquidatePosition() {
    return {
        sender: "",
        subaccountId: "",
        marketId: "",
        order: undefined
    };
}
export const MsgLiquidatePosition = {
    typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidatePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLiquidatePosition();
        message.sender = object.sender ?? "";
        message.subaccountId = object.subaccountId ?? "";
        message.marketId = object.marketId ?? "";
        message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLiquidatePosition();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLiquidatePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgLiquidatePosition.decode(message.value);
    },
    toProto(message) {
        return MsgLiquidatePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
            value: MsgLiquidatePosition.encode(message).finish()
        };
    }
};
function createBaseMsgLiquidatePositionResponse() {
    return {};
}
export const MsgLiquidatePositionResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidatePositionResponse();
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
        const message = createBaseMsgLiquidatePositionResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgLiquidatePositionResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLiquidatePositionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgLiquidatePositionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLiquidatePositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse",
            value: MsgLiquidatePositionResponse.encode(message).finish()
        };
    }
};
function createBaseMsgIncreasePositionMargin() {
    return {
        sender: "",
        sourceSubaccountId: "",
        destinationSubaccountId: "",
        marketId: "",
        amount: ""
    };
}
export const MsgIncreasePositionMargin = {
    typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sourceSubaccountId !== "") {
            writer.uint32(18).string(message.sourceSubaccountId);
        }
        if (message.destinationSubaccountId !== "") {
            writer.uint32(26).string(message.destinationSubaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(34).string(message.marketId);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.amount, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncreasePositionMargin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.sourceSubaccountId = reader.string();
                    break;
                case 3:
                    message.destinationSubaccountId = reader.string();
                    break;
                case 4:
                    message.marketId = reader.string();
                    break;
                case 5:
                    message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgIncreasePositionMargin();
        message.sender = object.sender ?? "";
        message.sourceSubaccountId = object.sourceSubaccountId ?? "";
        message.destinationSubaccountId = object.destinationSubaccountId ?? "";
        message.marketId = object.marketId ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIncreasePositionMargin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.source_subaccount_id !== undefined && object.source_subaccount_id !== null) {
            message.sourceSubaccountId = object.source_subaccount_id;
        }
        if (object.destination_subaccount_id !== undefined && object.destination_subaccount_id !== null) {
            message.destinationSubaccountId = object.destination_subaccount_id;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.source_subaccount_id = message.sourceSubaccountId === "" ? undefined : message.sourceSubaccountId;
        obj.destination_subaccount_id = message.destinationSubaccountId === "" ? undefined : message.destinationSubaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIncreasePositionMargin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgIncreasePositionMargin.decode(message.value);
    },
    toProto(message) {
        return MsgIncreasePositionMargin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
            value: MsgIncreasePositionMargin.encode(message).finish()
        };
    }
};
function createBaseMsgIncreasePositionMarginResponse() {
    return {};
}
export const MsgIncreasePositionMarginResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncreasePositionMarginResponse();
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
        const message = createBaseMsgIncreasePositionMarginResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgIncreasePositionMarginResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIncreasePositionMarginResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgIncreasePositionMarginResponse.decode(message.value);
    },
    toProto(message) {
        return MsgIncreasePositionMarginResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse",
            value: MsgIncreasePositionMarginResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExec() {
    return {
        sender: "",
        bankFunds: [],
        depositsSubaccountId: "",
        depositFunds: [],
        contractAddress: "",
        data: ""
    };
}
export const MsgExec = {
    typeUrl: "/injective.exchange.v1beta1.MsgExec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.bankFunds) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositsSubaccountId !== "") {
            writer.uint32(26).string(message.depositsSubaccountId);
        }
        for (const v of message.depositFunds) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        if (message.data !== "") {
            writer.uint32(50).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.bankFunds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.depositsSubaccountId = reader.string();
                    break;
                case 4:
                    message.depositFunds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.contractAddress = reader.string();
                    break;
                case 6:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.sender = object.sender ?? "";
        message.bankFunds = object.bankFunds?.map(e => Coin.fromPartial(e)) || [];
        message.depositsSubaccountId = object.depositsSubaccountId ?? "";
        message.depositFunds = object.depositFunds?.map(e => Coin.fromPartial(e)) || [];
        message.contractAddress = object.contractAddress ?? "";
        message.data = object.data ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.bankFunds = object.bank_funds?.map(e => Coin.fromAmino(e)) || [];
        if (object.deposits_subaccount_id !== undefined && object.deposits_subaccount_id !== null) {
            message.depositsSubaccountId = object.deposits_subaccount_id;
        }
        message.depositFunds = object.deposit_funds?.map(e => Coin.fromAmino(e)) || [];
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.bankFunds) {
            obj.bank_funds = message.bankFunds.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.bank_funds = message.bankFunds;
        }
        obj.deposits_subaccount_id = message.depositsSubaccountId === "" ? undefined : message.depositsSubaccountId;
        if (message.depositFunds) {
            obj.deposit_funds = message.depositFunds.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.deposit_funds = message.depositFunds;
        }
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        obj.data = message.data === "" ? undefined : message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgExec.decode(message.value);
    },
    toProto(message) {
        return MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExec",
            value: MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {};
}
export const MsgExecResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgExecResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
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
        const message = createBaseMsgExecResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgExecResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExecResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExecResponse",
            value: MsgExecResponse.encode(message).finish()
        };
    }
};
function createBaseSpotMarketParamUpdateProposal() {
    return {
        title: "",
        description: "",
        marketId: "",
        makerFeeRate: undefined,
        takerFeeRate: undefined,
        relayerFeeShareRate: undefined,
        minPriceTickSize: undefined,
        minQuantityTickSize: undefined,
        status: 0
    };
}
export const SpotMarketParamUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.makerFeeRate !== undefined) {
            writer.uint32(34).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== undefined) {
            writer.uint32(50).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.minPriceTickSize !== undefined) {
            writer.uint32(58).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== undefined) {
            writer.uint32(66).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketParamUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotMarketParamUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.marketId = object.marketId ?? "";
        message.makerFeeRate = object.makerFeeRate ?? undefined;
        message.takerFeeRate = object.takerFeeRate ?? undefined;
        message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
        message.minPriceTickSize = object.minPriceTickSize ?? undefined;
        message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotMarketParamUpdateProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
            message.relayerFeeShareRate = object.relayer_fee_share_rate;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
        obj.relayer_fee_share_rate = message.relayerFeeShareRate === null ? undefined : message.relayerFeeShareRate;
        obj.min_price_tick_size = message.minPriceTickSize === null ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === null ? undefined : message.minQuantityTickSize;
        obj.status = message.status === 0 ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return SpotMarketParamUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SpotMarketParamUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return SpotMarketParamUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
            value: SpotMarketParamUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseExchangeEnableProposal() {
    return {
        title: "",
        description: "",
        exchangeType: 0
    };
}
export const ExchangeEnableProposal = {
    typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.exchangeType !== 0) {
            writer.uint32(24).int32(message.exchangeType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeEnableProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.exchangeType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExchangeEnableProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.exchangeType = object.exchangeType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseExchangeEnableProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.exchangeType !== undefined && object.exchangeType !== null) {
            message.exchangeType = object.exchangeType;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.exchangeType = message.exchangeType === 0 ? undefined : message.exchangeType;
        return obj;
    },
    fromAminoMsg(object) {
        return ExchangeEnableProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExchangeEnableProposal.decode(message.value);
    },
    toProto(message) {
        return ExchangeEnableProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
            value: ExchangeEnableProposal.encode(message).finish()
        };
    }
};
function createBaseBatchExchangeModificationProposal() {
    return {
        title: "",
        description: "",
        spotMarketParamUpdateProposals: [],
        derivativeMarketParamUpdateProposals: [],
        spotMarketLaunchProposals: [],
        perpetualMarketLaunchProposals: [],
        expiryFuturesMarketLaunchProposals: [],
        tradingRewardCampaignUpdateProposal: undefined,
        binaryOptionsMarketLaunchProposals: [],
        binaryOptionsParamUpdateProposals: [],
        denomDecimalsUpdateProposal: undefined
    };
}
export const BatchExchangeModificationProposal = {
    typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.spotMarketParamUpdateProposals) {
            SpotMarketParamUpdateProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.derivativeMarketParamUpdateProposals) {
            DerivativeMarketParamUpdateProposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.spotMarketLaunchProposals) {
            SpotMarketLaunchProposal.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.perpetualMarketLaunchProposals) {
            PerpetualMarketLaunchProposal.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.expiryFuturesMarketLaunchProposals) {
            ExpiryFuturesMarketLaunchProposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.tradingRewardCampaignUpdateProposal !== undefined) {
            TradingRewardCampaignUpdateProposal.encode(message.tradingRewardCampaignUpdateProposal, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketLaunchProposals) {
            BinaryOptionsMarketLaunchProposal.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsParamUpdateProposals) {
            BinaryOptionsMarketParamUpdateProposal.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.denomDecimalsUpdateProposal !== undefined) {
            UpdateDenomDecimalsProposal.encode(message.denomDecimalsUpdateProposal, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchExchangeModificationProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.spotMarketParamUpdateProposals.push(SpotMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.derivativeMarketParamUpdateProposals.push(DerivativeMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.spotMarketLaunchProposals.push(SpotMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.perpetualMarketLaunchProposals.push(PerpetualMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.expiryFuturesMarketLaunchProposals.push(ExpiryFuturesMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.tradingRewardCampaignUpdateProposal = TradingRewardCampaignUpdateProposal.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.binaryOptionsMarketLaunchProposals.push(BinaryOptionsMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.binaryOptionsParamUpdateProposals.push(BinaryOptionsMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.denomDecimalsUpdateProposal = UpdateDenomDecimalsProposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchExchangeModificationProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.spotMarketParamUpdateProposals = object.spotMarketParamUpdateProposals?.map(e => SpotMarketParamUpdateProposal.fromPartial(e)) || [];
        message.derivativeMarketParamUpdateProposals = object.derivativeMarketParamUpdateProposals?.map(e => DerivativeMarketParamUpdateProposal.fromPartial(e)) || [];
        message.spotMarketLaunchProposals = object.spotMarketLaunchProposals?.map(e => SpotMarketLaunchProposal.fromPartial(e)) || [];
        message.perpetualMarketLaunchProposals = object.perpetualMarketLaunchProposals?.map(e => PerpetualMarketLaunchProposal.fromPartial(e)) || [];
        message.expiryFuturesMarketLaunchProposals = object.expiryFuturesMarketLaunchProposals?.map(e => ExpiryFuturesMarketLaunchProposal.fromPartial(e)) || [];
        message.tradingRewardCampaignUpdateProposal = object.tradingRewardCampaignUpdateProposal !== undefined && object.tradingRewardCampaignUpdateProposal !== null ? TradingRewardCampaignUpdateProposal.fromPartial(object.tradingRewardCampaignUpdateProposal) : undefined;
        message.binaryOptionsMarketLaunchProposals = object.binaryOptionsMarketLaunchProposals?.map(e => BinaryOptionsMarketLaunchProposal.fromPartial(e)) || [];
        message.binaryOptionsParamUpdateProposals = object.binaryOptionsParamUpdateProposals?.map(e => BinaryOptionsMarketParamUpdateProposal.fromPartial(e)) || [];
        message.denomDecimalsUpdateProposal = object.denomDecimalsUpdateProposal !== undefined && object.denomDecimalsUpdateProposal !== null ? UpdateDenomDecimalsProposal.fromPartial(object.denomDecimalsUpdateProposal) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchExchangeModificationProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.spotMarketParamUpdateProposals = object.spot_market_param_update_proposals?.map(e => SpotMarketParamUpdateProposal.fromAmino(e)) || [];
        message.derivativeMarketParamUpdateProposals = object.derivative_market_param_update_proposals?.map(e => DerivativeMarketParamUpdateProposal.fromAmino(e)) || [];
        message.spotMarketLaunchProposals = object.spot_market_launch_proposals?.map(e => SpotMarketLaunchProposal.fromAmino(e)) || [];
        message.perpetualMarketLaunchProposals = object.perpetual_market_launch_proposals?.map(e => PerpetualMarketLaunchProposal.fromAmino(e)) || [];
        message.expiryFuturesMarketLaunchProposals = object.expiry_futures_market_launch_proposals?.map(e => ExpiryFuturesMarketLaunchProposal.fromAmino(e)) || [];
        if (object.trading_reward_campaign_update_proposal !== undefined && object.trading_reward_campaign_update_proposal !== null) {
            message.tradingRewardCampaignUpdateProposal = TradingRewardCampaignUpdateProposal.fromAmino(object.trading_reward_campaign_update_proposal);
        }
        message.binaryOptionsMarketLaunchProposals = object.binary_options_market_launch_proposals?.map(e => BinaryOptionsMarketLaunchProposal.fromAmino(e)) || [];
        message.binaryOptionsParamUpdateProposals = object.binary_options_param_update_proposals?.map(e => BinaryOptionsMarketParamUpdateProposal.fromAmino(e)) || [];
        if (object.denom_decimals_update_proposal !== undefined && object.denom_decimals_update_proposal !== null) {
            message.denomDecimalsUpdateProposal = UpdateDenomDecimalsProposal.fromAmino(object.denom_decimals_update_proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.spotMarketParamUpdateProposals) {
            obj.spot_market_param_update_proposals = message.spotMarketParamUpdateProposals.map(e => e ? SpotMarketParamUpdateProposal.toAmino(e) : undefined);
        }
        else {
            obj.spot_market_param_update_proposals = message.spotMarketParamUpdateProposals;
        }
        if (message.derivativeMarketParamUpdateProposals) {
            obj.derivative_market_param_update_proposals = message.derivativeMarketParamUpdateProposals.map(e => e ? DerivativeMarketParamUpdateProposal.toAmino(e) : undefined);
        }
        else {
            obj.derivative_market_param_update_proposals = message.derivativeMarketParamUpdateProposals;
        }
        if (message.spotMarketLaunchProposals) {
            obj.spot_market_launch_proposals = message.spotMarketLaunchProposals.map(e => e ? SpotMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.spot_market_launch_proposals = message.spotMarketLaunchProposals;
        }
        if (message.perpetualMarketLaunchProposals) {
            obj.perpetual_market_launch_proposals = message.perpetualMarketLaunchProposals.map(e => e ? PerpetualMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.perpetual_market_launch_proposals = message.perpetualMarketLaunchProposals;
        }
        if (message.expiryFuturesMarketLaunchProposals) {
            obj.expiry_futures_market_launch_proposals = message.expiryFuturesMarketLaunchProposals.map(e => e ? ExpiryFuturesMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.expiry_futures_market_launch_proposals = message.expiryFuturesMarketLaunchProposals;
        }
        obj.trading_reward_campaign_update_proposal = message.tradingRewardCampaignUpdateProposal ? TradingRewardCampaignUpdateProposal.toAmino(message.tradingRewardCampaignUpdateProposal) : undefined;
        if (message.binaryOptionsMarketLaunchProposals) {
            obj.binary_options_market_launch_proposals = message.binaryOptionsMarketLaunchProposals.map(e => e ? BinaryOptionsMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_market_launch_proposals = message.binaryOptionsMarketLaunchProposals;
        }
        if (message.binaryOptionsParamUpdateProposals) {
            obj.binary_options_param_update_proposals = message.binaryOptionsParamUpdateProposals.map(e => e ? BinaryOptionsMarketParamUpdateProposal.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_param_update_proposals = message.binaryOptionsParamUpdateProposals;
        }
        obj.denom_decimals_update_proposal = message.denomDecimalsUpdateProposal ? UpdateDenomDecimalsProposal.toAmino(message.denomDecimalsUpdateProposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchExchangeModificationProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchExchangeModificationProposal.decode(message.value);
    },
    toProto(message) {
        return BatchExchangeModificationProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
            value: BatchExchangeModificationProposal.encode(message).finish()
        };
    }
};
function createBaseSpotMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        baseDenom: "",
        quoteDenom: "",
        minPriceTickSize: "",
        minQuantityTickSize: "",
        makerFeeRate: undefined,
        takerFeeRate: undefined
    };
}
export const SpotMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.baseDenom !== "") {
            writer.uint32(34).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(42).string(message.quoteDenom);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.makerFeeRate !== undefined) {
            writer.uint32(66).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(74).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.baseDenom = reader.string();
                    break;
                case 5:
                    message.quoteDenom = reader.string();
                    break;
                case 6:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotMarketLaunchProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.ticker = object.ticker ?? "";
        message.baseDenom = object.baseDenom ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        message.makerFeeRate = object.makerFeeRate ?? undefined;
        message.takerFeeRate = object.takerFeeRate ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotMarketLaunchProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return SpotMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SpotMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return SpotMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
            value: SpotMarketLaunchProposal.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleScaleFactor: 0,
        oracleType: 0,
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        makerFeeRate: "",
        takerFeeRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const PerpetualMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(34).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(42).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(50).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(64).int32(message.oracleType);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(82).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(90).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.quoteDenom = reader.string();
                    break;
                case 5:
                    message.oracleBase = reader.string();
                    break;
                case 6:
                    message.oracleQuote = reader.string();
                    break;
                case 7:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 8:
                    message.oracleType = reader.int32();
                    break;
                case 9:
                    message.initialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.maintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketLaunchProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.ticker = object.ticker ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.oracleType = object.oracleType ?? 0;
        message.initialMarginRatio = object.initialMarginRatio ?? "";
        message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePerpetualMarketLaunchProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.oracle_base !== undefined && object.oracle_base !== null) {
            message.oracleBase = object.oracle_base;
        }
        if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
            message.oracleQuote = object.oracle_quote;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
            message.initialMarginRatio = object.initial_margin_ratio;
        }
        if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
            message.maintenanceMarginRatio = object.maintenance_margin_ratio;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : message.initialMarginRatio;
        obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : message.maintenanceMarginRatio;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return PerpetualMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PerpetualMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return PerpetualMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
            value: PerpetualMarketLaunchProposal.encode(message).finish()
        };
    }
};
function createBaseBinaryOptionsMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        oracleSymbol: "",
        oracleProvider: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        expirationTimestamp: BigInt(0),
        settlementTimestamp: BigInt(0),
        admin: "",
        quoteDenom: "",
        makerFeeRate: "",
        takerFeeRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const BinaryOptionsMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.oracleSymbol !== "") {
            writer.uint32(34).string(message.oracleSymbol);
        }
        if (message.oracleProvider !== "") {
            writer.uint32(42).string(message.oracleProvider);
        }
        if (message.oracleType !== 0) {
            writer.uint32(48).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.expirationTimestamp !== BigInt(0)) {
            writer.uint32(64).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== BigInt(0)) {
            writer.uint32(72).int64(message.settlementTimestamp);
        }
        if (message.admin !== "") {
            writer.uint32(82).string(message.admin);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(90).string(message.quoteDenom);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(114).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(122).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.oracleSymbol = reader.string();
                    break;
                case 5:
                    message.oracleProvider = reader.string();
                    break;
                case 6:
                    message.oracleType = reader.int32();
                    break;
                case 7:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 8:
                    message.expirationTimestamp = reader.int64();
                    break;
                case 9:
                    message.settlementTimestamp = reader.int64();
                    break;
                case 10:
                    message.admin = reader.string();
                    break;
                case 11:
                    message.quoteDenom = reader.string();
                    break;
                case 12:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 15:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBinaryOptionsMarketLaunchProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.ticker = object.ticker ?? "";
        message.oracleSymbol = object.oracleSymbol ?? "";
        message.oracleProvider = object.oracleProvider ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
        message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBinaryOptionsMarketLaunchProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.oracle_symbol !== undefined && object.oracle_symbol !== null) {
            message.oracleSymbol = object.oracle_symbol;
        }
        if (object.oracle_provider !== undefined && object.oracle_provider !== null) {
            message.oracleProvider = object.oracle_provider;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
            message.expirationTimestamp = BigInt(object.expiration_timestamp);
        }
        if (object.settlement_timestamp !== undefined && object.settlement_timestamp !== null) {
            message.settlementTimestamp = BigInt(object.settlement_timestamp);
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.oracle_symbol = message.oracleSymbol === "" ? undefined : message.oracleSymbol;
        obj.oracle_provider = message.oracleProvider === "" ? undefined : message.oracleProvider;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? (message.expirationTimestamp?.toString)() : undefined;
        obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? (message.settlementTimestamp?.toString)() : undefined;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return BinaryOptionsMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BinaryOptionsMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return BinaryOptionsMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
            value: BinaryOptionsMarketLaunchProposal.encode(message).finish()
        };
    }
};
function createBaseExpiryFuturesMarketLaunchProposal() {
    return {
        title: "",
        description: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleScaleFactor: 0,
        oracleType: 0,
        expiry: BigInt(0),
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        makerFeeRate: "",
        takerFeeRate: "",
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const ExpiryFuturesMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(26).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(34).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(42).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(50).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(56).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(64).int32(message.oracleType);
        }
        if (message.expiry !== BigInt(0)) {
            writer.uint32(72).int64(message.expiry);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(82).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(90).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(114).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(122).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                case 4:
                    message.quoteDenom = reader.string();
                    break;
                case 5:
                    message.oracleBase = reader.string();
                    break;
                case 6:
                    message.oracleQuote = reader.string();
                    break;
                case 7:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 8:
                    message.oracleType = reader.int32();
                    break;
                case 9:
                    message.expiry = reader.int64();
                    break;
                case 10:
                    message.initialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.maintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 15:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExpiryFuturesMarketLaunchProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.ticker = object.ticker ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.oracleType = object.oracleType ?? 0;
        message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
        message.initialMarginRatio = object.initialMarginRatio ?? "";
        message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExpiryFuturesMarketLaunchProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.oracle_base !== undefined && object.oracle_base !== null) {
            message.oracleBase = object.oracle_base;
        }
        if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
            message.oracleQuote = object.oracle_quote;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = BigInt(object.expiry);
        }
        if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
            message.initialMarginRatio = object.initial_margin_ratio;
        }
        if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
            message.maintenanceMarginRatio = object.maintenance_margin_ratio;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.expiry = message.expiry !== BigInt(0) ? (message.expiry?.toString)() : undefined;
        obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : message.initialMarginRatio;
        obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : message.maintenanceMarginRatio;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return ExpiryFuturesMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExpiryFuturesMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return ExpiryFuturesMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
            value: ExpiryFuturesMarketLaunchProposal.encode(message).finish()
        };
    }
};
function createBaseDerivativeMarketParamUpdateProposal() {
    return {
        title: "",
        description: "",
        marketId: "",
        initialMarginRatio: undefined,
        maintenanceMarginRatio: undefined,
        makerFeeRate: undefined,
        takerFeeRate: undefined,
        relayerFeeShareRate: undefined,
        minPriceTickSize: undefined,
        minQuantityTickSize: undefined,
        hourlyInterestRate: undefined,
        hourlyFundingRateCap: undefined,
        status: 0,
        oracleParams: undefined
    };
}
export const DerivativeMarketParamUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.initialMarginRatio !== undefined) {
            writer.uint32(34).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.makerFeeRate !== undefined) {
            writer.uint32(50).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(58).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== undefined) {
            writer.uint32(66).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.minPriceTickSize !== undefined) {
            writer.uint32(74).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== undefined) {
            writer.uint32(82).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.hourlyInterestRate !== undefined) {
            writer.uint32(90).string(Decimal.fromUserInput(message.hourlyInterestRate, 18).atomics);
        }
        if (message.hourlyFundingRateCap !== undefined) {
            writer.uint32(98).string(Decimal.fromUserInput(message.hourlyFundingRateCap, 18).atomics);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        if (message.oracleParams !== undefined) {
            OracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketParamUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.initialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.maintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.hourlyInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.hourlyFundingRateCap = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.oracleParams = OracleParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeMarketParamUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.marketId = object.marketId ?? "";
        message.initialMarginRatio = object.initialMarginRatio ?? undefined;
        message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? undefined;
        message.makerFeeRate = object.makerFeeRate ?? undefined;
        message.takerFeeRate = object.takerFeeRate ?? undefined;
        message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
        message.minPriceTickSize = object.minPriceTickSize ?? undefined;
        message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
        message.hourlyInterestRate = object.hourlyInterestRate ?? undefined;
        message.hourlyFundingRateCap = object.hourlyFundingRateCap ?? undefined;
        message.status = object.status ?? 0;
        message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? OracleParams.fromPartial(object.oracleParams) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeMarketParamUpdateProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
            message.initialMarginRatio = object.initial_margin_ratio;
        }
        if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
            message.maintenanceMarginRatio = object.maintenance_margin_ratio;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
            message.relayerFeeShareRate = object.relayer_fee_share_rate;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        if (object.HourlyInterestRate !== undefined && object.HourlyInterestRate !== null) {
            message.hourlyInterestRate = object.HourlyInterestRate;
        }
        if (object.HourlyFundingRateCap !== undefined && object.HourlyFundingRateCap !== null) {
            message.hourlyFundingRateCap = object.HourlyFundingRateCap;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.oracle_params !== undefined && object.oracle_params !== null) {
            message.oracleParams = OracleParams.fromAmino(object.oracle_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.initial_margin_ratio = message.initialMarginRatio === null ? undefined : message.initialMarginRatio;
        obj.maintenance_margin_ratio = message.maintenanceMarginRatio === null ? undefined : message.maintenanceMarginRatio;
        obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
        obj.relayer_fee_share_rate = message.relayerFeeShareRate === null ? undefined : message.relayerFeeShareRate;
        obj.min_price_tick_size = message.minPriceTickSize === null ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === null ? undefined : message.minQuantityTickSize;
        obj.HourlyInterestRate = message.hourlyInterestRate === null ? undefined : message.hourlyInterestRate;
        obj.HourlyFundingRateCap = message.hourlyFundingRateCap === null ? undefined : message.hourlyFundingRateCap;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.oracle_params = message.oracleParams ? OracleParams.toAmino(message.oracleParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeMarketParamUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeMarketParamUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return DerivativeMarketParamUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
            value: DerivativeMarketParamUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseMarketForcedSettlementProposal() {
    return {
        title: "",
        description: "",
        marketId: "",
        settlementPrice: undefined
    };
}
export const MarketForcedSettlementProposal = {
    typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.settlementPrice !== undefined) {
            writer.uint32(34).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketForcedSettlementProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.settlementPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMarketForcedSettlementProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.marketId = object.marketId ?? "";
        message.settlementPrice = object.settlementPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMarketForcedSettlementProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.settlement_price !== undefined && object.settlement_price !== null) {
            message.settlementPrice = object.settlement_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.settlement_price = message.settlementPrice === null ? undefined : message.settlementPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return MarketForcedSettlementProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MarketForcedSettlementProposal.decode(message.value);
    },
    toProto(message) {
        return MarketForcedSettlementProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
            value: MarketForcedSettlementProposal.encode(message).finish()
        };
    }
};
function createBaseUpdateDenomDecimalsProposal() {
    return {
        title: "",
        description: "",
        denomDecimals: []
    };
}
export const UpdateDenomDecimalsProposal = {
    typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.denomDecimals) {
            DenomDecimals.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateDenomDecimalsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateDenomDecimalsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateDenomDecimalsProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.denomDecimals = object.denom_decimals?.map(e => DenomDecimals.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.denomDecimals) {
            obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
        }
        else {
            obj.denom_decimals = message.denomDecimals;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateDenomDecimalsProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateDenomDecimalsProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateDenomDecimalsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
            value: UpdateDenomDecimalsProposal.encode(message).finish()
        };
    }
};
function createBaseDenomDecimals() {
    return {
        denom: "",
        decimals: BigInt(0)
    };
}
export const DenomDecimals = {
    typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(16).uint64(message.decimals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomDecimals();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.decimals = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomDecimals();
        message.denom = object.denom ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomDecimals();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = BigInt(object.decimals);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DenomDecimals.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DenomDecimals.decode(message.value);
    },
    toProto(message) {
        return DenomDecimals.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
            value: DenomDecimals.encode(message).finish()
        };
    }
};
function createBaseBinaryOptionsMarketParamUpdateProposal() {
    return {
        title: "",
        description: "",
        marketId: "",
        makerFeeRate: undefined,
        takerFeeRate: undefined,
        relayerFeeShareRate: undefined,
        minPriceTickSize: undefined,
        minQuantityTickSize: undefined,
        expirationTimestamp: BigInt(0),
        settlementTimestamp: BigInt(0),
        settlementPrice: undefined,
        admin: "",
        status: 0,
        oracleParams: undefined
    };
}
export const BinaryOptionsMarketParamUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.marketId !== "") {
            writer.uint32(26).string(message.marketId);
        }
        if (message.makerFeeRate !== undefined) {
            writer.uint32(34).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== undefined) {
            writer.uint32(50).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.minPriceTickSize !== undefined) {
            writer.uint32(58).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== undefined) {
            writer.uint32(66).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.expirationTimestamp !== BigInt(0)) {
            writer.uint32(72).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== BigInt(0)) {
            writer.uint32(80).int64(message.settlementTimestamp);
        }
        if (message.settlementPrice !== undefined) {
            writer.uint32(90).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        if (message.admin !== "") {
            writer.uint32(98).string(message.admin);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        if (message.oracleParams !== undefined) {
            ProviderOracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarketParamUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.marketId = reader.string();
                    break;
                case 4:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.expirationTimestamp = reader.int64();
                    break;
                case 10:
                    message.settlementTimestamp = reader.int64();
                    break;
                case 11:
                    message.settlementPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.admin = reader.string();
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.oracleParams = ProviderOracleParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBinaryOptionsMarketParamUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.marketId = object.marketId ?? "";
        message.makerFeeRate = object.makerFeeRate ?? undefined;
        message.takerFeeRate = object.takerFeeRate ?? undefined;
        message.relayerFeeShareRate = object.relayerFeeShareRate ?? undefined;
        message.minPriceTickSize = object.minPriceTickSize ?? undefined;
        message.minQuantityTickSize = object.minQuantityTickSize ?? undefined;
        message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
        message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
        message.settlementPrice = object.settlementPrice ?? undefined;
        message.admin = object.admin ?? "";
        message.status = object.status ?? 0;
        message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? ProviderOracleParams.fromPartial(object.oracleParams) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBinaryOptionsMarketParamUpdateProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
            message.makerFeeRate = object.maker_fee_rate;
        }
        if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
            message.takerFeeRate = object.taker_fee_rate;
        }
        if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
            message.relayerFeeShareRate = object.relayer_fee_share_rate;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
            message.expirationTimestamp = BigInt(object.expiration_timestamp);
        }
        if (object.settlement_timestamp !== undefined && object.settlement_timestamp !== null) {
            message.settlementTimestamp = BigInt(object.settlement_timestamp);
        }
        if (object.settlement_price !== undefined && object.settlement_price !== null) {
            message.settlementPrice = object.settlement_price;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.oracle_params !== undefined && object.oracle_params !== null) {
            message.oracleParams = ProviderOracleParams.fromAmino(object.oracle_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.maker_fee_rate = message.makerFeeRate === null ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === null ? undefined : message.takerFeeRate;
        obj.relayer_fee_share_rate = message.relayerFeeShareRate === null ? undefined : message.relayerFeeShareRate;
        obj.min_price_tick_size = message.minPriceTickSize === null ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === null ? undefined : message.minQuantityTickSize;
        obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? (message.expirationTimestamp?.toString)() : undefined;
        obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? (message.settlementTimestamp?.toString)() : undefined;
        obj.settlement_price = message.settlementPrice === null ? undefined : message.settlementPrice;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.oracle_params = message.oracleParams ? ProviderOracleParams.toAmino(message.oracleParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BinaryOptionsMarketParamUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BinaryOptionsMarketParamUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return BinaryOptionsMarketParamUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
            value: BinaryOptionsMarketParamUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseProviderOracleParams() {
    return {
        symbol: "",
        provider: "",
        oracleScaleFactor: 0,
        oracleType: 0
    };
}
export const ProviderOracleParams = {
    typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(24).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderOracleParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.provider = reader.string();
                    break;
                case 3:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 4:
                    message.oracleType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProviderOracleParams();
        message.symbol = object.symbol ?? "";
        message.provider = object.provider ?? "";
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.oracleType = object.oracleType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProviderOracleParams();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.provider = message.provider === "" ? undefined : message.provider;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        return obj;
    },
    fromAminoMsg(object) {
        return ProviderOracleParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProviderOracleParams.decode(message.value);
    },
    toProto(message) {
        return ProviderOracleParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
            value: ProviderOracleParams.encode(message).finish()
        };
    }
};
function createBaseOracleParams() {
    return {
        oracleBase: "",
        oracleQuote: "",
        oracleScaleFactor: 0,
        oracleType: 0
    };
}
export const OracleParams = {
    typeUrl: "/injective.exchange.v1beta1.OracleParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.oracleBase !== "") {
            writer.uint32(10).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(18).string(message.oracleQuote);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(24).uint32(message.oracleScaleFactor);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleBase = reader.string();
                    break;
                case 2:
                    message.oracleQuote = reader.string();
                    break;
                case 3:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 4:
                    message.oracleType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOracleParams();
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.oracleType = object.oracleType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOracleParams();
        if (object.oracle_base !== undefined && object.oracle_base !== null) {
            message.oracleBase = object.oracle_base;
        }
        if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
            message.oracleQuote = object.oracle_quote;
        }
        if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
            message.oracleScaleFactor = object.oracle_scale_factor;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        return obj;
    },
    fromAminoMsg(object) {
        return OracleParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OracleParams.decode(message.value);
    },
    toProto(message) {
        return OracleParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.OracleParams",
            value: OracleParams.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignLaunchProposal() {
    return {
        title: "",
        description: "",
        campaignInfo: undefined,
        campaignRewardPools: []
    };
}
export const TradingRewardCampaignLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPools) {
            CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignLaunchProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.campaignRewardPools.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardCampaignLaunchProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
        message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardCampaignLaunchProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.campaign_info !== undefined && object.campaign_info !== null) {
            message.campaignInfo = TradingRewardCampaignInfo.fromAmino(object.campaign_info);
        }
        message.campaignRewardPools = object.campaign_reward_pools?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
        if (message.campaignRewardPools) {
            obj.campaign_reward_pools = message.campaignRewardPools.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.campaign_reward_pools = message.campaignRewardPools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TradingRewardCampaignLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradingRewardCampaignLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return TradingRewardCampaignLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
            value: TradingRewardCampaignLaunchProposal.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignUpdateProposal() {
    return {
        title: "",
        description: "",
        campaignInfo: undefined,
        campaignRewardPoolsAdditions: [],
        campaignRewardPoolsUpdates: []
    };
}
export const TradingRewardCampaignUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsAdditions) {
            CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsUpdates) {
            CampaignRewardPool.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.campaignRewardPoolsAdditions.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.campaignRewardPoolsUpdates.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardCampaignUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
        message.campaignRewardPoolsAdditions = object.campaignRewardPoolsAdditions?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        message.campaignRewardPoolsUpdates = object.campaignRewardPoolsUpdates?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardCampaignUpdateProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.campaign_info !== undefined && object.campaign_info !== null) {
            message.campaignInfo = TradingRewardCampaignInfo.fromAmino(object.campaign_info);
        }
        message.campaignRewardPoolsAdditions = object.campaign_reward_pools_additions?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        message.campaignRewardPoolsUpdates = object.campaign_reward_pools_updates?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
        if (message.campaignRewardPoolsAdditions) {
            obj.campaign_reward_pools_additions = message.campaignRewardPoolsAdditions.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.campaign_reward_pools_additions = message.campaignRewardPoolsAdditions;
        }
        if (message.campaignRewardPoolsUpdates) {
            obj.campaign_reward_pools_updates = message.campaignRewardPoolsUpdates.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.campaign_reward_pools_updates = message.campaignRewardPoolsUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TradingRewardCampaignUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradingRewardCampaignUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return TradingRewardCampaignUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
            value: TradingRewardCampaignUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseRewardPointUpdate() {
    return {
        accountAddress: "",
        newPoints: ""
    };
}
export const RewardPointUpdate = {
    typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.newPoints !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.newPoints, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardPointUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 12:
                    message.newPoints = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRewardPointUpdate();
        message.accountAddress = object.accountAddress ?? "";
        message.newPoints = object.newPoints ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardPointUpdate();
        if (object.account_address !== undefined && object.account_address !== null) {
            message.accountAddress = object.account_address;
        }
        if (object.new_points !== undefined && object.new_points !== null) {
            message.newPoints = object.new_points;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
        obj.new_points = message.newPoints === "" ? undefined : message.newPoints;
        return obj;
    },
    fromAminoMsg(object) {
        return RewardPointUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RewardPointUpdate.decode(message.value);
    },
    toProto(message) {
        return RewardPointUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
            value: RewardPointUpdate.encode(message).finish()
        };
    }
};
function createBaseTradingRewardPendingPointsUpdateProposal() {
    return {
        title: "",
        description: "",
        pendingPoolTimestamp: BigInt(0),
        rewardPointUpdates: []
    };
}
export const TradingRewardPendingPointsUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.pendingPoolTimestamp !== BigInt(0)) {
            writer.uint32(24).int64(message.pendingPoolTimestamp);
        }
        for (const v of message.rewardPointUpdates) {
            RewardPointUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardPendingPointsUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.pendingPoolTimestamp = reader.int64();
                    break;
                case 4:
                    message.rewardPointUpdates.push(RewardPointUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardPendingPointsUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0);
        message.rewardPointUpdates = object.rewardPointUpdates?.map(e => RewardPointUpdate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardPendingPointsUpdateProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.pending_pool_timestamp !== undefined && object.pending_pool_timestamp !== null) {
            message.pendingPoolTimestamp = BigInt(object.pending_pool_timestamp);
        }
        message.rewardPointUpdates = object.reward_point_updates?.map(e => RewardPointUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.pending_pool_timestamp = message.pendingPoolTimestamp !== BigInt(0) ? (message.pendingPoolTimestamp?.toString)() : undefined;
        if (message.rewardPointUpdates) {
            obj.reward_point_updates = message.rewardPointUpdates.map(e => e ? RewardPointUpdate.toAmino(e) : undefined);
        }
        else {
            obj.reward_point_updates = message.rewardPointUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TradingRewardPendingPointsUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradingRewardPendingPointsUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return TradingRewardPendingPointsUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
            value: TradingRewardPendingPointsUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountProposal() {
    return {
        title: "",
        description: "",
        schedule: undefined
    };
}
export const FeeDiscountProposal = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.schedule !== undefined) {
            FeeDiscountSchedule.encode(message.schedule, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.schedule = FeeDiscountSchedule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeeDiscountProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.schedule !== undefined && object.schedule !== null) {
            message.schedule = FeeDiscountSchedule.fromAmino(object.schedule);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.schedule = message.schedule ? FeeDiscountSchedule.toAmino(message.schedule) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeDiscountProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeDiscountProposal.decode(message.value);
    },
    toProto(message) {
        return FeeDiscountProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
            value: FeeDiscountProposal.encode(message).finish()
        };
    }
};
function createBaseBatchCommunityPoolSpendProposal() {
    return {
        title: "",
        description: "",
        proposals: []
    };
}
export const BatchCommunityPoolSpendProposal = {
    typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.proposals) {
            CommunityPoolSpendProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.proposals.push(CommunityPoolSpendProposal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchCommunityPoolSpendProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.proposals = object.proposals?.map(e => CommunityPoolSpendProposal.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchCommunityPoolSpendProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.proposals = object.proposals?.map(e => CommunityPoolSpendProposal.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? CommunityPoolSpendProposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = message.proposals;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BatchCommunityPoolSpendProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchCommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return BatchCommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
            value: BatchCommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
function createBaseMsgRewardsOptOut() {
    return {
        sender: ""
    };
}
export const MsgRewardsOptOut = {
    typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRewardsOptOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRewardsOptOut();
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRewardsOptOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRewardsOptOut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRewardsOptOut.decode(message.value);
    },
    toProto(message) {
        return MsgRewardsOptOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
            value: MsgRewardsOptOut.encode(message).finish()
        };
    }
};
function createBaseMsgRewardsOptOutResponse() {
    return {};
}
export const MsgRewardsOptOutResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRewardsOptOutResponse();
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
        const message = createBaseMsgRewardsOptOutResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRewardsOptOutResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRewardsOptOutResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRewardsOptOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRewardsOptOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse",
            value: MsgRewardsOptOutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAdminUpdateBinaryOptionsMarket() {
    return {
        sender: "",
        marketId: "",
        settlementPrice: undefined,
        expirationTimestamp: BigInt(0),
        settlementTimestamp: BigInt(0),
        status: 0
    };
}
export const MsgAdminUpdateBinaryOptionsMarket = {
    typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.settlementPrice !== undefined) {
            writer.uint32(26).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        if (message.expirationTimestamp !== BigInt(0)) {
            writer.uint32(32).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== BigInt(0)) {
            writer.uint32(40).int64(message.settlementTimestamp);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.settlementPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.expirationTimestamp = reader.int64();
                    break;
                case 5:
                    message.settlementTimestamp = reader.int64();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
        message.sender = object.sender ?? "";
        message.marketId = object.marketId ?? "";
        message.settlementPrice = object.settlementPrice ?? undefined;
        message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
        message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAdminUpdateBinaryOptionsMarket();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.settlement_price !== undefined && object.settlement_price !== null) {
            message.settlementPrice = object.settlement_price;
        }
        if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
            message.expirationTimestamp = BigInt(object.expiration_timestamp);
        }
        if (object.settlement_timestamp !== undefined && object.settlement_timestamp !== null) {
            message.settlementTimestamp = BigInt(object.settlement_timestamp);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.settlement_price = message.settlementPrice === null ? undefined : message.settlementPrice;
        obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? (message.expirationTimestamp?.toString)() : undefined;
        obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? (message.settlementTimestamp?.toString)() : undefined;
        obj.status = message.status === 0 ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAdminUpdateBinaryOptionsMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAdminUpdateBinaryOptionsMarket.decode(message.value);
    },
    toProto(message) {
        return MsgAdminUpdateBinaryOptionsMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
            value: MsgAdminUpdateBinaryOptionsMarket.encode(message).finish()
        };
    }
};
function createBaseMsgAdminUpdateBinaryOptionsMarketResponse() {
    return {};
}
export const MsgAdminUpdateBinaryOptionsMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
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
        const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAdminUpdateBinaryOptionsMarketResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAdminUpdateBinaryOptionsMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAdminUpdateBinaryOptionsMarketResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAdminUpdateBinaryOptionsMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse",
            value: MsgAdminUpdateBinaryOptionsMarketResponse.encode(message).finish()
        };
    }
};
