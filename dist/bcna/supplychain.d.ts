import { BinaryReader, BinaryWriter } from "../binary";
export interface Supplychain {
    id: bigint;
    product: string;
    info: string;
    supplyinfo: string;
    creator: string;
}
export interface SupplychainProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.Supplychain";
    value: Uint8Array;
}
export interface SupplychainAmino {
    id?: string;
    product?: string;
    info?: string;
    supplyinfo?: string;
    creator?: string;
}
export interface SupplychainAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.Supplychain";
    value: SupplychainAmino;
}
export interface SupplychainSDKType {
    id: bigint;
    product: string;
    info: string;
    supplyinfo: string;
    creator: string;
}
export declare const Supplychain: {
    typeUrl: string;
    encode(message: Supplychain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Supplychain;
    fromPartial(object: Partial<Supplychain>): Supplychain;
    fromAmino(object: SupplychainAmino): Supplychain;
    toAmino(message: Supplychain): SupplychainAmino;
    fromAminoMsg(object: SupplychainAminoMsg): Supplychain;
    fromProtoMsg(message: SupplychainProtoMsg): Supplychain;
    toProto(message: Supplychain): Uint8Array;
    toProtoMsg(message: Supplychain): SupplychainProtoMsg;
};
