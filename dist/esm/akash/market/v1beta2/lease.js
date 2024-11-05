//@ts-nocheck
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BidID } from "./bid";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** State is an enum which refers to state of lease */
export var Lease_State;
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
})(Lease_State || (Lease_State = {}));
export const Lease_StateSDKType = Lease_State;
export const Lease_StateAmino = Lease_State;
export function lease_StateFromJSON(object) {
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
export function lease_StateToJSON(object) {
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
export const LeaseID = {
    typeUrl: "/akash.market.v1beta2.LeaseID",
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
        return LeaseID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LeaseID.decode(message.value);
    },
    toProto(message) {
        return LeaseID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.LeaseID",
            value: LeaseID.encode(message).finish()
        };
    }
};
function createBaseLease() {
    return {
        leaseId: LeaseID.fromPartial({}),
        state: 0,
        price: DecCoin.fromPartial({}),
        createdAt: BigInt(0),
        closedOn: BigInt(0)
    };
}
export const Lease = {
    typeUrl: "/akash.market.v1beta2.Lease",
    encode(message, writer = BinaryWriter.create()) {
        if (message.leaseId !== undefined) {
            LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
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
        if (message.closedOn !== BigInt(0)) {
            writer.uint32(40).int64(message.closedOn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaseId = LeaseID.decode(reader, reader.uint32());
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
        message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
        message.state = object.state ?? 0;
        message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        message.closedOn = object.closedOn !== undefined && object.closedOn !== null ? BigInt(object.closedOn.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseLease();
        if (object.lease_id !== undefined && object.lease_id !== null) {
            message.leaseId = LeaseID.fromAmino(object.lease_id);
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
        if (object.closed_on !== undefined && object.closed_on !== null) {
            message.closedOn = BigInt(object.closed_on);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        obj.closed_on = message.closedOn !== BigInt(0) ? (message.closedOn?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Lease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Lease.decode(message.value);
    },
    toProto(message) {
        return Lease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.Lease",
            value: Lease.encode(message).finish()
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
export const LeaseFilters = {
    typeUrl: "/akash.market.v1beta2.LeaseFilters",
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
        return LeaseFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LeaseFilters.decode(message.value);
    },
    toProto(message) {
        return LeaseFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.LeaseFilters",
            value: LeaseFilters.encode(message).finish()
        };
    }
};
function createBaseMsgCreateLease() {
    return {
        bidId: BidID.fromPartial({})
    };
}
export const MsgCreateLease = {
    typeUrl: "/akash.market.v1beta2.MsgCreateLease",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bidId !== undefined) {
            BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLease();
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
        const message = createBaseMsgCreateLease();
        message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateLease();
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
        return MsgCreateLease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateLease.decode(message.value);
    },
    toProto(message) {
        return MsgCreateLease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCreateLease",
            value: MsgCreateLease.encode(message).finish()
        };
    }
};
function createBaseMsgCreateLeaseResponse() {
    return {};
}
export const MsgCreateLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
            value: MsgCreateLeaseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawLease() {
    return {
        bidId: LeaseID.fromPartial({})
    };
}
export const MsgWithdrawLease = {
    typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bidId !== undefined) {
            LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidId = LeaseID.decode(reader, reader.uint32());
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
        message.bidId = object.bidId !== undefined && object.bidId !== null ? LeaseID.fromPartial(object.bidId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawLease();
        if (object.bid_id !== undefined && object.bid_id !== null) {
            message.bidId = LeaseID.fromAmino(object.bid_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid_id = message.bidId ? LeaseID.toAmino(message.bidId) : LeaseID.toAmino(LeaseID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawLease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawLease.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawLease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
            value: MsgWithdrawLease.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawLeaseResponse() {
    return {};
}
export const MsgWithdrawLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgWithdrawLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
            value: MsgWithdrawLeaseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCloseLease() {
    return {
        leaseId: LeaseID.fromPartial({})
    };
}
export const MsgCloseLease = {
    typeUrl: "/akash.market.v1beta2.MsgCloseLease",
    encode(message, writer = BinaryWriter.create()) {
        if (message.leaseId !== undefined) {
            LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaseId = LeaseID.decode(reader, reader.uint32());
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
        message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseLease();
        if (object.lease_id !== undefined && object.lease_id !== null) {
            message.leaseId = LeaseID.fromAmino(object.lease_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseLease.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseLease.decode(message.value);
    },
    toProto(message) {
        return MsgCloseLease.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCloseLease",
            value: MsgCloseLease.encode(message).finish()
        };
    }
};
function createBaseMsgCloseLeaseResponse() {
    return {};
}
export const MsgCloseLeaseResponse = {
    typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCloseLeaseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseLeaseResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCloseLeaseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
            value: MsgCloseLeaseResponse.encode(message).finish()
        };
    }
};
