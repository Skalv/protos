"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.EpochInfo = void 0;
//@ts-nocheck
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseEpochInfo() {
    return {
        identifier: "",
        startTime: new Date(),
        duration: duration_1.Duration.fromPartial({}),
        currentEpoch: BigInt(0),
        currentEpochStartTime: new Date(),
        epochCountingStarted: false,
        currentEpochStartHeight: BigInt(0)
    };
}
exports.EpochInfo = {
    typeUrl: "/osmosis.epochs.v1beta1.EpochInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.currentEpoch !== BigInt(0)) {
            writer.uint32(32).int64(message.currentEpoch);
        }
        if (message.currentEpochStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.epochCountingStarted === true) {
            writer.uint32(48).bool(message.epochCountingStarted);
        }
        if (message.currentEpochStartHeight !== BigInt(0)) {
            writer.uint32(64).int64(message.currentEpochStartHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.currentEpoch = reader.int64();
                    break;
                case 5:
                    message.currentEpochStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.epochCountingStarted = reader.bool();
                    break;
                case 8:
                    message.currentEpochStartHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEpochInfo();
        message.identifier = object.identifier ?? "";
        message.startTime = object.startTime ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
        message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
        message.epochCountingStarted = object.epochCountingStarted ?? false;
        message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? BigInt(object.currentEpochStartHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEpochInfo();
        if (object.identifier !== undefined && object.identifier !== null) {
            message.identifier = object.identifier;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.current_epoch !== undefined && object.current_epoch !== null) {
            message.currentEpoch = BigInt(object.current_epoch);
        }
        if (object.current_epoch_start_time !== undefined && object.current_epoch_start_time !== null) {
            message.currentEpochStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.current_epoch_start_time));
        }
        if (object.epoch_counting_started !== undefined && object.epoch_counting_started !== null) {
            message.epochCountingStarted = object.epoch_counting_started;
        }
        if (object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null) {
            message.currentEpochStartHeight = BigInt(object.current_epoch_start_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier === "" ? undefined : message.identifier;
        obj.start_time = message.startTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime)) : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.current_epoch = message.currentEpoch !== BigInt(0) ? (message.currentEpoch?.toString)() : undefined;
        obj.current_epoch_start_time = message.currentEpochStartTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.currentEpochStartTime)) : undefined;
        obj.epoch_counting_started = message.epochCountingStarted === false ? undefined : message.epochCountingStarted;
        obj.current_epoch_start_height = message.currentEpochStartHeight !== BigInt(0) ? (message.currentEpochStartHeight?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EpochInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/epoch-info",
            value: exports.EpochInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EpochInfo.decode(message.value);
    },
    toProto(message) {
        return exports.EpochInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.EpochInfo",
            value: exports.EpochInfo.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        epochs: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.epochs.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.epochs) {
            exports.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.epochs.push(exports.EpochInfo.decode(reader, reader.uint32()));
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
        message.epochs = object.epochs?.map(e => exports.EpochInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.epochs = object.epochs?.map(e => exports.EpochInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? exports.EpochInfo.toAmino(e) : undefined);
        }
        else {
            obj.epochs = message.epochs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/genesis-state",
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
            typeUrl: "/osmosis.epochs.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
