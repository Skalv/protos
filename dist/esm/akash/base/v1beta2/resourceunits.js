//@ts-nocheck
import { CPU, Memory, Storage } from "./resource";
import { Endpoint } from "./endpoint";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseResourceUnits() {
    return {
        cpu: undefined,
        memory: undefined,
        storage: [],
        endpoints: []
    };
}
export const ResourceUnits = {
    typeUrl: "/akash.base.v1beta2.ResourceUnits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.cpu !== undefined) {
            CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.storage) {
            Storage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.endpoints) {
            Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceUnits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cpu = CPU.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.memory = Memory.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.storage.push(Storage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
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
        message.cpu = object.cpu !== undefined && object.cpu !== null ? CPU.fromPartial(object.cpu) : undefined;
        message.memory = object.memory !== undefined && object.memory !== null ? Memory.fromPartial(object.memory) : undefined;
        message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
        message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResourceUnits();
        if (object.cpu !== undefined && object.cpu !== null) {
            message.cpu = CPU.fromAmino(object.cpu);
        }
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Memory.fromAmino(object.memory);
        }
        message.storage = object.storage?.map(e => Storage.fromAmino(e)) || [];
        message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
        obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
        }
        else {
            obj.storage = message.storage;
        }
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
        }
        else {
            obj.endpoints = message.endpoints;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResourceUnits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResourceUnits.decode(message.value);
    },
    toProto(message) {
        return ResourceUnits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta2.ResourceUnits",
            value: ResourceUnits.encode(message).finish()
        };
    }
};
