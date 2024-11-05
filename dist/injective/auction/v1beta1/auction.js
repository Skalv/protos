"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAuctionStart = exports.EventAuctionResult = exports.EventBid = exports.Bid = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseParams() {
    return {
        auctionPeriod: BigInt(0),
        minNextBidIncrementRate: ""
    };
}
exports.Params = {
    typeUrl: "/injective.auction.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.auctionPeriod !== BigInt(0)) {
            writer.uint32(8).int64(message.auctionPeriod);
        }
        if (message.minNextBidIncrementRate !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.minNextBidIncrementRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctionPeriod = reader.int64();
                    break;
                case 2:
                    message.minNextBidIncrementRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? BigInt(object.auctionPeriod.toString()) : BigInt(0);
        message.minNextBidIncrementRate = object.minNextBidIncrementRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.auction_period !== undefined && object.auction_period !== null) {
            message.auctionPeriod = BigInt(object.auction_period);
        }
        if (object.min_next_bid_increment_rate !== undefined && object.min_next_bid_increment_rate !== null) {
            message.minNextBidIncrementRate = object.min_next_bid_increment_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.auction_period = message.auctionPeriod !== BigInt(0) ? (message.auctionPeriod?.toString)() : undefined;
        obj.min_next_bid_increment_rate = message.minNextBidIncrementRate === "" ? undefined : message.minNextBidIncrementRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseBid() {
    return {
        bidder: "",
        amount: ""
    };
}
exports.Bid = {
    typeUrl: "/injective.auction.v1beta1.Bid",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBid();
        message.bidder = object.bidder ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBid();
        if (object.bidder !== undefined && object.bidder !== null) {
            message.bidder = object.bidder;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bidder = message.bidder ?? "";
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Bid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Bid.decode(message.value);
    },
    toProto(message) {
        return exports.Bid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.Bid",
            value: exports.Bid.encode(message).finish()
        };
    }
};
function createBaseEventBid() {
    return {
        bidder: "",
        amount: "",
        round: BigInt(0)
    };
}
exports.EventBid = {
    typeUrl: "/injective.auction.v1beta1.EventBid",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.round !== BigInt(0)) {
            writer.uint32(24).uint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
        const message = createBaseEventBid();
        message.bidder = object.bidder ?? "";
        message.amount = object.amount ?? "";
        message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBid();
        if (object.bidder !== undefined && object.bidder !== null) {
            message.bidder = object.bidder;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = BigInt(object.round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bidder = message.bidder === "" ? undefined : message.bidder;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.round = message.round !== BigInt(0) ? (message.round?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBid.decode(message.value);
    },
    toProto(message) {
        return exports.EventBid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.EventBid",
            value: exports.EventBid.encode(message).finish()
        };
    }
};
function createBaseEventAuctionResult() {
    return {
        winner: "",
        amount: "",
        round: BigInt(0)
    };
}
exports.EventAuctionResult = {
    typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.winner !== "") {
            writer.uint32(10).string(message.winner);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.round !== BigInt(0)) {
            writer.uint32(24).uint64(message.round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAuctionResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winner = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
        const message = createBaseEventAuctionResult();
        message.winner = object.winner ?? "";
        message.amount = object.amount ?? "";
        message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAuctionResult();
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = object.winner;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = BigInt(object.round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.winner = message.winner === "" ? undefined : message.winner;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.round = message.round !== BigInt(0) ? (message.round?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAuctionResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAuctionResult.decode(message.value);
    },
    toProto(message) {
        return exports.EventAuctionResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
            value: exports.EventAuctionResult.encode(message).finish()
        };
    }
};
function createBaseEventAuctionStart() {
    return {
        round: BigInt(0),
        endingTimestamp: BigInt(0),
        newBasket: []
    };
}
exports.EventAuctionStart = {
    typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.round !== BigInt(0)) {
            writer.uint32(8).uint64(message.round);
        }
        if (message.endingTimestamp !== BigInt(0)) {
            writer.uint32(16).int64(message.endingTimestamp);
        }
        for (const v of message.newBasket) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAuctionStart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint64();
                    break;
                case 2:
                    message.endingTimestamp = reader.int64();
                    break;
                case 3:
                    message.newBasket.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAuctionStart();
        message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
        message.endingTimestamp = object.endingTimestamp !== undefined && object.endingTimestamp !== null ? BigInt(object.endingTimestamp.toString()) : BigInt(0);
        message.newBasket = object.newBasket?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAuctionStart();
        if (object.round !== undefined && object.round !== null) {
            message.round = BigInt(object.round);
        }
        if (object.ending_timestamp !== undefined && object.ending_timestamp !== null) {
            message.endingTimestamp = BigInt(object.ending_timestamp);
        }
        message.newBasket = object.new_basket?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round !== BigInt(0) ? (message.round?.toString)() : undefined;
        obj.ending_timestamp = message.endingTimestamp !== BigInt(0) ? (message.endingTimestamp?.toString)() : undefined;
        if (message.newBasket) {
            obj.new_basket = message.newBasket.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.new_basket = message.newBasket;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAuctionStart.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAuctionStart.decode(message.value);
    },
    toProto(message) {
        return exports.EventAuctionStart.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
            value: exports.EventAuctionStart.encode(message).finish()
        };
    }
};
