"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseParams() {
    return {
        inflationDecayFactor: "",
        initialInflation: "",
        variance: ""
    };
}
exports.Params = {
    typeUrl: "/akash.inflation.v1beta2.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inflationDecayFactor !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.inflationDecayFactor, 18).atomics);
        }
        if (message.initialInflation !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.initialInflation, 18).atomics);
        }
        if (message.variance !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.variance, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflationDecayFactor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.initialInflation = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.variance = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.inflation.v1beta2.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
