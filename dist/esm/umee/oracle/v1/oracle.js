//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        votePeriod: BigInt(0),
        voteThreshold: "",
        rewardBand: "",
        rewardDistributionWindow: BigInt(0),
        acceptList: [],
        slashFraction: "",
        slashWindow: BigInt(0),
        minValidPerWindow: ""
    };
}
export const Params = {
    typeUrl: "/umee.oracle.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.votePeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.votePeriod);
        }
        if (message.voteThreshold !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
        }
        if (message.rewardBand !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.rewardBand, 18).atomics);
        }
        if (message.rewardDistributionWindow !== BigInt(0)) {
            writer.uint32(32).uint64(message.rewardDistributionWindow);
        }
        for (const v of message.acceptList) {
            Denom.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.slashFraction !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
        }
        if (message.slashWindow !== BigInt(0)) {
            writer.uint32(56).uint64(message.slashWindow);
        }
        if (message.minValidPerWindow !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.minValidPerWindow, 18).atomics);
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
                    message.votePeriod = reader.uint64();
                    break;
                case 2:
                    message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.rewardBand = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.rewardDistributionWindow = reader.uint64();
                    break;
                case 5:
                    message.acceptList.push(Denom.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.slashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.slashWindow = reader.uint64();
                    break;
                case 8:
                    message.minValidPerWindow = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
        message.voteThreshold = object.voteThreshold ?? "";
        message.rewardBand = object.rewardBand ?? "";
        message.rewardDistributionWindow = object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null ? BigInt(object.rewardDistributionWindow.toString()) : BigInt(0);
        message.acceptList = object.acceptList?.map(e => Denom.fromPartial(e)) || [];
        message.slashFraction = object.slashFraction ?? "";
        message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? BigInt(object.slashWindow.toString()) : BigInt(0);
        message.minValidPerWindow = object.minValidPerWindow ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.vote_period !== undefined && object.vote_period !== null) {
            message.votePeriod = BigInt(object.vote_period);
        }
        if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
            message.voteThreshold = object.vote_threshold;
        }
        if (object.reward_band !== undefined && object.reward_band !== null) {
            message.rewardBand = object.reward_band;
        }
        if (object.reward_distribution_window !== undefined && object.reward_distribution_window !== null) {
            message.rewardDistributionWindow = BigInt(object.reward_distribution_window);
        }
        message.acceptList = object.accept_list?.map(e => Denom.fromAmino(e)) || [];
        if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
            message.slashFraction = object.slash_fraction;
        }
        if (object.slash_window !== undefined && object.slash_window !== null) {
            message.slashWindow = BigInt(object.slash_window);
        }
        if (object.min_valid_per_window !== undefined && object.min_valid_per_window !== null) {
            message.minValidPerWindow = object.min_valid_per_window;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote_period = message.votePeriod !== BigInt(0) ? (message.votePeriod?.toString)() : undefined;
        obj.vote_threshold = message.voteThreshold === "" ? undefined : message.voteThreshold;
        obj.reward_band = message.rewardBand === "" ? undefined : message.rewardBand;
        obj.reward_distribution_window = message.rewardDistributionWindow !== BigInt(0) ? (message.rewardDistributionWindow?.toString)() : undefined;
        if (message.acceptList) {
            obj.accept_list = message.acceptList.map(e => e ? Denom.toAmino(e) : undefined);
        }
        else {
            obj.accept_list = message.acceptList;
        }
        obj.slash_fraction = message.slashFraction === "" ? undefined : message.slashFraction;
        obj.slash_window = message.slashWindow !== BigInt(0) ? (message.slashWindow?.toString)() : undefined;
        obj.min_valid_per_window = message.minValidPerWindow === "" ? undefined : message.minValidPerWindow;
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
            typeUrl: "/umee.oracle.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseDenom() {
    return {
        baseDenom: "",
        symbolDenom: "",
        exponent: 0
    };
}
export const Denom = {
    typeUrl: "/umee.oracle.v1.Denom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseDenom !== "") {
            writer.uint32(10).string(message.baseDenom);
        }
        if (message.symbolDenom !== "") {
            writer.uint32(18).string(message.symbolDenom);
        }
        if (message.exponent !== 0) {
            writer.uint32(24).uint32(message.exponent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenom = reader.string();
                    break;
                case 2:
                    message.symbolDenom = reader.string();
                    break;
                case 3:
                    message.exponent = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenom();
        message.baseDenom = object.baseDenom ?? "";
        message.symbolDenom = object.symbolDenom ?? "";
        message.exponent = object.exponent ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenom();
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        if (object.symbol_denom !== undefined && object.symbol_denom !== null) {
            message.symbolDenom = object.symbol_denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
        obj.symbol_denom = message.symbolDenom === "" ? undefined : message.symbolDenom;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        return obj;
    },
    fromAminoMsg(object) {
        return Denom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Denom.decode(message.value);
    },
    toProto(message) {
        return Denom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.Denom",
            value: Denom.encode(message).finish()
        };
    }
};
function createBaseAggregateExchangeRatePrevote() {
    return {
        hash: "",
        voter: "",
        submitBlock: BigInt(0)
    };
}
export const AggregateExchangeRatePrevote = {
    typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.submitBlock !== BigInt(0)) {
            writer.uint32(24).uint64(message.submitBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateExchangeRatePrevote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.submitBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAggregateExchangeRatePrevote();
        message.hash = object.hash ?? "";
        message.voter = object.voter ?? "";
        message.submitBlock = object.submitBlock !== undefined && object.submitBlock !== null ? BigInt(object.submitBlock.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseAggregateExchangeRatePrevote();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.submit_block !== undefined && object.submit_block !== null) {
            message.submitBlock = BigInt(object.submit_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.submit_block = message.submitBlock !== BigInt(0) ? (message.submitBlock?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AggregateExchangeRatePrevote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AggregateExchangeRatePrevote.decode(message.value);
    },
    toProto(message) {
        return AggregateExchangeRatePrevote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.AggregateExchangeRatePrevote",
            value: AggregateExchangeRatePrevote.encode(message).finish()
        };
    }
};
function createBaseAggregateExchangeRateVote() {
    return {
        exchangeRateTuples: [],
        voter: ""
    };
}
export const AggregateExchangeRateVote = {
    typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.exchangeRateTuples) {
            ExchangeRateTuple.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateExchangeRateVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAggregateExchangeRateVote();
        message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
        message.voter = object.voter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAggregateExchangeRateVote();
        message.exchangeRateTuples = object.exchange_rate_tuples?.map(e => ExchangeRateTuple.fromAmino(e)) || [];
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exchangeRateTuples) {
            obj.exchange_rate_tuples = message.exchangeRateTuples.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
        }
        else {
            obj.exchange_rate_tuples = message.exchangeRateTuples;
        }
        obj.voter = message.voter === "" ? undefined : message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return AggregateExchangeRateVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AggregateExchangeRateVote.decode(message.value);
    },
    toProto(message) {
        return AggregateExchangeRateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.AggregateExchangeRateVote",
            value: AggregateExchangeRateVote.encode(message).finish()
        };
    }
};
function createBaseExchangeRateTuple() {
    return {
        denom: "",
        exchangeRate: ""
    };
}
export const ExchangeRateTuple = {
    typeUrl: "/umee.oracle.v1.ExchangeRateTuple",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exchangeRate !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExchangeRateTuple();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExchangeRateTuple();
        message.denom = object.denom ?? "";
        message.exchangeRate = object.exchangeRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExchangeRateTuple();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchangeRate = object.exchange_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.exchange_rate = message.exchangeRate === "" ? undefined : message.exchangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return ExchangeRateTuple.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExchangeRateTuple.decode(message.value);
    },
    toProto(message) {
        return ExchangeRateTuple.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.ExchangeRateTuple",
            value: ExchangeRateTuple.encode(message).finish()
        };
    }
};
