import { Asset, AssetAmino, AssetSDKType } from "./asset";
import { Pair, PairAmino, PairSDKType } from "./pair";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenesisState {
    assets: Asset[];
    pairs: Pair[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    assets?: AssetAmino[];
    pairs?: PairAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/comdex.asset.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    assets: AssetSDKType[];
    pairs: PairSDKType[];
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
