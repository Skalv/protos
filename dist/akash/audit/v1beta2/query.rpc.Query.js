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
        this.allProvidersAttributes = this.allProvidersAttributes.bind(this);
        this.providerAttributes = this.providerAttributes.bind(this);
        this.providerAuditorAttributes = this.providerAuditorAttributes.bind(this);
        this.auditorAttributes = this.auditorAttributes.bind(this);
    }
    allProvidersAttributes(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllProvidersAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "AllProvidersAttributes", data);
        return promise.then(data => query_1.QueryProvidersResponse.decode(new binary_1.BinaryReader(data)));
    }
    providerAttributes(request) {
        const data = query_1.QueryProviderAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAttributes", data);
        return promise.then(data => query_1.QueryProvidersResponse.decode(new binary_1.BinaryReader(data)));
    }
    providerAuditorAttributes(request) {
        const data = query_1.QueryProviderAuditorRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "ProviderAuditorAttributes", data);
        return promise.then(data => query_1.QueryProvidersResponse.decode(new binary_1.BinaryReader(data)));
    }
    auditorAttributes(request) {
        const data = query_1.QueryAuditorAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta2.Query", "AuditorAttributes", data);
        return promise.then(data => query_1.QueryProvidersResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
