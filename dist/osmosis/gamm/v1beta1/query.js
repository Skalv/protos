"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolI_ToAmino = exports.PoolI_FromAmino = exports.PoolI_InterfaceDecoder = exports.QueryTotalLiquidityResponse = exports.QueryTotalLiquidityRequest = exports.QuerySwapExactAmountOutResponse = exports.QuerySwapExactAmountOutRequest = exports.QuerySwapExactAmountInResponse = exports.QuerySwapExactAmountInRequest = exports.QuerySpotPriceResponse = exports.QueryPoolsWithFilterResponse = exports.QueryPoolsWithFilterRequest = exports.QuerySpotPriceRequest = exports.QueryCalcJoinPoolNoSwapSharesResponse = exports.QueryCalcJoinPoolNoSwapSharesRequest = exports.QueryTotalSharesResponse = exports.QueryTotalSharesRequest = exports.QueryTotalPoolLiquidityResponse = exports.QueryTotalPoolLiquidityRequest = exports.QueryPoolParamsResponse = exports.QueryPoolParamsRequest = exports.QueryCalcExitPoolCoinsFromSharesResponse = exports.QueryCalcExitPoolCoinsFromSharesRequest = exports.QueryCalcJoinPoolSharesResponse = exports.QueryCalcJoinPoolSharesRequest = exports.QueryPoolTypeResponse = exports.QueryPoolTypeRequest = exports.QueryNumPoolsResponse = exports.QueryNumPoolsRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const tx_1 = require("./tx");
const any_1 = require("../../../google/protobuf/any");
const balancerPool_1 = require("../pool-models/balancer/balancerPool");
const stableswap_pool_1 = require("../pool-models/stableswap/stableswap_pool");
const binary_1 = require("../../../binary");
function createBaseQueryPoolRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryPoolRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolRequest();
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
        return exports.QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-request",
            value: exports.QueryPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
            value: exports.QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: undefined
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            any_1.Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = (0, exports.PoolI_InterfaceDecoder)(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? any_1.Any.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = (0, exports.PoolI_FromAmino)(object.pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? (0, exports.PoolI_ToAmino)(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-response",
            value: exports.QueryPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
            value: exports.QueryPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
        const message = createBaseQueryPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsRequest();
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
        return exports.QueryPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-request",
            value: exports.QueryPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
            value: exports.QueryPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
exports.QueryPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(any_1.Any.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => any_1.Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => (0, exports.PoolI_FromAmino)(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? (0, exports.PoolI_ToAmino)(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-response",
            value: exports.QueryPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
            value: exports.QueryPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsRequest() {
    return {};
}
exports.QueryNumPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNumPoolsRequest();
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
        const message = createBaseQueryNumPoolsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryNumPoolsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-request",
            value: exports.QueryNumPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
            value: exports.QueryNumPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsResponse() {
    return {
        numPools: BigInt(0)
    };
}
exports.QueryNumPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numPools !== BigInt(0)) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNumPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numPools = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryNumPoolsResponse();
        message.numPools = object.numPools !== undefined && object.numPools !== null ? BigInt(object.numPools.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNumPoolsResponse();
        if (object.num_pools !== undefined && object.num_pools !== null) {
            message.numPools = BigInt(object.num_pools);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.num_pools = message.numPools !== BigInt(0) ? (message.numPools?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-response",
            value: exports.QueryNumPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
            value: exports.QueryNumPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryPoolTypeRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolTypeRequest();
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
        const message = createBaseQueryPoolTypeRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolTypeRequest();
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
        return exports.QueryPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-request",
            value: exports.QueryPoolTypeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
            value: exports.QueryPoolTypeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeResponse() {
    return {
        poolType: ""
    };
}
exports.QueryPoolTypeResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolType !== "") {
            writer.uint32(10).string(message.poolType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolTypeResponse();
        message.poolType = object.poolType ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolTypeResponse();
        if (object.pool_type !== undefined && object.pool_type !== null) {
            message.poolType = object.pool_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_type = message.poolType === "" ? undefined : message.poolType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-response",
            value: exports.QueryPoolTypeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
            value: exports.QueryPoolTypeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: []
    };
}
exports.QueryCalcJoinPoolSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokensIn = object.tokensIn?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-request",
            value: exports.QueryCalcJoinPoolSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
            value: exports.QueryCalcJoinPoolSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesResponse() {
    return {
        shareOutAmount: "",
        tokensOut: []
    };
}
exports.QueryCalcJoinPoolSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokensOut = object.tokensOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokensOut = object.tokens_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-response",
            value: exports.QueryCalcJoinPoolSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
            value: exports.QueryCalcJoinPoolSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
    return {
        poolId: BigInt(0),
        shareInAmount: ""
    };
}
exports.QueryCalcExitPoolCoinsFromSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(18).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.shareInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.shareInAmount = object.shareInAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request",
            value: exports.QueryCalcExitPoolCoinsFromSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
            value: exports.QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
    return {
        tokensOut: []
    };
}
exports.QueryCalcExitPoolCoinsFromSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokensOut = object.tokensOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response",
            value: exports.QueryCalcExitPoolCoinsFromSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
            value: exports.QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryPoolParamsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsRequest();
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
        const message = createBaseQueryPoolParamsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolParamsRequest();
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
        return exports.QueryPoolParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-request",
            value: exports.QueryPoolParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
            value: exports.QueryPoolParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryPoolParamsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            any_1.Any.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? any_1.Any.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = any_1.Any.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? any_1.Any.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-response",
            value: exports.QueryPoolParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
            value: exports.QueryPoolParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryTotalPoolLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityRequest();
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
        const message = createBaseQueryTotalPoolLiquidityRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalPoolLiquidityRequest();
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
        return exports.QueryTotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-request",
            value: exports.QueryTotalPoolLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
            value: exports.QueryTotalPoolLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityResponse() {
    return {
        liquidity: []
    };
}
exports.QueryTotalPoolLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-response",
            value: exports.QueryTotalPoolLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
            value: exports.QueryTotalPoolLiquidityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryTotalSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesRequest();
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
        const message = createBaseQueryTotalSharesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSharesRequest();
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
        return exports.QueryTotalSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-request",
            value: exports.QueryTotalSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
            value: exports.QueryTotalSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesResponse() {
    return {
        totalShares: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalShares !== undefined) {
            coin_1.Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSharesResponse();
        message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? coin_1.Coin.fromPartial(object.totalShares) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSharesResponse();
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = coin_1.Coin.fromAmino(object.total_shares);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_shares = message.totalShares ? coin_1.Coin.toAmino(message.totalShares) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-response",
            value: exports.QueryTotalSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
            value: exports.QueryTotalSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: []
    };
}
exports.QueryCalcJoinPoolNoSwapSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokensIn = object.tokensIn?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request",
            value: exports.QueryCalcJoinPoolNoSwapSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
            value: exports.QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
    return {
        tokensOut: [],
        sharesOut: ""
    };
}
exports.QueryCalcJoinPoolNoSwapSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharesOut !== "") {
            writer.uint32(18).string(message.sharesOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sharesOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokensOut = object.tokensOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.sharesOut = object.sharesOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.shares_out !== undefined && object.shares_out !== null) {
            message.sharesOut = object.shares_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        obj.shares_out = message.sharesOut === "" ? undefined : message.sharesOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response",
            value: exports.QueryCalcJoinPoolNoSwapSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
            value: exports.QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: "",
        quoteAssetDenom: ""
    };
}
exports.QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAssetDenom !== "") {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        if (message.quoteAssetDenom !== "") {
            writer.uint32(26).string(message.quoteAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                case 3:
                    message.quoteAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.baseAssetDenom = object.baseAssetDenom ?? "";
        message.quoteAssetDenom = object.quoteAssetDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
            message.baseAssetDenom = object.base_asset_denom;
        }
        if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
            message.quoteAssetDenom = object.quote_asset_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
        obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-request",
            value: exports.QuerySpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
            value: exports.QuerySpotPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsWithFilterRequest() {
    return {
        minLiquidity: [],
        poolType: "",
        pagination: undefined
    };
}
exports.QueryPoolsWithFilterRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.minLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolType !== "") {
            writer.uint32(18).string(message.poolType);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.poolType = reader.string();
                    break;
                case 3:
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
        const message = createBaseQueryPoolsWithFilterRequest();
        message.minLiquidity = object.minLiquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.poolType = object.poolType ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsWithFilterRequest();
        message.minLiquidity = object.min_liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.pool_type !== undefined && object.pool_type !== null) {
            message.poolType = object.pool_type;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.minLiquidity) {
            obj.min_liquidity = message.minLiquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_liquidity = message.minLiquidity;
        }
        obj.pool_type = message.poolType === "" ? undefined : message.poolType;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsWithFilterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-request",
            value: exports.QueryPoolsWithFilterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsWithFilterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsWithFilterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
            value: exports.QueryPoolsWithFilterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsWithFilterResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
exports.QueryPoolsWithFilterResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(any_1.Any.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools = object.pools?.map(e => any_1.Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools = object.pools?.map(e => (0, exports.PoolI_FromAmino)(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? (0, exports.PoolI_ToAmino)(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsWithFilterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-response",
            value: exports.QueryPoolsWithFilterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsWithFilterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsWithFilterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
            value: exports.QueryPoolsWithFilterResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceResponse() {
    return {
        spotPrice: ""
    };
}
exports.QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceResponse();
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceResponse();
        if (object.spot_price !== undefined && object.spot_price !== null) {
            message.spotPrice = object.spot_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-response",
            value: exports.QuerySpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
            value: exports.QuerySpotPriceResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountInRequest() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: "",
        routes: []
    };
}
exports.QuerySwapExactAmountInRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(26).string(message.tokenIn);
        }
        for (const v of message.routes) {
            tx_1.SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenIn = reader.string();
                    break;
                case 4:
                    message.routes.push(tx_1.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountInRequest();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenIn = object.tokenIn ?? "";
        message.routes = object.routes?.map(e => tx_1.SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapExactAmountInRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        message.routes = object.routes?.map(e => tx_1.SwapAmountInRoute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-request",
            value: exports.QuerySwapExactAmountInRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
            value: exports.QuerySwapExactAmountInRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
exports.QuerySwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapExactAmountInResponse();
        if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-response",
            value: exports.QuerySwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
            value: exports.QuerySwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountOutRequest() {
    return {
        sender: "",
        poolId: BigInt(0),
        routes: [],
        tokenOut: ""
    };
}
exports.QuerySwapExactAmountOutRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.routes) {
            tx_1.SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOut !== "") {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountOutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.routes.push(tx_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountOutRequest();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.routes = object.routes?.map(e => tx_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapExactAmountOutRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.routes = object.routes?.map(e => tx_1.SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-request",
            value: exports.QuerySwapExactAmountOutRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
            value: exports.QuerySwapExactAmountOutRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
exports.QuerySwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySwapExactAmountOutResponse();
        if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-response",
            value: exports.QuerySwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
            value: exports.QuerySwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityRequest() {
    return {};
}
exports.QueryTotalLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityRequest();
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
        const message = createBaseQueryTotalLiquidityRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryTotalLiquidityRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-request",
            value: exports.QueryTotalLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
            value: exports.QueryTotalLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityResponse() {
    return {
        liquidity: []
    };
}
exports.QueryTotalLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-response",
            value: exports.QueryTotalLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
            value: exports.QueryTotalLiquidityResponse.encode(message).finish()
        };
    }
};
const PoolI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return balancerPool_1.Pool.decode(data.value);
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return stableswap_pool_1.Pool.decode(data.value);
        default:
            return data;
    }
};
exports.PoolI_InterfaceDecoder = PoolI_InterfaceDecoder;
const PoolI_FromAmino = (content) => {
    switch (content.type) {
        case "osmosis/gamm/BalancerPool":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.gamm.v1beta1.Pool",
                value: balancerPool_1.Pool.encode(balancerPool_1.Pool.fromPartial(balancerPool_1.Pool.fromAmino(content.value))).finish()
            });
        case "osmosis/gamm/StableswapPool":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
                value: stableswap_pool_1.Pool.encode(stableswap_pool_1.Pool.fromPartial(stableswap_pool_1.Pool.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.PoolI_FromAmino = PoolI_FromAmino;
const PoolI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return {
                type: "osmosis/gamm/BalancerPool",
                value: balancerPool_1.Pool.toAmino(balancerPool_1.Pool.decode(content.value, undefined))
            };
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return {
                type: "osmosis/gamm/StableswapPool",
                value: stableswap_pool_1.Pool.toAmino(stableswap_pool_1.Pool.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.PoolI_ToAmino = PoolI_ToAmino;
