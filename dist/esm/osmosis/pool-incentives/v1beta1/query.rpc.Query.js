import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryGaugeIdsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
        return promise.then(data => QueryGaugeIdsResponse.decode(new BinaryReader(data)));
    }
    distrInfo(request = {}) {
        const data = QueryDistrInfoRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
        return promise.then(data => QueryDistrInfoResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    lockableDurations(request = {}) {
        const data = QueryLockableDurationsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
        return promise.then(data => QueryLockableDurationsResponse.decode(new BinaryReader(data)));
    }
    incentivizedPools(request = {}) {
        const data = QueryIncentivizedPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
        return promise.then(data => QueryIncentivizedPoolsResponse.decode(new BinaryReader(data)));
    }
    externalIncentiveGauges(request = {}) {
        const data = QueryExternalIncentiveGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
        return promise.then(data => QueryExternalIncentiveGaugesResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
