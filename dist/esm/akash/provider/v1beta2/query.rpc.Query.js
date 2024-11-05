import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.providers = this.providers.bind(this);
        this.provider = this.provider.bind(this);
    }
    providers(request = {
        pagination: undefined
    }) {
        const data = QueryProvidersRequest.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Query", "Providers", data);
        return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
    }
    provider(request) {
        const data = QueryProviderRequest.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Query", "Provider", data);
        return promise.then(data => QueryProviderResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        providers(request) {
            return queryService.providers(request);
        },
        provider(request) {
            return queryService.provider(request);
        }
    };
};
