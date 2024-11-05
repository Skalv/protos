"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOracleProviderPricesResponse = exports.QueryOracleProviderPricesRequest = exports.QueryOracleProvidersInfoResponse = exports.QueryOracleProvidersInfoRequest = exports.QueryOracleVolatilityResponse = exports.QueryOracleVolatilityRequest = exports.OracleHistoryOptions = exports.QueryHistoricalPriceRecordsResponse = exports.QueryHistoricalPriceRecordsRequest = exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryProviderPriceStateResponse = exports.QueryProviderPriceStateRequest = exports.QueryCoinbasePriceStatesResponse = exports.QueryCoinbasePriceStatesRequest = exports.QueryPriceFeedPriceStatesResponse = exports.QueryPriceFeedPriceStatesRequest = exports.QueryBandIBCPriceStatesResponse = exports.QueryBandIBCPriceStatesRequest = exports.QueryBandPriceStatesResponse = exports.QueryBandPriceStatesRequest = exports.QueryBandRelayersResponse = exports.QueryBandRelayersRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const oracle_1 = require("./oracle");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
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
            typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: oracle_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            oracle_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = oracle_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? oracle_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = oracle_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? oracle_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBandRelayersRequest() {
    return {};
}
exports.QueryBandRelayersRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandRelayersRequest();
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
        const message = createBaseQueryBandRelayersRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBandRelayersRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBandRelayersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBandRelayersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBandRelayersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
            value: exports.QueryBandRelayersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBandRelayersResponse() {
    return {
        relayers: []
    };
}
exports.QueryBandRelayersResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.relayers) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandRelayersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.relayers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBandRelayersResponse();
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBandRelayersResponse();
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBandRelayersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBandRelayersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBandRelayersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
            value: exports.QueryBandRelayersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBandPriceStatesRequest() {
    return {};
}
exports.QueryBandPriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandPriceStatesRequest();
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
        const message = createBaseQueryBandPriceStatesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBandPriceStatesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBandPriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBandPriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBandPriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
            value: exports.QueryBandPriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBandPriceStatesResponse() {
    return {
        priceStates: []
    };
}
exports.QueryBandPriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.priceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBandPriceStatesResponse();
        message.priceStates = object.priceStates?.map(e => oracle_1.BandPriceState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBandPriceStatesResponse();
        message.priceStates = object.price_states?.map(e => oracle_1.BandPriceState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? oracle_1.BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBandPriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBandPriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBandPriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
            value: exports.QueryBandPriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBandIBCPriceStatesRequest() {
    return {};
}
exports.QueryBandIBCPriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandIBCPriceStatesRequest();
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
        const message = createBaseQueryBandIBCPriceStatesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBandIBCPriceStatesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBandIBCPriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBandIBCPriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBandIBCPriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
            value: exports.QueryBandIBCPriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBandIBCPriceStatesResponse() {
    return {
        priceStates: []
    };
}
exports.QueryBandIBCPriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.priceStates) {
            oracle_1.BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandIBCPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(oracle_1.BandPriceState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBandIBCPriceStatesResponse();
        message.priceStates = object.priceStates?.map(e => oracle_1.BandPriceState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBandIBCPriceStatesResponse();
        message.priceStates = object.price_states?.map(e => oracle_1.BandPriceState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? oracle_1.BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBandIBCPriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBandIBCPriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBandIBCPriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
            value: exports.QueryBandIBCPriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPriceFeedPriceStatesRequest() {
    return {};
}
exports.QueryPriceFeedPriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceFeedPriceStatesRequest();
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
        const message = createBaseQueryPriceFeedPriceStatesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryPriceFeedPriceStatesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPriceFeedPriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPriceFeedPriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPriceFeedPriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
            value: exports.QueryPriceFeedPriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPriceFeedPriceStatesResponse() {
    return {
        priceStates: []
    };
}
exports.QueryPriceFeedPriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.priceStates) {
            oracle_1.PriceFeedState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(oracle_1.PriceFeedState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        message.priceStates = object.priceStates?.map(e => oracle_1.PriceFeedState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        message.priceStates = object.price_states?.map(e => oracle_1.PriceFeedState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? oracle_1.PriceFeedState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPriceFeedPriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPriceFeedPriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPriceFeedPriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
            value: exports.QueryPriceFeedPriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCoinbasePriceStatesRequest() {
    return {};
}
exports.QueryCoinbasePriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCoinbasePriceStatesRequest();
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
        const message = createBaseQueryCoinbasePriceStatesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCoinbasePriceStatesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCoinbasePriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCoinbasePriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCoinbasePriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
            value: exports.QueryCoinbasePriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCoinbasePriceStatesResponse() {
    return {
        priceStates: []
    };
}
exports.QueryCoinbasePriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.priceStates) {
            oracle_1.CoinbasePriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCoinbasePriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(oracle_1.CoinbasePriceState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCoinbasePriceStatesResponse();
        message.priceStates = object.priceStates?.map(e => oracle_1.CoinbasePriceState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCoinbasePriceStatesResponse();
        message.priceStates = object.price_states?.map(e => oracle_1.CoinbasePriceState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? oracle_1.CoinbasePriceState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCoinbasePriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCoinbasePriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCoinbasePriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
            value: exports.QueryCoinbasePriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProviderPriceStateRequest() {
    return {
        provider: "",
        symbol: ""
    };
}
exports.QueryProviderPriceStateRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderPriceStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = reader.string();
                    break;
                case 2:
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
        const message = createBaseQueryProviderPriceStateRequest();
        message.provider = object.provider ?? "";
        message.symbol = object.symbol ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderPriceStateRequest();
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.provider = message.provider === "" ? undefined : message.provider;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProviderPriceStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProviderPriceStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProviderPriceStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
            value: exports.QueryProviderPriceStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderPriceStateResponse() {
    return {
        priceState: undefined
    };
}
exports.QueryProviderPriceStateResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.priceState !== undefined) {
            oracle_1.PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderPriceStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceState = oracle_1.PriceState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProviderPriceStateResponse();
        message.priceState = object.priceState !== undefined && object.priceState !== null ? oracle_1.PriceState.fromPartial(object.priceState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderPriceStateResponse();
        if (object.price_state !== undefined && object.price_state !== null) {
            message.priceState = oracle_1.PriceState.fromAmino(object.price_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price_state = message.priceState ? oracle_1.PriceState.toAmino(message.priceState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProviderPriceStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProviderPriceStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProviderPriceStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
            value: exports.QueryProviderPriceStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
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
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
            value: exports.QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
exports.QueryModuleStateResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = object.state !== undefined && object.state !== null ? genesis_1.GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? genesis_1.GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
            value: exports.QueryModuleStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalPriceRecordsRequest() {
    return {
        oracle: 0,
        symbolId: ""
    };
}
exports.QueryHistoricalPriceRecordsRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.oracle !== 0) {
            writer.uint32(8).int32(message.oracle);
        }
        if (message.symbolId !== "") {
            writer.uint32(18).string(message.symbolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalPriceRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracle = reader.int32();
                    break;
                case 2:
                    message.symbolId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalPriceRecordsRequest();
        message.oracle = object.oracle ?? 0;
        message.symbolId = object.symbolId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHistoricalPriceRecordsRequest();
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = object.oracle;
        }
        if (object.symbol_id !== undefined && object.symbol_id !== null) {
            message.symbolId = object.symbol_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.oracle = message.oracle === 0 ? undefined : message.oracle;
        obj.symbol_id = message.symbolId === "" ? undefined : message.symbolId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoricalPriceRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHistoricalPriceRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoricalPriceRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
            value: exports.QueryHistoricalPriceRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalPriceRecordsResponse() {
    return {
        priceRecords: []
    };
}
exports.QueryHistoricalPriceRecordsResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.priceRecords) {
            oracle_1.PriceRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceRecords.push(oracle_1.PriceRecords.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        message.priceRecords = object.priceRecords?.map(e => oracle_1.PriceRecords.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        message.priceRecords = object.price_records?.map(e => oracle_1.PriceRecords.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceRecords) {
            obj.price_records = message.priceRecords.map(e => e ? oracle_1.PriceRecords.toAmino(e) : undefined);
        }
        else {
            obj.price_records = message.priceRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoricalPriceRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHistoricalPriceRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoricalPriceRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
            value: exports.QueryHistoricalPriceRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseOracleHistoryOptions() {
    return {
        maxAge: BigInt(0),
        includeRawHistory: false,
        includeMetadata: false
    };
}
exports.OracleHistoryOptions = {
    typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxAge !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxAge);
        }
        if (message.includeRawHistory === true) {
            writer.uint32(16).bool(message.includeRawHistory);
        }
        if (message.includeMetadata === true) {
            writer.uint32(24).bool(message.includeMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleHistoryOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAge = reader.uint64();
                    break;
                case 2:
                    message.includeRawHistory = reader.bool();
                    break;
                case 3:
                    message.includeMetadata = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOracleHistoryOptions();
        message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? BigInt(object.maxAge.toString()) : BigInt(0);
        message.includeRawHistory = object.includeRawHistory ?? false;
        message.includeMetadata = object.includeMetadata ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOracleHistoryOptions();
        if (object.max_age !== undefined && object.max_age !== null) {
            message.maxAge = BigInt(object.max_age);
        }
        if (object.include_raw_history !== undefined && object.include_raw_history !== null) {
            message.includeRawHistory = object.include_raw_history;
        }
        if (object.include_metadata !== undefined && object.include_metadata !== null) {
            message.includeMetadata = object.include_metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_age = message.maxAge !== BigInt(0) ? (message.maxAge?.toString)() : undefined;
        obj.include_raw_history = message.includeRawHistory === false ? undefined : message.includeRawHistory;
        obj.include_metadata = message.includeMetadata === false ? undefined : message.includeMetadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OracleHistoryOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OracleHistoryOptions.decode(message.value);
    },
    toProto(message) {
        return exports.OracleHistoryOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
            value: exports.OracleHistoryOptions.encode(message).finish()
        };
    }
};
function createBaseQueryOracleVolatilityRequest() {
    return {
        baseInfo: undefined,
        quoteInfo: undefined,
        oracleHistoryOptions: undefined
    };
}
exports.QueryOracleVolatilityRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseInfo !== undefined) {
            oracle_1.OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.quoteInfo !== undefined) {
            oracle_1.OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.oracleHistoryOptions !== undefined) {
            exports.OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleVolatilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseInfo = oracle_1.OracleInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quoteInfo = oracle_1.OracleInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.oracleHistoryOptions = exports.OracleHistoryOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOracleVolatilityRequest();
        message.baseInfo = object.baseInfo !== undefined && object.baseInfo !== null ? oracle_1.OracleInfo.fromPartial(object.baseInfo) : undefined;
        message.quoteInfo = object.quoteInfo !== undefined && object.quoteInfo !== null ? oracle_1.OracleInfo.fromPartial(object.quoteInfo) : undefined;
        message.oracleHistoryOptions = object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null ? exports.OracleHistoryOptions.fromPartial(object.oracleHistoryOptions) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleVolatilityRequest();
        if (object.base_info !== undefined && object.base_info !== null) {
            message.baseInfo = oracle_1.OracleInfo.fromAmino(object.base_info);
        }
        if (object.quote_info !== undefined && object.quote_info !== null) {
            message.quoteInfo = oracle_1.OracleInfo.fromAmino(object.quote_info);
        }
        if (object.oracle_history_options !== undefined && object.oracle_history_options !== null) {
            message.oracleHistoryOptions = exports.OracleHistoryOptions.fromAmino(object.oracle_history_options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_info = message.baseInfo ? oracle_1.OracleInfo.toAmino(message.baseInfo) : undefined;
        obj.quote_info = message.quoteInfo ? oracle_1.OracleInfo.toAmino(message.quoteInfo) : undefined;
        obj.oracle_history_options = message.oracleHistoryOptions ? exports.OracleHistoryOptions.toAmino(message.oracleHistoryOptions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOracleVolatilityRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOracleVolatilityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOracleVolatilityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
            value: exports.QueryOracleVolatilityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOracleVolatilityResponse() {
    return {
        volatility: "",
        historyMetadata: undefined,
        rawHistory: []
    };
}
exports.QueryOracleVolatilityResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.volatility, 18).atomics);
        }
        if (message.historyMetadata !== undefined) {
            oracle_1.MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            oracle_1.PriceRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleVolatilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volatility = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.historyMetadata = oracle_1.MetadataStatistics.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rawHistory.push(oracle_1.PriceRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOracleVolatilityResponse();
        message.volatility = object.volatility ?? "";
        message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? oracle_1.MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
        message.rawHistory = object.rawHistory?.map(e => oracle_1.PriceRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleVolatilityResponse();
        if (object.volatility !== undefined && object.volatility !== null) {
            message.volatility = object.volatility;
        }
        if (object.history_metadata !== undefined && object.history_metadata !== null) {
            message.historyMetadata = oracle_1.MetadataStatistics.fromAmino(object.history_metadata);
        }
        message.rawHistory = object.raw_history?.map(e => oracle_1.PriceRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.volatility = message.volatility === "" ? undefined : message.volatility;
        obj.history_metadata = message.historyMetadata ? oracle_1.MetadataStatistics.toAmino(message.historyMetadata) : undefined;
        if (message.rawHistory) {
            obj.raw_history = message.rawHistory.map(e => e ? oracle_1.PriceRecord.toAmino(e) : undefined);
        }
        else {
            obj.raw_history = message.rawHistory;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOracleVolatilityResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOracleVolatilityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOracleVolatilityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
            value: exports.QueryOracleVolatilityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProvidersInfoRequest() {
    return {};
}
exports.QueryOracleProvidersInfoRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProvidersInfoRequest();
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
        const message = createBaseQueryOracleProvidersInfoRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryOracleProvidersInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOracleProvidersInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOracleProvidersInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOracleProvidersInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
            value: exports.QueryOracleProvidersInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProvidersInfoResponse() {
    return {
        providers: []
    };
}
exports.QueryOracleProvidersInfoResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.providers) {
            oracle_1.ProviderInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProvidersInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(oracle_1.ProviderInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOracleProvidersInfoResponse();
        message.providers = object.providers?.map(e => oracle_1.ProviderInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleProvidersInfoResponse();
        message.providers = object.providers?.map(e => oracle_1.ProviderInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map(e => e ? oracle_1.ProviderInfo.toAmino(e) : undefined);
        }
        else {
            obj.providers = message.providers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOracleProvidersInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOracleProvidersInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOracleProvidersInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
            value: exports.QueryOracleProvidersInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProviderPricesRequest() {
    return {
        provider: ""
    };
}
exports.QueryOracleProviderPricesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProviderPricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOracleProviderPricesRequest();
        message.provider = object.provider ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleProviderPricesRequest();
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.provider = message.provider === "" ? undefined : message.provider;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOracleProviderPricesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOracleProviderPricesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOracleProviderPricesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
            value: exports.QueryOracleProviderPricesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProviderPricesResponse() {
    return {
        providerState: []
    };
}
exports.QueryOracleProviderPricesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.providerState) {
            oracle_1.ProviderState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProviderPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providerState.push(oracle_1.ProviderState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOracleProviderPricesResponse();
        message.providerState = object.providerState?.map(e => oracle_1.ProviderState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleProviderPricesResponse();
        message.providerState = object.providerState?.map(e => oracle_1.ProviderState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providerState) {
            obj.providerState = message.providerState.map(e => e ? oracle_1.ProviderState.toAmino(e) : undefined);
        }
        else {
            obj.providerState = message.providerState;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOracleProviderPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOracleProviderPricesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOracleProviderPricesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
            value: exports.QueryOracleProviderPricesResponse.encode(message).finish()
        };
    }
};
