import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Vault {
    id: bigint;
    pairId: bigint;
    owner: string;
    amountIn: string;
    amountOut: string;
}
export interface VaultProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.Vault";
    value: Uint8Array;
}
export interface VaultAmino {
    id?: string;
    pair_id?: string;
    owner?: string;
    amount_in?: string;
    amount_out?: string;
}
export interface VaultAminoMsg {
    type: "/comdex.vault.v1beta1.Vault";
    value: VaultAmino;
}
export interface VaultSDKType {
    id: bigint;
    pair_id: bigint;
    owner: string;
    amount_in: string;
    amount_out: string;
}
export declare const Vault: {
    typeUrl: string;
    encode(message: Vault, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Vault;
    fromPartial(object: Partial<Vault>): Vault;
    fromAmino(object: VaultAmino): Vault;
    toAmino(message: Vault): VaultAmino;
    fromAminoMsg(object: VaultAminoMsg): Vault;
    fromProtoMsg(message: VaultProtoMsg): Vault;
    toProto(message: Vault): Uint8Array;
    toProtoMsg(message: Vault): VaultProtoMsg;
};
