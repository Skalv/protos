//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgClaim() {
    return {
        sender: "",
        claimAction: ""
    };
}
export const MsgClaim = {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.claimAction !== "") {
            writer.uint32(18).string(message.claimAction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.claimAction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaim();
        message.sender = object.sender ?? "";
        message.claimAction = object.claimAction ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaim();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.claim_action !== undefined && object.claim_action !== null) {
            message.claimAction = object.claim_action;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.claim_action = message.claimAction === "" ? undefined : message.claimAction;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaim.decode(message.value);
    },
    toProto(message) {
        return MsgClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
            value: MsgClaim.encode(message).finish()
        };
    }
};
function createBaseMsgClaimResponse() {
    return {
        claimedAmount: Coin.fromPartial({})
    };
}
export const MsgClaimResponse = {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.claimedAmount !== undefined) {
            Coin.encode(message.claimedAmount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.claimedAmount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimResponse();
        message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? Coin.fromPartial(object.claimedAmount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimResponse();
        if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
            message.claimedAmount = Coin.fromAmino(object.claimed_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.claimed_amount = message.claimedAmount ? Coin.toAmino(message.claimedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse",
            value: MsgClaimResponse.encode(message).finish()
        };
    }
};
