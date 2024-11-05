//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseUpdateAdminProposal() {
    return {
        title: "",
        description: "",
        address: ""
    };
}
export const UpdateAdminProposal = {
    typeUrl: "/comdex.asset.v1beta1.UpdateAdminProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateAdminProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateAdminProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateAdminProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateAdminProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateAdminProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateAdminProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.UpdateAdminProposal",
            value: UpdateAdminProposal.encode(message).finish()
        };
    }
};
