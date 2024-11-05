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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/liquidity.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/liquidity.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryLiquidityPoolRequest: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolRequest;
    fromPartial(object: Partial<QueryLiquidityPoolRequest>): QueryLiquidityPoolRequest;
    fromAmino(object: QueryLiquidityPoolRequestAmino): QueryLiquidityPoolRequest;
    toAmino(message: QueryLiquidityPoolRequest): QueryLiquidityPoolRequestAmino;
    fromAminoMsg(object: QueryLiquidityPoolRequestAminoMsg): QueryLiquidityPoolRequest;
    fromProtoMsg(message: QueryLiquidityPoolRequestProtoMsg): QueryLiquidityPoolRequest;
    toProto(message: QueryLiquidityPoolRequest): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolRequest): QueryLiquidityPoolRequestProtoMsg;
};
export declare const QueryLiquidityPoolResponse: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolResponse;
    fromPartial(object: Partial<QueryLiquidityPoolResponse>): QueryLiquidityPoolResponse;
    fromAmino(object: QueryLiquidityPoolResponseAmino): QueryLiquidityPoolResponse;
    toAmino(message: QueryLiquidityPoolResponse): QueryLiquidityPoolResponseAmino;
    fromAminoMsg(object: QueryLiquidityPoolResponseAminoMsg): QueryLiquidityPoolResponse;
    fromProtoMsg(message: QueryLiquidityPoolResponseProtoMsg): QueryLiquidityPoolResponse;
    toProto(message: QueryLiquidityPoolResponse): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolResponse): QueryLiquidityPoolResponseProtoMsg;
};
export declare const QueryLiquidityPoolByPoolCoinDenomRequest: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolByPoolCoinDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolByPoolCoinDenomRequest;
    fromPartial(object: Partial<QueryLiquidityPoolByPoolCoinDenomRequest>): QueryLiquidityPoolByPoolCoinDenomRequest;
    fromAmino(object: QueryLiquidityPoolByPoolCoinDenomRequestAmino): QueryLiquidityPoolByPoolCoinDenomRequest;
    toAmino(message: QueryLiquidityPoolByPoolCoinDenomRequest): QueryLiquidityPoolByPoolCoinDenomRequestAmino;
    fromAminoMsg(object: QueryLiquidityPoolByPoolCoinDenomRequestAminoMsg): QueryLiquidityPoolByPoolCoinDenomRequest;
    fromProtoMsg(message: QueryLiquidityPoolByPoolCoinDenomRequestProtoMsg): QueryLiquidityPoolByPoolCoinDenomRequest;
    toProto(message: QueryLiquidityPoolByPoolCoinDenomRequest): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolByPoolCoinDenomRequest): QueryLiquidityPoolByPoolCoinDenomRequestProtoMsg;
};
export declare const QueryLiquidityPoolByReserveAccRequest: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolByReserveAccRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolByReserveAccRequest;
    fromPartial(object: Partial<QueryLiquidityPoolByReserveAccRequest>): QueryLiquidityPoolByReserveAccRequest;
    fromAmino(object: QueryLiquidityPoolByReserveAccRequestAmino): QueryLiquidityPoolByReserveAccRequest;
    toAmino(message: QueryLiquidityPoolByReserveAccRequest): QueryLiquidityPoolByReserveAccRequestAmino;
    fromAminoMsg(object: QueryLiquidityPoolByReserveAccRequestAminoMsg): QueryLiquidityPoolByReserveAccRequest;
    fromProtoMsg(message: QueryLiquidityPoolByReserveAccRequestProtoMsg): QueryLiquidityPoolByReserveAccRequest;
    toProto(message: QueryLiquidityPoolByReserveAccRequest): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolByReserveAccRequest): QueryLiquidityPoolByReserveAccRequestProtoMsg;
};
export declare const QueryLiquidityPoolBatchRequest: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolBatchRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolBatchRequest;
    fromPartial(object: Partial<QueryLiquidityPoolBatchRequest>): QueryLiquidityPoolBatchRequest;
    fromAmino(object: QueryLiquidityPoolBatchRequestAmino): QueryLiquidityPoolBatchRequest;
    toAmino(message: QueryLiquidityPoolBatchRequest): QueryLiquidityPoolBatchRequestAmino;
    fromAminoMsg(object: QueryLiquidityPoolBatchRequestAminoMsg): QueryLiquidityPoolBatchRequest;
    fromProtoMsg(message: QueryLiquidityPoolBatchRequestProtoMsg): QueryLiquidityPoolBatchRequest;
    toProto(message: QueryLiquidityPoolBatchRequest): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolBatchRequest): QueryLiquidityPoolBatchRequestProtoMsg;
};
export declare const QueryLiquidityPoolBatchResponse: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolBatchResponse;
    fromPartial(object: Partial<QueryLiquidityPoolBatchResponse>): QueryLiquidityPoolBatchResponse;
    fromAmino(object: QueryLiquidityPoolBatchResponseAmino): QueryLiquidityPoolBatchResponse;
    toAmino(message: QueryLiquidityPoolBatchResponse): QueryLiquidityPoolBatchResponseAmino;
    fromAminoMsg(object: QueryLiquidityPoolBatchResponseAminoMsg): QueryLiquidityPoolBatchResponse;
    fromProtoMsg(message: QueryLiquidityPoolBatchResponseProtoMsg): QueryLiquidityPoolBatchResponse;
    toProto(message: QueryLiquidityPoolBatchResponse): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolBatchResponse): QueryLiquidityPoolBatchResponseProtoMsg;
};
export declare const QueryLiquidityPoolsRequest: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolsRequest;
    fromPartial(object: Partial<QueryLiquidityPoolsRequest>): QueryLiquidityPoolsRequest;
    fromAmino(object: QueryLiquidityPoolsRequestAmino): QueryLiquidityPoolsRequest;
    toAmino(message: QueryLiquidityPoolsRequest): QueryLiquidityPoolsRequestAmino;
    fromAminoMsg(object: QueryLiquidityPoolsRequestAminoMsg): QueryLiquidityPoolsRequest;
    fromProtoMsg(message: QueryLiquidityPoolsRequestProtoMsg): QueryLiquidityPoolsRequest;
    toProto(message: QueryLiquidityPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolsRequest): QueryLiquidityPoolsRequestProtoMsg;
};
export declare const QueryLiquidityPoolsResponse: {
    typeUrl: string;
    encode(message: QueryLiquidityPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityPoolsResponse;
    fromPartial(object: Partial<QueryLiquidityPoolsResponse>): QueryLiquidityPoolsResponse;
    fromAmino(object: QueryLiquidityPoolsResponseAmino): QueryLiquidityPoolsResponse;
    toAmino(message: QueryLiquidityPoolsResponse): QueryLiquidityPoolsResponseAmino;
    fromAminoMsg(object: QueryLiquidityPoolsResponseAminoMsg): QueryLiquidityPoolsResponse;
    fromProtoMsg(message: QueryLiquidityPoolsResponseProtoMsg): QueryLiquidityPoolsResponse;
    toProto(message: QueryLiquidityPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryLiquidityPoolsResponse): QueryLiquidityPoolsResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryPoolBatchSwapMsgsRequest: {
    typeUrl: string;
    encode(message: QueryPoolBatchSwapMsgsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgsRequest;
    fromPartial(object: Partial<QueryPoolBatchSwapMsgsRequest>): QueryPoolBatchSwapMsgsRequest;
    fromAmino(object: QueryPoolBatchSwapMsgsRequestAmino): QueryPoolBatchSwapMsgsRequest;
    toAmino(message: QueryPoolBatchSwapMsgsRequest): QueryPoolBatchSwapMsgsRequestAmino;
    fromAminoMsg(object: QueryPoolBatchSwapMsgsRequestAminoMsg): QueryPoolBatchSwapMsgsRequest;
    fromProtoMsg(message: QueryPoolBatchSwapMsgsRequestProtoMsg): QueryPoolBatchSwapMsgsRequest;
    toProto(message: QueryPoolBatchSwapMsgsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolBatchSwapMsgsRequest): QueryPoolBatchSwapMsgsRequestProtoMsg;
};
export declare const QueryPoolBatchSwapMsgRequest: {
    typeUrl: string;
    encode(message: QueryPoolBatchSwapMsgRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgRequest;
    fromPartial(object: Partial<QueryPoolBatchSwapMsgRequest>): QueryPoolBatchSwapMsgRequest;
    fromAmino(object: QueryPoolBatchSwapMsgRequestAmino): QueryPoolBatchSwapMsgRequest;
    toAmino(message: QueryPoolBatchSwapMsgRequest): QueryPoolBatchSwapMsgRequestAmino;
    fromAminoMsg(object: QueryPoolBatchSwapMsgRequestAminoMsg): QueryPoolBatchSwapMsgRequest;
    fromProtoMsg(message: QueryPoolBatchSwapMsgRequestProtoMsg): QueryPoolBatchSwapMsgRequest;
    toProto(message: QueryPoolBatchSwapMsgRequest): Uint8Array;
    toProtoMsg(message: QueryPoolBatchSwapMsgRequest): QueryPoolBatchSwapMsgRequestProtoMsg;
};
export declare const QueryPoolBatchSwapMsgsResponse: {
    typeUrl: string;
    encode(message: QueryPoolBatchSwapMsgsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgsResponse;
    fromPartial(object: Partial<QueryPoolBatchSwapMsgsResponse>): QueryPoolBatchSwapMsgsResponse;
    fromAmino(object: QueryPoolBatchSwapMsgsResponseAmino): QueryPoolBatchSwapMsgsResponse;
    toAmino(message: QueryPoolBatchSwapMsgsResponse): QueryPoolBatchSwapMsgsResponseAmino;
    fromAminoMsg(object: QueryPoolBatchSwapMsgsResponseAminoMsg): QueryPoolBatchSwapMsgsResponse;
    fromProtoMsg(message: QueryPoolBatchSwapMsgsResponseProtoMsg): QueryPoolBatchSwapMsgsResponse;
    toProto(message: QueryPoolBatchSwapMsgsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolBatchSwapMsgsResponse): QueryPoolBatchSwapMsgsResponseProtoMsg;
};
export declare const QueryPoolBatchSwapMsgResponse: {
    typeUrl: string;
    encode(message: QueryPoolBatchSwapMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchSwapMsgResponse;
    fromPartial(object: Partial<QueryPoolBatchSwapMsgResponse>): QueryPoolBatchSwapMsgResponse;
    fromAmino(object: QueryPoolBatchSwapMsgResponseAmino): QueryPoolBatchSwapMsgResponse;
    toAmino(message: QueryPoolBatchSwapMsgResponse): QueryPoolBatchSwapMsgResponseAmino;
    fromAminoMsg(object: QueryPoolBatchSwapMsgResponseAminoMsg): QueryPoolBatchSwapMsgResponse;
    fromProtoMsg(message: QueryPoolBatchSwapMsgResponseProtoMsg): QueryPoolBatchSwapMsgResponse;
    toProto(message: QueryPoolBatchSwapMsgResponse): Uint8Array;
    toProtoMsg(message: QueryPoolBatchSwapMsgResponse): QueryPoolBatchSwapMsgResponseProtoMsg;
};
export declare const QueryPoolBatchDepositMsgsRequest: {
    typeUrl: string;
    encode(message: QueryPoolBatchDepositMsgsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgsRequest;
    fromPartial(object: Partial<QueryPoolBatchDepositMsgsRequest>): QueryPoolBatchDepositMsgsRequest;
    fromAmino(object: QueryPoolBatchDepositMsgsRequestAmino): QueryPoolBatchDepositMsgsRequest;
    toAmino(message: QueryPoolBatchDepositMsgsRequest): QueryPoolBatchDepositMsgsRequestAmino;
    fromAminoMsg(object: QueryPoolBatchDepositMsgsRequestAminoMsg): QueryPoolBatchDepositMsgsRequest;
    fromProtoMsg(message: QueryPoolBatchDepositMsgsRequestProtoMsg): QueryPoolBatchDepositMsgsRequest;
    toProto(message: QueryPoolBatchDepositMsgsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolBatchDepositMsgsRequest): QueryPoolBatchDepositMsgsRequestProtoMsg;
};
export declare const QueryPoolBatchDepositMsgRequest: {
    typeUrl: string;
    encode(message: QueryPoolBatchDepositMsgRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgRequest;
    fromPartial(object: Partial<QueryPoolBatchDepositMsgRequest>): QueryPoolBatchDepositMsgRequest;
    fromAmino(object: QueryPoolBatchDepositMsgRequestAmino): QueryPoolBatchDepositMsgRequest;
    toAmino(message: QueryPoolBatchDepositMsgRequest): QueryPoolBatchDepositMsgRequestAmino;
    fromAminoMsg(object: QueryPoolBatchDepositMsgRequestAminoMsg): QueryPoolBatchDepositMsgRequest;
    fromProtoMsg(message: QueryPoolBatchDepositMsgRequestProtoMsg): QueryPoolBatchDepositMsgRequest;
    toProto(message: QueryPoolBatchDepositMsgRequest): Uint8Array;
    toProtoMsg(message: QueryPoolBatchDepositMsgRequest): QueryPoolBatchDepositMsgRequestProtoMsg;
};
export declare const QueryPoolBatchDepositMsgsResponse: {
    typeUrl: string;
    encode(message: QueryPoolBatchDepositMsgsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgsResponse;
    fromPartial(object: Partial<QueryPoolBatchDepositMsgsResponse>): QueryPoolBatchDepositMsgsResponse;
    fromAmino(object: QueryPoolBatchDepositMsgsResponseAmino): QueryPoolBatchDepositMsgsResponse;
    toAmino(message: QueryPoolBatchDepositMsgsResponse): QueryPoolBatchDepositMsgsResponseAmino;
    fromAminoMsg(object: QueryPoolBatchDepositMsgsResponseAminoMsg): QueryPoolBatchDepositMsgsResponse;
    fromProtoMsg(message: QueryPoolBatchDepositMsgsResponseProtoMsg): QueryPoolBatchDepositMsgsResponse;
    toProto(message: QueryPoolBatchDepositMsgsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolBatchDepositMsgsResponse): QueryPoolBatchDepositMsgsResponseProtoMsg;
};
export declare const QueryPoolBatchDepositMsgResponse: {
    typeUrl: string;
    encode(message: QueryPoolBatchDepositMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchDepositMsgResponse;
    fromPartial(object: Partial<QueryPoolBatchDepositMsgResponse>): QueryPoolBatchDepositMsgResponse;
    fromAmino(object: QueryPoolBatchDepositMsgResponseAmino): QueryPoolBatchDepositMsgResponse;
    toAmino(message: QueryPoolBatchDepositMsgResponse): QueryPoolBatchDepositMsgResponseAmino;
    fromAminoMsg(object: QueryPoolBatchDepositMsgResponseAminoMsg): QueryPoolBatchDepositMsgResponse;
    fromProtoMsg(message: QueryPoolBatchDepositMsgResponseProtoMsg): QueryPoolBatchDepositMsgResponse;
    toProto(message: QueryPoolBatchDepositMsgResponse): Uint8Array;
    toProtoMsg(message: QueryPoolBatchDepositMsgResponse): QueryPoolBatchDepositMsgResponseProtoMsg;
};
export declare const QueryPoolBatchWithdrawMsgsRequest: {
    typeUrl: string;
    encode(message: QueryPoolBatchWithdrawMsgsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgsRequest;
    fromPartial(object: Partial<QueryPoolBatchWithdrawMsgsRequest>): QueryPoolBatchWithdrawMsgsRequest;
    fromAmino(object: QueryPoolBatchWithdrawMsgsRequestAmino): QueryPoolBatchWithdrawMsgsRequest;
    toAmino(message: QueryPoolBatchWithdrawMsgsRequest): QueryPoolBatchWithdrawMsgsRequestAmino;
    fromAminoMsg(object: QueryPoolBatchWithdrawMsgsRequestAminoMsg): QueryPoolBatchWithdrawMsgsRequest;
    fromProtoMsg(message: QueryPoolBatchWithdrawMsgsRequestProtoMsg): QueryPoolBatchWithdrawMsgsRequest;
    toProto(message: QueryPoolBatchWithdrawMsgsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolBatchWithdrawMsgsRequest): QueryPoolBatchWithdrawMsgsRequestProtoMsg;
};
export declare const QueryPoolBatchWithdrawMsgRequest: {
    typeUrl: string;
    encode(message: QueryPoolBatchWithdrawMsgRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgRequest;
    fromPartial(object: Partial<QueryPoolBatchWithdrawMsgRequest>): QueryPoolBatchWithdrawMsgRequest;
    fromAmino(object: QueryPoolBatchWithdrawMsgRequestAmino): QueryPoolBatchWithdrawMsgRequest;
    toAmino(message: QueryPoolBatchWithdrawMsgRequest): QueryPoolBatchWithdrawMsgRequestAmino;
    fromAminoMsg(object: QueryPoolBatchWithdrawMsgRequestAminoMsg): QueryPoolBatchWithdrawMsgRequest;
    fromProtoMsg(message: QueryPoolBatchWithdrawMsgRequestProtoMsg): QueryPoolBatchWithdrawMsgRequest;
    toProto(message: QueryPoolBatchWithdrawMsgRequest): Uint8Array;
    toProtoMsg(message: QueryPoolBatchWithdrawMsgRequest): QueryPoolBatchWithdrawMsgRequestProtoMsg;
};
export declare const QueryPoolBatchWithdrawMsgsResponse: {
    typeUrl: string;
    encode(message: QueryPoolBatchWithdrawMsgsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgsResponse;
    fromPartial(object: Partial<QueryPoolBatchWithdrawMsgsResponse>): QueryPoolBatchWithdrawMsgsResponse;
    fromAmino(object: QueryPoolBatchWithdrawMsgsResponseAmino): QueryPoolBatchWithdrawMsgsResponse;
    toAmino(message: QueryPoolBatchWithdrawMsgsResponse): QueryPoolBatchWithdrawMsgsResponseAmino;
    fromAminoMsg(object: QueryPoolBatchWithdrawMsgsResponseAminoMsg): QueryPoolBatchWithdrawMsgsResponse;
    fromProtoMsg(message: QueryPoolBatchWithdrawMsgsResponseProtoMsg): QueryPoolBatchWithdrawMsgsResponse;
    toProto(message: QueryPoolBatchWithdrawMsgsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolBatchWithdrawMsgsResponse): QueryPoolBatchWithdrawMsgsResponseProtoMsg;
};
export declare const QueryPoolBatchWithdrawMsgResponse: {
    typeUrl: string;
    encode(message: QueryPoolBatchWithdrawMsgResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgResponse;
    fromPartial(object: Partial<QueryPoolBatchWithdrawMsgResponse>): QueryPoolBatchWithdrawMsgResponse;
    fromAmino(object: QueryPoolBatchWithdrawMsgResponseAmino): QueryPoolBatchWithdrawMsgResponse;
    toAmino(message: QueryPoolBatchWithdrawMsgResponse): QueryPoolBatchWithdrawMsgResponseAmino;
    fromAminoMsg(object: QueryPoolBatchWithdrawMsgResponseAminoMsg): QueryPoolBatchWithdrawMsgResponse;
    fromProtoMsg(message: QueryPoolBatchWithdrawMsgResponseProtoMsg): QueryPoolBatchWithdrawMsgResponse;
    toProto(message: QueryPoolBatchWithdrawMsgResponse): Uint8Array;
    toProtoMsg(message: QueryPoolBatchWithdrawMsgResponse): QueryPoolBatchWithdrawMsgResponseProtoMsg;
};
