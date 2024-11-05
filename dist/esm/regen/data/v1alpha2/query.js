//@ts-nocheck
import { ContentHash, SignerEntry, Content } from "./types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseQueryByHashRequest() {
    return {
        hash: undefined
    };
}
export const QueryByHashRequest = {
    typeUrl: "/regen.data.v1alpha2.QueryByHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== undefined) {
            ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
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
                    message.hash = ContentHash.decode(reader, reader.uint32());
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
        message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryByHashRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = ContentHash.fromAmino(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
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
            typeUrl: "/regen.data.v1alpha2.QueryByHashRequest",
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
    typeUrl: "/regen.data.v1alpha2.QueryByHashResponse",
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
            typeUrl: "/regen.data.v1alpha2.QueryByHashResponse",
            value: QueryByHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBySignerRequest() {
    return {
        signer: "",
        pagination: undefined
    };
}
export const QueryBySignerRequest = {
    typeUrl: "/regen.data.v1alpha2.QueryBySignerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBySignerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
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
        const message = createBaseQueryBySignerRequest();
        message.signer = object.signer ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBySignerRequest();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBySignerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBySignerRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBySignerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.QueryBySignerRequest",
            value: QueryBySignerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBySignerResponse() {
    return {
        entries: [],
        pagination: undefined
    };
}
export const QueryBySignerResponse = {
    typeUrl: "/regen.data.v1alpha2.QueryBySignerResponse",
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
        const message = createBaseQueryBySignerResponse();
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
        const message = createBaseQueryBySignerResponse();
        message.entries = object.entries?.map(e => ContentEntry.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBySignerResponse();
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
        return QueryBySignerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBySignerResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBySignerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.QueryBySignerResponse",
            value: QueryBySignerResponse.encode(message).finish()
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
export const ContentEntry = {
    typeUrl: "/regen.data.v1alpha2.ContentEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== undefined) {
            ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
        }
        if (message.iri !== "") {
            writer.uint32(18).string(message.iri);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signers) {
            SignerEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.content !== undefined) {
            Content.encode(message.content, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContentEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iri = reader.string();
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signers.push(SignerEntry.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.content = Content.decode(reader, reader.uint32());
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
        message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
        message.iri = object.iri ?? "";
        message.timestamp = object.timestamp ?? undefined;
        message.signers = object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
        message.content = object.content !== undefined && object.content !== null ? Content.fromPartial(object.content) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseContentEntry();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = ContentHash.fromAmino(object.hash);
        }
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        message.signers = object.signers?.map(e => SignerEntry.fromAmino(e)) || [];
        if (object.content !== undefined && object.content !== null) {
            message.content = Content.fromAmino(object.content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        if (message.signers) {
            obj.signers = message.signers.map(e => e ? SignerEntry.toAmino(e) : undefined);
        }
        else {
            obj.signers = message.signers;
        }
        obj.content = message.content ? Content.toAmino(message.content) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ContentEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ContentEntry.decode(message.value);
    },
    toProto(message) {
        return ContentEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.ContentEntry",
            value: ContentEntry.encode(message).finish()
        };
    }
};
