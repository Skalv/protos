"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClaimResponse = exports.MsgClaim = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgClaim() {
    return {
        sender: "",
        claimAction: ""
    };
}
exports.MsgClaim = {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.claimAction !== "") {
            writer.uint32(18).string(message.claimAction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
            value: exports.MsgClaim.encode(message).finish()
        };
    }
};
function createBaseMsgClaimResponse() {
    return {
        claimedAmount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgClaimResponse = {
    typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.claimedAmount !== undefined) {
            coin_1.Coin.encode(message.claimedAmount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.claimedAmount = coin_1.Coin.decode(reader, reader.uint32());
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
        message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? coin_1.Coin.fromPartial(object.claimedAmount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimResponse();
        if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
            message.claimedAmount = coin_1.Coin.fromAmino(object.claimed_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.claimed_amount = message.claimedAmount ? coin_1.Coin.toAmino(message.claimedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse",
            value: exports.MsgClaimResponse.encode(message).finish()
        };
    }
};
