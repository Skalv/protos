"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrderFail = exports.EventConditionalDerivativeOrderTrigger = exports.EventCancelConditionalDerivativeOrder = exports.EventNewConditionalDerivativeOrder = exports.EventTradingRewardDistribution = exports.EventTradingRewardCampaignUpdate = exports.EventFeeDiscountSchedule = exports.EventCancelDerivativeOrder = exports.DerivativeMarketOrderCancel = exports.EventBatchDepositUpdate = exports.EventSubaccountBalanceTransfer = exports.EventSubaccountWithdraw = exports.EventSubaccountDeposit = exports.EventPerpetualMarketFundingUpdate = exports.EventExpiryFuturesMarketUpdate = exports.EventPerpetualMarketUpdate = exports.EventSpotMarketUpdate = exports.EventCancelSpotOrder = exports.EventNewDerivativeOrders = exports.EventNewSpotOrders = exports.EventBinaryOptionsMarketUpdate = exports.EventDerivativeMarketPaused = exports.EventBatchDerivativePosition = exports.EventLostFundsFromLiquidation = exports.EventBatchDerivativeExecution = exports.EventBatchSpotExecution = void 0;
//@ts-nocheck
const exchange_1 = require("./exchange");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
function createBaseEventBatchSpotExecution() {
    return {
        marketId: "",
        isBuy: false,
        executionType: 0,
        trades: []
    };
}
exports.EventBatchSpotExecution = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuy === true) {
            writer.uint32(16).bool(message.isBuy);
        }
        if (message.executionType !== 0) {
            writer.uint32(24).int32(message.executionType);
        }
        for (const v of message.trades) {
            exchange_1.TradeLog.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchSpotExecution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.isBuy = reader.bool();
                    break;
                case 3:
                    message.executionType = reader.int32();
                    break;
                case 4:
                    message.trades.push(exchange_1.TradeLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBatchSpotExecution();
        message.marketId = object.marketId ?? "";
        message.isBuy = object.isBuy ?? false;
        message.executionType = object.executionType ?? 0;
        message.trades = object.trades?.map(e => exchange_1.TradeLog.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBatchSpotExecution();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.is_buy !== undefined && object.is_buy !== null) {
            message.isBuy = object.is_buy;
        }
        if (object.executionType !== undefined && object.executionType !== null) {
            message.executionType = object.executionType;
        }
        message.trades = object.trades?.map(e => exchange_1.TradeLog.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
        obj.executionType = message.executionType === 0 ? undefined : message.executionType;
        if (message.trades) {
            obj.trades = message.trades.map(e => e ? exchange_1.TradeLog.toAmino(e) : undefined);
        }
        else {
            obj.trades = message.trades;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBatchSpotExecution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBatchSpotExecution.decode(message.value);
    },
    toProto(message) {
        return exports.EventBatchSpotExecution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
            value: exports.EventBatchSpotExecution.encode(message).finish()
        };
    }
};
function createBaseEventBatchDerivativeExecution() {
    return {
        marketId: "",
        isBuy: false,
        isLiquidation: false,
        cumulativeFunding: undefined,
        executionType: 0,
        trades: []
    };
}
exports.EventBatchDerivativeExecution = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuy === true) {
            writer.uint32(16).bool(message.isBuy);
        }
        if (message.isLiquidation === true) {
            writer.uint32(24).bool(message.isLiquidation);
        }
        if (message.cumulativeFunding !== undefined) {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.cumulativeFunding, 18).atomics);
        }
        if (message.executionType !== 0) {
            writer.uint32(40).int32(message.executionType);
        }
        for (const v of message.trades) {
            exchange_1.DerivativeTradeLog.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchDerivativeExecution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.isBuy = reader.bool();
                    break;
                case 3:
                    message.isLiquidation = reader.bool();
                    break;
                case 4:
                    message.cumulativeFunding = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.executionType = reader.int32();
                    break;
                case 6:
                    message.trades.push(exchange_1.DerivativeTradeLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBatchDerivativeExecution();
        message.marketId = object.marketId ?? "";
        message.isBuy = object.isBuy ?? false;
        message.isLiquidation = object.isLiquidation ?? false;
        message.cumulativeFunding = object.cumulativeFunding ?? undefined;
        message.executionType = object.executionType ?? 0;
        message.trades = object.trades?.map(e => exchange_1.DerivativeTradeLog.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBatchDerivativeExecution();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.is_buy !== undefined && object.is_buy !== null) {
            message.isBuy = object.is_buy;
        }
        if (object.is_liquidation !== undefined && object.is_liquidation !== null) {
            message.isLiquidation = object.is_liquidation;
        }
        if (object.cumulative_funding !== undefined && object.cumulative_funding !== null) {
            message.cumulativeFunding = object.cumulative_funding;
        }
        if (object.executionType !== undefined && object.executionType !== null) {
            message.executionType = object.executionType;
        }
        message.trades = object.trades?.map(e => exchange_1.DerivativeTradeLog.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
        obj.is_liquidation = message.isLiquidation === false ? undefined : message.isLiquidation;
        obj.cumulative_funding = message.cumulativeFunding === null ? undefined : message.cumulativeFunding;
        obj.executionType = message.executionType === 0 ? undefined : message.executionType;
        if (message.trades) {
            obj.trades = message.trades.map(e => e ? exchange_1.DerivativeTradeLog.toAmino(e) : undefined);
        }
        else {
            obj.trades = message.trades;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBatchDerivativeExecution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBatchDerivativeExecution.decode(message.value);
    },
    toProto(message) {
        return exports.EventBatchDerivativeExecution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
            value: exports.EventBatchDerivativeExecution.encode(message).finish()
        };
    }
};
function createBaseEventLostFundsFromLiquidation() {
    return {
        marketId: "",
        subaccountId: new Uint8Array(),
        lostFundsFromAvailableDuringPayout: "",
        lostFundsFromOrderCancels: ""
    };
}
exports.EventLostFundsFromLiquidation = {
    typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(18).bytes(message.subaccountId);
        }
        if (message.lostFundsFromAvailableDuringPayout !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.lostFundsFromAvailableDuringPayout, 18).atomics);
        }
        if (message.lostFundsFromOrderCancels !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.lostFundsFromOrderCancels, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLostFundsFromLiquidation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.bytes();
                    break;
                case 3:
                    message.lostFundsFromAvailableDuringPayout = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.lostFundsFromOrderCancels = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventLostFundsFromLiquidation();
        message.marketId = object.marketId ?? "";
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.lostFundsFromAvailableDuringPayout = object.lostFundsFromAvailableDuringPayout ?? "";
        message.lostFundsFromOrderCancels = object.lostFundsFromOrderCancels ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventLostFundsFromLiquidation();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = (0, helpers_1.bytesFromBase64)(object.subaccount_id);
        }
        if (object.lost_funds_from_available_during_payout !== undefined && object.lost_funds_from_available_during_payout !== null) {
            message.lostFundsFromAvailableDuringPayout = object.lost_funds_from_available_during_payout;
        }
        if (object.lost_funds_from_order_cancels !== undefined && object.lost_funds_from_order_cancels !== null) {
            message.lostFundsFromOrderCancels = object.lost_funds_from_order_cancels;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.subaccount_id = message.subaccountId ? (0, helpers_1.base64FromBytes)(message.subaccountId) : undefined;
        obj.lost_funds_from_available_during_payout = message.lostFundsFromAvailableDuringPayout === "" ? undefined : message.lostFundsFromAvailableDuringPayout;
        obj.lost_funds_from_order_cancels = message.lostFundsFromOrderCancels === "" ? undefined : message.lostFundsFromOrderCancels;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventLostFundsFromLiquidation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventLostFundsFromLiquidation.decode(message.value);
    },
    toProto(message) {
        return exports.EventLostFundsFromLiquidation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
            value: exports.EventLostFundsFromLiquidation.encode(message).finish()
        };
    }
};
function createBaseEventBatchDerivativePosition() {
    return {
        marketId: "",
        positions: []
    };
}
exports.EventBatchDerivativePosition = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.positions) {
            exchange_1.SubaccountPosition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchDerivativePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.positions.push(exchange_1.SubaccountPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBatchDerivativePosition();
        message.marketId = object.marketId ?? "";
        message.positions = object.positions?.map(e => exchange_1.SubaccountPosition.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBatchDerivativePosition();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.positions = object.positions?.map(e => exchange_1.SubaccountPosition.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.positions) {
            obj.positions = message.positions.map(e => e ? exchange_1.SubaccountPosition.toAmino(e) : undefined);
        }
        else {
            obj.positions = message.positions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBatchDerivativePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBatchDerivativePosition.decode(message.value);
    },
    toProto(message) {
        return exports.EventBatchDerivativePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
            value: exports.EventBatchDerivativePosition.encode(message).finish()
        };
    }
};
function createBaseEventDerivativeMarketPaused() {
    return {
        marketId: "",
        settlePrice: "",
        totalMissingFunds: "",
        missingFundsRate: ""
    };
}
exports.EventDerivativeMarketPaused = {
    typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.settlePrice !== "") {
            writer.uint32(18).string(message.settlePrice);
        }
        if (message.totalMissingFunds !== "") {
            writer.uint32(26).string(message.totalMissingFunds);
        }
        if (message.missingFundsRate !== "") {
            writer.uint32(34).string(message.missingFundsRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDerivativeMarketPaused();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.settlePrice = reader.string();
                    break;
                case 3:
                    message.totalMissingFunds = reader.string();
                    break;
                case 4:
                    message.missingFundsRate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventDerivativeMarketPaused();
        message.marketId = object.marketId ?? "";
        message.settlePrice = object.settlePrice ?? "";
        message.totalMissingFunds = object.totalMissingFunds ?? "";
        message.missingFundsRate = object.missingFundsRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDerivativeMarketPaused();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.settle_price !== undefined && object.settle_price !== null) {
            message.settlePrice = object.settle_price;
        }
        if (object.total_missing_funds !== undefined && object.total_missing_funds !== null) {
            message.totalMissingFunds = object.total_missing_funds;
        }
        if (object.missing_funds_rate !== undefined && object.missing_funds_rate !== null) {
            message.missingFundsRate = object.missing_funds_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.settle_price = message.settlePrice === "" ? undefined : message.settlePrice;
        obj.total_missing_funds = message.totalMissingFunds === "" ? undefined : message.totalMissingFunds;
        obj.missing_funds_rate = message.missingFundsRate === "" ? undefined : message.missingFundsRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventDerivativeMarketPaused.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventDerivativeMarketPaused.decode(message.value);
    },
    toProto(message) {
        return exports.EventDerivativeMarketPaused.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
            value: exports.EventDerivativeMarketPaused.encode(message).finish()
        };
    }
};
function createBaseEventBinaryOptionsMarketUpdate() {
    return {
        market: exchange_1.BinaryOptionsMarket.fromPartial({})
    };
}
exports.EventBinaryOptionsMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            exchange_1.BinaryOptionsMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBinaryOptionsMarketUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exchange_1.BinaryOptionsMarket.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBinaryOptionsMarketUpdate();
        message.market = object.market !== undefined && object.market !== null ? exchange_1.BinaryOptionsMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBinaryOptionsMarketUpdate();
        if (object.market !== undefined && object.market !== null) {
            message.market = exchange_1.BinaryOptionsMarket.fromAmino(object.market);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? exchange_1.BinaryOptionsMarket.toAmino(message.market) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBinaryOptionsMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBinaryOptionsMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.EventBinaryOptionsMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
            value: exports.EventBinaryOptionsMarketUpdate.encode(message).finish()
        };
    }
};
function createBaseEventNewSpotOrders() {
    return {
        marketId: "",
        buyOrders: [],
        sellOrders: []
    };
}
exports.EventNewSpotOrders = {
    typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.buyOrders) {
            exchange_1.SpotLimitOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            exchange_1.SpotLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewSpotOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.buyOrders.push(exchange_1.SpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sellOrders.push(exchange_1.SpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventNewSpotOrders();
        message.marketId = object.marketId ?? "";
        message.buyOrders = object.buyOrders?.map(e => exchange_1.SpotLimitOrder.fromPartial(e)) || [];
        message.sellOrders = object.sellOrders?.map(e => exchange_1.SpotLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventNewSpotOrders();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.buyOrders = object.buy_orders?.map(e => exchange_1.SpotLimitOrder.fromAmino(e)) || [];
        message.sellOrders = object.sell_orders?.map(e => exchange_1.SpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.buyOrders) {
            obj.buy_orders = message.buyOrders.map(e => e ? exchange_1.SpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.buy_orders = message.buyOrders;
        }
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? exchange_1.SpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventNewSpotOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventNewSpotOrders.decode(message.value);
    },
    toProto(message) {
        return exports.EventNewSpotOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
            value: exports.EventNewSpotOrders.encode(message).finish()
        };
    }
};
function createBaseEventNewDerivativeOrders() {
    return {
        marketId: "",
        buyOrders: [],
        sellOrders: []
    };
}
exports.EventNewDerivativeOrders = {
    typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.buyOrders) {
            exchange_1.DerivativeLimitOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            exchange_1.DerivativeLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewDerivativeOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.buyOrders.push(exchange_1.DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sellOrders.push(exchange_1.DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventNewDerivativeOrders();
        message.marketId = object.marketId ?? "";
        message.buyOrders = object.buyOrders?.map(e => exchange_1.DerivativeLimitOrder.fromPartial(e)) || [];
        message.sellOrders = object.sellOrders?.map(e => exchange_1.DerivativeLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventNewDerivativeOrders();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.buyOrders = object.buy_orders?.map(e => exchange_1.DerivativeLimitOrder.fromAmino(e)) || [];
        message.sellOrders = object.sell_orders?.map(e => exchange_1.DerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.buyOrders) {
            obj.buy_orders = message.buyOrders.map(e => e ? exchange_1.DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.buy_orders = message.buyOrders;
        }
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? exchange_1.DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventNewDerivativeOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventNewDerivativeOrders.decode(message.value);
    },
    toProto(message) {
        return exports.EventNewDerivativeOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
            value: exports.EventNewDerivativeOrders.encode(message).finish()
        };
    }
};
function createBaseEventCancelSpotOrder() {
    return {
        marketId: "",
        order: exchange_1.SpotLimitOrder.fromPartial({})
    };
}
exports.EventCancelSpotOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.order !== undefined) {
            exchange_1.SpotLimitOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelSpotOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.SpotLimitOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCancelSpotOrder();
        message.marketId = object.marketId ?? "";
        message.order = object.order !== undefined && object.order !== null ? exchange_1.SpotLimitOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelSpotOrder();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.SpotLimitOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order = message.order ? exchange_1.SpotLimitOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCancelSpotOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCancelSpotOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EventCancelSpotOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
            value: exports.EventCancelSpotOrder.encode(message).finish()
        };
    }
};
function createBaseEventSpotMarketUpdate() {
    return {
        market: exchange_1.SpotMarket.fromPartial({})
    };
}
exports.EventSpotMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            exchange_1.SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSpotMarketUpdate();
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
        const message = createBaseEventSpotMarketUpdate();
        message.market = object.market !== undefined && object.market !== null ? exchange_1.SpotMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSpotMarketUpdate();
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
        return exports.EventSpotMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSpotMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.EventSpotMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
            value: exports.EventSpotMarketUpdate.encode(message).finish()
        };
    }
};
function createBaseEventPerpetualMarketUpdate() {
    return {
        market: exchange_1.DerivativeMarket.fromPartial({}),
        perpetualMarketInfo: undefined,
        funding: undefined
    };
}
exports.EventPerpetualMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            exchange_1.DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualMarketInfo !== undefined) {
            exchange_1.PerpetualMarketInfo.encode(message.perpetualMarketInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.funding !== undefined) {
            exchange_1.PerpetualMarketFunding.encode(message.funding, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventPerpetualMarketUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exchange_1.DerivativeMarket.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.perpetualMarketInfo = exchange_1.PerpetualMarketInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.funding = exchange_1.PerpetualMarketFunding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventPerpetualMarketUpdate();
        message.market = object.market !== undefined && object.market !== null ? exchange_1.DerivativeMarket.fromPartial(object.market) : undefined;
        message.perpetualMarketInfo = object.perpetualMarketInfo !== undefined && object.perpetualMarketInfo !== null ? exchange_1.PerpetualMarketInfo.fromPartial(object.perpetualMarketInfo) : undefined;
        message.funding = object.funding !== undefined && object.funding !== null ? exchange_1.PerpetualMarketFunding.fromPartial(object.funding) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventPerpetualMarketUpdate();
        if (object.market !== undefined && object.market !== null) {
            message.market = exchange_1.DerivativeMarket.fromAmino(object.market);
        }
        if (object.perpetual_market_info !== undefined && object.perpetual_market_info !== null) {
            message.perpetualMarketInfo = exchange_1.PerpetualMarketInfo.fromAmino(object.perpetual_market_info);
        }
        if (object.funding !== undefined && object.funding !== null) {
            message.funding = exchange_1.PerpetualMarketFunding.fromAmino(object.funding);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? exchange_1.DerivativeMarket.toAmino(message.market) : undefined;
        obj.perpetual_market_info = message.perpetualMarketInfo ? exchange_1.PerpetualMarketInfo.toAmino(message.perpetualMarketInfo) : undefined;
        obj.funding = message.funding ? exchange_1.PerpetualMarketFunding.toAmino(message.funding) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventPerpetualMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventPerpetualMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.EventPerpetualMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
            value: exports.EventPerpetualMarketUpdate.encode(message).finish()
        };
    }
};
function createBaseEventExpiryFuturesMarketUpdate() {
    return {
        market: exchange_1.DerivativeMarket.fromPartial({}),
        expiryFuturesMarketInfo: undefined
    };
}
exports.EventExpiryFuturesMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            exchange_1.DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiryFuturesMarketInfo !== undefined) {
            exchange_1.ExpiryFuturesMarketInfo.encode(message.expiryFuturesMarketInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExpiryFuturesMarketUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = exchange_1.DerivativeMarket.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expiryFuturesMarketInfo = exchange_1.ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventExpiryFuturesMarketUpdate();
        message.market = object.market !== undefined && object.market !== null ? exchange_1.DerivativeMarket.fromPartial(object.market) : undefined;
        message.expiryFuturesMarketInfo = object.expiryFuturesMarketInfo !== undefined && object.expiryFuturesMarketInfo !== null ? exchange_1.ExpiryFuturesMarketInfo.fromPartial(object.expiryFuturesMarketInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventExpiryFuturesMarketUpdate();
        if (object.market !== undefined && object.market !== null) {
            message.market = exchange_1.DerivativeMarket.fromAmino(object.market);
        }
        if (object.expiry_futures_market_info !== undefined && object.expiry_futures_market_info !== null) {
            message.expiryFuturesMarketInfo = exchange_1.ExpiryFuturesMarketInfo.fromAmino(object.expiry_futures_market_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? exchange_1.DerivativeMarket.toAmino(message.market) : undefined;
        obj.expiry_futures_market_info = message.expiryFuturesMarketInfo ? exchange_1.ExpiryFuturesMarketInfo.toAmino(message.expiryFuturesMarketInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventExpiryFuturesMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventExpiryFuturesMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.EventExpiryFuturesMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
            value: exports.EventExpiryFuturesMarketUpdate.encode(message).finish()
        };
    }
};
function createBaseEventPerpetualMarketFundingUpdate() {
    return {
        marketId: "",
        funding: exchange_1.PerpetualMarketFunding.fromPartial({}),
        isHourlyFunding: false,
        fundingRate: undefined,
        markPrice: undefined
    };
}
exports.EventPerpetualMarketFundingUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.funding !== undefined) {
            exchange_1.PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
        }
        if (message.isHourlyFunding === true) {
            writer.uint32(24).bool(message.isHourlyFunding);
        }
        if (message.fundingRate !== undefined) {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.fundingRate, 18).atomics);
        }
        if (message.markPrice !== undefined) {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.markPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventPerpetualMarketFundingUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.funding = exchange_1.PerpetualMarketFunding.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.isHourlyFunding = reader.bool();
                    break;
                case 4:
                    message.fundingRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
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
        const message = createBaseEventPerpetualMarketFundingUpdate();
        message.marketId = object.marketId ?? "";
        message.funding = object.funding !== undefined && object.funding !== null ? exchange_1.PerpetualMarketFunding.fromPartial(object.funding) : undefined;
        message.isHourlyFunding = object.isHourlyFunding ?? false;
        message.fundingRate = object.fundingRate ?? undefined;
        message.markPrice = object.markPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventPerpetualMarketFundingUpdate();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.funding !== undefined && object.funding !== null) {
            message.funding = exchange_1.PerpetualMarketFunding.fromAmino(object.funding);
        }
        if (object.is_hourly_funding !== undefined && object.is_hourly_funding !== null) {
            message.isHourlyFunding = object.is_hourly_funding;
        }
        if (object.funding_rate !== undefined && object.funding_rate !== null) {
            message.fundingRate = object.funding_rate;
        }
        if (object.mark_price !== undefined && object.mark_price !== null) {
            message.markPrice = object.mark_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.funding = message.funding ? exchange_1.PerpetualMarketFunding.toAmino(message.funding) : undefined;
        obj.is_hourly_funding = message.isHourlyFunding === false ? undefined : message.isHourlyFunding;
        obj.funding_rate = message.fundingRate === null ? undefined : message.fundingRate;
        obj.mark_price = message.markPrice === null ? undefined : message.markPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventPerpetualMarketFundingUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventPerpetualMarketFundingUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.EventPerpetualMarketFundingUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
            value: exports.EventPerpetualMarketFundingUpdate.encode(message).finish()
        };
    }
};
function createBaseEventSubaccountDeposit() {
    return {
        srcAddress: "",
        subaccountId: new Uint8Array(),
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.EventSubaccountDeposit = {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.srcAddress !== "") {
            writer.uint32(10).string(message.srcAddress);
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(18).bytes(message.subaccountId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubaccountDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.srcAddress = reader.string();
                    break;
                case 2:
                    message.subaccountId = reader.bytes();
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
        const message = createBaseEventSubaccountDeposit();
        message.srcAddress = object.srcAddress ?? "";
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubaccountDeposit();
        if (object.src_address !== undefined && object.src_address !== null) {
            message.srcAddress = object.src_address;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = (0, helpers_1.bytesFromBase64)(object.subaccount_id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.src_address = message.srcAddress === "" ? undefined : message.srcAddress;
        obj.subaccount_id = message.subaccountId ? (0, helpers_1.base64FromBytes)(message.subaccountId) : undefined;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSubaccountDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSubaccountDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.EventSubaccountDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
            value: exports.EventSubaccountDeposit.encode(message).finish()
        };
    }
};
function createBaseEventSubaccountWithdraw() {
    return {
        subaccountId: new Uint8Array(),
        dstAddress: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.EventSubaccountWithdraw = {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId.length !== 0) {
            writer.uint32(10).bytes(message.subaccountId);
        }
        if (message.dstAddress !== "") {
            writer.uint32(18).string(message.dstAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubaccountWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.bytes();
                    break;
                case 2:
                    message.dstAddress = reader.string();
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
        const message = createBaseEventSubaccountWithdraw();
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.dstAddress = object.dstAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubaccountWithdraw();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = (0, helpers_1.bytesFromBase64)(object.subaccount_id);
        }
        if (object.dst_address !== undefined && object.dst_address !== null) {
            message.dstAddress = object.dst_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId ? (0, helpers_1.base64FromBytes)(message.subaccountId) : undefined;
        obj.dst_address = message.dstAddress === "" ? undefined : message.dstAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSubaccountWithdraw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSubaccountWithdraw.decode(message.value);
    },
    toProto(message) {
        return exports.EventSubaccountWithdraw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
            value: exports.EventSubaccountWithdraw.encode(message).finish()
        };
    }
};
function createBaseEventSubaccountBalanceTransfer() {
    return {
        srcSubaccountId: "",
        dstSubaccountId: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.EventSubaccountBalanceTransfer = {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.srcSubaccountId !== "") {
            writer.uint32(10).string(message.srcSubaccountId);
        }
        if (message.dstSubaccountId !== "") {
            writer.uint32(18).string(message.dstSubaccountId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubaccountBalanceTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.srcSubaccountId = reader.string();
                    break;
                case 2:
                    message.dstSubaccountId = reader.string();
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
        const message = createBaseEventSubaccountBalanceTransfer();
        message.srcSubaccountId = object.srcSubaccountId ?? "";
        message.dstSubaccountId = object.dstSubaccountId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubaccountBalanceTransfer();
        if (object.src_subaccount_id !== undefined && object.src_subaccount_id !== null) {
            message.srcSubaccountId = object.src_subaccount_id;
        }
        if (object.dst_subaccount_id !== undefined && object.dst_subaccount_id !== null) {
            message.dstSubaccountId = object.dst_subaccount_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.src_subaccount_id = message.srcSubaccountId === "" ? undefined : message.srcSubaccountId;
        obj.dst_subaccount_id = message.dstSubaccountId === "" ? undefined : message.dstSubaccountId;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSubaccountBalanceTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSubaccountBalanceTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.EventSubaccountBalanceTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
            value: exports.EventSubaccountBalanceTransfer.encode(message).finish()
        };
    }
};
function createBaseEventBatchDepositUpdate() {
    return {
        depositUpdates: []
    };
}
exports.EventBatchDepositUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.depositUpdates) {
            exchange_1.DepositUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchDepositUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositUpdates.push(exchange_1.DepositUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBatchDepositUpdate();
        message.depositUpdates = object.depositUpdates?.map(e => exchange_1.DepositUpdate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBatchDepositUpdate();
        message.depositUpdates = object.deposit_updates?.map(e => exchange_1.DepositUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.depositUpdates) {
            obj.deposit_updates = message.depositUpdates.map(e => e ? exchange_1.DepositUpdate.toAmino(e) : undefined);
        }
        else {
            obj.deposit_updates = message.depositUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBatchDepositUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBatchDepositUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.EventBatchDepositUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
            value: exports.EventBatchDepositUpdate.encode(message).finish()
        };
    }
};
function createBaseDerivativeMarketOrderCancel() {
    return {
        marketOrder: undefined,
        cancelQuantity: ""
    };
}
exports.DerivativeMarketOrderCancel = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketOrder !== undefined) {
            exchange_1.DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(10).fork()).ldelim();
        }
        if (message.cancelQuantity !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.cancelQuantity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketOrderCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketOrder = exchange_1.DerivativeMarketOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cancelQuantity = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeMarketOrderCancel();
        message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? exchange_1.DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
        message.cancelQuantity = object.cancelQuantity ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeMarketOrderCancel();
        if (object.market_order !== undefined && object.market_order !== null) {
            message.marketOrder = exchange_1.DerivativeMarketOrder.fromAmino(object.market_order);
        }
        if (object.cancel_quantity !== undefined && object.cancel_quantity !== null) {
            message.cancelQuantity = object.cancel_quantity;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_order = message.marketOrder ? exchange_1.DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
        obj.cancel_quantity = message.cancelQuantity === "" ? undefined : message.cancelQuantity;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DerivativeMarketOrderCancel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DerivativeMarketOrderCancel.decode(message.value);
    },
    toProto(message) {
        return exports.DerivativeMarketOrderCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
            value: exports.DerivativeMarketOrderCancel.encode(message).finish()
        };
    }
};
function createBaseEventCancelDerivativeOrder() {
    return {
        marketId: "",
        isLimitCancel: false,
        limitOrder: undefined,
        marketOrderCancel: undefined
    };
}
exports.EventCancelDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isLimitCancel === true) {
            writer.uint32(16).bool(message.isLimitCancel);
        }
        if (message.limitOrder !== undefined) {
            exchange_1.DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
        }
        if (message.marketOrderCancel !== undefined) {
            exports.DerivativeMarketOrderCancel.encode(message.marketOrderCancel, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelDerivativeOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.isLimitCancel = reader.bool();
                    break;
                case 3:
                    message.limitOrder = exchange_1.DerivativeLimitOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.marketOrderCancel = exports.DerivativeMarketOrderCancel.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCancelDerivativeOrder();
        message.marketId = object.marketId ?? "";
        message.isLimitCancel = object.isLimitCancel ?? false;
        message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? exchange_1.DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
        message.marketOrderCancel = object.marketOrderCancel !== undefined && object.marketOrderCancel !== null ? exports.DerivativeMarketOrderCancel.fromPartial(object.marketOrderCancel) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelDerivativeOrder();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.isLimitCancel !== undefined && object.isLimitCancel !== null) {
            message.isLimitCancel = object.isLimitCancel;
        }
        if (object.limit_order !== undefined && object.limit_order !== null) {
            message.limitOrder = exchange_1.DerivativeLimitOrder.fromAmino(object.limit_order);
        }
        if (object.market_order_cancel !== undefined && object.market_order_cancel !== null) {
            message.marketOrderCancel = exports.DerivativeMarketOrderCancel.fromAmino(object.market_order_cancel);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isLimitCancel = message.isLimitCancel === false ? undefined : message.isLimitCancel;
        obj.limit_order = message.limitOrder ? exchange_1.DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
        obj.market_order_cancel = message.marketOrderCancel ? exports.DerivativeMarketOrderCancel.toAmino(message.marketOrderCancel) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCancelDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCancelDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EventCancelDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
            value: exports.EventCancelDerivativeOrder.encode(message).finish()
        };
    }
};
function createBaseEventFeeDiscountSchedule() {
    return {
        schedule: undefined
    };
}
exports.EventFeeDiscountSchedule = {
    typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.schedule !== undefined) {
            exchange_1.FeeDiscountSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventFeeDiscountSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseEventFeeDiscountSchedule();
        message.schedule = object.schedule !== undefined && object.schedule !== null ? exchange_1.FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventFeeDiscountSchedule();
        if (object.schedule !== undefined && object.schedule !== null) {
            message.schedule = exchange_1.FeeDiscountSchedule.fromAmino(object.schedule);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.schedule = message.schedule ? exchange_1.FeeDiscountSchedule.toAmino(message.schedule) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventFeeDiscountSchedule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventFeeDiscountSchedule.decode(message.value);
    },
    toProto(message) {
        return exports.EventFeeDiscountSchedule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
            value: exports.EventFeeDiscountSchedule.encode(message).finish()
        };
    }
};
function createBaseEventTradingRewardCampaignUpdate() {
    return {
        campaignInfo: undefined,
        campaignRewardPools: []
    };
}
exports.EventTradingRewardCampaignUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.campaignInfo !== undefined) {
            exchange_1.TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.campaignRewardPools) {
            exchange_1.CampaignRewardPool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTradingRewardCampaignUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignInfo = exchange_1.TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = createBaseEventTradingRewardCampaignUpdate();
        message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? exchange_1.TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
        message.campaignRewardPools = object.campaignRewardPools?.map(e => exchange_1.CampaignRewardPool.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTradingRewardCampaignUpdate();
        if (object.campaign_info !== undefined && object.campaign_info !== null) {
            message.campaignInfo = exchange_1.TradingRewardCampaignInfo.fromAmino(object.campaign_info);
        }
        message.campaignRewardPools = object.campaign_reward_pools?.map(e => exchange_1.CampaignRewardPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
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
        return exports.EventTradingRewardCampaignUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventTradingRewardCampaignUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.EventTradingRewardCampaignUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
            value: exports.EventTradingRewardCampaignUpdate.encode(message).finish()
        };
    }
};
function createBaseEventTradingRewardDistribution() {
    return {
        accountRewards: []
    };
}
exports.EventTradingRewardDistribution = {
    typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accountRewards) {
            exchange_1.AccountRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTradingRewardDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountRewards.push(exchange_1.AccountRewards.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventTradingRewardDistribution();
        message.accountRewards = object.accountRewards?.map(e => exchange_1.AccountRewards.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTradingRewardDistribution();
        message.accountRewards = object.account_rewards?.map(e => exchange_1.AccountRewards.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accountRewards) {
            obj.account_rewards = message.accountRewards.map(e => e ? exchange_1.AccountRewards.toAmino(e) : undefined);
        }
        else {
            obj.account_rewards = message.accountRewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventTradingRewardDistribution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventTradingRewardDistribution.decode(message.value);
    },
    toProto(message) {
        return exports.EventTradingRewardDistribution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
            value: exports.EventTradingRewardDistribution.encode(message).finish()
        };
    }
};
function createBaseEventNewConditionalDerivativeOrder() {
    return {
        marketId: "",
        order: undefined,
        hash: new Uint8Array(),
        isMarket: false
    };
}
exports.EventNewConditionalDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.order !== undefined) {
            exchange_1.DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(26).bytes(message.hash);
        }
        if (message.isMarket === true) {
            writer.uint32(32).bool(message.isMarket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewConditionalDerivativeOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.order = exchange_1.DerivativeOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hash = reader.bytes();
                    break;
                case 4:
                    message.isMarket = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventNewConditionalDerivativeOrder();
        message.marketId = object.marketId ?? "";
        message.order = object.order !== undefined && object.order !== null ? exchange_1.DerivativeOrder.fromPartial(object.order) : undefined;
        message.hash = object.hash ?? new Uint8Array();
        message.isMarket = object.isMarket ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventNewConditionalDerivativeOrder();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = exchange_1.DerivativeOrder.fromAmino(object.order);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.is_market !== undefined && object.is_market !== null) {
            message.isMarket = object.is_market;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order = message.order ? exchange_1.DerivativeOrder.toAmino(message.order) : undefined;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.is_market = message.isMarket === false ? undefined : message.isMarket;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventNewConditionalDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventNewConditionalDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EventNewConditionalDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
            value: exports.EventNewConditionalDerivativeOrder.encode(message).finish()
        };
    }
};
function createBaseEventCancelConditionalDerivativeOrder() {
    return {
        marketId: "",
        isLimitCancel: false,
        limitOrder: undefined,
        marketOrder: undefined
    };
}
exports.EventCancelConditionalDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isLimitCancel === true) {
            writer.uint32(16).bool(message.isLimitCancel);
        }
        if (message.limitOrder !== undefined) {
            exchange_1.DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
        }
        if (message.marketOrder !== undefined) {
            exchange_1.DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelConditionalDerivativeOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.isLimitCancel = reader.bool();
                    break;
                case 3:
                    message.limitOrder = exchange_1.DerivativeLimitOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.marketOrder = exchange_1.DerivativeMarketOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCancelConditionalDerivativeOrder();
        message.marketId = object.marketId ?? "";
        message.isLimitCancel = object.isLimitCancel ?? false;
        message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? exchange_1.DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
        message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? exchange_1.DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelConditionalDerivativeOrder();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.isLimitCancel !== undefined && object.isLimitCancel !== null) {
            message.isLimitCancel = object.isLimitCancel;
        }
        if (object.limit_order !== undefined && object.limit_order !== null) {
            message.limitOrder = exchange_1.DerivativeLimitOrder.fromAmino(object.limit_order);
        }
        if (object.market_order !== undefined && object.market_order !== null) {
            message.marketOrder = exchange_1.DerivativeMarketOrder.fromAmino(object.market_order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isLimitCancel = message.isLimitCancel === false ? undefined : message.isLimitCancel;
        obj.limit_order = message.limitOrder ? exchange_1.DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
        obj.market_order = message.marketOrder ? exchange_1.DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCancelConditionalDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCancelConditionalDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EventCancelConditionalDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
            value: exports.EventCancelConditionalDerivativeOrder.encode(message).finish()
        };
    }
};
function createBaseEventConditionalDerivativeOrderTrigger() {
    return {
        marketId: new Uint8Array(),
        isLimitTrigger: false,
        triggeredOrderHash: new Uint8Array(),
        placedOrderHash: new Uint8Array()
    };
}
exports.EventConditionalDerivativeOrderTrigger = {
    typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId.length !== 0) {
            writer.uint32(10).bytes(message.marketId);
        }
        if (message.isLimitTrigger === true) {
            writer.uint32(16).bool(message.isLimitTrigger);
        }
        if (message.triggeredOrderHash.length !== 0) {
            writer.uint32(26).bytes(message.triggeredOrderHash);
        }
        if (message.placedOrderHash.length !== 0) {
            writer.uint32(34).bytes(message.placedOrderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConditionalDerivativeOrderTrigger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.bytes();
                    break;
                case 2:
                    message.isLimitTrigger = reader.bool();
                    break;
                case 3:
                    message.triggeredOrderHash = reader.bytes();
                    break;
                case 4:
                    message.placedOrderHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventConditionalDerivativeOrderTrigger();
        message.marketId = object.marketId ?? new Uint8Array();
        message.isLimitTrigger = object.isLimitTrigger ?? false;
        message.triggeredOrderHash = object.triggeredOrderHash ?? new Uint8Array();
        message.placedOrderHash = object.placedOrderHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventConditionalDerivativeOrderTrigger();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = (0, helpers_1.bytesFromBase64)(object.market_id);
        }
        if (object.isLimitTrigger !== undefined && object.isLimitTrigger !== null) {
            message.isLimitTrigger = object.isLimitTrigger;
        }
        if (object.triggered_order_hash !== undefined && object.triggered_order_hash !== null) {
            message.triggeredOrderHash = (0, helpers_1.bytesFromBase64)(object.triggered_order_hash);
        }
        if (object.placed_order_hash !== undefined && object.placed_order_hash !== null) {
            message.placedOrderHash = (0, helpers_1.bytesFromBase64)(object.placed_order_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId ? (0, helpers_1.base64FromBytes)(message.marketId) : undefined;
        obj.isLimitTrigger = message.isLimitTrigger === false ? undefined : message.isLimitTrigger;
        obj.triggered_order_hash = message.triggeredOrderHash ? (0, helpers_1.base64FromBytes)(message.triggeredOrderHash) : undefined;
        obj.placed_order_hash = message.placedOrderHash ? (0, helpers_1.base64FromBytes)(message.placedOrderHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventConditionalDerivativeOrderTrigger.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventConditionalDerivativeOrderTrigger.decode(message.value);
    },
    toProto(message) {
        return exports.EventConditionalDerivativeOrderTrigger.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
            value: exports.EventConditionalDerivativeOrderTrigger.encode(message).finish()
        };
    }
};
function createBaseEventOrderFail() {
    return {
        account: new Uint8Array(),
        hashes: [],
        flags: []
    };
}
exports.EventOrderFail = {
    typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account.length !== 0) {
            writer.uint32(10).bytes(message.account);
        }
        for (const v of message.hashes) {
            writer.uint32(18).bytes(v);
        }
        writer.uint32(26).fork();
        for (const v of message.flags) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOrderFail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.bytes();
                    break;
                case 2:
                    message.hashes.push(reader.bytes());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.flags.push(reader.uint32());
                        }
                    }
                    else {
                        message.flags.push(reader.uint32());
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
        const message = createBaseEventOrderFail();
        message.account = object.account ?? new Uint8Array();
        message.hashes = object.hashes?.map(e => e) || [];
        message.flags = object.flags?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventOrderFail();
        if (object.account !== undefined && object.account !== null) {
            message.account = (0, helpers_1.bytesFromBase64)(object.account);
        }
        message.hashes = object.hashes?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        message.flags = object.flags?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? (0, helpers_1.base64FromBytes)(message.account) : undefined;
        if (message.hashes) {
            obj.hashes = message.hashes.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.hashes = message.hashes;
        }
        if (message.flags) {
            obj.flags = message.flags.map(e => e);
        }
        else {
            obj.flags = message.flags;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventOrderFail.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventOrderFail.decode(message.value);
    },
    toProto(message) {
        return exports.EventOrderFail.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
            value: exports.EventOrderFail.encode(message).finish()
        };
    }
};
