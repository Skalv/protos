//@ts-nocheck
import { ContentHash, ContentHash_Graph, ContentHash_Raw } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgAnchorData() {
    return {
        sender: "",
        hash: undefined
    };
}
export const MsgAnchorData = {
    typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.hash !== undefined) {
            ContentHash.encode(message.hash, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAnchorData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.hash = ContentHash.decode(reader, reader.uint32());
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
        message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAnchorData();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = ContentHash.fromAmino(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAnchorData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAnchorData.decode(message.value);
    },
    toProto(message) {
        return MsgAnchorData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
            value: MsgAnchorData.encode(message).finish()
        };
    }
};
function createBaseMsgAnchorDataResponse() {
    return {
        timestamp: undefined
    };
}
export const MsgAnchorDataResponse = {
    typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAnchorDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAnchorDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAnchorDataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAnchorDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse",
            value: MsgAnchorDataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSignData() {
    return {
        signers: [],
        hash: undefined
    };
}
export const MsgSignData = {
    typeUrl: "/regen.data.v1alpha2.MsgSignData",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signers) {
            writer.uint32(10).string(v);
        }
        if (message.hash !== undefined) {
            ContentHash_Graph.encode(message.hash, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signers.push(reader.string());
                    break;
                case 2:
                    message.hash = ContentHash_Graph.decode(reader, reader.uint32());
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
        message.hash = object.hash !== undefined && object.hash !== null ? ContentHash_Graph.fromPartial(object.hash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSignData();
        message.signers = object.signers?.map(e => e) || [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = ContentHash_Graph.fromAmino(object.hash);
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
        obj.hash = message.hash ? ContentHash_Graph.toAmino(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSignData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSignData.decode(message.value);
    },
    toProto(message) {
        return MsgSignData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgSignData",
            value: MsgSignData.encode(message).finish()
        };
    }
};
function createBaseMsgSignDataResponse() {
    return {};
}
export const MsgSignDataResponse = {
    typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSignDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSignDataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSignDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse",
            value: MsgSignDataResponse.encode(message).finish()
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
export const MsgStoreRawData = {
    typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contentHash !== undefined) {
            ContentHash_Raw.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
        }
        if (message.content.length !== 0) {
            writer.uint32(26).bytes(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreRawData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contentHash = ContentHash_Raw.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash_Raw.fromPartial(object.contentHash) : undefined;
        message.content = object.content ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStoreRawData();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash_Raw.fromAmino(object.content_hash);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.content_hash = message.contentHash ? ContentHash_Raw.toAmino(message.contentHash) : undefined;
        obj.content = message.content ? base64FromBytes(message.content) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStoreRawData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgStoreRawData.decode(message.value);
    },
    toProto(message) {
        return MsgStoreRawData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
            value: MsgStoreRawData.encode(message).finish()
        };
    }
};
function createBaseMsgStoreRawDataResponse() {
    return {};
}
export const MsgStoreRawDataResponse = {
    typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgStoreRawDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgStoreRawDataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgStoreRawDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse",
            value: MsgStoreRawDataResponse.encode(message).finish()
        };
    }
};
