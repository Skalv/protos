import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves wasmx params */
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    /** Retrieves the entire wasmx module's state */
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
};
