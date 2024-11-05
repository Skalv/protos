//@ts-nocheck
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import { BinaryReader, BinaryWriter } from "../binary";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetBitcannaidRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryGetBitcannaidRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBitcannaidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetBitcannaidRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetBitcannaidRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetBitcannaidRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetBitcannaidRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetBitcannaidRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest",
            value: QueryGetBitcannaidRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetBitcannaidResponse() {
    return {
        bitcannaid: Bitcannaid.fromPartial({})
    };
}
export const QueryGetBitcannaidResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bitcannaid !== undefined) {
            Bitcannaid.encode(message.bitcannaid, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBitcannaidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitcannaid = Bitcannaid.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetBitcannaidResponse();
        message.bitcannaid = object.bitcannaid !== undefined && object.bitcannaid !== null ? Bitcannaid.fromPartial(object.bitcannaid) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetBitcannaidResponse();
        if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
            message.bitcannaid = Bitcannaid.fromAmino(object.Bitcannaid);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.Bitcannaid = message.bitcannaid ? Bitcannaid.toAmino(message.bitcannaid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetBitcannaidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetBitcannaidResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetBitcannaidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse",
            value: QueryGetBitcannaidResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllBitcannaidRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllBitcannaidRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBitcannaidRequest();
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
        const message = createBaseQueryAllBitcannaidRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBitcannaidRequest();
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
        return QueryAllBitcannaidRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllBitcannaidRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllBitcannaidRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest",
            value: QueryAllBitcannaidRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllBitcannaidResponse() {
    return {
        bitcannaid: [],
        pagination: undefined
    };
}
export const QueryAllBitcannaidResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.bitcannaid) {
            Bitcannaid.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBitcannaidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitcannaid.push(Bitcannaid.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllBitcannaidResponse();
        message.bitcannaid = object.bitcannaid?.map(e => Bitcannaid.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBitcannaidResponse();
        message.bitcannaid = object.Bitcannaid?.map(e => Bitcannaid.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.bitcannaid) {
            obj.Bitcannaid = message.bitcannaid.map(e => e ? Bitcannaid.toAmino(e) : undefined);
        }
        else {
            obj.Bitcannaid = message.bitcannaid;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllBitcannaidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllBitcannaidResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllBitcannaidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse",
            value: QueryAllBitcannaidResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetSupplychainRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryGetSupplychainRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetSupplychainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetSupplychainRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetSupplychainRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetSupplychainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetSupplychainRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetSupplychainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest",
            value: QueryGetSupplychainRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetSupplychainResponse() {
    return {
        supplychain: Supplychain.fromPartial({})
    };
}
export const QueryGetSupplychainResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.supplychain !== undefined) {
            Supplychain.encode(message.supplychain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetSupplychainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplychain = Supplychain.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetSupplychainResponse();
        message.supplychain = object.supplychain !== undefined && object.supplychain !== null ? Supplychain.fromPartial(object.supplychain) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetSupplychainResponse();
        if (object.Supplychain !== undefined && object.Supplychain !== null) {
            message.supplychain = Supplychain.fromAmino(object.Supplychain);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.Supplychain = message.supplychain ? Supplychain.toAmino(message.supplychain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetSupplychainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetSupplychainResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetSupplychainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse",
            value: QueryGetSupplychainResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllSupplychainRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllSupplychainRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllSupplychainRequest();
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
        const message = createBaseQueryAllSupplychainRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllSupplychainRequest();
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
        return QueryAllSupplychainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllSupplychainRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllSupplychainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest",
            value: QueryAllSupplychainRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllSupplychainResponse() {
    return {
        supplychain: [],
        pagination: undefined
    };
}
export const QueryAllSupplychainResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.supplychain) {
            Supplychain.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllSupplychainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplychain.push(Supplychain.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllSupplychainResponse();
        message.supplychain = object.supplychain?.map(e => Supplychain.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllSupplychainResponse();
        message.supplychain = object.Supplychain?.map(e => Supplychain.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.supplychain) {
            obj.Supplychain = message.supplychain.map(e => e ? Supplychain.toAmino(e) : undefined);
        }
        else {
            obj.Supplychain = message.supplychain;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllSupplychainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllSupplychainResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllSupplychainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse",
            value: QueryAllSupplychainResponse.encode(message).finish()
        };
    }
};
