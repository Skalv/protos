//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        admin: ""
    };
}
export const Params = {
    typeUrl: "/comdex.asset.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
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
                    message.admin = reader.string();
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
        message.admin = object.admin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
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
            typeUrl: "/comdex.asset.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
