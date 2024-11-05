import { Vault, VaultAmino, VaultSDKType } from "./vault";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenesisState {
    vaults: Vault[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    vaults?: VaultAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/comdex.vault.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    vaults: VaultSDKType[];
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
