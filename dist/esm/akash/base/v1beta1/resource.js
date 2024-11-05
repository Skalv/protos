//@ts-nocheck
import { ResourceValue } from "./resourcevalue";
import { Attribute } from "./attribute";
import { Endpoint } from "./endpoint";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseCPU() {
    return {
        units: ResourceValue.fromPartial({}),
        attributes: []
    };
}
export const CPU = {
    typeUrl: "/akash.base.v1beta1.CPU",
    encode(message, writer = BinaryWriter.create()) {
        if (message.units !== undefined) {
            ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPU();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.units = ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCPU();
        message.units = object.units !== undefined && object.units !== null ? ResourceValue.fromPartial(object.units) : undefined;
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCPU();
        if (object.units !== undefined && object.units !== null) {
            message.units = ResourceValue.fromAmino(object.units);
        }
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.units = message.units ? ResourceValue.toAmino(message.units) : undefined;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CPU.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CPU.decode(message.value);
    },
    toProto(message) {
        return CPU.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.CPU",
            value: CPU.encode(message).finish()
        };
    }
};
function createBaseMemory() {
    return {
        quantity: ResourceValue.fromPartial({}),
        attributes: []
    };
}
export const Memory = {
    typeUrl: "/akash.base.v1beta1.Memory",
    encode(message, writer = BinaryWriter.create()) {
        if (message.quantity !== undefined) {
            ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMemory();
        message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMemory();
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = ResourceValue.fromAmino(object.quantity);
        }
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Memory.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Memory.decode(message.value);
    },
    toProto(message) {
        return Memory.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.Memory",
            value: Memory.encode(message).finish()
        };
    }
};
function createBaseStorage() {
    return {
        quantity: ResourceValue.fromPartial({}),
        attributes: []
    };
}
export const Storage = {
    typeUrl: "/akash.base.v1beta1.Storage",
    encode(message, writer = BinaryWriter.create()) {
        if (message.quantity !== undefined) {
            ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStorage();
        message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStorage();
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = ResourceValue.fromAmino(object.quantity);
        }
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Storage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Storage.decode(message.value);
    },
    toProto(message) {
        return Storage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.Storage",
            value: Storage.encode(message).finish()
        };
    }
};
function createBaseResourceUnits() {
    return {
        cpu: undefined,
        memory: undefined,
        storage: undefined,
        endpoints: []
    };
}
export const ResourceUnits = {
    typeUrl: "/akash.base.v1beta1.ResourceUnits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.cpu !== undefined) {
            CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.storage !== undefined) {
            Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
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
                    message.storage = Storage.decode(reader, reader.uint32());
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
        message.storage = object.storage !== undefined && object.storage !== null ? Storage.fromPartial(object.storage) : undefined;
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
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Storage.fromAmino(object.storage);
        }
        message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
        obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
        obj.storage = message.storage ? Storage.toAmino(message.storage) : undefined;
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
            typeUrl: "/akash.base.v1beta1.ResourceUnits",
            value: ResourceUnits.encode(message).finish()
        };
    }
};
