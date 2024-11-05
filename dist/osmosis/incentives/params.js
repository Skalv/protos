"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
function createBaseParams() {
    return {
        distrEpochIdentifier: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.incentives.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distrEpochIdentifier !== "") {
            writer.uint32(10).string(message.distrEpochIdentifier);
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
                    message.distrEpochIdentifier = reader.string();
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
        message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.distr_epoch_identifier !== undefined && object.distr_epoch_identifier !== null) {
            message.distrEpochIdentifier = object.distr_epoch_identifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distr_epoch_identifier = message.distrEpochIdentifier === "" ? undefined : message.distrEpochIdentifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
