"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentHashes = exports.AttestorEntry = exports.ContentEntry = exports.ContentHash_Graph = exports.ContentHash_Raw = exports.ContentHash = exports.GraphMerkleTreeAmino = exports.GraphMerkleTreeSDKType = exports.GraphMerkleTree = exports.GraphCanonicalizationAlgorithmAmino = exports.GraphCanonicalizationAlgorithmSDKType = exports.GraphCanonicalizationAlgorithm = exports.RawMediaTypeAmino = exports.RawMediaTypeSDKType = exports.RawMediaType = exports.DigestAlgorithmAmino = exports.DigestAlgorithmSDKType = exports.DigestAlgorithm = void 0;
exports.digestAlgorithmFromJSON = digestAlgorithmFromJSON;
exports.digestAlgorithmToJSON = digestAlgorithmToJSON;
exports.rawMediaTypeFromJSON = rawMediaTypeFromJSON;
exports.rawMediaTypeToJSON = rawMediaTypeToJSON;
exports.graphCanonicalizationAlgorithmFromJSON = graphCanonicalizationAlgorithmFromJSON;
exports.graphCanonicalizationAlgorithmToJSON = graphCanonicalizationAlgorithmToJSON;
exports.graphMerkleTreeFromJSON = graphMerkleTreeFromJSON;
exports.graphMerkleTreeToJSON = graphMerkleTreeToJSON;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
/** DigestAlgorithm is the hash digest algorithm */
var DigestAlgorithm;
(function (DigestAlgorithm) {
    /** DIGEST_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    DigestAlgorithm[DigestAlgorithm["DIGEST_ALGORITHM_UNSPECIFIED"] = 0] = "DIGEST_ALGORITHM_UNSPECIFIED";
    /** DIGEST_ALGORITHM_BLAKE2B_256 - BLAKE2b-256 */
    DigestAlgorithm[DigestAlgorithm["DIGEST_ALGORITHM_BLAKE2B_256"] = 1] = "DIGEST_ALGORITHM_BLAKE2B_256";
    DigestAlgorithm[DigestAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DigestAlgorithm || (exports.DigestAlgorithm = DigestAlgorithm = {}));
exports.DigestAlgorithmSDKType = DigestAlgorithm;
exports.DigestAlgorithmAmino = DigestAlgorithm;
function digestAlgorithmFromJSON(object) {
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
function digestAlgorithmToJSON(object) {
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
/** RawMediaType defines MIME media types to be used with a ContentHash.Raw hash. */
var RawMediaType;
(function (RawMediaType) {
    /** RAW_MEDIA_TYPE_UNSPECIFIED - RAW_MEDIA_TYPE_UNSPECIFIED can be used for raw binary data */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_UNSPECIFIED"] = 0] = "RAW_MEDIA_TYPE_UNSPECIFIED";
    /** RAW_MEDIA_TYPE_TEXT_PLAIN - plain text */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_TEXT_PLAIN"] = 1] = "RAW_MEDIA_TYPE_TEXT_PLAIN";
    /** RAW_MEDIA_TYPE_JSON - JSON */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_JSON"] = 2] = "RAW_MEDIA_TYPE_JSON";
    /** RAW_MEDIA_TYPE_CSV - CSV */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_CSV"] = 3] = "RAW_MEDIA_TYPE_CSV";
    /** RAW_MEDIA_TYPE_XML - XML */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_XML"] = 4] = "RAW_MEDIA_TYPE_XML";
    /** RAW_MEDIA_TYPE_PDF - PDF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_PDF"] = 5] = "RAW_MEDIA_TYPE_PDF";
    /** RAW_MEDIA_TYPE_TIFF - TIIF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_TIFF"] = 16] = "RAW_MEDIA_TYPE_TIFF";
    /** RAW_MEDIA_TYPE_JPG - JPG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_JPG"] = 17] = "RAW_MEDIA_TYPE_JPG";
    /** RAW_MEDIA_TYPE_PNG - PNG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_PNG"] = 18] = "RAW_MEDIA_TYPE_PNG";
    /** RAW_MEDIA_TYPE_SVG - SVG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_SVG"] = 19] = "RAW_MEDIA_TYPE_SVG";
    /** RAW_MEDIA_TYPE_WEBP - WEBP */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_WEBP"] = 20] = "RAW_MEDIA_TYPE_WEBP";
    /** RAW_MEDIA_TYPE_AVIF - AVIF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_AVIF"] = 21] = "RAW_MEDIA_TYPE_AVIF";
    /** RAW_MEDIA_TYPE_GIF - GIF */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_GIF"] = 22] = "RAW_MEDIA_TYPE_GIF";
    /** RAW_MEDIA_TYPE_APNG - APNG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_APNG"] = 23] = "RAW_MEDIA_TYPE_APNG";
    /** RAW_MEDIA_TYPE_MPEG - MPEG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_MPEG"] = 32] = "RAW_MEDIA_TYPE_MPEG";
    /** RAW_MEDIA_TYPE_MP4 - MP4 */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_MP4"] = 33] = "RAW_MEDIA_TYPE_MP4";
    /** RAW_MEDIA_TYPE_WEBM - WEBM */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_WEBM"] = 34] = "RAW_MEDIA_TYPE_WEBM";
    /** RAW_MEDIA_TYPE_OGG - OGG */
    RawMediaType[RawMediaType["RAW_MEDIA_TYPE_OGG"] = 35] = "RAW_MEDIA_TYPE_OGG";
    RawMediaType[RawMediaType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RawMediaType || (exports.RawMediaType = RawMediaType = {}));
exports.RawMediaTypeSDKType = RawMediaType;
exports.RawMediaTypeAmino = RawMediaType;
function rawMediaTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RAW_MEDIA_TYPE_UNSPECIFIED":
            return RawMediaType.RAW_MEDIA_TYPE_UNSPECIFIED;
        case 1:
        case "RAW_MEDIA_TYPE_TEXT_PLAIN":
            return RawMediaType.RAW_MEDIA_TYPE_TEXT_PLAIN;
        case 2:
        case "RAW_MEDIA_TYPE_JSON":
            return RawMediaType.RAW_MEDIA_TYPE_JSON;
        case 3:
        case "RAW_MEDIA_TYPE_CSV":
            return RawMediaType.RAW_MEDIA_TYPE_CSV;
        case 4:
        case "RAW_MEDIA_TYPE_XML":
            return RawMediaType.RAW_MEDIA_TYPE_XML;
        case 5:
        case "RAW_MEDIA_TYPE_PDF":
            return RawMediaType.RAW_MEDIA_TYPE_PDF;
        case 16:
        case "RAW_MEDIA_TYPE_TIFF":
            return RawMediaType.RAW_MEDIA_TYPE_TIFF;
        case 17:
        case "RAW_MEDIA_TYPE_JPG":
            return RawMediaType.RAW_MEDIA_TYPE_JPG;
        case 18:
        case "RAW_MEDIA_TYPE_PNG":
            return RawMediaType.RAW_MEDIA_TYPE_PNG;
        case 19:
        case "RAW_MEDIA_TYPE_SVG":
            return RawMediaType.RAW_MEDIA_TYPE_SVG;
        case 20:
        case "RAW_MEDIA_TYPE_WEBP":
            return RawMediaType.RAW_MEDIA_TYPE_WEBP;
        case 21:
        case "RAW_MEDIA_TYPE_AVIF":
            return RawMediaType.RAW_MEDIA_TYPE_AVIF;
        case 22:
        case "RAW_MEDIA_TYPE_GIF":
            return RawMediaType.RAW_MEDIA_TYPE_GIF;
        case 23:
        case "RAW_MEDIA_TYPE_APNG":
            return RawMediaType.RAW_MEDIA_TYPE_APNG;
        case 32:
        case "RAW_MEDIA_TYPE_MPEG":
            return RawMediaType.RAW_MEDIA_TYPE_MPEG;
        case 33:
        case "RAW_MEDIA_TYPE_MP4":
            return RawMediaType.RAW_MEDIA_TYPE_MP4;
        case 34:
        case "RAW_MEDIA_TYPE_WEBM":
            return RawMediaType.RAW_MEDIA_TYPE_WEBM;
        case 35:
        case "RAW_MEDIA_TYPE_OGG":
            return RawMediaType.RAW_MEDIA_TYPE_OGG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RawMediaType.UNRECOGNIZED;
    }
}
function rawMediaTypeToJSON(object) {
    switch (object) {
        case RawMediaType.RAW_MEDIA_TYPE_UNSPECIFIED:
            return "RAW_MEDIA_TYPE_UNSPECIFIED";
        case RawMediaType.RAW_MEDIA_TYPE_TEXT_PLAIN:
            return "RAW_MEDIA_TYPE_TEXT_PLAIN";
        case RawMediaType.RAW_MEDIA_TYPE_JSON:
            return "RAW_MEDIA_TYPE_JSON";
        case RawMediaType.RAW_MEDIA_TYPE_CSV:
            return "RAW_MEDIA_TYPE_CSV";
        case RawMediaType.RAW_MEDIA_TYPE_XML:
            return "RAW_MEDIA_TYPE_XML";
        case RawMediaType.RAW_MEDIA_TYPE_PDF:
            return "RAW_MEDIA_TYPE_PDF";
        case RawMediaType.RAW_MEDIA_TYPE_TIFF:
            return "RAW_MEDIA_TYPE_TIFF";
        case RawMediaType.RAW_MEDIA_TYPE_JPG:
            return "RAW_MEDIA_TYPE_JPG";
        case RawMediaType.RAW_MEDIA_TYPE_PNG:
            return "RAW_MEDIA_TYPE_PNG";
        case RawMediaType.RAW_MEDIA_TYPE_SVG:
            return "RAW_MEDIA_TYPE_SVG";
        case RawMediaType.RAW_MEDIA_TYPE_WEBP:
            return "RAW_MEDIA_TYPE_WEBP";
        case RawMediaType.RAW_MEDIA_TYPE_AVIF:
            return "RAW_MEDIA_TYPE_AVIF";
        case RawMediaType.RAW_MEDIA_TYPE_GIF:
            return "RAW_MEDIA_TYPE_GIF";
        case RawMediaType.RAW_MEDIA_TYPE_APNG:
            return "RAW_MEDIA_TYPE_APNG";
        case RawMediaType.RAW_MEDIA_TYPE_MPEG:
            return "RAW_MEDIA_TYPE_MPEG";
        case RawMediaType.RAW_MEDIA_TYPE_MP4:
            return "RAW_MEDIA_TYPE_MP4";
        case RawMediaType.RAW_MEDIA_TYPE_WEBM:
            return "RAW_MEDIA_TYPE_WEBM";
        case RawMediaType.RAW_MEDIA_TYPE_OGG:
            return "RAW_MEDIA_TYPE_OGG";
        case RawMediaType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** GraphCanonicalizationAlgorithm is the graph canonicalization algorithm */
var GraphCanonicalizationAlgorithm;
(function (GraphCanonicalizationAlgorithm) {
    /** GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED"] = 0] = "GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED";
    /** GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 - URDNA2015 graph hashing */
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015"] = 1] = "GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015";
    GraphCanonicalizationAlgorithm[GraphCanonicalizationAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GraphCanonicalizationAlgorithm || (exports.GraphCanonicalizationAlgorithm = GraphCanonicalizationAlgorithm = {}));
exports.GraphCanonicalizationAlgorithmSDKType = GraphCanonicalizationAlgorithm;
exports.GraphCanonicalizationAlgorithmAmino = GraphCanonicalizationAlgorithm;
function graphCanonicalizationAlgorithmFromJSON(object) {
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
function graphCanonicalizationAlgorithmToJSON(object) {
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
var GraphMerkleTree;
(function (GraphMerkleTree) {
    /** GRAPH_MERKLE_TREE_NONE_UNSPECIFIED - no merkle tree */
    GraphMerkleTree[GraphMerkleTree["GRAPH_MERKLE_TREE_NONE_UNSPECIFIED"] = 0] = "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED";
    GraphMerkleTree[GraphMerkleTree["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GraphMerkleTree || (exports.GraphMerkleTree = GraphMerkleTree = {}));
exports.GraphMerkleTreeSDKType = GraphMerkleTree;
exports.GraphMerkleTreeAmino = GraphMerkleTree;
function graphMerkleTreeFromJSON(object) {
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
function graphMerkleTreeToJSON(object) {
    switch (object) {
        case GraphMerkleTree.GRAPH_MERKLE_TREE_NONE_UNSPECIFIED:
            return "GRAPH_MERKLE_TREE_NONE_UNSPECIFIED";
        case GraphMerkleTree.UNRECOGNIZED:
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
exports.ContentHash = {
    typeUrl: "/regen.data.v1.ContentHash",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.raw !== undefined) {
            exports.ContentHash_Raw.encode(message.raw, writer.uint32(10).fork()).ldelim();
        }
        if (message.graph !== undefined) {
            exports.ContentHash_Graph.encode(message.graph, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.raw = exports.ContentHash_Raw.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.graph = exports.ContentHash_Graph.decode(reader, reader.uint32());
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
        message.raw = object.raw !== undefined && object.raw !== null ? exports.ContentHash_Raw.fromPartial(object.raw) : undefined;
        message.graph = object.graph !== undefined && object.graph !== null ? exports.ContentHash_Graph.fromPartial(object.graph) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHash();
        if (object.raw !== undefined && object.raw !== null) {
            message.raw = exports.ContentHash_Raw.fromAmino(object.raw);
        }
        if (object.graph !== undefined && object.graph !== null) {
            message.graph = exports.ContentHash_Graph.fromAmino(object.graph);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.raw = message.raw ? exports.ContentHash_Raw.toAmino(message.raw) : undefined;
        obj.graph = message.graph ? exports.ContentHash_Graph.toAmino(message.graph) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContentHash.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ContentHash.decode(message.value);
    },
    toProto(message) {
        return exports.ContentHash.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ContentHash",
            value: exports.ContentHash.encode(message).finish()
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
exports.ContentHash_Raw = {
    typeUrl: "/regen.data.v1.Raw",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
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
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.media_type = message.mediaType === 0 ? undefined : message.mediaType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContentHash_Raw.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ContentHash_Raw.decode(message.value);
    },
    toProto(message) {
        return exports.ContentHash_Raw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.Raw",
            value: exports.ContentHash_Raw.encode(message).finish()
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
exports.ContentHash_Graph = {
    typeUrl: "/regen.data.v1.Graph",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
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
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.canonicalization_algorithm = message.canonicalizationAlgorithm === 0 ? undefined : message.canonicalizationAlgorithm;
        obj.merkle_tree = message.merkleTree === 0 ? undefined : message.merkleTree;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContentHash_Graph.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ContentHash_Graph.decode(message.value);
    },
    toProto(message) {
        return exports.ContentHash_Graph.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.Graph",
            value: exports.ContentHash_Graph.encode(message).finish()
        };
    }
};
function createBaseContentEntry() {
    return {
        contentHash: undefined,
        iri: "",
        timestamp: undefined
    };
}
exports.ContentEntry = {
    typeUrl: "/regen.data.v1.ContentEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            exports.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.iri !== "") {
            writer.uint32(18).string(message.iri);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = exports.ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iri = reader.string();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentEntry();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? exports.ContentHash.fromPartial(object.contentHash) : undefined;
        message.iri = object.iri ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentEntry();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = exports.ContentHash.fromAmino(object.content_hash);
        }
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? exports.ContentHash.toAmino(message.contentHash) : undefined;
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContentEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ContentEntry.decode(message.value);
    },
    toProto(message) {
        return exports.ContentEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ContentEntry",
            value: exports.ContentEntry.encode(message).finish()
        };
    }
};
function createBaseAttestorEntry() {
    return {
        iri: "",
        attestor: "",
        timestamp: undefined
    };
}
exports.AttestorEntry = {
    typeUrl: "/regen.data.v1.AttestorEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.attestor !== "") {
            writer.uint32(18).string(message.attestor);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttestorEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.attestor = reader.string();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAttestorEntry();
        message.iri = object.iri ?? "";
        message.attestor = object.attestor ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttestorEntry();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AttestorEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AttestorEntry.decode(message.value);
    },
    toProto(message) {
        return exports.AttestorEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.AttestorEntry",
            value: exports.AttestorEntry.encode(message).finish()
        };
    }
};
function createBaseContentHashes() {
    return {
        contentHashes: []
    };
}
exports.ContentHashes = {
    typeUrl: "/regen.data.v1.ContentHashes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.contentHashes) {
            exports.ContentHash.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentHashes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHashes.push(exports.ContentHash.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseContentHashes();
        message.contentHashes = object.contentHashes?.map(e => exports.ContentHash.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentHashes();
        message.contentHashes = object.content_hashes?.map(e => exports.ContentHash.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contentHashes) {
            obj.content_hashes = message.contentHashes.map(e => e ? exports.ContentHash.toAmino(e) : undefined);
        }
        else {
            obj.content_hashes = message.contentHashes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContentHashes.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ContentHashes.decode(message.value);
    },
    toProto(message) {
        return exports.ContentHashes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.ContentHashes",
            value: exports.ContentHashes.encode(message).finish()
        };
    }
};
