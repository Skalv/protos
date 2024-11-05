"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUnits = void 0;
//@ts-nocheck
const resource_1 = require("./resource");
const endpoint_1 = require("./endpoint");
const binary_1 = require("../../../binary");
function createBaseResourceUnits() {
    return {
        cpu: undefined,
        memory: undefined,
        storage: [],
        endpoints: []
    };
}
exports.ResourceUnits = {
    typeUrl: "/akash.base.v1beta2.ResourceUnits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cpu !== undefined) {
            resource_1.CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            resource_1.Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.storage) {
            resource_1.Storage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.endpoints) {
            endpoint_1.Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceUnits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cpu = resource_1.CPU.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.memory = resource_1.Memory.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.storage.push(resource_1.Storage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endpoints.push(endpoint_1.Endpoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResourceUnits();
        message.cpu = object.cpu !== undefined && object.cpu !== null ? resource_1.CPU.fromPartial(object.cpu) : undefined;
        message.memory = object.memory !== undefined && object.memory !== null ? resource_1.Memory.fromPartial(object.memory) : undefined;
        message.storage = object.storage?.map(e => resource_1.Storage.fromPartial(e)) || [];
        message.endpoints = object.endpoints?.map(e => endpoint_1.Endpoint.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResourceUnits();
        if (object.cpu !== undefined && object.cpu !== null) {
            message.cpu = resource_1.CPU.fromAmino(object.cpu);
        }
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = resource_1.Memory.fromAmino(object.memory);
        }
        message.storage = object.storage?.map(e => resource_1.Storage.fromAmino(e)) || [];
        message.endpoints = object.endpoints?.map(e => endpoint_1.Endpoint.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cpu = message.cpu ? resource_1.CPU.toAmino(message.cpu) : undefined;
        obj.memory = message.memory ? resource_1.Memory.toAmino(message.memory) : undefined;
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? resource_1.Storage.toAmino(e) : undefined);
        }
        else {
            obj.storage = message.storage;
        }
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map(e => e ? endpoint_1.Endpoint.toAmino(e) : undefined);
        }
        else {
            obj.endpoints = message.endpoints;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResourceUnits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResourceUnits.decode(message.value);
    },
    toProto(message) {
        return exports.ResourceUnits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta2.ResourceUnits",
            value: exports.ResourceUnits.encode(message).finish()
        };
    }
};
