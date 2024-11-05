//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
/** MediaType defines MIME media types to be used with a ContentHash.Raw hash. */
export var MediaType;
(function (MediaType) {
    /** MEDIA_TYPE_UNSPECIFIED - MEDIA_TYPE_UNSPECIFIED can be used for raw binary data */
    MediaType[MediaType["MEDIA_TYPE_UNSPECIFIED"] = 0] = "MEDIA_TYPE_UNSPECIFIED";
    /** MEDIA_TYPE_TEXT_PLAIN - plain text */
    MediaType[MediaType["MEDIA_TYPE_TEXT_PLAIN"] = 1] = "MEDIA_TYPE_TEXT_PLAIN";
    /** MEDIA_TYPE_JSON - JSON */
    MediaType[MediaType["MEDIA_TYPE_JSON"] = 2] = "MEDIA_TYPE_JSON";
    /** MEDIA_TYPE_CSV - CSV */
    MediaType[MediaType["MEDIA_TYPE_CSV"] = 3] = "MEDIA_TYPE_CSV";
    /** MEDIA_TYPE_XML - XML */
    MediaType[MediaType["MEDIA_TYPE_XML"] = 4] = "MEDIA_TYPE_XML";
    /** MEDIA_TYPE_PDF - PDF */
    MediaType[MediaType["MEDIA_TYPE_PDF"] = 5] = "MEDIA_TYPE_PDF";
    /** MEDIA_TYPE_TIFF - TIIF */
    MediaType[MediaType["MEDIA_TYPE_TIFF"] = 16] = "MEDIA_TYPE_TIFF";
    /** MEDIA_TYPE_JPG - JPG */
    MediaType[MediaType["MEDIA_TYPE_JPG"] = 17] = "MEDIA_TYPE_JPG";
    /** MEDIA_TYPE_PNG - PNG */
    MediaType[MediaType["MEDIA_TYPE_PNG"] = 18] = "MEDIA_TYPE_PNG";
    /** MEDIA_TYPE_SVG - SVG */
    MediaType[MediaType["MEDIA_TYPE_SVG"] = 19] = "MEDIA_TYPE_SVG";
    /** MEDIA_TYPE_WEBP - WEBP */
    MediaType[MediaType["MEDIA_TYPE_WEBP"] = 20] = "MEDIA_TYPE_WEBP";
    /** MEDIA_TYPE_AVIF - AVIF */
    MediaType[MediaType["MEDIA_TYPE_AVIF"] = 21] = "MEDIA_TYPE_AVIF";
    /** MEDIA_TYPE_GIF - GIF */
    MediaType[MediaType["MEDIA_TYPE_GIF"] = 22] = "MEDIA_TYPE_GIF";
    /** MEDIA_TYPE_APNG - APNG */
    MediaType[MediaType["MEDIA_TYPE_APNG"] = 23] = "MEDIA_TYPE_APNG";
    /** MEDIA_TYPE_MPEG - MPEG */
    MediaType[MediaType["MEDIA_TYPE_MPEG"] = 32] = "MEDIA_TYPE_MPEG";
    /** MEDIA_TYPE_MP4 - MP4 */
    MediaType[MediaType["MEDIA_TYPE_MP4"] = 33] = "MEDIA_TYPE_MP4";
    /** MEDIA_TYPE_WEBM - WEBM */
    MediaType[MediaType["MEDIA_TYPE_WEBM"] = 34] = "MEDIA_TYPE_WEBM";
    /** MEDIA_TYPE_OGG - OGG */
    MediaType[MediaType["MEDIA_TYPE_OGG"] = 35] = "MEDIA_TYPE_OGG";
    MediaType[MediaType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MediaType || (MediaType = {}));
export const MediaTypeSDKType = MediaType;
export const MediaTypeAmino = MediaType;
export function mediaTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "MEDIA_TYPE_UNSPECIFIED":
            return MediaType.MEDIA_TYPE_UNSPECIFIED;
        case 1:
        case "MEDIA_TYPE_TEXT_PLAIN":
            return MediaType.MEDIA_TYPE_TEXT_PLAIN;
        case 2:
        case "MEDIA_TYPE_JSON":
            return MediaType.MEDIA_TYPE_JSON;
        case 3:
        case "MEDIA_TYPE_CSV":
            return MediaType.MEDIA_TYPE_CSV;
        case 4:
        case "MEDIA_TYPE_XML":
            return MediaType.MEDIA_TYPE_XML;
        case 5:
        case "MEDIA_TYPE_PDF":
            return MediaType.MEDIA_TYPE_PDF;
        case 16:
        case "MEDIA_TYPE_TIFF":
            return MediaType.MEDIA_TYPE_TIFF;
        case 17:
        case "MEDIA_TYPE_JPG":
            return MediaType.MEDIA_TYPE_JPG;
        case 18:
        case "MEDIA_TYPE_PNG":
            return MediaType.MEDIA_TYPE_PNG;
        case 19:
        case "MEDIA_TYPE_SVG":
            return MediaType.MEDIA_TYPE_SVG;
        case 20:
        case "MEDIA_TYPE_WEBP":
            return MediaType.MEDIA_TYPE_WEBP;
        case 21:
        case "MEDIA_TYPE_AVIF":
            return MediaType.MEDIA_TYPE_AVIF;
        case 22:
        case "MEDIA_TYPE_GIF":
            return MediaType.MEDIA_TYPE_GIF;
        case 23:
        case "MEDIA_TYPE_APNG":
            return MediaType.MEDIA_TYPE_APNG;
        case 32:
        case "MEDIA_TYPE_MPEG":
            return MediaType.MEDIA_TYPE_MPEG;
        case 33:
        case "MEDIA_TYPE_MP4":
            return MediaType.MEDIA_TYPE_MP4;
        case 34:
        case "MEDIA_TYPE_WEBM":
            return MediaType.MEDIA_TYPE_WEBM;
        case 35:
        case "MEDIA_TYPE_OGG":
            return MediaType.MEDIA_TYPE_OGG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MediaType.UNRECOGNIZED;
    }
}
export function mediaTypeToJSON(object) {
    switch (object) {
        case MediaType.MEDIA_TYPE_UNSPECIFIED:
            return "MEDIA_TYPE_UNSPECIFIED";
        case MediaType.MEDIA_TYPE_TEXT_PLAIN:
            return "MEDIA_TYPE_TEXT_PLAIN";
        case MediaType.MEDIA_TYPE_JSON:
            return "MEDIA_TYPE_JSON";
        case MediaType.MEDIA_TYPE_CSV:
            return "MEDIA_TYPE_CSV";
        case MediaType.MEDIA_TYPE_XML:
            return "MEDIA_TYPE_XML";
        case MediaType.MEDIA_TYPE_PDF:
            return "MEDIA_TYPE_PDF";
        case MediaType.MEDIA_TYPE_TIFF:
            return "MEDIA_TYPE_TIFF";
        case MediaType.MEDIA_TYPE_JPG:
            return "MEDIA_TYPE_JPG";
        case MediaType.MEDIA_TYPE_PNG:
            return "MEDIA_TYPE_PNG";
        case MediaType.MEDIA_TYPE_SVG:
            return "MEDIA_TYPE_SVG";
        case MediaType.MEDIA_TYPE_WEBP:
            return "MEDIA_TYPE_WEBP";
        case MediaType.MEDIA_TYPE_AVIF:
            return "MEDIA_TYPE_AVIF";
        case MediaType.MEDIA_TYPE_GIF:
            return "MEDIA_TYPE_GIF";
        case MediaType.MEDIA_TYPE_APNG:
            return "MEDIA_TYPE_APNG";
        case MediaType.MEDIA_TYPE_MPEG:
            return "MEDIA_TYPE_MPEG";
        case MediaType.MEDIA_TYPE_MP4:
            return "MEDIA_TYPE_MP4";
        case MediaType.MEDIA_TYPE_WEBM:
            return "MEDIA_TYPE_WEBM";
        case MediaType.MEDIA_TYPE_OGG:
            return "MEDIA_TYPE_OGG";
        case MediaType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** GraphCanonicalizationAlgorithm is the graph canonicalization algorithm */
export var GraphCanonicalizationAlgorithm;
(function (GraphCanonicalizationAlgorithm) {
    /** GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED"] = 0] = "GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED";
    /** GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 - URDNA2015 graph hashing */
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015"] = 1] = "GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015";
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GraphCanonicalizationAlgorithm || (GraphCanonicalizationAlgorithm = {}));
export const GraphCanonicalizationAlgorithmSDKType = GraphCanonicalizationAlgorithm;
export const GraphCanonicalizationAlgorithmAmino = GraphCanonicalizationAlgorithm;
export function graphCanonicalizationAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED":
            return GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED;
        case 1:
        case "GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015":
            return GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GraphCanonicalizationAlgorithm.UNRECOGNIZED;
    }
}
export function graphCanonicalizationAlgorithmToJSON(object) {
    switch (object) {
        case GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED:
            return "GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED";
        case GraphCanonicalizationAlgorithm.GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015:
            return "GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015";
        case GraphCanonicalizationAlgorithm.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** GraphMerkleTree is the graph merkle tree type used for hashing, if any */
export var GraphMerkleTree;
(function (GraphMerkleTree) {
    /** GRAPH_MERKLE_TREE_NONE_UNSPECIFIED - no merkle tree */
    GraphMerkleTree[GraphMerkleTree["GRAPH_MERKLE_TREE_NONE_UNSPECIFIED"] = 0] = "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED";
    GraphMerkleTree[GraphMerkleTree["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GraphMerkleTree || (GraphMerkleTree = {}));
export const GraphMerkleTreeSDKType = GraphMerkleTree;
export const GraphMerkleTreeAmino = GraphMerkleTree;
export function graphMerkleTreeFromJSON(object) {
    switch (object) {
        case 0:
        case "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED":
            return GraphMerkleTree.GRAPH_MERKLE_TREE_NONE_UNSPECIFIED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GraphMerkleTree.UNRECOGNIZED;
    }
}
export function graphMerkleTreeToJSON(object) {
    switch (object) {
        case GraphMerkleTree.GRAPH_MERKLE_TREE_NONE_UNSPECIFIED:
            return "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED";
        case GraphMerkleTree.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** DigestAlgorithm is the hash digest algorithm */
export var DigestAlgorithm;
(function (DigestAlgorithm) {
    /** DIGEST_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    DigestAlgorithm[DigestAlgorithm["DIGEST_ALGORITHM_UNSPECIFIED"] = 0] = "DIGEST_ALGORITHM_UNSPECIFIED";
    /** DIGEST_ALGORITHM_BLAKE2B_256 - BLAKE2b-256 */
    DigestAlgorithm[DigestAlgorithm["DIGEST_ALGORITHM_BLAKE2B_256"] = 1] = "DIGEST_ALGORITHM_BLAKE2B_256";
    DigestAlgorithm[DigestAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DigestAlgorithm || (DigestAlgorithm = {}));
export const DigestAlgorithmSDKType = DigestAlgorithm;
export const DigestAlgorithmAmino = DigestAlgorithm;
export function digestAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "DIGEST_ALGORITHM_UNSPECIFIED":
            return DigestAlgorithm.DIGEST_ALGORITHM_UNSPECIFIED;
        case 1:
        case "DIGEST_ALGORITHM_BLAKE2B_256":
            return DigestAlgorithm.DIGEST_ALGORITHM_BLAKE2B_256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DigestAlgorithm.UNRECOGNIZED;
    }
}
export function digestAlgorithmToJSON(object) {
    switch (object) {
        case DigestAlgorithm.DIGEST_ALGORITHM_UNSPECIFIED:
            return "DIGEST_ALGORITHM_UNSPECIFIED";
        case DigestAlgorithm.DIGEST_ALGORITHM_BLAKE2B_256:
            return "DIGEST_ALGORITHM_BLAKE2B_256";
        case DigestAlgorithm.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseContentHash() {
    return {
        raw: undefined,
        graph: undefined
    };
}
export const ContentHash = {
    typeUrl: "/regen.data.v1alpha2.ContentHash",
    encode(message, writer = BinaryWriter.create()) {
        if (message.raw !== undefined) {
            ContentHash_Raw.encode(message.raw, writer.uint32(10).fork()).ldelim();
        }
        if (message.graph !== undefined) {
            ContentHash_Graph.encode(message.graph, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.raw = ContentHash_Raw.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.graph = ContentHash_Graph.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHash();
        message.raw = object.raw !== undefined && object.raw !== null ? ContentHash_Raw.fromPartial(object.raw) : undefined;
        message.graph = object.graph !== undefined && object.graph !== null ? ContentHash_Graph.fromPartial(object.graph) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHash();
        if (object.raw !== undefined && object.raw !== null) {
            message.raw = ContentHash_Raw.fromAmino(object.raw);
        }
        if (object.graph !== undefined && object.graph !== null) {
            message.graph = ContentHash_Graph.fromAmino(object.graph);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.raw = message.raw ? ContentHash_Raw.toAmino(message.raw) : undefined;
        obj.graph = message.graph ? ContentHash_Graph.toAmino(message.graph) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContentHash.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentHash.decode(message.value);
    },
    toProto(message) {
        return ContentHash.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.ContentHash",
            value: ContentHash.encode(message).finish()
        };
    }
};
function createBaseContentHash_Raw() {
    return {
        hash: new Uint8Array(),
        digestAlgorithm: 0,
        mediaType: 0
    };
}
export const ContentHash_Raw = {
    typeUrl: "/regen.data.v1alpha2.Raw",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.digestAlgorithm !== 0) {
            writer.uint32(16).int32(message.digestAlgorithm);
        }
        if (message.mediaType !== 0) {
            writer.uint32(24).int32(message.mediaType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHash_Raw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.digestAlgorithm = reader.int32();
                    break;
                case 3:
                    message.mediaType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHash_Raw();
        message.hash = object.hash ?? new Uint8Array();
        message.digestAlgorithm = object.digestAlgorithm ?? 0;
        message.mediaType = object.mediaType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHash_Raw();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.digest_algorithm !== undefined && object.digest_algorithm !== null) {
            message.digestAlgorithm = object.digest_algorithm;
        }
        if (object.media_type !== undefined && object.media_type !== null) {
            message.mediaType = object.media_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.media_type = message.mediaType === 0 ? undefined : message.mediaType;
        return obj;
    },
    fromAminoMsg(object) {
        return ContentHash_Raw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentHash_Raw.decode(message.value);
    },
    toProto(message) {
        return ContentHash_Raw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.Raw",
            value: ContentHash_Raw.encode(message).finish()
        };
    }
};
function createBaseContentHash_Graph() {
    return {
        hash: new Uint8Array(),
        digestAlgorithm: 0,
        canonicalizationAlgorithm: 0,
        merkleTree: 0
    };
}
export const ContentHash_Graph = {
    typeUrl: "/regen.data.v1alpha2.Graph",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.digestAlgorithm !== 0) {
            writer.uint32(16).int32(message.digestAlgorithm);
        }
        if (message.canonicalizationAlgorithm !== 0) {
            writer.uint32(24).int32(message.canonicalizationAlgorithm);
        }
        if (message.merkleTree !== 0) {
            writer.uint32(32).int32(message.merkleTree);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHash_Graph();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.digestAlgorithm = reader.int32();
                    break;
                case 3:
                    message.canonicalizationAlgorithm = reader.int32();
                    break;
                case 4:
                    message.merkleTree = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHash_Graph();
        message.hash = object.hash ?? new Uint8Array();
        message.digestAlgorithm = object.digestAlgorithm ?? 0;
        message.canonicalizationAlgorithm = object.canonicalizationAlgorithm ?? 0;
        message.merkleTree = object.merkleTree ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHash_Graph();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.digest_algorithm !== undefined && object.digest_algorithm !== null) {
            message.digestAlgorithm = object.digest_algorithm;
        }
        if (object.canonicalization_algorithm !== undefined && object.canonicalization_algorithm !== null) {
            message.canonicalizationAlgorithm = object.canonicalization_algorithm;
        }
        if (object.merkle_tree !== undefined && object.merkle_tree !== null) {
            message.merkleTree = object.merkle_tree;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.canonicalization_algorithm = message.canonicalizationAlgorithm === 0 ? undefined : message.canonicalizationAlgorithm;
        obj.merkle_tree = message.merkleTree === 0 ? undefined : message.merkleTree;
        return obj;
    },
    fromAminoMsg(object) {
        return ContentHash_Graph.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentHash_Graph.decode(message.value);
    },
    toProto(message) {
        return ContentHash_Graph.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.Graph",
            value: ContentHash_Graph.encode(message).finish()
        };
    }
};
function createBaseContent() {
    return {
        rawData: undefined
    };
}
export const Content = {
    typeUrl: "/regen.data.v1alpha2.Content",
    encode(message, writer = BinaryWriter.create()) {
        if (message.rawData !== undefined) {
            writer.uint32(10).bytes(message.rawData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContent();
        message.rawData = object.rawData ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContent();
        if (object.raw_data !== undefined && object.raw_data !== null) {
            message.rawData = bytesFromBase64(object.raw_data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.raw_data = message.rawData ? base64FromBytes(message.rawData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Content.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Content.decode(message.value);
    },
    toProto(message) {
        return Content.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.Content",
            value: Content.encode(message).finish()
        };
    }
};
function createBaseSignerEntry() {
    return {
        signer: "",
        timestamp: undefined
    };
}
export const SignerEntry = {
    typeUrl: "/regen.data.v1alpha2.SignerEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignerEntry();
        message.signer = object.signer ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignerEntry();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignerEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignerEntry.decode(message.value);
    },
    toProto(message) {
        return SignerEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.SignerEntry",
            value: SignerEntry.encode(message).finish()
        };
    }
};
