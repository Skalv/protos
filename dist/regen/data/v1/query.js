"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResolverInfoResponse = exports.QueryResolverInfoRequest = exports.QueryResolversByHashResponse = exports.QueryResolversByHashRequest = exports.QueryResolversByIRIResponse = exports.QueryResolversByIRIRequest = exports.QueryAttestorsByHashResponse = exports.QueryAttestorsByHashRequest = exports.QueryAttestorsByIRIResponse = exports.QueryAttestorsByIRIRequest = exports.QueryHashByIRIResponse = exports.QueryHashByIRIRequest = exports.QueryIRIByGraphHashResponse = exports.QueryIRIByGraphHashRequest = exports.QueryIRIByRawHashResponse = exports.QueryIRIByRawHashRequest = exports.QueryIRIByHashResponse = exports.QueryIRIByHashRequest = exports.QueryByAttestorResponse = exports.QueryByAttestorRequest = exports.QueryByHashResponse = exports.QueryByHashRequest = exports.QueryByIRIResponse = exports.QueryByIRIRequest = void 0;
//@ts-nocheck
const types_1 = require("./types");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const binary_1 = require("../../../binary");
function createBaseQueryByIRIRequest() {
    return {
        iri: ""
    };
}
exports.QueryByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryByIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryByIRIRequest();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByIRIRequest",
            value: exports.QueryByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryByIRIResponse() {
    return {
        entry: undefined
    };
}
exports.QueryByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryByIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.entry !== undefined) {
            types_1.ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entry = types_1.ContentEntry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryByIRIResponse();
        message.entry = object.entry !== undefined && object.entry !== null ? types_1.ContentEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByIRIResponse();
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = types_1.ContentEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.entry = message.entry ? types_1.ContentEntry.toAmino(message.entry) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByIRIResponse",
            value: exports.QueryByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryByHashRequest() {
    return {
        contentHash: undefined
    };
}
exports.QueryByHashRequest = {
    typeUrl: "/regen.data.v1.QueryByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryByHashRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryByHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByHashRequest",
            value: exports.QueryByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryByHashResponse() {
    return {
        entry: undefined
    };
}
exports.QueryByHashResponse = {
    typeUrl: "/regen.data.v1.QueryByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.entry !== undefined) {
            types_1.ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entry = types_1.ContentEntry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryByHashResponse();
        message.entry = object.entry !== undefined && object.entry !== null ? types_1.ContentEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByHashResponse();
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = types_1.ContentEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.entry = message.entry ? types_1.ContentEntry.toAmino(message.entry) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryByHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByHashResponse",
            value: exports.QueryByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryByAttestorRequest() {
    return {
        attestor: "",
        pagination: undefined
    };
}
exports.QueryByAttestorRequest = {
    typeUrl: "/regen.data.v1.QueryByAttestorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.attestor !== "") {
            writer.uint32(10).string(message.attestor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByAttestorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestor = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryByAttestorRequest();
        message.attestor = object.attestor ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByAttestorRequest();
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryByAttestorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryByAttestorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryByAttestorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByAttestorRequest",
            value: exports.QueryByAttestorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryByAttestorResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
exports.QueryByAttestorResponse = {
    typeUrl: "/regen.data.v1.QueryByAttestorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            types_1.ContentEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByAttestorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(types_1.ContentEntry.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryByAttestorResponse();
        message.entries = object.entries?.map(e => types_1.ContentEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByAttestorResponse();
        message.entries = object.entries?.map(e => types_1.ContentEntry.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? types_1.ContentEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryByAttestorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryByAttestorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryByAttestorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByAttestorResponse",
            value: exports.QueryByAttestorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByHashRequest() {
    return {
        contentHash: undefined
    };
}
exports.QueryIRIByHashRequest = {
    typeUrl: "/regen.data.v1.QueryIRIByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIRIByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIRIByHashRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIRIByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIRIByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIRIByHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIRIByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByHashRequest",
            value: exports.QueryIRIByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByHashResponse() {
    return {
        iri: ""
    };
}
exports.QueryIRIByHashResponse = {
    typeUrl: "/regen.data.v1.QueryIRIByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIRIByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIRIByHashResponse();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIRIByHashResponse();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIRIByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIRIByHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIRIByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByHashResponse",
            value: exports.QueryIRIByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByRawHashRequest() {
    return {
        hash: "",
        digestAlgorithm: 0,
        mediaType: 0
    };
}
exports.QueryIRIByRawHashRequest = {
    typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
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
        const message = createBaseQueryIRIByRawHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
        const message = createBaseQueryIRIByRawHashRequest();
        message.hash = object.hash ?? "";
        message.digestAlgorithm = object.digestAlgorithm ?? 0;
        message.mediaType = object.mediaType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIRIByRawHashRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
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
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.media_type = message.mediaType === 0 ? undefined : message.mediaType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIRIByRawHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIRIByRawHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIRIByRawHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest",
            value: exports.QueryIRIByRawHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByRawHashResponse() {
    return {
        iri: ""
    };
}
exports.QueryIRIByRawHashResponse = {
    typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIRIByRawHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIRIByRawHashResponse();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIRIByRawHashResponse();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIRIByRawHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIRIByRawHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIRIByRawHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse",
            value: exports.QueryIRIByRawHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByGraphHashRequest() {
    return {
        hash: "",
        digestAlgorithm: 0,
        canonicalizationAlgorithm: 0,
        merkleTree: 0
    };
}
exports.QueryIRIByGraphHashRequest = {
    typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
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
        const message = createBaseQueryIRIByGraphHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
        const message = createBaseQueryIRIByGraphHashRequest();
        message.hash = object.hash ?? "";
        message.digestAlgorithm = object.digestAlgorithm ?? 0;
        message.canonicalizationAlgorithm = object.canonicalizationAlgorithm ?? 0;
        message.merkleTree = object.merkleTree ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIRIByGraphHashRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
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
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
        obj.canonicalization_algorithm = message.canonicalizationAlgorithm === 0 ? undefined : message.canonicalizationAlgorithm;
        obj.merkle_tree = message.merkleTree === 0 ? undefined : message.merkleTree;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIRIByGraphHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIRIByGraphHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIRIByGraphHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest",
            value: exports.QueryIRIByGraphHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByGraphHashResponse() {
    return {
        iri: ""
    };
}
exports.QueryIRIByGraphHashResponse = {
    typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIRIByGraphHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIRIByGraphHashResponse();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIRIByGraphHashResponse();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIRIByGraphHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryIRIByGraphHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIRIByGraphHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse",
            value: exports.QueryIRIByGraphHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHashByIRIRequest() {
    return {
        iri: ""
    };
}
exports.QueryHashByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryHashByIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHashByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHashByIRIRequest();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHashByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHashByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHashByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHashByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryHashByIRIRequest",
            value: exports.QueryHashByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHashByIRIResponse() {
    return {
        contentHash: undefined
    };
}
exports.QueryHashByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryHashByIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHashByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHashByIRIResponse();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHashByIRIResponse();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHashByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHashByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHashByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryHashByIRIResponse",
            value: exports.QueryHashByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
exports.QueryAttestorsByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestorsByIRIRequest();
        message.iri = object.iri ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestorsByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestorsByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestorsByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest",
            value: exports.QueryAttestorsByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByIRIResponse() {
    return {
        attestors: [],
        pagination: undefined
    };
}
exports.QueryAttestorsByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.attestors) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestors.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestorsByIRIResponse();
        message.attestors = object.attestors?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByIRIResponse();
        message.attestors = object.attestors?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestors) {
            obj.attestors = message.attestors.map(e => e);
        }
        else {
            obj.attestors = message.attestors;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestorsByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestorsByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestorsByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse",
            value: exports.QueryAttestorsByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
exports.QueryAttestorsByHashRequest = {
    typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestorsByHashRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestorsByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestorsByHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestorsByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest",
            value: exports.QueryAttestorsByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByHashResponse() {
    return {
        attestors: [],
        pagination: undefined
    };
}
exports.QueryAttestorsByHashResponse = {
    typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.attestors) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestors.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestorsByHashResponse();
        message.attestors = object.attestors?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByHashResponse();
        message.attestors = object.attestors?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.attestors) {
            obj.attestors = message.attestors.map(e => e);
        }
        else {
            obj.attestors = message.attestors;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestorsByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestorsByHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestorsByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse",
            value: exports.QueryAttestorsByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
exports.QueryResolversByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByIRIRequest();
        message.iri = object.iri ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
            value: exports.QueryResolversByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIResponse() {
    return {
        resolverUrls: [],
        pagination: undefined
    };
}
exports.QueryResolversByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.resolverUrls) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolverUrls.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByIRIResponse();
        message.resolverUrls = object.resolverUrls?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIResponse();
        message.resolverUrls = object.resolver_urls?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolverUrls) {
            obj.resolver_urls = message.resolverUrls.map(e => e);
        }
        else {
            obj.resolver_urls = message.resolverUrls;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
            value: exports.QueryResolversByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
exports.QueryResolversByHashRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            types_1.ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByHashRequest();
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? types_1.ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = types_1.ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? types_1.ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
            value: exports.QueryResolversByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashResponse() {
    return {
        resolverUrls: [],
        pagination: undefined
    };
}
exports.QueryResolversByHashResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.resolverUrls) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolverUrls.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolversByHashResponse();
        message.resolverUrls = object.resolverUrls?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashResponse();
        message.resolverUrls = object.resolver_urls?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.resolverUrls) {
            obj.resolver_urls = message.resolverUrls.map(e => e);
        }
        else {
            obj.resolver_urls = message.resolverUrls;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolversByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolversByHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolversByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
            value: exports.QueryResolversByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolverInfoRequest() {
    return {
        url: ""
    };
}
exports.QueryResolverInfoRequest = {
    typeUrl: "/regen.data.v1.QueryResolverInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolverInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolverInfoRequest();
        message.url = object.url ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolverInfoRequest();
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.url = message.url === "" ? undefined : message.url;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolverInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolverInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolverInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverInfoRequest",
            value: exports.QueryResolverInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolverInfoResponse() {
    return {
        id: BigInt(0),
        manager: ""
    };
}
exports.QueryResolverInfoResponse = {
    typeUrl: "/regen.data.v1.QueryResolverInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.manager !== "") {
            writer.uint32(18).string(message.manager);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolverInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.manager = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryResolverInfoResponse();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.manager = object.manager ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolverInfoResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.manager !== undefined && object.manager !== null) {
            message.manager = object.manager;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.manager = message.manager === "" ? undefined : message.manager;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryResolverInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryResolverInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryResolverInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverInfoResponse",
            value: exports.QueryResolverInfoResponse.encode(message).finish()
        };
    }
};
