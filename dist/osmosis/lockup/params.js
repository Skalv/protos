"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
function createBaseParams() {
    return {
        forceUnlockAllowedAddresses: []
    };
}
exports.Params = {
    typeUrl: "/osmosis.lockup.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.forceUnlockAllowedAddresses) {
            writer.uint32(10).string(v);
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
                    message.forceUnlockAllowedAddresses.push(reader.string());
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
        message.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.forceUnlockAllowedAddresses = object.force_unlock_allowed_addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.forceUnlockAllowedAddresses) {
            obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses.map(e => e);
        }
        else {
            obj.force_unlock_allowed_addresses = message.forceUnlockAllowedAddresses;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/params",
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
            typeUrl: "/osmosis.lockup.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
