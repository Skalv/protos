"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCurrentEpochResponse = exports.QueryCurrentEpochRequest = exports.QueryEpochsInfoResponse = exports.QueryEpochsInfoRequest = void 0;
//@ts-nocheck
const genesis_1 = require("./genesis");
const binary_1 = require("../../binary");
function createBaseQueryEpochsInfoRequest() {
    return {};
}
exports.QueryEpochsInfoRequest = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoRequest();
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
        const message = createBaseQueryEpochsInfoRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryEpochsInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochsInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-epochs-info-request",
            value: exports.QueryEpochsInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEpochsInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochsInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoRequest",
            value: exports.QueryEpochsInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEpochsInfoResponse() {
    return {
        epochs: []
    };
}
exports.QueryEpochsInfoResponse = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.epochs) {
            genesis_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochs.push(genesis_1.EpochInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map(e => genesis_1.EpochInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map(e => genesis_1.EpochInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? genesis_1.EpochInfo.toAmino(e) : undefined);
        }
        else {
            obj.epochs = message.epochs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochsInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-epochs-info-response",
            value: exports.QueryEpochsInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEpochsInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochsInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryEpochsInfoResponse",
            value: exports.QueryEpochsInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentEpochRequest() {
    return {
        identifier: ""
    };
}
exports.QueryCurrentEpochRequest = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochRequest();
        message.identifier = object.identifier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentEpochRequest();
        if (object.identifier !== undefined && object.identifier !== null) {
            message.identifier = object.identifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier === "" ? undefined : message.identifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentEpochRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-current-epoch-request",
            value: exports.QueryCurrentEpochRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentEpochRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentEpochRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochRequest",
            value: exports.QueryCurrentEpochRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentEpochResponse() {
    return {
        currentEpoch: BigInt(0)
    };
}
exports.QueryCurrentEpochResponse = {
    typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.currentEpoch !== BigInt(0)) {
            writer.uint32(8).int64(message.currentEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochResponse();
        message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentEpochResponse();
        if (object.current_epoch !== undefined && object.current_epoch !== null) {
            message.currentEpoch = BigInt(object.current_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.current_epoch = message.currentEpoch !== BigInt(0) ? (message.currentEpoch?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentEpochResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/epochs/query-current-epoch-response",
            value: exports.QueryCurrentEpochResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentEpochResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentEpochResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.epochs.v1beta1.QueryCurrentEpochResponse",
            value: exports.QueryCurrentEpochResponse.encode(message).finish()
        };
    }
};
