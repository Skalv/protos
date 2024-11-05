import { Pool, PoolAmino, PoolSDKType, PoolMetadata, PoolMetadataAmino, PoolMetadataSDKType, PoolBatch, PoolBatchAmino, PoolBatchSDKType, DepositMsgState, DepositMsgStateAmino, DepositMsgStateSDKType, WithdrawMsgState, WithdrawMsgStateAmino, WithdrawMsgStateSDKType, SwapMsgState, SwapMsgStateAmino, SwapMsgStateSDKType, Params, ParamsAmino, ParamsSDKType } from "./liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * records the state of each pool after genesis export or import, used to check
 * variables
 */
export interface PoolRecord {
    pool: Pool;
    poolMetadata: PoolMetadata;
    poolBatch: PoolBatch;
    depositMsgStates: DepositMsgState[];
    withdrawMsgStates: WithdrawMsgState[];
    swapMsgStates: SwapMsgState[];
}
export interface PoolRecordProtoMsg {
    typeUrl: "/liquidity.v1beta1.PoolRecord";
    value: Uint8Array;
}
/**
 * records the state of each pool after genesis export or import, used to check
 * variables
 */
export interface PoolRecordAmino {
    pool?: PoolAmino;
    pool_metadata?: PoolMetadataAmino;
    pool_batch?: PoolBatchAmino;
    deposit_msg_states?: DepositMsgStateAmino[];
    withdraw_msg_states?: WithdrawMsgStateAmino[];
    swap_msg_states?: SwapMsgStateAmino[];
}
export interface PoolRecordAminoMsg {
    type: "/liquidity.v1beta1.PoolRecord";
    value: PoolRecordAmino;
}
/**
 * records the state of each pool after genesis export or import, used to check
 * variables
 */
export interface PoolRecordSDKType {
    pool: PoolSDKType;
    pool_metadata: PoolMetadataSDKType;
    pool_batch: PoolBatchSDKType;
    deposit_msg_states: DepositMsgStateSDKType[];
    withdraw_msg_states: WithdrawMsgStateSDKType[];
    swap_msg_states: SwapMsgStateSDKType[];
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters for the liquidity module. */
    params: Params;
    poolRecords: PoolRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/liquidity.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters for the liquidity module. */
    params?: ParamsAmino;
    pool_records?: PoolRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/liquidity.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    pool_records: PoolRecordSDKType[];
}
export declare const PoolRecord: {
    typeUrl: string;
    encode(message: PoolRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolRecord;
    fromPartial(object: Partial<PoolRecord>): PoolRecord;
    fromAmino(object: PoolRecordAmino): PoolRecord;
    toAmino(message: PoolRecord): PoolRecordAmino;
    fromAminoMsg(object: PoolRecordAminoMsg): PoolRecord;
    fromProtoMsg(message: PoolRecordProtoMsg): PoolRecord;
    toProto(message: PoolRecord): Uint8Array;
    toProtoMsg(message: PoolRecord): PoolRecordProtoMsg;
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
