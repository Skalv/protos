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
        this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
        this.params = this.params.bind(this);
        this.claimRecord = this.claimRecord.bind(this);
        this.claimableForAction = this.claimableForAction.bind(this);
        this.totalClaimable = this.totalClaimable.bind(this);
    }
    moduleAccountBalance(request = {}) {
        const data = query_1.QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "ModuleAccountBalance", data);
        return promise.then(data => query_1.QueryModuleAccountBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    claimRecord(request) {
        const data = query_1.QueryClaimRecordRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "ClaimRecord", data);
        return promise.then(data => query_1.QueryClaimRecordResponse.decode(new binary_1.BinaryReader(data)));
    }
    claimableForAction(request) {
        const data = query_1.QueryClaimableForActionRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "ClaimableForAction", data);
        return promise.then(data => query_1.QueryClaimableForActionResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalClaimable(request) {
        const data = query_1.QueryTotalClaimableRequest.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Query", "TotalClaimable", data);
        return promise.then(data => query_1.QueryTotalClaimableResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
