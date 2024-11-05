"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgBidResponse = exports.MsgBid = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgBid() {
    return {
        sender: "",
        bidAmount: coin_1.Coin.fromPartial({}),
        round: BigInt(0)
    };
}
exports.MsgBid = {
    typeUrl: "/injective.auction.v1beta1.MsgBid",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.bidAmount !== undefined) {
            coin_1.Coin.encode(message.bidAmount, writer.uint32(18).fork()).ldelim();
        }
        if (message.round !== BigInt(0)) {
            writer.uint32(24).uint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.bidAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.round = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBid();
        message.sender = object.sender ?? "";
        message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? coin_1.Coin.fromPartial(object.bidAmount) : undefined;
        message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBid();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.bid_amount !== undefined && object.bid_amount !== null) {
            message.bidAmount = coin_1.Coin.fromAmino(object.bid_amount);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = BigInt(object.round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.bid_amount = message.bidAmount ? coin_1.Coin.toAmino(message.bidAmount) : undefined;
        obj.round = message.round !== BigInt(0) ? (message.round?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBid.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.MsgBid",
            value: exports.MsgBid.encode(message).finish()
        };
    }
};
function createBaseMsgBidResponse() {
    return {};
}
exports.MsgBidResponse = {
    typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgBidResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBidResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBidResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
            value: exports.MsgBidResponse.encode(message).finish()
        };
    }
};
