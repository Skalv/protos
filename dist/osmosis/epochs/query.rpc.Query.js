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
        this.epochInfos = this.epochInfos.bind(this);
        this.currentEpoch = this.currentEpoch.bind(this);
    }
    epochInfos(request = {}) {
        const data = query_1.QueryEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "EpochInfos", data);
        return promise.then(data => query_1.QueryEpochsInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    currentEpoch(request) {
        const data = query_1.QueryCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "CurrentEpoch", data);
        return promise.then(data => query_1.QueryCurrentEpochResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        epochInfos(request) {
            return queryService.epochInfos(request);
        },
        currentEpoch(request) {
            return queryService.currentEpoch(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
