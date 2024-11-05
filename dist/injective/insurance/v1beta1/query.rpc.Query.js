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
        this.insuranceParams = this.insuranceParams.bind(this);
        this.insuranceFund = this.insuranceFund.bind(this);
        this.insuranceFunds = this.insuranceFunds.bind(this);
        this.estimatedRedemptions = this.estimatedRedemptions.bind(this);
        this.pendingRedemptions = this.pendingRedemptions.bind(this);
        this.insuranceModuleState = this.insuranceModuleState.bind(this);
    }
    insuranceParams(request = {}) {
        const data = query_1.QueryInsuranceParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceParams", data);
        return promise.then(data => query_1.QueryInsuranceParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    insuranceFund(request) {
        const data = query_1.QueryInsuranceFundRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFund", data);
        return promise.then(data => query_1.QueryInsuranceFundResponse.decode(new binary_1.BinaryReader(data)));
    }
    insuranceFunds(request = {}) {
        const data = query_1.QueryInsuranceFundsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFunds", data);
        return promise.then(data => query_1.QueryInsuranceFundsResponse.decode(new binary_1.BinaryReader(data)));
    }
    estimatedRedemptions(request) {
        const data = query_1.QueryEstimatedRedemptionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "EstimatedRedemptions", data);
        return promise.then(data => query_1.QueryEstimatedRedemptionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    pendingRedemptions(request) {
        const data = query_1.QueryPendingRedemptionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "PendingRedemptions", data);
        return promise.then(data => query_1.QueryPendingRedemptionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    insuranceModuleState(request = {}) {
        const data = query_1.QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceModuleState", data);
        return promise.then(data => query_1.QueryModuleStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        insuranceParams(request) {
            return queryService.insuranceParams(request);
        },
        insuranceFund(request) {
            return queryService.insuranceFund(request);
        },
        insuranceFunds(request) {
            return queryService.insuranceFunds(request);
        },
        estimatedRedemptions(request) {
            return queryService.estimatedRedemptions(request);
        },
        pendingRedemptions(request) {
            return queryService.pendingRedemptions(request);
        },
        insuranceModuleState(request) {
            return queryService.insuranceModuleState(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
