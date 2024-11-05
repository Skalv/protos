import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryByIRIRequest, QueryByIRIResponse, QueryByHashRequest, QueryByHashResponse, QueryByAttestorRequest, QueryByAttestorResponse, QueryIRIByHashRequest, QueryIRIByHashResponse, QueryIRIByRawHashRequest, QueryIRIByRawHashResponse, QueryIRIByGraphHashRequest, QueryIRIByGraphHashResponse, QueryHashByIRIRequest, QueryHashByIRIResponse, QueryAttestorsByIRIRequest, QueryAttestorsByIRIResponse, QueryAttestorsByHashRequest, QueryAttestorsByHashResponse, QueryResolversByIRIRequest, QueryResolversByIRIResponse, QueryResolversByHashRequest, QueryResolversByHashResponse, QueryResolverInfoRequest, QueryResolverInfoResponse } from "./query";
/** Query is the regen.data.v1 Query service */
export interface Query {
    /** ByIRI queries data based on IRI. */
    byIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse>;
    /** ByHash queries data based on ContentHash. */
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
    /** ByAttestor queries data based on attestor. */
    byAttestor(request: QueryByAttestorRequest): Promise<QueryByAttestorResponse>;
    /** IRIByHash queries IRI based on ContentHash. */
    iRIByHash(request: QueryIRIByHashRequest): Promise<QueryIRIByHashResponse>;
    /** IRIByRawHash queries IRI based on ContentHash_Raw properties. */
    iRIByRawHash(request: QueryIRIByRawHashRequest): Promise<QueryIRIByRawHashResponse>;
    /** IRIByGraphHash queries IRI based on ContentHash_Graph properties. */
    iRIByGraphHash(request: QueryIRIByGraphHashRequest): Promise<QueryIRIByGraphHashResponse>;
    /** HashByIRI queries ContentHash based on IRI. */
    hashByIRI(request: QueryHashByIRIRequest): Promise<QueryHashByIRIResponse>;
    /** AttestorsByIRI queries attestors based on IRI. */
    attestorsByIRI(request: QueryAttestorsByIRIRequest): Promise<QueryAttestorsByIRIResponse>;
    /** AttestorsByHash queries attestors based on ContentHash. */
    attestorsByHash(request: QueryAttestorsByHashRequest): Promise<QueryAttestorsByHashResponse>;
    /** ResolversByIRI queries resolvers based on IRI. */
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse>;
    /** ResolversByHash queries resolvers based on ContentHash. */
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse>;
    /** ResolverInfo queries information about a resolved based on URL. */
    resolverInfo(request: QueryResolverInfoRequest): Promise<QueryResolverInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    byIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse>;
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
    byAttestor(request: QueryByAttestorRequest): Promise<QueryByAttestorResponse>;
    iRIByHash(request: QueryIRIByHashRequest): Promise<QueryIRIByHashResponse>;
    iRIByRawHash(request: QueryIRIByRawHashRequest): Promise<QueryIRIByRawHashResponse>;
    iRIByGraphHash(request: QueryIRIByGraphHashRequest): Promise<QueryIRIByGraphHashResponse>;
    hashByIRI(request: QueryHashByIRIRequest): Promise<QueryHashByIRIResponse>;
    attestorsByIRI(request: QueryAttestorsByIRIRequest): Promise<QueryAttestorsByIRIResponse>;
    attestorsByHash(request: QueryAttestorsByHashRequest): Promise<QueryAttestorsByHashResponse>;
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse>;
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse>;
    resolverInfo(request: QueryResolverInfoRequest): Promise<QueryResolverInfoResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    byIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse>;
    byHash(request: QueryByHashRequest): Promise<QueryByHashResponse>;
    byAttestor(request: QueryByAttestorRequest): Promise<QueryByAttestorResponse>;
    iRIByHash(request: QueryIRIByHashRequest): Promise<QueryIRIByHashResponse>;
    iRIByRawHash(request: QueryIRIByRawHashRequest): Promise<QueryIRIByRawHashResponse>;
    iRIByGraphHash(request: QueryIRIByGraphHashRequest): Promise<QueryIRIByGraphHashResponse>;
    hashByIRI(request: QueryHashByIRIRequest): Promise<QueryHashByIRIResponse>;
    attestorsByIRI(request: QueryAttestorsByIRIRequest): Promise<QueryAttestorsByIRIResponse>;
    attestorsByHash(request: QueryAttestorsByHashRequest): Promise<QueryAttestorsByHashResponse>;
    resolversByIRI(request: QueryResolversByIRIRequest): Promise<QueryResolversByIRIResponse>;
    resolversByHash(request: QueryResolversByHashRequest): Promise<QueryResolversByHashResponse>;
    resolverInfo(request: QueryResolverInfoRequest): Promise<QueryResolverInfoResponse>;
};
