"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgStoreRawDataResponse = exports.MsgStoreRawData = exports.MsgSignDataResponse = exports.MsgSignData = exports.MsgAnchorDataResponse = exports.MsgAnchorData = void 0;
//@ts-nocheck
const types_1 = require("./types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgAnchorData() {
    return {
        sender: "",
        hash: undefined
    };
}
exports.MsgAnchorData = {
    typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.hash !== undefined) {
            types_1.ContentHash.encode(message.hash, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAnchorData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.hash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAnchorData();
        message.sender = object.sender ?? "";
        message.hash = object.hash !== undefined && object.hash !== null ? types_1.ContentHash.fromPartial(object.hash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAnchorData();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = types_1.ContentHash.fromAmino(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.hash = message.hash ? types_1.ContentHash.toAmino(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAnchorData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAnchorData.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAnchorData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
            value: exports.MsgAnchorData.encode(message).finish()
        };
    }
};
function createBaseMsgAnchorDataResponse() {
    return {
        timestamp: undefined
    };
}
exports.MsgAnchorDataResponse = {
    typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAnchorDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAnchorDataResponse();
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAnchorDataResponse();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAnchorDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAnchorDataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAnchorDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse",
            value: exports.MsgAnchorDataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSignData() {
    return {
        signers: [],
        hash: undefined
    };
}
exports.MsgSignData = {
    typeUrl: "/regen.data.v1alpha2.MsgSignData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signers) {
            writer.uint32(10).string(v);
        }
        if (message.hash !== undefined) {
            types_1.ContentHash_Graph.encode(message.hash, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signers.push(reader.string());
                    break;
                case 2:
                    message.hash = types_1.ContentHash_Graph.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSignData();
        message.signers = object.signers?.map(e => e) || [];
        message.hash = object.hash !== undefined && object.hash !== null ? types_1.ContentHash_Graph.fromPartial(object.hash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSignData();
        message.signers = object.signers?.map(e => e) || [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = types_1.ContentHash_Graph.fromAmino(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signers) {
            obj.signers = message.signers.map(e => e);
        }
        else {
            obj.signers = message.signers;
        }
        obj.hash = message.hash ? types_1.ContentHash_Graph.toAmino(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSignData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSignData.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSignData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgSignData",
            value: exports.MsgSignData.encode(message).finish()
        };
    }
};
function createBaseMsgSignDataResponse() {
    return {};
}
exports.MsgSignDataResponse = {
    typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignDataResponse();
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
        const message = createBaseMsgSignDataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSignDataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSignDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSignDataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSignDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse",
            value: exports.MsgSignDataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgStoreRawData() {
    return {
        sender: "",
        contentHash: undefined,
        content: new Uint8Array()
    };
}
exports.MsgStoreRawData = {
    typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contentHash !== undefined) {
            types_1.ContentHash_Raw.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
        }
        if (message.content.length !== 0) {
            writer.uint32(26).bytes(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreRawData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contentHash = types_1.ContentHash_Raw.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.content = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStoreRawData();
        message.sender = object.sender ?? "";
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash_Raw.fromPartial(object.contentHash) : undefined;
        message.content = object.content ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStoreRawData();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash_Raw.fromAmino(object.content_hash);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = (0, helpers_1.bytesFromBase64)(object.content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.content_hash = message.contentHash ? types_1.ContentHash_Raw.toAmino(message.contentHash) : undefined;
        obj.content = message.content ? (0, helpers_1.base64FromBytes)(message.content) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStoreRawData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgStoreRawData.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStoreRawData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
            value: exports.MsgStoreRawData.encode(message).finish()
        };
    }
};
function createBaseMsgStoreRawDataResponse() {
    return {};
}
exports.MsgStoreRawDataResponse = {
    typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreRawDataResponse();
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
        const message = createBaseMsgStoreRawDataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgStoreRawDataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStoreRawDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgStoreRawDataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStoreRawDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse",
            value: exports.MsgStoreRawDataResponse.encode(message).finish()
        };
    }
};
