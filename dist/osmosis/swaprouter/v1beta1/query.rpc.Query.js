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
        this.params = this.params.bind(this);
        this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
        this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
        this.numPools = this.numPools.bind(this);
    }
    params(request = {}) {
        const data = query_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.ParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountIn(request) {
        const data = query_1.EstimateSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "EstimateSwapExactAmountIn", data);
        return promise.then(data => query_1.EstimateSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimateSwapExactAmountOut(request) {
        const data = query_1.EstimateSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "EstimateSwapExactAmountOut", data);
        return promise.then(data => query_1.EstimateSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    numPools(request = {}) {
        const data = query_1.NumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "NumPools", data);
        return promise.then(data => query_1.NumPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        estimateSwapExactAmountIn(request) {
            return queryService.estimateSwapExactAmountIn(request);
        },
        estimateSwapExactAmountOut(request) {
            return queryService.estimateSwapExactAmountOut(request);
        },
        numPools(request) {
            return queryService.numPools(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
