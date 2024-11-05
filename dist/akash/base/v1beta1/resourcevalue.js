"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceValue = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseResourceValue() {
    return {
        val: new Uint8Array()
    };
}
exports.ResourceValue = {
    typeUrl: "/akash.base.v1beta1.ResourceValue",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.val.length !== 0) {
            writer.uint32(10).bytes(message.val);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message.val = (0, helpers_1.bytesFromBase64)(object.val);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val = message.val ? (0, helpers_1.base64FromBytes)(message.val) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResourceValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResourceValue.decode(message.value);
    },
    toProto(message) {
        return exports.ResourceValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.ResourceValue",
            value: exports.ResourceValue.encode(message).finish()
        };
    }
};
