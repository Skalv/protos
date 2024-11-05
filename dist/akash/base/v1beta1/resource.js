"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUnits = exports.Storage = exports.Memory = exports.CPU = void 0;
//@ts-nocheck
const resourcevalue_1 = require("./resourcevalue");
const attribute_1 = require("./attribute");
const endpoint_1 = require("./endpoint");
const binary_1 = require("../../../binary");
function createBaseCPU() {
    return {
        units: resourcevalue_1.ResourceValue.fromPartial({}),
        attributes: []
    };
}
exports.CPU = {
    typeUrl: "/akash.base.v1beta1.CPU",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.units !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPU();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.units = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
        message.units = object.units !== undefined && object.units !== null ? resourcevalue_1.ResourceValue.fromPartial(object.units) : undefined;
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCPU();
        if (object.units !== undefined && object.units !== null) {
            message.units = resourcevalue_1.ResourceValue.fromAmino(object.units);
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.units = message.units ? resourcevalue_1.ResourceValue.toAmino(message.units) : undefined;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CPU.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CPU.decode(message.value);
    },
    toProto(message) {
        return exports.CPU.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.CPU",
            value: exports.CPU.encode(message).finish()
        };
    }
};
function createBaseMemory() {
    return {
        quantity: resourcevalue_1.ResourceValue.fromPartial({}),
        attributes: []
    };
}
exports.Memory = {
    typeUrl: "/akash.base.v1beta1.Memory",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
        message.quantity = object.quantity !== undefined && object.quantity !== null ? resourcevalue_1.ResourceValue.fromPartial(object.quantity) : undefined;
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMemory();
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = resourcevalue_1.ResourceValue.fromAmino(object.quantity);
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quantity = message.quantity ? resourcevalue_1.ResourceValue.toAmino(message.quantity) : resourcevalue_1.ResourceValue.toAmino(resourcevalue_1.ResourceValue.fromPartial({}));
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Memory.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Memory.decode(message.value);
    },
    toProto(message) {
        return exports.Memory.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.Memory",
            value: exports.Memory.encode(message).finish()
        };
    }
};
function createBaseStorage() {
    return {
        quantity: resourcevalue_1.ResourceValue.fromPartial({}),
        attributes: []
    };
}
exports.Storage = {
    typeUrl: "/akash.base.v1beta1.Storage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
        message.quantity = object.quantity !== undefined && object.quantity !== null ? resourcevalue_1.ResourceValue.fromPartial(object.quantity) : undefined;
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStorage();
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = resourcevalue_1.ResourceValue.fromAmino(object.quantity);
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quantity = message.quantity ? resourcevalue_1.ResourceValue.toAmino(message.quantity) : resourcevalue_1.ResourceValue.toAmino(resourcevalue_1.ResourceValue.fromPartial({}));
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Storage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Storage.decode(message.value);
    },
    toProto(message) {
        return exports.Storage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.Storage",
            value: exports.Storage.encode(message).finish()
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
exports.ResourceUnits = {
    typeUrl: "/akash.base.v1beta1.ResourceUnits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cpu !== undefined) {
            exports.CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            exports.Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.storage !== undefined) {
            exports.Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
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
                    message.cpu = exports.CPU.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.memory = exports.Memory.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.storage = exports.Storage.decode(reader, reader.uint32());
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
        message.cpu = object.cpu !== undefined && object.cpu !== null ? exports.CPU.fromPartial(object.cpu) : undefined;
        message.memory = object.memory !== undefined && object.memory !== null ? exports.Memory.fromPartial(object.memory) : undefined;
        message.storage = object.storage !== undefined && object.storage !== null ? exports.Storage.fromPartial(object.storage) : undefined;
        message.endpoints = object.endpoints?.map(e => endpoint_1.Endpoint.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResourceUnits();
        if (object.cpu !== undefined && object.cpu !== null) {
            message.cpu = exports.CPU.fromAmino(object.cpu);
        }
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = exports.Memory.fromAmino(object.memory);
        }
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Storage.fromAmino(object.storage);
        }
        message.endpoints = object.endpoints?.map(e => endpoint_1.Endpoint.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cpu = message.cpu ? exports.CPU.toAmino(message.cpu) : undefined;
        obj.memory = message.memory ? exports.Memory.toAmino(message.memory) : undefined;
        obj.storage = message.storage ? exports.Storage.toAmino(message.storage) : undefined;
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
            typeUrl: "/akash.base.v1beta1.ResourceUnits",
            value: exports.ResourceUnits.encode(message).finish()
        };
    }
};
