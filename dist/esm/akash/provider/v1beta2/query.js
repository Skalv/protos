//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./provider";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryProvidersRequest() {
    return {
        pagination: undefined
    };
}
export const QueryProvidersRequest = {
    typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersRequest();
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
        const message = createBaseQueryProvidersRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProvidersRequest();
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
        return QueryProvidersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProvidersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProvidersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta2.QueryProvidersRequest",
            value: QueryProvidersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProvidersResponse() {
    return {
        providers: [],
        pagination: undefined
    };
}
export const QueryProvidersResponse = {
    typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
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
            typeUrl: "/akash.provider.v1beta2.QueryProvidersResponse",
            value: QueryProvidersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProviderRequest() {
    return {
        owner: ""
    };
}
export const QueryProviderRequest = {
    typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
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
            typeUrl: "/akash.provider.v1beta2.QueryProviderRequest",
            value: QueryProviderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderResponse() {
    return {
        provider: Provider.fromPartial({})
    };
}
export const QueryProviderResponse = {
    typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.provider !== undefined) {
            Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = Provider.decode(reader, reader.uint32());
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
        message.provider = object.provider !== undefined && object.provider !== null ? Provider.fromPartial(object.provider) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderResponse();
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = Provider.fromAmino(object.provider);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.provider = message.provider ? Provider.toAmino(message.provider) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProviderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProviderResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProviderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.provider.v1beta2.QueryProviderResponse",
            value: QueryProviderResponse.encode(message).finish()
        };
    }
};
