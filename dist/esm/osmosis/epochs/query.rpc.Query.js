import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.epochInfos = this.epochInfos.bind(this);
        this.currentEpoch = this.currentEpoch.bind(this);
    }
    epochInfos(request = {}) {
        const data = QueryEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "EpochInfos", data);
        return promise.then(data => QueryEpochsInfoResponse.decode(new BinaryReader(data)));
    }
    currentEpoch(request) {
        const data = QueryCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.epochs.v1beta1.Query", "CurrentEpoch", data);
        return promise.then(data => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
