"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const audit_1 = require("./audit");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        attributes: []
    };
}
exports.GenesisState = {
    typeUrl: "/akash.audit.v1beta2.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.attributes) {
            audit_1.AuditedAttributes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attributes.push(audit_1.AuditedAttributes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.attributes = object.attributes?.map(e => audit_1.AuditedAttributes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.attributes = object.attributes?.map(e => audit_1.AuditedAttributes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? audit_1.AuditedAttributes.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
