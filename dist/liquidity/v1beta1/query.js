"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPoolBatchWithdrawMsgResponse = exports.QueryPoolBatchWithdrawMsgsResponse = exports.QueryPoolBatchWithdrawMsgRequest = exports.QueryPoolBatchWithdrawMsgsRequest = exports.QueryPoolBatchDepositMsgResponse = exports.QueryPoolBatchDepositMsgsResponse = exports.QueryPoolBatchDepositMsgRequest = exports.QueryPoolBatchDepositMsgsRequest = exports.QueryPoolBatchSwapMsgResponse = exports.QueryPoolBatchSwapMsgsResponse = exports.QueryPoolBatchSwapMsgRequest = exports.QueryPoolBatchSwapMsgsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryLiquidityPoolsResponse = exports.QueryLiquidityPoolsRequest = exports.QueryLiquidityPoolBatchResponse = exports.QueryLiquidityPoolBatchRequest = exports.QueryLiquidityPoolByReserveAccRequest = exports.QueryLiquidityPoolByPoolCoinDenomRequest = exports.QueryLiquidityPoolResponse = exports.QueryLiquidityPoolRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const liquidity_1 = require("./liquidity");
const binary_1 = require("../../binary");
function createBaseQueryLiquidityPoolRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryLiquidityPoolRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidityPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolRequest",
            value: exports.QueryLiquidityPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolResponse() {
    return {
        pool: liquidity_1.Pool.fromPartial({})
    };
}
exports.QueryLiquidityPoolResponse = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            liquidity_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = liquidity_1.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? liquidity_1.Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = liquidity_1.Pool.fromAmino(object.pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? liquidity_1.Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidityPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolResponse",
            value: exports.QueryLiquidityPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolByPoolCoinDenomRequest() {
    return {
        poolCoinDenom: ""
    };
}
exports.QueryLiquidityPoolByPoolCoinDenomRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolCoinDenom !== "") {
            writer.uint32(10).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCoinDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
        message.poolCoinDenom = object.poolCoinDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
        if (object.pool_coin_denom !== undefined && object.pool_coin_denom !== null) {
            message.poolCoinDenom = object.pool_coin_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_coin_denom = message.poolCoinDenom === "" ? undefined : message.poolCoinDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidityPoolByPoolCoinDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolByPoolCoinDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolByPoolCoinDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest",
            value: exports.QueryLiquidityPoolByPoolCoinDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolByReserveAccRequest() {
    return {
        reserveAcc: ""
    };
}
exports.QueryLiquidityPoolByReserveAccRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.reserveAcc !== "") {
            writer.uint32(10).string(message.reserveAcc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolByReserveAccRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserveAcc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolByReserveAccRequest();
        message.reserveAcc = object.reserveAcc ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolByReserveAccRequest();
        if (object.reserve_acc !== undefined && object.reserve_acc !== null) {
            message.reserveAcc = object.reserve_acc;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.reserve_acc = message.reserveAcc === "" ? undefined : message.reserveAcc;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidityPoolByReserveAccRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolByReserveAccRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolByReserveAccRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest",
            value: exports.QueryLiquidityPoolByReserveAccRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolBatchRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryLiquidityPoolBatchRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolBatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolBatchRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolBatchRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidityPoolBatchRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolBatchRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolBatchRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest",
            value: exports.QueryLiquidityPoolBatchRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolBatchResponse() {
    return {
        batch: liquidity_1.PoolBatch.fromPartial({})
    };
}
exports.QueryLiquidityPoolBatchResponse = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batch !== undefined) {
            liquidity_1.PoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = liquidity_1.PoolBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidityPoolBatchResponse();
        message.batch = object.batch !== undefined && object.batch !== null ? liquidity_1.PoolBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolBatchResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = liquidity_1.PoolBatch.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? liquidity_1.PoolBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidityPoolBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse",
            value: exports.QueryLiquidityPoolBatchResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryLiquidityPoolsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolsRequest();
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
        const message = createBaseQueryLiquidityPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolsRequest();
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
        return exports.QueryLiquidityPoolsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsRequest",
            value: exports.QueryLiquidityPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolsResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
exports.QueryLiquidityPoolsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            liquidity_1.Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(liquidity_1.Pool.decode(reader, reader.uint32()));
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
        const message = createBaseQueryLiquidityPoolsResponse();
        message.pools = object.pools?.map(e => liquidity_1.Pool.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolsResponse();
        message.pools = object.pools?.map(e => liquidity_1.Pool.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? liquidity_1.Pool.toAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidityPoolsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidityPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidityPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsResponse",
            value: exports.QueryLiquidityPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryParamsRequest",
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
            typeUrl: "/liquidity.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: liquidity_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            liquidity_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = liquidity_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? liquidity_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = liquidity_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? liquidity_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/liquidity.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryPoolBatchSwapMsgsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchSwapMsgsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchSwapMsgsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchSwapMsgsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest",
            value: exports.QueryPoolBatchSwapMsgsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgRequest() {
    return {
        poolId: BigInt(0),
        msgIndex: BigInt(0)
    };
}
exports.QueryPoolBatchSwapMsgRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchSwapMsgRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchSwapMsgRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = BigInt(object.msg_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchSwapMsgRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchSwapMsgRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchSwapMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest",
            value: exports.QueryPoolBatchSwapMsgRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgsResponse() {
    return {
        swaps: [],
        pagination: undefined
    };
}
exports.QueryPoolBatchSwapMsgsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.swaps) {
            liquidity_1.SwapMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swaps.push(liquidity_1.SwapMsgState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        message.swaps = object.swaps?.map(e => liquidity_1.SwapMsgState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        message.swaps = object.swaps?.map(e => liquidity_1.SwapMsgState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.swaps) {
            obj.swaps = message.swaps.map(e => e ? liquidity_1.SwapMsgState.toAmino(e) : undefined);
        }
        else {
            obj.swaps = message.swaps;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchSwapMsgsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchSwapMsgsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchSwapMsgsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse",
            value: exports.QueryPoolBatchSwapMsgsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgResponse() {
    return {
        swap: liquidity_1.SwapMsgState.fromPartial({})
    };
}
exports.QueryPoolBatchSwapMsgResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swap !== undefined) {
            liquidity_1.SwapMsgState.encode(message.swap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swap = liquidity_1.SwapMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchSwapMsgResponse();
        message.swap = object.swap !== undefined && object.swap !== null ? liquidity_1.SwapMsgState.fromPartial(object.swap) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchSwapMsgResponse();
        if (object.swap !== undefined && object.swap !== null) {
            message.swap = liquidity_1.SwapMsgState.fromAmino(object.swap);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap = message.swap ? liquidity_1.SwapMsgState.toAmino(message.swap) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchSwapMsgResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchSwapMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchSwapMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse",
            value: exports.QueryPoolBatchSwapMsgResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryPoolBatchDepositMsgsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchDepositMsgsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchDepositMsgsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchDepositMsgsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest",
            value: exports.QueryPoolBatchDepositMsgsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgRequest() {
    return {
        poolId: BigInt(0),
        msgIndex: BigInt(0)
    };
}
exports.QueryPoolBatchDepositMsgRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchDepositMsgRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchDepositMsgRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = BigInt(object.msg_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchDepositMsgRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchDepositMsgRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchDepositMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest",
            value: exports.QueryPoolBatchDepositMsgRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgsResponse() {
    return {
        deposits: [],
        pagination: undefined
    };
}
exports.QueryPoolBatchDepositMsgsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.deposits) {
            liquidity_1.DepositMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(liquidity_1.DepositMsgState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        message.deposits = object.deposits?.map(e => liquidity_1.DepositMsgState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        message.deposits = object.deposits?.map(e => liquidity_1.DepositMsgState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? liquidity_1.DepositMsgState.toAmino(e) : undefined);
        }
        else {
            obj.deposits = message.deposits;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchDepositMsgsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchDepositMsgsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchDepositMsgsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse",
            value: exports.QueryPoolBatchDepositMsgsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgResponse() {
    return {
        deposit: liquidity_1.DepositMsgState.fromPartial({})
    };
}
exports.QueryPoolBatchDepositMsgResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deposit !== undefined) {
            liquidity_1.DepositMsgState.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = liquidity_1.DepositMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchDepositMsgResponse();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? liquidity_1.DepositMsgState.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchDepositMsgResponse();
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = liquidity_1.DepositMsgState.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? liquidity_1.DepositMsgState.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchDepositMsgResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchDepositMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchDepositMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse",
            value: exports.QueryPoolBatchDepositMsgResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryPoolBatchWithdrawMsgsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchWithdrawMsgsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchWithdrawMsgsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchWithdrawMsgsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest",
            value: exports.QueryPoolBatchWithdrawMsgsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgRequest() {
    return {
        poolId: BigInt(0),
        msgIndex: BigInt(0)
    };
}
exports.QueryPoolBatchWithdrawMsgRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = BigInt(object.msg_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchWithdrawMsgRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchWithdrawMsgRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchWithdrawMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest",
            value: exports.QueryPoolBatchWithdrawMsgRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgsResponse() {
    return {
        withdraws: [],
        pagination: undefined
    };
}
exports.QueryPoolBatchWithdrawMsgsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.withdraws) {
            liquidity_1.WithdrawMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraws.push(liquidity_1.WithdrawMsgState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        message.withdraws = object.withdraws?.map(e => liquidity_1.WithdrawMsgState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        message.withdraws = object.withdraws?.map(e => liquidity_1.WithdrawMsgState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.withdraws) {
            obj.withdraws = message.withdraws.map(e => e ? liquidity_1.WithdrawMsgState.toAmino(e) : undefined);
        }
        else {
            obj.withdraws = message.withdraws;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchWithdrawMsgsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchWithdrawMsgsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchWithdrawMsgsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse",
            value: exports.QueryPoolBatchWithdrawMsgsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgResponse() {
    return {
        withdraw: liquidity_1.WithdrawMsgState.fromPartial({})
    };
}
exports.QueryPoolBatchWithdrawMsgResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.withdraw !== undefined) {
            liquidity_1.WithdrawMsgState.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraw = liquidity_1.WithdrawMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgResponse();
        message.withdraw = object.withdraw !== undefined && object.withdraw !== null ? liquidity_1.WithdrawMsgState.fromPartial(object.withdraw) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgResponse();
        if (object.withdraw !== undefined && object.withdraw !== null) {
            message.withdraw = liquidity_1.WithdrawMsgState.fromAmino(object.withdraw);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.withdraw = message.withdraw ? liquidity_1.WithdrawMsgState.toAmino(message.withdraw) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolBatchWithdrawMsgResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolBatchWithdrawMsgResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolBatchWithdrawMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse",
            value: exports.QueryPoolBatchWithdrawMsgResponse.encode(message).finish()
        };
    }
};
