import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
        this.params = this.params.bind(this);
        this.claimRecord = this.claimRecord.bind(this);
        this.claimableForAction = this.claimableForAction.bind(this);
        this.totalClaimable = this.totalClaimable.bind(this);
    }
    moduleAccountBalance(request = {}) {
        const data = QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "ModuleAccountBalance", data);
        return promise.then(data => QueryModuleAccountBalanceResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    claimRecord(request) {
        const data = QueryClaimRecordRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "ClaimRecord", data);
        return promise.then(data => QueryClaimRecordResponse.decode(new BinaryReader(data)));
    }
    claimableForAction(request) {
        const data = QueryClaimableForActionRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "ClaimableForAction", data);
        return promise.then(data => QueryClaimableForActionResponse.decode(new BinaryReader(data)));
    }
    totalClaimable(request) {
        const data = QueryTotalClaimableRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "TotalClaimable", data);
        return promise.then(data => QueryTotalClaimableResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        moduleAccountBalance(request) {
            return queryService.moduleAccountBalance(request);
        },
        params(request) {
            return queryService.params(request);
        },
        claimRecord(request) {
            return queryService.claimRecord(request);
        },
        claimableForAction(request) {
            return queryService.claimableForAction(request);
        },
        totalClaimable(request) {
            return queryService.totalClaimable(request);
        }
    };
};
