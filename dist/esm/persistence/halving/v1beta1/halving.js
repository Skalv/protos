//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        blockHeight: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/persistence.halving.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = BigInt(object.blockHeight);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.blockHeight = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/persistence.halving.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
