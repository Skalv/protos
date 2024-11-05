"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParams = exports.QueryAggregateVotesResponse = exports.QueryAggregateVotes = exports.QueryAggregateVoteResponse = exports.QueryAggregateVote = exports.QueryAggregatePrevotesResponse = exports.QueryAggregatePrevotes = exports.QueryAggregatePrevoteResponse = exports.QueryAggregatePrevote = exports.QuerySlashWindowResponse = exports.QuerySlashWindow = exports.QueryMissCounterResponse = exports.QueryMissCounter = exports.QueryFeederDelegationResponse = exports.QueryFeederDelegation = exports.QueryActiveExchangeRatesResponse = exports.QueryActiveExchangeRates = exports.QueryExchangeRatesResponse = exports.QueryExchangeRates = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const oracle_1 = require("./oracle");
const binary_1 = require("../../../binary");
function createBaseQueryExchangeRates() {
    return {
        denom: ""
    };
}
exports.QueryExchangeRates = {
    typeUrl: "/umee.oracle.v1.QueryExchangeRates",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryExchangeRates.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeRates.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryExchangeRates",
            value: exports.QueryExchangeRates.encode(message).finish()
        };
    }
};
function createBaseQueryExchangeRatesResponse() {
    return {
        exchangeRates: []
    };
}
exports.QueryExchangeRatesResponse = {
    typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.exchangeRates) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExchangeRatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchangeRates.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
        message.exchangeRates = object.exchangeRates?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExchangeRatesResponse();
        message.exchangeRates = object.exchange_rates?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exchangeRates) {
            obj.exchange_rates = message.exchangeRates.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.exchange_rates = message.exchangeRates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExchangeRatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryExchangeRatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExchangeRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryExchangeRatesResponse",
            value: exports.QueryExchangeRatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryActiveExchangeRates() {
    return {};
}
exports.QueryActiveExchangeRates = {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryActiveExchangeRates.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryActiveExchangeRates.decode(message.value);
    },
    toProto(message) {
        return exports.QueryActiveExchangeRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryActiveExchangeRates",
            value: exports.QueryActiveExchangeRates.encode(message).finish()
        };
    }
};
function createBaseQueryActiveExchangeRatesResponse() {
    return {
        activeRates: []
    };
}
exports.QueryActiveExchangeRatesResponse = {
    typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.activeRates) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryActiveExchangeRatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryActiveExchangeRatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryActiveExchangeRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryActiveExchangeRatesResponse",
            value: exports.QueryActiveExchangeRatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFeederDelegation() {
    return {
        validatorAddr: ""
    };
}
exports.QueryFeederDelegation = {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryFeederDelegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeederDelegation.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeederDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryFeederDelegation",
            value: exports.QueryFeederDelegation.encode(message).finish()
        };
    }
};
function createBaseQueryFeederDelegationResponse() {
    return {
        feederAddr: ""
    };
}
exports.QueryFeederDelegationResponse = {
    typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feederAddr !== "") {
            writer.uint32(10).string(message.feederAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryFeederDelegationResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFeederDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeederDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryFeederDelegationResponse",
            value: exports.QueryFeederDelegationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMissCounter() {
    return {
        validatorAddr: ""
    };
}
exports.QueryMissCounter = {
    typeUrl: "/umee.oracle.v1.QueryMissCounter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryMissCounter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMissCounter.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMissCounter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryMissCounter",
            value: exports.QueryMissCounter.encode(message).finish()
        };
    }
};
function createBaseQueryMissCounterResponse() {
    return {
        missCounter: BigInt(0)
    };
}
exports.QueryMissCounterResponse = {
    typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.missCounter !== BigInt(0)) {
            writer.uint32(8).uint64(message.missCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryMissCounterResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMissCounterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMissCounterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryMissCounterResponse",
            value: exports.QueryMissCounterResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySlashWindow() {
    return {};
}
exports.QuerySlashWindow = {
    typeUrl: "/umee.oracle.v1.QuerySlashWindow",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QuerySlashWindow.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySlashWindow.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySlashWindow.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QuerySlashWindow",
            value: exports.QuerySlashWindow.encode(message).finish()
        };
    }
};
function createBaseQuerySlashWindowResponse() {
    return {
        windowProgress: BigInt(0)
    };
}
exports.QuerySlashWindowResponse = {
    typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.windowProgress !== BigInt(0)) {
            writer.uint32(8).uint64(message.windowProgress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QuerySlashWindowResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySlashWindowResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySlashWindowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QuerySlashWindowResponse",
            value: exports.QuerySlashWindowResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevote() {
    return {
        validatorAddr: ""
    };
}
exports.QueryAggregatePrevote = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryAggregatePrevote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregatePrevote.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregatePrevote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevote",
            value: exports.QueryAggregatePrevote.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevoteResponse() {
    return {
        aggregatePrevote: oracle_1.AggregateExchangeRatePrevote.fromPartial({})
    };
}
exports.QueryAggregatePrevoteResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.aggregatePrevote !== undefined) {
            oracle_1.AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregatePrevoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregatePrevote = oracle_1.AggregateExchangeRatePrevote.decode(reader, reader.uint32());
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
        message.aggregatePrevote = object.aggregatePrevote !== undefined && object.aggregatePrevote !== null ? oracle_1.AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregatePrevoteResponse();
        if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
            message.aggregatePrevote = oracle_1.AggregateExchangeRatePrevote.fromAmino(object.aggregate_prevote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.aggregate_prevote = message.aggregatePrevote ? oracle_1.AggregateExchangeRatePrevote.toAmino(message.aggregatePrevote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAggregatePrevoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregatePrevoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregatePrevoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevoteResponse",
            value: exports.QueryAggregatePrevoteResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevotes() {
    return {};
}
exports.QueryAggregatePrevotes = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryAggregatePrevotes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregatePrevotes.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregatePrevotes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevotes",
            value: exports.QueryAggregatePrevotes.encode(message).finish()
        };
    }
};
function createBaseQueryAggregatePrevotesResponse() {
    return {
        aggregatePrevotes: []
    };
}
exports.QueryAggregatePrevotesResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.aggregatePrevotes) {
            oracle_1.AggregateExchangeRatePrevote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregatePrevotesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregatePrevotes.push(oracle_1.AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
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
        message.aggregatePrevotes = object.aggregatePrevotes?.map(e => oracle_1.AggregateExchangeRatePrevote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregatePrevotesResponse();
        message.aggregatePrevotes = object.aggregate_prevotes?.map(e => oracle_1.AggregateExchangeRatePrevote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.aggregatePrevotes) {
            obj.aggregate_prevotes = message.aggregatePrevotes.map(e => e ? oracle_1.AggregateExchangeRatePrevote.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_prevotes = message.aggregatePrevotes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAggregatePrevotesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregatePrevotesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregatePrevotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregatePrevotesResponse",
            value: exports.QueryAggregatePrevotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVote() {
    return {
        validatorAddr: ""
    };
}
exports.QueryAggregateVote = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryAggregateVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregateVote.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVote",
            value: exports.QueryAggregateVote.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVoteResponse() {
    return {
        aggregateVote: oracle_1.AggregateExchangeRateVote.fromPartial({})
    };
}
exports.QueryAggregateVoteResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.aggregateVote !== undefined) {
            oracle_1.AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregateVote = oracle_1.AggregateExchangeRateVote.decode(reader, reader.uint32());
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
        message.aggregateVote = object.aggregateVote !== undefined && object.aggregateVote !== null ? oracle_1.AggregateExchangeRateVote.fromPartial(object.aggregateVote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregateVoteResponse();
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregateVote = oracle_1.AggregateExchangeRateVote.fromAmino(object.aggregate_vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.aggregate_vote = message.aggregateVote ? oracle_1.AggregateExchangeRateVote.toAmino(message.aggregateVote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAggregateVoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregateVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregateVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVoteResponse",
            value: exports.QueryAggregateVoteResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVotes() {
    return {};
}
exports.QueryAggregateVotes = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryAggregateVotes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregateVotes.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregateVotes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVotes",
            value: exports.QueryAggregateVotes.encode(message).finish()
        };
    }
};
function createBaseQueryAggregateVotesResponse() {
    return {
        aggregateVotes: []
    };
}
exports.QueryAggregateVotesResponse = {
    typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.aggregateVotes) {
            oracle_1.AggregateExchangeRateVote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAggregateVotesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aggregateVotes.push(oracle_1.AggregateExchangeRateVote.decode(reader, reader.uint32()));
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
        message.aggregateVotes = object.aggregateVotes?.map(e => oracle_1.AggregateExchangeRateVote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAggregateVotesResponse();
        message.aggregateVotes = object.aggregate_votes?.map(e => oracle_1.AggregateExchangeRateVote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.aggregateVotes) {
            obj.aggregate_votes = message.aggregateVotes.map(e => e ? oracle_1.AggregateExchangeRateVote.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_votes = message.aggregateVotes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAggregateVotesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAggregateVotesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAggregateVotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryAggregateVotesResponse",
            value: exports.QueryAggregateVotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParams() {
    return {};
}
exports.QueryParams = {
    typeUrl: "/umee.oracle.v1.QueryParams",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParams.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryParams",
            value: exports.QueryParams.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: oracle_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/umee.oracle.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = oracle_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? oracle_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = oracle_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? oracle_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
