"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
function createBaseEmpty() {
    return {};
}
exports.Empty = {
    typeUrl: "/google.protobuf.Empty",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
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
        const message = createBaseEmpty();
        return message;
    },
    fromAmino(_) {
        const message = createBaseEmpty();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Empty.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Empty.decode(message.value);
    },
    toProto(message) {
        return exports.Empty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Empty",
            value: exports.Empty.encode(message).finish()
        };
    }
};
