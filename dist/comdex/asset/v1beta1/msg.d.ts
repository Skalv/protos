import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgAddAssetRequest {
    from: string;
    name: string;
    denom: string;
    decimals: bigint;
}
export interface MsgAddAssetRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgAddAssetRequest";
    value: Uint8Array;
}
export interface MsgAddAssetRequestAmino {
    from?: string;
    name?: string;
    denom?: string;
    decimals?: string;
}
export interface MsgAddAssetRequestAminoMsg {
    type: "/comdex.asset.v1beta1.MsgAddAssetRequest";
    value: MsgAddAssetRequestAmino;
}
export interface MsgAddAssetRequestSDKType {
    from: string;
    name: string;
    denom: string;
    decimals: bigint;
}
export interface MsgAddAssetResponse {
}
export interface MsgAddAssetResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgAddAssetResponse";
    value: Uint8Array;
}
export interface MsgAddAssetResponseAmino {
}
export interface MsgAddAssetResponseAminoMsg {
    type: "/comdex.asset.v1beta1.MsgAddAssetResponse";
    value: MsgAddAssetResponseAmino;
}
export interface MsgAddAssetResponseSDKType {
}
export interface MsgUpdateAssetRequest {
    from: string;
    id: bigint;
    name: string;
    denom: string;
    decimals: bigint;
}
export interface MsgUpdateAssetRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetRequest";
    value: Uint8Array;
}
export interface MsgUpdateAssetRequestAmino {
    from?: string;
    id?: string;
    name?: string;
    denom?: string;
    decimals?: string;
}
export interface MsgUpdateAssetRequestAminoMsg {
    type: "/comdex.asset.v1beta1.MsgUpdateAssetRequest";
    value: MsgUpdateAssetRequestAmino;
}
export interface MsgUpdateAssetRequestSDKType {
    from: string;
    id: bigint;
    name: string;
    denom: string;
    decimals: bigint;
}
export interface MsgUpdateAssetResponse {
}
export interface MsgUpdateAssetResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetResponse";
    value: Uint8Array;
}
export interface MsgUpdateAssetResponseAmino {
}
export interface MsgUpdateAssetResponseAminoMsg {
    type: "/comdex.asset.v1beta1.MsgUpdateAssetResponse";
    value: MsgUpdateAssetResponseAmino;
}
export interface MsgUpdateAssetResponseSDKType {
}
export interface MsgAddPairRequest {
    from: string;
    assetIn: bigint;
    assetOut: bigint;
    liquidationRatio: string;
}
export interface MsgAddPairRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgAddPairRequest";
    value: Uint8Array;
}
export interface MsgAddPairRequestAmino {
    from?: string;
    asset_in?: string;
    asset_out?: string;
    liquidation_ratio?: string;
}
export interface MsgAddPairRequestAminoMsg {
    type: "/comdex.asset.v1beta1.MsgAddPairRequest";
    value: MsgAddPairRequestAmino;
}
export interface MsgAddPairRequestSDKType {
    from: string;
    asset_in: bigint;
    asset_out: bigint;
    liquidation_ratio: string;
}
export interface MsgAddPairResponse {
}
export interface MsgAddPairResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgAddPairResponse";
    value: Uint8Array;
}
export interface MsgAddPairResponseAmino {
}
export interface MsgAddPairResponseAminoMsg {
    type: "/comdex.asset.v1beta1.MsgAddPairResponse";
    value: MsgAddPairResponseAmino;
}
export interface MsgAddPairResponseSDKType {
}
export interface MsgUpdatePairRequest {
    from: string;
    id: bigint;
    liquidationRatio: string;
}
export interface MsgUpdatePairRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairRequest";
    value: Uint8Array;
}
export interface MsgUpdatePairRequestAmino {
    from?: string;
    id?: string;
    liquidation_ratio?: string;
}
export interface MsgUpdatePairRequestAminoMsg {
    type: "/comdex.asset.v1beta1.MsgUpdatePairRequest";
    value: MsgUpdatePairRequestAmino;
}
export interface MsgUpdatePairRequestSDKType {
    from: string;
    id: bigint;
    liquidation_ratio: string;
}
export interface MsgUpdatePairResponse {
}
export interface MsgUpdatePairResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairResponse";
    value: Uint8Array;
}
export interface MsgUpdatePairResponseAmino {
}
export interface MsgUpdatePairResponseAminoMsg {
    type: "/comdex.asset.v1beta1.MsgUpdatePairResponse";
    value: MsgUpdatePairResponseAmino;
}
export interface MsgUpdatePairResponseSDKType {
}
export declare const MsgAddAssetRequest: {
    typeUrl: string;
    encode(message: MsgAddAssetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAssetRequest;
    fromPartial(object: Partial<MsgAddAssetRequest>): MsgAddAssetRequest;
    fromAmino(object: MsgAddAssetRequestAmino): MsgAddAssetRequest;
    toAmino(message: MsgAddAssetRequest): MsgAddAssetRequestAmino;
    fromAminoMsg(object: MsgAddAssetRequestAminoMsg): MsgAddAssetRequest;
    fromProtoMsg(message: MsgAddAssetRequestProtoMsg): MsgAddAssetRequest;
    toProto(message: MsgAddAssetRequest): Uint8Array;
    toProtoMsg(message: MsgAddAssetRequest): MsgAddAssetRequestProtoMsg;
};
export declare const MsgAddAssetResponse: {
    typeUrl: string;
    encode(_: MsgAddAssetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAssetResponse;
    fromPartial(_: Partial<MsgAddAssetResponse>): MsgAddAssetResponse;
    fromAmino(_: MsgAddAssetResponseAmino): MsgAddAssetResponse;
    toAmino(_: MsgAddAssetResponse): MsgAddAssetResponseAmino;
    fromAminoMsg(object: MsgAddAssetResponseAminoMsg): MsgAddAssetResponse;
    fromProtoMsg(message: MsgAddAssetResponseProtoMsg): MsgAddAssetResponse;
    toProto(message: MsgAddAssetResponse): Uint8Array;
    toProtoMsg(message: MsgAddAssetResponse): MsgAddAssetResponseProtoMsg;
};
export declare const MsgUpdateAssetRequest: {
    typeUrl: string;
    encode(message: MsgUpdateAssetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAssetRequest;
    fromPartial(object: Partial<MsgUpdateAssetRequest>): MsgUpdateAssetRequest;
    fromAmino(object: MsgUpdateAssetRequestAmino): MsgUpdateAssetRequest;
    toAmino(message: MsgUpdateAssetRequest): MsgUpdateAssetRequestAmino;
    fromAminoMsg(object: MsgUpdateAssetRequestAminoMsg): MsgUpdateAssetRequest;
    fromProtoMsg(message: MsgUpdateAssetRequestProtoMsg): MsgUpdateAssetRequest;
    toProto(message: MsgUpdateAssetRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateAssetRequest): MsgUpdateAssetRequestProtoMsg;
};
export declare const MsgUpdateAssetResponse: {
    typeUrl: string;
    encode(_: MsgUpdateAssetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAssetResponse;
    fromPartial(_: Partial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse;
    fromAmino(_: MsgUpdateAssetResponseAmino): MsgUpdateAssetResponse;
    toAmino(_: MsgUpdateAssetResponse): MsgUpdateAssetResponseAmino;
    fromAminoMsg(object: MsgUpdateAssetResponseAminoMsg): MsgUpdateAssetResponse;
    fromProtoMsg(message: MsgUpdateAssetResponseProtoMsg): MsgUpdateAssetResponse;
    toProto(message: MsgUpdateAssetResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateAssetResponse): MsgUpdateAssetResponseProtoMsg;
};
export declare const MsgAddPairRequest: {
    typeUrl: string;
    encode(message: MsgAddPairRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPairRequest;
    fromPartial(object: Partial<MsgAddPairRequest>): MsgAddPairRequest;
    fromAmino(object: MsgAddPairRequestAmino): MsgAddPairRequest;
    toAmino(message: MsgAddPairRequest): MsgAddPairRequestAmino;
    fromAminoMsg(object: MsgAddPairRequestAminoMsg): MsgAddPairRequest;
    fromProtoMsg(message: MsgAddPairRequestProtoMsg): MsgAddPairRequest;
    toProto(message: MsgAddPairRequest): Uint8Array;
    toProtoMsg(message: MsgAddPairRequest): MsgAddPairRequestProtoMsg;
};
export declare const MsgAddPairResponse: {
    typeUrl: string;
    encode(_: MsgAddPairResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPairResponse;
    fromPartial(_: Partial<MsgAddPairResponse>): MsgAddPairResponse;
    fromAmino(_: MsgAddPairResponseAmino): MsgAddPairResponse;
    toAmino(_: MsgAddPairResponse): MsgAddPairResponseAmino;
    fromAminoMsg(object: MsgAddPairResponseAminoMsg): MsgAddPairResponse;
    fromProtoMsg(message: MsgAddPairResponseProtoMsg): MsgAddPairResponse;
    toProto(message: MsgAddPairResponse): Uint8Array;
    toProtoMsg(message: MsgAddPairResponse): MsgAddPairResponseProtoMsg;
};
export declare const MsgUpdatePairRequest: {
    typeUrl: string;
    encode(message: MsgUpdatePairRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePairRequest;
    fromPartial(object: Partial<MsgUpdatePairRequest>): MsgUpdatePairRequest;
    fromAmino(object: MsgUpdatePairRequestAmino): MsgUpdatePairRequest;
    toAmino(message: MsgUpdatePairRequest): MsgUpdatePairRequestAmino;
    fromAminoMsg(object: MsgUpdatePairRequestAminoMsg): MsgUpdatePairRequest;
    fromProtoMsg(message: MsgUpdatePairRequestProtoMsg): MsgUpdatePairRequest;
    toProto(message: MsgUpdatePairRequest): Uint8Array;
    toProtoMsg(message: MsgUpdatePairRequest): MsgUpdatePairRequestProtoMsg;
};
export declare const MsgUpdatePairResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePairResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePairResponse;
    fromPartial(_: Partial<MsgUpdatePairResponse>): MsgUpdatePairResponse;
    fromAmino(_: MsgUpdatePairResponseAmino): MsgUpdatePairResponse;
    toAmino(_: MsgUpdatePairResponse): MsgUpdatePairResponseAmino;
    fromAminoMsg(object: MsgUpdatePairResponseAminoMsg): MsgUpdatePairResponse;
    fromProtoMsg(message: MsgUpdatePairResponseProtoMsg): MsgUpdatePairResponse;
    toProto(message: MsgUpdatePairResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePairResponse): MsgUpdatePairResponseProtoMsg;
};
