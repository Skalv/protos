import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgInitialClaim() {
    return {
        sender: ""
    };
}
export const MsgInitialClaim = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInitialClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInitialClaim();
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInitialClaim();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInitialClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInitialClaim.decode(message.value);
    },
    toProto(message) {
        return MsgInitialClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
            value: MsgInitialClaim.encode(message).finish()
        };
    }
};
function createBaseMsgInitialClaimResponse() {
    return {
        claimedAmount: []
    };
}
export const MsgInitialClaimResponse = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.claimedAmount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInitialClaimResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgInitialClaimResponse();
        message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInitialClaimResponse();
        message.claimedAmount = object.claimed_amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.claimedAmount) {
            obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimed_amount = message.claimedAmount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgInitialClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgInitialClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgInitialClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse",
            value: MsgInitialClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClaimFor() {
    return {
        sender: "",
        address: "",
        action: 0
    };
}
export const MsgClaimFor = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.action !== 0) {
            writer.uint32(24).int32(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimFor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimFor();
        message.sender = object.sender ?? "";
        message.address = object.address ?? "";
        message.action = object.action ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimFor();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.address = message.address === "" ? undefined : message.address;
        obj.action = message.action === 0 ? undefined : message.action;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimFor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimFor.decode(message.value);
    },
    toProto(message) {
        return MsgClaimFor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
            value: MsgClaimFor.encode(message).finish()
        };
    }
};
function createBaseMsgClaimForResponse() {
    return {
        address: "",
        claimedAmount: []
    };
}
export const MsgClaimForResponse = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.claimedAmount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimForResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimForResponse();
        message.address = object.address ?? "";
        message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimForResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.claimedAmount = object.claimed_amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.claimedAmount) {
            obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimed_amount = message.claimedAmount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimForResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimForResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClaimForResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse",
            value: MsgClaimForResponse.encode(message).finish()
        };
    }
};
