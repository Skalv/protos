"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegistryProposal = void 0;
//@ts-nocheck
const leverage_1 = require("./leverage");
const binary_1 = require("../../../binary");
function createBaseUpdateRegistryProposal() {
    return {
        title: "",
        description: "",
        registry: []
    };
}
exports.UpdateRegistryProposal = {
    typeUrl: "/umee.leverage.v1.UpdateRegistryProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.registry) {
            leverage_1.Token.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.registry.push(leverage_1.Token.decode(reader, reader.uint32()));
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
        message.registry = object.registry?.map(e => leverage_1.Token.fromPartial(e)) || [];
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
        message.registry = object.registry?.map(e => leverage_1.Token.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.registry) {
            obj.registry = message.registry.map(e => e ? leverage_1.Token.toAmino(e) : undefined);
        }
        else {
            obj.registry = message.registry;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateRegistryProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UpdateRegistryProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateRegistryProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.UpdateRegistryProposal",
            value: exports.UpdateRegistryProposal.encode(message).finish()
        };
    }
};
