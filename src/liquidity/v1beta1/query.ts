//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolAmino, PoolSDKType, PoolBatch, PoolBatchAmino, PoolBatchSDKType, Params, ParamsAmino, ParamsSDKType, SwapMsgState, SwapMsgStateAmino, SwapMsgStateSDKType, DepositMsgState, DepositMsgStateAmino, DepositMsgStateSDKType, WithdrawMsgState, WithdrawMsgStateAmino, WithdrawMsgStateSDKType } from "./liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * the request type for the QueryLiquidityPool RPC method. requestable specified
 * pool_id.
 */
export interface QueryLiquidityPoolRequest {
  poolId: bigint;
}
export interface QueryLiquidityPoolRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryLiquidityPool RPC method. requestable specified
 * pool_id.
 */
export interface QueryLiquidityPoolRequestAmino {
  pool_id?: string;
}
export interface QueryLiquidityPoolRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolRequest";
  value: QueryLiquidityPoolRequestAmino;
}
/**
 * the request type for the QueryLiquidityPool RPC method. requestable specified
 * pool_id.
 */
export interface QueryLiquidityPoolRequestSDKType {
  pool_id: bigint;
}
/**
 * the response type for the QueryLiquidityPoolResponse RPC method. Returns the
 * liquidity pool that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolResponse {
  pool: Pool;
}
export interface QueryLiquidityPoolResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryLiquidityPoolResponse RPC method. Returns the
 * liquidity pool that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryLiquidityPoolResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolResponse";
  value: QueryLiquidityPoolResponseAmino;
}
/**
 * the response type for the QueryLiquidityPoolResponse RPC method. Returns the
 * liquidity pool that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolResponseSDKType {
  pool: PoolSDKType;
}
/**
 * the request type for the QueryLiquidityByPoolCoinDenomPool RPC method.
 * Requestable specified pool_coin_denom.
 */
export interface QueryLiquidityPoolByPoolCoinDenomRequest {
  poolCoinDenom: string;
}
export interface QueryLiquidityPoolByPoolCoinDenomRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryLiquidityByPoolCoinDenomPool RPC method.
 * Requestable specified pool_coin_denom.
 */
export interface QueryLiquidityPoolByPoolCoinDenomRequestAmino {
  pool_coin_denom?: string;
}
export interface QueryLiquidityPoolByPoolCoinDenomRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest";
  value: QueryLiquidityPoolByPoolCoinDenomRequestAmino;
}
/**
 * the request type for the QueryLiquidityByPoolCoinDenomPool RPC method.
 * Requestable specified pool_coin_denom.
 */
export interface QueryLiquidityPoolByPoolCoinDenomRequestSDKType {
  pool_coin_denom: string;
}
/**
 * the request type for the QueryLiquidityByReserveAcc RPC method. Requestable
 * specified reserve_acc.
 */
export interface QueryLiquidityPoolByReserveAccRequest {
  reserveAcc: string;
}
export interface QueryLiquidityPoolByReserveAccRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryLiquidityByReserveAcc RPC method. Requestable
 * specified reserve_acc.
 */
export interface QueryLiquidityPoolByReserveAccRequestAmino {
  reserve_acc?: string;
}
export interface QueryLiquidityPoolByReserveAccRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest";
  value: QueryLiquidityPoolByReserveAccRequestAmino;
}
/**
 * the request type for the QueryLiquidityByReserveAcc RPC method. Requestable
 * specified reserve_acc.
 */
export interface QueryLiquidityPoolByReserveAccRequestSDKType {
  reserve_acc: string;
}
/**
 * the request type for the QueryLiquidityPoolBatch RPC method. requestable
 * including specified pool_id.
 */
export interface QueryLiquidityPoolBatchRequest {
  /** id of the target pool for query */
  poolId: bigint;
}
export interface QueryLiquidityPoolBatchRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryLiquidityPoolBatch RPC method. requestable
 * including specified pool_id.
 */
export interface QueryLiquidityPoolBatchRequestAmino {
  /** id of the target pool for query */
  pool_id?: string;
}
export interface QueryLiquidityPoolBatchRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest";
  value: QueryLiquidityPoolBatchRequestAmino;
}
/**
 * the request type for the QueryLiquidityPoolBatch RPC method. requestable
 * including specified pool_id.
 */
export interface QueryLiquidityPoolBatchRequestSDKType {
  pool_id: bigint;
}
/**
 * the response type for the QueryLiquidityPoolBatchResponse RPC method. Returns
 * the liquidity pool batch that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolBatchResponse {
  batch: PoolBatch;
}
export interface QueryLiquidityPoolBatchResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryLiquidityPoolBatchResponse RPC method. Returns
 * the liquidity pool batch that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolBatchResponseAmino {
  batch?: PoolBatchAmino;
}
export interface QueryLiquidityPoolBatchResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse";
  value: QueryLiquidityPoolBatchResponseAmino;
}
/**
 * the response type for the QueryLiquidityPoolBatchResponse RPC method. Returns
 * the liquidity pool batch that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolBatchResponseSDKType {
  batch: PoolBatchSDKType;
}
/**
 * the request type for the QueryLiquidityPools RPC method. Requestable
 * including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryLiquidityPoolsRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryLiquidityPools RPC method. Requestable
 * including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryLiquidityPoolsRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolsRequest";
  value: QueryLiquidityPoolsRequestAmino;
}
/**
 * the request type for the QueryLiquidityPools RPC method. Requestable
 * including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * the response type for the QueryLiquidityPoolsResponse RPC method. This
 * includes a list of all existing liquidity pools and paging results that
 * contain next_key and total count.
 */
