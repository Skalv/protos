"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryLiquidityPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPools", data);
        return promise.then(data => query_1.QueryLiquidityPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidityPool(request) {
        const data = query_1.QueryLiquidityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPool", data);
        return promise.then(data => query_1.QueryLiquidityPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidityPoolByPoolCoinDenom(request) {
        const data = query_1.QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolByPoolCoinDenom", data);
        return promise.then(data => query_1.QueryLiquidityPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidityPoolByReserveAcc(request) {
        const data = query_1.QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolByReserveAcc", data);
        return promise.then(data => query_1.QueryLiquidityPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidityPoolBatch(request) {
        const data = query_1.QueryLiquidityPoolBatchRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "LiquidityPoolBatch", data);
        return promise.then(data => query_1.QueryLiquidityPoolBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolBatchSwapMsgs(request) {
        const data = query_1.QueryPoolBatchSwapMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchSwapMsgs", data);
        return promise.then(data => query_1.QueryPoolBatchSwapMsgsResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolBatchSwapMsg(request) {
        const data = query_1.QueryPoolBatchSwapMsgRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchSwapMsg", data);
        return promise.then(data => query_1.QueryPoolBatchSwapMsgResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolBatchDepositMsgs(request) {
        const data = query_1.QueryPoolBatchDepositMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchDepositMsgs", data);
        return promise.then(data => query_1.QueryPoolBatchDepositMsgsResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolBatchDepositMsg(request) {
        const data = query_1.QueryPoolBatchDepositMsgRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchDepositMsg", data);
        return promise.then(data => query_1.QueryPoolBatchDepositMsgResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolBatchWithdrawMsgs(request) {
        const data = query_1.QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchWithdrawMsgs", data);
        return promise.then(data => query_1.QueryPoolBatchWithdrawMsgsResponse.decode(new binary_1.BinaryReader(data)));
    }
    poolBatchWithdrawMsg(request) {
        const data = query_1.QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "PoolBatchWithdrawMsg", data);
        return promise.then(data => query_1.QueryPoolBatchWithdrawMsgResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
