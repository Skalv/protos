//@ts-nocheck
import { Attribute } from "../../base/v1beta1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseProvider() {
    return {
        owner: "",
        auditor: "",
        attributes: []
    };
}
export const Provider = {
    typeUrl: "/akash.audit.v1beta1.Provider",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseProvider();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
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
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.auditor = message.auditor ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Provider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Provider.decode(message.value);
    },
    toProto(message) {
        return Provider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.Provider",
            value: Provider.encode(message).finish()
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
export const AuditedAttributes = {
    typeUrl: "/akash.audit.v1beta1.AuditedAttributes",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseAuditedAttributes();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
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
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.auditor = message.auditor ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AuditedAttributes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AuditedAttributes.decode(message.value);
    },
    toProto(message) {
        return AuditedAttributes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.AuditedAttributes",
            value: AuditedAttributes.encode(message).finish()
        };
    }
};
function createBaseAttributesResponse() {
    return {
        attributes: []
    };
}
export const AttributesResponse = {
    typeUrl: "/akash.audit.v1beta1.AttributesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.attributes) {
            AuditedAttributes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attributes.push(AuditedAttributes.decode(reader, reader.uint32()));
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
        message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttributesResponse();
        message.attributes = object.attributes?.map(e => AuditedAttributes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AttributesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AttributesResponse.decode(message.value);
    },
    toProto(message) {
        return AttributesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.AttributesResponse",
            value: AttributesResponse.encode(message).finish()
        };
    }
};
function createBaseAttributesFilters() {
    return {
        auditors: [],
        owners: []
    };
}
export const AttributesFilters = {
    typeUrl: "/akash.audit.v1beta1.AttributesFilters",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.auditors) {
            writer.uint32(10).string(v);
        }
        for (const v of message.owners) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return AttributesFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AttributesFilters.decode(message.value);
    },
    toProto(message) {
        return AttributesFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.AttributesFilters",
            value: AttributesFilters.encode(message).finish()
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
export const MsgSignProviderAttributes = {
    typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.auditor !== "") {
            writer.uint32(18).string(message.auditor);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgSignProviderAttributes();
        message.owner = object.owner ?? "";
        message.auditor = object.auditor ?? "";
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
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
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.auditor = message.auditor ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSignProviderAttributes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSignProviderAttributes.decode(message.value);
    },
    toProto(message) {
        return MsgSignProviderAttributes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
            value: MsgSignProviderAttributes.encode(message).finish()
        };
    }
};
function createBaseMsgSignProviderAttributesResponse() {
    return {};
}
export const MsgSignProviderAttributesResponse = {
    typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSignProviderAttributesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSignProviderAttributesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSignProviderAttributesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse",
            value: MsgSignProviderAttributesResponse.encode(message).finish()
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
export const MsgDeleteProviderAttributes = {
    typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgDeleteProviderAttributes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteProviderAttributes.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteProviderAttributes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
            value: MsgDeleteProviderAttributes.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteProviderAttributesResponse() {
    return {};
}
export const MsgDeleteProviderAttributesResponse = {
    typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgDeleteProviderAttributesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteProviderAttributesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteProviderAttributesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse",
            value: MsgDeleteProviderAttributesResponse.encode(message).finish()
        };
    }
};
