"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveredSinceDowntimeOfLengthResponse = exports.RecoveredSinceDowntimeOfLengthRequest = void 0;
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
function createBaseRecoveredSinceDowntimeOfLengthRequest() {
    return {
        downtime: 0,
        recovery: duration_1.Duration.fromPartial({})
    };
}
exports.RecoveredSinceDowntimeOfLengthRequest = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.downtime !== 0) {
            writer.uint32(8).int32(message.downtime);
        }
        if (message.recovery !== undefined) {
            duration_1.Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downtime = reader.int32();
                    break;
                case 2:
                    message.recovery = duration_1.Duration.decode(reader, reader.uint32());
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
        message.recovery = object.recovery !== undefined && object.recovery !== null ? duration_1.Duration.fromPartial(object.recovery) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        if (object.downtime !== undefined && object.downtime !== null) {
            message.downtime = object.downtime;
        }
        if (object.recovery !== undefined && object.recovery !== null) {
            message.recovery = duration_1.Duration.fromAmino(object.recovery);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.downtime = message.downtime === 0 ? undefined : message.downtime;
        obj.recovery = message.recovery ? duration_1.Duration.toAmino(message.recovery) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RecoveredSinceDowntimeOfLengthRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request",
            value: exports.RecoveredSinceDowntimeOfLengthRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RecoveredSinceDowntimeOfLengthRequest.decode(message.value);
    },
    toProto(message) {
        return exports.RecoveredSinceDowntimeOfLengthRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
            value: exports.RecoveredSinceDowntimeOfLengthRequest.encode(message).finish()
        };
    }
};
function createBaseRecoveredSinceDowntimeOfLengthResponse() {
    return {
        succesfullyRecovered: false
    };
}
exports.RecoveredSinceDowntimeOfLengthResponse = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.succesfullyRecovered === true) {
            writer.uint32(8).bool(message.succesfullyRecovered);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.RecoveredSinceDowntimeOfLengthResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response",
            value: exports.RecoveredSinceDowntimeOfLengthResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RecoveredSinceDowntimeOfLengthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RecoveredSinceDowntimeOfLengthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
            value: exports.RecoveredSinceDowntimeOfLengthResponse.encode(message).finish()
        };
    }
};
