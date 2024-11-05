//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseParams() {
    return {
        airdropEnabled: false,
        airdropStartTime: new Date(),
        durationUntilDecay: Duration.fromPartial({}),
        durationOfDecay: Duration.fromPartial({}),
        claimDenom: ""
    };
}
export const Params = {
    typeUrl: "/passage3d.claim.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.airdropEnabled === true) {
            writer.uint32(8).bool(message.airdropEnabled);
        }
        if (message.airdropStartTime !== undefined) {
            Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.durationUntilDecay !== undefined) {
            Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
        }
        if (message.durationOfDecay !== undefined) {
            Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
        }
        if (message.claimDenom !== "") {
            writer.uint32(42).string(message.claimDenom);
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
                    message.airdropEnabled = reader.bool();
                    break;
                case 2:
                    message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.durationUntilDecay = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.durationOfDecay = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.claimDenom = reader.string();
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
        message.airdropEnabled = object.airdropEnabled ?? false;
        message.airdropStartTime = object.airdropStartTime ?? undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.airdrop_enabled !== undefined && object.airdrop_enabled !== null) {
            message.airdropEnabled = object.airdrop_enabled;
        }
        if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
            message.airdropStartTime = fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time));
        }
        if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
            message.durationUntilDecay = Duration.fromAmino(object.duration_until_decay);
        }
        if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
            message.durationOfDecay = Duration.fromAmino(object.duration_of_decay);
        }
        if (object.claim_denom !== undefined && object.claim_denom !== null) {
            message.claimDenom = object.claim_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.airdrop_enabled = message.airdropEnabled === false ? undefined : message.airdropEnabled;
        obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
        obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
        obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
        obj.claim_denom = message.claimDenom === "" ? undefined : message.claimDenom;
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
            typeUrl: "/passage3d.claim.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
