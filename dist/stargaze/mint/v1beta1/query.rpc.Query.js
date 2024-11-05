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
        this.annualProvisions = this.annualProvisions.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("stargaze.mint.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    annualProvisions(request = {}) {
        const data = query_1.QueryAnnualProvisionsRequest.encode(request).finish();
        const promise = this.rpc.request("stargaze.mint.v1beta1.Query", "AnnualProvisions", data);
        return promise.then(data => query_1.QueryAnnualProvisionsResponse.decode(new binary_1.BinaryReader(data)));
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
        annualProvisions(request) {
            return queryService.annualProvisions(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;