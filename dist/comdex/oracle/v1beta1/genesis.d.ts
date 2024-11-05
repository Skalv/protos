import { Market, MarketAmino, MarketSDKType } from "./oracle";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenesisState {
    markets: Market[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    markets?: MarketAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/comdex.oracle.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    markets: MarketSDKType[];
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
