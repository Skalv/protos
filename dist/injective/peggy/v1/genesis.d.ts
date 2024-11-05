import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Valset, ValsetAmino, ValsetSDKType, ERC20ToDenom, ERC20ToDenomAmino, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesAmino, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
    peggyId: string;
    contractSourceHash: string;
    bridgeEthereumAddress: string;
    bridgeChainId: bigint;
    signedValsetsWindow: bigint;
    signedBatchesWindow: bigint;
    signedClaimsWindow: bigint;
    targetBatchTimeout: bigint;
    averageBlockTime: bigint;
    averageEthereumBlockTime: bigint;
    slashFractionValset: Uint8Array;
    slashFractionBatch: Uint8Array;
    slashFractionClaim: Uint8Array;
    slashFractionConflictingClaim: Uint8Array;
    unbondSlashingValsetsWindow: bigint;
    slashFractionBadEthSignature: Uint8Array;
    cosmosCoinDenom: string;
    cosmosCoinErc20Contract: string;
    claimSlashingEnabled: boolean;
    bridgeContractStartHeight: bigint;
    valsetReward: Coin;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.peggy.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    peggy_id?: string;
    contract_source_hash?: string;
    bridge_ethereum_address?: string;
    bridge_chain_id?: string;
    signed_valsets_window?: string;
    signed_batches_window?: string;
    signed_claims_window?: string;
    target_batch_timeout?: string;
    average_block_time?: string;
    average_ethereum_block_time?: string;
    slash_fraction_valset?: string;
    slash_fraction_batch?: string;
    slash_fraction_claim?: string;
    slash_fraction_conflicting_claim?: string;
    unbond_slashing_valsets_window?: string;
    slash_fraction_bad_eth_signature?: string;
    cosmos_coin_denom?: string;
    cosmos_coin_erc20_contract?: string;
    claim_slashing_enabled?: boolean;
    bridge_contract_start_height?: string;
    valset_reward?: CoinAmino;
}
export interface ParamsAminoMsg {
    type: "/injective.peggy.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    peggy_id: string;
    contract_source_hash: string;
    bridge_ethereum_address: string;
    bridge_chain_id: bigint;
    signed_valsets_window: bigint;
    signed_batches_window: bigint;
    signed_claims_window: bigint;
    target_batch_timeout: bigint;
    average_block_time: bigint;
    average_ethereum_block_time: bigint;
    slash_fraction_valset: Uint8Array;
    slash_fraction_batch: Uint8Array;
    slash_fraction_claim: Uint8Array;
    slash_fraction_conflicting_claim: Uint8Array;
    unbond_slashing_valsets_window: bigint;
    slash_fraction_bad_eth_signature: Uint8Array;
    cosmos_coin_denom: string;
    cosmos_coin_erc20_contract: string;
    claim_slashing_enabled: boolean;
    bridge_contract_start_height: bigint;
    valset_reward: CoinSDKType;
}
/** GenesisState struct */
export interface GenesisState {
    params?: Params;
    lastObservedNonce: bigint;
    valsets: Valset[];
    valsetConfirms: MsgValsetConfirm[];
    batches: OutgoingTxBatch[];
    batchConfirms: MsgConfirmBatch[];
    attestations: Attestation[];
    orchestratorAddresses: MsgSetOrchestratorAddresses[];
    erc20ToDenoms: ERC20ToDenom[];
    unbatchedTransfers: OutgoingTransferTx[];
    lastObservedEthereumHeight: bigint;
    lastOutgoingBatchId: bigint;
    lastOutgoingPoolId: bigint;
    lastObservedValset: Valset;
    ethereumBlacklist: string[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.peggy.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState struct */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    last_observed_nonce?: string;
    valsets?: ValsetAmino[];
    valset_confirms?: MsgValsetConfirmAmino[];
    batches?: OutgoingTxBatchAmino[];
    batch_confirms?: MsgConfirmBatchAmino[];
    attestations?: AttestationAmino[];
    orchestrator_addresses?: MsgSetOrchestratorAddressesAmino[];
    erc20_to_denoms?: ERC20ToDenomAmino[];
    unbatched_transfers?: OutgoingTransferTxAmino[];
    last_observed_ethereum_height?: string;
    last_outgoing_batch_id?: string;
    last_outgoing_pool_id?: string;
    last_observed_valset?: ValsetAmino;
    ethereum_blacklist?: string[];
}
export interface GenesisStateAminoMsg {
    type: "/injective.peggy.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState struct */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    last_observed_nonce: bigint;
    valsets: ValsetSDKType[];
    valset_confirms: MsgValsetConfirmSDKType[];
    batches: OutgoingTxBatchSDKType[];
    batch_confirms: MsgConfirmBatchSDKType[];
    attestations: AttestationSDKType[];
    orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
    erc20_to_denoms: ERC20ToDenomSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
    last_observed_ethereum_height: bigint;
    last_outgoing_batch_id: bigint;
    last_outgoing_pool_id: bigint;
    last_observed_valset: ValsetSDKType;
    ethereum_blacklist: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
