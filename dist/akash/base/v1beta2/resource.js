"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = exports.Memory = exports.CPU = void 0;
//@ts-nocheck
const resourcevalue_1 = require("./resourcevalue");
const attribute_1 = require("./attribute");
const binary_1 = require("../../../binary");
function createBaseCPU() {
    return {
        units: resourcevalue_1.ResourceValue.fromPartial({}),
        attributes: []
    };
}
exports.CPU = {
    typeUrl: "/akash.base.v1beta2.CPU",
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
            typeUrl: "/akash.base.v1beta2.CPU",
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
    typeUrl: "/akash.base.v1beta2.Memory",
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
            typeUrl: "/akash.base.v1beta2.Memory",
            value: exports.Memory.encode(message).finish()
        };
    }
};
function createBaseStorage() {
    return {
        name: "",
        quantity: resourcevalue_1.ResourceValue.fromPartial({}),
        attributes: []
    };
}
exports.Storage = {
    typeUrl: "/akash.base.v1beta2.Storage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.name = reader.string();
                    break;
                case 2:
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    break;
                case 3:
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
        message.name = object.name ?? "";
        message.quantity = object.quantity !== undefined && object.quantity !== null ? resourcevalue_1.ResourceValue.fromPartial(object.quantity) : undefined;
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStorage();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = resourcevalue_1.ResourceValue.fromAmino(object.quantity);
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name ?? "";
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
            typeUrl: "/akash.base.v1beta2.Storage",
            value: exports.Storage.encode(message).finish()
        };
    }
};
