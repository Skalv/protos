import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.allProvidersAttributes = this.allProvidersAttributes.bind(this);
        this.providerAttributes = this.providerAttributes.bind(this);
        this.providerAuditorAttributes = this.providerAuditorAttributes.bind(this);
        this.auditorAttributes = this.auditorAttributes.bind(this);
    }
    allProvidersAttributes(request = {
        pagination: undefined
    }) {
        const data = QueryAllProvidersAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "AllProvidersAttributes", data);
        return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
    }
    providerAttributes(request) {
        const data = QueryProviderAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAttributes", data);
        return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
    }
    providerAuditorAttributes(request) {
        const data = QueryProviderAuditorRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAuditorAttributes", data);
        return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
    }
    auditorAttributes(request) {
        const data = QueryAuditorAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "AuditorAttributes", data);
        return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        allProvidersAttributes(request) {
            return queryService.allProvidersAttributes(request);
        },
        providerAttributes(request) {
            return queryService.providerAttributes(request);
        },
        providerAuditorAttributes(request) {
            return queryService.providerAuditorAttributes(request);
        },
        auditorAttributes(request) {
            return queryService.auditorAttributes(request);
        }
    };
};
