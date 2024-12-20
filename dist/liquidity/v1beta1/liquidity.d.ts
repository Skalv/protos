import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { MsgDepositWithinBatch, MsgDepositWithinBatchAmino, MsgDepositWithinBatchSDKType, MsgWithdrawWithinBatch, MsgWithdrawWithinBatchAmino, MsgWithdrawWithinBatchSDKType, MsgSwapWithinBatch, MsgSwapWithinBatchAmino, MsgSwapWithinBatchSDKType } from "./tx";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressProtoMsg {
    typeUrl: "/liquidity.v1beta1.WeightedAddress";
    value: Uint8Array;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddressAmino {
    address?: string;
    weight?: string;
}
export interface WeightedAddressAminoMsg {
    type: "/liquidity.v1beta1.WeightedAddress";
    value: WeightedAddressAmino;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 */
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
/**
 * Structure for the pool type to distinguish the characteristics of the reserve
 * pools.
 */
export interface PoolType {
    /**
     * This is the id of the pool_type that is used as pool_type_id for pool
     * creation. In this version, only pool-type-id 1 is supported.
     * {"id":1,"name":"ConstantProductLiquidityPool","min_reserve_coin_num":2,"max_reserve_coin_num":2,"description":""}
     */
    id: number;
    /** name of the pool type. */
    name: string;
    /**
     * minimum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
     * are supported.
     */
    minReserveCoinNum: number;
    /**
     * maximum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
     * are supported.
     */
    maxReserveCoinNum: number;
    /** description of the pool type. */
    description: string;
}
export interface PoolTypeProtoMsg {
    typeUrl: "/liquidity.v1beta1.PoolType";
    value: Uint8Array;
}
/**
 * Structure for the pool type to distinguish the characteristics of the reserve
 * pools.
 */
export interface PoolTypeAmino {
    /**
     * This is the id of the pool_type that is used as pool_type_id for pool
     * creation. In this version, only pool-type-id 1 is supported.
     * {"id":1,"name":"ConstantProductLiquidityPool","min_reserve_coin_num":2,"max_reserve_coin_num":2,"description":""}
     */
    id?: number;
    /** name of the pool type. */
    name?: string;
    /**
     * minimum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
     * are supported.
     */
    min_reserve_coin_num?: number;
    /**
     * maximum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
     * are supported.
     */
    max_reserve_coin_num?: number;
    /** description of the pool type. */
    description?: string;
}
export interface PoolTypeAminoMsg {
    type: "/liquidity.v1beta1.PoolType";
    value: PoolTypeAmino;
}
/**
 * Structure for the pool type to distinguish the characteristics of the reserve
 * pools.
 */
export interface PoolTypeSDKType {
    id: number;
    name: string;
    min_reserve_coin_num: number;
    max_reserve_coin_num: number;
    description: string;
}
/** Params defines the parameters for the liquidity module. */
export interface Params {
    /** list of available pool types */
    poolTypes: PoolType[];
    /**
     * Minimum number of coins to be deposited to the liquidity pool on pool
     * creation.
     */
    minInitDepositAmount: string;
    /** Initial mint amount of pool coins upon pool creation. */
    initPoolCoinMintAmount: string;
    /**
     * Limit the size of each liquidity pool to minimize risk. In development, set
     * to 0 for no limit. In production, set a limit.
     */
    maxReserveCoinAmount: string;
    /** Fee paid to create a Liquidity Pool. Set a fee to prevent spamming. */
    poolCreationFee: Coin[];
    /** Swap fee rate for every executed swap. */
    swapFeeRate: string;
    /** Reserve coin withdrawal with less proportion by withdrawFeeRate. */
    withdrawFeeRate: string;
    /** Maximum ratio of reserve coins that can be ordered at a swap order. */
    maxOrderAmountRatio: string;
    /** The smallest unit batch height for every liquidity pool. */
    unitBatchHeight: number;
    /**
     * Circuit breaker enables or disables transaction messages in liquidity
     * module.
     */
    circuitBreakerEnabled: boolean;
    buildersAddresses: WeightedAddress[];
    buildersCommission: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/liquidity.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the liquidity module. */
export interface ParamsAmino {
    /** list of available pool types */
    pool_types?: PoolTypeAmino[];
    /**
     * Minimum number of coins to be deposited to the liquidity pool on pool
     * creation.
     */
    min_init_deposit_amount?: string;
    /** Initial mint amount of pool coins upon pool creation. */
    init_pool_coin_mint_amount?: string;
    /**
     * Limit the size of each liquidity pool to minimize risk. In development, set
     * to 0 for no limit. In production, set a limit.
     */
    max_reserve_coin_amount?: string;
    /** Fee paid to create a Liquidity Pool. Set a fee to prevent spamming. */
    pool_creation_fee?: CoinAmino[];
    /** Swap fee rate for every executed swap. */
    swap_fee_rate?: string;
    /** Reserve coin withdrawal with less proportion by withdrawFeeRate. */
    withdraw_fee_rate?: string;
    /** Maximum ratio of reserve coins that can be ordered at a swap order. */
    max_order_amount_ratio?: string;
    /** The smallest unit batch height for every liquidity pool. */
    unit_batch_height?: number;
    /**
     * Circuit breaker enables or disables transaction messages in liquidity
     * module.
     */
    circuit_breaker_enabled?: boolean;
    builders_addresses?: WeightedAddressAmino[];
    builders_commission?: string;
}
export interface ParamsAminoMsg {
    type: "/liquidity.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the liquidity module. */
export interface ParamsSDKType {
    pool_types: PoolTypeSDKType[];
    min_init_deposit_amount: string;
    init_pool_coin_mint_amount: string;
    max_reserve_coin_amount: string;
    pool_creation_fee: CoinSDKType[];
    swap_fee_rate: string;
    withdraw_fee_rate: string;
    max_order_amount_ratio: string;
    unit_batch_height: number;
    circuit_breaker_enabled: boolean;
    builders_addresses: WeightedAddressSDKType[];
    builders_commission: string;
}
/** Pool defines the liquidity pool that contains pool information. */
export interface Pool {
    /** id of the pool */
    id: bigint;
    /** id of the pool_type */
    typeId: number;
    /** denoms of reserve coin pair of the pool */
    reserveCoinDenoms: string[];
    /** reserve account address of the pool */
    reserveAccountAddress: string;
    /** denom of pool coin of the pool */
    poolCoinDenom: string;
}
export interface PoolProtoMsg {
    typeUrl: "/liquidity.v1beta1.Pool";
    value: Uint8Array;
}
/** Pool defines the liquidity pool that contains pool information. */
export interface PoolAmino {
    /** id of the pool */
    id: string;
    /** id of the pool_type */
    type_id?: number;
    /** denoms of reserve coin pair of the pool */
    reserve_coin_denoms?: string[];
    /** reserve account address of the pool */
    reserve_account_address?: string;
    /** denom of pool coin of the pool */
    pool_coin_denom?: string;
}
export interface PoolAminoMsg {
    type: "/liquidity.v1beta1.Pool";
    value: PoolAmino;
}
/** Pool defines the liquidity pool that contains pool information. */
export interface PoolSDKType {
    id: bigint;
    type_id: number;
    reserve_coin_denoms: string[];
    reserve_account_address: string;
    pool_coin_denom: string;
}
/**
 * Metadata for the state of each pool for invariant checking after genesis
 * export or import.
 */
export interface PoolMetadata {
    /** id of the pool */
    poolId: bigint;
    /** pool coin issued at the pool */
    poolCoinTotalSupply: Coin;
    /** reserve coins deposited in the pool */
    reserveCoins: Coin[];
}
export interface PoolMetadataProtoMsg {
    typeUrl: "/liquidity.v1beta1.PoolMetadata";
    value: Uint8Array;
}
/**
 * Metadata for the state of each pool for invariant checking after genesis
 * export or import.
 */
export interface PoolMetadataAmino {
    /** id of the pool */
    pool_id: string;
    /** pool coin issued at the pool */
    pool_coin_total_supply?: CoinAmino;
    /** reserve coins deposited in the pool */
    reserve_coins?: CoinAmino[];
}
export interface PoolMetadataAminoMsg {
    type: "/liquidity.v1beta1.PoolMetadata";
    value: PoolMetadataAmino;
}
/**
 * Metadata for the state of each pool for invariant checking after genesis
 * export or import.
 */
export interface PoolMetadataSDKType {
    pool_id: bigint;
    pool_coin_total_supply: CoinSDKType;
    reserve_coins: CoinSDKType[];
}
/**
 * PoolBatch defines the batch or batches of a given liquidity pool that
 * contains indexes of deposit, withdraw, and swap messages. Index param
 * increments by 1 if the pool id is same.
 */
export interface PoolBatch {
    /** id of the pool */
    poolId: bigint;
    /** index of this batch */
    index: bigint;
    /** height where this batch is started */
    beginHeight: bigint;
    /** last index of DepositMsgStates */
    depositMsgIndex: bigint;
    /** last index of WithdrawMsgStates */
    withdrawMsgIndex: bigint;
    /** last index of SwapMsgStates */
    swapMsgIndex: bigint;
    /** true if executed, false if not executed */
    executed: boolean;
}
export interface PoolBatchProtoMsg {
    typeUrl: "/liquidity.v1beta1.PoolBatch";
    value: Uint8Array;
}
/**
 * PoolBatch defines the batch or batches of a given liquidity pool that
 * contains indexes of deposit, withdraw, and swap messages. Index param
 * increments by 1 if the pool id is same.
 */
export interface PoolBatchAmino {
    /** id of the pool */
    pool_id: string;
    /** index of this batch */
    index?: string;
    /** height where this batch is started */
    begin_height?: string;
    /** last index of DepositMsgStates */
    deposit_msg_index?: string;
    /** last index of WithdrawMsgStates */
    withdraw_msg_index?: string;
    /** last index of SwapMsgStates */
    swap_msg_index?: string;
    /** true if executed, false if not executed */
    executed?: boolean;
}
export interface PoolBatchAminoMsg {
    type: "/liquidity.v1beta1.PoolBatch";
    value: PoolBatchAmino;
}
/**
 * PoolBatch defines the batch or batches of a given liquidity pool that
 * contains indexes of deposit, withdraw, and swap messages. Index param
 * increments by 1 if the pool id is same.
 */
export interface PoolBatchSDKType {
    pool_id: bigint;
    index: bigint;
    begin_height: bigint;
    deposit_msg_index: bigint;
    withdraw_msg_index: bigint;
    swap_msg_index: bigint;
    executed: boolean;
}
/**
 * DepositMsgState defines the state of deposit message that contains state
 * information as it is processed in the next batch or batches.
 */
export interface DepositMsgState {
    /** height where this message is appended to the batch */
    msgHeight: bigint;
    /** index of this deposit message in this liquidity pool */
    msgIndex: bigint;
    /** true if executed on this batch, false if not executed */
    executed: boolean;
    /** true if executed successfully on this batch, false if failed */
    succeeded: boolean;
    /** true if ready to be deleted on kvstore, false if not ready to be deleted */
    toBeDeleted: boolean;
    /** MsgDepositWithinBatch */
    msg?: MsgDepositWithinBatch;
}
export interface DepositMsgStateProtoMsg {
    typeUrl: "/liquidity.v1beta1.DepositMsgState";
    value: Uint8Array;
}
/**
 * DepositMsgState defines the state of deposit message that contains state
 * information as it is processed in the next batch or batches.
 */
export interface DepositMsgStateAmino {
    /** height where this message is appended to the batch */
    msg_height?: string;
    /** index of this deposit message in this liquidity pool */
    msg_index?: string;
    /** true if executed on this batch, false if not executed */
    executed?: boolean;
    /** true if executed successfully on this batch, false if failed */
    succeeded?: boolean;
    /** true if ready to be deleted on kvstore, false if not ready to be deleted */
    to_be_deleted?: boolean;
    /** MsgDepositWithinBatch */
    msg?: MsgDepositWithinBatchAmino;
}
export interface DepositMsgStateAminoMsg {
    type: "/liquidity.v1beta1.DepositMsgState";
    value: DepositMsgStateAmino;
}
/**
 * DepositMsgState defines the state of deposit message that contains state
 * information as it is processed in the next batch or batches.
 */
export interface DepositMsgStateSDKType {
    msg_height: bigint;
    msg_index: bigint;
    executed: boolean;
    succeeded: boolean;
    to_be_deleted: boolean;
    msg?: MsgDepositWithinBatchSDKType;
}
/**
 * WithdrawMsgState defines the state of the withdraw message that contains
 * state information as the message is processed in the next batch or batches.
 */
export interface WithdrawMsgState {
    /** height where this message is appended to the batch */
    msgHeight: bigint;
    /** index of this withdraw message in this liquidity pool */
    msgIndex: bigint;
    /** true if executed on this batch, false if not executed */
    executed: boolean;
    /** true if executed successfully on this batch, false if failed */
    succeeded: boolean;
    /** true if ready to be deleted on kvstore, false if not ready to be deleted */
    toBeDeleted: boolean;
    /** MsgWithdrawWithinBatch */
    msg?: MsgWithdrawWithinBatch;
}
export interface WithdrawMsgStateProtoMsg {
    typeUrl: "/liquidity.v1beta1.WithdrawMsgState";
    value: Uint8Array;
}
/**
 * WithdrawMsgState defines the state of the withdraw message that contains
 * state information as the message is processed in the next batch or batches.
 */
export interface WithdrawMsgStateAmino {
    /** height where this message is appended to the batch */
    msg_height?: string;
    /** index of this withdraw message in this liquidity pool */
    msg_index?: string;
    /** true if executed on this batch, false if not executed */
    executed?: boolean;
    /** true if executed successfully on this batch, false if failed */
    succeeded?: boolean;
    /** true if ready to be deleted on kvstore, false if not ready to be deleted */
    to_be_deleted?: boolean;
    /** MsgWithdrawWithinBatch */
    msg?: MsgWithdrawWithinBatchAmino;
}
export interface WithdrawMsgStateAminoMsg {
    type: "/liquidity.v1beta1.WithdrawMsgState";
    value: WithdrawMsgStateAmino;
}
/**
 * WithdrawMsgState defines the state of the withdraw message that contains
 * state information as the message is processed in the next batch or batches.
 */
export interface WithdrawMsgStateSDKType {
    msg_height: bigint;
    msg_index: bigint;
    executed: boolean;
    succeeded: boolean;
    to_be_deleted: boolean;
    msg?: MsgWithdrawWithinBatchSDKType;
}
/**
 * SwapMsgState defines the state of the swap message that contains state
 * information as the message is processed in the next batch or batches.
 */
export interface SwapMsgState {
    /** height where this message is appended to the batch */
    msgHeight: bigint;
    /** index of this swap message in this liquidity pool */
    msgIndex: bigint;
    /** true if executed on this batch, false if not executed */
    executed: boolean;
    /** true if executed successfully on this batch, false if failed */
    succeeded: boolean;
    /** true if ready to be deleted on kvstore, false if not ready to be deleted */
    toBeDeleted: boolean;
    /**
     * swap orders are cancelled when current height is equal to or higher than
     * ExpiryHeight
     */
    orderExpiryHeight: bigint;
    /** offer coin exchanged until now */
    exchangedOfferCoin: Coin;
    /** offer coin currently remaining to be exchanged */
    remainingOfferCoin: Coin;
    /** reserve fee for pays fee in half offer coin */
    reservedOfferCoinFee: Coin;
    /** MsgSwapWithinBatch */
    msg?: MsgSwapWithinBatch;
}
export interface SwapMsgStateProtoMsg {
    typeUrl: "/liquidity.v1beta1.SwapMsgState";
    value: Uint8Array;
}
/**
 * SwapMsgState defines the state of the swap message that contains state
 * information as the message is processed in the next batch or batches.
 */
export interface SwapMsgStateAmino {
    /** height where this message is appended to the batch */
    msg_height?: string;
    /** index of this swap message in this liquidity pool */
    msg_index?: string;
    /** true if executed on this batch, false if not executed */
    executed?: boolean;
    /** true if executed successfully on this batch, false if failed */
    succeeded?: boolean;
    /** true if ready to be deleted on kvstore, false if not ready to be deleted */
    to_be_deleted?: boolean;
    /**
     * swap orders are cancelled when current height is equal to or higher than
     * ExpiryHeight
     */
    order_expiry_height?: string;
    /** offer coin exchanged until now */
    exchanged_offer_coin?: CoinAmino;
    /** offer coin currently remaining to be exchanged */
    remaining_offer_coin?: CoinAmino;
    /** reserve fee for pays fee in half offer coin */
    reserved_offer_coin_fee?: CoinAmino;
    /** MsgSwapWithinBatch */
    msg?: MsgSwapWithinBatchAmino;
}
export interface SwapMsgStateAminoMsg {
    type: "/liquidity.v1beta1.SwapMsgState";
    value: SwapMsgStateAmino;
}
/**
 * SwapMsgState defines the state of the swap message that contains state
 * information as the message is processed in the next batch or batches.
 */
export interface SwapMsgStateSDKType {
    msg_height: bigint;
    msg_index: bigint;
    executed: boolean;
    succeeded: boolean;
    to_be_deleted: boolean;
    order_expiry_height: bigint;
    exchanged_offer_coin: CoinSDKType;
    remaining_offer_coin: CoinSDKType;
    reserved_offer_coin_fee: CoinSDKType;
    msg?: MsgSwapWithinBatchSDKType;
}
export declare const WeightedAddress: {
    typeUrl: string;
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
    fromAmino(object: WeightedAddressAmino): WeightedAddress;
    toAmino(message: WeightedAddress): WeightedAddressAmino;
    fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress;
    fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress;
    toProto(message: WeightedAddress): Uint8Array;
    toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg;
};
export declare const PoolType: {
    typeUrl: string;
    encode(message: PoolType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolType;
    fromPartial(object: Partial<PoolType>): PoolType;
    fromAmino(object: PoolTypeAmino): PoolType;
    toAmino(message: PoolType): PoolTypeAmino;
    fromAminoMsg(object: PoolTypeAminoMsg): PoolType;
    fromProtoMsg(message: PoolTypeProtoMsg): PoolType;
    toProto(message: PoolType): Uint8Array;
    toProtoMsg(message: PoolType): PoolTypeProtoMsg;
};
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
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
export declare const PoolMetadata: {
    typeUrl: string;
    encode(message: PoolMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolMetadata;
    fromPartial(object: Partial<PoolMetadata>): PoolMetadata;
    fromAmino(object: PoolMetadataAmino): PoolMetadata;
    toAmino(message: PoolMetadata): PoolMetadataAmino;
    fromAminoMsg(object: PoolMetadataAminoMsg): PoolMetadata;
    fromProtoMsg(message: PoolMetadataProtoMsg): PoolMetadata;
    toProto(message: PoolMetadata): Uint8Array;
    toProtoMsg(message: PoolMetadata): PoolMetadataProtoMsg;
};
export declare const PoolBatch: {
    typeUrl: string;
    encode(message: PoolBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolBatch;
    fromPartial(object: Partial<PoolBatch>): PoolBatch;
    fromAmino(object: PoolBatchAmino): PoolBatch;
    toAmino(message: PoolBatch): PoolBatchAmino;
    fromAminoMsg(object: PoolBatchAminoMsg): PoolBatch;
    fromProtoMsg(message: PoolBatchProtoMsg): PoolBatch;
    toProto(message: PoolBatch): Uint8Array;
    toProtoMsg(message: PoolBatch): PoolBatchProtoMsg;
};
export declare const DepositMsgState: {
    typeUrl: string;
    encode(message: DepositMsgState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DepositMsgState;
    fromPartial(object: Partial<DepositMsgState>): DepositMsgState;
    fromAmino(object: DepositMsgStateAmino): DepositMsgState;
    toAmino(message: DepositMsgState): DepositMsgStateAmino;
    fromAminoMsg(object: DepositMsgStateAminoMsg): DepositMsgState;
    fromProtoMsg(message: DepositMsgStateProtoMsg): DepositMsgState;
    toProto(message: DepositMsgState): Uint8Array;
    toProtoMsg(message: DepositMsgState): DepositMsgStateProtoMsg;
};
export declare const WithdrawMsgState: {
    typeUrl: string;
    encode(message: WithdrawMsgState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WithdrawMsgState;
    fromPartial(object: Partial<WithdrawMsgState>): WithdrawMsgState;
    fromAmino(object: WithdrawMsgStateAmino): WithdrawMsgState;
    toAmino(message: WithdrawMsgState): WithdrawMsgStateAmino;
    fromAminoMsg(object: WithdrawMsgStateAminoMsg): WithdrawMsgState;
    fromProtoMsg(message: WithdrawMsgStateProtoMsg): WithdrawMsgState;
    toProto(message: WithdrawMsgState): Uint8Array;
    toProtoMsg(message: WithdrawMsgState): WithdrawMsgStateProtoMsg;
};
export declare const SwapMsgState: {
    typeUrl: string;
    encode(message: SwapMsgState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapMsgState;
    fromPartial(object: Partial<SwapMsgState>): SwapMsgState;
    fromAmino(object: SwapMsgStateAmino): SwapMsgState;
    toAmino(message: SwapMsgState): SwapMsgStateAmino;
    fromAminoMsg(object: SwapMsgStateAminoMsg): SwapMsgState;
    fromProtoMsg(message: SwapMsgStateProtoMsg): SwapMsgState;
    toProto(message: SwapMsgState): Uint8Array;
    toProtoMsg(message: SwapMsgState): SwapMsgStateProtoMsg;
};
