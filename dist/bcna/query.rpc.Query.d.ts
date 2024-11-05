import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Bitcannaid by id. */
    bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    /** Queries a list of Bitcannaid items. */
    bitcannaidAll(request?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    /** Queries a Supplychain by id. */
    supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    /** Queries a list of Supplychain items. */
    supplychainAll(request?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    bitcannaidAll(request?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    supplychainAll(request?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    bitcannaidAll(request?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    supplychainAll(request?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
};
