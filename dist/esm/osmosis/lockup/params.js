//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseParams() {
    return {
        forceUnlockAllowedAddresses: []
    };
}
export const Params = {
    typeUrl: "/osmosis.lockup.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.forceUnlockAllowedAddresses) {
            writer.uint32(10).string(v);
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
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.Params",
            value: Params.encode(message).finish()
        };
    }
};
