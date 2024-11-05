import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Pair {
    id: bigint;
    assetIn: bigint;
    assetOut: bigint;
    liquidationRatio: string;
}
export interface PairProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.Pair";
    value: Uint8Array;
}
export interface PairAmino {
    id?: string;
    asset_in?: string;
    asset_out?: string;
    liquidation_ratio?: string;
}
export interface PairAminoMsg {
    type: "/comdex.asset.v1beta1.Pair";
    value: PairAmino;
}
export interface PairSDKType {
    id: bigint;
    asset_in: bigint;
    asset_out: bigint;
    liquidation_ratio: string;
}
export declare const Pair: {
    typeUrl: string;
    encode(message: Pair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pair;
    fromPartial(object: Partial<Pair>): Pair;
    fromAmino(object: PairAmino): Pair;
    toAmino(message: Pair): PairAmino;
    fromAminoMsg(object: PairAminoMsg): Pair;
    fromProtoMsg(message: PairProtoMsg): Pair;
    toProto(message: Pair): Uint8Array;
    toProtoMsg(message: Pair): PairProtoMsg;
};
