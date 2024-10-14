//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidityPools = this.liquidityPools.bind(this);
    this.liquidityPool = this.liquidityPool.bind(this);
    this.liquidityPoolByPoolCoinDenom = this.liquidityPoolByPoolCoinDenom.bind(this);
    this.liquidityPoolByReserveAcc = this.liquidityPoolByReserveAcc.bind(this);
    this.liquidityPoolBatch = this.liquidityPoolBatch.bind(this);
    this.poolBatchSwapMsgs = this.poolBatchSwapMsgs.bind(this);
    this.poolBatchSwapMsg = this.poolBatchSwapMsg.bind(this);
    this.poolBatchDepositMsgs = this.poolBatchDepositMsgs.bind(this);
    this.poolBatchDepositMsg = this.poolBatchDepositMsg.bind(this);
    this.poolBatchWithdrawMsgs = this.poolBatchWithdrawMsgs.bind(this);
    this.poolBatchWithdrawMsg = this.poolBatchWithdrawMsg.bind(this);
    this.params = this.params.bind(this);
  }
  liquidityPools(request: QueryLiquidityPoolsRequest = {
    pagination: undefined
  }): Promise<QueryLiquidityPoolsResponse> {
    const data = QueryLiquidityPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPools", data);
    return promise.then(data => QueryLiquidityPoolsResponse.decode(new BinaryReader(data)));
  }
  liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPool", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new BinaryReader(data)));
  }
  liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolByPoolCoinDenom", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new BinaryReader(data)));
  }
  liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolByReserveAcc", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new BinaryReader(data)));
  }
  liquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse> {
    const data = QueryLiquidityPoolBatchRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolBatch", data);
    return promise.then(data => QueryLiquidityPoolBatchResponse.decode(new BinaryReader(data)));
  }
  poolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse> {
    const data = QueryPoolBatchSwapMsgsRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchSwapMsgs", data);
    return promise.then(data => QueryPoolBatchSwapMsgsResponse.decode(new BinaryReader(data)));
  }
  poolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse> {
    const data = QueryPoolBatchSwapMsgRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchSwapMsg", data);
    return promise.then(data => QueryPoolBatchSwapMsgResponse.decode(new BinaryReader(data)));
  }
  poolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse> {
    const data = QueryPoolBatchDepositMsgsRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchDepositMsgs", data);
    return promise.then(data => QueryPoolBatchDepositMsgsResponse.decode(new BinaryReader(data)));
  }
  poolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse> {
    const data = QueryPoolBatchDepositMsgRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchDepositMsg", data);
    return promise.then(data => QueryPoolBatchDepositMsgResponse.decode(new BinaryReader(data)));
  }
  poolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse> {
    const data = QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchWithdrawMsgs", data);
    return promise.then(data => QueryPoolBatchWithdrawMsgsResponse.decode(new BinaryReader(data)));
  }
  poolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse> {
    const data = QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchWithdrawMsg", data);
    return promise.then(data => QueryPoolBatchWithdrawMsgResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("liquidity.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    liquidityPools(request?: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse> {
      return queryService.liquidityPools(request);
    },
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
      return queryService.liquidityPool(request);
    },
    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse> {
      return queryService.liquidityPoolByPoolCoinDenom(request);
    },
    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse> {
      return queryService.liquidityPoolByReserveAcc(request);
    },
    liquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse> {
      return queryService.liquidityPoolBatch(request);
    },
    poolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse> {
      return queryService.poolBatchSwapMsgs(request);
    },
    poolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse> {
      return queryService.poolBatchSwapMsg(request);
    },
    poolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse> {
      return queryService.poolBatchDepositMsgs(request);
    },
    poolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse> {
      return queryService.poolBatchDepositMsg(request);
    },
    poolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse> {
      return queryService.poolBatchWithdrawMsgs(request);
    },
    poolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse> {
      return queryService.poolBatchWithdrawMsg(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};