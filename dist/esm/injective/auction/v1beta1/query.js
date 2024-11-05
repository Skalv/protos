//@ts-nocheck
import { Params } from "./auction";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryAuctionParamsRequest() {
    return {};
}
export const QueryAuctionParamsRequest = {
    typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAuctionParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
            value: QueryAuctionParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryAuctionParamsResponse = {
    typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuctionParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
            value: QueryAuctionParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentAuctionBasketRequest() {
    return {};
}
export const QueryCurrentAuctionBasketRequest = {
    typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryCurrentAuctionBasketRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentAuctionBasketRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentAuctionBasketRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
            value: QueryCurrentAuctionBasketRequest.encode(message).finish()
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
export const QueryCurrentAuctionBasketResponse = {
    typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentAuctionBasketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
        message.auctionClosingTime = object.auctionClosingTime !== undefined && object.auctionClosingTime !== null ? BigInt(object.auctionClosingTime.toString()) : BigInt(0);
        message.highestBidder = object.highestBidder ?? "";
        message.highestBidAmount = object.highestBidAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentAuctionBasketResponse();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
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
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
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
        return QueryCurrentAuctionBasketResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentAuctionBasketResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentAuctionBasketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
            value: QueryCurrentAuctionBasketResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryModuleStateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
            value: QueryModuleStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateResponse() {
    return {
        state: undefined
    };
}
export const QueryModuleStateResponse = {
    typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.state !== undefined) {
            GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = GenesisState.decode(reader, reader.uint32());
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
        message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = GenesisState.fromAmino(object.state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleStateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryModuleStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
            value: QueryModuleStateResponse.encode(message).finish()
        };
    }
};
