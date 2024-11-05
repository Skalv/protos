import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryInsuranceParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceParams", data);
        return promise.then(data => QueryInsuranceParamsResponse.decode(new BinaryReader(data)));
    }
    insuranceFund(request) {
        const data = QueryInsuranceFundRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFund", data);
        return promise.then(data => QueryInsuranceFundResponse.decode(new BinaryReader(data)));
    }
    insuranceFunds(request = {}) {
        const data = QueryInsuranceFundsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFunds", data);
        return promise.then(data => QueryInsuranceFundsResponse.decode(new BinaryReader(data)));
    }
    estimatedRedemptions(request) {
        const data = QueryEstimatedRedemptionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "EstimatedRedemptions", data);
        return promise.then(data => QueryEstimatedRedemptionsResponse.decode(new BinaryReader(data)));
    }
    pendingRedemptions(request) {
        const data = QueryPendingRedemptionsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "PendingRedemptions", data);
        return promise.then(data => QueryPendingRedemptionsResponse.decode(new BinaryReader(data)));
    }
    insuranceModuleState(request = {}) {
        const data = QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceModuleState", data);
        return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
