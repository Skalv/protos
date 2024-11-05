import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesRequest";
    value: Uint8Array;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesRequest";
    value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesResponse";
    value: Uint8Array;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseAmino {
    /** classes are the fetched credit classes. */
    classes?: ClassInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesResponse";
    value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponseSDKType {
    classes: ClassInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequest {
    /** admin is the address of the admin of the class. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassesByAdminRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminRequest";
    value: Uint8Array;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequestAmino {
    /** admin is the address of the admin of the class. */
    admin?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassesByAdminRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesByAdminRequest";
    value: QueryClassesByAdminRequestAmino;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClassesByAdminResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassesByAdminResponse";
    value: Uint8Array;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponseAmino {
    /** classes are the fetched credit classes. */
    classes?: ClassInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassesByAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassesByAdminResponse";
    value: QueryClassesByAdminResponseAmino;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponseSDKType {
    classes: ClassInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
}
export interface QueryClassRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassRequest";
    value: Uint8Array;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id?: string;
}
export interface QueryClassRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassRequest";
    value: QueryClassRequestAmino;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequestSDKType {
    class_id: string;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponse {
    /** class is the fetched credit class. */
    class?: ClassInfo;
}
export interface QueryClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassResponse";
    value: Uint8Array;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponseAmino {
    /** class is the fetched credit class. */
    class?: ClassInfoAmino;
}
export interface QueryClassResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassResponse";
    value: QueryClassResponseAmino;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponseSDKType {
    class?: ClassInfoSDKType;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryClassIssuersRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersRequest";
    value: Uint8Array;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryClassIssuersRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassIssuersRequest";
    value: QueryClassIssuersRequestAmino;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponse {
    /** issuers is a list of issuers for the credit class */
    issuers: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryClassIssuersResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryClassIssuersResponse";
    value: Uint8Array;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponseAmino {
    /** issuers is a list of issuers for the credit class */
    issuers?: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryClassIssuersResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryClassIssuersResponse";
    value: QueryClassIssuersResponseAmino;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponseSDKType {
    issuers: string[];
    pagination?: PageResponseSDKType;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProjectsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsRequest";
    value: Uint8Array;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProjectsRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsRequest";
    value: QueryProjectsRequestAmino;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProjectsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsResponse";
    value: Uint8Array;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponseAmino {
    /** projects are the fetched projects. */
    projects?: ProjectInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProjectsResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsResponse";
    value: QueryProjectsResponseAmino;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponseSDKType {
    projects: ProjectInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequest {
    /** reference_id is the project reference id. */
    referenceId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProjectsByReferenceIdRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest";
    value: Uint8Array;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequestAmino {
    /** reference_id is the project reference id. */
    reference_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProjectsByReferenceIdRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByReferenceIdRequest";
    value: QueryProjectsByReferenceIdRequestAmino;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequestSDKType {
    reference_id: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProjectsByReferenceIdResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse";
    value: Uint8Array;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponseAmino {
    /** projects are the fetched projects. */
    projects?: ProjectInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProjectsByReferenceIdResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectsByReferenceIdResponse";
    value: QueryProjectsByReferenceIdResponseAmino;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponseSDKType {
    projects: ProjectInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
}
export interface QueryProjectRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectRequest";
    value: Uint8Array;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequestAmino {
    /** project_id is the unique identifier of the project to query. */
    project_id?: string;
}
export interface QueryProjectRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectRequest";
    value: QueryProjectRequestAmino;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequestSDKType {
    project_id: string;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponse {
    /** project is the fetched project. */
    project?: ProjectInfo;
}
export interface QueryProjectResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryProjectResponse";
    value: Uint8Array;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponseAmino {
    /** project is the fetched project. */
    project?: ProjectInfoAmino;
}
export interface QueryProjectResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryProjectResponse";
    value: QueryProjectResponseAmino;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponseSDKType {
    project?: ProjectInfoSDKType;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesRequest";
    value: Uint8Array;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestAmino {
    /** project_id is the unique identifier of the project to query. */
    project_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesRequest";
    value: QueryBatchesRequestAmino;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequestSDKType {
    project_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesResponse";
    value: Uint8Array;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseAmino {
    /** batches are the fetched credit batches. */
    batches?: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesResponse";
    value: QueryBatchesResponseAmino;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequest {
    /** issuer is the address that issued the batch */
    issuer: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesByIssuerRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest";
    value: Uint8Array;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequestAmino {
    /** issuer is the address that issued the batch */
    issuer?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesByIssuerRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByIssuerRequest";
    value: QueryBatchesByIssuerRequestAmino;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequestSDKType {
    issuer: string;
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesByIssuerResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse";
    value: Uint8Array;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponseAmino {
    /** batches are the fetched credit batches. */
    batches?: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesByIssuerResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByIssuerResponse";
    value: QueryBatchesByIssuerResponseAmino;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBatchesByClassRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassRequest";
    value: Uint8Array;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequestAmino {
    /** class_id is the unique identifier of the credit class to query. */
    class_id?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBatchesByClassRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByClassRequest";
    value: QueryBatchesByClassRequestAmino;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBatchesByClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchesByClassResponse";
    value: Uint8Array;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponseAmino {
    /** batches are the fetched credit batches. */
    batches?: BatchInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBatchesByClassResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchesByClassResponse";
    value: QueryBatchesByClassResponseAmino;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponseSDKType {
    batches: BatchInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
export interface QueryBatchRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchRequest";
    value: Uint8Array;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequestAmino {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom?: string;
}
export interface QueryBatchRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchRequest";
    value: QueryBatchRequestAmino;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequestSDKType {
    batch_denom: string;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponse {
    /** batch is the fetched credit batch. */
    batch?: BatchInfo;
}
export interface QueryBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBatchResponse";
    value: Uint8Array;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponseAmino {
    /** batch is the fetched credit batch. */
    batch?: BatchInfoAmino;
}
export interface QueryBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBatchResponse";
    value: QueryBatchResponseAmino;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponseSDKType {
    batch?: BatchInfoSDKType;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
    /** account is the address of the account whose balance is being queried. */
    account: string;
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestAmino {
    /** account is the address of the account whose balance is being queried. */
    account?: string;
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom?: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequestSDKType {
    account: string;
    batch_denom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
    /** balance is the balance of the given account. */
    balance?: BatchBalanceInfo;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseAmino {
    /** balance is the balance of the given account. */
    balance?: BatchBalanceInfoAmino;
}
export interface QueryBalanceResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponseSDKType {
    balance?: BatchBalanceInfoSDKType;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequest {
    /** account is the address of the account whose balance is being queried. */
    account: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryBalancesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesRequest";
    value: Uint8Array;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequestAmino {
    /** account is the address of the account whose balance is being queried. */
    account?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryBalancesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalancesRequest";
    value: QueryBalancesRequestAmino;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequestSDKType {
    account: string;
    pagination?: PageRequestSDKType;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponse {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryBalancesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryBalancesResponse";
    value: Uint8Array;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponseAmino {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances?: BatchBalanceInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryBalancesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryBalancesResponse";
    value: QueryBalancesResponseAmino;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponseSDKType {
    balances: BatchBalanceInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyRequest";
    value: Uint8Array;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestAmino {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batch_denom?: string;
}
export interface QuerySupplyRequestAminoMsg {
    type: "/regen.ecocredit.v1.QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequestSDKType {
    batch_denom: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
    /**
     * tradable_supply is the decimal number of tradable credits in the batch
     * supply.
     */
    tradableSupply: string;
    /**
     * retired_supply is the decimal number of retired credits in the batch
     * supply.
     */
    retiredSupply: string;
    /**
     * cancelled_amount is the decimal number of cancelled credits in the batch
     * supply.
     */
    cancelledAmount: string;
}
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QuerySupplyResponse";
    value: Uint8Array;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseAmino {
    /**
     * tradable_supply is the decimal number of tradable credits in the batch
     * supply.
     */
    tradable_supply?: string;
    /**
     * retired_supply is the decimal number of retired credits in the batch
     * supply.
     */
    retired_supply?: string;
    /**
     * cancelled_amount is the decimal number of cancelled credits in the batch
     * supply.
     */
    cancelled_amount?: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "/regen.ecocredit.v1.QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponseSDKType {
    tradable_supply: string;
    retired_supply: string;
    cancelled_amount: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
}
export interface QueryCreditTypesRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesRequest";
    value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestAmino {
}
export interface QueryCreditTypesRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryCreditTypesRequest";
    value: QueryCreditTypesRequestAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequestSDKType {
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
    /** credit_types are the fetched credit types. */
    creditTypes: CreditType[];
}
export interface QueryCreditTypesResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryCreditTypesResponse";
    value: Uint8Array;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseAmino {
    /** credit_types are the fetched credit types. */
    credit_types?: CreditTypeAmino[];
}
export interface QueryCreditTypesResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryCreditTypesResponse";
    value: QueryCreditTypesResponseAmino;
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponseSDKType {
    credit_types: CreditTypeSDKType[];
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/regen.ecocredit.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
    /** params defines the parameters of the ecocredit module. */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the ecocredit module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/regen.ecocredit.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfo {
    /** id is the unique identifier of the credit class. */
    id: string;
    /** admin is the admin of the credit class. */
    admin: string;
    /** metadata is the arbitrary metadata attached to the credit class. */
    metadata: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type within which this
     * credit class was created.
     */
    creditTypeAbbrev: string;
}
export interface ClassInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassInfo";
    value: Uint8Array;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfoAmino {
    /** id is the unique identifier of the credit class. */
    id?: string;
    /** admin is the admin of the credit class. */
    admin?: string;
    /** metadata is the arbitrary metadata attached to the credit class. */
    metadata?: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type within which this
     * credit class was created.
     */
    credit_type_abbrev?: string;
}
export interface ClassInfoAminoMsg {
    type: "/regen.ecocredit.v1.ClassInfo";
    value: ClassInfoAmino;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfoSDKType {
    id: string;
    admin: string;
    metadata: string;
    credit_type_abbrev: string;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfo {
    /** id is the unique identifier of the project. */
    id: string;
    /** admin is the admin of the project. */
    admin: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project was created.
     */
    classId: string;
    /**
     * jurisdiction is the jurisdiction of the project. Full documentation can be
     * found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is the arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string that can be use to reference project. */
    referenceId: string;
}
export interface ProjectInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ProjectInfo";
    value: Uint8Array;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfoAmino {
    /** id is the unique identifier of the project. */
    id?: string;
    /** admin is the admin of the project. */
    admin?: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project was created.
     */
    class_id?: string;
    /**
     * jurisdiction is the jurisdiction of the project. Full documentation can be
     * found in MsgCreateProject.jurisdiction.
     */
    jurisdiction?: string;
    /** metadata is the arbitrary metadata attached to the project. */
    metadata?: string;
    /** reference_id is any arbitrary string that can be use to reference project. */
    reference_id?: string;
}
export interface ProjectInfoAminoMsg {
    type: "/regen.ecocredit.v1.ProjectInfo";
    value: ProjectInfoAmino;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfoSDKType {
    id: string;
    admin: string;
    class_id: string;
    jurisdiction: string;
    metadata: string;
    reference_id: string;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfo {
    /**
     * issuer is the address that created the batch and the address authorized to
     * mint new credits to the credit batch if the credit batch is open.
     */
    issuer: string;
    /**
     * project_id is the unique identifier of the project within which this credit
     * batch was created.
     */
    projectId: string;
    /**
     * denom is the unique identifier of the credit batch formed from the project
     * name, batch sequence number and dates.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate?: Date;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate?: Date;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuanceDate?: Date;
    /**
     * open determines whether or not the credit batch is open, i.e. whether or
     * not new credits can be minted to the credit batch.
     */
    open: boolean;
}
export interface BatchInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchInfo";
    value: Uint8Array;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfoAmino {
    /**
     * issuer is the address that created the batch and the address authorized to
     * mint new credits to the credit batch if the credit batch is open.
     */
    issuer?: string;
    /**
     * project_id is the unique identifier of the project within which this credit
     * batch was created.
     */
    project_id?: string;
    /**
     * denom is the unique identifier of the credit batch formed from the project
     * name, batch sequence number and dates.
     */
    denom?: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata?: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    start_date?: string;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date?: string;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuance_date?: string;
    /**
     * open determines whether or not the credit batch is open, i.e. whether or
     * not new credits can be minted to the credit batch.
     */
    open?: boolean;
}
export interface BatchInfoAminoMsg {
    type: "/regen.ecocredit.v1.BatchInfo";
    value: BatchInfoAmino;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfoSDKType {
    issuer: string;
    project_id: string;
    denom: string;
    metadata: string;
    start_date?: Date;
    end_date?: Date;
    issuance_date?: Date;
    open: boolean;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfo {
    /** address is the address of the credit holder. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** tradable is the tradable amount of credits. */
    tradable: string;
    /** retired is the retired amount of credits. */
    retired: string;
    /** escrowed is the amount of credits locked up in escrow for the marketplace. */
    escrowed: string;
}
export interface BatchBalanceInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchBalanceInfo";
    value: Uint8Array;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfoAmino {
    /** address is the address of the credit holder. */
    address?: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /** tradable is the tradable amount of credits. */
    tradable?: string;
    /** retired is the retired amount of credits. */
    retired?: string;
    /** escrowed is the amount of credits locked up in escrow for the marketplace. */
    escrowed?: string;
}
export interface BatchBalanceInfoAminoMsg {
    type: "/regen.ecocredit.v1.BatchBalanceInfo";
    value: BatchBalanceInfoAmino;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfoSDKType {
    address: string;
    batch_denom: string;
    tradable: string;
    retired: string;
    escrowed: string;
}
export declare const QueryClassesRequest: {
    typeUrl: string;
    encode(message: QueryClassesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest;
    fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest;
    fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest;
    toAmino(message: QueryClassesRequest): QueryClassesRequestAmino;
    fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest;
    fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest;
    toProto(message: QueryClassesRequest): Uint8Array;
    toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg;
};
export declare const QueryClassesResponse: {
    typeUrl: string;
    encode(message: QueryClassesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse;
    fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse;
    fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse;
    toAmino(message: QueryClassesResponse): QueryClassesResponseAmino;
    fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse;
    fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse;
    toProto(message: QueryClassesResponse): Uint8Array;
    toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg;
};
export declare const QueryClassesByAdminRequest: {
    typeUrl: string;
    encode(message: QueryClassesByAdminRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesByAdminRequest;
    fromPartial(object: Partial<QueryClassesByAdminRequest>): QueryClassesByAdminRequest;
    fromAmino(object: QueryClassesByAdminRequestAmino): QueryClassesByAdminRequest;
    toAmino(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestAmino;
    fromAminoMsg(object: QueryClassesByAdminRequestAminoMsg): QueryClassesByAdminRequest;
    fromProtoMsg(message: QueryClassesByAdminRequestProtoMsg): QueryClassesByAdminRequest;
    toProto(message: QueryClassesByAdminRequest): Uint8Array;
    toProtoMsg(message: QueryClassesByAdminRequest): QueryClassesByAdminRequestProtoMsg;
};
export declare const QueryClassesByAdminResponse: {
    typeUrl: string;
    encode(message: QueryClassesByAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesByAdminResponse;
    fromPartial(object: Partial<QueryClassesByAdminResponse>): QueryClassesByAdminResponse;
    fromAmino(object: QueryClassesByAdminResponseAmino): QueryClassesByAdminResponse;
    toAmino(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseAmino;
    fromAminoMsg(object: QueryClassesByAdminResponseAminoMsg): QueryClassesByAdminResponse;
    fromProtoMsg(message: QueryClassesByAdminResponseProtoMsg): QueryClassesByAdminResponse;
    toProto(message: QueryClassesByAdminResponse): Uint8Array;
    toProtoMsg(message: QueryClassesByAdminResponse): QueryClassesByAdminResponseProtoMsg;
};
export declare const QueryClassRequest: {
    typeUrl: string;
    encode(message: QueryClassRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest;
    fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest;
    fromAmino(object: QueryClassRequestAmino): QueryClassRequest;
    toAmino(message: QueryClassRequest): QueryClassRequestAmino;
    fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest;
    fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest;
    toProto(message: QueryClassRequest): Uint8Array;
    toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg;
};
export declare const QueryClassResponse: {
    typeUrl: string;
    encode(message: QueryClassResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse;
    fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse;
    fromAmino(object: QueryClassResponseAmino): QueryClassResponse;
    toAmino(message: QueryClassResponse): QueryClassResponseAmino;
    fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse;
    fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse;
    toProto(message: QueryClassResponse): Uint8Array;
    toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg;
};
export declare const QueryClassIssuersRequest: {
    typeUrl: string;
    encode(message: QueryClassIssuersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassIssuersRequest;
    fromPartial(object: Partial<QueryClassIssuersRequest>): QueryClassIssuersRequest;
    fromAmino(object: QueryClassIssuersRequestAmino): QueryClassIssuersRequest;
    toAmino(message: QueryClassIssuersRequest): QueryClassIssuersRequestAmino;
    fromAminoMsg(object: QueryClassIssuersRequestAminoMsg): QueryClassIssuersRequest;
    fromProtoMsg(message: QueryClassIssuersRequestProtoMsg): QueryClassIssuersRequest;
    toProto(message: QueryClassIssuersRequest): Uint8Array;
    toProtoMsg(message: QueryClassIssuersRequest): QueryClassIssuersRequestProtoMsg;
};
export declare const QueryClassIssuersResponse: {
    typeUrl: string;
    encode(message: QueryClassIssuersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClassIssuersResponse;
    fromPartial(object: Partial<QueryClassIssuersResponse>): QueryClassIssuersResponse;
    fromAmino(object: QueryClassIssuersResponseAmino): QueryClassIssuersResponse;
    toAmino(message: QueryClassIssuersResponse): QueryClassIssuersResponseAmino;
    fromAminoMsg(object: QueryClassIssuersResponseAminoMsg): QueryClassIssuersResponse;
    fromProtoMsg(message: QueryClassIssuersResponseProtoMsg): QueryClassIssuersResponse;
    toProto(message: QueryClassIssuersResponse): Uint8Array;
    toProtoMsg(message: QueryClassIssuersResponse): QueryClassIssuersResponseProtoMsg;
};
export declare const QueryProjectsRequest: {
    typeUrl: string;
    encode(message: QueryProjectsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsRequest;
    fromPartial(object: Partial<QueryProjectsRequest>): QueryProjectsRequest;
    fromAmino(object: QueryProjectsRequestAmino): QueryProjectsRequest;
    toAmino(message: QueryProjectsRequest): QueryProjectsRequestAmino;
    fromAminoMsg(object: QueryProjectsRequestAminoMsg): QueryProjectsRequest;
    fromProtoMsg(message: QueryProjectsRequestProtoMsg): QueryProjectsRequest;
    toProto(message: QueryProjectsRequest): Uint8Array;
    toProtoMsg(message: QueryProjectsRequest): QueryProjectsRequestProtoMsg;
};
export declare const QueryProjectsResponse: {
    typeUrl: string;
    encode(message: QueryProjectsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsResponse;
    fromPartial(object: Partial<QueryProjectsResponse>): QueryProjectsResponse;
    fromAmino(object: QueryProjectsResponseAmino): QueryProjectsResponse;
    toAmino(message: QueryProjectsResponse): QueryProjectsResponseAmino;
    fromAminoMsg(object: QueryProjectsResponseAminoMsg): QueryProjectsResponse;
    fromProtoMsg(message: QueryProjectsResponseProtoMsg): QueryProjectsResponse;
    toProto(message: QueryProjectsResponse): Uint8Array;
    toProtoMsg(message: QueryProjectsResponse): QueryProjectsResponseProtoMsg;
};
export declare const QueryProjectsByReferenceIdRequest: {
    typeUrl: string;
    encode(message: QueryProjectsByReferenceIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByReferenceIdRequest;
    fromPartial(object: Partial<QueryProjectsByReferenceIdRequest>): QueryProjectsByReferenceIdRequest;
    fromAmino(object: QueryProjectsByReferenceIdRequestAmino): QueryProjectsByReferenceIdRequest;
    toAmino(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestAmino;
    fromAminoMsg(object: QueryProjectsByReferenceIdRequestAminoMsg): QueryProjectsByReferenceIdRequest;
    fromProtoMsg(message: QueryProjectsByReferenceIdRequestProtoMsg): QueryProjectsByReferenceIdRequest;
    toProto(message: QueryProjectsByReferenceIdRequest): Uint8Array;
    toProtoMsg(message: QueryProjectsByReferenceIdRequest): QueryProjectsByReferenceIdRequestProtoMsg;
};
export declare const QueryProjectsByReferenceIdResponse: {
    typeUrl: string;
    encode(message: QueryProjectsByReferenceIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByReferenceIdResponse;
    fromPartial(object: Partial<QueryProjectsByReferenceIdResponse>): QueryProjectsByReferenceIdResponse;
    fromAmino(object: QueryProjectsByReferenceIdResponseAmino): QueryProjectsByReferenceIdResponse;
    toAmino(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseAmino;
    fromAminoMsg(object: QueryProjectsByReferenceIdResponseAminoMsg): QueryProjectsByReferenceIdResponse;
    fromProtoMsg(message: QueryProjectsByReferenceIdResponseProtoMsg): QueryProjectsByReferenceIdResponse;
    toProto(message: QueryProjectsByReferenceIdResponse): Uint8Array;
    toProtoMsg(message: QueryProjectsByReferenceIdResponse): QueryProjectsByReferenceIdResponseProtoMsg;
};
export declare const QueryProjectRequest: {
    typeUrl: string;
    encode(message: QueryProjectRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectRequest;
    fromPartial(object: Partial<QueryProjectRequest>): QueryProjectRequest;
    fromAmino(object: QueryProjectRequestAmino): QueryProjectRequest;
    toAmino(message: QueryProjectRequest): QueryProjectRequestAmino;
    fromAminoMsg(object: QueryProjectRequestAminoMsg): QueryProjectRequest;
    fromProtoMsg(message: QueryProjectRequestProtoMsg): QueryProjectRequest;
    toProto(message: QueryProjectRequest): Uint8Array;
    toProtoMsg(message: QueryProjectRequest): QueryProjectRequestProtoMsg;
};
export declare const QueryProjectResponse: {
    typeUrl: string;
    encode(message: QueryProjectResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectResponse;
    fromPartial(object: Partial<QueryProjectResponse>): QueryProjectResponse;
    fromAmino(object: QueryProjectResponseAmino): QueryProjectResponse;
    toAmino(message: QueryProjectResponse): QueryProjectResponseAmino;
    fromAminoMsg(object: QueryProjectResponseAminoMsg): QueryProjectResponse;
    fromProtoMsg(message: QueryProjectResponseProtoMsg): QueryProjectResponse;
    toProto(message: QueryProjectResponse): Uint8Array;
    toProtoMsg(message: QueryProjectResponse): QueryProjectResponseProtoMsg;
};
export declare const QueryBatchesRequest: {
    typeUrl: string;
    encode(message: QueryBatchesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesRequest;
    fromPartial(object: Partial<QueryBatchesRequest>): QueryBatchesRequest;
    fromAmino(object: QueryBatchesRequestAmino): QueryBatchesRequest;
    toAmino(message: QueryBatchesRequest): QueryBatchesRequestAmino;
    fromAminoMsg(object: QueryBatchesRequestAminoMsg): QueryBatchesRequest;
    fromProtoMsg(message: QueryBatchesRequestProtoMsg): QueryBatchesRequest;
    toProto(message: QueryBatchesRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesRequest): QueryBatchesRequestProtoMsg;
};
export declare const QueryBatchesResponse: {
    typeUrl: string;
    encode(message: QueryBatchesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesResponse;
    fromPartial(object: Partial<QueryBatchesResponse>): QueryBatchesResponse;
    fromAmino(object: QueryBatchesResponseAmino): QueryBatchesResponse;
    toAmino(message: QueryBatchesResponse): QueryBatchesResponseAmino;
    fromAminoMsg(object: QueryBatchesResponseAminoMsg): QueryBatchesResponse;
    fromProtoMsg(message: QueryBatchesResponseProtoMsg): QueryBatchesResponse;
    toProto(message: QueryBatchesResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesResponse): QueryBatchesResponseProtoMsg;
};
export declare const QueryBatchesByIssuerRequest: {
    typeUrl: string;
    encode(message: QueryBatchesByIssuerRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByIssuerRequest;
    fromPartial(object: Partial<QueryBatchesByIssuerRequest>): QueryBatchesByIssuerRequest;
    fromAmino(object: QueryBatchesByIssuerRequestAmino): QueryBatchesByIssuerRequest;
    toAmino(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestAmino;
    fromAminoMsg(object: QueryBatchesByIssuerRequestAminoMsg): QueryBatchesByIssuerRequest;
    fromProtoMsg(message: QueryBatchesByIssuerRequestProtoMsg): QueryBatchesByIssuerRequest;
    toProto(message: QueryBatchesByIssuerRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesByIssuerRequest): QueryBatchesByIssuerRequestProtoMsg;
};
export declare const QueryBatchesByIssuerResponse: {
    typeUrl: string;
    encode(message: QueryBatchesByIssuerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByIssuerResponse;
    fromPartial(object: Partial<QueryBatchesByIssuerResponse>): QueryBatchesByIssuerResponse;
    fromAmino(object: QueryBatchesByIssuerResponseAmino): QueryBatchesByIssuerResponse;
    toAmino(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseAmino;
    fromAminoMsg(object: QueryBatchesByIssuerResponseAminoMsg): QueryBatchesByIssuerResponse;
    fromProtoMsg(message: QueryBatchesByIssuerResponseProtoMsg): QueryBatchesByIssuerResponse;
    toProto(message: QueryBatchesByIssuerResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesByIssuerResponse): QueryBatchesByIssuerResponseProtoMsg;
};
export declare const QueryBatchesByClassRequest: {
    typeUrl: string;
    encode(message: QueryBatchesByClassRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByClassRequest;
    fromPartial(object: Partial<QueryBatchesByClassRequest>): QueryBatchesByClassRequest;
    fromAmino(object: QueryBatchesByClassRequestAmino): QueryBatchesByClassRequest;
    toAmino(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestAmino;
    fromAminoMsg(object: QueryBatchesByClassRequestAminoMsg): QueryBatchesByClassRequest;
    fromProtoMsg(message: QueryBatchesByClassRequestProtoMsg): QueryBatchesByClassRequest;
    toProto(message: QueryBatchesByClassRequest): Uint8Array;
    toProtoMsg(message: QueryBatchesByClassRequest): QueryBatchesByClassRequestProtoMsg;
};
export declare const QueryBatchesByClassResponse: {
    typeUrl: string;
    encode(message: QueryBatchesByClassResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchesByClassResponse;
    fromPartial(object: Partial<QueryBatchesByClassResponse>): QueryBatchesByClassResponse;
    fromAmino(object: QueryBatchesByClassResponseAmino): QueryBatchesByClassResponse;
    toAmino(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseAmino;
    fromAminoMsg(object: QueryBatchesByClassResponseAminoMsg): QueryBatchesByClassResponse;
    fromProtoMsg(message: QueryBatchesByClassResponseProtoMsg): QueryBatchesByClassResponse;
    toProto(message: QueryBatchesByClassResponse): Uint8Array;
    toProtoMsg(message: QueryBatchesByClassResponse): QueryBatchesByClassResponseProtoMsg;
};
export declare const QueryBatchRequest: {
    typeUrl: string;
    encode(message: QueryBatchRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequest;
    fromPartial(object: Partial<QueryBatchRequest>): QueryBatchRequest;
    fromAmino(object: QueryBatchRequestAmino): QueryBatchRequest;
    toAmino(message: QueryBatchRequest): QueryBatchRequestAmino;
    fromAminoMsg(object: QueryBatchRequestAminoMsg): QueryBatchRequest;
    fromProtoMsg(message: QueryBatchRequestProtoMsg): QueryBatchRequest;
    toProto(message: QueryBatchRequest): Uint8Array;
    toProtoMsg(message: QueryBatchRequest): QueryBatchRequestProtoMsg;
};
export declare const QueryBatchResponse: {
    typeUrl: string;
    encode(message: QueryBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchResponse;
    fromPartial(object: Partial<QueryBatchResponse>): QueryBatchResponse;
    fromAmino(object: QueryBatchResponseAmino): QueryBatchResponse;
    toAmino(message: QueryBatchResponse): QueryBatchResponseAmino;
    fromAminoMsg(object: QueryBatchResponseAminoMsg): QueryBatchResponse;
    fromProtoMsg(message: QueryBatchResponseProtoMsg): QueryBatchResponse;
    toProto(message: QueryBatchResponse): Uint8Array;
    toProtoMsg(message: QueryBatchResponse): QueryBatchResponseProtoMsg;
};
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryBalancesRequest: {
    typeUrl: string;
    encode(message: QueryBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesRequest;
    fromPartial(object: Partial<QueryBalancesRequest>): QueryBalancesRequest;
    fromAmino(object: QueryBalancesRequestAmino): QueryBalancesRequest;
    toAmino(message: QueryBalancesRequest): QueryBalancesRequestAmino;
    fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest;
    fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest;
    toProto(message: QueryBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg;
};
export declare const QueryBalancesResponse: {
    typeUrl: string;
    encode(message: QueryBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesResponse;
    fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse;
    fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse;
    toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino;
    fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse;
    fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse;
    toProto(message: QueryBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg;
};
export declare const QuerySupplyRequest: {
    typeUrl: string;
    encode(message: QuerySupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
    fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    typeUrl: string;
    encode(message: QuerySupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
export declare const QueryCreditTypesRequest: {
    typeUrl: string;
    encode(_: QueryCreditTypesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesRequest;
    fromPartial(_: Partial<QueryCreditTypesRequest>): QueryCreditTypesRequest;
    fromAmino(_: QueryCreditTypesRequestAmino): QueryCreditTypesRequest;
    toAmino(_: QueryCreditTypesRequest): QueryCreditTypesRequestAmino;
    fromAminoMsg(object: QueryCreditTypesRequestAminoMsg): QueryCreditTypesRequest;
    fromProtoMsg(message: QueryCreditTypesRequestProtoMsg): QueryCreditTypesRequest;
    toProto(message: QueryCreditTypesRequest): Uint8Array;
    toProtoMsg(message: QueryCreditTypesRequest): QueryCreditTypesRequestProtoMsg;
};
export declare const QueryCreditTypesResponse: {
    typeUrl: string;
    encode(message: QueryCreditTypesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCreditTypesResponse;
    fromPartial(object: Partial<QueryCreditTypesResponse>): QueryCreditTypesResponse;
    fromAmino(object: QueryCreditTypesResponseAmino): QueryCreditTypesResponse;
    toAmino(message: QueryCreditTypesResponse): QueryCreditTypesResponseAmino;
    fromAminoMsg(object: QueryCreditTypesResponseAminoMsg): QueryCreditTypesResponse;
    fromProtoMsg(message: QueryCreditTypesResponseProtoMsg): QueryCreditTypesResponse;
    toProto(message: QueryCreditTypesResponse): Uint8Array;
    toProtoMsg(message: QueryCreditTypesResponse): QueryCreditTypesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const ClassInfo: {
    typeUrl: string;
    encode(message: ClassInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClassInfo;
    fromPartial(object: Partial<ClassInfo>): ClassInfo;
    fromAmino(object: ClassInfoAmino): ClassInfo;
    toAmino(message: ClassInfo): ClassInfoAmino;
    fromAminoMsg(object: ClassInfoAminoMsg): ClassInfo;
    fromProtoMsg(message: ClassInfoProtoMsg): ClassInfo;
    toProto(message: ClassInfo): Uint8Array;
    toProtoMsg(message: ClassInfo): ClassInfoProtoMsg;
};
export declare const ProjectInfo: {
    typeUrl: string;
    encode(message: ProjectInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProjectInfo;
    fromPartial(object: Partial<ProjectInfo>): ProjectInfo;
    fromAmino(object: ProjectInfoAmino): ProjectInfo;
    toAmino(message: ProjectInfo): ProjectInfoAmino;
    fromAminoMsg(object: ProjectInfoAminoMsg): ProjectInfo;
    fromProtoMsg(message: ProjectInfoProtoMsg): ProjectInfo;
    toProto(message: ProjectInfo): Uint8Array;
    toProtoMsg(message: ProjectInfo): ProjectInfoProtoMsg;
};
export declare const BatchInfo: {
    typeUrl: string;
    encode(message: BatchInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchInfo;
    fromPartial(object: Partial<BatchInfo>): BatchInfo;
    fromAmino(object: BatchInfoAmino): BatchInfo;
    toAmino(message: BatchInfo): BatchInfoAmino;
    fromAminoMsg(object: BatchInfoAminoMsg): BatchInfo;
    fromProtoMsg(message: BatchInfoProtoMsg): BatchInfo;
    toProto(message: BatchInfo): Uint8Array;
    toProtoMsg(message: BatchInfo): BatchInfoProtoMsg;
};
export declare const BatchBalanceInfo: {
    typeUrl: string;
    encode(message: BatchBalanceInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchBalanceInfo;
    fromPartial(object: Partial<BatchBalanceInfo>): BatchBalanceInfo;
    fromAmino(object: BatchBalanceInfoAmino): BatchBalanceInfo;
    toAmino(message: BatchBalanceInfo): BatchBalanceInfoAmino;
    fromAminoMsg(object: BatchBalanceInfoAminoMsg): BatchBalanceInfo;
    fromProtoMsg(message: BatchBalanceInfoProtoMsg): BatchBalanceInfo;
    toProto(message: BatchBalanceInfo): Uint8Array;
    toProtoMsg(message: BatchBalanceInfo): BatchBalanceInfoProtoMsg;
};
