"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentEntry = exports.QueryBySignerResponse = exports.QueryBySignerRequest = exports.QueryByHashResponse = exports.QueryByHashRequest = void 0;
//@ts-nocheck
const types_1 = require("./types");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryByHashRequest() {
    return {
        hash: undefined
    };
}
exports.QueryByHashRequest = {
    typeUrl: "/regen.data.v1alpha2.QueryByHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== undefined) {
            types_1.ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
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
                    message.hash = types_1.ContentHash.decode(reader, reader.uint32());
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
        message.hash = object.hash !== undefined && object.hash !== null ? types_1.ContentHash.fromPartial(object.hash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByHashRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = types_1.ContentHash.fromAmino(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? types_1.ContentHash.toAmino(message.hash) : undefined;
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
            typeUrl: "/regen.data.v1alpha2.QueryByHashRequest",
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
    typeUrl: "/regen.data.v1alpha2.QueryByHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.entry !== undefined) {
            exports.ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
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
                    message.entry = exports.ContentEntry.decode(reader, reader.uint32());
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
        message.entry = object.entry !== undefined && object.entry !== null ? exports.ContentEntry.fromPartial(object.entry) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByHashResponse();
        if (object.entry !== undefined && object.entry !== null) {
            message.entry = exports.ContentEntry.fromAmino(object.entry);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.entry = message.entry ? exports.ContentEntry.toAmino(message.entry) : undefined;
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
            typeUrl: "/regen.data.v1alpha2.QueryByHashResponse",
            value: exports.QueryByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBySignerRequest() {
    return {
        signer: "",
        pagination: undefined
    };
}
exports.QueryBySignerRequest = {
    typeUrl: "/regen.data.v1alpha2.QueryBySignerRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBySignerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
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
        const message = createBaseQueryBySignerRequest();
        message.signer = object.signer ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBySignerRequest();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBySignerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBySignerRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBySignerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.QueryBySignerRequest",
            value: exports.QueryBySignerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBySignerResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
exports.QueryBySignerResponse = {
    typeUrl: "/regen.data.v1alpha2.QueryBySignerResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            exports.ContentEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBySignerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.ContentEntry.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBySignerResponse();
        message.entries = object.entries?.map(e => exports.ContentEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBySignerResponse();
        message.entries = object.entries?.map(e => exports.ContentEntry.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.ContentEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBySignerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBySignerResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBySignerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.QueryBySignerResponse",
            value: exports.QueryBySignerResponse.encode(message).finish()
        };
    }
};
function createBaseContentEntry() {
    return {
        hash: undefined,
        iri: "",
        timestamp: undefined,
        signers: [],
        content: undefined
    };
}
exports.ContentEntry = {
    typeUrl: "/regen.data.v1alpha2.ContentEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== undefined) {
            types_1.ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
        }
        if (message.iri !== "") {
            writer.uint32(18).string(message.iri);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signers) {
            types_1.SignerEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.content !== undefined) {
            types_1.Content.encode(message.content, writer.uint32(42).fork()).ldelim();
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
                    message.hash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iri = reader.string();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signers.push(types_1.SignerEntry.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.content = types_1.Content.decode(reader, reader.uint32());
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
        message.hash = object.hash !== undefined && object.hash !== null ? types_1.ContentHash.fromPartial(object.hash) : undefined;
        message.iri = object.iri ?? "";
        message.timestamp = object.timestamp ?? undefined;
        message.signers = object.signers?.map(e => types_1.SignerEntry.fromPartial(e)) || [];
        message.content = object.content !== undefined && object.content !== null ? types_1.Content.fromPartial(object.content) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentEntry();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = types_1.ContentHash.fromAmino(object.hash);
        }
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        message.signers = object.signers?.map(e => types_1.SignerEntry.fromAmino(e)) || [];
        if (object.content !== undefined && object.content !== null) {
            message.content = types_1.Content.fromAmino(object.content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? types_1.ContentHash.toAmino(message.hash) : undefined;
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        if (message.signers) {
            obj.signers = message.signers.map(e => e ? types_1.SignerEntry.toAmino(e) : undefined);
        }
        else {
            obj.signers = message.signers;
        }
        obj.content = message.content ? types_1.Content.toAmino(message.content) : undefined;
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
            typeUrl: "/regen.data.v1alpha2.ContentEntry",
            value: exports.ContentEntry.encode(message).finish()
        };
    }
};
