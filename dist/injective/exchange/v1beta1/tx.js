"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgExternalTransferResponse = exports.MsgExternalTransfer = exports.MsgSubaccountTransferResponse = exports.MsgSubaccountTransfer = exports.MsgBatchCancelDerivativeOrdersResponse = exports.MsgBatchCancelDerivativeOrders = exports.OrderData = exports.MsgCancelBinaryOptionsOrderResponse = exports.MsgCancelBinaryOptionsOrder = exports.MsgCancelDerivativeOrderResponse = exports.MsgCancelDerivativeOrder = exports.MsgCreateBinaryOptionsMarketOrderResponse = exports.MsgCreateBinaryOptionsMarketOrder = exports.MsgCreateDerivativeMarketOrderResponse = exports.MsgCreateDerivativeMarketOrder = exports.MsgBatchUpdateOrdersResponse = exports.MsgBatchUpdateOrders = exports.MsgBatchCancelBinaryOptionsOrdersResponse = exports.MsgBatchCancelBinaryOptionsOrders = exports.MsgBatchCancelSpotOrdersResponse = exports.MsgBatchCancelSpotOrders = exports.MsgCancelSpotOrderResponse = exports.MsgCancelSpotOrder = exports.MsgBatchCreateDerivativeLimitOrdersResponse = exports.MsgBatchCreateDerivativeLimitOrders = exports.MsgCreateBinaryOptionsLimitOrderResponse = exports.MsgCreateBinaryOptionsLimitOrder = exports.MsgCreateDerivativeLimitOrderResponse = exports.MsgCreateDerivativeLimitOrder = exports.MsgCreateSpotMarketOrderResponse = exports.MsgCreateSpotMarketOrder = exports.MsgInstantExpiryFuturesMarketLaunchResponse = exports.MsgInstantExpiryFuturesMarketLaunch = exports.MsgInstantBinaryOptionsMarketLaunchResponse = exports.MsgInstantBinaryOptionsMarketLaunch = exports.MsgInstantPerpetualMarketLaunchResponse = exports.MsgInstantPerpetualMarketLaunch = exports.MsgInstantSpotMarketLaunchResponse = exports.MsgInstantSpotMarketLaunch = exports.MsgBatchCreateSpotLimitOrdersResponse = exports.MsgBatchCreateSpotLimitOrders = exports.MsgCreateSpotLimitOrderResponse = exports.MsgCreateSpotLimitOrder = exports.MsgWithdrawResponse = exports.MsgWithdraw = exports.MsgDepositResponse = exports.MsgDeposit = exports.ExchangeTypeAmino = exports.ExchangeTypeSDKType = exports.ExchangeType = void 0;
exports.MsgAdminUpdateBinaryOptionsMarketResponse = exports.MsgAdminUpdateBinaryOptionsMarket = exports.MsgRewardsOptOutResponse = exports.MsgRewardsOptOut = exports.BatchCommunityPoolSpendProposal = exports.FeeDiscountProposal = exports.TradingRewardPendingPointsUpdateProposal = exports.RewardPointUpdate = exports.TradingRewardCampaignUpdateProposal = exports.TradingRewardCampaignLaunchProposal = exports.OracleParams = exports.ProviderOracleParams = exports.BinaryOptionsMarketParamUpdateProposal = exports.DenomDecimals = exports.UpdateDenomDecimalsProposal = exports.MarketForcedSettlementProposal = exports.DerivativeMarketParamUpdateProposal = exports.ExpiryFuturesMarketLaunchProposal = exports.BinaryOptionsMarketLaunchProposal = exports.PerpetualMarketLaunchProposal = exports.SpotMarketLaunchProposal = exports.BatchExchangeModificationProposal = exports.ExchangeEnableProposal = exports.SpotMarketParamUpdateProposal = exports.MsgExecResponse = exports.MsgExec = exports.MsgIncreasePositionMarginResponse = exports.MsgIncreasePositionMargin = exports.MsgLiquidatePositionResponse = exports.MsgLiquidatePosition = void 0;
exports.exchangeTypeFromJSON = exchangeTypeFromJSON;
exports.exchangeTypeToJSON = exchangeTypeToJSON;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const exchange_1 = require("./exchange");
const distribution_1 = require("../../../cosmos/distribution/v1beta1/distribution");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
var ExchangeType;
(function (ExchangeType) {
    ExchangeType[ExchangeType["EXCHANGE_UNSPECIFIED"] = 0] = "EXCHANGE_UNSPECIFIED";
    ExchangeType[ExchangeType["SPOT"] = 1] = "SPOT";
    ExchangeType[ExchangeType["DERIVATIVES"] = 2] = "DERIVATIVES";
    ExchangeType[ExchangeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExchangeType || (exports.ExchangeType = ExchangeType = {}));
exports.ExchangeTypeSDKType = ExchangeType;
exports.ExchangeTypeAmino = ExchangeType;
function exchangeTypeFromJSON(object) {
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
function exchangeTypeToJSON(object) {
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
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgDeposit = {
    typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
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
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
            value: exports.MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgDepositResponse",
            value: exports.MsgDepositResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdraw() {
    return {
        sender: "",
        subaccountId: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgWithdraw = {
    typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subaccountId !== "") {
            writer.uint32(18).string(message.subaccountId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
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
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdraw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdraw.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdraw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
            value: exports.MsgWithdraw.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawResponse() {
    return {};
}
exports.MsgWithdrawResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgWithdrawResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgWithdrawResponse",
            value: exports.MsgWithdrawResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotLimitOrder() {
    return {
        sender: "",
        order: exchange_1.SpotOrder.fromPartial({})
    };
}
exports.MsgCreateSpotLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.SpotOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? exchange_1.SpotOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSpotLimitOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.SpotOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? exchange_1.SpotOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateSpotLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateSpotLimitOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateSpotLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
            value: exports.MsgCreateSpotLimitOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotLimitOrderResponse() {
    return {
        orderHash: ""
    };
}
exports.MsgCreateSpotLimitOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateSpotLimitOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateSpotLimitOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateSpotLimitOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse",
            value: exports.MsgCreateSpotLimitOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateSpotLimitOrders() {
    return {
        sender: "",
        orders: []
    };
}
exports.MsgBatchCreateSpotLimitOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            exchange_1.SpotOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.orders.push(exchange_1.SpotOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => exchange_1.SpotOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCreateSpotLimitOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.orders = object.orders?.map(e => exchange_1.SpotOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exchange_1.SpotOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBatchCreateSpotLimitOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCreateSpotLimitOrders.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCreateSpotLimitOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
            value: exports.MsgBatchCreateSpotLimitOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateSpotLimitOrdersResponse() {
    return {
        orderHashes: []
    };
}
exports.MsgBatchCreateSpotLimitOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBatchCreateSpotLimitOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCreateSpotLimitOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCreateSpotLimitOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse",
            value: exports.MsgBatchCreateSpotLimitOrdersResponse.encode(message).finish()
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
exports.MsgInstantSpotMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgInstantSpotMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantSpotMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantSpotMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
            value: exports.MsgInstantSpotMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantSpotMarketLaunchResponse() {
    return {};
}
exports.MsgInstantSpotMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgInstantSpotMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantSpotMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantSpotMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse",
            value: exports.MsgInstantSpotMarketLaunchResponse.encode(message).finish()
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
exports.MsgInstantPerpetualMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(82).string(math_1.Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(90).string(math_1.Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(106).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.initialMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.maintenanceMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgInstantPerpetualMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantPerpetualMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantPerpetualMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
            value: exports.MsgInstantPerpetualMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantPerpetualMarketLaunchResponse() {
    return {};
}
exports.MsgInstantPerpetualMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgInstantPerpetualMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantPerpetualMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantPerpetualMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse",
            value: exports.MsgInstantPerpetualMarketLaunchResponse.encode(message).finish()
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
exports.MsgInstantBinaryOptionsMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
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
            writer.uint32(106).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgInstantBinaryOptionsMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantBinaryOptionsMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantBinaryOptionsMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
            value: exports.MsgInstantBinaryOptionsMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantBinaryOptionsMarketLaunchResponse() {
    return {};
}
exports.MsgInstantBinaryOptionsMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgInstantBinaryOptionsMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantBinaryOptionsMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantBinaryOptionsMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse",
            value: exports.MsgInstantBinaryOptionsMarketLaunchResponse.encode(message).finish()
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
exports.MsgInstantExpiryFuturesMarketLaunch = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(82).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(90).string(math_1.Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.initialMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.maintenanceMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgInstantExpiryFuturesMarketLaunch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantExpiryFuturesMarketLaunch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantExpiryFuturesMarketLaunch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
            value: exports.MsgInstantExpiryFuturesMarketLaunch.encode(message).finish()
        };
    }
};
function createBaseMsgInstantExpiryFuturesMarketLaunchResponse() {
    return {};
}
exports.MsgInstantExpiryFuturesMarketLaunchResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgInstantExpiryFuturesMarketLaunchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInstantExpiryFuturesMarketLaunchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInstantExpiryFuturesMarketLaunchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse",
            value: exports.MsgInstantExpiryFuturesMarketLaunchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotMarketOrder() {
    return {
        sender: "",
        order: exchange_1.SpotOrder.fromPartial({})
    };
}
exports.MsgCreateSpotMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.SpotOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSpotMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.SpotOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? exchange_1.SpotOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateSpotMarketOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.SpotOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? exchange_1.SpotOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateSpotMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateSpotMarketOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateSpotMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
            value: exports.MsgCreateSpotMarketOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateSpotMarketOrderResponse() {
    return {
        orderHash: ""
    };
}
exports.MsgCreateSpotMarketOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateSpotMarketOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateSpotMarketOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateSpotMarketOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse",
            value: exports.MsgCreateSpotMarketOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeLimitOrder() {
    return {
        sender: "",
        order: exchange_1.DerivativeOrder.fromPartial({})
    };
}
exports.MsgCreateDerivativeLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? exchange_1.DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDerivativeLimitOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? exchange_1.DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDerivativeLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDerivativeLimitOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDerivativeLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
            value: exports.MsgCreateDerivativeLimitOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeLimitOrderResponse() {
    return {
        orderHash: ""
    };
}
exports.MsgCreateDerivativeLimitOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateDerivativeLimitOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDerivativeLimitOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDerivativeLimitOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse",
            value: exports.MsgCreateDerivativeLimitOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsLimitOrder() {
    return {
        sender: "",
        order: exchange_1.DerivativeOrder.fromPartial({})
    };
}
exports.MsgCreateBinaryOptionsLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? exchange_1.DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBinaryOptionsLimitOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? exchange_1.DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBinaryOptionsLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBinaryOptionsLimitOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBinaryOptionsLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
            value: exports.MsgCreateBinaryOptionsLimitOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsLimitOrderResponse() {
    return {
        orderHash: ""
    };
}
exports.MsgCreateBinaryOptionsLimitOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateBinaryOptionsLimitOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBinaryOptionsLimitOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBinaryOptionsLimitOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse",
            value: exports.MsgCreateBinaryOptionsLimitOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateDerivativeLimitOrders() {
    return {
        sender: "",
        orders: []
    };
}
exports.MsgBatchCreateDerivativeLimitOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.orders) {
            exchange_1.DerivativeOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.orders.push(exchange_1.DerivativeOrder.decode(reader, reader.uint32()));
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
        message.orders = object.orders?.map(e => exchange_1.DerivativeOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCreateDerivativeLimitOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.orders = object.orders?.map(e => exchange_1.DerivativeOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exchange_1.DerivativeOrder.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBatchCreateDerivativeLimitOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCreateDerivativeLimitOrders.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCreateDerivativeLimitOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
            value: exports.MsgBatchCreateDerivativeLimitOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCreateDerivativeLimitOrdersResponse() {
    return {
        orderHashes: []
    };
}
exports.MsgBatchCreateDerivativeLimitOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.orderHashes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBatchCreateDerivativeLimitOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCreateDerivativeLimitOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCreateDerivativeLimitOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse",
            value: exports.MsgBatchCreateDerivativeLimitOrdersResponse.encode(message).finish()
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
exports.MsgCancelSpotOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCancelSpotOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSpotOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSpotOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
            value: exports.MsgCancelSpotOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSpotOrderResponse() {
    return {};
}
exports.MsgCancelSpotOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCancelSpotOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSpotOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSpotOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrderResponse",
            value: exports.MsgCancelSpotOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelSpotOrders() {
    return {
        sender: "",
        data: []
    };
}
exports.MsgBatchCancelSpotOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            exports.OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelSpotOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.data.push(exports.OrderData.decode(reader, reader.uint32()));
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
        message.data = object.data?.map(e => exports.OrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelSpotOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.data = object.data?.map(e => exports.OrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.OrderData.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBatchCancelSpotOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCancelSpotOrders.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCancelSpotOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
            value: exports.MsgBatchCancelSpotOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelSpotOrdersResponse() {
    return {
        success: []
    };
}
exports.MsgBatchCancelSpotOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBatchCancelSpotOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCancelSpotOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCancelSpotOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse",
            value: exports.MsgBatchCancelSpotOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelBinaryOptionsOrders() {
    return {
        sender: "",
        data: []
    };
}
exports.MsgBatchCancelBinaryOptionsOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            exports.OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.data.push(exports.OrderData.decode(reader, reader.uint32()));
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
        message.data = object.data?.map(e => exports.OrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelBinaryOptionsOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.data = object.data?.map(e => exports.OrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.OrderData.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBatchCancelBinaryOptionsOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCancelBinaryOptionsOrders.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCancelBinaryOptionsOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
            value: exports.MsgBatchCancelBinaryOptionsOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelBinaryOptionsOrdersResponse() {
    return {
        success: []
    };
}
exports.MsgBatchCancelBinaryOptionsOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBatchCancelBinaryOptionsOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCancelBinaryOptionsOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCancelBinaryOptionsOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse",
            value: exports.MsgBatchCancelBinaryOptionsOrdersResponse.encode(message).finish()
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
exports.MsgBatchUpdateOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            exports.OrderData.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCancel) {
            exports.OrderData.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.spotOrdersToCreate) {
            exchange_1.SpotOrder.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.derivativeOrdersToCreate) {
            exchange_1.DerivativeOrder.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.binaryOptionsOrdersToCancel) {
            exports.OrderData.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketIdsToCancelAll) {
            writer.uint32(82).string(v);
        }
        for (const v of message.binaryOptionsOrdersToCreate) {
            exchange_1.DerivativeOrder.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.spotOrdersToCancel.push(exports.OrderData.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.derivativeOrdersToCancel.push(exports.OrderData.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.spotOrdersToCreate.push(exchange_1.SpotOrder.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.derivativeOrdersToCreate.push(exchange_1.DerivativeOrder.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.binaryOptionsOrdersToCancel.push(exports.OrderData.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.binaryOptionsMarketIdsToCancelAll.push(reader.string());
                    break;
                case 11:
                    message.binaryOptionsOrdersToCreate.push(exchange_1.DerivativeOrder.decode(reader, reader.uint32()));
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
        message.spotOrdersToCancel = object.spotOrdersToCancel?.map(e => exports.OrderData.fromPartial(e)) || [];
        message.derivativeOrdersToCancel = object.derivativeOrdersToCancel?.map(e => exports.OrderData.fromPartial(e)) || [];
        message.spotOrdersToCreate = object.spotOrdersToCreate?.map(e => exchange_1.SpotOrder.fromPartial(e)) || [];
        message.derivativeOrdersToCreate = object.derivativeOrdersToCreate?.map(e => exchange_1.DerivativeOrder.fromPartial(e)) || [];
        message.binaryOptionsOrdersToCancel = object.binaryOptionsOrdersToCancel?.map(e => exports.OrderData.fromPartial(e)) || [];
        message.binaryOptionsMarketIdsToCancelAll = object.binaryOptionsMarketIdsToCancelAll?.map(e => e) || [];
        message.binaryOptionsOrdersToCreate = object.binaryOptionsOrdersToCreate?.map(e => exchange_1.DerivativeOrder.fromPartial(e)) || [];
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
        message.spotOrdersToCancel = object.spot_orders_to_cancel?.map(e => exports.OrderData.fromAmino(e)) || [];
        message.derivativeOrdersToCancel = object.derivative_orders_to_cancel?.map(e => exports.OrderData.fromAmino(e)) || [];
        message.spotOrdersToCreate = object.spot_orders_to_create?.map(e => exchange_1.SpotOrder.fromAmino(e)) || [];
        message.derivativeOrdersToCreate = object.derivative_orders_to_create?.map(e => exchange_1.DerivativeOrder.fromAmino(e)) || [];
        message.binaryOptionsOrdersToCancel = object.binary_options_orders_to_cancel?.map(e => exports.OrderData.fromAmino(e)) || [];
        message.binaryOptionsMarketIdsToCancelAll = object.binary_options_market_ids_to_cancel_all?.map(e => e) || [];
        message.binaryOptionsOrdersToCreate = object.binary_options_orders_to_create?.map(e => exchange_1.DerivativeOrder.fromAmino(e)) || [];
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
            obj.spot_orders_to_cancel = message.spotOrdersToCancel.map(e => e ? exports.OrderData.toAmino(e) : undefined);
        }
        else {
            obj.spot_orders_to_cancel = message.spotOrdersToCancel;
        }
        if (message.derivativeOrdersToCancel) {
            obj.derivative_orders_to_cancel = message.derivativeOrdersToCancel.map(e => e ? exports.OrderData.toAmino(e) : undefined);
        }
        else {
            obj.derivative_orders_to_cancel = message.derivativeOrdersToCancel;
        }
        if (message.spotOrdersToCreate) {
            obj.spot_orders_to_create = message.spotOrdersToCreate.map(e => e ? exchange_1.SpotOrder.toAmino(e) : undefined);
        }
        else {
            obj.spot_orders_to_create = message.spotOrdersToCreate;
        }
        if (message.derivativeOrdersToCreate) {
            obj.derivative_orders_to_create = message.derivativeOrdersToCreate.map(e => e ? exchange_1.DerivativeOrder.toAmino(e) : undefined);
        }
        else {
            obj.derivative_orders_to_create = message.derivativeOrdersToCreate;
        }
        if (message.binaryOptionsOrdersToCancel) {
            obj.binary_options_orders_to_cancel = message.binaryOptionsOrdersToCancel.map(e => e ? exports.OrderData.toAmino(e) : undefined);
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
            obj.binary_options_orders_to_create = message.binaryOptionsOrdersToCreate.map(e => e ? exchange_1.DerivativeOrder.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_orders_to_create = message.binaryOptionsOrdersToCreate;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBatchUpdateOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchUpdateOrders.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchUpdateOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
            value: exports.MsgBatchUpdateOrders.encode(message).finish()
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
exports.MsgBatchUpdateOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBatchUpdateOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchUpdateOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchUpdateOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse",
            value: exports.MsgBatchUpdateOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeMarketOrder() {
    return {
        sender: "",
        order: exchange_1.DerivativeOrder.fromPartial({})
    };
}
exports.MsgCreateDerivativeMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDerivativeMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? exchange_1.DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateDerivativeMarketOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? exchange_1.DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDerivativeMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDerivativeMarketOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDerivativeMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
            value: exports.MsgCreateDerivativeMarketOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDerivativeMarketOrderResponse() {
    return {
        orderHash: ""
    };
}
exports.MsgCreateDerivativeMarketOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateDerivativeMarketOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDerivativeMarketOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDerivativeMarketOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse",
            value: exports.MsgCreateDerivativeMarketOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsMarketOrder() {
    return {
        sender: "",
        order: exchange_1.DerivativeOrder.fromPartial({})
    };
}
exports.MsgCreateBinaryOptionsMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? exchange_1.DerivativeOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBinaryOptionsMarketOrder();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.order = message.order ? exchange_1.DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBinaryOptionsMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBinaryOptionsMarketOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBinaryOptionsMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
            value: exports.MsgCreateBinaryOptionsMarketOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBinaryOptionsMarketOrderResponse() {
    return {
        orderHash: ""
    };
}
exports.MsgCreateBinaryOptionsMarketOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderHash !== "") {
            writer.uint32(10).string(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateBinaryOptionsMarketOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBinaryOptionsMarketOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBinaryOptionsMarketOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse",
            value: exports.MsgCreateBinaryOptionsMarketOrderResponse.encode(message).finish()
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
exports.MsgCancelDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCancelDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
            value: exports.MsgCancelDerivativeOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelDerivativeOrderResponse() {
    return {};
}
exports.MsgCancelDerivativeOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCancelDerivativeOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelDerivativeOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelDerivativeOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse",
            value: exports.MsgCancelDerivativeOrderResponse.encode(message).finish()
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
exports.MsgCancelBinaryOptionsOrder = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCancelBinaryOptionsOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelBinaryOptionsOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelBinaryOptionsOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
            value: exports.MsgCancelBinaryOptionsOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelBinaryOptionsOrderResponse() {
    return {};
}
exports.MsgCancelBinaryOptionsOrderResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCancelBinaryOptionsOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelBinaryOptionsOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelBinaryOptionsOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse",
            value: exports.MsgCancelBinaryOptionsOrderResponse.encode(message).finish()
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
exports.OrderData = {
    typeUrl: "/injective.exchange.v1beta1.OrderData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.OrderData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OrderData.decode(message.value);
    },
    toProto(message) {
        return exports.OrderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.OrderData",
            value: exports.OrderData.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelDerivativeOrders() {
    return {
        sender: "",
        data: []
    };
}
exports.MsgBatchCancelDerivativeOrders = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.data) {
            exports.OrderData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchCancelDerivativeOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.data.push(exports.OrderData.decode(reader, reader.uint32()));
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
        message.data = object.data?.map(e => exports.OrderData.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBatchCancelDerivativeOrders();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.data = object.data?.map(e => exports.OrderData.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.OrderData.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBatchCancelDerivativeOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCancelDerivativeOrders.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCancelDerivativeOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
            value: exports.MsgBatchCancelDerivativeOrders.encode(message).finish()
        };
    }
};
function createBaseMsgBatchCancelDerivativeOrdersResponse() {
    return {
        success: []
    };
}
exports.MsgBatchCancelDerivativeOrdersResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.success) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBatchCancelDerivativeOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchCancelDerivativeOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchCancelDerivativeOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse",
            value: exports.MsgBatchCancelDerivativeOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubaccountTransfer() {
    return {
        sender: "",
        sourceSubaccountId: "",
        destinationSubaccountId: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSubaccountTransfer = {
    typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
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
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.source_subaccount_id = message.sourceSubaccountId === "" ? undefined : message.sourceSubaccountId;
        obj.destination_subaccount_id = message.destinationSubaccountId === "" ? undefined : message.destinationSubaccountId;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubaccountTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubaccountTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubaccountTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
            value: exports.MsgSubaccountTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgSubaccountTransferResponse() {
    return {};
}
exports.MsgSubaccountTransferResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSubaccountTransferResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubaccountTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubaccountTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransferResponse",
            value: exports.MsgSubaccountTransferResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExternalTransfer() {
    return {
        sender: "",
        sourceSubaccountId: "",
        destinationSubaccountId: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgExternalTransfer = {
    typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
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
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.source_subaccount_id = message.sourceSubaccountId === "" ? undefined : message.sourceSubaccountId;
        obj.destination_subaccount_id = message.destinationSubaccountId === "" ? undefined : message.destinationSubaccountId;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExternalTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgExternalTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExternalTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
            value: exports.MsgExternalTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgExternalTransferResponse() {
    return {};
}
exports.MsgExternalTransferResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgExternalTransferResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgExternalTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExternalTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExternalTransferResponse",
            value: exports.MsgExternalTransferResponse.encode(message).finish()
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
exports.MsgLiquidatePosition = {
    typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? exchange_1.DerivativeOrder.fromPartial(object.order) : undefined;
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
            message.order = exchange_1.DerivativeOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order = message.order ? exchange_1.DerivativeOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLiquidatePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgLiquidatePosition.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLiquidatePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
            value: exports.MsgLiquidatePosition.encode(message).finish()
        };
    }
};
function createBaseMsgLiquidatePositionResponse() {
    return {};
}
exports.MsgLiquidatePositionResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgLiquidatePositionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgLiquidatePositionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLiquidatePositionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePositionResponse",
            value: exports.MsgLiquidatePositionResponse.encode(message).finish()
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
exports.MsgIncreasePositionMargin = {
    typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.amount, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.amount = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgIncreasePositionMargin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgIncreasePositionMargin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIncreasePositionMargin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
            value: exports.MsgIncreasePositionMargin.encode(message).finish()
        };
    }
};
function createBaseMsgIncreasePositionMarginResponse() {
    return {};
}
exports.MsgIncreasePositionMarginResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgIncreasePositionMarginResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgIncreasePositionMarginResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIncreasePositionMarginResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMarginResponse",
            value: exports.MsgIncreasePositionMarginResponse.encode(message).finish()
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
exports.MsgExec = {
    typeUrl: "/injective.exchange.v1beta1.MsgExec",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.bankFunds) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositsSubaccountId !== "") {
            writer.uint32(26).string(message.depositsSubaccountId);
        }
        for (const v of message.depositFunds) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.bankFunds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.depositsSubaccountId = reader.string();
                    break;
                case 4:
                    message.depositFunds.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.bankFunds = object.bankFunds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.depositsSubaccountId = object.depositsSubaccountId ?? "";
        message.depositFunds = object.depositFunds?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.contractAddress = object.contractAddress ?? "";
        message.data = object.data ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.bankFunds = object.bank_funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.deposits_subaccount_id !== undefined && object.deposits_subaccount_id !== null) {
            message.depositsSubaccountId = object.deposits_subaccount_id;
        }
        message.depositFunds = object.deposit_funds?.map(e => coin_1.Coin.fromAmino(e)) || [];
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
            obj.bank_funds = message.bankFunds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.bank_funds = message.bankFunds;
        }
        obj.deposits_subaccount_id = message.depositsSubaccountId === "" ? undefined : message.depositsSubaccountId;
        if (message.depositFunds) {
            obj.deposit_funds = message.depositFunds.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.deposit_funds = message.depositFunds;
        }
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        obj.data = message.data === "" ? undefined : message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgExec.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExec",
            value: exports.MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {};
}
exports.MsgExecResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgExecResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgExecResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgExecResponse",
            value: exports.MsgExecResponse.encode(message).finish()
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
exports.SpotMarketParamUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== undefined) {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.minPriceTickSize !== undefined) {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== undefined) {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.relayerFeeShareRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.SpotMarketParamUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SpotMarketParamUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SpotMarketParamUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
            value: exports.SpotMarketParamUpdateProposal.encode(message).finish()
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
exports.ExchangeEnableProposal = {
    typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.ExchangeEnableProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExchangeEnableProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ExchangeEnableProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ExchangeEnableProposal",
            value: exports.ExchangeEnableProposal.encode(message).finish()
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
exports.BatchExchangeModificationProposal = {
    typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.spotMarketParamUpdateProposals) {
            exports.SpotMarketParamUpdateProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.derivativeMarketParamUpdateProposals) {
            exports.DerivativeMarketParamUpdateProposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.spotMarketLaunchProposals) {
            exports.SpotMarketLaunchProposal.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.perpetualMarketLaunchProposals) {
            exports.PerpetualMarketLaunchProposal.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.expiryFuturesMarketLaunchProposals) {
            exports.ExpiryFuturesMarketLaunchProposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.tradingRewardCampaignUpdateProposal !== undefined) {
            exports.TradingRewardCampaignUpdateProposal.encode(message.tradingRewardCampaignUpdateProposal, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketLaunchProposals) {
            exports.BinaryOptionsMarketLaunchProposal.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.binaryOptionsParamUpdateProposals) {
            exports.BinaryOptionsMarketParamUpdateProposal.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.denomDecimalsUpdateProposal !== undefined) {
            exports.UpdateDenomDecimalsProposal.encode(message.denomDecimalsUpdateProposal, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.spotMarketParamUpdateProposals.push(exports.SpotMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.derivativeMarketParamUpdateProposals.push(exports.DerivativeMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.spotMarketLaunchProposals.push(exports.SpotMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.perpetualMarketLaunchProposals.push(exports.PerpetualMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.expiryFuturesMarketLaunchProposals.push(exports.ExpiryFuturesMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.tradingRewardCampaignUpdateProposal = exports.TradingRewardCampaignUpdateProposal.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.binaryOptionsMarketLaunchProposals.push(exports.BinaryOptionsMarketLaunchProposal.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.binaryOptionsParamUpdateProposals.push(exports.BinaryOptionsMarketParamUpdateProposal.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.denomDecimalsUpdateProposal = exports.UpdateDenomDecimalsProposal.decode(reader, reader.uint32());
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
        message.spotMarketParamUpdateProposals = object.spotMarketParamUpdateProposals?.map(e => exports.SpotMarketParamUpdateProposal.fromPartial(e)) || [];
        message.derivativeMarketParamUpdateProposals = object.derivativeMarketParamUpdateProposals?.map(e => exports.DerivativeMarketParamUpdateProposal.fromPartial(e)) || [];
        message.spotMarketLaunchProposals = object.spotMarketLaunchProposals?.map(e => exports.SpotMarketLaunchProposal.fromPartial(e)) || [];
        message.perpetualMarketLaunchProposals = object.perpetualMarketLaunchProposals?.map(e => exports.PerpetualMarketLaunchProposal.fromPartial(e)) || [];
        message.expiryFuturesMarketLaunchProposals = object.expiryFuturesMarketLaunchProposals?.map(e => exports.ExpiryFuturesMarketLaunchProposal.fromPartial(e)) || [];
        message.tradingRewardCampaignUpdateProposal = object.tradingRewardCampaignUpdateProposal !== undefined && object.tradingRewardCampaignUpdateProposal !== null ? exports.TradingRewardCampaignUpdateProposal.fromPartial(object.tradingRewardCampaignUpdateProposal) : undefined;
        message.binaryOptionsMarketLaunchProposals = object.binaryOptionsMarketLaunchProposals?.map(e => exports.BinaryOptionsMarketLaunchProposal.fromPartial(e)) || [];
        message.binaryOptionsParamUpdateProposals = object.binaryOptionsParamUpdateProposals?.map(e => exports.BinaryOptionsMarketParamUpdateProposal.fromPartial(e)) || [];
        message.denomDecimalsUpdateProposal = object.denomDecimalsUpdateProposal !== undefined && object.denomDecimalsUpdateProposal !== null ? exports.UpdateDenomDecimalsProposal.fromPartial(object.denomDecimalsUpdateProposal) : undefined;
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
        message.spotMarketParamUpdateProposals = object.spot_market_param_update_proposals?.map(e => exports.SpotMarketParamUpdateProposal.fromAmino(e)) || [];
        message.derivativeMarketParamUpdateProposals = object.derivative_market_param_update_proposals?.map(e => exports.DerivativeMarketParamUpdateProposal.fromAmino(e)) || [];
        message.spotMarketLaunchProposals = object.spot_market_launch_proposals?.map(e => exports.SpotMarketLaunchProposal.fromAmino(e)) || [];
        message.perpetualMarketLaunchProposals = object.perpetual_market_launch_proposals?.map(e => exports.PerpetualMarketLaunchProposal.fromAmino(e)) || [];
        message.expiryFuturesMarketLaunchProposals = object.expiry_futures_market_launch_proposals?.map(e => exports.ExpiryFuturesMarketLaunchProposal.fromAmino(e)) || [];
        if (object.trading_reward_campaign_update_proposal !== undefined && object.trading_reward_campaign_update_proposal !== null) {
            message.tradingRewardCampaignUpdateProposal = exports.TradingRewardCampaignUpdateProposal.fromAmino(object.trading_reward_campaign_update_proposal);
        }
        message.binaryOptionsMarketLaunchProposals = object.binary_options_market_launch_proposals?.map(e => exports.BinaryOptionsMarketLaunchProposal.fromAmino(e)) || [];
        message.binaryOptionsParamUpdateProposals = object.binary_options_param_update_proposals?.map(e => exports.BinaryOptionsMarketParamUpdateProposal.fromAmino(e)) || [];
        if (object.denom_decimals_update_proposal !== undefined && object.denom_decimals_update_proposal !== null) {
            message.denomDecimalsUpdateProposal = exports.UpdateDenomDecimalsProposal.fromAmino(object.denom_decimals_update_proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.spotMarketParamUpdateProposals) {
            obj.spot_market_param_update_proposals = message.spotMarketParamUpdateProposals.map(e => e ? exports.SpotMarketParamUpdateProposal.toAmino(e) : undefined);
        }
        else {
            obj.spot_market_param_update_proposals = message.spotMarketParamUpdateProposals;
        }
        if (message.derivativeMarketParamUpdateProposals) {
            obj.derivative_market_param_update_proposals = message.derivativeMarketParamUpdateProposals.map(e => e ? exports.DerivativeMarketParamUpdateProposal.toAmino(e) : undefined);
        }
        else {
            obj.derivative_market_param_update_proposals = message.derivativeMarketParamUpdateProposals;
        }
        if (message.spotMarketLaunchProposals) {
            obj.spot_market_launch_proposals = message.spotMarketLaunchProposals.map(e => e ? exports.SpotMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.spot_market_launch_proposals = message.spotMarketLaunchProposals;
        }
        if (message.perpetualMarketLaunchProposals) {
            obj.perpetual_market_launch_proposals = message.perpetualMarketLaunchProposals.map(e => e ? exports.PerpetualMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.perpetual_market_launch_proposals = message.perpetualMarketLaunchProposals;
        }
        if (message.expiryFuturesMarketLaunchProposals) {
            obj.expiry_futures_market_launch_proposals = message.expiryFuturesMarketLaunchProposals.map(e => e ? exports.ExpiryFuturesMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.expiry_futures_market_launch_proposals = message.expiryFuturesMarketLaunchProposals;
        }
        obj.trading_reward_campaign_update_proposal = message.tradingRewardCampaignUpdateProposal ? exports.TradingRewardCampaignUpdateProposal.toAmino(message.tradingRewardCampaignUpdateProposal) : undefined;
        if (message.binaryOptionsMarketLaunchProposals) {
            obj.binary_options_market_launch_proposals = message.binaryOptionsMarketLaunchProposals.map(e => e ? exports.BinaryOptionsMarketLaunchProposal.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_market_launch_proposals = message.binaryOptionsMarketLaunchProposals;
        }
        if (message.binaryOptionsParamUpdateProposals) {
            obj.binary_options_param_update_proposals = message.binaryOptionsParamUpdateProposals.map(e => e ? exports.BinaryOptionsMarketParamUpdateProposal.toAmino(e) : undefined);
        }
        else {
            obj.binary_options_param_update_proposals = message.binaryOptionsParamUpdateProposals;
        }
        obj.denom_decimals_update_proposal = message.denomDecimalsUpdateProposal ? exports.UpdateDenomDecimalsProposal.toAmino(message.denomDecimalsUpdateProposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchExchangeModificationProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchExchangeModificationProposal.decode(message.value);
    },
    toProto(message) {
        return exports.BatchExchangeModificationProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
            value: exports.BatchExchangeModificationProposal.encode(message).finish()
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
exports.SpotMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.makerFeeRate !== undefined) {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.SpotMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SpotMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SpotMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
            value: exports.SpotMarketLaunchProposal.encode(message).finish()
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
exports.PerpetualMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(82).string(math_1.Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(90).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(106).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(114).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.initialMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.maintenanceMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.PerpetualMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PerpetualMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return exports.PerpetualMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
            value: exports.PerpetualMarketLaunchProposal.encode(message).finish()
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
exports.BinaryOptionsMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(114).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(122).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 15:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.BinaryOptionsMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BinaryOptionsMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return exports.BinaryOptionsMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
            value: exports.BinaryOptionsMarketLaunchProposal.encode(message).finish()
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
exports.ExpiryFuturesMarketLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(82).string(math_1.Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(90).string(math_1.Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(106).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(114).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(122).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.initialMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.maintenanceMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 15:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.ExpiryFuturesMarketLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExpiryFuturesMarketLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ExpiryFuturesMarketLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
            value: exports.ExpiryFuturesMarketLaunchProposal.encode(message).finish()
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
exports.DerivativeMarketParamUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== undefined) {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.makerFeeRate !== undefined) {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== undefined) {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.minPriceTickSize !== undefined) {
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== undefined) {
            writer.uint32(82).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.hourlyInterestRate !== undefined) {
            writer.uint32(90).string(math_1.Decimal.fromUserInput(message.hourlyInterestRate, 18).atomics);
        }
        if (message.hourlyFundingRateCap !== undefined) {
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.hourlyFundingRateCap, 18).atomics);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        if (message.oracleParams !== undefined) {
            exports.OracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.initialMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.maintenanceMarginRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.relayerFeeShareRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.hourlyInterestRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.hourlyFundingRateCap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.oracleParams = exports.OracleParams.decode(reader, reader.uint32());
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
        message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? exports.OracleParams.fromPartial(object.oracleParams) : undefined;
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
            message.oracleParams = exports.OracleParams.fromAmino(object.oracle_params);
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
        obj.oracle_params = message.oracleParams ? exports.OracleParams.toAmino(message.oracleParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DerivativeMarketParamUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DerivativeMarketParamUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.DerivativeMarketParamUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
            value: exports.DerivativeMarketParamUpdateProposal.encode(message).finish()
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
exports.MarketForcedSettlementProposal = {
    typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.settlementPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MarketForcedSettlementProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MarketForcedSettlementProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MarketForcedSettlementProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
            value: exports.MarketForcedSettlementProposal.encode(message).finish()
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
exports.UpdateDenomDecimalsProposal = {
    typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.denomDecimals) {
            exports.DenomDecimals.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.denomDecimals.push(exports.DenomDecimals.decode(reader, reader.uint32()));
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
        message.denomDecimals = object.denomDecimals?.map(e => exports.DenomDecimals.fromPartial(e)) || [];
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
        message.denomDecimals = object.denom_decimals?.map(e => exports.DenomDecimals.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.denomDecimals) {
            obj.denom_decimals = message.denomDecimals.map(e => e ? exports.DenomDecimals.toAmino(e) : undefined);
        }
        else {
            obj.denom_decimals = message.denomDecimals;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateDenomDecimalsProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UpdateDenomDecimalsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateDenomDecimalsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
            value: exports.UpdateDenomDecimalsProposal.encode(message).finish()
        };
    }
};
function createBaseDenomDecimals() {
    return {
        denom: "",
        decimals: BigInt(0)
    };
}
exports.DenomDecimals = {
    typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(16).uint64(message.decimals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.DenomDecimals.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DenomDecimals.decode(message.value);
    },
    toProto(message) {
        return exports.DenomDecimals.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
            value: exports.DenomDecimals.encode(message).finish()
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
exports.BinaryOptionsMarketParamUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== undefined) {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== undefined) {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.minPriceTickSize !== undefined) {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== undefined) {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.expirationTimestamp !== BigInt(0)) {
            writer.uint32(72).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== BigInt(0)) {
            writer.uint32(80).int64(message.settlementTimestamp);
        }
        if (message.settlementPrice !== undefined) {
            writer.uint32(90).string(math_1.Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        if (message.admin !== "") {
            writer.uint32(98).string(message.admin);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        if (message.oracleParams !== undefined) {
            exports.ProviderOracleParams.encode(message.oracleParams, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.makerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.takerFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.relayerFeeShareRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.minPriceTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.minQuantityTickSize = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.expirationTimestamp = reader.int64();
                    break;
                case 10:
                    message.settlementTimestamp = reader.int64();
                    break;
                case 11:
                    message.settlementPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.admin = reader.string();
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.oracleParams = exports.ProviderOracleParams.decode(reader, reader.uint32());
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
        message.oracleParams = object.oracleParams !== undefined && object.oracleParams !== null ? exports.ProviderOracleParams.fromPartial(object.oracleParams) : undefined;
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
            message.oracleParams = exports.ProviderOracleParams.fromAmino(object.oracle_params);
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
        obj.oracle_params = message.oracleParams ? exports.ProviderOracleParams.toAmino(message.oracleParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BinaryOptionsMarketParamUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BinaryOptionsMarketParamUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.BinaryOptionsMarketParamUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
            value: exports.BinaryOptionsMarketParamUpdateProposal.encode(message).finish()
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
exports.ProviderOracleParams = {
    typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.ProviderOracleParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProviderOracleParams.decode(message.value);
    },
    toProto(message) {
        return exports.ProviderOracleParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ProviderOracleParams",
            value: exports.ProviderOracleParams.encode(message).finish()
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
exports.OracleParams = {
    typeUrl: "/injective.exchange.v1beta1.OracleParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.OracleParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OracleParams.decode(message.value);
    },
    toProto(message) {
        return exports.OracleParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.OracleParams",
            value: exports.OracleParams.encode(message).finish()
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
exports.TradingRewardCampaignLaunchProposal = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPools) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.campaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.campaignRewardPools.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
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
        message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
        message.campaignRewardPools = object.campaignRewardPools?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
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
            message.campaignInfo = exchange_1.TradingRewardCampaignInfo.fromAmino(object.campaign_info);
        }
        message.campaignRewardPools = object.campaign_reward_pools?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.campaign_info = message.campaignInfo ? exchange_1.TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
        if (message.campaignRewardPools) {
            obj.campaign_reward_pools = message.campaignRewardPools.map(e => e ? exchange_1.CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.campaign_reward_pools = message.campaignRewardPools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TradingRewardCampaignLaunchProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TradingRewardCampaignLaunchProposal.decode(message.value);
    },
    toProto(message) {
        return exports.TradingRewardCampaignLaunchProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
            value: exports.TradingRewardCampaignLaunchProposal.encode(message).finish()
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
exports.TradingRewardCampaignUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.campaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsAdditions) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.campaignRewardPoolsUpdates) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.campaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.campaignRewardPoolsAdditions.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.campaignRewardPoolsUpdates.push(exchange_1.CampaignRewardPool.decode(reader, reader.uint32()));
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
        message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
        message.campaignRewardPoolsAdditions = object.campaignRewardPoolsAdditions?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
        message.campaignRewardPoolsUpdates = object.campaignRewardPoolsUpdates?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
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
            message.campaignInfo = exchange_1.TradingRewardCampaignInfo.fromAmino(object.campaign_info);
        }
        message.campaignRewardPoolsAdditions = object.campaign_reward_pools_additions?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        message.campaignRewardPoolsUpdates = object.campaign_reward_pools_updates?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.campaign_info = message.campaignInfo ? exchange_1.TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
        if (message.campaignRewardPoolsAdditions) {
            obj.campaign_reward_pools_additions = message.campaignRewardPoolsAdditions.map(e => e ? exchange_1.CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.campaign_reward_pools_additions = message.campaignRewardPoolsAdditions;
        }
        if (message.campaignRewardPoolsUpdates) {
            obj.campaign_reward_pools_updates = message.campaignRewardPoolsUpdates.map(e => e ? exchange_1.CampaignRewardPool.toAmino(e) : undefined);
        }
        else {
            obj.campaign_reward_pools_updates = message.campaignRewardPoolsUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TradingRewardCampaignUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TradingRewardCampaignUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.TradingRewardCampaignUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
            value: exports.TradingRewardCampaignUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseRewardPointUpdate() {
    return {
        accountAddress: "",
        newPoints: ""
    };
}
exports.RewardPointUpdate = {
    typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.newPoints !== "") {
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.newPoints, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardPointUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 12:
                    message.newPoints = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.RewardPointUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RewardPointUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.RewardPointUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.RewardPointUpdate",
            value: exports.RewardPointUpdate.encode(message).finish()
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
exports.TradingRewardPendingPointsUpdateProposal = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            exports.RewardPointUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.rewardPointUpdates.push(exports.RewardPointUpdate.decode(reader, reader.uint32()));
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
        message.rewardPointUpdates = object.rewardPointUpdates?.map(e => exports.RewardPointUpdate.fromPartial(e)) || [];
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
        message.rewardPointUpdates = object.reward_point_updates?.map(e => exports.RewardPointUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.pending_pool_timestamp = message.pendingPoolTimestamp !== BigInt(0) ? (message.pendingPoolTimestamp?.toString)() : undefined;
        if (message.rewardPointUpdates) {
            obj.reward_point_updates = message.rewardPointUpdates.map(e => e ? exports.RewardPointUpdate.toAmino(e) : undefined);
        }
        else {
            obj.reward_point_updates = message.rewardPointUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TradingRewardPendingPointsUpdateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TradingRewardPendingPointsUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.TradingRewardPendingPointsUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
            value: exports.TradingRewardPendingPointsUpdateProposal.encode(message).finish()
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
exports.FeeDiscountProposal = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.schedule !== undefined) {
            exchange_1.FeeDiscountSchedule.encode(message.schedule, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.schedule = exchange_1.FeeDiscountSchedule.decode(reader, reader.uint32());
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
        message.schedule = object.schedule !== undefined && object.schedule !== null ? exchange_1.FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
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
            message.schedule = exchange_1.FeeDiscountSchedule.fromAmino(object.schedule);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.schedule = message.schedule ? exchange_1.FeeDiscountSchedule.toAmino(message.schedule) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeeDiscountProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FeeDiscountProposal.decode(message.value);
    },
    toProto(message) {
        return exports.FeeDiscountProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
            value: exports.FeeDiscountProposal.encode(message).finish()
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
exports.BatchCommunityPoolSpendProposal = {
    typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.proposals) {
            distribution_1.CommunityPoolSpendProposal.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proposals.push(distribution_1.CommunityPoolSpendProposal.decode(reader, reader.uint32()));
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
        message.proposals = object.proposals?.map(e => distribution_1.CommunityPoolSpendProposal.fromPartial(e)) || [];
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
        message.proposals = object.proposals?.map(e => distribution_1.CommunityPoolSpendProposal.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? distribution_1.CommunityPoolSpendProposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = message.proposals;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchCommunityPoolSpendProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchCommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return exports.BatchCommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
            value: exports.BatchCommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
function createBaseMsgRewardsOptOut() {
    return {
        sender: ""
    };
}
exports.MsgRewardsOptOut = {
    typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRewardsOptOut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRewardsOptOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRewardsOptOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
            value: exports.MsgRewardsOptOut.encode(message).finish()
        };
    }
};
function createBaseMsgRewardsOptOutResponse() {
    return {};
}
exports.MsgRewardsOptOutResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRewardsOptOutResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRewardsOptOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRewardsOptOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOutResponse",
            value: exports.MsgRewardsOptOutResponse.encode(message).finish()
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
exports.MsgAdminUpdateBinaryOptionsMarket = {
    typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.settlementPrice !== undefined) {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.settlementPrice, 18).atomics);
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.settlementPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.MsgAdminUpdateBinaryOptionsMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAdminUpdateBinaryOptionsMarket.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAdminUpdateBinaryOptionsMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
            value: exports.MsgAdminUpdateBinaryOptionsMarket.encode(message).finish()
        };
    }
};
function createBaseMsgAdminUpdateBinaryOptionsMarketResponse() {
    return {};
}
exports.MsgAdminUpdateBinaryOptionsMarketResponse = {
    typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgAdminUpdateBinaryOptionsMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAdminUpdateBinaryOptionsMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAdminUpdateBinaryOptionsMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse",
            value: exports.MsgAdminUpdateBinaryOptionsMarketResponse.encode(message).finish()
        };
    }
};
