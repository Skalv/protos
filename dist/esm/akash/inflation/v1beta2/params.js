//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        inflationDecayFactor: "",
        initialInflation: "",
        variance: ""
    };
}
export const Params = {
    typeUrl: "/akash.inflation.v1beta2.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.inflationDecayFactor !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.inflationDecayFactor, 18).atomics);
        }
        if (message.initialInflation !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.initialInflation, 18).atomics);
        }
        if (message.variance !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.variance, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflationDecayFactor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.initialInflation = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.variance = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.inflationDecayFactor = object.inflationDecayFactor ?? "";
        message.initialInflation = object.initialInflation ?? "";
        message.variance = object.variance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.inflation_decay_factor !== undefined && object.inflation_decay_factor !== null) {
            message.inflationDecayFactor = object.inflation_decay_factor;
        }
        if (object.initial_inflation !== undefined && object.initial_inflation !== null) {
            message.initialInflation = object.initial_inflation;
        }
        if (object.variance !== undefined && object.variance !== null) {
            message.variance = object.variance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation_decay_factor = message.inflationDecayFactor ?? "";
        obj.initial_inflation = message.initialInflation ?? "";
        obj.variance = message.variance ?? "";
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
            typeUrl: "/akash.inflation.v1beta2.Params",
            value: Params.encode(message).finish()
        };
    }
};
