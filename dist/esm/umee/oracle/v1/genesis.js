//@ts-nocheck
import { Params, ExchangeRateTuple, AggregateExchangeRatePrevote, AggregateExchangeRateVote } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        feederDelegations: [],
        exchangeRates: [],
        missCounters: [],
        aggregateExchangeRatePrevotes: [],
        aggregateExchangeRateVotes: []
    };
}
export const GenesisState = {
    typeUrl: "/umee.oracle.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feederDelegations) {
            FeederDelegation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.exchangeRates) {
            ExchangeRateTuple.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.missCounters) {
            MissCounter.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.aggregateExchangeRatePrevotes) {
            AggregateExchangeRatePrevote.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.aggregateExchangeRateVotes) {
            AggregateExchangeRateVote.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feederDelegations.push(FeederDelegation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.exchangeRates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.missCounters.push(MissCounter.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.aggregateExchangeRatePrevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.feederDelegations = object.feederDelegations?.map(e => FeederDelegation.fromPartial(e)) || [];
        message.exchangeRates = object.exchangeRates?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
        message.missCounters = object.missCounters?.map(e => MissCounter.fromPartial(e)) || [];
        message.aggregateExchangeRatePrevotes = object.aggregateExchangeRatePrevotes?.map(e => AggregateExchangeRatePrevote.fromPartial(e)) || [];
        message.aggregateExchangeRateVotes = object.aggregateExchangeRateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.feederDelegations = object.feeder_delegations?.map(e => FeederDelegation.fromAmino(e)) || [];
        message.exchangeRates = object.exchange_rates?.map(e => ExchangeRateTuple.fromAmino(e)) || [];
        message.missCounters = object.miss_counters?.map(e => MissCounter.fromAmino(e)) || [];
        message.aggregateExchangeRatePrevotes = object.aggregate_exchange_rate_prevotes?.map(e => AggregateExchangeRatePrevote.fromAmino(e)) || [];
        message.aggregateExchangeRateVotes = object.aggregate_exchange_rate_votes?.map(e => AggregateExchangeRateVote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.feederDelegations) {
            obj.feeder_delegations = message.feederDelegations.map(e => e ? FeederDelegation.toAmino(e) : undefined);
        }
        else {
            obj.feeder_delegations = message.feederDelegations;
        }
        if (message.exchangeRates) {
            obj.exchange_rates = message.exchangeRates.map(e => e ? ExchangeRateTuple.toAmino(e) : undefined);
        }
        else {
            obj.exchange_rates = message.exchangeRates;
        }
        if (message.missCounters) {
            obj.miss_counters = message.missCounters.map(e => e ? MissCounter.toAmino(e) : undefined);
        }
        else {
            obj.miss_counters = message.missCounters;
        }
        if (message.aggregateExchangeRatePrevotes) {
            obj.aggregate_exchange_rate_prevotes = message.aggregateExchangeRatePrevotes.map(e => e ? AggregateExchangeRatePrevote.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_exchange_rate_prevotes = message.aggregateExchangeRatePrevotes;
        }
        if (message.aggregateExchangeRateVotes) {
            obj.aggregate_exchange_rate_votes = message.aggregateExchangeRateVotes.map(e => e ? AggregateExchangeRateVote.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_exchange_rate_votes = message.aggregateExchangeRateVotes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseFeederDelegation() {
    return {
        feederAddress: "",
        validatorAddress: ""
    };
}
export const FeederDelegation = {
    typeUrl: "/umee.oracle.v1.FeederDelegation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feederAddress !== "") {
            writer.uint32(10).string(message.feederAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeederDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feederAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeederDelegation();
        message.feederAddress = object.feederAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeederDelegation();
        if (object.feeder_address !== undefined && object.feeder_address !== null) {
            message.feederAddress = object.feeder_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feeder_address = message.feederAddress === "" ? undefined : message.feederAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return FeederDelegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeederDelegation.decode(message.value);
    },
    toProto(message) {
        return FeederDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.FeederDelegation",
            value: FeederDelegation.encode(message).finish()
        };
    }
};
function createBaseMissCounter() {
    return {
        validatorAddress: "",
        missCounter: BigInt(0)
    };
}
export const MissCounter = {
    typeUrl: "/umee.oracle.v1.MissCounter",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.missCounter !== BigInt(0)) {
            writer.uint32(16).uint64(message.missCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissCounter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
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
        const message = createBaseMissCounter();
        message.validatorAddress = object.validatorAddress ?? "";
        message.missCounter = object.missCounter !== undefined && object.missCounter !== null ? BigInt(object.missCounter.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMissCounter();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.missCounter = BigInt(object.miss_counter);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.miss_counter = message.missCounter !== BigInt(0) ? (message.missCounter?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MissCounter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MissCounter.decode(message.value);
    },
    toProto(message) {
        return MissCounter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.MissCounter",
            value: MissCounter.encode(message).finish()
        };
    }
};
