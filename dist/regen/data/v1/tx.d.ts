import { ContentHash, ContentHashAmino, ContentHashSDKType, ContentHash_Graph, ContentHash_GraphAmino, ContentHash_GraphSDKType, AttestorEntry, AttestorEntryAmino, AttestorEntrySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchor {
    /**
     * sender is the address of the sender of the transaction. The sender in
     * Anchor is not attesting to the veracity of the underlying data. They
     * can simply be an intermediary providing services.
     */
    sender: string;
    /** content_hash is the content hash for the data to anchor. */
    contentHash?: ContentHash;
}
export interface MsgAnchorProtoMsg {
    typeUrl: "/regen.data.v1.MsgAnchor";
    value: Uint8Array;
}
/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchorAmino {
    /**
     * sender is the address of the sender of the transaction. The sender in
     * Anchor is not attesting to the veracity of the underlying data. They
     * can simply be an intermediary providing services.
     */
    sender?: string;
    /** content_hash is the content hash for the data to anchor. */
    content_hash?: ContentHashAmino;
}
export interface MsgAnchorAminoMsg {
    type: "/regen.data.v1.MsgAnchor";
    value: MsgAnchorAmino;
}
/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchorSDKType {
    sender: string;
    content_hash?: ContentHashSDKType;
}
/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponse {
    /** iri is the IRI of the data that was anchored. */
    iri: string;
    /** timestamp is the timestamp at which the data was anchored. */
    timestamp?: Date;
}
export interface MsgAnchorResponseProtoMsg {
    typeUrl: "/regen.data.v1.MsgAnchorResponse";
    value: Uint8Array;
}
/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponseAmino {
    /** iri is the IRI of the data that was anchored. */
    iri?: string;
    /** timestamp is the timestamp at which the data was anchored. */
    timestamp?: string;
}
export interface MsgAnchorResponseAminoMsg {
    type: "/regen.data.v1.MsgAnchorResponse";
    value: MsgAnchorResponseAmino;
}
/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponseSDKType {
    iri: string;
    timestamp?: Date;
}
/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttest {
    /**
     * attestor is the addresses of the account attesting to the veracity of the
     * data. By making an Attest request, the attestor is attesting to the
     * veracity of the data referenced by the IRI. The precise meaning of this may
     * vary depending on the underlying data.
     */
    attestor: string;
    /**
     * content_hashes are the content hashes for anchored data. Only RDF graph
     * data can be signed as its data model is intended to specifically convey
     * semantic meaning.
     */
    contentHashes: ContentHash_Graph[];
}
export interface MsgAttestProtoMsg {
    typeUrl: "/regen.data.v1.MsgAttest";
    value: Uint8Array;
}
/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttestAmino {
    /**
     * attestor is the addresses of the account attesting to the veracity of the
     * data. By making an Attest request, the attestor is attesting to the
     * veracity of the data referenced by the IRI. The precise meaning of this may
     * vary depending on the underlying data.
     */
    attestor?: string;
    /**
     * content_hashes are the content hashes for anchored data. Only RDF graph
     * data can be signed as its data model is intended to specifically convey
     * semantic meaning.
     */
    content_hashes?: ContentHash_GraphAmino[];
}
export interface MsgAttestAminoMsg {
    type: "/regen.data.v1.MsgAttest";
    value: MsgAttestAmino;
}
/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttestSDKType {
    attestor: string;
    content_hashes: ContentHash_GraphSDKType[];
}
/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponse {
    /**
     * new_entries are the new attestor entries including the attestor, the IRI,
     * and the timestamp. If the attestor attests to the same piece of data, the
     * entry will not be updated and not included in the response.
     */
    newEntries: AttestorEntry[];
}
export interface MsgAttestResponseProtoMsg {
    typeUrl: "/regen.data.v1.MsgAttestResponse";
    value: Uint8Array;
}
/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponseAmino {
    /**
     * new_entries are the new attestor entries including the attestor, the IRI,
     * and the timestamp. If the attestor attests to the same piece of data, the
     * entry will not be updated and not included in the response.
     */
    new_entries?: AttestorEntryAmino[];
}
export interface MsgAttestResponseAminoMsg {
    type: "/regen.data.v1.MsgAttestResponse";
    value: MsgAttestResponseAmino;
}
/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponseSDKType {
    new_entries: AttestorEntrySDKType[];
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolver {
    /**
     * manager is the address of the resolver manager. The manager is able
     * to make future calls using the ID returned by this operation with
     * Msg/RegisterResolver. To authorize other accounts to register resolvers,
     * the manager should make use of cosmos.authz.
     */
    manager: string;
    /**
     * resolver_url is a resolver URL which should refer to an HTTP service
     * which will respond to a GET request with the IRI of a ContentHash
     * and return the content if it exists or a 404. For graph data, resolvers
     * should use the HTTP Accept header to negotiate the RDF serialization
     * format.
     */
    resolverUrl: string;
}
export interface MsgDefineResolverProtoMsg {
    typeUrl: "/regen.data.v1.MsgDefineResolver";
    value: Uint8Array;
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolverAmino {
    /**
     * manager is the address of the resolver manager. The manager is able
     * to make future calls using the ID returned by this operation with
     * Msg/RegisterResolver. To authorize other accounts to register resolvers,
     * the manager should make use of cosmos.authz.
     */
    manager?: string;
    /**
     * resolver_url is a resolver URL which should refer to an HTTP service
     * which will respond to a GET request with the IRI of a ContentHash
     * and return the content if it exists or a 404. For graph data, resolvers
     * should use the HTTP Accept header to negotiate the RDF serialization
     * format.
     */
    resolver_url?: string;
}
export interface MsgDefineResolverAminoMsg {
    type: "/regen.data.v1.MsgDefineResolver";
    value: MsgDefineResolverAmino;
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolverSDKType {
    manager: string;
    resolver_url: string;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponse {
    /**
     * resolver_id is the integer ID of the resolver to be used in
     * MsgRegisterResolver.
     */
    resolverId: bigint;
}
export interface MsgDefineResolverResponseProtoMsg {
    typeUrl: "/regen.data.v1.MsgDefineResolverResponse";
    value: Uint8Array;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponseAmino {
    /**
     * resolver_id is the integer ID of the resolver to be used in
     * MsgRegisterResolver.
     */
    resolver_id?: string;
}
export interface MsgDefineResolverResponseAminoMsg {
    type: "/regen.data.v1.MsgDefineResolverResponse";
    value: MsgDefineResolverResponseAmino;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponseSDKType {
    resolver_id: bigint;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolver {
    /**
     * manager is the address of the resolver manager who registered this
     * resolver with Msg/DefinedResolver.
     */
    manager: string;
    /** resolver_id is the ID of a resolver defined with Msg/DefineResolver. */
    resolverId: bigint;
    /**
     * content_hashes is a list of content hashes which the resolver claims to
     * serve.
     */
    contentHashes: ContentHash[];
}
export interface MsgRegisterResolverProtoMsg {
    typeUrl: "/regen.data.v1.MsgRegisterResolver";
    value: Uint8Array;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolverAmino {
    /**
     * manager is the address of the resolver manager who registered this
     * resolver with Msg/DefinedResolver.
     */
    manager?: string;
    /** resolver_id is the ID of a resolver defined with Msg/DefineResolver. */
    resolver_id?: string;
    /**
     * content_hashes is a list of content hashes which the resolver claims to
     * serve.
     */
    content_hashes?: ContentHashAmino[];
}
export interface MsgRegisterResolverAminoMsg {
    type: "/regen.data.v1.MsgRegisterResolver";
    value: MsgRegisterResolverAmino;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolverSDKType {
    manager: string;
    resolver_id: bigint;
    content_hashes: ContentHashSDKType[];
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponse {
}
export interface MsgRegisterResolverResponseProtoMsg {
    typeUrl: "/regen.data.v1.MsgRegisterResolverResponse";
    value: Uint8Array;
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponseAmino {
}
export interface MsgRegisterResolverResponseAminoMsg {
    type: "/regen.data.v1.MsgRegisterResolverResponse";
    value: MsgRegisterResolverResponseAmino;
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponseSDKType {
}
export declare const MsgAnchor: {
    typeUrl: string;
    encode(message: MsgAnchor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchor;
    fromPartial(object: Partial<MsgAnchor>): MsgAnchor;
    fromAmino(object: MsgAnchorAmino): MsgAnchor;
    toAmino(message: MsgAnchor): MsgAnchorAmino;
    fromAminoMsg(object: MsgAnchorAminoMsg): MsgAnchor;
    fromProtoMsg(message: MsgAnchorProtoMsg): MsgAnchor;
    toProto(message: MsgAnchor): Uint8Array;
    toProtoMsg(message: MsgAnchor): MsgAnchorProtoMsg;
};
export declare const MsgAnchorResponse: {
    typeUrl: string;
    encode(message: MsgAnchorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchorResponse;
    fromPartial(object: Partial<MsgAnchorResponse>): MsgAnchorResponse;
    fromAmino(object: MsgAnchorResponseAmino): MsgAnchorResponse;
    toAmino(message: MsgAnchorResponse): MsgAnchorResponseAmino;
    fromAminoMsg(object: MsgAnchorResponseAminoMsg): MsgAnchorResponse;
    fromProtoMsg(message: MsgAnchorResponseProtoMsg): MsgAnchorResponse;
    toProto(message: MsgAnchorResponse): Uint8Array;
    toProtoMsg(message: MsgAnchorResponse): MsgAnchorResponseProtoMsg;
};
export declare const MsgAttest: {
    typeUrl: string;
    encode(message: MsgAttest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAttest;
    fromPartial(object: Partial<MsgAttest>): MsgAttest;
    fromAmino(object: MsgAttestAmino): MsgAttest;
    toAmino(message: MsgAttest): MsgAttestAmino;
    fromAminoMsg(object: MsgAttestAminoMsg): MsgAttest;
    fromProtoMsg(message: MsgAttestProtoMsg): MsgAttest;
    toProto(message: MsgAttest): Uint8Array;
    toProtoMsg(message: MsgAttest): MsgAttestProtoMsg;
};
export declare const MsgAttestResponse: {
    typeUrl: string;
    encode(message: MsgAttestResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAttestResponse;
    fromPartial(object: Partial<MsgAttestResponse>): MsgAttestResponse;
    fromAmino(object: MsgAttestResponseAmino): MsgAttestResponse;
    toAmino(message: MsgAttestResponse): MsgAttestResponseAmino;
    fromAminoMsg(object: MsgAttestResponseAminoMsg): MsgAttestResponse;
    fromProtoMsg(message: MsgAttestResponseProtoMsg): MsgAttestResponse;
    toProto(message: MsgAttestResponse): Uint8Array;
    toProtoMsg(message: MsgAttestResponse): MsgAttestResponseProtoMsg;
};
export declare const MsgDefineResolver: {
    typeUrl: string;
    encode(message: MsgDefineResolver, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDefineResolver;
    fromPartial(object: Partial<MsgDefineResolver>): MsgDefineResolver;
    fromAmino(object: MsgDefineResolverAmino): MsgDefineResolver;
    toAmino(message: MsgDefineResolver): MsgDefineResolverAmino;
    fromAminoMsg(object: MsgDefineResolverAminoMsg): MsgDefineResolver;
    fromProtoMsg(message: MsgDefineResolverProtoMsg): MsgDefineResolver;
    toProto(message: MsgDefineResolver): Uint8Array;
    toProtoMsg(message: MsgDefineResolver): MsgDefineResolverProtoMsg;
};
export declare const MsgDefineResolverResponse: {
    typeUrl: string;
    encode(message: MsgDefineResolverResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDefineResolverResponse;
    fromPartial(object: Partial<MsgDefineResolverResponse>): MsgDefineResolverResponse;
    fromAmino(object: MsgDefineResolverResponseAmino): MsgDefineResolverResponse;
    toAmino(message: MsgDefineResolverResponse): MsgDefineResolverResponseAmino;
    fromAminoMsg(object: MsgDefineResolverResponseAminoMsg): MsgDefineResolverResponse;
    fromProtoMsg(message: MsgDefineResolverResponseProtoMsg): MsgDefineResolverResponse;
    toProto(message: MsgDefineResolverResponse): Uint8Array;
    toProtoMsg(message: MsgDefineResolverResponse): MsgDefineResolverResponseProtoMsg;
};
export declare const MsgRegisterResolver: {
    typeUrl: string;
    encode(message: MsgRegisterResolver, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterResolver;
    fromPartial(object: Partial<MsgRegisterResolver>): MsgRegisterResolver;
    fromAmino(object: MsgRegisterResolverAmino): MsgRegisterResolver;
    toAmino(message: MsgRegisterResolver): MsgRegisterResolverAmino;
    fromAminoMsg(object: MsgRegisterResolverAminoMsg): MsgRegisterResolver;
    fromProtoMsg(message: MsgRegisterResolverProtoMsg): MsgRegisterResolver;
    toProto(message: MsgRegisterResolver): Uint8Array;
    toProtoMsg(message: MsgRegisterResolver): MsgRegisterResolverProtoMsg;
};
export declare const MsgRegisterResolverResponse: {
    typeUrl: string;
    encode(_: MsgRegisterResolverResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterResolverResponse;
    fromPartial(_: Partial<MsgRegisterResolverResponse>): MsgRegisterResolverResponse;
    fromAmino(_: MsgRegisterResolverResponseAmino): MsgRegisterResolverResponse;
    toAmino(_: MsgRegisterResolverResponse): MsgRegisterResolverResponseAmino;
    fromAminoMsg(object: MsgRegisterResolverResponseAminoMsg): MsgRegisterResolverResponse;
    fromProtoMsg(message: MsgRegisterResolverResponseProtoMsg): MsgRegisterResolverResponse;
    toProto(message: MsgRegisterResolverResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterResolverResponse): MsgRegisterResolverResponseProtoMsg;
};
