"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProviderResponse = exports.QueryProviderRequest = exports.QueryProvidersResponse = exports.QueryProvidersRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const provider_1 = require("./provider");
const binary_1 = require("../../../binary");
function createBaseQueryProvidersRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryProvidersRequest = {
    typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersRequest();
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
        const message = createBaseQueryProvidersRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProvidersRequest();
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
        return exports.QueryProvidersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProvidersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProvidersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
            value: exports.QueryProvidersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProvidersResponse() {
    return {
        providers: [],
        pagination: undefined
    };
}
exports.QueryProvidersResponse = {
    typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.providers) {
            provider_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.providers.push(provider_1.Provider.decode(reader, reader.uint32()));
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
        message.providers = object.providers?.map(e => provider_1.Provider.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProvidersResponse();
        message.providers = object.providers?.map(e => provider_1.Provider.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map(e => e ? provider_1.Provider.toAmino(e) : undefined);
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
            typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
            value: exports.QueryProvidersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProviderRequest() {
    return {
        owner: ""
    };
}
exports.QueryProviderRequest = {
    typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
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
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
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
            typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
            value: exports.QueryProviderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderResponse() {
    return {
        provider: provider_1.Provider.fromPartial({})
    };
}
exports.QueryProviderResponse = {
    typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.provider !== undefined) {
            provider_1.Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = provider_1.Provider.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProviderResponse();
        message.provider = object.provider !== undefined && object.provider !== null ? provider_1.Provider.fromPartial(object.provider) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderResponse();
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = provider_1.Provider.fromAmino(object.provider);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.provider = message.provider ? provider_1.Provider.toAmino(message.provider) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProviderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
            value: exports.QueryProviderResponse.encode(message).finish()
        };
    }
};
