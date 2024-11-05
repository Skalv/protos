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
        this.providers = this.providers.bind(this);
        this.provider = this.provider.bind(this);
    }
    providers(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryProvidersRequest.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Query", "Providers", data);
        return promise.then(data => query_1.QueryProvidersResponse.decode(new binary_1.BinaryReader(data)));
    }
    provider(request) {
        const data = query_1.QueryProviderRequest.encode(request).finish();
        const promise = this.rpc.request("akash.provider.v1beta2.Query", "Provider", data);
        return promise.then(data => query_1.QueryProviderResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
