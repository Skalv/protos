"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryModuleStateResponse = exports.QueryModuleStateRequest = exports.QueryPendingSendToEthResponse = exports.QueryPendingSendToEth = exports.QueryDelegateKeysByOrchestratorAddressResponse = exports.QueryDelegateKeysByOrchestratorAddress = exports.QueryDelegateKeysByEthAddressResponse = exports.QueryDelegateKeysByEthAddress = exports.QueryDelegateKeysByValidatorAddressResponse = exports.QueryDelegateKeysByValidatorAddress = exports.QueryDenomToERC20Response = exports.QueryDenomToERC20Request = exports.QueryERC20ToDenomResponse = exports.QueryERC20ToDenomRequest = exports.QueryLastEventByAddrResponse = exports.QueryLastEventByAddrRequest = exports.QueryBatchConfirmsResponse = exports.QueryBatchConfirmsRequest = exports.QueryBatchRequestByNonceResponse = exports.QueryBatchRequestByNonceRequest = exports.QueryOutgoingTxBatchesResponse = exports.QueryOutgoingTxBatchesRequest = exports.QueryLastPendingBatchRequestByAddrResponse = exports.QueryLastPendingBatchRequestByAddrRequest = exports.QueryBatchFeeResponse = exports.QueryBatchFeeRequest = exports.QueryLastPendingValsetRequestByAddrResponse = exports.QueryLastPendingValsetRequestByAddrRequest = exports.QueryLastValsetRequestsResponse = exports.QueryLastValsetRequestsRequest = exports.QueryValsetConfirmsByNonceResponse = exports.QueryValsetConfirmsByNonceRequest = exports.QueryValsetConfirmResponse = exports.QueryValsetConfirmRequest = exports.QueryValsetRequestResponse = exports.QueryValsetRequestRequest = exports.QueryCurrentValsetResponse = exports.QueryCurrentValsetRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const genesis_1 = require("./genesis");
const types_1 = require("./types");
const msgs_1 = require("./msgs");
const pool_1 = require("./pool");
const batch_1 = require("./batch");
const binary_1 = require("../../../binary");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/injective.peggy.v1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/injective.peggy.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? genesis_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? genesis_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
exports.QueryCurrentValsetRequest = {
    typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryCurrentValsetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentValsetRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentValsetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
            value: exports.QueryCurrentValsetRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetResponse() {
    return {
        valset: undefined
    };
}
exports.QueryCurrentValsetResponse = {
    typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
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
        message.valset = object.valset !== undefined && object.valset !== null ? types_1.Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCurrentValsetResponse();
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = types_1.Valset.fromAmino(object.valset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? types_1.Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentValsetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentValsetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentValsetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
            value: exports.QueryCurrentValsetResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: BigInt(0)
    };
}
exports.QueryValsetRequestRequest = {
    typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryValsetRequestRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetRequestRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetRequestRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
            value: exports.QueryValsetRequestRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestResponse() {
    return {
        valset: undefined
    };
}
exports.QueryValsetRequestResponse = {
    typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
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
        message.valset = object.valset !== undefined && object.valset !== null ? types_1.Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetRequestResponse();
        if (object.valset !== undefined && object.valset !== null) {
            message.valset = types_1.Valset.fromAmino(object.valset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? types_1.Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetRequestResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetRequestResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetRequestResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
            value: exports.QueryValsetRequestResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: BigInt(0),
        address: ""
    };
}
exports.QueryValsetConfirmRequest = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryValsetConfirmRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
            value: exports.QueryValsetConfirmRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmResponse() {
    return {
        confirm: undefined
    };
}
exports.QueryValsetConfirmResponse = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.confirm !== undefined) {
            msgs_1.MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirm = msgs_1.MsgValsetConfirm.decode(reader, reader.uint32());
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
        message.confirm = object.confirm !== undefined && object.confirm !== null ? msgs_1.MsgValsetConfirm.fromPartial(object.confirm) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetConfirmResponse();
        if (object.confirm !== undefined && object.confirm !== null) {
            message.confirm = msgs_1.MsgValsetConfirm.fromAmino(object.confirm);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.confirm = message.confirm ? msgs_1.MsgValsetConfirm.toAmino(message.confirm) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetConfirmResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
            value: exports.QueryValsetConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: BigInt(0)
    };
}
exports.QueryValsetConfirmsByNonceRequest = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryValsetConfirmsByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmsByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmsByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
            value: exports.QueryValsetConfirmsByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return {
        confirms: []
    };
}
exports.QueryValsetConfirmsByNonceResponse = {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
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
        message.confirms = object.confirms?.map(e => msgs_1.MsgValsetConfirm.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = object.confirms?.map(e => msgs_1.MsgValsetConfirm.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? msgs_1.MsgValsetConfirm.toAmino(e) : undefined);
        }
        else {
            obj.confirms = message.confirms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetConfirmsByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmsByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmsByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
            value: exports.QueryValsetConfirmsByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
exports.QueryLastValsetRequestsRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryLastValsetRequestsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastValsetRequestsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastValsetRequestsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
            value: exports.QueryLastValsetRequestsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsResponse() {
    return {
        valsets: []
    };
}
exports.QueryLastValsetRequestsResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
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
        message.valsets = object.valsets?.map(e => types_1.Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = object.valsets?.map(e => types_1.Valset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? types_1.Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = message.valsets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastValsetRequestsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastValsetRequestsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastValsetRequestsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
            value: exports.QueryLastValsetRequestsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: ""
    };
}
exports.QueryLastPendingValsetRequestByAddrRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryLastPendingValsetRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingValsetRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingValsetRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
            value: exports.QueryLastPendingValsetRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse() {
    return {
        valsets: []
    };
}
exports.QueryLastPendingValsetRequestByAddrResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
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
        message.valsets = object.valsets?.map(e => types_1.Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = object.valsets?.map(e => types_1.Valset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? types_1.Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = message.valsets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastPendingValsetRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingValsetRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingValsetRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
            value: exports.QueryLastPendingValsetRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
exports.QueryBatchFeeRequest = {
    typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryBatchFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchFeeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
            value: exports.QueryBatchFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeResponse() {
    return {
        batchFees: []
    };
}
exports.QueryBatchFeeResponse = {
    typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.batchFees) {
            pool_1.BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchFees.push(pool_1.BatchFees.decode(reader, reader.uint32()));
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
        message.batchFees = object.batchFees?.map(e => pool_1.BatchFees.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = object.batchFees?.map(e => pool_1.BatchFees.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map(e => e ? pool_1.BatchFees.toAmino(e) : undefined);
        }
        else {
            obj.batchFees = message.batchFees;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
            value: exports.QueryBatchFeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: ""
    };
}
exports.QueryLastPendingBatchRequestByAddrRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryLastPendingBatchRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingBatchRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingBatchRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
            value: exports.QueryLastPendingBatchRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse() {
    return {
        batch: undefined
    };
}
exports.QueryLastPendingBatchRequestByAddrResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batch !== undefined) {
            batch_1.OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = batch_1.OutgoingTxBatch.decode(reader, reader.uint32());
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
        message.batch = object.batch !== undefined && object.batch !== null ? batch_1.OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = batch_1.OutgoingTxBatch.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? batch_1.OutgoingTxBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastPendingBatchRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingBatchRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingBatchRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
            value: exports.QueryLastPendingBatchRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
exports.QueryOutgoingTxBatchesRequest = {
    typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryOutgoingTxBatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOutgoingTxBatchesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOutgoingTxBatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
            value: exports.QueryOutgoingTxBatchesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return {
        batches: []
    };
}
exports.QueryOutgoingTxBatchesResponse = {
    typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
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
        message.batches = object.batches?.map(e => batch_1.OutgoingTxBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = object.batches?.map(e => batch_1.OutgoingTxBatch.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? batch_1.OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOutgoingTxBatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOutgoingTxBatchesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOutgoingTxBatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
            value: exports.QueryOutgoingTxBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
exports.QueryBatchRequestByNonceRequest = {
    typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryBatchRequestByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchRequestByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchRequestByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
            value: exports.QueryBatchRequestByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceResponse() {
    return {
        batch: undefined
    };
}
exports.QueryBatchRequestByNonceResponse = {
    typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batch !== undefined) {
            batch_1.OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = batch_1.OutgoingTxBatch.decode(reader, reader.uint32());
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
        message.batch = object.batch !== undefined && object.batch !== null ? batch_1.OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = batch_1.OutgoingTxBatch.fromAmino(object.batch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? batch_1.OutgoingTxBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchRequestByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchRequestByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchRequestByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
            value: exports.QueryBatchRequestByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
exports.QueryBatchConfirmsRequest = {
    typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryBatchConfirmsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchConfirmsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchConfirmsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
            value: exports.QueryBatchConfirmsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsResponse() {
    return {
        confirms: []
    };
}
exports.QueryBatchConfirmsResponse = {
    typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
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
        message.confirms = object.confirms?.map(e => msgs_1.MsgConfirmBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = object.confirms?.map(e => msgs_1.MsgConfirmBatch.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? msgs_1.MsgConfirmBatch.toAmino(e) : undefined);
        }
        else {
            obj.confirms = message.confirms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchConfirmsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchConfirmsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchConfirmsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
            value: exports.QueryBatchConfirmsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventByAddrRequest() {
    return {
        address: ""
    };
}
exports.QueryLastEventByAddrRequest = {
    typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryLastEventByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastEventByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastEventByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
            value: exports.QueryLastEventByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventByAddrResponse() {
    return {
        lastClaimEvent: undefined
    };
}
exports.QueryLastEventByAddrResponse = {
    typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lastClaimEvent !== undefined) {
            types_1.LastClaimEvent.encode(message.lastClaimEvent, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastClaimEvent = types_1.LastClaimEvent.decode(reader, reader.uint32());
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
        message.lastClaimEvent = object.lastClaimEvent !== undefined && object.lastClaimEvent !== null ? types_1.LastClaimEvent.fromPartial(object.lastClaimEvent) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLastEventByAddrResponse();
        if (object.last_claim_event !== undefined && object.last_claim_event !== null) {
            message.lastClaimEvent = types_1.LastClaimEvent.fromAmino(object.last_claim_event);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_claim_event = message.lastClaimEvent ? types_1.LastClaimEvent.toAmino(message.lastClaimEvent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastEventByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastEventByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastEventByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
            value: exports.QueryLastEventByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomRequest() {
    return {
        erc20: ""
    };
}
exports.QueryERC20ToDenomRequest = {
    typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryERC20ToDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryERC20ToDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryERC20ToDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
            value: exports.QueryERC20ToDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomResponse() {
    return {
        denom: "",
        cosmosOriginated: false
    };
}
exports.QueryERC20ToDenomResponse = {
    typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryERC20ToDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryERC20ToDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryERC20ToDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
            value: exports.QueryERC20ToDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Request() {
    return {
        denom: ""
    };
}
exports.QueryDenomToERC20Request = {
    typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDenomToERC20Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomToERC20Request.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomToERC20Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
            value: exports.QueryDenomToERC20Request.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Response() {
    return {
        erc20: "",
        cosmosOriginated: false
    };
}
exports.QueryDenomToERC20Response = {
    typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDenomToERC20Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomToERC20Response.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomToERC20Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
            value: exports.QueryDenomToERC20Response.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: ""
    };
}
exports.QueryDelegateKeysByValidatorAddress = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDelegateKeysByValidatorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByValidatorAddress.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByValidatorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
            value: exports.QueryDelegateKeysByValidatorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse() {
    return {
        ethAddress: "",
        orchestratorAddress: ""
    };
}
exports.QueryDelegateKeysByValidatorAddressResponse = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDelegateKeysByValidatorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByValidatorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByValidatorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
            value: exports.QueryDelegateKeysByValidatorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddress() {
    return {
        ethAddress: ""
    };
}
exports.QueryDelegateKeysByEthAddress = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDelegateKeysByEthAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByEthAddress.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByEthAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
            value: exports.QueryDelegateKeysByEthAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddressResponse() {
    return {
        validatorAddress: "",
        orchestratorAddress: ""
    };
}
exports.QueryDelegateKeysByEthAddressResponse = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDelegateKeysByEthAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByEthAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByEthAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
            value: exports.QueryDelegateKeysByEthAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddress() {
    return {
        orchestratorAddress: ""
    };
}
exports.QueryDelegateKeysByOrchestratorAddress = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDelegateKeysByOrchestratorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByOrchestratorAddress.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByOrchestratorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
            value: exports.QueryDelegateKeysByOrchestratorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse() {
    return {
        validatorAddress: "",
        ethAddress: ""
    };
}
exports.QueryDelegateKeysByOrchestratorAddressResponse = {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDelegateKeysByOrchestratorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByOrchestratorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
            value: exports.QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEth() {
    return {
        senderAddress: ""
    };
}
exports.QueryPendingSendToEth = {
    typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryPendingSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingSendToEth.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
            value: exports.QueryPendingSendToEth.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEthResponse() {
    return {
        transfersInBatches: [],
        unbatchedTransfers: []
    };
}
exports.QueryPendingSendToEthResponse = {
    typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.transfersInBatches) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfersInBatches.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
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
        message.transfersInBatches = object.transfersInBatches?.map(e => batch_1.OutgoingTransferTx.fromPartial(e)) || [];
        message.unbatchedTransfers = object.unbatchedTransfers?.map(e => batch_1.OutgoingTransferTx.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = object.transfers_in_batches?.map(e => batch_1.OutgoingTransferTx.fromAmino(e)) || [];
        message.unbatchedTransfers = object.unbatched_transfers?.map(e => batch_1.OutgoingTransferTx.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfers_in_batches = message.transfersInBatches.map(e => e ? batch_1.OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.transfers_in_batches = message.transfersInBatches;
        }
        if (message.unbatchedTransfers) {
            obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? batch_1.OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.unbatched_transfers = message.unbatchedTransfers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPendingSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
            value: exports.QueryPendingSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleStateRequest() {
    return {};
}
exports.QueryModuleStateRequest = {
    typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
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
            typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
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
    typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
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
            typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
            value: exports.QueryModuleStateResponse.encode(message).finish()
        };
    }
};
