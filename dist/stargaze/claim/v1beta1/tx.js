"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClaimForResponse = exports.MsgClaimFor = exports.MsgInitialClaimResponse = exports.MsgInitialClaim = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgInitialClaim() {
    return {
        sender: ""
    };
}
exports.MsgInitialClaim = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgInitialClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInitialClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInitialClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
            value: exports.MsgInitialClaim.encode(message).finish()
        };
    }
};
function createBaseMsgInitialClaimResponse() {
    return {
        claimedAmount: []
    };
}
exports.MsgInitialClaimResponse = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.claimedAmount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInitialClaimResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.claimedAmount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.claimedAmount = object.claimedAmount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgInitialClaimResponse();
        message.claimedAmount = object.claimed_amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.claimedAmount) {
            obj.claimed_amount = message.claimedAmount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimed_amount = message.claimedAmount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgInitialClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgInitialClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgInitialClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse",
            value: exports.MsgInitialClaimResponse.encode(message).finish()
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
exports.MsgClaimFor = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgClaimFor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimFor.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimFor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
            value: exports.MsgClaimFor.encode(message).finish()
        };
    }
};
function createBaseMsgClaimForResponse() {
    return {
        address: "",
        claimedAmount: []
    };
}
exports.MsgClaimForResponse = {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.claimedAmount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimForResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.claimedAmount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.claimedAmount = object.claimedAmount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimForResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.claimedAmount = object.claimed_amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.claimedAmount) {
            obj.claimed_amount = message.claimedAmount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.claimed_amount = message.claimedAmount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClaimForResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimForResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimForResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse",
            value: exports.MsgClaimForResponse.encode(message).finish()
        };
    }
};
