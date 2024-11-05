import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, NumPoolsRequest, NumPoolsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
        this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
        this.numPools = this.numPools.bind(this);
    }
    params(request = {}) {
        const data = ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "Params", data);
        return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountIn(request) {
        const data = EstimateSwapExactAmountInRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "EstimateSwapExactAmountIn", data);
        return promise.then(data => EstimateSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    estimateSwapExactAmountOut(request) {
        const data = EstimateSwapExactAmountOutRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "EstimateSwapExactAmountOut", data);
        return promise.then(data => EstimateSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
    numPools(request = {}) {
        const data = NumPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Query", "NumPools", data);
        return promise.then(data => NumPoolsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
