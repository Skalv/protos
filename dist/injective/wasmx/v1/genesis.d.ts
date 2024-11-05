import { Params, ParamsAmino, ParamsSDKType } from "./wasmx";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to wasmx. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.wasmx.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to wasmx. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/injective.wasmx.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the wasmx module's genesis state. */
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
