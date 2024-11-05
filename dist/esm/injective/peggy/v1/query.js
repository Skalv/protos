//@ts-nocheck
import { Params, GenesisState } from "./genesis";
import { Valset, LastClaimEvent } from "./types";
import { MsgValsetConfirm, MsgConfirmBatch } from "./msgs";
import { BatchFees } from "./pool";
import { OutgoingTxBatch, OutgoingTransferTx } from "./batch";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/injective.peggy.v1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/injective.peggy.v1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
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
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
export const QueryCurrentValsetRequest = {
    typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetRequest();
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
        const message = createBaseQueryCurrentValsetRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCurrentValsetRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentValsetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentValsetRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentValsetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
            value: QueryCurrentValsetRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetResponse() {
    return {
        valset: undefined
    };
}
export const QueryCurrentValsetResponse = {
    typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentValsetResponse();
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = Valset.fromAmino(object.valset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentValsetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentValsetResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentValsetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
            value: QueryCurrentValsetResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: BigInt(0)
    };
}
export const QueryValsetRequestRequest = {
    typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetRequestRequest();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetRequestRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetRequestRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValsetRequestRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
            value: QueryValsetRequestRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestResponse() {
    return {
        valset: undefined
    };
}
export const QueryValsetRequestResponse = {
    typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetRequestResponse();
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = Valset.fromAmino(object.valset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetRequestResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetRequestResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValsetRequestResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
            value: QueryValsetRequestResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: BigInt(0),
        address: ""
    };
}
export const QueryValsetConfirmRequest = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetConfirmRequest();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetConfirmRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
            value: QueryValsetConfirmRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmResponse() {
    return {
        confirm: undefined
    };
}
export const QueryValsetConfirmResponse = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.confirm !== undefined) {
            MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm = object.confirm !== undefined && object.confirm !== null ? MsgValsetConfirm.fromPartial(object.confirm) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetConfirmResponse();
        if (object.confirm !== undefined && object.confirm !== null) {
            message.confirm = MsgValsetConfirm.fromAmino(object.confirm);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.confirm = message.confirm ? MsgValsetConfirm.toAmino(message.confirm) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetConfirmResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
            value: QueryValsetConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: BigInt(0)
    };
}
export const QueryValsetConfirmsByNonceRequest = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetConfirmsByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmsByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmsByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
            value: QueryValsetConfirmsByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return {
        confirms: []
    };
}
export const QueryValsetConfirmsByNonceResponse = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.confirms) {
            MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
        }
        else {
            obj.confirms = message.confirms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetConfirmsByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmsByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmsByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
            value: QueryValsetConfirmsByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
export const QueryLastValsetRequestsRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsRequest();
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
        const message = createBaseQueryLastValsetRequestsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryLastValsetRequestsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastValsetRequestsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastValsetRequestsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastValsetRequestsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
            value: QueryLastValsetRequestsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsResponse() {
    return {
        valsets: []
    };
}
export const QueryLastValsetRequestsResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = object.valsets?.map(e => Valset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = message.valsets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastValsetRequestsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastValsetRequestsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastValsetRequestsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
            value: QueryLastValsetRequestsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastPendingValsetRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingValsetRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingValsetRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
            value: QueryLastPendingValsetRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse() {
    return {
        valsets: []
    };
}
export const QueryLastPendingValsetRequestByAddrResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = object.valsets?.map(e => Valset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = message.valsets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastPendingValsetRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingValsetRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingValsetRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
            value: QueryLastPendingValsetRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
export const QueryBatchFeeRequest = {
    typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeRequest();
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
        const message = createBaseQueryBatchFeeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBatchFeeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchFeeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
            value: QueryBatchFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeResponse() {
    return {
        batchFees: []
    };
}
export const QueryBatchFeeResponse = {
    typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.batchFees) {
            BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = object.batchFees?.map(e => BatchFees.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = object.batchFees?.map(e => BatchFees.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map(e => e ? BatchFees.toAmino(e) : undefined);
        }
        else {
            obj.batchFees = message.batchFees;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchFeeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
            value: QueryBatchFeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastPendingBatchRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingBatchRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingBatchRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
            value: QueryLastPendingBatchRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse() {
    return {
        batch: undefined
    };
}
export const QueryLastPendingBatchRequestByAddrResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = OutgoingTxBatch.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastPendingBatchRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingBatchRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingBatchRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
            value: QueryLastPendingBatchRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
export const QueryOutgoingTxBatchesRequest = {
    typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesRequest();
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
        const message = createBaseQueryOutgoingTxBatchesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryOutgoingTxBatchesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOutgoingTxBatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOutgoingTxBatchesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOutgoingTxBatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
            value: QueryOutgoingTxBatchesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return {
        batches: []
    };
}
export const QueryOutgoingTxBatchesResponse = {
    typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.batches) {
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = object.batches?.map(e => OutgoingTxBatch.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOutgoingTxBatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOutgoingTxBatchesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOutgoingTxBatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
            value: QueryOutgoingTxBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
export const QueryBatchRequestByNonceRequest = {
    typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchRequestByNonceRequest();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchRequestByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchRequestByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchRequestByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
            value: QueryBatchRequestByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceResponse() {
    return {
        batch: undefined
    };
}
export const QueryBatchRequestByNonceResponse = {
    typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = OutgoingTxBatch.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchRequestByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchRequestByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchRequestByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
            value: QueryBatchRequestByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
export const QueryBatchConfirmsRequest = {
    typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchConfirmsRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchConfirmsRequest();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchConfirmsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchConfirmsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchConfirmsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
            value: QueryBatchConfirmsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsResponse() {
    return {
        confirms: []
    };
}
export const QueryBatchConfirmsResponse = {
    typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.confirms) {
            MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
        }
        else {
            obj.confirms = message.confirms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchConfirmsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchConfirmsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchConfirmsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
            value: QueryBatchConfirmsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastEventByAddrRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventByAddrRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastEventByAddrRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastEventByAddrRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastEventByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastEventByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastEventByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
            value: QueryLastEventByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventByAddrResponse() {
    return {
        lastClaimEvent: undefined
    };
}
export const QueryLastEventByAddrResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lastClaimEvent !== undefined) {
            LastClaimEvent.encode(message.lastClaimEvent, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastClaimEvent = LastClaimEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastEventByAddrResponse();
        message.lastClaimEvent = object.lastClaimEvent !== undefined && object.lastClaimEvent !== null ? LastClaimEvent.fromPartial(object.lastClaimEvent) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastEventByAddrResponse();
        if (object.last_claim_event !== undefined && object.last_claim_event !== null) {
            message.lastClaimEvent = LastClaimEvent.fromAmino(object.last_claim_event);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_claim_event = message.lastClaimEvent ? LastClaimEvent.toAmino(message.lastClaimEvent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastEventByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastEventByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastEventByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
            value: QueryLastEventByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomRequest() {
    return {
        erc20: ""
    };
}
export const QueryERC20ToDenomRequest = {
    typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryERC20ToDenomRequest();
        message.erc20 = object.erc20 ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryERC20ToDenomRequest();
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = object.erc20;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.erc20 = message.erc20 === "" ? undefined : message.erc20;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryERC20ToDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryERC20ToDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryERC20ToDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
            value: QueryERC20ToDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomResponse() {
    return {
        denom: "",
        cosmosOriginated: false
    };
}
export const QueryERC20ToDenomResponse = {
    typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryERC20ToDenomResponse();
        message.denom = object.denom ?? "";
        message.cosmosOriginated = object.cosmosOriginated ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryERC20ToDenomResponse();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.cosmos_originated !== undefined && object.cosmos_originated !== null) {
            message.cosmosOriginated = object.cosmos_originated;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.cosmos_originated = message.cosmosOriginated === false ? undefined : message.cosmosOriginated;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryERC20ToDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryERC20ToDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryERC20ToDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
            value: QueryERC20ToDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Request() {
    return {
        denom: ""
    };
}
export const QueryDenomToERC20Request = {
    typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Request();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomToERC20Request();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomToERC20Request();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomToERC20Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomToERC20Request.decode(message.value);
    },
    toProto(message) {
        return QueryDenomToERC20Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
            value: QueryDenomToERC20Request.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Response() {
    return {
        erc20: "",
        cosmosOriginated: false
    };
}
export const QueryDenomToERC20Response = {
    typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
    encode(message, writer = BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomToERC20Response();
        message.erc20 = object.erc20 ?? "";
        message.cosmosOriginated = object.cosmosOriginated ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomToERC20Response();
        if (object.erc20 !== undefined && object.erc20 !== null) {
            message.erc20 = object.erc20;
        }
        if (object.cosmos_originated !== undefined && object.cosmos_originated !== null) {
            message.cosmosOriginated = object.cosmos_originated;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.erc20 = message.erc20 === "" ? undefined : message.erc20;
        obj.cosmos_originated = message.cosmosOriginated === false ? undefined : message.cosmosOriginated;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomToERC20Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomToERC20Response.decode(message.value);
    },
    toProto(message) {
        return QueryDenomToERC20Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
            value: QueryDenomToERC20Response.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: ""
    };
}
export const QueryDelegateKeysByValidatorAddress = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegateKeysByValidatorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByValidatorAddress.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByValidatorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
            value: QueryDelegateKeysByValidatorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse() {
    return {
        ethAddress: "",
        orchestratorAddress: ""
    };
}
export const QueryDelegateKeysByValidatorAddressResponse = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        message.ethAddress = object.ethAddress ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        if (object.eth_address !== undefined && object.eth_address !== null) {
            message.ethAddress = object.eth_address;
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegateKeysByValidatorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByValidatorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByValidatorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
            value: QueryDelegateKeysByValidatorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddress() {
    return {
        ethAddress: ""
    };
}
export const QueryDelegateKeysByEthAddress = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByEthAddress();
        message.ethAddress = object.ethAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegateKeysByEthAddress();
        if (object.eth_address !== undefined && object.eth_address !== null) {
            message.ethAddress = object.eth_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegateKeysByEthAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByEthAddress.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByEthAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
            value: QueryDelegateKeysByEthAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddressResponse() {
    return {
        validatorAddress: "",
        orchestratorAddress: ""
    };
}
export const QueryDelegateKeysByEthAddressResponse = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        message.validatorAddress = object.validatorAddress ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegateKeysByEthAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByEthAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByEthAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
            value: QueryDelegateKeysByEthAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddress() {
    return {
        orchestratorAddress: ""
    };
}
export const QueryDelegateKeysByOrchestratorAddress = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegateKeysByOrchestratorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByOrchestratorAddress.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByOrchestratorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
            value: QueryDelegateKeysByOrchestratorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse() {
    return {
        validatorAddress: "",
        ethAddress: ""
    };
}
export const QueryDelegateKeysByOrchestratorAddressResponse = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        message.validatorAddress = object.validatorAddress ?? "";
        message.ethAddress = object.ethAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.eth_address !== undefined && object.eth_address !== null) {
            message.ethAddress = object.eth_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegateKeysByOrchestratorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByOrchestratorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
            value: QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEth() {
    return {
        senderAddress: ""
    };
}
export const QueryPendingSendToEth = {
    typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
    encode(message, writer = BinaryWriter.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingSendToEth();
        message.senderAddress = object.senderAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPendingSendToEth();
        if (object.sender_address !== undefined && object.sender_address !== null) {
            message.senderAddress = object.sender_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPendingSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingSendToEth.decode(message.value);
    },
    toProto(message) {
        return QueryPendingSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
            value: QueryPendingSendToEth.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEthResponse() {
    return {
        transfersInBatches: [],
        unbatchedTransfers: []
    };
}
export const QueryPendingSendToEthResponse = {
    typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.transfersInBatches) {
            OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = object.transfersInBatches?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
        message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = object.transfers_in_batches?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
        message.unbatchedTransfers = object.unbatched_transfers?.map(e => OutgoingTransferTx.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfers_in_batches = message.transfersInBatches.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.transfers_in_batches = message.transfersInBatches;
        }
        if (message.unbatchedTransfers) {
            obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.unbatched_transfers = message.unbatchedTransfers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPendingSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPendingSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
            value: QueryPendingSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
export const QueryModuleStateRequest = {
    typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
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
            typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
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
    typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
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
            typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
            value: QueryModuleStateResponse.encode(message).finish()
        };
    }
};
