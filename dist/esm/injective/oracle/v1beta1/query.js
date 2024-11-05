//@ts-nocheck
import { OracleInfo, Params, BandPriceState, PriceFeedState, CoinbasePriceState, PriceState, PriceRecords, MetadataStatistics, PriceRecord, ProviderInfo, ProviderState } from "./oracle";
import { GenesisState } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
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
            typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
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
    typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
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
            typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBandRelayersRequest() {
    return {};
}
export const QueryBandRelayersRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBandRelayersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBandRelayersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBandRelayersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
            value: QueryBandRelayersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBandRelayersResponse() {
    return {
        relayers: []
    };
}
export const QueryBandRelayersResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.relayers) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBandRelayersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBandRelayersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBandRelayersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
            value: QueryBandRelayersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBandPriceStatesRequest() {
    return {};
}
export const QueryBandPriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBandPriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBandPriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBandPriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
            value: QueryBandPriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBandPriceStatesResponse() {
    return {
        priceStates: []
    };
}
export const QueryBandPriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.priceStates) {
            BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
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
        message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBandPriceStatesResponse();
        message.priceStates = object.price_states?.map(e => BandPriceState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBandPriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBandPriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBandPriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
            value: QueryBandPriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBandIBCPriceStatesRequest() {
    return {};
}
export const QueryBandIBCPriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryBandIBCPriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBandIBCPriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBandIBCPriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
            value: QueryBandIBCPriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBandIBCPriceStatesResponse() {
    return {
        priceStates: []
    };
}
export const QueryBandIBCPriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.priceStates) {
            BandPriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBandIBCPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
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
        message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBandIBCPriceStatesResponse();
        message.priceStates = object.price_states?.map(e => BandPriceState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBandIBCPriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBandIBCPriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBandIBCPriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
            value: QueryBandIBCPriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPriceFeedPriceStatesRequest() {
    return {};
}
export const QueryPriceFeedPriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPriceFeedPriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPriceFeedPriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPriceFeedPriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
            value: QueryPriceFeedPriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPriceFeedPriceStatesResponse() {
    return {
        priceStates: []
    };
}
export const QueryPriceFeedPriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.priceStates) {
            PriceFeedState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(PriceFeedState.decode(reader, reader.uint32()));
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
        message.priceStates = object.priceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPriceFeedPriceStatesResponse();
        message.priceStates = object.price_states?.map(e => PriceFeedState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? PriceFeedState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPriceFeedPriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPriceFeedPriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPriceFeedPriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
            value: QueryPriceFeedPriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCoinbasePriceStatesRequest() {
    return {};
}
export const QueryCoinbasePriceStatesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryCoinbasePriceStatesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCoinbasePriceStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCoinbasePriceStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
            value: QueryCoinbasePriceStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCoinbasePriceStatesResponse() {
    return {
        priceStates: []
    };
}
export const QueryCoinbasePriceStatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.priceStates) {
            CoinbasePriceState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCoinbasePriceStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
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
        message.priceStates = object.priceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCoinbasePriceStatesResponse();
        message.priceStates = object.price_states?.map(e => CoinbasePriceState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceStates) {
            obj.price_states = message.priceStates.map(e => e ? CoinbasePriceState.toAmino(e) : undefined);
        }
        else {
            obj.price_states = message.priceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCoinbasePriceStatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCoinbasePriceStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCoinbasePriceStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
            value: QueryCoinbasePriceStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProviderPriceStateRequest() {
    return {
        provider: "",
        symbol: ""
    };
}
export const QueryProviderPriceStateRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryProviderPriceStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProviderPriceStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProviderPriceStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
            value: QueryProviderPriceStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProviderPriceStateResponse() {
    return {
        priceState: undefined
    };
}
export const QueryProviderPriceStateResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.priceState !== undefined) {
            PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderPriceStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceState = PriceState.decode(reader, reader.uint32());
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
        message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProviderPriceStateResponse();
        if (object.price_state !== undefined && object.price_state !== null) {
            message.priceState = PriceState.fromAmino(object.price_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProviderPriceStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProviderPriceStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProviderPriceStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
            value: QueryProviderPriceStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
            value: QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
export const QueryModuleStateResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
            value: QueryModuleStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalPriceRecordsRequest() {
    return {
        oracle: 0,
        symbolId: ""
    };
}
export const QueryHistoricalPriceRecordsRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.oracle !== 0) {
            writer.uint32(8).int32(message.oracle);
        }
        if (message.symbolId !== "") {
            writer.uint32(18).string(message.symbolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryHistoricalPriceRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHistoricalPriceRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryHistoricalPriceRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
            value: QueryHistoricalPriceRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalPriceRecordsResponse() {
    return {
        priceRecords: []
    };
}
export const QueryHistoricalPriceRecordsResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.priceRecords) {
            PriceRecords.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceRecords.push(PriceRecords.decode(reader, reader.uint32()));
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
        message.priceRecords = object.priceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHistoricalPriceRecordsResponse();
        message.priceRecords = object.price_records?.map(e => PriceRecords.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.priceRecords) {
            obj.price_records = message.priceRecords.map(e => e ? PriceRecords.toAmino(e) : undefined);
        }
        else {
            obj.price_records = message.priceRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryHistoricalPriceRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHistoricalPriceRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryHistoricalPriceRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
            value: QueryHistoricalPriceRecordsResponse.encode(message).finish()
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
export const OracleHistoryOptions = {
    typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return OracleHistoryOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OracleHistoryOptions.decode(message.value);
    },
    toProto(message) {
        return OracleHistoryOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
            value: OracleHistoryOptions.encode(message).finish()
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
export const QueryOracleVolatilityRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseInfo !== undefined) {
            OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.quoteInfo !== undefined) {
            OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.oracleHistoryOptions !== undefined) {
            OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleVolatilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseInfo = OracleInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quoteInfo = OracleInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.oracleHistoryOptions = OracleHistoryOptions.decode(reader, reader.uint32());
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
        message.baseInfo = object.baseInfo !== undefined && object.baseInfo !== null ? OracleInfo.fromPartial(object.baseInfo) : undefined;
        message.quoteInfo = object.quoteInfo !== undefined && object.quoteInfo !== null ? OracleInfo.fromPartial(object.quoteInfo) : undefined;
        message.oracleHistoryOptions = object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null ? OracleHistoryOptions.fromPartial(object.oracleHistoryOptions) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleVolatilityRequest();
        if (object.base_info !== undefined && object.base_info !== null) {
            message.baseInfo = OracleInfo.fromAmino(object.base_info);
        }
        if (object.quote_info !== undefined && object.quote_info !== null) {
            message.quoteInfo = OracleInfo.fromAmino(object.quote_info);
        }
        if (object.oracle_history_options !== undefined && object.oracle_history_options !== null) {
            message.oracleHistoryOptions = OracleHistoryOptions.fromAmino(object.oracle_history_options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_info = message.baseInfo ? OracleInfo.toAmino(message.baseInfo) : undefined;
        obj.quote_info = message.quoteInfo ? OracleInfo.toAmino(message.quoteInfo) : undefined;
        obj.oracle_history_options = message.oracleHistoryOptions ? OracleHistoryOptions.toAmino(message.oracleHistoryOptions) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOracleVolatilityRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOracleVolatilityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOracleVolatilityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
            value: QueryOracleVolatilityRequest.encode(message).finish()
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
export const QueryOracleVolatilityResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.volatility !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.volatility, 18).atomics);
        }
        if (message.historyMetadata !== undefined) {
            MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.rawHistory) {
            PriceRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleVolatilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volatility = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rawHistory.push(PriceRecord.decode(reader, reader.uint32()));
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
        message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
        message.rawHistory = object.rawHistory?.map(e => PriceRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleVolatilityResponse();
        if (object.volatility !== undefined && object.volatility !== null) {
            message.volatility = object.volatility;
        }
        if (object.history_metadata !== undefined && object.history_metadata !== null) {
            message.historyMetadata = MetadataStatistics.fromAmino(object.history_metadata);
        }
        message.rawHistory = object.raw_history?.map(e => PriceRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.volatility = message.volatility === "" ? undefined : message.volatility;
        obj.history_metadata = message.historyMetadata ? MetadataStatistics.toAmino(message.historyMetadata) : undefined;
        if (message.rawHistory) {
            obj.raw_history = message.rawHistory.map(e => e ? PriceRecord.toAmino(e) : undefined);
        }
        else {
            obj.raw_history = message.rawHistory;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOracleVolatilityResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOracleVolatilityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOracleVolatilityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
            value: QueryOracleVolatilityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProvidersInfoRequest() {
    return {};
}
export const QueryOracleProvidersInfoRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryOracleProvidersInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOracleProvidersInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOracleProvidersInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
            value: QueryOracleProvidersInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProvidersInfoResponse() {
    return {
        providers: []
    };
}
export const QueryOracleProvidersInfoResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.providers) {
            ProviderInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProvidersInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(ProviderInfo.decode(reader, reader.uint32()));
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
        message.providers = object.providers?.map(e => ProviderInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleProvidersInfoResponse();
        message.providers = object.providers?.map(e => ProviderInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map(e => e ? ProviderInfo.toAmino(e) : undefined);
        }
        else {
            obj.providers = message.providers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOracleProvidersInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOracleProvidersInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOracleProvidersInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
            value: QueryOracleProvidersInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProviderPricesRequest() {
    return {
        provider: ""
    };
}
export const QueryOracleProviderPricesRequest = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryOracleProviderPricesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOracleProviderPricesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOracleProviderPricesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
            value: QueryOracleProviderPricesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOracleProviderPricesResponse() {
    return {
        providerState: []
    };
}
export const QueryOracleProviderPricesResponse = {
    typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.providerState) {
            ProviderState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleProviderPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providerState.push(ProviderState.decode(reader, reader.uint32()));
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
        message.providerState = object.providerState?.map(e => ProviderState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOracleProviderPricesResponse();
        message.providerState = object.providerState?.map(e => ProviderState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providerState) {
            obj.providerState = message.providerState.map(e => e ? ProviderState.toAmino(e) : undefined);
        }
        else {
            obj.providerState = message.providerState;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOracleProviderPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOracleProviderPricesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOracleProviderPricesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
            value: QueryOracleProviderPricesResponse.encode(message).finish()
        };
    }
};