export interface QueryLiquidityPoolsResponse {
  pools: Pool[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponse;
}
export interface QueryLiquidityPoolsResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryLiquidityPoolsResponse RPC method. This
 * includes a list of all existing liquidity pools and paging results that
 * contain next_key and total count.
 */
export interface QueryLiquidityPoolsResponseAmino {
  pools?: PoolAmino[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponseAmino;
}
export interface QueryLiquidityPoolsResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryLiquidityPoolsResponse";
  value: QueryLiquidityPoolsResponseAmino;
}
/**
 * the response type for the QueryLiquidityPoolsResponse RPC method. This
 * includes a list of all existing liquidity pools and paging results that
 * contain next_key and total count.
 */
export interface QueryLiquidityPoolsResponseSDKType {
  pools: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequestSDKType {}
/**
 * the response type for the QueryParamsResponse RPC method. This includes
 * current parameter of the liquidity module.
 */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryParamsResponse RPC method. This includes
 * current parameter of the liquidity module.
 */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * the response type for the QueryParamsResponse RPC method. This includes
 * current parameter of the liquidity module.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * the request type for the QueryPoolBatchSwapMsgs RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchSwapMsgsRequest {
  /** id of the target pool for query */
  poolId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolBatchSwapMsgsRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryPoolBatchSwapMsgs RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchSwapMsgsRequestAmino {
  /** id of the target pool for query */
  pool_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPoolBatchSwapMsgsRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest";
  value: QueryPoolBatchSwapMsgsRequestAmino;
}
/**
 * the request type for the QueryPoolBatchSwapMsgs RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchSwapMsgsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * the request type for the QueryPoolBatchSwap RPC method. Requestable including
 * specified pool_id and msg_index.
 */
export interface QueryPoolBatchSwapMsgRequest {
  /** id of the target pool for query */
  poolId: bigint;
  /** target msg_index of the pool */
  msgIndex: bigint;
}
export interface QueryPoolBatchSwapMsgRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryPoolBatchSwap RPC method. Requestable including
 * specified pool_id and msg_index.
 */
export interface QueryPoolBatchSwapMsgRequestAmino {
  /** id of the target pool for query */
  pool_id?: string;
  /** target msg_index of the pool */
  msg_index?: string;
}
export interface QueryPoolBatchSwapMsgRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest";
  value: QueryPoolBatchSwapMsgRequestAmino;
}
/**
 * the request type for the QueryPoolBatchSwap RPC method. Requestable including
 * specified pool_id and msg_index.
 */
export interface QueryPoolBatchSwapMsgRequestSDKType {
  pool_id: bigint;
  msg_index: bigint;
}
/**
 * the response type for the QueryPoolBatchSwapMsgs RPC method. This includes
 * list of all currently existing swap messages of the batch and paging results
 * that contain next_key and total count.
 */
export interface QueryPoolBatchSwapMsgsResponse {
  swaps: SwapMsgState[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponse;
}
export interface QueryPoolBatchSwapMsgsResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryPoolBatchSwapMsgs RPC method. This includes
 * list of all currently existing swap messages of the batch and paging results
 * that contain next_key and total count.
 */
export interface QueryPoolBatchSwapMsgsResponseAmino {
  swaps?: SwapMsgStateAmino[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponseAmino;
}
export interface QueryPoolBatchSwapMsgsResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse";
  value: QueryPoolBatchSwapMsgsResponseAmino;
}
/**
 * the response type for the QueryPoolBatchSwapMsgs RPC method. This includes
 * list of all currently existing swap messages of the batch and paging results
 * that contain next_key and total count.
 */
export interface QueryPoolBatchSwapMsgsResponseSDKType {
  swaps: SwapMsgStateSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * the response type for the QueryPoolBatchSwapMsg RPC method. This includes a
 * batch swap message of the batch.
 */
export interface QueryPoolBatchSwapMsgResponse {
  swap: SwapMsgState;
}
export interface QueryPoolBatchSwapMsgResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryPoolBatchSwapMsg RPC method. This includes a
 * batch swap message of the batch.
 */
export interface QueryPoolBatchSwapMsgResponseAmino {
  swap?: SwapMsgStateAmino;
}
export interface QueryPoolBatchSwapMsgResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse";
  value: QueryPoolBatchSwapMsgResponseAmino;
}
/**
 * the response type for the QueryPoolBatchSwapMsg RPC method. This includes a
 * batch swap message of the batch.
 */
export interface QueryPoolBatchSwapMsgResponseSDKType {
  swap: SwapMsgStateSDKType;
}
/**
 * the request type for the QueryPoolBatchDeposit RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchDepositMsgsRequest {
  /** id of the target pool for query */
  poolId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolBatchDepositMsgsRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryPoolBatchDeposit RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchDepositMsgsRequestAmino {
  /** id of the target pool for query */
  pool_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPoolBatchDepositMsgsRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest";
  value: QueryPoolBatchDepositMsgsRequestAmino;
}
/**
 * the request type for the QueryPoolBatchDeposit RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchDepositMsgsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * the request type for the QueryPoolBatchDeposit RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchDepositMsgRequest {
  /** id of the target pool for query */
  poolId: bigint;
  /** target msg_index of the pool */
  msgIndex: bigint;
}
export interface QueryPoolBatchDepositMsgRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryPoolBatchDeposit RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchDepositMsgRequestAmino {
  /** id of the target pool for query */
  pool_id?: string;
  /** target msg_index of the pool */
  msg_index?: string;
}
export interface QueryPoolBatchDepositMsgRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest";
  value: QueryPoolBatchDepositMsgRequestAmino;
}
/**
 * the request type for the QueryPoolBatchDeposit RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchDepositMsgRequestSDKType {
  pool_id: bigint;
  msg_index: bigint;
}
/**
 * the response type for the QueryPoolBatchDeposit RPC method. This includes a
 * list of all currently existing deposit messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchDepositMsgsResponse {
  deposits: DepositMsgState[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponse;
}
export interface QueryPoolBatchDepositMsgsResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryPoolBatchDeposit RPC method. This includes a
 * list of all currently existing deposit messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchDepositMsgsResponseAmino {
  deposits?: DepositMsgStateAmino[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponseAmino;
}
export interface QueryPoolBatchDepositMsgsResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse";
  value: QueryPoolBatchDepositMsgsResponseAmino;
}
/**
 * the response type for the QueryPoolBatchDeposit RPC method. This includes a
 * list of all currently existing deposit messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchDepositMsgsResponseSDKType {
  deposits: DepositMsgStateSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * the response type for the QueryPoolBatchDepositMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchDepositMsgResponse {
  deposit: DepositMsgState;
}
export interface QueryPoolBatchDepositMsgResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryPoolBatchDepositMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchDepositMsgResponseAmino {
  deposit?: DepositMsgStateAmino;
}
export interface QueryPoolBatchDepositMsgResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse";
  value: QueryPoolBatchDepositMsgResponseAmino;
}
/**
 * the response type for the QueryPoolBatchDepositMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchDepositMsgResponseSDKType {
  deposit: DepositMsgStateSDKType;
}
/**
 * the request type for the QueryPoolBatchWithdraw RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchWithdrawMsgsRequest {
  /** id of the target pool for query */
  poolId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolBatchWithdrawMsgsRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryPoolBatchWithdraw RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchWithdrawMsgsRequestAmino {
  /** id of the target pool for query */
  pool_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPoolBatchWithdrawMsgsRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest";
  value: QueryPoolBatchWithdrawMsgsRequestAmino;
}
/**
 * the request type for the QueryPoolBatchWithdraw RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchWithdrawMsgsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * the request type for the QueryPoolBatchWithdraw RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchWithdrawMsgRequest {
  /** id of the target pool for query */
  poolId: bigint;
  /** target msg_index of the pool */
  msgIndex: bigint;
}
export interface QueryPoolBatchWithdrawMsgRequestProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest";
  value: Uint8Array;
}
/**
 * the request type for the QueryPoolBatchWithdraw RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchWithdrawMsgRequestAmino {
  /** id of the target pool for query */
  pool_id?: string;
  /** target msg_index of the pool */
  msg_index?: string;
}
export interface QueryPoolBatchWithdrawMsgRequestAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest";
  value: QueryPoolBatchWithdrawMsgRequestAmino;
}
/**
 * the request type for the QueryPoolBatchWithdraw RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchWithdrawMsgRequestSDKType {
  pool_id: bigint;
  msg_index: bigint;
}
/**
 * the response type for the QueryPoolBatchWithdraw RPC method. This includes a
 * list of all currently existing withdraw messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchWithdrawMsgsResponse {
  withdraws: WithdrawMsgState[];
  /**
   * pagination defines the pagination in the response. Not supported on this
   * version.
   */
  pagination?: PageResponse;
}
export interface QueryPoolBatchWithdrawMsgsResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryPoolBatchWithdraw RPC method. This includes a
 * list of all currently existing withdraw messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchWithdrawMsgsResponseAmino {
  withdraws?: WithdrawMsgStateAmino[];
  /**
   * pagination defines the pagination in the response. Not supported on this
   * version.
   */
  pagination?: PageResponseAmino;
}
export interface QueryPoolBatchWithdrawMsgsResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse";
  value: QueryPoolBatchWithdrawMsgsResponseAmino;
}
/**
 * the response type for the QueryPoolBatchWithdraw RPC method. This includes a
 * list of all currently existing withdraw messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchWithdrawMsgsResponseSDKType {
  withdraws: WithdrawMsgStateSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * the response type for the QueryPoolBatchWithdrawMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchWithdrawMsgResponse {
  withdraw: WithdrawMsgState;
}
export interface QueryPoolBatchWithdrawMsgResponseProtoMsg {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse";
  value: Uint8Array;
}
/**
 * the response type for the QueryPoolBatchWithdrawMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchWithdrawMsgResponseAmino {
  withdraw?: WithdrawMsgStateAmino;
}
export interface QueryPoolBatchWithdrawMsgResponseAminoMsg {
  type: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse";
  value: QueryPoolBatchWithdrawMsgResponseAmino;
}
/**
 * the response type for the QueryPoolBatchWithdrawMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchWithdrawMsgResponseSDKType {
  withdraw: WithdrawMsgStateSDKType;
}
function createBaseQueryLiquidityPoolRequest(): QueryLiquidityPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryLiquidityPoolRequest = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolRequest",
  encode(message: QueryLiquidityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolRequest>): QueryLiquidityPoolRequest {
    const message = createBaseQueryLiquidityPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLiquidityPoolRequestAmino): QueryLiquidityPoolRequest {
    const message = createBaseQueryLiquidityPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolRequest): QueryLiquidityPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolRequestAminoMsg): QueryLiquidityPoolRequest {
    return QueryLiquidityPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolRequestProtoMsg): QueryLiquidityPoolRequest {
    return QueryLiquidityPoolRequest.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolRequest): Uint8Array {
    return QueryLiquidityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolRequest): QueryLiquidityPoolRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolRequest",
      value: QueryLiquidityPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolResponse(): QueryLiquidityPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryLiquidityPoolResponse = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolResponse",
  encode(message: QueryLiquidityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolResponse>): QueryLiquidityPoolResponse {
    const message = createBaseQueryLiquidityPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidityPoolResponseAmino): QueryLiquidityPoolResponse {
    const message = createBaseQueryLiquidityPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolResponse): QueryLiquidityPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolResponseAminoMsg): QueryLiquidityPoolResponse {
    return QueryLiquidityPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolResponseProtoMsg): QueryLiquidityPoolResponse {
    return QueryLiquidityPoolResponse.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolResponse): Uint8Array {
    return QueryLiquidityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolResponse): QueryLiquidityPoolResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolResponse",
      value: QueryLiquidityPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolByPoolCoinDenomRequest(): QueryLiquidityPoolByPoolCoinDenomRequest {
  return {
    poolCoinDenom: ""
  };
}
export const QueryLiquidityPoolByPoolCoinDenomRequest = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest",
  encode(message: QueryLiquidityPoolByPoolCoinDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolCoinDenom !== "") {
      writer.uint32(10).string(message.poolCoinDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolByPoolCoinDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCoinDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolByPoolCoinDenomRequest>): QueryLiquidityPoolByPoolCoinDenomRequest {
    const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    return message;
  },
  fromAmino(object: QueryLiquidityPoolByPoolCoinDenomRequestAmino): QueryLiquidityPoolByPoolCoinDenomRequest {
    const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
    if (object.pool_coin_denom !== undefined && object.pool_coin_denom !== null) {
      message.poolCoinDenom = object.pool_coin_denom;
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolByPoolCoinDenomRequest): QueryLiquidityPoolByPoolCoinDenomRequestAmino {
    const obj: any = {};
    obj.pool_coin_denom = message.poolCoinDenom === "" ? undefined : message.poolCoinDenom;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolByPoolCoinDenomRequestAminoMsg): QueryLiquidityPoolByPoolCoinDenomRequest {
    return QueryLiquidityPoolByPoolCoinDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolByPoolCoinDenomRequestProtoMsg): QueryLiquidityPoolByPoolCoinDenomRequest {
    return QueryLiquidityPoolByPoolCoinDenomRequest.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolByPoolCoinDenomRequest): Uint8Array {
    return QueryLiquidityPoolByPoolCoinDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolByPoolCoinDenomRequest): QueryLiquidityPoolByPoolCoinDenomRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest",
      value: QueryLiquidityPoolByPoolCoinDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolByReserveAccRequest(): QueryLiquidityPoolByReserveAccRequest {
  return {
    reserveAcc: ""
  };
}
export const QueryLiquidityPoolByReserveAccRequest = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest",
  encode(message: QueryLiquidityPoolByReserveAccRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reserveAcc !== "") {
      writer.uint32(10).string(message.reserveAcc);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolByReserveAccRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolByReserveAccRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveAcc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolByReserveAccRequest>): QueryLiquidityPoolByReserveAccRequest {
    const message = createBaseQueryLiquidityPoolByReserveAccRequest();
    message.reserveAcc = object.reserveAcc ?? "";
    return message;
  },
  fromAmino(object: QueryLiquidityPoolByReserveAccRequestAmino): QueryLiquidityPoolByReserveAccRequest {
    const message = createBaseQueryLiquidityPoolByReserveAccRequest();
    if (object.reserve_acc !== undefined && object.reserve_acc !== null) {
      message.reserveAcc = object.reserve_acc;
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolByReserveAccRequest): QueryLiquidityPoolByReserveAccRequestAmino {
    const obj: any = {};
    obj.reserve_acc = message.reserveAcc === "" ? undefined : message.reserveAcc;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolByReserveAccRequestAminoMsg): QueryLiquidityPoolByReserveAccRequest {
    return QueryLiquidityPoolByReserveAccRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolByReserveAccRequestProtoMsg): QueryLiquidityPoolByReserveAccRequest {
    return QueryLiquidityPoolByReserveAccRequest.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolByReserveAccRequest): Uint8Array {
    return QueryLiquidityPoolByReserveAccRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolByReserveAccRequest): QueryLiquidityPoolByReserveAccRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest",
      value: QueryLiquidityPoolByReserveAccRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolBatchRequest(): QueryLiquidityPoolBatchRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryLiquidityPoolBatchRequest = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest",
  encode(message: QueryLiquidityPoolBatchRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolBatchRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolBatchRequest>): QueryLiquidityPoolBatchRequest {
    const message = createBaseQueryLiquidityPoolBatchRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLiquidityPoolBatchRequestAmino): QueryLiquidityPoolBatchRequest {
    const message = createBaseQueryLiquidityPoolBatchRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolBatchRequest): QueryLiquidityPoolBatchRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolBatchRequestAminoMsg): QueryLiquidityPoolBatchRequest {
    return QueryLiquidityPoolBatchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolBatchRequestProtoMsg): QueryLiquidityPoolBatchRequest {
    return QueryLiquidityPoolBatchRequest.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolBatchRequest): Uint8Array {
    return QueryLiquidityPoolBatchRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolBatchRequest): QueryLiquidityPoolBatchRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchRequest",
      value: QueryLiquidityPoolBatchRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolBatchResponse(): QueryLiquidityPoolBatchResponse {
  return {
    batch: PoolBatch.fromPartial({})
  };
}
export const QueryLiquidityPoolBatchResponse = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse",
  encode(message: QueryLiquidityPoolBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batch !== undefined) {
      PoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = PoolBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolBatchResponse>): QueryLiquidityPoolBatchResponse {
    const message = createBaseQueryLiquidityPoolBatchResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? PoolBatch.fromPartial(object.batch) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidityPoolBatchResponseAmino): QueryLiquidityPoolBatchResponse {
    const message = createBaseQueryLiquidityPoolBatchResponse();
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = PoolBatch.fromAmino(object.batch);
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolBatchResponse): QueryLiquidityPoolBatchResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? PoolBatch.toAmino(message.batch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolBatchResponseAminoMsg): QueryLiquidityPoolBatchResponse {
    return QueryLiquidityPoolBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolBatchResponseProtoMsg): QueryLiquidityPoolBatchResponse {
    return QueryLiquidityPoolBatchResponse.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolBatchResponse): Uint8Array {
    return QueryLiquidityPoolBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolBatchResponse): QueryLiquidityPoolBatchResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolBatchResponse",
      value: QueryLiquidityPoolBatchResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolsRequest(): QueryLiquidityPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryLiquidityPoolsRequest = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsRequest",
  encode(message: QueryLiquidityPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolsRequest>): QueryLiquidityPoolsRequest {
    const message = createBaseQueryLiquidityPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidityPoolsRequestAmino): QueryLiquidityPoolsRequest {
    const message = createBaseQueryLiquidityPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolsRequest): QueryLiquidityPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolsRequestAminoMsg): QueryLiquidityPoolsRequest {
    return QueryLiquidityPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolsRequestProtoMsg): QueryLiquidityPoolsRequest {
    return QueryLiquidityPoolsRequest.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolsRequest): Uint8Array {
    return QueryLiquidityPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolsRequest): QueryLiquidityPoolsRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsRequest",
      value: QueryLiquidityPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidityPoolsResponse(): QueryLiquidityPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryLiquidityPoolsResponse = {
  typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsResponse",
  encode(message: QueryLiquidityPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidityPoolsResponse>): QueryLiquidityPoolsResponse {
    const message = createBaseQueryLiquidityPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLiquidityPoolsResponseAmino): QueryLiquidityPoolsResponse {
    const message = createBaseQueryLiquidityPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLiquidityPoolsResponse): QueryLiquidityPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidityPoolsResponseAminoMsg): QueryLiquidityPoolsResponse {
    return QueryLiquidityPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidityPoolsResponseProtoMsg): QueryLiquidityPoolsResponse {
    return QueryLiquidityPoolsResponse.decode(message.value);
  },
  toProto(message: QueryLiquidityPoolsResponse): Uint8Array {
    return QueryLiquidityPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidityPoolsResponse): QueryLiquidityPoolsResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryLiquidityPoolsResponse",
      value: QueryLiquidityPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/liquidity.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/liquidity.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchSwapMsgsRequest(): QueryPoolBatchSwapMsgsRequest {
  return {
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolBatchSwapMsgsRequest = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest",
  encode(message: QueryPoolBatchSwapMsgsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchSwapMsgsRequest>): QueryPoolBatchSwapMsgsRequest {
    const message = createBaseQueryPoolBatchSwapMsgsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchSwapMsgsRequestAmino): QueryPoolBatchSwapMsgsRequest {
    const message = createBaseQueryPoolBatchSwapMsgsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchSwapMsgsRequest): QueryPoolBatchSwapMsgsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchSwapMsgsRequestAminoMsg): QueryPoolBatchSwapMsgsRequest {
    return QueryPoolBatchSwapMsgsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchSwapMsgsRequestProtoMsg): QueryPoolBatchSwapMsgsRequest {
    return QueryPoolBatchSwapMsgsRequest.decode(message.value);
  },
  toProto(message: QueryPoolBatchSwapMsgsRequest): Uint8Array {
    return QueryPoolBatchSwapMsgsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchSwapMsgsRequest): QueryPoolBatchSwapMsgsRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest",
      value: QueryPoolBatchSwapMsgsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchSwapMsgRequest(): QueryPoolBatchSwapMsgRequest {
  return {
    poolId: BigInt(0),
    msgIndex: BigInt(0)
  };
}
export const QueryPoolBatchSwapMsgRequest = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest",
  encode(message: QueryPoolBatchSwapMsgRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.msgIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.msgIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchSwapMsgRequest>): QueryPoolBatchSwapMsgRequest {
    const message = createBaseQueryPoolBatchSwapMsgRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolBatchSwapMsgRequestAmino): QueryPoolBatchSwapMsgRequest {
    const message = createBaseQueryPoolBatchSwapMsgRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msgIndex = BigInt(object.msg_index);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchSwapMsgRequest): QueryPoolBatchSwapMsgRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchSwapMsgRequestAminoMsg): QueryPoolBatchSwapMsgRequest {
    return QueryPoolBatchSwapMsgRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchSwapMsgRequestProtoMsg): QueryPoolBatchSwapMsgRequest {
    return QueryPoolBatchSwapMsgRequest.decode(message.value);
  },
  toProto(message: QueryPoolBatchSwapMsgRequest): Uint8Array {
    return QueryPoolBatchSwapMsgRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchSwapMsgRequest): QueryPoolBatchSwapMsgRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgRequest",
      value: QueryPoolBatchSwapMsgRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchSwapMsgsResponse(): QueryPoolBatchSwapMsgsResponse {
  return {
    swaps: [],
    pagination: undefined
  };
}
export const QueryPoolBatchSwapMsgsResponse = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse",
  encode(message: QueryPoolBatchSwapMsgsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.swaps) {
      SwapMsgState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps.push(SwapMsgState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchSwapMsgsResponse>): QueryPoolBatchSwapMsgsResponse {
    const message = createBaseQueryPoolBatchSwapMsgsResponse();
    message.swaps = object.swaps?.map(e => SwapMsgState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchSwapMsgsResponseAmino): QueryPoolBatchSwapMsgsResponse {
    const message = createBaseQueryPoolBatchSwapMsgsResponse();
    message.swaps = object.swaps?.map(e => SwapMsgState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchSwapMsgsResponse): QueryPoolBatchSwapMsgsResponseAmino {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map(e => e ? SwapMsgState.toAmino(e) : undefined);
    } else {
      obj.swaps = message.swaps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchSwapMsgsResponseAminoMsg): QueryPoolBatchSwapMsgsResponse {
    return QueryPoolBatchSwapMsgsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchSwapMsgsResponseProtoMsg): QueryPoolBatchSwapMsgsResponse {
    return QueryPoolBatchSwapMsgsResponse.decode(message.value);
  },
  toProto(message: QueryPoolBatchSwapMsgsResponse): Uint8Array {
    return QueryPoolBatchSwapMsgsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchSwapMsgsResponse): QueryPoolBatchSwapMsgsResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse",
      value: QueryPoolBatchSwapMsgsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchSwapMsgResponse(): QueryPoolBatchSwapMsgResponse {
  return {
    swap: SwapMsgState.fromPartial({})
  };
}
export const QueryPoolBatchSwapMsgResponse = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse",
  encode(message: QueryPoolBatchSwapMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swap !== undefined) {
      SwapMsgState.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = SwapMsgState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchSwapMsgResponse>): QueryPoolBatchSwapMsgResponse {
    const message = createBaseQueryPoolBatchSwapMsgResponse();
    message.swap = object.swap !== undefined && object.swap !== null ? SwapMsgState.fromPartial(object.swap) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchSwapMsgResponseAmino): QueryPoolBatchSwapMsgResponse {
    const message = createBaseQueryPoolBatchSwapMsgResponse();
    if (object.swap !== undefined && object.swap !== null) {
      message.swap = SwapMsgState.fromAmino(object.swap);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchSwapMsgResponse): QueryPoolBatchSwapMsgResponseAmino {
    const obj: any = {};
    obj.swap = message.swap ? SwapMsgState.toAmino(message.swap) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchSwapMsgResponseAminoMsg): QueryPoolBatchSwapMsgResponse {
    return QueryPoolBatchSwapMsgResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchSwapMsgResponseProtoMsg): QueryPoolBatchSwapMsgResponse {
    return QueryPoolBatchSwapMsgResponse.decode(message.value);
  },
  toProto(message: QueryPoolBatchSwapMsgResponse): Uint8Array {
    return QueryPoolBatchSwapMsgResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchSwapMsgResponse): QueryPoolBatchSwapMsgResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchSwapMsgResponse",
      value: QueryPoolBatchSwapMsgResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchDepositMsgsRequest(): QueryPoolBatchDepositMsgsRequest {
  return {
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolBatchDepositMsgsRequest = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest",
  encode(message: QueryPoolBatchDepositMsgsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchDepositMsgsRequest>): QueryPoolBatchDepositMsgsRequest {
    const message = createBaseQueryPoolBatchDepositMsgsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchDepositMsgsRequestAmino): QueryPoolBatchDepositMsgsRequest {
    const message = createBaseQueryPoolBatchDepositMsgsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchDepositMsgsRequest): QueryPoolBatchDepositMsgsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchDepositMsgsRequestAminoMsg): QueryPoolBatchDepositMsgsRequest {
    return QueryPoolBatchDepositMsgsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchDepositMsgsRequestProtoMsg): QueryPoolBatchDepositMsgsRequest {
    return QueryPoolBatchDepositMsgsRequest.decode(message.value);
  },
  toProto(message: QueryPoolBatchDepositMsgsRequest): Uint8Array {
    return QueryPoolBatchDepositMsgsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchDepositMsgsRequest): QueryPoolBatchDepositMsgsRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest",
      value: QueryPoolBatchDepositMsgsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchDepositMsgRequest(): QueryPoolBatchDepositMsgRequest {
  return {
    poolId: BigInt(0),
    msgIndex: BigInt(0)
  };
}
export const QueryPoolBatchDepositMsgRequest = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest",
  encode(message: QueryPoolBatchDepositMsgRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.msgIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.msgIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchDepositMsgRequest>): QueryPoolBatchDepositMsgRequest {
    const message = createBaseQueryPoolBatchDepositMsgRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolBatchDepositMsgRequestAmino): QueryPoolBatchDepositMsgRequest {
    const message = createBaseQueryPoolBatchDepositMsgRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msgIndex = BigInt(object.msg_index);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchDepositMsgRequest): QueryPoolBatchDepositMsgRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchDepositMsgRequestAminoMsg): QueryPoolBatchDepositMsgRequest {
    return QueryPoolBatchDepositMsgRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchDepositMsgRequestProtoMsg): QueryPoolBatchDepositMsgRequest {
    return QueryPoolBatchDepositMsgRequest.decode(message.value);
  },
  toProto(message: QueryPoolBatchDepositMsgRequest): Uint8Array {
    return QueryPoolBatchDepositMsgRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchDepositMsgRequest): QueryPoolBatchDepositMsgRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgRequest",
      value: QueryPoolBatchDepositMsgRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchDepositMsgsResponse(): QueryPoolBatchDepositMsgsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryPoolBatchDepositMsgsResponse = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse",
  encode(message: QueryPoolBatchDepositMsgsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      DepositMsgState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(DepositMsgState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchDepositMsgsResponse>): QueryPoolBatchDepositMsgsResponse {
    const message = createBaseQueryPoolBatchDepositMsgsResponse();
    message.deposits = object.deposits?.map(e => DepositMsgState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchDepositMsgsResponseAmino): QueryPoolBatchDepositMsgsResponse {
    const message = createBaseQueryPoolBatchDepositMsgsResponse();
    message.deposits = object.deposits?.map(e => DepositMsgState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchDepositMsgsResponse): QueryPoolBatchDepositMsgsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? DepositMsgState.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchDepositMsgsResponseAminoMsg): QueryPoolBatchDepositMsgsResponse {
    return QueryPoolBatchDepositMsgsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchDepositMsgsResponseProtoMsg): QueryPoolBatchDepositMsgsResponse {
    return QueryPoolBatchDepositMsgsResponse.decode(message.value);
  },
  toProto(message: QueryPoolBatchDepositMsgsResponse): Uint8Array {
    return QueryPoolBatchDepositMsgsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchDepositMsgsResponse): QueryPoolBatchDepositMsgsResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse",
      value: QueryPoolBatchDepositMsgsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchDepositMsgResponse(): QueryPoolBatchDepositMsgResponse {
  return {
    deposit: DepositMsgState.fromPartial({})
  };
}
export const QueryPoolBatchDepositMsgResponse = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse",
  encode(message: QueryPoolBatchDepositMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      DepositMsgState.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = DepositMsgState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchDepositMsgResponse>): QueryPoolBatchDepositMsgResponse {
    const message = createBaseQueryPoolBatchDepositMsgResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? DepositMsgState.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchDepositMsgResponseAmino): QueryPoolBatchDepositMsgResponse {
    const message = createBaseQueryPoolBatchDepositMsgResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = DepositMsgState.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchDepositMsgResponse): QueryPoolBatchDepositMsgResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? DepositMsgState.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchDepositMsgResponseAminoMsg): QueryPoolBatchDepositMsgResponse {
    return QueryPoolBatchDepositMsgResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchDepositMsgResponseProtoMsg): QueryPoolBatchDepositMsgResponse {
    return QueryPoolBatchDepositMsgResponse.decode(message.value);
  },
  toProto(message: QueryPoolBatchDepositMsgResponse): Uint8Array {
    return QueryPoolBatchDepositMsgResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchDepositMsgResponse): QueryPoolBatchDepositMsgResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchDepositMsgResponse",
      value: QueryPoolBatchDepositMsgResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchWithdrawMsgsRequest(): QueryPoolBatchWithdrawMsgsRequest {
  return {
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPoolBatchWithdrawMsgsRequest = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest",
  encode(message: QueryPoolBatchWithdrawMsgsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchWithdrawMsgsRequest>): QueryPoolBatchWithdrawMsgsRequest {
    const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchWithdrawMsgsRequestAmino): QueryPoolBatchWithdrawMsgsRequest {
    const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchWithdrawMsgsRequest): QueryPoolBatchWithdrawMsgsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchWithdrawMsgsRequestAminoMsg): QueryPoolBatchWithdrawMsgsRequest {
    return QueryPoolBatchWithdrawMsgsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchWithdrawMsgsRequestProtoMsg): QueryPoolBatchWithdrawMsgsRequest {
    return QueryPoolBatchWithdrawMsgsRequest.decode(message.value);
  },
  toProto(message: QueryPoolBatchWithdrawMsgsRequest): Uint8Array {
    return QueryPoolBatchWithdrawMsgsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchWithdrawMsgsRequest): QueryPoolBatchWithdrawMsgsRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest",
      value: QueryPoolBatchWithdrawMsgsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchWithdrawMsgRequest(): QueryPoolBatchWithdrawMsgRequest {
  return {
    poolId: BigInt(0),
    msgIndex: BigInt(0)
  };
}
export const QueryPoolBatchWithdrawMsgRequest = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest",
  encode(message: QueryPoolBatchWithdrawMsgRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.msgIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.msgIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchWithdrawMsgRequest>): QueryPoolBatchWithdrawMsgRequest {
    const message = createBaseQueryPoolBatchWithdrawMsgRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolBatchWithdrawMsgRequestAmino): QueryPoolBatchWithdrawMsgRequest {
    const message = createBaseQueryPoolBatchWithdrawMsgRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msgIndex = BigInt(object.msg_index);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchWithdrawMsgRequest): QueryPoolBatchWithdrawMsgRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchWithdrawMsgRequestAminoMsg): QueryPoolBatchWithdrawMsgRequest {
    return QueryPoolBatchWithdrawMsgRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchWithdrawMsgRequestProtoMsg): QueryPoolBatchWithdrawMsgRequest {
    return QueryPoolBatchWithdrawMsgRequest.decode(message.value);
  },
  toProto(message: QueryPoolBatchWithdrawMsgRequest): Uint8Array {
    return QueryPoolBatchWithdrawMsgRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchWithdrawMsgRequest): QueryPoolBatchWithdrawMsgRequestProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest",
      value: QueryPoolBatchWithdrawMsgRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchWithdrawMsgsResponse(): QueryPoolBatchWithdrawMsgsResponse {
  return {
    withdraws: [],
    pagination: undefined
  };
}
export const QueryPoolBatchWithdrawMsgsResponse = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse",
  encode(message: QueryPoolBatchWithdrawMsgsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.withdraws) {
      WithdrawMsgState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdraws.push(WithdrawMsgState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchWithdrawMsgsResponse>): QueryPoolBatchWithdrawMsgsResponse {
    const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
    message.withdraws = object.withdraws?.map(e => WithdrawMsgState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchWithdrawMsgsResponseAmino): QueryPoolBatchWithdrawMsgsResponse {
    const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
    message.withdraws = object.withdraws?.map(e => WithdrawMsgState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchWithdrawMsgsResponse): QueryPoolBatchWithdrawMsgsResponseAmino {
    const obj: any = {};
    if (message.withdraws) {
      obj.withdraws = message.withdraws.map(e => e ? WithdrawMsgState.toAmino(e) : undefined);
    } else {
      obj.withdraws = message.withdraws;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchWithdrawMsgsResponseAminoMsg): QueryPoolBatchWithdrawMsgsResponse {
    return QueryPoolBatchWithdrawMsgsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchWithdrawMsgsResponseProtoMsg): QueryPoolBatchWithdrawMsgsResponse {
    return QueryPoolBatchWithdrawMsgsResponse.decode(message.value);
  },
  toProto(message: QueryPoolBatchWithdrawMsgsResponse): Uint8Array {
    return QueryPoolBatchWithdrawMsgsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchWithdrawMsgsResponse): QueryPoolBatchWithdrawMsgsResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse",
      value: QueryPoolBatchWithdrawMsgsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolBatchWithdrawMsgResponse(): QueryPoolBatchWithdrawMsgResponse {
  return {
    withdraw: WithdrawMsgState.fromPartial({})
  };
}
export const QueryPoolBatchWithdrawMsgResponse = {
  typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse",
  encode(message: QueryPoolBatchWithdrawMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdraw !== undefined) {
      WithdrawMsgState.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdraw = WithdrawMsgState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolBatchWithdrawMsgResponse>): QueryPoolBatchWithdrawMsgResponse {
    const message = createBaseQueryPoolBatchWithdrawMsgResponse();
    message.withdraw = object.withdraw !== undefined && object.withdraw !== null ? WithdrawMsgState.fromPartial(object.withdraw) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolBatchWithdrawMsgResponseAmino): QueryPoolBatchWithdrawMsgResponse {
    const message = createBaseQueryPoolBatchWithdrawMsgResponse();
    if (object.withdraw !== undefined && object.withdraw !== null) {
      message.withdraw = WithdrawMsgState.fromAmino(object.withdraw);
    }
    return message;
  },
  toAmino(message: QueryPoolBatchWithdrawMsgResponse): QueryPoolBatchWithdrawMsgResponseAmino {
    const obj: any = {};
    obj.withdraw = message.withdraw ? WithdrawMsgState.toAmino(message.withdraw) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolBatchWithdrawMsgResponseAminoMsg): QueryPoolBatchWithdrawMsgResponse {
    return QueryPoolBatchWithdrawMsgResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolBatchWithdrawMsgResponseProtoMsg): QueryPoolBatchWithdrawMsgResponse {
    return QueryPoolBatchWithdrawMsgResponse.decode(message.value);
  },
  toProto(message: QueryPoolBatchWithdrawMsgResponse): Uint8Array {
    return QueryPoolBatchWithdrawMsgResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolBatchWithdrawMsgResponse): QueryPoolBatchWithdrawMsgResponseProtoMsg {
    return {
      typeUrl: "/liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse",
      value: QueryPoolBatchWithdrawMsgResponse.encode(message).finish()
    };
  }
};