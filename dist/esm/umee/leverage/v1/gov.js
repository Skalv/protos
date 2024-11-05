//@ts-nocheck
import { Token } from "./leverage";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseUpdateRegistryProposal() {
    return {
        title: "",
        description: "",
        registry: []
    };
}
export const UpdateRegistryProposal = {
    typeUrl: "/umee.leverage.v1.UpdateRegistryProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.registry) {
            Token.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateRegistryProposal();
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
                    message.registry.push(Token.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateRegistryProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateRegistryProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.registry = object.registry?.map(e => Token.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.registry) {
            obj.registry = message.registry.map(e => e ? Token.toAmino(e) : undefined);
        }
        else {
            obj.registry = message.registry;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateRegistryProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateRegistryProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateRegistryProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.UpdateRegistryProposal",
            value: UpdateRegistryProposal.encode(message).finish()
        };
    }
};
