"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuditorAttributesRequest = exports.QueryProviderAuditorRequest = exports.QueryProviderAttributesRequest = exports.QueryAllProvidersAttributesRequest = exports.QueryProviderRequest = exports.QueryProvidersResponse = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const audit_1 = require("./audit");
const binary_1 = require("../../../binary");
function createBaseQueryProvidersResponse() {
    return {
        providers: [],
        pagination: undefined
    };
}
exports.QueryProvidersResponse = {
    typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.providers) {
            audit_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(audit_1.Provider.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.providers = object.providers?.map(e => audit_1.Provider.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProvidersResponse();
        message.providers = object.providers?.map(e => audit_1.Provider.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map(e => e ? audit_1.Provider.toAmino(e) : undefined);
        }
        else {
            obj.providers = message.providers;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProvidersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProvidersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProvidersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
            value: exports.QueryProvidersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProviderRequest() {
    return {
        auditor: "",
        owner: ""
    };
}
exports.QueryProviderRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryProviderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProviderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProviderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
            value: exports.QueryProviderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllProvidersAttributesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllProvidersAttributesRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllProvidersAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllProvidersAttributesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllProvidersAttributesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllProvidersAttributesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllProvidersAttributesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
            value: exports.QueryAllProvidersAttributesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderAttributesRequest() {
    return {
        owner: "",
        pagination: undefined
    };
}
exports.QueryProviderAttributesRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderAttributesRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProviderAttributesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProviderAttributesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProviderAttributesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
            value: exports.QueryProviderAttributesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderAuditorRequest() {
    return {
        auditor: "",
        owner: ""
    };
}
exports.QueryProviderAuditorRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryProviderAuditorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProviderAuditorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProviderAuditorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
            value: exports.QueryProviderAuditorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuditorAttributesRequest() {
    return {
        auditor: "",
        pagination: undefined
    };
}
exports.QueryAuditorAttributesRequest = {
    typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuditorAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuditorAttributesRequest();
        if (object.auditor !== undefined && object.auditor !== null) {
            message.auditor = object.auditor;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auditor = message.auditor === "" ? undefined : message.auditor;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAuditorAttributesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAuditorAttributesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuditorAttributesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
            value: exports.QueryAuditorAttributesRequest.encode(message).finish()
        };
    }
};
