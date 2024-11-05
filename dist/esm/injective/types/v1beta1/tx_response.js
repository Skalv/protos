//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseTxResponseGenericMessage() {
    return {
        header: "",
        data: new Uint8Array()
    };
}
export const TxResponseGenericMessage = {
    typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
    encode(message, writer = BinaryWriter.create()) {
        if (message.header !== "") {
            writer.uint32(10).string(message.header);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header === "" ? undefined : message.header;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxResponseGenericMessage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxResponseGenericMessage.decode(message.value);
    },
    toProto(message) {
        return TxResponseGenericMessage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.types.v1beta1.TxResponseGenericMessage",
            value: TxResponseGenericMessage.encode(message).finish()
        };
    }
};
function createBaseTxResponseData() {
    return {
        messages: []
    };
}
export const TxResponseData = {
    typeUrl: "/injective.types.v1beta1.TxResponseData",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.messages) {
            TxResponseGenericMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(TxResponseGenericMessage.decode(reader, reader.uint32()));
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
        message.messages = object.messages?.map(e => TxResponseGenericMessage.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResponseData();
        message.messages = object.messages?.map(e => TxResponseGenericMessage.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? TxResponseGenericMessage.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxResponseData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxResponseData.decode(message.value);
    },
    toProto(message) {
        return TxResponseData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.types.v1beta1.TxResponseData",
            value: TxResponseData.encode(message).finish()
        };
    }
};
