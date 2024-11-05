import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryByHashRequest, QueryByHashResponse, QueryBySignerRequest, QueryBySignerResponse } from "./query";
/** Query is the regen.data.v1alpha2 Query service */
export interface Query {
    /** ByHash queries data based on its ContentHash. */
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
    /** BySigner queries data based on signers. */
    bySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
    bySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
    bySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse>;
};
