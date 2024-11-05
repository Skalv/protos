"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisDowntimeEntry = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenesisDowntimeEntry() {
    return {
        duration: 0,
        lastDowntime: new Date()
    };
}
exports.GenesisDowntimeEntry = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.duration !== 0) {
            writer.uint32(8).int32(message.duration);
        }
        if (message.lastDowntime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDowntime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDowntimeEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = reader.int32();
                    break;
                case 2:
                    message.lastDowntime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisDowntimeEntry();
        message.duration = object.duration ?? 0;
        message.lastDowntime = object.lastDowntime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisDowntimeEntry();
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = object.duration;
        }
        if (object.last_downtime !== undefined && object.last_downtime !== null) {
            message.lastDowntime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_downtime));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.duration = message.duration === 0 ? undefined : message.duration;
        obj.last_downtime = message.lastDowntime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastDowntime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisDowntimeEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-downtime-entry",
            value: exports.GenesisDowntimeEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisDowntimeEntry.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisDowntimeEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
            value: exports.GenesisDowntimeEntry.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        downtimes: [],
        lastBlockTime: new Date()
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.downtimes) {
            exports.GenesisDowntimeEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastBlockTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastBlockTime), writer.uint32(18).fork()).ldelim();
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
                    message.downtimes.push(exports.GenesisDowntimeEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lastBlockTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        message.downtimes = object.downtimes?.map(e => exports.GenesisDowntimeEntry.fromPartial(e)) || [];
        message.lastBlockTime = object.lastBlockTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.downtimes = object.downtimes?.map(e => exports.GenesisDowntimeEntry.fromAmino(e)) || [];
        if (object.last_block_time !== undefined && object.last_block_time !== null) {
            message.lastBlockTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_block_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? exports.GenesisDowntimeEntry.toAmino(e) : undefined);
        }
        else {
            obj.downtimes = message.downtimes;
        }
        obj.last_block_time = message.lastBlockTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastBlockTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-state",
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
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
