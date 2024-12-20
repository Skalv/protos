"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const incentives_1 = require("./incentives");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: incentives_1.Params.fromPartial({}),
        lockableDurations: [],
        distrInfo: undefined,
        poolToGauges: undefined
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distrInfo !== undefined) {
            incentives_1.DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.poolToGauges !== undefined) {
            incentives_1.PoolToGauges.encode(message.poolToGauges, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distrInfo = incentives_1.DistrInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.poolToGauges = incentives_1.PoolToGauges.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? incentives_1.Params.fromPartial(object.params) : undefined;
        message.lockableDurations = object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? incentives_1.DistrInfo.fromPartial(object.distrInfo) : undefined;
        message.poolToGauges = object.poolToGauges !== undefined && object.poolToGauges !== null ? incentives_1.PoolToGauges.fromPartial(object.poolToGauges) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = incentives_1.Params.fromAmino(object.params);
        }
        message.lockableDurations = object.lockable_durations?.map(e => duration_1.Duration.fromAmino(e)) || [];
        if (object.distr_info !== undefined && object.distr_info !== null) {
            message.distrInfo = incentives_1.DistrInfo.fromAmino(object.distr_info);
        }
        if (object.pool_to_gauges !== undefined && object.pool_to_gauges !== null) {
            message.poolToGauges = incentives_1.PoolToGauges.fromAmino(object.pool_to_gauges);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? incentives_1.Params.toAmino(message.params) : undefined;
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        obj.distr_info = message.distrInfo ? incentives_1.DistrInfo.toAmino(message.distrInfo) : undefined;
        obj.pool_to_gauges = message.poolToGauges ? incentives_1.PoolToGauges.toAmino(message.poolToGauges) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
