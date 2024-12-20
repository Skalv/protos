//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseParams() {
    return {
        distrEpochIdentifier: ""
    };
}
export const Params = {
    typeUrl: "/osmosis.incentives.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.distrEpochIdentifier !== "") {
            writer.uint32(10).string(message.distrEpochIdentifier);
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
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/params",
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
            typeUrl: "/osmosis.incentives.Params",
            value: Params.encode(message).finish()
        };
    }
};
