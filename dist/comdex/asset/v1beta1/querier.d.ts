import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset, AssetAmino, AssetSDKType } from "./asset";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface QueryAssetsRequest {
    pagination?: PageRequest;
}
export interface QueryAssetsRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest";
    value: Uint8Array;
}
export interface QueryAssetsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAssetsRequestAminoMsg {
    type: "/comdex.asset.v1beta1.QueryAssetsRequest";
    value: QueryAssetsRequestAmino;
}
export interface QueryAssetsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAssetsResponse {
    assets: Asset[];
    pagination?: PageResponse;
}
export interface QueryAssetsResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse";
    value: Uint8Array;
}
export interface QueryAssetsResponseAmino {
    assets?: AssetAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAssetsResponseAminoMsg {
    type: "/comdex.asset.v1beta1.QueryAssetsResponse";
    value: QueryAssetsResponseAmino;
}
export interface QueryAssetsResponseSDKType {
    assets: AssetSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAssetRequest {
    id: bigint;
}
export interface QueryAssetRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest";
    value: Uint8Array;
}
export interface QueryAssetRequestAmino {
    id?: string;
}
export interface QueryAssetRequestAminoMsg {
    type: "/comdex.asset.v1beta1.QueryAssetRequest";
    value: QueryAssetRequestAmino;
}
export interface QueryAssetRequestSDKType {
    id: bigint;
}
export interface QueryAssetResponse {
    asset: Asset;
}
export interface QueryAssetResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse";
    value: Uint8Array;
}
export interface QueryAssetResponseAmino {
    asset?: AssetAmino;
}
export interface QueryAssetResponseAminoMsg {
    type: "/comdex.asset.v1beta1.QueryAssetResponse";
    value: QueryAssetResponseAmino;
}
export interface QueryAssetResponseSDKType {
    asset: AssetSDKType;
}
export interface PairInfo {
    id: bigint;
    assetIn: bigint;
    denomIn: string;
    assetOut: bigint;
    denomOut: string;
    liquidationRatio: string;
}
export interface PairInfoProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.PairInfo";
    value: Uint8Array;
}
export interface PairInfoAmino {
    id?: string;
    asset_in?: string;
    denom_in?: string;
    asset_out?: string;
    denom_out?: string;
    liquidation_ratio?: string;
}
export interface PairInfoAminoMsg {
    type: "/comdex.asset.v1beta1.PairInfo";
    value: PairInfoAmino;
}
export interface PairInfoSDKType {
    id: bigint;
    asset_in: bigint;
    denom_in: string;
    asset_out: bigint;
    denom_out: string;
    liquidation_ratio: string;
}
export interface QueryPairsRequest {
    pagination?: PageRequest;
}
export interface QueryPairsRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest";
    value: Uint8Array;
}
export interface QueryPairsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryPairsRequestAminoMsg {
    type: "/comdex.asset.v1beta1.QueryPairsRequest";
    value: QueryPairsRequestAmino;
}
export interface QueryPairsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPairsResponse {
    pairsInfo: PairInfo[];
    pagination?: PageResponse;
}
export interface QueryPairsResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse";
    value: Uint8Array;
}
export interface QueryPairsResponseAmino {
    pairsInfo?: PairInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPairsResponseAminoMsg {
    type: "/comdex.asset.v1beta1.QueryPairsResponse";
    value: QueryPairsResponseAmino;
}
export interface QueryPairsResponseSDKType {
    pairsInfo: PairInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryPairRequest {
    id: bigint;
}
export interface QueryPairRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryPairRequest";
    value: Uint8Array;
}
export interface QueryPairRequestAmino {
    id?: string;
}
export interface QueryPairRequestAminoMsg {
    type: "/comdex.asset.v1beta1.QueryPairRequest";
    value: QueryPairRequestAmino;
}
export interface QueryPairRequestSDKType {
    id: bigint;
}
export interface QueryPairResponse {
    pairInfo: PairInfo;
}
export interface QueryPairResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryPairResponse";
    value: Uint8Array;
}
export interface QueryPairResponseAmino {
    pairInfo?: PairInfoAmino;
}
export interface QueryPairResponseAminoMsg {
    type: "/comdex.asset.v1beta1.QueryPairResponse";
    value: QueryPairResponseAmino;
}
export interface QueryPairResponseSDKType {
    pairInfo: PairInfoSDKType;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/comdex.asset.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/comdex.asset.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryAssetsRequest: {
    typeUrl: string;
    encode(message: QueryAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsRequest;
    fromPartial(object: Partial<QueryAssetsRequest>): QueryAssetsRequest;
    fromAmino(object: QueryAssetsRequestAmino): QueryAssetsRequest;
    toAmino(message: QueryAssetsRequest): QueryAssetsRequestAmino;
    fromAminoMsg(object: QueryAssetsRequestAminoMsg): QueryAssetsRequest;
    fromProtoMsg(message: QueryAssetsRequestProtoMsg): QueryAssetsRequest;
    toProto(message: QueryAssetsRequest): Uint8Array;
    toProtoMsg(message: QueryAssetsRequest): QueryAssetsRequestProtoMsg;
};
export declare const QueryAssetsResponse: {
    typeUrl: string;
    encode(message: QueryAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsResponse;
    fromPartial(object: Partial<QueryAssetsResponse>): QueryAssetsResponse;
    fromAmino(object: QueryAssetsResponseAmino): QueryAssetsResponse;
    toAmino(message: QueryAssetsResponse): QueryAssetsResponseAmino;
    fromAminoMsg(object: QueryAssetsResponseAminoMsg): QueryAssetsResponse;
    fromProtoMsg(message: QueryAssetsResponseProtoMsg): QueryAssetsResponse;
    toProto(message: QueryAssetsResponse): Uint8Array;
    toProtoMsg(message: QueryAssetsResponse): QueryAssetsResponseProtoMsg;
};
export declare const QueryAssetRequest: {
    typeUrl: string;
    encode(message: QueryAssetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetRequest;
    fromPartial(object: Partial<QueryAssetRequest>): QueryAssetRequest;
    fromAmino(object: QueryAssetRequestAmino): QueryAssetRequest;
    toAmino(message: QueryAssetRequest): QueryAssetRequestAmino;
    fromAminoMsg(object: QueryAssetRequestAminoMsg): QueryAssetRequest;
    fromProtoMsg(message: QueryAssetRequestProtoMsg): QueryAssetRequest;
    toProto(message: QueryAssetRequest): Uint8Array;
    toProtoMsg(message: QueryAssetRequest): QueryAssetRequestProtoMsg;
};
export declare const QueryAssetResponse: {
    typeUrl: string;
    encode(message: QueryAssetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetResponse;
    fromPartial(object: Partial<QueryAssetResponse>): QueryAssetResponse;
    fromAmino(object: QueryAssetResponseAmino): QueryAssetResponse;
    toAmino(message: QueryAssetResponse): QueryAssetResponseAmino;
    fromAminoMsg(object: QueryAssetResponseAminoMsg): QueryAssetResponse;
    fromProtoMsg(message: QueryAssetResponseProtoMsg): QueryAssetResponse;
    toProto(message: QueryAssetResponse): Uint8Array;
    toProtoMsg(message: QueryAssetResponse): QueryAssetResponseProtoMsg;
};
export declare const PairInfo: {
    typeUrl: string;
    encode(message: PairInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PairInfo;
    fromPartial(object: Partial<PairInfo>): PairInfo;
    fromAmino(object: PairInfoAmino): PairInfo;
    toAmino(message: PairInfo): PairInfoAmino;
    fromAminoMsg(object: PairInfoAminoMsg): PairInfo;
    fromProtoMsg(message: PairInfoProtoMsg): PairInfo;
    toProto(message: PairInfo): Uint8Array;
    toProtoMsg(message: PairInfo): PairInfoProtoMsg;
};
export declare const QueryPairsRequest: {
    typeUrl: string;
    encode(message: QueryPairsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPairsRequest;
    fromPartial(object: Partial<QueryPairsRequest>): QueryPairsRequest;
    fromAmino(object: QueryPairsRequestAmino): QueryPairsRequest;
    toAmino(message: QueryPairsRequest): QueryPairsRequestAmino;
    fromAminoMsg(object: QueryPairsRequestAminoMsg): QueryPairsRequest;
    fromProtoMsg(message: QueryPairsRequestProtoMsg): QueryPairsRequest;
    toProto(message: QueryPairsRequest): Uint8Array;
    toProtoMsg(message: QueryPairsRequest): QueryPairsRequestProtoMsg;
};
export declare const QueryPairsResponse: {
    typeUrl: string;
    encode(message: QueryPairsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPairsResponse;
    fromPartial(object: Partial<QueryPairsResponse>): QueryPairsResponse;
    fromAmino(object: QueryPairsResponseAmino): QueryPairsResponse;
    toAmino(message: QueryPairsResponse): QueryPairsResponseAmino;
    fromAminoMsg(object: QueryPairsResponseAminoMsg): QueryPairsResponse;
    fromProtoMsg(message: QueryPairsResponseProtoMsg): QueryPairsResponse;
    toProto(message: QueryPairsResponse): Uint8Array;
    toProtoMsg(message: QueryPairsResponse): QueryPairsResponseProtoMsg;
};
export declare const QueryPairRequest: {
    typeUrl: string;
    encode(message: QueryPairRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPairRequest;
    fromPartial(object: Partial<QueryPairRequest>): QueryPairRequest;
    fromAmino(object: QueryPairRequestAmino): QueryPairRequest;
    toAmino(message: QueryPairRequest): QueryPairRequestAmino;
    fromAminoMsg(object: QueryPairRequestAminoMsg): QueryPairRequest;
    fromProtoMsg(message: QueryPairRequestProtoMsg): QueryPairRequest;
    toProto(message: QueryPairRequest): Uint8Array;
    toProtoMsg(message: QueryPairRequest): QueryPairRequestProtoMsg;
};
export declare const QueryPairResponse: {
    typeUrl: string;
    encode(message: QueryPairResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPairResponse;
    fromPartial(object: Partial<QueryPairResponse>): QueryPairResponse;
    fromAmino(object: QueryPairResponseAmino): QueryPairResponse;
    toAmino(message: QueryPairResponse): QueryPairResponseAmino;
    fromAminoMsg(object: QueryPairResponseAminoMsg): QueryPairResponse;
    fromProtoMsg(message: QueryPairResponseProtoMsg): QueryPairResponse;
    toProto(message: QueryPairResponse): Uint8Array;
    toProtoMsg(message: QueryPairResponse): QueryPairResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
