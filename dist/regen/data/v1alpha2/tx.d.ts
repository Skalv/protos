import { ContentHash, ContentHashAmino, ContentHashSDKType, ContentHash_Graph, ContentHash_GraphAmino, ContentHash_GraphSDKType, ContentHash_Raw, ContentHash_RawAmino, ContentHash_RawSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorData {
    /**
     * sender is the address of the sender of the transaction.
     * The sender in StoreData is not attesting to the veracity of the underlying
     * data. They can simply be a intermediary providing services.
     */
    sender: string;
    /** hash is the hash-based identifier for the anchored content. */
    hash?: ContentHash;
}
export interface MsgAnchorDataProtoMsg {
    typeUrl: "/regen.data.v1alpha2.MsgAnchorData";
    value: Uint8Array;
}
/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorDataAmino {
    /**
     * sender is the address of the sender of the transaction.
     * The sender in StoreData is not attesting to the veracity of the underlying
     * data. They can simply be a intermediary providing services.
     */
    sender?: string;
    /** hash is the hash-based identifier for the anchored content. */
    hash?: ContentHashAmino;
}
export interface MsgAnchorDataAminoMsg {
    type: "/regen.data.v1alpha2.MsgAnchorData";
    value: MsgAnchorDataAmino;
}
/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorDataSDKType {
    sender: string;
    hash?: ContentHashSDKType;
}
/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponse {
    /** timestamp is the timestamp of the block at which the data was anchored. */
    timestamp?: Date;
}
export interface MsgAnchorDataResponseProtoMsg {
    typeUrl: "/regen.data.v1alpha2.MsgAnchorDataResponse";
    value: Uint8Array;
}
/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponseAmino {
    /** timestamp is the timestamp of the block at which the data was anchored. */
    timestamp?: string;
}
export interface MsgAnchorDataResponseAminoMsg {
    type: "/regen.data.v1alpha2.MsgAnchorDataResponse";
    value: MsgAnchorDataResponseAmino;
}
/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponseSDKType {
    timestamp?: Date;
}
/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignData {
    /**
     * signers are the addresses of the accounts signing the data.
     * By making a SignData request, the signers are attesting to the veracity
     * of the data referenced by the cid. The precise meaning of this may vary
     * depending on the underlying data.
     */
    signers: string[];
    /**
     * hash is the hash-based identifier for the anchored content. Only RDF graph
     * data can be signed as its data model is intended to specifically convey
     * semantic meaning.
     */
    hash?: ContentHash_Graph;
}
export interface MsgSignDataProtoMsg {
    typeUrl: "/regen.data.v1alpha2.MsgSignData";
    value: Uint8Array;
}
/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignDataAmino {
    /**
     * signers are the addresses of the accounts signing the data.
     * By making a SignData request, the signers are attesting to the veracity
     * of the data referenced by the cid. The precise meaning of this may vary
     * depending on the underlying data.
     */
    signers?: string[];
    /**
     * hash is the hash-based identifier for the anchored content. Only RDF graph
     * data can be signed as its data model is intended to specifically convey
     * semantic meaning.
     */
    hash?: ContentHash_GraphAmino;
}
export interface MsgSignDataAminoMsg {
    type: "/regen.data.v1alpha2.MsgSignData";
    value: MsgSignDataAmino;
}
/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignDataSDKType {
    signers: string[];
    hash?: ContentHash_GraphSDKType;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponse {
}
export interface MsgSignDataResponseProtoMsg {
    typeUrl: "/regen.data.v1alpha2.MsgSignDataResponse";
    value: Uint8Array;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponseAmino {
}
export interface MsgSignDataResponseAminoMsg {
    type: "/regen.data.v1alpha2.MsgSignDataResponse";
    value: MsgSignDataResponseAmino;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponseSDKType {
}
/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawData {
    /**
     * sender is the address of the sender of the transaction.
     * The sender in StoreData is not attesting to the veracity of the underlying
     * data. They can simply be a intermediary providing services.
     */
    sender: string;
    /** content_hash is the hash-based identifier for the anchored content. */
    contentHash?: ContentHash_Raw;
    /**
     * content is the content of the raw data corresponding to the provided
     * content hash.
     */
    content: Uint8Array;
}
export interface MsgStoreRawDataProtoMsg {
    typeUrl: "/regen.data.v1alpha2.MsgStoreRawData";
    value: Uint8Array;
}
/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawDataAmino {
    /**
     * sender is the address of the sender of the transaction.
     * The sender in StoreData is not attesting to the veracity of the underlying
     * data. They can simply be a intermediary providing services.
     */
    sender?: string;
    /** content_hash is the hash-based identifier for the anchored content. */
    content_hash?: ContentHash_RawAmino;
    /**
     * content is the content of the raw data corresponding to the provided
     * content hash.
     */
    content?: string;
}
export interface MsgStoreRawDataAminoMsg {
    type: "/regen.data.v1alpha2.MsgStoreRawData";
    value: MsgStoreRawDataAmino;
}
/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawDataSDKType {
    sender: string;
    content_hash?: ContentHash_RawSDKType;
    content: Uint8Array;
}
/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponse {
}
export interface MsgStoreRawDataResponseProtoMsg {
    typeUrl: "/regen.data.v1alpha2.MsgStoreRawDataResponse";
    value: Uint8Array;
}
/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponseAmino {
}
export interface MsgStoreRawDataResponseAminoMsg {
    type: "/regen.data.v1alpha2.MsgStoreRawDataResponse";
    value: MsgStoreRawDataResponseAmino;
}
/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponseSDKType {
}
export declare const MsgAnchorData: {
    typeUrl: string;
    encode(message: MsgAnchorData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchorData;
    fromPartial(object: Partial<MsgAnchorData>): MsgAnchorData;
    fromAmino(object: MsgAnchorDataAmino): MsgAnchorData;
    toAmino(message: MsgAnchorData): MsgAnchorDataAmino;
    fromAminoMsg(object: MsgAnchorDataAminoMsg): MsgAnchorData;
    fromProtoMsg(message: MsgAnchorDataProtoMsg): MsgAnchorData;
    toProto(message: MsgAnchorData): Uint8Array;
    toProtoMsg(message: MsgAnchorData): MsgAnchorDataProtoMsg;
};
export declare const MsgAnchorDataResponse: {
    typeUrl: string;
    encode(message: MsgAnchorDataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAnchorDataResponse;
    fromPartial(object: Partial<MsgAnchorDataResponse>): MsgAnchorDataResponse;
    fromAmino(object: MsgAnchorDataResponseAmino): MsgAnchorDataResponse;
    toAmino(message: MsgAnchorDataResponse): MsgAnchorDataResponseAmino;
    fromAminoMsg(object: MsgAnchorDataResponseAminoMsg): MsgAnchorDataResponse;
    fromProtoMsg(message: MsgAnchorDataResponseProtoMsg): MsgAnchorDataResponse;
    toProto(message: MsgAnchorDataResponse): Uint8Array;
    toProtoMsg(message: MsgAnchorDataResponse): MsgAnchorDataResponseProtoMsg;
};
export declare const MsgSignData: {
    typeUrl: string;
    encode(message: MsgSignData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSignData;
    fromPartial(object: Partial<MsgSignData>): MsgSignData;
    fromAmino(object: MsgSignDataAmino): MsgSignData;
    toAmino(message: MsgSignData): MsgSignDataAmino;
    fromAminoMsg(object: MsgSignDataAminoMsg): MsgSignData;
    fromProtoMsg(message: MsgSignDataProtoMsg): MsgSignData;
    toProto(message: MsgSignData): Uint8Array;
    toProtoMsg(message: MsgSignData): MsgSignDataProtoMsg;
};
export declare const MsgSignDataResponse: {
    typeUrl: string;
    encode(_: MsgSignDataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSignDataResponse;
    fromPartial(_: Partial<MsgSignDataResponse>): MsgSignDataResponse;
    fromAmino(_: MsgSignDataResponseAmino): MsgSignDataResponse;
    toAmino(_: MsgSignDataResponse): MsgSignDataResponseAmino;
    fromAminoMsg(object: MsgSignDataResponseAminoMsg): MsgSignDataResponse;
    fromProtoMsg(message: MsgSignDataResponseProtoMsg): MsgSignDataResponse;
    toProto(message: MsgSignDataResponse): Uint8Array;
    toProtoMsg(message: MsgSignDataResponse): MsgSignDataResponseProtoMsg;
};
export declare const MsgStoreRawData: {
    typeUrl: string;
    encode(message: MsgStoreRawData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreRawData;
    fromPartial(object: Partial<MsgStoreRawData>): MsgStoreRawData;
    fromAmino(object: MsgStoreRawDataAmino): MsgStoreRawData;
    toAmino(message: MsgStoreRawData): MsgStoreRawDataAmino;
    fromAminoMsg(object: MsgStoreRawDataAminoMsg): MsgStoreRawData;
    fromProtoMsg(message: MsgStoreRawDataProtoMsg): MsgStoreRawData;
    toProto(message: MsgStoreRawData): Uint8Array;
    toProtoMsg(message: MsgStoreRawData): MsgStoreRawDataProtoMsg;
};
export declare const MsgStoreRawDataResponse: {
    typeUrl: string;
    encode(_: MsgStoreRawDataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreRawDataResponse;
    fromPartial(_: Partial<MsgStoreRawDataResponse>): MsgStoreRawDataResponse;
    fromAmino(_: MsgStoreRawDataResponseAmino): MsgStoreRawDataResponse;
    toAmino(_: MsgStoreRawDataResponse): MsgStoreRawDataResponseAmino;
    fromAminoMsg(object: MsgStoreRawDataResponseAminoMsg): MsgStoreRawDataResponse;
    fromProtoMsg(message: MsgStoreRawDataResponseProtoMsg): MsgStoreRawDataResponse;
    toProto(message: MsgStoreRawDataResponse): Uint8Array;
    toProtoMsg(message: MsgStoreRawDataResponse): MsgStoreRawDataResponseProtoMsg;
};
