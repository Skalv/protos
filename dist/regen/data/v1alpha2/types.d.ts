import { BinaryReader, BinaryWriter } from "../../../binary";
/** MediaType defines MIME media types to be used with a ContentHash.Raw hash. */
export declare enum MediaType {
    /** MEDIA_TYPE_UNSPECIFIED - MEDIA_TYPE_UNSPECIFIED can be used for raw binary data */
    MEDIA_TYPE_UNSPECIFIED = 0,
    /** MEDIA_TYPE_TEXT_PLAIN - plain text */
    MEDIA_TYPE_TEXT_PLAIN = 1,
    /** MEDIA_TYPE_JSON - JSON */
    MEDIA_TYPE_JSON = 2,
    /** MEDIA_TYPE_CSV - CSV */
    MEDIA_TYPE_CSV = 3,
    /** MEDIA_TYPE_XML - XML */
    MEDIA_TYPE_XML = 4,
    /** MEDIA_TYPE_PDF - PDF */
    MEDIA_TYPE_PDF = 5,
    /** MEDIA_TYPE_TIFF - TIIF */
    MEDIA_TYPE_TIFF = 16,
    /** MEDIA_TYPE_JPG - JPG */
    MEDIA_TYPE_JPG = 17,
    /** MEDIA_TYPE_PNG - PNG */
    MEDIA_TYPE_PNG = 18,
    /** MEDIA_TYPE_SVG - SVG */
    MEDIA_TYPE_SVG = 19,
    /** MEDIA_TYPE_WEBP - WEBP */
    MEDIA_TYPE_WEBP = 20,
    /** MEDIA_TYPE_AVIF - AVIF */
    MEDIA_TYPE_AVIF = 21,
    /** MEDIA_TYPE_GIF - GIF */
    MEDIA_TYPE_GIF = 22,
    /** MEDIA_TYPE_APNG - APNG */
    MEDIA_TYPE_APNG = 23,
    /** MEDIA_TYPE_MPEG - MPEG */
    MEDIA_TYPE_MPEG = 32,
    /** MEDIA_TYPE_MP4 - MP4 */
    MEDIA_TYPE_MP4 = 33,
    /** MEDIA_TYPE_WEBM - WEBM */
    MEDIA_TYPE_WEBM = 34,
    /** MEDIA_TYPE_OGG - OGG */
    MEDIA_TYPE_OGG = 35,
    UNRECOGNIZED = -1
}
export declare const MediaTypeSDKType: typeof MediaType;
export declare const MediaTypeAmino: typeof MediaType;
export declare function mediaTypeFromJSON(object: any): MediaType;
export declare function mediaTypeToJSON(object: MediaType): string;
/** GraphCanonicalizationAlgorithm is the graph canonicalization algorithm */
export declare enum GraphCanonicalizationAlgorithm {
    /** GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED = 0,
    /** GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 - URDNA2015 graph hashing */
    GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 = 1,
    UNRECOGNIZED = -1
}
export declare const GraphCanonicalizationAlgorithmSDKType: typeof GraphCanonicalizationAlgorithm;
export declare const GraphCanonicalizationAlgorithmAmino: typeof GraphCanonicalizationAlgorithm;
export declare function graphCanonicalizationAlgorithmFromJSON(object: any): GraphCanonicalizationAlgorithm;
export declare function graphCanonicalizationAlgorithmToJSON(object: GraphCanonicalizationAlgorithm): string;
/** GraphMerkleTree is the graph merkle tree type used for hashing, if any */
export declare enum GraphMerkleTree {
    /** GRAPH_MERKLE_TREE_NONE_UNSPECIFIED - no merkle tree */
    GRAPH_MERKLE_TREE_NONE_UNSPECIFIED = 0,
    UNRECOGNIZED = -1
}
export declare const GraphMerkleTreeSDKType: typeof GraphMerkleTree;
export declare const GraphMerkleTreeAmino: typeof GraphMerkleTree;
export declare function graphMerkleTreeFromJSON(object: any): GraphMerkleTree;
export declare function graphMerkleTreeToJSON(object: GraphMerkleTree): string;
/** DigestAlgorithm is the hash digest algorithm */
export declare enum DigestAlgorithm {
    /** DIGEST_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    DIGEST_ALGORITHM_UNSPECIFIED = 0,
    /** DIGEST_ALGORITHM_BLAKE2B_256 - BLAKE2b-256 */
    DIGEST_ALGORITHM_BLAKE2B_256 = 1,
    UNRECOGNIZED = -1
}
export declare const DigestAlgorithmSDKType: typeof DigestAlgorithm;
export declare const DigestAlgorithmAmino: typeof DigestAlgorithm;
export declare function digestAlgorithmFromJSON(object: any): DigestAlgorithm;
export declare function digestAlgorithmToJSON(object: DigestAlgorithm): string;
/** ContentHash specifies a hash based content identifier for a piece of data */
export interface ContentHash {
    /**
     * Raw specifies "raw" data which does not specify a deterministic,
     * canonical encoding. Users of these hashes MUST maintain a copy of the
     * hashed data which is preserved bit by bit. All other content encodings
     * specify a deterministic, canonical encoding allowing implementations to
     * choose from a variety of alternative formats for transport and encoding
     * while maintaining the guarantee that the canonical hash will not change.
     * The media type for "raw" data is defined by the MediaType enum.
     */
    raw?: ContentHash_Raw;
    /**
     * Graph specifies graph data that conforms to the RDF data model.
     * The canonicalization algorithm used for an RDF graph is specified by
     * GraphCanonicalizationAlgorithm.
     */
    graph?: ContentHash_Graph;
}
export interface ContentHashProtoMsg {
    typeUrl: "/regen.data.v1alpha2.ContentHash";
    value: Uint8Array;
}
/** ContentHash specifies a hash based content identifier for a piece of data */
export interface ContentHashAmino {
    /**
     * Raw specifies "raw" data which does not specify a deterministic,
     * canonical encoding. Users of these hashes MUST maintain a copy of the
     * hashed data which is preserved bit by bit. All other content encodings
     * specify a deterministic, canonical encoding allowing implementations to
     * choose from a variety of alternative formats for transport and encoding
     * while maintaining the guarantee that the canonical hash will not change.
     * The media type for "raw" data is defined by the MediaType enum.
     */
    raw?: ContentHash_RawAmino;
    /**
     * Graph specifies graph data that conforms to the RDF data model.
     * The canonicalization algorithm used for an RDF graph is specified by
     * GraphCanonicalizationAlgorithm.
     */
    graph?: ContentHash_GraphAmino;
}
export interface ContentHashAminoMsg {
    type: "/regen.data.v1alpha2.ContentHash";
    value: ContentHashAmino;
}
/** ContentHash specifies a hash based content identifier for a piece of data */
export interface ContentHashSDKType {
    raw?: ContentHash_RawSDKType;
    graph?: ContentHash_GraphSDKType;
}
/** Raw is the content hash type used for raw data */
export interface ContentHash_Raw {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm
     */
    hash: Uint8Array;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /** media_type represents the MediaType for raw data. */
    mediaType: MediaType;
}
export interface ContentHash_RawProtoMsg {
    typeUrl: "/regen.data.v1alpha2.Raw";
    value: Uint8Array;
}
/** Raw is the content hash type used for raw data */
export interface ContentHash_RawAmino {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm
     */
    hash?: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digest_algorithm?: DigestAlgorithm;
    /** media_type represents the MediaType for raw data. */
    media_type?: MediaType;
}
export interface ContentHash_RawAminoMsg {
    type: "/regen.data.v1alpha2.Raw";
    value: ContentHash_RawAmino;
}
/** Raw is the content hash type used for raw data */
export interface ContentHash_RawSDKType {
    hash: Uint8Array;
    digest_algorithm: DigestAlgorithm;
    media_type: MediaType;
}
/** Graph is the content hash type used for RDF graph data */
export interface ContentHash_Graph {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm
     */
    hash: Uint8Array;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /**
     * graph_canonicalization_algorithm represents the RDF graph
     * canonicalization algorithm.
     */
    canonicalizationAlgorithm: GraphCanonicalizationAlgorithm;
    /** merkle_tree is the merkle tree type used for the graph hash, if any */
    merkleTree: GraphMerkleTree;
}
export interface ContentHash_GraphProtoMsg {
    typeUrl: "/regen.data.v1alpha2.Graph";
    value: Uint8Array;
}
/** Graph is the content hash type used for RDF graph data */
export interface ContentHash_GraphAmino {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm
     */
    hash?: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digest_algorithm?: DigestAlgorithm;
    /**
     * graph_canonicalization_algorithm represents the RDF graph
     * canonicalization algorithm.
     */
    canonicalization_algorithm?: GraphCanonicalizationAlgorithm;
    /** merkle_tree is the merkle tree type used for the graph hash, if any */
    merkle_tree?: GraphMerkleTree;
}
export interface ContentHash_GraphAminoMsg {
    type: "/regen.data.v1alpha2.Graph";
    value: ContentHash_GraphAmino;
}
/** Graph is the content hash type used for RDF graph data */
export interface ContentHash_GraphSDKType {
    hash: Uint8Array;
    digest_algorithm: DigestAlgorithm;
    canonicalization_algorithm: GraphCanonicalizationAlgorithm;
    merkle_tree: GraphMerkleTree;
}
/** Content is a wrapper for content stored on-chain */
export interface Content {
    /** raw_data is the oneof field for raw data */
    rawData?: Uint8Array;
}
export interface ContentProtoMsg {
    typeUrl: "/regen.data.v1alpha2.Content";
    value: Uint8Array;
}
/** Content is a wrapper for content stored on-chain */
export interface ContentAmino {
    /** raw_data is the oneof field for raw data */
    raw_data?: string;
}
export interface ContentAminoMsg {
    type: "/regen.data.v1alpha2.Content";
    value: ContentAmino;
}
/** Content is a wrapper for content stored on-chain */
export interface ContentSDKType {
    raw_data?: Uint8Array;
}
/** SignerEntry is a signer entry wrapping a signer address and timestamp */
export interface SignerEntry {
    /** signer is the address of the signer */
    signer: string;
    /** timestamp is the time at which the data was signed */
    timestamp?: Date;
}
export interface SignerEntryProtoMsg {
    typeUrl: "/regen.data.v1alpha2.SignerEntry";
    value: Uint8Array;
}
/** SignerEntry is a signer entry wrapping a signer address and timestamp */
export interface SignerEntryAmino {
    /** signer is the address of the signer */
    signer?: string;
    /** timestamp is the time at which the data was signed */
    timestamp?: string;
}
export interface SignerEntryAminoMsg {
    type: "/regen.data.v1alpha2.SignerEntry";
    value: SignerEntryAmino;
}
/** SignerEntry is a signer entry wrapping a signer address and timestamp */
export interface SignerEntrySDKType {
    signer: string;
    timestamp?: Date;
}
export declare const ContentHash: {
    typeUrl: string;
    encode(message: ContentHash, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContentHash;
    fromPartial(object: Partial<ContentHash>): ContentHash;
    fromAmino(object: ContentHashAmino): ContentHash;
    toAmino(message: ContentHash): ContentHashAmino;
    fromAminoMsg(object: ContentHashAminoMsg): ContentHash;
    fromProtoMsg(message: ContentHashProtoMsg): ContentHash;
    toProto(message: ContentHash): Uint8Array;
    toProtoMsg(message: ContentHash): ContentHashProtoMsg;
};
export declare const ContentHash_Raw: {
    typeUrl: string;
    encode(message: ContentHash_Raw, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContentHash_Raw;
    fromPartial(object: Partial<ContentHash_Raw>): ContentHash_Raw;
    fromAmino(object: ContentHash_RawAmino): ContentHash_Raw;
    toAmino(message: ContentHash_Raw): ContentHash_RawAmino;
    fromAminoMsg(object: ContentHash_RawAminoMsg): ContentHash_Raw;
    fromProtoMsg(message: ContentHash_RawProtoMsg): ContentHash_Raw;
    toProto(message: ContentHash_Raw): Uint8Array;
    toProtoMsg(message: ContentHash_Raw): ContentHash_RawProtoMsg;
};
export declare const ContentHash_Graph: {
    typeUrl: string;
    encode(message: ContentHash_Graph, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContentHash_Graph;
    fromPartial(object: Partial<ContentHash_Graph>): ContentHash_Graph;
    fromAmino(object: ContentHash_GraphAmino): ContentHash_Graph;
    toAmino(message: ContentHash_Graph): ContentHash_GraphAmino;
    fromAminoMsg(object: ContentHash_GraphAminoMsg): ContentHash_Graph;
    fromProtoMsg(message: ContentHash_GraphProtoMsg): ContentHash_Graph;
    toProto(message: ContentHash_Graph): Uint8Array;
    toProtoMsg(message: ContentHash_Graph): ContentHash_GraphProtoMsg;
};
export declare const Content: {
    typeUrl: string;
    encode(message: Content, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Content;
    fromPartial(object: Partial<Content>): Content;
    fromAmino(object: ContentAmino): Content;
    toAmino(message: Content): ContentAmino;
    fromAminoMsg(object: ContentAminoMsg): Content;
    fromProtoMsg(message: ContentProtoMsg): Content;
    toProto(message: Content): Uint8Array;
    toProtoMsg(message: Content): ContentProtoMsg;
};
export declare const SignerEntry: {
    typeUrl: string;
    encode(message: SignerEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SignerEntry;
    fromPartial(object: Partial<SignerEntry>): SignerEntry;
    fromAmino(object: SignerEntryAmino): SignerEntry;
    toAmino(message: SignerEntry): SignerEntryAmino;
    fromAminoMsg(object: SignerEntryAminoMsg): SignerEntry;
    fromProtoMsg(message: SignerEntryProtoMsg): SignerEntry;
    toProto(message: SignerEntry): Uint8Array;
    toProtoMsg(message: SignerEntry): SignerEntryProtoMsg;
};
