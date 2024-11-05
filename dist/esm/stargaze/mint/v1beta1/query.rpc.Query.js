import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.annualProvisions = this.annualProvisions.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("stargaze.mint.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    annualProvisions(request = {}) {
        const data = QueryAnnualProvisionsRequest.encode(request).finish();
        const promise = this.rpc.request("stargaze.mint.v1beta1.Query", "AnnualProvisions", data);
        return promise.then(data => QueryAnnualProvisionsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        annualProvisions(request) {
            return queryService.annualProvisions(request);
        }
    };
};
