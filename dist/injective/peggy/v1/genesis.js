"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const types_1 = require("./types");
const msgs_1 = require("./msgs");
const batch_1 = require("./batch");
const attestation_1 = require("./attestation");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        peggyId: "",
        contractSourceHash: "",
        bridgeEthereumAddress: "",
        bridgeChainId: BigInt(0),
        signedValsetsWindow: BigInt(0),
        signedBatchesWindow: BigInt(0),
        signedClaimsWindow: BigInt(0),
        targetBatchTimeout: BigInt(0),
        averageBlockTime: BigInt(0),
        averageEthereumBlockTime: BigInt(0),
        slashFractionValset: new Uint8Array(),
        slashFractionBatch: new Uint8Array(),
        slashFractionClaim: new Uint8Array(),
        slashFractionConflictingClaim: new Uint8Array(),
        unbondSlashingValsetsWindow: BigInt(0),
        slashFractionBadEthSignature: new Uint8Array(),
        cosmosCoinDenom: "",
        cosmosCoinErc20Contract: "",
        claimSlashingEnabled: false,
        bridgeContractStartHeight: BigInt(0),
        valsetReward: coin_1.Coin.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/injective.peggy.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.peggyId !== "") {
            writer.uint32(10).string(message.peggyId);
        }
        if (message.contractSourceHash !== "") {
            writer.uint32(18).string(message.contractSourceHash);
        }
        if (message.bridgeEthereumAddress !== "") {
            writer.uint32(26).string(message.bridgeEthereumAddress);
        }
        if (message.bridgeChainId !== BigInt(0)) {
            writer.uint32(32).uint64(message.bridgeChainId);
        }
        if (message.signedValsetsWindow !== BigInt(0)) {
            writer.uint32(40).uint64(message.signedValsetsWindow);
        }
        if (message.signedBatchesWindow !== BigInt(0)) {
            writer.uint32(48).uint64(message.signedBatchesWindow);
        }
        if (message.signedClaimsWindow !== BigInt(0)) {
            writer.uint32(56).uint64(message.signedClaimsWindow);
        }
        if (message.targetBatchTimeout !== BigInt(0)) {
            writer.uint32(64).uint64(message.targetBatchTimeout);
        }
        if (message.averageBlockTime !== BigInt(0)) {
            writer.uint32(72).uint64(message.averageBlockTime);
        }
        if (message.averageEthereumBlockTime !== BigInt(0)) {
            writer.uint32(80).uint64(message.averageEthereumBlockTime);
        }
        if (message.slashFractionValset.length !== 0) {
            writer.uint32(90).bytes(message.slashFractionValset);
        }
        if (message.slashFractionBatch.length !== 0) {
            writer.uint32(98).bytes(message.slashFractionBatch);
        }
        if (message.slashFractionClaim.length !== 0) {
            writer.uint32(106).bytes(message.slashFractionClaim);
        }
        if (message.slashFractionConflictingClaim.length !== 0) {
            writer.uint32(114).bytes(message.slashFractionConflictingClaim);
        }
        if (message.unbondSlashingValsetsWindow !== BigInt(0)) {
            writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
        }
        if (message.slashFractionBadEthSignature.length !== 0) {
            writer.uint32(130).bytes(message.slashFractionBadEthSignature);
        }
        if (message.cosmosCoinDenom !== "") {
            writer.uint32(138).string(message.cosmosCoinDenom);
        }
        if (message.cosmosCoinErc20Contract !== "") {
            writer.uint32(146).string(message.cosmosCoinErc20Contract);
        }
        if (message.claimSlashingEnabled === true) {
            writer.uint32(152).bool(message.claimSlashingEnabled);
        }
        if (message.bridgeContractStartHeight !== BigInt(0)) {
            writer.uint32(160).uint64(message.bridgeContractStartHeight);
        }
        if (message.valsetReward !== undefined) {
            coin_1.Coin.encode(message.valsetReward, writer.uint32(170).fork()).ldelim();
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
                    message.peggyId = reader.string();
                    break;
                case 2:
                    message.contractSourceHash = reader.string();
                    break;
                case 3:
                    message.bridgeEthereumAddress = reader.string();
                    break;
                case 4:
                    message.bridgeChainId = reader.uint64();
                    break;
                case 5:
                    message.signedValsetsWindow = reader.uint64();
                    break;
                case 6:
                    message.signedBatchesWindow = reader.uint64();
                    break;
                case 7:
                    message.signedClaimsWindow = reader.uint64();
                    break;
                case 8:
                    message.targetBatchTimeout = reader.uint64();
                    break;
                case 9:
                    message.averageBlockTime = reader.uint64();
                    break;
                case 10:
                    message.averageEthereumBlockTime = reader.uint64();
                    break;
                case 11:
                    message.slashFractionValset = reader.bytes();
                    break;
                case 12:
                    message.slashFractionBatch = reader.bytes();
                    break;
                case 13:
                    message.slashFractionClaim = reader.bytes();
                    break;
                case 14:
                    message.slashFractionConflictingClaim = reader.bytes();
                    break;
                case 15:
                    message.unbondSlashingValsetsWindow = reader.uint64();
                    break;
                case 16:
                    message.slashFractionBadEthSignature = reader.bytes();
                    break;
                case 17:
                    message.cosmosCoinDenom = reader.string();
                    break;
                case 18:
                    message.cosmosCoinErc20Contract = reader.string();
                    break;
                case 19:
                    message.claimSlashingEnabled = reader.bool();
                    break;
                case 20:
                    message.bridgeContractStartHeight = reader.uint64();
                    break;
                case 21:
                    message.valsetReward = coin_1.Coin.decode(reader, reader.uint32());
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
        message.peggyId = object.peggyId ?? "";
        message.contractSourceHash = object.contractSourceHash ?? "";
        message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
        message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
        message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0);
        message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0);
        message.signedClaimsWindow = object.signedClaimsWindow !== undefined && object.signedClaimsWindow !== null ? BigInt(object.signedClaimsWindow.toString()) : BigInt(0);
        message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0);
        message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
        message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0);
        message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
        message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
        message.slashFractionClaim = object.slashFractionClaim ?? new Uint8Array();
        message.slashFractionConflictingClaim = object.slashFractionConflictingClaim ?? new Uint8Array();
        message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0);
        message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
        message.cosmosCoinDenom = object.cosmosCoinDenom ?? "";
        message.cosmosCoinErc20Contract = object.cosmosCoinErc20Contract ?? "";
        message.claimSlashingEnabled = object.claimSlashingEnabled ?? false;
        message.bridgeContractStartHeight = object.bridgeContractStartHeight !== undefined && object.bridgeContractStartHeight !== null ? BigInt(object.bridgeContractStartHeight.toString()) : BigInt(0);
        message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? coin_1.Coin.fromPartial(object.valsetReward) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.peggy_id !== undefined && object.peggy_id !== null) {
            message.peggyId = object.peggy_id;
        }
        if (object.contract_source_hash !== undefined && object.contract_source_hash !== null) {
            message.contractSourceHash = object.contract_source_hash;
        }
        if (object.bridge_ethereum_address !== undefined && object.bridge_ethereum_address !== null) {
            message.bridgeEthereumAddress = object.bridge_ethereum_address;
        }
        if (object.bridge_chain_id !== undefined && object.bridge_chain_id !== null) {
            message.bridgeChainId = BigInt(object.bridge_chain_id);
        }
        if (object.signed_valsets_window !== undefined && object.signed_valsets_window !== null) {
            message.signedValsetsWindow = BigInt(object.signed_valsets_window);
        }
        if (object.signed_batches_window !== undefined && object.signed_batches_window !== null) {
            message.signedBatchesWindow = BigInt(object.signed_batches_window);
        }
        if (object.signed_claims_window !== undefined && object.signed_claims_window !== null) {
            message.signedClaimsWindow = BigInt(object.signed_claims_window);
        }
        if (object.target_batch_timeout !== undefined && object.target_batch_timeout !== null) {
            message.targetBatchTimeout = BigInt(object.target_batch_timeout);
        }
        if (object.average_block_time !== undefined && object.average_block_time !== null) {
            message.averageBlockTime = BigInt(object.average_block_time);
        }
        if (object.average_ethereum_block_time !== undefined && object.average_ethereum_block_time !== null) {
            message.averageEthereumBlockTime = BigInt(object.average_ethereum_block_time);
        }
        if (object.slash_fraction_valset !== undefined && object.slash_fraction_valset !== null) {
            message.slashFractionValset = (0, helpers_1.bytesFromBase64)(object.slash_fraction_valset);
        }
        if (object.slash_fraction_batch !== undefined && object.slash_fraction_batch !== null) {
            message.slashFractionBatch = (0, helpers_1.bytesFromBase64)(object.slash_fraction_batch);
        }
        if (object.slash_fraction_claim !== undefined && object.slash_fraction_claim !== null) {
            message.slashFractionClaim = (0, helpers_1.bytesFromBase64)(object.slash_fraction_claim);
        }
        if (object.slash_fraction_conflicting_claim !== undefined && object.slash_fraction_conflicting_claim !== null) {
            message.slashFractionConflictingClaim = (0, helpers_1.bytesFromBase64)(object.slash_fraction_conflicting_claim);
        }
        if (object.unbond_slashing_valsets_window !== undefined && object.unbond_slashing_valsets_window !== null) {
            message.unbondSlashingValsetsWindow = BigInt(object.unbond_slashing_valsets_window);
        }
        if (object.slash_fraction_bad_eth_signature !== undefined && object.slash_fraction_bad_eth_signature !== null) {
            message.slashFractionBadEthSignature = (0, helpers_1.bytesFromBase64)(object.slash_fraction_bad_eth_signature);
        }
        if (object.cosmos_coin_denom !== undefined && object.cosmos_coin_denom !== null) {
            message.cosmosCoinDenom = object.cosmos_coin_denom;
        }
        if (object.cosmos_coin_erc20_contract !== undefined && object.cosmos_coin_erc20_contract !== null) {
            message.cosmosCoinErc20Contract = object.cosmos_coin_erc20_contract;
        }
        if (object.claim_slashing_enabled !== undefined && object.claim_slashing_enabled !== null) {
            message.claimSlashingEnabled = object.claim_slashing_enabled;
        }
        if (object.bridge_contract_start_height !== undefined && object.bridge_contract_start_height !== null) {
            message.bridgeContractStartHeight = BigInt(object.bridge_contract_start_height);
        }
        if (object.valset_reward !== undefined && object.valset_reward !== null) {
            message.valsetReward = coin_1.Coin.fromAmino(object.valset_reward);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.peggy_id = message.peggyId === "" ? undefined : message.peggyId;
        obj.contract_source_hash = message.contractSourceHash === "" ? undefined : message.contractSourceHash;
        obj.bridge_ethereum_address = message.bridgeEthereumAddress === "" ? undefined : message.bridgeEthereumAddress;
        obj.bridge_chain_id = message.bridgeChainId !== BigInt(0) ? (message.bridgeChainId?.toString)() : undefined;
        obj.signed_valsets_window = message.signedValsetsWindow !== BigInt(0) ? (message.signedValsetsWindow?.toString)() : undefined;
        obj.signed_batches_window = message.signedBatchesWindow !== BigInt(0) ? (message.signedBatchesWindow?.toString)() : undefined;
        obj.signed_claims_window = message.signedClaimsWindow !== BigInt(0) ? (message.signedClaimsWindow?.toString)() : undefined;
        obj.target_batch_timeout = message.targetBatchTimeout !== BigInt(0) ? (message.targetBatchTimeout?.toString)() : undefined;
        obj.average_block_time = message.averageBlockTime !== BigInt(0) ? (message.averageBlockTime?.toString)() : undefined;
        obj.average_ethereum_block_time = message.averageEthereumBlockTime !== BigInt(0) ? (message.averageEthereumBlockTime?.toString)() : undefined;
        obj.slash_fraction_valset = message.slashFractionValset ? (0, helpers_1.base64FromBytes)(message.slashFractionValset) : undefined;
        obj.slash_fraction_batch = message.slashFractionBatch ? (0, helpers_1.base64FromBytes)(message.slashFractionBatch) : undefined;
        obj.slash_fraction_claim = message.slashFractionClaim ? (0, helpers_1.base64FromBytes)(message.slashFractionClaim) : undefined;
        obj.slash_fraction_conflicting_claim = message.slashFractionConflictingClaim ? (0, helpers_1.base64FromBytes)(message.slashFractionConflictingClaim) : undefined;
        obj.unbond_slashing_valsets_window = message.unbondSlashingValsetsWindow !== BigInt(0) ? (message.unbondSlashingValsetsWindow?.toString)() : undefined;
        obj.slash_fraction_bad_eth_signature = message.slashFractionBadEthSignature ? (0, helpers_1.base64FromBytes)(message.slashFractionBadEthSignature) : undefined;
        obj.cosmos_coin_denom = message.cosmosCoinDenom === "" ? undefined : message.cosmosCoinDenom;
        obj.cosmos_coin_erc20_contract = message.cosmosCoinErc20Contract === "" ? undefined : message.cosmosCoinErc20Contract;
        obj.claim_slashing_enabled = message.claimSlashingEnabled === false ? undefined : message.claimSlashingEnabled;
        obj.bridge_contract_start_height = message.bridgeContractStartHeight !== BigInt(0) ? (message.bridgeContractStartHeight?.toString)() : undefined;
        obj.valset_reward = message.valsetReward ? coin_1.Coin.toAmino(message.valsetReward) : undefined;
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
            typeUrl: "/injective.peggy.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: undefined,
        lastObservedNonce: BigInt(0),
        valsets: [],
        valsetConfirms: [],
        batches: [],
        batchConfirms: [],
        attestations: [],
        orchestratorAddresses: [],
        erc20ToDenoms: [],
        unbatchedTransfers: [],
        lastObservedEthereumHeight: BigInt(0),
        lastOutgoingBatchId: BigInt(0),
        lastOutgoingPoolId: BigInt(0),
        lastObservedValset: types_1.Valset.fromPartial({}),
        ethereumBlacklist: []
    };
}
exports.GenesisState = {
    typeUrl: "/injective.peggy.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastObservedNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.lastObservedNonce);
        }
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.valsetConfirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.batchConfirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.attestations) {
            attestation_1.Attestation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.orchestratorAddresses) {
            msgs_1.MsgSetOrchestratorAddresses.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.erc20ToDenoms) {
            types_1.ERC20ToDenom.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.lastObservedEthereumHeight !== BigInt(0)) {
            writer.uint32(88).uint64(message.lastObservedEthereumHeight);
        }
        if (message.lastOutgoingBatchId !== BigInt(0)) {
            writer.uint32(96).uint64(message.lastOutgoingBatchId);
        }
        if (message.lastOutgoingPoolId !== BigInt(0)) {
            writer.uint32(104).uint64(message.lastOutgoingPoolId);
        }
        if (message.lastObservedValset !== undefined) {
            types_1.Valset.encode(message.lastObservedValset, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.ethereumBlacklist) {
            writer.uint32(122).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastObservedNonce = reader.uint64();
                    break;
                case 3:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.valsetConfirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.batchConfirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.attestations.push(attestation_1.Attestation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.orchestratorAddresses.push(msgs_1.MsgSetOrchestratorAddresses.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.erc20ToDenoms.push(types_1.ERC20ToDenom.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.lastObservedEthereumHeight = reader.uint64();
                    break;
                case 12:
                    message.lastOutgoingBatchId = reader.uint64();
                    break;
                case 13:
                    message.lastOutgoingPoolId = reader.uint64();
                    break;
                case 14:
                    message.lastObservedValset = types_1.Valset.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.ethereumBlacklist.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? BigInt(object.lastObservedNonce.toString()) : BigInt(0);
        message.valsets = object.valsets?.map(e => types_1.Valset.fromPartial(e)) || [];
        message.valsetConfirms = object.valsetConfirms?.map(e => msgs_1.MsgValsetConfirm.fromPartial(e)) || [];
        message.batches = object.batches?.map(e => batch_1.OutgoingTxBatch.fromPartial(e)) || [];
        message.batchConfirms = object.batchConfirms?.map(e => msgs_1.MsgConfirmBatch.fromPartial(e)) || [];
        message.attestations = object.attestations?.map(e => attestation_1.Attestation.fromPartial(e)) || [];
        message.orchestratorAddresses = object.orchestratorAddresses?.map(e => msgs_1.MsgSetOrchestratorAddresses.fromPartial(e)) || [];
        message.erc20ToDenoms = object.erc20ToDenoms?.map(e => types_1.ERC20ToDenom.fromPartial(e)) || [];
        message.unbatchedTransfers = object.unbatchedTransfers?.map(e => batch_1.OutgoingTransferTx.fromPartial(e)) || [];
        message.lastObservedEthereumHeight = object.lastObservedEthereumHeight !== undefined && object.lastObservedEthereumHeight !== null ? BigInt(object.lastObservedEthereumHeight.toString()) : BigInt(0);
        message.lastOutgoingBatchId = object.lastOutgoingBatchId !== undefined && object.lastOutgoingBatchId !== null ? BigInt(object.lastOutgoingBatchId.toString()) : BigInt(0);
        message.lastOutgoingPoolId = object.lastOutgoingPoolId !== undefined && object.lastOutgoingPoolId !== null ? BigInt(object.lastOutgoingPoolId.toString()) : BigInt(0);
        message.lastObservedValset = object.lastObservedValset !== undefined && object.lastObservedValset !== null ? types_1.Valset.fromPartial(object.lastObservedValset) : undefined;
        message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromAmino(object.params);
        }
        if (object.last_observed_nonce !== undefined && object.last_observed_nonce !== null) {
            message.lastObservedNonce = BigInt(object.last_observed_nonce);
        }
        message.valsets = object.valsets?.map(e => types_1.Valset.fromAmino(e)) || [];
        message.valsetConfirms = object.valset_confirms?.map(e => msgs_1.MsgValsetConfirm.fromAmino(e)) || [];
        message.batches = object.batches?.map(e => batch_1.OutgoingTxBatch.fromAmino(e)) || [];
        message.batchConfirms = object.batch_confirms?.map(e => msgs_1.MsgConfirmBatch.fromAmino(e)) || [];
        message.attestations = object.attestations?.map(e => attestation_1.Attestation.fromAmino(e)) || [];
        message.orchestratorAddresses = object.orchestrator_addresses?.map(e => msgs_1.MsgSetOrchestratorAddresses.fromAmino(e)) || [];
        message.erc20ToDenoms = object.erc20_to_denoms?.map(e => types_1.ERC20ToDenom.fromAmino(e)) || [];
        message.unbatchedTransfers = object.unbatched_transfers?.map(e => batch_1.OutgoingTransferTx.fromAmino(e)) || [];
        if (object.last_observed_ethereum_height !== undefined && object.last_observed_ethereum_height !== null) {
            message.lastObservedEthereumHeight = BigInt(object.last_observed_ethereum_height);
        }
        if (object.last_outgoing_batch_id !== undefined && object.last_outgoing_batch_id !== null) {
            message.lastOutgoingBatchId = BigInt(object.last_outgoing_batch_id);
        }
        if (object.last_outgoing_pool_id !== undefined && object.last_outgoing_pool_id !== null) {
            message.lastOutgoingPoolId = BigInt(object.last_outgoing_pool_id);
        }
        if (object.last_observed_valset !== undefined && object.last_observed_valset !== null) {
            message.lastObservedValset = types_1.Valset.fromAmino(object.last_observed_valset);
        }
        message.ethereumBlacklist = object.ethereum_blacklist?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        obj.last_observed_nonce = message.lastObservedNonce !== BigInt(0) ? (message.lastObservedNonce?.toString)() : undefined;
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? types_1.Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = message.valsets;
        }
        if (message.valsetConfirms) {
            obj.valset_confirms = message.valsetConfirms.map(e => e ? msgs_1.MsgValsetConfirm.toAmino(e) : undefined);
        }
        else {
            obj.valset_confirms = message.valsetConfirms;
        }
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? batch_1.OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batches = message.batches;
        }
        if (message.batchConfirms) {
            obj.batch_confirms = message.batchConfirms.map(e => e ? msgs_1.MsgConfirmBatch.toAmino(e) : undefined);
        }
        else {
            obj.batch_confirms = message.batchConfirms;
        }
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? attestation_1.Attestation.toAmino(e) : undefined);
        }
        else {
            obj.attestations = message.attestations;
        }
        if (message.orchestratorAddresses) {
            obj.orchestrator_addresses = message.orchestratorAddresses.map(e => e ? msgs_1.MsgSetOrchestratorAddresses.toAmino(e) : undefined);
        }
        else {
            obj.orchestrator_addresses = message.orchestratorAddresses;
        }
        if (message.erc20ToDenoms) {
            obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? types_1.ERC20ToDenom.toAmino(e) : undefined);
        }
        else {
            obj.erc20_to_denoms = message.erc20ToDenoms;
        }
        if (message.unbatchedTransfers) {
            obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? batch_1.OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.unbatched_transfers = message.unbatchedTransfers;
        }
        obj.last_observed_ethereum_height = message.lastObservedEthereumHeight !== BigInt(0) ? (message.lastObservedEthereumHeight?.toString)() : undefined;
        obj.last_outgoing_batch_id = message.lastOutgoingBatchId !== BigInt(0) ? (message.lastOutgoingBatchId?.toString)() : undefined;
        obj.last_outgoing_pool_id = message.lastOutgoingPoolId !== BigInt(0) ? (message.lastOutgoingPoolId?.toString)() : undefined;
        obj.last_observed_valset = message.lastObservedValset ? types_1.Valset.toAmino(message.lastObservedValset) : undefined;
        if (message.ethereumBlacklist) {
            obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
        }
        else {
            obj.ethereum_blacklist = message.ethereumBlacklist;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
