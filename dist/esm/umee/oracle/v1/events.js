//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseEventDelegateFeedConsent() {
    return {
        operator: "",
        delegate: ""
    };
}
export const EventDelegateFeedConsent = {
    typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent",
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
        const message = createBaseEventDelegateFeedConsent();
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
        const message = createBaseEventDelegateFeedConsent();
        message.operator = object.operator ?? "";
        message.delegate = object.delegate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDelegateFeedConsent();
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
        return EventDelegateFeedConsent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventDelegateFeedConsent.decode(message.value);
    },
    toProto(message) {
        return EventDelegateFeedConsent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.EventDelegateFeedConsent",
            value: EventDelegateFeedConsent.encode(message).finish()
        };
    }
};
function createBaseEventSetFxRate() {
    return {
        denom: "",
        rate: ""
    };
}
export const EventSetFxRate = {
    typeUrl: "/umee.oracle.v1.EventSetFxRate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.rate !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.rate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSetFxRate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSetFxRate();
        message.denom = object.denom ?? "";
        message.rate = object.rate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSetFxRate();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = object.rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.rate = message.rate === "" ? undefined : message.rate;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSetFxRate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSetFxRate.decode(message.value);
    },
    toProto(message) {
        return EventSetFxRate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.oracle.v1.EventSetFxRate",
            value: EventSetFxRate.encode(message).finish()
        };
    }
};
