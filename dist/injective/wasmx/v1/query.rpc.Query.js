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
        this.wasmxParams = this.wasmxParams.bind(this);
        this.wasmxModuleState = this.wasmxModuleState.bind(this);
    }
    wasmxParams(request = {}) {
        const data = query_1.QueryWasmxParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxParams", data);
        return promise.then(data => query_1.QueryWasmxParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    wasmxModuleState(request = {}) {
        const data = query_1.QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxModuleState", data);
        return promise.then(data => query_1.QueryModuleStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        wasmxParams(request) {
            return queryService.wasmxParams(request);
        },
        wasmxModuleState(request) {
            return queryService.wasmxModuleState(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
