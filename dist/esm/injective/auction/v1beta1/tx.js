//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgBid() {
    return {
        sender: "",
        bidAmount: Coin.fromPartial({}),
        round: BigInt(0)
    };
}
export const MsgBid = {
    typeUrl: "/injective.auction.v1beta1.MsgBid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.bidAmount !== undefined) {
            Coin.encode(message.bidAmount, writer.uint32(18).fork()).ldelim();
        }
        if (message.round !== BigInt(0)) {
            writer.uint32(24).uint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.bidAmount = Coin.decode(reader, reader.uint32());
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
        message.bidAmount = object.bidAmount !== undefined && object.bidAmount !== null ? Coin.fromPartial(object.bidAmount) : undefined;
        message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBid();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.bid_amount !== undefined && object.bid_amount !== null) {
            message.bidAmount = Coin.fromAmino(object.bid_amount);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = BigInt(object.round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.bid_amount = message.bidAmount ? Coin.toAmino(message.bidAmount) : undefined;
        obj.round = message.round !== BigInt(0) ? (message.round?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBid.decode(message.value);
    },
    toProto(message) {
        return MsgBid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.MsgBid",
            value: MsgBid.encode(message).finish()
        };
    }
};
function createBaseMsgBidResponse() {
    return {};
}
export const MsgBidResponse = {
    typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBidResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.MsgBidResponse",
            value: MsgBidResponse.encode(message).finish()
        };
    }
};
