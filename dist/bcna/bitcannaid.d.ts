import { BinaryReader, BinaryWriter } from "../binary";
export interface Bitcannaid {
    id: bigint;
    bcnaid: string;
    address: string;
    creator: string;
}
export interface BitcannaidProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.Bitcannaid";
    value: Uint8Array;
}
export interface BitcannaidAmino {
    id?: string;
    bcnaid?: string;
    address?: string;
    creator?: string;
}
export interface BitcannaidAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.Bitcannaid";
    value: BitcannaidAmino;
}
export interface BitcannaidSDKType {
    id: bigint;
    bcnaid: string;
    address: string;
    creator: string;
}
export declare const Bitcannaid: {
    typeUrl: string;
    encode(message: Bitcannaid, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bitcannaid;
    fromPartial(object: Partial<Bitcannaid>): Bitcannaid;
    fromAmino(object: BitcannaidAmino): Bitcannaid;
    toAmino(message: Bitcannaid): BitcannaidAmino;
    fromAminoMsg(object: BitcannaidAminoMsg): Bitcannaid;
    fromProtoMsg(message: BitcannaidProtoMsg): Bitcannaid;
    toProto(message: Bitcannaid): Uint8Array;
    toProtoMsg(message: Bitcannaid): BitcannaidProtoMsg;
};
