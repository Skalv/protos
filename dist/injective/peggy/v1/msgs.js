"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgValsetUpdatedClaimResponse = exports.MsgValsetUpdatedClaim = exports.MsgSubmitBadSignatureEvidenceResponse = exports.MsgSubmitBadSignatureEvidence = exports.MsgCancelSendToEthResponse = exports.MsgCancelSendToEth = exports.MsgERC20DeployedClaimResponse = exports.MsgERC20DeployedClaim = exports.MsgWithdrawClaimResponse = exports.MsgWithdrawClaim = exports.MsgDepositClaimResponse = exports.MsgDepositClaim = exports.MsgConfirmBatchResponse = exports.MsgConfirmBatch = exports.MsgRequestBatchResponse = exports.MsgRequestBatch = exports.MsgSendToEthResponse = exports.MsgSendToEth = exports.MsgValsetConfirmResponse = exports.MsgValsetConfirm = exports.MsgSetOrchestratorAddressesResponse = exports.MsgSetOrchestratorAddresses = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const types_1 = require("./types");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
function createBaseMsgSetOrchestratorAddresses() {
    return {
        sender: "",
        orchestrator: "",
        ethAddress: ""
    };
}
exports.MsgSetOrchestratorAddresses = {
    typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgSetOrchestratorAddresses();
        message.sender = object.sender ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.ethAddress = object.ethAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetOrchestratorAddresses();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        if (object.eth_address !== undefined && object.eth_address !== null) {
            message.ethAddress = object.eth_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetOrchestratorAddresses.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetOrchestratorAddresses.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetOrchestratorAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
            value: exports.MsgSetOrchestratorAddresses.encode(message).finish()
        };
    }
};
function createBaseMsgSetOrchestratorAddressesResponse() {
    return {};
}
exports.MsgSetOrchestratorAddressesResponse = {
    typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddressesResponse();
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
        const message = createBaseMsgSetOrchestratorAddressesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetOrchestratorAddressesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetOrchestratorAddressesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetOrchestratorAddressesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetOrchestratorAddressesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse",
            value: exports.MsgSetOrchestratorAddressesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValsetConfirm() {
    return {
        nonce: BigInt(0),
        orchestrator: "",
        ethAddress: "",
        signature: ""
    };
}
exports.MsgValsetConfirm = {
    typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        if (message.signature !== "") {
            writer.uint32(34).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
                    message.ethAddress = reader.string();
                    break;
                case 4:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgValsetConfirm();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.orchestrator = object.orchestrator ?? "";
        message.ethAddress = object.ethAddress ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgValsetConfirm();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        if (object.eth_address !== undefined && object.eth_address !== null) {
            message.ethAddress = object.eth_address;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        obj.eth_address = message.ethAddress === "" ? undefined : message.ethAddress;
        obj.signature = message.signature === "" ? undefined : message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgValsetConfirm.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
            value: exports.MsgValsetConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgValsetConfirmResponse() {
    return {};
}
exports.MsgValsetConfirmResponse = {
    typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirmResponse();
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
        const message = createBaseMsgValsetConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgValsetConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgValsetConfirmResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse",
            value: exports.MsgValsetConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendToEth() {
    return {
        sender: "",
        ethDest: "",
        amount: coin_1.Coin.fromPartial({}),
        bridgeFee: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSendToEth = {
    typeUrl: "/injective.peggy.v1.MsgSendToEth",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ethDest !== "") {
            writer.uint32(18).string(message.ethDest);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.bridgeFee !== undefined) {
            coin_1.Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ethDest = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bridgeFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSendToEth();
        message.sender = object.sender ?? "";
        message.ethDest = object.ethDest ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? coin_1.Coin.fromPartial(object.bridgeFee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSendToEth();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.eth_dest !== undefined && object.eth_dest !== null) {
            message.ethDest = object.eth_dest;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        if (object.bridge_fee !== undefined && object.bridge_fee !== null) {
            message.bridgeFee = coin_1.Coin.fromAmino(object.bridge_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.eth_dest = message.ethDest === "" ? undefined : message.ethDest;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.bridge_fee = message.bridgeFee ? coin_1.Coin.toAmino(message.bridgeFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendToEth.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgSendToEth",
            value: exports.MsgSendToEth.encode(message).finish()
        };
    }
};
function createBaseMsgSendToEthResponse() {
    return {};
}
exports.MsgSendToEthResponse = {
    typeUrl: "/injective.peggy.v1.MsgSendToEthResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEthResponse();
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
        const message = createBaseMsgSendToEthResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSendToEthResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgSendToEthResponse",
            value: exports.MsgSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBatch() {
    return {
        orchestrator: "",
        denom: ""
    };
}
exports.MsgRequestBatch = {
    typeUrl: "/injective.peggy.v1.MsgRequestBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orchestrator !== "") {
            writer.uint32(10).string(message.orchestrator);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestrator = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgRequestBatch();
        message.orchestrator = object.orchestrator ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRequestBatch();
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRequestBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgRequestBatch",
            value: exports.MsgRequestBatch.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBatchResponse() {
    return {};
}
exports.MsgRequestBatchResponse = {
    typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatchResponse();
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
        const message = createBaseMsgRequestBatchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRequestBatchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRequestBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse",
            value: exports.MsgRequestBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmBatch() {
    return {
        nonce: BigInt(0),
        tokenContract: "",
        ethSigner: "",
        orchestrator: "",
        signature: ""
    };
}
exports.MsgConfirmBatch = {
    typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(18).string(message.tokenContract);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.tokenContract = reader.string();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgConfirmBatch();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.tokenContract = object.tokenContract ?? "";
        message.ethSigner = object.ethSigner ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConfirmBatch();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.token_contract !== undefined && object.token_contract !== null) {
            message.tokenContract = object.token_contract;
        }
        if (object.eth_signer !== undefined && object.eth_signer !== null) {
            message.ethSigner = object.eth_signer;
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.eth_signer = message.ethSigner === "" ? undefined : message.ethSigner;
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        obj.signature = message.signature === "" ? undefined : message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConfirmBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgConfirmBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConfirmBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
            value: exports.MsgConfirmBatch.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmBatchResponse() {
    return {};
}
exports.MsgConfirmBatchResponse = {
    typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatchResponse();
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
        const message = createBaseMsgConfirmBatchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConfirmBatchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConfirmBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgConfirmBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConfirmBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse",
            value: exports.MsgConfirmBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositClaim() {
    return {
        eventNonce: BigInt(0),
        blockHeight: BigInt(0),
        tokenContract: "",
        amount: "",
        ethereumSender: "",
        cosmosReceiver: "",
        orchestrator: "",
        data: ""
    };
}
exports.MsgDepositClaim = {
    typeUrl: "/injective.peggy.v1.MsgDepositClaim",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.tokenContract !== "") {
            writer.uint32(26).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(42).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(50).string(message.cosmosReceiver);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        if (message.data !== "") {
            writer.uint32(66).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.blockHeight = reader.uint64();
                    break;
                case 3:
                    message.tokenContract = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.ethereumSender = reader.string();
                    break;
                case 6:
                    message.cosmosReceiver = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
                    break;
                case 8:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.tokenContract = object.tokenContract ?? "";
        message.amount = object.amount ?? "";
        message.ethereumSender = object.ethereumSender ?? "";
        message.cosmosReceiver = object.cosmosReceiver ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.data = object.data ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.token_contract !== undefined && object.token_contract !== null) {
            message.tokenContract = object.token_contract;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.ethereum_sender !== undefined && object.ethereum_sender !== null) {
            message.ethereumSender = object.ethereum_sender;
        }
        if (object.cosmos_receiver !== undefined && object.cosmos_receiver !== null) {
            message.cosmosReceiver = object.cosmos_receiver;
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.ethereum_sender = message.ethereumSender === "" ? undefined : message.ethereumSender;
        obj.cosmos_receiver = message.cosmosReceiver === "" ? undefined : message.cosmosReceiver;
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        obj.data = message.data === "" ? undefined : message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgDepositClaim",
            value: exports.MsgDepositClaim.encode(message).finish()
        };
    }
};
function createBaseMsgDepositClaimResponse() {
    return {};
}
exports.MsgDepositClaimResponse = {
    typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositClaimResponse();
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
        const message = createBaseMsgDepositClaimResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositClaimResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse",
            value: exports.MsgDepositClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawClaim() {
    return {
        eventNonce: BigInt(0),
        blockHeight: BigInt(0),
        batchNonce: BigInt(0),
        tokenContract: "",
        orchestrator: ""
    };
}
exports.MsgWithdrawClaim = {
    typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.blockHeight = reader.uint64();
                    break;
                case 3:
                    message.batchNonce = reader.uint64();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
        message.tokenContract = object.tokenContract ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
            message.batchNonce = BigInt(object.batch_nonce);
        }
        if (object.token_contract !== undefined && object.token_contract !== null) {
            message.tokenContract = object.token_contract;
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
        obj.batch_nonce = message.batchNonce !== BigInt(0) ? (message.batchNonce?.toString)() : undefined;
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
            value: exports.MsgWithdrawClaim.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawClaimResponse() {
    return {};
}
exports.MsgWithdrawClaimResponse = {
    typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawClaimResponse();
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
        const message = createBaseMsgWithdrawClaimResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawClaimResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse",
            value: exports.MsgWithdrawClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgERC20DeployedClaim() {
    return {
        eventNonce: BigInt(0),
        blockHeight: BigInt(0),
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: BigInt(0),
        orchestrator: ""
    };
}
exports.MsgERC20DeployedClaim = {
    typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(26).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(56).uint64(message.decimals);
        }
        if (message.orchestrator !== "") {
            writer.uint32(66).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.blockHeight = reader.uint64();
                    break;
                case 3:
                    message.cosmosDenom = reader.string();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.decimals = reader.uint64();
                    break;
                case 8:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgERC20DeployedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.cosmosDenom = object.cosmosDenom ?? "";
        message.tokenContract = object.tokenContract ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgERC20DeployedClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        if (object.cosmos_denom !== undefined && object.cosmos_denom !== null) {
            message.cosmosDenom = object.cosmos_denom;
        }
        if (object.token_contract !== undefined && object.token_contract !== null) {
            message.tokenContract = object.token_contract;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = BigInt(object.decimals);
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
        obj.cosmos_denom = message.cosmosDenom === "" ? undefined : message.cosmosDenom;
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.name = message.name === "" ? undefined : message.name;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgERC20DeployedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgERC20DeployedClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgERC20DeployedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
            value: exports.MsgERC20DeployedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgERC20DeployedClaimResponse() {
    return {};
}
exports.MsgERC20DeployedClaimResponse = {
    typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaimResponse();
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
        const message = createBaseMsgERC20DeployedClaimResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgERC20DeployedClaimResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgERC20DeployedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgERC20DeployedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgERC20DeployedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse",
            value: exports.MsgERC20DeployedClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSendToEth() {
    return {
        transactionId: BigInt(0),
        sender: ""
    };
}
exports.MsgCancelSendToEth = {
    typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.transactionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.transactionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transactionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelSendToEth();
        message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? BigInt(object.transactionId.toString()) : BigInt(0);
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelSendToEth();
        if (object.transaction_id !== undefined && object.transaction_id !== null) {
            message.transactionId = BigInt(object.transaction_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.transaction_id = message.transactionId !== BigInt(0) ? (message.transactionId?.toString)() : undefined;
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSendToEth.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
            value: exports.MsgCancelSendToEth.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSendToEthResponse() {
    return {};
}
exports.MsgCancelSendToEthResponse = {
    typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEthResponse();
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
        const message = createBaseMsgCancelSendToEthResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelSendToEthResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse",
            value: exports.MsgCancelSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitBadSignatureEvidence() {
    return {
        subject: undefined,
        signature: "",
        sender: ""
    };
}
exports.MsgSubmitBadSignatureEvidence = {
    typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subject !== undefined) {
            any_1.Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subject = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signature = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitBadSignatureEvidence();
        message.subject = object.subject !== undefined && object.subject !== null ? any_1.Any.fromPartial(object.subject) : undefined;
        message.signature = object.signature ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitBadSignatureEvidence();
        if (object.subject !== undefined && object.subject !== null) {
            message.subject = any_1.Any.fromAmino(object.subject);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subject = message.subject ? any_1.Any.toAmino(message.subject) : undefined;
        obj.signature = message.signature === "" ? undefined : message.signature;
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitBadSignatureEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitBadSignatureEvidence.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitBadSignatureEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
            value: exports.MsgSubmitBadSignatureEvidence.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse() {
    return {};
}
exports.MsgSubmitBadSignatureEvidenceResponse = {
    typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
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
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitBadSignatureEvidenceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitBadSignatureEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitBadSignatureEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse",
            value: exports.MsgSubmitBadSignatureEvidenceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValsetUpdatedClaim() {
    return {
        eventNonce: BigInt(0),
        valsetNonce: BigInt(0),
        blockHeight: BigInt(0),
        members: [],
        rewardAmount: "",
        rewardToken: "",
        orchestrator: ""
    };
}
exports.MsgValsetUpdatedClaim = {
    typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.valsetNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.valsetNonce);
        }
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.blockHeight);
        }
        for (const v of message.members) {
            types_1.BridgeValidator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(42).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(50).string(message.rewardToken);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.valsetNonce = reader.uint64();
                    break;
                case 3:
                    message.blockHeight = reader.uint64();
                    break;
                case 4:
                    message.members.push(types_1.BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.rewardAmount = reader.string();
                    break;
                case 6:
                    message.rewardToken = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgValsetUpdatedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
        message.members = object.members?.map(e => types_1.BridgeValidator.fromPartial(e)) || [];
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgValsetUpdatedClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
            message.valsetNonce = BigInt(object.valset_nonce);
        }
        if (object.block_height !== undefined && object.block_height !== null) {
            message.blockHeight = BigInt(object.block_height);
        }
        message.members = object.members?.map(e => types_1.BridgeValidator.fromAmino(e)) || [];
        if (object.reward_amount !== undefined && object.reward_amount !== null) {
            message.rewardAmount = object.reward_amount;
        }
        if (object.reward_token !== undefined && object.reward_token !== null) {
            message.rewardToken = object.reward_token;
        }
        if (object.orchestrator !== undefined && object.orchestrator !== null) {
            message.orchestrator = object.orchestrator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.valset_nonce = message.valsetNonce !== BigInt(0) ? (message.valsetNonce?.toString)() : undefined;
        obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.BridgeValidator.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
        obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
        obj.orchestrator = message.orchestrator === "" ? undefined : message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgValsetUpdatedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetUpdatedClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetUpdatedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
            value: exports.MsgValsetUpdatedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgValsetUpdatedClaimResponse() {
    return {};
}
exports.MsgValsetUpdatedClaimResponse = {
    typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaimResponse();
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
        const message = createBaseMsgValsetUpdatedClaimResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgValsetUpdatedClaimResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgValsetUpdatedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetUpdatedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetUpdatedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse",
            value: exports.MsgValsetUpdatedClaimResponse.encode(message).finish()
        };
    }
};
