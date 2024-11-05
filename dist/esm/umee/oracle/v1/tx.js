//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgAggregateExchangeRatePrevote() {
    return {
        hash: "",
        feeder: "",
        validator: ""
    };
}
export const MsgAggregateExchangeRatePrevote = {
    typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.feeder !== "") {
            writer.uint32(18).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRatePrevote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.feeder = reader.string();
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAggregateExchangeRatePrevote();
        message.hash = object.hash ?? "";
        message.feeder = object.feeder ?? "";
        message.validator = object.validator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAggregateExchangeRatePrevote();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = object.feeder;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.feeder = message.feeder === "" ? undefined : message.feeder;
        obj.validator = message.validator === "" ? undefined : message.validator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAggregateExchangeRatePrevote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRatePrevote.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRatePrevote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
            value: MsgAggregateExchangeRatePrevote.encode(message).finish()
        };
    }
};
function createBaseMsgAggregateExchangeRatePrevoteResponse() {
    return {};
}
export const MsgAggregateExchangeRatePrevoteResponse = {
    typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevoteResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
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
        const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAggregateExchangeRatePrevoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRatePrevoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRatePrevoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevoteResponse",
            value: MsgAggregateExchangeRatePrevoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAggregateExchangeRateVote() {
    return {
        salt: "",
        exchangeRates: "",
        feeder: "",
        validator: ""
    };
}
export const MsgAggregateExchangeRateVote = {
    typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.salt !== "") {
            writer.uint32(10).string(message.salt);
        }
        if (message.exchangeRates !== "") {
            writer.uint32(18).string(message.exchangeRates);
        }
        if (message.feeder !== "") {
            writer.uint32(26).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(34).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRateVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.salt = reader.string();
                    break;
                case 2:
                    message.exchangeRates = reader.string();
                    break;
                case 3:
                    message.feeder = reader.string();
                    break;
                case 4:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAggregateExchangeRateVote();
        message.salt = object.salt ?? "";
        message.exchangeRates = object.exchangeRates ?? "";
        message.feeder = object.feeder ?? "";
        message.validator = object.validator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAggregateExchangeRateVote();
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = object.salt;
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            message.exchangeRates = object.exchange_rates;
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = object.feeder;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.salt = message.salt === "" ? undefined : message.salt;
        obj.exchange_rates = message.exchangeRates === "" ? undefined : message.exchangeRates;
        obj.feeder = message.feeder === "" ? undefined : message.feeder;
        obj.validator = message.validator === "" ? undefined : message.validator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAggregateExchangeRateVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRateVote.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRateVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
            value: MsgAggregateExchangeRateVote.encode(message).finish()
        };
    }
};
function createBaseMsgAggregateExchangeRateVoteResponse() {
    return {};
}
export const MsgAggregateExchangeRateVoteResponse = {
    typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVoteResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
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
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAggregateExchangeRateVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAggregateExchangeRateVoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAggregateExchangeRateVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVoteResponse",
            value: MsgAggregateExchangeRateVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateFeedConsent() {
    return {
        operator: "",
        delegate: ""
    };
}
export const MsgDelegateFeedConsent = {
    typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.operator !== "") {
            writer.uint32(10).string(message.operator);
        }
        if (message.delegate !== "") {
            writer.uint32(18).string(message.delegate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateFeedConsent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.string();
                    break;
                case 2:
                    message.delegate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegateFeedConsent();
        message.operator = object.operator ?? "";
        message.delegate = object.delegate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegateFeedConsent();
        if (object.operator !== undefined && object.operator !== null) {
            message.operator = object.operator;
        }
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = object.delegate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator = message.operator === "" ? undefined : message.operator;
        obj.delegate = message.delegate === "" ? undefined : message.delegate;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegateFeedConsent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDelegateFeedConsent.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateFeedConsent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
            value: MsgDelegateFeedConsent.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateFeedConsentResponse() {
    return {};
}
export const MsgDelegateFeedConsentResponse = {
    typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsentResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateFeedConsentResponse();
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
        const message = createBaseMsgDelegateFeedConsentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDelegateFeedConsentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegateFeedConsentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDelegateFeedConsentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateFeedConsentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsentResponse",
            value: MsgDelegateFeedConsentResponse.encode(message).finish()
        };
    }
};
