//@ts-nocheck
import { ContentHash, ContentHashAmino, ContentHashSDKType, SignerEntry, SignerEntryAmino, SignerEntrySDKType, Content, ContentAmino, ContentSDKType } from "./types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
function createBaseQueryByHashRequest(): QueryByHashRequest {
  return {
    hash: undefined
  };
}
export const QueryByHashRequest = {
  typeUrl: "/regen.data.v1alpha2.QueryByHashRequest",
  encode(message: QueryByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByHashRequest {
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
  fromPartial(object: Partial<QueryByHashRequest>): QueryByHashRequest {
    const message = createBaseQueryByHashRequest();
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    return message;
  },
  fromAmino(object: QueryByHashRequestAmino): QueryByHashRequest {
    const message = createBaseQueryByHashRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = ContentHash.fromAmino(object.hash);
    }
    return message;
  },
  toAmino(message: QueryByHashRequest): QueryByHashRequestAmino {
    const obj: any = {};
    obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryByHashRequestAminoMsg): QueryByHashRequest {
    return QueryByHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByHashRequestProtoMsg): QueryByHashRequest {
    return QueryByHashRequest.decode(message.value);
  },
  toProto(message: QueryByHashRequest): Uint8Array {
    return QueryByHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryByHashRequest): QueryByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.QueryByHashRequest",
      value: QueryByHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryByHashResponse(): QueryByHashResponse {
  return {
    entry: undefined
  };
}
export const QueryByHashResponse = {
  typeUrl: "/regen.data.v1alpha2.QueryByHashResponse",
  encode(message: QueryByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByHashResponse {
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
  fromPartial(object: Partial<QueryByHashResponse>): QueryByHashResponse {
    const message = createBaseQueryByHashResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
    return message;
  },
  fromAmino(object: QueryByHashResponseAmino): QueryByHashResponse {
    const message = createBaseQueryByHashResponse();
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = ContentEntry.fromAmino(object.entry);
    }
    return message;
  },
  toAmino(message: QueryByHashResponse): QueryByHashResponseAmino {
    const obj: any = {};
    obj.entry = message.entry ? ContentEntry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryByHashResponseAminoMsg): QueryByHashResponse {
    return QueryByHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByHashResponseProtoMsg): QueryByHashResponse {
    return QueryByHashResponse.decode(message.value);
  },
  toProto(message: QueryByHashResponse): Uint8Array {
    return QueryByHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryByHashResponse): QueryByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.QueryByHashResponse",
      value: QueryByHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBySignerRequest(): QueryBySignerRequest {
  return {
    signer: "",
    pagination: undefined
  };
}
export const QueryBySignerRequest = {
  typeUrl: "/regen.data.v1alpha2.QueryBySignerRequest",
  encode(message: QueryBySignerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBySignerRequest {
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
  fromPartial(object: Partial<QueryBySignerRequest>): QueryBySignerRequest {
    const message = createBaseQueryBySignerRequest();
    message.signer = object.signer ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBySignerRequestAmino): QueryBySignerRequest {
    const message = createBaseQueryBySignerRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBySignerRequest): QueryBySignerRequestAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBySignerRequestAminoMsg): QueryBySignerRequest {
    return QueryBySignerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBySignerRequestProtoMsg): QueryBySignerRequest {
    return QueryBySignerRequest.decode(message.value);
  },
  toProto(message: QueryBySignerRequest): Uint8Array {
    return QueryBySignerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBySignerRequest): QueryBySignerRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.QueryBySignerRequest",
      value: QueryBySignerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBySignerResponse(): QueryBySignerResponse {
  return {
    entries: [],
    pagination: undefined
  };
}
export const QueryBySignerResponse = {
  typeUrl: "/regen.data.v1alpha2.QueryBySignerResponse",
  encode(message: QueryBySignerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      ContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBySignerResponse {
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
  fromPartial(object: Partial<QueryBySignerResponse>): QueryBySignerResponse {
    const message = createBaseQueryBySignerResponse();
    message.entries = object.entries?.map(e => ContentEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBySignerResponseAmino): QueryBySignerResponse {
    const message = createBaseQueryBySignerResponse();
    message.entries = object.entries?.map(e => ContentEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBySignerResponse): QueryBySignerResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContentEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBySignerResponseAminoMsg): QueryBySignerResponse {
    return QueryBySignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBySignerResponseProtoMsg): QueryBySignerResponse {
    return QueryBySignerResponse.decode(message.value);
  },
  toProto(message: QueryBySignerResponse): Uint8Array {
    return QueryBySignerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBySignerResponse): QueryBySignerResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.QueryBySignerResponse",
      value: QueryBySignerResponse.encode(message).finish()
    };
  }
};
function createBaseContentEntry(): ContentEntry {
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
  encode(message: ContentEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      SignerEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.content !== undefined) {
      Content.encode(message.content, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContentEntry {
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
  fromPartial(object: Partial<ContentEntry>): ContentEntry {
    const message = createBaseContentEntry();
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    message.iri = object.iri ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.signers = object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
    message.content = object.content !== undefined && object.content !== null ? Content.fromPartial(object.content) : undefined;
    return message;
  },
  fromAmino(object: ContentEntryAmino): ContentEntry {
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
  toAmino(message: ContentEntry): ContentEntryAmino {
    const obj: any = {};
    obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
    obj.iri = message.iri === "" ? undefined : message.iri;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    if (message.signers) {
      obj.signers = message.signers.map(e => e ? SignerEntry.toAmino(e) : undefined);
    } else {
      obj.signers = message.signers;
    }
    obj.content = message.content ? Content.toAmino(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContentEntryAminoMsg): ContentEntry {
    return ContentEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentEntryProtoMsg): ContentEntry {
    return ContentEntry.decode(message.value);
  },
  toProto(message: ContentEntry): Uint8Array {
    return ContentEntry.encode(message).finish();
  },
  toProtoMsg(message: ContentEntry): ContentEntryProtoMsg {
    return {
      typeUrl: "/regen.data.v1alpha2.ContentEntry",
      value: ContentEntry.encode(message).finish()
    };
  }
};