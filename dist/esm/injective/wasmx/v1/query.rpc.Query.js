import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.wasmxParams = this.wasmxParams.bind(this);
        this.wasmxModuleState = this.wasmxModuleState.bind(this);
    }
    wasmxParams(request = {}) {
        const data = QueryWasmxParamsRequest.encode(request).finish();
        const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxParams", data);
        return promise.then(data => QueryWasmxParamsResponse.decode(new BinaryReader(data)));
    }
    wasmxModuleState(request = {}) {
        const data = QueryModuleStateRequest.encode(request).finish();
        const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxModuleState", data);
        return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
