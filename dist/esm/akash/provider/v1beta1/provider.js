//@ts-nocheck
import { Attribute } from "../../base/v1beta1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseProviderInfo() {
    return {
        email: "",
        website: ""
    };
}
export const ProviderInfo = {
    typeUrl: "/akash.provider.v1beta1.ProviderInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.website !== "") {
            writer.uint32(18).string(message.website);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ProviderInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProviderInfo.decode(message.value);
    },
    toProto(message) {
        return ProviderInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.ProviderInfo",
            value: ProviderInfo.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: ProviderInfo.fromPartial({})
    };
}
export const MsgCreateProvider = {
    typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = ProviderInfo.decode(reader, reader.uint32());
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
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
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
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = ProviderInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.host_uri = message.hostUri ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        obj.info = message.info ? ProviderInfo.toAmino(message.info) : ProviderInfo.toAmino(ProviderInfo.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateProvider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateProvider.decode(message.value);
    },
    toProto(message) {
        return MsgCreateProvider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
            value: MsgCreateProvider.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProviderResponse() {
    return {};
}
export const MsgCreateProviderResponse = {
    typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateProviderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
            value: MsgCreateProviderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: ProviderInfo.fromPartial({})
    };
}
export const MsgUpdateProvider = {
    typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = ProviderInfo.decode(reader, reader.uint32());
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
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
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
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = ProviderInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.host_uri = message.hostUri ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        obj.info = message.info ? ProviderInfo.toAmino(message.info) : ProviderInfo.toAmino(ProviderInfo.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateProvider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateProvider.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateProvider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
            value: MsgUpdateProvider.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProviderResponse() {
    return {};
}
export const MsgUpdateProviderResponse = {
    typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateProviderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
            value: MsgUpdateProviderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteProvider() {
    return {
        owner: ""
    };
}
export const MsgDeleteProvider = {
    typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgDeleteProvider.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteProvider.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteProvider.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
            value: MsgDeleteProvider.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteProviderResponse() {
    return {};
}
export const MsgDeleteProviderResponse = {
    typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgDeleteProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteProviderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
            value: MsgDeleteProviderResponse.encode(message).finish()
        };
    }
};
function createBaseProvider() {
    return {
        owner: "",
        hostUri: "",
        attributes: [],
        info: ProviderInfo.fromPartial({})
    };
}
export const Provider = {
    typeUrl: "/akash.provider.v1beta1.Provider",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.hostUri !== "") {
            writer.uint32(18).string(message.hostUri);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
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
                    message.hostUri = reader.string();
                    break;
                case 3:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.info = ProviderInfo.decode(reader, reader.uint32());
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
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
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
        message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = ProviderInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.host_uri = message.hostUri ?? "";
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        obj.info = message.info ? ProviderInfo.toAmino(message.info) : ProviderInfo.toAmino(ProviderInfo.fromPartial({}));
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
            typeUrl: "/akash.provider.v1beta1.Provider",
            value: Provider.encode(message).finish()
        };
    }
};
