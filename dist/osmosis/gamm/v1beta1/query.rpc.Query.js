"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pools", data);
        return promise.then(data => query_1.QueryPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    numPools(request = {}) {
        const data = query_1.QueryNumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "NumPools", data);
        return promise.then(data => query_1.QueryNumPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalLiquidity(request = {}) {
        const data = query_1.QueryTotalLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalLiquidity", data);
        return promise.then(data => query_1.QueryTotalLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolsWithFilter(request) {
        const data = query_1.QueryPoolsWithFilterRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolsWithFilter", data);
        return promise.then(data => query_1.QueryPoolsWithFilterResponse.decode(new binary_1.BinaryReader(data)));
    }
    pool(request) {
        const data = query_1.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pool", data);
        return promise.then(data => query_1.QueryPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolType(request) {
        const data = query_1.QueryPoolTypeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolType", data);
        return promise.then(data => query_1.QueryPoolTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    calcJoinPoolNoSwapShares(request) {
        const data = query_1.QueryCalcJoinPoolNoSwapSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolNoSwapShares", data);
        return promise.then(data => query_1.QueryCalcJoinPoolNoSwapSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    calcJoinPoolShares(request) {
        const data = query_1.QueryCalcJoinPoolSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolShares", data);
        return promise.then(data => query_1.QueryCalcJoinPoolSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    calcExitPoolCoinsFromShares(request) {
        const data = query_1.QueryCalcExitPoolCoinsFromSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcExitPoolCoinsFromShares", data);
        return promise.then(data => query_1.QueryCalcExitPoolCoinsFromSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolParams(request) {
        const data = query_1.QueryPoolParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolParams", data);
        return promise.then(data => query_1.QueryPoolParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalPoolLiquidity(request) {
        const data = query_1.QueryTotalPoolLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalPoolLiquidity", data);
        return promise.then(data => query_1.QueryTotalPoolLiquidityResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalShares(request) {
        const data = query_1.QueryTotalSharesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalShares", data);
        return promise.then(data => query_1.QueryTotalSharesResponse.decode(new binary_1.BinaryReader(data)));
    }
    spotPrice(request) {
        const data = query_1.QuerySpotPriceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "SpotPrice", data);
        return promise.then(data => query_1.QuerySpotPriceResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountIn(request) {
        const data = query_1.QuerySwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountIn", data);
        return promise.then(data => query_1.QuerySwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountOut(request) {
        const data = query_1.QuerySwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountOut", data);
        return promise.then(data => query_1.QuerySwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
