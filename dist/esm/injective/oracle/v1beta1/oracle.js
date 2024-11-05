//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export var OracleType;
(function (OracleType) {
    OracleType[OracleType["Unspecified"] = 0] = "Unspecified";
    OracleType[OracleType["Band"] = 1] = "Band";
    OracleType[OracleType["PriceFeed"] = 2] = "PriceFeed";
    OracleType[OracleType["Coinbase"] = 3] = "Coinbase";
    OracleType[OracleType["Chainlink"] = 4] = "Chainlink";
    OracleType[OracleType["Razor"] = 5] = "Razor";
    OracleType[OracleType["Dia"] = 6] = "Dia";
    OracleType[OracleType["API3"] = 7] = "API3";
    OracleType[OracleType["Uma"] = 8] = "Uma";
    OracleType[OracleType["Pyth"] = 9] = "Pyth";
    OracleType[OracleType["BandIBC"] = 10] = "BandIBC";
    OracleType[OracleType["Provider"] = 11] = "Provider";
    OracleType[OracleType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OracleType || (OracleType = {}));
export const OracleTypeSDKType = OracleType;
export const OracleTypeAmino = OracleType;
export function oracleTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "Unspecified":
            return OracleType.Unspecified;
        case 1:
        case "Band":
            return OracleType.Band;
        case 2:
        case "PriceFeed":
            return OracleType.PriceFeed;
        case 3:
        case "Coinbase":
            return OracleType.Coinbase;
        case 4:
        case "Chainlink":
            return OracleType.Chainlink;
        case 5:
        case "Razor":
            return OracleType.Razor;
        case 6:
        case "Dia":
            return OracleType.Dia;
        case 7:
        case "API3":
            return OracleType.API3;
        case 8:
        case "Uma":
            return OracleType.Uma;
        case 9:
        case "Pyth":
            return OracleType.Pyth;
        case 10:
        case "BandIBC":
            return OracleType.BandIBC;
        case 11:
        case "Provider":
            return OracleType.Provider;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OracleType.UNRECOGNIZED;
    }
}
export function oracleTypeToJSON(object) {
    switch (object) {
        case OracleType.Unspecified:
            return "Unspecified";
        case OracleType.Band:
            return "Band";
        case OracleType.PriceFeed:
            return "PriceFeed";
        case OracleType.Coinbase:
            return "Coinbase";
        case OracleType.Chainlink:
            return "Chainlink";
        case OracleType.Razor:
            return "Razor";
        case OracleType.Dia:
            return "Dia";
        case OracleType.API3:
            return "API3";
        case OracleType.Uma:
            return "Uma";
        case OracleType.Pyth:
            return "Pyth";
        case OracleType.BandIBC:
            return "BandIBC";
        case OracleType.Provider:
            return "Provider";
        case OracleType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseParams() {
    return {};
}
export const Params = {
    typeUrl: "/injective.oracle.v1beta1.Params",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
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
        const message = createBaseParams();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParams();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseOracleInfo() {
    return {
        symbol: "",
        oracleType: 0,
        scaleFactor: 0
    };
}
export const OracleInfo = {
    typeUrl: "/injective.oracle.v1beta1.OracleInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.oracleType !== 0) {
            writer.uint32(16).int32(message.oracleType);
        }
        if (message.scaleFactor !== 0) {
            writer.uint32(24).uint32(message.scaleFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.oracleType = reader.int32();
                    break;
                case 3:
                    message.scaleFactor = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOracleInfo();
        message.symbol = object.symbol ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.scaleFactor = object.scaleFactor ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOracleInfo();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.scale_factor !== undefined && object.scale_factor !== null) {
            message.scaleFactor = object.scale_factor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.scale_factor = message.scaleFactor === 0 ? undefined : message.scaleFactor;
        return obj;
    },
    fromAminoMsg(object) {
        return OracleInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OracleInfo.decode(message.value);
    },
    toProto(message) {
        return OracleInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.OracleInfo",
            value: OracleInfo.encode(message).finish()
        };
    }
};
function createBaseChainlinkPriceState() {
    return {
        feedId: "",
        answer: "",
        timestamp: BigInt(0),
        priceState: PriceState.fromPartial({})
    };
}
export const ChainlinkPriceState = {
    typeUrl: "/injective.oracle.v1beta1.ChainlinkPriceState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.answer !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.answer, 18).atomics);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).uint64(message.timestamp);
        }
        if (message.priceState !== undefined) {
            PriceState.encode(message.priceState, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainlinkPriceState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.answer = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
                    break;
                case 4:
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
        const message = createBaseChainlinkPriceState();
        message.feedId = object.feedId ?? "";
        message.answer = object.answer ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainlinkPriceState();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.answer !== undefined && object.answer !== null) {
            message.answer = object.answer;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.price_state !== undefined && object.price_state !== null) {
            message.priceState = PriceState.fromAmino(object.price_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.answer = message.answer === "" ? undefined : message.answer;
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainlinkPriceState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainlinkPriceState.decode(message.value);
    },
    toProto(message) {
        return ChainlinkPriceState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.ChainlinkPriceState",
            value: ChainlinkPriceState.encode(message).finish()
        };
    }
};
function createBaseBandPriceState() {
    return {
        symbol: "",
        rate: "",
        resolveTime: BigInt(0),
        requestID: BigInt(0),
        priceState: PriceState.fromPartial({})
    };
}
export const BandPriceState = {
    typeUrl: "/injective.oracle.v1beta1.BandPriceState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.rate !== "") {
            writer.uint32(18).string(message.rate);
        }
        if (message.resolveTime !== BigInt(0)) {
            writer.uint32(24).uint64(message.resolveTime);
        }
        if (message.requestID !== BigInt(0)) {
            writer.uint32(32).uint64(message.requestID);
        }
        if (message.priceState !== undefined) {
            PriceState.encode(message.priceState, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBandPriceState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.rate = reader.string();
                    break;
                case 3:
                    message.resolveTime = reader.uint64();
                    break;
                case 4:
                    message.requestID = reader.uint64();
                    break;
                case 5:
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
        const message = createBaseBandPriceState();
        message.symbol = object.symbol ?? "";
        message.rate = object.rate ?? "";
        message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
        message.requestID = object.requestID !== undefined && object.requestID !== null ? BigInt(object.requestID.toString()) : BigInt(0);
        message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBandPriceState();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = object.rate;
        }
        if (object.resolve_time !== undefined && object.resolve_time !== null) {
            message.resolveTime = BigInt(object.resolve_time);
        }
        if (object.request_ID !== undefined && object.request_ID !== null) {
            message.requestID = BigInt(object.request_ID);
        }
        if (object.price_state !== undefined && object.price_state !== null) {
            message.priceState = PriceState.fromAmino(object.price_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.rate = message.rate === "" ? undefined : message.rate;
        obj.resolve_time = message.resolveTime !== BigInt(0) ? (message.resolveTime?.toString)() : undefined;
        obj.request_ID = message.requestID !== BigInt(0) ? (message.requestID?.toString)() : undefined;
        obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BandPriceState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BandPriceState.decode(message.value);
    },
    toProto(message) {
        return BandPriceState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.BandPriceState",
            value: BandPriceState.encode(message).finish()
        };
    }
};
function createBasePriceFeedState() {
    return {
        base: "",
        quote: "",
        priceState: undefined,
        relayers: []
    };
}
export const PriceFeedState = {
    typeUrl: "/injective.oracle.v1beta1.PriceFeedState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.base !== "") {
            writer.uint32(10).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(18).string(message.quote);
        }
        if (message.priceState !== undefined) {
            PriceState.encode(message.priceState, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.relayers) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceFeedState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = reader.string();
                    break;
                case 2:
                    message.quote = reader.string();
                    break;
                case 3:
                    message.priceState = PriceState.decode(reader, reader.uint32());
                    break;
                case 4:
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
        const message = createBasePriceFeedState();
        message.base = object.base ?? "";
        message.quote = object.quote ?? "";
        message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceFeedState();
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.quote !== undefined && object.quote !== null) {
            message.quote = object.quote;
        }
        if (object.price_state !== undefined && object.price_state !== null) {
            message.priceState = PriceState.fromAmino(object.price_state);
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base = message.base === "" ? undefined : message.base;
        obj.quote = message.quote === "" ? undefined : message.quote;
        obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PriceFeedState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceFeedState.decode(message.value);
    },
    toProto(message) {
        return PriceFeedState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.PriceFeedState",
            value: PriceFeedState.encode(message).finish()
        };
    }
};
function createBaseProviderInfo() {
    return {
        provider: "",
        relayers: []
    };
}
export const ProviderInfo = {
    typeUrl: "/injective.oracle.v1beta1.ProviderInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        for (const v of message.relayers) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = reader.string();
                    break;
                case 2:
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
        const message = createBaseProviderInfo();
        message.provider = object.provider ?? "";
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProviderInfo();
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        message.relayers = object.relayers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.provider = message.provider === "" ? undefined : message.provider;
        if (message.relayers) {
            obj.relayers = message.relayers.map(e => e);
        }
        else {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ProviderInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProviderInfo.decode(message.value);
    },
    toProto(message) {
        return ProviderInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.ProviderInfo",
            value: ProviderInfo.encode(message).finish()
        };
    }
};
function createBaseProviderState() {
    return {
        providerInfo: undefined,
        providerPriceStates: []
    };
}
export const ProviderState = {
    typeUrl: "/injective.oracle.v1beta1.ProviderState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.providerInfo !== undefined) {
            ProviderInfo.encode(message.providerInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.providerPriceStates) {
            ProviderPriceState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providerInfo = ProviderInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.providerPriceStates.push(ProviderPriceState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProviderState();
        message.providerInfo = object.providerInfo !== undefined && object.providerInfo !== null ? ProviderInfo.fromPartial(object.providerInfo) : undefined;
        message.providerPriceStates = object.providerPriceStates?.map(e => ProviderPriceState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProviderState();
        if (object.provider_info !== undefined && object.provider_info !== null) {
            message.providerInfo = ProviderInfo.fromAmino(object.provider_info);
        }
        message.providerPriceStates = object.provider_price_states?.map(e => ProviderPriceState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.provider_info = message.providerInfo ? ProviderInfo.toAmino(message.providerInfo) : undefined;
        if (message.providerPriceStates) {
            obj.provider_price_states = message.providerPriceStates.map(e => e ? ProviderPriceState.toAmino(e) : undefined);
        }
        else {
            obj.provider_price_states = message.providerPriceStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ProviderState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProviderState.decode(message.value);
    },
    toProto(message) {
        return ProviderState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.ProviderState",
            value: ProviderState.encode(message).finish()
        };
    }
};
function createBaseProviderPriceState() {
    return {
        symbol: "",
        state: undefined
    };
}
export const ProviderPriceState = {
    typeUrl: "/injective.oracle.v1beta1.ProviderPriceState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.state !== undefined) {
            PriceState.encode(message.state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderPriceState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.state = PriceState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProviderPriceState();
        message.symbol = object.symbol ?? "";
        message.state = object.state !== undefined && object.state !== null ? PriceState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProviderPriceState();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = PriceState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.state = message.state ? PriceState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ProviderPriceState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProviderPriceState.decode(message.value);
    },
    toProto(message) {
        return ProviderPriceState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.ProviderPriceState",
            value: ProviderPriceState.encode(message).finish()
        };
    }
};
function createBasePriceFeedInfo() {
    return {
        base: "",
        quote: ""
    };
}
export const PriceFeedInfo = {
    typeUrl: "/injective.oracle.v1beta1.PriceFeedInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.base !== "") {
            writer.uint32(10).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(18).string(message.quote);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceFeedInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = reader.string();
                    break;
                case 2:
                    message.quote = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePriceFeedInfo();
        message.base = object.base ?? "";
        message.quote = object.quote ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceFeedInfo();
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.quote !== undefined && object.quote !== null) {
            message.quote = object.quote;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base = message.base === "" ? undefined : message.base;
        obj.quote = message.quote === "" ? undefined : message.quote;
        return obj;
    },
    fromAminoMsg(object) {
        return PriceFeedInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceFeedInfo.decode(message.value);
    },
    toProto(message) {
        return PriceFeedInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.PriceFeedInfo",
            value: PriceFeedInfo.encode(message).finish()
        };
    }
};
function createBasePriceFeedPrice() {
    return {
        price: ""
    };
}
export const PriceFeedPrice = {
    typeUrl: "/injective.oracle.v1beta1.PriceFeedPrice",
    encode(message, writer = BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceFeedPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePriceFeedPrice();
        message.price = object.price ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceFeedPrice();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price === "" ? undefined : message.price;
        return obj;
    },
    fromAminoMsg(object) {
        return PriceFeedPrice.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceFeedPrice.decode(message.value);
    },
    toProto(message) {
        return PriceFeedPrice.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.PriceFeedPrice",
            value: PriceFeedPrice.encode(message).finish()
        };
    }
};
function createBaseCoinbasePriceState() {
    return {
        kind: "",
        timestamp: BigInt(0),
        key: "",
        value: BigInt(0),
        priceState: PriceState.fromPartial({})
    };
}
export const CoinbasePriceState = {
    typeUrl: "/injective.oracle.v1beta1.CoinbasePriceState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(32).uint64(message.value);
        }
        if (message.priceState !== undefined) {
            PriceState.encode(message.priceState, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoinbasePriceState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.value = reader.uint64();
                    break;
                case 5:
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
        const message = createBaseCoinbasePriceState();
        message.kind = object.kind ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.key = object.key ?? "";
        message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
        message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCoinbasePriceState();
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = BigInt(object.value);
        }
        if (object.price_state !== undefined && object.price_state !== null) {
            message.priceState = PriceState.fromAmino(object.price_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.kind = message.kind === "" ? undefined : message.kind;
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value !== BigInt(0) ? (message.value?.toString)() : undefined;
        obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CoinbasePriceState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CoinbasePriceState.decode(message.value);
    },
    toProto(message) {
        return CoinbasePriceState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.CoinbasePriceState",
            value: CoinbasePriceState.encode(message).finish()
        };
    }
};
function createBasePriceState() {
    return {
        price: "",
        cumulativePrice: "",
        timestamp: BigInt(0)
    };
}
export const PriceState = {
    typeUrl: "/injective.oracle.v1beta1.PriceState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.cumulativePrice !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.cumulativePrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePriceState();
        message.price = object.price ?? "";
        message.cumulativePrice = object.cumulativePrice ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceState();
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.cumulative_price !== undefined && object.cumulative_price !== null) {
            message.cumulativePrice = object.cumulative_price;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price = message.price === "" ? undefined : message.price;
        obj.cumulative_price = message.cumulativePrice === "" ? undefined : message.cumulativePrice;
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PriceState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceState.decode(message.value);
    },
    toProto(message) {
        return PriceState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.PriceState",
            value: PriceState.encode(message).finish()
        };
    }
};
function createBaseBandOracleRequest() {
    return {
        requestId: BigInt(0),
        oracleScriptId: BigInt(0),
        symbols: [],
        askCount: BigInt(0),
        minCount: BigInt(0),
        feeLimit: [],
        prepareGas: BigInt(0),
        executeGas: BigInt(0)
    };
}
export const BandOracleRequest = {
    typeUrl: "/injective.oracle.v1beta1.BandOracleRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.requestId !== BigInt(0)) {
            writer.uint32(8).uint64(message.requestId);
        }
        if (message.oracleScriptId !== BigInt(0)) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        for (const v of message.symbols) {
            writer.uint32(26).string(v);
        }
        if (message.askCount !== BigInt(0)) {
            writer.uint32(32).uint64(message.askCount);
        }
        if (message.minCount !== BigInt(0)) {
            writer.uint32(40).uint64(message.minCount);
        }
        for (const v of message.feeLimit) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.prepareGas !== BigInt(0)) {
            writer.uint32(56).uint64(message.prepareGas);
        }
        if (message.executeGas !== BigInt(0)) {
            writer.uint32(64).uint64(message.executeGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBandOracleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint64();
                    break;
                case 2:
                    message.oracleScriptId = reader.int64();
                    break;
                case 3:
                    message.symbols.push(reader.string());
                    break;
                case 4:
                    message.askCount = reader.uint64();
                    break;
                case 5:
                    message.minCount = reader.uint64();
                    break;
                case 6:
                    message.feeLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.prepareGas = reader.uint64();
                    break;
                case 8:
                    message.executeGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBandOracleRequest();
        message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
        message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
        message.symbols = object.symbols?.map(e => e) || [];
        message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
        message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
        message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
        message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? BigInt(object.prepareGas.toString()) : BigInt(0);
        message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBandOracleRequest();
        if (object.request_id !== undefined && object.request_id !== null) {
            message.requestId = BigInt(object.request_id);
        }
        if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
            message.oracleScriptId = BigInt(object.oracle_script_id);
        }
        message.symbols = object.symbols?.map(e => e) || [];
        if (object.ask_count !== undefined && object.ask_count !== null) {
            message.askCount = BigInt(object.ask_count);
        }
        if (object.min_count !== undefined && object.min_count !== null) {
            message.minCount = BigInt(object.min_count);
        }
        message.feeLimit = object.fee_limit?.map(e => Coin.fromAmino(e)) || [];
        if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
            message.prepareGas = BigInt(object.prepare_gas);
        }
        if (object.execute_gas !== undefined && object.execute_gas !== null) {
            message.executeGas = BigInt(object.execute_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.request_id = message.requestId !== BigInt(0) ? (message.requestId?.toString)() : undefined;
        obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? (message.oracleScriptId?.toString)() : undefined;
        if (message.symbols) {
            obj.symbols = message.symbols.map(e => e);
        }
        else {
            obj.symbols = message.symbols;
        }
        obj.ask_count = message.askCount !== BigInt(0) ? (message.askCount?.toString)() : undefined;
        obj.min_count = message.minCount !== BigInt(0) ? (message.minCount?.toString)() : undefined;
        if (message.feeLimit) {
            obj.fee_limit = message.feeLimit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.fee_limit = message.feeLimit;
        }
        obj.prepare_gas = message.prepareGas !== BigInt(0) ? (message.prepareGas?.toString)() : undefined;
        obj.execute_gas = message.executeGas !== BigInt(0) ? (message.executeGas?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BandOracleRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BandOracleRequest.decode(message.value);
    },
    toProto(message) {
        return BandOracleRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.BandOracleRequest",
            value: BandOracleRequest.encode(message).finish()
        };
    }
};
function createBaseBandIBCParams() {
    return {
        bandIbcEnabled: false,
        ibcRequestInterval: BigInt(0),
        ibcSourceChannel: "",
        ibcVersion: "",
        ibcPortId: ""
    };
}
export const BandIBCParams = {
    typeUrl: "/injective.oracle.v1beta1.BandIBCParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bandIbcEnabled === true) {
            writer.uint32(8).bool(message.bandIbcEnabled);
        }
        if (message.ibcRequestInterval !== BigInt(0)) {
            writer.uint32(16).int64(message.ibcRequestInterval);
        }
        if (message.ibcSourceChannel !== "") {
            writer.uint32(26).string(message.ibcSourceChannel);
        }
        if (message.ibcVersion !== "") {
            writer.uint32(34).string(message.ibcVersion);
        }
        if (message.ibcPortId !== "") {
            writer.uint32(42).string(message.ibcPortId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBandIBCParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bandIbcEnabled = reader.bool();
                    break;
                case 2:
                    message.ibcRequestInterval = reader.int64();
                    break;
                case 3:
                    message.ibcSourceChannel = reader.string();
                    break;
                case 4:
                    message.ibcVersion = reader.string();
                    break;
                case 5:
                    message.ibcPortId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBandIBCParams();
        message.bandIbcEnabled = object.bandIbcEnabled ?? false;
        message.ibcRequestInterval = object.ibcRequestInterval !== undefined && object.ibcRequestInterval !== null ? BigInt(object.ibcRequestInterval.toString()) : BigInt(0);
        message.ibcSourceChannel = object.ibcSourceChannel ?? "";
        message.ibcVersion = object.ibcVersion ?? "";
        message.ibcPortId = object.ibcPortId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBandIBCParams();
        if (object.band_ibc_enabled !== undefined && object.band_ibc_enabled !== null) {
            message.bandIbcEnabled = object.band_ibc_enabled;
        }
        if (object.ibc_request_interval !== undefined && object.ibc_request_interval !== null) {
            message.ibcRequestInterval = BigInt(object.ibc_request_interval);
        }
        if (object.ibc_source_channel !== undefined && object.ibc_source_channel !== null) {
            message.ibcSourceChannel = object.ibc_source_channel;
        }
        if (object.ibc_version !== undefined && object.ibc_version !== null) {
            message.ibcVersion = object.ibc_version;
        }
        if (object.ibc_port_id !== undefined && object.ibc_port_id !== null) {
            message.ibcPortId = object.ibc_port_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.band_ibc_enabled = message.bandIbcEnabled === false ? undefined : message.bandIbcEnabled;
        obj.ibc_request_interval = message.ibcRequestInterval !== BigInt(0) ? (message.ibcRequestInterval?.toString)() : undefined;
        obj.ibc_source_channel = message.ibcSourceChannel === "" ? undefined : message.ibcSourceChannel;
        obj.ibc_version = message.ibcVersion === "" ? undefined : message.ibcVersion;
        obj.ibc_port_id = message.ibcPortId === "" ? undefined : message.ibcPortId;
        return obj;
    },
    fromAminoMsg(object) {
        return BandIBCParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BandIBCParams.decode(message.value);
    },
    toProto(message) {
        return BandIBCParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.BandIBCParams",
            value: BandIBCParams.encode(message).finish()
        };
    }
};
function createBaseSymbolPriceTimestamp() {
    return {
        oracle: 0,
        symbolId: "",
        timestamp: BigInt(0)
    };
}
export const SymbolPriceTimestamp = {
    typeUrl: "/injective.oracle.v1beta1.SymbolPriceTimestamp",
    encode(message, writer = BinaryWriter.create()) {
        if (message.oracle !== 0) {
            writer.uint32(8).int32(message.oracle);
        }
        if (message.symbolId !== "") {
            writer.uint32(18).string(message.symbolId);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSymbolPriceTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracle = reader.int32();
                    break;
                case 2:
                    message.symbolId = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSymbolPriceTimestamp();
        message.oracle = object.oracle ?? 0;
        message.symbolId = object.symbolId ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSymbolPriceTimestamp();
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = object.oracle;
        }
        if (object.symbol_id !== undefined && object.symbol_id !== null) {
            message.symbolId = object.symbol_id;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.oracle = message.oracle === 0 ? undefined : message.oracle;
        obj.symbol_id = message.symbolId === "" ? undefined : message.symbolId;
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SymbolPriceTimestamp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SymbolPriceTimestamp.decode(message.value);
    },
    toProto(message) {
        return SymbolPriceTimestamp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.SymbolPriceTimestamp",
            value: SymbolPriceTimestamp.encode(message).finish()
        };
    }
};
function createBaseLastPriceTimestamps() {
    return {
        lastPriceTimestamps: []
    };
}
export const LastPriceTimestamps = {
    typeUrl: "/injective.oracle.v1beta1.LastPriceTimestamps",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.lastPriceTimestamps) {
            SymbolPriceTimestamp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastPriceTimestamps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastPriceTimestamps.push(SymbolPriceTimestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLastPriceTimestamps();
        message.lastPriceTimestamps = object.lastPriceTimestamps?.map(e => SymbolPriceTimestamp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseLastPriceTimestamps();
        message.lastPriceTimestamps = object.last_price_timestamps?.map(e => SymbolPriceTimestamp.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.lastPriceTimestamps) {
            obj.last_price_timestamps = message.lastPriceTimestamps.map(e => e ? SymbolPriceTimestamp.toAmino(e) : undefined);
        }
        else {
            obj.last_price_timestamps = message.lastPriceTimestamps;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return LastPriceTimestamps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LastPriceTimestamps.decode(message.value);
    },
    toProto(message) {
        return LastPriceTimestamps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.LastPriceTimestamps",
            value: LastPriceTimestamps.encode(message).finish()
        };
    }
};
function createBasePriceRecords() {
    return {
        oracle: 0,
        symbolId: "",
        latestPriceRecords: []
    };
}
export const PriceRecords = {
    typeUrl: "/injective.oracle.v1beta1.PriceRecords",
    encode(message, writer = BinaryWriter.create()) {
        if (message.oracle !== 0) {
            writer.uint32(8).int32(message.oracle);
        }
        if (message.symbolId !== "") {
            writer.uint32(18).string(message.symbolId);
        }
        for (const v of message.latestPriceRecords) {
            PriceRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceRecords();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracle = reader.int32();
                    break;
                case 2:
                    message.symbolId = reader.string();
                    break;
                case 3:
                    message.latestPriceRecords.push(PriceRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePriceRecords();
        message.oracle = object.oracle ?? 0;
        message.symbolId = object.symbolId ?? "";
        message.latestPriceRecords = object.latestPriceRecords?.map(e => PriceRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceRecords();
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = object.oracle;
        }
        if (object.symbol_id !== undefined && object.symbol_id !== null) {
            message.symbolId = object.symbol_id;
        }
        message.latestPriceRecords = object.latest_price_records?.map(e => PriceRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.oracle = message.oracle === 0 ? undefined : message.oracle;
        obj.symbol_id = message.symbolId === "" ? undefined : message.symbolId;
        if (message.latestPriceRecords) {
            obj.latest_price_records = message.latestPriceRecords.map(e => e ? PriceRecord.toAmino(e) : undefined);
        }
        else {
            obj.latest_price_records = message.latestPriceRecords;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PriceRecords.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceRecords.decode(message.value);
    },
    toProto(message) {
        return PriceRecords.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.PriceRecords",
            value: PriceRecords.encode(message).finish()
        };
    }
};
function createBasePriceRecord() {
    return {
        timestamp: BigInt(0),
        price: ""
    };
}
export const PriceRecord = {
    typeUrl: "/injective.oracle.v1beta1.PriceRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.price !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.int64();
                    break;
                case 2:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePriceRecord();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.price = object.price ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePriceRecord();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        obj.price = message.price === "" ? undefined : message.price;
        return obj;
    },
    fromAminoMsg(object) {
        return PriceRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PriceRecord.decode(message.value);
    },
    toProto(message) {
        return PriceRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.PriceRecord",
            value: PriceRecord.encode(message).finish()
        };
    }
};
function createBaseMetadataStatistics() {
    return {
        groupCount: 0,
        recordsSampleSize: 0,
        mean: "",
        twap: "",
        firstTimestamp: BigInt(0),
        lastTimestamp: BigInt(0),
        minPrice: "",
        maxPrice: "",
        medianPrice: ""
    };
}
export const MetadataStatistics = {
    typeUrl: "/injective.oracle.v1beta1.MetadataStatistics",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupCount !== 0) {
            writer.uint32(8).uint32(message.groupCount);
        }
        if (message.recordsSampleSize !== 0) {
            writer.uint32(16).uint32(message.recordsSampleSize);
        }
        if (message.mean !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.mean, 18).atomics);
        }
        if (message.twap !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.twap, 18).atomics);
        }
        if (message.firstTimestamp !== BigInt(0)) {
            writer.uint32(40).int64(message.firstTimestamp);
        }
        if (message.lastTimestamp !== BigInt(0)) {
            writer.uint32(48).int64(message.lastTimestamp);
        }
        if (message.minPrice !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.minPrice, 18).atomics);
        }
        if (message.maxPrice !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
        }
        if (message.medianPrice !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.medianPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadataStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupCount = reader.uint32();
                    break;
                case 2:
                    message.recordsSampleSize = reader.uint32();
                    break;
                case 3:
                    message.mean = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.twap = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.firstTimestamp = reader.int64();
                    break;
                case 6:
                    message.lastTimestamp = reader.int64();
                    break;
                case 7:
                    message.minPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.maxPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.medianPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMetadataStatistics();
        message.groupCount = object.groupCount ?? 0;
        message.recordsSampleSize = object.recordsSampleSize ?? 0;
        message.mean = object.mean ?? "";
        message.twap = object.twap ?? "";
        message.firstTimestamp = object.firstTimestamp !== undefined && object.firstTimestamp !== null ? BigInt(object.firstTimestamp.toString()) : BigInt(0);
        message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? BigInt(object.lastTimestamp.toString()) : BigInt(0);
        message.minPrice = object.minPrice ?? "";
        message.maxPrice = object.maxPrice ?? "";
        message.medianPrice = object.medianPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMetadataStatistics();
        if (object.group_count !== undefined && object.group_count !== null) {
            message.groupCount = object.group_count;
        }
        if (object.records_sample_size !== undefined && object.records_sample_size !== null) {
            message.recordsSampleSize = object.records_sample_size;
        }
        if (object.mean !== undefined && object.mean !== null) {
            message.mean = object.mean;
        }
        if (object.twap !== undefined && object.twap !== null) {
            message.twap = object.twap;
        }
        if (object.first_timestamp !== undefined && object.first_timestamp !== null) {
            message.firstTimestamp = BigInt(object.first_timestamp);
        }
        if (object.last_timestamp !== undefined && object.last_timestamp !== null) {
            message.lastTimestamp = BigInt(object.last_timestamp);
        }
        if (object.min_price !== undefined && object.min_price !== null) {
            message.minPrice = object.min_price;
        }
        if (object.max_price !== undefined && object.max_price !== null) {
            message.maxPrice = object.max_price;
        }
        if (object.median_price !== undefined && object.median_price !== null) {
            message.medianPrice = object.median_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_count = message.groupCount === 0 ? undefined : message.groupCount;
        obj.records_sample_size = message.recordsSampleSize === 0 ? undefined : message.recordsSampleSize;
        obj.mean = message.mean === "" ? undefined : message.mean;
        obj.twap = message.twap === "" ? undefined : message.twap;
        obj.first_timestamp = message.firstTimestamp !== BigInt(0) ? (message.firstTimestamp?.toString)() : undefined;
        obj.last_timestamp = message.lastTimestamp !== BigInt(0) ? (message.lastTimestamp?.toString)() : undefined;
        obj.min_price = message.minPrice === "" ? undefined : message.minPrice;
        obj.max_price = message.maxPrice === "" ? undefined : message.maxPrice;
        obj.median_price = message.medianPrice === "" ? undefined : message.medianPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return MetadataStatistics.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MetadataStatistics.decode(message.value);
    },
    toProto(message) {
        return MetadataStatistics.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MetadataStatistics",
            value: MetadataStatistics.encode(message).finish()
        };
    }
};
