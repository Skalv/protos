import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Market {
    symbol: string;
    scriptId: bigint;
}
export interface MarketProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.Market";
    value: Uint8Array;
}
export interface MarketAmino {
    symbol?: string;
    script_id?: string;
}
export interface MarketAminoMsg {
    type: "/comdex.oracle.v1beta1.Market";
    value: MarketAmino;
}
export interface MarketSDKType {
    symbol: string;
    script_id: bigint;
}
export interface Calldata {
    symbols: string[];
    multiplier: bigint;
}
export interface CalldataProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.Calldata";
    value: Uint8Array;
}
export interface CalldataAmino {
    symbols?: string[];
    multiplier?: string;
}
export interface CalldataAminoMsg {
    type: "/comdex.oracle.v1beta1.Calldata";
    value: CalldataAmino;
}
export interface CalldataSDKType {
    symbols: string[];
    multiplier: bigint;
}
export interface Result {
    rates: bigint[];
}
export interface ResultProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.Result";
    value: Uint8Array;
}
export interface ResultAmino {
    rates?: string[];
}
export interface ResultAminoMsg {
    type: "/comdex.oracle.v1beta1.Result";
    value: ResultAmino;
}
export interface ResultSDKType {
    rates: bigint[];
}
export declare const Market: {
    typeUrl: string;
    encode(message: Market, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Market;
    fromPartial(object: Partial<Market>): Market;
    fromAmino(object: MarketAmino): Market;
    toAmino(message: Market): MarketAmino;
    fromAminoMsg(object: MarketAminoMsg): Market;
    fromProtoMsg(message: MarketProtoMsg): Market;
    toProto(message: Market): Uint8Array;
    toProtoMsg(message: Market): MarketProtoMsg;
};
export declare const Calldata: {
    typeUrl: string;
    encode(message: Calldata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Calldata;
    fromPartial(object: Partial<Calldata>): Calldata;
    fromAmino(object: CalldataAmino): Calldata;
    toAmino(message: Calldata): CalldataAmino;
    fromAminoMsg(object: CalldataAminoMsg): Calldata;
    fromProtoMsg(message: CalldataProtoMsg): Calldata;
    toProto(message: Calldata): Uint8Array;
    toProtoMsg(message: Calldata): CalldataProtoMsg;
};
export declare const Result: {
    typeUrl: string;
    encode(message: Result, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Result;
    fromPartial(object: Partial<Result>): Result;
    fromAmino(object: ResultAmino): Result;
    toAmino(message: Result): ResultAmino;
    fromAminoMsg(object: ResultAminoMsg): Result;
    fromProtoMsg(message: ResultProtoMsg): Result;
    toProto(message: Result): Uint8Array;
    toProtoMsg(message: Result): ResultProtoMsg;
};
