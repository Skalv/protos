//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseClaimRecord() {
    return {
        address: "",
        claimableAmount: [],
        actionCompleted: []
    };
}
export const ClaimRecord = {
    typeUrl: "/passage3d.claim.v1beta1.ClaimRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.claimableAmount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.actionCompleted) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.claimableAmount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.actionCompleted.push(reader.bool());
                        }
                    }
                    else {
                        message.actionCompleted.push(reader.bool());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimRecord();
        message.address = object.address ?? "";
        message.claimableAmount = object.claimableAmount?.map(e => Coin.fromPartial(e)) || [];
        message.actionCompleted = object.actionCompleted?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClaimRecord();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.claimableAmount = object.claimable_amount?.map(e => Coin.fromAmino(e)) || [];
        message.actionCompleted = object.action_completed?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.claimableAmount) {
            obj.claimable_amount = message.claimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimable_amount = message.claimableAmount;
        }
        if (message.actionCompleted) {
            obj.action_completed = message.actionCompleted.map(e => e);
        }
        else {
            obj.action_completed = message.actionCompleted;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClaimRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClaimRecord.decode(message.value);
    },
    toProto(message) {
        return ClaimRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.ClaimRecord",
            value: ClaimRecord.encode(message).finish()
        };
    }
};
