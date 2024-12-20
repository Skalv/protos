import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryLiquidityPoolsRequest, QueryLiquidityPoolsResponse, QueryLiquidityPoolRequest, QueryLiquidityPoolResponse, QueryLiquidityPoolByPoolCoinDenomRequest, QueryLiquidityPoolByReserveAccRequest, QueryLiquidityPoolBatchRequest, QueryLiquidityPoolBatchResponse, QueryPoolBatchSwapMsgsRequest, QueryPoolBatchSwapMsgsResponse, QueryPoolBatchSwapMsgRequest, QueryPoolBatchSwapMsgResponse, QueryPoolBatchDepositMsgsRequest, QueryPoolBatchDepositMsgsResponse, QueryPoolBatchDepositMsgRequest, QueryPoolBatchDepositMsgResponse, QueryPoolBatchWithdrawMsgsRequest, QueryPoolBatchWithdrawMsgsResponse, QueryPoolBatchWithdrawMsgRequest, QueryPoolBatchWithdrawMsgResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC query service for the liquidity module. */
export interface Query {
    /** Get existing liquidity pools. */
    liquidityPools(request?: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    /** Get specific liquidity pool. */
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get specific liquidity pool corresponding to the pool_coin_denom. */
    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get specific liquidity pool corresponding to the reserve account. */
    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get the pool's current batch. */
    liquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse>;
    /** Get all swap messages in the pool's current batch. */
    poolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse>;
    /** Get a specific swap message in the pool's current batch. */
    poolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse>;
    /** Get all deposit messages in the pool's current batch. */
    poolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse>;
    /** Get a specific deposit message in the pool's current batch. */
    poolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse>;
    /** Get all withdraw messages in the pool's current batch. */
    poolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse>;
    /** Get a specific withdraw message in the pool's current batch. */
    poolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse>;
    /** Get all parameters of the liquidity module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    liquidityPools(request?: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse>;
    poolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse>;
    poolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse>;
    poolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse>;
    poolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse>;
    poolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse>;
    poolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    liquidityPools(request?: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse>;
    poolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse>;
    poolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse>;
    poolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse>;
    poolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse>;
    poolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse>;
    poolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
