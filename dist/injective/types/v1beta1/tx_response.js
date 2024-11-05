"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxResponseData = exports.TxResponseGenericMessage = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseTxResponseGenericMessage() {
    return {
        header: "",
        data: new Uint8Array()
    };
}
exports.TxResponseGenericMessage = {
    typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== "") {
            writer.uint32(10).string(message.header);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponseGenericMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxResponseGenericMessage();
        message.header = object.header ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResponseGenericMessage();
        if (object.header !== undefined && object.header !== null) {
            message.header = object.header;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header === "" ? undefined : message.header;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResponseGenericMessage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResponseGenericMessage.decode(message.value);
    },
    toProto(message) {
        return exports.TxResponseGenericMessage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
            value: exports.TxResponseGenericMessage.encode(message).finish()
        };
    }
};
function createBaseTxResponseData() {
    return {
        messages: []
    };
}
exports.TxResponseData = {
    typeUrl: "/injective.types.v1beta1.TxResponseData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            exports.TxResponseGenericMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(exports.TxResponseGenericMessage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxResponseData();
        message.messages = object.messages?.map(e => exports.TxResponseGenericMessage.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResponseData();
        message.messages = object.messages?.map(e => exports.TxResponseGenericMessage.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? exports.TxResponseGenericMessage.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResponseData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResponseData.decode(message.value);
    },
    toProto(message) {
        return exports.TxResponseData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.types.v1beta1.TxResponseData",
            value: exports.TxResponseData.encode(message).finish()
        };
    }
};
