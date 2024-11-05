import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.inflation.v1beta2.GenesisState";
    value: Uint8Array;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateAmino {
    params: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/akash.inflation.v1beta2.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
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
