//@ts-nocheck
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseParams() {
    return {
        defaultRedemptionNoticePeriodDuration: Duration.fromPartial({})
    };
}
export const Params = {
    typeUrl: "/injective.insurance.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.defaultRedemptionNoticePeriodDuration !== undefined) {
            Duration.encode(message.defaultRedemptionNoticePeriodDuration, writer.uint32(10).fork()).ldelim();
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
                    message.defaultRedemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
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
        message.defaultRedemptionNoticePeriodDuration = object.defaultRedemptionNoticePeriodDuration !== undefined && object.defaultRedemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.defaultRedemptionNoticePeriodDuration) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.default_redemption_notice_period_duration !== undefined && object.default_redemption_notice_period_duration !== null) {
            message.defaultRedemptionNoticePeriodDuration = Duration.fromAmino(object.default_redemption_notice_period_duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.default_redemption_notice_period_duration = message.defaultRedemptionNoticePeriodDuration ? Duration.toAmino(message.defaultRedemptionNoticePeriodDuration) : undefined;
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
            typeUrl: "/injective.insurance.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseInsuranceFund() {
    return {
        depositDenom: "",
        insurancePoolTokenDenom: "",
        redemptionNoticePeriodDuration: Duration.fromPartial({}),
        balance: "",
        totalShare: "",
        marketId: "",
        marketTicker: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        expiry: BigInt(0)
    };
}
export const InsuranceFund = {
    typeUrl: "/injective.insurance.v1beta1.InsuranceFund",
    encode(message, writer = BinaryWriter.create()) {
        if (message.depositDenom !== "") {
            writer.uint32(10).string(message.depositDenom);
        }
        if (message.insurancePoolTokenDenom !== "") {
            writer.uint32(18).string(message.insurancePoolTokenDenom);
        }
        if (message.redemptionNoticePeriodDuration !== undefined) {
            Duration.encode(message.redemptionNoticePeriodDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        if (message.totalShare !== "") {
            writer.uint32(42).string(message.totalShare);
        }
        if (message.marketId !== "") {
            writer.uint32(50).string(message.marketId);
        }
        if (message.marketTicker !== "") {
            writer.uint32(58).string(message.marketTicker);
        }
        if (message.oracleBase !== "") {
            writer.uint32(66).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(74).string(message.oracleQuote);
        }
        if (message.oracleType !== 0) {
            writer.uint32(80).int32(message.oracleType);
        }
        if (message.expiry !== BigInt(0)) {
            writer.uint32(88).int64(message.expiry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInsuranceFund();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositDenom = reader.string();
                    break;
                case 2:
                    message.insurancePoolTokenDenom = reader.string();
                    break;
                case 3:
                    message.redemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                case 5:
                    message.totalShare = reader.string();
                    break;
                case 6:
                    message.marketId = reader.string();
                    break;
                case 7:
                    message.marketTicker = reader.string();
                    break;
                case 8:
                    message.oracleBase = reader.string();
                    break;
                case 9:
                    message.oracleQuote = reader.string();
                    break;
                case 10:
                    message.oracleType = reader.int32();
                    break;
                case 11:
                    message.expiry = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInsuranceFund();
        message.depositDenom = object.depositDenom ?? "";
        message.insurancePoolTokenDenom = object.insurancePoolTokenDenom ?? "";
        message.redemptionNoticePeriodDuration = object.redemptionNoticePeriodDuration !== undefined && object.redemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.redemptionNoticePeriodDuration) : undefined;
        message.balance = object.balance ?? "";
        message.totalShare = object.totalShare ?? "";
        message.marketId = object.marketId ?? "";
        message.marketTicker = object.marketTicker ?? "";
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseInsuranceFund();
        if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
            message.depositDenom = object.deposit_denom;
        }
        if (object.insurance_pool_token_denom !== undefined && object.insurance_pool_token_denom !== null) {
            message.insurancePoolTokenDenom = object.insurance_pool_token_denom;
        }
        if (object.redemption_notice_period_duration !== undefined && object.redemption_notice_period_duration !== null) {
            message.redemptionNoticePeriodDuration = Duration.fromAmino(object.redemption_notice_period_duration);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        if (object.total_share !== undefined && object.total_share !== null) {
            message.totalShare = object.total_share;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.market_ticker !== undefined && object.market_ticker !== null) {
            message.marketTicker = object.market_ticker;
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
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = BigInt(object.expiry);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
        obj.insurance_pool_token_denom = message.insurancePoolTokenDenom === "" ? undefined : message.insurancePoolTokenDenom;
        obj.redemption_notice_period_duration = message.redemptionNoticePeriodDuration ? Duration.toAmino(message.redemptionNoticePeriodDuration) : undefined;
        obj.balance = message.balance === "" ? undefined : message.balance;
        obj.total_share = message.totalShare === "" ? undefined : message.totalShare;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.market_ticker = message.marketTicker === "" ? undefined : message.marketTicker;
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.expiry = message.expiry !== BigInt(0) ? (message.expiry?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return InsuranceFund.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InsuranceFund.decode(message.value);
    },
    toProto(message) {
        return InsuranceFund.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.InsuranceFund",
            value: InsuranceFund.encode(message).finish()
        };
    }
};
function createBaseRedemptionSchedule() {
    return {
        id: BigInt(0),
        marketId: "",
        redeemer: "",
        claimableRedemptionTime: new Date(),
        redemptionAmount: Coin.fromPartial({})
    };
}
export const RedemptionSchedule = {
    typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.redeemer !== "") {
            writer.uint32(26).string(message.redeemer);
        }
        if (message.claimableRedemptionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.claimableRedemptionTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.redemptionAmount !== undefined) {
            Coin.encode(message.redemptionAmount, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedemptionSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.redeemer = reader.string();
                    break;
                case 4:
                    message.claimableRedemptionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.redemptionAmount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRedemptionSchedule();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.marketId = object.marketId ?? "";
        message.redeemer = object.redeemer ?? "";
        message.claimableRedemptionTime = object.claimableRedemptionTime ?? undefined;
        message.redemptionAmount = object.redemptionAmount !== undefined && object.redemptionAmount !== null ? Coin.fromPartial(object.redemptionAmount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedemptionSchedule();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        if (object.redeemer !== undefined && object.redeemer !== null) {
            message.redeemer = object.redeemer;
        }
        if (object.claimable_redemption_time !== undefined && object.claimable_redemption_time !== null) {
            message.claimableRedemptionTime = fromTimestamp(Timestamp.fromAmino(object.claimable_redemption_time));
        }
        if (object.redemption_amount !== undefined && object.redemption_amount !== null) {
            message.redemptionAmount = Coin.fromAmino(object.redemption_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.marketId = message.marketId === "" ? undefined : message.marketId;
        obj.redeemer = message.redeemer === "" ? undefined : message.redeemer;
        obj.claimable_redemption_time = message.claimableRedemptionTime ? Timestamp.toAmino(toTimestamp(message.claimableRedemptionTime)) : undefined;
        obj.redemption_amount = message.redemptionAmount ? Coin.toAmino(message.redemptionAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RedemptionSchedule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RedemptionSchedule.decode(message.value);
    },
    toProto(message) {
        return RedemptionSchedule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule",
            value: RedemptionSchedule.encode(message).finish()
        };
    }
};
function createBaseEventInsuranceFundUpdate() {
    return {
        fund: undefined
    };
}
export const EventInsuranceFundUpdate = {
    typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fund !== undefined) {
            InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventInsuranceFundUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fund = InsuranceFund.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventInsuranceFundUpdate();
        message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventInsuranceFundUpdate();
        if (object.fund !== undefined && object.fund !== null) {
            message.fund = InsuranceFund.fromAmino(object.fund);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fund = message.fund ? InsuranceFund.toAmino(message.fund) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventInsuranceFundUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventInsuranceFundUpdate.decode(message.value);
    },
    toProto(message) {
        return EventInsuranceFundUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate",
            value: EventInsuranceFundUpdate.encode(message).finish()
        };
    }
};
function createBaseEventRequestRedemption() {
    return {
        schedule: undefined
    };
}
export const EventRequestRedemption = {
    typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption",
    encode(message, writer = BinaryWriter.create()) {
        if (message.schedule !== undefined) {
            RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRequestRedemption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventRequestRedemption();
        message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRequestRedemption();
        if (object.schedule !== undefined && object.schedule !== null) {
            message.schedule = RedemptionSchedule.fromAmino(object.schedule);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.schedule = message.schedule ? RedemptionSchedule.toAmino(message.schedule) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRequestRedemption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRequestRedemption.decode(message.value);
    },
    toProto(message) {
        return EventRequestRedemption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption",
            value: EventRequestRedemption.encode(message).finish()
        };
    }
};
function createBaseEventWithdrawRedemption() {
    return {
        schedule: undefined,
        redeemCoin: Coin.fromPartial({})
    };
}
export const EventWithdrawRedemption = {
    typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption",
    encode(message, writer = BinaryWriter.create()) {
        if (message.schedule !== undefined) {
            RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.redeemCoin !== undefined) {
            Coin.encode(message.redeemCoin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawRedemption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.redeemCoin = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawRedemption();
        message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
        message.redeemCoin = object.redeemCoin !== undefined && object.redeemCoin !== null ? Coin.fromPartial(object.redeemCoin) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventWithdrawRedemption();
        if (object.schedule !== undefined && object.schedule !== null) {
            message.schedule = RedemptionSchedule.fromAmino(object.schedule);
        }
        if (object.redeem_coin !== undefined && object.redeem_coin !== null) {
            message.redeemCoin = Coin.fromAmino(object.redeem_coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.schedule = message.schedule ? RedemptionSchedule.toAmino(message.schedule) : undefined;
        obj.redeem_coin = message.redeemCoin ? Coin.toAmino(message.redeemCoin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventWithdrawRedemption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventWithdrawRedemption.decode(message.value);
    },
    toProto(message) {
        return EventWithdrawRedemption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption",
            value: EventWithdrawRedemption.encode(message).finish()
        };
    }
};
function createBaseEventUnderwrite() {
    return {
        underwriter: "",
        marketId: "",
        deposit: Coin.fromPartial({}),
        shares: Coin.fromPartial({})
    };
}
export const EventUnderwrite = {
    typeUrl: "/injective.insurance.v1beta1.EventUnderwrite",
    encode(message, writer = BinaryWriter.create()) {
        if (message.underwriter !== "") {
            writer.uint32(10).string(message.underwriter);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        if (message.shares !== undefined) {
            Coin.encode(message.shares, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUnderwrite();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.underwriter = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.deposit = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shares = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUnderwrite();
        message.underwriter = object.underwriter ?? "";
        message.marketId = object.marketId ?? "";
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
        message.shares = object.shares !== undefined && object.shares !== null ? Coin.fromPartial(object.shares) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUnderwrite();
        if (object.underwriter !== undefined && object.underwriter !== null) {
            message.underwriter = object.underwriter;
        }
        if (object.marketId !== undefined && object.marketId !== null) {
            message.marketId = object.marketId;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Coin.fromAmino(object.deposit);
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = Coin.fromAmino(object.shares);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.underwriter = message.underwriter === "" ? undefined : message.underwriter;
        obj.marketId = message.marketId === "" ? undefined : message.marketId;
        obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
        obj.shares = message.shares ? Coin.toAmino(message.shares) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUnderwrite.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUnderwrite.decode(message.value);
    },
    toProto(message) {
        return EventUnderwrite.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.EventUnderwrite",
            value: EventUnderwrite.encode(message).finish()
        };
    }
};
