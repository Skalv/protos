//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolBatch, Params, SwapMsgState, DepositMsgState, WithdrawMsgState } from "./liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseQueryLiquidityPoolRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryLiquidityPoolRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryLiquidityPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolRequest",
            value: QueryLiquidityPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolResponse() {
    return {
        pool: Pool.fromPartial({})
    };
}
export const QueryLiquidityPoolResponse = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = Pool.decode(reader, reader.uint32());
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
        message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Pool.fromAmino(object.pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLiquidityPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolResponse",
            value: QueryLiquidityPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolByPoolCoinDenomRequest() {
    return {
        poolCoinDenom: ""
    };
}
export const QueryLiquidityPoolByPoolCoinDenomRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolCoinDenom !== "") {
            writer.uint32(10).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryLiquidityPoolByPoolCoinDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolByPoolCoinDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolByPoolCoinDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest",
            value: QueryLiquidityPoolByPoolCoinDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolByReserveAccRequest() {
    return {
        reserveAcc: ""
    };
}
export const QueryLiquidityPoolByReserveAccRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.reserveAcc !== "") {
            writer.uint32(10).string(message.reserveAcc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryLiquidityPoolByReserveAccRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolByReserveAccRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolByReserveAccRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest",
            value: QueryLiquidityPoolByReserveAccRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolBatchRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryLiquidityPoolBatchRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryLiquidityPoolBatchRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolBatchRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolBatchRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest",
            value: QueryLiquidityPoolBatchRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolBatchResponse() {
    return {
        batch: PoolBatch.fromPartial({})
    };
}
export const QueryLiquidityPoolBatchResponse = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batch !== undefined) {
            PoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = PoolBatch.decode(reader, reader.uint32());
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
        message.batch = object.batch !== undefined && object.batch !== null ? PoolBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolBatchResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = PoolBatch.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? PoolBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLiquidityPoolBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolBatchResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse",
            value: QueryLiquidityPoolBatchResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryLiquidityPoolsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolsRequest();
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
        const message = createBaseQueryLiquidityPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolsRequest();
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
        return QueryLiquidityPoolsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsRequest",
            value: QueryLiquidityPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidityPoolsResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
export const QueryLiquidityPoolsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidityPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(Pool.decode(reader, reader.uint32()));
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
        const message = createBaseQueryLiquidityPoolsResponse();
        message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidityPoolsResponse();
        message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLiquidityPoolsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLiquidityPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLiquidityPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsResponse",
            value: QueryLiquidityPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryParamsRequest",
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
            typeUrl: "/liquidity.v1beta1.QueryParamsRequest",
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
    typeUrl: "/liquidity.v1beta1.QueryParamsResponse",
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
            typeUrl: "/liquidity.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined
    };
}
export const QueryPoolBatchSwapMsgsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchSwapMsgsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchSwapMsgsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchSwapMsgsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchSwapMsgsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest",
            value: QueryPoolBatchSwapMsgsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgRequest() {
    return {
        poolId: BigInt(0),
        msgIndex: BigInt(0)
    };
}
export const QueryPoolBatchSwapMsgRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolBatchSwapMsgRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchSwapMsgRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchSwapMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest",
            value: QueryPoolBatchSwapMsgRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgsResponse() {
    return {
        swaps: [],
        pagination: undefined
    };
}
export const QueryPoolBatchSwapMsgsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.swaps) {
            SwapMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swaps.push(SwapMsgState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        message.swaps = object.swaps?.map(e => SwapMsgState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchSwapMsgsResponse();
        message.swaps = object.swaps?.map(e => SwapMsgState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.swaps) {
            obj.swaps = message.swaps.map(e => e ? SwapMsgState.toAmino(e) : undefined);
        }
        else {
            obj.swaps = message.swaps;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchSwapMsgsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchSwapMsgsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchSwapMsgsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse",
            value: QueryPoolBatchSwapMsgsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchSwapMsgResponse() {
    return {
        swap: SwapMsgState.fromPartial({})
    };
}
export const QueryPoolBatchSwapMsgResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.swap !== undefined) {
            SwapMsgState.encode(message.swap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchSwapMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swap = SwapMsgState.decode(reader, reader.uint32());
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
        message.swap = object.swap !== undefined && object.swap !== null ? SwapMsgState.fromPartial(object.swap) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchSwapMsgResponse();
        if (object.swap !== undefined && object.swap !== null) {
            message.swap = SwapMsgState.fromAmino(object.swap);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap = message.swap ? SwapMsgState.toAmino(message.swap) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchSwapMsgResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchSwapMsgResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchSwapMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse",
            value: QueryPoolBatchSwapMsgResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined
    };
}
export const QueryPoolBatchDepositMsgsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchDepositMsgsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchDepositMsgsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchDepositMsgsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchDepositMsgsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest",
            value: QueryPoolBatchDepositMsgsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgRequest() {
    return {
        poolId: BigInt(0),
        msgIndex: BigInt(0)
    };
}
export const QueryPoolBatchDepositMsgRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolBatchDepositMsgRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchDepositMsgRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchDepositMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest",
            value: QueryPoolBatchDepositMsgRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgsResponse() {
    return {
        deposits: [],
        pagination: undefined
    };
}
export const QueryPoolBatchDepositMsgsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.deposits) {
            DepositMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(DepositMsgState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        message.deposits = object.deposits?.map(e => DepositMsgState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchDepositMsgsResponse();
        message.deposits = object.deposits?.map(e => DepositMsgState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? DepositMsgState.toAmino(e) : undefined);
        }
        else {
            obj.deposits = message.deposits;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchDepositMsgsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchDepositMsgsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchDepositMsgsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse",
            value: QueryPoolBatchDepositMsgsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchDepositMsgResponse() {
    return {
        deposit: DepositMsgState.fromPartial({})
    };
}
export const QueryPoolBatchDepositMsgResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.deposit !== undefined) {
            DepositMsgState.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchDepositMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = DepositMsgState.decode(reader, reader.uint32());
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
        message.deposit = object.deposit !== undefined && object.deposit !== null ? DepositMsgState.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchDepositMsgResponse();
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = DepositMsgState.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? DepositMsgState.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchDepositMsgResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchDepositMsgResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchDepositMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse",
            value: QueryPoolBatchDepositMsgResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgsRequest() {
    return {
        poolId: BigInt(0),
        pagination: undefined
    };
}
export const QueryPoolBatchWithdrawMsgsRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
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
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchWithdrawMsgsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchWithdrawMsgsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchWithdrawMsgsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest",
            value: QueryPoolBatchWithdrawMsgsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgRequest() {
    return {
        poolId: BigInt(0),
        msgIndex: BigInt(0)
    };
}
export const QueryPoolBatchWithdrawMsgRequest = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolBatchWithdrawMsgRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchWithdrawMsgRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchWithdrawMsgRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest",
            value: QueryPoolBatchWithdrawMsgRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgsResponse() {
    return {
        withdraws: [],
        pagination: undefined
    };
}
export const QueryPoolBatchWithdrawMsgsResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.withdraws) {
            WithdrawMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraws.push(WithdrawMsgState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        message.withdraws = object.withdraws?.map(e => WithdrawMsgState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
        message.withdraws = object.withdraws?.map(e => WithdrawMsgState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.withdraws) {
            obj.withdraws = message.withdraws.map(e => e ? WithdrawMsgState.toAmino(e) : undefined);
        }
        else {
            obj.withdraws = message.withdraws;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchWithdrawMsgsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchWithdrawMsgsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchWithdrawMsgsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse",
            value: QueryPoolBatchWithdrawMsgsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolBatchWithdrawMsgResponse() {
    return {
        withdraw: WithdrawMsgState.fromPartial({})
    };
}
export const QueryPoolBatchWithdrawMsgResponse = {
    typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.withdraw !== undefined) {
            WithdrawMsgState.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolBatchWithdrawMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraw = WithdrawMsgState.decode(reader, reader.uint32());
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
        message.withdraw = object.withdraw !== undefined && object.withdraw !== null ? WithdrawMsgState.fromPartial(object.withdraw) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolBatchWithdrawMsgResponse();
        if (object.withdraw !== undefined && object.withdraw !== null) {
            message.withdraw = WithdrawMsgState.fromAmino(object.withdraw);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.withdraw = message.withdraw ? WithdrawMsgState.toAmino(message.withdraw) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolBatchWithdrawMsgResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPoolBatchWithdrawMsgResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolBatchWithdrawMsgResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse",
            value: QueryPoolBatchWithdrawMsgResponse.encode(message).finish()
        };
    }
};
