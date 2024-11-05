"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgDeleteProviderAttributesResponse = exports.MsgDeleteProviderAttributes = exports.MsgSignProviderAttributesResponse = exports.MsgSignProviderAttributes = exports.AttributesFilters = exports.AttributesResponse = exports.AuditedAttributes = exports.Provider = void 0;
//@ts-nocheck
const attribute_1 = require("../../base/v1beta1/attribute");
const binary_1 = require("../../../binary");
function createBaseProvider() {
    return {
        owner: "",
        auditor: "",
        attributes: []
    };
}
exports.Provider = {
    typeUrl: "/akash.audit.v1beta1.Provider",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
                    break;
                case 4:
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
        const message = createBaseProvider();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProvider();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.auditor = message.auditor ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Provider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Provider.decode(message.value);
    },
    toProto(message) {
        return exports.Provider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.Provider",
            value: exports.Provider.encode(message).finish()
        };
    }
};
function createBaseAuditedAttributes() {
    return {
        owner: "",
        auditor: "",
        attributes: []
    };
}
exports.AuditedAttributes = {
    typeUrl: "/akash.audit.v1beta1.AuditedAttributes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuditedAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
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
        const message = createBaseAuditedAttributes();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuditedAttributes();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.auditor = message.auditor ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuditedAttributes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AuditedAttributes.decode(message.value);
    },
    toProto(message) {
        return exports.AuditedAttributes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.AuditedAttributes",
            value: exports.AuditedAttributes.encode(message).finish()
        };
    }
};
function createBaseAttributesResponse() {
    return {
        attributes: []
    };
}
exports.AttributesResponse = {
    typeUrl: "/akash.audit.v1beta1.AttributesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.attributes) {
            exports.AuditedAttributes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attributes.push(exports.AuditedAttributes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAttributesResponse();
        message.attributes = object.attributes?.map(e => exports.AuditedAttributes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttributesResponse();
        message.attributes = object.attributes?.map(e => exports.AuditedAttributes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.AuditedAttributes.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AttributesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AttributesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AttributesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.AttributesResponse",
            value: exports.AttributesResponse.encode(message).finish()
        };
    }
};
function createBaseAttributesFilters() {
    return {
        auditors: [],
        owners: []
    };
}
exports.AttributesFilters = {
    typeUrl: "/akash.audit.v1beta1.AttributesFilters",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.auditors) {
            writer.uint32(10).string(v);
        }
        for (const v of message.owners) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditors.push(reader.string());
                    break;
                case 2:
                    message.owners.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAttributesFilters();
        message.auditors = object.auditors?.map(e => e) || [];
        message.owners = object.owners?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttributesFilters();
        message.auditors = object.auditors?.map(e => e) || [];
        message.owners = object.owners?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.auditors) {
            obj.auditors = message.auditors.map(e => e);
        }
        else {
            obj.auditors = message.auditors;
        }
        if (message.owners) {
            obj.owners = message.owners.map(e => e);
        }
        else {
            obj.owners = message.owners;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AttributesFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AttributesFilters.decode(message.value);
    },
    toProto(message) {
        return exports.AttributesFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.AttributesFilters",
            value: exports.AttributesFilters.encode(message).finish()
        };
    }
};
function createBaseMsgSignProviderAttributes() {
    return {
        owner: "",
        auditor: "",
        attributes: []
    };
}
exports.MsgSignProviderAttributes = {
    typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
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
        const message = createBaseMsgSignProviderAttributes();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSignProviderAttributes();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.auditor = message.auditor ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSignProviderAttributes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSignProviderAttributes.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSignProviderAttributes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
            value: exports.MsgSignProviderAttributes.encode(message).finish()
        };
    }
};
function createBaseMsgSignProviderAttributesResponse() {
    return {};
}
exports.MsgSignProviderAttributesResponse = {
    typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignProviderAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSignProviderAttributesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSignProviderAttributesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSignProviderAttributesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSignProviderAttributesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSignProviderAttributesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse",
            value: exports.MsgSignProviderAttributesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteProviderAttributes() {
    return {
        owner: "",
        auditor: "",
        keys: []
    };
}
exports.MsgDeleteProviderAttributes = {
    typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.keys) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.auditor = reader.string();
                    break;
                case 3:
                    message.keys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteProviderAttributes();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeleteProviderAttributes();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.auditor = message.auditor ?? "";
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = message.keys;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteProviderAttributes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteProviderAttributes.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteProviderAttributes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
            value: exports.MsgDeleteProviderAttributes.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteProviderAttributesResponse() {
    return {};
}
exports.MsgDeleteProviderAttributesResponse = {
    typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteProviderAttributesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDeleteProviderAttributesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteProviderAttributesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteProviderAttributesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteProviderAttributesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse",
            value: exports.MsgDeleteProviderAttributesResponse.encode(message).finish()
        };
    }
};
