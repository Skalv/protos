//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
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
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse";
  value: Uint8Array;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseAmino {}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/liquidity.v1beta1.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponseSDKType {}
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
export interface MsgDepositWithinBatchResponse {}
export interface MsgDepositWithinBatchResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse";
  value: Uint8Array;
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponseAmino {}
export interface MsgDepositWithinBatchResponseAminoMsg {
  type: "/liquidity.v1beta1.MsgDepositWithinBatchResponse";
  value: MsgDepositWithinBatchResponseAmino;
}
/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponseSDKType {}
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
export interface MsgWithdrawWithinBatchResponse {}
export interface MsgWithdrawWithinBatchResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponseAmino {}
export interface MsgWithdrawWithinBatchResponseAminoMsg {
  type: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse";
  value: MsgWithdrawWithinBatchResponseAmino;
}
/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponseSDKType {}
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
export interface MsgSwapWithinBatchResponse {}
export interface MsgSwapWithinBatchResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse";
  value: Uint8Array;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponseAmino {}
export interface MsgSwapWithinBatchResponseAminoMsg {
  type: "/liquidity.v1beta1.MsgSwapWithinBatchResponse";
  value: MsgSwapWithinBatchResponseAmino;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponseSDKType {}
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
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    poolCreatorAddress: "",
    poolTypeId: 0,
    depositCoins: []
  };
}
export const MsgCreatePool = {
  typeUrl: "/liquidity.v1beta1.MsgCreatePool",
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolCreatorAddress !== "") {
      writer.uint32(10).string(message.poolCreatorAddress);
    }
    if (message.poolTypeId !== 0) {
      writer.uint32(16).uint32(message.poolTypeId);
    }
    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCreatorAddress = reader.string();
          break;
        case 2:
          message.poolTypeId = reader.uint32();
          break;
        case 4:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.poolCreatorAddress = object.poolCreatorAddress ?? "";
    message.poolTypeId = object.poolTypeId ?? 0;
    message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.pool_creator_address !== undefined && object.pool_creator_address !== null) {
      message.poolCreatorAddress = object.pool_creator_address;
    }
    if (object.pool_type_id !== undefined && object.pool_type_id !== null) {
      message.poolTypeId = object.pool_type_id;
    }
    message.depositCoins = object.deposit_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.pool_creator_address = message.poolCreatorAddress === "" ? undefined : message.poolCreatorAddress;
    obj.pool_type_id = message.poolTypeId === 0 ? undefined : message.poolTypeId;
    if (message.depositCoins) {
      obj.deposit_coins = message.depositCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit_coins = message.depositCoins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse",
  encode(_: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
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
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositWithinBatch(): MsgDepositWithinBatch {
  return {
    depositorAddress: "",
    poolId: BigInt(0),
    depositCoins: []
  };
}
export const MsgDepositWithinBatch = {
  typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
  encode(message: MsgDepositWithinBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositWithinBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDepositWithinBatch>): MsgDepositWithinBatch {
    const message = createBaseMsgDepositWithinBatch();
    message.depositorAddress = object.depositorAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositWithinBatchAmino): MsgDepositWithinBatch {
    const message = createBaseMsgDepositWithinBatch();
    if (object.depositor_address !== undefined && object.depositor_address !== null) {
      message.depositorAddress = object.depositor_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.depositCoins = object.deposit_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDepositWithinBatch): MsgDepositWithinBatchAmino {
    const obj: any = {};
    obj.depositor_address = message.depositorAddress === "" ? undefined : message.depositorAddress;
    obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
    if (message.depositCoins) {
      obj.deposit_coins = message.depositCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit_coins = message.depositCoins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositWithinBatchAminoMsg): MsgDepositWithinBatch {
    return MsgDepositWithinBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositWithinBatchProtoMsg): MsgDepositWithinBatch {
    return MsgDepositWithinBatch.decode(message.value);
  },
  toProto(message: MsgDepositWithinBatch): Uint8Array {
    return MsgDepositWithinBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositWithinBatch): MsgDepositWithinBatchProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
      value: MsgDepositWithinBatch.encode(message).finish()
    };
  }
};
function createBaseMsgDepositWithinBatchResponse(): MsgDepositWithinBatchResponse {
  return {};
}
export const MsgDepositWithinBatchResponse = {
  typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse",
  encode(_: MsgDepositWithinBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositWithinBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositWithinBatchResponse();
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
  fromPartial(_: Partial<MsgDepositWithinBatchResponse>): MsgDepositWithinBatchResponse {
    const message = createBaseMsgDepositWithinBatchResponse();
    return message;
  },
  fromAmino(_: MsgDepositWithinBatchResponseAmino): MsgDepositWithinBatchResponse {
    const message = createBaseMsgDepositWithinBatchResponse();
    return message;
  },
  toAmino(_: MsgDepositWithinBatchResponse): MsgDepositWithinBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositWithinBatchResponseAminoMsg): MsgDepositWithinBatchResponse {
    return MsgDepositWithinBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositWithinBatchResponseProtoMsg): MsgDepositWithinBatchResponse {
    return MsgDepositWithinBatchResponse.decode(message.value);
  },
  toProto(message: MsgDepositWithinBatchResponse): Uint8Array {
    return MsgDepositWithinBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositWithinBatchResponse): MsgDepositWithinBatchResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse",
      value: MsgDepositWithinBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawWithinBatch(): MsgWithdrawWithinBatch {
  return {
    withdrawerAddress: "",
    poolId: BigInt(0),
    poolCoin: Coin.fromPartial({})
  };
}
export const MsgWithdrawWithinBatch = {
  typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
  encode(message: MsgWithdrawWithinBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawWithinBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawerAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawWithinBatch>): MsgWithdrawWithinBatch {
    const message = createBaseMsgWithdrawWithinBatch();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.poolCoin = object.poolCoin !== undefined && object.poolCoin !== null ? Coin.fromPartial(object.poolCoin) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawWithinBatchAmino): MsgWithdrawWithinBatch {
    const message = createBaseMsgWithdrawWithinBatch();
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
      message.withdrawerAddress = object.withdrawer_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pool_coin !== undefined && object.pool_coin !== null) {
      message.poolCoin = Coin.fromAmino(object.pool_coin);
    }
    return message;
  },
  toAmino(message: MsgWithdrawWithinBatch): MsgWithdrawWithinBatchAmino {
    const obj: any = {};
    obj.withdrawer_address = message.withdrawerAddress === "" ? undefined : message.withdrawerAddress;
    obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
    obj.pool_coin = message.poolCoin ? Coin.toAmino(message.poolCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawWithinBatchAminoMsg): MsgWithdrawWithinBatch {
    return MsgWithdrawWithinBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawWithinBatchProtoMsg): MsgWithdrawWithinBatch {
    return MsgWithdrawWithinBatch.decode(message.value);
  },
  toProto(message: MsgWithdrawWithinBatch): Uint8Array {
    return MsgWithdrawWithinBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawWithinBatch): MsgWithdrawWithinBatchProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
      value: MsgWithdrawWithinBatch.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawWithinBatchResponse(): MsgWithdrawWithinBatchResponse {
  return {};
}
export const MsgWithdrawWithinBatchResponse = {
  typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
  encode(_: MsgWithdrawWithinBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawWithinBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawWithinBatchResponse();
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
  fromPartial(_: Partial<MsgWithdrawWithinBatchResponse>): MsgWithdrawWithinBatchResponse {
    const message = createBaseMsgWithdrawWithinBatchResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawWithinBatchResponseAmino): MsgWithdrawWithinBatchResponse {
    const message = createBaseMsgWithdrawWithinBatchResponse();
    return message;
  },
  toAmino(_: MsgWithdrawWithinBatchResponse): MsgWithdrawWithinBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawWithinBatchResponseAminoMsg): MsgWithdrawWithinBatchResponse {
    return MsgWithdrawWithinBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawWithinBatchResponseProtoMsg): MsgWithdrawWithinBatchResponse {
    return MsgWithdrawWithinBatchResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawWithinBatchResponse): Uint8Array {
    return MsgWithdrawWithinBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawWithinBatchResponse): MsgWithdrawWithinBatchResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
      value: MsgWithdrawWithinBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapWithinBatch(): MsgSwapWithinBatch {
  return {
    swapRequesterAddress: "",
    poolId: BigInt(0),
    swapTypeId: 0,
    offerCoin: Coin.fromPartial({}),
    demandCoinDenom: "",
    offerCoinFee: Coin.fromPartial({}),
    orderPrice: ""
  };
}
export const MsgSwapWithinBatch = {
  typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
  encode(message: MsgSwapWithinBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapRequesterAddress !== "") {
      writer.uint32(10).string(message.swapRequesterAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapTypeId !== 0) {
      writer.uint32(24).uint32(message.swapTypeId);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
    }
    if (message.demandCoinDenom !== "") {
      writer.uint32(42).string(message.demandCoinDenom);
    }
    if (message.offerCoinFee !== undefined) {
      Coin.encode(message.offerCoinFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.orderPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapWithinBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapRequesterAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.swapTypeId = reader.uint32();
          break;
        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.demandCoinDenom = reader.string();
          break;
        case 6:
          message.offerCoinFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.orderPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapWithinBatch>): MsgSwapWithinBatch {
    const message = createBaseMsgSwapWithinBatch();
    message.swapRequesterAddress = object.swapRequesterAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapTypeId = object.swapTypeId ?? 0;
    message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
    message.demandCoinDenom = object.demandCoinDenom ?? "";
    message.offerCoinFee = object.offerCoinFee !== undefined && object.offerCoinFee !== null ? Coin.fromPartial(object.offerCoinFee) : undefined;
    message.orderPrice = object.orderPrice ?? "";
    return message;
  },
  fromAmino(object: MsgSwapWithinBatchAmino): MsgSwapWithinBatch {
    const message = createBaseMsgSwapWithinBatch();
    if (object.swap_requester_address !== undefined && object.swap_requester_address !== null) {
      message.swapRequesterAddress = object.swap_requester_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_type_id !== undefined && object.swap_type_id !== null) {
      message.swapTypeId = object.swap_type_id;
    }
    if (object.offer_coin !== undefined && object.offer_coin !== null) {
      message.offerCoin = Coin.fromAmino(object.offer_coin);
    }
    if (object.demand_coin_denom !== undefined && object.demand_coin_denom !== null) {
      message.demandCoinDenom = object.demand_coin_denom;
    }
    if (object.offer_coin_fee !== undefined && object.offer_coin_fee !== null) {
      message.offerCoinFee = Coin.fromAmino(object.offer_coin_fee);
    }
    if (object.order_price !== undefined && object.order_price !== null) {
      message.orderPrice = object.order_price;
    }
    return message;
  },
  toAmino(message: MsgSwapWithinBatch): MsgSwapWithinBatchAmino {
    const obj: any = {};
    obj.swap_requester_address = message.swapRequesterAddress === "" ? undefined : message.swapRequesterAddress;
    obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
    obj.swap_type_id = message.swapTypeId === 0 ? undefined : message.swapTypeId;
    obj.offer_coin = message.offerCoin ? Coin.toAmino(message.offerCoin) : undefined;
    obj.demand_coin_denom = message.demandCoinDenom === "" ? undefined : message.demandCoinDenom;
    obj.offer_coin_fee = message.offerCoinFee ? Coin.toAmino(message.offerCoinFee) : undefined;
    obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
    return obj;
  },
  fromAminoMsg(object: MsgSwapWithinBatchAminoMsg): MsgSwapWithinBatch {
    return MsgSwapWithinBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapWithinBatchProtoMsg): MsgSwapWithinBatch {
    return MsgSwapWithinBatch.decode(message.value);
  },
  toProto(message: MsgSwapWithinBatch): Uint8Array {
    return MsgSwapWithinBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapWithinBatch): MsgSwapWithinBatchProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
      value: MsgSwapWithinBatch.encode(message).finish()
    };
  }
};
function createBaseMsgSwapWithinBatchResponse(): MsgSwapWithinBatchResponse {
  return {};
}
export const MsgSwapWithinBatchResponse = {
  typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse",
  encode(_: MsgSwapWithinBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapWithinBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapWithinBatchResponse();
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
  fromPartial(_: Partial<MsgSwapWithinBatchResponse>): MsgSwapWithinBatchResponse {
    const message = createBaseMsgSwapWithinBatchResponse();
    return message;
  },
  fromAmino(_: MsgSwapWithinBatchResponseAmino): MsgSwapWithinBatchResponse {
    const message = createBaseMsgSwapWithinBatchResponse();
    return message;
  },
  toAmino(_: MsgSwapWithinBatchResponse): MsgSwapWithinBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSwapWithinBatchResponseAminoMsg): MsgSwapWithinBatchResponse {
    return MsgSwapWithinBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapWithinBatchResponseProtoMsg): MsgSwapWithinBatchResponse {
    return MsgSwapWithinBatchResponse.decode(message.value);
  },
  toProto(message: MsgSwapWithinBatchResponse): Uint8Array {
    return MsgSwapWithinBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapWithinBatchResponse): MsgSwapWithinBatchResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse",
      value: MsgSwapWithinBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDirectSwap(): MsgDirectSwap {
  return {
    swapRequesterAddress: "",
    poolId: BigInt(0),
    swapTypeId: 0,
    offerCoin: Coin.fromPartial({}),
    demandCoinDenom: "",
    orderPrice: ""
  };
}
export const MsgDirectSwap = {
  typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
  encode(message: MsgDirectSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapRequesterAddress !== "") {
      writer.uint32(10).string(message.swapRequesterAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapTypeId !== 0) {
      writer.uint32(24).uint32(message.swapTypeId);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
    }
    if (message.demandCoinDenom !== "") {
      writer.uint32(42).string(message.demandCoinDenom);
    }
    if (message.orderPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.orderPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDirectSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDirectSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapRequesterAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.swapTypeId = reader.uint32();
          break;
        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.demandCoinDenom = reader.string();
          break;
        case 7:
          message.orderPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDirectSwap>): MsgDirectSwap {
    const message = createBaseMsgDirectSwap();
    message.swapRequesterAddress = object.swapRequesterAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapTypeId = object.swapTypeId ?? 0;
    message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
    message.demandCoinDenom = object.demandCoinDenom ?? "";
    message.orderPrice = object.orderPrice ?? "";
    return message;
  },
  fromAmino(object: MsgDirectSwapAmino): MsgDirectSwap {
    const message = createBaseMsgDirectSwap();
    if (object.swap_requester_address !== undefined && object.swap_requester_address !== null) {
      message.swapRequesterAddress = object.swap_requester_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_type_id !== undefined && object.swap_type_id !== null) {
      message.swapTypeId = object.swap_type_id;
    }
    if (object.offer_coin !== undefined && object.offer_coin !== null) {
      message.offerCoin = Coin.fromAmino(object.offer_coin);
    }
    if (object.demand_coin_denom !== undefined && object.demand_coin_denom !== null) {
      message.demandCoinDenom = object.demand_coin_denom;
    }
    if (object.order_price !== undefined && object.order_price !== null) {
      message.orderPrice = object.order_price;
    }
    return message;
  },
  toAmino(message: MsgDirectSwap): MsgDirectSwapAmino {
    const obj: any = {};
    obj.swap_requester_address = message.swapRequesterAddress === "" ? undefined : message.swapRequesterAddress;
    obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
    obj.swap_type_id = message.swapTypeId === 0 ? undefined : message.swapTypeId;
    obj.offer_coin = message.offerCoin ? Coin.toAmino(message.offerCoin) : undefined;
    obj.demand_coin_denom = message.demandCoinDenom === "" ? undefined : message.demandCoinDenom;
    obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
    return obj;
  },
  fromAminoMsg(object: MsgDirectSwapAminoMsg): MsgDirectSwap {
    return MsgDirectSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDirectSwapProtoMsg): MsgDirectSwap {
    return MsgDirectSwap.decode(message.value);
  },
  toProto(message: MsgDirectSwap): Uint8Array {
    return MsgDirectSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgDirectSwap): MsgDirectSwapProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
      value: MsgDirectSwap.encode(message).finish()
    };
  }
};
function createBaseMsgDirectSwapResponse(): MsgDirectSwapResponse {
  return {
    receivedAmount: Coin.fromPartial({})
  };
}
export const MsgDirectSwapResponse = {
  typeUrl: "/liquidity.v1beta1.MsgDirectSwapResponse",
  encode(message: MsgDirectSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receivedAmount !== undefined) {
      Coin.encode(message.receivedAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDirectSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDirectSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receivedAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDirectSwapResponse>): MsgDirectSwapResponse {
    const message = createBaseMsgDirectSwapResponse();
    message.receivedAmount = object.receivedAmount !== undefined && object.receivedAmount !== null ? Coin.fromPartial(object.receivedAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgDirectSwapResponseAmino): MsgDirectSwapResponse {
    const message = createBaseMsgDirectSwapResponse();
    if (object.received_amount !== undefined && object.received_amount !== null) {
      message.receivedAmount = Coin.fromAmino(object.received_amount);
    }
    return message;
  },
  toAmino(message: MsgDirectSwapResponse): MsgDirectSwapResponseAmino {
    const obj: any = {};
    obj.received_amount = message.receivedAmount ? Coin.toAmino(message.receivedAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDirectSwapResponseAminoMsg): MsgDirectSwapResponse {
    return MsgDirectSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDirectSwapResponseProtoMsg): MsgDirectSwapResponse {
    return MsgDirectSwapResponse.decode(message.value);
  },
  toProto(message: MsgDirectSwapResponse): Uint8Array {
    return MsgDirectSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDirectSwapResponse): MsgDirectSwapResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.MsgDirectSwapResponse",
      value: MsgDirectSwapResponse.encode(message).finish()
    };
  }
};