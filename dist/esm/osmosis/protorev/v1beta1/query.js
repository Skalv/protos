//@ts-nocheck
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PoolStatistics, TokenPairArbRoutes } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
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
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-params-request",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
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
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
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
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-params-response",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevNumberOfTradesRequest() {
    return {};
}
export const QueryGetProtoRevNumberOfTradesRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
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
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevNumberOfTradesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevNumberOfTradesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-number-of-trades-request",
            value: QueryGetProtoRevNumberOfTradesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevNumberOfTradesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevNumberOfTradesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
            value: QueryGetProtoRevNumberOfTradesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevNumberOfTradesResponse() {
    return {
        numberOfTrades: ""
    };
}
export const QueryGetProtoRevNumberOfTradesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.numberOfTrades !== "") {
            writer.uint32(10).string(message.numberOfTrades);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numberOfTrades = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        message.numberOfTrades = object.numberOfTrades ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevNumberOfTradesResponse();
        if (object.number_of_trades !== undefined && object.number_of_trades !== null) {
            message.numberOfTrades = object.number_of_trades;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.number_of_trades = message.numberOfTrades === "" ? undefined : message.numberOfTrades;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevNumberOfTradesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-number-of-trades-response",
            value: QueryGetProtoRevNumberOfTradesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevNumberOfTradesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevNumberOfTradesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
            value: QueryGetProtoRevNumberOfTradesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevProfitsByDenomRequest() {
    return {
        denom: ""
    };
}
export const QueryGetProtoRevProfitsByDenomRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevProfitsByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request",
            value: QueryGetProtoRevProfitsByDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevProfitsByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevProfitsByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
            value: QueryGetProtoRevProfitsByDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevProfitsByDenomResponse() {
    return {
        profit: undefined
    };
}
export const QueryGetProtoRevProfitsByDenomResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.profit !== undefined) {
            Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profit = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        message.profit = object.profit !== undefined && object.profit !== null ? Coin.fromPartial(object.profit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        if (object.profit !== undefined && object.profit !== null) {
            message.profit = Coin.fromAmino(object.profit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.profit = message.profit ? Coin.toAmino(message.profit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevProfitsByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response",
            value: QueryGetProtoRevProfitsByDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevProfitsByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevProfitsByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
            value: QueryGetProtoRevProfitsByDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllProfitsRequest() {
    return {};
}
export const QueryGetProtoRevAllProfitsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
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
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevAllProfitsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevAllProfitsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-profits-request",
            value: QueryGetProtoRevAllProfitsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllProfitsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllProfitsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
            value: QueryGetProtoRevAllProfitsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllProfitsResponse() {
    return {
        profits: []
    };
}
export const QueryGetProtoRevAllProfitsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.profits) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        message.profits = object.profits?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.profits = message.profits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevAllProfitsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-profits-response",
            value: QueryGetProtoRevAllProfitsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllProfitsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllProfitsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
            value: QueryGetProtoRevAllProfitsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevStatisticsByPoolRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryGetProtoRevStatisticsByPoolRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByPoolRequest();
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
        const message = createBaseQueryGetProtoRevStatisticsByPoolRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevStatisticsByPoolRequest();
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
        return QueryGetProtoRevStatisticsByPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-statistics-by-pool-request",
            value: QueryGetProtoRevStatisticsByPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevStatisticsByPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevStatisticsByPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolRequest",
            value: QueryGetProtoRevStatisticsByPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevStatisticsByPoolResponse() {
    return {
        statistics: undefined
    };
}
export const QueryGetProtoRevStatisticsByPoolResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.statistics !== undefined) {
            PoolStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics = PoolStatistics.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevStatisticsByPoolResponse();
        message.statistics = object.statistics !== undefined && object.statistics !== null ? PoolStatistics.fromPartial(object.statistics) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevStatisticsByPoolResponse();
        if (object.statistics !== undefined && object.statistics !== null) {
            message.statistics = PoolStatistics.fromAmino(object.statistics);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.statistics = message.statistics ? PoolStatistics.toAmino(message.statistics) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevStatisticsByPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-statistics-by-pool-response",
            value: QueryGetProtoRevStatisticsByPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevStatisticsByPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevStatisticsByPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolResponse",
            value: QueryGetProtoRevStatisticsByPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllStatisticsRequest() {
    return {};
}
export const QueryGetProtoRevAllStatisticsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllStatisticsRequest();
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
        const message = createBaseQueryGetProtoRevAllStatisticsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevAllStatisticsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevAllStatisticsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-statistics-request",
            value: QueryGetProtoRevAllStatisticsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllStatisticsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllStatisticsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsRequest",
            value: QueryGetProtoRevAllStatisticsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllStatisticsResponse() {
    return {
        statistics: []
    };
}
export const QueryGetProtoRevAllStatisticsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.statistics) {
            PoolStatistics.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics.push(PoolStatistics.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevAllStatisticsResponse();
        message.statistics = object.statistics?.map(e => PoolStatistics.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllStatisticsResponse();
        message.statistics = object.statistics?.map(e => PoolStatistics.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map(e => e ? PoolStatistics.toAmino(e) : undefined);
        }
        else {
            obj.statistics = message.statistics;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevAllStatisticsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-statistics-response",
            value: QueryGetProtoRevAllStatisticsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevAllStatisticsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevAllStatisticsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsResponse",
            value: QueryGetProtoRevAllStatisticsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest() {
    return {};
}
export const QueryGetProtoRevTokenPairArbRoutesRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
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
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevTokenPairArbRoutesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request",
            value: QueryGetProtoRevTokenPairArbRoutesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevTokenPairArbRoutesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
            value: QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse() {
    return {
        routes: []
    };
}
export const QueryGetProtoRevTokenPairArbRoutesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.routes) {
            TokenPairArbRoutes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        message.routes = object.routes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        message.routes = object.routes?.map(e => TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetProtoRevTokenPairArbRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response",
            value: QueryGetProtoRevTokenPairArbRoutesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGetProtoRevTokenPairArbRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
            value: QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish()
        };
    }
};
