import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryLiquidityPoolsRequest, QueryLiquidityPoolsResponse, QueryLiquidityPoolRequest, QueryLiquidityPoolResponse, QueryLiquidityPoolByPoolCoinDenomRequest, QueryLiquidityPoolByReserveAccRequest, QueryLiquidityPoolBatchRequest, QueryLiquidityPoolBatchResponse, QueryPoolBatchSwapMsgsRequest, QueryPoolBatchSwapMsgsResponse, QueryPoolBatchSwapMsgRequest, QueryPoolBatchSwapMsgResponse, QueryPoolBatchDepositMsgsRequest, QueryPoolBatchDepositMsgsResponse, QueryPoolBatchDepositMsgRequest, QueryPoolBatchDepositMsgResponse, QueryPoolBatchWithdrawMsgsRequest, QueryPoolBatchWithdrawMsgsResponse, QueryPoolBatchWithdrawMsgRequest, QueryPoolBatchWithdrawMsgResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
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
    liquidityPools(request = {
        pagination: undefined
    }) {
        const data = QueryLiquidityPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPools", data);
        return promise.then(data => QueryLiquidityPoolsResponse.decode(new BinaryReader(data)));
    }
    liquidityPool(request) {
        const data = QueryLiquidityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPool", data);
        return promise.then(data => QueryLiquidityPoolResponse.decode(new BinaryReader(data)));
    }
    liquidityPoolByPoolCoinDenom(request) {
        const data = QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolByPoolCoinDenom", data);
        return promise.then(data => QueryLiquidityPoolResponse.decode(new BinaryReader(data)));
    }
    liquidityPoolByReserveAcc(request) {
        const data = QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolByReserveAcc", data);
        return promise.then(data => QueryLiquidityPoolResponse.decode(new BinaryReader(data)));
    }
    liquidityPoolBatch(request) {
        const data = QueryLiquidityPoolBatchRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolBatch", data);
        return promise.then(data => QueryLiquidityPoolBatchResponse.decode(new BinaryReader(data)));
    }
    poolBatchSwapMsgs(request) {
        const data = QueryPoolBatchSwapMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchSwapMsgs", data);
        return promise.then(data => QueryPoolBatchSwapMsgsResponse.decode(new BinaryReader(data)));
    }
    poolBatchSwapMsg(request) {
        const data = QueryPoolBatchSwapMsgRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchSwapMsg", data);
        return promise.then(data => QueryPoolBatchSwapMsgResponse.decode(new BinaryReader(data)));
    }
    poolBatchDepositMsgs(request) {
        const data = QueryPoolBatchDepositMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchDepositMsgs", data);
        return promise.then(data => QueryPoolBatchDepositMsgsResponse.decode(new BinaryReader(data)));
    }
    poolBatchDepositMsg(request) {
        const data = QueryPoolBatchDepositMsgRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchDepositMsg", data);
        return promise.then(data => QueryPoolBatchDepositMsgResponse.decode(new BinaryReader(data)));
    }
    poolBatchWithdrawMsgs(request) {
        const data = QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchWithdrawMsgs", data);
        return promise.then(data => QueryPoolBatchWithdrawMsgsResponse.decode(new BinaryReader(data)));
    }
    poolBatchWithdrawMsg(request) {
        const data = QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchWithdrawMsg", data);
        return promise.then(data => QueryPoolBatchWithdrawMsgResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        liquidityPools(request) {
            return queryService.liquidityPools(request);
        },
        liquidityPool(request) {
            return queryService.liquidityPool(request);
        },
        liquidityPoolByPoolCoinDenom(request) {
            return queryService.liquidityPoolByPoolCoinDenom(request);
        },
        liquidityPoolByReserveAcc(request) {
            return queryService.liquidityPoolByReserveAcc(request);
        },
        liquidityPoolBatch(request) {
            return queryService.liquidityPoolBatch(request);
        },
        poolBatchSwapMsgs(request) {
            return queryService.poolBatchSwapMsgs(request);
        },
        poolBatchSwapMsg(request) {
            return queryService.poolBatchSwapMsg(request);
        },
        poolBatchDepositMsgs(request) {
            return queryService.poolBatchDepositMsgs(request);
        },
        poolBatchDepositMsg(request) {
            return queryService.poolBatchDepositMsg(request);
        },
        poolBatchWithdrawMsgs(request) {
            return queryService.poolBatchWithdrawMsgs(request);
        },
        poolBatchWithdrawMsg(request) {
            return queryService.poolBatchWithdrawMsg(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
