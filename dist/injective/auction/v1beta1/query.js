"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryCurrentAuctionBasketResponse = exports.QueryCurrentAuctionBasketRequest = exports.QueryAuctionParamsResponse = exports.QueryAuctionParamsRequest = void 0;
//@ts-nocheck
const auction_1 = require("./auction");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
function createBaseQueryAuctionParamsRequest() {
    return {};
}
exports.QueryAuctionParamsRequest = {
    typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamsRequest();
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
        const message = createBaseQueryAuctionParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryAuctionParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAuctionParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAuctionParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuctionParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
            value: exports.QueryAuctionParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionParamsResponse() {
    return {
        params: auction_1.Params.fromPartial({})
    };
}
exports.QueryAuctionParamsResponse = {
    typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            auction_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = auction_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? auction_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = auction_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? auction_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAuctionParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAuctionParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAuctionParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
            value: exports.QueryAuctionParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentAuctionBasketRequest() {
    return {};
}
exports.QueryCurrentAuctionBasketRequest = {
    typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentAuctionBasketRequest();
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
        const message = createBaseQueryCurrentAuctionBasketRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCurrentAuctionBasketRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentAuctionBasketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentAuctionBasketRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentAuctionBasketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
            value: exports.QueryCurrentAuctionBasketRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentAuctionBasketResponse() {
    return {
        amount: [],
        auctionRound: BigInt(0),
        auctionClosingTime: BigInt(0),
        highestBidder: "",
        highestBidAmount: ""
    };
}
exports.QueryCurrentAuctionBasketResponse = {
    typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.auctionRound !== BigInt(0)) {
            writer.uint32(16).uint64(message.auctionRound);
        }
        if (message.auctionClosingTime !== BigInt(0)) {
            writer.uint32(24).int64(message.auctionClosingTime);
        }
        if (message.highestBidder !== "") {
            writer.uint32(34).string(message.highestBidder);
        }
        if (message.highestBidAmount !== "") {
            writer.uint32(42).string(message.highestBidAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentAuctionBasketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.auctionRound = reader.uint64();
                    break;
                case 3:
                    message.auctionClosingTime = reader.int64();
                    break;
                case 4:
                    message.highestBidder = reader.string();
                    break;
                case 5:
                    message.highestBidAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentAuctionBasketResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
        message.auctionClosingTime = object.auctionClosingTime !== undefined && object.auctionClosingTime !== null ? BigInt(object.auctionClosingTime.toString()) : BigInt(0);
        message.highestBidder = object.highestBidder ?? "";
        message.highestBidAmount = object.highestBidAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentAuctionBasketResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.auctionRound !== undefined && object.auctionRound !== null) {
            message.auctionRound = BigInt(object.auctionRound);
        }
        if (object.auctionClosingTime !== undefined && object.auctionClosingTime !== null) {
            message.auctionClosingTime = BigInt(object.auctionClosingTime);
        }
        if (object.highestBidder !== undefined && object.highestBidder !== null) {
            message.highestBidder = object.highestBidder;
        }
        if (object.highestBidAmount !== undefined && object.highestBidAmount !== null) {
            message.highestBidAmount = object.highestBidAmount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        obj.auctionRound = message.auctionRound !== BigInt(0) ? (message.auctionRound?.toString)() : undefined;
        obj.auctionClosingTime = message.auctionClosingTime !== BigInt(0) ? (message.auctionClosingTime?.toString)() : undefined;
        obj.highestBidder = message.highestBidder === "" ? undefined : message.highestBidder;
        obj.highestBidAmount = message.highestBidAmount === "" ? undefined : message.highestBidAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentAuctionBasketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentAuctionBasketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentAuctionBasketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
            value: exports.QueryCurrentAuctionBasketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateRequest();
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
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryModuleStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
            value: exports.QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
exports.QueryModuleStateResponse = {
    typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            genesis_1.GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleStateResponse();
        message.state = object.state !== undefined && object.state !== null ? genesis_1.GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_1.GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? genesis_1.GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
            value: exports.QueryModuleStateResponse.encode(message).finish()
        };
    }
};
