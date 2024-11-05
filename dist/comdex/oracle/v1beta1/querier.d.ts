import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Market, MarketAmino, MarketSDKType } from "./oracle";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface QueryMarketsRequest {
    pagination?: PageRequest;
}
export interface QueryMarketsRequestProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketsRequest";
    value: Uint8Array;
}
export interface QueryMarketsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryMarketsRequestAminoMsg {
    type: "/comdex.oracle.v1beta1.QueryMarketsRequest";
    value: QueryMarketsRequestAmino;
}
export interface QueryMarketsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryMarketsResponse {
    markets: Market[];
    pagination?: PageResponse;
}
export interface QueryMarketsResponseProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketsResponse";
    value: Uint8Array;
}
export interface QueryMarketsResponseAmino {
    markets?: MarketAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryMarketsResponseAminoMsg {
    type: "/comdex.oracle.v1beta1.QueryMarketsResponse";
    value: QueryMarketsResponseAmino;
}
export interface QueryMarketsResponseSDKType {
    markets: MarketSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryMarketRequest {
    symbol: string;
}
export interface QueryMarketRequestProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketRequest";
    value: Uint8Array;
}
export interface QueryMarketRequestAmino {
    symbol?: string;
}
export interface QueryMarketRequestAminoMsg {
    type: "/comdex.oracle.v1beta1.QueryMarketRequest";
    value: QueryMarketRequestAmino;
}
export interface QueryMarketRequestSDKType {
    symbol: string;
}
export interface QueryMarketResponse {
    market: Market;
}
export interface QueryMarketResponseProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.QueryMarketResponse";
    value: Uint8Array;
}
export interface QueryMarketResponseAmino {
    market?: MarketAmino;
}
export interface QueryMarketResponseAminoMsg {
    type: "/comdex.oracle.v1beta1.QueryMarketResponse";
    value: QueryMarketResponseAmino;
}
export interface QueryMarketResponseSDKType {
    market: MarketSDKType;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/comdex.oracle.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/comdex.oracle.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/comdex.oracle.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryMarketsRequest: {
    typeUrl: string;
    encode(message: QueryMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketsRequest;
    fromPartial(object: Partial<QueryMarketsRequest>): QueryMarketsRequest;
    fromAmino(object: QueryMarketsRequestAmino): QueryMarketsRequest;
    toAmino(message: QueryMarketsRequest): QueryMarketsRequestAmino;
    fromAminoMsg(object: QueryMarketsRequestAminoMsg): QueryMarketsRequest;
    fromProtoMsg(message: QueryMarketsRequestProtoMsg): QueryMarketsRequest;
    toProto(message: QueryMarketsRequest): Uint8Array;
    toProtoMsg(message: QueryMarketsRequest): QueryMarketsRequestProtoMsg;
};
export declare const QueryMarketsResponse: {
    typeUrl: string;
    encode(message: QueryMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketsResponse;
    fromPartial(object: Partial<QueryMarketsResponse>): QueryMarketsResponse;
    fromAmino(object: QueryMarketsResponseAmino): QueryMarketsResponse;
    toAmino(message: QueryMarketsResponse): QueryMarketsResponseAmino;
    fromAminoMsg(object: QueryMarketsResponseAminoMsg): QueryMarketsResponse;
    fromProtoMsg(message: QueryMarketsResponseProtoMsg): QueryMarketsResponse;
    toProto(message: QueryMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryMarketsResponse): QueryMarketsResponseProtoMsg;
};
export declare const QueryMarketRequest: {
    typeUrl: string;
    encode(message: QueryMarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketRequest;
    fromPartial(object: Partial<QueryMarketRequest>): QueryMarketRequest;
    fromAmino(object: QueryMarketRequestAmino): QueryMarketRequest;
    toAmino(message: QueryMarketRequest): QueryMarketRequestAmino;
    fromAminoMsg(object: QueryMarketRequestAminoMsg): QueryMarketRequest;
    fromProtoMsg(message: QueryMarketRequestProtoMsg): QueryMarketRequest;
    toProto(message: QueryMarketRequest): Uint8Array;
    toProtoMsg(message: QueryMarketRequest): QueryMarketRequestProtoMsg;
};
export declare const QueryMarketResponse: {
    typeUrl: string;
    encode(message: QueryMarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketResponse;
    fromPartial(object: Partial<QueryMarketResponse>): QueryMarketResponse;
    fromAmino(object: QueryMarketResponseAmino): QueryMarketResponse;
    toAmino(message: QueryMarketResponse): QueryMarketResponseAmino;
    fromAminoMsg(object: QueryMarketResponseAminoMsg): QueryMarketResponse;
    fromProtoMsg(message: QueryMarketResponseProtoMsg): QueryMarketResponse;
    toProto(message: QueryMarketResponse): Uint8Array;
    toProtoMsg(message: QueryMarketResponse): QueryMarketResponseProtoMsg;
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
