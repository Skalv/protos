import { Height, HeightAmino, HeightSDKType } from "../../../ibc/core/client/v1/client";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgAddMarketRequest {
    from: string;
    symbol: string;
    scriptId: bigint;
    id: bigint;
}
export interface MsgAddMarketRequestProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgAddMarketRequest";
    value: Uint8Array;
}
export interface MsgAddMarketRequestAmino {
    from?: string;
    symbol?: string;
    script_id?: string;
    id?: string;
}
export interface MsgAddMarketRequestAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgAddMarketRequest";
    value: MsgAddMarketRequestAmino;
}
export interface MsgAddMarketRequestSDKType {
    from: string;
    symbol: string;
    script_id: bigint;
    id: bigint;
}
export interface MsgAddMarketResponse {
}
export interface MsgAddMarketResponseProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgAddMarketResponse";
    value: Uint8Array;
}
export interface MsgAddMarketResponseAmino {
}
export interface MsgAddMarketResponseAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgAddMarketResponse";
    value: MsgAddMarketResponseAmino;
}
export interface MsgAddMarketResponseSDKType {
}
export interface MsgUpdateMarketRequest {
    from: string;
    symbol: string;
    scriptId: bigint;
}
export interface MsgUpdateMarketRequestProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgUpdateMarketRequest";
    value: Uint8Array;
}
export interface MsgUpdateMarketRequestAmino {
    from?: string;
    symbol?: string;
    script_id?: string;
}
export interface MsgUpdateMarketRequestAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgUpdateMarketRequest";
    value: MsgUpdateMarketRequestAmino;
}
export interface MsgUpdateMarketRequestSDKType {
    from: string;
    symbol: string;
    script_id: bigint;
}
export interface MsgUpdateMarketResponse {
}
export interface MsgUpdateMarketResponseProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgUpdateMarketResponse";
    value: Uint8Array;
}
export interface MsgUpdateMarketResponseAmino {
}
export interface MsgUpdateMarketResponseAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgUpdateMarketResponse";
    value: MsgUpdateMarketResponseAmino;
}
export interface MsgUpdateMarketResponseSDKType {
}
export interface MsgRemoveMarketForAssetRequest {
    from: string;
    id: bigint;
    symbol: string;
}
export interface MsgRemoveMarketForAssetRequestProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetRequest";
    value: Uint8Array;
}
export interface MsgRemoveMarketForAssetRequestAmino {
    from?: string;
    id?: string;
    symbol?: string;
}
export interface MsgRemoveMarketForAssetRequestAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetRequest";
    value: MsgRemoveMarketForAssetRequestAmino;
}
export interface MsgRemoveMarketForAssetRequestSDKType {
    from: string;
    id: bigint;
    symbol: string;
}
export interface MsgRemoveMarketForAssetResponse {
}
export interface MsgRemoveMarketForAssetResponseProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetResponse";
    value: Uint8Array;
}
export interface MsgRemoveMarketForAssetResponseAmino {
}
export interface MsgRemoveMarketForAssetResponseAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgRemoveMarketForAssetResponse";
    value: MsgRemoveMarketForAssetResponseAmino;
}
export interface MsgRemoveMarketForAssetResponseSDKType {
}
export interface MsgFetchPriceRequest {
    from: string;
    sourcePort: string;
    sourceChannel: string;
    timeoutHeight: Height;
    timeoutTimestamp: bigint;
    symbols: string[];
    scriptId: bigint;
    feeLimit: Coin[];
    prepareGas: bigint;
    executeGas: bigint;
}
export interface MsgFetchPriceRequestProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgFetchPriceRequest";
    value: Uint8Array;
}
export interface MsgFetchPriceRequestAmino {
    from?: string;
    source_port?: string;
    source_channel?: string;
    timeout_height?: HeightAmino;
    timeout_timestamp?: string;
    symbols?: string[];
    script_id?: string;
    fee_limit?: CoinAmino[];
    prepare_gas?: string;
    execute_gas?: string;
}
export interface MsgFetchPriceRequestAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgFetchPriceRequest";
    value: MsgFetchPriceRequestAmino;
}
export interface MsgFetchPriceRequestSDKType {
    from: string;
    source_port: string;
    source_channel: string;
    timeout_height: HeightSDKType;
    timeout_timestamp: bigint;
    symbols: string[];
    script_id: bigint;
    fee_limit: CoinSDKType[];
    prepare_gas: bigint;
    execute_gas: bigint;
}
export interface MsgFetchPriceResponse {
}
export interface MsgFetchPriceResponseProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.MsgFetchPriceResponse";
    value: Uint8Array;
}
export interface MsgFetchPriceResponseAmino {
}
export interface MsgFetchPriceResponseAminoMsg {
    type: "/comdex.oracle.v1beta1.MsgFetchPriceResponse";
    value: MsgFetchPriceResponseAmino;
}
export interface MsgFetchPriceResponseSDKType {
}
export declare const MsgAddMarketRequest: {
    typeUrl: string;
    encode(message: MsgAddMarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddMarketRequest;
    fromPartial(object: Partial<MsgAddMarketRequest>): MsgAddMarketRequest;
    fromAmino(object: MsgAddMarketRequestAmino): MsgAddMarketRequest;
    toAmino(message: MsgAddMarketRequest): MsgAddMarketRequestAmino;
    fromAminoMsg(object: MsgAddMarketRequestAminoMsg): MsgAddMarketRequest;
    fromProtoMsg(message: MsgAddMarketRequestProtoMsg): MsgAddMarketRequest;
    toProto(message: MsgAddMarketRequest): Uint8Array;
    toProtoMsg(message: MsgAddMarketRequest): MsgAddMarketRequestProtoMsg;
};
export declare const MsgAddMarketResponse: {
    typeUrl: string;
    encode(_: MsgAddMarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddMarketResponse;
    fromPartial(_: Partial<MsgAddMarketResponse>): MsgAddMarketResponse;
    fromAmino(_: MsgAddMarketResponseAmino): MsgAddMarketResponse;
    toAmino(_: MsgAddMarketResponse): MsgAddMarketResponseAmino;
    fromAminoMsg(object: MsgAddMarketResponseAminoMsg): MsgAddMarketResponse;
    fromProtoMsg(message: MsgAddMarketResponseProtoMsg): MsgAddMarketResponse;
    toProto(message: MsgAddMarketResponse): Uint8Array;
    toProtoMsg(message: MsgAddMarketResponse): MsgAddMarketResponseProtoMsg;
};
export declare const MsgUpdateMarketRequest: {
    typeUrl: string;
    encode(message: MsgUpdateMarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMarketRequest;
    fromPartial(object: Partial<MsgUpdateMarketRequest>): MsgUpdateMarketRequest;
    fromAmino(object: MsgUpdateMarketRequestAmino): MsgUpdateMarketRequest;
    toAmino(message: MsgUpdateMarketRequest): MsgUpdateMarketRequestAmino;
    fromAminoMsg(object: MsgUpdateMarketRequestAminoMsg): MsgUpdateMarketRequest;
    fromProtoMsg(message: MsgUpdateMarketRequestProtoMsg): MsgUpdateMarketRequest;
    toProto(message: MsgUpdateMarketRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateMarketRequest): MsgUpdateMarketRequestProtoMsg;
};
export declare const MsgUpdateMarketResponse: {
    typeUrl: string;
    encode(_: MsgUpdateMarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMarketResponse;
    fromPartial(_: Partial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse;
    fromAmino(_: MsgUpdateMarketResponseAmino): MsgUpdateMarketResponse;
    toAmino(_: MsgUpdateMarketResponse): MsgUpdateMarketResponseAmino;
    fromAminoMsg(object: MsgUpdateMarketResponseAminoMsg): MsgUpdateMarketResponse;
    fromProtoMsg(message: MsgUpdateMarketResponseProtoMsg): MsgUpdateMarketResponse;
    toProto(message: MsgUpdateMarketResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateMarketResponse): MsgUpdateMarketResponseProtoMsg;
};
export declare const MsgRemoveMarketForAssetRequest: {
    typeUrl: string;
    encode(message: MsgRemoveMarketForAssetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMarketForAssetRequest;
    fromPartial(object: Partial<MsgRemoveMarketForAssetRequest>): MsgRemoveMarketForAssetRequest;
    fromAmino(object: MsgRemoveMarketForAssetRequestAmino): MsgRemoveMarketForAssetRequest;
    toAmino(message: MsgRemoveMarketForAssetRequest): MsgRemoveMarketForAssetRequestAmino;
    fromAminoMsg(object: MsgRemoveMarketForAssetRequestAminoMsg): MsgRemoveMarketForAssetRequest;
    fromProtoMsg(message: MsgRemoveMarketForAssetRequestProtoMsg): MsgRemoveMarketForAssetRequest;
    toProto(message: MsgRemoveMarketForAssetRequest): Uint8Array;
    toProtoMsg(message: MsgRemoveMarketForAssetRequest): MsgRemoveMarketForAssetRequestProtoMsg;
};
export declare const MsgRemoveMarketForAssetResponse: {
    typeUrl: string;
    encode(_: MsgRemoveMarketForAssetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMarketForAssetResponse;
    fromPartial(_: Partial<MsgRemoveMarketForAssetResponse>): MsgRemoveMarketForAssetResponse;
    fromAmino(_: MsgRemoveMarketForAssetResponseAmino): MsgRemoveMarketForAssetResponse;
    toAmino(_: MsgRemoveMarketForAssetResponse): MsgRemoveMarketForAssetResponseAmino;
    fromAminoMsg(object: MsgRemoveMarketForAssetResponseAminoMsg): MsgRemoveMarketForAssetResponse;
    fromProtoMsg(message: MsgRemoveMarketForAssetResponseProtoMsg): MsgRemoveMarketForAssetResponse;
    toProto(message: MsgRemoveMarketForAssetResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveMarketForAssetResponse): MsgRemoveMarketForAssetResponseProtoMsg;
};
export declare const MsgFetchPriceRequest: {
    typeUrl: string;
    encode(message: MsgFetchPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFetchPriceRequest;
    fromPartial(object: Partial<MsgFetchPriceRequest>): MsgFetchPriceRequest;
    fromAmino(object: MsgFetchPriceRequestAmino): MsgFetchPriceRequest;
    toAmino(message: MsgFetchPriceRequest): MsgFetchPriceRequestAmino;
    fromAminoMsg(object: MsgFetchPriceRequestAminoMsg): MsgFetchPriceRequest;
    fromProtoMsg(message: MsgFetchPriceRequestProtoMsg): MsgFetchPriceRequest;
    toProto(message: MsgFetchPriceRequest): Uint8Array;
    toProtoMsg(message: MsgFetchPriceRequest): MsgFetchPriceRequestProtoMsg;
};
export declare const MsgFetchPriceResponse: {
    typeUrl: string;
    encode(_: MsgFetchPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFetchPriceResponse;
    fromPartial(_: Partial<MsgFetchPriceResponse>): MsgFetchPriceResponse;
    fromAmino(_: MsgFetchPriceResponseAmino): MsgFetchPriceResponse;
    toAmino(_: MsgFetchPriceResponse): MsgFetchPriceResponseAmino;
    fromAminoMsg(object: MsgFetchPriceResponseAminoMsg): MsgFetchPriceResponse;
    fromProtoMsg(message: MsgFetchPriceResponseProtoMsg): MsgFetchPriceResponse;
    toProto(message: MsgFetchPriceResponse): Uint8Array;
    toProtoMsg(message: MsgFetchPriceResponse): MsgFetchPriceResponseProtoMsg;
};
