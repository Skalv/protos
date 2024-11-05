"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementRequirements = exports.SignedBy = exports.Attribute = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseAttribute() {
    return {
        key: "",
        value: ""
    };
}
exports.Attribute = {
    typeUrl: "/akash.base.v1beta1.Attribute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttribute();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value === "" ? undefined : message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Attribute.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Attribute.decode(message.value);
    },
    toProto(message) {
        return exports.Attribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.Attribute",
            value: exports.Attribute.encode(message).finish()
        };
    }
};
function createBaseSignedBy() {
    return {
        allOf: [],
        anyOf: []
    };
}
exports.SignedBy = {
    typeUrl: "/akash.base.v1beta1.SignedBy",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allOf) {
            writer.uint32(10).string(v);
        }
        for (const v of message.anyOf) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedBy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allOf.push(reader.string());
                    break;
                case 2:
                    message.anyOf.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignedBy();
        message.allOf = object.allOf?.map(e => e) || [];
        message.anyOf = object.anyOf?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignedBy();
        message.allOf = object.all_of?.map(e => e) || [];
        message.anyOf = object.any_of?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allOf) {
            obj.all_of = message.allOf.map(e => e);
        }
        else {
            obj.all_of = message.allOf;
        }
        if (message.anyOf) {
            obj.any_of = message.anyOf.map(e => e);
        }
        else {
            obj.any_of = message.anyOf;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignedBy.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SignedBy.decode(message.value);
    },
    toProto(message) {
        return exports.SignedBy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.SignedBy",
            value: exports.SignedBy.encode(message).finish()
        };
    }
};
function createBasePlacementRequirements() {
    return {
        signedBy: exports.SignedBy.fromPartial({}),
        attributes: []
    };
}
exports.PlacementRequirements = {
    typeUrl: "/akash.base.v1beta1.PlacementRequirements",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signedBy !== undefined) {
            exports.SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlacementRequirements();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBy = exports.SignedBy.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePlacementRequirements();
        message.signedBy = object.signedBy !== undefined && object.signedBy !== null ? exports.SignedBy.fromPartial(object.signedBy) : undefined;
        message.attributes = object.attributes?.map(e => exports.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePlacementRequirements();
        if (object.signed_by !== undefined && object.signed_by !== null) {
            message.signedBy = exports.SignedBy.fromAmino(object.signed_by);
        }
        message.attributes = object.attributes?.map(e => exports.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_by = message.signedBy ? exports.SignedBy.toAmino(message.signedBy) : exports.SignedBy.toAmino(exports.SignedBy.fromPartial({}));
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PlacementRequirements.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PlacementRequirements.decode(message.value);
    },
    toProto(message) {
        return exports.PlacementRequirements.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.base.v1beta1.PlacementRequirements",
            value: exports.PlacementRequirements.encode(message).finish()
        };
    }
};
