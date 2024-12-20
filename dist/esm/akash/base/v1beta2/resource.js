//@ts-nocheck
import { ResourceValue } from "./resourcevalue";
import { Attribute } from "./attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseCPU() {
    return {
        units: ResourceValue.fromPartial({}),
        attributes: []
    };
}
export const CPU = {
    typeUrl: "/akash.base.v1beta2.CPU",
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
            typeUrl: "/akash.base.v1beta2.CPU",
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
    typeUrl: "/akash.base.v1beta2.Memory",
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
            typeUrl: "/akash.base.v1beta2.Memory",
            value: Memory.encode(message).finish()
        };
    }
};
function createBaseStorage() {
    return {
        name: "",
        quantity: ResourceValue.fromPartial({}),
        attributes: []
    };
}
export const Storage = {
    typeUrl: "/akash.base.v1beta2.Storage",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.quantity !== undefined) {
            ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.name = reader.string();
                    break;
                case 2:
                    message.quantity = ResourceValue.decode(reader, reader.uint32());
                    break;
                case 3:
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
        message.name = object.name ?? "";
        message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStorage();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = ResourceValue.fromAmino(object.quantity);
        }
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name ?? "";
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
            typeUrl: "/akash.base.v1beta2.Storage",
            value: Storage.encode(message).finish()
        };
    }
};
