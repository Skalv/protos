import { ContentHash, ContentHashAmino, ContentHashSDKType, SignerEntry, SignerEntryAmino, SignerEntrySDKType, Content, ContentAmino, ContentSDKType } from "./types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByHashRequest {
    /** hash is the hash-based identifier for the anchored content. */
    hash?: ContentHash;
}
export interface QueryByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1alpha2.QueryByHashRequest";
    value: Uint8Array;
}
/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByHashRequestAmino {
    /** hash is the hash-based identifier for the anchored content. */
    hash?: ContentHashAmino;
}
export interface QueryByHashRequestAminoMsg {
    type: "/regen.data.v1alpha2.QueryByHashRequest";
    value: QueryByHashRequestAmino;
}
/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByHashRequestSDKType {
    hash?: ContentHashSDKType;
}
/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByHashResponse {
    /** entry is the ContentEntry */
    entry?: ContentEntry;
}
export interface QueryByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1alpha2.QueryByHashResponse";
    value: Uint8Array;
}
/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByHashResponseAmino {
    /** entry is the ContentEntry */
    entry?: ContentEntryAmino;
}
export interface QueryByHashResponseAminoMsg {
    type: "/regen.data.v1alpha2.QueryByHashResponse";
    value: QueryByHashResponseAmino;
}
/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByHashResponseSDKType {
    entry?: ContentEntrySDKType;
}
/** QueryBySignerRequest is the Query/BySigner request type. */
export interface QueryBySignerRequest {
    /** signer is the address of the signer to query by. */
    signer: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryBySignerRequestProtoMsg {
    typeUrl: "/regen.data.v1alpha2.QueryBySignerRequest";
    value: Uint8Array;
}
/** QueryBySignerRequest is the Query/BySigner request type. */
export interface QueryBySignerRequestAmino {
    /** signer is the address of the signer to query by. */
    signer?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryBySignerRequestAminoMsg {
    type: "/regen.data.v1alpha2.QueryBySignerRequest";
    value: QueryBySignerRequestAmino;
}
/** QueryBySignerRequest is the Query/BySigner request type. */
export interface QueryBySignerRequestSDKType {
    signer: string;
    pagination?: PageRequestSDKType;
}
/** QueryBySignerResponse is the Query/BySigner response type. */
export interface QueryBySignerResponse {
    /** entries is the ContentEntry's signed by the queried signer */
    entries: ContentEntry[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponse;
}
export interface QueryBySignerResponseProtoMsg {
    typeUrl: "/regen.data.v1alpha2.QueryBySignerResponse";
    value: Uint8Array;
}
/** QueryBySignerResponse is the Query/BySigner response type. */
export interface QueryBySignerResponseAmino {
    /** entries is the ContentEntry's signed by the queried signer */
    entries?: ContentEntryAmino[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponseAmino;
}
export interface QueryBySignerResponseAminoMsg {
    type: "/regen.data.v1alpha2.QueryBySignerResponse";
    value: QueryBySignerResponseAmino;
}
/** QueryBySignerResponse is the Query/BySigner response type. */
export interface QueryBySignerResponseSDKType {
    entries: ContentEntrySDKType[];
    pagination?: PageResponseSDKType;
}
/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntry {
    /** hash is the content hash */
    hash?: ContentHash;
    /** iri is the content IRI */
    iri: string;
    /** timestamp is the anchor Timestamp */
    timestamp?: Date;
    /** signers are the signers, if any */
    signers: SignerEntry[];
    /** content is the actual content if stored on-chain */
    content?: Content;
}
export interface ContentEntryProtoMsg {
    typeUrl: "/regen.data.v1alpha2.ContentEntry";
    value: Uint8Array;
}
/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntryAmino {
    /** hash is the content hash */
    hash?: ContentHashAmino;
    /** iri is the content IRI */
    iri?: string;
    /** timestamp is the anchor Timestamp */
    timestamp?: string;
    /** signers are the signers, if any */
    signers?: SignerEntryAmino[];
    /** content is the actual content if stored on-chain */
    content?: ContentAmino;
}
export interface ContentEntryAminoMsg {
    type: "/regen.data.v1alpha2.ContentEntry";
    value: ContentEntryAmino;
}
/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntrySDKType {
    hash?: ContentHashSDKType;
    iri: string;
    timestamp?: Date;
    signers: SignerEntrySDKType[];
    content?: ContentSDKType;
}
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
export declare const QueryBySignerRequest: {
    typeUrl: string;
    encode(message: QueryBySignerRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBySignerRequest;
    fromPartial(object: Partial<QueryBySignerRequest>): QueryBySignerRequest;
    fromAmino(object: QueryBySignerRequestAmino): QueryBySignerRequest;
    toAmino(message: QueryBySignerRequest): QueryBySignerRequestAmino;
    fromAminoMsg(object: QueryBySignerRequestAminoMsg): QueryBySignerRequest;
    fromProtoMsg(message: QueryBySignerRequestProtoMsg): QueryBySignerRequest;
    toProto(message: QueryBySignerRequest): Uint8Array;
    toProtoMsg(message: QueryBySignerRequest): QueryBySignerRequestProtoMsg;
};
export declare const QueryBySignerResponse: {
    typeUrl: string;
    encode(message: QueryBySignerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBySignerResponse;
    fromPartial(object: Partial<QueryBySignerResponse>): QueryBySignerResponse;
    fromAmino(object: QueryBySignerResponseAmino): QueryBySignerResponse;
    toAmino(message: QueryBySignerResponse): QueryBySignerResponseAmino;
    fromAminoMsg(object: QueryBySignerResponseAminoMsg): QueryBySignerResponse;
    fromProtoMsg(message: QueryBySignerResponseProtoMsg): QueryBySignerResponse;
    toProto(message: QueryBySignerResponse): Uint8Array;
    toProtoMsg(message: QueryBySignerResponse): QueryBySignerResponseProtoMsg;
};
export declare const ContentEntry: {
    typeUrl: string;
    encode(message: ContentEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContentEntry;
    fromPartial(object: Partial<ContentEntry>): ContentEntry;
    fromAmino(object: ContentEntryAmino): ContentEntry;
    toAmino(message: ContentEntry): ContentEntryAmino;
    fromAminoMsg(object: ContentEntryAminoMsg): ContentEntry;
    fromProtoMsg(message: ContentEntryProtoMsg): ContentEntry;
    toProto(message: ContentEntry): Uint8Array;
    toProtoMsg(message: ContentEntry): ContentEntryProtoMsg;
};
