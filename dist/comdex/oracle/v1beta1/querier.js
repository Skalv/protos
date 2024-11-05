"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryMarketResponse = exports.QueryMarketRequest = exports.QueryMarketsResponse = exports.QueryMarketsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const oracle_1 = require("./oracle");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
function createBaseQueryMarketsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryMarketsRequest = {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsRequest();
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
        const message = createBaseQueryMarketsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketsRequest();
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
        return exports.QueryMarketsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.QueryMarketsRequest",
            value: exports.QueryMarketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMarketsResponse() {
    return {
        markets: [],
        pagination: undefined
    };
}
exports.QueryMarketsResponse = {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.markets) {
            oracle_1.Market.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(oracle_1.Market.decode(reader, reader.uint32()));
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
        const message = createBaseQueryMarketsResponse();
        message.markets = object.markets?.map(e => oracle_1.Market.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketsResponse();
        message.markets = object.markets?.map(e => oracle_1.Market.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? oracle_1.Market.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.QueryMarketsResponse",
            value: exports.QueryMarketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMarketRequest() {
    return {
        symbol: ""
    };
}
exports.QueryMarketRequest = {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketRequest();
        message.symbol = object.symbol ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketRequest();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.QueryMarketRequest",
            value: exports.QueryMarketRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMarketResponse() {
    return {
        market: oracle_1.Market.fromPartial({})
    };
}
exports.QueryMarketResponse = {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            oracle_1.Market.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = oracle_1.Market.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketResponse();
        message.market = object.market !== undefined && object.market !== null ? oracle_1.Market.fromPartial(object.market) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketResponse();
        if (object.market !== undefined && object.market !== null) {
            message.market = oracle_1.Market.fromAmino(object.market);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market = message.market ? oracle_1.Market.toAmino(message.market) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.QueryMarketResponse",
            value: exports.QueryMarketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/comdex.oracle.v1beta1.QueryParamsRequest",
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
            typeUrl: "/comdex.oracle.v1beta1.QueryParamsRequest",
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
    typeUrl: "/comdex.oracle.v1beta1.QueryParamsResponse",
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
            typeUrl: "/comdex.oracle.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
