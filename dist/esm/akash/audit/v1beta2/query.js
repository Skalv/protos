//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./audit";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryProvidersResponse() {
    return {
        providers: [],
        pagination: undefined
    };
}
export const QueryProvidersResponse = {
    typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.providers) {
            Provider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(Provider.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProvidersResponse();
        message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProvidersResponse();
        message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
        }
        else {
            obj.providers = message.providers;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProvidersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProvidersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProvidersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
            value: QueryProvidersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProviderRequest() {
    return {
        auditor: "",
        owner: ""
    };
}
export const QueryProviderRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
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
        const message = createBaseQueryProviderRequest();
        message.auditor = object.auditor ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderRequest();
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auditor = message.auditor === "" ? undefined : message.auditor;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProviderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProviderRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProviderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
            value: QueryProviderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllProvidersAttributesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllProvidersAttributesRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllProvidersAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllProvidersAttributesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllProvidersAttributesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllProvidersAttributesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllProvidersAttributesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllProvidersAttributesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
            value: QueryAllProvidersAttributesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderAttributesRequest() {
    return {
        owner: "",
        pagination: undefined
    };
}
export const QueryProviderAttributesRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProviderAttributesRequest();
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderAttributesRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProviderAttributesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProviderAttributesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProviderAttributesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
            value: QueryProviderAttributesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderAuditorRequest() {
    return {
        auditor: "",
        owner: ""
    };
}
export const QueryProviderAuditorRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderAuditorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
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
        const message = createBaseQueryProviderAuditorRequest();
        message.auditor = object.auditor ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderAuditorRequest();
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auditor = message.auditor === "" ? undefined : message.auditor;
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProviderAuditorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProviderAuditorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProviderAuditorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
            value: QueryProviderAuditorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuditorAttributesRequest() {
    return {
        auditor: "",
        pagination: undefined
    };
}
export const QueryAuditorAttributesRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuditorAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAuditorAttributesRequest();
        message.auditor = object.auditor ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuditorAttributesRequest();
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auditor = message.auditor === "" ? undefined : message.auditor;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuditorAttributesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuditorAttributesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuditorAttributesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
            value: QueryAuditorAttributesRequest.encode(message).finish()
        };
    }
};
