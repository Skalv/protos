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
        this.gaugeIds = this.gaugeIds.bind(this);
        this.distrInfo = this.distrInfo.bind(this);
        this.params = this.params.bind(this);
        this.lockableDurations = this.lockableDurations.bind(this);
        this.incentivizedPools = this.incentivizedPools.bind(this);
        this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
    }
    gaugeIds(request) {
        const data = query_1.QueryGaugeIdsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
        return promise.then(data => query_1.QueryGaugeIdsResponse.decode(new binary_1.BinaryReader(data)));
    }
    distrInfo(request = {}) {
        const data = query_1.QueryDistrInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
        return promise.then(data => query_1.QueryDistrInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    lockableDurations(request = {}) {
        const data = query_1.QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
        return promise.then(data => query_1.QueryLockableDurationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    incentivizedPools(request = {}) {
        const data = query_1.QueryIncentivizedPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
        return promise.then(data => query_1.QueryIncentivizedPoolsResponse.decode(new binary_1.BinaryReader(data)));
    }
    externalIncentiveGauges(request = {}) {
        const data = query_1.QueryExternalIncentiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
        return promise.then(data => query_1.QueryExternalIncentiveGaugesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        gaugeIds(request) {
            return queryService.gaugeIds(request);
        },
        distrInfo(request) {
            return queryService.distrInfo(request);
        },
        params(request) {
            return queryService.params(request);
        },
        lockableDurations(request) {
            return queryService.lockableDurations(request);
        },
        incentivizedPools(request) {
            return queryService.incentivizedPools(request);
        },
        externalIncentiveGauges(request) {
            return queryService.externalIncentiveGauges(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
