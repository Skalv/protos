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
        this.params = this.params.bind(this);
        this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
        this.denomsFromCreator = this.denomsFromCreator.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomAuthorityMetadata(request) {
        const data = query_1.QueryDenomAuthorityMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
        return promise.then(data => query_1.QueryDenomAuthorityMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomsFromCreator(request) {
        const data = query_1.QueryDenomsFromCreatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
        return promise.then(data => query_1.QueryDenomsFromCreatorResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        denomAuthorityMetadata(request) {
            return queryService.denomAuthorityMetadata(request);
        },
        denomsFromCreator(request) {
            return queryService.denomsFromCreator(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
