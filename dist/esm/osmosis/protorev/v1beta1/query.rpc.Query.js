import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponse, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
        this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
        this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
        this.getProtoRevStatisticsByPool = this.getProtoRevStatisticsByPool.bind(this);
        this.getProtoRevAllStatistics = this.getProtoRevAllStatistics.bind(this);
        this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    getProtoRevNumberOfTrades(request = {}) {
        const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
        return promise.then(data => QueryGetProtoRevNumberOfTradesResponse.decode(new BinaryReader(data)));
    }
    getProtoRevProfitsByDenom(request) {
        const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
        return promise.then(data => QueryGetProtoRevProfitsByDenomResponse.decode(new BinaryReader(data)));
    }
    getProtoRevAllProfits(request = {}) {
        const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
        return promise.then(data => QueryGetProtoRevAllProfitsResponse.decode(new BinaryReader(data)));
    }
    getProtoRevStatisticsByPool(request) {
        const data = QueryGetProtoRevStatisticsByPoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByPool", data);
        return promise.then(data => QueryGetProtoRevStatisticsByPoolResponse.decode(new BinaryReader(data)));
    }
    getProtoRevAllStatistics(request = {}) {
        const data = QueryGetProtoRevAllStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllStatistics", data);
        return promise.then(data => QueryGetProtoRevAllStatisticsResponse.decode(new BinaryReader(data)));
    }
    getProtoRevTokenPairArbRoutes(request = {}) {
        const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
        return promise.then(data => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        getProtoRevNumberOfTrades(request) {
            return queryService.getProtoRevNumberOfTrades(request);
        },
        getProtoRevProfitsByDenom(request) {
            return queryService.getProtoRevProfitsByDenom(request);
        },
        getProtoRevAllProfits(request) {
            return queryService.getProtoRevAllProfits(request);
        },
        getProtoRevStatisticsByPool(request) {
            return queryService.getProtoRevStatisticsByPool(request);
        },
        getProtoRevAllStatistics(request) {
            return queryService.getProtoRevAllStatistics(request);
        },
        getProtoRevTokenPairArbRoutes(request) {
            return queryService.getProtoRevTokenPairArbRoutes(request);
        }
    };
};
