import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
    admin: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    admin?: string;
}
export interface ParamsAminoMsg {
    type: "/comdex.asset.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    admin: string;
}
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
