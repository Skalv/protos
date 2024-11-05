"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.MsgDeleteProviderResponse = exports.MsgDeleteProvider = exports.MsgUpdateProviderResponse = exports.MsgUpdateProvider = exports.MsgCreateProviderResponse = exports.MsgCreateProvider = exports.ProviderInfo = void 0;
//@ts-nocheck
const attribute_1 = require("../../base/v1beta1/attribute");
const binary_1 = require("../../../binary");
function createBaseProviderInfo() {
    return {
        email: "",
        website: ""
    };
}
exports.ProviderInfo = {
    typeUrl: "/akash.provider.v1beta1.ProviderInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.website !== "") {
            writer.uint32(18).string(message.website);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.website = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProviderInfo();
        message.email = object.email ?? "";
        message.website = object.website ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseProviderInfo();
        if (object.email !== undefined && object.email !== null) {
            message.email = object.email;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.email = message.email ?? "";
        obj.website = message.website ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProviderInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProviderInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ProviderInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.ProviderInfo",
            value: exports.ProviderInfo.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: exports.ProviderInfo.fromPartial({})
    };
}
exports.MsgCreateProvider = {
    typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateProvider();
        message.owner = object.owner ?? "";
        message.hostUri = object.hostUri ?? "";
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        message.info = object.info !== undefined && object.info !== null ? exports.ProviderInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateProvider();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.host_uri !== undefined && object.host_uri !== null) {
            message.hostUri = object.host_uri;
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.host_uri = message.hostUri ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        obj.info = message.info ? exports.ProviderInfo.toAmino(message.info) : exports.ProviderInfo.toAmino(exports.ProviderInfo.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateProvider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProvider.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProvider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
            value: exports.MsgCreateProvider.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProviderResponse() {
    return {};
}
exports.MsgCreateProviderResponse = {
    typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProviderResponse();
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
        const message = createBaseMsgCreateProviderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateProviderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProviderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
            value: exports.MsgCreateProviderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: exports.ProviderInfo.fromPartial({})
    };
}
exports.MsgUpdateProvider = {
    typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateProvider();
        message.owner = object.owner ?? "";
        message.hostUri = object.hostUri ?? "";
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        message.info = object.info !== undefined && object.info !== null ? exports.ProviderInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateProvider();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.host_uri !== undefined && object.host_uri !== null) {
            message.hostUri = object.host_uri;
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.host_uri = message.hostUri ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        obj.info = message.info ? exports.ProviderInfo.toAmino(message.info) : exports.ProviderInfo.toAmino(exports.ProviderInfo.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateProvider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProvider.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProvider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
            value: exports.MsgUpdateProvider.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProviderResponse() {
    return {};
}
exports.MsgUpdateProviderResponse = {
    typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProviderResponse();
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
        const message = createBaseMsgUpdateProviderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateProviderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProviderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
            value: exports.MsgUpdateProviderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteProvider() {
    return {
        owner: ""
    };
}
exports.MsgDeleteProvider = {
    typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteProvider();
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeleteProvider();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteProvider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteProvider.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteProvider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
            value: exports.MsgDeleteProvider.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteProviderResponse() {
    return {};
}
exports.MsgDeleteProviderResponse = {
    typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteProviderResponse();
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
        const message = createBaseMsgDeleteProviderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDeleteProviderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteProviderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
            value: exports.MsgDeleteProviderResponse.encode(message).finish()
        };
    }
};
function createBaseProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: exports.ProviderInfo.fromPartial({})
    };
}
exports.Provider = {
    typeUrl: "/akash.provider.v1beta1.Provider",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
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
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = exports.ProviderInfo.decode(reader, reader.uint32());
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
        message.hostUri = object.hostUri ?? "";
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromPartial(e)) || [];
        message.info = object.info !== undefined && object.info !== null ? exports.ProviderInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProvider();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.host_uri !== undefined && object.host_uri !== null) {
            message.hostUri = object.host_uri;
        }
        message.attributes = object.attributes?.map(e => attribute_1.Attribute.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ProviderInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.host_uri = message.hostUri ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? attribute_1.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        obj.info = message.info ? exports.ProviderInfo.toAmino(message.info) : exports.ProviderInfo.toAmino(exports.ProviderInfo.fromPartial({}));
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
            typeUrl: "/akash.provider.v1beta1.Provider",
            value: exports.Provider.encode(message).finish()
        };
    }
};
