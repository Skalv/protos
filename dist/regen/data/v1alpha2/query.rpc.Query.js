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
        this.byHash = this.byHash.bind(this);
        this.bySigner = this.bySigner.bind(this);
    }
    byHash(request) {
        const data = query_1.QueryByHashRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Query", "ByHash", data);
        return promise.then(data => query_1.QueryByHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    bySigner(request) {
        const data = query_1.QueryBySignerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1alpha2.Query", "BySigner", data);
        return promise.then(data => query_1.QueryBySignerResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        byHash(request) {
            return queryService.byHash(request);
        },
        bySigner(request) {
            return queryService.bySigner(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
