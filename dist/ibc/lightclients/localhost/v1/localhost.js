"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientState = void 0;
//@ts-nocheck
const client_1 = require("../../../core/client/v1/client");
const binary_1 = require("../../../../binary");
function createBaseClientState() {
    return {
        chainId: "",
        height: client_1.Height.fromPartial({})
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.height = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = client_1.Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: exports.ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientState.decode(message.value);
    },
    toProto(message) {
        return exports.ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
            value: exports.ClientState.encode(message).finish()
        };
    }
};
