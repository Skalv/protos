//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        enabled: false
    };
}
export const Params = {
    typeUrl: "/osmosis.protorev.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
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
                    message.enabled = reader.bool();
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
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.enabled = message.enabled === false ? undefined : message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
