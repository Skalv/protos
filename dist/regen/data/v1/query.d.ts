import { ContentHash, ContentHashAmino, ContentHashSDKType, DigestAlgorithm, RawMediaType, GraphCanonicalizationAlgorithm, GraphMerkleTree, ContentEntry, ContentEntryAmino, ContentEntrySDKType } from "./types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequest {
    /** iri is the IRI for the anchored data. */
    iri: string;
}
export interface QueryByIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryByIRIRequest";
    value: Uint8Array;
}
/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequestAmino {
    /** iri is the IRI for the anchored data. */
    iri?: string;
}
export interface QueryByIRIRequestAminoMsg {
    type: "/regen.data.v1.QueryByIRIRequest";
    value: QueryByIRIRequestAmino;
}
/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequestSDKType {
    iri: string;
}
/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponse {
    /** entry is the ContentEntry for the anchored data. */
    entry?: ContentEntry;
}
export interface QueryByIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryByIRIResponse";
    value: Uint8Array;
}
/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponseAmino {
    /** entry is the ContentEntry for the anchored data. */
    entry?: ContentEntryAmino;
}
export interface QueryByIRIResponseAminoMsg {
    type: "/regen.data.v1.QueryByIRIResponse";
    value: QueryByIRIResponseAmino;
}
/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponseSDKType {
    entry?: ContentEntrySDKType;
}
/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash?: ContentHash;
}
export interface QueryByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryByHashRequest";
    value: Uint8Array;
}
/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequestAmino {
    /** content_hash is the ContentHash for the anchored data. */
    content_hash?: ContentHashAmino;
}
export interface QueryByHashRequestAminoMsg {
    type: "/regen.data.v1.QueryByHashRequest";
    value: QueryByHashRequestAmino;
}
/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequestSDKType {
    content_hash?: ContentHashSDKType;
}
/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponse {
    /** entry is the ContentEntry for the anchored data. */
    entry?: ContentEntry;
}
export interface QueryByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryByHashResponse";
    value: Uint8Array;
}
/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponseAmino {
    /** entry is the ContentEntry for the anchored data. */
    entry?: ContentEntryAmino;
}
export interface QueryByHashResponseAminoMsg {
    type: "/regen.data.v1.QueryByHashResponse";
    value: QueryByHashResponseAmino;
}
/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponseSDKType {
    entry?: ContentEntrySDKType;
}
/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequest {
    /** attestor is the address of the attestor. */
    attestor: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryByAttestorRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryByAttestorRequest";
    value: Uint8Array;
}
/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequestAmino {
    /** attestor is the address of the attestor. */
    attestor?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryByAttestorRequestAminoMsg {
    type: "/regen.data.v1.QueryByAttestorRequest";
    value: QueryByAttestorRequestAmino;
}
/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequestSDKType {
    attestor: string;
    pagination?: PageRequestSDKType;
}
/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponse {
    /** entries are the ContentEntries attested to by the attestor. */
    entries: ContentEntry[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponse;
}
export interface QueryByAttestorResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryByAttestorResponse";
    value: Uint8Array;
}
/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponseAmino {
    /** entries are the ContentEntries attested to by the attestor. */
    entries?: ContentEntryAmino[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponseAmino;
}
export interface QueryByAttestorResponseAminoMsg {
    type: "/regen.data.v1.QueryByAttestorResponse";
    value: QueryByAttestorResponseAmino;
}
/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponseSDKType {
    entries: ContentEntrySDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash?: ContentHash;
}
export interface QueryIRIByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryIRIByHashRequest";
    value: Uint8Array;
}
/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequestAmino {
    /** content_hash is the ContentHash for the anchored data. */
    content_hash?: ContentHashAmino;
}
export interface QueryIRIByHashRequestAminoMsg {
    type: "/regen.data.v1.QueryIRIByHashRequest";
    value: QueryIRIByHashRequestAmino;
}
/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequestSDKType {
    content_hash?: ContentHashSDKType;
}
/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponse {
    /** iri is the IRI for the content hash. */
    iri: string;
}
export interface QueryIRIByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryIRIByHashResponse";
    value: Uint8Array;
}
/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponseAmino {
    /** iri is the IRI for the content hash. */
    iri?: string;
}
export interface QueryIRIByHashResponseAminoMsg {
    type: "/regen.data.v1.QueryIRIByHashResponse";
    value: QueryIRIByHashResponseAmino;
}
/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponseSDKType {
    iri: string;
}
/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequest {
    /**
     * hash represents the hash of the data based on the digest_algorithm and must
     * be encoded as a base64 string. When hash is provided as a URL parameter,
     * all instances of "+" should also be replaced with "%2b".
     */
    hash: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /** media_type represents the media type for raw data. */
    mediaType: RawMediaType;
}
export interface QueryIRIByRawHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest";
    value: Uint8Array;
}
/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequestAmino {
    /**
     * hash represents the hash of the data based on the digest_algorithm and must
     * be encoded as a base64 string. When hash is provided as a URL parameter,
     * all instances of "+" should also be replaced with "%2b".
     */
    hash?: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digest_algorithm?: DigestAlgorithm;
    /** media_type represents the media type for raw data. */
    media_type?: RawMediaType;
}
export interface QueryIRIByRawHashRequestAminoMsg {
    type: "/regen.data.v1.QueryIRIByRawHashRequest";
    value: QueryIRIByRawHashRequestAmino;
}
/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequestSDKType {
    hash: string;
    digest_algorithm: DigestAlgorithm;
    media_type: RawMediaType;
}
/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponse {
    /** iri is the IRI for the content hash. */
    iri: string;
}
export interface QueryIRIByRawHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse";
    value: Uint8Array;
}
/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponseAmino {
    /** iri is the IRI for the content hash. */
    iri?: string;
}
export interface QueryIRIByRawHashResponseAminoMsg {
    type: "/regen.data.v1.QueryIRIByRawHashResponse";
    value: QueryIRIByRawHashResponseAmino;
}
/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponseSDKType {
    iri: string;
}
/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequest {
    /**
     * hash represents the hash of the data based on the digest_algorithm and must
     * be encoded as a base64 string. When hash is provided as a URL parameter,
     * all instances of "+" should also be replaced with "%2b".
     */
    hash: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /**
     * graph_canonicalization_algorithm represents the RDF graph
     * canonicalization algorithm.
     */
    canonicalizationAlgorithm: GraphCanonicalizationAlgorithm;
    /** merkle_tree is the merkle tree type used for the graph hash, if any. */
    merkleTree: GraphMerkleTree;
}
export interface QueryIRIByGraphHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest";
    value: Uint8Array;
}
/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequestAmino {
    /**
     * hash represents the hash of the data based on the digest_algorithm and must
     * be encoded as a base64 string. When hash is provided as a URL parameter,
     * all instances of "+" should also be replaced with "%2b".
     */
    hash?: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digest_algorithm?: DigestAlgorithm;
    /**
     * graph_canonicalization_algorithm represents the RDF graph
     * canonicalization algorithm.
     */
    canonicalization_algorithm?: GraphCanonicalizationAlgorithm;
    /** merkle_tree is the merkle tree type used for the graph hash, if any. */
    merkle_tree?: GraphMerkleTree;
}
export interface QueryIRIByGraphHashRequestAminoMsg {
    type: "/regen.data.v1.QueryIRIByGraphHashRequest";
    value: QueryIRIByGraphHashRequestAmino;
}
/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequestSDKType {
    hash: string;
    digest_algorithm: DigestAlgorithm;
    canonicalization_algorithm: GraphCanonicalizationAlgorithm;
    merkle_tree: GraphMerkleTree;
}
/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponse {
    /** iri is the IRI for the content hash. */
    iri: string;
}
export interface QueryIRIByGraphHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse";
    value: Uint8Array;
}
/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponseAmino {
    /** iri is the IRI for the content hash. */
    iri?: string;
}
export interface QueryIRIByGraphHashResponseAminoMsg {
    type: "/regen.data.v1.QueryIRIByGraphHashResponse";
    value: QueryIRIByGraphHashResponseAmino;
}
/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponseSDKType {
    iri: string;
}
/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequest {
    /** iri is the IRI for the content hash. */
    iri: string;
}
export interface QueryHashByIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryHashByIRIRequest";
    value: Uint8Array;
}
/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequestAmino {
    /** iri is the IRI for the content hash. */
    iri?: string;
}
export interface QueryHashByIRIRequestAminoMsg {
    type: "/regen.data.v1.QueryHashByIRIRequest";
    value: QueryHashByIRIRequestAmino;
}
/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequestSDKType {
    iri: string;
}
/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponse {
    /** content_hash is the ContentHash for the IRI. */
    contentHash?: ContentHash;
}
export interface QueryHashByIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryHashByIRIResponse";
    value: Uint8Array;
}
/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponseAmino {
    /** content_hash is the ContentHash for the IRI. */
    content_hash?: ContentHashAmino;
}
export interface QueryHashByIRIResponseAminoMsg {
    type: "/regen.data.v1.QueryHashByIRIResponse";
    value: QueryHashByIRIResponseAmino;
}
/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponseSDKType {
    content_hash?: ContentHashSDKType;
}
/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequest {
    /** iri is the IRI for the anchored data. */
    iri: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryAttestorsByIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest";
    value: Uint8Array;
}
/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequestAmino {
    /** iri is the IRI for the anchored data. */
    iri?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryAttestorsByIRIRequestAminoMsg {
    type: "/regen.data.v1.QueryAttestorsByIRIRequest";
    value: QueryAttestorsByIRIRequestAmino;
}
/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequestSDKType {
    iri: string;
    pagination?: PageRequestSDKType;
}
/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponse {
    /** attestors are the addresses of the attestors. */
    attestors: string[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponse;
}
export interface QueryAttestorsByIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse";
    value: Uint8Array;
}
/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponseAmino {
    /** attestors are the addresses of the attestors. */
    attestors?: string[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponseAmino;
}
export interface QueryAttestorsByIRIResponseAminoMsg {
    type: "/regen.data.v1.QueryAttestorsByIRIResponse";
    value: QueryAttestorsByIRIResponseAmino;
}
/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponseSDKType {
    attestors: string[];
    pagination?: PageResponseSDKType;
}
/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash?: ContentHash;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryAttestorsByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest";
    value: Uint8Array;
}
/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequestAmino {
    /** content_hash is the ContentHash for the anchored data. */
    content_hash?: ContentHashAmino;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryAttestorsByHashRequestAminoMsg {
    type: "/regen.data.v1.QueryAttestorsByHashRequest";
    value: QueryAttestorsByHashRequestAmino;
}
/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequestSDKType {
    content_hash?: ContentHashSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponse {
    /** attestors are the addresses of the attestors. */
    attestors: string[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponse;
}
export interface QueryAttestorsByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse";
    value: Uint8Array;
}
/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponseAmino {
    /** attestors are the addresses of the attestors. */
    attestors?: string[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponseAmino;
}
export interface QueryAttestorsByHashResponseAminoMsg {
    type: "/regen.data.v1.QueryAttestorsByHashResponse";
    value: QueryAttestorsByHashResponseAmino;
}
/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponseSDKType {
    attestors: string[];
    pagination?: PageResponseSDKType;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequest {
    /** iri is the IRI for the anchored data. */
    iri: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryResolversByIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByIRIRequest";
    value: Uint8Array;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequestAmino {
    /** iri is the IRI for the anchored data. */
    iri?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryResolversByIRIRequestAminoMsg {
    type: "/regen.data.v1.QueryResolversByIRIRequest";
    value: QueryResolversByIRIRequestAmino;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequestSDKType {
    iri: string;
    pagination?: PageRequestSDKType;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponse {
    /**
     * resolver_urls are the resolver URLs that have been registered for the
     * anchored data.
     */
    resolverUrls: string[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponse;
}
export interface QueryResolversByIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByIRIResponse";
    value: Uint8Array;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponseAmino {
    /**
     * resolver_urls are the resolver URLs that have been registered for the
     * anchored data.
     */
    resolver_urls?: string[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponseAmino;
}
export interface QueryResolversByIRIResponseAminoMsg {
    type: "/regen.data.v1.QueryResolversByIRIResponse";
    value: QueryResolversByIRIResponseAmino;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponseSDKType {
    resolver_urls: string[];
    pagination?: PageResponseSDKType;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash?: ContentHash;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryResolversByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByHashRequest";
    value: Uint8Array;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequestAmino {
    /** content_hash is the ContentHash for the anchored data. */
    content_hash?: ContentHashAmino;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryResolversByHashRequestAminoMsg {
    type: "/regen.data.v1.QueryResolversByHashRequest";
    value: QueryResolversByHashRequestAmino;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequestSDKType {
    content_hash?: ContentHashSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponse {
    /**
     * resolver_urls are the resolver URLs that have been registered for the
     * anchored data.
     */
    resolverUrls: string[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponse;
}
export interface QueryResolversByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByHashResponse";
    value: Uint8Array;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponseAmino {
    /**
     * resolver_urls are the resolver URLs that have been registered for the
     * anchored data.
     */
    resolver_urls?: string[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponseAmino;
}
export interface QueryResolversByHashResponseAminoMsg {
    type: "/regen.data.v1.QueryResolversByHashResponse";
    value: QueryResolversByHashResponseAmino;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponseSDKType {
    resolver_urls: string[];
    pagination?: PageResponseSDKType;
}
/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequest {
    /** url is the resolver URL that has been registered. */
    url: string;
}
export interface QueryResolverInfoRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolverInfoRequest";
    value: Uint8Array;
}
/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequestAmino {
    /** url is the resolver URL that has been registered. */
    url?: string;
}
export interface QueryResolverInfoRequestAminoMsg {
    type: "/regen.data.v1.QueryResolverInfoRequest";
    value: QueryResolverInfoRequestAmino;
}
/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequestSDKType {
    url: string;
}
/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponse {
    /** id is the id of the resolver which can be used in Msg/RegisterResolver. */
    id: bigint;
    /** manager is the bech32 account address of the resolver manager. */
    manager: string;
}
export interface QueryResolverInfoResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolverInfoResponse";
    value: Uint8Array;
}
/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponseAmino {
    /** id is the id of the resolver which can be used in Msg/RegisterResolver. */
    id?: string;
    /** manager is the bech32 account address of the resolver manager. */
    manager?: string;
}
export interface QueryResolverInfoResponseAminoMsg {
    type: "/regen.data.v1.QueryResolverInfoResponse";
    value: QueryResolverInfoResponseAmino;
}
/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponseSDKType {
    id: bigint;
    manager: string;
}
export declare const QueryByIRIRequest: {
    typeUrl: string;
    encode(message: QueryByIRIRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryByIRIRequest;
    fromPartial(object: Partial<QueryByIRIRequest>): QueryByIRIRequest;
    fromAmino(object: QueryByIRIRequestAmino): QueryByIRIRequest;
    toAmino(message: QueryByIRIRequest): QueryByIRIRequestAmino;
    fromAminoMsg(object: QueryByIRIRequestAminoMsg): QueryByIRIRequest;
    fromProtoMsg(message: QueryByIRIRequestProtoMsg): QueryByIRIRequest;
    toProto(message: QueryByIRIRequest): Uint8Array;
    toProtoMsg(message: QueryByIRIRequest): QueryByIRIRequestProtoMsg;
};
export declare const QueryByIRIResponse: {
    typeUrl: string;
    encode(message: QueryByIRIResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryByIRIResponse;
    fromPartial(object: Partial<QueryByIRIResponse>): QueryByIRIResponse;
    fromAmino(object: QueryByIRIResponseAmino): QueryByIRIResponse;
    toAmino(message: QueryByIRIResponse): QueryByIRIResponseAmino;
    fromAminoMsg(object: QueryByIRIResponseAminoMsg): QueryByIRIResponse;
    fromProtoMsg(message: QueryByIRIResponseProtoMsg): QueryByIRIResponse;
    toProto(message: QueryByIRIResponse): Uint8Array;
    toProtoMsg(message: QueryByIRIResponse): QueryByIRIResponseProtoMsg;
};
export declare const QueryByHashRequest: {
    typeUrl: string;
    encode(message: QueryByHashRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryByHashRequest;
    fromPartial(object: Partial<QueryByHashRequest>): QueryByHashRequest;
    fromAmino(object: QueryByHashRequestAmino): QueryByHashRequest;
    toAmino(message: QueryByHashRequest): QueryByHashRequestAmino;
    fromAminoMsg(object: QueryByHashRequestAminoMsg): QueryByHashRequest;
    fromProtoMsg(message: QueryByHashRequestProtoMsg): QueryByHashRequest;
    toProto(message: QueryByHashRequest): Uint8Array;
    toProtoMsg(message: QueryByHashRequest): QueryByHashRequestProtoMsg;
};
export declare const QueryByHashResponse: {
    typeUrl: string;
    encode(message: QueryByHashResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryByHashResponse;
    fromPartial(object: Partial<QueryByHashResponse>): QueryByHashResponse;
    fromAmino(object: QueryByHashResponseAmino): QueryByHashResponse;
    toAmino(message: QueryByHashResponse): QueryByHashResponseAmino;
    fromAminoMsg(object: QueryByHashResponseAminoMsg): QueryByHashResponse;
    fromProtoMsg(message: QueryByHashResponseProtoMsg): QueryByHashResponse;
    toProto(message: QueryByHashResponse): Uint8Array;
    toProtoMsg(message: QueryByHashResponse): QueryByHashResponseProtoMsg;
};
export declare const QueryByAttestorRequest: {
    typeUrl: string;
    encode(message: QueryByAttestorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryByAttestorRequest;
    fromPartial(object: Partial<QueryByAttestorRequest>): QueryByAttestorRequest;
    fromAmino(object: QueryByAttestorRequestAmino): QueryByAttestorRequest;
    toAmino(message: QueryByAttestorRequest): QueryByAttestorRequestAmino;
    fromAminoMsg(object: QueryByAttestorRequestAminoMsg): QueryByAttestorRequest;
    fromProtoMsg(message: QueryByAttestorRequestProtoMsg): QueryByAttestorRequest;
    toProto(message: QueryByAttestorRequest): Uint8Array;
    toProtoMsg(message: QueryByAttestorRequest): QueryByAttestorRequestProtoMsg;
};
export declare const QueryByAttestorResponse: {
    typeUrl: string;
    encode(message: QueryByAttestorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryByAttestorResponse;
    fromPartial(object: Partial<QueryByAttestorResponse>): QueryByAttestorResponse;
    fromAmino(object: QueryByAttestorResponseAmino): QueryByAttestorResponse;
    toAmino(message: QueryByAttestorResponse): QueryByAttestorResponseAmino;
    fromAminoMsg(object: QueryByAttestorResponseAminoMsg): QueryByAttestorResponse;
    fromProtoMsg(message: QueryByAttestorResponseProtoMsg): QueryByAttestorResponse;
    toProto(message: QueryByAttestorResponse): Uint8Array;
    toProtoMsg(message: QueryByAttestorResponse): QueryByAttestorResponseProtoMsg;
};
export declare const QueryIRIByHashRequest: {
    typeUrl: string;
    encode(message: QueryIRIByHashRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByHashRequest;
    fromPartial(object: Partial<QueryIRIByHashRequest>): QueryIRIByHashRequest;
    fromAmino(object: QueryIRIByHashRequestAmino): QueryIRIByHashRequest;
    toAmino(message: QueryIRIByHashRequest): QueryIRIByHashRequestAmino;
    fromAminoMsg(object: QueryIRIByHashRequestAminoMsg): QueryIRIByHashRequest;
    fromProtoMsg(message: QueryIRIByHashRequestProtoMsg): QueryIRIByHashRequest;
    toProto(message: QueryIRIByHashRequest): Uint8Array;
    toProtoMsg(message: QueryIRIByHashRequest): QueryIRIByHashRequestProtoMsg;
};
export declare const QueryIRIByHashResponse: {
    typeUrl: string;
    encode(message: QueryIRIByHashResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByHashResponse;
    fromPartial(object: Partial<QueryIRIByHashResponse>): QueryIRIByHashResponse;
    fromAmino(object: QueryIRIByHashResponseAmino): QueryIRIByHashResponse;
    toAmino(message: QueryIRIByHashResponse): QueryIRIByHashResponseAmino;
    fromAminoMsg(object: QueryIRIByHashResponseAminoMsg): QueryIRIByHashResponse;
    fromProtoMsg(message: QueryIRIByHashResponseProtoMsg): QueryIRIByHashResponse;
    toProto(message: QueryIRIByHashResponse): Uint8Array;
    toProtoMsg(message: QueryIRIByHashResponse): QueryIRIByHashResponseProtoMsg;
};
export declare const QueryIRIByRawHashRequest: {
    typeUrl: string;
    encode(message: QueryIRIByRawHashRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByRawHashRequest;
    fromPartial(object: Partial<QueryIRIByRawHashRequest>): QueryIRIByRawHashRequest;
    fromAmino(object: QueryIRIByRawHashRequestAmino): QueryIRIByRawHashRequest;
    toAmino(message: QueryIRIByRawHashRequest): QueryIRIByRawHashRequestAmino;
    fromAminoMsg(object: QueryIRIByRawHashRequestAminoMsg): QueryIRIByRawHashRequest;
    fromProtoMsg(message: QueryIRIByRawHashRequestProtoMsg): QueryIRIByRawHashRequest;
    toProto(message: QueryIRIByRawHashRequest): Uint8Array;
    toProtoMsg(message: QueryIRIByRawHashRequest): QueryIRIByRawHashRequestProtoMsg;
};
export declare const QueryIRIByRawHashResponse: {
    typeUrl: string;
    encode(message: QueryIRIByRawHashResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByRawHashResponse;
    fromPartial(object: Partial<QueryIRIByRawHashResponse>): QueryIRIByRawHashResponse;
    fromAmino(object: QueryIRIByRawHashResponseAmino): QueryIRIByRawHashResponse;
    toAmino(message: QueryIRIByRawHashResponse): QueryIRIByRawHashResponseAmino;
    fromAminoMsg(object: QueryIRIByRawHashResponseAminoMsg): QueryIRIByRawHashResponse;
    fromProtoMsg(message: QueryIRIByRawHashResponseProtoMsg): QueryIRIByRawHashResponse;
    toProto(message: QueryIRIByRawHashResponse): Uint8Array;
    toProtoMsg(message: QueryIRIByRawHashResponse): QueryIRIByRawHashResponseProtoMsg;
};
export declare const QueryIRIByGraphHashRequest: {
    typeUrl: string;
    encode(message: QueryIRIByGraphHashRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByGraphHashRequest;
    fromPartial(object: Partial<QueryIRIByGraphHashRequest>): QueryIRIByGraphHashRequest;
    fromAmino(object: QueryIRIByGraphHashRequestAmino): QueryIRIByGraphHashRequest;
    toAmino(message: QueryIRIByGraphHashRequest): QueryIRIByGraphHashRequestAmino;
    fromAminoMsg(object: QueryIRIByGraphHashRequestAminoMsg): QueryIRIByGraphHashRequest;
    fromProtoMsg(message: QueryIRIByGraphHashRequestProtoMsg): QueryIRIByGraphHashRequest;
    toProto(message: QueryIRIByGraphHashRequest): Uint8Array;
    toProtoMsg(message: QueryIRIByGraphHashRequest): QueryIRIByGraphHashRequestProtoMsg;
};
export declare const QueryIRIByGraphHashResponse: {
    typeUrl: string;
    encode(message: QueryIRIByGraphHashResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByGraphHashResponse;
    fromPartial(object: Partial<QueryIRIByGraphHashResponse>): QueryIRIByGraphHashResponse;
    fromAmino(object: QueryIRIByGraphHashResponseAmino): QueryIRIByGraphHashResponse;
    toAmino(message: QueryIRIByGraphHashResponse): QueryIRIByGraphHashResponseAmino;
    fromAminoMsg(object: QueryIRIByGraphHashResponseAminoMsg): QueryIRIByGraphHashResponse;
    fromProtoMsg(message: QueryIRIByGraphHashResponseProtoMsg): QueryIRIByGraphHashResponse;
    toProto(message: QueryIRIByGraphHashResponse): Uint8Array;
    toProtoMsg(message: QueryIRIByGraphHashResponse): QueryIRIByGraphHashResponseProtoMsg;
};
export declare const QueryHashByIRIRequest: {
    typeUrl: string;
    encode(message: QueryHashByIRIRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHashByIRIRequest;
    fromPartial(object: Partial<QueryHashByIRIRequest>): QueryHashByIRIRequest;
    fromAmino(object: QueryHashByIRIRequestAmino): QueryHashByIRIRequest;
    toAmino(message: QueryHashByIRIRequest): QueryHashByIRIRequestAmino;
    fromAminoMsg(object: QueryHashByIRIRequestAminoMsg): QueryHashByIRIRequest;
    fromProtoMsg(message: QueryHashByIRIRequestProtoMsg): QueryHashByIRIRequest;
    toProto(message: QueryHashByIRIRequest): Uint8Array;
    toProtoMsg(message: QueryHashByIRIRequest): QueryHashByIRIRequestProtoMsg;
};
export declare const QueryHashByIRIResponse: {
    typeUrl: string;
    encode(message: QueryHashByIRIResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHashByIRIResponse;
    fromPartial(object: Partial<QueryHashByIRIResponse>): QueryHashByIRIResponse;
    fromAmino(object: QueryHashByIRIResponseAmino): QueryHashByIRIResponse;
    toAmino(message: QueryHashByIRIResponse): QueryHashByIRIResponseAmino;
    fromAminoMsg(object: QueryHashByIRIResponseAminoMsg): QueryHashByIRIResponse;
    fromProtoMsg(message: QueryHashByIRIResponseProtoMsg): QueryHashByIRIResponse;
    toProto(message: QueryHashByIRIResponse): Uint8Array;
    toProtoMsg(message: QueryHashByIRIResponse): QueryHashByIRIResponseProtoMsg;
};
export declare const QueryAttestorsByIRIRequest: {
    typeUrl: string;
    encode(message: QueryAttestorsByIRIRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByIRIRequest;
    fromPartial(object: Partial<QueryAttestorsByIRIRequest>): QueryAttestorsByIRIRequest;
    fromAmino(object: QueryAttestorsByIRIRequestAmino): QueryAttestorsByIRIRequest;
    toAmino(message: QueryAttestorsByIRIRequest): QueryAttestorsByIRIRequestAmino;
    fromAminoMsg(object: QueryAttestorsByIRIRequestAminoMsg): QueryAttestorsByIRIRequest;
    fromProtoMsg(message: QueryAttestorsByIRIRequestProtoMsg): QueryAttestorsByIRIRequest;
    toProto(message: QueryAttestorsByIRIRequest): Uint8Array;
    toProtoMsg(message: QueryAttestorsByIRIRequest): QueryAttestorsByIRIRequestProtoMsg;
};
export declare const QueryAttestorsByIRIResponse: {
    typeUrl: string;
    encode(message: QueryAttestorsByIRIResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByIRIResponse;
    fromPartial(object: Partial<QueryAttestorsByIRIResponse>): QueryAttestorsByIRIResponse;
    fromAmino(object: QueryAttestorsByIRIResponseAmino): QueryAttestorsByIRIResponse;
    toAmino(message: QueryAttestorsByIRIResponse): QueryAttestorsByIRIResponseAmino;
    fromAminoMsg(object: QueryAttestorsByIRIResponseAminoMsg): QueryAttestorsByIRIResponse;
    fromProtoMsg(message: QueryAttestorsByIRIResponseProtoMsg): QueryAttestorsByIRIResponse;
    toProto(message: QueryAttestorsByIRIResponse): Uint8Array;
    toProtoMsg(message: QueryAttestorsByIRIResponse): QueryAttestorsByIRIResponseProtoMsg;
};
export declare const QueryAttestorsByHashRequest: {
    typeUrl: string;
    encode(message: QueryAttestorsByHashRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByHashRequest;
    fromPartial(object: Partial<QueryAttestorsByHashRequest>): QueryAttestorsByHashRequest;
    fromAmino(object: QueryAttestorsByHashRequestAmino): QueryAttestorsByHashRequest;
    toAmino(message: QueryAttestorsByHashRequest): QueryAttestorsByHashRequestAmino;
    fromAminoMsg(object: QueryAttestorsByHashRequestAminoMsg): QueryAttestorsByHashRequest;
    fromProtoMsg(message: QueryAttestorsByHashRequestProtoMsg): QueryAttestorsByHashRequest;
    toProto(message: QueryAttestorsByHashRequest): Uint8Array;
    toProtoMsg(message: QueryAttestorsByHashRequest): QueryAttestorsByHashRequestProtoMsg;
};
export declare const QueryAttestorsByHashResponse: {
    typeUrl: string;
    encode(message: QueryAttestorsByHashResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByHashResponse;
    fromPartial(object: Partial<QueryAttestorsByHashResponse>): QueryAttestorsByHashResponse;
    fromAmino(object: QueryAttestorsByHashResponseAmino): QueryAttestorsByHashResponse;
    toAmino(message: QueryAttestorsByHashResponse): QueryAttestorsByHashResponseAmino;
    fromAminoMsg(object: QueryAttestorsByHashResponseAminoMsg): QueryAttestorsByHashResponse;
    fromProtoMsg(message: QueryAttestorsByHashResponseProtoMsg): QueryAttestorsByHashResponse;
    toProto(message: QueryAttestorsByHashResponse): Uint8Array;
    toProtoMsg(message: QueryAttestorsByHashResponse): QueryAttestorsByHashResponseProtoMsg;
};
export declare const QueryResolversByIRIRequest: {
    typeUrl: string;
    encode(message: QueryResolversByIRIRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByIRIRequest;
    fromPartial(object: Partial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest;
    fromAmino(object: QueryResolversByIRIRequestAmino): QueryResolversByIRIRequest;
    toAmino(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestAmino;
    fromAminoMsg(object: QueryResolversByIRIRequestAminoMsg): QueryResolversByIRIRequest;
    fromProtoMsg(message: QueryResolversByIRIRequestProtoMsg): QueryResolversByIRIRequest;
    toProto(message: QueryResolversByIRIRequest): Uint8Array;
    toProtoMsg(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestProtoMsg;
};
export declare const QueryResolversByIRIResponse: {
    typeUrl: string;
    encode(message: QueryResolversByIRIResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByIRIResponse;
    fromPartial(object: Partial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse;
    fromAmino(object: QueryResolversByIRIResponseAmino): QueryResolversByIRIResponse;
    toAmino(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseAmino;
    fromAminoMsg(object: QueryResolversByIRIResponseAminoMsg): QueryResolversByIRIResponse;
    fromProtoMsg(message: QueryResolversByIRIResponseProtoMsg): QueryResolversByIRIResponse;
    toProto(message: QueryResolversByIRIResponse): Uint8Array;
    toProtoMsg(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseProtoMsg;
};
export declare const QueryResolversByHashRequest: {
    typeUrl: string;
    encode(message: QueryResolversByHashRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByHashRequest;
    fromPartial(object: Partial<QueryResolversByHashRequest>): QueryResolversByHashRequest;
    fromAmino(object: QueryResolversByHashRequestAmino): QueryResolversByHashRequest;
    toAmino(message: QueryResolversByHashRequest): QueryResolversByHashRequestAmino;
    fromAminoMsg(object: QueryResolversByHashRequestAminoMsg): QueryResolversByHashRequest;
    fromProtoMsg(message: QueryResolversByHashRequestProtoMsg): QueryResolversByHashRequest;
    toProto(message: QueryResolversByHashRequest): Uint8Array;
    toProtoMsg(message: QueryResolversByHashRequest): QueryResolversByHashRequestProtoMsg;
};
export declare const QueryResolversByHashResponse: {
    typeUrl: string;
    encode(message: QueryResolversByHashResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByHashResponse;
    fromPartial(object: Partial<QueryResolversByHashResponse>): QueryResolversByHashResponse;
    fromAmino(object: QueryResolversByHashResponseAmino): QueryResolversByHashResponse;
    toAmino(message: QueryResolversByHashResponse): QueryResolversByHashResponseAmino;
    fromAminoMsg(object: QueryResolversByHashResponseAminoMsg): QueryResolversByHashResponse;
    fromProtoMsg(message: QueryResolversByHashResponseProtoMsg): QueryResolversByHashResponse;
    toProto(message: QueryResolversByHashResponse): Uint8Array;
    toProtoMsg(message: QueryResolversByHashResponse): QueryResolversByHashResponseProtoMsg;
};
export declare const QueryResolverInfoRequest: {
    typeUrl: string;
    encode(message: QueryResolverInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryResolverInfoRequest;
    fromPartial(object: Partial<QueryResolverInfoRequest>): QueryResolverInfoRequest;
    fromAmino(object: QueryResolverInfoRequestAmino): QueryResolverInfoRequest;
    toAmino(message: QueryResolverInfoRequest): QueryResolverInfoRequestAmino;
    fromAminoMsg(object: QueryResolverInfoRequestAminoMsg): QueryResolverInfoRequest;
    fromProtoMsg(message: QueryResolverInfoRequestProtoMsg): QueryResolverInfoRequest;
    toProto(message: QueryResolverInfoRequest): Uint8Array;
    toProtoMsg(message: QueryResolverInfoRequest): QueryResolverInfoRequestProtoMsg;
};
export declare const QueryResolverInfoResponse: {
    typeUrl: string;
    encode(message: QueryResolverInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryResolverInfoResponse;
    fromPartial(object: Partial<QueryResolverInfoResponse>): QueryResolverInfoResponse;
    fromAmino(object: QueryResolverInfoResponseAmino): QueryResolverInfoResponse;
    toAmino(message: QueryResolverInfoResponse): QueryResolverInfoResponseAmino;
    fromAminoMsg(object: QueryResolverInfoResponseAminoMsg): QueryResolverInfoResponse;
    fromProtoMsg(message: QueryResolverInfoResponseProtoMsg): QueryResolverInfoResponse;
    toProto(message: QueryResolverInfoResponse): Uint8Array;
    toProtoMsg(message: QueryResolverInfoResponse): QueryResolverInfoResponseProtoMsg;
};
