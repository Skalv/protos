"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSetPreferences = exports.ValidatorPreference = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseValidatorPreference() {
    return {
        valOperAddress: "",
        weight: ""
    };
}
exports.ValidatorPreference = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.valOperAddress !== "") {
            writer.uint32(10).string(message.valOperAddress);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valOperAddress = reader.string();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorPreference();
        message.valOperAddress = object.valOperAddress ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorPreference();
        if (object.val_oper_address !== undefined && object.val_oper_address !== null) {
            message.valOperAddress = object.val_oper_address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.val_oper_address = message.valOperAddress === "" ? undefined : message.valOperAddress;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorPreference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/validator-preference",
            value: exports.ValidatorPreference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorPreference.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorPreference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
            value: exports.ValidatorPreference.encode(message).finish()
        };
    }
};
function createBaseValidatorSetPreferences() {
    return {
        preferences: []
    };
}
exports.ValidatorSetPreferences = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.preferences) {
            exports.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSetPreferences();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.preferences.push(exports.ValidatorPreference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSetPreferences();
        message.preferences = object.preferences?.map(e => exports.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSetPreferences();
        message.preferences = object.preferences?.map(e => exports.ValidatorPreference.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? exports.ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = message.preferences;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSetPreferences.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/validator-set-preferences",
            value: exports.ValidatorSetPreferences.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSetPreferences.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSetPreferences.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
            value: exports.ValidatorSetPreferences.encode(message).finish()
        };
    }
};
