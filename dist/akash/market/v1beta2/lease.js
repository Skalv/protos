"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCloseLeaseResponse = exports.MsgCloseLease = exports.MsgWithdrawLeaseResponse = exports.MsgWithdrawLease = exports.MsgCreateLeaseResponse = exports.MsgCreateLease = exports.LeaseFilters = exports.Lease = exports.LeaseID = exports.Lease_StateAmino = exports.Lease_StateSDKType = exports.Lease_State = void 0;
exports.lease_StateFromJSON = lease_StateFromJSON;
exports.lease_StateToJSON = lease_StateToJSON;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const bid_1 = require("./bid");
const binary_1 = require("../../../binary");
/** State is an enum which refers to state of lease */
var Lease_State;
(function (Lease_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Lease_State[Lease_State["invalid"] = 0] = "invalid";
    /** active - LeaseActive denotes state for lease active */
    Lease_State[Lease_State["active"] = 1] = "active";
    /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
    Lease_State[Lease_State["insufficient_funds"] = 2] = "insufficient_funds";
    /** closed - LeaseClosed denotes state for lease closed */
    Lease_State[Lease_State["closed"] = 3] = "closed";
    Lease_State[Lease_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Lease_State || (exports.Lease_State = Lease_State = {}));
exports.Lease_StateSDKType = Lease_State;
exports.Lease_StateAmino = Lease_State;
function lease_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Lease_State.invalid;
        case 1:
        case "active":
            return Lease_State.active;
        case 2:
        case "insufficient_funds":
            return Lease_State.insufficient_funds;
        case 3:
        case "closed":
            return Lease_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Lease_State.UNRECOGNIZED;
    }
}
function lease_StateToJSON(object) {
    switch (object) {
        case Lease_State.invalid:
            return "invalid";
        case Lease_State.active:
            return "active";
        case Lease_State.insufficient_funds:
            return "insufficient_funds";
        case Lease_State.closed:
            return "closed";
        case Lease_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseLeaseID() {
    return {
        owner: "",
        dseq: BigInt(0),
        gseq: 0,
        oseq: 0,
        provider: ""
    };
}
exports.LeaseID = {
    typeUrl: "/akash.market.v1beta2.LeaseID",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseID();
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
        const message = createBaseLeaseID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.gseq = object.gseq ?? 0;
        message.oseq = object.oseq ?? 0;
        message.provider = object.provider ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLeaseID();
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
        return exports.LeaseID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LeaseID.decode(message.value);
    },
    toProto(message) {
        return exports.LeaseID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.LeaseID",
            value: exports.LeaseID.encode(message).finish()
        };
    }
};
function createBaseLease() {
    return {
        leaseId: exports.LeaseID.fromPartial({}),
        state: 0,
        price: coin_1.DecCoin.fromPartial({}),
        createdAt: BigInt(0),
        closedOn: BigInt(0)
    };
}
exports.Lease = {
    typeUrl: "/akash.market.v1beta2.Lease",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.leaseId !== undefined) {
            exports.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.price !== undefined) {
            coin_1.DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== BigInt(0)) {
            writer.uint32(32).int64(message.createdAt);
        }
        if (message.closedOn !== BigInt(0)) {
            writer.uint32(40).int64(message.closedOn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaseId = exports.LeaseID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.price = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = reader.int64();
                    break;
                case 5:
                    message.closedOn = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLease();
        message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? exports.LeaseID.fromPartial(object.leaseId) : undefined;
        message.state = object.state ?? 0;
        message.price = object.price !== undefined && object.price !== null ? coin_1.DecCoin.fromPartial(object.price) : undefined;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        message.closedOn = object.closedOn !== undefined && object.closedOn !== null ? BigInt(object.closedOn.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLease();
        if (object.lease_id !== undefined && object.lease_id !== null) {
            message.leaseId = exports.LeaseID.fromAmino(object.lease_id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_1.DecCoin.fromAmino(object.price);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = BigInt(object.created_at);
        }
        if (object.closed_on !== undefined && object.closed_on !== null) {
            message.closedOn = BigInt(object.closed_on);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lease_id = message.leaseId ? exports.LeaseID.toAmino(message.leaseId) : exports.LeaseID.toAmino(exports.LeaseID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.price = message.price ? coin_1.DecCoin.toAmino(message.price) : coin_1.DecCoin.toAmino(coin_1.DecCoin.fromPartial({}));
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        obj.closed_on = message.closedOn !== BigInt(0) ? (message.closedOn?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Lease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Lease.decode(message.value);
    },
    toProto(message) {
        return exports.Lease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.Lease",
            value: exports.Lease.encode(message).finish()
        };
    }
};
function createBaseLeaseFilters() {
    return {
        owner: "",
        dseq: BigInt(0),
        gseq: 0,
        oseq: 0,
        provider: "",
        state: ""
    };
}
exports.LeaseFilters = {
    typeUrl: "/akash.market.v1beta2.LeaseFilters",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseFilters();
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
        const message = createBaseLeaseFilters();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.gseq = object.gseq ?? 0;
        message.oseq = object.oseq ?? 0;
        message.provider = object.provider ?? "";
        message.state = object.state ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseLeaseFilters();
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
        return exports.LeaseFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LeaseFilters.decode(message.value);
    },
    toProto(message) {
        return exports.LeaseFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.LeaseFilters",
            value: exports.LeaseFilters.encode(message).finish()
        };
    }
};
function createBaseMsgCreateLease() {
    return {
        bidId: bid_1.BidID.fromPartial({})
    };
}
exports.MsgCreateLease = {
    typeUrl: "/akash.market.v1beta2.MsgCreateLease",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bidId !== undefined) {
            bid_1.BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = bid_1.BidID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateLease();
        message.bidId = object.bidId !== undefined && object.bidId !== null ? bid_1.BidID.fromPartial(object.bidId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateLease();
        if (object.bid_id !== undefined && object.bid_id !== null) {
            message.bidId = bid_1.BidID.fromAmino(object.bid_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid_id = message.bidId ? bid_1.BidID.toAmino(message.bidId) : bid_1.BidID.toAmino(bid_1.BidID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateLease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateLease.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateLease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCreateLease",
            value: exports.MsgCreateLease.encode(message).finish()
        };
    }
};
function createBaseMsgCreateLeaseResponse() {
    return {};
}
exports.MsgCreateLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLeaseResponse();
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
        const message = createBaseMsgCreateLeaseResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateLeaseResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
            value: exports.MsgCreateLeaseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawLease() {
    return {
        bidId: exports.LeaseID.fromPartial({})
    };
}
exports.MsgWithdrawLease = {
    typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bidId !== undefined) {
            exports.LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = exports.LeaseID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawLease();
        message.bidId = object.bidId !== undefined && object.bidId !== null ? exports.LeaseID.fromPartial(object.bidId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawLease();
        if (object.bid_id !== undefined && object.bid_id !== null) {
            message.bidId = exports.LeaseID.fromAmino(object.bid_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid_id = message.bidId ? exports.LeaseID.toAmino(message.bidId) : exports.LeaseID.toAmino(exports.LeaseID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawLease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawLease.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawLease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
            value: exports.MsgWithdrawLease.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawLeaseResponse() {
    return {};
}
exports.MsgWithdrawLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLeaseResponse();
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
        const message = createBaseMsgWithdrawLeaseResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawLeaseResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
            value: exports.MsgWithdrawLeaseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCloseLease() {
    return {
        leaseId: exports.LeaseID.fromPartial({})
    };
}
exports.MsgCloseLease = {
    typeUrl: "/akash.market.v1beta2.MsgCloseLease",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.leaseId !== undefined) {
            exports.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaseId = exports.LeaseID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCloseLease();
        message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? exports.LeaseID.fromPartial(object.leaseId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseLease();
        if (object.lease_id !== undefined && object.lease_id !== null) {
            message.leaseId = exports.LeaseID.fromAmino(object.lease_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lease_id = message.leaseId ? exports.LeaseID.toAmino(message.leaseId) : exports.LeaseID.toAmino(exports.LeaseID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCloseLease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCloseLease.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCloseLease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCloseLease",
            value: exports.MsgCloseLease.encode(message).finish()
        };
    }
};
function createBaseMsgCloseLeaseResponse() {
    return {};
}
exports.MsgCloseLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLeaseResponse();
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
        const message = createBaseMsgCloseLeaseResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCloseLeaseResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCloseLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCloseLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCloseLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
            value: exports.MsgCloseLeaseResponse.encode(message).finish()
        };
    }
};
