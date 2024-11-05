import { BridgeValidator } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseEventAttestationObserved() {
    return {
        attestationType: 0,
        bridgeContract: "",
        bridgeChainId: BigInt(0),
        attestationId: new Uint8Array(),
        nonce: BigInt(0)
    };
}
export const EventAttestationObserved = {
    typeUrl: "/injective.peggy.v1.EventAttestationObserved",
    encode(message, writer = BinaryWriter.create()) {
        if (message.attestationType !== 0) {
            writer.uint32(8).int32(message.attestationType);
        }
        if (message.bridgeContract !== "") {
            writer.uint32(18).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== BigInt(0)) {
            writer.uint32(24).uint64(message.bridgeChainId);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(34).bytes(message.attestationId);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(40).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttestationObserved();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestationType = reader.int32();
                    break;
                case 2:
                    message.bridgeContract = reader.string();
                    break;
                case 3:
                    message.bridgeChainId = reader.uint64();
                    break;
                case 4:
                    message.attestationId = reader.bytes();
                    break;
                case 5:
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
        const message = createBaseEventAttestationObserved();
        message.attestationType = object.attestationType ?? 0;
        message.bridgeContract = object.bridgeContract ?? "";
        message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
        message.attestationId = object.attestationId ?? new Uint8Array();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAttestationObserved();
        if (object.attestation_type !== undefined && object.attestation_type !== null) {
            message.attestationType = object.attestation_type;
        }
        if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
            message.bridgeContract = object.bridge_contract;
        }
        if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
            message.bridgeChainId = BigInt(object.bridge_chain_id);
        }
        if (object.attestation_id !== undefined && object.attestation_id !== null) {
            message.attestationId = bytesFromBase64(object.attestation_id);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.attestation_type = message.attestationType === 0 ? undefined : message.attestationType;
        obj.bridge_contract = message.bridgeContract === "" ? undefined : message.bridgeContract;
        obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? (message.bridgeChainId?.toString)() : undefined;
        obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventAttestationObserved.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventAttestationObserved.decode(message.value);
    },
    toProto(message) {
        return EventAttestationObserved.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventAttestationObserved",
            value: EventAttestationObserved.encode(message).finish()
        };
    }
};
function createBaseEventBridgeWithdrawCanceled() {
    return {
        bridgeContract: "",
        bridgeChainId: BigInt(0)
    };
}
export const EventBridgeWithdrawCanceled = {
    typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== BigInt(0)) {
            writer.uint32(16).uint64(message.bridgeChainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBridgeWithdrawCanceled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bridgeContract = reader.string();
                    break;
                case 2:
                    message.bridgeChainId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBridgeWithdrawCanceled();
        message.bridgeContract = object.bridgeContract ?? "";
        message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBridgeWithdrawCanceled();
        if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
            message.bridgeContract = object.bridge_contract;
        }
        if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
            message.bridgeChainId = BigInt(object.bridge_chain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bridge_contract = message.bridgeContract === "" ? undefined : message.bridgeContract;
        obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? (message.bridgeChainId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBridgeWithdrawCanceled.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBridgeWithdrawCanceled.decode(message.value);
    },
    toProto(message) {
        return EventBridgeWithdrawCanceled.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled",
            value: EventBridgeWithdrawCanceled.encode(message).finish()
        };
    }
};
function createBaseEventOutgoingBatch() {
    return {
        denom: "",
        orchestratorAddress: "",
        batchNonce: BigInt(0),
        batchTimeout: BigInt(0),
        batchTxIds: []
    };
}
export const EventOutgoingBatch = {
    typeUrl: "/injective.peggy.v1.EventOutgoingBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.batchTimeout !== BigInt(0)) {
            writer.uint32(32).uint64(message.batchTimeout);
        }
        writer.uint32(42).fork();
        for (const v of message.batchTxIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                case 3:
                    message.batchNonce = reader.uint64();
                    break;
                case 4:
                    message.batchTimeout = reader.uint64();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.batchTxIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.batchTxIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventOutgoingBatch();
        message.denom = object.denom ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
        message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? BigInt(object.batchTimeout.toString()) : BigInt(0);
        message.batchTxIds = object.batchTxIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventOutgoingBatch();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
            message.batchNonce = BigInt(object.batch_nonce);
        }
        if (object.batch_timeout !== undefined && object.batch_timeout !== null) {
            message.batchTimeout = BigInt(object.batch_timeout);
        }
        message.batchTxIds = object.batch_tx_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        obj.batch_nonce = message.batchNonce !== BigInt(0) ? (message.batchNonce?.toString)() : undefined;
        obj.batch_timeout = message.batchTimeout !== BigInt(0) ? (message.batchTimeout?.toString)() : undefined;
        if (message.batchTxIds) {
            obj.batch_tx_ids = message.batchTxIds.map(e => e.toString());
        }
        else {
            obj.batch_tx_ids = message.batchTxIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventOutgoingBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventOutgoingBatch.decode(message.value);
    },
    toProto(message) {
        return EventOutgoingBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventOutgoingBatch",
            value: EventOutgoingBatch.encode(message).finish()
        };
    }
};
function createBaseEventOutgoingBatchCanceled() {
    return {
        bridgeContract: "",
        bridgeChainId: BigInt(0),
        batchId: BigInt(0),
        nonce: BigInt(0)
    };
}
export const EventOutgoingBatchCanceled = {
    typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== BigInt(0)) {
            writer.uint32(16).uint64(message.bridgeChainId);
        }
        if (message.batchId !== BigInt(0)) {
            writer.uint32(24).uint64(message.batchId);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatchCanceled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bridgeContract = reader.string();
                    break;
                case 2:
                    message.bridgeChainId = reader.uint64();
                    break;
                case 3:
                    message.batchId = reader.uint64();
                    break;
                case 4:
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
        const message = createBaseEventOutgoingBatchCanceled();
        message.bridgeContract = object.bridgeContract ?? "";
        message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
        message.batchId = object.batchId !== undefined && object.batchId !== null ? BigInt(object.batchId.toString()) : BigInt(0);
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventOutgoingBatchCanceled();
        if (object.bridge_contract !== undefined && object.bridge_contract !== null) {
            message.bridgeContract = object.bridge_contract;
        }
        if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
            message.bridgeChainId = BigInt(object.bridge_chain_id);
        }
        if (object.batch_id !== undefined && object.batch_id !== null) {
            message.batchId = BigInt(object.batch_id);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bridge_contract = message.bridgeContract === "" ? undefined : message.bridgeContract;
        obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? (message.bridgeChainId?.toString)() : undefined;
        obj.batch_id = message.batchId !== BigInt(0) ? (message.batchId?.toString)() : undefined;
        obj.nonce = message.nonce !== BigInt(0) ? (message.nonce?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventOutgoingBatchCanceled.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventOutgoingBatchCanceled.decode(message.value);
    },
    toProto(message) {
        return EventOutgoingBatchCanceled.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled",
            value: EventOutgoingBatchCanceled.encode(message).finish()
        };
    }
};
function createBaseEventValsetUpdateRequest() {
    return {
        valsetNonce: BigInt(0),
        valsetHeight: BigInt(0),
        valsetMembers: [],
        rewardAmount: "",
        rewardToken: ""
    };
}
export const EventValsetUpdateRequest = {
    typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.valsetNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.valsetNonce);
        }
        if (message.valsetHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.valsetHeight);
        }
        for (const v of message.valsetMembers) {
            BridgeValidator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(34).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(42).string(message.rewardToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetUpdateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsetNonce = reader.uint64();
                    break;
                case 2:
                    message.valsetHeight = reader.uint64();
                    break;
                case 3:
                    message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.rewardAmount = reader.string();
                    break;
                case 5:
                    message.rewardToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventValsetUpdateRequest();
        message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
        message.valsetHeight = object.valsetHeight !== undefined && object.valsetHeight !== null ? BigInt(object.valsetHeight.toString()) : BigInt(0);
        message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventValsetUpdateRequest();
        if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
            message.valsetNonce = BigInt(object.valset_nonce);
        }
        if (object.valset_height !== undefined && object.valset_height !== null) {
            message.valsetHeight = BigInt(object.valset_height);
        }
        message.valsetMembers = object.valset_members?.map(e => BridgeValidator.fromAmino(e)) || [];
        if (object.reward_amount !== undefined && object.reward_amount !== null) {
            message.rewardAmount = object.reward_amount;
        }
        if (object.reward_token !== undefined && object.reward_token !== null) {
            message.rewardToken = object.reward_token;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.valset_nonce = message.valsetNonce !== BigInt(0) ? (message.valsetNonce?.toString)() : undefined;
        obj.valset_height = message.valsetHeight !== BigInt(0) ? (message.valsetHeight?.toString)() : undefined;
        if (message.valsetMembers) {
            obj.valset_members = message.valsetMembers.map(e => e ? BridgeValidator.toAmino(e) : undefined);
        }
        else {
            obj.valset_members = message.valsetMembers;
        }
        obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
        obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
        return obj;
    },
    fromAminoMsg(object) {
        return EventValsetUpdateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventValsetUpdateRequest.decode(message.value);
    },
    toProto(message) {
        return EventValsetUpdateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest",
            value: EventValsetUpdateRequest.encode(message).finish()
        };
    }
};
function createBaseEventSetOrchestratorAddresses() {
    return {
        validatorAddress: "",
        orchestratorAddress: "",
        operatorEthAddress: ""
    };
}
export const EventSetOrchestratorAddresses = {
    typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        if (message.operatorEthAddress !== "") {
            writer.uint32(26).string(message.operatorEthAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSetOrchestratorAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                case 3:
                    message.operatorEthAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSetOrchestratorAddresses();
        message.validatorAddress = object.validatorAddress ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        message.operatorEthAddress = object.operatorEthAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSetOrchestratorAddresses();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        if (object.operator_eth_address !== undefined && object.operator_eth_address !== null) {
            message.operatorEthAddress = object.operator_eth_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        obj.operator_eth_address = message.operatorEthAddress === "" ? undefined : message.operatorEthAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSetOrchestratorAddresses.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSetOrchestratorAddresses.decode(message.value);
    },
    toProto(message) {
        return EventSetOrchestratorAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses",
            value: EventSetOrchestratorAddresses.encode(message).finish()
        };
    }
};
function createBaseEventValsetConfirm() {
    return {
        valsetNonce: BigInt(0),
        orchestratorAddress: ""
    };
}
export const EventValsetConfirm = {
    typeUrl: "/injective.peggy.v1.EventValsetConfirm",
    encode(message, writer = BinaryWriter.create()) {
        if (message.valsetNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.valsetNonce);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsetNonce = reader.uint64();
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
        const message = createBaseEventValsetConfirm();
        message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventValsetConfirm();
        if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
            message.valsetNonce = BigInt(object.valset_nonce);
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.valset_nonce = message.valsetNonce !== BigInt(0) ? (message.valsetNonce?.toString)() : undefined;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventValsetConfirm.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventValsetConfirm.decode(message.value);
    },
    toProto(message) {
        return EventValsetConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventValsetConfirm",
            value: EventValsetConfirm.encode(message).finish()
        };
    }
};
function createBaseEventSendToEth() {
    return {
        outgoingTxId: BigInt(0),
        sender: "",
        receiver: "",
        amount: "",
        bridgeFee: ""
    };
}
export const EventSendToEth = {
    typeUrl: "/injective.peggy.v1.EventSendToEth",
    encode(message, writer = BinaryWriter.create()) {
        if (message.outgoingTxId !== BigInt(0)) {
            writer.uint32(8).uint64(message.outgoingTxId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(26).string(message.receiver);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.bridgeFee !== "") {
            writer.uint32(42).string(message.bridgeFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outgoingTxId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.receiver = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.bridgeFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSendToEth();
        message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? BigInt(object.outgoingTxId.toString()) : BigInt(0);
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.amount = object.amount ?? "";
        message.bridgeFee = object.bridgeFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSendToEth();
        if (object.outgoing_tx_id !== undefined && object.outgoing_tx_id !== null) {
            message.outgoingTxId = BigInt(object.outgoing_tx_id);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.bridge_fee !== undefined && object.bridge_fee !== null) {
            message.bridgeFee = object.bridge_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.outgoing_tx_id = message.outgoingTxId !== BigInt(0) ? (message.outgoingTxId?.toString)() : undefined;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.bridge_fee = message.bridgeFee === "" ? undefined : message.bridgeFee;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSendToEth.decode(message.value);
    },
    toProto(message) {
        return EventSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventSendToEth",
            value: EventSendToEth.encode(message).finish()
        };
    }
};
function createBaseEventConfirmBatch() {
    return {
        batchNonce: BigInt(0),
        orchestratorAddress: ""
    };
}
export const EventConfirmBatch = {
    typeUrl: "/injective.peggy.v1.EventConfirmBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConfirmBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchNonce = reader.uint64();
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
        const message = createBaseEventConfirmBatch();
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventConfirmBatch();
        if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
            message.batchNonce = BigInt(object.batch_nonce);
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_nonce = message.batchNonce !== BigInt(0) ? (message.batchNonce?.toString)() : undefined;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventConfirmBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventConfirmBatch.decode(message.value);
    },
    toProto(message) {
        return EventConfirmBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventConfirmBatch",
            value: EventConfirmBatch.encode(message).finish()
        };
    }
};
function createBaseEventAttestationVote() {
    return {
        eventNonce: BigInt(0),
        attestationId: new Uint8Array(),
        voter: ""
    };
}
export const EventAttestationVote = {
    typeUrl: "/injective.peggy.v1.EventAttestationVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(18).bytes(message.attestationId);
        }
        if (message.voter !== "") {
            writer.uint32(26).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttestationVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.attestationId = reader.bytes();
                    break;
                case 3:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAttestationVote();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.attestationId = object.attestationId ?? new Uint8Array();
        message.voter = object.voter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAttestationVote();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.attestation_id !== undefined && object.attestation_id !== null) {
            message.attestationId = bytesFromBase64(object.attestation_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return EventAttestationVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventAttestationVote.decode(message.value);
    },
    toProto(message) {
        return EventAttestationVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventAttestationVote",
            value: EventAttestationVote.encode(message).finish()
        };
    }
};
function createBaseEventDepositClaim() {
    return {
        eventNonce: BigInt(0),
        eventHeight: BigInt(0),
        attestationId: new Uint8Array(),
        ethereumSender: "",
        cosmosReceiver: "",
        tokenContract: "",
        amount: "",
        orchestratorAddress: "",
        data: ""
    };
}
export const EventDepositClaim = {
    typeUrl: "/injective.peggy.v1.EventDepositClaim",
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(34).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(42).string(message.cosmosReceiver);
        }
        if (message.tokenContract !== "") {
            writer.uint32(50).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(58).string(message.amount);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(66).string(message.orchestratorAddress);
        }
        if (message.data !== "") {
            writer.uint32(74).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDepositClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.eventHeight = reader.uint64();
                    break;
                case 3:
                    message.attestationId = reader.bytes();
                    break;
                case 4:
                    message.ethereumSender = reader.string();
                    break;
                case 5:
                    message.cosmosReceiver = reader.string();
                    break;
                case 6:
                    message.tokenContract = reader.string();
                    break;
                case 7:
                    message.amount = reader.string();
                    break;
                case 8:
                    message.orchestratorAddress = reader.string();
                    break;
                case 9:
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
        const message = createBaseEventDepositClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
        message.attestationId = object.attestationId ?? new Uint8Array();
        message.ethereumSender = object.ethereumSender ?? "";
        message.cosmosReceiver = object.cosmosReceiver ?? "";
        message.tokenContract = object.tokenContract ?? "";
        message.amount = object.amount ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        message.data = object.data ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDepositClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.event_height !== undefined && object.event_height !== null) {
            message.eventHeight = BigInt(object.event_height);
        }
        if (object.attestation_id !== undefined && object.attestation_id !== null) {
            message.attestationId = bytesFromBase64(object.attestation_id);
        }
        if (object.ethereum_sender !== undefined && object.ethereum_sender !== null) {
            message.ethereumSender = object.ethereum_sender;
        }
        if (object.cosmos_receiver !== undefined && object.cosmos_receiver !== null) {
            message.cosmosReceiver = object.cosmos_receiver;
        }
        if (object.token_contract !== undefined && object.token_contract !== null) {
            message.tokenContract = object.token_contract;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.event_height = message.eventHeight !== BigInt(0) ? (message.eventHeight?.toString)() : undefined;
        obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
        obj.ethereum_sender = message.ethereumSender === "" ? undefined : message.ethereumSender;
        obj.cosmos_receiver = message.cosmosReceiver === "" ? undefined : message.cosmosReceiver;
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        obj.data = message.data === "" ? undefined : message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return EventDepositClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventDepositClaim.decode(message.value);
    },
    toProto(message) {
        return EventDepositClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventDepositClaim",
            value: EventDepositClaim.encode(message).finish()
        };
    }
};
function createBaseEventWithdrawClaim() {
    return {
        eventNonce: BigInt(0),
        eventHeight: BigInt(0),
        attestationId: new Uint8Array(),
        batchNonce: BigInt(0),
        tokenContract: "",
        orchestratorAddress: ""
    };
}
export const EventWithdrawClaim = {
    typeUrl: "/injective.peggy.v1.EventWithdrawClaim",
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(42).string(message.tokenContract);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(50).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.eventHeight = reader.uint64();
                    break;
                case 3:
                    message.attestationId = reader.bytes();
                    break;
                case 4:
                    message.batchNonce = reader.uint64();
                    break;
                case 5:
                    message.tokenContract = reader.string();
                    break;
                case 6:
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
        const message = createBaseEventWithdrawClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
        message.attestationId = object.attestationId ?? new Uint8Array();
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
        message.tokenContract = object.tokenContract ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventWithdrawClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.event_height !== undefined && object.event_height !== null) {
            message.eventHeight = BigInt(object.event_height);
        }
        if (object.attestation_id !== undefined && object.attestation_id !== null) {
            message.attestationId = bytesFromBase64(object.attestation_id);
        }
        if (object.batch_nonce !== undefined && object.batch_nonce !== null) {
            message.batchNonce = BigInt(object.batch_nonce);
        }
        if (object.token_contract !== undefined && object.token_contract !== null) {
            message.tokenContract = object.token_contract;
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.event_height = message.eventHeight !== BigInt(0) ? (message.eventHeight?.toString)() : undefined;
        obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
        obj.batch_nonce = message.batchNonce !== BigInt(0) ? (message.batchNonce?.toString)() : undefined;
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventWithdrawClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventWithdrawClaim.decode(message.value);
    },
    toProto(message) {
        return EventWithdrawClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventWithdrawClaim",
            value: EventWithdrawClaim.encode(message).finish()
        };
    }
};
function createBaseEventERC20DeployedClaim() {
    return {
        eventNonce: BigInt(0),
        eventHeight: BigInt(0),
        attestationId: new Uint8Array(),
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: BigInt(0),
        orchestratorAddress: ""
    };
}
export const EventERC20DeployedClaim = {
    typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim",
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(34).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(42).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(58).string(message.symbol);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(64).uint64(message.decimals);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(74).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventERC20DeployedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.eventHeight = reader.uint64();
                    break;
                case 3:
                    message.attestationId = reader.bytes();
                    break;
                case 4:
                    message.cosmosDenom = reader.string();
                    break;
                case 5:
                    message.tokenContract = reader.string();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.symbol = reader.string();
                    break;
                case 8:
                    message.decimals = reader.uint64();
                    break;
                case 9:
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
        const message = createBaseEventERC20DeployedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
        message.attestationId = object.attestationId ?? new Uint8Array();
        message.cosmosDenom = object.cosmosDenom ?? "";
        message.tokenContract = object.tokenContract ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventERC20DeployedClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.event_height !== undefined && object.event_height !== null) {
            message.eventHeight = BigInt(object.event_height);
        }
        if (object.attestation_id !== undefined && object.attestation_id !== null) {
            message.attestationId = bytesFromBase64(object.attestation_id);
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
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.event_height = message.eventHeight !== BigInt(0) ? (message.eventHeight?.toString)() : undefined;
        obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
        obj.cosmos_denom = message.cosmosDenom === "" ? undefined : message.cosmosDenom;
        obj.token_contract = message.tokenContract === "" ? undefined : message.tokenContract;
        obj.name = message.name === "" ? undefined : message.name;
        obj.symbol = message.symbol === "" ? undefined : message.symbol;
        obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventERC20DeployedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventERC20DeployedClaim.decode(message.value);
    },
    toProto(message) {
        return EventERC20DeployedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim",
            value: EventERC20DeployedClaim.encode(message).finish()
        };
    }
};
function createBaseEventValsetUpdateClaim() {
    return {
        eventNonce: BigInt(0),
        eventHeight: BigInt(0),
        attestationId: new Uint8Array(),
        valsetNonce: BigInt(0),
        valsetMembers: [],
        rewardAmount: "",
        rewardToken: "",
        orchestratorAddress: ""
    };
}
export const EventValsetUpdateClaim = {
    typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim",
    encode(message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.eventHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.eventHeight);
        }
        if (message.attestationId.length !== 0) {
            writer.uint32(26).bytes(message.attestationId);
        }
        if (message.valsetNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.valsetNonce);
        }
        for (const v of message.valsetMembers) {
            BridgeValidator.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(50).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(58).string(message.rewardToken);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(66).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetUpdateClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.eventHeight = reader.uint64();
                    break;
                case 3:
                    message.attestationId = reader.bytes();
                    break;
                case 4:
                    message.valsetNonce = reader.uint64();
                    break;
                case 5:
                    message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.rewardAmount = reader.string();
                    break;
                case 7:
                    message.rewardToken = reader.string();
                    break;
                case 8:
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
        const message = createBaseEventValsetUpdateClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
        message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
        message.attestationId = object.attestationId ?? new Uint8Array();
        message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
        message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventValsetUpdateClaim();
        if (object.event_nonce !== undefined && object.event_nonce !== null) {
            message.eventNonce = BigInt(object.event_nonce);
        }
        if (object.event_height !== undefined && object.event_height !== null) {
            message.eventHeight = BigInt(object.event_height);
        }
        if (object.attestation_id !== undefined && object.attestation_id !== null) {
            message.attestationId = bytesFromBase64(object.attestation_id);
        }
        if (object.valset_nonce !== undefined && object.valset_nonce !== null) {
            message.valsetNonce = BigInt(object.valset_nonce);
        }
        message.valsetMembers = object.valset_members?.map(e => BridgeValidator.fromAmino(e)) || [];
        if (object.reward_amount !== undefined && object.reward_amount !== null) {
            message.rewardAmount = object.reward_amount;
        }
        if (object.reward_token !== undefined && object.reward_token !== null) {
            message.rewardToken = object.reward_token;
        }
        if (object.orchestrator_address !== undefined && object.orchestrator_address !== null) {
            message.orchestratorAddress = object.orchestrator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce !== BigInt(0) ? (message.eventNonce?.toString)() : undefined;
        obj.event_height = message.eventHeight !== BigInt(0) ? (message.eventHeight?.toString)() : undefined;
        obj.attestation_id = message.attestationId ? base64FromBytes(message.attestationId) : undefined;
        obj.valset_nonce = message.valsetNonce !== BigInt(0) ? (message.valsetNonce?.toString)() : undefined;
        if (message.valsetMembers) {
            obj.valset_members = message.valsetMembers.map(e => e ? BridgeValidator.toAmino(e) : undefined);
        }
        else {
            obj.valset_members = message.valsetMembers;
        }
        obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
        obj.reward_token = message.rewardToken === "" ? undefined : message.rewardToken;
        obj.orchestrator_address = message.orchestratorAddress === "" ? undefined : message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventValsetUpdateClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventValsetUpdateClaim.decode(message.value);
    },
    toProto(message) {
        return EventValsetUpdateClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim",
            value: EventValsetUpdateClaim.encode(message).finish()
        };
    }
};
function createBaseEventCancelSendToEth() {
    return {
        outgoingTxId: BigInt(0)
    };
}
export const EventCancelSendToEth = {
    typeUrl: "/injective.peggy.v1.EventCancelSendToEth",
    encode(message, writer = BinaryWriter.create()) {
        if (message.outgoingTxId !== BigInt(0)) {
            writer.uint32(8).uint64(message.outgoingTxId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outgoingTxId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCancelSendToEth();
        message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? BigInt(object.outgoingTxId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelSendToEth();
        if (object.outgoing_tx_id !== undefined && object.outgoing_tx_id !== null) {
            message.outgoingTxId = BigInt(object.outgoing_tx_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.outgoing_tx_id = message.outgoingTxId !== BigInt(0) ? (message.outgoingTxId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancelSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancelSendToEth.decode(message.value);
    },
    toProto(message) {
        return EventCancelSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventCancelSendToEth",
            value: EventCancelSendToEth.encode(message).finish()
        };
    }
};
function createBaseEventSubmitBadSignatureEvidence() {
    return {
        badEthSignature: "",
        badEthSignatureSubject: ""
    };
}
export const EventSubmitBadSignatureEvidence = {
    typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence",
    encode(message, writer = BinaryWriter.create()) {
        if (message.badEthSignature !== "") {
            writer.uint32(10).string(message.badEthSignature);
        }
        if (message.badEthSignatureSubject !== "") {
            writer.uint32(18).string(message.badEthSignatureSubject);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitBadSignatureEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.badEthSignature = reader.string();
                    break;
                case 2:
                    message.badEthSignatureSubject = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSubmitBadSignatureEvidence();
        message.badEthSignature = object.badEthSignature ?? "";
        message.badEthSignatureSubject = object.badEthSignatureSubject ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubmitBadSignatureEvidence();
        if (object.bad_eth_signature !== undefined && object.bad_eth_signature !== null) {
            message.badEthSignature = object.bad_eth_signature;
        }
        if (object.bad_eth_signature_subject !== undefined && object.bad_eth_signature_subject !== null) {
            message.badEthSignatureSubject = object.bad_eth_signature_subject;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bad_eth_signature = message.badEthSignature === "" ? undefined : message.badEthSignature;
        obj.bad_eth_signature_subject = message.badEthSignatureSubject === "" ? undefined : message.badEthSignatureSubject;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSubmitBadSignatureEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSubmitBadSignatureEvidence.decode(message.value);
    },
    toProto(message) {
        return EventSubmitBadSignatureEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence",
            value: EventSubmitBadSignatureEvidence.encode(message).finish()
        };
    }
};
