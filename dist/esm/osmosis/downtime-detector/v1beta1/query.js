import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseRecoveredSinceDowntimeOfLengthRequest() {
    return {
        downtime: 0,
        recovery: Duration.fromPartial({})
    };
}
export const RecoveredSinceDowntimeOfLengthRequest = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.downtime !== 0) {
            writer.uint32(8).int32(message.downtime);
        }
        if (message.recovery !== undefined) {
            Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downtime = reader.int32();
                    break;
                case 2:
                    message.recovery = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        message.downtime = object.downtime ?? 0;
        message.recovery = object.recovery !== undefined && object.recovery !== null ? Duration.fromPartial(object.recovery) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        if (object.downtime !== undefined && object.downtime !== null) {
            message.downtime = object.downtime;
        }
        if (object.recovery !== undefined && object.recovery !== null) {
            message.recovery = Duration.fromAmino(object.recovery);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.downtime = message.downtime === 0 ? undefined : message.downtime;
        obj.recovery = message.recovery ? Duration.toAmino(message.recovery) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RecoveredSinceDowntimeOfLengthRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request",
            value: RecoveredSinceDowntimeOfLengthRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RecoveredSinceDowntimeOfLengthRequest.decode(message.value);
    },
    toProto(message) {
        return RecoveredSinceDowntimeOfLengthRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
            value: RecoveredSinceDowntimeOfLengthRequest.encode(message).finish()
        };
    }
};
function createBaseRecoveredSinceDowntimeOfLengthResponse() {
    return {
        succesfullyRecovered: false
    };
}
export const RecoveredSinceDowntimeOfLengthResponse = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.succesfullyRecovered === true) {
            writer.uint32(8).bool(message.succesfullyRecovered);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.succesfullyRecovered = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
        message.succesfullyRecovered = object.succesfullyRecovered ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
        if (object.succesfully_recovered !== undefined && object.succesfully_recovered !== null) {
            message.succesfullyRecovered = object.succesfully_recovered;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.succesfully_recovered = message.succesfullyRecovered === false ? undefined : message.succesfullyRecovered;
        return obj;
    },
    fromAminoMsg(object) {
        return RecoveredSinceDowntimeOfLengthResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response",
            value: RecoveredSinceDowntimeOfLengthResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RecoveredSinceDowntimeOfLengthResponse.decode(message.value);
    },
    toProto(message) {
        return RecoveredSinceDowntimeOfLengthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
            value: RecoveredSinceDowntimeOfLengthResponse.encode(message).finish()
        };
    }
};
