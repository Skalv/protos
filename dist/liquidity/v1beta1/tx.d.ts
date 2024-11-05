import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePool {
    poolCreatorAddress: string;
    /**
     * id of the target pool type, must match the value in the pool. Only
     * pool-type-id 1 is supported.
     */
    poolTypeId: number;
    /** reserve coin pair of the pool to deposit. */
    depositCoins: Coin[];
}
export interface MsgCreatePoolProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgCreatePool";
    value: Uint8Array;
}
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePoolAmino {
    pool_creator_address?: string;
    /**
     * id of the target pool type, must match the value in the pool. Only
     * pool-type-id 1 is supported.
     */
    pool_type_id?: number;
    /** reserve coin pair of the pool to deposit. */
    deposit_coins?: CoinAmino[];
}
export interface MsgCreatePoolAminoMsg {
    type: "/liquidity.v1beta1.MsgCreatePool";
    value: MsgCreatePoolAmino;
}
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePoolSDKType {
    pool_creator_address: string;
    pool_type_id: number;
    deposit_coins: CoinSDKType[];
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {
}
export interface MsgCreatePoolResponseProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse";
    value: Uint8Array;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseAmino {
}
export interface MsgCreatePoolResponseAminoMsg {
    type: "/liquidity.v1beta1.MsgCreatePoolResponse";
    value: MsgCreatePoolResponseAmino;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {
}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatch {
    depositorAddress: string;
    /** id of the target pool */
    poolId: bigint;
    /** reserve coin pair of the pool to deposit */
    depositCoins: Coin[];
}
export interface MsgDepositWithinBatchProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch";
    value: Uint8Array;
}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatchAmino {
    depositor_address?: string;
    /** id of the target pool */
    pool_id: string;
    /** reserve coin pair of the pool to deposit */
    deposit_coins?: CoinAmino[];
}
export interface MsgDepositWithinBatchAminoMsg {
    type: "/liquidity.v1beta1.MsgDepositWithinBatch";
    value: MsgDepositWithinBatchAmino;
}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatchSDKType {
    depositor_address: string;
    pool_id: bigint;
    deposit_coins: CoinSDKType[];
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponse {
}
export interface MsgDepositWithinBatchResponseProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse";
    value: Uint8Array;
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponseAmino {
}
export interface MsgDepositWithinBatchResponseAminoMsg {
    type: "/liquidity.v1beta1.MsgDepositWithinBatchResponse";
    value: MsgDepositWithinBatchResponseAmino;
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponseSDKType {
}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatch {
    withdrawerAddress: string;
    /** id of the target pool */
    poolId: bigint;
    poolCoin: Coin;
}
export interface MsgWithdrawWithinBatchProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch";
    value: Uint8Array;
}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatchAmino {
    withdrawer_address?: string;
    /** id of the target pool */
    pool_id: string;
    pool_coin?: CoinAmino;
}
export interface MsgWithdrawWithinBatchAminoMsg {
    type: "/liquidity.v1beta1.MsgWithdrawWithinBatch";
    value: MsgWithdrawWithinBatchAmino;
}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatchSDKType {
    withdrawer_address: string;
    pool_id: bigint;
    pool_coin: CoinSDKType;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponse {
}
export interface MsgWithdrawWithinBatchResponseProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponseAmino {
}
export interface MsgWithdrawWithinBatchResponseAminoMsg {
    type: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse";
    value: MsgWithdrawWithinBatchResponseAmino;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponseSDKType {
}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap
 * offer request to the batch of the liquidity pool. Submit swap offer to the
 * liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current
 * `params.swap_fee_rate` and ceil for reservation to pay fees. This request is
 * stacked in the batch of the liquidity pool, is not processed immediately, and
 * is processed in the `endblock` at the same time as other requests. You must
 * request the same fields as the pool. Only the default `swap_type_id` 1 is
 * supported.
 *
 * See: https://github.com/tendermint/liquidity/tree/develop/doc
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatch {
    /** address of swap requester */
    swapRequesterAddress: string;
    /**
     * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is
     * supported.
     */
    poolId: bigint;
    /** id of swap type. Must match the value in the pool. */
    swapTypeId: number;
    /** offer sdk.coin for the swap request, must match the denom in the pool. */
    offerCoin: Coin;
    /**
     * denom of demand coin to be exchanged on the swap request, must match the
     * denom in the pool.
     */
    demandCoinDenom: string;
    /**
     * half of offer coin amount * params.swap_fee_rate and ceil for reservation
     * to pay fees.
     */
    offerCoinFee: Coin;
    /**
     * limit order price for the order, the price is the exchange ratio of X/Y
     * where X is the amount of the first coin and Y is the amount
     * of the second coin when their denoms are sorted alphabetically.
     */
    orderPrice: string;
}
export interface MsgSwapWithinBatchProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch";
    value: Uint8Array;
}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap
 * offer request to the batch of the liquidity pool. Submit swap offer to the
 * liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current
 * `params.swap_fee_rate` and ceil for reservation to pay fees. This request is
 * stacked in the batch of the liquidity pool, is not processed immediately, and
 * is processed in the `endblock` at the same time as other requests. You must
 * request the same fields as the pool. Only the default `swap_type_id` 1 is
 * supported.
 *
 * See: https://github.com/tendermint/liquidity/tree/develop/doc
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatchAmino {
    /** address of swap requester */
    swap_requester_address?: string;
    /**
     * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is
     * supported.
     */
    pool_id: string;
    /** id of swap type. Must match the value in the pool. */
    swap_type_id?: number;
    /** offer sdk.coin for the swap request, must match the denom in the pool. */
    offer_coin?: CoinAmino;
    /**
     * denom of demand coin to be exchanged on the swap request, must match the
     * denom in the pool.
     */
    demand_coin_denom?: string;
    /**
     * half of offer coin amount * params.swap_fee_rate and ceil for reservation
     * to pay fees.
     */
    offer_coin_fee?: CoinAmino;
    /**
     * limit order price for the order, the price is the exchange ratio of X/Y
     * where X is the amount of the first coin and Y is the amount
     * of the second coin when their denoms are sorted alphabetically.
     */
    order_price?: string;
}
export interface MsgSwapWithinBatchAminoMsg {
    type: "/liquidity.v1beta1.MsgSwapWithinBatch";
    value: MsgSwapWithinBatchAmino;
}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap
 * offer request to the batch of the liquidity pool. Submit swap offer to the
 * liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current
 * `params.swap_fee_rate` and ceil for reservation to pay fees. This request is
 * stacked in the batch of the liquidity pool, is not processed immediately, and
 * is processed in the `endblock` at the same time as other requests. You must
 * request the same fields as the pool. Only the default `swap_type_id` 1 is
 * supported.
 *
 * See: https://github.com/tendermint/liquidity/tree/develop/doc
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatchSDKType {
    swap_requester_address: string;
    pool_id: bigint;
    swap_type_id: number;
    offer_coin: CoinSDKType;
    demand_coin_denom: string;
    offer_coin_fee: CoinSDKType;
    order_price: string;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponse {
}
export interface MsgSwapWithinBatchResponseProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse";
    value: Uint8Array;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponseAmino {
}
export interface MsgSwapWithinBatchResponseAminoMsg {
    type: "/liquidity.v1beta1.MsgSwapWithinBatchResponse";
    value: MsgSwapWithinBatchResponseAmino;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponseSDKType {
}
export interface MsgDirectSwap {
    /** address of swap requester */
    swapRequesterAddress: string;
    /**
     * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is
     * supported.
     */
    poolId: bigint;
    /** id of swap type. Must match the value in the pool. */
    swapTypeId: number;
    /** offer sdk.coin for the swap request, must match the denom in the pool. */
    offerCoin: Coin;
    /**
     * denom of demand coin to be exchanged on the swap request, must match the
     * denom in the pool.
     */
    demandCoinDenom: string;
    /**
     * limit order price for the order, the price is the exchange ratio of X/Y
     * where X is the amount of the first coin and Y is the amount
     * of the second coin when their denoms are sorted alphabetically.
     */
    orderPrice: string;
}
export interface MsgDirectSwapProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgDirectSwap";
    value: Uint8Array;
}
export interface MsgDirectSwapAmino {
    /** address of swap requester */
    swap_requester_address?: string;
    /**
     * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is
     * supported.
     */
    pool_id: string;
    /** id of swap type. Must match the value in the pool. */
    swap_type_id?: number;
    /** offer sdk.coin for the swap request, must match the denom in the pool. */
    offer_coin?: CoinAmino;
    /**
     * denom of demand coin to be exchanged on the swap request, must match the
     * denom in the pool.
     */
    demand_coin_denom?: string;
    /**
     * limit order price for the order, the price is the exchange ratio of X/Y
     * where X is the amount of the first coin and Y is the amount
     * of the second coin when their denoms are sorted alphabetically.
     */
    order_price?: string;
}
export interface MsgDirectSwapAminoMsg {
    type: "/liquidity.v1beta1.MsgDirectSwap";
    value: MsgDirectSwapAmino;
}
export interface MsgDirectSwapSDKType {
    swap_requester_address: string;
    pool_id: bigint;
    swap_type_id: number;
    offer_coin: CoinSDKType;
    demand_coin_denom: string;
    order_price: string;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgDirectSwapResponse {
    receivedAmount: Coin;
}
export interface MsgDirectSwapResponseProtoMsg {
    typeUrl: "/liquidity.v1beta1.MsgDirectSwapResponse";
    value: Uint8Array;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgDirectSwapResponseAmino {
    received_amount?: CoinAmino;
}
export interface MsgDirectSwapResponseAminoMsg {
    type: "/liquidity.v1beta1.MsgDirectSwapResponse";
    value: MsgDirectSwapResponseAmino;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgDirectSwapResponseSDKType {
    received_amount: CoinSDKType;
}
export declare const MsgCreatePool: {
    typeUrl: string;
    encode(message: MsgCreatePool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePool;
    fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool;
    fromAmino(object: MsgCreatePoolAmino): MsgCreatePool;
    toAmino(message: MsgCreatePool): MsgCreatePoolAmino;
    fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool;
    fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool;
    toProto(message: MsgCreatePool): Uint8Array;
    toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg;
};
export declare const MsgCreatePoolResponse: {
    typeUrl: string;
    encode(_: MsgCreatePoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
    fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse;
    toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino;
    fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse;
    fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse;
    toProto(message: MsgCreatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg;
};
export declare const MsgDepositWithinBatch: {
    typeUrl: string;
    encode(message: MsgDepositWithinBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositWithinBatch;
    fromPartial(object: Partial<MsgDepositWithinBatch>): MsgDepositWithinBatch;
    fromAmino(object: MsgDepositWithinBatchAmino): MsgDepositWithinBatch;
    toAmino(message: MsgDepositWithinBatch): MsgDepositWithinBatchAmino;
    fromAminoMsg(object: MsgDepositWithinBatchAminoMsg): MsgDepositWithinBatch;
    fromProtoMsg(message: MsgDepositWithinBatchProtoMsg): MsgDepositWithinBatch;
    toProto(message: MsgDepositWithinBatch): Uint8Array;
    toProtoMsg(message: MsgDepositWithinBatch): MsgDepositWithinBatchProtoMsg;
};
export declare const MsgDepositWithinBatchResponse: {
    typeUrl: string;
    encode(_: MsgDepositWithinBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositWithinBatchResponse;
    fromPartial(_: Partial<MsgDepositWithinBatchResponse>): MsgDepositWithinBatchResponse;
    fromAmino(_: MsgDepositWithinBatchResponseAmino): MsgDepositWithinBatchResponse;
    toAmino(_: MsgDepositWithinBatchResponse): MsgDepositWithinBatchResponseAmino;
    fromAminoMsg(object: MsgDepositWithinBatchResponseAminoMsg): MsgDepositWithinBatchResponse;
    fromProtoMsg(message: MsgDepositWithinBatchResponseProtoMsg): MsgDepositWithinBatchResponse;
    toProto(message: MsgDepositWithinBatchResponse): Uint8Array;
    toProtoMsg(message: MsgDepositWithinBatchResponse): MsgDepositWithinBatchResponseProtoMsg;
};
export declare const MsgWithdrawWithinBatch: {
    typeUrl: string;
    encode(message: MsgWithdrawWithinBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawWithinBatch;
    fromPartial(object: Partial<MsgWithdrawWithinBatch>): MsgWithdrawWithinBatch;
    fromAmino(object: MsgWithdrawWithinBatchAmino): MsgWithdrawWithinBatch;
    toAmino(message: MsgWithdrawWithinBatch): MsgWithdrawWithinBatchAmino;
    fromAminoMsg(object: MsgWithdrawWithinBatchAminoMsg): MsgWithdrawWithinBatch;
    fromProtoMsg(message: MsgWithdrawWithinBatchProtoMsg): MsgWithdrawWithinBatch;
    toProto(message: MsgWithdrawWithinBatch): Uint8Array;
    toProtoMsg(message: MsgWithdrawWithinBatch): MsgWithdrawWithinBatchProtoMsg;
};
export declare const MsgWithdrawWithinBatchResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawWithinBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawWithinBatchResponse;
    fromPartial(_: Partial<MsgWithdrawWithinBatchResponse>): MsgWithdrawWithinBatchResponse;
    fromAmino(_: MsgWithdrawWithinBatchResponseAmino): MsgWithdrawWithinBatchResponse;
    toAmino(_: MsgWithdrawWithinBatchResponse): MsgWithdrawWithinBatchResponseAmino;
    fromAminoMsg(object: MsgWithdrawWithinBatchResponseAminoMsg): MsgWithdrawWithinBatchResponse;
    fromProtoMsg(message: MsgWithdrawWithinBatchResponseProtoMsg): MsgWithdrawWithinBatchResponse;
    toProto(message: MsgWithdrawWithinBatchResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawWithinBatchResponse): MsgWithdrawWithinBatchResponseProtoMsg;
};
export declare const MsgSwapWithinBatch: {
    typeUrl: string;
    encode(message: MsgSwapWithinBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapWithinBatch;
    fromPartial(object: Partial<MsgSwapWithinBatch>): MsgSwapWithinBatch;
    fromAmino(object: MsgSwapWithinBatchAmino): MsgSwapWithinBatch;
    toAmino(message: MsgSwapWithinBatch): MsgSwapWithinBatchAmino;
    fromAminoMsg(object: MsgSwapWithinBatchAminoMsg): MsgSwapWithinBatch;
    fromProtoMsg(message: MsgSwapWithinBatchProtoMsg): MsgSwapWithinBatch;
    toProto(message: MsgSwapWithinBatch): Uint8Array;
    toProtoMsg(message: MsgSwapWithinBatch): MsgSwapWithinBatchProtoMsg;
};
export declare const MsgSwapWithinBatchResponse: {
    typeUrl: string;
    encode(_: MsgSwapWithinBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapWithinBatchResponse;
    fromPartial(_: Partial<MsgSwapWithinBatchResponse>): MsgSwapWithinBatchResponse;
    fromAmino(_: MsgSwapWithinBatchResponseAmino): MsgSwapWithinBatchResponse;
    toAmino(_: MsgSwapWithinBatchResponse): MsgSwapWithinBatchResponseAmino;
    fromAminoMsg(object: MsgSwapWithinBatchResponseAminoMsg): MsgSwapWithinBatchResponse;
    fromProtoMsg(message: MsgSwapWithinBatchResponseProtoMsg): MsgSwapWithinBatchResponse;
    toProto(message: MsgSwapWithinBatchResponse): Uint8Array;
    toProtoMsg(message: MsgSwapWithinBatchResponse): MsgSwapWithinBatchResponseProtoMsg;
};
export declare const MsgDirectSwap: {
    typeUrl: string;
    encode(message: MsgDirectSwap, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDirectSwap;
    fromPartial(object: Partial<MsgDirectSwap>): MsgDirectSwap;
    fromAmino(object: MsgDirectSwapAmino): MsgDirectSwap;
    toAmino(message: MsgDirectSwap): MsgDirectSwapAmino;
    fromAminoMsg(object: MsgDirectSwapAminoMsg): MsgDirectSwap;
    fromProtoMsg(message: MsgDirectSwapProtoMsg): MsgDirectSwap;
    toProto(message: MsgDirectSwap): Uint8Array;
    toProtoMsg(message: MsgDirectSwap): MsgDirectSwapProtoMsg;
};
export declare const MsgDirectSwapResponse: {
    typeUrl: string;
    encode(message: MsgDirectSwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDirectSwapResponse;
    fromPartial(object: Partial<MsgDirectSwapResponse>): MsgDirectSwapResponse;
    fromAmino(object: MsgDirectSwapResponseAmino): MsgDirectSwapResponse;
    toAmino(message: MsgDirectSwapResponse): MsgDirectSwapResponseAmino;
    fromAminoMsg(object: MsgDirectSwapResponseAminoMsg): MsgDirectSwapResponse;
    fromProtoMsg(message: MsgDirectSwapResponseProtoMsg): MsgDirectSwapResponse;
    toProto(message: MsgDirectSwapResponse): Uint8Array;
    toProtoMsg(message: MsgDirectSwapResponse): MsgDirectSwapResponseProtoMsg;
};
