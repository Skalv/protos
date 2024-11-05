import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Asset {
    id: bigint;
    name: string;
    denom: string;
    decimals: bigint;
}
export interface AssetProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.Asset";
    value: Uint8Array;
}
export interface AssetAmino {
    id?: string;
    name?: string;
    denom?: string;
    decimals?: string;
}
export interface AssetAminoMsg {
    type: "/comdex.asset.v1beta1.Asset";
    value: AssetAmino;
}
export interface AssetSDKType {
    id: bigint;
    name: string;
    denom: string;
    decimals: bigint;
}
export declare const Asset: {
    typeUrl: string;
    encode(message: Asset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Asset;
    fromPartial(object: Partial<Asset>): Asset;
    fromAmino(object: AssetAmino): Asset;
    toAmino(message: Asset): AssetAmino;
    fromAminoMsg(object: AssetAminoMsg): Asset;
    fromProtoMsg(message: AssetProtoMsg): Asset;
    toProto(message: Asset): Uint8Array;
    toProtoMsg(message: Asset): AssetProtoMsg;
};
