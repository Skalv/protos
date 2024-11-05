import { ContentHash, ContentHashAmino, ContentHashSDKType, SignerEntry, SignerEntryAmino, SignerEntrySDKType, Content, ContentAmino, ContentSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState is the genesis state */
export interface GenesisState {
    /** entries are the content entries */
    entries: GenesisContentEntry[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/regen.data.v1alpha2.GenesisState";
    value: Uint8Array;
}
/** GenesisState is the genesis state */
export interface GenesisStateAmino {
    /** entries are the content entries */
    entries?: GenesisContentEntryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/regen.data.v1alpha2.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState is the genesis state */
export interface GenesisStateSDKType {
    entries: GenesisContentEntrySDKType[];
}
/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntry {
    /** hash is the ContentHash */
    hash?: ContentHash;
    /** timestamp is the anchor Timestamp */
    timestamp?: Date;
    /** signers are the signers, if any */
    signers: SignerEntry[];
    /** content is the actual content if stored on-chain */
    content?: Content;
}
export interface GenesisContentEntryProtoMsg {
    typeUrl: "/regen.data.v1alpha2.GenesisContentEntry";
    value: Uint8Array;
}
/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntryAmino {
    /** hash is the ContentHash */
    hash?: ContentHashAmino;
    /** timestamp is the anchor Timestamp */
    timestamp?: string;
    /** signers are the signers, if any */
    signers?: SignerEntryAmino[];
    /** content is the actual content if stored on-chain */
    content?: ContentAmino;
}
export interface GenesisContentEntryAminoMsg {
    type: "/regen.data.v1alpha2.GenesisContentEntry";
    value: GenesisContentEntryAmino;
}
/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntrySDKType {
    hash?: ContentHashSDKType;
    timestamp?: Date;
    signers: SignerEntrySDKType[];
    content?: ContentSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisContentEntry: {
    typeUrl: string;
    encode(message: GenesisContentEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisContentEntry;
    fromPartial(object: Partial<GenesisContentEntry>): GenesisContentEntry;
    fromAmino(object: GenesisContentEntryAmino): GenesisContentEntry;
    toAmino(message: GenesisContentEntry): GenesisContentEntryAmino;
    fromAminoMsg(object: GenesisContentEntryAminoMsg): GenesisContentEntry;
    fromProtoMsg(message: GenesisContentEntryProtoMsg): GenesisContentEntry;
    toProto(message: GenesisContentEntry): Uint8Array;
    toProtoMsg(message: GenesisContentEntry): GenesisContentEntryProtoMsg;
};
