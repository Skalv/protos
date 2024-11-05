//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export var MarketStatus;
(function (MarketStatus) {
    MarketStatus[MarketStatus["Unspecified"] = 0] = "Unspecified";
    MarketStatus[MarketStatus["Active"] = 1] = "Active";
    MarketStatus[MarketStatus["Paused"] = 2] = "Paused";
    MarketStatus[MarketStatus["Demolished"] = 3] = "Demolished";
    MarketStatus[MarketStatus["Expired"] = 4] = "Expired";
    MarketStatus[MarketStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MarketStatus || (MarketStatus = {}));
export const MarketStatusSDKType = MarketStatus;
export const MarketStatusAmino = MarketStatus;
export function marketStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "Unspecified":
            return MarketStatus.Unspecified;
        case 1:
        case "Active":
            return MarketStatus.Active;
        case 2:
        case "Paused":
            return MarketStatus.Paused;
        case 3:
        case "Demolished":
            return MarketStatus.Demolished;
        case 4:
        case "Expired":
            return MarketStatus.Expired;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MarketStatus.UNRECOGNIZED;
    }
}
export function marketStatusToJSON(object) {
    switch (object) {
        case MarketStatus.Unspecified:
            return "Unspecified";
        case MarketStatus.Active:
            return "Active";
        case MarketStatus.Paused:
            return "Paused";
        case MarketStatus.Demolished:
            return "Demolished";
        case MarketStatus.Expired:
            return "Expired";
        case MarketStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var OrderType;
(function (OrderType) {
    OrderType[OrderType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    OrderType[OrderType["BUY"] = 1] = "BUY";
    OrderType[OrderType["SELL"] = 2] = "SELL";
    OrderType[OrderType["STOP_BUY"] = 3] = "STOP_BUY";
    OrderType[OrderType["STOP_SELL"] = 4] = "STOP_SELL";
    OrderType[OrderType["TAKE_BUY"] = 5] = "TAKE_BUY";
    OrderType[OrderType["TAKE_SELL"] = 6] = "TAKE_SELL";
    OrderType[OrderType["BUY_PO"] = 7] = "BUY_PO";
    OrderType[OrderType["SELL_PO"] = 8] = "SELL_PO";
    OrderType[OrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderType || (OrderType = {}));
export const OrderTypeSDKType = OrderType;
export const OrderTypeAmino = OrderType;
export function orderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNSPECIFIED":
            return OrderType.UNSPECIFIED;
        case 1:
        case "BUY":
            return OrderType.BUY;
        case 2:
        case "SELL":
            return OrderType.SELL;
        case 3:
        case "STOP_BUY":
            return OrderType.STOP_BUY;
        case 4:
        case "STOP_SELL":
            return OrderType.STOP_SELL;
        case 5:
        case "TAKE_BUY":
            return OrderType.TAKE_BUY;
        case 6:
        case "TAKE_SELL":
            return OrderType.TAKE_SELL;
        case 7:
        case "BUY_PO":
            return OrderType.BUY_PO;
        case 8:
        case "SELL_PO":
            return OrderType.SELL_PO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderType.UNRECOGNIZED;
    }
}
export function orderTypeToJSON(object) {
    switch (object) {
        case OrderType.UNSPECIFIED:
            return "UNSPECIFIED";
        case OrderType.BUY:
            return "BUY";
        case OrderType.SELL:
            return "SELL";
        case OrderType.STOP_BUY:
            return "STOP_BUY";
        case OrderType.STOP_SELL:
            return "STOP_SELL";
        case OrderType.TAKE_BUY:
            return "TAKE_BUY";
        case OrderType.TAKE_SELL:
            return "TAKE_SELL";
        case OrderType.BUY_PO:
            return "BUY_PO";
        case OrderType.SELL_PO:
            return "SELL_PO";
        case OrderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ExecutionType;
(function (ExecutionType) {
    ExecutionType[ExecutionType["UnspecifiedExecutionType"] = 0] = "UnspecifiedExecutionType";
    ExecutionType[ExecutionType["Market"] = 1] = "Market";
    ExecutionType[ExecutionType["LimitFill"] = 2] = "LimitFill";
    ExecutionType[ExecutionType["LimitMatchRestingOrder"] = 3] = "LimitMatchRestingOrder";
    ExecutionType[ExecutionType["LimitMatchNewOrder"] = 4] = "LimitMatchNewOrder";
    ExecutionType[ExecutionType["MarketLiquidation"] = 5] = "MarketLiquidation";
    ExecutionType[ExecutionType["ExpiryMarketSettlement"] = 6] = "ExpiryMarketSettlement";
    ExecutionType[ExecutionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecutionType || (ExecutionType = {}));
export const ExecutionTypeSDKType = ExecutionType;
export const ExecutionTypeAmino = ExecutionType;
export function executionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UnspecifiedExecutionType":
            return ExecutionType.UnspecifiedExecutionType;
        case 1:
        case "Market":
            return ExecutionType.Market;
        case 2:
        case "LimitFill":
            return ExecutionType.LimitFill;
        case 3:
        case "LimitMatchRestingOrder":
            return ExecutionType.LimitMatchRestingOrder;
        case 4:
        case "LimitMatchNewOrder":
            return ExecutionType.LimitMatchNewOrder;
        case 5:
        case "MarketLiquidation":
            return ExecutionType.MarketLiquidation;
        case 6:
        case "ExpiryMarketSettlement":
            return ExecutionType.ExpiryMarketSettlement;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExecutionType.UNRECOGNIZED;
    }
}
export function executionTypeToJSON(object) {
    switch (object) {
        case ExecutionType.UnspecifiedExecutionType:
            return "UnspecifiedExecutionType";
        case ExecutionType.Market:
            return "Market";
        case ExecutionType.LimitFill:
            return "LimitFill";
        case ExecutionType.LimitMatchRestingOrder:
            return "LimitMatchRestingOrder";
        case ExecutionType.LimitMatchNewOrder:
            return "LimitMatchNewOrder";
        case ExecutionType.MarketLiquidation:
            return "MarketLiquidation";
        case ExecutionType.ExpiryMarketSettlement:
            return "ExpiryMarketSettlement";
        case ExecutionType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var OrderMask;
(function (OrderMask) {
    OrderMask[OrderMask["UNUSED"] = 0] = "UNUSED";
    OrderMask[OrderMask["ANY"] = 1] = "ANY";
    OrderMask[OrderMask["REGULAR"] = 2] = "REGULAR";
    OrderMask[OrderMask["CONDITIONAL"] = 4] = "CONDITIONAL";
    /** DIRECTION_BUY_OR_HIGHER - for conditional orders means HIGHER */
    OrderMask[OrderMask["DIRECTION_BUY_OR_HIGHER"] = 8] = "DIRECTION_BUY_OR_HIGHER";
    /** DIRECTION_SELL_OR_LOWER - for conditional orders means LOWER */
    OrderMask[OrderMask["DIRECTION_SELL_OR_LOWER"] = 16] = "DIRECTION_SELL_OR_LOWER";
    OrderMask[OrderMask["TYPE_MARKET"] = 32] = "TYPE_MARKET";
    OrderMask[OrderMask["TYPE_LIMIT"] = 64] = "TYPE_LIMIT";
    OrderMask[OrderMask["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderMask || (OrderMask = {}));
export const OrderMaskSDKType = OrderMask;
export const OrderMaskAmino = OrderMask;
export function orderMaskFromJSON(object) {
    switch (object) {
        case 0:
        case "UNUSED":
            return OrderMask.UNUSED;
        case 1:
        case "ANY":
            return OrderMask.ANY;
        case 2:
        case "REGULAR":
            return OrderMask.REGULAR;
        case 4:
        case "CONDITIONAL":
            return OrderMask.CONDITIONAL;
        case 8:
        case "DIRECTION_BUY_OR_HIGHER":
            return OrderMask.DIRECTION_BUY_OR_HIGHER;
        case 16:
        case "DIRECTION_SELL_OR_LOWER":
            return OrderMask.DIRECTION_SELL_OR_LOWER;
        case 32:
        case "TYPE_MARKET":
            return OrderMask.TYPE_MARKET;
        case 64:
        case "TYPE_LIMIT":
            return OrderMask.TYPE_LIMIT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderMask.UNRECOGNIZED;
    }
}
export function orderMaskToJSON(object) {
    switch (object) {
        case OrderMask.UNUSED:
            return "UNUSED";
        case OrderMask.ANY:
            return "ANY";
        case OrderMask.REGULAR:
            return "REGULAR";
        case OrderMask.CONDITIONAL:
            return "CONDITIONAL";
        case OrderMask.DIRECTION_BUY_OR_HIGHER:
            return "DIRECTION_BUY_OR_HIGHER";
        case OrderMask.DIRECTION_SELL_OR_LOWER:
            return "DIRECTION_SELL_OR_LOWER";
        case OrderMask.TYPE_MARKET:
            return "TYPE_MARKET";
        case OrderMask.TYPE_LIMIT:
            return "TYPE_LIMIT";
        case OrderMask.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseParams() {
    return {
        spotMarketInstantListingFee: Coin.fromPartial({}),
        derivativeMarketInstantListingFee: Coin.fromPartial({}),
        defaultSpotMakerFeeRate: "",
        defaultSpotTakerFeeRate: "",
        defaultDerivativeMakerFeeRate: "",
        defaultDerivativeTakerFeeRate: "",
        defaultInitialMarginRatio: "",
        defaultMaintenanceMarginRatio: "",
        defaultFundingInterval: BigInt(0),
        fundingMultiple: BigInt(0),
        relayerFeeShareRate: "",
        defaultHourlyFundingRateCap: "",
        defaultHourlyInterestRate: "",
        maxDerivativeOrderSideCount: 0,
        injRewardStakedRequirementThreshold: "",
        tradingRewardsVestingDuration: BigInt(0),
        liquidatorRewardShareRate: "",
        binaryOptionsMarketInstantListingFee: Coin.fromPartial({})
    };
}
export const Params = {
    typeUrl: "/injective.exchange.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.spotMarketInstantListingFee !== undefined) {
            Coin.encode(message.spotMarketInstantListingFee, writer.uint32(10).fork()).ldelim();
        }
        if (message.derivativeMarketInstantListingFee !== undefined) {
            Coin.encode(message.derivativeMarketInstantListingFee, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultSpotMakerFeeRate !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.defaultSpotMakerFeeRate, 18).atomics);
        }
        if (message.defaultSpotTakerFeeRate !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.defaultSpotTakerFeeRate, 18).atomics);
        }
        if (message.defaultDerivativeMakerFeeRate !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.defaultDerivativeMakerFeeRate, 18).atomics);
        }
        if (message.defaultDerivativeTakerFeeRate !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.defaultDerivativeTakerFeeRate, 18).atomics);
        }
        if (message.defaultInitialMarginRatio !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.defaultInitialMarginRatio, 18).atomics);
        }
        if (message.defaultMaintenanceMarginRatio !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.defaultMaintenanceMarginRatio, 18).atomics);
        }
        if (message.defaultFundingInterval !== BigInt(0)) {
            writer.uint32(72).int64(message.defaultFundingInterval);
        }
        if (message.fundingMultiple !== BigInt(0)) {
            writer.uint32(80).int64(message.fundingMultiple);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(90).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.defaultHourlyFundingRateCap !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.defaultHourlyFundingRateCap, 18).atomics);
        }
        if (message.defaultHourlyInterestRate !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.defaultHourlyInterestRate, 18).atomics);
        }
        if (message.maxDerivativeOrderSideCount !== 0) {
            writer.uint32(112).uint32(message.maxDerivativeOrderSideCount);
        }
        if (message.injRewardStakedRequirementThreshold !== "") {
            writer.uint32(122).string(message.injRewardStakedRequirementThreshold);
        }
        if (message.tradingRewardsVestingDuration !== BigInt(0)) {
            writer.uint32(128).int64(message.tradingRewardsVestingDuration);
        }
        if (message.liquidatorRewardShareRate !== "") {
            writer.uint32(138).string(Decimal.fromUserInput(message.liquidatorRewardShareRate, 18).atomics);
        }
        if (message.binaryOptionsMarketInstantListingFee !== undefined) {
            Coin.encode(message.binaryOptionsMarketInstantListingFee, writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotMarketInstantListingFee = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.derivativeMarketInstantListingFee = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultSpotMakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.defaultSpotTakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.defaultDerivativeMakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.defaultDerivativeTakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.defaultInitialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.defaultMaintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.defaultFundingInterval = reader.int64();
                    break;
                case 10:
                    message.fundingMultiple = reader.int64();
                    break;
                case 11:
                    message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.defaultHourlyFundingRateCap = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.defaultHourlyInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.maxDerivativeOrderSideCount = reader.uint32();
                    break;
                case 15:
                    message.injRewardStakedRequirementThreshold = reader.string();
                    break;
                case 16:
                    message.tradingRewardsVestingDuration = reader.int64();
                    break;
                case 17:
                    message.liquidatorRewardShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 18:
                    message.binaryOptionsMarketInstantListingFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.spotMarketInstantListingFee = object.spotMarketInstantListingFee !== undefined && object.spotMarketInstantListingFee !== null ? Coin.fromPartial(object.spotMarketInstantListingFee) : undefined;
        message.derivativeMarketInstantListingFee = object.derivativeMarketInstantListingFee !== undefined && object.derivativeMarketInstantListingFee !== null ? Coin.fromPartial(object.derivativeMarketInstantListingFee) : undefined;
        message.defaultSpotMakerFeeRate = object.defaultSpotMakerFeeRate ?? "";
        message.defaultSpotTakerFeeRate = object.defaultSpotTakerFeeRate ?? "";
        message.defaultDerivativeMakerFeeRate = object.defaultDerivativeMakerFeeRate ?? "";
        message.defaultDerivativeTakerFeeRate = object.defaultDerivativeTakerFeeRate ?? "";
        message.defaultInitialMarginRatio = object.defaultInitialMarginRatio ?? "";
        message.defaultMaintenanceMarginRatio = object.defaultMaintenanceMarginRatio ?? "";
        message.defaultFundingInterval = object.defaultFundingInterval !== undefined && object.defaultFundingInterval !== null ? BigInt(object.defaultFundingInterval.toString()) : BigInt(0);
        message.fundingMultiple = object.fundingMultiple !== undefined && object.fundingMultiple !== null ? BigInt(object.fundingMultiple.toString()) : BigInt(0);
        message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
        message.defaultHourlyFundingRateCap = object.defaultHourlyFundingRateCap ?? "";
        message.defaultHourlyInterestRate = object.defaultHourlyInterestRate ?? "";
        message.maxDerivativeOrderSideCount = object.maxDerivativeOrderSideCount ?? 0;
        message.injRewardStakedRequirementThreshold = object.injRewardStakedRequirementThreshold ?? "";
        message.tradingRewardsVestingDuration = object.tradingRewardsVestingDuration !== undefined && object.tradingRewardsVestingDuration !== null ? BigInt(object.tradingRewardsVestingDuration.toString()) : BigInt(0);
        message.liquidatorRewardShareRate = object.liquidatorRewardShareRate ?? "";
        message.binaryOptionsMarketInstantListingFee = object.binaryOptionsMarketInstantListingFee !== undefined && object.binaryOptionsMarketInstantListingFee !== null ? Coin.fromPartial(object.binaryOptionsMarketInstantListingFee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.spot_market_instant_listing_fee !== undefined && object.spot_market_instant_listing_fee !== null) {
            message.spotMarketInstantListingFee = Coin.fromAmino(object.spot_market_instant_listing_fee);
        }
        if (object.derivative_market_instant_listing_fee !== undefined && object.derivative_market_instant_listing_fee !== null) {
            message.derivativeMarketInstantListingFee = Coin.fromAmino(object.derivative_market_instant_listing_fee);
        }
        if (object.default_spot_maker_fee_rate !== undefined && object.default_spot_maker_fee_rate !== null) {
            message.defaultSpotMakerFeeRate = object.default_spot_maker_fee_rate;
        }
        if (object.default_spot_taker_fee_rate !== undefined && object.default_spot_taker_fee_rate !== null) {
            message.defaultSpotTakerFeeRate = object.default_spot_taker_fee_rate;
        }
        if (object.default_derivative_maker_fee_rate !== undefined && object.default_derivative_maker_fee_rate !== null) {
            message.defaultDerivativeMakerFeeRate = object.default_derivative_maker_fee_rate;
        }
        if (object.default_derivative_taker_fee_rate !== undefined && object.default_derivative_taker_fee_rate !== null) {
            message.defaultDerivativeTakerFeeRate = object.default_derivative_taker_fee_rate;
        }
        if (object.default_initial_margin_ratio !== undefined && object.default_initial_margin_ratio !== null) {
            message.defaultInitialMarginRatio = object.default_initial_margin_ratio;
        }
        if (object.default_maintenance_margin_ratio !== undefined && object.default_maintenance_margin_ratio !== null) {
            message.defaultMaintenanceMarginRatio = object.default_maintenance_margin_ratio;
        }
        if (object.default_funding_interval !== undefined && object.default_funding_interval !== null) {
            message.defaultFundingInterval = BigInt(object.default_funding_interval);
        }
        if (object.funding_multiple !== undefined && object.funding_multiple !== null) {
            message.fundingMultiple = BigInt(object.funding_multiple);
        }
        if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
            message.relayerFeeShareRate = object.relayer_fee_share_rate;
        }
        if (object.default_hourly_funding_rate_cap !== undefined && object.default_hourly_funding_rate_cap !== null) {
            message.defaultHourlyFundingRateCap = object.default_hourly_funding_rate_cap;
        }
        if (object.default_hourly_interest_rate !== undefined && object.default_hourly_interest_rate !== null) {
            message.defaultHourlyInterestRate = object.default_hourly_interest_rate;
        }
        if (object.max_derivative_order_side_count !== undefined && object.max_derivative_order_side_count !== null) {
            message.maxDerivativeOrderSideCount = object.max_derivative_order_side_count;
        }
        if (object.inj_reward_staked_requirement_threshold !== undefined && object.inj_reward_staked_requirement_threshold !== null) {
            message.injRewardStakedRequirementThreshold = object.inj_reward_staked_requirement_threshold;
        }
        if (object.trading_rewards_vesting_duration !== undefined && object.trading_rewards_vesting_duration !== null) {
            message.tradingRewardsVestingDuration = BigInt(object.trading_rewards_vesting_duration);
        }
        if (object.liquidator_reward_share_rate !== undefined && object.liquidator_reward_share_rate !== null) {
            message.liquidatorRewardShareRate = object.liquidator_reward_share_rate;
        }
        if (object.binary_options_market_instant_listing_fee !== undefined && object.binary_options_market_instant_listing_fee !== null) {
            message.binaryOptionsMarketInstantListingFee = Coin.fromAmino(object.binary_options_market_instant_listing_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spot_market_instant_listing_fee = message.spotMarketInstantListingFee ? Coin.toAmino(message.spotMarketInstantListingFee) : undefined;
        obj.derivative_market_instant_listing_fee = message.derivativeMarketInstantListingFee ? Coin.toAmino(message.derivativeMarketInstantListingFee) : undefined;
        obj.default_spot_maker_fee_rate = message.defaultSpotMakerFeeRate === "" ? undefined : message.defaultSpotMakerFeeRate;
        obj.default_spot_taker_fee_rate = message.defaultSpotTakerFeeRate === "" ? undefined : message.defaultSpotTakerFeeRate;
        obj.default_derivative_maker_fee_rate = message.defaultDerivativeMakerFeeRate === "" ? undefined : message.defaultDerivativeMakerFeeRate;
        obj.default_derivative_taker_fee_rate = message.defaultDerivativeTakerFeeRate === "" ? undefined : message.defaultDerivativeTakerFeeRate;
        obj.default_initial_margin_ratio = message.defaultInitialMarginRatio === "" ? undefined : message.defaultInitialMarginRatio;
        obj.default_maintenance_margin_ratio = message.defaultMaintenanceMarginRatio === "" ? undefined : message.defaultMaintenanceMarginRatio;
        obj.default_funding_interval = message.defaultFundingInterval !== BigInt(0) ? (message.defaultFundingInterval?.toString)() : undefined;
        obj.funding_multiple = message.fundingMultiple !== BigInt(0) ? (message.fundingMultiple?.toString)() : undefined;
        obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : message.relayerFeeShareRate;
        obj.default_hourly_funding_rate_cap = message.defaultHourlyFundingRateCap === "" ? undefined : message.defaultHourlyFundingRateCap;
        obj.default_hourly_interest_rate = message.defaultHourlyInterestRate === "" ? undefined : message.defaultHourlyInterestRate;
        obj.max_derivative_order_side_count = message.maxDerivativeOrderSideCount === 0 ? undefined : message.maxDerivativeOrderSideCount;
        obj.inj_reward_staked_requirement_threshold = message.injRewardStakedRequirementThreshold === "" ? undefined : message.injRewardStakedRequirementThreshold;
        obj.trading_rewards_vesting_duration = message.tradingRewardsVestingDuration !== BigInt(0) ? (message.tradingRewardsVestingDuration?.toString)() : undefined;
        obj.liquidator_reward_share_rate = message.liquidatorRewardShareRate === "" ? undefined : message.liquidatorRewardShareRate;
        obj.binary_options_market_instant_listing_fee = message.binaryOptionsMarketInstantListingFee ? Coin.toAmino(message.binaryOptionsMarketInstantListingFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseDerivativeMarket() {
    return {
        ticker: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        quoteDenom: "",
        marketId: "",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        isPerpetual: false,
        status: 0,
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const DerivativeMarket = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.oracleBase !== "") {
            writer.uint32(18).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(26).string(message.oracleQuote);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(40).uint32(message.oracleScaleFactor);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(50).string(message.quoteDenom);
        }
        if (message.marketId !== "") {
            writer.uint32(58).string(message.marketId);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(82).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(90).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.isPerpetual === true) {
            writer.uint32(104).bool(message.isPerpetual);
        }
        if (message.status !== 0) {
            writer.uint32(112).int32(message.status);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(122).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(130).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.oracleBase = reader.string();
                    break;
                case 3:
                    message.oracleQuote = reader.string();
                    break;
                case 4:
                    message.oracleType = reader.int32();
                    break;
                case 5:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 6:
                    message.quoteDenom = reader.string();
                    break;
                case 7:
                    message.marketId = reader.string();
                    break;
                case 8:
                    message.initialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.maintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.isPerpetual = reader.bool();
                    break;
                case 14:
                    message.status = reader.int32();
                    break;
                case 15:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 16:
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
        const message = createBaseDerivativeMarket();
        message.ticker = object.ticker ?? "";
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.quoteDenom = object.quoteDenom ?? "";
        message.marketId = object.marketId ?? "";
        message.initialMarginRatio = object.initialMarginRatio ?? "";
        message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
        message.isPerpetual = object.isPerpetual ?? false;
        message.status = object.status ?? 0;
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeMarket();
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
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
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
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
        if (object.isPerpetual !== undefined && object.isPerpetual !== null) {
            message.isPerpetual = object.isPerpetual;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
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
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : message.initialMarginRatio;
        obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : message.maintenanceMarginRatio;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : message.relayerFeeShareRate;
        obj.isPerpetual = message.isPerpetual === false ? undefined : message.isPerpetual;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeMarket.decode(message.value);
    },
    toProto(message) {
        return DerivativeMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeMarket",
            value: DerivativeMarket.encode(message).finish()
        };
    }
};
function createBaseBinaryOptionsMarket() {
    return {
        ticker: "",
        oracleSymbol: "",
        oracleProvider: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        expirationTimestamp: BigInt(0),
        settlementTimestamp: BigInt(0),
        admin: "",
        quoteDenom: "",
        marketId: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        status: 0,
        minPriceTickSize: "",
        minQuantityTickSize: "",
        settlementPrice: undefined
    };
}
export const BinaryOptionsMarket = {
    typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.oracleSymbol !== "") {
            writer.uint32(18).string(message.oracleSymbol);
        }
        if (message.oracleProvider !== "") {
            writer.uint32(26).string(message.oracleProvider);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(40).uint32(message.oracleScaleFactor);
        }
        if (message.expirationTimestamp !== BigInt(0)) {
            writer.uint32(48).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== BigInt(0)) {
            writer.uint32(56).int64(message.settlementTimestamp);
        }
        if (message.admin !== "") {
            writer.uint32(66).string(message.admin);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(74).string(message.quoteDenom);
        }
        if (message.marketId !== "") {
            writer.uint32(82).string(message.marketId);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(90).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(98).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(106).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.status !== 0) {
            writer.uint32(112).int32(message.status);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(122).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(130).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        if (message.settlementPrice !== undefined) {
            writer.uint32(138).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.oracleSymbol = reader.string();
                    break;
                case 3:
                    message.oracleProvider = reader.string();
                    break;
                case 4:
                    message.oracleType = reader.int32();
                    break;
                case 5:
                    message.oracleScaleFactor = reader.uint32();
                    break;
                case 6:
                    message.expirationTimestamp = reader.int64();
                    break;
                case 7:
                    message.settlementTimestamp = reader.int64();
                    break;
                case 8:
                    message.admin = reader.string();
                    break;
                case 9:
                    message.quoteDenom = reader.string();
                    break;
                case 10:
                    message.marketId = reader.string();
                    break;
                case 11:
                    message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 12:
                    message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 13:
                    message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 14:
                    message.status = reader.int32();
                    break;
                case 15:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 16:
                    message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 17:
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
        const message = createBaseBinaryOptionsMarket();
        message.ticker = object.ticker ?? "";
        message.oracleSymbol = object.oracleSymbol ?? "";
        message.oracleProvider = object.oracleProvider ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
        message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
        message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.marketId = object.marketId ?? "";
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
        message.status = object.status ?? 0;
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        message.settlementPrice = object.settlementPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBinaryOptionsMarket();
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
            message.minPriceTickSize = object.min_price_tick_size;
        }
        if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
            message.minQuantityTickSize = object.min_quantity_tick_size;
        }
        if (object.settlement_price !== undefined && object.settlement_price !== null) {
            message.settlementPrice = object.settlement_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.oracle_symbol = message.oracleSymbol === "" ? undefined : message.oracleSymbol;
        obj.oracle_provider = message.oracleProvider === "" ? undefined : message.oracleProvider;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
        obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? (message.expirationTimestamp?.toString)() : undefined;
        obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? (message.settlementTimestamp?.toString)() : undefined;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : message.relayerFeeShareRate;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        obj.settlement_price = message.settlementPrice === null ? undefined : message.settlementPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return BinaryOptionsMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BinaryOptionsMarket.decode(message.value);
    },
    toProto(message) {
        return BinaryOptionsMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket",
            value: BinaryOptionsMarket.encode(message).finish()
        };
    }
};
function createBaseExpiryFuturesMarketInfo() {
    return {
        marketId: "",
        expirationTimestamp: BigInt(0),
        twapStartTimestamp: BigInt(0),
        expirationTwapStartPriceCumulative: "",
        settlementPrice: ""
    };
}
export const ExpiryFuturesMarketInfo = {
    typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.expirationTimestamp !== BigInt(0)) {
            writer.uint32(16).int64(message.expirationTimestamp);
        }
        if (message.twapStartTimestamp !== BigInt(0)) {
            writer.uint32(24).int64(message.twapStartTimestamp);
        }
        if (message.expirationTwapStartPriceCumulative !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.expirationTwapStartPriceCumulative, 18).atomics);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.expirationTimestamp = reader.int64();
                    break;
                case 3:
                    message.twapStartTimestamp = reader.int64();
                    break;
                case 4:
                    message.expirationTwapStartPriceCumulative = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
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
        const message = createBaseExpiryFuturesMarketInfo();
        message.marketId = object.marketId ?? "";
        message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
        message.twapStartTimestamp = object.twapStartTimestamp !== undefined && object.twapStartTimestamp !== null ? BigInt(object.twapStartTimestamp.toString()) : BigInt(0);
        message.expirationTwapStartPriceCumulative = object.expirationTwapStartPriceCumulative ?? "";
        message.settlementPrice = object.settlementPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExpiryFuturesMarketInfo();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
            message.expirationTimestamp = BigInt(object.expiration_timestamp);
        }
        if (object.twap_start_timestamp !== undefined && object.twap_start_timestamp !== null) {
            message.twapStartTimestamp = BigInt(object.twap_start_timestamp);
        }
        if (object.expiration_twap_start_price_cumulative !== undefined && object.expiration_twap_start_price_cumulative !== null) {
            message.expirationTwapStartPriceCumulative = object.expiration_twap_start_price_cumulative;
        }
        if (object.settlement_price !== undefined && object.settlement_price !== null) {
            message.settlementPrice = object.settlement_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? (message.expirationTimestamp?.toString)() : undefined;
        obj.twap_start_timestamp = message.twapStartTimestamp !== BigInt(0) ? (message.twapStartTimestamp?.toString)() : undefined;
        obj.expiration_twap_start_price_cumulative = message.expirationTwapStartPriceCumulative === "" ? undefined : message.expirationTwapStartPriceCumulative;
        obj.settlement_price = message.settlementPrice === "" ? undefined : message.settlementPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return ExpiryFuturesMarketInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExpiryFuturesMarketInfo.decode(message.value);
    },
    toProto(message) {
        return ExpiryFuturesMarketInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo",
            value: ExpiryFuturesMarketInfo.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketInfo() {
    return {
        marketId: "",
        hourlyFundingRateCap: "",
        hourlyInterestRate: "",
        nextFundingTimestamp: BigInt(0),
        fundingInterval: BigInt(0)
    };
}
export const PerpetualMarketInfo = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.hourlyFundingRateCap !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.hourlyFundingRateCap, 18).atomics);
        }
        if (message.hourlyInterestRate !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.hourlyInterestRate, 18).atomics);
        }
        if (message.nextFundingTimestamp !== BigInt(0)) {
            writer.uint32(32).int64(message.nextFundingTimestamp);
        }
        if (message.fundingInterval !== BigInt(0)) {
            writer.uint32(40).int64(message.fundingInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.hourlyFundingRateCap = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.hourlyInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.nextFundingTimestamp = reader.int64();
                    break;
                case 5:
                    message.fundingInterval = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketInfo();
        message.marketId = object.marketId ?? "";
        message.hourlyFundingRateCap = object.hourlyFundingRateCap ?? "";
        message.hourlyInterestRate = object.hourlyInterestRate ?? "";
        message.nextFundingTimestamp = object.nextFundingTimestamp !== undefined && object.nextFundingTimestamp !== null ? BigInt(object.nextFundingTimestamp.toString()) : BigInt(0);
        message.fundingInterval = object.fundingInterval !== undefined && object.fundingInterval !== null ? BigInt(object.fundingInterval.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePerpetualMarketInfo();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.hourly_funding_rate_cap !== undefined && object.hourly_funding_rate_cap !== null) {
            message.hourlyFundingRateCap = object.hourly_funding_rate_cap;
        }
        if (object.hourly_interest_rate !== undefined && object.hourly_interest_rate !== null) {
            message.hourlyInterestRate = object.hourly_interest_rate;
        }
        if (object.next_funding_timestamp !== undefined && object.next_funding_timestamp !== null) {
            message.nextFundingTimestamp = BigInt(object.next_funding_timestamp);
        }
        if (object.funding_interval !== undefined && object.funding_interval !== null) {
            message.fundingInterval = BigInt(object.funding_interval);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.hourly_funding_rate_cap = message.hourlyFundingRateCap === "" ? undefined : message.hourlyFundingRateCap;
        obj.hourly_interest_rate = message.hourlyInterestRate === "" ? undefined : message.hourlyInterestRate;
        obj.next_funding_timestamp = message.nextFundingTimestamp !== BigInt(0) ? (message.nextFundingTimestamp?.toString)() : undefined;
        obj.funding_interval = message.fundingInterval !== BigInt(0) ? (message.fundingInterval?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PerpetualMarketInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PerpetualMarketInfo.decode(message.value);
    },
    toProto(message) {
        return PerpetualMarketInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo",
            value: PerpetualMarketInfo.encode(message).finish()
        };
    }
};
function createBasePerpetualMarketFunding() {
    return {
        cumulativeFunding: "",
        cumulativePrice: "",
        lastTimestamp: BigInt(0)
    };
}
export const PerpetualMarketFunding = {
    typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding",
    encode(message, writer = BinaryWriter.create()) {
        if (message.cumulativeFunding !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.cumulativeFunding, 18).atomics);
        }
        if (message.cumulativePrice !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
        }
        if (message.lastTimestamp !== BigInt(0)) {
            writer.uint32(24).int64(message.lastTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketFunding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativeFunding = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.cumulativePrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.lastTimestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePerpetualMarketFunding();
        message.cumulativeFunding = object.cumulativeFunding ?? "";
        message.cumulativePrice = object.cumulativePrice ?? "";
        message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? BigInt(object.lastTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePerpetualMarketFunding();
        if (object.cumulative_funding !== undefined && object.cumulative_funding !== null) {
            message.cumulativeFunding = object.cumulative_funding;
        }
        if (object.cumulative_price !== undefined && object.cumulative_price !== null) {
            message.cumulativePrice = object.cumulative_price;
        }
        if (object.last_timestamp !== undefined && object.last_timestamp !== null) {
            message.lastTimestamp = BigInt(object.last_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cumulative_funding = message.cumulativeFunding === "" ? undefined : message.cumulativeFunding;
        obj.cumulative_price = message.cumulativePrice === "" ? undefined : message.cumulativePrice;
        obj.last_timestamp = message.lastTimestamp !== BigInt(0) ? (message.lastTimestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PerpetualMarketFunding.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PerpetualMarketFunding.decode(message.value);
    },
    toProto(message) {
        return PerpetualMarketFunding.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding",
            value: PerpetualMarketFunding.encode(message).finish()
        };
    }
};
function createBaseDerivativeMarketSettlementInfo() {
    return {
        marketId: "",
        settlementPrice: "",
        startingDeficit: ""
    };
}
export const DerivativeMarketSettlementInfo = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
        }
        if (message.startingDeficit !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.startingDeficit, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketSettlementInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.settlementPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.startingDeficit = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeMarketSettlementInfo();
        message.marketId = object.marketId ?? "";
        message.settlementPrice = object.settlementPrice ?? "";
        message.startingDeficit = object.startingDeficit ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeMarketSettlementInfo();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.settlement_price !== undefined && object.settlement_price !== null) {
            message.settlementPrice = object.settlement_price;
        }
        if (object.starting_deficit !== undefined && object.starting_deficit !== null) {
            message.startingDeficit = object.starting_deficit;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.settlement_price = message.settlementPrice === "" ? undefined : message.settlementPrice;
        obj.starting_deficit = message.startingDeficit === "" ? undefined : message.startingDeficit;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeMarketSettlementInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeMarketSettlementInfo.decode(message.value);
    },
    toProto(message) {
        return DerivativeMarketSettlementInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo",
            value: DerivativeMarketSettlementInfo.encode(message).finish()
        };
    }
};
function createBaseNextFundingTimestamp() {
    return {
        nextTimestamp: BigInt(0)
    };
}
export const NextFundingTimestamp = {
    typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nextTimestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.nextTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextFundingTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextTimestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNextFundingTimestamp();
        message.nextTimestamp = object.nextTimestamp !== undefined && object.nextTimestamp !== null ? BigInt(object.nextTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNextFundingTimestamp();
        if (object.next_timestamp !== undefined && object.next_timestamp !== null) {
            message.nextTimestamp = BigInt(object.next_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_timestamp = message.nextTimestamp !== BigInt(0) ? (message.nextTimestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NextFundingTimestamp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NextFundingTimestamp.decode(message.value);
    },
    toProto(message) {
        return NextFundingTimestamp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp",
            value: NextFundingTimestamp.encode(message).finish()
        };
    }
};
function createBaseSpotMarket() {
    return {
        ticker: "",
        baseDenom: "",
        quoteDenom: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        marketId: "",
        status: 0,
        minPriceTickSize: "",
        minQuantityTickSize: ""
    };
}
export const SpotMarket = {
    typeUrl: "/injective.exchange.v1beta1.SpotMarket",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.baseDenom !== "") {
            writer.uint32(18).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
        }
        if (message.marketId !== "") {
            writer.uint32(58).string(message.marketId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(82).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.baseDenom = reader.string();
                    break;
                case 3:
                    message.quoteDenom = reader.string();
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
                    message.marketId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
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
        const message = createBaseSpotMarket();
        message.ticker = object.ticker ?? "";
        message.baseDenom = object.baseDenom ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.makerFeeRate = object.makerFeeRate ?? "";
        message.takerFeeRate = object.takerFeeRate ?? "";
        message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
        message.marketId = object.marketId ?? "";
        message.status = object.status ?? 0;
        message.minPriceTickSize = object.minPriceTickSize ?? "";
        message.minQuantityTickSize = object.minQuantityTickSize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotMarket();
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
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
        if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
            message.relayerFeeShareRate = object.relayer_fee_share_rate;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
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
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : message.makerFeeRate;
        obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : message.takerFeeRate;
        obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : message.relayerFeeShareRate;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : message.minPriceTickSize;
        obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : message.minQuantityTickSize;
        return obj;
    },
    fromAminoMsg(object) {
        return SpotMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SpotMarket.decode(message.value);
    },
    toProto(message) {
        return SpotMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotMarket",
            value: SpotMarket.encode(message).finish()
        };
    }
};
function createBaseDeposit() {
    return {
        availableBalance: "",
        totalBalance: ""
    };
}
export const Deposit = {
    typeUrl: "/injective.exchange.v1beta1.Deposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.availableBalance !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.availableBalance, 18).atomics);
        }
        if (message.totalBalance !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.totalBalance, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.availableBalance = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.totalBalance = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeposit();
        message.availableBalance = object.availableBalance ?? "";
        message.totalBalance = object.totalBalance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeposit();
        if (object.available_balance !== undefined && object.available_balance !== null) {
            message.availableBalance = object.available_balance;
        }
        if (object.total_balance !== undefined && object.total_balance !== null) {
            message.totalBalance = object.total_balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.available_balance = message.availableBalance === "" ? undefined : message.availableBalance;
        obj.total_balance = message.totalBalance === "" ? undefined : message.totalBalance;
        return obj;
    },
    fromAminoMsg(object) {
        return Deposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Deposit.decode(message.value);
    },
    toProto(message) {
        return Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.Deposit",
            value: Deposit.encode(message).finish()
        };
    }
};
function createBaseSubaccountTradeNonce() {
    return {
        nonce: 0
    };
}
export const SubaccountTradeNonce = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint32(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountTradeNonce();
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
        const message = createBaseSubaccountTradeNonce();
        message.nonce = object.nonce ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountTradeNonce();
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
        return SubaccountTradeNonce.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountTradeNonce.decode(message.value);
    },
    toProto(message) {
        return SubaccountTradeNonce.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce",
            value: SubaccountTradeNonce.encode(message).finish()
        };
    }
};
function createBaseOrderInfo() {
    return {
        subaccountId: "",
        feeRecipient: "",
        price: "",
        quantity: ""
    };
}
export const OrderInfo = {
    typeUrl: "/injective.exchange.v1beta1.OrderInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.feeRecipient !== "") {
            writer.uint32(18).string(message.feeRecipient);
        }
        if (message.price !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.feeRecipient = reader.string();
                    break;
                case 3:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
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
        const message = createBaseOrderInfo();
        message.subaccountId = object.subaccountId ?? "";
        message.feeRecipient = object.feeRecipient ?? "";
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOrderInfo();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        if (object.fee_recipient !== undefined && object.fee_recipient !== null) {
            message.feeRecipient = object.fee_recipient;
        }
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
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        obj.fee_recipient = message.feeRecipient === "" ? undefined : message.feeRecipient;
        obj.price = message.price === "" ? undefined : message.price;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        return obj;
    },
    fromAminoMsg(object) {
        return OrderInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OrderInfo.decode(message.value);
    },
    toProto(message) {
        return OrderInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.OrderInfo",
            value: OrderInfo.encode(message).finish()
        };
    }
};
function createBaseSpotOrder() {
    return {
        marketId: "",
        orderInfo: OrderInfo.fromPartial({}),
        orderType: 0,
        triggerPrice: undefined
    };
}
export const SpotOrder = {
    typeUrl: "/injective.exchange.v1beta1.SpotOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(24).int32(message.orderType);
        }
        if (message.triggerPrice !== undefined) {
            writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderType = reader.int32();
                    break;
                case 4:
                    message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotOrder();
        message.marketId = object.marketId ?? "";
        message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
        message.orderType = object.orderType ?? 0;
        message.triggerPrice = object.triggerPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotOrder();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.order_info !== undefined && object.order_info !== null) {
            message.orderInfo = OrderInfo.fromAmino(object.order_info);
        }
        if (object.order_type !== undefined && object.order_type !== null) {
            message.orderType = object.order_type;
        }
        if (object.trigger_price !== undefined && object.trigger_price !== null) {
            message.triggerPrice = object.trigger_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
        obj.order_type = message.orderType === 0 ? undefined : message.orderType;
        obj.trigger_price = message.triggerPrice === null ? undefined : message.triggerPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return SpotOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SpotOrder.decode(message.value);
    },
    toProto(message) {
        return SpotOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotOrder",
            value: SpotOrder.encode(message).finish()
        };
    }
};
function createBaseSpotLimitOrder() {
    return {
        orderInfo: OrderInfo.fromPartial({}),
        orderType: 0,
        fillable: "",
        triggerPrice: undefined,
        orderHash: new Uint8Array()
    };
}
export const SpotLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(16).int32(message.orderType);
        }
        if (message.fillable !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.fillable, 18).atomics);
        }
        if (message.triggerPrice !== undefined) {
            writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(42).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderType = reader.int32();
                    break;
                case 3:
                    message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.orderHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotLimitOrder();
        message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
        message.orderType = object.orderType ?? 0;
        message.fillable = object.fillable ?? "";
        message.triggerPrice = object.triggerPrice ?? undefined;
        message.orderHash = object.orderHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotLimitOrder();
        if (object.order_info !== undefined && object.order_info !== null) {
            message.orderInfo = OrderInfo.fromAmino(object.order_info);
        }
        if (object.order_type !== undefined && object.order_type !== null) {
            message.orderType = object.order_type;
        }
        if (object.fillable !== undefined && object.fillable !== null) {
            message.fillable = object.fillable;
        }
        if (object.trigger_price !== undefined && object.trigger_price !== null) {
            message.triggerPrice = object.trigger_price;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = bytesFromBase64(object.order_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
        obj.order_type = message.orderType === 0 ? undefined : message.orderType;
        obj.fillable = message.fillable === "" ? undefined : message.fillable;
        obj.trigger_price = message.triggerPrice === null ? undefined : message.triggerPrice;
        obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SpotLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SpotLimitOrder.decode(message.value);
    },
    toProto(message) {
        return SpotLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder",
            value: SpotLimitOrder.encode(message).finish()
        };
    }
};
function createBaseSpotMarketOrder() {
    return {
        orderInfo: OrderInfo.fromPartial({}),
        balanceHold: "",
        orderHash: new Uint8Array(),
        orderType: 0,
        triggerPrice: undefined
    };
}
export const SpotMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.balanceHold !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(26).bytes(message.orderHash);
        }
        if (message.orderType !== 0) {
            writer.uint32(32).int32(message.orderType);
        }
        if (message.triggerPrice !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balanceHold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.orderHash = reader.bytes();
                    break;
                case 4:
                    message.orderType = reader.int32();
                    break;
                case 5:
                    message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSpotMarketOrder();
        message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
        message.balanceHold = object.balanceHold ?? "";
        message.orderHash = object.orderHash ?? new Uint8Array();
        message.orderType = object.orderType ?? 0;
        message.triggerPrice = object.triggerPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSpotMarketOrder();
        if (object.order_info !== undefined && object.order_info !== null) {
            message.orderInfo = OrderInfo.fromAmino(object.order_info);
        }
        if (object.balance_hold !== undefined && object.balance_hold !== null) {
            message.balanceHold = object.balance_hold;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = bytesFromBase64(object.order_hash);
        }
        if (object.order_type !== undefined && object.order_type !== null) {
            message.orderType = object.order_type;
        }
        if (object.trigger_price !== undefined && object.trigger_price !== null) {
            message.triggerPrice = object.trigger_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
        obj.balance_hold = message.balanceHold === "" ? undefined : message.balanceHold;
        obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
        obj.order_type = message.orderType === 0 ? undefined : message.orderType;
        obj.trigger_price = message.triggerPrice === null ? undefined : message.triggerPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return SpotMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SpotMarketOrder.decode(message.value);
    },
    toProto(message) {
        return SpotMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder",
            value: SpotMarketOrder.encode(message).finish()
        };
    }
};
function createBaseDerivativeOrder() {
    return {
        marketId: "",
        orderInfo: OrderInfo.fromPartial({}),
        orderType: 0,
        margin: "",
        triggerPrice: undefined
    };
}
export const DerivativeOrder = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(24).int32(message.orderType);
        }
        if (message.margin !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.triggerPrice !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderType = reader.int32();
                    break;
                case 4:
                    message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeOrder();
        message.marketId = object.marketId ?? "";
        message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
        message.orderType = object.orderType ?? 0;
        message.margin = object.margin ?? "";
        message.triggerPrice = object.triggerPrice ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeOrder();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.order_info !== undefined && object.order_info !== null) {
            message.orderInfo = OrderInfo.fromAmino(object.order_info);
        }
        if (object.order_type !== undefined && object.order_type !== null) {
            message.orderType = object.order_type;
        }
        if (object.margin !== undefined && object.margin !== null) {
            message.margin = object.margin;
        }
        if (object.trigger_price !== undefined && object.trigger_price !== null) {
            message.triggerPrice = object.trigger_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
        obj.order_type = message.orderType === 0 ? undefined : message.orderType;
        obj.margin = message.margin === "" ? undefined : message.margin;
        obj.trigger_price = message.triggerPrice === null ? undefined : message.triggerPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeOrder.decode(message.value);
    },
    toProto(message) {
        return DerivativeOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeOrder",
            value: DerivativeOrder.encode(message).finish()
        };
    }
};
function createBaseSubaccountOrderbookMetadata() {
    return {
        vanillaLimitOrderCount: 0,
        reduceOnlyLimitOrderCount: 0,
        aggregateReduceOnlyQuantity: "",
        aggregateVanillaQuantity: "",
        vanillaConditionalOrderCount: 0,
        reduceOnlyConditionalOrderCount: 0
    };
}
export const SubaccountOrderbookMetadata = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.vanillaLimitOrderCount !== 0) {
            writer.uint32(8).uint32(message.vanillaLimitOrderCount);
        }
        if (message.reduceOnlyLimitOrderCount !== 0) {
            writer.uint32(16).uint32(message.reduceOnlyLimitOrderCount);
        }
        if (message.aggregateReduceOnlyQuantity !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.aggregateReduceOnlyQuantity, 18).atomics);
        }
        if (message.aggregateVanillaQuantity !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.aggregateVanillaQuantity, 18).atomics);
        }
        if (message.vanillaConditionalOrderCount !== 0) {
            writer.uint32(40).uint32(message.vanillaConditionalOrderCount);
        }
        if (message.reduceOnlyConditionalOrderCount !== 0) {
            writer.uint32(48).uint32(message.reduceOnlyConditionalOrderCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderbookMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vanillaLimitOrderCount = reader.uint32();
                    break;
                case 2:
                    message.reduceOnlyLimitOrderCount = reader.uint32();
                    break;
                case 3:
                    message.aggregateReduceOnlyQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.aggregateVanillaQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.vanillaConditionalOrderCount = reader.uint32();
                    break;
                case 6:
                    message.reduceOnlyConditionalOrderCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountOrderbookMetadata();
        message.vanillaLimitOrderCount = object.vanillaLimitOrderCount ?? 0;
        message.reduceOnlyLimitOrderCount = object.reduceOnlyLimitOrderCount ?? 0;
        message.aggregateReduceOnlyQuantity = object.aggregateReduceOnlyQuantity ?? "";
        message.aggregateVanillaQuantity = object.aggregateVanillaQuantity ?? "";
        message.vanillaConditionalOrderCount = object.vanillaConditionalOrderCount ?? 0;
        message.reduceOnlyConditionalOrderCount = object.reduceOnlyConditionalOrderCount ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountOrderbookMetadata();
        if (object.vanilla_limit_order_count !== undefined && object.vanilla_limit_order_count !== null) {
            message.vanillaLimitOrderCount = object.vanilla_limit_order_count;
        }
        if (object.reduce_only_limit_order_count !== undefined && object.reduce_only_limit_order_count !== null) {
            message.reduceOnlyLimitOrderCount = object.reduce_only_limit_order_count;
        }
        if (object.aggregate_reduce_only_quantity !== undefined && object.aggregate_reduce_only_quantity !== null) {
            message.aggregateReduceOnlyQuantity = object.aggregate_reduce_only_quantity;
        }
        if (object.aggregate_vanilla_quantity !== undefined && object.aggregate_vanilla_quantity !== null) {
            message.aggregateVanillaQuantity = object.aggregate_vanilla_quantity;
        }
        if (object.vanilla_conditional_order_count !== undefined && object.vanilla_conditional_order_count !== null) {
            message.vanillaConditionalOrderCount = object.vanilla_conditional_order_count;
        }
        if (object.reduce_only_conditional_order_count !== undefined && object.reduce_only_conditional_order_count !== null) {
            message.reduceOnlyConditionalOrderCount = object.reduce_only_conditional_order_count;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vanilla_limit_order_count = message.vanillaLimitOrderCount === 0 ? undefined : message.vanillaLimitOrderCount;
        obj.reduce_only_limit_order_count = message.reduceOnlyLimitOrderCount === 0 ? undefined : message.reduceOnlyLimitOrderCount;
        obj.aggregate_reduce_only_quantity = message.aggregateReduceOnlyQuantity === "" ? undefined : message.aggregateReduceOnlyQuantity;
        obj.aggregate_vanilla_quantity = message.aggregateVanillaQuantity === "" ? undefined : message.aggregateVanillaQuantity;
        obj.vanilla_conditional_order_count = message.vanillaConditionalOrderCount === 0 ? undefined : message.vanillaConditionalOrderCount;
        obj.reduce_only_conditional_order_count = message.reduceOnlyConditionalOrderCount === 0 ? undefined : message.reduceOnlyConditionalOrderCount;
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountOrderbookMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountOrderbookMetadata.decode(message.value);
    },
    toProto(message) {
        return SubaccountOrderbookMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata",
            value: SubaccountOrderbookMetadata.encode(message).finish()
        };
    }
};
function createBaseSubaccountOrder() {
    return {
        price: "",
        quantity: "",
        isReduceOnly: false
    };
}
export const SubaccountOrder = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.isReduceOnly === true) {
            writer.uint32(24).bool(message.isReduceOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrder();
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
                    message.isReduceOnly = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountOrder();
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        message.isReduceOnly = object.isReduceOnly ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountOrder();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.isReduceOnly !== undefined && object.isReduceOnly !== null) {
            message.isReduceOnly = object.isReduceOnly;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price === "" ? undefined : message.price;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.isReduceOnly = message.isReduceOnly === false ? undefined : message.isReduceOnly;
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountOrder.decode(message.value);
    },
    toProto(message) {
        return SubaccountOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountOrder",
            value: SubaccountOrder.encode(message).finish()
        };
    }
};
function createBaseSubaccountOrderData() {
    return {
        order: undefined,
        orderHash: new Uint8Array()
    };
}
export const SubaccountOrderData = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.order !== undefined) {
            SubaccountOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(18).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = SubaccountOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountOrderData();
        message.order = object.order !== undefined && object.order !== null ? SubaccountOrder.fromPartial(object.order) : undefined;
        message.orderHash = object.orderHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountOrderData();
        if (object.order !== undefined && object.order !== null) {
            message.order = SubaccountOrder.fromAmino(object.order);
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = bytesFromBase64(object.order_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? SubaccountOrder.toAmino(message.order) : undefined;
        obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountOrderData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountOrderData.decode(message.value);
    },
    toProto(message) {
        return SubaccountOrderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData",
            value: SubaccountOrderData.encode(message).finish()
        };
    }
};
function createBaseDerivativeLimitOrder() {
    return {
        orderInfo: OrderInfo.fromPartial({}),
        orderType: 0,
        margin: "",
        fillable: "",
        triggerPrice: undefined,
        orderHash: new Uint8Array()
    };
}
export const DerivativeLimitOrder = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(16).int32(message.orderType);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.fillable !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.fillable, 18).atomics);
        }
        if (message.triggerPrice !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(50).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderType = reader.int32();
                    break;
                case 3:
                    message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.orderHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeLimitOrder();
        message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
        message.orderType = object.orderType ?? 0;
        message.margin = object.margin ?? "";
        message.fillable = object.fillable ?? "";
        message.triggerPrice = object.triggerPrice ?? undefined;
        message.orderHash = object.orderHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeLimitOrder();
        if (object.order_info !== undefined && object.order_info !== null) {
            message.orderInfo = OrderInfo.fromAmino(object.order_info);
        }
        if (object.order_type !== undefined && object.order_type !== null) {
            message.orderType = object.order_type;
        }
        if (object.margin !== undefined && object.margin !== null) {
            message.margin = object.margin;
        }
        if (object.fillable !== undefined && object.fillable !== null) {
            message.fillable = object.fillable;
        }
        if (object.trigger_price !== undefined && object.trigger_price !== null) {
            message.triggerPrice = object.trigger_price;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = bytesFromBase64(object.order_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
        obj.order_type = message.orderType === 0 ? undefined : message.orderType;
        obj.margin = message.margin === "" ? undefined : message.margin;
        obj.fillable = message.fillable === "" ? undefined : message.fillable;
        obj.trigger_price = message.triggerPrice === null ? undefined : message.triggerPrice;
        obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeLimitOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeLimitOrder.decode(message.value);
    },
    toProto(message) {
        return DerivativeLimitOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder",
            value: DerivativeLimitOrder.encode(message).finish()
        };
    }
};
function createBaseDerivativeMarketOrder() {
    return {
        orderInfo: OrderInfo.fromPartial({}),
        orderType: 0,
        margin: "",
        marginHold: "",
        triggerPrice: undefined,
        orderHash: new Uint8Array()
    };
}
export const DerivativeMarketOrder = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(16).int32(message.orderType);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.marginHold !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.marginHold, 18).atomics);
        }
        if (message.triggerPrice !== undefined) {
            writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(50).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderType = reader.int32();
                    break;
                case 3:
                    message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.marginHold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.orderHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeMarketOrder();
        message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
        message.orderType = object.orderType ?? 0;
        message.margin = object.margin ?? "";
        message.marginHold = object.marginHold ?? "";
        message.triggerPrice = object.triggerPrice ?? undefined;
        message.orderHash = object.orderHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeMarketOrder();
        if (object.order_info !== undefined && object.order_info !== null) {
            message.orderInfo = OrderInfo.fromAmino(object.order_info);
        }
        if (object.order_type !== undefined && object.order_type !== null) {
            message.orderType = object.order_type;
        }
        if (object.margin !== undefined && object.margin !== null) {
            message.margin = object.margin;
        }
        if (object.margin_hold !== undefined && object.margin_hold !== null) {
            message.marginHold = object.margin_hold;
        }
        if (object.trigger_price !== undefined && object.trigger_price !== null) {
            message.triggerPrice = object.trigger_price;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = bytesFromBase64(object.order_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
        obj.order_type = message.orderType === 0 ? undefined : message.orderType;
        obj.margin = message.margin === "" ? undefined : message.margin;
        obj.margin_hold = message.marginHold === "" ? undefined : message.marginHold;
        obj.trigger_price = message.triggerPrice === null ? undefined : message.triggerPrice;
        obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeMarketOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeMarketOrder.decode(message.value);
    },
    toProto(message) {
        return DerivativeMarketOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder",
            value: DerivativeMarketOrder.encode(message).finish()
        };
    }
};
function createBasePosition() {
    return {
        isLong: false,
        quantity: "",
        entryPrice: "",
        margin: "",
        cumulativeFundingEntry: ""
    };
}
export const Position = {
    typeUrl: "/injective.exchange.v1beta1.Position",
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
        if (message.margin !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.margin, 18).atomics);
        }
        if (message.cumulativeFundingEntry !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.cumulativeFundingEntry, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePosition();
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
                    message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.cumulativeFundingEntry = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePosition();
        message.isLong = object.isLong ?? false;
        message.quantity = object.quantity ?? "";
        message.entryPrice = object.entryPrice ?? "";
        message.margin = object.margin ?? "";
        message.cumulativeFundingEntry = object.cumulativeFundingEntry ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePosition();
        if (object.isLong !== undefined && object.isLong !== null) {
            message.isLong = object.isLong;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.entry_price !== undefined && object.entry_price !== null) {
            message.entryPrice = object.entry_price;
        }
        if (object.margin !== undefined && object.margin !== null) {
            message.margin = object.margin;
        }
        if (object.cumulative_funding_entry !== undefined && object.cumulative_funding_entry !== null) {
            message.cumulativeFundingEntry = object.cumulative_funding_entry;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.isLong = message.isLong === false ? undefined : message.isLong;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.entry_price = message.entryPrice === "" ? undefined : message.entryPrice;
        obj.margin = message.margin === "" ? undefined : message.margin;
        obj.cumulative_funding_entry = message.cumulativeFundingEntry === "" ? undefined : message.cumulativeFundingEntry;
        return obj;
    },
    fromAminoMsg(object) {
        return Position.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Position.decode(message.value);
    },
    toProto(message) {
        return Position.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.Position",
            value: Position.encode(message).finish()
        };
    }
};
function createBaseMarketOrderIndicator() {
    return {
        marketId: "",
        isBuy: false
    };
}
export const MarketOrderIndicator = {
    typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuy === true) {
            writer.uint32(16).bool(message.isBuy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketOrderIndicator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
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
        const message = createBaseMarketOrderIndicator();
        message.marketId = object.marketId ?? "";
        message.isBuy = object.isBuy ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMarketOrderIndicator();
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
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
        return obj;
    },
    fromAminoMsg(object) {
        return MarketOrderIndicator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MarketOrderIndicator.decode(message.value);
    },
    toProto(message) {
        return MarketOrderIndicator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator",
            value: MarketOrderIndicator.encode(message).finish()
        };
    }
};
function createBaseTradeLog() {
    return {
        quantity: "",
        price: "",
        subaccountId: new Uint8Array(),
        fee: "",
        orderHash: new Uint8Array(),
        feeRecipientAddress: undefined
    };
}
export const TradeLog = {
    typeUrl: "/injective.exchange.v1beta1.TradeLog",
    encode(message, writer = BinaryWriter.create()) {
        if (message.quantity !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        if (message.price !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(26).bytes(message.subaccountId);
        }
        if (message.fee !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.fee, 18).atomics);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(42).bytes(message.orderHash);
        }
        if (message.feeRecipientAddress !== undefined) {
            writer.uint32(50).bytes(message.feeRecipientAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.subaccountId = reader.bytes();
                    break;
                case 4:
                    message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.orderHash = reader.bytes();
                    break;
                case 6:
                    message.feeRecipientAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradeLog();
        message.quantity = object.quantity ?? "";
        message.price = object.price ?? "";
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.fee = object.fee ?? "";
        message.orderHash = object.orderHash ?? new Uint8Array();
        message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradeLog();
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = bytesFromBase64(object.subaccount_id);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = bytesFromBase64(object.order_hash);
        }
        if (object.fee_recipient_address !== undefined && object.fee_recipient_address !== null) {
            message.feeRecipientAddress = bytesFromBase64(object.fee_recipient_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.price = message.price === "" ? undefined : message.price;
        obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
        obj.fee = message.fee === "" ? undefined : message.fee;
        obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
        obj.fee_recipient_address = message.feeRecipientAddress ? base64FromBytes(message.feeRecipientAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TradeLog.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradeLog.decode(message.value);
    },
    toProto(message) {
        return TradeLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradeLog",
            value: TradeLog.encode(message).finish()
        };
    }
};
function createBasePositionDelta() {
    return {
        isLong: false,
        executionQuantity: "",
        executionMargin: "",
        executionPrice: ""
    };
}
export const PositionDelta = {
    typeUrl: "/injective.exchange.v1beta1.PositionDelta",
    encode(message, writer = BinaryWriter.create()) {
        if (message.isLong === true) {
            writer.uint32(8).bool(message.isLong);
        }
        if (message.executionQuantity !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.executionQuantity, 18).atomics);
        }
        if (message.executionMargin !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.executionMargin, 18).atomics);
        }
        if (message.executionPrice !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.executionPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionDelta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isLong = reader.bool();
                    break;
                case 2:
                    message.executionQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.executionMargin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.executionPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePositionDelta();
        message.isLong = object.isLong ?? false;
        message.executionQuantity = object.executionQuantity ?? "";
        message.executionMargin = object.executionMargin ?? "";
        message.executionPrice = object.executionPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePositionDelta();
        if (object.is_long !== undefined && object.is_long !== null) {
            message.isLong = object.is_long;
        }
        if (object.execution_quantity !== undefined && object.execution_quantity !== null) {
            message.executionQuantity = object.execution_quantity;
        }
        if (object.execution_margin !== undefined && object.execution_margin !== null) {
            message.executionMargin = object.execution_margin;
        }
        if (object.execution_price !== undefined && object.execution_price !== null) {
            message.executionPrice = object.execution_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.is_long = message.isLong === false ? undefined : message.isLong;
        obj.execution_quantity = message.executionQuantity === "" ? undefined : message.executionQuantity;
        obj.execution_margin = message.executionMargin === "" ? undefined : message.executionMargin;
        obj.execution_price = message.executionPrice === "" ? undefined : message.executionPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return PositionDelta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PositionDelta.decode(message.value);
    },
    toProto(message) {
        return PositionDelta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PositionDelta",
            value: PositionDelta.encode(message).finish()
        };
    }
};
function createBaseDerivativeTradeLog() {
    return {
        subaccountId: new Uint8Array(),
        positionDelta: undefined,
        payout: "",
        fee: "",
        orderHash: new Uint8Array(),
        feeRecipientAddress: undefined
    };
}
export const DerivativeTradeLog = {
    typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId.length !== 0) {
            writer.uint32(10).bytes(message.subaccountId);
        }
        if (message.positionDelta !== undefined) {
            PositionDelta.encode(message.positionDelta, writer.uint32(18).fork()).ldelim();
        }
        if (message.payout !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.payout, 18).atomics);
        }
        if (message.fee !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.fee, 18).atomics);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(42).bytes(message.orderHash);
        }
        if (message.feeRecipientAddress !== undefined) {
            writer.uint32(50).bytes(message.feeRecipientAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeTradeLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.bytes();
                    break;
                case 2:
                    message.positionDelta = PositionDelta.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.payout = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.orderHash = reader.bytes();
                    break;
                case 6:
                    message.feeRecipientAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDerivativeTradeLog();
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.positionDelta = object.positionDelta !== undefined && object.positionDelta !== null ? PositionDelta.fromPartial(object.positionDelta) : undefined;
        message.payout = object.payout ?? "";
        message.fee = object.fee ?? "";
        message.orderHash = object.orderHash ?? new Uint8Array();
        message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDerivativeTradeLog();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = bytesFromBase64(object.subaccount_id);
        }
        if (object.position_delta !== undefined && object.position_delta !== null) {
            message.positionDelta = PositionDelta.fromAmino(object.position_delta);
        }
        if (object.payout !== undefined && object.payout !== null) {
            message.payout = object.payout;
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        if (object.order_hash !== undefined && object.order_hash !== null) {
            message.orderHash = bytesFromBase64(object.order_hash);
        }
        if (object.fee_recipient_address !== undefined && object.fee_recipient_address !== null) {
            message.feeRecipientAddress = bytesFromBase64(object.fee_recipient_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
        obj.position_delta = message.positionDelta ? PositionDelta.toAmino(message.positionDelta) : undefined;
        obj.payout = message.payout === "" ? undefined : message.payout;
        obj.fee = message.fee === "" ? undefined : message.fee;
        obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
        obj.fee_recipient_address = message.feeRecipientAddress ? base64FromBytes(message.feeRecipientAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DerivativeTradeLog.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DerivativeTradeLog.decode(message.value);
    },
    toProto(message) {
        return DerivativeTradeLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog",
            value: DerivativeTradeLog.encode(message).finish()
        };
    }
};
function createBaseSubaccountPosition() {
    return {
        position: undefined,
        subaccountId: new Uint8Array()
    };
}
export const SubaccountPosition = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountPosition",
    encode(message, writer = BinaryWriter.create()) {
        if (message.position !== undefined) {
            Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(18).bytes(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subaccountId = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountPosition();
        message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountPosition();
        if (object.position !== undefined && object.position !== null) {
            message.position = Position.fromAmino(object.position);
        }
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = bytesFromBase64(object.subaccount_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.position = message.position ? Position.toAmino(message.position) : undefined;
        obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountPosition.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountPosition.decode(message.value);
    },
    toProto(message) {
        return SubaccountPosition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountPosition",
            value: SubaccountPosition.encode(message).finish()
        };
    }
};
function createBaseSubaccountDeposit() {
    return {
        subaccountId: new Uint8Array(),
        deposit: undefined
    };
}
export const SubaccountDeposit = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId.length !== 0) {
            writer.uint32(10).bytes(message.subaccountId);
        }
        if (message.deposit !== undefined) {
            Deposit.encode(message.deposit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.bytes();
                    break;
                case 2:
                    message.deposit = Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountDeposit();
        message.subaccountId = object.subaccountId ?? new Uint8Array();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountDeposit();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = bytesFromBase64(object.subaccount_id);
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Deposit.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
        obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountDeposit.decode(message.value);
    },
    toProto(message) {
        return SubaccountDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit",
            value: SubaccountDeposit.encode(message).finish()
        };
    }
};
function createBaseDepositUpdate() {
    return {
        denom: "",
        deposits: []
    };
}
export const DepositUpdate = {
    typeUrl: "/injective.exchange.v1beta1.DepositUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        for (const v of message.deposits) {
            SubaccountDeposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.deposits.push(SubaccountDeposit.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDepositUpdate();
        message.denom = object.denom ?? "";
        message.deposits = object.deposits?.map(e => SubaccountDeposit.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositUpdate();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        message.deposits = object.deposits?.map(e => SubaccountDeposit.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? SubaccountDeposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = message.deposits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DepositUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DepositUpdate.decode(message.value);
    },
    toProto(message) {
        return DepositUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.DepositUpdate",
            value: DepositUpdate.encode(message).finish()
        };
    }
};
function createBasePointsMultiplier() {
    return {
        makerPointsMultiplier: "",
        takerPointsMultiplier: ""
    };
}
export const PointsMultiplier = {
    typeUrl: "/injective.exchange.v1beta1.PointsMultiplier",
    encode(message, writer = BinaryWriter.create()) {
        if (message.makerPointsMultiplier !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.makerPointsMultiplier, 18).atomics);
        }
        if (message.takerPointsMultiplier !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.takerPointsMultiplier, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePointsMultiplier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.makerPointsMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.takerPointsMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePointsMultiplier();
        message.makerPointsMultiplier = object.makerPointsMultiplier ?? "";
        message.takerPointsMultiplier = object.takerPointsMultiplier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePointsMultiplier();
        if (object.maker_points_multiplier !== undefined && object.maker_points_multiplier !== null) {
            message.makerPointsMultiplier = object.maker_points_multiplier;
        }
        if (object.taker_points_multiplier !== undefined && object.taker_points_multiplier !== null) {
            message.takerPointsMultiplier = object.taker_points_multiplier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.maker_points_multiplier = message.makerPointsMultiplier === "" ? undefined : message.makerPointsMultiplier;
        obj.taker_points_multiplier = message.takerPointsMultiplier === "" ? undefined : message.takerPointsMultiplier;
        return obj;
    },
    fromAminoMsg(object) {
        return PointsMultiplier.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PointsMultiplier.decode(message.value);
    },
    toProto(message) {
        return PointsMultiplier.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.PointsMultiplier",
            value: PointsMultiplier.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignBoostInfo() {
    return {
        boostedSpotMarketIds: [],
        spotMarketMultipliers: [],
        boostedDerivativeMarketIds: [],
        derivativeMarketMultipliers: []
    };
}
export const TradingRewardCampaignBoostInfo = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.boostedSpotMarketIds) {
            writer.uint32(10).string(v);
        }
        for (const v of message.spotMarketMultipliers) {
            PointsMultiplier.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.boostedDerivativeMarketIds) {
            writer.uint32(26).string(v);
        }
        for (const v of message.derivativeMarketMultipliers) {
            PointsMultiplier.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignBoostInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boostedSpotMarketIds.push(reader.string());
                    break;
                case 2:
                    message.spotMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.boostedDerivativeMarketIds.push(reader.string());
                    break;
                case 4:
                    message.derivativeMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardCampaignBoostInfo();
        message.boostedSpotMarketIds = object.boostedSpotMarketIds?.map(e => e) || [];
        message.spotMarketMultipliers = object.spotMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
        message.boostedDerivativeMarketIds = object.boostedDerivativeMarketIds?.map(e => e) || [];
        message.derivativeMarketMultipliers = object.derivativeMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardCampaignBoostInfo();
        message.boostedSpotMarketIds = object.boosted_spot_market_ids?.map(e => e) || [];
        message.spotMarketMultipliers = object.spot_market_multipliers?.map(e => PointsMultiplier.fromAmino(e)) || [];
        message.boostedDerivativeMarketIds = object.boosted_derivative_market_ids?.map(e => e) || [];
        message.derivativeMarketMultipliers = object.derivative_market_multipliers?.map(e => PointsMultiplier.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.boostedSpotMarketIds) {
            obj.boosted_spot_market_ids = message.boostedSpotMarketIds.map(e => e);
        }
        else {
            obj.boosted_spot_market_ids = message.boostedSpotMarketIds;
        }
        if (message.spotMarketMultipliers) {
            obj.spot_market_multipliers = message.spotMarketMultipliers.map(e => e ? PointsMultiplier.toAmino(e) : undefined);
        }
        else {
            obj.spot_market_multipliers = message.spotMarketMultipliers;
        }
        if (message.boostedDerivativeMarketIds) {
            obj.boosted_derivative_market_ids = message.boostedDerivativeMarketIds.map(e => e);
        }
        else {
            obj.boosted_derivative_market_ids = message.boostedDerivativeMarketIds;
        }
        if (message.derivativeMarketMultipliers) {
            obj.derivative_market_multipliers = message.derivativeMarketMultipliers.map(e => e ? PointsMultiplier.toAmino(e) : undefined);
        }
        else {
            obj.derivative_market_multipliers = message.derivativeMarketMultipliers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TradingRewardCampaignBoostInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradingRewardCampaignBoostInfo.decode(message.value);
    },
    toProto(message) {
        return TradingRewardCampaignBoostInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo",
            value: TradingRewardCampaignBoostInfo.encode(message).finish()
        };
    }
};
function createBaseCampaignRewardPool() {
    return {
        startTimestamp: BigInt(0),
        maxCampaignRewards: []
    };
}
export const CampaignRewardPool = {
    typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.startTimestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.startTimestamp);
        }
        for (const v of message.maxCampaignRewards) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCampaignRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTimestamp = reader.int64();
                    break;
                case 2:
                    message.maxCampaignRewards.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCampaignRewardPool();
        message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? BigInt(object.startTimestamp.toString()) : BigInt(0);
        message.maxCampaignRewards = object.maxCampaignRewards?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCampaignRewardPool();
        if (object.start_timestamp !== undefined && object.start_timestamp !== null) {
            message.startTimestamp = BigInt(object.start_timestamp);
        }
        message.maxCampaignRewards = object.max_campaign_rewards?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start_timestamp = message.startTimestamp !== BigInt(0) ? (message.startTimestamp?.toString)() : undefined;
        if (message.maxCampaignRewards) {
            obj.max_campaign_rewards = message.maxCampaignRewards.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.max_campaign_rewards = message.maxCampaignRewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CampaignRewardPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CampaignRewardPool.decode(message.value);
    },
    toProto(message) {
        return CampaignRewardPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool",
            value: CampaignRewardPool.encode(message).finish()
        };
    }
};
function createBaseTradingRewardCampaignInfo() {
    return {
        campaignDurationSeconds: BigInt(0),
        quoteDenoms: [],
        tradingRewardBoostInfo: undefined,
        disqualifiedMarketIds: []
    };
}
export const TradingRewardCampaignInfo = {
    typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaignDurationSeconds !== BigInt(0)) {
            writer.uint32(8).int64(message.campaignDurationSeconds);
        }
        for (const v of message.quoteDenoms) {
            writer.uint32(18).string(v);
        }
        if (message.tradingRewardBoostInfo !== undefined) {
            TradingRewardCampaignBoostInfo.encode(message.tradingRewardBoostInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.disqualifiedMarketIds) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignDurationSeconds = reader.int64();
                    break;
                case 2:
                    message.quoteDenoms.push(reader.string());
                    break;
                case 3:
                    message.tradingRewardBoostInfo = TradingRewardCampaignBoostInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.disqualifiedMarketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradingRewardCampaignInfo();
        message.campaignDurationSeconds = object.campaignDurationSeconds !== undefined && object.campaignDurationSeconds !== null ? BigInt(object.campaignDurationSeconds.toString()) : BigInt(0);
        message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
        message.tradingRewardBoostInfo = object.tradingRewardBoostInfo !== undefined && object.tradingRewardBoostInfo !== null ? TradingRewardCampaignBoostInfo.fromPartial(object.tradingRewardBoostInfo) : undefined;
        message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradingRewardCampaignInfo();
        if (object.campaign_duration_seconds !== undefined && object.campaign_duration_seconds !== null) {
            message.campaignDurationSeconds = BigInt(object.campaign_duration_seconds);
        }
        message.quoteDenoms = object.quote_denoms?.map(e => e) || [];
        if (object.trading_reward_boost_info !== undefined && object.trading_reward_boost_info !== null) {
            message.tradingRewardBoostInfo = TradingRewardCampaignBoostInfo.fromAmino(object.trading_reward_boost_info);
        }
        message.disqualifiedMarketIds = object.disqualified_market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.campaign_duration_seconds = message.campaignDurationSeconds !== BigInt(0) ? (message.campaignDurationSeconds?.toString)() : undefined;
        if (message.quoteDenoms) {
            obj.quote_denoms = message.quoteDenoms.map(e => e);
        }
        else {
            obj.quote_denoms = message.quoteDenoms;
        }
        obj.trading_reward_boost_info = message.tradingRewardBoostInfo ? TradingRewardCampaignBoostInfo.toAmino(message.tradingRewardBoostInfo) : undefined;
        if (message.disqualifiedMarketIds) {
            obj.disqualified_market_ids = message.disqualifiedMarketIds.map(e => e);
        }
        else {
            obj.disqualified_market_ids = message.disqualifiedMarketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TradingRewardCampaignInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradingRewardCampaignInfo.decode(message.value);
    },
    toProto(message) {
        return TradingRewardCampaignInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo",
            value: TradingRewardCampaignInfo.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountTierInfo() {
    return {
        makerDiscountRate: "",
        takerDiscountRate: "",
        stakedAmount: "",
        volume: ""
    };
}
export const FeeDiscountTierInfo = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.makerDiscountRate !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.makerDiscountRate, 18).atomics);
        }
        if (message.takerDiscountRate !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.takerDiscountRate, 18).atomics);
        }
        if (message.stakedAmount !== "") {
            writer.uint32(26).string(message.stakedAmount);
        }
        if (message.volume !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.volume, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountTierInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.makerDiscountRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.takerDiscountRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.stakedAmount = reader.string();
                    break;
                case 4:
                    message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeeDiscountTierInfo();
        message.makerDiscountRate = object.makerDiscountRate ?? "";
        message.takerDiscountRate = object.takerDiscountRate ?? "";
        message.stakedAmount = object.stakedAmount ?? "";
        message.volume = object.volume ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountTierInfo();
        if (object.maker_discount_rate !== undefined && object.maker_discount_rate !== null) {
            message.makerDiscountRate = object.maker_discount_rate;
        }
        if (object.taker_discount_rate !== undefined && object.taker_discount_rate !== null) {
            message.takerDiscountRate = object.taker_discount_rate;
        }
        if (object.staked_amount !== undefined && object.staked_amount !== null) {
            message.stakedAmount = object.staked_amount;
        }
        if (object.volume !== undefined && object.volume !== null) {
            message.volume = object.volume;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.maker_discount_rate = message.makerDiscountRate === "" ? undefined : message.makerDiscountRate;
        obj.taker_discount_rate = message.takerDiscountRate === "" ? undefined : message.takerDiscountRate;
        obj.staked_amount = message.stakedAmount === "" ? undefined : message.stakedAmount;
        obj.volume = message.volume === "" ? undefined : message.volume;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeDiscountTierInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeDiscountTierInfo.decode(message.value);
    },
    toProto(message) {
        return FeeDiscountTierInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo",
            value: FeeDiscountTierInfo.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountSchedule() {
    return {
        bucketCount: BigInt(0),
        bucketDuration: BigInt(0),
        quoteDenoms: [],
        tierInfos: [],
        disqualifiedMarketIds: []
    };
}
export const FeeDiscountSchedule = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bucketCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.bucketCount);
        }
        if (message.bucketDuration !== BigInt(0)) {
            writer.uint32(16).int64(message.bucketDuration);
        }
        for (const v of message.quoteDenoms) {
            writer.uint32(26).string(v);
        }
        for (const v of message.tierInfos) {
            FeeDiscountTierInfo.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.disqualifiedMarketIds) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketCount = reader.uint64();
                    break;
                case 2:
                    message.bucketDuration = reader.int64();
                    break;
                case 3:
                    message.quoteDenoms.push(reader.string());
                    break;
                case 4:
                    message.tierInfos.push(FeeDiscountTierInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.disqualifiedMarketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeeDiscountSchedule();
        message.bucketCount = object.bucketCount !== undefined && object.bucketCount !== null ? BigInt(object.bucketCount.toString()) : BigInt(0);
        message.bucketDuration = object.bucketDuration !== undefined && object.bucketDuration !== null ? BigInt(object.bucketDuration.toString()) : BigInt(0);
        message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
        message.tierInfos = object.tierInfos?.map(e => FeeDiscountTierInfo.fromPartial(e)) || [];
        message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountSchedule();
        if (object.bucket_count !== undefined && object.bucket_count !== null) {
            message.bucketCount = BigInt(object.bucket_count);
        }
        if (object.bucket_duration !== undefined && object.bucket_duration !== null) {
            message.bucketDuration = BigInt(object.bucket_duration);
        }
        message.quoteDenoms = object.quote_denoms?.map(e => e) || [];
        message.tierInfos = object.tier_infos?.map(e => FeeDiscountTierInfo.fromAmino(e)) || [];
        message.disqualifiedMarketIds = object.disqualified_market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bucket_count = message.bucketCount !== BigInt(0) ? (message.bucketCount?.toString)() : undefined;
        obj.bucket_duration = message.bucketDuration !== BigInt(0) ? (message.bucketDuration?.toString)() : undefined;
        if (message.quoteDenoms) {
            obj.quote_denoms = message.quoteDenoms.map(e => e);
        }
        else {
            obj.quote_denoms = message.quoteDenoms;
        }
        if (message.tierInfos) {
            obj.tier_infos = message.tierInfos.map(e => e ? FeeDiscountTierInfo.toAmino(e) : undefined);
        }
        else {
            obj.tier_infos = message.tierInfos;
        }
        if (message.disqualifiedMarketIds) {
            obj.disqualified_market_ids = message.disqualifiedMarketIds.map(e => e);
        }
        else {
            obj.disqualified_market_ids = message.disqualifiedMarketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FeeDiscountSchedule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeDiscountSchedule.decode(message.value);
    },
    toProto(message) {
        return FeeDiscountSchedule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule",
            value: FeeDiscountSchedule.encode(message).finish()
        };
    }
};
function createBaseFeeDiscountTierTTL() {
    return {
        tier: BigInt(0),
        ttlTimestamp: BigInt(0)
    };
}
export const FeeDiscountTierTTL = {
    typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tier !== BigInt(0)) {
            writer.uint32(8).uint64(message.tier);
        }
        if (message.ttlTimestamp !== BigInt(0)) {
            writer.uint32(16).int64(message.ttlTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountTierTTL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tier = reader.uint64();
                    break;
                case 2:
                    message.ttlTimestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeeDiscountTierTTL();
        message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
        message.ttlTimestamp = object.ttlTimestamp !== undefined && object.ttlTimestamp !== null ? BigInt(object.ttlTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeDiscountTierTTL();
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = BigInt(object.tier);
        }
        if (object.ttl_timestamp !== undefined && object.ttl_timestamp !== null) {
            message.ttlTimestamp = BigInt(object.ttl_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tier = message.tier !== BigInt(0) ? (message.tier?.toString)() : undefined;
        obj.ttl_timestamp = message.ttlTimestamp !== BigInt(0) ? (message.ttlTimestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeDiscountTierTTL.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeeDiscountTierTTL.decode(message.value);
    },
    toProto(message) {
        return FeeDiscountTierTTL.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL",
            value: FeeDiscountTierTTL.encode(message).finish()
        };
    }
};
function createBaseAccountRewards() {
    return {
        account: "",
        rewards: []
    };
}
export const AccountRewards = {
    typeUrl: "/injective.exchange.v1beta1.AccountRewards",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        for (const v of message.rewards) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.rewards.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccountRewards();
        message.account = object.account ?? "";
        message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccountRewards();
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account === "" ? undefined : message.account;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = message.rewards;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountRewards.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AccountRewards.decode(message.value);
    },
    toProto(message) {
        return AccountRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.AccountRewards",
            value: AccountRewards.encode(message).finish()
        };
    }
};
function createBaseTradeRecords() {
    return {
        marketId: "",
        latestTradeRecords: []
    };
}
export const TradeRecords = {
    typeUrl: "/injective.exchange.v1beta1.TradeRecords",
    encode(message, writer = BinaryWriter.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.latestTradeRecords) {
            TradeRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeRecords();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.latestTradeRecords.push(TradeRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTradeRecords();
        message.marketId = object.marketId ?? "";
        message.latestTradeRecords = object.latestTradeRecords?.map(e => TradeRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradeRecords();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        message.latestTradeRecords = object.latest_trade_records?.map(e => TradeRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        if (message.latestTradeRecords) {
            obj.latest_trade_records = message.latestTradeRecords.map(e => e ? TradeRecord.toAmino(e) : undefined);
        }
        else {
            obj.latest_trade_records = message.latestTradeRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TradeRecords.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradeRecords.decode(message.value);
    },
    toProto(message) {
        return TradeRecords.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradeRecords",
            value: TradeRecords.encode(message).finish()
        };
    }
};
function createBaseSubaccountIDs() {
    return {
        subaccountIds: []
    };
}
export const SubaccountIDs = {
    typeUrl: "/injective.exchange.v1beta1.SubaccountIDs",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.subaccountIds) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountIDs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountIds.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSubaccountIDs();
        message.subaccountIds = object.subaccountIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubaccountIDs();
        message.subaccountIds = object.subaccount_ids?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.subaccountIds) {
            obj.subaccount_ids = message.subaccountIds.map(e => base64FromBytes(e));
        }
        else {
            obj.subaccount_ids = message.subaccountIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SubaccountIDs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubaccountIDs.decode(message.value);
    },
    toProto(message) {
        return SubaccountIDs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.SubaccountIDs",
            value: SubaccountIDs.encode(message).finish()
        };
    }
};
function createBaseTradeRecord() {
    return {
        timestamp: BigInt(0),
        price: "",
        quantity: ""
    };
}
export const TradeRecord = {
    typeUrl: "/injective.exchange.v1beta1.TradeRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.price !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.quantity !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.quantity, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.int64();
                    break;
                case 2:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
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
        const message = createBaseTradeRecord();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTradeRecord();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
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
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        obj.price = message.price === "" ? undefined : message.price;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        return obj;
    },
    fromAminoMsg(object) {
        return TradeRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TradeRecord.decode(message.value);
    },
    toProto(message) {
        return TradeRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.TradeRecord",
            value: TradeRecord.encode(message).finish()
        };
    }
};
