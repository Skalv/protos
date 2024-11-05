"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAddPair = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseEventAddPair() {
    return {
        id: BigInt(0)
    };
}
exports.EventAddPair = {
    typeUrl: "/comdex.asset.v1beta1.EventAddPair",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAddPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAddPair();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAddPair();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAddPair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAddPair.decode(message.value);
    },
    toProto(message) {
        return exports.EventAddPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.EventAddPair",
            value: exports.EventAddPair.encode(message).finish()
        };
    }
};
