//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseResourceValue() {
    return {
        val: new Uint8Array()
    };
}
export const ResourceValue = {
    typeUrl: "/akash.base.v1beta2.ResourceValue",
    encode(message, writer = BinaryWriter.create()) {
        if (message.val.length !== 0) {
            writer.uint32(10).bytes(message.val);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.val = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResourceValue();
        message.val = object.val ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResourceValue();
        if (object.val !== undefined && object.val !== null) {
            message.val = bytesFromBase64(object.val);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val = message.val ? base64FromBytes(message.val) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResourceValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResourceValue.decode(message.value);
    },
    toProto(message) {
        return ResourceValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta2.ResourceValue",
            value: ResourceValue.encode(message).finish()
        };
    }
};
