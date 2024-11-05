//@ts-nocheck
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryExchangeRates() {
    return {
        denom: ""
    };
}
export const QueryExchangeRates = {
    typeUrl: "/umee.oracle.v1.QueryExchangeRates",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryExchangeRates();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRates();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeRates.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeRates.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryExchangeRates",
            value: QueryExchangeRates.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeRatesResponse() {
    return {
        exchangeRates: []
    };
}
export const QueryExchangeRatesResponse = {
    typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.exchangeRates) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRates.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryExchangeRatesResponse();
        message.exchangeRates = object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRatesResponse();
        message.exchangeRates = object.exchange_rates?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exchangeRates) {
            obj.exchange_rates = message.exchangeRates.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.exchange_rates = message.exchangeRates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExchangeRatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryExchangeRatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExchangeRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
            value: QueryExchangeRatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryActiveExchangeRates() {
    return {};
}
export const QueryActiveExchangeRates = {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActiveExchangeRates();
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
        const message = createBaseQueryActiveExchangeRates();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryActiveExchangeRates();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryActiveExchangeRates.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryActiveExchangeRates.decode(message.value);
    },
    toProto(message) {
        return QueryActiveExchangeRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
            value: QueryActiveExchangeRates.encode(message).finish()
        };
    }
};
function createBaseQueryActiveExchangeRatesResponse() {
    return {
        activeRates: []
    };
}
export const QueryActiveExchangeRatesResponse = {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.activeRates) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActiveExchangeRatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activeRates.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryActiveExchangeRatesResponse();
        message.activeRates = object.activeRates?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryActiveExchangeRatesResponse();
        message.activeRates = object.active_rates?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.activeRates) {
            obj.active_rates = message.activeRates.map(e => e);
        }
        else {
            obj.active_rates = message.activeRates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryActiveExchangeRatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryActiveExchangeRatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryActiveExchangeRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
            value: QueryActiveExchangeRatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeederDelegation() {
    return {
        validatorAddr: ""
    };
}
export const QueryFeederDelegation = {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeederDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeederDelegation();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeederDelegation();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeederDelegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeederDelegation.decode(message.value);
    },
    toProto(message) {
        return QueryFeederDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
            value: QueryFeederDelegation.encode(message).finish()
        };
    }
};
function createBaseQueryFeederDelegationResponse() {
    return {
        feederAddr: ""
    };
}
export const QueryFeederDelegationResponse = {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feederAddr !== "") {
            writer.uint32(10).string(message.feederAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeederDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feederAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeederDelegationResponse();
        message.feederAddr = object.feederAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeederDelegationResponse();
        if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
            message.feederAddr = object.feeder_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feeder_addr = message.feederAddr === "" ? undefined : message.feederAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeederDelegationResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFeederDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeederDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
            value: QueryFeederDelegationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMissCounter() {
    return {
        validatorAddr: ""
    };
}
export const QueryMissCounter = {
    typeUrl: "/umee.oracle.v1.QueryMissCounter",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMissCounter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMissCounter();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMissCounter();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMissCounter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMissCounter.decode(message.value);
    },
    toProto(message) {
        return QueryMissCounter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryMissCounter",
            value: QueryMissCounter.encode(message).finish()
        };
    }
};
function createBaseQueryMissCounterResponse() {
    return {
        missCounter: BigInt(0)
    };
}
export const QueryMissCounterResponse = {
    typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.missCounter !== BigInt(0)) {
            writer.uint32(8).uint64(message.missCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMissCounterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.missCounter = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMissCounterResponse();
        message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMissCounterResponse();
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.missCounter = BigInt(object.miss_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.miss_counter = message.missCounter !== BigInt(0) ? (message.missCounter?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMissCounterResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMissCounterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryMissCounterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
            value: QueryMissCounterResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySlashWindow() {
    return {};
}
export const QuerySlashWindow = {
    typeUrl: "/umee.oracle.v1.QuerySlashWindow",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySlashWindow();
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
        const message = createBaseQuerySlashWindow();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQuerySlashWindow();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySlashWindow.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySlashWindow.decode(message.value);
    },
    toProto(message) {
        return QuerySlashWindow.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QuerySlashWindow",
            value: QuerySlashWindow.encode(message).finish()
        };
    }
};
function createBaseQuerySlashWindowResponse() {
    return {
        windowProgress: BigInt(0)
    };
}
export const QuerySlashWindowResponse = {
    typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.windowProgress !== BigInt(0)) {
            writer.uint32(8).uint64(message.windowProgress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySlashWindowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.windowProgress = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySlashWindowResponse();
        message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? BigInt(object.windowProgress.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySlashWindowResponse();
        if (object.window_progress !== undefined && object.window_progress !== null) {
            message.windowProgress = BigInt(object.window_progress);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.window_progress = message.windowProgress !== BigInt(0) ? (message.windowProgress?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySlashWindowResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySlashWindowResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySlashWindowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
            value: QuerySlashWindowResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevote() {
    return {
        validatorAddr: ""
    };
}
export const QueryAggregatePrevote = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregatePrevote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAggregatePrevote();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregatePrevote();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregatePrevote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevote.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
            value: QueryAggregatePrevote.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevoteResponse() {
    return {
        aggregatePrevote: AggregateExchangeRatePrevote.fromPartial({})
    };
}
export const QueryAggregatePrevoteResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.aggregatePrevote !== undefined) {
            AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregatePrevoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregatePrevote = AggregateExchangeRatePrevote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAggregatePrevoteResponse();
        message.aggregatePrevote = object.aggregatePrevote !== undefined && object.aggregatePrevote !== null ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregatePrevoteResponse();
        if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
            message.aggregatePrevote = AggregateExchangeRatePrevote.fromAmino(object.aggregate_prevote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.aggregate_prevote = message.aggregatePrevote ? AggregateExchangeRatePrevote.toAmino(message.aggregatePrevote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregatePrevoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevoteResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
            value: QueryAggregatePrevoteResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevotes() {
    return {};
}
export const QueryAggregatePrevotes = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregatePrevotes();
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
        const message = createBaseQueryAggregatePrevotes();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAggregatePrevotes();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregatePrevotes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevotes.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevotes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
            value: QueryAggregatePrevotes.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevotesResponse() {
    return {
        aggregatePrevotes: []
    };
}
export const QueryAggregatePrevotesResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.aggregatePrevotes) {
            AggregateExchangeRatePrevote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregatePrevotesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregatePrevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAggregatePrevotesResponse();
        message.aggregatePrevotes = object.aggregatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregatePrevotesResponse();
        message.aggregatePrevotes = object.aggregate_prevotes?.map(e => AggregateExchangeRatePrevote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.aggregatePrevotes) {
            obj.aggregate_prevotes = message.aggregatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_prevotes = message.aggregatePrevotes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregatePrevotesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregatePrevotesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregatePrevotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
            value: QueryAggregatePrevotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVote() {
    return {
        validatorAddr: ""
    };
}
export const QueryAggregateVote = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAggregateVote();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregateVote();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validatorAddr = object.validator_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregateVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregateVote.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVote",
            value: QueryAggregateVote.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVoteResponse() {
    return {
        aggregateVote: AggregateExchangeRateVote.fromPartial({})
    };
}
export const QueryAggregateVoteResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.aggregateVote !== undefined) {
            AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregateVote = AggregateExchangeRateVote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAggregateVoteResponse();
        message.aggregateVote = object.aggregateVote !== undefined && object.aggregateVote !== null ? AggregateExchangeRateVote.fromPartial(object.aggregateVote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregateVoteResponse();
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregateVote = AggregateExchangeRateVote.fromAmino(object.aggregate_vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.aggregate_vote = message.aggregateVote ? AggregateExchangeRateVote.toAmino(message.aggregateVote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregateVoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregateVoteResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
            value: QueryAggregateVoteResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVotes() {
    return {};
}
export const QueryAggregateVotes = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVotes();
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
        const message = createBaseQueryAggregateVotes();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAggregateVotes();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregateVotes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregateVotes.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVotes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
            value: QueryAggregateVotes.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVotesResponse() {
    return {
        aggregateVotes: []
    };
}
export const QueryAggregateVotesResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.aggregateVotes) {
            AggregateExchangeRateVote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVotesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAggregateVotesResponse();
        message.aggregateVotes = object.aggregateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregateVotesResponse();
        message.aggregateVotes = object.aggregate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.aggregateVotes) {
            obj.aggregate_votes = message.aggregateVotes.map(e => e ? AggregateExchangeRateVote.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_votes = message.aggregateVotes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAggregateVotesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAggregateVotesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAggregateVotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
            value: QueryAggregateVotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParams() {
    return {};
}
export const QueryParams = {
    typeUrl: "/umee.oracle.v1.QueryParams",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParams();
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
        const message = createBaseQueryParams();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParams();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParams.decode(message.value);
    },
    toProto(message) {
        return QueryParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryParams",
            value: QueryParams.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/umee.oracle.v1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
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
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
