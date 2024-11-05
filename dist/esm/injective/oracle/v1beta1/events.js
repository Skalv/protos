//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseSetChainlinkPriceEvent() {
    return {
        feedId: "",
        answer: "",
        timestamp: BigInt(0)
    };
}
export const SetChainlinkPriceEvent = {
    typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetChainlinkPriceEvent();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetChainlinkPriceEvent();
        message.feedId = object.feedId ?? "";
        message.answer = object.answer ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetChainlinkPriceEvent();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.answer !== undefined && object.answer !== null) {
            message.answer = object.answer;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.answer = message.answer === "" ? undefined : message.answer;
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SetChainlinkPriceEvent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetChainlinkPriceEvent.decode(message.value);
    },
    toProto(message) {
        return SetChainlinkPriceEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent",
            value: SetChainlinkPriceEvent.encode(message).finish()
        };
    }
};
function createBaseSetBandPriceEvent() {
    return {
        relayer: "",
        symbol: "",
        price: "",
        resolveTime: BigInt(0),
        requestId: BigInt(0)
    };
}
export const SetBandPriceEvent = {
    typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.price !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.resolveTime !== BigInt(0)) {
            writer.uint32(32).uint64(message.resolveTime);
        }
        if (message.requestId !== BigInt(0)) {
            writer.uint32(40).uint64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetBandPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.relayer = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.resolveTime = reader.uint64();
                    break;
                case 5:
                    message.requestId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetBandPriceEvent();
        message.relayer = object.relayer ?? "";
        message.symbol = object.symbol ?? "";
        message.price = object.price ?? "";
        message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
        message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetBandPriceEvent();
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.resolve_time !== undefined && object.resolve_time !== null) {
            message.resolveTime = BigInt(object.resolve_time);
        }
        if (object.request_id !== undefined && object.request_id !== null) {
            message.requestId = BigInt(object.request_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.relayer = message.relayer === "" ? undefined : message.relayer;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.price = message.price === "" ? undefined : message.price;
        obj.resolve_time = message.resolveTime !== BigInt(0) ? (message.resolveTime?.toString)() : undefined;
        obj.request_id = message.requestId !== BigInt(0) ? (message.requestId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SetBandPriceEvent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetBandPriceEvent.decode(message.value);
    },
    toProto(message) {
        return SetBandPriceEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent",
            value: SetBandPriceEvent.encode(message).finish()
        };
    }
};
function createBaseSetBandIBCPriceEvent() {
    return {
        relayer: "",
        symbols: [],
        prices: [],
        resolveTime: BigInt(0),
        requestId: BigInt(0),
        clientId: BigInt(0)
    };
}
export const SetBandIBCPriceEvent = {
    typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        for (const v of message.symbols) {
            writer.uint32(18).string(v);
        }
        for (const v of message.prices) {
            writer.uint32(26).string(Decimal.fromUserInput(v, 18).atomics);
        }
        if (message.resolveTime !== BigInt(0)) {
            writer.uint32(32).uint64(message.resolveTime);
        }
        if (message.requestId !== BigInt(0)) {
            writer.uint32(40).uint64(message.requestId);
        }
        if (message.clientId !== BigInt(0)) {
            writer.uint32(48).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetBandIBCPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.relayer = reader.string();
                    break;
                case 2:
                    message.symbols.push(reader.string());
                    break;
                case 3:
                    message.prices.push(Decimal.fromAtomics(reader.string(), 18).toString());
                    break;
                case 4:
                    message.resolveTime = reader.uint64();
                    break;
                case 5:
                    message.requestId = reader.uint64();
                    break;
                case 6:
                    message.clientId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetBandIBCPriceEvent();
        message.relayer = object.relayer ?? "";
        message.symbols = object.symbols?.map(e => e) || [];
        message.prices = object.prices?.map(e => e) || [];
        message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
        message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
        message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetBandIBCPriceEvent();
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        message.symbols = object.symbols?.map(e => e) || [];
        message.prices = object.prices?.map(e => e) || [];
        if (object.resolve_time !== undefined && object.resolve_time !== null) {
            message.resolveTime = BigInt(object.resolve_time);
        }
        if (object.request_id !== undefined && object.request_id !== null) {
            message.requestId = BigInt(object.request_id);
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = BigInt(object.client_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.relayer = message.relayer === "" ? undefined : message.relayer;
        if (message.symbols) {
            obj.symbols = message.symbols.map(e => e);
        }
        else {
            obj.symbols = message.symbols;
        }
        if (message.prices) {
            obj.prices = message.prices.map(e => e);
        }
        else {
            obj.prices = message.prices;
        }
        obj.resolve_time = message.resolveTime !== BigInt(0) ? (message.resolveTime?.toString)() : undefined;
        obj.request_id = message.requestId !== BigInt(0) ? (message.requestId?.toString)() : undefined;
        obj.client_id = message.clientId !== BigInt(0) ? (message.clientId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SetBandIBCPriceEvent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetBandIBCPriceEvent.decode(message.value);
    },
    toProto(message) {
        return SetBandIBCPriceEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent",
            value: SetBandIBCPriceEvent.encode(message).finish()
        };
    }
};
function createBaseEventBandIBCAckSuccess() {
    return {
        ackResult: "",
        clientId: BigInt(0)
    };
}
export const EventBandIBCAckSuccess = {
    typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ackResult !== "") {
            writer.uint32(10).string(message.ackResult);
        }
        if (message.clientId !== BigInt(0)) {
            writer.uint32(16).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBandIBCAckSuccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ackResult = reader.string();
                    break;
                case 2:
                    message.clientId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBandIBCAckSuccess();
        message.ackResult = object.ackResult ?? "";
        message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBandIBCAckSuccess();
        if (object.ack_result !== undefined && object.ack_result !== null) {
            message.ackResult = object.ack_result;
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = BigInt(object.client_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ack_result = message.ackResult === "" ? undefined : message.ackResult;
        obj.client_id = message.clientId !== BigInt(0) ? (message.clientId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBandIBCAckSuccess.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBandIBCAckSuccess.decode(message.value);
    },
    toProto(message) {
        return EventBandIBCAckSuccess.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess",
            value: EventBandIBCAckSuccess.encode(message).finish()
        };
    }
};
function createBaseEventBandIBCAckError() {
    return {
        ackError: "",
        clientId: BigInt(0)
    };
}
export const EventBandIBCAckError = {
    typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ackError !== "") {
            writer.uint32(10).string(message.ackError);
        }
        if (message.clientId !== BigInt(0)) {
            writer.uint32(16).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBandIBCAckError();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ackError = reader.string();
                    break;
                case 2:
                    message.clientId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBandIBCAckError();
        message.ackError = object.ackError ?? "";
        message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBandIBCAckError();
        if (object.ack_error !== undefined && object.ack_error !== null) {
            message.ackError = object.ack_error;
        }
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = BigInt(object.client_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ack_error = message.ackError === "" ? undefined : message.ackError;
        obj.client_id = message.clientId !== BigInt(0) ? (message.clientId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBandIBCAckError.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBandIBCAckError.decode(message.value);
    },
    toProto(message) {
        return EventBandIBCAckError.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError",
            value: EventBandIBCAckError.encode(message).finish()
        };
    }
};
function createBaseEventBandIBCResponseTimeout() {
    return {
        clientId: BigInt(0)
    };
}
export const EventBandIBCResponseTimeout = {
    typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout",
    encode(message, writer = BinaryWriter.create()) {
        if (message.clientId !== BigInt(0)) {
            writer.uint32(8).int64(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBandIBCResponseTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBandIBCResponseTimeout();
        message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBandIBCResponseTimeout();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = BigInt(object.client_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId !== BigInt(0) ? (message.clientId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBandIBCResponseTimeout.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBandIBCResponseTimeout.decode(message.value);
    },
    toProto(message) {
        return EventBandIBCResponseTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout",
            value: EventBandIBCResponseTimeout.encode(message).finish()
        };
    }
};
function createBaseSetPriceFeedPriceEvent() {
    return {
        relayer: "",
        base: "",
        quote: "",
        price: ""
    };
}
export const SetPriceFeedPriceEvent = {
    typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        if (message.base !== "") {
            writer.uint32(18).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(26).string(message.quote);
        }
        if (message.price !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetPriceFeedPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.relayer = reader.string();
                    break;
                case 2:
                    message.base = reader.string();
                    break;
                case 3:
                    message.quote = reader.string();
                    break;
                case 4:
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
        const message = createBaseSetPriceFeedPriceEvent();
        message.relayer = object.relayer ?? "";
        message.base = object.base ?? "";
        message.quote = object.quote ?? "";
        message.price = object.price ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetPriceFeedPriceEvent();
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.quote !== undefined && object.quote !== null) {
            message.quote = object.quote;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.relayer = message.relayer === "" ? undefined : message.relayer;
        obj.base = message.base === "" ? undefined : message.base;
        obj.quote = message.quote === "" ? undefined : message.quote;
        obj.price = message.price === "" ? undefined : message.price;
        return obj;
    },
    fromAminoMsg(object) {
        return SetPriceFeedPriceEvent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetPriceFeedPriceEvent.decode(message.value);
    },
    toProto(message) {
        return SetPriceFeedPriceEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent",
            value: SetPriceFeedPriceEvent.encode(message).finish()
        };
    }
};
function createBaseSetProviderPriceEvent() {
    return {
        provider: "",
        relayer: "",
        symbol: "",
        price: ""
    };
}
export const SetProviderPriceEvent = {
    typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.provider !== "") {
            writer.uint32(10).string(message.provider);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.price !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetProviderPriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
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
        const message = createBaseSetProviderPriceEvent();
        message.provider = object.provider ?? "";
        message.relayer = object.relayer ?? "";
        message.symbol = object.symbol ?? "";
        message.price = object.price ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetProviderPriceEvent();
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.provider = message.provider === "" ? undefined : message.provider;
        obj.relayer = message.relayer === "" ? undefined : message.relayer;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.price = message.price === "" ? undefined : message.price;
        return obj;
    },
    fromAminoMsg(object) {
        return SetProviderPriceEvent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetProviderPriceEvent.decode(message.value);
    },
    toProto(message) {
        return SetProviderPriceEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent",
            value: SetProviderPriceEvent.encode(message).finish()
        };
    }
};
function createBaseSetCoinbasePriceEvent() {
    return {
        symbol: "",
        price: "",
        timestamp: BigInt(0)
    };
}
export const SetCoinbasePriceEvent = {
    typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.price !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetCoinbasePriceEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.price = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSetCoinbasePriceEvent();
        message.symbol = object.symbol ?? "";
        message.price = object.price ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSetCoinbasePriceEvent();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.price = message.price === "" ? undefined : message.price;
        obj.timestamp = message.timestamp !== BigInt(0) ? (message.timestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SetCoinbasePriceEvent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SetCoinbasePriceEvent.decode(message.value);
    },
    toProto(message) {
        return SetCoinbasePriceEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent",
            value: SetCoinbasePriceEvent.encode(message).finish()
        };
    }
};
