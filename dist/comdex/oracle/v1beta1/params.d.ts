import { BinaryReader, BinaryWriter } from "../../../binary";
export interface IBCParams {
    port: string;
    version: string;
}
export interface IBCParamsProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.IBCParams";
    value: Uint8Array;
}
export interface IBCParamsAmino {
    port?: string;
    version?: string;
}
export interface IBCParamsAminoMsg {
    type: "/comdex.oracle.v1beta1.IBCParams";
    value: IBCParamsAmino;
}
export interface IBCParamsSDKType {
    port: string;
    version: string;
}
export interface OracleParams {
    askCount: bigint;
    minCount: bigint;
    multiplier: bigint;
}
export interface OracleParamsProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.OracleParams";
    value: Uint8Array;
}
export interface OracleParamsAmino {
    ask_count?: string;
    min_count?: string;
    multiplier?: string;
}
export interface OracleParamsAminoMsg {
    type: "/comdex.oracle.v1beta1.OracleParams";
    value: OracleParamsAmino;
}
export interface OracleParamsSDKType {
    ask_count: bigint;
    min_count: bigint;
    multiplier: bigint;
}
export interface Params {
    ibc: IBCParams;
    oracle: OracleParams;
}
export interface ParamsProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    ibc?: IBCParamsAmino;
    oracle?: OracleParamsAmino;
}
export interface ParamsAminoMsg {
    type: "/comdex.oracle.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    ibc: IBCParamsSDKType;
    oracle: OracleParamsSDKType;
}
export declare const IBCParams: {
    typeUrl: string;
    encode(message: IBCParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IBCParams;
    fromPartial(object: Partial<IBCParams>): IBCParams;
    fromAmino(object: IBCParamsAmino): IBCParams;
    toAmino(message: IBCParams): IBCParamsAmino;
    fromAminoMsg(object: IBCParamsAminoMsg): IBCParams;
    fromProtoMsg(message: IBCParamsProtoMsg): IBCParams;
    toProto(message: IBCParams): Uint8Array;
    toProtoMsg(message: IBCParams): IBCParamsProtoMsg;
};
export declare const OracleParams: {
    typeUrl: string;
    encode(message: OracleParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OracleParams;
    fromPartial(object: Partial<OracleParams>): OracleParams;
    fromAmino(object: OracleParamsAmino): OracleParams;
    toAmino(message: OracleParams): OracleParamsAmino;
    fromAminoMsg(object: OracleParamsAminoMsg): OracleParams;
    fromProtoMsg(message: OracleParamsProtoMsg): OracleParams;
    toProto(message: OracleParams): Uint8Array;
    toProtoMsg(message: OracleParams): OracleParamsProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
