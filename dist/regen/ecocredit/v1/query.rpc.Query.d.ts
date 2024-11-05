import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClassesRequest, QueryClassesResponse, QueryClassesByAdminRequest, QueryClassesByAdminResponse, QueryClassRequest, QueryClassResponse, QueryClassIssuersRequest, QueryClassIssuersResponse, QueryProjectsRequest, QueryProjectsResponse, QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponse, QueryProjectRequest, QueryProjectResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponse, QueryBatchesByClassRequest, QueryBatchesByClassResponse, QueryBatchRequest, QueryBatchResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalancesRequest, QueryBalancesResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Msg is the regen.ecocredit.v1 Query service. */
export interface Query {
    /** Classes queries for all credit classes with pagination. */
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    /**
     * ClassesByAdmin queries for all credit classes with a specific admin
     * address.
     */
    classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse>;
    /** Class queries for information on a credit class. */
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** ClassIssuers queries for the addresses of the issuers for a credit class. */
    classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse>;
    /** Projects queries for all projects within a class with pagination. */
    projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    /**
     * ProjectsByReferenceId queries for all projects by reference-id with
     * pagination.
     */
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse>;
    /** Project queries for information on a project. */
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    /** Batches queries for all batches in the given project with pagination. */
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    /** BatchesByIssuer queries all batches issued from a given issuer address. */
    batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse>;
    /** BatchesByClass queries all batches issued from a given class. */
    batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse>;
    /** Batch queries for information on a credit batch. */
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    /**
     * Balance queries the balance (both tradable and retired) of a given credit
     * batch for a given account.
     */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Balances queries all credit balances the given account holds. */
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
    /** Supply queries the tradable and retired supply of a credit batch. */
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /**
     * CreditTypes returns the list of allowed types that credit classes can have.
     * See Types/CreditType for more details.
     */
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    /** Params queries the ecocredit module parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse>;
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse>;
    projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse>;
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse>;
    batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse>;
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
    classesByAdmin(request: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponse>;
    class(request: QueryClassRequest): Promise<QueryClassResponse>;
    classIssuers(request: QueryClassIssuersRequest): Promise<QueryClassIssuersResponse>;
    projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse>;
    projectsByReferenceId(request: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponse>;
    project(request: QueryProjectRequest): Promise<QueryProjectResponse>;
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
    batchesByIssuer(request: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponse>;
    batchesByClass(request: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponse>;
    batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
