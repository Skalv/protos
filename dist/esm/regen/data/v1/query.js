//@ts-nocheck
import { ContentHash, ContentEntry } from "./types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryByIRIRequest() {
    return {
        iri: ""
    };
}
export const QueryByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryByIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return QueryByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByIRIRequest",
            value: QueryByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryByIRIResponse() {
    return {
        entry: undefined
    };
}
export const QueryByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryByIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.entry !== undefined) {
            ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entry = ContentEntry.decode(reader, reader.uint32());
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
        message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByIRIResponse();
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = ContentEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.entry = message.entry ? ContentEntry.toAmino(message.entry) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return QueryByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByIRIResponse",
            value: QueryByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryByHashRequest() {
    return {
        contentHash: undefined
    };
}
export const QueryByHashRequest = {
    typeUrl: "/regen.data.v1.QueryByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryByHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByHashRequest",
            value: QueryByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryByHashResponse() {
    return {
        entry: undefined
    };
}
export const QueryByHashResponse = {
    typeUrl: "/regen.data.v1.QueryByHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.entry !== undefined) {
            ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entry = ContentEntry.decode(reader, reader.uint32());
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
        message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByHashResponse();
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = ContentEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.entry = message.entry ? ContentEntry.toAmino(message.entry) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryByHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByHashResponse",
            value: QueryByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryByAttestorRequest() {
    return {
        attestor: "",
        pagination: undefined
    };
}
export const QueryByAttestorRequest = {
    typeUrl: "/regen.data.v1.QueryByAttestorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.attestor !== "") {
            writer.uint32(10).string(message.attestor);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByAttestorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestor = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByAttestorRequest();
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryByAttestorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryByAttestorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryByAttestorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByAttestorRequest",
            value: QueryByAttestorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryByAttestorResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
export const QueryByAttestorResponse = {
    typeUrl: "/regen.data.v1.QueryByAttestorResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.entries) {
            ContentEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByAttestorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(ContentEntry.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.entries = object.entries?.map(e => ContentEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByAttestorResponse();
        message.entries = object.entries?.map(e => ContentEntry.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? ContentEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryByAttestorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryByAttestorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryByAttestorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryByAttestorResponse",
            value: QueryByAttestorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByHashRequest() {
    return {
        contentHash: undefined
    };
}
export const QueryIRIByHashRequest = {
    typeUrl: "/regen.data.v1.QueryIRIByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIRIByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIRIByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIRIByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIRIByHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIRIByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByHashRequest",
            value: QueryIRIByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByHashResponse() {
    return {
        iri: ""
    };
}
export const QueryIRIByHashResponse = {
    typeUrl: "/regen.data.v1.QueryIRIByHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIRIByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIRIByHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIRIByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByHashResponse",
            value: QueryIRIByHashResponse.encode(message).finish()
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
export const QueryIRIByRawHashRequest = {
    typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIRIByRawHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIRIByRawHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIRIByRawHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest",
            value: QueryIRIByRawHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByRawHashResponse() {
    return {
        iri: ""
    };
}
export const QueryIRIByRawHashResponse = {
    typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIRIByRawHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIRIByRawHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIRIByRawHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse",
            value: QueryIRIByRawHashResponse.encode(message).finish()
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
export const QueryIRIByGraphHashRequest = {
    typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIRIByGraphHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIRIByGraphHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIRIByGraphHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest",
            value: QueryIRIByGraphHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryIRIByGraphHashResponse() {
    return {
        iri: ""
    };
}
export const QueryIRIByGraphHashResponse = {
    typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIRIByGraphHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryIRIByGraphHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIRIByGraphHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse",
            value: QueryIRIByGraphHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHashByIRIRequest() {
    return {
        iri: ""
    };
}
export const QueryHashByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryHashByIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryHashByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHashByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return QueryHashByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryHashByIRIRequest",
            value: QueryHashByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHashByIRIResponse() {
    return {
        contentHash: undefined
    };
}
export const QueryHashByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryHashByIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHashByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryHashByIRIResponse();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryHashByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHashByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return QueryHashByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryHashByIRIResponse",
            value: QueryHashByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
export const QueryAttestorsByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestorsByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestorsByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAttestorsByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest",
            value: QueryAttestorsByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByIRIResponse() {
    return {
        attestors: [],
        pagination: undefined
    };
}
export const QueryAttestorsByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.attestors) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestors.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByIRIResponse();
        message.attestors = object.attestors?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestorsByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestorsByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAttestorsByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse",
            value: QueryAttestorsByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
export const QueryAttestorsByHashRequest = {
    typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestorsByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestorsByHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAttestorsByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest",
            value: QueryAttestorsByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestorsByHashResponse() {
    return {
        attestors: [],
        pagination: undefined
    };
}
export const QueryAttestorsByHashResponse = {
    typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.attestors) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestorsByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestors.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAttestorsByHashResponse();
        message.attestors = object.attestors?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestorsByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestorsByHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAttestorsByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse",
            value: QueryAttestorsByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIRequest() {
    return {
        iri: "",
        pagination: undefined
    };
}
export const QueryResolversByIRIRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIRequest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByIRIRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByIRIRequest.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByIRIRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
            value: QueryResolversByIRIRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByIRIResponse() {
    return {
        resolverUrls: [],
        pagination: undefined
    };
}
export const QueryResolversByIRIResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.resolverUrls) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByIRIResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolverUrls.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByIRIResponse();
        message.resolverUrls = object.resolver_urls?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByIRIResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByIRIResponse.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByIRIResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
            value: QueryResolversByIRIResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashRequest() {
    return {
        contentHash: undefined,
        pagination: undefined
    };
}
export const QueryResolversByHashRequest = {
    typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contentHash !== undefined) {
            ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contentHash = ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashRequest();
        if (object.content_hash !== undefined && object.content_hash !== null) {
            message.contentHash = ContentHash.fromAmino(object.content_hash);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByHashRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
            value: QueryResolversByHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolversByHashResponse() {
    return {
        resolverUrls: [],
        pagination: undefined
    };
}
export const QueryResolversByHashResponse = {
    typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.resolverUrls) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResolversByHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resolverUrls.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryResolversByHashResponse();
        message.resolverUrls = object.resolver_urls?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryResolversByHashResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolversByHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryResolversByHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
            value: QueryResolversByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryResolverInfoRequest() {
    return {
        url: ""
    };
}
export const QueryResolverInfoRequest = {
    typeUrl: "/regen.data.v1.QueryResolverInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryResolverInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolverInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryResolverInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverInfoRequest",
            value: QueryResolverInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryResolverInfoResponse() {
    return {
        id: BigInt(0),
        manager: ""
    };
}
export const QueryResolverInfoResponse = {
    typeUrl: "/regen.data.v1.QueryResolverInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.manager !== "") {
            writer.uint32(18).string(message.manager);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryResolverInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryResolverInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryResolverInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.QueryResolverInfoResponse",
            value: QueryResolverInfoResponse.encode(message).finish()
        };
    }
};
