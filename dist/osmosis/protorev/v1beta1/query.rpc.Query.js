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
        this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
        this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
        this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
        this.getProtoRevStatisticsByPool = this.getProtoRevStatisticsByPool.bind(this);
        this.getProtoRevAllStatistics = this.getProtoRevAllStatistics.bind(this);
        this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevNumberOfTrades(request = {}) {
        const data = query_1.QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
        return promise.then(data => query_1.QueryGetProtoRevNumberOfTradesResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevProfitsByDenom(request) {
        const data = query_1.QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
        return promise.then(data => query_1.QueryGetProtoRevProfitsByDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevAllProfits(request = {}) {
        const data = query_1.QueryGetProtoRevAllProfitsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
        return promise.then(data => query_1.QueryGetProtoRevAllProfitsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevStatisticsByPool(request) {
        const data = query_1.QueryGetProtoRevStatisticsByPoolRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByPool", data);
        return promise.then(data => query_1.QueryGetProtoRevStatisticsByPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevAllStatistics(request = {}) {
        const data = query_1.QueryGetProtoRevAllStatisticsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllStatistics", data);
        return promise.then(data => query_1.QueryGetProtoRevAllStatisticsResponse.decode(new binary_1.BinaryReader(data)));
    }
    getProtoRevTokenPairArbRoutes(request = {}) {
        const data = query_1.QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
        return promise.then(data => query_1.QueryGetProtoRevTokenPairArbRoutesResponse.decode(new binary_1.BinaryReader(data)));
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
exports.createRpcQueryExtension = createRpcQueryExtension;
