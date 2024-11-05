"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGetProtoRevTokenPairArbRoutesResponse = exports.QueryGetProtoRevTokenPairArbRoutesRequest = exports.QueryGetProtoRevAllStatisticsResponse = exports.QueryGetProtoRevAllStatisticsRequest = exports.QueryGetProtoRevStatisticsByPoolResponse = exports.QueryGetProtoRevStatisticsByPoolRequest = exports.QueryGetProtoRevAllProfitsResponse = exports.QueryGetProtoRevAllProfitsRequest = exports.QueryGetProtoRevProfitsByDenomResponse = exports.QueryGetProtoRevProfitsByDenomRequest = exports.QueryGetProtoRevNumberOfTradesResponse = exports.QueryGetProtoRevNumberOfTradesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const params_1 = require("./params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
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
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest",
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
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
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
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevNumberOfTradesRequest() {
    return {};
}
exports.QueryGetProtoRevNumberOfTradesRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetProtoRevNumberOfTradesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-number-of-trades-request",
            value: exports.QueryGetProtoRevNumberOfTradesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevNumberOfTradesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevNumberOfTradesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest",
            value: exports.QueryGetProtoRevNumberOfTradesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevNumberOfTradesResponse() {
    return {
        numberOfTrades: ""
    };
}
exports.QueryGetProtoRevNumberOfTradesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numberOfTrades !== "") {
            writer.uint32(10).string(message.numberOfTrades);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetProtoRevNumberOfTradesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-number-of-trades-response",
            value: exports.QueryGetProtoRevNumberOfTradesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevNumberOfTradesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevNumberOfTradesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse",
            value: exports.QueryGetProtoRevNumberOfTradesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevProfitsByDenomRequest() {
    return {
        denom: ""
    };
}
exports.QueryGetProtoRevProfitsByDenomRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetProtoRevProfitsByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request",
            value: exports.QueryGetProtoRevProfitsByDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevProfitsByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevProfitsByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest",
            value: exports.QueryGetProtoRevProfitsByDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevProfitsByDenomResponse() {
    return {
        profit: undefined
    };
}
exports.QueryGetProtoRevProfitsByDenomResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.profit !== undefined) {
            coin_1.Coin.encode(message.profit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profit = coin_1.Coin.decode(reader, reader.uint32());
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
        message.profit = object.profit !== undefined && object.profit !== null ? coin_1.Coin.fromPartial(object.profit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevProfitsByDenomResponse();
        if (object.profit !== undefined && object.profit !== null) {
            message.profit = coin_1.Coin.fromAmino(object.profit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.profit = message.profit ? coin_1.Coin.toAmino(message.profit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevProfitsByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response",
            value: exports.QueryGetProtoRevProfitsByDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevProfitsByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevProfitsByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse",
            value: exports.QueryGetProtoRevProfitsByDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllProfitsRequest() {
    return {};
}
exports.QueryGetProtoRevAllProfitsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetProtoRevAllProfitsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-profits-request",
            value: exports.QueryGetProtoRevAllProfitsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllProfitsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllProfitsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest",
            value: exports.QueryGetProtoRevAllProfitsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllProfitsResponse() {
    return {
        profits: []
    };
}
exports.QueryGetProtoRevAllProfitsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.profits = object.profits?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllProfitsResponse();
        message.profits = object.profits?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.profits = message.profits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAllProfitsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-profits-response",
            value: exports.QueryGetProtoRevAllProfitsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllProfitsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllProfitsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse",
            value: exports.QueryGetProtoRevAllProfitsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevStatisticsByPoolRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryGetProtoRevStatisticsByPoolRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetProtoRevStatisticsByPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-statistics-by-pool-request",
            value: exports.QueryGetProtoRevStatisticsByPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevStatisticsByPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevStatisticsByPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolRequest",
            value: exports.QueryGetProtoRevStatisticsByPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevStatisticsByPoolResponse() {
    return {
        statistics: undefined
    };
}
exports.QueryGetProtoRevStatisticsByPoolResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.statistics !== undefined) {
            protorev_1.PoolStatistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevStatisticsByPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics = protorev_1.PoolStatistics.decode(reader, reader.uint32());
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
        message.statistics = object.statistics !== undefined && object.statistics !== null ? protorev_1.PoolStatistics.fromPartial(object.statistics) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevStatisticsByPoolResponse();
        if (object.statistics !== undefined && object.statistics !== null) {
            message.statistics = protorev_1.PoolStatistics.fromAmino(object.statistics);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.statistics = message.statistics ? protorev_1.PoolStatistics.toAmino(message.statistics) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevStatisticsByPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-statistics-by-pool-response",
            value: exports.QueryGetProtoRevStatisticsByPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevStatisticsByPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevStatisticsByPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolResponse",
            value: exports.QueryGetProtoRevStatisticsByPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllStatisticsRequest() {
    return {};
}
exports.QueryGetProtoRevAllStatisticsRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetProtoRevAllStatisticsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-statistics-request",
            value: exports.QueryGetProtoRevAllStatisticsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllStatisticsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllStatisticsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsRequest",
            value: exports.QueryGetProtoRevAllStatisticsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevAllStatisticsResponse() {
    return {
        statistics: []
    };
}
exports.QueryGetProtoRevAllStatisticsResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.statistics) {
            protorev_1.PoolStatistics.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevAllStatisticsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statistics.push(protorev_1.PoolStatistics.decode(reader, reader.uint32()));
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
        message.statistics = object.statistics?.map(e => protorev_1.PoolStatistics.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevAllStatisticsResponse();
        message.statistics = object.statistics?.map(e => protorev_1.PoolStatistics.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.statistics) {
            obj.statistics = message.statistics.map(e => e ? protorev_1.PoolStatistics.toAmino(e) : undefined);
        }
        else {
            obj.statistics = message.statistics;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevAllStatisticsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-all-statistics-response",
            value: exports.QueryGetProtoRevAllStatisticsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevAllStatisticsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevAllStatisticsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsResponse",
            value: exports.QueryGetProtoRevAllStatisticsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesRequest() {
    return {};
}
exports.QueryGetProtoRevTokenPairArbRoutesRequest = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryGetProtoRevTokenPairArbRoutesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request",
            value: exports.QueryGetProtoRevTokenPairArbRoutesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest",
            value: exports.QueryGetProtoRevTokenPairArbRoutesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetProtoRevTokenPairArbRoutesResponse() {
    return {
        routes: []
    };
}
exports.QueryGetProtoRevTokenPairArbRoutesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.routes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
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
        message.routes = object.routes?.map(e => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetProtoRevTokenPairArbRoutesResponse();
        message.routes = object.routes?.map(e => protorev_1.TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? protorev_1.TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetProtoRevTokenPairArbRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response",
            value: exports.QueryGetProtoRevTokenPairArbRoutesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse",
            value: exports.QueryGetProtoRevTokenPairArbRoutesResponse.encode(message).finish()
        };
    }
};
