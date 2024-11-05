import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseGenesisDowntimeEntry() {
    return {
        duration: 0,
        lastDowntime: new Date()
    };
}
export const GenesisDowntimeEntry = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.duration !== 0) {
            writer.uint32(8).int32(message.duration);
        }
        if (message.lastDowntime !== undefined) {
            Timestamp.encode(toTimestamp(message.lastDowntime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDowntimeEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = reader.int32();
                    break;
                case 2:
                    message.lastDowntime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.lastDowntime = fromTimestamp(Timestamp.fromAmino(object.last_downtime));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.duration = message.duration === 0 ? undefined : message.duration;
        obj.last_downtime = message.lastDowntime ? Timestamp.toAmino(toTimestamp(message.lastDowntime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisDowntimeEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-downtime-entry",
            value: GenesisDowntimeEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisDowntimeEntry.decode(message.value);
    },
    toProto(message) {
        return GenesisDowntimeEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
            value: GenesisDowntimeEntry.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        downtimes: [],
        lastBlockTime: new Date()
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.downtimes) {
            GenesisDowntimeEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastBlockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(18).fork()).ldelim();
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
                    message.downtimes.push(GenesisDowntimeEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromPartial(e)) || [];
        message.lastBlockTime = object.lastBlockTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromAmino(e)) || [];
        if (object.last_block_time !== undefined && object.last_block_time !== null) {
            message.lastBlockTime = fromTimestamp(Timestamp.fromAmino(object.last_block_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toAmino(e) : undefined);
        }
        else {
            obj.downtimes = message.downtimes;
        }
        obj.last_block_time = message.lastBlockTime ? Timestamp.toAmino(toTimestamp(message.lastBlockTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
