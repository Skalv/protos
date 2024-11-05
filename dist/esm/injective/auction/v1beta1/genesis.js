//@ts-nocheck
import { Params, Bid } from "./auction";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        auctionRound: BigInt(0),
        highestBid: undefined,
        auctionEndingTimestamp: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/injective.auction.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.auctionRound !== BigInt(0)) {
            writer.uint32(16).uint64(message.auctionRound);
        }
        if (message.highestBid !== undefined) {
            Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
        }
        if (message.auctionEndingTimestamp !== BigInt(0)) {
            writer.uint32(32).int64(message.auctionEndingTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auctionRound = reader.uint64();
                    break;
                case 3:
                    message.highestBid = Bid.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.auctionEndingTimestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
        message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
        message.auctionEndingTimestamp = object.auctionEndingTimestamp !== undefined && object.auctionEndingTimestamp !== null ? BigInt(object.auctionEndingTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.auction_round !== undefined && object.auction_round !== null) {
            message.auctionRound = BigInt(object.auction_round);
        }
        if (object.highest_bid !== undefined && object.highest_bid !== null) {
            message.highestBid = Bid.fromAmino(object.highest_bid);
        }
        if (object.auction_ending_timestamp !== undefined && object.auction_ending_timestamp !== null) {
            message.auctionEndingTimestamp = BigInt(object.auction_ending_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.auction_round = message.auctionRound !== BigInt(0) ? (message.auctionRound?.toString)() : undefined;
        obj.highest_bid = message.highestBid ? Bid.toAmino(message.highestBid) : undefined;
        obj.auction_ending_timestamp = message.auctionEndingTimestamp !== BigInt(0) ? (message.auctionEndingTimestamp?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
