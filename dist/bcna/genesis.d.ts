import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Bitcannaid, BitcannaidAmino, BitcannaidSDKType } from "./bitcannaid";
import { Supplychain, SupplychainAmino, SupplychainSDKType } from "./supplychain";
import { BinaryReader, BinaryWriter } from "../binary";
/** GenesisState defines the bcna module's genesis state. */
export interface GenesisState {
    params: Params;
    bitcannaidList: Bitcannaid[];
    bitcannaidCount: bigint;
    supplychainList: Supplychain[];
    supplychainCount: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the bcna module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    bitcannaidList?: BitcannaidAmino[];
    bitcannaidCount?: string;
    supplychainList?: SupplychainAmino[];
    supplychainCount?: string;
}
export interface GenesisStateAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the bcna module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    bitcannaidList: BitcannaidSDKType[];
    bitcannaidCount: bigint;
    supplychainList: SupplychainSDKType[];
    supplychainCount: bigint;
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
