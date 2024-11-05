"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllSupplychainResponse = exports.QueryAllSupplychainRequest = exports.QueryGetSupplychainResponse = exports.QueryGetSupplychainRequest = exports.QueryAllBitcannaidResponse = exports.QueryAllBitcannaidRequest = exports.QueryGetBitcannaidResponse = exports.QueryGetBitcannaidRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const bitcannaid_1 = require("./bitcannaid");
const supplychain_1 = require("./supplychain");
const binary_1 = require("../binary");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetBitcannaidRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryGetBitcannaidRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetBitcannaidRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetBitcannaidRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetBitcannaidRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest",
            value: exports.QueryGetBitcannaidRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetBitcannaidResponse() {
    return {
        bitcannaid: bitcannaid_1.Bitcannaid.fromPartial({})
    };
}
exports.QueryGetBitcannaidResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bitcannaid !== undefined) {
            bitcannaid_1.Bitcannaid.encode(message.bitcannaid, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBitcannaidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitcannaid = bitcannaid_1.Bitcannaid.decode(reader, reader.uint32());
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
        message.bitcannaid = object.bitcannaid !== undefined && object.bitcannaid !== null ? bitcannaid_1.Bitcannaid.fromPartial(object.bitcannaid) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetBitcannaidResponse();
        if (object.Bitcannaid !== undefined && object.Bitcannaid !== null) {
            message.bitcannaid = bitcannaid_1.Bitcannaid.fromAmino(object.Bitcannaid);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.Bitcannaid = message.bitcannaid ? bitcannaid_1.Bitcannaid.toAmino(message.bitcannaid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetBitcannaidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetBitcannaidResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetBitcannaidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse",
            value: exports.QueryGetBitcannaidResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllBitcannaidRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllBitcannaidRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBitcannaidRequest();
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
        const message = createBaseQueryAllBitcannaidRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBitcannaidRequest();
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
        return exports.QueryAllBitcannaidRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllBitcannaidRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBitcannaidRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest",
            value: exports.QueryAllBitcannaidRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllBitcannaidResponse() {
    return {
        bitcannaid: [],
        pagination: undefined
    };
}
exports.QueryAllBitcannaidResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.bitcannaid) {
            bitcannaid_1.Bitcannaid.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBitcannaidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitcannaid.push(bitcannaid_1.Bitcannaid.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllBitcannaidResponse();
        message.bitcannaid = object.bitcannaid?.map(e => bitcannaid_1.Bitcannaid.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllBitcannaidResponse();
        message.bitcannaid = object.Bitcannaid?.map(e => bitcannaid_1.Bitcannaid.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.bitcannaid) {
            obj.Bitcannaid = message.bitcannaid.map(e => e ? bitcannaid_1.Bitcannaid.toAmino(e) : undefined);
        }
        else {
            obj.Bitcannaid = message.bitcannaid;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllBitcannaidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllBitcannaidResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBitcannaidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse",
            value: exports.QueryAllBitcannaidResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetSupplychainRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryGetSupplychainRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetSupplychainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetSupplychainRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetSupplychainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest",
            value: exports.QueryGetSupplychainRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetSupplychainResponse() {
    return {
        supplychain: supplychain_1.Supplychain.fromPartial({})
    };
}
exports.QueryGetSupplychainResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.supplychain !== undefined) {
            supplychain_1.Supplychain.encode(message.supplychain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetSupplychainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplychain = supplychain_1.Supplychain.decode(reader, reader.uint32());
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
        message.supplychain = object.supplychain !== undefined && object.supplychain !== null ? supplychain_1.Supplychain.fromPartial(object.supplychain) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetSupplychainResponse();
        if (object.Supplychain !== undefined && object.Supplychain !== null) {
            message.supplychain = supplychain_1.Supplychain.fromAmino(object.Supplychain);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.Supplychain = message.supplychain ? supplychain_1.Supplychain.toAmino(message.supplychain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetSupplychainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetSupplychainResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetSupplychainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse",
            value: exports.QueryGetSupplychainResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllSupplychainRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllSupplychainRequest = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllSupplychainRequest();
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
        const message = createBaseQueryAllSupplychainRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllSupplychainRequest();
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
        return exports.QueryAllSupplychainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllSupplychainRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllSupplychainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest",
            value: exports.QueryAllSupplychainRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllSupplychainResponse() {
    return {
        supplychain: [],
        pagination: undefined
    };
}
exports.QueryAllSupplychainResponse = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.supplychain) {
            supplychain_1.Supplychain.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllSupplychainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplychain.push(supplychain_1.Supplychain.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllSupplychainResponse();
        message.supplychain = object.supplychain?.map(e => supplychain_1.Supplychain.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllSupplychainResponse();
        message.supplychain = object.Supplychain?.map(e => supplychain_1.Supplychain.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.supplychain) {
            obj.Supplychain = message.supplychain.map(e => e ? supplychain_1.Supplychain.toAmino(e) : undefined);
        }
        else {
            obj.Supplychain = message.supplychain;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllSupplychainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllSupplychainResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllSupplychainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse",
            value: exports.QueryAllSupplychainResponse.encode(message).finish()
        };
    }
};
