//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./tx";
import { Any } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryPoolRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryPoolRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-request",
            value: QueryPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
            value: QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: undefined
    };
}
export const QueryPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool !== undefined) {
            Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = PoolI_InterfaceDecoder(reader);
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
        message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = PoolI_FromAmino(object.pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? PoolI_ToAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-response",
            value: QueryPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
            value: QueryPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
        const message = createBaseQueryPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsRequest();
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
        return QueryPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-request",
            value: QueryPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
            value: QueryPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
export const QueryPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(Any.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => PoolI_FromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-response",
            value: QueryPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
            value: QueryPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsRequest() {
    return {};
}
export const QueryNumPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryNumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-request",
            value: QueryNumPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
            value: QueryNumPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsResponse() {
    return {
        numPools: BigInt(0)
    };
}
export const QueryNumPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.numPools !== BigInt(0)) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryNumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-response",
            value: QueryNumPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
            value: QueryNumPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryPoolTypeRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-request",
            value: QueryPoolTypeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
            value: QueryPoolTypeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeResponse() {
    return {
        poolType: ""
    };
}
export const QueryPoolTypeResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolType !== "") {
            writer.uint32(10).string(message.poolType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-response",
            value: QueryPoolTypeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
            value: QueryPoolTypeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: []
    };
}
export const QueryCalcJoinPoolSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-request",
            value: QueryCalcJoinPoolSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
            value: QueryCalcJoinPoolSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesResponse() {
    return {
        shareOutAmount: "",
        tokensOut: []
    };
}
export const QueryCalcJoinPoolSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokensOut) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokensOut.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-response",
            value: QueryCalcJoinPoolSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
            value: QueryCalcJoinPoolSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
    return {
        poolId: BigInt(0),
        shareInAmount: ""
    };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(18).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request",
            value: QueryCalcExitPoolCoinsFromSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
            value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
    return {
        tokensOut: []
    };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response",
            value: QueryCalcExitPoolCoinsFromSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
            value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryPoolParamsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPoolParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-request",
            value: QueryPoolParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
            value: QueryPoolParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsResponse() {
    return {
        params: undefined
    };
}
export const QueryPoolParamsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Any.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Any.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Any.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Any.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Any.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-response",
            value: QueryPoolParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
            value: QueryPoolParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryTotalPoolLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-request",
            value: QueryTotalPoolLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
            value: QueryTotalPoolLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityResponse() {
    return {
        liquidity: []
    };
}
export const QueryTotalPoolLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(Coin.decode(reader, reader.uint32()));
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
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-response",
            value: QueryTotalPoolLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
            value: QueryTotalPoolLiquidityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryTotalSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTotalSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-request",
            value: QueryTotalSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
            value: QueryTotalSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesResponse() {
    return {
        totalShares: Coin.fromPartial({})
    };
}
export const QueryTotalSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.totalShares !== undefined) {
            Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalShares = Coin.decode(reader, reader.uint32());
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
        message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalSharesResponse();
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = Coin.fromAmino(object.total_shares);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-response",
            value: QueryTotalSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
            value: QueryTotalSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
    return {
        poolId: BigInt(0),
        tokensIn: []
    };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.tokensIn) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokensIn.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        if (message.tokensIn) {
            obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = message.tokensIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request",
            value: QueryCalcJoinPoolNoSwapSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
            value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
    return {
        tokensOut: [],
        sharesOut: ""
    };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokensOut) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharesOut !== "") {
            writer.uint32(18).string(message.sharesOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokensOut.push(Coin.decode(reader, reader.uint32()));
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
        message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
        message.sharesOut = object.sharesOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
        if (object.shares_out !== undefined && object.shares_out !== null) {
            message.sharesOut = object.shares_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokensOut) {
            obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = message.tokensOut;
        }
        obj.shares_out = message.sharesOut === "" ? undefined : message.sharesOut;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response",
            value: QueryCalcJoinPoolNoSwapSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
            value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
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
export const QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-request",
            value: QuerySpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
            value: QuerySpotPriceRequest.encode(message).finish()
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
export const QueryPoolsWithFilterRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.minLiquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolType !== "") {
            writer.uint32(18).string(message.poolType);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minLiquidity.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.poolType = reader.string();
                    break;
                case 3:
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
        const message = createBaseQueryPoolsWithFilterRequest();
        message.minLiquidity = object.minLiquidity?.map(e => Coin.fromPartial(e)) || [];
        message.poolType = object.poolType ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsWithFilterRequest();
        message.minLiquidity = object.min_liquidity?.map(e => Coin.fromAmino(e)) || [];
        if (object.pool_type !== undefined && object.pool_type !== null) {
            message.poolType = object.pool_type;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.minLiquidity) {
            obj.min_liquidity = message.minLiquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_liquidity = message.minLiquidity;
        }
        obj.pool_type = message.poolType === "" ? undefined : message.poolType;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsWithFilterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-request",
            value: QueryPoolsWithFilterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsWithFilterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsWithFilterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
            value: QueryPoolsWithFilterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsWithFilterResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
export const QueryPoolsWithFilterResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(Any.decode(reader, reader.uint32()));
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
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools = object.pools?.map(e => PoolI_FromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e) : undefined);
        }
        else {
            obj.pools = message.pools;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsWithFilterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-response",
            value: QueryPoolsWithFilterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsWithFilterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsWithFilterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
            value: QueryPoolsWithFilterResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceResponse() {
    return {
        spotPrice: ""
    };
}
export const QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-response",
            value: QuerySpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
            value: QuerySpotPriceResponse.encode(message).finish()
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
export const QuerySwapExactAmountInRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
    encode(message, writer = BinaryWriter.create()) {
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
            SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
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
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
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
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-request",
            value: QuerySwapExactAmountInRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
            value: QuerySwapExactAmountInRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
export const QuerySwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-response",
            value: QuerySwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
            value: QuerySwapExactAmountInResponse.encode(message).finish()
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
export const QuerySwapExactAmountOutRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOut !== "") {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
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
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
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
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
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
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-request",
            value: QuerySwapExactAmountOutRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
            value: QuerySwapExactAmountOutRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
export const QuerySwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QuerySwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-response",
            value: QuerySwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
            value: QuerySwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityRequest() {
    return {};
}
export const QueryTotalLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-request",
            value: QueryTotalLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
            value: QueryTotalLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityResponse() {
    return {
        liquidity: []
    };
}
export const QueryTotalLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(Coin.decode(reader, reader.uint32()));
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
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = message.liquidity;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-response",
            value: QueryTotalLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
            value: QueryTotalLiquidityResponse.encode(message).finish()
        };
    }
};
export const PoolI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return Pool1.decode(data.value);
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return Pool2.decode(data.value);
        default:
            return data;
    }
};
export const PoolI_FromAmino = (content) => {
    switch (content.type) {
        case "osmosis/gamm/BalancerPool":
            return Any.fromPartial({
                typeUrl: "/osmosis.gamm.v1beta1.Pool",
                value: Pool1.encode(Pool1.fromPartial(Pool1.fromAmino(content.value))).finish()
            });
        case "osmosis/gamm/StableswapPool":
            return Any.fromPartial({
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
                value: Pool2.encode(Pool2.fromPartial(Pool2.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const PoolI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return {
                type: "osmosis/gamm/BalancerPool",
                value: Pool1.toAmino(Pool1.decode(content.value, undefined))
            };
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return {
                type: "osmosis/gamm/StableswapPool",
                value: Pool2.toAmino(Pool2.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
