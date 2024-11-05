//@ts-nocheck
import { TradeLog, DerivativeTradeLog, SubaccountPosition, BinaryOptionsMarket, SpotLimitOrder, DerivativeLimitOrder, SpotMarket, DerivativeMarket, PerpetualMarketInfo, PerpetualMarketFunding, ExpiryFuturesMarketInfo, DepositUpdate, DerivativeMarketOrder, FeeDiscountSchedule, TradingRewardCampaignInfo, CampaignRewardPool, AccountRewards, DerivativeOrder } from "./exchange";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseEventBatchSpotExecution() {
    return {
        marketId: "",
        isBuy: false,
        executionType: 0,
        trades: []
    };
}
export const EventBatchSpotExecution = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
    encode(message, writer = BinaryWriter.create()) {
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
            TradeLog.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.trades.push(TradeLog.decode(reader, reader.uint32()));
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
        message.trades = object.trades?.map(e => TradeLog.fromPartial(e)) || [];
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
        message.trades = object.trades?.map(e => TradeLog.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.is_buy = message.isBuy === false ? undefined : message.isBuy;
        obj.executionType = message.executionType === 0 ? undefined : message.executionType;
        if (message.trades) {
            obj.trades = message.trades.map(e => e ? TradeLog.toAmino(e) : undefined);
        }
        else {
            obj.trades = message.trades;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventBatchSpotExecution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBatchSpotExecution.decode(message.value);
    },
    toProto(message) {
        return EventBatchSpotExecution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
            value: EventBatchSpotExecution.encode(message).finish()
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
export const EventBatchDerivativeExecution = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
    encode(message, writer = BinaryWriter.create()) {
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
            writer.uint32(34).string(Decimal.fromUserInput(message.cumulativeFunding, 18).atomics);
        }
        if (message.executionType !== 0) {
            writer.uint32(40).int32(message.executionType);
        }
        for (const v of message.trades) {
            DerivativeTradeLog.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.cumulativeFunding = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.executionType = reader.int32();
                    break;
                case 6:
                    message.trades.push(DerivativeTradeLog.decode(reader, reader.uint32()));
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
        message.trades = object.trades?.map(e => DerivativeTradeLog.fromPartial(e)) || [];
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
        message.trades = object.trades?.map(e => DerivativeTradeLog.fromAmino(e)) || [];
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
            obj.trades = message.trades.map(e => e ? DerivativeTradeLog.toAmino(e) : undefined);
        }
        else {
            obj.trades = message.trades;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventBatchDerivativeExecution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBatchDerivativeExecution.decode(message.value);
    },
    toProto(message) {
        return EventBatchDerivativeExecution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
            value: EventBatchDerivativeExecution.encode(message).finish()
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
export const EventLostFundsFromLiquidation = {
    typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(18).bytes(message.subaccountId);
        }
        if (message.lostFundsFromAvailableDuringPayout !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.lostFundsFromAvailableDuringPayout, 18).atomics);
        }
        if (message.lostFundsFromOrderCancels !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.lostFundsFromOrderCancels, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.lostFundsFromAvailableDuringPayout = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.lostFundsFromOrderCancels = Decimal.fromAtomics(reader.string(), 18).toString();
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
            message.subaccountId = bytesFromBase64(object.subaccount_id);
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
        obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
        obj.lost_funds_from_available_during_payout = message.lostFundsFromAvailableDuringPayout === "" ? undefined : message.lostFundsFromAvailableDuringPayout;
        obj.lost_funds_from_order_cancels = message.lostFundsFromOrderCancels === "" ? undefined : message.lostFundsFromOrderCancels;
        return obj;
    },
    fromAminoMsg(object) {
        return EventLostFundsFromLiquidation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventLostFundsFromLiquidation.decode(message.value);
    },
    toProto(message) {
        return EventLostFundsFromLiquidation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
            value: EventLostFundsFromLiquidation.encode(message).finish()
        };
    }
};
function createBaseEventBatchDerivativePosition() {
    return {
        marketId: "",
        positions: []
    };
}
export const EventBatchDerivativePosition = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.positions) {
            SubaccountPosition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchDerivativePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.positions.push(SubaccountPosition.decode(reader, reader.uint32()));
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
        message.positions = object.positions?.map(e => SubaccountPosition.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBatchDerivativePosition();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.positions = object.positions?.map(e => SubaccountPosition.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.positions) {
            obj.positions = message.positions.map(e => e ? SubaccountPosition.toAmino(e) : undefined);
        }
        else {
            obj.positions = message.positions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventBatchDerivativePosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBatchDerivativePosition.decode(message.value);
    },
    toProto(message) {
        return EventBatchDerivativePosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
            value: EventBatchDerivativePosition.encode(message).finish()
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
export const EventDerivativeMarketPaused = {
    typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EventDerivativeMarketPaused.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventDerivativeMarketPaused.decode(message.value);
    },
    toProto(message) {
        return EventDerivativeMarketPaused.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
            value: EventDerivativeMarketPaused.encode(message).finish()
        };
    }
};
function createBaseEventBinaryOptionsMarketUpdate() {
    return {
        market: BinaryOptionsMarket.fromPartial({})
    };
}
export const EventBinaryOptionsMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.market !== undefined) {
            BinaryOptionsMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBinaryOptionsMarketUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = BinaryOptionsMarket.decode(reader, reader.uint32());
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
        message.market = object.market !== undefined && object.market !== null ? BinaryOptionsMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBinaryOptionsMarketUpdate();
        if (object.market !== undefined && object.market !== null) {
            message.market = BinaryOptionsMarket.fromAmino(object.market);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? BinaryOptionsMarket.toAmino(message.market) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBinaryOptionsMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBinaryOptionsMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return EventBinaryOptionsMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
            value: EventBinaryOptionsMarketUpdate.encode(message).finish()
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
export const EventNewSpotOrders = {
    typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.buyOrders) {
            SpotLimitOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            SpotLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewSpotOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.buyOrders.push(SpotLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sellOrders.push(SpotLimitOrder.decode(reader, reader.uint32()));
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
        message.buyOrders = object.buyOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
        message.sellOrders = object.sellOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventNewSpotOrders();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.buyOrders = object.buy_orders?.map(e => SpotLimitOrder.fromAmino(e)) || [];
        message.sellOrders = object.sell_orders?.map(e => SpotLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.buyOrders) {
            obj.buy_orders = message.buyOrders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.buy_orders = message.buyOrders;
        }
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventNewSpotOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventNewSpotOrders.decode(message.value);
    },
    toProto(message) {
        return EventNewSpotOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
            value: EventNewSpotOrders.encode(message).finish()
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
export const EventNewDerivativeOrders = {
    typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.buyOrders) {
            DerivativeLimitOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.sellOrders) {
            DerivativeLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewDerivativeOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.buyOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sellOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
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
        message.buyOrders = object.buyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
        message.sellOrders = object.sellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventNewDerivativeOrders();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.buyOrders = object.buy_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
        message.sellOrders = object.sell_orders?.map(e => DerivativeLimitOrder.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.buyOrders) {
            obj.buy_orders = message.buyOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.buy_orders = message.buyOrders;
        }
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventNewDerivativeOrders.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventNewDerivativeOrders.decode(message.value);
    },
    toProto(message) {
        return EventNewDerivativeOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
            value: EventNewDerivativeOrders.encode(message).finish()
        };
    }
};
function createBaseEventCancelSpotOrder() {
    return {
        marketId: "",
        order: SpotLimitOrder.fromPartial({})
    };
}
export const EventCancelSpotOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.order !== undefined) {
            SpotLimitOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelSpotOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.order = SpotLimitOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? SpotLimitOrder.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelSpotOrder();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = SpotLimitOrder.fromAmino(object.order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order = message.order ? SpotLimitOrder.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancelSpotOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancelSpotOrder.decode(message.value);
    },
    toProto(message) {
        return EventCancelSpotOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
            value: EventCancelSpotOrder.encode(message).finish()
        };
    }
};
function createBaseEventSpotMarketUpdate() {
    return {
        market: SpotMarket.fromPartial({})
    };
}
export const EventSpotMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.market !== undefined) {
            SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSpotMarketUpdate();
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
        const message = createBaseEventSpotMarketUpdate();
        message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSpotMarketUpdate();
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
        return EventSpotMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSpotMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return EventSpotMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
            value: EventSpotMarketUpdate.encode(message).finish()
        };
    }
};
function createBaseEventPerpetualMarketUpdate() {
    return {
        market: DerivativeMarket.fromPartial({}),
        perpetualMarketInfo: undefined,
        funding: undefined
    };
}
export const EventPerpetualMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.market !== undefined) {
            DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.perpetualMarketInfo !== undefined) {
            PerpetualMarketInfo.encode(message.perpetualMarketInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.funding !== undefined) {
            PerpetualMarketFunding.encode(message.funding, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventPerpetualMarketUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = DerivativeMarket.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.perpetualMarketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
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
        message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
        message.perpetualMarketInfo = object.perpetualMarketInfo !== undefined && object.perpetualMarketInfo !== null ? PerpetualMarketInfo.fromPartial(object.perpetualMarketInfo) : undefined;
        message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventPerpetualMarketUpdate();
        if (object.market !== undefined && object.market !== null) {
            message.market = DerivativeMarket.fromAmino(object.market);
        }
        if (object.perpetual_market_info !== undefined && object.perpetual_market_info !== null) {
            message.perpetualMarketInfo = PerpetualMarketInfo.fromAmino(object.perpetual_market_info);
        }
        if (object.funding !== undefined && object.funding !== null) {
            message.funding = PerpetualMarketFunding.fromAmino(object.funding);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
        obj.perpetual_market_info = message.perpetualMarketInfo ? PerpetualMarketInfo.toAmino(message.perpetualMarketInfo) : undefined;
        obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventPerpetualMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventPerpetualMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return EventPerpetualMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
            value: EventPerpetualMarketUpdate.encode(message).finish()
        };
    }
};
function createBaseEventExpiryFuturesMarketUpdate() {
    return {
        market: DerivativeMarket.fromPartial({}),
        expiryFuturesMarketInfo: undefined
    };
}
export const EventExpiryFuturesMarketUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.market !== undefined) {
            DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiryFuturesMarketInfo !== undefined) {
            ExpiryFuturesMarketInfo.encode(message.expiryFuturesMarketInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExpiryFuturesMarketUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = DerivativeMarket.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.expiryFuturesMarketInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
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
        message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
        message.expiryFuturesMarketInfo = object.expiryFuturesMarketInfo !== undefined && object.expiryFuturesMarketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.expiryFuturesMarketInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventExpiryFuturesMarketUpdate();
        if (object.market !== undefined && object.market !== null) {
            message.market = DerivativeMarket.fromAmino(object.market);
        }
        if (object.expiry_futures_market_info !== undefined && object.expiry_futures_market_info !== null) {
            message.expiryFuturesMarketInfo = ExpiryFuturesMarketInfo.fromAmino(object.expiry_futures_market_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
        obj.expiry_futures_market_info = message.expiryFuturesMarketInfo ? ExpiryFuturesMarketInfo.toAmino(message.expiryFuturesMarketInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventExpiryFuturesMarketUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventExpiryFuturesMarketUpdate.decode(message.value);
    },
    toProto(message) {
        return EventExpiryFuturesMarketUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
            value: EventExpiryFuturesMarketUpdate.encode(message).finish()
        };
    }
};
function createBaseEventPerpetualMarketFundingUpdate() {
    return {
        marketId: "",
        funding: PerpetualMarketFunding.fromPartial({}),
        isHourlyFunding: false,
        fundingRate: undefined,
        markPrice: undefined
    };
}
export const EventPerpetualMarketFundingUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.funding !== undefined) {
            PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
        }
        if (message.isHourlyFunding === true) {
            writer.uint32(24).bool(message.isHourlyFunding);
        }
        if (message.fundingRate !== undefined) {
            writer.uint32(34).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
        }
        if (message.markPrice !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.markPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventPerpetualMarketFundingUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.isHourlyFunding = reader.bool();
                    break;
                case 4:
                    message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
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
        const message = createBaseEventPerpetualMarketFundingUpdate();
        message.marketId = object.marketId ?? "";
        message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
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
            message.funding = PerpetualMarketFunding.fromAmino(object.funding);
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
        obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
        obj.is_hourly_funding = message.isHourlyFunding === false ? undefined : message.isHourlyFunding;
        obj.funding_rate = message.fundingRate === null ? undefined : message.fundingRate;
        obj.mark_price = message.markPrice === null ? undefined : message.markPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return EventPerpetualMarketFundingUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventPerpetualMarketFundingUpdate.decode(message.value);
    },
    toProto(message) {
        return EventPerpetualMarketFundingUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
            value: EventPerpetualMarketFundingUpdate.encode(message).finish()
        };
    }
};
function createBaseEventSubaccountDeposit() {
    return {
        srcAddress: "",
        subaccountId: new Uint8Array(),
        amount: Coin.fromPartial({})
    };
}
export const EventSubaccountDeposit = {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.srcAddress !== "") {
            writer.uint32(10).string(message.srcAddress);
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(18).bytes(message.subaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseEventSubaccountDeposit();
        message.srcAddress = object.srcAddress ?? "";
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubaccountDeposit();
        if (object.src_address !== undefined && object.src_address !== null) {
            message.srcAddress = object.src_address;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = bytesFromBase64(object.subaccount_id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.src_address = message.srcAddress === "" ? undefined : message.srcAddress;
        obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSubaccountDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSubaccountDeposit.decode(message.value);
    },
    toProto(message) {
        return EventSubaccountDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
            value: EventSubaccountDeposit.encode(message).finish()
        };
    }
};
function createBaseEventSubaccountWithdraw() {
    return {
        subaccountId: new Uint8Array(),
        dstAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const EventSubaccountWithdraw = {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId.length !== 0) {
            writer.uint32(10).bytes(message.subaccountId);
        }
        if (message.dstAddress !== "") {
            writer.uint32(18).string(message.dstAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseEventSubaccountWithdraw();
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.dstAddress = object.dstAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubaccountWithdraw();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = bytesFromBase64(object.subaccount_id);
        }
        if (object.dst_address !== undefined && object.dst_address !== null) {
            message.dstAddress = object.dst_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
        obj.dst_address = message.dstAddress === "" ? undefined : message.dstAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSubaccountWithdraw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSubaccountWithdraw.decode(message.value);
    },
    toProto(message) {
        return EventSubaccountWithdraw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
            value: EventSubaccountWithdraw.encode(message).finish()
        };
    }
};
function createBaseEventSubaccountBalanceTransfer() {
    return {
        srcSubaccountId: "",
        dstSubaccountId: "",
        amount: Coin.fromPartial({})
    };
}
export const EventSubaccountBalanceTransfer = {
    typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.srcSubaccountId !== "") {
            writer.uint32(10).string(message.srcSubaccountId);
        }
        if (message.dstSubaccountId !== "") {
            writer.uint32(18).string(message.dstSubaccountId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseEventSubaccountBalanceTransfer();
        message.srcSubaccountId = object.srcSubaccountId ?? "";
        message.dstSubaccountId = object.dstSubaccountId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
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
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.src_subaccount_id = message.srcSubaccountId === "" ? undefined : message.srcSubaccountId;
        obj.dst_subaccount_id = message.dstSubaccountId === "" ? undefined : message.dstSubaccountId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSubaccountBalanceTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSubaccountBalanceTransfer.decode(message.value);
    },
    toProto(message) {
        return EventSubaccountBalanceTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
            value: EventSubaccountBalanceTransfer.encode(message).finish()
        };
    }
};
function createBaseEventBatchDepositUpdate() {
    return {
        depositUpdates: []
    };
}
export const EventBatchDepositUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.depositUpdates) {
            DepositUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchDepositUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositUpdates.push(DepositUpdate.decode(reader, reader.uint32()));
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
        message.depositUpdates = object.depositUpdates?.map(e => DepositUpdate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBatchDepositUpdate();
        message.depositUpdates = object.deposit_updates?.map(e => DepositUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.depositUpdates) {
            obj.deposit_updates = message.depositUpdates.map(e => e ? DepositUpdate.toAmino(e) : undefined);
        }
        else {
            obj.deposit_updates = message.depositUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventBatchDepositUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBatchDepositUpdate.decode(message.value);
    },
    toProto(message) {
        return EventBatchDepositUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
            value: EventBatchDepositUpdate.encode(message).finish()
        };
    }
};
function createBaseDerivativeMarketOrderCancel() {
    return {
        marketOrder: undefined,
        cancelQuantity: ""
    };
}
export const DerivativeMarketOrderCancel = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketOrder !== undefined) {
            DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(10).fork()).ldelim();
        }
        if (message.cancelQuantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.cancelQuantity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketOrderCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketOrder = DerivativeMarketOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cancelQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
        message.cancelQuantity = object.cancelQuantity ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeMarketOrderCancel();
        if (object.market_order !== undefined && object.market_order !== null) {
            message.marketOrder = DerivativeMarketOrder.fromAmino(object.market_order);
        }
        if (object.cancel_quantity !== undefined && object.cancel_quantity !== null) {
            message.cancelQuantity = object.cancel_quantity;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_order = message.marketOrder ? DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
        obj.cancel_quantity = message.cancelQuantity === "" ? undefined : message.cancelQuantity;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeMarketOrderCancel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeMarketOrderCancel.decode(message.value);
    },
    toProto(message) {
        return DerivativeMarketOrderCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
            value: DerivativeMarketOrderCancel.encode(message).finish()
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
export const EventCancelDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isLimitCancel === true) {
            writer.uint32(16).bool(message.isLimitCancel);
        }
        if (message.limitOrder !== undefined) {
            DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
        }
        if (message.marketOrderCancel !== undefined) {
            DerivativeMarketOrderCancel.encode(message.marketOrderCancel, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.limitOrder = DerivativeLimitOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.marketOrderCancel = DerivativeMarketOrderCancel.decode(reader, reader.uint32());
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
        message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
        message.marketOrderCancel = object.marketOrderCancel !== undefined && object.marketOrderCancel !== null ? DerivativeMarketOrderCancel.fromPartial(object.marketOrderCancel) : undefined;
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
            message.limitOrder = DerivativeLimitOrder.fromAmino(object.limit_order);
        }
        if (object.market_order_cancel !== undefined && object.market_order_cancel !== null) {
            message.marketOrderCancel = DerivativeMarketOrderCancel.fromAmino(object.market_order_cancel);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isLimitCancel = message.isLimitCancel === false ? undefined : message.isLimitCancel;
        obj.limit_order = message.limitOrder ? DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
        obj.market_order_cancel = message.marketOrderCancel ? DerivativeMarketOrderCancel.toAmino(message.marketOrderCancel) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancelDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancelDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return EventCancelDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
            value: EventCancelDerivativeOrder.encode(message).finish()
        };
    }
};
function createBaseEventFeeDiscountSchedule() {
    return {
        schedule: undefined
    };
}
export const EventFeeDiscountSchedule = {
    typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
    encode(message, writer = BinaryWriter.create()) {
        if (message.schedule !== undefined) {
            FeeDiscountSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventFeeDiscountSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseEventFeeDiscountSchedule();
        message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventFeeDiscountSchedule();
        if (object.schedule !== undefined && object.schedule !== null) {
            message.schedule = FeeDiscountSchedule.fromAmino(object.schedule);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.schedule = message.schedule ? FeeDiscountSchedule.toAmino(message.schedule) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventFeeDiscountSchedule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventFeeDiscountSchedule.decode(message.value);
    },
    toProto(message) {
        return EventFeeDiscountSchedule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
            value: EventFeeDiscountSchedule.encode(message).finish()
        };
    }
};
function createBaseEventTradingRewardCampaignUpdate() {
    return {
        campaignInfo: undefined,
        campaignRewardPools: []
    };
}
export const EventTradingRewardCampaignUpdate = {
    typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.campaignRewardPools) {
            CampaignRewardPool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTradingRewardCampaignUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = createBaseEventTradingRewardCampaignUpdate();
        message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
        message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTradingRewardCampaignUpdate();
        if (object.campaign_info !== undefined && object.campaign_info !== null) {
            message.campaignInfo = TradingRewardCampaignInfo.fromAmino(object.campaign_info);
        }
        message.campaignRewardPools = object.campaign_reward_pools?.map(e => CampaignRewardPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
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
        return EventTradingRewardCampaignUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTradingRewardCampaignUpdate.decode(message.value);
    },
    toProto(message) {
        return EventTradingRewardCampaignUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
            value: EventTradingRewardCampaignUpdate.encode(message).finish()
        };
    }
};
function createBaseEventTradingRewardDistribution() {
    return {
        accountRewards: []
    };
}
export const EventTradingRewardDistribution = {
    typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accountRewards) {
            AccountRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTradingRewardDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountRewards.push(AccountRewards.decode(reader, reader.uint32()));
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
        message.accountRewards = object.accountRewards?.map(e => AccountRewards.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTradingRewardDistribution();
        message.accountRewards = object.account_rewards?.map(e => AccountRewards.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accountRewards) {
            obj.account_rewards = message.accountRewards.map(e => e ? AccountRewards.toAmino(e) : undefined);
        }
        else {
            obj.account_rewards = message.accountRewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventTradingRewardDistribution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTradingRewardDistribution.decode(message.value);
    },
    toProto(message) {
        return EventTradingRewardDistribution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
            value: EventTradingRewardDistribution.encode(message).finish()
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
export const EventNewConditionalDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.order !== undefined) {
            DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventNewConditionalDerivativeOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.order = DerivativeOrder.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
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
            message.order = DerivativeOrder.fromAmino(object.order);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.is_market !== undefined && object.is_market !== null) {
            message.isMarket = object.is_market;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.is_market = message.isMarket === false ? undefined : message.isMarket;
        return obj;
    },
    fromAminoMsg(object) {
        return EventNewConditionalDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventNewConditionalDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return EventNewConditionalDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
            value: EventNewConditionalDerivativeOrder.encode(message).finish()
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
export const EventCancelConditionalDerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isLimitCancel === true) {
            writer.uint32(16).bool(message.isLimitCancel);
        }
        if (message.limitOrder !== undefined) {
            DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
        }
        if (message.marketOrder !== undefined) {
            DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.limitOrder = DerivativeLimitOrder.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.marketOrder = DerivativeMarketOrder.decode(reader, reader.uint32());
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
        message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
        message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
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
            message.limitOrder = DerivativeLimitOrder.fromAmino(object.limit_order);
        }
        if (object.market_order !== undefined && object.market_order !== null) {
            message.marketOrder = DerivativeMarketOrder.fromAmino(object.market_order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isLimitCancel = message.isLimitCancel === false ? undefined : message.isLimitCancel;
        obj.limit_order = message.limitOrder ? DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
        obj.market_order = message.marketOrder ? DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancelConditionalDerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancelConditionalDerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return EventCancelConditionalDerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
            value: EventCancelConditionalDerivativeOrder.encode(message).finish()
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
export const EventConditionalDerivativeOrderTrigger = {
    typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.marketId = bytesFromBase64(object.market_id);
        }
        if (object.isLimitTrigger !== undefined && object.isLimitTrigger !== null) {
            message.isLimitTrigger = object.isLimitTrigger;
        }
        if (object.triggered_order_hash !== undefined && object.triggered_order_hash !== null) {
            message.triggeredOrderHash = bytesFromBase64(object.triggered_order_hash);
        }
        if (object.placed_order_hash !== undefined && object.placed_order_hash !== null) {
            message.placedOrderHash = bytesFromBase64(object.placed_order_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId ? base64FromBytes(message.marketId) : undefined;
        obj.isLimitTrigger = message.isLimitTrigger === false ? undefined : message.isLimitTrigger;
        obj.triggered_order_hash = message.triggeredOrderHash ? base64FromBytes(message.triggeredOrderHash) : undefined;
        obj.placed_order_hash = message.placedOrderHash ? base64FromBytes(message.placedOrderHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventConditionalDerivativeOrderTrigger.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventConditionalDerivativeOrderTrigger.decode(message.value);
    },
    toProto(message) {
        return EventConditionalDerivativeOrderTrigger.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
            value: EventConditionalDerivativeOrderTrigger.encode(message).finish()
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
export const EventOrderFail = {
    typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.account = bytesFromBase64(object.account);
        }
        message.hashes = object.hashes?.map(e => bytesFromBase64(e)) || [];
        message.flags = object.flags?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? base64FromBytes(message.account) : undefined;
        if (message.hashes) {
            obj.hashes = message.hashes.map(e => base64FromBytes(e));
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
        return EventOrderFail.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventOrderFail.decode(message.value);
    },
    toProto(message) {
        return EventOrderFail.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
            value: EventOrderFail.encode(message).finish()
        };
    }
};
