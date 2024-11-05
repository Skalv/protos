import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorData {
    /** iri is the data IRI */
    iri: string;
}
export interface EventAnchorDataProtoMsg {
    typeUrl: "/regen.data.v1alpha2.EventAnchorData";
    value: Uint8Array;
}
/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorDataAmino {
    /** iri is the data IRI */
    iri?: string;
}
export interface EventAnchorDataAminoMsg {
    type: "/regen.data.v1alpha2.EventAnchorData";
    value: EventAnchorDataAmino;
}
/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorDataSDKType {
    iri: string;
}
/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignData {
    /** iri is the data IRI */
    iri: string;
    /** signers are the addresses of the accounts which have signed the data. */
    signers: string[];
}
export interface EventSignDataProtoMsg {
    typeUrl: "/regen.data.v1alpha2.EventSignData";
    value: Uint8Array;
}
/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignDataAmino {
    /** iri is the data IRI */
    iri?: string;
    /** signers are the addresses of the accounts which have signed the data. */
    signers?: string[];
}
export interface EventSignDataAminoMsg {
    type: "/regen.data.v1alpha2.EventSignData";
    value: EventSignDataAmino;
}
/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignDataSDKType {
    iri: string;
    signers: string[];
}
/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawData {
    /** iri is the data IRI */
    iri: string;
}
export interface EventStoreRawDataProtoMsg {
    typeUrl: "/regen.data.v1alpha2.EventStoreRawData";
    value: Uint8Array;
}
/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawDataAmino {
    /** iri is the data IRI */
    iri?: string;
}
export interface EventStoreRawDataAminoMsg {
    type: "/regen.data.v1alpha2.EventStoreRawData";
    value: EventStoreRawDataAmino;
}
/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawDataSDKType {
    iri: string;
}
export declare const EventAnchorData: {
    typeUrl: string;
    encode(message: EventAnchorData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAnchorData;
    fromPartial(object: Partial<EventAnchorData>): EventAnchorData;
    fromAmino(object: EventAnchorDataAmino): EventAnchorData;
    toAmino(message: EventAnchorData): EventAnchorDataAmino;
    fromAminoMsg(object: EventAnchorDataAminoMsg): EventAnchorData;
    fromProtoMsg(message: EventAnchorDataProtoMsg): EventAnchorData;
    toProto(message: EventAnchorData): Uint8Array;
    toProtoMsg(message: EventAnchorData): EventAnchorDataProtoMsg;
};
export declare const EventSignData: {
    typeUrl: string;
    encode(message: EventSignData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventSignData;
    fromPartial(object: Partial<EventSignData>): EventSignData;
    fromAmino(object: EventSignDataAmino): EventSignData;
    toAmino(message: EventSignData): EventSignDataAmino;
    fromAminoMsg(object: EventSignDataAminoMsg): EventSignData;
    fromProtoMsg(message: EventSignDataProtoMsg): EventSignData;
    toProto(message: EventSignData): Uint8Array;
    toProtoMsg(message: EventSignData): EventSignDataProtoMsg;
};
export declare const EventStoreRawData: {
    typeUrl: string;
    encode(message: EventStoreRawData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventStoreRawData;
    fromPartial(object: Partial<EventStoreRawData>): EventStoreRawData;
    fromAmino(object: EventStoreRawDataAmino): EventStoreRawData;
    toAmino(message: EventStoreRawData): EventStoreRawDataAmino;
    fromAminoMsg(object: EventStoreRawDataAminoMsg): EventStoreRawData;
    fromProtoMsg(message: EventStoreRawDataProtoMsg): EventStoreRawData;
    toProto(message: EventStoreRawData): Uint8Array;
    toProtoMsg(message: EventStoreRawData): EventStoreRawDataProtoMsg;
};
