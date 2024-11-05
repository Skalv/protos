//@ts-nocheck
import { OrderID } from "./order";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** State is an enum which refers to state of bid */
export var Bid_State;
(function (Bid_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Bid_State[Bid_State["invalid"] = 0] = "invalid";
    /** open - BidOpen denotes state for bid open */
    Bid_State[Bid_State["open"] = 1] = "open";
    /** active - BidMatched denotes state for bid open */
    Bid_State[Bid_State["active"] = 2] = "active";
    /** lost - BidLost denotes state for bid lost */
    Bid_State[Bid_State["lost"] = 3] = "lost";
    /** closed - BidClosed denotes state for bid closed */
    Bid_State[Bid_State["closed"] = 4] = "closed";
    Bid_State[Bid_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Bid_State || (Bid_State = {}));
export const Bid_StateSDKType = Bid_State;
export const Bid_StateAmino = Bid_State;
export function bid_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Bid_State.invalid;
        case 1:
        case "open":
            return Bid_State.open;
        case 2:
        case "active":
            return Bid_State.active;
        case 3:
        case "lost":
            return Bid_State.lost;
        case 4:
        case "closed":
            return Bid_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Bid_State.UNRECOGNIZED;
    }
}
export function bid_StateToJSON(object) {
    switch (object) {
        case Bid_State.invalid:
            return "invalid";
        case Bid_State.open:
            return "open";
        case Bid_State.active:
            return "active";
        case Bid_State.lost:
            return "lost";
        case Bid_State.closed:
            return "closed";
        case Bid_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateBid() {
    return {
        order: OrderID.fromPartial({}),
        provider: "",
        price: DecCoin.fromPartial({}),
        deposit: Coin.fromPartial({})
    };
}
export const MsgCreateBid = {
    typeUrl: "/akash.market.v1beta2.MsgCreateBid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.order !== undefined) {
            OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.provider !== "") {
            writer.uint32(18).string(message.provider);
        }
        if (message.price !== undefined) {
            DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = OrderID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.provider = reader.string();
                    break;
                case 3:
                    message.price = DecCoin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.deposit = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBid();
        message.order = object.order !== undefined && object.order !== null ? OrderID.fromPartial(object.order) : undefined;
        message.provider = object.provider ?? "";
        message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBid();
        if (object.order !== undefined && object.order !== null) {
            message.order = OrderID.fromAmino(object.order);
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = DecCoin.fromAmino(object.price);
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Coin.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? OrderID.toAmino(message.order) : OrderID.toAmino(OrderID.fromPartial({}));
        obj.provider = message.provider ?? "";
        obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
        obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBid.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCreateBid",
            value: MsgCreateBid.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBidResponse() {
    return {};
}
export const MsgCreateBidResponse = {
    typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBidResponse();
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
        const message = createBaseMsgCreateBidResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateBidResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBidResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse",
            value: MsgCreateBidResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCloseBid() {
    return {
        bidId: BidID.fromPartial({})
    };
}
export const MsgCloseBid = {
    typeUrl: "/akash.market.v1beta2.MsgCloseBid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bidId !== undefined) {
            BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = BidID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCloseBid();
        message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseBid();
        if (object.bid_id !== undefined && object.bid_id !== null) {
            message.bidId = BidID.fromAmino(object.bid_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : BidID.toAmino(BidID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseBid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseBid.decode(message.value);
    },
    toProto(message) {
        return MsgCloseBid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCloseBid",
            value: MsgCloseBid.encode(message).finish()
        };
    }
};
function createBaseMsgCloseBidResponse() {
    return {};
}
export const MsgCloseBidResponse = {
    typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBidResponse();
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
        const message = createBaseMsgCloseBidResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCloseBidResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseBidResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCloseBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse",
            value: MsgCloseBidResponse.encode(message).finish()
        };
    }
};
function createBaseBidID() {
    return {
        owner: "",
        dseq: BigInt(0),
        gseq: 0,
        oseq: 0,
        provider: ""
    };
}
export const BidID = {
    typeUrl: "/akash.market.v1beta2.BidID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== "") {
            writer.uint32(42).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBidID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.gseq = reader.uint32();
                    break;
                case 4:
                    message.oseq = reader.uint32();
                    break;
                case 5:
                    message.provider = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBidID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.gseq = object.gseq ?? 0;
        message.oseq = object.oseq ?? 0;
        message.provider = object.provider ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBidID();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = BigInt(object.dseq);
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = object.gseq;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = object.oseq;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.dseq = message.dseq ? (message.dseq?.toString)() : "0";
        obj.gseq = message.gseq ?? 0;
        obj.oseq = message.oseq ?? 0;
        obj.provider = message.provider ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return BidID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BidID.decode(message.value);
    },
    toProto(message) {
        return BidID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.BidID",
            value: BidID.encode(message).finish()
        };
    }
};
function createBaseBid() {
    return {
        bidId: BidID.fromPartial({}),
        state: 0,
        price: DecCoin.fromPartial({}),
        createdAt: BigInt(0)
    };
}
export const Bid = {
    typeUrl: "/akash.market.v1beta2.Bid",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bidId !== undefined) {
            BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.price !== undefined) {
            DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== BigInt(0)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = BidID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.price = DecCoin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = reader.int64();
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
        message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
        message.state = object.state ?? 0;
        message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBid();
        if (object.bid_id !== undefined && object.bid_id !== null) {
            message.bidId = BidID.fromAmino(object.bid_id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = DecCoin.fromAmino(object.price);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = BigInt(object.created_at);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : BidID.toAmino(BidID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Bid.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Bid.decode(message.value);
    },
    toProto(message) {
        return Bid.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.Bid",
            value: Bid.encode(message).finish()
        };
    }
};
function createBaseBidFilters() {
    return {
        owner: "",
        dseq: BigInt(0),
        gseq: 0,
        oseq: 0,
        provider: "",
        state: ""
    };
}
export const BidFilters = {
    typeUrl: "/akash.market.v1beta2.BidFilters",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== "") {
            writer.uint32(42).string(message.provider);
        }
        if (message.state !== "") {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBidFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.gseq = reader.uint32();
                    break;
                case 4:
                    message.oseq = reader.uint32();
                    break;
                case 5:
                    message.provider = reader.string();
                    break;
                case 6:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBidFilters();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.gseq = object.gseq ?? 0;
        message.oseq = object.oseq ?? 0;
        message.provider = object.provider ?? "";
        message.state = object.state ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBidFilters();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = BigInt(object.dseq);
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = object.gseq;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = object.oseq;
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.dseq = message.dseq ? (message.dseq?.toString)() : "0";
        obj.gseq = message.gseq ?? 0;
        obj.oseq = message.oseq ?? 0;
        obj.provider = message.provider ?? "";
        obj.state = message.state ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return BidFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BidFilters.decode(message.value);
    },
    toProto(message) {
        return BidFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.BidFilters",
            value: BidFilters.encode(message).finish()
        };
    }
};
