import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.pools = this.pools.bind(this);
        this.numPools = this.numPools.bind(this);
        this.totalLiquidity = this.totalLiquidity.bind(this);
        this.poolsWithFilter = this.poolsWithFilter.bind(this);
        this.pool = this.pool.bind(this);
        this.poolType = this.poolType.bind(this);
        this.calcJoinPoolNoSwapShares = this.calcJoinPoolNoSwapShares.bind(this);
        this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
        this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
        this.poolParams = this.poolParams.bind(this);
        this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
        this.totalShares = this.totalShares.bind(this);
        this.spotPrice = this.spotPrice.bind(this);
        this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
        this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    }
    pools(request = {
        pagination: undefined
    }) {
        const data = QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pools", data);
        return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
    }
    numPools(request = {}) {
        const data = QueryNumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "NumPools", data);
        return promise.then(data => QueryNumPoolsResponse.decode(new BinaryReader(data)));
    }
    totalLiquidity(request = {}) {
        const data = QueryTotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalLiquidity", data);
        return promise.then(data => QueryTotalLiquidityResponse.decode(new BinaryReader(data)));
    }
    poolsWithFilter(request) {
        const data = QueryPoolsWithFilterRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolsWithFilter", data);
        return promise.then(data => QueryPoolsWithFilterResponse.decode(new BinaryReader(data)));
    }
    pool(request) {
        const data = QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pool", data);
        return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
    }
    poolType(request) {
        const data = QueryPoolTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolType", data);
        return promise.then(data => QueryPoolTypeResponse.decode(new BinaryReader(data)));
    }
    calcJoinPoolNoSwapShares(request) {
        const data = QueryCalcJoinPoolNoSwapSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolNoSwapShares", data);
        return promise.then(data => QueryCalcJoinPoolNoSwapSharesResponse.decode(new BinaryReader(data)));
    }
    calcJoinPoolShares(request) {
        const data = QueryCalcJoinPoolSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolShares", data);
        return promise.then(data => QueryCalcJoinPoolSharesResponse.decode(new BinaryReader(data)));
    }
    calcExitPoolCoinsFromShares(request) {
        const data = QueryCalcExitPoolCoinsFromSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcExitPoolCoinsFromShares", data);
        return promise.then(data => QueryCalcExitPoolCoinsFromSharesResponse.decode(new BinaryReader(data)));
    }
    poolParams(request) {
        const data = QueryPoolParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolParams", data);
        return promise.then(data => QueryPoolParamsResponse.decode(new BinaryReader(data)));
    }
    totalPoolLiquidity(request) {
        const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalPoolLiquidity", data);
        return promise.then(data => QueryTotalPoolLiquidityResponse.decode(new BinaryReader(data)));
    }
    totalShares(request) {
        const data = QueryTotalSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalShares", data);
        return promise.then(data => QueryTotalSharesResponse.decode(new BinaryReader(data)));
    }
    spotPrice(request) {
        const data = QuerySpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "SpotPrice", data);
        return promise.then(data => QuerySpotPriceResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountIn(request) {
        const data = QuerySwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountIn", data);
        return promise.then(data => QuerySwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountOut(request) {
        const data = QuerySwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountOut", data);
        return promise.then(data => QuerySwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        pools(request) {
            return queryService.pools(request);
        },
        numPools(request) {
            return queryService.numPools(request);
        },
        totalLiquidity(request) {
            return queryService.totalLiquidity(request);
        },
        poolsWithFilter(request) {
            return queryService.poolsWithFilter(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        poolType(request) {
            return queryService.poolType(request);
        },
        calcJoinPoolNoSwapShares(request) {
            return queryService.calcJoinPoolNoSwapShares(request);
        },
        calcJoinPoolShares(request) {
            return queryService.calcJoinPoolShares(request);
        },
        calcExitPoolCoinsFromShares(request) {
            return queryService.calcExitPoolCoinsFromShares(request);
        },
        poolParams(request) {
            return queryService.poolParams(request);
        },
        totalPoolLiquidity(request) {
            return queryService.totalPoolLiquidity(request);
        },
        totalShares(request) {
            return queryService.totalShares(request);
        },
        spotPrice(request) {
            return queryService.spotPrice(request);
        },
        estimateSwapExactAmountIn(request) {
            return queryService.estimateSwapExactAmountIn(request);
        },
        estimateSwapExactAmountOut(request) {
            return queryService.estimateSwapExactAmountOut(request);
        }
    };
};
