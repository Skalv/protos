//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgRelayProviderPrices() {
    return {
        sender: "",
        provider: "",
        symbols: [],
        prices: []
    };
}
export const MsgRelayProviderPrices = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        for (const v of message.symbols) {
            writer.uint32(26).string(v);
        }
        for (const v of message.prices) {
            writer.uint32(34).string(Decimal.fromUserInput(v, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayProviderPrices();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.provider = reader.string();
                    break;
                case 3:
                    message.symbols.push(reader.string());
                    break;
                case 4:
                    message.prices.push(Decimal.fromAtomics(reader.string(), 18).toString());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRelayProviderPrices();
        message.sender = object.sender ?? "";
        message.provider = object.provider ?? "";
        message.symbols = object.symbols?.map(e => e) || [];
        message.prices = object.prices?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRelayProviderPrices();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        message.symbols = object.symbols?.map(e => e) || [];
        message.prices = object.prices?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.provider = message.provider === "" ? undefined : message.provider;
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
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayProviderPrices.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayProviderPrices.decode(message.value);
    },
    toProto(message) {
        return MsgRelayProviderPrices.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
            value: MsgRelayProviderPrices.encode(message).finish()
        };
    }
};
function createBaseMsgRelayProviderPricesResponse() {
    return {};
}
export const MsgRelayProviderPricesResponse = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayProviderPricesResponse();
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
        const message = createBaseMsgRelayProviderPricesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRelayProviderPricesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayProviderPricesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayProviderPricesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRelayProviderPricesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse",
            value: MsgRelayProviderPricesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRelayPriceFeedPrice() {
    return {
        sender: "",
        base: [],
        quote: [],
        price: []
    };
}
export const MsgRelayPriceFeedPrice = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.base) {
            writer.uint32(18).string(v);
        }
        for (const v of message.quote) {
            writer.uint32(26).string(v);
        }
        for (const v of message.price) {
            writer.uint32(34).string(Decimal.fromUserInput(v, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayPriceFeedPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.base.push(reader.string());
                    break;
                case 3:
                    message.quote.push(reader.string());
                    break;
                case 4:
                    message.price.push(Decimal.fromAtomics(reader.string(), 18).toString());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRelayPriceFeedPrice();
        message.sender = object.sender ?? "";
        message.base = object.base?.map(e => e) || [];
        message.quote = object.quote?.map(e => e) || [];
        message.price = object.price?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRelayPriceFeedPrice();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.base = object.base?.map(e => e) || [];
        message.quote = object.quote?.map(e => e) || [];
        message.price = object.price?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.base) {
            obj.base = message.base.map(e => e);
        }
        else {
            obj.base = message.base;
        }
        if (message.quote) {
            obj.quote = message.quote.map(e => e);
        }
        else {
            obj.quote = message.quote;
        }
        if (message.price) {
            obj.price = message.price.map(e => e);
        }
        else {
            obj.price = message.price;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayPriceFeedPrice.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayPriceFeedPrice.decode(message.value);
    },
    toProto(message) {
        return MsgRelayPriceFeedPrice.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
            value: MsgRelayPriceFeedPrice.encode(message).finish()
        };
    }
};
function createBaseMsgRelayPriceFeedPriceResponse() {
    return {};
}
export const MsgRelayPriceFeedPriceResponse = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayPriceFeedPriceResponse();
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
        const message = createBaseMsgRelayPriceFeedPriceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRelayPriceFeedPriceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayPriceFeedPriceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayPriceFeedPriceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRelayPriceFeedPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse",
            value: MsgRelayPriceFeedPriceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRelayBandRates() {
    return {
        relayer: "",
        symbols: [],
        rates: [],
        resolveTimes: [],
        requestIDs: []
    };
}
export const MsgRelayBandRates = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
    encode(message, writer = BinaryWriter.create()) {
        if (message.relayer !== "") {
            writer.uint32(10).string(message.relayer);
        }
        for (const v of message.symbols) {
            writer.uint32(18).string(v);
        }
        writer.uint32(26).fork();
        for (const v of message.rates) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.resolveTimes) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(42).fork();
        for (const v of message.requestIDs) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayBandRates();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.rates.push(reader.uint64());
                        }
                    }
                    else {
                        message.rates.push(reader.uint64());
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.resolveTimes.push(reader.uint64());
                        }
                    }
                    else {
                        message.resolveTimes.push(reader.uint64());
                    }
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.requestIDs.push(reader.uint64());
                        }
                    }
                    else {
                        message.requestIDs.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRelayBandRates();
        message.relayer = object.relayer ?? "";
        message.symbols = object.symbols?.map(e => e) || [];
        message.rates = object.rates?.map(e => BigInt(e.toString())) || [];
        message.resolveTimes = object.resolveTimes?.map(e => BigInt(e.toString())) || [];
        message.requestIDs = object.requestIDs?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRelayBandRates();
        if (object.relayer !== undefined && object.relayer !== null) {
            message.relayer = object.relayer;
        }
        message.symbols = object.symbols?.map(e => e) || [];
        message.rates = object.rates?.map(e => BigInt(e)) || [];
        message.resolveTimes = object.resolve_times?.map(e => BigInt(e)) || [];
        message.requestIDs = object.requestIDs?.map(e => BigInt(e)) || [];
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
        if (message.rates) {
            obj.rates = message.rates.map(e => e.toString());
        }
        else {
            obj.rates = message.rates;
        }
        if (message.resolveTimes) {
            obj.resolve_times = message.resolveTimes.map(e => e.toString());
        }
        else {
            obj.resolve_times = message.resolveTimes;
        }
        if (message.requestIDs) {
            obj.requestIDs = message.requestIDs.map(e => e.toString());
        }
        else {
            obj.requestIDs = message.requestIDs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayBandRates.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayBandRates.decode(message.value);
    },
    toProto(message) {
        return MsgRelayBandRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
            value: MsgRelayBandRates.encode(message).finish()
        };
    }
};
function createBaseMsgRelayBandRatesResponse() {
    return {};
}
export const MsgRelayBandRatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayBandRatesResponse();
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
        const message = createBaseMsgRelayBandRatesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRelayBandRatesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayBandRatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayBandRatesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRelayBandRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse",
            value: MsgRelayBandRatesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRelayCoinbaseMessages() {
    return {
        sender: "",
        messages: [],
        signatures: []
    };
}
export const MsgRelayCoinbaseMessages = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.messages) {
            writer.uint32(18).bytes(v);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayCoinbaseMessages();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.messages.push(reader.bytes());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRelayCoinbaseMessages();
        message.sender = object.sender ?? "";
        message.messages = object.messages?.map(e => e) || [];
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRelayCoinbaseMessages();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.messages = object.messages?.map(e => bytesFromBase64(e)) || [];
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.messages) {
            obj.messages = message.messages.map(e => base64FromBytes(e));
        }
        else {
            obj.messages = message.messages;
        }
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayCoinbaseMessages.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayCoinbaseMessages.decode(message.value);
    },
    toProto(message) {
        return MsgRelayCoinbaseMessages.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
            value: MsgRelayCoinbaseMessages.encode(message).finish()
        };
    }
};
function createBaseMsgRelayCoinbaseMessagesResponse() {
    return {};
}
export const MsgRelayCoinbaseMessagesResponse = {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRelayCoinbaseMessagesResponse();
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
        const message = createBaseMsgRelayCoinbaseMessagesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRelayCoinbaseMessagesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRelayCoinbaseMessagesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRelayCoinbaseMessagesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRelayCoinbaseMessagesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse",
            value: MsgRelayCoinbaseMessagesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBandIBCRates() {
    return {
        sender: "",
        requestId: BigInt(0)
    };
}
export const MsgRequestBandIBCRates = {
    typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.requestId !== BigInt(0)) {
            writer.uint32(16).uint64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBandIBCRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgRequestBandIBCRates();
        message.sender = object.sender ?? "";
        message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRequestBandIBCRates();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.request_id !== undefined && object.request_id !== null) {
            message.requestId = BigInt(object.request_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.request_id = message.requestId !== BigInt(0) ? (message.requestId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRequestBandIBCRates.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRequestBandIBCRates.decode(message.value);
    },
    toProto(message) {
        return MsgRequestBandIBCRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
            value: MsgRequestBandIBCRates.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBandIBCRatesResponse() {
    return {};
}
export const MsgRequestBandIBCRatesResponse = {
    typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBandIBCRatesResponse();
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
        const message = createBaseMsgRequestBandIBCRatesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRequestBandIBCRatesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRequestBandIBCRatesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRequestBandIBCRatesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRequestBandIBCRatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse",
            value: MsgRequestBandIBCRatesResponse.encode(message).finish()
        };
    }
};
